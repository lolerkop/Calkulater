import type {CalcFunction} from '../../lib/types';
import {fmtInt,fmtNumber}from '../../lib/format';
import{read,integer,optional,mode,positive,finite,decimal,dmul,dadd,div,sub,factor,value,ceiling,flooring,scalar,INPUT,MODE,RANGE,COUNTS}from '../../lib/calculators/buildingLegacy17NumericCore';
export const calcPaint:CalcFunction=inputs=>{
 const fail=(message:string)=>({primary:{label:'Литры краски',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
 const selected=mode(inputs.mode,'manual',['manual','room']);if(!selected)return fail(MODE);
 const length=selected==='room'?read(inputs.length):1,width=selected==='room'?read(inputs.width):1,height=selected==='room'?read(inputs.height):1,manual=selected==='room'?1:read(inputs.area),windows=selected==='room'?integer(inputs.windows??0):0,doors=selected==='room'?integer(inputs.doors??0):0,coats=integer(inputs.coats??2),consumption=read(inputs.consumption),can=read(inputs.canVolume),reserve=optional(inputs.reserve),price=optional(inputs.canPrice);
 if(!finite(length,width,height,manual,consumption,can,reserve,price))return fail(INPUT);if(!finite(windows,doors,coats)||windows<0||doors<0||coats<1)return fail(COUNTS);
 if(!positive(length,width,height,manual,consumption,can)||reserve<0||price<0)return fail('Введите положительные размеры, расход и объём банки; запас и цена неотрицательные');
 const areaD=selected==='room'?sub(dmul(decimal(2),dadd(decimal(length),decimal(width)),decimal(height)),dadd(dmul(decimal(windows),decimal(1.5)),dmul(decimal(doors),decimal(1.8)))):decimal(manual);if(areaD.n<=0n)return fail('Площадь окрашивания после вычета проёмов должна быть положительной');
 const litersD=dmul(areaD,decimal(consumption),decimal(coats),factor(reserve)),area=value(areaD),liters=value(litersD),cans=ceiling(litersD,decimal(can));if(!Number.isFinite(cans))return fail(RANGE);
 const boughtD=dmul(decimal(cans),decimal(can)),left=value(dmul(div(sub(boughtD,litersD),litersD),decimal(100))),cost=value(dmul(decimal(cans),decimal(price)));
 if(!positive(area,liters)||!finite(left,cost)||price>0&&cost===0)return fail(RANGE);
 return{primary:{label:'Литры краски',value:`${scalar(liters,1)} л`},secondary:[{label:'Площадь окрашивания',value:`${scalar(area,2)} м²`},{label:'Слоёв',value:String(coats)},{label:'Количество банок',value:`${fmtInt(cans)} шт. × ${scalar(can,1)} л`},...(reserve>0?[{label:'Заданный запас',value:`${scalar(reserve,1)} %`}]:[]),{label:'Остаток из-за целых банок',value:`${scalar(left,1)} %`},...(price>0?[{label:'Стоимость краски',value:`${scalar(cost,2)} ₽`,accent:'green' as const}]:[])]};
};
export{calcPaint as compute};
