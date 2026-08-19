import { describe, expect, it } from 'vitest';
import { calculators } from '../src/data/calculators';
import { parseLocalizedNumber, toNumber } from '../src/lib/format';

// Остров держит значение поля строкой, поэтому числовой defaultValue проходит
// через String() и обратно через общий разборщик. До Phase 14S разборщик читал
// точку перед ровно тремя цифрами как разделитель разрядов, и «16.667» на витрине
// становилось 16 667 ещё до того, как посетитель что-либо ввёл.
//
// Теперь у грамматики один дробный разделитель на локаль и точка в ru/uk всегда
// дробная, поэтому исключений здесь больше нет и быть не должно: любое новое
// значение по умолчанию обязано пережить оборот через строку без изменений.

describe('значения по умолчанию переживают строковый оборот', () => {
  it('числовой defaultValue не меняется, пройдя через строку и разборщик', () => {
    const broken: string[] = [];
    for (const calculator of calculators) {
      for (const field of calculator.fields ?? []) {
        const value = field.defaultValue;
        if (typeof value !== 'number') continue;
        if (toNumber(String(value)) !== value) {
          broken.push(`${calculator.id}.${field.name} = ${value} -> ${toNumber(String(value))}`);
        }
      }
    }
    expect(broken).toEqual([]);
  });

  it('то же самое во всех трёх собираемых локалях', () => {
    const broken: string[] = [];
    for (const calculator of calculators) {
      for (const field of calculator.fields ?? []) {
        const value = field.defaultValue;
        if (typeof value !== 'number') continue;
        for (const locale of ['ru', 'en', 'uk'] as const) {
          if (parseLocalizedNumber(String(value), locale) !== value) {
            broken.push(`${locale} ${calculator.id}.${field.name} = ${value}`);
          }
        }
      }
    }
    expect(broken).toEqual([]);
  });

  // Тот самый случай, ради которого проверка появилась в волне 4: 16,667 мс —
  // это время кадра при 60 FPS, то есть настоящая дробь, а не 16 667.
  it('прежнее исключение fps-frametime исправлено, а не занесено в список', () => {
    const fps = calculators.find((calculator) => calculator.id === 'fps-frametime');
    const field = fps?.fields?.find((item) => item.name === 'frameTime');
    expect(field?.defaultValue).toBe(16.667);
    expect(toNumber(String(field!.defaultValue))).toBe(16.667);
    for (const locale of ['ru', 'en', 'uk'] as const) {
      expect(parseLocalizedNumber('16.667', locale)).toBe(16.667);
    }
  });
});
