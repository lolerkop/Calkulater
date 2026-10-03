import { read, finite, mode as selectedMode, INPUT, MODE, RANGE, exact, times, evaluated, mul, decimal, dproduct, dmul, ceilDecimal, scalar } from '../beam-deflection/buildingWave13Numeric';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';


const kg = (value: number): string => `${scalar(value, 2)} кг`;

export const compute: CalcFunction = (inputs) => {
  const mode = selectedMode(inputs.mode, 'area', ['area','dimensions']);
  const thickness = read(inputs.thickness);
  const consumption = read(inputs.consumption);
  const bagWeight = read(inputs.bagWeight);
  const fail = (message: string) => ({
    primary: { label: 'Масса сухой смеси', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (mode === null) return fail(MODE);
  const length = mode === 'dimensions' ? read(inputs.length) : 1;
  const height = mode === 'dimensions' ? read(inputs.height) : 1;
  const suppliedArea = mode === 'area' ? read(inputs.area) : 1;
  if (!finite(length,height,suppliedArea,thickness,consumption,bagWeight)) return fail(INPUT);
  if (!(length > 0) || !(height > 0)) return fail(INPUT);
  const areaD = mode === 'dimensions' ? times(exact(length),exact(height)) : exact(suppliedArea);
  const area = evaluated(areaD);

  if (mode === null) return fail(MODE);
  if (!(area > 0)) return fail('Площадь должна быть больше нуля');
  if (!(thickness > 0)) return fail('Толщина слоя должна быть больше нуля');
  if (!(consumption > 0)) return fail('Расход смеси должен быть больше нуля');
  if (!(bagWeight > 0)) return fail('Вес мешка должен быть больше нуля');

  const mass = evaluated(times(areaD,exact(thickness),exact(consumption)));
  const areaDecimal = mode === 'dimensions' ? dproduct(length,height) : decimal(suppliedArea);
  const count = ceilDecimal(dmul(areaDecimal,dproduct(thickness,consumption)),decimal(bagWeight));
  const rate = mul(thickness,consumption);
  if (!finite(area,mass,count,rate)) return fail(RANGE);
  return {
    primary: { label: 'Масса сухой смеси', value: kg(mass) },
    secondary: [
      { label: 'Мешков', value: `${fmtNumber(count, 0)} шт` },
      { label: 'Расход на м²', value: kg(rate) },
      { label: 'Площадь', value: `${scalar(area, 2)} м²` },
    ],
  };
};
