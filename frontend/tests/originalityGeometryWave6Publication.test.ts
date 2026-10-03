import { describe, expect, it } from 'vitest';
import { definition as circle } from '../src/calculators/geom-circle/definition';
import { definition as square } from '../src/calculators/geom-square/definition';
import { definition as rectangle } from '../src/calculators/geom-rectangle/definition';
import { definition as triangle } from '../src/calculators/geom-triangle/definition';
import { definition as right } from '../src/calculators/geom-right-triangle/definition';
import { definition as parallelogram } from '../src/calculators/geom-parallelogram/definition';
import { definition as trapezoid } from '../src/calculators/geom-trapezoid/definition';
import { definition as rhombus } from '../src/calculators/geom-rhombus/definition';
import { getGeometryWave6MethodSources } from '../src/data/geometryWave6MethodSources';
import { getCalculatorById } from '../src/lib/i18n';
import { getCalculatorEditorial } from '../src/data/calculatorEditorial';
import { fieldUnitLabel } from '../src/lib/fieldUnitLabel';
import { runtimeFor } from '../src/calculators/runtime.generated';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import type { CalcFunction } from '../src/lib/types';

const tools=[circle,square,rectangle,triangle,right,parallelogram,trapezoid,rhombus];
const locales=['ru','en','uk','de','es'] as const;
const paths=[
 ['/ru/geometry/circle/','/en/geometry/circle-calculator/','/uk/heometriya/kolo/','/de/geometrie/kreis-rechner/','/es/geometria/calculadora-de-circulo/'],
 ['/ru/geometry/square/','/en/geometry/square-calculator/','/uk/heometriya/kvadrat/','/de/geometrie/quadrat-rechner/','/es/geometria/calculadora-de-cuadrado/'],
 ['/ru/geometry/rectangle/','/en/geometry/rectangle-calculator/','/uk/heometriya/pryamokutnyk/','/de/geometrie/rechteck-rechner/','/es/geometria/calculadora-de-rectangulo/'],
 ['/ru/geometry/triangle/','/en/geometry/triangle-calculator/','/uk/heometriya/trykutnyk/','/de/geometrie/dreieck-rechner/','/es/geometria/calculadora-de-triangulo/'],
 ['/ru/geometry/right-triangle/','/en/geometry/right-triangle-calculator/','/uk/heometriya/pryamokutnyy-trykutnyk/','/de/geometrie/rechtwinkliges-dreieck/','/es/geometria/triangulo-rectangulo/'],
 ['/ru/geometry/parallelogram/','/en/geometry/parallelogram-calculator/','/uk/heometriya/paralelohram/','/de/geometrie/parallelogramm-rechner/','/es/geometria/calculadora-de-paralelogramo/'],
 ['/ru/geometry/trapezoid/','/en/geometry/trapezoid-calculator/','/uk/heometriya/trapetsiya/','/de/geometrie/trapez-rechner/','/es/geometria/calculadora-de-trapecio/'],
 ['/ru/geometry/geom-rhombus/','/en/geometry/rhombus-calculator/','/uk/heometriya/romb/','/de/geometrie/raute-rechner/','/es/geometria/calculadora-de-rombo/'],
];
const active=['r','side','a','a','a','a','a','d1'];
const fixtures:Parameters<CalcFunction>[0][]=[{unit:'m',mode:'radius',r:3},{unit:'m',mode:'side',side:5},{unit:'m',mode:'sides',a:8,b:3},{unit:'m',mode:'sss',a:3,b:4,c:5},{unit:'m',mode:'legs',a:3,b:4},{unit:'m',mode:'height',a:10,h:6},{unit:'m',a:8,b:2,h:4,c:5,d:5},{unit:'m',d1:6,d2:8}];
const expectedNumbers=[28.274,25,24,6,5,60,20,24];
const numeric=(text:string)=>parseFloat(text.replace(/[\s\u00a0\u202f]/g,'').replace(',','.'));

describe('geometry wave6 actual40 published contracts after root integration',()=>{
 for(const [i,tool]of tools.entries())for(const [l,locale]of locales.entries())it(`${tool.id}/${locale}: actual body, route, units, sources and runtime`,()=>{
  const page=getCalculatorById(tool.id,locale)!;const owned=locale==='ru'?tool.presentation:tool.copy![locale]!;
  expect(page.fullPath).toBe(paths[i][l]);expect(page.name).toBe(owned.name);expect(page.h1).toBe(owned.h1);
  expect(page.seoContent).toEqual({intro:owned.longDescription,howItWorks:owned.howItWorks,example:owned.example,tips:owned.howToUse.join(' '),faq:owned.faq});
  expect(page.howToUse).toEqual(owned.howToUse);expect(page.disclaimer).toBe(owned.disclaimer);
  for(const source of getGeometryWave6MethodSources(tool.id,locale))expect(getCalculatorEditorial(page,locale).sources).toContainEqual(source);
  const runtime=runtimeFor(tool.id);
  for(const raw of tool.presentation.fields.filter(f=>f.type==='number')){
   const field=page.fields.find(f=>f.name===raw.name)!;const staticUnit=locale==='ru'||locale==='uk'?raw.unit:raw.unit==='см²'?'cm²':raw.unit==='см'?'cm':raw.unit;
   expect(fieldUnitLabel(field,locale,tool.id)).toBe(staticUnit);
   for(const selected of ['mm','cm','m']){
    const contextual=runtime.contextualField!(field,{unit:selected},locale);const symbol=locale==='ru'||locale==='uk'?{mm:'мм',cm:'см',m:'м'}[selected]:selected;
    expect(contextual.unit).toBe(raw.name==='angle'?'°':symbol+(raw.name==='area'?'²':''));
   }
  }
  const result=localizeResult(runtime.compute(fixtures[i]),locale,tool.id,runtime);
  expect(numeric(result.primary.value)).toBeCloseTo(expectedNumbers[i],3);
  expect(result.primary.value).toMatch(locale==='ru'||locale==='uk'?/м(?:²)?$/:/m(?:²)?$/);
  const invalid=localizeResult(runtime.compute({...fixtures[i],[active[i]]:true}),locale,tool.id,runtime);
  expect(invalid.primary.value).toBe('—');expect(invalid.secondary[0].accent).toBe('red');
  if(locale!=='ru'){
   const foreign=locale==='uk'?/[ЁёЫыЭэЪъ]/:/[А-Яа-яЁё]/;expect(JSON.stringify(result)).not.toMatch(foreign);expect(JSON.stringify(invalid)).not.toMatch(foreign);
  }
 });
});
