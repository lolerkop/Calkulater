import { describe, expect, it } from 'vitest';
import { definition as acceleration } from '../src/calculators/acceleration/definition';
import { definition as newton } from '../src/calculators/newton-force/definition';
import { definition as momentum } from '../src/calculators/momentum/definition';
import { definition as work } from '../src/calculators/work/definition';
import { definition as torque } from '../src/calculators/physics-torque/definition';
import { definition as lever } from '../src/calculators/lever-moment/definition';
import { definition as pressure } from '../src/calculators/pressure/definition';
import { definition as density } from '../src/calculators/density/definition';
import { localization as accelerationLoc } from '../src/calculators/acceleration/localization';
import { localization as newtonLoc } from '../src/calculators/newton-force/localization';
import { localization as momentumLoc } from '../src/calculators/momentum/localization';
import { localization as workLoc } from '../src/calculators/work/localization';
import { localization as torqueLoc } from '../src/calculators/physics-torque/localization';
import { localization as leverLoc } from '../src/calculators/lever-moment/localization';
import { localization as pressureLoc } from '../src/calculators/pressure/localization';
import { localization as densityLoc } from '../src/calculators/density/localization';
import { isCompleteCalculatorCopy } from '../src/lib/platform/types';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import { getMechanicsWave4MethodSources } from '../src/data/mechanicsWave4MethodSources';
import type { CalcResult, CalcInputs } from '../src/lib/types';
import { getCalculatorById } from '../src/lib/i18n';
import { fieldUnitLabel } from '../src/lib/fieldUnitLabel';
import { getCalculatorEditorial } from '../src/data/calculatorEditorial';
import { runtimeFor } from '../src/calculators/runtime.generated';

const tools = [acceleration, newton, momentum, work, torque, lever, pressure, density];
const locs = [accelerationLoc, newtonLoc, momentumLoc, workLoc, torqueLoc, leverLoc, pressureLoc, densityLoc];
const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const translated = ['en', 'uk', 'de', 'es'] as const;
const row = (r: CalcResult, label: string) => r.secondary.find(x => x.label === label)?.value;
const normalize = (s: string) => s.replace(/[\u00a0\u202f]/g, ' ');
const error = (r: CalcResult) => { expect(r.primary.value).toBe('—'); expect(r.secondary[0].accent).toBe('red'); };
const number = (s: string) => {
  const text = s.replace(/[\u00a0\u202f]/g, '').replace(',', '.');
  const scientific = /^(-?[\d.]+)·10\^(-?\d+)/.exec(text);
  return scientific ? Number(scientific[1]) * 10 ** Number(scientific[2]) : parseFloat(text);
};
// Every fixture below is supplied independently, not derived from the engine under test.
const activeCases: { tool: number; inputs: CalcInputs; active: string[]; inactive?: string[] }[] = [
  { tool: 0, inputs: { mode: 'a', v0: 0, v: 27.8, t: 8.4 }, active: ['v0','v','t'], inactive: ['a'] },
  { tool: 0, inputs: { mode: 'v', v0: 2, a: 3, t: 4 }, active: ['v0','a','t'], inactive: ['v'] },
  { tool: 1, inputs: { mode: 'F', m: 10, a: 2 }, active: ['m','a'], inactive: ['F','a2','F2','m2'] },
  { tool: 1, inputs: { mode: 'm', F: 20, a2: 2 }, active: ['F','a2'], inactive: ['m','a','F2','m2'] },
  { tool: 1, inputs: { mode: 'a', F2: 20, m2: 10 }, active: ['F2','m2'], inactive: ['m','a','F','a2'] },
  { tool: 2, inputs: { mode: 'p', m: 3, v: 4 }, active: ['m','v'], inactive: ['p','p2','m2','v2'] },
  { tool: 2, inputs: { mode: 'v', p: 30, m2: 6 }, active: ['p','m2'], inactive: ['m','v','p2','v2'] },
  { tool: 2, inputs: { mode: 'm', p2: 18, v2: 9 }, active: ['p2','v2'], inactive: ['m','v','p','m2'] },
  { tool: 3, inputs: { mode: 'W', F: 10, s: 5, angleDeg: 0 }, active: ['F','s','angleDeg'], inactive: ['W'] },
  { tool: 3, inputs: { mode: 's', F: 10, W: -50, angleDeg: 180 }, active: ['F','W','angleDeg'], inactive: ['s'] },
  { tool: 4, inputs: { force: 50, radius: 0.3, angle: 90 }, active: ['force','radius','angle'] },
  { tool: 5, inputs: { mode: 'force2', f1: 100, d1: 2, d2: 0.5 }, active: ['f1','d1','d2'], inactive: ['f2'] },
  { tool: 5, inputs: { mode: 'distance2', f1: 100, d1: 2, f2: 400 }, active: ['f1','d1','f2'], inactive: ['d2'] },
  { tool: 6, inputs: { mode: 'p', F: 1000, A: 2 }, active: ['F','A'], inactive: ['p','A2','F2','p2'] },
  { tool: 6, inputs: { mode: 'F', p: 101325, A2: 1 }, active: ['p','A2'], inactive: ['F','A','F2','p2'] },
  { tool: 6, inputs: { mode: 'A', F2: 2000, p2: 100000 }, active: ['F2','p2'], inactive: ['F','A','p','A2'] },
  { tool: 7, inputs: { mode: 'rho', m: 1000, V: 1 }, active: ['m','V'], inactive: ['rho','V2','m2','rho2'] },
  { tool: 7, inputs: { mode: 'm', rho: 2700, V2: 0.5 }, active: ['rho','V2'], inactive: ['m','V','m2','rho2'] },
  { tool: 7, inputs: { mode: 'V', m2: 7850, rho2: 7850 }, active: ['m2','rho2'], inactive: ['m','V','rho','V2'] },
];

describe('mechanics wave 4 unchanged independent references and active contracts', () => {
  for (const tool of tools) for (const sample of tool.referenceCases ?? []) it(`${tool.id}: reference ${sample.name}`, () => {
    const r = tool.compute(sample.inputs);
    expect(normalize(r.primary.value)).toBe(normalize(sample.expectPrimary));
    for (const expected of sample.expectSecondary ?? []) expect(normalize(row(r, expected.label) ?? '')).toBe(normalize(expected.value));
  });
  for (const c of activeCases) for (const field of c.active) it(`${tools[c.tool].id}/${String(c.inputs.mode ?? 'single')}: strict active ${field}`, () => {
    for (const bad of [undefined, null, true, false, '', ' ', 'NaN', 'Infinity', NaN, Infinity, -Infinity, '1 23', '2kg', '1e-999', '-1e-999', '0.'+'0'.repeat(400)+'1']) error(tools[c.tool].compute({ ...c.inputs, [field]: bad }));
  });
  for (const c of activeCases.filter(x => x.inactive)) it(`${tools[c.tool].id}/${String(c.inputs.mode)}: inactive malformed inputs are ignored`, () => {
    const inactive = Object.fromEntries(c.inactive!.map(k => [k, true]));
    expect(tools[c.tool].compute({ ...c.inputs, ...inactive })).toEqual(tools[c.tool].compute(c.inputs));
  });
  for (const tool of tools.filter(x => x.id !== 'physics-torque')) it(`${tool.id}: unknown modes never select a fallback formula`, () => {
    const defaults = Object.fromEntries(tool.presentation.fields.map(f => [f.name, f.defaultValue]));
    for (const mode of ['bad', '', 'constructor', 'toString', true, 1, undefined]) error(tool.compute({ ...defaults, mode }));
  });
  it('localized decimal and scientific notation represent quantities, not booleans', () => {
    expect(acceleration.compute({ mode: 'a', v0: '0', v: '27,8', t: '8,4' }).primary.value).toBe('3,31 м/с²');
    expect(newton.compute({ mode: 'F', m: '1e1', a: '2,0e0' }).primary.value).toBe('20 Н');
    expect(density.compute({ mode: 'rho', m: '1e3', V: '1' }).primary.value).toBe('1 000 кг/м³');
  });
});

describe('mechanics wave 4 signs, inverses and independently derived boundaries', () => {
  it('true lexical zero stays zero while a nonzero input underflow is rejected', () => {
    expect(density.compute({mode:'rho',m:'0e-999',V:1}).primary.value).toBe('0 кг/м³');
    error(density.compute({mode:'rho',m:'1e-999',V:1}));
    error(acceleration.compute({mode:'v',v0:0,a:'-1e-999',t:1}));
  });
  it('acceleration separates signed displacement from integrated distance after reversal', () => {
    // Two triangles, each(2s*10m/s)/2=10m; displacement cancels.
    const r = acceleration.compute({ mode: 'a', v0: 10, v: -10, t: 4 });
    expect(r.primary.value).toBe('-5 м/с²'); expect(row(r,'Перемещение')).toBe('0 м'); expect(row(r,'Пройденный путь')).toBe('20 м');
    const negative = acceleration.compute({ mode: 'a', v0: -10, v: -20, t: 2 });
    expect(negative.primary.value).toBe('-5 м/с²'); expect(row(negative,'Перемещение')).toBe('-30 м'); expect(row(negative,'Пройденный путь')).toBe('30 м');
    // +6 to−2 in4s: reversal at3s,18/2+2/2=10m, displacement8m.
    const asym = acceleration.compute({ mode: 'a', v0: 6, v: -2, t: 4 });
    expect(row(asym,'Перемещение')).toBe('8 м'); expect(row(asym,'Пройденный путь')).toBe('10 м');
  });
  it('acceleration preserves supplied a and finite large endpoint mean', () => {
    const r = acceleration.compute({ mode: 'v', v0: 1e20, a: 1e-10, t: 1 });
    expect(row(r,'Изменение скорости')).toBe('1,000·10^-10 м/с');
    expect(row(r,'Пройденный путь')).toBe('1,000·10^20 м');
    const large = acceleration.compute({ mode: 'a', v0: 1e308, v: 1e308, t: 1 });
    expect(large.primary.value).toBe('0 м/с²'); expect(row(large,'Перемещение')).toBe('1,000·10^308 м');
    error(acceleration.compute({ mode: 'a', v0: -1e308, v: 1e308, t: 1 })); // displayed Δv unrepresentable
    error(acceleration.compute({ mode: 'v', v0: 0, a: Number.MIN_VALUE, t: 0.5 }));
  });
  it('acceleration handles representable subnormal integrated distance without a false zero', () => {
    const r = acceleration.compute({ mode: 'a', v0: Number.MIN_VALUE, v: 0, t: 2 });
    // a=(0−MIN)/2 underflows: complete result has no representable acceleration.
    error(r);
    const r2 = acceleration.compute({ mode: 'v', v0: Number.MIN_VALUE, a: 0, t: 2 });
    expect(row(r2,'Пройденный путь')).toBe('9,881·10^-324 м');
  });
  it('Newton uses positive mass and non-negative resultant magnitudes', () => {
    expect(newton.compute({ mode:'F',m:10,a:0 }).primary.value).toBe('0 Н');
    expect(newton.compute({ mode:'a',F2:0,m2:10 }).primary.value).toBe('0 м/с²');
    for (const inputs of [{mode:'F',m:0,a:2},{mode:'F',m:10,a:-2},{mode:'m',F:0,a2:2},{mode:'m',F:0,a2:0},{mode:'m',F:20,a2:0}]) error(newton.compute(inputs));
    expect(newton.compute({mode:'m',F:1e308,a2:1e308}).primary.value).toBe('1 кг');
    error(newton.compute({mode:'F',m:1e308,a:0})); // reference weight also has to fit
    error(newton.compute({mode:'F',m:Number.MIN_VALUE,a:0.5}));
  });
  it('momentum respects direction while kinetic energy stays positive and sign-reversal invariant', () => {
    const r = momentum.compute({mode:'p',m:3,v:-4});
    expect(r.primary.value).toBe('-12 кг·м/с'); expect(row(r,'Кинетическая энергия')).toBe('24 Дж');
    expect(momentum.compute({mode:'v',p:-30,m2:6}).primary.value).toBe('-5 м/с');
    expect(momentum.compute({mode:'m',p2:-18,v2:-9}).primary.value).toBe('2 кг');
    expect(row(momentum.compute({mode:'p',m:3,v:4}),'Кинетическая энергия')).toBe(row(r,'Кинетическая энергия'));
    for (const inputs of [{mode:'m',p2:0,v2:0},{mode:'m',p2:1,v2:0},{mode:'m',p2:0,v2:9},{mode:'m',p2:-18,v2:9}]) error(momentum.compute(inputs));
  });
  it('momentum rescales kinetic energy before overflow and rejects true nonzero underflow', () => {
    const r = momentum.compute({mode:'p',m:8e307,v:2}); // p1.6e308,energy1.6e308; p*v alone overflows
    expect(r.primary.value).toBe('1,600·10^308 кг·м/с'); expect(row(r,'Кинетическая энергия')).toBe('1,600·10^308 Дж');
    error(momentum.compute({mode:'p',m:Number.MIN_VALUE,v:0.5}));
    error(momentum.compute({mode:'p',m:1,v:1e-200})); // energy positive but unrepresentable
  });
  it('work has consistent negative forward and inverse branches and exact geometric zeros', () => {
    expect(work.compute({mode:'W',F:10,s:5,angleDeg:180}).primary.value).toBe('-50 Дж');
    expect(work.compute({mode:'s',F:10,W:-50,angleDeg:180}).primary.value).toBe('5 м');
    expect(work.compute({mode:'s',F:10,W:-25,angleDeg:120}).primary.value).toBe('5 м');
    error(work.compute({mode:'s',F:10,W:50,angleDeg:180}));
    expect(work.compute({mode:'W',F:10,s:5,angleDeg:90}).primary.value).toBe('0 Дж');
    for (const W of [0,1]) error(work.compute({mode:'s',F:10,W,angleDeg:90}));
    expect(work.compute({mode:'s',F:10,W:0,angleDeg:180}).primary.value).toBe('0 м');
    expect(work.compute({mode:'W',F:0,s:1e308,angleDeg:0}).primary.value).toBe('0 Дж');
    for (const angleDeg of [-1,181]) error(work.compute({mode:'W',F:10,s:5,angleDeg}));
  });
  it('near-right work angles retain opposite small signs and finite scaled products', () => {
    const a = work.compute({mode:'W',F:10,s:5,angleDeg:90-1e-11});
    const b = work.compute({mode:'W',F:10,s:5,angleDeg:90+1e-11});
    expect(number(a.primary.value)).toBeGreaterThan(0); expect(number(b.primary.value)).toBeLessThan(0);
    expect(number(a.primary.value)).toBeCloseTo(-number(b.primary.value),16);
    expect(work.compute({mode:'W',F:1e308,s:2,angleDeg:120}).primary.value).toBe('-1,000·10^308 Дж');
    expect(work.compute({mode:'s',F:1e308,W:-1e308,angleDeg:120}).primary.value).toBe('2 м');
    error(work.compute({mode:'W',F:Number.MIN_VALUE,s:0.5,angleDeg:0}));
  });
  it('torque uses radial distance and a different perpendicular moment arm', () => {
    const r = torque.compute({force:50,radius:0.3,angle:30});
    expect(r.primary.value).toBe('7,5 Н·м'); expect(row(r,'Плечо силы')).toBe('0,15 м');
    expect(torque.compute({force:50,radius:0.3,angle:150}).primary.value).toBe(r.primary.value);
    for (const angle of [0,180]) expect(torque.compute({force:1e308,radius:1e308,angle}).primary.value).toBe('0 Н·м');
    expect(torque.compute({force:1e308,radius:2,angle:30}).primary.value).toBe('1,000·10^308 Н·м');
    expect(number(torque.compute({force:50,radius:0.3,angle:1e-11}).primary.value)).toBeGreaterThan(0);
    for (const angle of [-1,181]) error(torque.compute({force:50,radius:0.3,angle}));
    error(torque.compute({force:Number.MIN_VALUE,radius:0.5,angle:90}));
  });
  it('lever matches opposing moments while inverse geometry remains strictly positive', () => {
    const r = lever.compute({mode:'force2',f1:100,d1:2,d2:0.5});
    expect(r.primary.value).toBe('400 Н'); expect(row(r,'Момент первой силы')).toBe('200 Н·м'); expect(row(r,'Выигрыш в силе')).toBe('4');
    expect(lever.compute({mode:'distance2',f1:100,d1:2,f2:400}).primary.value).toBe('0,5 м');
    expect(lever.compute({mode:'force2',f1:0,d1:2,d2:0.5}).primary.value).toBe('0 Н');
    for (const inputs of [{mode:'force2',f1:-1,d1:2,d2:0.5},{mode:'distance2',f1:0,d1:2,f2:400},{mode:'distance2',f1:100,d1:2,f2:0},{mode:'force2',f1:100,d1:2,d2:0}]) error(lever.compute(inputs));
    error(lever.compute({mode:'force2',f1:1e308,d1:2,d2:2})); // moment itself unrepresentable
    expect(lever.compute({mode:'force2',f1:1e-20,d1:1,d2:1}).primary.value).toBe('1,000·10^-20 Н');
  });
  it('pressure is mean normal force per actual area, with correct square-unit conversion', () => {
    expect(pressure.compute({mode:'p',F:1000,A:0.0001}).primary.value).toBe('10 000 000 Па'); //1cm²=1e−4m²
    expect(pressure.compute({mode:'A',F2:2000,p2:100000}).primary.value).toBe('0,02 м²');
    expect(row(pressure.compute({mode:'p',F:101325,A:1}),'В атмосферах')).toBe('1 атм');
    expect(pressure.compute({mode:'p',F:0,A:2}).primary.value).toBe('0 Па');
    expect(pressure.compute({mode:'F',p:0,A2:2}).primary.value).toBe('0 Н');
    for (const inputs of [{mode:'p',F:0,A:0},{mode:'A',F2:0,p2:1},{mode:'A',F2:1,p2:0},{mode:'A',F2:0,p2:0}]) error(pressure.compute(inputs));
    expect(pressure.compute({mode:'p',F:1e308,A:1e308}).primary.value).toBe('1 Па');
    error(pressure.compute({mode:'p',F:Number.MIN_VALUE,A:1})); // atmosphere conversion cannot fit
  });
  it('density relates the same mass and volume and adds the correct g/cm³ scale', () => {
    const r = density.compute({mode:'rho',m:5.4,V:0.002});
    expect(r.primary.value).toBe('2 700 кг/м³'); expect(row(r,'В граммах на кубический сантиметр')).toBe('2,7 г/см³');
    expect(density.compute({mode:'m',rho:2700,V2:0.5}).primary.value).toBe('1 350 кг');
    expect(density.compute({mode:'V',m2:7850,rho2:7850}).primary.value).toBe('1 м³');
    expect(density.compute({mode:'rho',m:0,V:1}).primary.value).toBe('0 кг/м³');
    expect(density.compute({mode:'m',rho:0,V2:1}).primary.value).toBe('0 кг');
    for (const inputs of [{mode:'rho',m:0,V:0},{mode:'V',m2:0,rho2:1},{mode:'V',m2:1,rho2:0},{mode:'V',m2:0,rho2:0}]) error(density.compute(inputs));
    expect(density.compute({mode:'rho',m:1e308,V:1e308}).primary.value).toBe('1 кг/м³');
    error(density.compute({mode:'rho',m:Number.MIN_VALUE,V:1})); // g/cm³ cannot fit
  });
});

describe('mechanics wave 4 owned content, explicit SI units and native error paths', () => {
  const paths=['/physics/acceleration/','/physics/newton-force/','/physics/momentum/','/physics/work/','/physics/torque/','/physics/rychag-i-vyigrysh-v-sile/','/physics/pressure/','/physics/density/'];
  const defaults=['3,31 м/с²','20 Н','12 кг·м/с','50 Дж','15 Н·м','400 Н','500 Па','1 000 кг/м³'];
  for (const [i,tool] of tools.entries()) it(`${tool.id}: technical path, fields, default calculation and explicit units`, () => {
    expect(tool.presentation.fullPath).toBe(paths[i]); expect(tool.lifecycle).toBe('released');
    const values=Object.fromEntries(tool.presentation.fields.map(f=>[f.name,f.defaultValue]));
    expect(tool.compute(values).primary.value).toBe(defaults[i]);
    for(const field of tool.presentation.fields.filter(x=>x.type==='number')) { expect(field.unit).toBeTruthy(); expect(field.label).not.toMatch(/,\s*(кг|м|Н|Па|Дж|с|°)/); }
  });
  for (const tool of tools) for (const locale of locales) it(`${tool.id}/${locale}: complete individualized method and primary evidence`, () => {
    const copy=locale==='ru'?tool.presentation:tool.copy?.[locale]; expect(isCompleteCalculatorCopy(copy)).toBe(true);
    if(!isCompleteCalculatorCopy(copy))throw new Error('full owned copy required');
    expect(copy.faq.length).toBeGreaterThanOrEqual(4); expect(copy.howToUse.length).toBeGreaterThanOrEqual(4); expect(copy.disclaimer?.length).toBeGreaterThan(40);
    const sources=getMechanicsWave4MethodSources(tool.id,locale);expect(sources.length).toBeGreaterThan(0);
    for(const source of sources)expect(source.href).toMatch(/^https:\/\/(openstax\.org|www\.nist\.gov)\//);
  });
  for(const [i,tool] of tools.entries()) for(const locale of translated) it(`${tool.id}/${locale}: success and strict-input error translate using owned runtime`,()=>{
    const runtime={compute:tool.compute,localization:locs[i]};
    const c=activeCases.find(c=>c.tool===i)!;
    const results=[tool.compute(c.inputs),tool.compute({...c.inputs,[c.active[0]]:true})];
    for(const result of results){const native=localizeResult(result,locale,tool.id,runtime);expect(JSON.stringify(native)).not.toMatch(locale==='uk'?/[ЁёЫыЭэЪъ]/:/[А-Яа-яЁё]/);expect(native.primary.label).toBe(locs[i][locale]!.results![result.primary.label]);}
    const messages=locs[i][locale]!.values!;
    for(const message of ['Введите конечные числа во все активные поля','Результат выходит за числовой диапазон; проверьте масштаб исходных величин'])expect(messages[message]).toBeTruthy();
  });
  const domainFailures: CalcInputs[] = [
    {mode:'a',v0:0,v:10,t:0},
    {mode:'m',F:0,a2:2},
    {mode:'m',p2:-18,v2:9},
    {mode:'s',F:10,W:50,angleDeg:180},
    {force:50,radius:0.3,angle:181},
    {mode:'distance2',f1:0,d1:2,f2:400},
    {mode:'A',F2:0,p2:1},
    {mode:'V',m2:0,rho2:1},
  ];
  const rangeFailures: CalcInputs[] = [
    {mode:'a',v0:-1e308,v:1e308,t:1},
    {mode:'F',m:1e308,a:0},
    {mode:'p',m:1,v:1e-200},
    {mode:'W',F:Number.MIN_VALUE,s:0.5,angleDeg:0},
    {force:Number.MIN_VALUE,radius:0.5,angle:90},
    {mode:'force2',f1:1e308,d1:2,d2:2},
    {mode:'p',F:Number.MIN_VALUE,A:1},
    {mode:'rho',m:Number.MIN_VALUE,V:1},
  ];
  for(const [i,tool] of tools.entries()) for(const locale of translated) it(`${tool.id}/${locale}: domain and representability errors are native on actual branches`,()=>{
    const runtime={compute:tool.compute,localization:locs[i]};
    for(const inputs of [domainFailures[i],rangeFailures[i]]){
      const r=tool.compute(inputs);error(r);
      const native=localizeResult(r,locale,tool.id,runtime);
      expect(native.secondary[0].value).not.toBe(r.secondary[0].value);
      expect(JSON.stringify(native)).not.toMatch(locale==='uk'?/[ЁёЫыЭэЪъ]/:/[А-Яа-яЁё]/);
    }
  });
  it('momentum and work expose signed inputs without changing positive mass fields',()=>{
    for(const name of ['v','v2','p','p2']){const f=momentum.presentation.fields.find(f=>f.name===name)!;expect(f.signed).toBe(true);expect(f.min).toBeUndefined();}
    expect(work.presentation.fields.find(f=>f.name==='W')?.signed).toBe(true);
    expect(newton.presentation.fields.find(f=>f.name==='m')?.min).toBe(0);
  });
});


describe('mechanics wave 4 actual published localization integration', () => {
  const latinUnits: Record<string,string> = {'с':'s','м':'m','м/с':'m/s','м/с²':'m/s²','Н':'N','кг':'kg','кг·м/с':'kg·m/s','Дж':'J','°':'°','Па':'Pa','м²':'m²','м³':'m³','кг/м³':'kg/m³'};
  for(const tool of tools) for(const locale of locales) it(`${tool.id}/${locale}: actual page method, explicit visible units, public sources and runtime`, () => {
    const calc=getCalculatorById(tool.id,locale)!;
    const owned=locale==='ru'?tool.presentation:tool.copy?.[locale];
    if(!isCompleteCalculatorCopy(owned))throw new Error('complete copy required');
    expect(calc.seoContent).toEqual({intro:owned.longDescription,howItWorks:owned.howItWorks,example:owned.example,tips:owned.howToUse.join(' '),faq:owned.faq});
    expect(calc.howToUse).toEqual(owned.howToUse);expect(calc.disclaimer).toBe(owned.disclaimer);
    for(const raw of tool.presentation.fields.filter(f=>f.type==='number')){
      const field=calc.fields.find(f=>f.name===raw.name)!;
      const expected=locale==='ru'||locale==='uk'?raw.unit:latinUnits[raw.unit!];
      expect(expected).toBeTruthy();expect(fieldUnitLabel(field,locale,tool.id)).toBe(expected);
      expect(field.label).not.toMatch(/,\s*(кг|м|Н|Па|Дж|с|°|kg|m|N|Pa|J|s)/);
    }
    const editorial=getCalculatorEditorial(calc,locale);
    for(const source of getMechanicsWave4MethodSources(tool.id,locale))expect(editorial.sources).toContainEqual(source);
    const runtime=runtimeFor(tool.id);
    const values=Object.fromEntries(calc.fields.map(f=>[f.name,f.defaultValue]));
    const result=localizeResult(runtime.compute(values),locale,tool.id,runtime);
    expect(result.primary.value).not.toBe('—');
    if(locale!=='ru')expect(JSON.stringify(result)).not.toMatch(locale==='uk'?/[ЁёЫыЭэЪъ]/:/[А-Яа-яЁё]/);
    const c=activeCases.find(c=>tools[c.tool].id===tool.id)!;
    const failed=localizeResult(runtime.compute({...c.inputs,[c.active[0]]:true}),locale,tool.id,runtime);
    expect(failed.primary.value).toBe('—');
    if(locale!=='ru')expect(JSON.stringify(failed)).not.toMatch(locale==='uk'?/[ЁёЫыЭэЪъ]/:/[А-Яа-яЁё]/);
  });
});
