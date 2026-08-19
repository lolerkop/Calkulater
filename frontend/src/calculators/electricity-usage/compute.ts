import type { CalcFunction } from '../../lib/types';
import { fmtMoney, fmtNumber, toNumber, toStr } from '../../lib/format';

// Расход электроэнергии прибором и его стоимость.
//
// Ватты и киловатт-часы — разные величины, и путать их легко: первое это
// мощность, второе — энергия, накопленная за время. Поэтому мощность
// приводится к киловаттам один раз, а дальше всё считается в киловатт-часах.
// Тариф необязателен: без него страница честно показывает только потребление,
// а не подставляет среднюю цену, которой ни у кого нет в квитанции.
export const compute: CalcFunction = (inputs) => {
  const power = toNumber(inputs.power);
  const unit = toStr(inputs.powerUnit, 'w');
  const hoursPerDay = toNumber(inputs.hoursPerDay);
  const days = Math.round(toNumber(inputs.days));
  const tariff = toNumber(inputs.tariff);

  const fail = (message: string) => ({
    primary: { label: 'Расход энергии', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(power > 0)) return fail('Мощность должна быть больше нуля');
  if (hoursPerDay < 0 || hoursPerDay > 24) return fail('Часов в сутки может быть от 0 до 24');
  if (!(days > 0)) return fail('Число дней должно быть больше нуля');

  const kilowatts = unit === 'kw' ? power : power / 1000;
  const perDay = kilowatts * hoursPerDay;
  const total = perDay * days;

  const secondary = [
    { label: 'В сутки', value: `${fmtNumber(perDay, 2)} кВт·ч` },
    { label: 'За 30 дней', value: `${fmtNumber(perDay * 30, 2)} кВт·ч` },
    { label: 'Мощность', value: `${fmtNumber(kilowatts, 3)} кВт` },
  ];

  if (tariff > 0) {
    secondary.push({ label: 'Стоимость за период', value: fmtMoney(total * tariff) });
    secondary.push({ label: 'Стоимость за 30 дней', value: fmtMoney(perDay * 30 * tariff) });
  }

  return {
    primary: { label: 'Расход энергии', value: `${fmtNumber(total, 2)} кВт·ч` },
    secondary,
  };
};
