import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { INPUT, RANGE, finite, mode, read, exact, add, times, evaluated, measure } from '../rafters/buildingWave16Numeric';
// Fixed illustrative densities at 12% MC and an explicitly chosen linear product model.
const WOOD:Record<string,number>={pine:520,spruce:450,birch:650,oak:700,larch:660,aspen:490};
export const compute:CalcFunction=inputs=>{
 const species=mode(inputs.species,'pine',Object.keys(WOOD)),volume=read(inputs.volume),moisture=read(inputs.moisture);
 const fail=(value:string)=>({primary:{label:'Масса',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!species)return fail('Неизвестная порода древесины');
 if(!finite(volume,moisture))return fail(INPUT);
 if(!(volume>0))return fail('Объём должен быть больше нуля');
 if(moisture<0||moisture>100)return fail('Влажность должна быть от 0 до 100 %');
 const base=WOOD[species],factor=add(exact(88),exact(moisture));
 const density=evaluated(times(exact(base),factor),exact(100)),mass=evaluated(times(exact(volume),exact(base),factor),exact(100));
 if(!finite(density,mass))return fail(RANGE);
 return {primary:{label:'Масса',value:`${measure(mass)} кг`},secondary:[{label:'Плотность при заданной влажности',value:`${measure(density)} кг/м³`},{label:'Базовая плотность при 12 %',value:`${measure(base)} кг/м³`},{label:'Объём',value:`${measure(volume)} м³`},{label:'Килограммов на кубометр',value:measure(density)}],note:'Плотности при 12 % — фиксированные параметры модели; линейная поправка не учитывает изменение объёма и разброс свойств реальной древесины.'};
};
