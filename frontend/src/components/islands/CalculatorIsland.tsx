// Универсальный React-остров для рендера любого калькулятора по data-конфигу.
// Поля рендерятся динамически из CalculatorDef.fields, расчет выполняется
// функцией из реестра runners по идентификатору калькулятора.

import { useEffect, useMemo, useState } from 'react';
import type { CalculatorDef, Field, CalcResult } from '../../lib/types';
import { runners } from '../../lib/runners';

type Props = {
  calc: CalculatorDef;
};

type FormValues = Record<string, string | number | boolean>;

function buildInitialValues(fields: Field[]): FormValues {
  const init: FormValues = {};
  for (const f of fields) {
    if (f.defaultValue !== undefined) {
      init[f.name] = f.defaultValue;
    } else if (f.type === 'checkbox' || f.type === 'toggle') {
      init[f.name] = f.options?.[0]?.value ?? false;
    } else if (f.type === 'number') {
      init[f.name] = 0;
    } else {
      init[f.name] = '';
    }
  }
  return init;
}

function isVisible(field: Field, values: FormValues): boolean {
  if (!field.showIf) return true;
  return values[field.showIf.field] === field.showIf.equals;
}

function ResultBlock({ result }: { result: CalcResult }) {
  return (
    <div className="border border-ink-900 bg-ink-50" data-testid="calc-result">
      <div className="p-6 sm:p-7 border-b border-ink-900 bg-white">
        <div className="text-xs uppercase tracking-wider text-ink-500">
          {result.primary.label}
        </div>
        <div
          className="mt-2 font-mono text-3xl sm:text-4xl font-semibold text-ink-900 tracking-tightest"
          data-testid="calc-result-primary"
        >
          {result.primary.value}
        </div>
      </div>

      <dl className="divide-y divide-ink-200">
        {result.secondary.map((row, i) => (
          <div
            key={i}
            className="flex items-baseline justify-between gap-4 px-6 py-3"
            data-testid={`calc-result-row-${i}`}
          >
            <dt className="text-sm text-ink-500">{row.label}</dt>
            <dd
              className={[
                'font-mono text-sm font-medium tabular-nums text-right',
                row.accent === 'green' ? 'text-emerald-700' : '',
                row.accent === 'red' ? 'text-accent' : '',
                !row.accent || row.accent === 'neutral' ? 'text-ink-900' : '',
              ].join(' ')}
            >
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      {result.table && (
        <div className="border-t border-ink-200 overflow-x-auto">
          {result.table.title && (
            <div className="px-6 pt-4 text-xs uppercase tracking-wider text-ink-500">
              {result.table.title}
            </div>
          )}
          <table className="w-full text-sm">
            <thead>
              <tr className="text-ink-500">
                {result.table.columns.map((c, i) => (
                  <th key={i} className="px-6 py-2 text-left font-medium border-b border-ink-200">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {result.table.rows.map((row, i) => (
                <tr key={i} className="border-b border-ink-100 last:border-b-0">
                  {row.map((cell, j) => (
                    <td key={j} className="px-6 py-2 font-mono tabular-nums">
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
        <p className="px-6 py-3 text-xs text-ink-500 border-t border-ink-200">
          {result.note}
        </p>
      )}
    </div>
  );
}

function FieldRenderer({
  field,
  value,
  onChange,
}: {
  field: Field;
  value: string | number | boolean;
  onChange: (next: string | number | boolean) => void;
}) {
  const labelEl = (
    <label htmlFor={`f-${field.name}`} className="field-label" data-testid={`field-label-${field.name}`}>
      {field.label}
      {field.unit ? <span className="ml-1 text-ink-400 normal-case">({field.unit})</span> : null}
    </label>
  );

  const helpEl = field.help ? (
    <p className="mt-1 text-xs text-ink-500">{field.help}</p>
  ) : null;

  switch (field.type) {
    case 'number':
      return (
        <div>
          {labelEl}
          <input
            id={`f-${field.name}`}
            data-testid={`field-${field.name}`}
            type="number"
            inputMode="decimal"
            className="field-input font-mono"
            value={value === '' || value === undefined ? '' : String(value)}
            min={field.min}
            max={field.max}
            step={field.step ?? 'any'}
            placeholder={field.placeholder}
            onChange={(e) => onChange(e.target.value === '' ? '' : Number(e.target.value))}
          />
          {helpEl}
        </div>
      );
    case 'select':
      return (
        <div>
          {labelEl}
          <select
            id={`f-${field.name}`}
            data-testid={`field-${field.name}`}
            className="field-select"
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
        </div>
      );
    case 'toggle':
      return (
        <div>
          {labelEl}
          <div className="flex" role="group" data-testid={`field-${field.name}`}>
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
        </div>
      );
    case 'date':
      return (
        <div>
          {labelEl}
          <input
            id={`f-${field.name}`}
            data-testid={`field-${field.name}`}
            type="date"
            className="field-input font-mono"
            value={String(value ?? '')}
            onChange={(e) => onChange(e.target.value)}
          />
          {helpEl}
        </div>
      );
    case 'checkbox':
      return (
        <div className="flex items-start gap-2">
          <input
            id={`f-${field.name}`}
            data-testid={`field-${field.name}`}
            type="checkbox"
            className="mt-1 h-4 w-4 accent-accent"
            checked={Boolean(value)}
            onChange={(e) => onChange(e.target.checked)}
          />
          <label htmlFor={`f-${field.name}`} className="text-sm text-ink-900 leading-tight">
            {field.label}
            {field.help && <span className="block mt-0.5 text-xs text-ink-500">{field.help}</span>}
          </label>
        </div>
      );
    case 'textarea':
      return (
        <div>
          {labelEl}
          <textarea
            id={`f-${field.name}`}
            data-testid={`field-${field.name}`}
            className="field-textarea"
            rows={3}
            placeholder={field.placeholder}
            value={String(value ?? '')}
            onChange={(e) => onChange(e.target.value)}
          />
          {helpEl}
        </div>
      );
    default:
      return null;
  }
}

export default function CalculatorIsland({ calc }: Props) {
  const runner = useMemo(() => runners[calc.id], [calc.id]);
  const [values, setValues] = useState<FormValues>(() => buildInitialValues(calc.fields));
  const [result, setResult] = useState<CalcResult | null>(null);

  // Автоматический пересчёт при изменении значений (с лёгкой задержкой)
  useEffect(() => {
    if (!runner) return;
    const id = setTimeout(() => {
      try {
        setResult(runner(values));
      } catch {
        setResult(null);
      }
    }, 80);
    return () => clearTimeout(id);
  }, [values, runner]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (runner) setResult(runner(values));
  };

  const reset = () => setValues(buildInitialValues(calc.fields));

  return (
    <div className="grid gap-8 lg:grid-cols-5" data-testid={`calculator-island-${calc.id}`}>
      <form
        className="lg:col-span-3 border border-ink-900 bg-white p-6 sm:p-8"
        onSubmit={handleSubmit}
        data-testid="calc-form"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {calc.fields.filter((f) => isVisible(f, values)).map((f) => (
            <div key={f.name} className={f.type === 'textarea' ? 'sm:col-span-2' : ''}>
              <FieldRenderer
                field={f}
                value={values[f.name] as string | number | boolean}
                onChange={(next) =>
                  setValues((prev) => ({ ...prev, [f.name]: next }))
                }
              />
            </div>
          ))}
        </div>

        <div className="mt-7 flex items-center gap-3">
          <button type="submit" className="btn-primary" data-testid="calc-submit-btn">
            Рассчитать
          </button>
          <button
            type="button"
            onClick={reset}
            className="text-sm text-ink-500 underline-offset-4 hover:underline hover:text-ink-900"
            data-testid="calc-reset-btn"
          >
            Сбросить
          </button>
        </div>

        {calc.disclaimer && (
          <p className="mt-6 text-xs text-ink-500 leading-relaxed border-t border-ink-200 pt-4">
            {calc.disclaimer}
          </p>
        )}
      </form>

      <div className="lg:col-span-2 lg:sticky lg:top-6 self-start" data-testid="calc-result-wrap">
        {result ? (
          <ResultBlock result={result} />
        ) : (
          <div className="border border-dashed border-ink-300 p-8 text-center text-sm text-ink-500">
            Заполните поля — результат появится здесь автоматически.
          </div>
        )}
      </div>
    </div>
  );
}
