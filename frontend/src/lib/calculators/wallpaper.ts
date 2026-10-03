import type {CalcFunction} from '../types';
import {fmtInt,fmtNumber}from '../format';
import{read,integer,optional,mode,positive,finite,decimal,dmul,dadd,div,sub,factor,value,ceiling,flooring,scalar,INPUT,MODE,RANGE,COUNTS}from './buildingLegacy17NumericCore';
export const calcWallpaper:CalcFunction=inputs=>{
 const fail=(message:string)=>({primary:{label:'Количество рулонов',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
 const length=read(inputs.length),width=read(inputs.width),height=read(inputs.height),rollWidth=read(inputs.rollWidth),rollLength=read(inputs.rollLength),windows=integer(inputs.windows??0),doors=integer(inputs.doors??0),pattern=optional(inputs.pattern),price=optional(inputs.rollPrice);
 if(!finite(length,width,height,rollWidth,rollLength,pattern,price))return fail(INPUT);
 if(!finite(windows,doors)||windows<0||doors<0)return fail(COUNTS);
 if(!positive(length,width,height,rollWidth,rollLength)||pattern<0||price<0)return fail('Введите положительные размеры и неотрицательные раппорт и цену');
 const perimeterD=dmul(decimal(2),dadd(decimal(length),decimal(width))),rawArea=sub(dmul(perimeterD,decimal(height)),dadd(dmul(decimal(windows),decimal(1.5)),dmul(decimal(doors),decimal(1.8)))),wallD=rawArea.n>0n?rawArea:decimal(0),patternD=div(decimal(pattern),decimal(100));
 const repeat=pattern>0?ceiling(decimal(height),patternD):1;if(!Number.isFinite(repeat))return fail(RANGE);
 const stripD=pattern>0?dmul(decimal(repeat),patternD):decimal(height),perRoll=flooring(decimal(rollLength),stripD),strips=ceiling(wallD,dmul(decimal(height),decimal(rollWidth)));
 if(!finite(perRoll,strips))return fail(RANGE);if(perRoll<1)return fail('Из рулона не получается ни одного полного полотна');
 const rolls=ceiling(decimal(strips),decimal(perRoll));if(!Number.isFinite(rolls))return fail(RANGE);
 const area=value(wallD),perimeter=value(perimeterD),boughtD=dmul(decimal(rolls),decimal(rollWidth),decimal(rollLength)),reserve=area>0?Math.max(0,value(dmul(div(sub(boughtD,wallD),wallD),decimal(100)))):0,cost=value(dmul(decimal(rolls),decimal(price)));
 if(!finite(rolls,area,perimeter,reserve,cost)||!positive(perimeter)||rawArea.n>0n&&area===0||price>0&&rolls>0&&cost===0)return fail(RANGE);
 return{primary:{label:'Количество рулонов',value:`${fmtInt(rolls)} шт.`},secondary:[{label:'Площадь стен',value:`${scalar(area,2)} м²`},{label:'Периметр',value:`${scalar(perimeter,2)} м`},{label:'Количество полотен',value:`${fmtInt(strips)} шт.`},{label:'Полотен из рулона',value:`${fmtInt(perRoll)} шт.`},{label:'Запас',value:`${scalar(reserve,1)} %`},...(price>0?[{label:'Стоимость обоев',value:`${scalar(cost,2)} ₽`,accent:'green' as const}]:[])]};
};
