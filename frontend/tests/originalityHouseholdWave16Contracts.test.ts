import { describe, it, expect } from 'vitest';
import type { CalculatorDefinitionV2 } from '../src/lib/platform/types';
import { parseLocalizedNumber } from '../src/lib/format';
import { definition as d0 } from '../src/calculators/abv-alcohol/definition';
import { definition as d1 } from '../src/calculators/alcohol-units/definition';
import { definition as d2 } from '../src/calculators/bakers-percentage/definition';
import { definition as d3 } from '../src/calculators/brew-ratio/definition';
import { definition as d4 } from '../src/calculators/calories-per-serving/definition';
import { definition as d5 } from '../src/calculators/cooked-weight/definition';
import { definition as d6 } from '../src/calculators/pet-age/definition';
import { definition as d7 } from '../src/calculators/pet-food/definition';
import { definition as d8 } from '../src/calculators/recipe-cost/definition';
import { definition as d9 } from '../src/calculators/recipe-scale/definition';
import { definition as d10 } from '../src/calculators/roast-time/definition';
import { definition as d11 } from '../src/calculators/yeast-convert/definition';
const definitions: CalculatorDefinitionV2[] = [d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11];
type OracleCase = { id:string; name:string; inputs:Record<string,string|number|boolean>; expected:Record<string,string> };
const cases: OracleCase[] = [{"id": "abv-alcohol", "name": "normal", "inputs": {"og": 1.05, "fg": 1.01, "factor": 131.25}, "expected": {"abv": "5.2500", "attenuation": "80.0"}}, {"id": "abv-alcohol", "name": "apparent-above-100", "inputs": {"og": 1.05, "fg": 0.99, "factor": 131.25}, "expected": {"abv": "7.8750", "attenuation": "120.0"}}, {"id": "abv-alcohol", "name": "zero-drop", "inputs": {"og": 1.05, "fg": 1.05, "factor": 131.25}, "expected": {"abv": "0", "attenuation": "0"}}, {"id": "alcohol-units", "name": "normal", "inputs": {"volume_ml": 150.0, "abv": 12.0, "standard_g": 10.0}, "expected": {"pureMl": "18", "grams": "14.202", "units": "1.4202"}}, {"id": "alcohol-units", "name": "mass-based-UK-approximation", "inputs": {"volume_ml": 150.0, "abv": 12.0, "standard_g": 8.0}, "expected": {"pureMl": "18", "grams": "14.202", "units": "1.77525"}}, {"id": "alcohol-units", "name": "beer-comparison", "inputs": {"volume_ml": 500.0, "abv": 5.0, "standard_g": 10.0}, "expected": {"pureMl": "25", "grams": "19.725", "units": "1.9725"}}, {"id": "alcohol-units", "name": "zero-alcohol", "inputs": {"volume_ml": 150.0, "abv": 0.0, "standard_g": 10.0}, "expected": {"pureMl": "0", "grams": "0.000", "units": "0.000"}}, {"id": "bakers-percentage", "name": "native-water-water", "inputs": {"flour": 500, "ingredients": "water 68\nsalt 2\nyeast 1.2"}, "expected": {"total": "856.000", "water": "340", "hydration": "68"}}, {"id": "bakers-percentage", "name": "native-water-Wasser", "inputs": {"flour": 500, "ingredients": "Wasser 68\nsalt 2\nyeast 1.2"}, "expected": {"total": "856.000", "water": "340", "hydration": "68"}}, {"id": "bakers-percentage", "name": "native-water-agua", "inputs": {"flour": 500, "ingredients": "agua 68\nsalt 2\nyeast 1.2"}, "expected": {"total": "856.000", "water": "340", "hydration": "68"}}, {"id": "bakers-percentage", "name": "native-water-вода", "inputs": {"flour": 500, "ingredients": "вода 68\nsalt 2\nyeast 1.2"}, "expected": {"total": "856.000", "water": "340", "hydration": "68"}}, {"id": "bakers-percentage", "name": "native-water-Вода", "inputs": {"flour": 500, "ingredients": "Вода 68\nsalt 2\nyeast 1.2"}, "expected": {"total": "856.000", "water": "340", "hydration": "68"}}, {"id": "bakers-percentage", "name": "zero-additions", "inputs": {"flour": 500, "ingredients": "water 0\nsalt 0"}, "expected": {"total": "500", "hydration": "0"}}, {"id": "brew-ratio", "name": "coffee-16", "inputs": {"mode": "coffee", "water": 500, "coffee": 30, "ratio": 16}, "expected": {"water": "500", "coffee": "31.25", "ratio": "16", "capacity": "62.50"}}, {"id": "brew-ratio", "name": "water-15", "inputs": {"mode": "water", "water": 500, "coffee": 30, "ratio": 15}, "expected": {"water": "450", "coffee": "30", "ratio": "15", "capacity": "60"}}, {"id": "brew-ratio", "name": "ratio-16", "inputs": {"mode": "ratio", "water": 480, "coffee": 30, "ratio": 16}, "expected": {"water": "480", "coffee": "30", "ratio": "16", "capacity": "60"}}, {"id": "brew-ratio", "name": "water-1", "inputs": {"mode": "water", "water": 500, "coffee": 30, "ratio": 1}, "expected": {"water": "30", "coffee": "30", "ratio": "1", "capacity": "60"}}, {"id": "calories-per-serving", "name": "normal-4", "inputs": {"ingredients": "flour 300 364\nbutter 100 717\nsugar 150 387", "servings": 4}, "expected": {"total": "2389.5", "portion": "597.375", "mass": "137.5"}}, {"id": "calories-per-serving", "name": "normal-2.5", "inputs": {"ingredients": "flour 300 364\nbutter 100 717\nsugar 150 387", "servings": 2.5}, "expected": {"total": "2389.5", "portion": "955.8", "mass": "2.2E+2"}}, {"id": "calories-per-serving", "name": "zero-energy", "inputs": {"ingredients": "water 100 0", "servings": 1}, "expected": {"total": "0", "portion": "0", "mass": "100"}}, {"id": "cooked-weight", "name": "normal", "inputs": {"mode": "rawToCooked", "raw": 200, "cooked": 500, "factor": 2.5, "kcalPer100Raw": 350}, "expected": {"raw": "200", "cooked": "500.0", "totalKcal": "700", "per100": "1.4E+2"}}, {"id": "cooked-weight", "name": "loss", "inputs": {"mode": "cookedToRaw", "raw": 200, "cooked": 130, "factor": 0.65, "kcalPer100Raw": 120}, "expected": {"raw": "2E+2", "cooked": "130", "totalKcal": "2.4E+2", "per100": "184.6153846153846153846153846153846153846153846153846153846153846153846"}}, {"id": "cooked-weight", "name": "zero-energy", "inputs": {"mode": "rawToCooked", "raw": 200, "cooked": 500, "factor": 2.5, "kcalPer100Raw": 0}, "expected": {"raw": "200", "cooked": "500.0", "totalKcal": "0", "per100": "0E+1"}}, {"id": "pet-age", "name": "normal", "inputs": {"species": "cat", "years": 7}, "expected": {"human": "44"}}, {"id": "pet-age", "name": "large-seven", "inputs": {"species": "dog-large", "years": 7}, "expected": {"human": "59"}}, {"id": "pet-age", "name": "fractional-first", "inputs": {"species": "dog-small", "years": 0.5}, "expected": {"human": "7.5"}}, {"id": "pet-age", "name": "fractional-second", "inputs": {"species": "cat", "years": 1.5}, "expected": {"human": "19.5"}}, {"id": "pet-age", "name": "fractional-adult", "inputs": {"species": "cat", "years": 2.5}, "expected": {"human": "26.0"}}, {"id": "pet-food", "name": "normal", "inputs": {"weight": 22, "factor": 1.6, "kcalPer100": 350}, "expected": {"rer": "711.0744116539180500439679793700156469147053251843131636029754548198513", "mer": "1137.719058646268880070348766992025035063528520294901061764760727711762", "food": "325.0625881846482514486710762834357243038652915128288747899316364890749"}}, {"id": "pet-food", "name": "chosen-cat-inputs", "inputs": {"weight": 4, "factor": 1.2, "kcalPer100": 400}, "expected": {"rer": "197.9898987322333068322364213893577309997540625527727302447351633187026", "mer": "237.5878784786799681986837056672292771997048750633272762936821959824431", "food": "59.39696961966999204967092641680731929992621876583181907342054899561078"}}, {"id": "recipe-cost", "name": "normal", "inputs": {"ingredients": "flour 0.5 45\nbutter 0.2 890\nsugar 0.3 68", "servings": 4}, "expected": {"total": "220.9", "portion": "55.225"}}, {"id": "recipe-cost", "name": "retained-DE-example", "inputs": {"ingredients": "Mehl 0.5 1\nButter 0.2 17.8\nZucker 0.3 1.2", "servings": 4}, "expected": {"total": "4.42", "portion": "1.105"}}, {"id": "recipe-cost", "name": "retained-ES-example", "inputs": {"ingredients": "harina 0.5 4.5\nmantequilla 0.2 89\nazúcar 0.3 6.8", "servings": 4}, "expected": {"total": "22.09", "portion": "5.5225"}}, {"id": "recipe-cost", "name": "zero-cost-fractional-portions", "inputs": {"ingredients": "salt 0 5", "servings": 0.5}, "expected": {"total": "0", "portion": "0E+1"}}, {"id": "recipe-scale", "name": "normal", "inputs": {"ingredients": "flour 500\nwater 320\nsalt 10\nyeast 7", "fromServings": 4, "toServings": 6}, "expected": {"factor": "1.5", "oldTotal": "837", "newTotal": "1255.5"}}, {"id": "recipe-scale", "name": "fractional-target", "inputs": {"ingredients": "flour 500\nwater 320\nsalt 10\nyeast 7", "fromServings": 4, "toServings": 2.5}, "expected": {"factor": "0.625", "oldTotal": "837", "newTotal": "523.125"}}, {"id": "recipe-scale", "name": "fractional-source", "inputs": {"ingredients": "flour 500\nwater 320\nsalt 10\nyeast 7", "fromServings": 2.5, "toServings": 1.25}, "expected": {"factor": "0.5", "oldTotal": "837", "newTotal": "418.5"}}, {"id": "roast-time", "name": "normal", "inputs": {"weight": 5, "minutes_per_kg": 40, "base_minutes": 20, "rest_pct": 20}, "expected": {"cook": "220", "rest": "44", "total": "264", "roundedMinutes": "220"}}, {"id": "roast-time", "name": "hour-rounding", "inputs": {"weight": 1, "minutes_per_kg": 59.6, "base_minutes": 0, "rest_pct": 0}, "expected": {"cook": "59.6", "rest": "0.0", "total": "59.6", "roundedMinutes": "60"}}, {"id": "roast-time", "name": "two-hour-rounding", "inputs": {"weight": 1, "minutes_per_kg": 119.6, "base_minutes": 0, "rest_pct": 20}, "expected": {"cook": "119.6", "rest": "23.92", "total": "143.52", "roundedMinutes": "120"}}, {"id": "yeast-convert", "name": "normal", "inputs": {"value": 30, "to": "instant", "from": "fresh"}, "expected": {"fresh": "30", "result": "7.5", "active": "10", "instant": "7.5"}}, {"id": "yeast-convert", "name": "reverse-active", "inputs": {"value": 10, "to": "fresh", "from": "active"}, "expected": {"fresh": "30", "result": "30", "active": "10", "instant": "7.5"}}, {"id": "yeast-convert", "name": "active-to-instant", "inputs": {"value": 10, "to": "instant", "from": "active"}, "expected": {"fresh": "30", "result": "7.5", "active": "10", "instant": "7.5"}}, {"id": "yeast-convert", "name": "instant-to-active", "inputs": {"value": 7.5, "to": "active", "from": "instant"}, "expected": {"fresh": "30.0", "result": "10.0", "active": "10.0", "instant": "7.5"}}];

const own=(id:string)=>definitions.find(d=>d.id===id)!;
const defaults=(d:CalculatorDefinitionV2)=>Object.fromEntries(d.presentation.fields.map(f=>[f.name,f.defaultValue!])) as Record<string,string|number|boolean>;
const labels:Record<string,Record<string,string>>={
 'abv-alcohol':{abv:'PRIMARY',attenuation:'Степень сбраживания'},
 'alcohol-units':{pureMl:'Чистого спирта по объёму',grams:'Чистого спирта по массе',units:'PRIMARY'},
 'bakers-percentage':{total:'PRIMARY',hydration:'Гидратация'},
 'brew-ratio':{water:'Вода',coffee:'Кофе',ratio:'Соотношение',capacity:'Условная ёмкость гущи'},
 'calories-per-serving':{total:'Всего калорий',portion:'PRIMARY',mass:'Масса порции'},
 'cooked-weight':{raw:'Сухой вес',cooked:'Готовый вес',totalKcal:'Калорий всего',per100:'Ккал на 100 г готового'},
 'pet-age':{human:'PRIMARY'},'pet-food':{rer:'Обмен покоя (RER)',mer:'Потребность в энергии',food:'PRIMARY'},
 'recipe-cost':{total:'Стоимость всего',portion:'PRIMARY'},'recipe-scale':{factor:'PRIMARY',oldTotal:'Было всего',newTotal:'Стало всего'},
 'roast-time':{cook:'Минут готовки',rest:'Отдых после духовки',total:'Всего с отдыхом'},
 'yeast-convert':{fresh:'В пересчёте на прессованные',result:'PRIMARY',active:'Сухие активные',instant:'Быстродействующие'},
};
const read=(value:string)=>{
 const plain=value.replace(/^1:/,'').replace(/[^0-9.,+\-\s  ]/g,'').trim();
 return parseLocalizedNumber(plain,'ru');
};
describe('44 independent Decimal scenarios, 128 numerical reference quantities',()=>{
 for(const c of cases)it(`${c.id}: ${c.name}`,()=>{
  const r=own(c.id).compute(c.inputs);expect(r.primary.value).not.toBe('—');
  for(const[key,expected]of Object.entries(c.expected)){
   if(key==='roundedMinutes'){
    const total=Number(expected);const h=Math.floor(total/60),m=total%60;expect(r.primary.value).toBe(h>0?`${h} ч ${m} мин`:`${m} мин`);continue;
   }
   if(c.id==='bakers-percentage'&&key==='water'){ const water=r.table!.rows.filter(v=>/^(water|Wasser|agua|вода)$/iu.test(v[0])).reduce((sum,v)=>sum+read(v[2])!,0);expect(water).toBe(Number(expected));continue;}
   const label=labels[c.id][key];if(!label)throw new Error(`Missing independent reference mapping ${c.id}.${key}`);
   const value=label==='PRIMARY'?r.primary.value:r.secondary.find(v=>v.label===label)!.value;
   const actual=read(value);expect(actual,value).not.toBeNull();
   const tolerance=c.id==='calories-per-serving'&&key!=='mass'||c.id==='cooked-weight'&&key==='totalKcal'?.500001:c.id==='calories-per-serving'?.050001:c.id==='abv-alcohol'?.00005001:.005001;
   expect(Math.abs(actual!-Number(expected)),`${key}: ${value} vs ${expected}`).toBeLessThanOrEqual(tolerance);
  }
 });
});
describe('immutable inherited references',()=>{
 for(const d of definitions)for(const c of d.referenceCases??[])it(`${d.id}: ${c.name}`,()=>{
  const r=d.compute(c.inputs);expect(r.primary.value).toBe(c.expectPrimary);
  for(const row of c.expectSecondary??[])expect(r.secondary.find(v=>v.label===row.label)?.value).toBe(row.value);
 });
});
describe('strict active scalar contract',()=>{
 for(const d of definitions)for(const f of d.presentation.fields.filter(f=>f.type==='number')){
  if(d.id==='brew-ratio'&&f.name==='coffee'||d.id==='cooked-weight'&&f.name==='cooked')continue;
  for(const v of [true,false,NaN,Infinity,-Infinity,{},[],'12oops',''])it(`${d.id}.${f.name}: rejects ${String(v)}`,()=>{
   const r=d.compute({...defaults(d),[f.name]:v} as unknown as Record<string,string|number|boolean>);expect(r.primary.value).toBe('—');expect(r.secondary[0].accent).toBe('red');
  });
 }
});
for(const d of definitions)for(const f of d.presentation.fields.filter(f=>f.type==='select'))for(const bad of ['unknown','__proto__','constructor',true,{},null])it(`${d.id}.${f.name}: unknown choice ${String(bad)}`,()=>expect(d.compute({...defaults(d),[f.name]:bad} as unknown as Record<string,string|number|boolean>).primary.value).toBe('—'));
for(const id of ['bakers-percentage','calories-per-serving','recipe-cost','recipe-scale'])for(const bad of [true,false,{},[],null,0])it(`${id}: ingredients are text, not coerced`,()=>expect(own(id).compute({...defaults(own(id)),ingredients:bad} as unknown as Record<string,string|number|boolean>).primary.value).toBe('—'));
it('brewing all three inactive solved values are ignored',()=>{
 for(const[mode,solved]of [['coffee','coffee'],['water','water'],['ratio','ratio']])for(const v of [true,NaN,{},'',-1])expect(own('brew-ratio').compute({...defaults(own('brew-ratio')),mode,[solved]:v} as unknown as Record<string,string|number|boolean>).primary.value).not.toBe('—');
});
it('cooked-weight ignores only the inactive direction field',()=>{
 for(const[mode,inactive]of [['rawToCooked','cooked'],['cookedToRaw','raw']])for(const v of [true,NaN,{},'',-1])expect(own('cooked-weight').compute({...defaults(own('cooked-weight')),mode,[inactive]:v} as unknown as Record<string,string|number|boolean>).primary.value).not.toBe('—');
});
it('apparent attenuation above 100 is meaningful while negative or impossible ABV is rejected',()=>{
 const d=own('abv-alcohol');expect(d.compute({og:1.05,fg:.99,factor:131.25}).secondary[0].value).toBe('120 %');
 for(const changes of [{factor:-1},{factor:0},{og:1.5,fg:.5,factor:131.25}])expect(d.compute({...defaults(d),...changes} as Record<string,string|number|boolean>).primary.value).toBe('—');
});
it('water recognition uses complete native names, not arbitrary substrings',()=>{
 const d=own('bakers-percentage');for(const name of ['watermelon','водка','aguacate','Abwasser'])expect(d.compute({flour:500,ingredients:`${name} 68`}).secondary[0].value).toBe('0,00%');
 expect(d.compute({flour:500,ingredients:'warm water 34\nWasser 34'}).secondary[0].value).toBe('68,00%');
});
it('fractional serving equivalents retain their own displayed quantity',()=>{
 expect(own('calories-per-serving').compute({ingredients:'flour 100 100',servings:2.5}).secondary.find(v=>v.label==='Порций')?.value).toBe('2,5');
 expect(own('recipe-cost').compute({ingredients:'flour 1 10',servings:2.5}).secondary.find(v=>v.label==='Порций')?.value).toBe('2,5');
 const r=own('recipe-scale').compute({ingredients:'flour 100',fromServings:2.5,toServings:1.25});expect(r.secondary.find(v=>v.label==='Порций было')?.value).toBe('2,5');expect(r.secondary.find(v=>v.label==='Порций стало')?.value).toBe('1,25');
});
for(const id of ['bakers-percentage','calories-per-serving','recipe-cost','recipe-scale'])it(`${id}: ingredient nonzero underflow and huge arithmetic cannot silently become zero`,()=>{
 const input:Record<string,string|number|boolean>=id==='bakers-percentage'?{flour:1e308,ingredients:'water 1000'}:id==='calories-per-serving'?{servings:1,ingredients:'food 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 1000'}:id==='recipe-cost'?{servings:1,ingredients:'food 1e308 1e308'}:{fromServings:1,toServings:1e308,ingredients:'food 1000'};
 expect(own(id).compute({...defaults(own(id)),...input} as Record<string,string|number|boolean>).primary.value).toBe('—');
 const zeros='0.'+'0'.repeat(400)+'1';const line=id==='calories-per-serving'?`food ${zeros} 1`:id==='recipe-cost'?`food ${zeros} 1`:`food ${zeros}`;expect(own(id).compute({...defaults(own(id)),ingredients:line}).primary.value).toBe('—');
});
