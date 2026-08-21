import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Длина трубы тёплого пола.
//
// Краевая зона укладывается чаще основной: у наружных стен потери больше, и
// шаг там меньше. Поэтому площадь делится на две части со своими шагами, а не
// считается одним средним шагом — среднее дало бы правдоподобное число и
// холодную полосу вдоль окна.
//
// Число петель округляется ВВЕРХ: труба длиннее предела не проходит по
// гидравлике, и «2,3 петли» означает три.

export const compute: CalcFunction = (inputs) => {
  const area = toNumber(inputs.area);
  const step = toNumber(inputs.step);
  const loopMax = toNumber(inputs.loopMax);
  const edgeZone = toNumber(inputs.edgeZone);
  const edgeStep = toNumber(inputs.edgeStep);
  const waste = toNumber(inputs.waste);
  const fail = (message: string) => ({
    primary: { label: 'Длина трубы', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(area > 0)) return fail('Площадь должна быть больше нуля');
  if (!(step > 0) || !(edgeStep > 0)) return fail('Шаг укладки должен быть больше нуля');
  if (!(loopMax > 0)) return fail('Предельная длина петли должна быть больше нуля');
  if (edgeZone < 0 || edgeZone >= area) return fail('Краевая зона должна быть меньше всей площади');
  if (waste < 0 || waste > 50) return fail('Запас должен быть от 0 до 50 %');

  const mainArea = area - edgeZone;
  const length = (mainArea / step + edgeZone / edgeStep) * (1 + waste / 100);
  const loops = Math.ceil(length / loopMax);
  const measure = (x: number) => formatMeasure(x, fmtNumber);

  return {
    primary: { label: 'Длина трубы', value: `${measure(length)} м` },
    secondary: [
      { label: 'Петель', value: fmtNumber(loops, 0) },
      { label: 'На петлю', value: `${measure(length / loops)} м` },
      { label: 'Площадь', value: `${measure(area)} м²` },
      { label: 'Основная зона', value: `${measure(mainArea)} м²` },
      { label: 'Краевая зона', value: `${measure(edgeZone)} м²` },
    ],
  };
};
