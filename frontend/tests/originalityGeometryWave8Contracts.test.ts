import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { definition as c0 } from '../src/calculators/belt-length/definition';
import { localization as l0 } from '../src/calculators/belt-length/localization';
import { definition as c1 } from '../src/calculators/geom-annulus/definition';
import { localization as l1 } from '../src/calculators/geom-annulus/localization';
import { definition as c2 } from '../src/calculators/geom-cone/definition';
import { localization as l2 } from '../src/calculators/geom-cone/localization';
import { definition as c3 } from '../src/calculators/geom-cube/definition';
import { localization as l3 } from '../src/calculators/geom-cube/localization';
import { definition as c4 } from '../src/calculators/geom-cuboid/definition';
import { localization as l4 } from '../src/calculators/geom-cuboid/localization';
import { definition as c5 } from '../src/calculators/geom-cylinder/definition';
import { localization as l5 } from '../src/calculators/geom-cylinder/localization';
import { definition as c6 } from '../src/calculators/geom-ellipse/definition';
import { localization as l6 } from '../src/calculators/geom-ellipse/localization';
import { definition as c7 } from '../src/calculators/geom-frustum/definition';
import { localization as l7 } from '../src/calculators/geom-frustum/localization';
import { definition as c8 } from '../src/calculators/geom-polygon-coords/definition';
import { localization as l8 } from '../src/calculators/geom-polygon-coords/localization';
import { definition as c9 } from '../src/calculators/geom-prism/definition';
import { localization as l9 } from '../src/calculators/geom-prism/localization';
import { definition as c10 } from '../src/calculators/geom-pyramid/definition';
import { localization as l10 } from '../src/calculators/geom-pyramid/localization';
import { definition as c11 } from '../src/calculators/geom-regular-polygon/definition';
import { localization as l11 } from '../src/calculators/geom-regular-polygon/localization';
import { definition as c12 } from '../src/calculators/geom-sector/definition';
import { localization as l12 } from '../src/calculators/geom-sector/localization';
import { definition as c13 } from '../src/calculators/geom-sphere/definition';
import { localization as l13 } from '../src/calculators/geom-sphere/localization';
import { definition as c14 } from '../src/calculators/golden-ratio/definition';
import { localization as l14 } from '../src/calculators/golden-ratio/localization';
import { definition as c15 } from '../src/calculators/pyramid-frustum/definition';
import { localization as l15 } from '../src/calculators/pyramid-frustum/localization';
import { definition as c16 } from '../src/calculators/slope/definition';
import { localization as l16 } from '../src/calculators/slope/localization';
import { getGeometryWave8MethodSources } from '../src/data/geometryWave8MethodSources';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import { isCompleteCalculatorCopy } from '../src/lib/platform/types';
import type { CalcFunction, CalcResult } from '../src/lib/types';

const tools = [c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16];
const locs = [l0,l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16];
const locales=['ru','en','uk','de','es'] as const;
const translated=['en','uk','de','es'] as const;
type Inputs=Parameters<CalcFunction>[0];
const row=(r:CalcResult,k:string)=>r.secondary.find(v=>v.label===k)?.value??'';
const norm=(s:string)=>s.replace(/[\u00a0\u202f]/g,' ');
const num=(s:string)=>{const t=s.replace(/[\s\u00a0\u202f]/g,'').replace(',','.');const m=/^(-?[\d.]+)·10\^(-?\d+)/.exec(t);return m?Number(m[1]+'e'+m[2]):parseFloat(t);};
const error=(r:CalcResult)=>{expect(r.primary.value).toBe('—');expect(r.secondary[0].accent).toBe('red');};
const close=(s:string,v:number)=>{expect(Number.isFinite(num(s))).toBe(true);expect(Math.abs(num(s)/v-1)).toBeLessThan(0.00055);};
const originalReferenceHashes:Record<string,string>={
  "belt-length": "2bed891723b384bda7f59d3202b23fd29498f4aed83a2dce7d02451c4b69e22a",
  "geom-annulus": "e6e8ff850586fdeba9ddb322068bdcc4419ae32175bd0c60b03023a88903217b",
  "geom-cone": "bc95cc238ca5c15eb0c577e86591ed2f755e02c6591ae8fc54af566339e8b351",
  "geom-cube": "e87272dac4f5dad921b9a3d827501f33923f256aa6d61e0a19eef89fa0f7f2ac",
  "geom-cuboid": "d05a61c932e93090d9642e323a96e52033909dd0a1a10469ca212e039959a10a",
  "geom-cylinder": "9734c38a8aab77bdaa62c9a5d14d437fc7f606170e0e0542754b8eb2b7d83574",
  "geom-ellipse": "5c5fcefc5e3ffca882cadbc01fc7ee02045b9fbbd3a2353d1dace47132609711",
  "geom-frustum": "995f4b0b40d256b0cda1a497fa84be015d6dd204f2a672c30fbe7707fac7ae1b",
  "geom-polygon-coords": "42e61050c522a5cf58d11d89d62b246762054dc07a8781431a7511206e991f3a",
  "geom-prism": "24c050e4e4e4d29c8b3b6a94a5bee8ce1eea50ab10279a9b84b74c510b3d25ce",
  "geom-pyramid": "ef7dc2db0aee940bb50c0c4dcab35d1b4123be912ca18300eb440c3baec42486",
  "geom-regular-polygon": "b9a8b7dfed92848efacbf0ca13d6ef92a8598052a66bd7dd1e936733d519b0b2",
  "geom-sector": "9ca2a79f21024e0eee3c9735629fb74861932d56fc8a3178f305b5b10220ebab",
  "geom-sphere": "6596ec31ba8903862629e544174e79ade3bdf4ce6f143d8f7e9d76baeca00c1e",
  "golden-ratio": "83fb53d96487d301b1deebbf53439e040f75875b34a5f6012f8f54a6148ca662",
  "pyramid-frustum": "3b0a51d42ba3ba5c64db450b3b8ff351448611d4ee4033b5f3122e9dd2efd249",
  "slope": "29462ba010d71c3591c3ff7eb4d25d5ae82825ab70fd3e77d309a0cb456031b2"
};
const faqCounts:Record<string,number[]>={
  "belt-length": [
    4,
    4,
    5,
    4,
    4
  ],
  "geom-annulus": [
    5,
    5,
    5,
    5,
    5
  ],
  "geom-cone": [
    4,
    4,
    5,
    4,
    4
  ],
  "geom-cube": [
    5,
    5,
    5,
    5,
    5
  ],
  "geom-cuboid": [
    4,
    4,
    4,
    4,
    4
  ],
  "geom-cylinder": [
    4,
    4,
    5,
    4,
    4
  ],
  "geom-ellipse": [
    5,
    5,
    5,
    5,
    5
  ],
  "geom-frustum": [
    5,
    5,
    5,
    5,
    5
  ],
  "geom-polygon-coords": [
    5,
    5,
    5,
    5,
    5
  ],
  "geom-prism": [
    4,
    4,
    5,
    4,
    4
  ],
  "geom-pyramid": [
    4,
    4,
    4,
    4,
    4
  ],
  "geom-regular-polygon": [
    4,
    4,
    4,
    4,
    4
  ],
  "geom-sector": [
    4,
    4,
    4,
    4,
    4
  ],
  "geom-sphere": [
    4,
    4,
    5,
    4,
    4
  ],
  "golden-ratio": [
    4,
    4,
    4,
    4,
    4
  ],
  "pyramid-frustum": [
    4,
    4,
    4,
    4,
    4
  ],
  "slope": [
    4,
    4,
    4,
    4,
    4
  ]
};

// Fixed analytic fixtures; no expected value is obtained from the implementation.
const modes:{i:number;inputs:Inputs;active:string[];inactive?:string[];expected:number}[]=[
 {i:0,inputs:{center:300,d1:100,d2:200},active:['center','d1','d2'],expected:1079.5722313718023},
 {i:1,inputs:{unit:'m',R:5,r:3},active:['R','r'],expected:50.26548245743669},
 {i:2,inputs:{unit:'m',r:3,h:4},active:['r','h'],expected:37.69911184307752},
 {i:3,inputs:{unit:'m',mode:'side',side:4},active:['side'],inactive:['area','volume'],expected:64},
 {i:3,inputs:{unit:'m',mode:'area',area:96},active:['area'],inactive:['side','volume'],expected:4},
 {i:3,inputs:{unit:'m',mode:'volume',volume:64},active:['volume'],inactive:['side','area'],expected:4},
 {i:4,inputs:{unit:'m',a:2,b:3,c:4},active:['a','b','c'],expected:24},
 {i:5,inputs:{unit:'m',r:3,h:10},active:['r','h'],expected:282.7433388230814},
 {i:6,inputs:{unit:'m',a:5,b:3},active:['a','b'],expected:47.1238898038469},
 {i:7,inputs:{unit:'m',R:6,r:3,h:8},active:['R','r','h'],expected:527.7875658030853},
 {i:8,inputs:{points:'0 0\n4 0\n4 1\n1 1\n1 4\n0 4'},active:['points'],expected:7},
 {i:9,inputs:{unit:'m',sides:4,side:2,height:3},active:['sides','side','height'],expected:12},
 {i:10,inputs:{unit:'m',sides:4,side:6,height:4},active:['sides','side','height'],expected:48},
 {i:11,inputs:{unit:'m',n:6,side:2},active:['n','side'],expected:10.392304845413264},
 {i:12,inputs:{unit:'m',radius:5,angle:60},active:['radius','angle'],expected:13.08996938995747},
 {i:13,inputs:{unit:'m',mode:'radius',r:3},active:['r'],inactive:['d','volume'],expected:113.09733552923255},
 {i:13,inputs:{unit:'m',mode:'diameter',d:10},active:['d'],inactive:['r','volume'],expected:523.5987755982989},
 {i:13,inputs:{unit:'m',mode:'volume',volume:4188.7902048},active:['volume'],inactive:['r','d'],expected:4188.7902048},
 {i:14,inputs:{mode:'split',total:100},active:['total'],inactive:['a'],expected:61.80339887498948},
 {i:14,inputs:{mode:'grow',a:34},active:['a'],inactive:['total'],expected:55.01315561749643},
 {i:15,inputs:{a:10,b:6,h:8},active:['a','b','h'],expected:522.6666666666666},
 {i:16,inputs:{rise:3,run:4},active:['rise','run'],expected:75},
];
describe('geometry wave8 preserves original independent references and examples',()=>{
 for(const tool of tools){
  it(`${tool.id}: reference source stays byte-identical`,()=>expect(createHash('sha256').update(readFileSync(new URL(`../src/calculators/${tool.id}/referenceCases.ts`,import.meta.url))).digest('hex')).toBe(originalReferenceHashes[tool.id]));
  for(const c of tool.referenceCases??[])it(`${tool.id}: ${c.name}`,()=>{const r=tool.compute(c.inputs);expect(norm(r.primary.value)).toBe(norm(c.expectPrimary));for(const e of c.expectSecondary??[])expect(norm(row(r,e.label))).toBe(norm(e.value));});
  it(`${tool.id}: preserved published example`,()=>{const c=tool.publishedExample!;const r=tool.compute(c.inputs);expect(c.expected.some(v=>norm(v)===norm(r.primary.value))).toBe(true);});
 }
});
describe('geometry wave8 active numeric contracts and independent ordinary modes',()=>{
 for(const c of modes){
  it(`${tools[c.i].id}/${c.inputs.mode??'single'} analytic ordinary value`,()=>close(tools[c.i].compute(c.inputs).primary.value,c.expected));
  for(const f of c.active)it(`${tools[c.i].id}/${c.inputs.mode??'single'} strict active ${f}`,()=>{
   const bad:unknown[]=[undefined,null,true,false,'',' ','NaN','Infinity',NaN,Infinity,-Infinity,'1 23','2m','0x10','1e-999','-1e-999','0.'+'0'.repeat(400)+'1'];
   for(const value of bad)error(tools[c.i].compute({...c.inputs,[f]:value}as unknown as Inputs));
  });
  if(c.inactive)it(`${tools[c.i].id}/${c.inputs.mode} ignores inactive stale numbers`,()=>expect(tools[c.i].compute({...c.inputs,...Object.fromEntries(c.inactive!.map(f=>[f,true]))})).toEqual(tools[c.i].compute(c.inputs)));
 }
 for(const i of [3,13,14])it(`${tools[i].id}: omitted legacy mode is preserved but unknown/null mode is rejected`,()=>{
  const c=modes.find(c=>c.i===i)!;const{mode,...values}=c.inputs;expect(tools[i].compute(values)).toEqual(tools[i].compute(c.inputs));
  for(const mode of [null,true,'constructor','__proto__','other','',{}])error(tools[i].compute({...c.inputs,mode}as unknown as Inputs));
 });
 for(const i of [1,2,3,4,5,6,7,9,10,11,12,13])it(`${tools[i].id}: unit has a legacy omitted default but no invalid enum fallback`,()=>{
  const c=modes.find(c=>c.i===i)!;const{unit,...values}=c.inputs;expect(tools[i].compute(values)).toEqual(tools[i].compute({...c.inputs,unit:'cm'}));
  for(const unit of [null,true,'constructor','__proto__','km','',{}])error(tools[i].compute({...c.inputs,unit}as unknown as Inputs));
 });
 for(const[i,key,max]of [[9,'sides',100],[10,'sides',100],[11,'n',1000]]as const){
  it(`${tools[i].id}: cardinality obeys actual published range without rounded fractions`,()=>{const c=modes.find(c=>c.i===i)!;for(const n of [2,max+1,3.5,'3.00000000000000001',9007199254740992])error(tools[i].compute({...c.inputs,[key]:n}));for(const n of [3,max,'4.000'])expect(tools[i].compute({...c.inputs,[key]:n}).primary.value).not.toBe('—');});
  for(const locale of locales)it(`${tools[i].id}/${locale}: form validator catches the original near-integer text`,()=>{const value=locale==='ru'||locale==='uk'?'4,00000000000000001':'4.00000000000000001';const e=tools[i].validate!({values:{...modes.find(c=>c.i===i)!.inputs,[key]:value},locale,fields:tools[i].presentation.fields,parseNumber:()=>4});expect(e[key]).toBeTruthy();if(locale!=='ru'&&locale!=='uk')expect(e[key]).not.toMatch(/[А-Яа-яЁё]/);});
 }
});
describe('geometry wave8 actual native contracts and unit interpretation',()=>{
 for(const[i,tool]of tools.entries())for(const[li,locale]of locales.entries()){
  it(`${tool.id}/${locale}: complete owned copy, original FAQ count and bounded subject sources`,()=>{const c=locale==='ru'?tool.presentation:tool.copy![locale]!;if(locale!=='ru')expect(isCompleteCalculatorCopy(c)).toBe(true);if(!isCompleteCalculatorCopy(c))throw new Error('Incomplete authored body');expect(c.faq.length).toBe(faqCounts[tool.id][li]);expect(c.longDescription.length).toBeGreaterThan(120);expect(c.howItWorks.length).toBeGreaterThan(40);expect(c.example.length).toBeGreaterThan(25);expect(c.disclaimer!.length).toBeGreaterThan(60);expect(c.howToUse.length).toBeGreaterThanOrEqual(3);expect(getGeometryWave8MethodSources(tool.id,locale).length).toBeGreaterThan(0);if(locale!=='ru'&&locale!=='uk')expect(JSON.stringify(c)).not.toMatch(/[А-Яа-яЁё]/);});
  if(tool.contextualField)it(`${tool.id}/${locale}: selected dimensional units are explicit`,()=>{for(const u of ['mm','cm','m'])for(const f of tool.presentation.fields.filter(f=>f.type==='number')){const resolved=tool.contextualField!(f,{unit:u},locale);if(i===14){expect(resolved.unit).toBe({ru:'ед. длины',en:'length unit',uk:'од. довжини',de:'Längeneinheit',es:'unidad de longitud'}[locale]);continue;}const expected=f.name==='sides'||f.name==='n'?'1':f.name==='angle'?'°':(locale==='ru'||locale==='uk'?{mm:'мм',cm:'см',m:'м'}[u]:u)+(f.name==='area'?'²':f.name==='volume'?'³':'');expect(resolved.unit).toBe(expected);}});
 }
 for(const[i,tool]of tools.entries())for(const locale of translated)it(`${tool.id}/${locale}: success and strict input errors localize fully`,()=>{const c=modes.find(c=>c.i===i)!;for(const r of[tool.compute(c.inputs),tool.compute({...c.inputs,[c.active[0]]:true})]){const native=localizeResult(r,locale,tool.id,{compute:tool.compute,localization:locs[i]});expect(JSON.stringify(native)).not.toMatch(locale==='uk'?/[ЁёЫыЭэЪъ]/:/[А-Яа-яЁё]/);}});
 it('source lookup has no inherited property fallback',()=>expect(getGeometryWave8MethodSources('constructor','en')).toEqual([]));
 it('fixed physical units on belt, square frustum and signed gradient are explicit',()=>{for(const[i,u]of [[0,'мм'],[15,'см'],[16,'м']]as const)for(const f of tools[i].presentation.fields)if(f.type==='number')expect(f.unit).toBe(u);});
});
