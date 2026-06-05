import type { CalcFunction } from '../types';
import { fmtNumber, toNumber, toStr } from '../format';

// Универсальный калькулятор процентов: четыре режима.
//  - of:      сколько составит X% от числа A
//  - what:    сколько процентов составляет A от B
//  - addPct:  прибавить X% к числу A
//  - subPct:  отнять X% от числа A
//  - change:  на сколько процентов изменилось значение с A до B
export const calcPercent: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'of');
  const a = toNumber(inputs.a);
  const b = toNumber(inputs.b);

  const result = (label: string, value: number, hint?: string) => ({
    primary: { label, value: fmtNumber(value, 2) },
    secondary: hint ? [{ label: 'Подсказка', value: hint }] : [],
  });

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
      return {
        primary: { label: `${fmtNumber(a, 2)} от ${fmtNumber(b, 2)}`, value: `${fmtNumber(v, 2)}%` },
        secondary: [],
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
      return {
        primary: { label: 'Изменение', value: `${v >= 0 ? '+' : ''}${fmtNumber(v, 2)}%` },
        secondary: [
          { label: 'Абсолютная разница', value: fmtNumber(b - a, 2) },
        ],
      };
    }
    default:
      return result('Результат', 0);
  }
};
