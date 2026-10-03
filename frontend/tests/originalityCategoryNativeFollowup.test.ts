import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';
import { faqJsonLd, collectionPageJsonLd } from '../src/lib/seo';
import { describe, expect, it, vi } from 'vitest';
// SEO only needs locale metadata here. Avoid loading the MAIN calculator registry.
vi.mock('../src/lib/i18n', () => ({
  localeMeta: {ru:{localeCode:'ru-RU'},en:{localeCode:'en-US'},uk:{localeCode:'uk-UA'},de:{localeCode:'de-DE'},es:{localeCode:'es-ES'}},
}));
import * as finance from '../src/categories/finance/localization';
import * as currency from '../src/categories/currency/localization';
import * as sport from '../src/categories/sport/localization';
import * as building from '../src/categories/building/localization';
import * as dateTime from '../src/categories/date-time/localization';
import * as math from '../src/categories/math/localization';
import * as business from '../src/categories/business/localization';
import * as converters from '../src/categories/converters/localization';
import * as electronics from '../src/categories/electronics/localization';
import * as computers from '../src/categories/computers/localization';
import * as education from '../src/categories/education/localization';
import * as automotive from '../src/categories/automotive/localization';
import * as household from '../src/categories/household/localization';
import * as geometry from '../src/categories/geometry/localization';
import * as physics from '../src/categories/physics/localization';
import * as chemistry from '../src/categories/chemistry/localization';
import { calcCredit } from '../src/lib/calculators/credit';
import { calcMortgage } from '../src/lib/calculators/mortgage';
import { compute as roi } from '../src/calculators/roi/compute';
import { compute as aspectRatio } from '../src/calculators/aspect-ratio/compute';
import { compute as gpa } from '../src/calculators/gpa/compute';
import { compute as led } from '../src/calculators/led-resistor/compute';
import { definition as ledDefinition } from '../src/calculators/led-resistor/definition';
import { definition as powerDefinition } from '../src/calculators/power-to-weight/definition';
import { definition as quarterDefinition } from '../src/calculators/quarter-mile-elapsed-time/definition';
import { definition as massDefinition } from '../src/calculators/mass-energy/definition';
import { definition as inverseDefinition } from '../src/calculators/inverse-square/definition';
import { definition as inclineDefinition } from '../src/calculators/inclined-plane/definition';
import { definition as terminalDefinition } from '../src/calculators/terminal-velocity/definition';
import { definition as circleDefinition } from '../src/calculators/geom-circle/definition';
import { definition as tipDefinition } from '../src/calculators/tip/definition';
import { definition as dilutionDefinition } from '../src/calculators/dilution/definition';
import { compute as triangle } from '../src/calculators/geom-triangle/compute';
import type { CalcResult } from '../src/lib/types';

// This gate reads direct, owned category modules and a bounded set of frozen
// model contracts. It does not import the partially integrated MAIN registry.
const modules = { finance, currency, sport, building, 'date-time': dateTime, math, business, converters,
  electronics, computers, education, automotive, household, geometry, physics, chemistry };
const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
type Locale = typeof locales[number];
type Id = keyof typeof modules;
const before = JSON.parse(readFileSync(new URL('../reports/originality-category-native-followup-before.json', import.meta.url), 'utf8')) as {
  records: { id: Id; locale: Locale; path: string; sourceCopy: Record<string,string>; sourceFaq: { q: string; a: string }[] }[];
};
const faqTranslated = ['math','business','converters','electronics','computers','education','automotive','household','geometry','physics','chemistry'] as const;
const nativeQuestions = {
  math: ['Zeigen die Rechner den Rechenweg?','Was passiert bei negativen Zahlen?','Warum werden manche Werte abgelehnt?'],
  business: ['Welchen Zeitraum sollen die Kennzahlen abdecken?','Warum kann der ROI negativ sein?','Wie unterscheiden sich ROI und ROAS?'],
  converters: ['Funktionieren die Umrechner in beide Richtungen?','Was unterscheidet Gigabyte und Gibibyte?','Warum unterscheiden sich US- und britische Gallonen?','Wie genau sind die Umrechnungen?'],
  electronics: ['Warum muss die LED-Flussspannung kleiner als die Versorgung sein?','In welcher Einheit wird der Strom eingegeben?','Werden Einschaltstrom und Spannungseinbruch der Batterie berücksichtigt?','Wird ein Widerstand aus einer Normreihe vorgeschlagen?'],
  computers: ['Was unterscheidet Megabyte und Mebibyte?','Warum stehen Datenraten in Bit und Dateigrößen in Byte?','Wird Protokoll-Overhead berücksichtigt?','Warum ergeben 2560×1080 genau 64:27 statt 21:9?'],
  education: ['Warum gibt es keine Umrechnung in Buchstaben- oder Fünfernoten?','Kann ich eine Bestehensgrenze festlegen?','Was bedeutet das Gewicht der Prüfung?','Was bedeutet eine erforderliche Note über hundert?'],
  automotive: ['Welche Pferdestärke wird verwendet?','Wie unterscheidet sich Verbrauch von einer Einheitenumrechnung?','Werden Fahrstil und Gelände berücksichtigt?','Enthalten die Fahrtkosten den Wertverlust?'],
  household: ['Wo finde ich meinen Stromtarif?','Ist die Geräteleistung der Wert auf dem Typenschild?','Wie viel Trinkgeld sollte ich geben?','Was brauche ich für die Poolberechnung?'],
  geometry: ['Warum brauche ich eine Längeneinheit?','Warum werden manche Dreiecke abgelehnt?','Werden die Ergebnisse gerundet?','Kann ich verschiedene Einheiten mischen?'],
  physics: ['Warum 9,80665 und nicht 9,8?','Kann ich nach jeder Größe auflösen?','Werden Reibung und Luftwiderstand berücksichtigt?','Welche Einheiten soll ich verwenden?'],
  chemistry: ['Welche Einheiten soll ich verwenden?','Warum ergeben pH und pOH zusammen 14?','Brauche ich ein Periodensystem?','Werden reale Lösungen und nicht ideale Gase berücksichtigt?'],
} as const;
const normalized = (value: string) => value.replace(/[\u00a0\u202f]/g, ' ');
const row = (result: CalcResult, label: string) => normalized(String(result.secondary?.find(x => x.label === label)?.value));

describe('all 80 category sources: native FAQ, preserved routes and useful authored structure', () => {
  for (const record of before.records) it(`${record.id}/${record.locale}: identity, metadata and question order stay scoped`, () => {
    const current = modules[record.id];
    const c = current.copy[record.locale] as Record<string,string>;
    const allowed = record.id === 'physics' ? ['description','longDescription','seoDescription']
      : ['math','converters','education','automotive','geometry','chemistry'].includes(record.id) ? ['longDescription'] : [];
    for (const [key, value] of Object.entries(record.sourceCopy)) if (!allowed.includes(key)) expect(c[key], key).toBe(value);
    expect(`/${record.locale}/${c.slug}/`).toBe(record.path);
    const faq = current.faq[record.locale];
    expect(faq).toHaveLength(record.sourceFaq.length);
    const schema = faqJsonLd([...faq]);
    const pageSchema = collectionPageJsonLd({name:c.h1,description:c.seoDescription,path:record.path,items:[],locale:record.locale});
    expect(pageSchema.inLanguage).toBe({ru:'ru-RU',en:'en-US',uk:'uk-UA',de:'de-DE',es:'es-ES'}[record.locale]);
    expect(schema.mainEntity).toEqual(faq.map(item => ({'@type':'Question', name:item.q, acceptedAnswer:{'@type':'Answer',text:item.a}})));
    if (record.locale === 'de' && faqTranslated.includes(record.id as typeof faqTranslated[number])) {
      expect(faq.map(x => x.q)).toEqual(nativeQuestions[record.id as keyof typeof nativeQuestions]);
      expect(faq).not.toEqual(current.faq.en);
    } else {
      const expectedQuestions = record.sourceFaq.map(x => x.q);
      if (record.id === 'computers' && record.locale === 'ru') expectedQuestions[3] = 'Почему 2560×1080 даёт 64:27, а не 21:9?';
      expect(faq.map(x => x.q)).toEqual(expectedQuestions);
    }
  });
  it('preserves every other language bucket exactly, rather than extending public-language assumptions', () => {
    const captured = JSON.parse(readFileSync(new URL('../reports/originality-category-native-followup-before.json', import.meta.url), 'utf8'));
    // The source files are literals: evaluate only their two exported literal maps.
    for (const file of captured.files) {
      const id = file.path.split('/')[2] as Id;
      for (const name of ['copy','faq'] as const) {
        const literal = file.content.slice(file.content.indexOf(`export const ${name}:`));
        const mapText = literal.slice(literal.indexOf('=') + 1, literal.indexOf('\n};') + 2);
        const original = Function(`return (${mapText});`)();
        for (const locale of Object.keys(original)) if (!(locales as readonly string[]).includes(locale))
          expect(modules[id][name][locale as Locale], `${id}/${name}/${locale}`).toEqual(original[locale]);
      }
    }
  });
  for (const kind of ['category','calculator'] as const) for (const locale of locales) it(`${locale}: ${kind} breadcrumb aria label is native`, () => {
    const path = kind === 'category' ? '../src/pages/[locale]/[category]/index.astro' : '../src/pages/[locale]/[category]/[calculator].astro';
    const template = readFileSync(new URL(path, import.meta.url), 'utf8');
    const literal = template.match(/const pageCopy = (\{[\s\S]*?\})\[locale\];/)?.[1];
    expect(literal).toBeTruthy();
    const expression = ts.transpileModule(`const value = (${literal}); value[locale];`, { compilerOptions:{ target:ts.ScriptTarget.ES2022, module:ts.ModuleKind.ESNext } }).outputText;
    const copy = runInNewContext(expression, { locale });
    expect(copy.breadcrumbs).toBe({ru:'Хлебные крошки',en:'Breadcrumbs',uk:'Навігаційний ланцюжок',de:'Brotkrumennavigation',es:'Migas de pan'}[locale]);
    expect(template).toContain('label={pageCopy.breadcrumbs}');
  });
  it('the eleven German translations cover exactly 42 existing questions', () => {
    expect(faqTranslated.reduce((n,id)=>n+nativeQuestions[id].length,0)).toBe(42);
    expect(before.records).toHaveLength(80);
  });
});

describe('independent examples and specific current model boundaries behind the copy', () => {
  it('2560×1080 reduces by GCD 40 to 64:27, not 64:9 or the marketing name 21:9', () => {
    expect(2560 / 40).toBe(64); expect(1080 / 40).toBe(27);
    expect(64 * 1080).toBe(27 * 2560);
    const reduced = aspectRatio({ mode:'reduce', width:2560, height:1080 });
    expect(reduced.primary.value).toBe('64:27');
    expect(row(reduced,'Наибольший общий делитель')).toBe('40');
    for (const locale of locales) {
      expect(computers.faq[locale][3].q).toContain('64:27');
      if (locale === 'de') expect(computers.faq[locale][3].a).toContain('40');
    }
  });
  it('the loan includes an entered fee: zero-interest 1000 plus 100 is total 1100', () => {
    const result = calcCredit({ amount:1000,term:1,termUnit:'months',rate:0,type:'annuity',oneTimeFee:100 });
    expect(row(result,'Общая сумма выплат')).toBe('1 100 ₽');
    expect(row(result,'Разовая комиссия')).toBe('100 ₽');
    expect(finance.faq.ru[3].a).toMatch(/комисс/);
  });
  it('the mortgage includes entered insurance: 12×10 adds 120 to 1000, yielding 1120', () => {
    const result = calcMortgage({ price:1000,downPayment:0,years:1,rate:0,type:'annuity',monthlyInsurance:10 });
    expect(row(result,'Страховка и расходы за срок')).toBe('120 ₽');
    expect(row(result,'Общая стоимость с взносом')).toBe('1 120 ₽');
    expect(finance.faq.ru[3].a).toMatch(/страхов/);
  });
  it('ROI 200 on 100 is 100% without extra cost, but extra 25 changes it to 60%', () => {
    expect(roi({ received:200,invested:100 }).primary.value).toBe('100,00 %');
    expect(roi({ received:200,invested:100,extra:25 }).primary.value).toBe('60,00 %');
    for(const locale of locales) expect(business.faq[locale][locale === 'ru' ? 3 : 2].a).toContain('200');
  });
  it('GPA accepts numeric grades on a five-point scale without converting them to percentages', () => {
    expect(gpa({ grades:'5\n3' }).primary.value).toBe('4');
    expect(gpa({ grades:'A\nB' }).primary.value).toBe('—');
    expect(education.faq.en[0].a).toContain('five-point scale');
  });
  it('20 mA and 0.02 A both give a 150-ohm LED resistor; the unit selector is real', () => {
    expect(led({ supplyVoltage:5,forwardVoltage:2,current:20,currentUnit:'ma' }).primary.value).toBe('150 Ом');
    expect(led({ supplyVoltage:5,forwardVoltage:2,current:0.02,currentUnit:'a' }).primary.value).toBe('150 Ом');
    expect(ledDefinition.presentation.fields.find(f=>f.name==='currentUnit')?.options?.map(x=>x.value)).toEqual(['ma','a']);
    expect(electronics.faq.de[1].a).toContain('20 mA');
    expect(electronics.faq.de[1].a).toContain('0,02 A');
  });
  it('power-to-weight metric PS/kW differs from the quarter-mile mechanical hp input', () => {
    expect(powerDefinition.presentation.fields.find(f=>f.name==='powerUnit')?.options?.map(x=>x.value)).toEqual(['ps','kw']);
    expect(quarterDefinition.presentation.fields.find(f=>f.name==='power')?.unit).toBe('hp');
    for(const locale of locales) {
      expect(automotive.faq[locale][0].a).toContain('735');
      expect(automotive.faq[locale][0].a).toContain('hp');
    }
  });
  it('a default tip of 10 is an editable example, rather than a missing value or a regional norm', () => {
    expect(tipDefinition.presentation.fields.find(f=>f.name==='tipPercent')?.defaultValue).toBe(10);
    for(const locale of locales) expect(household.faq[locale][2].a).toContain('10%');
  });
  it('mass-energy and inverse-square have direct fields, not universal inverse modes', () => {
    expect(massDefinition.presentation.fields.map(f=>f.name)).toEqual(['massG']);
    expect(inverseDefinition.presentation.fields.map(f=>f.name)).toEqual(['i1','d1','d2']);
    expect(physics.faq.en[1].a).toContain('Only for quantities');
  });
  it('friction and drag are offered in bounded separate models, with non-SI angle input', () => {
    expect(inclineDefinition.presentation.fields.find(f=>f.name==='mu')).toBeDefined();
    expect(inclineDefinition.presentation.fields.find(f=>f.name==='angle')?.unit).toBe('°');
    expect(terminalDefinition.presentation.fields.map(f=>f.name)).toEqual(['m','a','cd','rho']);
    expect(physics.faq.en[2].a).toContain('inclined plane');
    expect(physics.faq.en[3].a).toContain('°C');
  });
  it('the circle genuinely offers four inverse modes, without a promise for every other shape', () => {
    expect(circleDefinition.presentation.fields.find(f=>f.name==='mode')?.options?.map(x=>x.value)).toEqual(['radius','diameter','circumference','area']);
    expect(geometry.copy.en.longDescription).toContain('a mode offered by the particular tool');
    expect(geometry.faq.en[2].a).toContain('finite precision');
  });
  it('degenerate 1,2,3 sides are rejected by this non-degenerate model, not described as physically absent', () => {
    expect(triangle({ mode:'sss',unit:'m',a:3,b:4,c:5 }).primary.value).toBe('6 м²');
    expect(triangle({ mode:'sss',unit:'m',a:1,b:2,c:3 }).primary.value).toBe('—');
    expect(geometry.faq.en[1].a).toContain('degenerate zero-area');
  });
  it('the dilution contract distinguishes concentration per volume and mass fraction', () => {
    expect(dilutionDefinition.presentation.howItWorks).toContain('аддитивность');
    expect(chemistry.faq.en[0].a).toContain('mass fraction');
    expect(chemistry.faq.en[3].a).toContain('specified final volume');
    expect(chemistry.faq.en[1].a).toContain('25 °C');
    expect(chemistry.faq.de[1].a).toContain('pKw = 14');
  });
  it('the exact unit conventions remain explicit, while numerical output has finite precision', () => {
    for(const locale of locales) {
      expect(converters.faq[locale][2].a.replaceAll(',','.')).toContain('3.785411784');
      expect(converters.faq[locale][2].a.replaceAll(',','.')).toContain('4.54609');
      expect(converters.faq[locale][3].a).not.toEqual(before.records.find(r=>r.id==='converters'&&r.locale===locale)!.sourceFaq[3].a);
    }
  });
});
