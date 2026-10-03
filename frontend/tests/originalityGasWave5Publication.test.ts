import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { expect, it } from 'vitest';
import { getCalculatorById } from '../src/lib/i18n';
import { definition as combined } from '../src/calculators/gas-laws/definition';
import { definition as ideal } from '../src/calculators/ideal-gas-law/definition';
import { contextualField as combinedField } from '../src/calculators/gas-laws/contextualField';
import { contextualField as idealField } from '../src/calculators/ideal-gas-law/contextualField';
import { getGasWave5MethodSources } from '../src/data/gasWave5MethodSources';
import { getCalculatorEditorial } from '../src/data/calculatorEditorial';
import { isCompleteCalculatorCopy } from '../src/lib/platform/types';
import { isFieldVisible } from '../src/lib/fieldVisibility';
import { validateValues } from '../src/components/islands/calculator/validation';
import { fieldUnitLabel } from '../src/lib/fieldUnitLabel';
import CalculatorIsland from '../src/components/islands/CalculatorIsland';
import { withSharedPhrases } from '../src/lib/platform/runtime';
import { localization as gasLocalization } from '../src/calculators/gas-laws/localization';
import { localization as idealLocalization } from '../src/calculators/ideal-gas-law/localization';
import { shared as gasShared } from '../src/calculators/gas-laws/shared.generated';
import { shared as idealShared } from '../src/calculators/ideal-gas-law/shared.generated';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';

const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const gasInputs = {mode:'p2',p1:100,v1:2,t1:300,p2:100,v2:1,t2:300};
const idealInputs = {solve:'p',n:2,tempUnit:'k',t:300,volumeUnit:'m3',v:0.05,pressureUnit:'pa',p:101325};
const htmlText = (text:string) => renderToStaticMarkup(createElement('span',null,text)).replace(/^<span>|<\/span>$/g,'');

for (const tool of [combined,ideal]) for (const locale of locales) {
  it(`${tool.id}/${locale}: publishes the whole reviewed native body and bounded sources`,()=>{
    const page=getCalculatorById(tool.id,locale)!;
    const copy=locale==='ru'?tool.presentation:tool.copy?.[locale];
    expect(isCompleteCalculatorCopy(copy)).toBe(true);
    if (!isCompleteCalculatorCopy(copy)) throw new Error('incomplete native copy');
    expect(page.seoTitle).toBe(copy.seoTitle);expect(page.seoDescription).toBe(copy.seoDescription);
    expect(page.slug).toBe(copy.slug);expect(page.longDescription).toBe(copy.longDescription);
    expect(page.howToUse).toEqual(copy.howToUse);expect(page.disclaimer).toBe(copy.disclaimer);
    expect(page.seoContent?.intro).toBe(copy.longDescription);
    expect(page.seoContent?.howItWorks).toBe(copy.howItWorks);
    expect(page.seoContent?.example).toBe(copy.example);expect(page.seoContent?.faq).toEqual(copy.faq);
    for(const source of getGasWave5MethodSources(tool.id,locale)) expect(getCalculatorEditorial(page,locale).sources).toContainEqual(source);
    expect(page.fields.map(f=>f.name)).toEqual(tool.presentation.fields.map(f=>f.name));
  });

  it(`${tool.id}/${locale}: real initial island describes units and hides the computed input`,()=>{
    const page=getCalculatorById(tool.id,locale)!;
    const hook=tool.id==='gas-laws'?combinedField:idealField;
    const localization=tool.id==='gas-laws'?gasLocalization:idealLocalization;
    const shared=tool.id==='gas-laws'?gasShared:idealShared;
    const html=renderToStaticMarkup(createElement(CalculatorIsland,{calc:page,locale,runtime:{compute:tool.compute,contextualField:hook,localization:withSharedPhrases(localization,shared)}}));
    const unknown=tool.id==='gas-laws'?'p2':'p';
    expect(html).not.toContain(`id="f-${unknown}"`);
    const known=tool.id==='gas-laws'?['p1','v1','t1','v2','t2']:['n','t','v'];
    for(const name of known)expect(html).toContain(`id="f-${name}"`);
    for(const field of page.fields.filter(f=>f.type==='number'))expect(fieldUnitLabel(field,locale,page.id)).not.toMatch(/unitless|без единицы|без одиниці|ohne Einheit|sin unidad/);
    for(const name of known){const field=page.fields.find(f=>f.name===name)!;expect(html).toContain(htmlText(hook(field,tool.id==='gas-laws'?gasInputs:idealInputs,locale).label));}
  });
}

for(const locale of locales) for(const [mode,known,unknown,expected] of [
 ['p2',['p1','v1','t1','v2','t2'],'p2',200],
 ['v2',['p1','v1','t1','p2','t2'],'v2',2],
 ['t2',['p1','v1','t1','p2','v2'],'t2',150],
] as const)it(`gas-laws/${locale}/${mode}: five known quantities are actual visible validated inputs`,()=>{
 const page=getCalculatorById('gas-laws',locale)!;const values={...gasInputs,mode,[unknown]:'invalid'};
 expect(page.fields.filter(f=>f.type==='number'&&isFieldVisible(f,values)).map(f=>f.name)).toEqual(known);
 expect(validateValues(page.id,page.fields,values,locale)).toEqual({});
 expect(Number(String(combined.compute(values).primary.value).split(' ')[0])).toBe(expected);
 expect(validateValues(page.id,page.fields,{...values,p1:'invalid'},locale)).toHaveProperty('p1');
});

for(const locale of locales)for(const [field,values,unit]of[
 ['n',idealInputs,locale==='ru'||locale==='uk'?'моль':'mol'],
 ['t',{...idealInputs,tempUnit:'k'},'K'],['t',{...idealInputs,tempUnit:'c'},'°C'],
 ['v',{...idealInputs,volumeUnit:'m3'},'m³'],['v',{...idealInputs,volumeUnit:'l'},'L'],
 ['p',{...idealInputs,pressureUnit:'pa'},'Pa'],['p',{...idealInputs,pressureUnit:'kpa'},'kPa'],['p',{...idealInputs,pressureUnit:'atm'},'atm'],
]as const)it(`ideal-gas-law/${locale}: ${field} follows selected ${unit} without altering input values`,()=>{
 const page=getCalculatorById('ideal-gas-law',locale)!;const original=page.fields.find(f=>f.name===field)!;
 const updated=idealField(original,values,locale);
 expect(updated.unit).toBe(unit);expect(updated.label).toBe(original.label);
 expect(updated.defaultValue).toBe(original.defaultValue);
});

for(const locale of locales)it(`ideal-gas-law/${locale}: formal zero Kelvin limit has a native explanation`,()=>{
 const runtime={compute:ideal.compute,localization:withSharedPhrases(idealLocalization,idealShared)};
 const result=localizeResult(ideal.compute({...idealInputs,t:0}),locale,ideal.id,runtime);
 const labels={ru:'Предел модели',en:'Model limit',uk:'Границя моделі',de:'Modellgrenze',es:'Límite del modelo'};
 const row=result.secondary!.find(r=>r.label===labels[locale]);
 expect(row).toBeDefined();expect(String(row!.value)).toContain('0 K');
 if(['en','de','es'].includes(locale))expect(JSON.stringify(result)).not.toMatch(/[а-яё]/i);
});
