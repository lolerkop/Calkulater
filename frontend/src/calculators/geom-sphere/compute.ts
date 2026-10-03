import type { CalcFunction } from '../../lib/types';
import { read, valid, unit as lengthUnit, dim, exact, times, scale, ratio, product, INPUT, MODE, UNIT, RANGE } from '../../lib/platform/geometryNumericInput';

export const compute: CalcFunction = (inputs) => {
 const fail=(message:string)=>({primary:{label:'Объём',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
 const u=lengthUnit(inputs.unit === undefined ? 'cm' : inputs.unit);if(!u)return fail(UNIT);
 const mode=inputs.mode === undefined ? 'radius' : inputs.mode;if(mode!=='radius'&&mode!=='diameter'&&mode!=='volume')return fail(MODE);
 const known=read(inputs[mode==='radius'?'r':mode==='diameter'?'d':'volume']);if(!Number.isFinite(known))return fail(INPUT);
 if(!(known>0))return fail('Известная величина шара должна быть больше нуля');
 let r=known;
 if(mode==='diameter')r=known/2;
 if(mode==='volume'){
   // Scale the rational before taking a cube root: 3V/(4π) may itself underflow although its root is representable.
   const dyadic=exact(known),leading=dyadic.coefficient.toString(2).length-1+dyadic.exponent,shift=3*Math.floor(leading/3);
   r=Math.cbrt(ratio(times(exact(3),scale(dyadic,-shift)),times(exact(4),exact(Math.PI))))*2**(shift/3);
 }
 const volume=mode==='volume'?known:ratio(times(exact(4),exact(Math.PI),exact(r),exact(r),exact(r)),exact(3));
 const area=product(4,Math.PI,r,r),diameter=mode==='diameter'?known:product(2,r);
 if(!valid(r,volume,area,diameter))return fail(RANGE);
 return {primary:{label:'Объём',value:dim(volume)+' '+u+'³'},secondary:[{label:'Площадь поверхности',value:dim(area)+' '+u+'²'},
 {label:'Радиус',value:dim(r)+' '+u},{label:'Диаметр',value:dim(diameter)+' '+u}]};
};
