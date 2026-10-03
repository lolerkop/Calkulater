import type {CalcFunction} from '../types';
import {fmtInt,fmtNumber}from '../format';
import{read,integer,optional,mode,positive,finite,decimal,dmul,dadd,div,sub,factor,value,ceiling,flooring,scalar,INPUT,MODE,RANGE,COUNTS}from './buildingLegacy17NumericCore';
export const calcScreed:CalcFunction=inputs=>{
 const fail=(message:string,label='Проверьте данные')=>({primary:{label:'Объём раствора',value:'—'},secondary:[{label,value:message,accent:'red' as const}]});
 const selected=mode(inputs.mode,'room',['room','area']);if(!selected)return fail(MODE);
 const length=selected==='room'?read(inputs.length):1,width=selected==='room'?read(inputs.width):1,manual=selected==='room'?1:read(inputs.manualArea),thickness=read(inputs.thickness),consumption=optional(inputs.mixConsumption,18),bag=optional(inputs.bagWeight,25),reserve=optional(inputs.reserve),price=optional(inputs.bagPrice);
 if(!finite(length,width,manual,thickness,consumption,bag,reserve,price))return fail(INPUT);
 if(!positive(length,width,manual,thickness))return fail('Введите положительные размеры и толщину');if(bag<=0)return fail('Вес мешка должен быть больше нуля','Ошибка');
 if(consumption<0||reserve<0||price<0)return fail('Расход, запас и цена должны быть неотрицательными');
 const areaD=selected==='room'?dmul(decimal(length),decimal(width)):decimal(manual),stockD=dmul(areaD,decimal(thickness),factor(reserve)),volume=value(div(stockD,decimal(100))),mixD=dmul(stockD,decimal(consumption)),mix=value(mixD),bags=ceiling(mixD,decimal(bag)),wholeKg=ceiling(mixD),cost=Number.isFinite(bags)?value(dmul(decimal(bags),decimal(price))):NaN,area=value(areaD);
 if(!positive(volume,area)||!finite(mix,bags,wholeKg,cost)||consumption>0&&mix===0||price>0&&bags>0&&cost===0)return fail(RANGE);
 return{primary:{label:'Объём раствора',value:`${scalar(volume,3)} м³`},secondary:[{label:'Площадь',value:`${scalar(area,2)} м²`},{label:'Толщина слоя',value:`${scalar(thickness,1)} см`},{label:'Сухая смесь',value:`${fmtInt(wholeKg)} кг`},{label:'Мешков',value:`${fmtInt(bags)} шт.`,accent:'green' as const},...(price>0?[{label:'Стоимость смеси',value:`${scalar(cost,2)} ₽`}]:[])]};
};
