import { describe, expect, it } from 'vitest';
import { calculators } from '../src/data/calculators';
import { toNumber } from '../src/lib/format';

// Остров держит значение поля строкой, поэтому числовой defaultValue проходит
// через String() и обратно через общий разборщик. Разборщик читает точку перед
// ровно тремя цифрами как разделитель разрядов («18.015» → 18 015), и такой
// defaultValue показывает на витрине заведомо неверный ответ ещё до того, как
// посетитель что-либо ввёл.
//
// Сам разборщик здесь не чинится: его правило действует на всех 148 калькуляторах
// и на продакшене, а смена правила — отдельная работа со своей сертификацией.
// Этот тест лишь не даёт появиться новым таким значениям по умолчанию.

// Единственный известный случай на момент волны 4. Найден этой же проверкой,
// живёт в проде и в волну 4 не входит, поэтому вынесен в исключение, а не исправлен.
const KNOWN = new Set(['fps-frametime.frameTime']);

describe('значения по умолчанию переживают строковый оборот', () => {
  it('числовой defaultValue не меняется, пройдя через строку и разборщик', () => {
    const broken: string[] = [];
    for (const calculator of calculators) {
      for (const field of calculator.fields ?? []) {
        const value = field.defaultValue;
        if (typeof value !== 'number') continue;
        const key = `${calculator.id}.${field.name}`;
        if (KNOWN.has(key)) continue;
        if (toNumber(String(value)) !== value) broken.push(`${key} = ${value} -> ${toNumber(String(value))}`);
      }
    }
    expect(broken).toEqual([]);
  });

  it('исключение остаётся ровно одно и всё ещё воспроизводится', () => {
    const fps = calculators.find((calculator) => calculator.id === 'fps-frametime');
    const field = fps?.fields?.find((item) => item.name === 'frameTime');
    expect(KNOWN.size).toBe(1);
    expect(typeof field?.defaultValue).toBe('number');
    expect(toNumber(String(field!.defaultValue))).not.toBe(field!.defaultValue);
  });
});
