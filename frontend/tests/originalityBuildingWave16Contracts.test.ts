import { describe,it,expect } from 'vitest';
import { definition as rafters } from '../src/calculators/rafters/definition';
import { definition as roofArea } from '../src/calculators/roof-area/definition';
import { definition as roofBattens } from '../src/calculators/roof-battens/definition';
import { definition as roomVolume } from '../src/calculators/room-volume/definition';
import { definition as sealant } from '../src/calculators/sealant-volume/definition';
import { definition as skirting } from '../src/calculators/skirting/definition';
import { definition as slab } from '../src/calculators/slab-foundation/definition';
import { definition as stairs } from '../src/calculators/stairs/definition';
import { definition as strip } from '../src/calculators/strip-foundation/definition';
import { definition as tank } from '../src/calculators/tank-volume/definition';
import { definition as heating } from '../src/calculators/underfloor-heating/definition';
import { definition as wood } from '../src/calculators/wood-weight/definition';
const definitions=[rafters,roofArea,roofBattens,roomVolume,sealant,skirting,slab,stairs,strip,tank,heating,wood];
const defaults=(d:typeof rafters)=>Object.fromEntries(d.presentation.fields.map(f=>[f.name,f.defaultValue??'']));
const compute=(d:typeof rafters,patch:Record<string,string|number|boolean>={})=>d.compute({...defaults(d),...patch});
const value=(d:typeof rafters,patch:Record<string,string|number|boolean>,label:string)=>compute(d,patch).secondary?.find(row=>row.label===label)?.value;
describe('Building16 preserves the 58 original independently authored reference payloads',()=>{
 for(const d of definitions)for(const c of d.referenceCases??[])it(`${d.id}: ${c.name}`,()=>{
  const result=d.compute(c.inputs);
  expect(result.primary.value).toBe(c.expectPrimary);
  for(const row of c.expectSecondary??[])expect(result.secondary).toContainEqual(expect.objectContaining(row));
 });
});
describe('Building16 active numeric inputs are strict',()=>{
 for(const d of definitions){
  const initial=defaults(d);
  for(const f of d.presentation.fields){
   if(f.type!=='number'||f.showIf&&initial[f.showIf.field]!==f.showIf.equals)continue;
   for(const bad of ['', 'not-a-number',true,false,Infinity,NaN,'1e-999'])it(`${d.id}/${f.name} rejects ${String(bad)}`,()=>expect(compute(d,{[f.name]:bad}).primary.value).toBe('—'));
  }
 }
});
describe('Building16 supported modes and meaningful zero values',()=>{
 for(const [d,key]of [[roofArea,'mode'],[roofArea,'slopeMode'],[roomVolume,'mode'],[tank,'shape'],[wood,'species']]as const){
  for(const bad of ['unknown','',true])it(`${d.id}/${key} rejects explicit ${String(bad)}`,()=>expect(compute(d,{[key]:bad}).primary.value).toBe('—'));
  it(`${d.id}/${key} omitted keeps its model default`,()=>{const data=defaults(d);delete data[key];expect(d.compute(data).primary.value).not.toBe('—');});
 }
 it('room area mode ignores inactive malformed dimensions',()=>expect(compute(roomVolume,{mode:'area',length:true,width:'bad'}).primary.value).toBe('54,00 м³'));
 it('roof percent ignores inactive malformed angle',()=>expect(compute(roofArea,{slopeMode:'percent',angle:true,slopePercent:0}).primary.value).toBe('80 м²'));
 it('zero openings are genuine zero',()=>expect(value(skirting,{doors:0,doorWidth:0,waste:0},'Вычет на проёмы')).toBe('0 м'));
 it('one riser has genuinely zero treads and run',()=>{expect(value(stairs,{rise_total:.18,max_riser:.18},'Проступей')).toBe('0 шт');expect(value(stairs,{rise_total:.18,max_riser:.18},'Длина марша')).toBe('0 м');});
 it('empty horizontal tank is zero, not a range error',()=>expect(compute(tank,{shape:'horizontal-cylinder',level:0}).primary.value).toBe('0 м³'));
 it('full horizontal tank has exactly zero free capacity',()=>expect(value(tank,{shape:'horizontal-cylinder',level:1.5},'Свободно')).toBe('0 м³'));
 it('no edge zone is a valid floor-heating model',()=>expect(compute(heating,{edgeZone:0,waste:0}).primary.value).toBe('133,33 м'));
});
describe('Building16 fixed independent boundary examples',()=>{
 it('decimal 0.3 m at 0.1 m spacing includes positions 0,.1,.2,.3',()=>{const p={length:1,width:.3,thickness:.2,meshStep:.1,rebarDiameter:12,waste:0};expect(value(slab,p,'Длина арматуры')).toBe('14,6 м');expect(value(slab,p,'Прутков')).toBe('30');});
 it('a genuine positive decimal remainder needs the next cartridge',()=>expect(value(sealant,{width:1,depth:1,length:3.0000000000000004,cart:3,waste:0},'Картриджей')).toBe('2 шт'));
 it('exact decimal fit needs one cartridge',()=>expect(value(sealant,{width:1,depth:1,length:3,cart:3,waste:0},'Картриджей')).toBe('1 шт'));
 it('fractional doors are rejected before rounding',()=>expect(compute(skirting,{doors:'2.00000000000000001'}).primary.value).toBe('—'));
 it('negative or unsafe door count is rejected',()=>{expect(compute(skirting,{doors:-1}).primary.value).toBe('—');expect(compute(skirting,{doors:Number.MAX_SAFE_INTEGER+1}).primary.value).toBe('—');});
 it('capsule total height is cylinder length plus diameter',()=>{expect(value(tank,{shape:'capsule',d:2,len:3,level:5},'Заполнено')).toBe('100 %');expect(value(tank,{shape:'capsule',d:2,len:3,level:5},'Свободно')).toBe('0 м³');expect(compute(tank,{shape:'capsule',d:2,len:3,level:5}).note).toContain('линейно');});
 it('capsule above its full height is invalid',()=>expect(compute(tank,{shape:'capsule',d:2,len:3,level:5.01}).primary.value).toBe('—'));
 it('zero slope roof equals its full projection',()=>expect(compute(roofArea,{angle:0}).primary.value).toBe('80 м²'));
 it('finite 89.5 degree roof remains supported',()=>expect(compute(roofArea,{angle:89.5}).primary.value).not.toBe('—'));
 it('huge percent slope keeps the independently finite area',()=>expect(compute(roofArea,{length:1e-150,width:1e-150,slopeMode:'percent',slopePercent:1e308}).primary.value).toBe('1\u00a0000\u00a0000 м²'));
 it('stair 0.60–0.65 range is explicitly a model range',()=>expect(value(stairs,{},'Оценка шага')).toBe('в диапазоне модели'));
 it('unrepresentable required purchases and quantities fail closed',()=>{expect(compute(sealant,{length:1e308,cart:1e-308}).primary.value).toBe('—');expect(compute(slab,{meshStep:Number.MIN_VALUE}).primary.value).toBe('—');expect(compute(wood,{volume:Number.MIN_VALUE,moisture:12,species:'pine'}).primary.value).not.toBe('—');expect(compute(roomVolume,{length:1e-200,width:1e-200}).primary.value).toBe('—');});
});
