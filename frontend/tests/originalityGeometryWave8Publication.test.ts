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
import { getCalculatorById } from '../src/lib/i18n';
import { getCalculatorEditorial } from '../src/data/calculatorEditorial';
import { fieldUnitLabel } from '../src/lib/fieldUnitLabel';
import { runtimeFor } from '../src/calculators/runtime.generated';

const locales=['ru','en','uk','de','es']as const;
const paths=[
  [
    "/ru/geometry/dlina-remnya/",
    "/en/geometry/belt-length/",
    "/uk/heometriya/dovzhyna-remenya/",
    "/de/geometrie/riemenlaenge-rechner/",
    "/es/geometria/longitud-de-correa/"
  ],
  [
    "/ru/geometry/geom-annulus/",
    "/en/geometry/annulus-calculator/",
    "/uk/heometriya/kiltse/",
    "/de/geometrie/kreisring-rechner/",
    "/es/geometria/corona-circular/"
  ],
  [
    "/ru/geometry/cone/",
    "/en/geometry/cone-calculator/",
    "/uk/heometriya/konus/",
    "/de/geometrie/kegel-rechner/",
    "/es/geometria/calculadora-de-cono/"
  ],
  [
    "/ru/geometry/geom-cube/",
    "/en/geometry/cube-calculator/",
    "/uk/heometriya/kub/",
    "/de/geometrie/wuerfel-rechner/",
    "/es/geometria/calculadora-de-cubo/"
  ],
  [
    "/ru/geometry/cuboid/",
    "/en/geometry/cuboid-calculator/",
    "/uk/heometriya/paralelepiped/",
    "/de/geometrie/quader-rechner/",
    "/es/geometria/calculadora-de-ortoedro/"
  ],
  [
    "/ru/geometry/cylinder/",
    "/en/geometry/cylinder-calculator/",
    "/uk/heometriya/tsylindr/",
    "/de/geometrie/zylinder-rechner/",
    "/es/geometria/calculadora-de-cilindro/"
  ],
  [
    "/ru/geometry/geom-ellipse/",
    "/en/geometry/ellipse-calculator/",
    "/uk/heometriya/elips/",
    "/de/geometrie/ellipse-rechner/",
    "/es/geometria/calculadora-de-elipse/"
  ],
  [
    "/ru/geometry/geom-frustum/",
    "/en/geometry/conical-frustum-calculator/",
    "/uk/heometriya/zrizanyy-konus/",
    "/de/geometrie/kegelstumpf-rechner/",
    "/es/geometria/tronco-de-cono/"
  ],
  [
    "/ru/geometry/mnogougolnik-po-koordinatam/",
    "/en/geometry/polygon-area-coordinates/",
    "/uk/heometriya/bagatokutnyk-za-koordynatamy/",
    "/de/geometrie/vieleckflaeche-koordinaten/",
    "/es/geometria/area-de-poligono-por-coordenadas/"
  ],
  [
    "/ru/geometry/geom-prism/",
    "/en/geometry/prism-calculator/",
    "/uk/heometriya/pryzma/",
    "/de/geometrie/prisma-rechner/",
    "/es/geometria/calculadora-de-prisma/"
  ],
  [
    "/ru/geometry/geom-pyramid/",
    "/en/geometry/pyramid-calculator/",
    "/uk/heometriya/piramida/",
    "/de/geometrie/pyramide-rechner/",
    "/es/geometria/calculadora-de-piramide/"
  ],
  [
    "/ru/geometry/regular-polygon/",
    "/en/geometry/regular-polygon-calculator/",
    "/uk/heometriya/pravylnyy-mnohokutnyk/",
    "/de/geometrie/regelmaessiges-vieleck/",
    "/es/geometria/poligono-regular/"
  ],
  [
    "/ru/geometry/sector/",
    "/en/geometry/sector-calculator/",
    "/uk/heometriya/sektor-kola/",
    "/de/geometrie/kreissektor-rechner/",
    "/es/geometria/sector-circular/"
  ],
  [
    "/ru/geometry/sphere/",
    "/en/geometry/sphere-calculator/",
    "/uk/heometriya/kulya/",
    "/de/geometrie/kugel-rechner/",
    "/es/geometria/calculadora-de-esfera/"
  ],
  [
    "/ru/geometry/golden-ratio/",
    "/en/geometry/golden-ratio-calculator/",
    "/uk/heometriya/zolotyi-pereriz/",
    "/de/geometrie/goldener-schnitt/",
    "/es/geometria/proporcion-aurea/"
  ],
  [
    "/ru/geometry/usechennaya-piramida/",
    "/en/geometry/pyramid-frustum/",
    "/uk/heometriya/zrizana-piramida/",
    "/de/geometrie/pyramidenstumpf-rechner/",
    "/es/geometria/tronco-de-piramide/"
  ],
  [
    "/ru/geometry/slope/",
    "/en/geometry/slope-calculator/",
    "/uk/heometriya/ukhyl/",
    "/de/geometrie/steigung-rechner/",
    "/es/geometria/calculadora-de-pendiente/"
  ]
];

const inputs:Parameters<CalcFunction>[0][]=[{center:300,d1:100,d2:200},{unit:'m',R:5,r:3},{unit:'m',r:3,h:4},{unit:'m',mode:'side',side:4},{unit:'m',a:2,b:3,c:4},{unit:'m',r:3,h:10},{unit:'m',a:5,b:3},{unit:'m',R:6,r:3,h:8},{points:'0 0\n4 0\n0 3'},{unit:'m',sides:4,side:2,height:3},{unit:'m',sides:4,side:6,height:4},{unit:'m',n:6,side:2},{unit:'m',radius:5,angle:60},{unit:'m',mode:'radius',r:3},{mode:'split',total:100},{a:10,b:6,h:8},{rise:3,run:4}];
const expected=[1079.5722313718023,50.26548245743669,37.69911184307752,64,24,282.7433388230814,47.1238898038469,527.7875658030853,6,12,48,10.392304845413264,13.08996938995747,113.09733552923255,61.80339887498948,522.6666666666666,75];
const active=['center','R','r','side','a','r','a','R','points','side','side','side','radius','r','total','a','rise'];
const numeric=(s:string,locale:string)=>{const compact=s.replace(/[\s\u00a0\u202f]/g,'');return parseFloat(locale==='en'?compact.replaceAll(',',''):compact.replace(',','.'));};
const units:Record<string,Record<string,string>>={en:{'мм':'mm','см':'cm','м':'m','мм²':'mm²','см²':'cm²','м²':'m²','мм³':'mm³','см³':'cm³','м³':'m³','ед. длины':'length unit'},uk:{'ед. длины':'од. довжини'},de:{'мм':'mm','см':'cm','м':'m','мм²':'mm²','см²':'cm²','м²':'m²','мм³':'mm³','см³':'cm³','м³':'m³','ед. длины':'Längeneinheit'},es:{'мм':'mm','см':'cm','м':'m','мм²':'mm²','см²':'cm²','м²':'m²','мм³':'mm³','см³':'cm³','м³':'m³','ед. длины':'unidad de longitud'}};
// Deliberately pending until root generation/source-priority integration. Never run on a stale snapshot.
describe('geometry wave8 actual85 published body, units, route and runtime after root integration',()=>{
 for(const[i,tool]of tools.entries())for(const[li,locale]of locales.entries())it(`${tool.id}/${locale}: full public contract`,()=>{
  const p=getCalculatorById(tool.id,locale)!;const own=locale==='ru'?tool.presentation:tool.copy![locale]!;if(!isCompleteCalculatorCopy(own))throw new Error('Incomplete own body');
  expect(p.fullPath).toBe(paths[i][li]);expect(p.name).toBe(own.name);expect(p.h1).toBe(own.h1);expect(p.seoTitle).toBe(own.seoTitle);expect(p.shortDescription).toBe(own.shortDescription);expect(p.seoDescription).toBe(own.seoDescription);
  expect(p.seoContent).toEqual({intro:own.longDescription,howItWorks:own.howItWorks,example:own.example,tips:own.howToUse.join(' '),faq:own.faq});expect(p.howToUse).toEqual(own.howToUse);expect(p.disclaimer).toBe(own.disclaimer);
  for(const source of getGeometryWave8MethodSources(tool.id,locale))expect(getCalculatorEditorial(p,locale).sources).toContainEqual(source);
  const rt=runtimeFor(tool.id);
  for(const f of tool.presentation.fields.filter(f=>f.type==='number')){
   const field=p.fields.find(v=>v.name===f.name)!;expect(fieldUnitLabel(field,locale,tool.id)).toBe(units[locale]?.[f.unit!]??f.unit);
   if(tool.contextualField){expect(rt.contextualField).toBeTypeOf('function');for(const unit of['mm','cm','m'])expect(rt.contextualField!(field,{unit},locale).unit).toBe(tool.contextualField(f,{unit},locale).unit);}
  }
  const r=localizeResult(rt.compute(inputs[i]),locale,tool.id,rt);expect(Math.abs(numeric(r.primary.value,locale)/expected[i]-1)).toBeLessThan(.00055);
  const bad=localizeResult(rt.compute({...inputs[i],[active[i]]:true}),locale,tool.id,rt);expect(bad.primary.value).toBe('—');expect(bad.secondary[0].accent).toBe('red');
  if(locale!=='ru'){const foreign=locale==='uk'?/[ЁёЫыЭэЪъ]/:/[А-Яа-яЁё]/;expect(JSON.stringify(r)).not.toMatch(foreign);expect(JSON.stringify(bad)).not.toMatch(foreign);}
 });
});

const positiveSideErrors={ru:'Длина стороны должна быть больше нуля',en:'The side length must be greater than zero',uk:'Довжина сторони має бути більшою за нуль',de:'Die Seitenlänge muss größer als null sein',es:'La longitud del lado debe ser mayor que cero'};
for(const locale of locales)it(`regular polygon/${locale}: nonpositive-side error is native`,()=>{const rt=runtimeFor('geom-regular-polygon');const r=localizeResult(rt.compute({unit:'m',n:6,side:-1}),locale,'geom-regular-polygon',rt);expect(r.primary.value).toBe('—');expect(r.secondary[0].value).toBe(positiveSideErrors[locale]);});
