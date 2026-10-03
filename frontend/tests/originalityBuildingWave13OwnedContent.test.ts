import {describe,expect,it} from 'vitest';
import {isCompleteCalculatorCopy,type CalculatorCopy} from '../src/lib/platform/types';
import {localizeResult} from '../src/components/islands/calculator/resultLocalization';
import {parseLocalizedNumber} from '../src/lib/format';
import {getBuildingWave13MethodSources} from '../src/data/buildingWave13MethodSources';
import {buildingWave13Messages} from '../src/calculators/beam-deflection/buildingWave13Messages';
import editorial from '../reports/originality-building-wave-13-editorial-records.json';
import before from './originalityBuildingWave13MetadataBefore.json';
import {definition as d0} from '../src/calculators/air-exchange/definition';
import {localization as l0} from '../src/calculators/air-exchange/localization';
import {definition as d1} from '../src/calculators/baluster-spacing/definition';
import {localization as l1} from '../src/calculators/baluster-spacing/localization';
import {definition as d2} from '../src/calculators/beam-deflection/definition';
import {localization as l2} from '../src/calculators/beam-deflection/localization';
import {definition as d3} from '../src/calculators/beam-stress/definition';
import {localization as l3} from '../src/calculators/beam-stress/localization';
import {definition as d4} from '../src/calculators/board-volume/definition';
import {localization as l4} from '../src/calculators/board-volume/localization';
import {definition as d5} from '../src/calculators/bulk-material-volume/definition';
import {localization as l5} from '../src/calculators/bulk-material-volume/localization';
import {definition as d6} from '../src/calculators/cladding-boards/definition';
import {localization as l6} from '../src/calculators/cladding-boards/localization';
import {definition as d7} from '../src/calculators/concrete/definition';
import {localization as l7} from '../src/calculators/concrete/localization';
import {definition as d8} from '../src/calculators/drywall/definition';
import {localization as l8} from '../src/calculators/drywall/localization';
import {definition as d9} from '../src/calculators/epoxy-volume/definition';
import {localization as l9} from '../src/calculators/epoxy-volume/localization';
import {definition as d10} from '../src/calculators/fence/definition';
import {localization as l10} from '../src/calculators/fence/localization';
import {definition as d11} from '../src/calculators/insulation/definition';
import {localization as l11} from '../src/calculators/insulation/localization';
import {definition as d12} from '../src/calculators/linoleum/definition';
import {localization as l12} from '../src/calculators/linoleum/localization';
import {definition as d13} from '../src/calculators/metal-weight/definition';
import {localization as l13} from '../src/calculators/metal-weight/localization';
import {definition as d14} from '../src/calculators/miter-angle/definition';
import {localization as l14} from '../src/calculators/miter-angle/localization';
import {definition as d15} from '../src/calculators/pile-foundation/definition';
import {localization as l15} from '../src/calculators/pile-foundation/localization';
import {definition as d16} from '../src/calculators/pipe-weight/definition';
import {localization as l16} from '../src/calculators/pipe-weight/localization';
import {definition as d17} from '../src/calculators/plaster/definition';
import {localization as l17} from '../src/calculators/plaster/localization';
const definitions=[d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,d17];
const bundles=[l0,l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17];
const locales=['ru','en','uk','de','es'] as const;

describe('ninety individually reviewed owned bodies and preserved identity/defaults',()=>{
 for(const tool of definitions)for(const locale of locales)it(`${tool.id}/${locale} owns the reviewed model and precise identity`,()=>{
  const body=(locale==='ru'?tool.presentation:tool.copy![locale]!) as CalculatorCopy;
  expect(isCompleteCalculatorCopy(body)).toBe(true);
  const record=editorial.records.find(r=>r.id===tool.id&&r.locale===locale)!;
  const old=before.find(r=>r.id===tool.id&&r.locale===locale)!;
  for(const key of ['longDescription','howItWorks','howToUse','example','faq','disclaimer'] as const)expect(body[key]).toEqual((record.after as Record<string,unknown>)[key]);
  for(const key of ['name','slug','h1','seoTitle','shortDescription','keywords'] as const)expect(body[key]).toEqual(old.metadata[key]);
  if(locale==='uk'&&['beam-stress','epoxy-volume'].includes(tool.id))expect(body.seoDescription).not.toBe(old.metadata.seoDescription);else expect(body.seoDescription).toBe(old.metadata.seoDescription);
  expect(body.seoDescription!.length).toBeGreaterThanOrEqual(80);expect(body.seoDescription!.length).toBeLessThanOrEqual(180);
  expect(Object.fromEntries(tool.presentation.fields.map(f=>[f.name,f.defaultValue??'']))).toEqual(old.defaults);
  if(locale==='en'||locale==='de'||locale==='es')expect([body.longDescription,body.howItWorks,body.example,...body.howToUse!,...body.faq!.map(f=>f.q+' '+f.a)].join(' ')).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);
 });
 for(const [i,tool]of definitions.entries())for(const locale of ['en','uk','de','es']as const)it(`${tool.id}/${locale} owns every new diagnostic`,()=>{
  for(const [key,value]of Object.entries(buildingWave13Messages[locale]))expect(bundles[i][locale]?.values?.[key]).toBe(value);
 });
});
describe('exact bounded source scope, fixed units and changing beam load unit',()=>{
 for(const tool of definitions)for(const locale of locales)it(`${tool.id}/${locale} cites only read appropriate methods`,()=>{
  const sources=getBuildingWave13MethodSources(tool.id,locale);
  if(['air-exchange','beam-deflection','beam-stress','epoxy-volume','plaster'].includes(tool.id)){expect(sources).toHaveLength(1);expect(sources[0].href).toMatch(/^https:\/\//);expect(sources[0].label).toBeTruthy();}else expect(sources).toEqual([]);
 });
 it('unknown and prototype IDs have no citation',()=>{for(const id of ['unknown','__proto__','constructor'])expect(getBuildingWave13MethodSources(id,'ru')).toEqual([]);});
 it('unknown locale uses the actually reviewed English label',()=>expect(getBuildingWave13MethodSources('air-exchange','fr')).toEqual(getBuildingWave13MethodSources('air-exchange','en')));
 it('manufacturer supports a converted example, not inherited plaster coefficient',()=>{
  expect(getBuildingWave13MethodSources('plaster','en')[0].label).toContain('10 mm');expect(d17.copy!.en!.example).toContain('hypothetical');expect(d17.copy!.en!.example).toContain('0.85');expect(d17.compute({mode:'area',area:20,length:5,height:2.7,thickness:10,consumption:.85,bagWeight:30}).primary.value).toBe('170,00 кг');
 });
 for(const locale of ['en','uk','de','es']as const)it(`board-volume/${locale}: fixed RUB stays RUB without FX`,()=>{
  const raw=d4.compute({length:2,width:100,thickness:20,count:5,pricePerM3:1000});const output=localizeResult(raw,locale,d4.id,{compute:d4.compute,localization:l4});expect(output.secondary.find(r=>r.label===l4[locale]!.results!['Стоимость'])!.value).toMatch(/^20(?:[.,]0+)? RUB$/);
 });
 it('all dimensions are annotated; counts and mixture proportion stay separate',()=>{
  expect(definitions.flatMap(d=>d.presentation.fields.filter(f=>f.type==='number'&&!f.unit).map(f=>`${d.id}.${f.name}`))).toEqual(['board-volume.count','concrete.count','drywall.layers','epoxy-volume.ratio','fence.rails','fence.gates','insulation.perPack','pile-foundation.count']);
  for(const d of definitions)for(const f of d.presentation.fields.filter(f=>f.unit))expect(f.label).not.toMatch(/,/);
  expect(d17.presentation.fields.find(f=>f.name==='consumption')!.unit).toBe('кг/м²/мм');expect(d4.presentation.fields.find(f=>f.name==='pricePerM3')!.unit).toBe('₽/м³');
 });
 for(const locale of locales)it(`beam ${locale}: omitted actual default and valid scheme, never invalid fallback`,()=>{
  const field=d2.presentation.fields.find(f=>f.name==='load')!;
  const ctx=d2.contextualField!;
  const uniform=locale==='ru'||locale==='uk'?'кН/м':'kN/m',point=locale==='ru'||locale==='uk'?'кН':'kN';
  expect(ctx(field,{},locale).unit).toBe(uniform);expect(ctx(field,{scheme:'uniform'},locale).unit).toBe(uniform);expect(ctx(field,{scheme:'point'},locale).unit).toBe(point);
  expect(ctx(field,{scheme:'point'},locale).help).toBeTruthy();for(const bad of ['alien','',false])expect(ctx(field,{scheme:bad},locale)).toBe(field);
 });
 it('engineering and heuristic claims are explicitly limited in the owned English body',()=>{
  expect(d2.copy!.en!.howItWorks).toContain('not a code check');expect(d2.copy!.en!.longDescription).toContain('small displacements');expect(d3.copy!.en!.disclaimer).toBeTruthy();expect(d15.copy!.en!.disclaimer).toBeTruthy();expect(d8.copy!.en!.howItWorks).toContain('60');
 });
});
describe('native whole-count raw-lexeme validators use the existing form API',()=>{
 const cases=[['board-volume','count'],['concrete','count'],['drywall','layers'],['fence','rails'],['fence','gates'],['insulation','perPack'],['pile-foundation','count']]as const;
 for(const[id,field]of cases)for(const locale of locales)it(`${id}.${field}/${locale}: rejects fractional lexical input before Number rounding`,()=>{
  const tool=definitions.find(d=>d.id===id)!;
  const ctx=(raw:string)=>({values:{[field]:raw,...(id==='concrete'?{mode:'columns'}:{})},locale,fields:tool.presentation.fields,parseNumber:(text:string)=>parseLocalizedNumber(text,locale)});
  const key='Введите целые числа в допустимом диапазоне';const message=locale==='ru'?key:buildingWave13Messages[locale][key];
  expect(tool.validate!(ctx('3.00000000000000001'))[field]).toBe(message);expect(tool.validate!(ctx('9007199254740991.1'))[field]).toBe(message);expect(tool.validate!(ctx('3.0000'))).toEqual({});expect(tool.validate!(ctx(''))).toEqual({});
 });
 for(const locale of locales)it(`concrete/${locale}: inactive fractional column count is irrelevant`,()=>expect(d7.validate!({values:{mode:'slab',count:'1.5'},locale,fields:d7.presentation.fields,parseNumber:text=>parseLocalizedNumber(text,locale)})).toEqual({}));
});
