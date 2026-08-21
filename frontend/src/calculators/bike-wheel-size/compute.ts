import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Размер и окружность велосипедного колеса.
//
// Два способа задания, потому что на ободе написано одно, а в разговоре
// используется другое. ETRTO даёт посадочный диаметр обода и ширину покрышки в
// миллиметрах, и диаметр колеса равен обод + ДВЕ ширины: покрышка стоит и
// сверху, и снизу. Дюймовый размер — округлённое наследие, поэтому «26 дюймов»
// и ETRTO 559 дают разные числа: считается именно то, что введено.
//
// Окружность нужна велокомпьютеру и калькулятору передач: bike-gear-ratio
// принимает её как вход, а получить её неоткуда, кроме как отсюда или из
// таблицы на коробке.

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'etrto');
  const fail = (message: string) => ({
    primary: { label: 'Длина окружности', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  let diameter: number;
  if (mode === 'etrto') {
    const rim = toNumber(inputs.etrtoRim);
    const tire = toNumber(inputs.etrtoTire);
    if (!(rim > 0)) return fail('Посадочный диаметр обода должен быть больше нуля');
    if (!(tire >= 0)) return fail('Ширина покрышки не может быть отрицательной');
    diameter = rim + 2 * tire;
  } else if (mode === 'inches') {
    const inches = toNumber(inputs.inches);
    if (!(inches > 0)) return fail('Диаметр в дюймах должен быть больше нуля');
    diameter = inches * 25.4;
  } else {
    return fail('Неизвестный режим');
  }

  const circumference = Math.PI * diameter;
  const measure = (x: number) => formatMeasure(x, fmtNumber);

  return {
    primary: { label: 'Длина окружности', value: `${measure(circumference)} мм` },
    secondary: [
      { label: 'Диаметр', value: `${measure(diameter)} мм` },
      { label: 'Диаметр в дюймах', value: measure(diameter / 25.4) },
      { label: 'Оборотов на километр', value: measure(1000000 / circumference) },
      { label: 'Радиус', value: `${measure(diameter / 2)} мм` },
    ],
  };
};
