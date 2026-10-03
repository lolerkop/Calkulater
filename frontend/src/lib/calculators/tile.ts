import type {CalcFunction} from '../types';
import {fmtInt,fmtNumber}from '../format';
import{read,integer,optional,mode,positive,finite,decimal,dmul,dadd,div,sub,factor,value,ceiling,flooring,scalar,INPUT,MODE,RANGE,COUNTS}from './buildingLegacy17NumericCore';
export const calcTile:CalcFunction=inputs=>{
 const fail=(message:string)=>({primary:{label:'Количество плиток',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
 const selected=mode(inputs.mode,'room',['room','area','manual']);if(!selected)return fail(MODE);
 const length=selected==='room'?read(inputs.length):1,width=selected==='room'?read(inputs.width):1,manual=selected==='room'?1:read(inputs.manualArea),a=read(inputs.tileLength),b=read(inputs.tileWidth),pack=read(inputs.packArea),reserve=optional(inputs.reserve),glue=optional(inputs.glueConsumption,5),price=optional(inputs.packPrice);
 if(!finite(length,width,manual,a,b,pack,reserve,glue,price))return fail(INPUT);
 if(!positive(length,width,manual,a,b,pack)||reserve<0||glue<0||price<0)return fail('Введите положительные размеры и неотрицательные запас, расход и цену');
 const areaD=selected==='room'?dmul(decimal(length),decimal(width)):decimal(manual),stockD=dmul(areaD,factor(reserve)),tileD=div(dmul(decimal(a),decimal(b)),decimal(10000));
 const area=value(areaD),stock=value(stockD),tiles=ceiling(stockD,tileD),packs=ceiling(stockD,decimal(pack)),glueKg=value(dmul(stockD,decimal(glue)));
 if(!finite(tiles,packs))return fail(RANGE);
 const cost=value(dmul(decimal(packs),decimal(price)));
 if(!positive(area,stock)||!finite(tiles,packs,glueKg,cost)||glue>0&&glueKg===0||price>0&&cost===0)return fail(RANGE);
 return{primary:{label:'Количество плиток',value:`${fmtInt(tiles)} шт.`},secondary:[{label:'Площадь',value:`${scalar(area,2)} м²`},{label:'Площадь с запасом',value:`${scalar(stock,2)} м²`},{label:'Количество упаковок',value:`${fmtInt(packs)} шт.`},{label:'Примерный расход клея',value:`${glueKg>0&&glueKg<1?scalar(glueKg,3):fmtInt(glueKg)} кг`},...(price>0?[{label:'Стоимость плитки',value:`${scalar(cost,2)} ₽`,accent:'green' as const}]:[])]};
};
