// Презентационный слой полей калькулятора: рендер контролов по описанию поля и
// собственное поле-черновик для списка исключаемых дат. Здесь нет ни расчёта, ни
// состояния острова, ни URL, ни аналитики, ни форматирования результата —
// вся бизнес-семантика приходит через props.

import { useEffect, useState } from 'react';
import { Plus, X } from 'lucide-react';
import type { Field } from '../../../lib/types';
import type { Locale } from '../../../lib/clientI18n';
import { parseExcludedDates } from '../../../lib/calculators/workingDays';
import { calculatorCopy, excludedDatesCopy } from './copy';

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

export function FieldRenderer({
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
