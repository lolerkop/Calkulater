import { describe, expect, it } from 'vitest';
import type { CalcResult } from '../src/lib/types';
import { definition as curtain } from '../src/calculators/curtain-size/definition';
import { definition as luggage } from '../src/calculators/luggage-linear/definition';
import { definition as frame } from '../src/calculators/picture-frame-mat/definition';
import { definition as price } from '../src/calculators/price-per-unit/definition';
import { definition as print } from '../src/calculators/print-3d-cost/definition';
import { definition as stock } from '../src/calculators/stock-duration/definition';
import { definition as subs } from '../src/calculators/subscriptions-cost/definition';
import { definition as tip } from '../src/calculators/tip/definition';
import { definition as trip } from '../src/calculators/trip-budget/definition';
import { integer, ceiling, decimal, dmul } from '../src/lib/calculators/householdWave17Numeric';
const defs=[curtain,luggage,frame,price,print,stock,subs,tip,trip];
const defaults=(d:typeof defs[number])=>Object.fromEntries(d.presentation.fields.map(f=>[f.name,f.defaultValue!]));
const number=(s:string)=>{const t=s.replace(/[\s\u00a0\u202f]/g,'').replace(',','.');const e=/^([+-]?[\d.]+)·10\^(-?\d+)/.exec(t);return e?Number(e[1]+'e'+e[2]):parseFloat(t);};
const row=(r:CalcResult,label:string)=>r.secondary.find(x=>x.label===label)?.value??'';
const near=(s:string,n:number)=>{const x=number(s);expect(Number.isFinite(x)).toBe(true);if(n===0)expect(x).toBe(0);else expect(Math.abs(x/n-1)).toBeLessThan(.0006);};
const bad:unknown[]=[null,true,false,'bad','NaN','Infinity',NaN,Infinity,-Infinity,'0x10','1e-999',{},[],['1']];
for(const d of defs){
 for(const ref of d.referenceCases!)it(d.id+': retained reference '+ref.name,()=>{const r=d.compute(ref.inputs);expect(r.primary.value).toBe(ref.expectPrimary);for(const x of ref.expectSecondary??[])expect(r.secondary).toContainEqual(expect.objectContaining(x));});
 it(d.id+': original published payload remains correct',()=>{const r=JSON.stringify(d.compute(d.publishedExample!.inputs)).replace(/[\u00a0\u202f]/g,' ');for(const v of d.publishedExample!.expected)expect(r).toContain(v.replace(/[\u00a0\u202f]/g,' '));});
 for(const f of d.presentation.fields.filter(f=>f.type==='number'&&(!f.showIf||f.showIf.equals===defaults(d)[f.showIf.field]))){
  for(const[k,v]of bad.entries())it(d.id+': strict active '+f.name+'/'+k,()=>expect(d.compute({...defaults(d),[f.name]:v} as unknown as Parameters<typeof d.compute>[0]).primary.value).toBe('—'));
  if(!f.optional)for(const[k,v]of [undefined,'',' '].entries())it(d.id+': required '+f.name+'/'+k,()=>expect(d.compute({...defaults(d),[f.name]:v} as unknown as Parameters<typeof d.compute>[0]).primary.value).toBe('—'));
  if(f.optional)for(const[k,v]of [undefined,'',' '].entries())it(d.id+': optional '+f.name+'/'+k+' equals zero',()=>expect(d.compute({...defaults(d),[f.name]:v} as unknown as Parameters<typeof d.compute>[0])).toEqual(d.compute({...defaults(d),[f.name]:0})));
 }
}
describe('Independent subject literals and boundaries',()=>{
 it('curtain 0.1×3/0.3 exact decimal drop count is1',()=>{const r=curtain.compute({windowWidth:.1,fullness:3,fabricWidth:.3,height:100,hem:0});expect(row(r,'Полотнищ')).toBe('1 шт');expect(r.primary.value).toBe('1 м');});
 it('curtain actual positive decimal remainder is not erased',()=>expect(row(curtain.compute({windowWidth:.10000000000000002,fullness:3,fabricWidth:.3,height:100,hem:0}),'Полотнищ')).toBe('2 шт'));
 it('curtain new label describes width before gathering',()=>expect(row(curtain.compute(defaults(curtain)),'Ширина ткани до сборки')).toBe('280 см'));
 it('curtain more than safe whole panel count fails',()=>expect(curtain.compute({windowWidth:1e20,fullness:2,fabricWidth:1,height:1,hem:0}).primary.value).toBe('—'));
 it('luggage62in is exactly157.48cm conversion, no rounding of the input limit',()=>{const r=luggage.compute({l:100,w:50,h:7.48,limit:157.48});near(r.primary.value,157.48);near(row(r,'В дюймах'),62);});
 it('luggage required volume formed before intermediate overflow',()=>near(row(luggage.compute({l:1e100,w:1e100,h:1e-200,limit:3e100}),'Объём коробки'),.001));
 it('luggage nonzero volume underflow is explicit error',()=>expect(luggage.compute({l:1e-200,w:1e-200,h:1e-200,limit:1}).primary.value).toBe('—'));
 it('frame area expansion survives a very narrow border',()=>near(row(frame.compute({photoWidth:1e100,photoHeight:1e100,border:1e-100,bottomExtra:0}),'Площадь паспарту'),4));
 it('frame20×30 plus5/1 has area630 and actual outermat30×41',()=>{const r=frame.compute(defaults(frame));expect(r.primary.label).toBe('Внешний размер паспарту');expect(r.primary.value).toBe('30×41 см');expect(row(r,'Площадь паспарту')).toBe('630 см²');});
 it('unit price exact cross-products distinguish1e−12/2e−12, no falseepsilon tie',()=>{const r=price.compute({mode:'compare',unit:'kg',priceA:1e-12,amountA:1,priceB:2e-12,amountB:1});expect(r.primary.value).toBe('A');near(row(r,'Переплата за единицу'),1e-12);});
 it('unit price1/3 equals2/6 exactly',()=>expect(price.compute({mode:'compare',unit:'l',priceA:1,amountA:3,priceB:2,amountB:6}).primary.value).toBe('одинаково'));
 it('inactive price fields ignored in single/compare modes',()=>{expect(price.compute({mode:'single',unit:'kg',price:150,amount:.5,priceA:false}).primary.value).toBe('300,00 ₽ за кг');expect(price.compute({mode:'compare',unit:'kg',priceA:100,amountA:1,priceB:100,amountB:1,price:false}).primary.value).toBe('одинаково');});
 it('print fullmaterial ratio survives huge factors',()=>{const r=print.compute({grams:1e100,spoolPrice:1e100,spoolWeight:1e200,hours:1,powerW:0,kwhPrice:0,wearPerHour:0,markupPct:0});expect(r.primary.value).toBe('1,00 ₽');near(row(r,'Цена грамма пластика'),1e-100);});
 it('print markup is25% ofall900.495 basecost, not labelledbase',()=>{const r=print.compute({grams:340,spoolPrice:2400,spoolWeight:1000,hours:21.5,powerW:150,kwhPrice:6.2,wearPerHour:3,markupPct:25});expect(r.primary.label).toBe('Стоимость печати с наценкой');expect(r.primary.value).toBe('1 125,62 ₽');near(row(r,'Наценка'),225.12375);});
 it('stock tinyactualduration1e−300 is notclamped0.1day',()=>near(stock.compute({stock:1,perDay:1e300,reserveDays:0}).primary.value,1e-300));
 it('stock binarysubnormal duration MIN/.5 stays2MIN',()=>near(stock.compute({stock:Number.MIN_VALUE,perDay:.5,reserveDays:0}).primary.value,Number.MIN_VALUE*2));
 it('stockzero is legitimately exhausted',()=>expect(stock.compute({stock:0,perDay:2,reserveDays:0}).primary.value).toBe('0 дней'));
 it('stock negative reserve rejected instead of ignored',()=>expect(stock.compute({stock:30,perDay:2,reserveDays:-1}).primary.value).toBe('—'));
 it('stock exact reorder boundary30/2−15 iszero',()=>expect(row(stock.compute({stock:30,perDay:2,reserveDays:15}),'Заказать через')).toBe('0 дней'));
 it('subscription fractionalmonth shown as0.5, monthly60/year720',()=>{const r=subs.compute({items:'Half month 30 0.5'});expect(r.primary.value).toBe('60,00 ₽');expect(r.table?.rows[0][2]).toBe('0,5');expect(row(r,'В год')).toBe('720,00 ₽');});
 it('subscription tinypositive charge0.001 remains nonzero',()=>near(subs.compute({items:'Tiny 0.001 1'}).primary.value,.001));
 it('subscriptions free row contributeszero without becominginvalid',()=>expect(subs.compute({items:'Free trial 0 1'}).primary.value).toBe('0,00 ₽'));
 it('subscriptions years computed before displayrounding',()=>expect(row(subs.compute({items:'A 1 3'}),'В год')).toBe('4,00 ₽'));
 it('subscriptions1001records fail bounded listcap',()=>expect(subs.compute({items:'A 0 1\n'.repeat(1001)}).primary.value).toBe('—'));
 it('tip wholeunit rounding0.3/3 raises total3 with2.7extra',()=>{const r=tip.compute({bill:.3,tipPercent:0,people:3,roundPerPerson:'yes'});expect(r.primary.value).toBe('3,00 ₽');expect(row(r,'С человека')).toBe('1,00 ₽');expect(row(r,'Сверх счёта из-за округления')).toBe('2,70 ₽');});
 it('tip actual decimal boundary10.01×100% /2 is10.01→ceil11',()=>expect(row(tip.compute({bill:10.01,tipPercent:100,people:2,roundPerPerson:'yes'}),'С человека')).toBe('11,00 ₽'));
 it('trip fractionalday1.5 is permitted meal duration, nights0 valid',()=>{const r=trip.compute({nights:0,days:1.5,people:2,hotelPerNight:0,foodPerDayPerPerson:4,transport:0,activities:0,other:0});expect(r.primary.value).toBe('12,00 ₽');expect(row(r,'В день')).toBe('8,00 ₽');});
 it('trip tinypositiveexpense preserves monetaryvalue',()=>near(trip.compute({nights:0,days:1,people:1,hotelPerNight:0,foodPerDayPerPerson:0,transport:1e-100,activities:0,other:0}).primary.value,1e-100));
});
for(const [d,key]of [[price,'mode'],[price,'unit'],[tip,'roundPerPerson']] as const)for(const v of [null,false,true,1,{},[],['single'],'bad'])it(d.id+': closedenum '+key+JSON.stringify(v),()=>expect(d.compute({...defaults(d),[key]:v} as unknown as Parameters<typeof d.compute>[0]).primary.value).toBe('—'));
for(const [d,key]of [[tip,'people'],[trip,'people'],[trip,'nights']] as const)for(const v of [1.5,'1.00000000000000001','1.00000000000000001e0',Number.MAX_SAFE_INTEGER+1,'9007199254740992'])it(d.id+': whole actualraw '+key+'/'+v,()=>expect(d.compute({...defaults(d),[key]:v}).primary.value).toBe('—'));
for(const x of ['1.00000000000000001','1.00000000000000001e0','0.99999999999999999999','0.99999999999999999999e0'])it('rawfraction notrounded towhole '+x,()=>expect(integer(x)).toBeNaN());
it('shortestdecimal ceiling positive remainder is exact',()=>{expect(ceiling(dmul(decimal(.1),decimal(3)),decimal(.3))).toBe(1);expect(ceiling(dmul(decimal(.10000000000000002),decimal(3)),decimal(.3))).toBe(2);});
for(const v of [false,true,null,{},[],''])it('subscription strict text '+JSON.stringify(v),()=>expect(subs.compute({items:v} as unknown as Parameters<typeof subs.compute>[0]).primary.value).toBe('—'));
for(const t of ['A bad 1','A 1 Infinity','A 1 0','A -1 1','A 1 1e-999','A 1e-999 1','A 0x10 1','A 1e308 1e-308'])it('subscription strict row '+t,()=>expect(subs.compute({items:t}).primary.value).toBe('—'));

it("decimal unit price0.3/3 equals0.1/1, withoutbinaryfalse inequality",()=>expect(price.compute({mode:"compare",unit:"pcs",priceA:.3,amountA:3,priceB:.1,amountB:1}).primary.value).toBe("одинаково"));
it("actualpositive decimalprice remainder .30000000000000004/3 greaterthan .1",()=>expect(price.compute({mode:"compare",unit:"pcs",priceA:.30000000000000004,amountA:3,priceB:.1,amountB:1}).primary.value).toBe("B"));
it('decimal luggage .1+.2+.3 equals.6 withzero allowance',()=>{const r=luggage.compute({l:.1,w:.2,h:.3,limit:.6});expect(row(r,'По введённому пределу')).toBe('проходит');expect(row(r,'Запас до предела')).toBe('0 см');});
it('luggage genuine decimal excess .30000000000000004 survives',()=>expect(row(luggage.compute({l:.1,w:.2,h:.30000000000000004,limit:.6}),'По введённому пределу')).toBe('превышена'));
it('subscription 1.005/3 has exact.335 and roundshalfup.34',()=>{const r=subs.compute({items:'A 1.005 3'});expect(r.primary.value).toBe('0,34 ₽');expect(row(r,'Её вклад в месяц')).toBe('0,34 ₽');expect(r.table?.rows[0][3]).toBe('0,34');});
it('subscription annual/monthly derived from three exact.335 ratios',()=>{const r=subs.compute({items:'A 1.005 3\nB 1.005 3\nC 1.005 3'});expect(r.primary.value).toBe('1,01 ₽');expect(row(r,'В год')).toBe('12,06 ₽');});
it('print material1×1.005/3 decimal.335 is.34, equals direct.335',()=>{const x={grams:1,spoolPrice:1.005,spoolWeight:3,hours:1,powerW:0,kwhPrice:0,wearPerHour:0,markupPct:0};const r=print.compute(x);expect(r.primary.value).toBe('0,34 ₽');expect(row(r,'Пластик')).toBe('0,34 ₽');expect(row(r,'Цена грамма пластика')).toBe('0,34 ₽');expect(r).toEqual(print.compute({...x,spoolPrice:.335,spoolWeight:1}));});
it('tip1.005/3 perperson exact.335 is.34, same as.67/2',()=>{const r=tip.compute({bill:1.005,tipPercent:0,people:3,roundPerPerson:'no'});expect(row(r,'С человека')).toBe('0,34 ₽');expect(row(r,'С человека')).toBe(row(tip.compute({bill:.67,tipPercent:0,people:2,roundPerPerson:'no'}),'С человека'));});
it('unitprice decimal1.005/3 roundshalfup.34 too',()=>expect(price.compute({mode:'single',unit:'pcs',price:1.005,amount:3}).primary.value).toBe('0,34 ₽ за шт'));

it('subscription exact most-expensive comparison retains positive rational difference',()=>expect(row(subs.compute({items:'A 100000000 300000001\nB 100000001 300000004'}),'Самая дорогая')).toBe('B'));
