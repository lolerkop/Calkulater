// Универсальный React-остров для рендера любого калькулятора по data-конфигу.
// Поля рендерятся динамически из CalculatorDef.fields, расчет выполняется
// функцией из реестра runners по идентификатору калькулятора.

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertCircle,
  ArrowRightLeft,
  Check,
  Link2,
  RotateCcw,
} from 'lucide-react';
import type { CalculatorDef, Field, CalcResult } from '../../lib/types';
import { runners } from '../../lib/runners';
import { v2ContextualFields } from '../../calculators/runtime.generated';
import type { Locale } from '../../lib/clientI18n';
import {
  buildCalculatorQueryString,
  buildHydrationValues,
  buildInitialValues,
  readValuesFromSearch,
} from '../../lib/shareLink';
import { trackAnalyticsEvent } from '../../lib/analytics';
import {
  calculatorCopy,
  shareWarningCopy,
  swapCopy,
} from './calculator/copy';
import {
  EMPTY_ERRORS,
  isVisible,
  validateValues,
} from './calculator/validation';
import { normalizeValues, type FormValues } from './calculator/values';
import { FieldRenderer } from './calculator/fields';
import { ResultPanel } from './calculator/results';
import { localizeResult, resultToText } from './calculator/resultLocalization';

type Props = {
  calc: Pick<CalculatorDef, 'id' | 'name' | 'resultTitle' | 'category' | 'fields' | 'disclaimer'>;
  locale?: Locale;
};

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

// Подписи полей, зависящие от значений формы, принадлежат калькулятору.
// Остров лишь спрашивает манифест — какие калькуляторы существуют, он не знает.
function contextualField(field: Field, calculatorId: string, values: FormValues, locale: Locale): Field {
  const own = v2ContextualFields[calculatorId];
  return own ? own(field, values, locale) : field;
}

function fallbackCopy(text: string): boolean {
  // Запасной путь копирования требует настоящего выделения, поэтому фокус на
  // время уходит на временное поле. Забрать его насовсем нельзя: после удаления
  // поля фокус упал бы на body, и клавиатурный пользователь потерял бы место на
  // странице. Поэтому запоминаем прежний элемент и возвращаем фокус ему.
  const previous = document.activeElement as HTMLElement | null;
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
  } finally {
    if (previous?.isConnected && previous !== document.body) previous.focus();
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
  const shareConfirmRef = useRef<HTMLButtonElement | null>(null);
  const shareTriggerRef = useRef<HTMLButtonElement | null>(null);
  const shareWasOpenRef = useRef(false);

  // Открытый alertdialog должен забирать фокус: иначе клавиатурный пользователь
  // остаётся на кнопке «Скопировать ссылку» и не попадает в предупреждение.
  // При закрытии фокус нужно вернуть обратно на неё: браузер удаляет элемент,
  // на котором фокус стоял, и роняет его на body — с этого места следующий Tab
  // начинает обход страницы заново, теряя место пользователя.
  useEffect(() => {
    if (shareWarningOpen) {
      shareWasOpenRef.current = true;
      shareConfirmRef.current?.focus();
      return;
    }
    if (!shareWasOpenRef.current) return;
    shareWasOpenRef.current = false;
    // Забирать фокус можно только у body: если пользователь успел перейти на
    // другой контрол (например, нажал «Сбросить»), фокус принадлежит ему.
    if (document.activeElement && document.activeElement !== document.body) return;
    const trigger = shareTriggerRef.current;
    if (trigger?.isConnected) trigger.focus();
  }, [shareWarningOpen]);

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

  // Escape отменяет так же, как кнопка «Отмена»: ссылка не копируется.
  // Слушаем на документе, а не на самой панели. Предупреждение немодальное и
  // фокус за его пределы уходить вправе, а обработчик на панели срабатывал бы
  // только пока фокус внутри — уйдя на соседнюю кнопку, пользователь терял
  // возможность закрыть предупреждение с клавиатуры.
  useEffect(() => {
    if (!shareWarningOpen) return undefined;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      cancelCopyShareLink();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [shareWarningOpen, calc.id, locale]);

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

        {/* Подписи кнопок переносятся по пробелу, но не рвутся внутри слова:
            глобальное overflow-wrap: anywhere спасает вёрстку от бесконечных
            строк, а на узкой кнопке превращало «Скопировать ссылку» в
            «Скопирова / ть ссылку». */}
        <div className="-mx-4 mt-6 grid grid-cols-2 items-stretch gap-2.5 border-t border-ink-100 bg-white px-4 py-3 sm:mx-0 sm:mt-7 sm:flex sm:flex-wrap sm:items-center sm:gap-3 sm:border-0 sm:bg-transparent sm:p-0">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-11 min-w-0 items-center justify-center gap-1.5 rounded-xl border border-ink-200 px-2 py-2 text-center text-sm leading-tight text-ink-600 underline-offset-4 transition-colors [overflow-wrap:normal] hover:border-accent-100 hover:text-accent sm:min-h-0 sm:w-auto sm:justify-start sm:border-0 sm:px-0 sm:py-0 sm:text-ink-500 sm:hover:underline"
            data-testid="calc-reset-btn"
          >
            <RotateCcw size={14} aria-hidden="true" />
            {copy.reset}
          </button>
          <button
            ref={shareTriggerRef}
            type="button"
            onClick={requestCopyShareLink}
            className={[
              'inline-flex min-h-11 min-w-0 items-center justify-center gap-2 rounded-xl border px-2 py-2 text-center text-sm leading-tight transition-colors [overflow-wrap:normal] sm:ml-auto sm:w-auto sm:px-3',
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
            // Предупреждение стоит в потоке страницы ниже кнопки и ничего не
            // перекрывает, поэтому оно немодальное: остальная страница остаётся
            // доступной. Проставлено явно, чтобы вспомогательные технологии не
            // трактовали alertdialog как перехватывающий всё окно.
            aria-modal="false"
            aria-labelledby="share-warning-title"
            aria-describedby="share-warning-text"
            data-testid="calc-share-warning"
          >
            <div id="share-warning-title" className="font-semibold">{warningCopy.title}</div>
            <p id="share-warning-text" className="mt-1 leading-relaxed text-ink-700">{warningCopy.text}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button ref={shareConfirmRef} type="button" className="btn-primary" onClick={confirmCopyShareLink} data-testid="calc-share-confirm">
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

      <ResultPanel
        title={calc.resultTitle ?? calc.name}
        result={displayResult}
        hasValidationErrors={hasValidationErrors}
        copied={copiedResult}
        locale={locale}
        onCopy={copyResult}
        onEdit={focusFormPanel}
        onPrint={printResult}
      />
    </div>
  );
}
