import { describe, expect, it } from 'vitest';
import { definition as concentration } from '../src/calculators/solution-concentration/definition';
import { definition as molarity } from '../src/calculators/molarity/definition';
import { definition as moles } from '../src/calculators/moles/definition';
import { definition as ph } from '../src/calculators/ph-poh/definition';
import { definition as radiation } from '../src/calculators/convert-radiation/definition';
import { localization as concentrationLocalization } from '../src/calculators/solution-concentration/localization';
import { localization as molarityLocalization } from '../src/calculators/molarity/localization';
import { localization as molesLocalization } from '../src/calculators/moles/localization';
import { localization as phLocalization } from '../src/calculators/ph-poh/localization';
import { localization as radiationLocalization } from '../src/calculators/convert-radiation/localization';
import { isCompleteCalculatorCopy, type CalculatorDefinitionV2 } from '../src/lib/platform/types';
import { getChemistryWave4MethodSources } from '../src/data/chemistryWave4MethodSources';

const tools = [concentration, molarity, moles, ph, radiation];
const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const invalid = [true, false, undefined, '', ' ', 'abc', '2 apples', '1,2,3', NaN, Infinity, -Infinity];
const failure = (result: ReturnType<typeof molarity.compute>) => {
  expect(result.primary.value).toBe('—');
  expect(result.secondary?.some(row => row.label === 'Проверьте данные' && row.accent === 'red')).toBe(true);
  expect(JSON.stringify(result)).not.toMatch(/Infinity|NaN/);
};
const primary = (tool: CalculatorDefinitionV2, inputs: Parameters<typeof tool.compute>[0], expected: string) => expect(tool.compute(inputs).primary.value).toBe(expected);

describe('active inputs and modes', () => {
  const scenarios: { tool: CalculatorDefinitionV2; input: Parameters<typeof molarity.compute>[0]; active: string[] }[] = [
    { tool: concentration, input: { mode: 'ww', solute: 25, solution: 500 }, active: ['solute', 'solution'] },
    { tool: concentration, input: { mode: 'wv', solute: 3, volume: 100 }, active: ['solute', 'volume'] },
    { tool: concentration, input: { mode: 'ppm', solute: 25, solution: 500 }, active: ['solute', 'solution'] },
    { tool: molarity, input: { mode: 'moles', moles: 0.5, volume: 2 }, active: ['moles', 'volume'] },
    { tool: molarity, input: { mode: 'mass', mass: 58.44, molarMass: 58.44, volume: 0.5 }, active: ['mass', 'molarMass', 'volume'] },
    { tool: moles, input: { mode: 'mass', mass: 18, molarMass: 18.02 }, active: ['mass', 'molarMass'] },
    { tool: moles, input: { mode: 'amount', moles: 1, molarMass: 18.02 }, active: ['moles', 'molarMass'] },
    { tool: ph, input: { mode: 'fromH', h: 0.001 }, active: ['h'] },
    { tool: ph, input: { mode: 'fromPh', ph: 8.4 }, active: ['ph'] },
    { tool: radiation, input: { value: 1, from: 'mSv', to: 'uSv' }, active: ['value'] },
  ];
  for (const scenario of scenarios) for (const field of scenario.active) {
    it.each(invalid)(`${scenario.tool.id}/${scenario.input.mode ?? 'units'}/${field}: rejects %s`, value => failure(scenario.tool.compute({ ...scenario.input, [field]: value })));
    if (field !== 'ph') it(`${scenario.tool.id}/${scenario.input.mode ?? 'units'}/${field}: numeric domain`, () => {
      const zeroAllowed = scenario.tool === radiation || (scenario.tool === concentration && field === 'solute')
        || ((scenario.tool === molarity || scenario.tool === moles) && (field === 'mass' || field === 'moles'));
      const zero = scenario.tool.compute({ ...scenario.input, [field]: 0 });
      if (zeroAllowed) expect(zero.primary.value).not.toBe('—');
      else failure(zero);
      failure(scenario.tool.compute({ ...scenario.input, [field]: -1 }));
    });
  }
  it('ignores inactive fields in every supported visible mode', () => {
    primary(concentration, { mode: 'ww', solute: 25, solution: 500, volume: true }, '5,00%');
    primary(concentration, { mode: 'wv', solute: 3, volume: 100, solution: true }, '3,00%');
    primary(molarity, { mode: 'moles', moles: 0.5, volume: 2, mass: true, molarMass: true }, '0,25 моль/л');
    primary(molarity, { mode: 'mass', mass: 58.44, molarMass: 58.44, volume: 0.5, moles: true }, '2 моль/л');
    primary(moles, { mode: 'mass', mass: 18.02, molarMass: 18.02, moles: true }, '1 моль');
    primary(moles, { mode: 'amount', moles: 1, molarMass: 18.02, mass: true }, '18,02 г');
    primary(ph, { mode: 'fromH', h: 0.001, ph: true }, '3,00');
    primary(ph, { mode: 'fromPh', ph: 7, h: true }, '1,000·10^-7 моль/л');
  });
  it.each(['bad', '', true, false, 'constructor', '__proto__'])('rejects unknown mode %s', mode => {
    for (const tool of [concentration, molarity, moles, ph]) failure(tool.compute({ mode, solute: 25, solution: 500, moles: 1, mass: 18, molarMass: 18.02, volume: 2, h: 0.001, ph: 7 }));
  });
});

describe('mass-based concentration versus mass per volume', () => {
  it('checks 25/500, 500−25 and 3g/100mL independently', () => {
    const ww = concentration.compute({ mode: 'ww', solute: 25, solution: 500 });
    expect(ww.primary.value).toBe('5,00%'); expect(ww.secondary?.[0].value).toBe('475,00 г'); expect(ww.secondary?.[1].value).toBe('50 000,00 ppm');
    const wv = concentration.compute({ mode: 'wv', solute: 3, volume: 100 });
    expect(wv.primary.value).toBe('3,00%'); expect(wv.secondary?.[0].value).toBe('30,00 г/л');
  });
  it('applies the100% limit to mass fraction, while retaining w/v above100', () => {
    failure(concentration.compute({ mode: 'ww', solute: 120, solution: 100 }));
    primary(concentration, { mode: 'wv', solute: 120, volume: 100 }, '120,00%');
    primary(concentration, { mode: 'wv', solute: 300, volume: 100 }, '300,00%');
    expect(concentration.compute({ mode: 'ww', solute: 100, solution: 100 }).secondary?.[0].value).toBe('0,00 г');
  });
  it('preserves the existing API ppm mode and two public choices', () => {
    primary(concentration, { mode: 'ppm', solute: 1, solution: 1000 }, '1 000,00 ppm');
    expect(concentration.presentation.fields.find(field => field.name === 'mode')?.options?.map(option => option.value)).toEqual(['ww', 'wv']);
  });
  it('preserves tiny nonzero values and rejects actual loss/overflow', () => {
    primary(concentration, { mode: 'ww', solute: 1e-9, solution: 1 }, '1,000·10^-7%');
    primary(concentration, { mode: 'wv', solute: 1e308, volume: 1e308 }, '100,00%');
    const rescued = concentration.compute({ mode: 'ww', solute: 1e-320, solution: 1e5 });
    expect(rescued.primary.value).not.toBe('0,00%'); expect(rescued.primary.value).not.toBe('—');
    failure(concentration.compute({ mode: 'wv', solute: 1e308, volume: 1e-308 }));
    failure(concentration.compute({ mode: 'ww', solute: 1e-300, solution: 1e300 }));
    primary(concentration, { solute: '2,5', solution: '50' }, '5,00%');
  });
  it('keeps exact zero in both public modes and the legacy ppm API mode', () => {
    const ww = concentration.compute({ mode: 'ww', solute: 0, solution: 500 });
    expect(ww.primary.value).toBe('0,00%'); expect(ww.secondary?.[0].value).toBe('500,00 г'); expect(ww.secondary?.[1].value).toBe('0,00 ppm');
    const wv = concentration.compute({ mode: 'wv', solute: 0, volume: 100 });
    expect(wv.primary.value).toBe('0,00%'); expect(wv.secondary?.[0].value).toBe('0,00 г/л');
    primary(concentration, { mode: 'ppm', solute: 0, solution: 500 }, '0,00 ppm');
    failure(concentration.compute({ mode: 'ww', solute: 0, solution: 0 }));
    failure(concentration.compute({ mode: 'wv', solute: 0, volume: 0 }));
  });
});

describe('molarity preserves dimensions and finite ratios', () => {
  it.each([['ml', 500], ['l', 0.5], ['m3', 0.0005]] as const)('one mole in %s %s gives2mol/L', (volumeUnit, volume) => primary(molarity, { moles: 1, volume, volumeUnit }, '2 моль/л'));
  it('does not lose C when conversion of the displayed volume overflows', () => {
    const result = molarity.compute({ moles: 1e308, volume: 1e308, volumeUnit: 'm3' });
    expect(result.primary.value).toBe('0,001 моль/л'); expect(result.secondary?.[1].value).toBe('1,000·10^308 м³');
  });
  it('rescues tiny converted volumes and shows nonzero small concentrations', () => {
    primary(molarity, { moles: 1e-300, volume: 1e-300, volumeUnit: 'ml' }, '1 000 моль/л');
    primary(molarity, { moles: 1e-8, volume: 1 }, '1,000·10^-8 моль/л');
    const result = molarity.compute({ moles: 5e-324, volume: 5e-324, volumeUnit: 'ml' });
    expect(result.primary.value).toBe('1 000 моль/л'); expect(result.secondary?.[1].value).toBe('4,941·10^-324 мл');
  });
  it.each(['bad', '', true, 'constructor', '__proto__'])('rejects unit %s', volumeUnit => failure(molarity.compute({ moles: 1, volume: 1, volumeUnit })));
  it('rejects unrepresentable amount or concentration even when another quantity is finite', () => {
    failure(molarity.compute({ mode: 'mass', mass: 1e-300, molarMass: 1e300, volume: 1 }));
    failure(molarity.compute({ moles: 1e308, volume: 5e-324 }));
    failure(molarity.compute({ mode: 'mass', mass: 1e308, molarMass: 1e-100, volume: 1e308, volumeUnit: 'm3' }));
    primary(molarity, { mode: 'mass', mass: '58,44', molarMass: '58,44', volume: '500', volumeUnit: 'ml' }, '2 моль/л');
  });
  it('keeps zero moles and zero mass while requiring positive volume and molar mass', () => {
    primary(molarity, { moles: 0, volume: 1e308, volumeUnit: 'm3' }, '0 моль/л');
    const mass = molarity.compute({ mode: 'mass', mass: 0, molarMass: 58.44, volume: 500, volumeUnit: 'ml' });
    expect(mass.primary.value).toBe('0 моль/л'); expect(mass.secondary?.[0].value).toBe('0 моль');
    failure(molarity.compute({ moles: 0, volume: 0 }));
    failure(molarity.compute({ mode: 'mass', mass: 0, molarMass: 0, volume: 1 }));
    expect(molarity.compute({ moles: -0, volume: 1 }).secondary?.[0].value).toBe('0 моль');
  });
});

describe('moles and the Avogadro product', () => {
  it('checks both directions and18/18.02', () => {
    primary(moles, { mass: 18, molarMass: 18.02 }, '0,9989 моль');
    const amount = moles.compute({ mode: 'amount', moles: 1, molarMass: 18.02 });
    expect(amount.primary.value).toBe('18,02 г'); expect(amount.secondary?.[1].value).toBe('6,022·10^23');
    primary(moles, { mass: 1e308, molarMass: 1e308 }, '1 моль');
    primary(moles, { mass: '18,02', molarMass: '18,02' }, '1 моль');
  });
  it('keeps representable extremes finite and nonzero', () => {
    const small = moles.compute({ mass: 1e-300, molarMass: 1 });
    expect(small.primary.value).toBe('1,000·10^-300 моль'); expect(small.secondary?.[0].value).toBe('6,022·10^-277');
    const large = moles.compute({ mode: 'amount', moles: 1e280, molarMass: 1e-280 });
    expect(large.primary.value).toBe('1 г'); expect(large.secondary?.[1].value).toBe('6,022·10^303');
  });
  it('fails when any displayed mass, amount or Avogadro product is unrepresentable', () => {
    for (const inputs of [
      { mode: 'amount', moles: 1e300, molarMass: 1e-300 }, { mode: 'amount', moles: 1e280, molarMass: 1e100 },
      { mode: 'amount', moles: 5e-324, molarMass: 0.1 }, { mass: 1e-300, molarMass: 1e300 }, { mass: 1e308, molarMass: 1e-308 },
    ]) failure(moles.compute(inputs));
  });
  it('keeps exact zero mass and amount with zero particles, including signed zero', () => {
    const mass = moles.compute({ mass: 0, molarMass: 18.02 });
    expect(mass.primary.value).toBe('0 моль'); expect(mass.secondary?.[0].value).toBe('0');
    const amount = moles.compute({ mode: 'amount', moles: -0, molarMass: 18.02 });
    expect(amount.primary.value).toBe('0 г'); expect(amount.secondary?.[1].value).toBe('0');
    failure(moles.compute({ mass: 0, molarMass: 0 }));
  });
});

describe('pH product bounds and the25°C assumption', () => {
  it.each([[0, '1 моль/л', '14,00'], [7, '1,000·10^-7 моль/л', '7,00'], [14, '1,000·10^-14 моль/л', '0,00']] as const)('retains endpoint pH%s', (value, concentrationText, poh) => {
    const result = ph.compute({ mode: 'fromPh', ph: value });
    expect(result.primary.value).toBe(concentrationText); expect(result.secondary?.[1].value).toBe(poh);
  });
  it('keeps logarithmic examples, neutral classification and zero without negative sign', () => {
    primary(ph, { h: 1 }, '0,00'); primary(ph, { h: 0.001 }, '3,00'); primary(ph, { mode: 'fromPh', ph: '8,4' }, '3,981·10^-9 моль/л');
    expect(ph.compute({ mode: 'fromPh', ph: -0 }).secondary?.[0].value).toBe('0,00');
    expect(ph.compute({ mode: 'fromPh', ph: 8.4 }).secondary?.[1].value).toBe('5,60');
    expect(ph.compute({ h: 1e-7 }).secondary?.[2].value).toBe('нейтральная');
  });
  it('rejects concentration and pH outside the declared product domain', () => {
    for (const value of [-1, 14.01, 1e308]) failure(ph.compute({ mode: 'fromPh', ph: value }));
    for (const h of [0, 1.001, 1e-15, 1e308]) failure(ph.compute({ h }));
  });
});

describe('radiation changes units without changing quantity', () => {
  for (const unit of ['Sv', 'mSv', 'uSv', 'nSv', 'rem', 'mrem']) it(`retains identity and zero in${unit}`, () => {
    primary(radiation, { value: 4.5, from: unit, to: unit }, '4,5'); primary(radiation, { value: 0, from: unit, to: 'Sv' }, '0');
  });
  it.each([['mSv', 'uSv', 1, '1 000'], ['mrem', 'mSv', 250, '2,5'], ['nSv', 'Sv', 1, '1,000·10^-9'], ['Sv', 'rem', 0.01, '1'], ['uSv', 'mrem', 20, '2'], ['Sv', 'Sv', 1e308, '1,000·10^308']] as const)('independent conversion%s→%s at%s', (from, to, value, answer) => primary(radiation, { value, from, to }, answer));
  it('keeps the tiny ratio and fails on true loss or overflow', () => {
    expect(radiation.compute({ value: 1, from: 'nSv', to: 'Sv' }).secondary?.[1].value).toBe('1,000·10^-9');
    failure(radiation.compute({ value: 5e-324, from: 'nSv', to: 'Sv' })); failure(radiation.compute({ value: 1e308, from: 'Sv', to: 'rem' }));
    primary(radiation, { value: '1,5' }, '1 500');
  });
  it.each(['Gy', 'Bq', 'uSv/h', 'bad', '', true, 'constructor', '__proto__'])('rejects unsupported quantity/unit%s even at zero', unit => {
    failure(radiation.compute({ value: 0, from: unit, to: 'Sv' })); failure(radiation.compute({ value: 0, from: 'Sv', to: unit }));
  });
});

describe('25 authored locale records and reference contracts', () => {
  for (const tool of tools) it.each(locales)(`${tool.id}/%s: complete native subject copy`, locale => {
    const copy = locale === 'ru' ? tool.presentation : tool.copy![locale];
    expect(isCompleteCalculatorCopy(copy)).toBe(true); if (!isCompleteCalculatorCopy(copy)) throw new Error('Full copy required');
    expect(copy.howToUse.length).toBeGreaterThanOrEqual(3); expect(copy.faq.length).toBeGreaterThanOrEqual(4); expect(copy.disclaimer?.length).toBeGreaterThan(35);
    const body = JSON.stringify([copy.longDescription, copy.howItWorks, copy.example, copy.howToUse, copy.faq, copy.disclaimer]);
    if (['en', 'de', 'es'].includes(locale)) expect(body).not.toMatch(/[а-яёіїєґ]/i);
    if (tool === concentration) { expect(body).toContain('ppm'); expect(body).toMatch(/m\/v|m\/V|w\/v/); expect(body).toContain('100'); }
    if (tool === molarity) { expect(body).toContain('n/V'); expect(body).toContain('1000'); expect(body).toContain('500'); }
    if (tool === moles) { expect(body).toMatch(/6[.,]02214076/); expect(body).toMatch(/18[.,]02/); expect(body).toMatch(/0[.,]9989/); }
    if (tool === ph) { expect(body).toContain('a(H⁺)'); expect(body).toContain('pKw = 14'); expect(body).toContain('25 °C'); }
    if (tool === radiation) { expect(body).toContain('Gy'); expect(body).toContain('Bq'); expect(body).toContain('1000'); expect(body).toContain('10⁻⁹'); }
  });
  it('preserves all declared references and published examples', () => {
    for (const tool of tools) {
      for (const ref of tool.referenceCases ?? []) {
        const result = tool.compute(ref.inputs); expect(result.primary.value, `${tool.id}/${ref.name}`).toBe(ref.expectPrimary);
        for (const expected of ref.expectSecondary ?? []) expect(result.secondary).toContainEqual(expect.objectContaining(expected));
      }
      const example = tool.publishedExample!; const actual = tool.compute(example.inputs).primary.value.replace(/\s/g, ' ');
      expect(example.expected.map(text => text.replace(/\s/g, ' ')), tool.id).toContain(actual);
    }
  });
  it.each(['en', 'uk', 'de', 'es'] as const)('owns emitted new errors in%s', locale => {
    const tables = [concentrationLocalization, molarityLocalization, molesLocalization, phLocalization, radiationLocalization];
    const keys = [
      ['Неизвестная форма концентрации', 'Масса вещества должна быть конечным неотрицательным числом', 'Объём раствора должен быть конечным числом больше нуля', 'Масса раствора должна быть конечным числом больше нуля', 'Результат вне допустимого диапазона'],
      ['Неизвестный режим расчёта', 'Неизвестная единица объёма', 'Объём должен быть конечным числом больше нуля', 'Масса должна быть конечным неотрицательным числом', 'Молярная масса должна быть конечным числом больше нуля', 'Количество вещества должно быть конечным неотрицательным числом', 'Результат вне допустимого диапазона'],
      ['Неизвестный режим расчёта', 'Масса должна быть конечным неотрицательным числом', 'Молярная масса должна быть конечным числом больше нуля', 'Количество вещества должно быть конечным неотрицательным числом', 'Результат вне допустимого диапазона'],
      ['Неизвестный режим расчёта', 'Введите конечное число'], ['Введите конечное число', 'Результат вне допустимого диапазона'],
    ];
    tables.forEach((table, index) => keys[index].forEach(key => { expect(table[locale]?.values?.[key]).toBeTruthy(); expect(table[locale]?.values?.[key]).not.toBe(key); }));
    expect(molarityLocalization[locale]?.values?.[' м³']).toBeTruthy();
  });
});

describe('bounded primary sources', () => {
  it.each(locales)('%s: source labels support only the declared definitions', locale => {
    expect(getChemistryWave4MethodSources('solution-concentration', locale).map(source => source.href)).toEqual(['https://goldbook.iupac.org/terms/view/M03722', 'https://goldbook.iupac.org/terms/view/M03713']);
    expect(getChemistryWave4MethodSources('molarity', locale)[0].href).toBe('https://goldbook.iupac.org/terms/view/A00295');
    const acidity = getChemistryWave4MethodSources('ph-poh', locale)[0]; expect(acidity.href).toBe('https://goldbook.iupac.org/terms/view/P04524'); expect(acidity.label).toContain('H⁺'); expect(acidity.label).not.toContain('pKw');
    const entities = getChemistryWave4MethodSources('moles', locale)[0]; expect(entities.href).toBe('https://www.bipm.org/documents/d/guest/si-brochure-9-en-pdf'); expect(entities.label).toMatch(/6[.,]02214076/);
    const dose = getChemistryWave4MethodSources('convert-radiation', locale)[0]; expect(dose.href).toMatch(/^https:\/\/nucleus\.iaea\.org\//); expect(dose.label).toContain('GSR Part 3'); expect(dose.label).toMatch(/1 rem = 0[.,]01 Sv/);
    for (const tool of tools) expect(getChemistryWave4MethodSources(tool.id, locale).map(source => source.label).join(' ')).not.toMatch(/VERIFIED|guaranteed|certified/i);
  });
  it('has no decorative sources for unrelated IDs and keeps English fallback', () => {
    for (const id of ['dilution', 'molar-mass', 'constructor', '__proto__']) expect(getChemistryWave4MethodSources(id, 'en')).toEqual([]);
    expect(getChemistryWave4MethodSources('moles', 'fr')).toEqual(getChemistryWave4MethodSources('moles', 'en'));
  });
});
