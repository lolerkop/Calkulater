import type { CalcFunction, CalcResultRow } from '../types';
import { fmtNumber, toNumber } from '../format';

// Historical Navy-style circumference model. Existing percentage coefficients
// are preserved; exact verification against NHRC 84-11/84-29 is a documented
// source gap. This is not a claim about the current Navy eligibility protocol.
//
// Исходный контракт задан в ДЮЙМАХ:
//   мужчины: %жира = 86,010·log10(талия − шея) − 70,041·log10(рост) + 36,76
//   женщины: %жира = 163,205·log10(талия + бёдра − шея) − 97,684·log10(рост) − 78,387
//
// Сайт метрический, поэтому сантиметры переводятся в дюймы, а коэффициенты
// остаются исходными. Подставлять сантиметры в дюймовые константы нельзя:
// логарифм не безразмерен относительно масштаба, и результат сместился бы
// примерно на шесть с половиной процентных пунктов.
const CM_PER_INCH = 2.54;

export function navyBodyFat(
  sex: 'male' | 'female',
  heightCm: number,
  neckCm: number,
  waistCm: number,
  hipCm: number,
): number {
  const height = heightCm / CM_PER_INCH;
  const neck = neckCm / CM_PER_INCH;
  const waist = waistCm / CM_PER_INCH;
  const hip = hipCm / CM_PER_INCH;

  if (sex === 'female') {
    return 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
  }
  return 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
}

// Аргумент логарифма: у мужчин талия минус шея, у женщин талия плюс бёдра
// минус шея. Он обязан быть строго положительным, иначе логарифм не определён.
export function navyCircumferenceDifference(
  sex: 'male' | 'female',
  neckCm: number,
  waistCm: number,
  hipCm: number,
): number {
  return sex === 'female' ? waistCm + hipCm - neckCm : waistCm - neckCm;
}

const invalid = (message: string) => ({
  primary: { label: 'Процент жира', value: '—' },
  secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
});

export const calcBodyFat: CalcFunction = (inputs) => {
  const sex = inputs.sex === undefined ? 'male' : inputs.sex;
  if (sex !== 'male' && sex !== 'female') return invalid('Выберите мужскую или женскую формулу');
  const read = (value: unknown) => typeof value === 'number' || typeof value === 'string' && value.trim() !== '' ? toNumber(value, Number.NaN) : Number.NaN;
  const height = read(inputs.height);
  const neck = read(inputs.neck);
  const waist = read(inputs.waist);
  const hip = sex === 'female' ? read(inputs.hip) : 0;

  const required: Array<[number, string]> = [
    [height, 'Введите рост больше нуля'],
    [neck, 'Введите обхват шеи больше нуля'],
    [waist, sex === 'male' ? 'Введите обхват живота больше нуля' : 'Введите обхват талии больше нуля'],
  ];
  if (sex === 'female') required.push([hip, 'Введите обхват бёдер больше нуля']);
  for (const [value, message] of required) {
    if (!Number.isFinite(value) || value <= 0) return invalid(message);
  }

  const difference = navyCircumferenceDifference(sex, neck, waist, hip);
  if (difference <= 0) {
    return invalid(sex === 'female'
      ? 'Сумма обхватов талии и бёдер должна быть больше обхвата шеи'
      : 'Обхват живота должен быть больше обхвата шеи');
  }

  const percent = navyBodyFat(sex, height, neck, waist, hip);
  // Формула — регрессия, построенная на реальных телосложениях. За пределами
  // этого диапазона она формально считается, но даёт бессмысленный результат:
  // при талии почти равной шее логарифм уходит в минус бесконечность и процент
  // получается отрицательным. Такую оценку публиковать нельзя.
  if (!Number.isFinite(percent) || percent <= 0 || percent >= 100) {
    return invalid('Сочетание обхватов выходит за пределы применимости метода — проверьте измерения');
  }

  const secondary: CalcResultRow[] = [
    { label: 'Метод расчёта', value: 'Обхваты, метод ВМС США' },
    { label: sex === 'male' ? 'Обхват живота' : 'Обхват талии', value: `${fmtNumber(waist, 1)} см` },
    { label: 'Обхват шеи', value: `${fmtNumber(neck, 1)} см` },
  ];
  if (sex === 'female') {
    secondary.push({ label: 'Обхват бёдер', value: `${fmtNumber(hip, 1)} см` });
    secondary.push({ label: 'Талия плюс бёдра минус шея', value: `${fmtNumber(difference, 1)} см` });
  } else {
    secondary.push({ label: 'Живот минус шея', value: `${fmtNumber(difference, 1)} см` });
  }
  secondary.push({ label: 'Рост', value: `${fmtNumber(height, 1)} см` });

  return {
    primary: { label: 'Процент жира', value: `${fmtNumber(percent, 1)}%` },
    secondary,
    note: 'Историческая оценка по обхватам. У мужчин измеряют живот на уровне пупка, у женщин — естественную талию. Универсальная погрешность не гарантируется; результат не является медицинским заключением.',
  };
};
