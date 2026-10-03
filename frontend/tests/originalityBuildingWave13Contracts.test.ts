import { definition as d0 } from '../src/calculators/air-exchange/definition';
import { definition as d1 } from '../src/calculators/baluster-spacing/definition';
import { definition as d2 } from '../src/calculators/beam-deflection/definition';
import { definition as d3 } from '../src/calculators/beam-stress/definition';
import { definition as d4 } from '../src/calculators/board-volume/definition';
import { definition as d5 } from '../src/calculators/bulk-material-volume/definition';
import { definition as d6 } from '../src/calculators/cladding-boards/definition';
import { definition as d7 } from '../src/calculators/concrete/definition';
import { definition as d8 } from '../src/calculators/drywall/definition';
import { definition as d9 } from '../src/calculators/epoxy-volume/definition';
import { definition as d10 } from '../src/calculators/fence/definition';
import { definition as d11 } from '../src/calculators/insulation/definition';
import { definition as d12 } from '../src/calculators/linoleum/definition';
import { definition as d13 } from '../src/calculators/metal-weight/definition';
import { definition as d14 } from '../src/calculators/miter-angle/definition';
import { definition as d15 } from '../src/calculators/pile-foundation/definition';
import { definition as d16 } from '../src/calculators/pipe-weight/definition';
import { definition as d17 } from '../src/calculators/plaster/definition';
import { describe, expect, it } from 'vitest';
import historical from './originalityBuildingWave13References.json';
const definitions=[d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,d17];
const byId=Object.fromEntries(definitions.map(d=>[d.id,d]));
const bases:Record<string,Record<string,any>>={"air-exchange": {"area": 20, "height": 2.7, "ach": 3}, "baluster-spacing": {"run": 3000, "baluster_width": 40, "max_gap": 100}, "beam-deflection": {"scheme": "uniform", "load": 2, "span": 3, "e": 10, "inertia": 1000}, "beam-stress": {"moment": 4500, "section": "rect", "b": 100, "h": 200, "d": 100}, "board-volume": {"length": 6, "width": 150, "thickness": 25, "count": 50, "pricePerM3": 0}, "bulk-material-volume": {"length": 5, "width": 4, "depth": 10, "density": 1.6, "waste": 5}, "cladding-boards": {"wall_area": 30, "board_len": 3, "board_width": 0.19, "overlap": 0.02, "waste": 10}, "concrete": {"mode": "slab", "length": 6, "width": 4, "thickness": 0.2, "perimeter": 40, "stripWidth": 0.4, "depth": 0.8, "sectionArea": 0.09, "height": 2, "count": 12, "waste": 5}, "drywall": {"area": 40, "sheetLength": 2.5, "sheetWidth": 1.2, "layers": 1, "profileStep": 0.6, "waste": 10}, "epoxy-volume": {"length": 100, "width": 50, "thickness": 5, "density": 1.1, "ratio": 2}, "fence": {"length": 40, "span": 2.5, "height": 1.8, "rails": 2, "gates": 1}, "insulation": {"area": 60, "thickness": 100, "slabArea": 0.72, "perPack": 6}, "linoleum": {"length": 5, "width": 3.5, "rollWidth": 3, "reserve": 5}, "metal-weight": {"shape": "round", "a": 20, "b": 4, "length": 6, "density": 7.85}, "miter-angle": {"corner": 90}, "pile-foundation": {"count": 12, "diameter": 0.3, "depth": 1.8, "grillageLength": 32, "grillageWidth": 0.4, "grillageHeight": 0.4, "waste": 5}, "pipe-weight": {"d": 108, "wall": 4, "len": 6, "rho": 7850}, "plaster": {"mode": "area", "area": 20, "length": 5, "height": 2.7, "thickness": 10, "consumption": 8.5, "bagWeight": 30}};
const run=(id:string,input:Record<string,any>)=>byId[id].compute(input);
const row=(r:ReturnType<typeof run>, label:string)=>r.secondary?.find(x=>x.label===label)?.value;
describe('captured 86 historical cases, proven numeric corrections and exact error clarification',()=>{
for(const f of historical) it(`${f.id}: ${f.name}`,()=>{
const e=structuredClone(f.expected);
if(f.id==='baluster-spacing' && f.inputs.run===3000 && e.primary.value!=='—') e.secondary.find(x=>x.label==='Шаг между осями')!.value='138,18 мм';
if(f.id==='baluster-spacing' && f.inputs.run===1200) e.secondary.find(x=>x.label==='Шаг между осями')!.value='136,67 мм';
if(f.id==='baluster-spacing' && f.inputs.run===300) e.secondary.find(x=>x.label==='Шаг между осями')!.value='170 мм';
if(f.id==='drywall' && f.inputs.layers===2) e.secondary.find(x=>x.label==='Саморезов')!.value='2 640';
if(f.id==='metal-weight' && f.inputs.shape==='angle') e.secondary[0].value='Выберите форму сечения из списка';
if(f.id==='miter-angle' && [0,180].includes(f.inputs.corner as number)) e.secondary[0].value='Угол стыка должен быть больше 0 и меньше 180 градусов';
expect(run(f.id,f.inputs)).toEqual(e);
});
});
describe('strict every active field, supported enum and integer lexical domain',()=>{
for(const d of definitions){
const base=bases[d.id];
const active=d.presentation.fields.filter(f=>f.type==='number' && (!f.showIf || ('equals' in f.showIf && base[f.showIf.field]===f.showIf.equals)));
for(const f of active) for(const bad of ['',false,true,null,NaN,Infinity,'bad','1e-9999']) it(`${d.id}.${f.name}: ${String(bad)}`,()=>expect(run(d.id,{...base,[f.name]:bad}).primary.value).toBe('—'));
for(const f of d.presentation.fields.filter(f=>f.type==='select')) for(const bad of ['',false,true,null,'alien','__proto__','constructor']) it(`${d.id}.${f.name}: invalid ${String(bad)}`,()=>expect(run(d.id,{...base,[f.name]:bad}).primary.value).toBe('—'));
}
for(const [id,fields] of Object.entries({'board-volume':['count'],'concrete':['count'],'drywall':['layers'],'fence':['rails','gates'],'insulation':['perPack'],'pile-foundation':['count']})) for(const f of fields) for(const bad of [1.9,'1.00000000000000001','1.00000000000000001e0',9007199254740992]) it(`${id}.${f} rejects rounded or unsafe whole value ${bad}`,()=>expect(run(id,{...bases[id],...(id==='concrete'?{mode:'columns'}:{}),[f]:bad}).primary.value).toBe('—'));
});
describe('independent corrected procurement and formula fixtures',()=>{
it('baluster pitch includes width; exact equality is allowed',()=>{const r=run('baluster-spacing',{run:300,baluster_width:40,max_gap:130});expect(r.primary.value).toBe('1 шт');expect(row(r,'Фактический просвет')).toBe('130 мм');expect(row(r,'Шаг между осями')).toBe('170 мм');});
it('two drywall layers already occur in the 44 purchased sheets',()=>{const r=run('drywall',{area:75,layers:2,profileStep:.4,sheetLength:3,sheetWidth:1.2,waste:5});expect(r.primary.value).toBe('44');expect(row(r,'Саморезов')).toBe('2 640');});
it('exact decimal stock area is one sheet, not two',()=>expect(run('drywall',{area:3,layers:1,profileStep:.6,sheetLength:2.5,sheetWidth:1.2,waste:0}).primary.value).toBe('1'));
it('any real positive excess over one slab needs two slabs',()=>expect(row(run('insulation',{area:1.0000001,thickness:100,slabArea:1,perPack:1}),'Плит')).toBe('2 шт'));
it('a positive small area still needs one slab and one pack',()=>{const r=run('insulation',{area:1e-8,thickness:100,slabArea:1,perPack:6});expect(row(r,'Плит')).toBe('1 шт');expect(row(r,'Упаковок')).toBe('1 шт');expect(r.primary.value).toBe('1,000·10^-9 м³');});
it('a positive bag remainder must not disappear at six places',()=>expect(row(run('plaster',{mode:'area',area:1.0000001,thickness:1,consumption:1,bagWeight:1}),'Мешков')).toBe('2 шт'));
it('Knauf specific 8.5 per10mm becomes .85 permm, not the unchanged custom default',()=>{const r=run('plaster',{mode:'area',area:20,thickness:10,consumption:.85,bagWeight:30});expect(r.primary.value).toBe('170,00 кг');expect(row(r,'Мешков')).toBe('6 шт');});
it('negative dimensions cannot become a positive wall area',()=>expect(run('plaster',{mode:'dimensions',length:-5,height:-2,thickness:10,consumption:8.5,bagWeight:30}).primary.value).toBe('—'));
it('zero grillage preserves a valid no-grillage case',()=>expect(row(run('pile-foundation',{...bases['pile-foundation'],grillageLength:0}),'Объём ростверка')).toBe('0 м³'));
it('negative overlap is invalid',()=>expect(run('cladding-boards',{...bases['cladding-boards'],overlap:-.02}).primary.value).toBe('—'));
it('angle .5 is valid in the existing open geometric domain',()=>expect(run('miter-angle',{corner:.5}).primary.value).toBe('0,25 °'));
it('positive angle half underflow is an explicit error',()=>expect(run('miter-angle',{corner:Number.MIN_VALUE}).primary.value).toBe('—'));
it('pipe annulus remains positive for a very thin wall',()=>{const r=run('pipe-weight',{d:1e100,wall:1e-100,len:1,rho:1});expect(r.primary.value).toBe('0,000003 кг');expect(row(r,'Площадь сечения металла')).toBe('0,0314 см²');});
it('positive required component underflow is explicit, not zero resin',()=>expect(run('epoxy-volume',{length:1,width:1,thickness:1,density:1,ratio:Number.MIN_VALUE}).primary.value).toBe('—'));
});
