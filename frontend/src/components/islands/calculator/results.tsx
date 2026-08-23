// Презентационный слой результата: правая колонка целиком — заголовок, блок
// результата, состояние с ошибками и пустое состояние. Локализацией результата
// модуль не занимается: он получает уже подготовленный CalcResult через props,
// поэтому translateLabel/localizeResult/resultToText остаются в островe.

import { useId } from 'react';
import type { CSSProperties } from 'react';
import {
  AlertCircle,
  Calculator as CalculatorIcon,
  Check,
  Copy,
  Pencil,
  Printer,
} from 'lucide-react';
import type { CalcResult } from '../../../lib/types';
import type { Locale } from '../../../lib/clientI18n';
import { calculatorCopy } from './copy';

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
  // Идентификатор для aria-describedby таблицы. useId даёт одинаковое значение
  // на сервере и после гидратации, поэтому связь не рвётся при takeover.
  const tableNoteId = `${useId()}table-note`;

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
        <div
          className="nav-scroll border-t border-ink-200 overflow-x-auto"
          // Панель результата стоит на --surface-soft, а не на фоне шапки:
          // подложке подсказки нужен именно этот цвет, иначе край побелеет.
          style={{ '--nav-veil': 'var(--surface-soft)' } as CSSProperties}
          // Таблица прокручивается вбок, но фокусируемых элементов внутри нет:
          // без собственной остановки табуляции клавиатурный посетитель не мог
          // её прокрутить вовсе. Группе даётся имя, чтобы остановка не была
          // безымянной.
          tabIndex={0}
          role="group"
          aria-label={result.table.title ?? copy.tableCaption}
        >
          {result.table.title && (
            <div className="px-4 pt-4 text-xs uppercase tracking-wider text-ink-500 sm:px-6">
              {result.table.title}
            </div>
          )}
          <table
            className="min-w-max w-full text-sm"
            aria-describedby={result.table.note ? tableNoteId : undefined}
          >
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

      {/* Сноска принадлежит таблице, поэтому идёт сразу за ней и без верхней
          границы: граница отделяет уже следующий блок. Вынесена ЗА пределы
          горизонтально прокручиваемого контейнера — иначе на узком экране
          текст уезжал бы вбок вместе с таблицей вместо переноса по словам. */}
      {result.table?.note && (
        <p
          id={tableNoteId}
          data-testid="calc-result-table-note"
          className="px-4 pb-3 pt-2 text-xs text-ink-500 sm:px-6"
        >
          {result.table.note}
        </p>
      )}

      {result.note && (
        <p className="px-4 py-3 text-xs text-ink-500 border-t border-ink-200 sm:px-6">
          {result.note}
        </p>
      )}
    </div>
  );
}

export function ResultPanel({
  title,
  result,
  hasValidationErrors,
  copied,
  locale,
  onCopy,
  onEdit,
  onPrint,
}: {
  title: string;
  result: CalcResult | null;
  hasValidationErrors: boolean;
  copied: boolean;
  locale: Locale;
  onCopy: () => void;
  onEdit: () => void;
  onPrint: () => void;
}) {
  const copy = calculatorCopy(locale);

  return (
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
        <span id="calc-result-title" className="min-w-0 text-fit">{title}</span>
      </div>
      {result ? (
        <ResultBlock
          result={result}
          onCopy={onCopy}
          onEdit={onEdit}
          onPrint={onPrint}
          copied={copied}
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
  );
}
