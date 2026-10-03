import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { read, valid, unit as lengthUnit, dim, exact, times, ratio, product, sum, INPUT, UNIT, RANGE } from '../../lib/platform/geometryNumericInput';

export const compute: CalcFunction = (inputs) => {
 const fail=(message:string)=>({primary:{label:'Площадь сектора',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
 const u=lengthUnit(inputs.unit === undefined ? 'cm' : inputs.unit);if(!u)return fail(UNIT);
 const r=read(inputs.radius),angle=read(inputs.angle);if(![r,angle].every(Number.isFinite))return fail(INPUT);
 if(!(r>0))return fail('Радиус должен быть больше нуля');if(!(angle>0&&angle<=360))return fail('Угол сектора должен быть больше нуля и не превышать 360 градусов');
 const area=ratio(times(exact(r),exact(r),exact(angle),exact(Math.PI)),exact(360));
 const arc=ratio(times(exact(r),exact(angle),exact(Math.PI)),exact(180));
 // Only the exact full turn is assigned zero. Small legitimate chords are never threshold-clamped.
 const reduced=angle>180?360-angle:angle;
 const halfRadians=ratio(times(exact(reduced),exact(Math.PI)),exact(360));
 const chord=angle===360?0:halfRadians===0?ratio(times(exact(r),exact(reduced),exact(Math.PI)),exact(180)):product(2,r,Math.sin(halfRadians));
 const perimeter=angle===360?arc:sum(arc,product(2,r)),share=ratio(exact(angle),exact(3.6));
 if(!valid(area,arc,perimeter,share)||!Number.isFinite(chord)||(angle!==360&&chord===0))return fail(RANGE);
 const shareText=share!==0&&Math.abs(share)<0.005?dim(share):fmtNumber(share,2);
 return {primary:{label:'Площадь сектора',value:dim(area)+' '+u+'²'},secondary:[{label:'Длина дуги',value:dim(arc)+' '+u},
 {label:'Хорда',value:dim(chord)+' '+u},{label:'Периметр сектора',value:dim(perimeter)+' '+u},{label:'Доля круга',value:shareText+'%'}]};
};
