import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { INPUT, MODE, RANGE, finite, mode, read, exact, add, times, evaluated, mul, scalar } from '../rafters/buildingWave16Numeric';
export const compute:CalcFunction=inputs=>{
 const chosen=mode(inputs.mode,'dimensions',['dimensions','area']),height=read(inputs.height);
 const fail=(value:string)=>({primary:{label:'Объём помещения',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!chosen)return fail(MODE);
 const byDimensions=chosen==='dimensions',length=byDimensions?read(inputs.length):0,width=byDimensions?read(inputs.width):0,area=byDimensions?0:read(inputs.area);
 if(!finite(height,length,width,area))return fail(INPUT);
 if(height<=0)return fail('Высота должна быть больше нуля');
 if(byDimensions&&(length<=0||width<=0))return fail('Длина и ширина должны быть больше нуля');
 if(!byDimensions&&area<=0)return fail('Площадь должна быть больше нуля');
 const floor=byDimensions?mul(length,width):area,volume=byDimensions?mul(length,width,height):mul(area,height);
 const perimeter=byDimensions?evaluated(times(exact(2),add(exact(length),exact(width)))):0;
 const walls=byDimensions?evaluated(times(exact(2),add(exact(length),exact(width)),exact(height))):0;
 if(!finite(floor,volume,perimeter,walls))return fail(RANGE);
 return {primary:{label:'Объём помещения',value:`${scalar(volume,2)} м³`},secondary:[{label:'Площадь пола',value:`${scalar(floor,2)} м²`},{label:'Высота',value:`${scalar(height,2)} м`},...(byDimensions?[{label:'Периметр',value:`${scalar(perimeter,2)} м`},{label:'Площадь стен',value:`${scalar(walls,2)} м²`}]:[])]};
};
