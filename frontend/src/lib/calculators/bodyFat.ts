import type { CalcFunction, CalcResultRow } from '../types';
import { fmtNumber, toNumber, toStr } from '../format';

// Метод окружностей ВМС США (Hodgdon & Beckett, Naval Health Research Center,
// отчёты 84-11 для мужчин и 84-29 для женщин, 1984). Регрессия построена по
// обхватам и росту и калибрована по гидростатическому взвешиванию.
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
  const sex = toStr(inputs.sex, 'male') === 'female' ? 'female' : 'male';
  const height = toNumber(inputs.height);
  const neck = toNumber(inputs.neck);
  const waist = toNumber(inputs.waist);
  const hip = sex === 'female' ? toNumber(inputs.hip) : 0;

  const required: Array<[number, string]> = [
    [height, 'Введите рост больше нуля'],
    [neck, 'Введите обхват шеи больше нуля'],
    [waist, 'Введите обхват талии больше нуля'],
  ];
  if (sex === 'female') required.push([hip, 'Введите обхват бёдер больше нуля']);
  for (const [value, message] of required) {
    if (!Number.isFinite(value) || value <= 0) return invalid(message);
  }

  const difference = navyCircumferenceDifference(sex, neck, waist, hip);
  if (difference <= 0) {
    return invalid(sex === 'female'
      ? 'Сумма обхватов талии и бёдер должна быть больше обхвата шеи'
      : 'Обхват талии должен быть больше обхвата шеи');
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
    { label: 'Обхват талии', value: `${fmtNumber(waist, 1)} см` },
    { label: 'Обхват шеи', value: `${fmtNumber(neck, 1)} см` },
  ];
  if (sex === 'female') {
    secondary.push({ label: 'Обхват бёдер', value: `${fmtNumber(hip, 1)} см` });
    secondary.push({ label: 'Талия плюс бёдра минус шея', value: `${fmtNumber(difference, 1)} см` });
  } else {
    secondary.push({ label: 'Талия минус шея', value: `${fmtNumber(difference, 1)} см` });
  }
  secondary.push({ label: 'Рост', value: `${fmtNumber(height, 1)} см` });

  return {
    primary: { label: 'Процент жира', value: `${fmtNumber(percent, 1)}%` },
    secondary,
    note: 'Это оценка по обхватам, а не измерение. Погрешность метода составляет несколько процентных пунктов и растёт при неточных замерах ленты. Результат не является медицинским заключением.',
  };
};
