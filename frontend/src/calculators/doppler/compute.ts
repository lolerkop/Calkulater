import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure, formatStatistic } from '../../lib/platform/measurement';

// Эффект Доплера: f′ = f · (c + v_наблюдателя) / (c − v_источника).
//
// Знак скоростей задан прямо: положительное направление — НАВСТРЕЧУ. Источник,
// который приближается, повышает частоту; удаляющийся понижает. Это две разные
// формулы в учебниках только потому, что там знак прячут в текст, а здесь он
// живёт в самом поле.
//
// Источник быстрее волны отвергается: при v_источника ≥ c знаменатель обращается
// в нуль или меняет знак, и формула перестаёт описывать происходящее — там
// начинается ударная волна, а не сдвиг частоты.
export const compute: CalcFunction = (inputs) => {
  const f = toNumber(inputs.f);
  const vSource = toNumber(inputs.vSource);
  const vObserver = toNumber(inputs.vObserver);
  const c = toNumber(inputs.c);
  const fail = (message: string) => ({
    primary: { label: 'Наблюдаемая частота', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(f > 0)) return fail('Частота источника должна быть больше нуля');
  if (!(c > 0)) return fail('Скорость волны должна быть больше нуля');
  if (vSource >= c) return fail('Источник не может двигаться быстрее волны: там начинается ударная волна');

  const observed = (f * (c + vObserver)) / (c - vSource);
  const m = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;
  return {
    primary: { label: 'Наблюдаемая частота', value: m(observed, 'Гц') },
    secondary: [
      { label: 'Сдвиг частоты', value: m(observed - f, 'Гц') },
      { label: 'Относительный сдвиг', value: `${formatStatistic(((observed - f) / f) * 100, fmtNumber)} %` },
      { label: 'Скорость волны', value: m(c, 'м/с') },
      { label: 'Исходная частота', value: m(f, 'Гц') },
    ],
  };
};
