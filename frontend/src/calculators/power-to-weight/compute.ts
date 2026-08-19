import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Удельная мощность автомобиля.
//
// Лошадиная сила здесь метрическая (PS) — ровно 735,49875 Вт, то есть
// 75 кгс·м/с при g = 9,80665. Именно её пишут в документах на транспортное
// средство в России и Европе. Механическая hp в 745,699872 Вт отличается на
// полтора процента, и подмена одной другой тихо испортила бы любое сравнение,
// поэтому используется только метрическая.
//
// Три вывода — не семейство единиц и не конвертер: это одна и та же удельная
// мощность, показанная так, как её привыкли обсуждать. Обратная величина
// «килограммы на силу» полезна тем, что меньшее значение означает лучшую
// динамику, и её часто помнят именно в таком виде.
const WATTS_PER_PS = 735.49875;

export const compute: CalcFunction = (inputs) => {
  const power = toNumber(inputs.power);
  const unit = toStr(inputs.powerUnit, 'ps');
  const mass = toNumber(inputs.mass);
  const payload = toNumber(inputs.payload);

  const fail = (message: string) => ({
    primary: { label: 'Удельная мощность', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(power > 0)) return fail('Мощность должна быть больше нуля');
  if (!(mass > 0)) return fail('Масса должна быть больше нуля');
  if (payload < 0) return fail('Дополнительная нагрузка не может быть отрицательной');

  const totalMass = mass + payload;
  const kilowatts = unit === 'kw' ? power : (power * WATTS_PER_PS) / 1000;
  const metricHp = unit === 'kw' ? (power * 1000) / WATTS_PER_PS : power;
  const tonnes = totalMass / 1000;

  const secondary = [
    { label: 'Лошадиных сил на тонну', value: `${fmtNumber(metricHp / tonnes, 2)} л.с./т` },
    { label: 'Килограммов на силу', value: `${fmtNumber(totalMass / metricHp, 2)} кг/л.с.` },
    { label: 'Мощность', value: `${fmtNumber(kilowatts, 2)} кВт = ${fmtNumber(metricHp, 2)} л.с.` },
    { label: 'Расчётная масса', value: `${fmtNumber(totalMass, 0)} кг` },
  ];

  // Нагрузка задана — показываем, сколько удельной мощности она забрала.
  // Без неё строки нет: сравнивать не с чем.
  if (payload > 0) {
    secondary.push({
      label: 'Без нагрузки было бы',
      value: `${fmtNumber(kilowatts / (mass / 1000), 2)} кВт/т`,
    });
  }

  return {
    primary: { label: 'Удельная мощность', value: `${fmtNumber(kilowatts / tonnes, 2)} кВт/т` },
    secondary,
  };
};
