import type { CalcFunction, CalcResult } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Универсальный калькулятор процентов: пять режимов.
//  - of:      сколько составит X% от числа A
//  - what:    сколько процентов составляет A от B
//  - addPct:  прибавить X% к числу A
//  - subPct:  отнять X% от числа A
//  - change:  на сколько процентов изменилось значение с A до B
export const calcPercent: CalcFunction = (inputs) => {
  if (inputs.mode !== undefined && typeof inputs.mode !== 'string') return percentError('Выберите допустимый режим расчёта.');
  const mode = toStr(inputs.mode, 'of');
  if (!['of', 'what', 'addPct', 'subPct', 'change'].includes(mode)) {
    return percentError('Выберите допустимый режим расчёта.');
  }
  if ([inputs.a, inputs.b].some((value) => typeof value !== 'number' && typeof value !== 'string')) {
    return percentError('Введите конечные числовые значения.');
  }
  const a = toNumber(inputs.a, NaN);
  const b = toNumber(inputs.b, NaN);
  if (![a, b].every(Number.isFinite)) return percentError('Введите конечные числовые значения.');

  const modeLabels: Record<string, string> = {
    of: 'Процент от числа',
    what: 'Часть от целого',
    addPct: 'Прибавить процент',
    subPct: 'Вычесть процент',
    change: 'Процентное изменение',
  };

  const secondary = (hint?: string) => [
    { label: 'Режим', value: modeLabels[mode] ?? 'Проценты' },
    { label: 'Значение A', value: fmtNumber(a, 2) },
    { label: 'Значение B', value: fmtNumber(b, 2) },
    ...(hint ? [{ label: 'Подсказка', value: hint }] : []),
  ];

  const result = (label: string, value: number, hint?: string): CalcResult => Number.isFinite(value) ? ({
    primary: { label, value: fmtNumber(value, 2) },
    secondary: secondary(hint),
  }) : percentError('Результат выходит за пределы числовой точности.');

  switch (mode) {
    case 'of': {
      // a = проценты, b = число. Сколько составит a% от b
      const v = (a / 100) * b;
      return result(`${fmtNumber(a, 2)}% от ${fmtNumber(b, 2)}`, v);
    }
    case 'what': {
      // a — часть, b — целое. Сколько процентов a от b
      if (b === 0) {
        return {
          primary: { label: 'Результат', value: '—' },
          secondary: [{ label: 'Ошибка', value: 'Целое не может быть равно нулю', accent: 'red' }],
        };
      }
      const v = (a / b) * 100;
      if (!Number.isFinite(v)) return percentError('Результат выходит за пределы числовой точности.');
      return {
        primary: { label: `${fmtNumber(a, 2)} от ${fmtNumber(b, 2)}`, value: `${fmtNumber(v, 2)}%` },
        secondary: secondary(),
      };
    }
    case 'addPct': {
      // прибавить b% к числу a
      const v = a * (1 + b / 100);
      return result(`${fmtNumber(a, 2)} + ${fmtNumber(b, 2)}%`, v);
    }
    case 'subPct': {
      // отнять b% от числа a
      const v = a * (1 - b / 100);
      return result(`${fmtNumber(a, 2)} − ${fmtNumber(b, 2)}%`, v);
    }
    case 'change': {
      // на сколько % изменилось с a до b
      if (a === 0) {
        return {
          primary: { label: 'Изменение', value: '—' },
          secondary: [{ label: 'Ошибка', value: 'Исходное значение не может быть равно нулю', accent: 'red' }],
        };
      }
      const v = ((b - a) / a) * 100;
      if (![v, b - a].every(Number.isFinite)) return percentError('Результат выходит за пределы числовой точности.');
      const displayChange = v === 0 ? 0 : v;
      return {
        primary: { label: 'Изменение', value: `${displayChange >= 0 ? '+' : ''}${fmtNumber(displayChange, 2)}%` },
        secondary: [
          ...secondary(a < 0 ? 'При отрицательной исходной базе знак относительного изменения нельзя читать как направление роста или снижения.' : undefined),
          { label: 'Разница B − A', value: fmtNumber(b - a, 2) },
        ],
      };
    }
    default:
      return percentError('Выберите допустимый режим расчёта.');
  }
};

function percentError(message: string): CalcResult {
  return { primary: { label: 'Результат', value: '—' }, secondary: [{ label: 'Ошибка', value: message, accent: 'red' }] };
}

// Runtime-манифест импортирует функцию под фиксированным именем.
export { calcPercent as compute };
