import { describe, expect, it } from 'vitest';
import { definition as circle } from '../src/calculators/geom-circle/definition';
import { definition as square } from '../src/calculators/geom-square/definition';
import { definition as rectangle } from '../src/calculators/geom-rectangle/definition';
import { definition as triangle } from '../src/calculators/geom-triangle/definition';
import { definition as right } from '../src/calculators/geom-right-triangle/definition';
import { definition as parallelogram } from '../src/calculators/geom-parallelogram/definition';
import { definition as trapezoid } from '../src/calculators/geom-trapezoid/definition';
import { definition as rhombus } from '../src/calculators/geom-rhombus/definition';
import { localization as circleLoc } from '../src/calculators/geom-circle/localization';
import { localization as squareLoc } from '../src/calculators/geom-square/localization';
import { localization as rectangleLoc } from '../src/calculators/geom-rectangle/localization';
import { localization as triangleLoc } from '../src/calculators/geom-triangle/localization';
import { localization as rightLoc } from '../src/calculators/geom-right-triangle/localization';
import { localization as parallelogramLoc } from '../src/calculators/geom-parallelogram/localization';
import { localization as trapezoidLoc } from '../src/calculators/geom-trapezoid/localization';
import { localization as rhombusLoc } from '../src/calculators/geom-rhombus/localization';
import { getGeometryWave6MethodSources } from '../src/data/geometryWave6MethodSources';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import { isCompleteCalculatorCopy } from '../src/lib/platform/types';
import type { CalcFunction, CalcResult } from '../src/lib/types';

const tools = [circle, square, rectangle, triangle, right, parallelogram, trapezoid, rhombus];
const locs = [circleLoc, squareLoc, rectangleLoc, triangleLoc, rightLoc, parallelogramLoc, trapezoidLoc, rhombusLoc];
const locales = ['ru','en','uk','de','es'] as const;
const translated = ['en','uk','de','es'] as const;
type Inputs = Parameters<CalcFunction>[0];
const row = (result: CalcResult, label: string) => result.secondary.find(v => v.label === label)?.value ?? '';
const normalize = (s: string) => s.replace(/[\u00a0\u202f]/g, ' ');
const numeric = (s: string) => {
  const text = s.replace(/[\s\u00a0\u202f]/g, '').replace(',', '.');
  const scientific = /^([\d.]+)·10\^(-?\d+)/.exec(text);
  return scientific ? Number(scientific[1]) * 10 ** Number(scientific[2]) : parseFloat(text);
};
const error = (r: CalcResult) => { expect(r.primary.value).toBe('—'); expect(r.secondary[0].accent).toBe('red'); };
const close = (actual: string, expected: number) => {
  const n = numeric(actual); expect(Number.isFinite(n)).toBe(true);
  expect(Math.abs(n / expected - 1)).toBeLessThan(0.00055);
};
// All ordinary values are analytic independent fixtures, not the engine's output.
const modes: { tool: number; inputs: Inputs; active: string[]; inactive?: string[]; primary: number }[] = [
  {tool:0,inputs:{unit:'m',mode:'radius',r:3},active:['r'],inactive:['d','c','area'],primary:28.274333882308138},
  {tool:0,inputs:{unit:'m',mode:'diameter',d:10},active:['d'],inactive:['r','c','area'],primary:78.53981633974483},
  {tool:0,inputs:{unit:'m',mode:'circumference',c:31.41592653589793},active:['c'],inactive:['r','d','area'],primary:78.53981633974483},
  {tool:0,inputs:{unit:'m',mode:'area',area:78.53981633974483},active:['area'],inactive:['r','d','c'],primary:78.53981633974483},
  {tool:1,inputs:{unit:'m',mode:'side',side:5},active:['side'],inactive:['area','perimeter'],primary:25},
  {tool:1,inputs:{unit:'m',mode:'area',area:49},active:['area'],inactive:['side','perimeter'],primary:49},
  {tool:1,inputs:{unit:'m',mode:'perimeter',perimeter:24},active:['perimeter'],inactive:['side','area'],primary:36},
  {tool:2,inputs:{unit:'m',mode:'sides',a:8,b:3},active:['a','b'],inactive:['area'],primary:24},
  {tool:2,inputs:{unit:'m',mode:'areaSide',a:6,area:30},active:['a','area'],inactive:['b'],primary:30},
  {tool:3,inputs:{unit:'m',mode:'sss',a:3,b:4,c:5},active:['a','b','c'],inactive:['base','height'],primary:6},
  {tool:3,inputs:{unit:'m',mode:'baseHeight',base:10,height:4},active:['base','height'],inactive:['a','b','c'],primary:20},
  {tool:4,inputs:{unit:'m',mode:'legs',a:3,b:4},active:['a','b'],inactive:['c'],primary:5},
  {tool:4,inputs:{unit:'m',mode:'legHyp',a:5,c:13},active:['a','c'],inactive:['b'],primary:12},
  {tool:5,inputs:{unit:'m',mode:'height',a:10,h:6},active:['a','h'],inactive:['b','angle'],primary:60},
  {tool:5,inputs:{unit:'m',mode:'sides',a:10,b:8,angle:30},active:['a','b','angle'],inactive:['h'],primary:40},
  {tool:6,inputs:{unit:'m',a:8,b:2,h:4,c:5,d:5},active:['a','b','h','c','d'],primary:20},
  {tool:7,inputs:{unit:'m',d1:6,d2:8},active:['d1','d2'],primary:24},
];

describe('geometry wave6 independent contract and reference checks', () => {
  for (const tool of tools) for (const sample of tool.referenceCases ?? []) it(`${tool.id}: ${sample.name}`, () => {
    const result = tool.compute(sample.inputs);
    expect(normalize(result.primary.value)).toBe(normalize(sample.expectPrimary));
    for (const expected of sample.expectSecondary ?? []) expect(normalize(row(result, expected.label))).toBe(normalize(expected.value));
  });
  for (const c of modes) {
    it(`${tools[c.tool].id}/${String(c.inputs.mode ?? 'single')}: independent ordinary value`, () => close(tools[c.tool].compute(c.inputs).primary.value, c.primary));
    for (const field of c.active) it(`${tools[c.tool].id}/${String(c.inputs.mode ?? 'single')}: strict active ${field}`, () => {
      const bad: unknown[] = [undefined,null,true,false,'',' ','NaN','Infinity',NaN,Infinity,-Infinity,'1 23','2m','0x10','1e-999','-1e-999','0.'+'0'.repeat(400)+'1'];
      // Optional legs may be omitted; malformed, boolean and underflow values remain errors.
      for (const value of bad) {
        if (c.tool===6 && (field==='c'||field==='d') && (value===undefined||value===''||value===' ')) continue;
        error(tools[c.tool].compute({...c.inputs,[field]:value} as Inputs));
      }
    });
    if (c.inactive) it(`${tools[c.tool].id}/${String(c.inputs.mode)}: inactive inputs ignored`, () => {
      const junk=Object.fromEntries(c.inactive!.map(k=>[k,true]));
      expect(tools[c.tool].compute({...c.inputs,...junk})).toEqual(tools[c.tool].compute(c.inputs));
    });
  }
  for (const index of [0,1,2,3,4,5]) it(`${tools[index].id}: unknown mode never selects a fallback formula`, () => {
    const c=modes.find(c=>c.tool===index)!;
    for(const mode of [undefined,null,true,'constructor','other',{toString:null}]) error(tools[index].compute({...c.inputs,mode} as Inputs));
  });
  for (const index of tools.keys()) it(`${tools[index].id}: unit enum has no inherited or silent fallback`, () => {
    const c=modes.find(c=>c.tool===index)!;
    for(const unit of [undefined,null,true,'constructor','__proto__','km',''])error(tools[index].compute({...c.inputs,unit} as Inputs));
  });
});

describe('geometry wave6 cancellation, signs and nondegenerate ranges', () => {
  it('a tiny circle area survives inverse division and retains its supplied unit', () => {
    const r=circle.compute({unit:'m',mode:'area',area:Number.MIN_VALUE});
    expect(r.primary.value).toBe('4,941·10^-324 м²');
    expect(numeric(row(r,'Радиус'))).toBeGreaterThan(0);
  });
  it('all outputs are bounded, rather than returning one dash among success rows', () => {
    const cases:[number,Inputs][]=[
      [0,{mode:'radius',unit:'m',r:1e155}],[1,{mode:'side',unit:'m',side:1e155}],
      [2,{mode:'sides',unit:'m',a:1e200,b:1e200}],[3,{mode:'baseHeight',unit:'m',base:1e200,height:1e200}],
      [4,{mode:'legs',unit:'m',a:1e200,b:1e200}],[5,{mode:'sides',unit:'m',a:1e200,b:1e200,angle:90}],
      [6,{unit:'m',a:1e200,b:1e200,h:1e200}],[7,{unit:'m',d1:1e200,d2:1e200}],
    ];for(const [index,inputs]of cases)error(tools[index].compute(inputs));
  });
  it('positive derived underflow is rejected rather than reported as zero area', () => {
    const cases:[number,Inputs][]=[
      [0,{mode:'radius',unit:'m',r:1e-200}],[1,{mode:'side',unit:'m',side:1e-200}],
      [2,{mode:'sides',unit:'m',a:1e-200,b:1e-200}],[3,{mode:'sss',unit:'m',a:1e-200,b:1e-200,c:1e-200}],
      [4,{mode:'legs',unit:'m',a:1e-200,b:1e-200}],[5,{mode:'height',unit:'m',a:1e-200,h:1e-200}],
      [6,{unit:'m',a:1e-200,b:1e-200,h:1e-200}],[7,{unit:'m',d1:1e-200,d2:1e-200}],
    ];for(const [index,inputs]of cases)error(tools[index].compute(inputs));
  });
  it('large 3-4-5 triangle retains both finite area and exact angle comparison', () => {
    // A binary power is an exact scale; arbitrary decimal scales need not retain exact equality.
    const k=2**300,r=triangle.compute({mode:'sss',unit:'m',a:3*k,b:4*k,c:5*k});
    close(r.primary.value,2.4897093413285958e181);
    expect(row(r,'Вид треугольника')).toBe('прямоугольный');
  });
  it('adjacent representable third sides are not classified with an undocumented tolerance', () => {
    expect(row(triangle.compute({mode:'sss',unit:'m',a:3,b:4,c:5.000000000000001}),'Вид треугольника')).toBe('тупоугольный');
    expect(row(triangle.compute({mode:'sss',unit:'m',a:3,b:4,c:4.999999999999999}),'Вид треугольника')).toBe('остроугольный');
  });
  it('base and height determine area only, with no fabricated perimeter', () => {
    const r=triangle.compute({mode:'baseHeight',unit:'m',base:6,height:4});expect(r.primary.value).toBe('12 м²');expect(row(r,'Периметр')).toBe('');
    expect(row(parallelogram.compute({mode:'height',unit:'m',a:10,h:6}),'Периметр')).toBe('—');
  });
  it('half-angle diagonals keep the small positive diagonal', () => {
    const r=parallelogram.compute({mode:'sides',unit:'m',a:1,b:1,angle:1e-7});
    expect(row(r,'Меньшая диагональ')).toBe('1,745·10^-9 м');close(row(r,'Большая диагональ'),2);
  });
  it('supplementary angles keep area and sorted diagonals', () => {
    const a=parallelogram.compute({mode:'sides',unit:'m',a:10,b:8,angle:30});const b=parallelogram.compute({mode:'sides',unit:'m',a:10,b:8,angle:150});expect(a).toEqual(b);
  });
  it('right parallelogram has two equal diagonals and height equal to other side', () => {
    const r=parallelogram.compute({mode:'sides',unit:'m',a:3,b:4,angle:90});expect(row(r,'Высота к стороне a')).toBe('4 м');expect(row(r,'Большая диагональ')).toBe('5 м');expect(row(r,'Меньшая диагональ')).toBe('5 м');
  });
  it('one diagonal cannot certify an arbitrary quadrilateral is rectangular', () => {
    // A(0,0),B(8,0),C(8,3),D(0,4): AB8,BC3,AC√73 yet CD≠AB and AD≠BC.
    expect(Math.hypot(8,3)).toBe(8.54400374531753);
    expect(Math.hypot(8,-1)).not.toBe(8);
    expect(rectangle.copy!.en!.faq[0].a).toContain('does not establish all four angles');
  });
  it('trapezoid old inconsistent fixture is rejected; only its authorized correction is valid', () => {
    error(trapezoid.compute({unit:'m',a:10,b:6,h:4,c:5,d:5}));
    const r=trapezoid.compute({unit:'m',a:8,b:2,h:4,c:5,d:5});expect(r.primary.value).toBe('20 м²');expect(row(r,'Периметр')).toBe('20 м');
  });
  it('optional legs retain explicit zero defaults but are supplied together', () => {
    expect(trapezoid.compute({unit:'m',a:10,b:6,h:4,c:0,d:0}).primary.value).toBe('32 м²');
    expect(trapezoid.compute({unit:'m',a:10,b:6,h:4,c:'',d:''}).primary.value).toBe('32 м²');
    for(const legs of [{c:5,d:0},{c:-1,d:0},{c:3,d:4},{c:null,d:null}])error(trapezoid.compute({unit:'m',a:10,b:6,h:4,...legs} as Inputs));
  });
  it('equal-base parallelogram and one vertical leg are supported geometric cases', () => {
    expect(row(trapezoid.compute({unit:'m',a:5,b:5,h:4,c:5,d:5}),'Периметр')).toBe('20 м');
    const r=trapezoid.compute({unit:'m',a:8,b:5,h:4,c:4,d:5});expect(r.primary.value).toBe('26 м²');expect(row(r,'Периметр')).toBe('22 м');
  });
  it('rhombus identity and equal-diagonal square respect linear versus area units', () => {
    const r=rhombus.compute({unit:'mm',d1:8,d2:8});expect(r.primary.value).toBe('32 мм²');expect(row(r,'Высота')).toBe(row(r,'Сторона'));
  });
});

describe('geometry wave6 native owned contracts and actual selected field units', () => {
  for(const [index,tool]of tools.entries())for(const locale of locales){
    it(`${tool.id}/${locale}: complete useful owned content and bounded primary sources`,()=>{
      const copy=locale==='ru'?tool.presentation:tool.copy![locale]!;
      if(locale!=='ru')expect(isCompleteCalculatorCopy(copy)).toBe(true);
      expect(copy.howToUse.length).toBeGreaterThanOrEqual(3);expect(copy.faq.length).toBeGreaterThanOrEqual(index===7?5:4);
      expect(copy.longDescription.length).toBeGreaterThan(160);expect(copy.howItWorks.length).toBeGreaterThan(50);expect(copy.example.length).toBeGreaterThan(40);expect(copy.disclaimer!.length).toBeGreaterThan(70);
      expect(getGeometryWave6MethodSources(tool.id,locale).length).toBeGreaterThan(0);
      if(locale==='de')expect(copy.disclaimer).not.toMatch(/This|The|results are/);
      if(locale!=='ru'&&locale!=='uk')expect(copy.longDescription).not.toMatch(/[А-Яа-яЁё]/);
    });
    it(`${tool.id}/${locale}: selected units physically apply to every numeric field`,()=>{
      const fields=tool.presentation.fields.filter(f=>f.type==='number');
      for(const selected of ['mm','cm','m'])for(const field of fields){
        expect(field.unit).toBeTruthy();const resolved=tool.contextualField!(field,{unit:selected},locale);
        const expected=field.name==='angle'?'°':(locale==='ru'||locale==='uk'?{mm:'мм',cm:'см',m:'м'}[selected]:selected)+(field.name==='area'?'²':'');expect(resolved.unit).toBe(expected);
      }
    });
  }
  for(const [index,tool]of tools.entries())for(const locale of translated)it(`${tool.id}/${locale}: active input and unit errors have native owned translations`,()=>{
    const c=modes.find(c=>c.tool===index)!;
    const results=[tool.compute({...c.inputs,[c.active[0]]:true}),tool.compute({...c.inputs,unit:'other'})];
    for(const r of results){error(r);const message=r.secondary[0].value;const translation=locs[index][locale]?.values?.[message];expect(translation).toBeTruthy();if(locale!=='uk')expect(translation).not.toMatch(/[А-Яа-яЁё]/);}
  });
  const domain: Inputs[] = [
    {unit:'m',mode:'radius',r:0},{unit:'m',mode:'perimeter',perimeter:0},
    {unit:'m',mode:'areaSide',a:0,area:1},{unit:'m',mode:'sss',a:1,b:2,c:3},
    {unit:'m',mode:'legHyp',a:5,c:5},{unit:'m',mode:'sides',a:1,b:1,angle:180},
    {unit:'m',a:10,b:6,h:4,c:5,d:5},{unit:'m',d1:0,d2:8},
  ];
  const range: Inputs[] = [
    {unit:'m',mode:'radius',r:1e155},{unit:'m',mode:'side',side:1e155},
    {unit:'m',mode:'areaSide',a:1e308,area:Number.MIN_VALUE},{unit:'m',mode:'baseHeight',base:1e200,height:1e200},
    {unit:'m',mode:'legs',a:1e200,b:1e200},{unit:'m',mode:'sides',a:1,b:1,angle:Number.MIN_VALUE},
    {unit:'m',a:1e200,b:1e200,h:1e200},{unit:'m',d1:1e200,d2:1e200},
  ];
  for(const [index,tool]of tools.entries())for(const locale of translated)it(`${tool.id}/${locale}: actual domain/range branches localize with own bundle`,()=>{
    for(const inputs of [domain[index],range[index]]){
      const raw=tool.compute(inputs);error(raw);
      const native=localizeResult(raw,locale,tool.id,{compute:tool.compute,localization:locs[index]});
      expect(native.secondary[0].value).not.toBe(raw.secondary[0].value);
      expect(JSON.stringify(native)).not.toMatch(locale==='uk'?/[ЁёЫыЭэЪъ]/:/[А-Яа-яЁё]/);
    }
  });
  it('source lookup does not expose inherited property names',()=>expect(getGeometryWave6MethodSources('constructor','en')).toEqual([]));
});
