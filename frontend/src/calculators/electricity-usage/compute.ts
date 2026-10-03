import { number as toNumber, optionalNumber, integer, validOutput } from '../../lib/platform/scalarInputDisplay';
import type { CalcFunction } from '../../lib/types';
import { fmtMoney, fmtNumber, preserveNonZero } from '../../lib/format';

// Расход электроэнергии прибором и его стоимость.
//
// Ватты и киловатт-часы — разные величины, и путать их легко: первое это
// мощность, второе — энергия, накопленная за время. Поэтому мощность
// приводится к киловаттам один раз, а дальше всё считается в киловатт-часах.
// Тариф необязателен: без него страница честно показывает только потребление,
// а не подставляет среднюю цену, которой ни у кого нет в квитанции.
export const compute: CalcFunction = (inputs) => {
  const power = toNumber(inputs.power);
  const unit = inputs.powerUnit === undefined ? 'w' : inputs.powerUnit;
  const hoursPerDay = toNumber(inputs.hoursPerDay);
  const days = integer(inputs.days);
  const tariff = optionalNumber(inputs.tariff);

  const fail = (message: string) => ({
    primary: { label: 'Расход энергии', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (unit !== 'w' && unit !== 'kw') return fail('Выберите корректную единицу мощности');
  if (power === null || hoursPerDay === null || tariff === null) return fail('Введите корректные числовые данные');
  if (days === null) return fail('Количество должно быть целым в допустимом диапазоне');
  if (tariff < 0) return fail('Тариф не может быть отрицательным');

  if (!(power > 0)) return fail('Мощность должна быть больше нуля');
  if (hoursPerDay < 0 || hoursPerDay > 24) return fail('Часов в сутки может быть от 0 до 24');
  if (!(days > 0)) return fail('Число дней должно быть больше нуля');

  const kilowatts = unit === 'kw' ? power : power / 1000;
  const perDay = kilowatts * hoursPerDay;
  const total = perDay * days;

  if (!validOutput(kilowatts, true) || ![perDay, total, perDay * 30, total * tariff, perDay * 30 * tariff].every(v => validOutput(v)) || (hoursPerDay > 0 && perDay === 0) || (tariff > 0 && hoursPerDay > 0 && total * tariff === 0)) return fail('Результат вне допустимого диапазона');

  const secondary = [
    { label: 'В сутки', value: `${fmtNumber(preserveNonZero(perDay, 2), 2)} кВт·ч` },
    { label: 'За 30 дней', value: `${fmtNumber(preserveNonZero(perDay * 30, 2), 2)} кВт·ч` },
    { label: 'Мощность', value: `${fmtNumber(preserveNonZero(kilowatts, 3), 3)} кВт` },
  ];

  if (tariff > 0) {
    secondary.push({ label: 'Стоимость за период', value: fmtMoney(preserveNonZero(total * tariff, 2)) });
    secondary.push({ label: 'Стоимость за 30 дней', value: fmtMoney(preserveNonZero(perDay * 30 * tariff, 2)) });
  }

  return {
    primary: { label: 'Расход энергии', value: `${fmtNumber(preserveNonZero(total, 2), 2)} кВт·ч` },
    secondary,
  };
};
