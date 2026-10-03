import type { CalcFunction } from '../../lib/types';
import { read, valid, unit as lengthUnit, dim, product, INPUT, MODE, UNIT, RANGE } from '../../lib/platform/geometryNumericInput';

export const compute: CalcFunction = (inputs) => {
 const fail=(message:string)=>({primary:{label:'Объём',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
 const u=lengthUnit(inputs.unit === undefined ? 'cm' : inputs.unit);if(!u)return fail(UNIT);
 const mode=inputs.mode === undefined ? 'side' : inputs.mode;if(mode!=='side'&&mode!=='area'&&mode!=='volume')return fail(MODE);
 const known=read(inputs[mode]);if(!Number.isFinite(known))return fail(INPUT);if(!(known>0))return fail('Известная величина куба должна быть больше нуля');
 const a=mode==='side'?known:mode==='volume'?Math.cbrt(known):Math.sqrt(known)/Math.sqrt(6);
 const volume=mode==='volume'?known:product(a,a,a),area=mode==='area'?known:product(6,a,a);
 const space=product(a,Math.sqrt(3)),face=product(a,Math.SQRT2),edges=product(12,a);
 if(!valid(a,volume,area,space,face,edges))return fail(RANGE);
 const rows=[{label:'Площадь поверхности',value:dim(area)+' '+u+'²'}, {label:'Диагональ куба',value:dim(space)+' '+u},
 {label:'Диагональ грани',value:dim(face)+' '+u},{label:'Сумма рёбер',value:dim(edges)+' '+u}];
 return mode==='side'?{primary:{label:'Объём',value:dim(volume)+' '+u+'³'},secondary:rows}:
 {primary:{label:'Ребро',value:dim(a)+' '+u},secondary:[{label:'Объём',value:dim(volume)+' '+u+'³'},...rows]};
};
