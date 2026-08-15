// Универсальный React-остров для рендера любого калькулятора по data-конфигу.
// Поля рендерятся динамически из CalculatorDef.fields, расчет выполняется
// функцией из реестра runners по идентификатору калькулятора.

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertCircle,
  ArrowRightLeft,
  Calculator as CalculatorIcon,
  Check,
  Copy,
  Link2,
  Pencil,
  Plus,
  Printer,
  RotateCcw,
  X,
} from 'lucide-react';
import type { CalculatorDef, Field, CalcResult } from '../../lib/types';
import { runners } from '../../lib/runners';
import { localizedResultLabel, localizedResultText, type Locale } from '../../lib/clientI18n';
import { parseLocalizedNumber } from '../../lib/format';
import { parseExcludedDates } from '../../lib/calculators/workingDays';
import {
  buildCalculatorQueryString,
  buildHydrationValues,
  buildInitialValues,
  readValuesFromSearch,
  type ShareFormValues,
} from '../../lib/shareLink';
import { trackAnalyticsEvent } from '../../lib/analytics';
import {
  calculatorCopy,
  excludedDatesCopy,
  shareWarningCopy,
  swapCopy,
} from './calculator/copy';
import {
  EMPTY_ERRORS,
  isVisible,
  validateValues,
} from './calculator/validation';

type Props = {
  calc: Pick<CalculatorDef, 'id' | 'name' | 'resultTitle' | 'category' | 'fields' | 'disclaimer'>;
  locale?: Locale;
};

type FormValues = ShareFormValues;

// Считывает значения из ?query= на текущем URL и накладывает поверх defaults.
function readValuesFromUrl(fields: Field[], base: FormValues, locale: Locale): FormValues {
  if (typeof window === 'undefined') return base;
  return readValuesFromSearch(fields, base, window.location.search, locale);
}

// Значения, которые пользователь успел поменять в SSR-разметке до того, как React
// гидрировал остров. Отличить их помогает сам DOM: у изменённого контрола текущее
// значение расходится с тем, что отрендерил сервер (value-атрибут / selected /
// checked). Читается один раз в фазе рендера — до того, как React запишет в DOM
// значения контролируемых полей и затрёт ввод.
function readPreHydrationEdits(fields: Field[]): FormValues {
  const edits: FormValues = {};
  if (typeof document === 'undefined') return edits;

  for (const field of fields) {
    const element = document.getElementById(`f-${field.name}`);
    if (!element) continue;

    if (field.type === 'select' && element instanceof HTMLSelectElement) {
      const serverValue = Array.from(element.options).find((option) => option.defaultSelected)?.value;
      if (serverValue !== undefined && element.value !== serverValue) edits[field.name] = element.value;
      continue;
    }

    if (field.type === 'textarea' && element instanceof HTMLTextAreaElement) {
      if (element.value !== element.defaultValue) edits[field.name] = element.value;
      continue;
    }

    // toggle рендерится кнопками, а excludedDates — своим полем-черновиком:
    // у них нет серверного значения, которое пользователь мог бы изменить.
    if (element instanceof HTMLInputElement) {
      if (field.type === 'checkbox') {
        if (element.checked !== element.defaultChecked) edits[field.name] = element.checked;
      } else if (field.type === 'number' || field.type === 'date') {
        if (element.value !== element.defaultValue) edits[field.name] = element.value;
      }
    }
  }

  return edits;
}

function normalizeValues(fields: Field[], values: FormValues, locale: Locale): FormValues {
  const normalized = { ...values };
  for (const field of fields) {
    if (field.type !== 'number') continue;
    const raw = values[field.name];
    if (typeof raw === 'boolean') continue;
    const parsed = parseLocalizedNumber(String(raw ?? ''), locale);
    if (parsed !== null) normalized[field.name] = parsed;
  }
  return normalized;
}

function contextualField(field: Field, calculatorId: string, values: FormValues, locale: Locale): Field {
  if (calculatorId !== 'percent-calculator' || (field.name !== 'a' && field.name !== 'b')) return field;
  const mode = String(values.mode ?? 'of');
  const labels = {
    ru: {
      percentage: 'Процент', number: 'Число', part: 'Часть', whole: 'Целое', start: 'Начальное значение', end: 'Конечное значение',
    },
    en: {
      percentage: 'Percentage', number: 'Number', part: 'Part', whole: 'Whole', start: 'Starting value', end: 'Final value',
    },
    uk: {
      percentage: 'Відсоток', number: 'Число', part: 'Частина', whole: 'Ціле', start: 'Початкове значення', end: 'Кінцеве значення',
    },
  } as const;
  const copy = labels[locale === 'ru' || locale === 'uk' ? locale : 'en'];
  if (mode === 'what') return { ...field, label: field.name === 'a' ? copy.part : copy.whole };
  if (mode === 'change') return { ...field, label: field.name === 'a' ? copy.start : copy.end };
  return { ...field, label: field.name === 'a' ? copy.percentage : copy.number };
}

function translateLabel(label: string, locale: Locale): string {
  return localizedResultLabel(label, locale);
}

function localizeResult(result: CalcResult, locale: Locale): CalcResult {
  if (locale === 'ru') return result;
  return {
    ...result,
    primary: {
      label: translateLabel(result.primary.label, locale),
      value: localizedResultText(result.primary.value, locale),
    },
    secondary: result.secondary.map((row) => ({
      ...row,
      label: translateLabel(row.label, locale),
      value: localizedResultText(row.value, locale),
    })),
    table: result.table
      ? {
          ...result.table,
          title: result.table.title ? translateLabel(result.table.title, locale) : result.table.title,
          columns: result.table.columns.map((column) => translateLabel(column, locale)),
          rows: result.table.rows.map((row) => row.map((cell) => localizedResultText(cell, locale))),
          note: result.table.note ? localizedResultText(result.table.note, locale) : result.table.note,
        }
      : undefined,
    note: result.note ? localizedResultText(result.note, locale) : result.note,
  };
}

function resultToText(calc: Pick<CalculatorDef, 'name'>, result: CalcResult, locale: Locale): string {
  const copy = calculatorCopy(locale);
  const secondary = result.secondary
    .map((row) => `${row.label}: ${row.value}`)
    .join('\n');
  return [
    calc.name,
    `${result.primary.label}: ${result.primary.value}`,
    secondary,
    result.note ? `${copy.note}: ${result.note}` : '',
  ].filter(Boolean).join('\n');
}

function fallbackCopy(text: string): boolean {
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

function defaultHelpForField(field: Field, locale: Locale): string {
  if (field.help) return field.help;
  const copy = calculatorCopy(locale);
  const name = field.name.toLowerCase();
  const label = field.label.toLowerCase();

  if (field.type === 'date') return copy.dateHelp;
  if (field.type === 'textarea') return copy.textareaHelp;
  if (name.includes('rate') || label.includes('ставк')) return copy.rateHelp;
  if (name.includes('amount') || name.includes('price') || label.includes('сумм') || label.includes('цен')) return copy.amountHelp;
  if (name.includes('month') || name.includes('year') || label.includes('срок')) return copy.integerHelp;
  if (name.includes('height') || name.includes('weight') || name.includes('length') || name.includes('width') || label.includes('размер')) return copy.unitHelp;
  if (name.includes('reserve') || label.includes('запас')) return copy.reserveHelp;
  return '';
}

function ResultBlock({
  result,
  onCopy,
  onEdit,
  onPrint,
  copied,
  locale,
}: {
  result: CalcResult;
  onCopy: () => void;
  onEdit: () => void;
  onPrint: () => void;
  copied: boolean;
  locale: Locale;
}) {
  const copy = calculatorCopy(locale);

  return (
    <div
      className="overflow-hidden rounded-3xl border border-ink-200 bg-ink-50 shadow-[0_18px_48px_rgba(61,48,133,0.11)]"
      data-testid="calc-result"
    >
      <div className="border-b border-accent-100 bg-gradient-to-br from-white via-white to-accent-50 p-5 sm:p-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-wider text-ink-500">
              {result.primary.label}
            </div>
            <div
              className="mt-2 font-mono text-3xl font-semibold tracking-[-0.04em] text-accent [overflow-wrap:anywhere] sm:text-4xl"
              data-testid="calc-result-primary"
            >
              {result.primary.value}
            </div>
          </div>
          <div className="flex shrink-0 gap-2 self-end print-hide sm:self-auto">
            <button
              type="button"
              onClick={onEdit}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200 bg-white text-ink-700 shadow-sm transition-colors hover:border-accent-100 hover:text-accent"
              aria-label={copy.editInputs}
              title={copy.editInputs}
              data-testid="calc-edit-inputs-btn"
            >
              <Pencil size={16} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onPrint}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200 bg-white text-ink-700 shadow-sm transition-colors hover:border-accent-100 hover:text-accent"
              aria-label={copy.printResult}
              title={copy.printResult}
              data-testid="calc-print-btn"
            >
              <Printer size={17} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onCopy}
              className={[
                'inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-white shadow-sm transition-colors',
                copied
                  ? 'border-emerald-700 bg-emerald-50 text-emerald-700'
                  : 'border-ink-200 text-ink-700 hover:border-accent-100 hover:text-accent',
              ].join(' ')}
              aria-label={copied ? copy.resultCopied : copy.copyResult}
              title={copied ? copy.resultCopied : copy.copyResult}
              data-testid="calc-copy-result-btn"
            >
              {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <dl className="divide-y divide-ink-200">
        {result.secondary.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-1 items-baseline gap-1 px-4 py-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,auto)] sm:gap-4 sm:px-6"
            data-testid={`calc-result-row-${i}`}
          >
            <dt className="min-w-0 text-sm text-ink-500 text-fit">{row.label}</dt>
            <dd
              className={[
                'min-w-0 font-mono text-sm font-medium tabular-nums text-left [overflow-wrap:anywhere] sm:text-right',
                row.accent === 'green' ? 'text-emerald-700' : '',
                row.accent === 'red' ? 'text-accent' : '',
                !row.accent || row.accent === 'neutral' ? 'text-ink-900' : '',
              ].join(' ')}
            >
              {row.href ? (
                <a
                  href={row.href}
                  className="underline underline-offset-4 hover:text-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  {row.value}
                </a>
              ) : row.value}
            </dd>
          </div>
        ))}
      </dl>

      {result.table && (
        <div className="border-t border-ink-200 overflow-x-auto">
          {result.table.title && (
            <div className="px-4 pt-4 text-xs uppercase tracking-wider text-ink-500 sm:px-6">
              {result.table.title}
            </div>
          )}
          <table className="min-w-max w-full text-sm">
            <caption className="sr-only">
              {result.table.title ?? copy.tableCaption}
            </caption>
            <thead>
              <tr className="text-ink-500">
                {result.table.columns.map((c, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="whitespace-nowrap px-4 py-2 text-left font-medium border-b border-ink-200 sm:px-6"
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {result.table.rows.map((row, i) => (
                <tr key={i} className="border-b border-ink-100 last:border-b-0">
                  {row.map((cell, j) => (
                    <td key={j} className="whitespace-nowrap px-4 py-2 font-mono tabular-nums sm:px-6">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {result.note && (
        <p className="px-4 py-3 text-xs text-ink-500 border-t border-ink-200 sm:px-6">
          {result.note}
        </p>
      )}
    </div>
  );
}

// Черновик поля исключаемых дат — не значение калькулятора, а внутреннее состояние
// UI, поэтому его нельзя восстанавливать через readPreHydrationEdits: попав в values,
// он сразу стал бы полноценной исключённой датой. Механика та же: читаем DOM в фазе
// первого рендера, пока React ещё не переписал контролируемый input, а применяем уже
// после монтирования — так первый рендер остаётся совпадающим с серверным.
function readPreHydrationDraft(fieldId: string): string {
  if (typeof document === 'undefined') return '';
  const element = document.getElementById(fieldId);
  if (!(element instanceof HTMLInputElement)) return '';
  return element.value !== element.defaultValue ? element.value : '';
}

function ExcludedDatesField({
  field,
  value,
  error,
  onChange,
  locale,
  describedBy,
  helpId,
  errorId,
}: {
  field: Field;
  value: string;
  error?: string;
  onChange: (next: string | number | boolean) => void;
  locale: Locale;
  describedBy?: string;
  helpId: string;
  errorId: string;
}) {
  const fieldId = `f-${field.name}`;
  const [draft, setDraft] = useState('');
  const [preHydrationDraft] = useState(() => readPreHydrationDraft(fieldId));

  useEffect(() => {
    if (preHydrationDraft) setDraft(preHydrationDraft);
  }, [preHydrationDraft]);

  const copy = excludedDatesCopy(locale);
  const tokens = value.split(/[,;\n]+/).map((item) => item.trim()).filter(Boolean);
  const invalidTokens = new Set(parseExcludedDates(value).invalid);

  const addDate = () => {
    if (!draft || tokens.includes(draft)) return;
    onChange([...tokens, draft].join(','));
    setDraft('');
  };

  const removeDate = (date: string) => {
    onChange(tokens.filter((item) => item !== date).join(','));
  };

  return (
    <div>
      <label htmlFor={fieldId} className="field-label text-fit" data-testid={`field-label-${field.name}`}>
        {field.label}
      </label>
      <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto]">
        <input
          id={fieldId}
          data-testid={`field-${field.name}`}
          type="date"
          className="field-input font-mono"
          aria-describedby={describedBy}
          aria-invalid={error ? 'true' : undefined}
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              addDate();
            }
          }}
        />
        <button
          type="button"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-700 transition-colors hover:border-accent-100 hover:bg-accent-50 hover:text-accent disabled:cursor-not-allowed disabled:text-ink-400"
          disabled={!draft}
          onClick={addDate}
          data-testid="excluded-date-add"
        >
          <Plus size={16} aria-hidden="true" />
          {copy.add}
        </button>
      </div>
      <p id={helpId} className="mt-1 text-xs text-ink-500 text-fit">{copy.help}</p>
      {tokens.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2" aria-label={copy.list} data-testid="excluded-date-list">
          {tokens.map((date) => (
            <li
              key={date}
              className={[
                'inline-flex min-h-9 items-center gap-1 rounded-full border bg-white pl-3 pr-1 text-sm font-medium',
                invalidTokens.has(date) ? 'border-accent text-accent' : 'border-ink-200 text-ink-700',
              ].join(' ')}
              data-testid="excluded-date-chip"
            >
              <span className="font-mono">{date}</span>
              <button
                type="button"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-ink-100 focus-visible:outline-offset-0"
                aria-label={`${copy.remove}: ${date}`}
                onClick={() => removeDate(date)}
                data-testid={`excluded-date-remove-${date}`}
              >
                <X size={15} aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      )}
      {error && (
        <p id={errorId} className="mt-2 text-xs font-medium text-accent text-fit" role="alert" data-testid={`field-error-${field.name}`}>
          {error}
        </p>
      )}
    </div>
  );
}

function FieldRenderer({
  field,
  value,
  error,
  onChange,
  locale,
}: {
  field: Field;
  value: string | number | boolean;
  error?: string;
  onChange: (next: string | number | boolean) => void;
  locale: Locale;
}) {
  const fieldId = `f-${field.name}`;
  const helpText = defaultHelpForField(field, locale);
  const helpId = `${fieldId}-help`;
  const errorId = `${fieldId}-error`;
  const describedBy = [
    helpText ? helpId : '',
    error ? errorId : '',
  ].filter(Boolean).join(' ') || undefined;
  const labelEl = (
      <label htmlFor={fieldId} className="field-label text-fit" data-testid={`field-label-${field.name}`}>
      {field.label}
      {field.unit ? <span className="ml-1 text-ink-600 normal-case">({field.unit})</span> : null}
    </label>
  );

  const helpEl = helpText ? (
    <p id={helpId} className="mt-1 text-xs text-ink-500 text-fit">{helpText}</p>
  ) : null;
  const errorEl = error ? (
    <p id={errorId} className="mt-1 text-xs font-medium text-accent text-fit" role="alert" data-testid={`field-error-${field.name}`}>
      {error}
    </p>
  ) : null;

  if (field.name === 'excludedDates') {
    return (
      <ExcludedDatesField
        field={field}
        value={String(value ?? '')}
        error={error}
        onChange={onChange}
        locale={locale}
        describedBy={describedBy}
        helpId={helpId}
        errorId={errorId}
      />
    );
  }

  switch (field.type) {
    case 'number':
      return (
        <div>
          {labelEl}
          <input
            id={fieldId}
            data-testid={`field-${field.name}`}
            type="text"
            inputMode="decimal"
            className="field-input font-mono"
            aria-describedby={describedBy}
            aria-invalid={error ? 'true' : undefined}
            value={value === '' || value === undefined ? '' : String(value)}
            placeholder={field.placeholder}
            onChange={(e) => onChange(e.target.value)}
          />
          {helpEl}
          {errorEl}
        </div>
      );
    case 'select':
      return (
        <div>
          {labelEl}
          <select
            id={fieldId}
            data-testid={`field-${field.name}`}
            className="field-select"
            aria-describedby={describedBy}
            aria-invalid={error ? 'true' : undefined}
            disabled={field.readOnly}
            value={String(value ?? '')}
            onChange={(e) => onChange(e.target.value)}
          >
            {field.options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {helpEl}
          {errorEl}
        </div>
      );
    case 'toggle':
      return (
        <fieldset
          className="m-0 min-w-0 border-0 p-0"
          aria-describedby={describedBy}
          data-testid={`field-${field.name}-fieldset`}
        >
          <legend
            id={`${fieldId}-legend`}
            className="field-label text-fit"
            data-testid={`field-label-${field.name}`}
          >
            {field.label}
            {field.unit ? <span className="ml-1 text-ink-600 normal-case">({field.unit})</span> : null}
          </legend>
          <div
            id={fieldId}
            className="flex flex-col sm:flex-row"
            role="group"
            aria-labelledby={`${fieldId}-legend`}
            aria-describedby={describedBy}
            aria-invalid={error ? 'true' : undefined}
            data-testid={`field-${field.name}`}
          >
            {field.options?.map((opt) => (
              <button
                key={opt.value}
                type="button"
                className="seg-btn"
                aria-pressed={String(value) === opt.value}
                data-testid={`field-${field.name}-opt-${opt.value}`}
                onClick={() => onChange(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
          {helpEl}
          {errorEl}
        </fieldset>
      );
    case 'date':
      return (
        <div>
          {labelEl}
          <input
            id={fieldId}
            data-testid={`field-${field.name}`}
            type="date"
            className="field-input font-mono"
            aria-describedby={describedBy}
            aria-invalid={error ? 'true' : undefined}
            value={String(value ?? '')}
            onChange={(e) => onChange(e.target.value)}
          />
          {helpEl}
          {errorEl}
        </div>
      );
    case 'checkbox':
      return (
        <div>
          <div className="flex items-start gap-2">
          <input
            id={fieldId}
            data-testid={`field-${field.name}`}
            type="checkbox"
            className="mt-0.5 h-6 w-6 shrink-0 accent-accent"
            aria-describedby={describedBy}
            aria-invalid={error ? 'true' : undefined}
            checked={Boolean(value)}
            onChange={(e) => onChange(e.target.checked)}
          />
          <label htmlFor={fieldId} className="inline-flex min-h-6 min-w-0 flex-col justify-center text-sm text-ink-900 leading-tight text-fit">
            {field.label}
            {helpText && <span id={helpId} className="block mt-0.5 text-xs text-ink-500 text-fit">{helpText}</span>}
          </label>
          </div>
          {errorEl}
        </div>
      );
    case 'textarea':
      return (
        <div>
          {labelEl}
          <textarea
            id={fieldId}
            data-testid={`field-${field.name}`}
            className="field-textarea"
            aria-describedby={describedBy}
            aria-invalid={error ? 'true' : undefined}
            rows={3}
            placeholder={field.placeholder}
            value={String(value ?? '')}
            onChange={(e) => onChange(e.target.value)}
          />
          {helpEl}
          {errorEl}
        </div>
      );
    default:
      return null;
  }
}

export default function CalculatorIsland({ calc, locale = 'ru' }: Props) {
  const copy = calculatorCopy(locale);
  const warningCopy = shareWarningCopy(locale);
  const runner = useMemo(() => runners[calc.id], [calc.id]);
  const formRef = useRef<HTMLFormElement | null>(null);
  const inputStartedRef = useRef(false);
  const resultTrackedRef = useRef(false);
  const validationTrackedRef = useRef(false);
  // Первый рендер обязан совпасть с серверным, поэтому автоматические даты здесь
  // ещё пустые; настоящие подставляются после монтирования.
  const [values, setValues] = useState<FormValues>(() => buildHydrationValues(calc.fields));
  // Инициализатор useState выполняется в фазе первого рендера — до того, как React
  // применит к DOM значения контролируемых полей, поэтому ввод, сделанный до
  // гидратации, здесь ещё виден.
  const [preHydrationEdits] = useState<FormValues>(() => readPreHydrationEdits(calc.fields));
  const [hydrated, setHydrated] = useState(false);
  const [result, setResult] = useState<CalcResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [copiedResult, setCopiedResult] = useState(false);
  const [shareWarningOpen, setShareWarningOpen] = useState(false);

  const validationErrors = useMemo(
    () => validateValues(calc.id, calc.fields, values, locale),
    [calc.id, calc.fields, values, locale],
  );
  // До монтирования значения ещё не окончательны, поэтому ошибки не показываем:
  // иначе сервер отдавал бы ложную ошибку по незаполненной автоматической дате,
  // а его разметка расходилась бы с первым клиентским рендером.
  const visibleErrors = hydrated ? validationErrors : EMPTY_ERRORS;
  const validationErrorEntries = useMemo(
    () => Object.entries(visibleErrors),
    [visibleErrors],
  );
  const hasValidationErrors = validationErrorEntries.length > 0;

  useEffect(() => {
    trackAnalyticsEvent('calculator_view', { calculator_id: calc.id, locale });
  }, [calc.id, locale]);

  // При монтировании пробуем восстановить значения из URL-параметров
  // (нужно делать в useEffect, т.к. island гидрируется на клиенте и
  // первоначальный SSR-рендер не должен отличаться).
  // Ввод, сделанный до гидратации, накладывается поверх: он позже по времени,
  // чем и defaults, и параметры ссылки.
  useEffect(() => {
    const defaults = buildInitialValues(calc.fields);
    const restored = readValuesFromUrl(calc.fields, defaults, locale);
    setValues(Object.keys(preHydrationEdits).length > 0
      ? { ...restored, ...preHydrationEdits }
      : restored);
    setHydrated(true);
    // запускаем один раз для текущего калькулятора
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calc.id, calc.fields, locale, preHydrationEdits]);

  // Автоматический пересчёт при изменении значений (с лёгкой задержкой)
  useEffect(() => {
    if (!runner) return;
    const id = setTimeout(() => {
      try {
        const errors = validateValues(calc.id, calc.fields, values, locale);
        if (Object.keys(errors).length > 0) {
          setResult(null);
          if (inputStartedRef.current && !validationTrackedRef.current) {
            trackAnalyticsEvent('calculator_validation_error', { calculator_id: calc.id, locale });
            validationTrackedRef.current = true;
          }
          return;
        }
        setResult(runner(normalizeValues(calc.fields, values, locale)));
        if (inputStartedRef.current && !resultTrackedRef.current) {
          trackAnalyticsEvent('calculator_result_shown', { calculator_id: calc.id, locale });
          resultTrackedRef.current = true;
        }
      } catch {
        setResult(null);
      }
    }, 80);
    return () => clearTimeout(id);
  }, [values, runner, calc.id, calc.fields, locale]);

  const focusFormPanel = () => {
    if (typeof window === 'undefined') return;

    window.requestAnimationFrame(() => {
      const form = formRef.current;
      if (!form) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      form.scrollIntoView({
        block: 'start',
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
      const firstFocusable = form.querySelector<HTMLElement>(
        'input:not([type="hidden"]), select, textarea, button',
      );
      firstFocusable?.focus({ preventScroll: true });
    });
  };

  const reset = () => {
    setValues(buildInitialValues(calc.fields));
    setCopied(false);
    setCopiedResult(false);
    setShareWarningOpen(false);
    inputStartedRef.current = false;
    resultTrackedRef.current = false;
    validationTrackedRef.current = false;
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', window.location.pathname + window.location.hash);
    }
  };

  const copyShareLink = async () => {
    if (typeof window === 'undefined') return;
    const qs = buildCalculatorQueryString(calc.fields, values, locale);
    const url = window.location.origin + window.location.pathname + qs + '#calculator';

    let ok = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
        ok = true;
      } else {
        ok = fallbackCopy(url);
      }
    } catch {
      ok = fallbackCopy(url);
    }

    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  };

  const requestCopyShareLink = () => {
    trackAnalyticsEvent('calculator_copy_link_clicked', { calculator_id: calc.id, locale });
    if (calc.category === 'finance' || calc.category === 'currency' || calc.category === 'sport') {
      setShareWarningOpen(true);
      return;
    }
    void copyShareLink();
  };

  const confirmCopyShareLink = () => {
    setShareWarningOpen(false);
    trackAnalyticsEvent('calculator_copy_link_confirmed', { calculator_id: calc.id, locale });
    void copyShareLink();
  };

  const cancelCopyShareLink = () => {
    setShareWarningOpen(false);
    trackAnalyticsEvent('calculator_copy_link_cancelled', { calculator_id: calc.id, locale });
  };

  const updateField = (fieldName: string, next: string | number | boolean) => {
    if (!inputStartedRef.current) {
      inputStartedRef.current = true;
      trackAnalyticsEvent('calculator_input_started', { calculator_id: calc.id, locale });
    }
    resultTrackedRef.current = false;
    validationTrackedRef.current = false;
    setValues((previous) => ({ ...previous, [fieldName]: next }));
  };

  const swapCurrencies = () => {
    if (!inputStartedRef.current) {
      inputStartedRef.current = true;
      trackAnalyticsEvent('calculator_input_started', { calculator_id: calc.id, locale });
    }
    resultTrackedRef.current = false;
    validationTrackedRef.current = false;
    setValues((previous) => ({ ...previous, from: previous.to, to: previous.from }));
  };

  const copyResult = async () => {
    if (typeof window === 'undefined' || !result) return;
    const text = resultToText(calc, localizeResult(result, locale), locale);
    let ok = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        ok = true;
      } else {
        ok = fallbackCopy(text);
      }
    } catch {
      ok = fallbackCopy(text);
    }

    if (ok) {
      setCopiedResult(true);
      window.setTimeout(() => setCopiedResult(false), 1800);
    }
  };

  const printResult = () => {
    if (typeof window === 'undefined') return;
    window.print();
  };

  const visibleFields = calc.fields.filter((f) => isVisible(f, values));
  const displayResult = result ? localizeResult(result, locale) : null;

  return (
    <div className="grid min-w-0 gap-5 sm:gap-8 lg:grid-cols-5" data-testid={`calculator-island-${calc.id}`}>
      <form
        ref={formRef}
        className="min-w-0 rounded-3xl border border-ink-200 bg-white p-4 shadow-[0_18px_48px_rgba(61,48,133,0.09)] sm:p-8 lg:col-span-3"
        onSubmit={(event) => event.preventDefault()}
        data-testid="calc-form"
      >
        <div
          className="mb-5 flex items-start justify-between gap-3 border-b border-ink-100 pb-4 sm:mb-6 sm:gap-4 sm:pb-5"
          data-testid="calc-form-header"
        >
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-wider text-ink-500">{copy.inputs}</div>
            <h2 className="mt-1 text-xl font-bold tracking-[-0.03em] text-ink-900 text-fit">{calc.name}</h2>
          </div>
          <div className="shrink-0 rounded-full bg-accent-50 px-3 py-1.5 text-right font-mono text-xs text-accent">
            {copy.fieldCounter(visibleFields.length)}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {visibleFields.map((f) => (
            <div key={f.name} className={f.type === 'textarea' ? 'sm:col-span-2' : ''}>
              <FieldRenderer
                field={contextualField(f, calc.id, values, locale)}
                value={values[f.name] as string | number | boolean}
                error={visibleErrors[f.name]}
                locale={locale}
                onChange={(next) => updateField(f.name, next)}
              />
            </div>
          ))}
        </div>

        {calc.id === 'currency-converter' && (
          <button
            type="button"
            className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-ink-200 bg-ink-50 px-3 py-2 text-sm font-semibold text-ink-700 transition-colors hover:border-accent-100 hover:bg-accent-50 hover:text-accent sm:w-auto"
            onClick={swapCurrencies}
            data-testid="calc-swap-currencies-btn"
          >
            <ArrowRightLeft size={16} aria-hidden="true" />
            {swapCopy(locale)}
          </button>
        )}

        <div className="-mx-4 mt-6 grid grid-cols-2 items-stretch gap-2.5 border-t border-ink-100 bg-white px-4 py-3 sm:mx-0 sm:mt-7 sm:flex sm:flex-wrap sm:items-center sm:gap-3 sm:border-0 sm:bg-transparent sm:p-0">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-11 min-w-0 items-center justify-center gap-1.5 rounded-xl border border-ink-200 px-2 py-2 text-center text-sm leading-tight text-ink-600 underline-offset-4 transition-colors hover:border-accent-100 hover:text-accent sm:min-h-0 sm:w-auto sm:justify-start sm:border-0 sm:px-0 sm:py-0 sm:text-ink-500 sm:hover:underline"
            data-testid="calc-reset-btn"
          >
            <RotateCcw size={14} aria-hidden="true" />
            {copy.reset}
          </button>
          <button
            type="button"
            onClick={requestCopyShareLink}
            className={[
              'inline-flex min-h-11 min-w-0 items-center justify-center gap-2 rounded-xl border px-2 py-2 text-center text-sm leading-tight transition-colors sm:ml-auto sm:w-auto sm:px-3',
              copied
                ? 'border-emerald-700 text-emerald-700 bg-emerald-50'
                : 'border-ink-200 bg-white text-ink-700 hover:border-accent-100 hover:bg-accent-50 hover:text-accent',
            ].join(' ')}
            data-testid="calc-share-btn"
            aria-live="polite"
          >
            {copied ? (
              <>
                <Check size={14} aria-hidden="true" />
                {copy.linkCopied}
              </>
            ) : (
              <>
                <Link2 size={14} aria-hidden="true" />
                {copy.copyLink}
              </>
            )}
          </button>
        </div>

        {shareWarningOpen && (
          <div
            className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-ink-900"
            role="alertdialog"
            aria-labelledby="share-warning-title"
            aria-describedby="share-warning-text"
            data-testid="calc-share-warning"
          >
            <div id="share-warning-title" className="font-semibold">{warningCopy.title}</div>
            <p id="share-warning-text" className="mt-1 leading-relaxed text-ink-700">{warningCopy.text}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" className="btn-primary" onClick={confirmCopyShareLink} data-testid="calc-share-confirm">
                {warningCopy.confirm}
              </button>
              <button type="button" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-700" onClick={cancelCopyShareLink} data-testid="calc-share-cancel">
                {warningCopy.cancel}
              </button>
            </div>
          </div>
        )}

        {hasValidationErrors && (
          <div
            className="mt-5 flex gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-ink-900"
            role="status"
            data-testid="calc-validation"
          >
            <AlertCircle size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
            <div className="min-w-0">
              <div className="font-medium">{copy.checkValues}</div>
              <ul className="mt-1 list-disc pl-4 text-ink-700">
                {validationErrorEntries.map(([fieldName, error]) => {
                  const fieldLabel = calc.fields.find((field) => field.name === fieldName)?.label ?? fieldName;
                  return (
                    <li key={fieldName}>
                      <a
                        href={`#f-${fieldName}`}
                        className="underline underline-offset-4 hover:text-accent"
                      >
                        {fieldLabel}
                      </a>
                      : {error}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}

        {calc.disclaimer && (
          <p className="mt-6 text-xs text-ink-500 leading-relaxed border-t border-ink-200 pt-4">
            {calc.disclaimer}
          </p>
        )}
      </form>

      <div
        className="min-w-0 lg:col-span-2 lg:sticky lg:top-6 self-start focus:outline-none"
        data-testid="calc-result-wrap"
        tabIndex={-1}
        aria-labelledby="calc-result-title"
        aria-live="polite"
        aria-atomic="false"
      >
        <div
          className="mb-3 flex items-center justify-between gap-3 text-xs uppercase tracking-wider text-ink-500 print-hide"
          data-testid="calc-result-heading"
        >
          <span id="calc-result-title" className="min-w-0 text-fit">{calc.resultTitle ?? calc.name}</span>
        </div>
        {displayResult ? (
          <ResultBlock
            result={displayResult}
            onCopy={copyResult}
            onEdit={focusFormPanel}
            onPrint={printResult}
            copied={copiedResult}
            locale={locale}
          />
        ) : hasValidationErrors ? (
          <div
            className="border border-accent bg-accent-50 p-5 text-sm text-ink-700 sm:p-8"
            data-testid="calc-result-invalid"
          >
            <div className="flex items-center gap-2 font-medium text-ink-900 text-fit">
              <AlertCircle size={18} className="text-accent" aria-hidden="true" />
              {copy.unavailableTitle}
            </div>
            <p className="mt-3 leading-relaxed">
              {copy.unavailableText}
            </p>
          </div>
        ) : (
          <div
            className="border border-dashed border-ink-300 bg-ink-50 p-5 text-center text-sm text-ink-500 sm:p-8"
            data-testid="calc-result-empty"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center border border-ink-300 bg-white text-ink-700">
              <CalculatorIcon size={21} aria-hidden="true" />
            </div>
            <p className="mt-4 leading-relaxed">
              {copy.emptyText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
