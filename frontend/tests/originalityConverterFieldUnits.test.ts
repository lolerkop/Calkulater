import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { getCalculatorById } from '../src/lib/i18n';
import { fieldUnitLabel } from '../src/lib/fieldUnitLabel';
import { selectedUnitConverterIds, withSelectedConverterInputUnit } from '../src/lib/converterFieldUnits';
import { FieldRenderer } from '../src/components/islands/calculator/fields';
import CalculatorIsland from '../src/components/islands/CalculatorIsland';
import { contextualField as currencyField } from '../src/calculators/currency-exchange-fee/contextualField';
import { definition as currency } from '../src/calculators/currency-exchange-fee/definition';
import type { Field } from '../src/lib/types';

// This independent inventory is the reviewed scope, not a prefix-based inference.
const ids = [
  'convert-angle', 'convert-area', 'convert-cooking-volume', 'convert-data-rate',
  'convert-density', 'convert-digital', 'convert-energy', 'convert-flow',
  'convert-force', 'convert-frequency', 'convert-illuminance', 'convert-length',
  'convert-mass', 'convert-power', 'convert-pressure', 'convert-speed',
  'convert-temperature', 'convert-time', 'convert-torque', 'convert-volume',
  'convert-fuel-economy', 'convert-radiation',
] as const;
const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const expectedCopy = {
  ru: ['в выбранной исходной единице', 'Единица ввода'],
  en: ['in the selected source unit', 'Input unit'],
  uk: ['у вибраній початковій одиниці', 'Одиниця введення'],
  de: ['in der gewählten Ausgangseinheit', 'Eingabeeinheit'],
  es: ['en la unidad de origen seleccionada', 'Unidad de entrada'],
};
const dummyCompute = () => ({ primary: { label: 'Result', value: '—' }, secondary: [] });
const htmlText = (text: string) => renderToStaticMarkup(createElement('span', null, text)).replace(/^<span>|<\/span>$/g, '');

describe('all20 monetary-converter pages describe source-currency amounts', () => {
  const currencyIds = ['currency-converter', 'usd-to-eur', 'eur-to-mdl', 'usd-to-mdl'] as const;
  const selectedCurrency = {
    ru: 'в выбранной исходной валюте', en: 'in the selected source currency',
    uk: 'у вибраній початковій валюті', de: 'in der gewählten Ausgangswährung',
    es: 'en la divisa de origen seleccionada',
  };
  for (const id of currencyIds) for (const locale of locales) {
    it(`${id}/${locale}: actual input unit follows the selectable or locked source currency`, () => {
      const page = getCalculatorById(id, locale)!;
      const before = JSON.stringify(page.fields);
      const amount = page.fields.find(field => field.name === 'amount')!;
      const from = page.fields.find(field => field.name === 'from')!;
      expect(amount.type).toBe('number');
      expect(amount.unit).toBeUndefined();
      expect(from.type).toBe('select');
      const expected = id === 'currency-converter' ? selectedCurrency[locale] : id === 'eur-to-mdl' ? 'EUR' : 'USD';
      if (id === 'currency-converter') {
        expect(from.readOnly).not.toBe(true);
        expect(from.options!.length).toBeGreaterThan(1);
      } else {
        expect(from.readOnly).toBe(true);
        expect(from.defaultValue).toBe(expected);
      }
      expect(fieldUnitLabel(amount, locale, id)).toBe(expected);
      expect(withSelectedConverterInputUnit(id, amount, page.fields, { from: 'GBP' }, locale)).toBe(amount);
      expect(JSON.stringify(page.fields)).toBe(before);
    });
  }
  it('does not change explicit units, other fields/types, other tools or prototype-like IDs', () => {
    const amount: Field = { name: 'amount', label: 'Amount', type: 'number' };
    expect(fieldUnitLabel({ ...amount, unit: '€' }, 'en', 'usd-to-eur')).toBe('€');
    expect(fieldUnitLabel({ ...amount, name: 'quantity' }, 'en', 'currency-converter')).toBe('unitless');
    expect(fieldUnitLabel({ ...amount, type: 'select' }, 'en', 'currency-converter')).toBe('list option');
    expect(fieldUnitLabel(amount, 'fr', 'currency-converter')).toBe(selectedCurrency.en);
    for (const id of ['currency-exchange-fee', 'currency-unreviewed', 'constructor', '__proto__']) {
      expect(fieldUnitLabel(amount, 'en', id)).toBe(id === 'currency-exchange-fee' ? 'foreign-currency units when selling; payment-currency units when buying' : 'unitless');
    }
  });
});

describe('the 110 reviewed converter pages describe selected input units honestly', () => {
  it('keeps the exact reviewed allowlist of22 IDs', () => {
    expect(selectedUnitConverterIds).toEqual(ids);
    expect(new Set(selectedUnitConverterIds).size).toBe(22);
  });

  for (const id of ids) for (const locale of locales) {
    it(`${id}/${locale}: static description, actual source options, SSR help and accessibility`, () => {
      const page = getCalculatorById(id, locale)!;
      const before = JSON.stringify(page.fields);
      const value = page.fields.find(field => field.name === 'value')!;
      const source = page.fields.find(field => field.name === (id === 'convert-fuel-economy' ? 'fromUnit' : 'from'))!;
      expect(value.type).toBe('number');
      expect(value.unit).toBeUndefined();
      expect(source.type).toBe('select');
      expect(source.options?.length).toBeGreaterThan(1);
      expect(fieldUnitLabel(value, locale, id)).toBe(expectedCopy[locale][0]);

      const defaults = Object.fromEntries(page.fields.map(field => [field.name, field.defaultValue]));
      const defaultOption = source.options!.find(option => option.value === source.defaultValue)!;
      expect(defaultOption).toBeDefined();
      const initial = withSelectedConverterInputUnit(id, value, page.fields, {}, locale);
      expect(initial.help).toBe(`${expectedCopy[locale][1]}: ${defaultOption.label}`);

      // Exercise the actual island call site, not just the pure helper.
      const islandHtml = renderToStaticMarkup(createElement(CalculatorIsland, { calc: page, locale, runtime: { compute: dummyCompute } }));
      expect(islandHtml).toContain(htmlText(initial.help!));
      expect(islandHtml).toMatch(/id="f-value"[^>]*aria-describedby="f-value-help"/);

      // All supported source selections keep their localized conventions,
      // including IEC prefixes, US/imperial measures and dose units.
      for (const option of source.options!) {
        const next = withSelectedConverterInputUnit(id, value, page.fields, { ...defaults, [source.name]: option.value }, locale);
        expect(next.help).toBe(`${expectedCopy[locale][1]}: ${option.label}`);
        expect(next.label).toBe(value.label);
        expect(next.unit).toBeUndefined();
        const html = renderToStaticMarkup(createElement(FieldRenderer, { field: next, value: value.defaultValue!, locale, onChange: () => {} }));
        expect(html).toContain(htmlText(next.help!));
        expect(html).toMatch(/id="f-value"[^>]*aria-describedby="f-value-help"/);
        expect(html).toContain('id="f-value-help"');
      }
      for (const invalid of ['unknown', '', 'constructor', true, null, 0]) {
        expect(withSelectedConverterInputUnit(id, value, page.fields, { ...defaults, [source.name]: invalid }, locale)).toBe(value);
      }
      expect(JSON.stringify(page.fields)).toBe(before);
    });
  }
});

describe('scope and pre-existing field semantics remain intact', () => {
  const value: Field = { name: 'value', label: 'Value', type: 'number', defaultValue: 1 };
  const source: Field = { name: 'from', label: 'From', type: 'select', defaultValue: 'lx', options: [{ value: 'lx', label: 'Lux (lx)' }] };

  it.each(['convert-cooking-weight', 'currency-exchange-fee', 'convert-unreviewed', 'constructor', '__proto__'])('%s is not inferred to be a reviewed source-unit form', id => {
    expect(fieldUnitLabel(value, 'en', id)).toBe(id === 'convert-cooking-weight' ? 'g or selected volume unit, according to direction' : 'unitless');
    expect(withSelectedConverterInputUnit(id, value, [value, source], { from: 'lx' }, 'en')).toBe(value);
  });
  it('preserves an explicit fixed unit, a non-value number, and other field types', () => {
    const fixed = { ...value, unit: '%' };
    expect(fieldUnitLabel(fixed, 'en', 'convert-illuminance')).toBe('%');
    expect(withSelectedConverterInputUnit('convert-illuminance', fixed, [fixed, source], { from: 'lx' }, 'en')).toBe(fixed);
    const other = { ...value, name: 'quantity' };
    expect(fieldUnitLabel(other, 'en', 'convert-illuminance')).toBe('unitless');
    expect(withSelectedConverterInputUnit('convert-illuminance', other, [other, source], { from: 'lx' }, 'en')).toBe(other);
    expect(fieldUnitLabel(source, 'en', 'convert-illuminance')).toBe('list option');
  });
  it('preserves existing help and does not invent a unit when source data are missing', () => {
    const explained = { ...value, help: 'Use the measured value.' };
    expect(withSelectedConverterInputUnit('convert-illuminance', explained, [explained, source], { from: 'lx' }, 'en').help).toBe('Use the measured value.\nInput unit: Lux (lx)');
    expect(withSelectedConverterInputUnit('convert-illuminance', value, [value], {}, 'en')).toBe(value);
  });

  for (const locale of locales) it(`${locale}: currency-exchange-fee contextual labels and units survive the island wrapper`, () => {
    const page = getCalculatorById(currency.id, locale)!;
    const expected = {
      ru: ['Сумма продаваемой валюты', 'Бюджет покупки', 'ед. валюты', '₽'],
      en: ['Foreign currency to sell', 'Purchase budget', 'currency units', '$'],
      uk: ['Сума валюти для продажу', 'Бюджет купівлі', 'од. валюти', '₴'],
      de: ['Zu verkaufende Fremdwährung', 'Budget für den Kauf', 'Währungseinheiten', '€'],
      es: ['Divisa que vas a vender', 'Presupuesto de compra', 'unidades de divisa', '€'],
    }[locale];
    for (const [direction, index] of [['sell', 0], ['buy', 1]] as const) {
      const fields = page.fields.map(field => field.name === 'direction' ? { ...field, defaultValue: direction } : field);
      const values = Object.fromEntries(fields.map(field => [field.name, field.defaultValue])) as Record<string, string | number | boolean>;
      const amount = fields.find(field => field.name === 'amount')!;
      const own = currencyField(amount, values, locale);
      const wrapped = withSelectedConverterInputUnit(currency.id, own, fields, values, locale);
      expect(wrapped).toBe(own);
      expect(wrapped.label).toBe(expected[index]);
      expect(wrapped.unit).toBe(expected[index + 2]);
      const html = renderToStaticMarkup(createElement(CalculatorIsland, { calc: { ...page, fields }, locale, runtime: { compute: currency.compute, contextualField: currencyField } }));
      expect(html).toContain(htmlText(expected[index]));
      expect(html).toContain(htmlText(` (${expected[index + 2]})`));
      expect(html).not.toContain('Input unit:');
    }
  });
});
