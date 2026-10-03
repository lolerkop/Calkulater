import type { CalculatorContextualField } from '../../lib/platform/types';
const indexes:Record<string,number>={ru:0,en:1,uk:2,de:3,es:4};
const units:Record<string,readonly string[]>={kg:['кг','kg','кг','kg','kg'],l:['л','L','л','L','L'],pcs:['шт','pcs','шт','Stück','piezas']};
const help=['Количество в выбранной единице; 500 г вводятся как 0,5 кг,500 мл как 0,5 л.','Amount in the selected unit; enter 500 g as 0.5 kg and 500 mL as 0.5 L.','Кількість в обраній одиниці; 500 г вводяться як 0,5 кг,500 мл як 0,5 л.','Menge in der gewählten Einheit; 500 g als 0,5 kg und 500 ml als 0,5 l eingeben.','Cantidad en la unidad elegida; 500 g se introducen como 0,5 kg y 500 ml como 0,5 l.'];
export const contextualField:CalculatorContextualField=(field,values,locale)=>{
 if(!['amount','amountA','amountB'].includes(field.name))return field;
 const u=values.unit===undefined?'kg':values.unit,i=indexes[locale]??1;
 return {...field,unit:typeof u==='string'&&Object.hasOwn(units,u)?units[u][i]:undefined,help:help[i]};
};
