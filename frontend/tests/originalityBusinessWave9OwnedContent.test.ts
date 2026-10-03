import { describe, expect, it } from 'vitest';
import type { CalculatorDef } from '../src/lib/types';
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
const runtime=(i: number)=>({compute:tools[i].compute,validate:tools[i].validate,localization:localizations[i],contextualField:tools[i].contextualField});
const row=(r: ReturnType<typeof t0.compute>, label: string)=>clean(r.secondary!.find(x=>x.label===label)!.value);
const identity = {"ad-budget-funnel": {"ru": {"name": "Калькулятор рекламного бюджета", "slug": "ad-budget-funnel", "h1": "Калькулятор рекламного бюджета"}, "en": {"name": "Ad budget funnel calculator", "slug": "ad-budget-funnel-calculator", "h1": "Ad budget funnel calculator"}, "uk": {"name": "Калькулятор рекламного бюджету", "slug": "reklamnyy-byudzhet", "h1": "Калькулятор рекламного бюджету"}, "de": {"name": "Rechner für den Werbetrichter", "slug": "werbebudget-trichter", "h1": "Rechner für den Werbetrichter"}, "es": {"name": "Calculadora de embudo de presupuesto publicitario", "slug": "embudo-de-presupuesto-publicitario", "h1": "Calculadora de embudo de presupuesto publicitario"}}, "audience-growth": {"ru": {"name": "Калькулятор роста аудитории", "slug": "audience-growth", "h1": "Калькулятор роста аудитории"}, "en": {"name": "Audience growth calculator", "slug": "audience-growth-calculator", "h1": "Audience growth calculator"}, "uk": {"name": "Калькулятор зростання аудиторії", "slug": "zrostannya-audytorii", "h1": "Калькулятор зростання аудиторії"}, "de": {"name": "Rechner für das Publikumswachstum", "slug": "publikumswachstum-rechner", "h1": "Rechner für das Publikumswachstum"}, "es": {"name": "Calculadora de crecimiento de audiencia", "slug": "crecimiento-de-audiencia", "h1": "Calculadora de crecimiento de audiencia"}}, "churn-retention": {"ru": {"name": "Калькулятор оттока и удержания", "slug": "churn-retention", "h1": "Калькулятор оттока и удержания"}, "en": {"name": "Churn and retention calculator", "slug": "churn-retention-calculator", "h1": "Churn and retention calculator"}, "uk": {"name": "Калькулятор відтоку та утримання", "slug": "vidtik-utrymannya", "h1": "Калькулятор відтоку та утримання"}, "de": {"name": "Rechner für Abwanderung und Bindung", "slug": "abwanderungsrate-rechner", "h1": "Rechner für Abwanderung und Bindung"}, "es": {"name": "Calculadora de rotación y retención", "slug": "rotacion-y-retencion", "h1": "Calculadora de rotación y retención"}}, "cogs": {"ru": {"name": "Калькулятор COGS", "slug": "cogs", "h1": "Калькулятор COGS"}, "en": {"name": "COGS calculator", "slug": "cogs-calculator", "h1": "COGS calculator"}, "uk": {"name": "Калькулятор COGS", "slug": "sobivartist-prodazhiv", "h1": "Калькулятор COGS"}, "de": {"name": "Rechner für den Wareneinsatz", "slug": "wareneinsatz-rechner", "h1": "Rechner für den Wareneinsatz"}, "es": {"name": "Calculadora de coste de las mercancías vendidas", "slug": "coste-de-las-mercancias-vendidas", "h1": "Calculadora de coste de las mercancías vendidas"}}, "cogs-unit-cost": {"ru": {"name": "Калькулятор себестоимости единицы", "slug": "unit-cost", "h1": "Калькулятор себестоимости единицы"}, "en": {"name": "Unit cost calculator", "slug": "unit-cost-calculator", "h1": "Unit cost calculator"}, "uk": {"name": "Калькулятор собівартості одиниці", "slug": "sobivartist-odynytsi", "h1": "Калькулятор собівартості одиниці"}, "de": {"name": "Rechner für die Stückkosten", "slug": "stueckkosten-rechner", "h1": "Rechner für die Stückkosten"}, "es": {"name": "Calculadora de coste unitario", "slug": "coste-unitario", "h1": "Calculadora de coste unitario"}}, "cycle-time": {"ru": {"name": "Калькулятор такта производства", "slug": "takt-proizvodstva", "h1": "Калькулятор такта производства"}, "en": {"name": "Takt time calculator", "slug": "takt-time", "h1": "Takt time calculator"}, "uk": {"name": "Калькулятор такту виробництва", "slug": "takt-vyrobnytstva", "h1": "Калькулятор такту виробництва"}, "de": {"name": "Taktzeitrechner", "slug": "taktzeit-rechner", "h1": "Taktzeitrechner"}, "es": {"name": "Calculadora de tiempo takt", "slug": "tiempo-takt", "h1": "Calculadora de tiempo takt"}}, "email-metrics": {"ru": {"name": "Калькулятор метрик email-рассылки", "slug": "email-metrics", "h1": "Калькулятор метрик email-рассылки"}, "en": {"name": "Email marketing metrics calculator", "slug": "email-marketing-metrics-calculator", "h1": "Email marketing metrics calculator"}, "uk": {"name": "Калькулятор метрик email-розсилки", "slug": "email-metryky", "h1": "Калькулятор метрик email-розсилки"}, "de": {"name": "Rechner für Kennzahlen im E-Mail-Marketing", "slug": "email-kennzahlen-rechner", "h1": "Rechner für Kennzahlen im E-Mail-Marketing"}, "es": {"name": "Calculadora de métricas de email marketing", "slug": "metricas-de-email-marketing", "h1": "Calculadora de métricas de email marketing"}}, "employee-cost": {"ru": {"name": "Калькулятор стоимости сотрудника", "slug": "employee-cost", "h1": "Калькулятор стоимости сотрудника"}, "en": {"name": "Employee cost calculator", "slug": "employee-cost-calculator", "h1": "Employee cost calculator"}, "uk": {"name": "Калькулятор вартості співробітника", "slug": "vartist-spivrobitnyka", "h1": "Калькулятор вартості співробітника"}, "de": {"name": "Rechner für die Personalkosten", "slug": "personalkosten-rechner", "h1": "Rechner für die Personalkosten"}, "es": {"name": "Calculadora de coste de un empleado", "slug": "coste-de-un-empleado", "h1": "Calculadora de coste de un empleado"}}, "fee-chain": {"ru": {"name": "Калькулятор комиссии маркетплейса", "slug": "fee-chain", "h1": "Калькулятор комиссии маркетплейса"}, "en": {"name": "Marketplace fee calculator", "slug": "marketplace-fee-calculator", "h1": "Marketplace fee calculator"}, "uk": {"name": "Калькулятор комісії маркетплейсу", "slug": "komisiya-marketpleysu", "h1": "Калькулятор комісії маркетплейсу"}, "de": {"name": "Rechner für Marktplatzgebühren", "slug": "marktplatz-gebuehren", "h1": "Rechner für Marktplatzgebühren"}, "es": {"name": "Calculadora de comisiones de marketplace", "slug": "comisiones-de-marketplace", "h1": "Calculadora de comisiones de marketplace"}}, "inventory-turnover": {"ru": {"name": "Калькулятор оборачиваемости запасов", "slug": "inventory-turnover", "h1": "Калькулятор оборачиваемости запасов"}, "en": {"name": "Inventory turnover calculator", "slug": "inventory-turnover-calculator", "h1": "Inventory turnover calculator"}, "uk": {"name": "Калькулятор оборотності запасів", "slug": "oborotnist-zapasiv", "h1": "Калькулятор оборотності запасів"}, "de": {"name": "Rechner für den Lagerumschlag", "slug": "lagerumschlag-rechner", "h1": "Rechner für den Lagerumschlag"}, "es": {"name": "Calculadora de rotación de existencias", "slug": "rotacion-de-existencias", "h1": "Calculadora de rotación de existencias"}}, "profit": {"ru": {"name": "Калькулятор прибыли, маржи и наценки", "slug": "profit-margin-markup", "h1": "Калькулятор прибыли, маржи и наценки"}, "en": {"name": "Profit, margin and markup calculator", "slug": "profit-margin-markup-calculator", "h1": "Profit, margin and markup calculator"}, "uk": {"name": "Калькулятор прибутку, маржі та націнки", "slug": "prybutok-marzha", "h1": "Калькулятор прибутку, маржі та націнки"}, "de": {"name": "Rechner für Gewinn, Marge und Aufschlag", "slug": "gewinn-marge-aufschlag", "h1": "Rechner für Gewinn, Marge und Aufschlag"}, "es": {"name": "Calculadora de beneficio, margen y marcado", "slug": "beneficio-margen-y-marcado", "h1": "Calculadora de beneficio, margen y marcado"}}, "timesheet-week": {"ru": {"name": "Калькулятор табеля рабочего времени", "slug": "tabel-rabochego-vremeni", "h1": "Калькулятор табеля рабочего времени"}, "en": {"name": "Weekly timesheet calculator", "slug": "weekly-timesheet", "h1": "Weekly timesheet calculator"}, "uk": {"name": "Калькулятор табеля робочого часу", "slug": "tabel-robochogo-chasu", "h1": "Калькулятор табеля робочого часу"}, "de": {"name": "Wochenstundenzettel-Rechner", "slug": "wochenstundenzettel", "h1": "Wochenstundenzettel-Rechner"}, "es": {"name": "Calculadora de parte de horas semanal", "slug": "parte-de-horas-semanal", "h1": "Calculadora de parte de horas semanal"}}} as const;
const originalDefaults = {"ad-budget-funnel": {"budget": 150000, "cpc": 24, "crPct": 2.4, "aov": 4900}, "audience-growth": {"start": 12000, "end": 18500, "periods": 6}, "churn-retention": {"startCustomers": 1000, "lost": 50, "gained": 80}, "cogs": {"beginInventory": 320000, "purchases": 780000, "endInventory": 415000}, "cogs-unit-cost": {"materials": 240000, "labor": 96000, "overhead": 54000, "units": 1500}, "cycle-time": {"availableMinutes": 480, "demand": 120, "actualCycle": 3.5}, "email-metrics": {"sent": 12000, "delivered": 11640, "opened": 3025, "clicked": 412}, "employee-cost": {"gross": 180000, "taxPct": 30, "overhead": 25000}, "fee-chain": {"price": 2000, "commissionPct": 17, "acquiringPct": 1.5, "logistics": 55, "storage": 0, "cost": 900}, "inventory-turnover": {"cogs": 600000, "mode": "direct", "avgInventory": 150000, "beginInventory": 30000, "endInventory": 20000}, "profit": {"revenue": 480000, "cost": 315000}, "timesheet-week": {"lines": "09:00,18:00,60\n09:00,18:00,60\n09:00,17:30,45\n10:00,19:00,60\n09:00,14:00,0", "rate": 500, "normal": 40}} as const;
const faqFloor = {"ad-budget-funnel": {"ru": 4, "en": 4, "uk": 4, "de": 4, "es": 4}, "audience-growth": {"ru": 4, "en": 4, "uk": 4, "de": 4, "es": 4}, "churn-retention": {"ru": 5, "en": 5, "uk": 4, "de": 5, "es": 5}, "cogs": {"ru": 4, "en": 4, "uk": 4, "de": 4, "es": 4}, "cogs-unit-cost": {"ru": 4, "en": 4, "uk": 4, "de": 4, "es": 4}, "cycle-time": {"ru": 4, "en": 4, "uk": 4, "de": 4, "es": 4}, "email-metrics": {"ru": 4, "en": 4, "uk": 4, "de": 4, "es": 4}, "employee-cost": {"ru": 4, "en": 4, "uk": 4, "de": 4, "es": 4}, "fee-chain": {"ru": 5, "en": 5, "uk": 4, "de": 5, "es": 5}, "inventory-turnover": {"ru": 4, "en": 4, "uk": 4, "de": 4, "es": 4}, "profit": {"ru": 4, "en": 4, "uk": 4, "de": 4, "es": 4}, "timesheet-week": {"ru": 4, "en": 4, "uk": 4, "de": 4, "es": 4}} as const;

describe('Business9 sixty authored candidates retain published identities, defaults and FAQ coverage',()=>{
 for(const [i,t] of tools.entries()) for(const loc of locales) it(`${t.id}/${loc}: full candidate, preserved metadata and source boundaries`,()=>{
  const p: Partial<CalculatorDef>=loc==='ru'?t.presentation:t.copy![loc]!;
  const key=t.id as keyof typeof identity;
  for(const k of ['name','slug','h1'] as const) expect(p[k]).toBe(identity[key][loc][k]);
  expect(defaults(i)).toEqual(originalDefaults[key]);expect(t.presentation.fields.map(f=>f.name)).toEqual(Object.keys(originalDefaults[key]));
  expect(p.longDescription!.length).toBeGreaterThan(150);expect(p.howItWorks!.length).toBeGreaterThan(80);expect(p.example!.length).toBeGreaterThan(50);expect(p.howToUse!.length).toBeGreaterThanOrEqual(3);expect(p.disclaimer).toBeTruthy();
  expect(p.faq!.length).toBeGreaterThanOrEqual(faqFloor[key][loc]);expect(new Set(p.faq!.map(f=>f.q)).size).toBe(p.faq!.length);
  expect(JSON.stringify(p)).not.toMatch(/NaN|Infinity|undefined/);
  const sources=getBusinessWave9MethodSources(t.id,loc);expect(sources.length).toBeGreaterThan(0);expect(sources.every(s=>s.href?.startsWith('https://'))).toBe(true);
  if(['en','de','es'].includes(loc)){expect(JSON.stringify(p)).not.toMatch(/[А-Яа-яЁёІіЇїЄєҐґ]/);expect(JSON.stringify(sources)).not.toMatch(/[А-Яа-яЁёІіЇїЄєҐґ]/);}
 });
 it('thirteen primary URLs support bounded subjects and unknown IDs have no bibliography',()=>{
  expect(new Set(tools.flatMap(t=>getBusinessWave9MethodSources(t.id,'en').map(s=>s.href))).size).toBe(13);
  expect(getBusinessWave9MethodSources('unreviewed','en')).toEqual([]);
 });
});
describe('Business9 actual form and native result contracts',()=>{
 for(const [i,t] of tools.entries()) for(const loc of locales){
  it(`${t.id}/${loc}: inherited default result and boolean error are native`,()=>{
   const r=localizeResult(t.compute(defaults(i)),loc,t.id,runtime(i));expect(r.primary.value).not.toBe('—');expect(JSON.stringify(r)).not.toMatch(/NaN|Infinity|undefined/);
   const field=t.presentation.fields.find(f=>f.type==='number')!.name;
   const bad=localizeResult(t.compute({...defaults(i),[field]:true}),loc,t.id,runtime(i));expect(bad.primary.value).toBe('—');
   if(['en','de','es'].includes(loc)){expect(JSON.stringify(r)).not.toMatch(/[А-Яа-яЁёІіЇїЄєҐґ]/);expect(JSON.stringify(bad)).not.toMatch(/[А-Яа-яЁёІіЇїЄєҐґ]/);}
  });
  for(const f of t.presentation.fields.filter(f=>f.type==='number')) it(`${t.id}/${f.name}/${loc}: active actual boolean/nonfinite/parser errors`,()=>{
   for(const bad of [true,false,Infinity,NaN,'bad']){
    const values={...defaults(i),[f.name]:bad,...(t.id==='inventory-turnover'&&['beginInventory','endInventory'].includes(f.name)?{mode:'beginEnd'}:{})};
    expect(validateValues(t.id,t.presentation.fields,values as never,loc,runtime(i))[f.name]).toBeTruthy();
   }
  });
  if(t.validate) for(const f of t.presentation.fields.filter(f=>f.max===Number.MAX_SAFE_INTEGER)) it(`${t.id}/${f.name}/${loc}: precise fractional raw/query count cannot round toone`,()=>{
   const raw=loc==='en'?'1.00000000000000001':'1,00000000000000001';
   for(const value of [raw,1.5,Number.MAX_SAFE_INTEGER+1]) expect(validateValues(t.id,t.presentation.fields,{...defaults(i),[f.name]:value},loc,runtime(i))[f.name]).toBeTruthy();
   const scientific='1.00000000000000001e0';
   const restored=readValuesFromSearch(t.presentation.fields,defaults(i),`?${f.name}=${scientific}`,loc);expect(restored[f.name]).toBe(scientific);expect(validateValues(t.id,t.presentation.fields,restored,loc,runtime(i))[f.name]).toBeTruthy();
  });
 }
 for(const loc of locales) for(const lines of ['25:00,06:00','09:00,18:00,0.5','09:00,10:00,61']) it(`timesheet/${loc}: parsedline errors are translated without echoing user input`,()=>{
  const r=localizeResult(t11.compute({lines,rate:1,normal:40}),loc,t11.id,runtime(11));expect(r.primary.value).toBe('—');if(['en','de','es'].includes(loc)) expect(JSON.stringify(r)).not.toMatch(/[А-Яа-яЁёІіЇїЄєҐґ]/);
 });
});

for(const [i,t] of tools.entries()) if(t.contextualField) for(const loc of locales) it(`${t.id}/${loc}: own help explains its actual model`,()=>{
 const fields=t.presentation.fields.map(f=>t.contextualField!(f,defaults(i),loc));
 const helped=fields.filter(f=>f.help); expect(helped.length).toBeGreaterThan(0);
 if(['en','de','es'].includes(loc)) expect(JSON.stringify(helped.map(f=>f.help))).not.toMatch(/[А-Яа-яЁёІіЇїЄєҐґ]/);
});
