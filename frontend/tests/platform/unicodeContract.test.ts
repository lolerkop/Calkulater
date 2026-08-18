// Форматирование различает неразрывный пробел и обычный. Тест закрепляет это
// как контракт: если однажды кто-то «починит» падающий тест нормализацией
// пробелов, настоящая регрессия форматирования пройдёт незамеченной.

import { describe, expect, it } from 'vitest';
import { fmtMoney, fmtNumber } from '../../src/lib/format';
import { v2Definitions } from '../../src/calculators/manifest.generated';
import { expectExactText, explicit, NBSP } from './unicodeFixtures';

describe('контракт неразрывного пробела', () => {
  it('разряды разделяет U+00A0, а знак валюты отделён обычным пробелом', () => {
    const money = fmtMoney(30000);
    expectExactText(money, `30${NBSP}000 ₽`);
    expect(money).toContain(' ');
    expect(money.split(' ')).toHaveLength(2);
    // Обычный пробел присутствует ровно один — перед знаком валюты.
    expect(money.split(' ')).toHaveLength(2);
  });

  it('неразрывный и обычный пробел не считаются одним и тем же', () => {
    expect(`30${NBSP}000 ₽`).not.toBe('30 000 ₽');
    expect(explicit(`30${NBSP}000 ₽`)).toBe('30⟨U+00A0⟩000⟨U+0020⟩₽');
    expect(explicit('30 000 ₽')).toBe('30⟨U+0020⟩000⟨U+0020⟩₽');
  });

  it('короткие числа неразрывного пробела не содержат', () => {
    expectExactText(fmtMoney(1), '1 ₽');
    expectExactText(fmtNumber(30, 2), '30,00');
  });

  it('эталонные случаи записаны точными символами, а не приблизительными', () => {
    for (const definition of v2Definitions) {
      for (const testCase of definition.referenceCases ?? []) {
        const texts = [testCase.expectPrimary, ...(testCase.expectSecondary ?? []).map((row) => row.value)];
        for (const text of texts) {
          // Группа из трёх цифр после разделителя обязана отделяться U+00A0:
          // обычный пробел в этом месте означал бы неточную фикстуру.
          expect(text, `${definition.id}: ${explicit(text)}`).not.toMatch(/\d [\d]{3}(?!\d)/);
        }
      }
    }
  });
});
