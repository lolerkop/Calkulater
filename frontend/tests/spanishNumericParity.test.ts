import { describe, expect, it } from 'vitest';
import { fmtNumber, parseLocalizedNumber } from '../src/lib/format';
import { getCalculators } from '../src/lib/i18n';
import { runtimeFor } from '../src/calculators/runtime.generated';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import { buildInitialValues } from '../src/lib/shareLink';

// Числовой контракт испанской локали.
//
// Разбор ввода уже принимал все привычные испанские записи до этой фазы —
// здесь он закрепляется, а не меняется. Вывод остаётся тем же, что у ru, uk и
// de: запятая как десятичный разделитель и неразрывный пробел между тройками.
// Точка разрядным разделителем НЕ становится, и это то же решение, что принято
// для немецкого: адреса общего доступа сериализуются через `String(value)`, а
// поля формы показывают ровно эту запись, поэтому чтение «18.015» как 18015
// ошиблось бы в тысячу раз на первой же отрисовке.

describe('испанский числовой контракт: разбор ввода', () => {
  it('принимает привычные испанские записи', () => {
    expect(parseLocalizedNumber('1.234,56', 'es')).toBe(1234.56);
    expect(parseLocalizedNumber('1 234,56', 'es')).toBe(1234.56);
    expect(parseLocalizedNumber('1234,56', 'es')).toBe(1234.56);
    expect(parseLocalizedNumber('1.234.567', 'es')).toBe(1234567);
    expect(parseLocalizedNumber('-1.234,56', 'es')).toBe(-1234.56);
    expect(parseLocalizedNumber('12,5', 'es')).toBe(12.5);
    expect(parseLocalizedNumber('0,001', 'es')).toBe(0.001);
  });

  it('одиночная точка остаётся десятичной — как в ru, uk и de', () => {
    for (const locale of ['ru', 'uk', 'de', 'es']) {
      expect(parseLocalizedNumber('1.234', locale), locale).toBe(1.234);
      expect(parseLocalizedNumber('18.015', locale), locale).toBe(18.015);
    }
    // У английского иначе, и это не должно измениться.
    expect(parseLocalizedNumber('1,234', 'en')).toBe(1234);
  });

  it('значения по умолчанию восстанавливаются из собственной записи', () => {
    // Поле формы показывает `String(value)`. Если разбор прочитает эту запись
    // иначе, посетитель получит неверный ответ ещё до первого ввода.
    for (const calculator of getCalculators('es')) {
      for (const field of calculator.fields) {
        if (field.type !== 'number' || typeof field.defaultValue !== 'number') continue;
        expect(parseLocalizedNumber(String(field.defaultValue), 'es'), `${calculator.id}/${field.name}`)
          .toBe(field.defaultValue);
      }
    }
  });

  it('отклоняет то же, что и остальные локали', () => {
    for (const raw of ['abc', '1 23', '', '1,2,3']) {
      expect(parseLocalizedNumber(raw, 'es'), raw).toBeNull();
    }
  });
});

describe('испанский числовой контракт: вывод', () => {
  it('десятичный разделитель — запятая, разряды — неразрывный пробел', () => {
    expect(fmtNumber(1234.56, 2)).toBe('1 234,56');
    expect(fmtNumber(1234567.891, 2)).toBe('1 234 567,89');
  });

  it('испанский результат печатается той же записью, что ru, uk и de', () => {
    const runtime = runtimeFor('annuity');
    const values = buildInitialValues(getCalculators('es').find((c) => c.id === 'annuity')!.fields);
    const raw = runtime.compute(values as never);
    const es = localizeResult(raw, 'es', 'annuity', runtime);
    const de = localizeResult(raw, 'de', 'annuity', runtime);
    // Числовая запись одна и та же; отличается только язык подписей.
    const digitsOnly = (value: string) => value.replace(/[^\d\s .,]/g, '').trim();
    expect(digitsOnly(es.primary.value)).toBe(digitsOnly(de.primary.value));
    expect(es.primary.value).not.toMatch(/\d,\d{3}(?!\d)/); // без английской группировки
  });

  it('запись результата читается обратно тем же разбором', () => {
    // Круговой ход: то, что видит посетитель, он может ввести снова.
    for (const value of [1234.56, 0.5, 1000000, 12.5]) {
      const shown = fmtNumber(value, 2);
      expect(parseLocalizedNumber(shown, 'es'), shown).toBe(value);
    }
  });
});
