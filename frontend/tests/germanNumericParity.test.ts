import { describe, expect, it } from 'vitest';
import { getCalculators, getCalculatorById, locales } from '../src/lib/i18n';
import { parseLocalizedNumber } from '../src/lib/format';
import {
  buildCalculatorQueryString,
  buildInitialValues,
  readValuesFromSearch,
} from '../src/lib/shareLink';
import { v2Runners } from '../src/calculators/runtime.generated';

// Числовой паритет и круговорот значения через адрес.
//
// Локализация не имеет права менять вычисление. Отличаться может только запись
// числа и подписи; само значение обязано совпадать во всех локалях.
//
// Отдельно закрепляется круговорот: значение, ушедшее в адрес и прочитанное
// обратно, должно вернуться тем же. Для немецкого это критично, потому что
// адрес сериализуется через String() — всегда с точкой как десятичным
// разделителем, — а поле ввода читается по правилам локали.

const german = getCalculators('de');

describe('немецкий числовой паритет', () => {
  it('набор для сверки не выродился', () => {
    expect(german.length).toBeGreaterThanOrEqual(16);
  });

  it('поля и их значения по умолчанию совпадают во всех локалях', () => {
    for (const calculator of german) {
      const byLocale = locales.map((locale) => getCalculatorById(calculator.id, locale)).filter(Boolean);
      expect(byLocale.length, calculator.id).toBe(locales.length);
      const reference = byLocale[0]!;
      for (const variant of byLocale.slice(1)) {
        expect(variant!.fields.map((f) => f.name), `${calculator.id}: имена полей`)
          .toEqual(reference.fields.map((f) => f.name));
        expect(variant!.fields.map((f) => f.defaultValue), `${calculator.id}: значения по умолчанию`)
          .toEqual(reference.fields.map((f) => f.defaultValue));
        expect(variant!.fields.map((f) => f.type), `${calculator.id}: типы полей`)
          .toEqual(reference.fields.map((f) => f.type));
      }
    }
  });

  it('раннер один и тот же для всех локалей: вычисление от языка не зависит', () => {
    // Расчёт живёт в раннере калькулятора, а локализация — в слое представления.
    // Если бы у локали был свой раннер, паритет пришлось бы доказывать иначе.
    for (const calculator of german) {
      if (!v2Runners[calculator.id]) continue;
      const inputs = Object.fromEntries(
        calculator.fields.map((f) => [f.name, f.defaultValue ?? 0]),
      );
      const result = v2Runners[calculator.id](inputs as never);
      expect(result.primary.value, calculator.id).toBeTruthy();
      expect(String(result.primary.value), calculator.id).not.toMatch(/\b(NaN|Infinity|undefined)\b/);
    }
  });
});

describe('круговорот значения через адрес в немецкой локали', () => {
  const roundTrip = (id: string, values: Record<string, string | number | boolean>) => {
    const calculator = getCalculatorById(id, 'de')!;
    const defaults = buildInitialValues(calculator.fields);
    const query = buildCalculatorQueryString(calculator.fields, values, 'de');
    const restored = readValuesFromSearch(calculator.fields, defaults, query, 'de');
    return { query, restored };
  };

  it('A. прямой ввод: дробное значение переживает адрес и возврат', () => {
    const { query, restored } = roundTrip('density', { mode: 'rho', m: 18.015, V: 2 });
    // В адрес значение уходит с точкой — так его сериализует String().
    expect(query).toContain('m=18.015');
    // И читается обратно тем же числом, а не тысячами.
    expect(restored.m).toBe(18.015);
  });

  it('B. значения с тремя знаками после точки не превращаются в тысячи', () => {
    for (const value of [1.234, 18.015, 999.999, 0.001]) {
      const { restored } = roundTrip('density', { mode: 'rho', m: value, V: 1 });
      expect(restored.m, String(value)).toBe(value);
    }
  });

  it('C. немецкий ввод с запятой даёт то же число, что английский с точкой', () => {
    expect(parseLocalizedNumber('1234,56', 'de')).toBe(parseLocalizedNumber('1234.56', 'en'));
    expect(parseLocalizedNumber('1.234,56', 'de')).toBe(parseLocalizedNumber('1,234.56', 'en'));
    expect(parseLocalizedNumber('0,001', 'de')).toBe(parseLocalizedNumber('0.001', 'en'));
  });

  it('D. знаковые и отрицательные значения переживают круговорот', () => {
    const { restored } = roundTrip('quadratic-equation', { a: 1, b: -5, c: 6 });
    expect(restored.b).toBe(-5);
    expect(restored.c).toBe(6);
  });

  it('E. значения по умолчанию в адрес не уходят', () => {
    const calculator = getCalculatorById('density', 'de')!;
    const defaults = buildInitialValues(calculator.fields);
    expect(buildCalculatorQueryString(calculator.fields, defaults, 'de')).toBe('');
  });

  it('F. поле, скрытое условием showIf, в адрес не попадает', () => {
    const calculator = getCalculatorById('density', 'de')!;
    const conditional = calculator.fields.filter((f) => f.showIf);
    expect(conditional.length, 'у калькулятора есть условные поля').toBeGreaterThan(0);
    const values: Record<string, string | number | boolean> = Object.fromEntries(
      calculator.fields.map((f) => [f.name, f.defaultValue ?? 0]),
    );
    values[conditional[0].showIf!.field] = '__не совпадает__';
    values[conditional[0].name] = 12345;
    expect(buildCalculatorQueryString(calculator.fields, values, 'de'))
      .not.toContain(`${conditional[0].name}=12345`);
  });

  it('G. немецкий и английский адреса одного расчёта совпадают', () => {
    // Адрес — машинный канал: он не локализуется, поэтому ссылка, полученная
    // на немецкой странице, читается на английской и наоборот.
    const de = getCalculatorById('density', 'de')!;
    const en = getCalculatorById('density', 'en')!;
    const values = { mode: 'rho', m: 5.4, V: 0.002 };
    expect(buildCalculatorQueryString(de.fields, values, 'de'))
      .toBe(buildCalculatorQueryString(en.fields, values, 'en'));
  });

  it('H. список в textarea переживает круговорот без потери строк', () => {
    const calculator = getCalculatorById('gpa', 'de')!;
    const grades = '1,7 10\n2,3 4\n1,0 2';
    const query = buildCalculatorQueryString(calculator.fields, { grades }, 'de');
    const restored = readValuesFromSearch(calculator.fields, buildInitialValues(calculator.fields), query, 'de');
    expect(String(restored.grades).split('\n')).toHaveLength(3);
  });

  it('I. дата переживает круговорот', () => {
    const calculator = getCalculatorById('week-number', 'de')!;
    const query = buildCalculatorQueryString(calculator.fields, { date: '2026-08-31' }, 'de');
    const restored = readValuesFromSearch(calculator.fields, buildInitialValues(calculator.fields), query, 'de');
    expect(restored.date).toBe('2026-08-31');
  });

  it('J. выбор из списка переживает круговорот', () => {
    const calculator = getCalculatorById('ohms-law', 'de')!;
    const query = buildCalculatorQueryString(calculator.fields, { mode: 'vr', voltage: 12, resistance: 220 }, 'de');
    const restored = readValuesFromSearch(calculator.fields, buildInitialValues(calculator.fields), query, 'de');
    expect(restored.mode).toBe('vr');
    expect(restored.voltage).toBe(12);
    expect(restored.resistance).toBe(220);
  });
});
