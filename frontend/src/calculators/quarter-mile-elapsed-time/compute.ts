import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Время и скорость на четверти мили по эмпирике Роджера Хантингтона.
//
// Формула открытая и старая: она связывает результат заезда только с массой и
// мощностью, потому что на длинной дистанции всё решает удельная мощность, а
// не сцепление. Именно поэтому она хорошо описывает обычные машины и заметно
// ошибается на подготовленных драгстерах, где половина результата — старт.
//
// Масса переводится в фунты внутри: коэффициенты 5,825 и 234 определены именно
// для фунтов и лошадиных сил, и подставлять в них килограммы нельзя.
const LB_IN_KG = 2.2046226218;
const ET_K = 5.825;
const TRAP_K = 234;
const MILE_KM = 1.609344;
const KG_IN_T = 1000;

export const compute: CalcFunction = (inputs) => {
  const power = toNumber(inputs.power);
  const mass = toNumber(inputs.mass);
  const fail = (message: string) => ({
    primary: { label: 'Время четверти мили', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(power > 0)) return fail('Мощность должна быть больше нуля');
  if (!(mass > 0)) return fail('Масса должна быть больше нуля');

  const pounds = mass * LB_IN_KG;
  const elapsed = ET_K * Math.cbrt(pounds / power);
  const trapMph = TRAP_K * Math.cbrt(power / pounds);

  return {
    primary: { label: 'Время четверти мили', value: `${formatMeasure(elapsed, fmtNumber)} с` },
    secondary: [
      { label: 'Скорость на финише', value: `${formatMeasure(trapMph * MILE_KM, fmtNumber)} км/ч` },
      { label: 'Удельная мощность', value: `${formatMeasure(power / (mass / KG_IN_T), fmtNumber)} л.с./т` },
      { label: 'Масса в фунтах', value: `${formatMeasure(pounds, fmtNumber)} фунт` },
      { label: 'Скорость на финише в милях в час', value: `${formatMeasure(trapMph, fmtNumber)} миль/ч` },
    ],
  };
};
