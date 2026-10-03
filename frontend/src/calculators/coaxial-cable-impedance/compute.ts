import type { CalcFunction } from '../../lib/types';
import { read, finite, positive, exact, times, add, negative, evaluated, measure, INPUT, RANGE } from '../../lib/platform/electronicsNumericInput';
// Lossless homogeneous nonmagnetic TEM coax; 138 is the inherited rounded coefficient.
const K = 138, EPS0 = 8.8541878128e-12, C_LIGHT = 299792458;
export const compute: CalcFunction = inputs => {
  const inner=read(inputs.dIn), outer=read(inputs.dOut), eps=read(inputs.eps);
  const fail=(message:string)=>({primary:{label:'Волновое сопротивление',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
  if (!finite(inner,outer,eps)) return fail(INPUT);
  if (!(inner>0)) return fail('Диаметр жилы должен быть больше нуля');
  if (!(outer>inner)) return fail('Внешний диаметр должен быть больше внутреннего');
  if (eps<1) return fail('Для этой модели проницаемость должна быть не меньше единицы');
  const diameterRatio=evaluated(exact(outer),exact(inner));
  // log1p retains the small difference between neighboring large diameters.
  const logRatio=outer/2<=inner ? Math.log1p((outer-inner)/inner) : Math.log(outer)-Math.log(inner);
  const root=Math.sqrt(eps), z=K*logRatio/(Math.LN10*root);
  const capacitance=evaluated(times(exact(2*Math.PI),exact(EPS0),exact(eps),exact(1e12)),exact(logRatio));
  const vf=1/root, delay=evaluated(times(exact(root),exact(1e9)),exact(C_LIGHT));
  if (!positive(diameterRatio,z,capacitance,vf,delay)) return fail(RANGE);
  return {primary:{label:'Волновое сопротивление',value:`${measure(z)} Ом`},secondary:[
    {label:'Ёмкость на метр',value:`${measure(capacitance)} пФ/м`},{label:'Коэффициент укорочения',value:measure(vf)},
    {label:'Задержка на метр',value:`${measure(delay)} нс/м`},{label:'Отношение диаметров',value:measure(diameterRatio)},
  ]};
};
