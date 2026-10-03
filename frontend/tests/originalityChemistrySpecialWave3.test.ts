import { describe, expect, it } from 'vitest';
import { definition as dilution } from '../src/calculators/dilution/definition';
import { definition as cooking } from '../src/calculators/convert-cooking-weight/definition';
import { definition as fuel } from '../src/calculators/convert-fuel-economy/definition';
import { definition as molar } from '../src/calculators/molar-mass/definition';
import { localization as dilutionLocalization } from '../src/calculators/dilution/localization';
import { localization as cookingLocalization } from '../src/calculators/convert-cooking-weight/localization';
import { localization as fuelLocalization } from '../src/calculators/convert-fuel-economy/localization';
import { localization as molarLocalization } from '../src/calculators/molar-mass/localization';
import { isCompleteCalculatorCopy } from '../src/lib/platform/types';
import { getCalculatorById } from '../src/lib/i18n';

const badNumbers = [true, false, undefined, '', 'abc', '2 apples', '1,2,3', NaN, Infinity, -Infinity];
const tools = [dilution, cooking, fuel, molar];
const fail = (result: ReturnType<typeof dilution.compute>) => {
  expect(result.primary.value).toBe('—');
  expect(result.secondary?.some(row => row.label === 'Проверьте данные' && row.accent === 'red')).toBe(true);
  expect(JSON.stringify(result)).not.toMatch(/Infinity|NaN/);
};

describe('dilution conserves solute for concentration per volume', () => {
  it('separates final volume and the approximate solvent difference in both directions', () => {
    const forward = dilution.compute({ solve: 'v2', c1: 2, v1: 50, c2: 0.5 });
    expect(forward.primary.value).toBe('200 мл');
    expect(forward.secondary?.[0].value).toBe('150 мл');
    const inverse = dilution.compute({ solve: 'v1', c1: 2, c2: 0.5, v2: 200 });
    expect(inverse.primary.value).toBe('50 мл');
    expect(inverse.secondary?.[0].value).toBe('150 мл');
  });
  it.each([
    ['v2', 1e308, 1e308, 2, '2 мл'],
    ['v2', 1e-200, 1e-200, 1e-200, '1,000·10^-200 мл'],
    ['v1', 1e308, 1e308, 2, '2 мл'],
    ['v1', 1e308, 1e-308, 1e308, '1,000·10^-308 мл'],
  ] as const)('keeps a representable volume after reordered arithmetic: %s %s %s %s', (solve, c1, c2, volume, answer) => {
    expect(dilution.compute({ solve, c1, c2, [solve === 'v2' ? 'v1' : 'v2']: volume }).primary.value).toBe(answer);
  });
  for (const solve of ['v1', 'v2'] as const) {
    for (const field of ['c1', 'c2', solve === 'v2' ? 'v1' : 'v2']) {
      it.each(badNumbers)(`rejects invalid active ${solve}/${field}: %s`, value => {
        fail(dilution.compute({ solve, c1: 2, c2: 0.5, v1: 50, v2: 200, [field]: value }));
      });
    }
    it(`ignores the inactive volume in ${solve} mode`, () => {
      const inputs = { solve, c1: 2, c2: 0.5, v1: 50, v2: 200, [solve === 'v2' ? 'v2' : 'v1']: true };
      expect(dilution.compute(inputs).primary.value).toBe(solve === 'v2' ? '200 мл' : '50 мл');
    });
  }
  it('rejects concentration increase, unknown mode and nonrepresentable results', () => {
    fail(dilution.compute({ solve: 'v2', c1: 1, c2: 2, v1: 50 }));
    fail(dilution.compute({ solve: 'bad', c1: 2, c2: 0.5, v1: 50 }));
    fail(dilution.compute({ solve: 'v2', c1: 1e308, c2: 1, v1: 2 }));
    fail(dilution.compute({ solve: 'v1', c1: 1e308, c2: 1e-308, v2: 1e-308 }));
  });
  it('preserves localized decimal entry and the default forward mode', () => {
    expect(dilution.compute({ c1: '2,0', c2: '0,5', v1: '50' }).primary.value).toBe('200 мл');
  });
});

describe('cooking conversion declares its chosen 240 mL measure and approximate densities', () => {
  it('uses 240 × 0.53 = 127.2 g and retains the inverse', () => {
    const forward = cooking.compute({ value: 1, unit: 'cup', product: 'flour', direction: 'toGrams' });
    expect(forward.primary.value).toBe('127,2');
    expect(forward.secondary?.[1].value).toBe('240 мл');
    expect(cooking.compute({ value: 127.2, unit: 'cup', product: 'flour', direction: 'toVolume' }).primary.value).toBe('1');
  });
  it('keeps zero meaningful and renders a nonzero small estimate as nonzero', () => {
    expect(cooking.compute({ value: 0, unit: 'ml', product: 'water' }).primary.value).toBe('0');
    expect(cooking.compute({ value: 1e-9, unit: 'ml', product: 'water' }).primary.value).toBe('1,000·10^-9');
  });
  it.each(badNumbers)('rejects an invalid quantity: %s', value => fail(cooking.compute({ value, unit: 'cup', product: 'flour' })));
  it.each(['unit', 'product', 'direction'])('rejects unknown and inherited %s keys', field => {
    for (const value of ['bad', 'toString', 'constructor']) {
      fail(cooking.compute({ value: 1, unit: 'cup', product: 'flour', direction: 'toGrams', [field]: value }));
    }
  });
  it('fails clearly when a displayed quantity cannot be represented', () => {
    fail(cooking.compute({ value: 1e308, unit: 'tbsp', product: 'flour', direction: 'toGrams' }));
    fail(cooking.compute({ value: 5e-324, unit: 'cup', product: 'honey', direction: 'toVolume' }));
  });
  it('preserves defaults and a localized decimal amount', () => {
    expect(cooking.compute({ value: '1,5' }).primary.value).toBe('190,8');
  });
});

describe('fuel economy uses reciprocal consumption and proportional efficiency', () => {
  it.each([
    ['l100km', 'kml', '12,5'], ['l100km', 'mpgus', '29,402'], ['l100km', 'mpguk', '35,31'],
  ] as const)('independently converts 8 %s to %s', (fromUnit, toUnit, answer) => {
    expect(fuel.compute({ value: 8, fromUnit, toUnit }).primary.value).toBe(answer);
  });
  it.each(['l100km', 'kml', 'mpgus', 'mpguk'])('keeps an identity conversion of 6.5 %s', unit => {
    expect(fuel.compute({ value: 6.5, fromUnit: unit, toUnit: unit }).primary.value).toBe('6,5');
  });
  it('retains finite extreme output and does not print a small nonzero consumption as zero', () => {
    const result = fuel.compute({ value: 1e308, fromUnit: 'mpgus', toUnit: 'kml' });
    expect(result.primary.value).toBe('4,251·10^307');
    expect(result.secondary?.[0].value).toBe('2,352·10^-306');
    expect(fuel.compute({ value: 1.4e308, fromUnit: 'mpgus', toUnit: 'l100km' }).primary.value).toBe('1,680·10^-306');
  });
  it.each(badNumbers)('rejects an invalid consumption: %s', value => fail(fuel.compute({ value })));
  it('rejects nonpositive consumption, unknown units and unrepresentable comparison quantities', () => {
    fail(fuel.compute({ value: 0 }));
    fail(fuel.compute({ value: -8 }));
    fail(fuel.compute({ value: 8, toUnit: 'bad' }));
    fail(fuel.compute({ value: 8, fromUnit: 'constructor' }));
    fail(fuel.compute({ value: 5e-324, fromUnit: 'l100km', toUnit: 'mpgus' }));
    // The UK-mpg comparison exceeds Number.MAX_VALUE for this US-mpg input.
    fail(fuel.compute({ value: Number.MAX_VALUE, fromUnit: 'mpgus', toUnit: 'l100km' }));
  });
  it('demonstrates the equal absolute saving underlying corrected FAQ text', () => {
    expect((10 - 9) * (1000 / 100)).toBe(10);
    expect((6 - 5) * (1000 / 100)).toBe(10);
    const us = 100 * 3.785411784 / 1.609344;
    expect(us / 9 - us / 10).toBeLessThan(us / 5 - us / 6);
  });
  it('preserves defaults and localized decimal entry', () => {
    expect(fuel.compute({ value: '8,0' }).primary.value).toBe('29,402');
  });
});

describe('molar-mass parser states and enforces its actual syntax', () => {
  it.each([
    ['H2O', '18,015 г/моль'], ['H2SO4', '98,072 г/моль'],
    ['Ca(OH)2', '74,092 г/моль'], ['CaSO4(H2O)2', '172,164 г/моль'],
    ['Na2SO4(H2O)10', '322,186 г/моль'], ['((H2)2O)3', '60,093 г/моль'],
  ])('independently sums the supported composition %s', (formula, answer) => {
    expect(molar.compute({ formula }).primary.value).toBe(answer);
  });
  it.each(['', 'H0', 'Ca()2', 'H()2', '()', 'H2O)', '(H2O', 'Al2(SO4)3', 'CuSO4(H2O)5', 'CaSO4·2H2O', 'NH4+', '[Ca(OH)2]', 'H₂O', 'H9007199254740993', 'H9007199254740991H', '(H4503599627370496)2', 'H9007199254740991O'])('rejects unsupported or unsafe formula %s', formula => {
    fail(molar.compute({ formula }));
  });
  it('limits nesting without throwing and permits the declared boundary', () => {
    expect(molar.compute({ formula: '('.repeat(64) + 'H' + ')'.repeat(64) }).primary.value).toBe('1,008 г/моль');
    fail(molar.compute({ formula: '('.repeat(65) + 'H' + ')'.repeat(65) }));
    fail(molar.compute({ formula: '('.repeat(5000) + 'H' + ')'.repeat(5000) }));
  });
  it('limits length and rejects infinite decimal indices', () => {
    expect(molar.compute({ formula: 'H'.repeat(1000) }).primary.value).toBe('1 008 г/моль');
    fail(molar.compute({ formula: 'H'.repeat(1001) }));
    fail(molar.compute({ formula: 'H' + '9'.repeat(310) }));
  });
});

describe('the authored correction reaches every public locale', () => {
  for (const definition of tools) {
    it.each(['ru', 'en', 'uk', 'de', 'es'] as const)(`${definition.id}/%s retains reviewed full copy`, async locale => {
      const page = getCalculatorById(definition.id, locale)!;
      const copy = locale === 'ru' ? definition.presentation : definition.copy![locale]!;
      expect(isCompleteCalculatorCopy(copy)).toBe(true);
      if (!isCompleteCalculatorCopy(copy)) throw new Error('Owned copy must be complete');
      expect(page.seoContent!.intro).toBe(copy.longDescription);
      expect(page.seoContent!.faq).toEqual(copy.faq);
      expect(page.seoContent!.faq.length).toBeGreaterThanOrEqual(4);
      expect(page.disclaimer).toBe(copy.disclaimer);
      if (definition.id === 'dilution') expect(JSON.stringify(page.seoContent)).toMatch(/моль\/л|mol\/l|mol\/L/);
      if (definition.id === 'convert-cooking-weight') {
        expect(JSON.stringify(page.seoContent)).toMatch(/240/);
        expect(JSON.stringify(page.seoContent)).toMatch(/250/);
        expect(JSON.stringify(page.seoContent)).toMatch(/236/);
      }
      if (definition.id === 'convert-fuel-economy') {
        expect(JSON.stringify(page.seoContent)).toContain('10→9');
        expect(JSON.stringify(page.seoContent)).toContain('6→5');
      }
      if (definition.id === 'molar-mass') {
        expect(JSON.stringify(page.seoContent)).toContain('CaSO4(H2O)2');
        expect(JSON.stringify(page.seoContent)).toContain('1000');
        expect(JSON.stringify(page.seoContent)).toContain('64');
      }
    });
  }
  it.each(['en', 'uk', 'de', 'es'] as const)('owns all new result phrases in %s', locale => {
    const tables = [dilutionLocalization, cookingLocalization, fuelLocalization, molarLocalization];
    const required = [
      ['Неизвестное направление', 'Результат вне допустимого диапазона'],
      ['Введите конечное число', 'Результат вне допустимого диапазона', 'Чашка этого калькулятора — 240 мл. Плотности продуктов приблизительны; результат зависит от состава и способа наполнения мерной посуды.'],
      ['Неизвестная единица расхода топлива', 'Результат вне допустимого диапазона'],
      ['Слишком сложная химическая формула', 'Пустая группа в химической формуле', 'Индексы и число атомов должны быть положительными безопасными целыми числами'],
    ];
    tables.forEach((table, index) => required[index].forEach(key => {
      expect(table[locale]?.values?.[key]).toBeTruthy();
      expect(table[locale]?.values?.[key]).not.toBe(key);
    }));
  });
});
