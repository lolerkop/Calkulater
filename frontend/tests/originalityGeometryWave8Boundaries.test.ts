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

const locs=[l0,l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16];
const tools=[c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16];
const row=(r:CalcResult,k:string)=>r.secondary.find(v=>v.label===k)?.value??'';
const num=(s:string)=>{const t=s.replace(/[\s\u00a0\u202f]/g,'').replace(',','.');const m=/^(-?[\d.]+)·10\^(-?\d+)/.exec(t);return m?Number(m[1]+'e'+m[2]):parseFloat(t);};
const error=(r:CalcResult)=>{expect(r.primary.value).toBe('—');expect(r.secondary[0].accent).toBe('red');};
type Inputs=Parameters<CalcFunction>[0];
const domain:Inputs[]=[
 {center:100,d1:100,d2:100},{unit:'m',R:5,r:5},{unit:'m',r:0,h:4},
 {unit:'m',mode:'side',side:0},{unit:'m',a:2,b:3,c:0},{unit:'m',r:3,h:0},
 {unit:'m',a:1,b:0},{unit:'m',R:3,r:6,h:8},{points:'0 0\n4 4\n0 4\n3 0'},
 {unit:'m',sides:101,side:2,height:3},{unit:'m',sides:3.5,side:2,height:3},
 {unit:'m',n:1001,side:2},{unit:'m',radius:5,angle:361},
 {unit:'m',mode:'diameter',d:0},{mode:'grow',a:0},{a:10,b:10,h:8},{rise:1,run:0},
];
const ranges:Inputs[]=[
 {center:Number.MAX_VALUE,d1:1,d2:1},{unit:'m',R:1e-200,r:0},{unit:'m',r:1e200,h:1e200},
 {unit:'m',mode:'area',area:Number.MIN_VALUE},{unit:'m',a:Number.MAX_VALUE,b:1,c:1},
 {unit:'m',r:1e-200,h:1e200},{unit:'m',a:1e200,b:1e200},{unit:'m',R:1e200,r:1e199,h:1e200},
 {points:'0 0\n1e200 0\n1e200 1e200\n0 1e200'},
 {unit:'m',sides:4,side:1e200,height:1},{unit:'m',sides:4,side:1e200,height:1},
 {unit:'m',n:4,side:1e-200},{unit:'m',radius:1,angle:Number.MIN_VALUE},
 {unit:'m',mode:'diameter',d:Number.MIN_VALUE},{mode:'split',total:Number.MIN_VALUE},
 {a:1e200,b:1e199,h:1e200},{rise:Number.MIN_VALUE,run:2},
];
describe('geometry wave8 independently bounded domains and numeric ranges',()=>{
 for(const[i,t]of tools.entries()){
  it(`${t.id}: confirmed domain is rejected without a false successful zero`,()=>error(t.compute(domain[i])));
  it(`${t.id}: required derived outputs stay representable as one result`,()=>error(t.compute(ranges[i])));
  for(const locale of ['en','uk','de','es']as const)it(`${t.id}/${locale}: actual domain and range errors are native`,()=>{
   for(const input of[domain[i],ranges[i]]){const r=t.compute(input);error(r);const n=localizeResult(r,locale,t.id,{compute:t.compute,localization:locs[i]});expect(n.secondary[0].value).not.toBe(r.secondary[0].value);expect(JSON.stringify(n)).not.toMatch(locale==='uk'?/[ЁёЫыЭэЪъ]/:/[А-Яа-яЁё]/);}
  });
 }
 it('full-circle perimeter is circumference, and only its exact full-turn chord is zero',()=>{
  const full=c12.compute({unit:'m',radius:5,angle:360});expect(row(full,'Периметр сектора')).toBe(row(full,'Длина дуги'));expect(row(full,'Хорда')).toBe('0 м');
  const almost=c12.compute({unit:'m',radius:5,angle:359.99999999999994});expect(num(row(almost,'Хорда'))).toBeGreaterThan(0);expect(num(row(almost,'Периметр сектора'))).toBeGreaterThan(num(row(full,'Периметр сектора'))+9.99);
 });
 it('tiny sector chords are not clamped by a generic sine threshold',()=>{expect(num(row(c12.compute({unit:'m',radius:1,angle:1e-8}),'Хорда'))).toBeGreaterThan(0);});
 it('the disk and circular ellipse have mathematically meaningful zero inner circumference/foci',()=>{expect(row(c1.compute({unit:'m',R:5,r:0}),'Внутренняя окружность')).toBe('0 м');const r=c6.compute({unit:'m',a:5,b:5});expect(row(r,'Эксцентриситет')).toBe('0');expect(row(r,'Расстояние между фокусами')).toBe('0 м');});
 it('circle-frustum cone limit agrees with the full cone in all displayed measures',()=>{const a=c2.compute({unit:'m',r:3,h:4}),b=c7.compute({unit:'m',R:3,r:0,h:4});expect(a).toEqual(b);});
 it('ellipse semiaxes, cuboid edges and square-frustum bases can be reordered',()=>{
  expect(c6.compute({unit:'m',a:5,b:3})).toEqual(c6.compute({unit:'m',a:3,b:5}));
  expect(c4.compute({unit:'m',a:2,b:3,c:4})).toEqual(c4.compute({unit:'m',a:4,b:2,c:3}));
  const a=c15.compute({a:10,b:6,h:8}),b=c15.compute({a:6,b:10,h:8});expect(a.primary).toEqual(b.primary);for(const k of['Апофема','Боковая поверхность','Полная поверхность'])expect(row(a,k)).toBe(row(b,k));
 });
 it('a square-based prism is the cuboid with two equal base edges',()=>{const a=c9.compute({unit:'m',sides:4,side:2,height:3}),b=c4.compute({unit:'m',a:2,b:2,c:3});expect(a.primary).toEqual(b.primary);expect(row(a,'Полная поверхность')).toBe(row(b,'Площадь поверхности'));});
 it('a 6-4 square pyramid has a 3-4-5 face section, not a diagonal section',()=>{const r=c10.compute({unit:'m',sides:4,side:6,height:4});expect(row(r,'Апофема')).toBe('5 м');expect(row(r,'Боковая поверхность')).toBe('60 м²');expect(row(r,'Полная поверхность')).toBe('96 м²');});
 it('base-area averaging overstates the square-frustum volume by h(a−b)²/6',()=>{const r=c15.compute({a:10,b:6,h:8});expect(r.primary.value).toBe('522,67 см³');expect(8*(100+36)/2).toBe(544);expect(8*(10-6)**2/6).toBeCloseTo(21.333333333333332,12);});
 it('gradient sign follows the coordinate ratio and horizontal input is valid',()=>{
  const a=c16.compute({rise:3,run:4}),b=c16.compute({rise:-3,run:4}),c=c16.compute({rise:3,run:-4});expect(b).toEqual(c);expect(num(a.primary.value)).toBe(-num(b.primary.value));expect(row(a,'Длина наклона')).toBe(row(b,'Длина наклона'));const z=c16.compute({rise:0,run:4});expect(num(z.primary.value)).toBe(0);expect(num(row(z,'Угол'))).toBe(0);
 });
 it('polygon winding reverses only its orientation; closing vertex is normalized',()=>{
  const a='0 0\n4 0\n4 3\n0 3',b='0 3\n4 3\n4 0\n0 0';const r=c8.compute({points:a}),s=c8.compute({points:b});expect(r.primary).toEqual(s.primary);for(const k of['Периметр','Центроид X','Центроид Y'])expect(row(r,k)).toBe(row(s,k));expect(row(r,'Обход')).not.toBe(row(s,'Обход'));expect(c8.compute({points:a+'\n0 0'})).toEqual(r);
 });
 it('forward collinear redundant vertices remain a valid simple contour',()=>{const r=c8.compute({points:'0 0\n2 0\n4 0\n4 3\n0 3'});expect(r.primary.value).toBe('12');expect(row(r,'Периметр')).toBe('14');});
 for(const points of ['0 0\n4 4\n0 4\n3 0','0 0\n4 0\n2 0\n4 3\n0 3','0 0\n4 0\n4 3\n4 0\n0 3','0 0\n1 1','0 0 0\n4 0\n0 3','0 0\nInfinity 0\n0 3','0 0\n1e-999 0\n0 3'])it('reject polygon topology or grammar: '+points,()=>error(c8.compute({points})));
 it('coordinates shifted by 10¹² keep the same small area and perimeter',()=>{const r=c8.compute({points:'1000000000000 1000000000000\n1000000000004 1000000000000\n1000000000004 1000000000003\n1000000000000 1000000000003'});expect(r.primary.value).toBe('12');expect(row(r,'Периметр')).toBe('14');});
 it('polygon decimals and legacy comma separators have explicit unambiguous grammar',()=>{expect(c8.compute({points:'0,5 0\n4,5 0\n0,5 3'}).primary.value).toBe('6');expect(c8.compute({points:'0, 0\n4, 0\n0, 3'}).primary.value).toBe('6');error(c8.compute({points:'0,0\n4,0\n0,3'}));});
 it('polygon resource limits are product limits with independent exact caps',()=>{error(c8.compute({points:'0 0\n1 0\n0 1\n'+' '.repeat(32768)}));const many=Array.from({length:257},(_,i)=>`${i} ${i*i}`).join('\n');error(c8.compute({points:many}));});
 it('belt diameter order affects neither length nor wrap',()=>expect(c0.compute({center:300,d1:100,d2:200})).toEqual(c0.compute({center:300,d1:200,d2:100})));
 it('belt approximation has a concrete error counterexample within nonoverlap geometry',()=>{const r=c0.compute({center:100,d1:1,d2:190});expect(r.primary.value.replace(/[\u00a0\u202f]/g,' ')).toBe('589,32 мм');expect(num(row(r,'Угол обхвата малого шкива'))).toBeCloseTo(38.18,2);expect((599.3415441078819-589.3245984178253)/599.3415441078819*100).toBeCloseTo(1.67132510478,8);});
 it('a valid 99:1 ellipse disproves a universal near-perfect FIRST-approximation guarantee',()=>{expect(num(row(c6.compute({unit:'m',a:99,b:1}),'Периметр (Рамануджан)'))).toBe(394.76);expect((396.1107394268759-394.7584378509281)/396.1107394268759*100).toBeCloseTo(.34139482759,8);});
 it('golden grow returns two partners whose mutual ratio is φ², rather than a partition of a',()=>{const r=c14.compute({mode:'grow',a:34});const a=num(r.primary.value),b=num(row(r,'Меньший отрезок'));expect(a+b).not.toBeCloseTo(34,1);expect(a/b).toBeCloseTo(2.618033988749895,4);});
});
