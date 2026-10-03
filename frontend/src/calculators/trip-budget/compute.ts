import type { CalcFunction } from '../../lib/types';
import { read, optional, integer, finite, exact, times, add, evaluated, money, INPUT, RANGE, INTEGER } from '../../lib/calculators/householdWave17Numeric';
export const compute: CalcFunction = inputs => {
 const nights=integer(inputs.nights),people=integer(inputs.people),days=read(inputs.days),hotelRate=read(inputs.hotelPerNight),foodRate=read(inputs.foodPerDayPerPerson),transport=read(inputs.transport),activities=read(inputs.activities),other=optional(inputs.other);
 const fail=(value:string)=>({primary:{label:'Бюджет поездки',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(nights,people))return fail(INTEGER);if(!finite(days,hotelRate,foodRate,transport,activities,other))return fail(INPUT);
 if(days<=0)return fail('Число дней должно быть больше нуля');if(people<=0)return fail('Число человек должно быть больше нуля');if(nights<0)return fail('Число ночей не может быть отрицательным');if(hotelRate<0||foodRate<0||transport<0||activities<0||other<0)return fail('Сумма не может быть отрицательной');
 const hotelD=times(exact(nights),exact(hotelRate)),foodD=times(exact(days),exact(people),exact(foodRate)),totalD=add(hotelD,foodD,exact(transport),exact(activities),exact(other));
 const hotel=evaluated(hotelD),food=evaluated(foodD),total=evaluated(totalD),perPerson=evaluated(totalD,exact(people)),perDay=evaluated(totalD,exact(days));if(!finite(hotel,food,total,perPerson,perDay))return fail(RANGE);
 return {primary:{label:'Бюджет поездки',value:money(total)},secondary:[{label:'На человека',value:money(perPerson)},{label:'В день',value:money(perDay)},{label:'Проживание',value:money(hotel)},{label:'Питание',value:money(food)},{label:'Транспорт',value:money(transport)},{label:'Развлечения',value:money(activities)},...(other>0?[{label:'Прочее',value:money(other)}]:[])]};
};
