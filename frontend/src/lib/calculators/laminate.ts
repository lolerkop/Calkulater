import type {CalcFunction} from '../types';
import {fmtInt,fmtNumber}from '../format';
import{read,integer,optional,mode,positive,finite,decimal,dmul,dadd,div,sub,factor,value,ceiling,flooring,scalar,INPUT,MODE,RANGE,COUNTS}from './buildingLegacy17NumericCore';
export function laminatePacks(length:number,width:number,packArea:number,reservePct:number):{area:number;areaWithReserve:number;packs:number}{
 if(!positive(length,width,packArea)||!Number.isFinite(reservePct)||reservePct<0)return{area:NaN,areaWithReserve:NaN,packs:NaN};
 const areaD=dmul(decimal(length),decimal(width)),stockD=dmul(areaD,factor(reservePct));return{area:value(areaD),areaWithReserve:value(stockD),packs:ceiling(stockD,decimal(packArea))};
}
export const calcLaminate:CalcFunction=inputs=>{
 const fail=(message:string)=>({primary:{label:'Количество упаковок',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
 const length=read(inputs.length),width=read(inputs.width),pack=read(inputs.packArea),reserve=optional(inputs.reserve),price=optional(inputs.packPrice),underlay=optional(inputs.underlayPrice);
 if(!finite(length,width,pack,reserve,price,underlay))return fail(INPUT);
 if(!positive(length,width,pack)||reserve<0||price<0||underlay<0)return fail('Введите положительные размеры и неотрицательные запас и цены');
 const{area,areaWithReserve,packs}=laminatePacks(length,width,pack,reserve);if(!positive(area,areaWithReserve)||!Number.isFinite(packs))return fail(RANGE);
 const cost=value(dadd(dmul(decimal(packs),decimal(price)),dmul(dmul(decimal(length),decimal(width)),decimal(underlay))));if(!Number.isFinite(cost)||(price>0||underlay>0)&&cost===0)return fail(RANGE);
 return{primary:{label:'Количество упаковок',value:`${fmtInt(packs)} шт.`},secondary:[{label:'Площадь пола',value:`${scalar(area,2)} м²`},{label:'Площадь с запасом',value:`${scalar(areaWithReserve,2)} м²`},{label:'Площадь упаковки',value:`${scalar(pack,2)} м²`},{label:'Запас',value:`${scalar(reserve,0)} %`},...(price>0||underlay>0?[{label:'Ориентировочная стоимость',value:`${scalar(cost,2)} ₽`,accent:'green' as const}]:[])]};
};
