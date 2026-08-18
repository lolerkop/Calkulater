import type { CalcFunction } from '../../lib/types';
import { fmtMoney, toNumber } from '../../lib/format';

// Правило 50/30/20: доход после налогов делится на нужды, желания и сбережения.
// Формула тривиальна, но результат — три величины сразу, и это его смысл:
// калькулятор проверяет, что платформа умеет показывать набор значений,
// а не одно число.
export const compute: CalcFunction = (inputs) => {
  const income = toNumber(inputs.income);
  if (income <= 0) {
    return {
      primary: { label: 'Нужды', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Доход должен быть больше нуля', accent: 'red' }],
    };
  }
  const needs = income * 0.5;
  const wants = income * 0.3;
  const savings = income * 0.2;
  return {
    primary: { label: 'Нужды', value: fmtMoney(needs) },
    secondary: [
      { label: 'Желания', value: fmtMoney(wants) },
      { label: 'Сбережения', value: fmtMoney(savings), accent: 'green' },
      { label: 'Доход после налогов', value: fmtMoney(income) },
    ],
  };
};
