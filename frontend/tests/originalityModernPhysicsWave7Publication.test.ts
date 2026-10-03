import { describe, expect, it } from 'vitest';
import { getCalculatorById } from '../src/lib/i18n';
import { getCalculatorEditorial } from '../src/data/calculatorEditorial';
import { getModernPhysicsWave7MethodSources } from '../src/data/modernPhysicsWave7MethodSources';
import { isCompleteCalculatorCopy } from '../src/lib/platform/types';
import { fieldUnitLabel } from '../src/lib/fieldUnitLabel';
import { isFieldVisible } from '../src/lib/fieldVisibility';
import { definition as photon } from '../src/calculators/photon-energy/definition';
import { definition as deBroglie } from '../src/calculators/de-broglie/definition';
import { definition as mass } from '../src/calculators/mass-energy/definition';
import { definition as relativity } from '../src/calculators/relativity-dilation/definition';
import { definition as coulomb } from '../src/calculators/coulomb/definition';
import { definition as half } from '../src/calculators/half-life/definition';
import { definition as inverse } from '../src/calculators/inverse-square/definition';
import { definition as wave } from '../src/calculators/wave/definition';

// Effective publication gate. Run only after root wires sources/fullcopy
// precedence and regenerates. Authored source is not assumed to be the final
// published value: every body field, tip, route and unit below is compared with
// the actual getCalculatorById output. This is AI/automated QA, not human review.
const tools = [photon, deBroglie, mass, relativity, coulomb, half, inverse, wave];
const locales = ['ru','en','uk','de','es'] as const;
const routes = {
  "photon-energy": {
    "ru": "/ru/physics/energiya-fotona/",
    "en": "/en/physics/photon-energy/",
    "uk": "/uk/fizyka/energiya-fotona/",
    "de": "/de/physik/photonenenergie-rechner/",
    "es": "/es/fisica/energia-de-un-foton/"
  },
  "de-broglie": {
    "ru": "/ru/physics/dlina-volny-de-broylya/",
    "en": "/en/physics/de-broglie-wavelength/",
    "uk": "/uk/fizyka/dovzhyna-hvyli-de-broylya/",
    "de": "/de/physik/de-broglie-wellenlaenge/",
    "es": "/es/fisica/longitud-de-onda-de-de-broglie/"
  },
  "mass-energy": {
    "ru": "/ru/physics/energiya-pokoya/",
    "en": "/en/physics/mass-energy-equivalence/",
    "uk": "/uk/fizyka/energiya-spokoyu/",
    "de": "/de/physik/e-gleich-mc-quadrat/",
    "es": "/es/fisica/equivalencia-masa-energia/"
  },
  "relativity-dilation": {
    "ru": "/ru/physics/zamedlenie-vremeni/",
    "en": "/en/physics/time-dilation/",
    "uk": "/uk/fizyka/spovilnennya-chasu/",
    "de": "/de/physik/zeitdilatation-rechner/",
    "es": "/es/fisica/dilatacion-del-tiempo/"
  },
  "coulomb": {
    "ru": "/ru/physics/zakon-kulona/",
    "en": "/en/physics/coulombs-law/",
    "uk": "/uk/fizyka/zakon-kulona/",
    "de": "/de/physik/coulombsches-gesetz/",
    "es": "/es/fisica/ley-de-coulomb/"
  },
  "half-life": {
    "ru": "/ru/physics/period-poluraspada/",
    "en": "/en/physics/half-life/",
    "uk": "/uk/fizyka/period-napivrozpadu/",
    "de": "/de/physik/halbwertszeit-rechner/",
    "es": "/es/fisica/periodo-de-semidesintegracion/"
  },
  "inverse-square": {
    "ru": "/ru/physics/zakon-obratnyh-kvadratov/",
    "en": "/en/physics/inverse-square-law/",
    "uk": "/uk/fizyka/zakon-obernenyh-kvadrativ/",
    "de": "/de/physik/abstandsquadratgesetz/",
    "es": "/es/fisica/ley-de-la-inversa-del-cuadrado/"
  },
  "wave": {
    "ru": "/ru/physics/wave-frequency/",
    "en": "/en/physics/wave-frequency-calculator/",
    "uk": "/uk/fizyka/khvylya-chastota/",
    "de": "/de/physik/wellenlaenge-frequenz/",
    "es": "/es/fisica/longitud-de-onda-y-frecuencia/"
  }
} as const;
const unitKeys: Record<string, Record<string,string>> = {
  'photon-energy': { wavelengthNm:'nm' }, 'de-broglie': { mass27:'scaledMass', velocityKmS:'kmps' },
  'mass-energy': { massG:'g' }, 'relativity-dilation': { properTime:'s' },
  coulomb: { q1:'nC', q2:'nC', r:'cm' }, 'half-life': { n0:'g',half:'years',t:'years',left:'g' },
  'inverse-square': { i1:'intensityUnit', d1:'lengthUnit', d2:'lengthUnit' }, wave: { v:'mps',f:'Hz',wavelength:'m' },
};
const units: Record<typeof locales[number], Record<string,string>> = {
  ru:{nm:'нм',scaledMass:'×10⁻²⁷ кг',kmps:'км/с',g:'г',s:'с',nC:'нКл',cm:'см',years:'лет',intensityUnit:'ед. I₁',lengthUnit:'ед. длины',mps:'м/с',Hz:'Гц',m:'м'},
  en:{nm:'nm',scaledMass:'×10⁻²⁷ kg',kmps:'km/s',g:'g',s:'s',nC:'nC',cm:'cm',years:'years',intensityUnit:'units of I₁',lengthUnit:'length unit',mps:'m/s',Hz:'Hz',m:'m'},
  uk:{nm:'нм',scaledMass:'×10⁻²⁷ кг',kmps:'км/с',g:'г',s:'с',nC:'нКл',cm:'см',years:'років',intensityUnit:'од. I₁',lengthUnit:'од. довжини',mps:'м/с',Hz:'Гц',m:'м'},
  de:{nm:'nm',scaledMass:'×10⁻²⁷ kg',kmps:'km/s',g:'g',s:'s',nC:'nC',cm:'cm',years:'Jahre',intensityUnit:'Einheit von I₁',lengthUnit:'Längeneinheit',mps:'m/s',Hz:'Hz',m:'m'},
  es:{nm:'nm',scaledMass:'×10⁻²⁷ kg',kmps:'km/s',g:'g',s:'s',nC:'nC',cm:'cm',years:'años',intensityUnit:'unidad de I₁',lengthUnit:'unidad de longitud',mps:'m/s',Hz:'Hz',m:'m'},
};
const noUnit={ru:'без единицы',en:'unitless',uk:'без одиниці',de:'ohne Einheit',es:'sin unidad'} as const;
// Independent literal model bounds selected from frozen authored paragraphs.
// Form notices remain exact; the source card replaces the generic notice.
const expectedGermanLimitations: Record<string,string> = {
  "photon-energy": "Die Rechnung umfasst weder Quellenleistung noch Bestrahlungsdauer oder eine Bewertung der Wirkung auf Menschen. Gib eine positive Vakuumwellenlänge ein. Bei einer Wellenlänge innerhalb eines Materials wird zusätzlich dessen Brechungsindex benötigt.",
  "de-broglie": "Alle Ergebnisse gehören zur nichtrelativistischen Näherung. Die Geschwindigkeit muss positiv und kleiner als 299792,458 km/s sein; ein zulässiger Eingabewert belegt noch nicht die Genauigkeit der Näherung.",
  "mass-energy": "Die Einheiten erläutern die Größenordnung; sie bestimmen keine aus Brennstoff gewinnbare Strommenge. Für eine Reaktion ist der Massendefekt Δm nötig, für Strom zusätzlich der Umwandlungswirkungsgrad.",
  "relativity-dilation": "Für zwei Ereignisse an derselben bewegten Uhr wird deren Eigenzeitintervall τ zu t=γτ im Inertialsystem, in dem sich die Uhr mit v bewegt. Gravitation, Beschleunigung und der Ablauf einer Reise werden nicht modelliert.",
  "coulomb": "Implementiert sind Punktladungen im Vakuum. Ein homogenes lineares Dielektrikum erfordert εᵣ, dafür gibt es hier kein Eingabefeld.",
  "half-life": "Die Halbwertszeit bleibt konstant, die Ausgangskomponente wird nicht aufgefüllt; Zerfallsprodukte und ihr weiterer Zerfall werden nicht berechnet.",
  "inverse-square": "Betrachtet wird dieselbe Richtung bei unveränderter Abstrahlung, ohne Absorption oder Reflexionen; nahe einer ausgedehnten Quelle kann das Modell ungeeignet sein. Gib keinen dB-Pegel ein: Er ist logarithmisch und darf nicht mit dem quadratischen Abstandsverhältnis multipliziert werden.",
  "wave": "Es gilt die Phasengeschwindigkeit v=fλ; λ=v/f, f=v/λ und T=1/f. Die Gruppengeschwindigkeit eines Wellenpakets kann abweichen und wird hier nicht berechnet."
};
const constants='https://physics.nist.gov/cuu/Constants/Table/allascii.txt';
const open3='https://openstax.org/books/university-physics-volume-3/pages/';
const open2='https://openstax.org/books/university-physics-volume-2/pages/';
const open1='https://openstax.org/books/university-physics-volume-1/pages/';
const expectedSourceUrls: Record<string, readonly string[]> = {
  'photon-energy':[open3+'6-2-photoelectric-effect',constants],
  'de-broglie':[open3+'6-5-de-broglies-matter-waves',constants],
  'mass-energy':[open3+'5-9-relativistic-energy',constants,'https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8'],
  'relativity-dilation':[open3+'5-3-time-dilation',open3+'5-4-length-contraction',constants],
  coulomb:[open2+'5-3-coulombs-law',open2+'5-4-electric-field',open2+'7-1-electric-potential-energy',constants],
  'half-life':[open3+'10-3-radioactive-decay'], 'inverse-square':[open1+'17-3-sound-intensity'],
  wave:[open1+'16-1-traveling-waves',open3+'6-5-de-broglies-matter-waves'],
};
describe('modernphysics8 actual40publication bodies/metadata/units/method sources',()=>{
  for(const tool of tools)for(const locale of locales)it(`${tool.id}/${locale}: complete actual body, native units and bounded sources`,()=>{
    const page=getCalculatorById(tool.id,locale);expect(page).toBeDefined();if(!page)throw new Error('missing public route');
    const authored=locale==='ru'?tool.presentation:tool.copy?.[locale];expect(isCompleteCalculatorCopy(authored)).toBe(true);
    if(!isCompleteCalculatorCopy(authored))throw new Error('incomplete authored body');
    expect(page.fullPath).toBe(routes[tool.id as keyof typeof routes][locale]);
    for(const key of ['name','h1','seoTitle','seoDescription','slug','longDescription','howItWorks','example'] as const)expect(page[key]).toBe(authored[key]);
    // Existing internal metadata guard; no invented Google length criterion.
    expect(page.seoDescription.length).toBeGreaterThanOrEqual(80);expect(page.seoDescription.length).toBeLessThanOrEqual(180);
    expect(page.howToUse).toEqual(authored.howToUse);expect(page.faq).toEqual(authored.faq);
    expect(page.seoContent).toEqual({intro:authored.longDescription,howItWorks:authored.howItWorks,example:authored.example,tips:authored.howToUse.join(' '),faq:authored.faq});
    expect(page.fields.map(field=>field.name)).toEqual(tool.presentation.fields.map(field=>field.name));
    for(const field of page.fields){
      const original=tool.presentation.fields.find(entry=>entry.name===field.name)!;
      expect(field.defaultValue).toBe(original.defaultValue);expect(field.type).toBe(original.type);expect(field.signed).toBe(original.signed);expect(field.showIf).toEqual(original.showIf);
      const key=unitKeys[tool.id][field.name];
      if(key){expect(field.unit).toBe(units[locale][key]);expect(fieldUnitLabel(field,locale,tool.id)).toBe(units[locale][key]);}
      else if(tool.id==='relativity-dilation'&&field.name==='beta'){expect(field.unit).toBeUndefined();expect(fieldUnitLabel(field,locale,tool.id)).toBe(noUnit[locale]);}
    }
    const sources=getModernPhysicsWave7MethodSources(tool.id,locale);
    expect(sources.map(source=>source.href)).toEqual(expectedSourceUrls[tool.id]);
    const editorial=getCalculatorEditorial(page,locale);for(const source of sources){expect(source.label.trim()).not.toBe('');expect(editorial.sources).toContainEqual(source);}
    expect(editorial.method).toBe(authored.howItWorks);expect(editorial.limitation.trim()).not.toBe('');
    if(locale==='de'){
      expect(page.disclaimer).toBe('Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen.');
      expect(editorial.limitation).toContain(expectedGermanLimitations[tool.id]);
      expect(editorial.limitation).not.toMatch(/reference estimates|Orientierungswerte|9[,.]\s*80665/i);
    }
    if(locale==='en'||locale==='de'||locale==='es')expect(sources.map(source=>source.label).join(' ')).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);
  });
});
describe('explicit source and visibility boundaries',()=>{
  it('unknown unreviewed ID creates no decorative sources',()=>expect(getModernPhysicsWave7MethodSources('unreviewed-tool','de')).toEqual([]));
  for(const locale of locales){
    it(`${locale} wave: exactlytwo known numeric fields in each supportedmode`,()=>{
      const page=getCalculatorById('wave',locale)!;
      for(const[mode,names]of[['lambda',['v','f']],['f',['v','wavelength']],['v',['f','wavelength']]]as const)
        expect(page.fields.filter(field=>field.type==='number'&&isFieldVisible(field,{mode})).map(field=>field.name)).toEqual(names);
    });
    it(`${locale} corrected zero intensity quotient and reciprocal period explanations`,()=>{
      const inversePage=getCalculatorById('inverse-square',locale)!;expect(inversePage.howItWorks).toContain('G=(d₁/d₂)²');expect(inversePage.howItWorks).toContain('I₁>0');
      const wavePage=getCalculatorById('wave',locale)!;expect(wavePage.howItWorks).toContain('T=1/f');
      if(locale!=='uk')expect(wavePage.howToUse[0]).toContain('T=1/f');
    });
  }
});
