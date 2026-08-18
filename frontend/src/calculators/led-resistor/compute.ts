import type { CalcFunction } from '../../lib/types';
import { fmtInt, toNumber, toStr } from '../../lib/format';

// Гасящий резистор для светодиода.
//
// Резистор гасит разницу между напряжением питания и прямым напряжением
// светодиода: R = (Us − Uf) / I. Ток вводится в миллиамперах или амперах,
// поэтому первым делом он приводится к амперам — иначе ошибка в тысячу раз
// прошла бы незамеченной, дав правдоподобное, но неверное сопротивление.
//
// Условие Uf < Us проверяется строго. При равенстве гасить нечего, при
// превышении светодиод вообще не откроется, и в обоих случаях формула
// вернула бы ноль или отрицательное сопротивление — то есть число, похожее
// на ответ. Ряд номиналов E12/E24 сознательно не подбирается: это справочник,
// а не расчёт, и в каноникал он не входит.
const AMPS: Record<string, number> = { ma: 0.001, a: 1 };

// Сопротивление показываем четырьмя значащими цифрами: 150 остаётся «150»,
// а 25,142857… становится «25,14». Фиксированные знаки после запятой здесь
// не годятся — диапазон номиналов идёт от долей ома до сотен килоом.
const sig = (value: number, digits = 4) => {
  const clean = Number(value.toPrecision(digits));
  if (Number.isInteger(clean)) return Math.abs(clean) >= 10000 ? fmtInt(clean) : String(clean);
  return String(clean).replace('.', ',');
};

export const compute: CalcFunction = (inputs) => {
  const supply = toNumber(inputs.supplyVoltage);
  const forward = toNumber(inputs.forwardVoltage);
  const unit = toStr(inputs.currentUnit, 'ma');
  const current = toNumber(inputs.current) * (AMPS[unit] ?? 0.001);

  const fail = (message: string) => ({
    primary: { label: 'Сопротивление', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(supply > 0)) return fail('Напряжение питания должно быть больше нуля');
  if (!(forward > 0)) return fail('Прямое напряжение должно быть больше нуля');
  if (forward >= supply) return fail('Прямое напряжение должно быть меньше напряжения питания');
  if (!(current > 0)) return fail('Ток должен быть больше нуля');

  const drop = supply - forward;
  const resistance = drop / current;
  const resistorPower = drop * current;
  const ledPower = forward * current;

  return {
    primary: { label: 'Сопротивление', value: `${sig(resistance)} Ом` },
    secondary: [
      { label: 'Падение на резисторе', value: `${sig(drop)} В` },
      { label: 'Мощность на резисторе', value: `${sig(resistorPower)} Вт` },
      { label: 'Мощность на светодиоде', value: `${sig(ledPower)} Вт` },
      { label: 'Рабочий ток', value: `${sig(current * 1000)} мА` },
    ],
  };
};
