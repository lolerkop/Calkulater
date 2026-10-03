import { describe, expect, it } from 'vitest';
import { parseLocalizedNumber } from '../src/lib/format';
import type { CalcFunction, CalcResult } from '../src/lib/types';
import { calcIncomeTax } from '../src/lib/calculators/incomeTax';
import { calcVat } from '../src/lib/calculators/vat';
import { calcMargin } from '../src/lib/calculators/margin';
import { calcBreakEven } from '../src/lib/calculators/breakEven';
import { definition as v0 } from '../src/calculators/bonus/definition';
import { definition as v1 } from '../src/calculators/budget-split/definition';
import { definition as v2 } from '../src/calculators/commission/definition';
import { definition as v3 } from '../src/calculators/credit-card-payoff/definition';
import { definition as v4 } from '../src/calculators/crypto-pnl/definition';
import { definition as v5 } from '../src/calculators/dca/definition';
import { definition as v6 } from '../src/calculators/debt-snowball-avalanche/definition';
import { definition as v7 } from '../src/calculators/depreciation-methods/definition';
import { definition as v8 } from '../src/calculators/freelance-rate/definition';
const ownedDefinitions = [v0,v1,v2,v3,v4,v5,v6,v7,v8];
const engines: Record<string, CalcFunction> = {"income-tax-calculator":calcIncomeTax,"vat-calculator":calcVat,"margin-calculator":calcMargin,"break-even-calculator":calcBreakEven, ...Object.fromEntries(ownedDefinitions.map(def => [def.id, def.compute])) };
const defaults: Record<string, Record<string, unknown>> = {"income-tax-calculator": {"amount": 150000, "period": "month", "direction": "gross", "incomeBeforePeriod": 0, "deductions": 0, "mode": "progressive", "rate": 13}, "vat-calculator": {"amount": 12000, "operationDate": "", "rate": "22", "operation": "extract"}, "margin-calculator": {"mode": "fromPrice", "cost": 100, "sellPrice": 125, "markupPct": 30, "marginPct": 20, "quantity": 1}, "break-even-calculator": {"fixedCosts": 300000, "unitPrice": 1500, "variableCost": 900, "plannedUnits": 0}, "bonus": {"salary": 145000, "bonusPct": 35, "taxPct": 13}, "budget-split": {"total": 60000, "incomes": "anna 80000\nboris 120000", "mode": "income"}, "commission": {"mode": "fromAmount", "a": 100000, "b": 2.5}, "credit-card-payoff": {"balance": 100000, "apr": 24, "payment": 5000}, "crypto-pnl": {"direction": "long", "entry": 30000, "exit": 34500, "qty": 0.5, "feePct": 0.1, "leverage": 1}, "dca": {"monthly": 10000, "months": 12, "startPrice": 5000, "priceGrowthPct": 2}, "debt-snowball-avalanche": {"debts": "small 40000 12 2000\nbig 200000 26 6000", "extra": 4000, "strategy": "avalanche"}, "depreciation-methods": {"cost": 1200000, "salvage": 200000, "life": 5, "method": "straight", "year": 1}, "freelance-rate": {"targetIncome": 150000, "workDays": 21, "hoursPerDay": 6, "billablePct": 70, "expenses": 0, "taxPct": 6}};
const active: Record<string, string[]> = {"income-tax-calculator": ["amount", "incomeBeforePeriod", "deductions"], "vat-calculator": ["amount"], "margin-calculator": ["cost", "quantity"], "break-even-calculator": ["fixedCosts", "unitPrice", "variableCost", "plannedUnits"], "bonus": ["salary", "bonusPct", "taxPct"], "budget-split": ["total"], "commission": ["a", "b"], "credit-card-payoff": ["balance", "apr", "payment"], "crypto-pnl": ["entry", "exit", "qty", "feePct", "leverage"], "dca": ["monthly", "months", "startPrice", "priceGrowthPct"], "debt-snowball-avalanche": ["extra"], "depreciation-methods": ["cost", "salvage", "life", "year"], "freelance-rate": ["targetIncome", "workDays", "hoursPerDay", "billablePct", "expenses", "taxPct"]};
const clean = (value: string) => value.replace(/[  ]/g, ' ');
const run = (id: string, values: Record<string, unknown> = {}) => engines[id]({ ...defaults[id], ...values } as never);
const row = (result: CalcResult, label: string) => clean(result.secondary.find(item => item.label === label)!.value);
const fail = (result: CalcResult) => { expect(result.primary.value).toBe('—'); expect(result.secondary[0].accent).toBe('red'); expect(JSON.stringify(result)).not.toMatch(/NaN|Infinity/); };
const invalid: unknown[] = [true, false, null, {}, [], NaN, Infinity, -Infinity, 'broken', '1xyz', '1e309', '1e-9999'];
// These cases preserve the inherited independently specified references.
describe('Finance11 retains42 baseline references', () => {
  for (const def of ownedDefinitions) for (const ref of def.referenceCases!) it(`${def.id}: ${ref.name}`, () => {
    const result = def.compute(ref.inputs); expect(clean(result.primary.value)).toBe(clean(ref.expectPrimary));
    for (const expected of ref.expectSecondary ?? []) expect(row(result, expected.label)).toBe(clean(expected.value));
  });
});
describe('Finance11 strict active raw numeric contracts', () => {
  for (const [id, fields] of Object.entries(active)) for (const name of fields) for (const [index, value] of invalid.entries()) it(`${id}/${name}: rejects malformed${index}`, () => fail(run(id, { [name]: value })));
  const enums: Record<string, string[]> = { 'income-tax-calculator':['period','mode','direction'], 'vat-calculator':['operation'], 'margin-calculator':['mode'], 'budget-split':['mode'], 'commission':['mode'], 'crypto-pnl':['direction'], 'debt-snowball-avalanche':['strategy'], 'depreciation-methods':['method'] };
  for (const [id, fields] of Object.entries(enums)) for (const name of fields) for (const value of ['unknown', '', true, null, {}, 0]) it(`${id}/${name}: rejects invalid choice ${JSON.stringify(value)}`, () => fail(run(id, { [name]: value })));
  for (const [id, name] of [['margin-calculator','quantity'],['break-even-calculator','plannedUnits'],['dca','months'],['depreciation-methods','life'],['depreciation-methods','year']]) for (const value of ['1.00000000000000001', '1.00000000000000001e0', 1.5, Number.MAX_SAFE_INTEGER + 1]) it(`${id}/${name}: preserves exact whole-count input contract ${value}`, () => fail(run(id, { [name]: value })));
  it('tax progressive mode ignores malformed hidden fixed rate', () => expect(run('income-tax-calculator',{ rate: true }).primary.value).toBe('19 500 ₽'));
  it('tax fixed mode validates its active rate', () => fail(run('income-tax-calculator',{ mode:'fixed',rate:true })));
  it('margin modes ignore other hidden prices and percentages', () => {
    expect(run('margin-calculator',{mode:'fromPrice',markupPct:true,marginPct:'bad'}).primary.value).toBe('125 ₽');
    expect(run('margin-calculator',{mode:'fromMarkup',markupPct:25,sellPrice:true,marginPct:'bad'}).primary.value).toBe('125 ₽');
    expect(run('margin-calculator',{mode:'fromMargin',marginPct:20,sellPrice:true,markupPct:'bad'}).primary.value).toBe('125 ₽');
  });
  for (const [id,name] of [['income-tax-calculator','incomeBeforePeriod'],['income-tax-calculator','deductions'],['break-even-calculator','plannedUnits'],['freelance-rate','expenses']]) it(`${id}/${name}: blank optional amount is zero, negative is rejected`, () => {
    expect(run(id,{[name]:''}).primary.value).toBe(run(id,{[name]:0}).primary.value); fail(run(id,{[name]:-1}));
  });
});
describe('Finance11 independently derived financial boundary expectations', () => {
  it('tax uses marginal slices, not one top rate on all income', () => {
    const result=run('income-tax-calculator',{amount:6000000,period:'year'}); // 2.4m×13%+2.6m×15%+1m×18%=882000.
    expect(clean(result.primary.value)).toBe('882 000 ₽'); expect(row(result,'На руки (после налога)')).toBe('5 118 000 ₽');
  });
  it('tax100000 after2350000 crosses the2.4m boundary using taxable cumulative base', () => {
    const result=run('income-tax-calculator',{amount:100000,incomeBeforePeriod:2350000});
    expect(clean(result.primary.value)).toBe('14 000 ₽'); expect(row(result,'На руки (после налога)')).toBe('86 000 ₽');
    expect(clean(run('income-tax-calculator',{amount:86000,direction:'net',incomeBeforePeriod:2350000}).primary.value)).toBe('14 000 ₽');
  });
  it('tax subtraction of two huge cumulative taxes is avoided', () => expect(clean(run('income-tax-calculator',{amount:100,incomeBeforePeriod:1e20}).primary.value)).toBe('22 ₽'));
  it('tax month with prior zero is annualized average, not an actualJanuary withholding promise', () => {
    expect(clean(run('income-tax-calculator',{amount:250000}).primary.value)).toBe('33 500 ₽');
    expect(clean(run('income-tax-calculator',{amount:250000,incomeBeforePeriod:1}).primary.value)).toBe('32 500 ₽');
  });
  it('fixed tax with a deductible100 gives gross900/net660 at30percent', () => {
    const r=run('income-tax-calculator',{amount:660,direction:'net',mode:'fixed',rate:30,deductions:100});
    expect(r.primary.value).toBe('240 ₽'); expect(row(r,'Начислено (до налога)')).toBe('900 ₽');
    expect(run('income-tax-calculator',{amount:100,mode:'fixed',rate:30,deductions:200}).primary.value).toBe('0 ₽');
  });
  it('VAT extraction12200×22/122 matches adding22percent to10000', () => {
    const extracted=run('vat-calculator',{amount:12200}); const added=run('vat-calculator',{amount:10000,operation:'add'});
    expect(clean(extracted.primary.value)).toBe('2 200 ₽'); expect(clean(added.primary.value)).toBe('2 200 ₽');
    expect(row(extracted,'Сумма без НДС')).toBe('10 000 ₽'); expect(row(added,'Сумма с НДС')).toBe('12 200 ₽');
  });
  it('VAT verifies real calendar dates and warns without switching the selected rate', () => {
    fail(run('vat-calculator',{operationDate:'2026-02-30'}));fail(run('vat-calculator',{operationDate:true}));
    const r=run('vat-calculator',{amount:12000,rate:20,operationDate:'2026-01-01'});
    expect(clean(r.primary.value)).toBe('2 000 ₽');expect(r.note).toContain('повышена до22%'.replace('до22','до 22'));
  });
  it('margin permits losses: signed−20percent markup remains greater than−25percent margin', () => {
    const r=run('margin-calculator',{cost:100,sellPrice:80});expect(row(r,'Наценка')).toBe('-20,00%');expect(row(r,'Маржа')).toBe('-25,00%');
    expect(run('margin-calculator',{mode:'fromMarkup',markupPct:-20}).primary.value).toBe('80 ₽');
    expect(run('margin-calculator',{mode:'fromMargin',marginPct:-25}).primary.value).toBe('80 ₽');
    fail(run('margin-calculator',{quantity:0}));fail(run('margin-calculator',{quantity:3.9}));
  });
  it('zero fixed cost and zero contribution imply zero profit at every whole volume', () => {
    const r=run('break-even-calculator',{fixedCosts:0,unitPrice:100,variableCost:100,plannedUnits:9});
    expect(r.primary.value).toBe('0 шт.');expect(row(r,'Прибыль при плане')).toBe('0 ₽');expect(r.note).toContain('любом объёме');
    expect(row(run('break-even-calculator',{fixedCosts:0,unitPrice:80,variableCost:100,plannedUnits:3}),'Прибыль при плане')).toBe('-60 ₽');
  });
  it('positive fixed cost and nonpositive contribution remain unreachable', () => expect(run('break-even-calculator',{fixedCosts:1,unitPrice:100,variableCost:100}).primary.value).toBe('—'));
  it('break-even rounds only the number of whole units upward:16800/(1250−850)=42', () => {
    const r=run('break-even-calculator',{fixedCosts:16800,unitPrice:1250,variableCost:850});expect(r.primary.value).toBe('42 шт.');expect(row(r,'Выручка при целом числе единиц')).toBe('52 500 ₽');
    expect(run('break-even-calculator',{fixedCosts:16801,unitPrice:1250,variableCost:850}).primary.value).toBe('43 шт.');
  });
  it('bonus zero is valid but100percent withholding is outside the model', () => {
    expect(run('bonus',{bonusPct:0}).primary.value).toBe('0,00 ₽');fail(run('bonus',{taxPct:100}));
    expect(run('bonus',{salary:4500,bonusPct:35,taxPct:30}).primary.value).toBe('1 102,50 ₽');
  });
  it('five cents among ten equal participants never creates a negative share', () => {
    const r=run('budget-split',{total:.05,mode:'equal',incomes:Array.from({length:10},(_,i)=>`p${i} 1`).join('\n')});
    expect(r.table!.rows.map(row=>row[3])).toEqual(['0,01','0,01','0,01','0,01','0,01','0,00','0,00','0,00','0,00','0,00']);
    expect(row(r,'Проверка суммы')).toBe('0,05 ₽');expect(row(r,'Наименьший взнос')).toBe('0,00 ₽');
  });
  it('weighted cent ties are deterministic, with zero income receiving no proportional share', () => {
    const r=run('budget-split',{total:.05,incomes:'a 0\nb 1\nc 1'});
    expect(r.table!.rows.map(row=>row[3])).toEqual(['0,00','0,03','0,02']);
    fail(run('budget-split',{incomes:'a wrong\nb 1'}));fail(run('budget-split',{incomes:'a -1\nb 1'}));
    expect(run('budget-split',{mode:'equal',incomes:'a 0\nb 0'}).primary.value).not.toBe('—');
    fail(run('budget-split',{total:.004}));fail(run('budget-split',{total:1e20}));
  });
  it('budget weights normalize huge finite incomes without overflowing their sum', () => {
    const r=run('budget-split',{total:100,incomes:`a ${'1'+'0'.repeat(308)}\nb ${'1'+'0'.repeat(308)}`});expect(r.table!.rows.map(row=>row[3])).toEqual(['50,00','50,00']);
  });
  it('all commission modes describe the same1250fee on50000at2.5percent', () => {
    expect(clean(run('commission',{a:50000,b:2.5}).primary.value)).toBe('1 250 ₽');
    expect(clean(run('commission',{mode:'fromCommission',a:1250,b:2.5}).primary.value)).toBe('50 000 ₽');
    expect(run('commission',{mode:'rate',a:50000,b:1250}).primary.value).toBe('2,50 %');
    fail(run('commission',{mode:'fromCommission',b:0}));fail(run('commission',{mode:'rate',a:0}));
    expect(run('commission',{a:0,b:0}).primary.value).toBe('0 ₽');
  });
  it('commission tiny positive fee retains a nonzero display', () => expect(run('commission',{a:1,b:.01}).primary.value).toBe('0,0001 ₽'));
  it('card zero rate requiresceil100/30=4months and zero interest', () => {
    const r=run('credit-card-payoff',{balance:100,apr:0,payment:30});expect(r.primary.value).toBe('4 мес');expect(row(r,'Переплата процентами')).toBe('0,00 ₽');expect(r.table!.rows.at(-1)![1]).toBe('10,00 ₽');
    fail(run('credit-card-payoff',{balance:100,apr:12,payment:1}));
  });
  it('a firstpayment above thefullbalance plusinterest needsone month even when an analytic ratio would roundtozero',()=>{const r=run('credit-card-payoff',{balance:100,apr:24,payment:1e308});expect(r.primary.value).toBe('1 мес');expect(row(r,'Переплата процентами')).toBe('2,00 ₽');expect(r.table!.rows[0][1]).toBe('102,00 ₽');});
  it('card tiny nonzero rate uses log1p and retains its positive interest', () => {
    const r=run('credit-card-payoff',{balance:100,apr:1e-12,payment:30});expect(r.primary.value).toBe('4 мес');expect(row(r,'Переплата процентами')).toBe('1,833·10^-13 ₽');
  });
  it('card600months is finite supported and601is a truthful horizon limit', () => {
    expect(run('credit-card-payoff',{balance:600,apr:0,payment:1}).primary.value).toBe('600 мес');fail(run('credit-card-payoff',{balance:601,apr:0,payment:1}));
    expect(run('credit-card-payoff').table!.rows).toHaveLength(26);
  });
  it('crypto fees affect both sides; fixed quantityleverage changes margin-return only', () => {
    const a=run('crypto-pnl');const b=run('crypto-pnl',{leverage:2});expect(a.primary.value).toBe('2 217,75 ₽');expect(b.primary.value).toBe(a.primary.value);
    expect(row(a,'Комиссии')).toBe('32,25 ₽');expect(row(a,'Доходность позиции')).toBe('14,79%');expect(row(b,'Доходность позиции')).toBe('29,57%');
    expect(run('crypto-pnl',{direction:'short',entry:100,exit:80,qty:2,feePct:1}).primary.value).toBe('36,40 ₽');fail(run('crypto-pnl',{feePct:100.1}));
  });
  it('DCA two purchases at100and200 with equal100budget buy1.5units: mean133.33andlastvalue300', () => {
    const r=run('dca',{monthly:100,startPrice:100,months:2,priceGrowthPct:100});expect(r.primary.value).toBe('300,00 ₽');expect(row(r,'Средняя цена')).toBe('133,33 ₽');expect(row(r,'Куплено единиц')).toBe('1,5');
    expect(run('dca',{monthly:100,startPrice:100,months:2,priceGrowthPct:0}).primary.value).toBe('200,00 ₽');
    fail(run('dca',{priceGrowthPct:-100}));fail(run('dca',{months:12001}));expect(run('dca',{months:12000,priceGrowthPct:0}).primary.value).not.toBe('—');
  });
  it('DCA declines25percent between purchases so weighted mean85.71andlastvalue175', () => {
    const r=run('dca',{monthly:100,startPrice:100,months:2,priceGrowthPct:-25});expect(r.primary.value).toBe('175,00 ₽');expect(row(r,'Средняя цена')).toBe('85,71 ₽');
  });
  it('debt freed minimum next month allows a formerly underfunded high-rate debt to clear', () => {
    const r=run('debt-snowball-avalanche',{debts:'small 10 0 10\nbig 100 120 5',extra:0});expect(r.primary.value).toBe('14 мес');expect(row(r,'Переплата процентами')).toBe('94,65 ₽');expect(row(r,'Выплачено всего')).toBe('204,65 ₽');
  });
  it('debt1201months is described as a simulation limit rather than impossible payoff', () => {
    const r=run('debt-snowball-avalanche',{debts:'only 1201 0 1',extra:0});fail(r);expect(r.secondary[0].value).toContain('предел симуляции');expect(r.secondary[0].value).toContain('не доказательство');
    expect(run('debt-snowball-avalanche',{debts:'only 1200 0 1',extra:0}).primary.value).toBe('1 200 мес');
    fail(run('debt-snowball-avalanche',{debts:'one 100 12 1',extra:0}));
  });
  it('debt does not silently forgive a small positive residual', () => expect(run('debt-snowball-avalanche',{debts:'one 0.0000000001 0 0.00000000005',extra:0}).primary.value).toBe('2 мес'));
  it('pureDDB is40,24,14.4,8.64,5.184 and ends at7.776; no automatic linear switch', () => {
    const r=run('depreciation-methods',{cost:100,salvage:0,life:5,method:'ddb',year:5});expect(r.primary.value).toBe('5,18 ₽');expect(row(r,'Остаточная стоимость')).toBe('7,78 ₽');
    expect(r.table!.rows.map(row=>row[1])).toEqual(['40,00 ₽','24,00 ₽','14,40 ₽','8,64 ₽','5,18 ₽']);
  });
  it('DDB salvage capsbook:100cost/20salvage/twoyears ends at20, not zero', () => {
    const r=run('depreciation-methods',{cost:100,salvage:20,life:2,method:'ddb',year:2});expect(r.primary.value).toBe('0,00 ₽');expect(row(r,'Остаточная стоимость')).toBe('20,00 ₽');
    fail(run('depreciation-methods',{life:51}));fail(run('depreciation-methods',{year:6}));
  });
  it('freelance published1990.16 requires15000costs at6percent turnover withholding', () => {
    const r=run('freelance-rate',{expenses:15000});expect(clean(r.primary.value)).toBe('1 990,16 ₽');expect(row(r,'Оплачиваемых часов')).toBe('88,2 ч');
    expect(clean(run('freelance-rate',{expenses:0}).primary.value)).toBe('1 809,23 ₽');fail(run('freelance-rate',{billablePct:100.1}));
    expect(run('freelance-rate',{targetIncome:100,expenses:0,taxPct:0,workDays:2.5,hoursPerDay:4,billablePct:100}).primary.value).toBe('10,00 ₽');
  });
  it('arithmetic overflow and nonrepresentable positive output are explicit errors', () => {
    fail(run('bonus',{salary:1e308,bonusPct:200}));fail(run('vat-calculator',{amount:1e308,operation:'add',rate:100}));
    fail(run('break-even-calculator',{fixedCosts:0,unitPrice:1,variableCost:1e308,plannedUnits:100}));
    fail(run('commission',{mode:'fromCommission',a:1,b:1e-320}));fail(run('dca',{priceGrowthPct:1e-20,months:2}));
    fail(run('crypto-pnl',{entry:1e308,qty:1e308}));fail(run('freelance-rate',{targetIncome:1e308,expenses:1e308}));
  });
});
describe('owned raw whole-count hooks run before form normalization in5native languages', () => {
  const locales=['ru','en','uk','de','es'] as const;
  for (const def of [v5,v7]) for (const locale of locales) it(`${def.id}/${locale}: raw fraction is rejected, exact count retained`, () => {
    const field=def.id==='dca'?'months':'life';const values={...defaults[def.id],[field]:locale==='de'||locale==='es'?'1,00000000000000001':'1.00000000000000001'};
    const context={values:values as never,locale,fields:def.presentation.fields,parseNumber:(text:string)=>parseLocalizedNumber(text,locale)};
    const errors=def.validate!(context);expect(errors[field]).toBeTruthy();if(['en','de','es'].includes(locale))expect(errors[field]).not.toMatch(/[А-Яа-яЁё]/);
    expect(def.validate!({...context,values:{...values,[field]:12} as never})).toEqual({});
  });
  for(const locale of locales) it(`commission/${locale}:3modes have explicitamount/fee/rate units and nativezeroerror`,()=>{
    const field=ownedDefinitions[2].presentation.fields.find(f=>f.name==='b')!;
    expect(ownedDefinitions[2].contextualField!(field,{mode:'fromAmount'},locale).unit).toBe('%');expect(ownedDefinitions[2].contextualField!(field,{mode:'rate'},locale).unit).toBe('₽');
    const errors=ownedDefinitions[2].validate!({values:{mode:'fromCommission',a:100,b:0},locale,fields:ownedDefinitions[2].presentation.fields,parseNumber:text=>parseLocalizedNumber(text,locale)});expect(errors.b).toBeTruthy();if(['en','de','es'].includes(locale))expect(errors.b).not.toMatch(/[А-Яа-яЁё]/);
  });
});
