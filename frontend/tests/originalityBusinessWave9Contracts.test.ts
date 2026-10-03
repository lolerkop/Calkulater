import { describe, expect, it } from 'vitest';
import { validateValues } from '../src/components/islands/calculator/validation';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import { readValuesFromSearch } from '../src/lib/shareLink';
import { getBusinessWave9MethodSources } from '../src/data/businessWave9MethodSources';
import { definition as t0 } from '../src/calculators/ad-budget-funnel/definition';
import { localization as l0 } from '../src/calculators/ad-budget-funnel/localization';
import { definition as t1 } from '../src/calculators/audience-growth/definition';
import { localization as l1 } from '../src/calculators/audience-growth/localization';
import { definition as t2 } from '../src/calculators/churn-retention/definition';
import { localization as l2 } from '../src/calculators/churn-retention/localization';
import { definition as t3 } from '../src/calculators/cogs/definition';
import { localization as l3 } from '../src/calculators/cogs/localization';
import { definition as t4 } from '../src/calculators/cogs-unit-cost/definition';
import { localization as l4 } from '../src/calculators/cogs-unit-cost/localization';
import { definition as t5 } from '../src/calculators/cycle-time/definition';
import { localization as l5 } from '../src/calculators/cycle-time/localization';
import { definition as t6 } from '../src/calculators/email-metrics/definition';
import { localization as l6 } from '../src/calculators/email-metrics/localization';
import { definition as t7 } from '../src/calculators/employee-cost/definition';
import { localization as l7 } from '../src/calculators/employee-cost/localization';
import { definition as t8 } from '../src/calculators/fee-chain/definition';
import { localization as l8 } from '../src/calculators/fee-chain/localization';
import { definition as t9 } from '../src/calculators/inventory-turnover/definition';
import { localization as l9 } from '../src/calculators/inventory-turnover/localization';
import { definition as t10 } from '../src/calculators/profit/definition';
import { localization as l10 } from '../src/calculators/profit/localization';
import { definition as t11 } from '../src/calculators/timesheet-week/definition';
import { localization as l11 } from '../src/calculators/timesheet-week/localization';
const tools = [t0,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11];
const localizations = [l0,l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11];
const locales = ['ru','en','uk','de','es'] as const;
const clean=(s: string)=>s.replace(/[\u00a0\u202f]/g,' ');
const defaults=(i: number)=>Object.fromEntries(tools[i].presentation.fields.map(f=>[f.name,f.defaultValue??'']));
const runtime=(i: number)=>({compute:tools[i].compute,validate:tools[i].validate,localization:localizations[i]});
const row=(r: ReturnType<typeof t0.compute>, label: string)=>clean(r.secondary!.find(x=>x.label===label)!.value);

describe('Business9 preserves51 inherited reference cases without changing fixtures',()=>{
 for(const t of tools) for(const ref of t.referenceCases!) it(`${t.id}: ${ref.name}`,()=>{
  const r=t.compute(ref.inputs); expect(clean(r.primary.value)).toBe(clean(ref.expectPrimary));
  for(const expected of ref.expectSecondary??[]) expect(row(r,expected.label)).toBe(clean(expected.value));
 });
 const malformed:unknown[]=[true,false,null,{},[],NaN,Infinity,-Infinity,'bad','1xyz','1e309','1e-9999'];
 for(const [i,t] of tools.entries()) for(const f of t.presentation.fields.filter(f=>f.type==='number')) for(const [n,bad] of malformed.entries()) it(`${t.id}/${f.name}: active malformed${n}`,()=>{
  const v={...defaults(i),[f.name]:bad,...(t.id==='inventory-turnover'&&['beginInventory','endInventory'].includes(f.name)?{mode:'beginEnd'}:{})};
  const r=t.compute(v as never); expect(r.primary.value).toBe('—'); expect(r.secondary![0].accent).toBe('red'); expect(JSON.stringify(r)).not.toMatch(/NaN|Infinity|undefined/);
 });
});
describe('Business9 independent arithmetic and model boundaries',()=>{
 it('forecast zero probability is zero revenue, not a fictitious acquisition cost',()=>{
  const r=t0.compute({budget:150000,cpc:24,crPct:0,aov:4900}); expect(r.primary.value).toBe('0,00 ₽');expect(row(r,'Заказов')).toBe('0');expect(row(r,'ROAS')).toBe('0');expect(r.secondary!.some(x=>x.label==='Цена заказа')).toBe(false);
  expect(t0.compute({budget:150000,cpc:24,crPct:2.4,aov:4900}).secondary!.find(x=>x.label==='ROAS')!.accent).toBeUndefined();
 });
 it('fractional predicted orders remain valid expectations, while conversion above100 is invalid',()=>{
  const r=t0.compute({budget:10,cpc:4,crPct:20,aov:8});expect(r.primary.value).toBe('4,00 ₽');expect(row(r,'Заказов')).toBe('0,5');expect(row(r,'Цена заказа')).toBe('20,00 ₽');
  expect(t0.compute({budget:10,cpc:4,crPct:100.01,aov:8}).primary.value).toBe('—');
 });
 it('a geometric audience increase from81to144 across2periods is exactlyone-third per period',()=>{
  const r=t1.compute({start:81,end:144,periods:2});expect(r.primary.value).toBe('77,78%');expect(row(r,'Рост за период')).toBe('33,33%');
  expect(row(t1.compute({start:100,end:121,periods:1.5}),'Рост за период')).toBe('13,55%');
 });
 it('very long finite audience durations retain a small nonzero rate instead of floating subtraction cancellation',()=>{
  const r=t1.compute({start:1,end:2,periods:1e18});expect(r.primary.value).toBe('100,00%');expect(row(r,'Рост за период')).not.toBe('0,00%');
 });
 it('complete churn preserves the first active model period and no customers at the end',()=>{
  const r=t2.compute({startCustomers:100,lost:100,gained:0});expect(r.primary.value).toBe('100,00%');expect(row(r,'Удержание')).toBe('0,00%');expect(row(r,'Клиентов на конец')).toBe('0');expect(row(r,'Средний срок жизни, периодов')).toBe('1');
  expect(t2.compute({startCustomers:Number.MAX_SAFE_INTEGER,lost:0,gained:1}).primary.value).toBe('—');
 });
 it('COGS zero movement and negative remaining quantity are distinct',()=>{
  expect(t3.compute({beginInventory:100,purchases:50,endInventory:150}).primary.value).toBe('0,00 ₽');
  expect(t3.compute({beginInventory:100,purchases:50,endInventory:151}).primary.value).toBe('—');
 });
 it('material elasticity is6percent for60percent materials and a10percent increase',()=>{
  const first=t4.compute({materials:60,labor:30,overhead:10,units:10});const next=t4.compute({materials:66,labor:30,overhead:10,units:10});expect(first.primary.value).toBe('10,00 ₽');expect(next.primary.value).toBe('10,60 ₽');
  expect(t4.compute({materials:480000,labor:192000,overhead:54000,units:3000}).primary.value).toBe('242,00 ₽');
  const zero=t4.compute({materials:0,labor:0,overhead:0,units:10});expect(zero.primary.value).toBe('0,00 ₽');expect(zero.secondary!.some(x=>x.label==='Доля материалов')).toBe(false);
 });
 it('unknown actual cycle retains takt without inventing zero production',()=>{
  const r=t5.compute({availableMinutes:480,demand:120,actualCycle:0});expect(r.primary.value).toBe('4 мин/шт');expect(row(r,'Единиц в час')).toBe('15');expect(r.secondary).toHaveLength(1);
 });
 it('zero email delivery gives no open or click ratios; click without recorded open is valid',()=>{
  const zero=t6.compute({sent:100,delivered:0,opened:0,clicked:0});expect(zero.primary.value).toBe('0,00%');expect(zero.secondary).toEqual([]);
  const r=t6.compute({sent:100,delivered:90,opened:20,clicked:30});expect(r.primary.value).toBe('90,00%');expect(row(r,'Кликабельность')).toBe('33,33%');expect(row(r,'Кликов на открытие')).toBe('150,00%');
  const noOpen=t6.compute({sent:100,delivered:90,opened:0,clicked:30});expect(noOpen.primary.value).toBe('90,00%');expect(noOpen.secondary!.some(x=>x.label==='Кликов на открытие')).toBe(false);
 });
 it('employer costs usegross salary and30percent, rather thanone-third',()=>{
  const r=t7.compute({gross:100,taxPct:30,overhead:0});expect(r.primary.value).toBe('130,00 ₽');expect(row(r,'Взносы')).toBe('30,00 ₽');expect(row(r,'Множитель к окладу')).toBe('1,3');
 });
 it('both percentage fees have the same original-price base and blank storage stays optional',()=>{
  const r=t8.compute({price:100,commissionPct:10,acquiringPct:20,logistics:5,storage:'',cost:70});expect(r.primary.value).toBe('65,00 ₽');expect(row(r,'Прибыль')).toBe('-5,00 ₽');expect(row(r,'Доля удержаний')).toBe('35,00%');expect(r.secondary!.some(x=>x.label==='Хранение')).toBe(false);
 });
 it('annual inventory days91.25roundto91.3, and inactive fields never enter either mode',()=>{
  const r=t9.compute({cogs:600000,mode:'direct',avgInventory:150000,beginInventory:false,endInventory:Infinity});expect(r.primary.value).toBe('4,00 раз');expect(row(r,'Срок хранения')).toBe('91,3 дней');
  expect(t9.compute({cogs:100000,mode:'beginEnd',avgInventory:false,beginInventory:30000,endInventory:20000}).primary.value).toBe('4,00 раз');
  expect(t9.compute({cogs:100,mode:'beginEnd',beginInventory:-1,endInventory:201}).primary.value).toBe('—');
  for(const mode of ['unknown',null,true,'constructor','']) expect(t9.compute({cogs:100,mode,avgInventory:1,beginInventory:1,endInventory:1} as never).primary.value).toBe('—');
 });
 it('the average of two1e308balances is representable without overflowing theirsum',()=>{
  const r=t9.compute({cogs:1e308,mode:'beginEnd',beginInventory:1e308,endInventory:1e308});expect(r.primary.value).toBe('1,00 раз');expect(row(r,'Срок хранения')).toBe('365,0 дней');
 });
 it('signed markup remains greater than margin for a loss, while absolute margin is larger',()=>{
  const r=t10.compute({revenue:100,cost:200});expect(r.primary.value).toBe('-100,00 ₽');expect(row(r,'Маржа')).toBe('-100,00%');expect(row(r,'Наценка')).toBe('-50,00%');
  const noCost=t10.compute({revenue:100,cost:0});expect(noCost.primary.value).toBe('100,00 ₽');expect(noCost.secondary!.some(x=>x.label==='Наценка')).toBe(false);
 });
 it('overnight timesheet7.5hours and fixed1.5pay above a fractional norm are independently5250',()=>{
  const r=t11.compute({lines:'22:00,06:00,30',rate:600,normal:5});expect(r.primary.value).toBe('7,5 ч');expect(row(r,'Начислено')).toBe('5 250 ₽');expect(row(r,'В часах и минутах')).toBe('7 ч 30 мин');
  expect(t11.compute({lines:'09:00,09:00',rate:600,normal:40}).primary.value).toBe('0 ч');
 });
 for(const lines of ['09:00,18:00,1.00000000000000001','09:00,18:00,1.5','09:00,18:00,1,extra','24:00,06:00','09:00,10:00,61']) it(`invalid exactminute/column/clock${lines}`,()=>expect(t11.compute({lines,rate:1,normal:40}).primary.value).toBe('—'));
});

const publicExamples = [
  {
    "id": "ad-budget-funnel",
    "locale": "ru",
    "inputs": {
      "budget": 150000,
      "cpc": 24,
      "crPct": 2.4,
      "aov": 4900
    },
    "expected": "735000,00 ₽"
  },
  {
    "id": "ad-budget-funnel",
    "locale": "en",
    "inputs": {
      "budget": 150000,
      "cpc": 24,
      "crPct": 2.4,
      "aov": 4900
    },
    "expected": "735000,00 ₽"
  },
  {
    "id": "ad-budget-funnel",
    "locale": "uk",
    "inputs": {
      "budget": 150000,
      "cpc": 24,
      "crPct": 2.4,
      "aov": 4900
    },
    "expected": "735000,00 ₽"
  },
  {
    "id": "ad-budget-funnel",
    "locale": "de",
    "inputs": {
      "budget": 3000,
      "cpc": 0.48,
      "crPct": 2.4,
      "aov": 98
    },
    "expected": "14700,00 ₽"
  },
  {
    "id": "ad-budget-funnel",
    "locale": "es",
    "inputs": {
      "budget": 15000,
      "cpc": 2.4,
      "crPct": 2.4,
      "aov": 49
    },
    "expected": "7350,00 ₽"
  },
  {
    "id": "audience-growth",
    "locale": "ru",
    "inputs": {
      "start": 12000,
      "end": 18500,
      "periods": 6
    },
    "expected": "54,17%"
  },
  {
    "id": "audience-growth",
    "locale": "en",
    "inputs": {
      "start": 12000,
      "end": 18500,
      "periods": 6
    },
    "expected": "54,17%"
  },
  {
    "id": "audience-growth",
    "locale": "uk",
    "inputs": {
      "start": 12000,
      "end": 18500,
      "periods": 6
    },
    "expected": "54,17%"
  },
  {
    "id": "audience-growth",
    "locale": "de",
    "inputs": {
      "start": 12000,
      "end": 18500,
      "periods": 6
    },
    "expected": "54,17%"
  },
  {
    "id": "audience-growth",
    "locale": "es",
    "inputs": {
      "start": 12000,
      "end": 18500,
      "periods": 6
    },
    "expected": "54,17%"
  },
  {
    "id": "churn-retention",
    "locale": "ru",
    "inputs": {
      "startCustomers": 1000,
      "lost": 50,
      "gained": 80
    },
    "expected": "5,00%"
  },
  {
    "id": "churn-retention",
    "locale": "en",
    "inputs": {
      "startCustomers": 1000,
      "lost": 50,
      "gained": 80
    },
    "expected": "5,00%"
  },
  {
    "id": "churn-retention",
    "locale": "uk",
    "inputs": {
      "startCustomers": 1000,
      "lost": 50,
      "gained": 80
    },
    "expected": "5,00%"
  },
  {
    "id": "churn-retention",
    "locale": "de",
    "inputs": {
      "startCustomers": 1000,
      "lost": 50,
      "gained": 80
    },
    "expected": "5,00%"
  },
  {
    "id": "churn-retention",
    "locale": "es",
    "inputs": {
      "startCustomers": 1000,
      "lost": 50,
      "gained": 80
    },
    "expected": "5,00%"
  },
  {
    "id": "cogs",
    "locale": "ru",
    "inputs": {
      "beginInventory": 320000,
      "purchases": 780000,
      "endInventory": 415000
    },
    "expected": "685000,00 ₽"
  },
  {
    "id": "cogs",
    "locale": "en",
    "inputs": {
      "beginInventory": 320000,
      "purchases": 780000,
      "endInventory": 415000
    },
    "expected": "685000,00 ₽"
  },
  {
    "id": "cogs",
    "locale": "uk",
    "inputs": {
      "beginInventory": 320000,
      "purchases": 780000,
      "endInventory": 415000
    },
    "expected": "685000,00 ₽"
  },
  {
    "id": "cogs",
    "locale": "de",
    "inputs": {
      "beginInventory": 32000,
      "purchases": 78000,
      "endInventory": 41500
    },
    "expected": "68500,00 ₽"
  },
  {
    "id": "cogs",
    "locale": "es",
    "inputs": {
      "beginInventory": 32000,
      "purchases": 78000,
      "endInventory": 41500
    },
    "expected": "68500,00 ₽"
  },
  {
    "id": "cogs-unit-cost",
    "locale": "ru",
    "inputs": {
      "materials": 240000,
      "labor": 96000,
      "overhead": 54000,
      "units": 1500
    },
    "expected": "260,00 ₽"
  },
  {
    "id": "cogs-unit-cost",
    "locale": "en",
    "inputs": {
      "materials": 240000,
      "labor": 96000,
      "overhead": 54000,
      "units": 1500
    },
    "expected": "260,00 ₽"
  },
  {
    "id": "cogs-unit-cost",
    "locale": "uk",
    "inputs": {
      "materials": 240000,
      "labor": 96000,
      "overhead": 54000,
      "units": 1500
    },
    "expected": "260,00 ₽"
  },
  {
    "id": "cogs-unit-cost",
    "locale": "de",
    "inputs": {
      "materials": 24000,
      "labor": 9600,
      "overhead": 5400,
      "units": 1500
    },
    "expected": "26,00 ₽"
  },
  {
    "id": "cogs-unit-cost",
    "locale": "es",
    "inputs": {
      "materials": 24000,
      "labor": 9600,
      "overhead": 5400,
      "units": 1500
    },
    "expected": "26,00 ₽"
  },
  {
    "id": "cycle-time",
    "locale": "ru",
    "inputs": {
      "availableMinutes": 480,
      "demand": 120,
      "actualCycle": 3.5
    },
    "expected": "4 мин/шт"
  },
  {
    "id": "cycle-time",
    "locale": "en",
    "inputs": {
      "availableMinutes": 480,
      "demand": 120,
      "actualCycle": 3.5
    },
    "expected": "4 мин/шт"
  },
  {
    "id": "cycle-time",
    "locale": "uk",
    "inputs": {
      "availableMinutes": 480,
      "demand": 120,
      "actualCycle": 3.5
    },
    "expected": "4 мин/шт"
  },
  {
    "id": "cycle-time",
    "locale": "de",
    "inputs": {
      "availableMinutes": 480,
      "demand": 120,
      "actualCycle": 3.5
    },
    "expected": "4 мин/шт"
  },
  {
    "id": "cycle-time",
    "locale": "es",
    "inputs": {
      "availableMinutes": 480,
      "demand": 120,
      "actualCycle": 3.5
    },
    "expected": "4 мин/шт"
  },
  {
    "id": "email-metrics",
    "locale": "ru",
    "inputs": {
      "sent": 12000,
      "delivered": 11640,
      "opened": 3025,
      "clicked": 412
    },
    "expected": "97,00%"
  },
  {
    "id": "email-metrics",
    "locale": "en",
    "inputs": {
      "sent": 12000,
      "delivered": 11640,
      "opened": 3025,
      "clicked": 412
    },
    "expected": "97,00%"
  },
  {
    "id": "email-metrics",
    "locale": "uk",
    "inputs": {
      "sent": 12000,
      "delivered": 11640,
      "opened": 3025,
      "clicked": 412
    },
    "expected": "97,00%"
  },
  {
    "id": "email-metrics",
    "locale": "de",
    "inputs": {
      "sent": 12000,
      "delivered": 11640,
      "opened": 3025,
      "clicked": 412
    },
    "expected": "97,00%"
  },
  {
    "id": "email-metrics",
    "locale": "es",
    "inputs": {
      "sent": 12000,
      "delivered": 11640,
      "opened": 3025,
      "clicked": 412
    },
    "expected": "97,00%"
  },
  {
    "id": "employee-cost",
    "locale": "ru",
    "inputs": {
      "gross": 180000,
      "taxPct": 30,
      "overhead": 25000
    },
    "expected": "259000,00 ₽"
  },
  {
    "id": "employee-cost",
    "locale": "en",
    "inputs": {
      "gross": 180000,
      "taxPct": 30,
      "overhead": 25000
    },
    "expected": "259000,00 ₽"
  },
  {
    "id": "employee-cost",
    "locale": "uk",
    "inputs": {
      "gross": 180000,
      "taxPct": 30,
      "overhead": 25000
    },
    "expected": "259000,00 ₽"
  },
  {
    "id": "employee-cost",
    "locale": "de",
    "inputs": {
      "gross": 4500,
      "taxPct": 21,
      "overhead": 600
    },
    "expected": "6045,00 ₽"
  },
  {
    "id": "employee-cost",
    "locale": "es",
    "inputs": {
      "gross": 1800,
      "taxPct": 30,
      "overhead": 250
    },
    "expected": "2590,00 ₽"
  },
  {
    "id": "fee-chain",
    "locale": "ru",
    "inputs": {
      "price": 2000,
      "commissionPct": 17,
      "acquiringPct": 1.5,
      "logistics": 55,
      "storage": 0,
      "cost": 900
    },
    "expected": "1575,00 ₽"
  },
  {
    "id": "fee-chain",
    "locale": "en",
    "inputs": {
      "price": 2000,
      "commissionPct": 17,
      "acquiringPct": 1.5,
      "logistics": 55,
      "storage": 0,
      "cost": 900
    },
    "expected": "1575,00 ₽"
  },
  {
    "id": "fee-chain",
    "locale": "uk",
    "inputs": {
      "price": 2000,
      "commissionPct": 17,
      "acquiringPct": 1.5,
      "logistics": 55,
      "storage": 0,
      "cost": 900
    },
    "expected": "1575,00 ₽"
  },
  {
    "id": "fee-chain",
    "locale": "de",
    "inputs": {
      "price": 40,
      "commissionPct": 17,
      "acquiringPct": 1.5,
      "logistics": 1.1,
      "storage": 0,
      "cost": 18
    },
    "expected": "31,50 ₽"
  },
  {
    "id": "fee-chain",
    "locale": "es",
    "inputs": {
      "price": 20,
      "commissionPct": 17,
      "acquiringPct": 1.5,
      "logistics": 0.55,
      "storage": 0,
      "cost": 9
    },
    "expected": "15,75 ₽"
  },
  {
    "id": "inventory-turnover",
    "locale": "ru",
    "inputs": {
      "cogs": 600000,
      "mode": "direct",
      "avgInventory": 150000,
      "beginInventory": 30000,
      "endInventory": 20000
    },
    "expected": "4,00 раз"
  },
  {
    "id": "inventory-turnover",
    "locale": "en",
    "inputs": {
      "cogs": 600000,
      "mode": "direct",
      "avgInventory": 150000,
      "beginInventory": 30000,
      "endInventory": 20000
    },
    "expected": "4,00 раз"
  },
  {
    "id": "inventory-turnover",
    "locale": "uk",
    "inputs": {
      "cogs": 600000,
      "mode": "direct",
      "avgInventory": 150000,
      "beginInventory": 30000,
      "endInventory": 20000
    },
    "expected": "4,00 раз"
  },
  {
    "id": "inventory-turnover",
    "locale": "de",
    "inputs": {
      "cogs": 60000,
      "mode": "direct",
      "avgInventory": 15000
    },
    "expected": "4,00 раз"
  },
  {
    "id": "inventory-turnover",
    "locale": "es",
    "inputs": {
      "cogs": 60000,
      "mode": "direct",
      "avgInventory": 15000
    },
    "expected": "4,00 раз"
  },
  {
    "id": "profit",
    "locale": "ru",
    "inputs": {
      "revenue": 480000,
      "cost": 315000
    },
    "expected": "165000,00 ₽"
  },
  {
    "id": "profit",
    "locale": "en",
    "inputs": {
      "revenue": 480000,
      "cost": 315000
    },
    "expected": "165000,00 ₽"
  },
  {
    "id": "profit",
    "locale": "uk",
    "inputs": {
      "revenue": 480000,
      "cost": 315000
    },
    "expected": "165000,00 ₽"
  },
  {
    "id": "profit",
    "locale": "de",
    "inputs": {
      "revenue": 48000,
      "cost": 31500
    },
    "expected": "16500,00 ₽"
  },
  {
    "id": "profit",
    "locale": "es",
    "inputs": {
      "revenue": 48000,
      "cost": 31500
    },
    "expected": "16500,00 ₽"
  },
  {
    "id": "timesheet-week",
    "locale": "ru",
    "inputs": {
      "lines": "09:00,18:00,60\n09:00,18:00,60\n09:00,17:30,45\n10:00,19:00,60\n09:00,14:00,0",
      "rate": 500,
      "normal": 40
    },
    "expected": "36,75 ч"
  },
  {
    "id": "timesheet-week",
    "locale": "en",
    "inputs": {
      "lines": "09:00,18:00,60\n09:00,18:00,60\n09:00,17:30,45\n10:00,19:00,60\n09:00,14:00,0",
      "rate": 500,
      "normal": 40
    },
    "expected": "36,75 ч"
  },
  {
    "id": "timesheet-week",
    "locale": "uk",
    "inputs": {
      "lines": "09:00,18:00,60\n09:00,18:00,60\n09:00,17:30,45\n10:00,19:00,60\n09:00,14:00,0",
      "rate": 500,
      "normal": 40
    },
    "expected": "36,75 ч"
  },
  {
    "id": "timesheet-week",
    "locale": "de",
    "inputs": {
      "lines": "09:00,18:00,60\n09:00,18:00,60\n09:00,17:30,45\n10:00,19:00,60\n09:00,14:00,0",
      "rate": 15,
      "normal": 40
    },
    "expected": "36,75 ч"
  },
  {
    "id": "timesheet-week",
    "locale": "es",
    "inputs": {
      "lines": "09:00,18:00,60\n09:00,18:00,60\n09:00,17:30,45\n10:00,19:00,60\n09:00,14:00,0",
      "rate": 10,
      "normal": 40
    },
    "expected": "36,75 ч"
  }
] as const;
for (const sample of publicExamples) it(`${sample.id}/${sample.locale}: independently fixed literal public example`,()=>{
 const tool=tools.find(t=>t.id===sample.id)!;
 const normalize=(v: string)=>v.replace(/[\s\u00a0\u202f]/g,'');
 expect(normalize(tool.compute(sample.inputs).primary.value)).toBe(normalize(sample.expected));
});

it('fee percentage input matches the inherited0–100form range',()=>{
 expect(t8.compute({price:100,commissionPct:100,acquiringPct:100,logistics:0,storage:0,cost:0}).primary.value).toBe('-100,00 ₽');
 expect(t8.compute({price:100,commissionPct:100.01,acquiringPct:0,logistics:0,storage:0,cost:0}).primary.value).toBe('—');
});
it('employer percentage input matches the inherited0–200form range',()=>{
 expect(t7.compute({gross:100,taxPct:200,overhead:0}).primary.value).toBe('300,00 ₽');
 expect(t7.compute({gross:100,taxPct:200.01,overhead:0}).primary.value).toBe('—');
});
