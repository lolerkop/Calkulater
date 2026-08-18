// Структурные инварианты движка конвертеров.
//
// Тест обобщённый: он находит конвертеры по факту использования таблицы единиц,
// а не по списку идентификаторов, поэтому тринадцатый конвертер попадёт под
// проверку сам, без правки этого файла.
//
// Проверяется то, что нельзя увидеть в эталонных случаях: они подтверждают
// отдельные пары единиц, но молчат об остальных N² сочетаниях и о том, что
// происходит с обозначениями за пределами русской локали.

import { describe, expect, it } from 'vitest';
import { convert, formatConverted, toBase, type ConversionUnits } from '../../src/lib/platform/conversion';
import { v2Definitions } from '../../src/calculators/manifest.generated';
import { v2Localization } from '../../src/calculators/localization.generated';
import { localizeResult } from '../../src/components/islands/calculator/resultLocalization';
import type { TranslatedLocale } from '../../src/lib/platform/types';

type UnitModule = { units: ConversionUnits<string>; names: Record<string, string> };

// Таблицы единиц загружаются тем же способом, каким их подключает калькулятор.
const unitModules = import.meta.glob('../../src/calculators/*/units.ts', { eager: true }) as Record<string, Record<string, unknown>>;

const converters = Object.entries(unitModules).map(([path, module]) => {
  const id = path.split('/').slice(-2)[0];
  const units = Object.values(module).find(
    (value) => value && typeof value === 'object' && Object.values(value as object).every((u: any) => u && typeof u.factor === 'number'),
  ) as ConversionUnits<string>;
  const names = Object.values(module).find(
    (value) => value && typeof value === 'object' && value !== units && Object.values(value as object).every((n) => typeof n === 'string'),
  ) as Record<string, string>;
  return { id, units, names, definition: v2Definitions.find((d) => d.id === id)! };
});

describe('движок конвертеров', () => {
  it('конвертеры обнаружены', () => {
    expect(converters.length).toBeGreaterThanOrEqual(12);
  });

  for (const { id, units, names, definition } of converters) {
    describe(id, () => {
      const ids = Object.keys(units);

      it('таблица единиц не пуста и все единицы названы', () => {
        expect(ids.length).toBeGreaterThanOrEqual(2);
        for (const unit of ids) expect(names[unit], `нет названия для «${unit}»`).toBeTruthy();
      });

      it('обозначения единиц не повторяются', () => {
        const symbols = ids.map((unit) => units[unit].symbol);
        expect(new Set(symbols).size, `повтор обозначения в ${id}: ${symbols.join(', ')}`).toBe(symbols.length);
      });

      it('множители конечны и не равны нулю', () => {
        for (const unit of ids) {
          expect(Number.isFinite(units[unit].factor), `множитель «${unit}» не конечен`).toBe(true);
          expect(units[unit].factor, `нулевой множитель «${unit}» сделал бы обратный перевод бесконечным`).not.toBe(0);
          const offset = units[unit].offset;
          if (offset !== undefined) expect(Number.isFinite(offset)).toBe(true);
        }
      });

      it('база присутствует в таблице', () => {
        // Базовая — множитель 1 без смещения. Её отсутствие означало бы, что
        // база выбрана вне таблицы и ни одно значение не проходит без деления.
        //
        // Единственности не требуем: одна и та же величина бывает записана
        // по-разному и при этом совпадает численно — грамм на литр это ровно
        // килограмм на кубометр. Такие записи различаются обозначением, и обе
        // нужны продукту.
        const base = ids.filter((unit) => units[unit].factor === 1 && !units[unit].offset);
        expect(base.length, 'базовой единицы нет').toBeGreaterThanOrEqual(1);
      });

      it('перевод во все стороны обратим', () => {
        // Полная матрица N²: эталонные случаи покрывают отдельные пары,
        // а расхождение может прятаться в любой из остальных.
        for (const from of ids) {
          for (const to of ids) {
            const forward = convert(units, 1, from, to);
            expect(Number.isFinite(forward), `${from} → ${to} не конечно`).toBe(true);
            const back = convert(units, forward, to, from);
            expect(Math.abs(back - 1), `${from} → ${to} → ${from} разошлось`).toBeLessThan(1e-9);
          }
        }
      });

      it('приведение к базе монотонно', () => {
        // Знак разности должен сохраняться: аффинная шкала со смещением тоже
        // обязана оставаться возрастающей, иначе сравнение значений соврёт.
        for (const unit of ids) {
          expect(toBase(units[unit], 2)).toBeGreaterThan(toBase(units[unit], 1));
        }
      });

      it('единица по умолчанию существует в таблице', () => {
        const fields = definition.presentation.fields;
        for (const name of ['from', 'to'] as const) {
          const field = fields.find((f) => f.name === name)!;
          expect(field, `нет поля «${name}»`).toBeDefined();
          expect(ids, `значение по умолчанию «${field.defaultValue}» отсутствует в таблице`).toContain(String(field.defaultValue));
          expect(field.options?.map((o) => o.value).sort()).toEqual([...ids].sort());
        }
      });

      it('обозначения переведены на всех локалях сборки', () => {
        // Регрессия, найденная измерением: собственная карта калькулятора
        // искалась точным совпадением, а обозначение приходит фрагментом внутри
        // строки. Английская страница показывала «10,0000 м/с», а «см²»
        // общий хвост замен превращал в «сm²» — кириллическая «с» с латинским
        // «m²». Проверяется результат целиком, а не наличие ключа в карте.
        for (const locale of ['en', 'uk'] as TranslatedLocale[]) {
          const bundle = v2Localization[locale][id];
          const runtime = { compute: definition.compute, localization: { [locale]: bundle } };
          for (const from of ids) {
            const result = definition.compute({ value: 1, from, to: from });
            const localized = localizeResult(result, locale, id, runtime as never);
            const text = [localized.primary.value, ...localized.secondary.map((row) => row.value)].join(' ');
            if (locale === 'uk') continue; // украинские обозначения кириллические by design
            expect(/[Ѐ-ӿ]/.test(text), `на ${locale} осталась кириллица: «${text}»`).toBe(false);
          }
        }
      });
    });
  }

  describe('представление результата', () => {
    it('ноль показывается без дробной части', () => {
      expect(formatConverted(0)).toBe('0');
    });

    it('неконечное значение не печатается числом', () => {
      expect(formatConverted(Number.POSITIVE_INFINITY)).toBe('—');
      expect(formatConverted(Number.NaN)).toBe('—');
    });

    it('число знаков растёт по мере убывания величины', () => {
      // Диапазон волны — от электронвольта до терабайта, поэтому фиксированное
      // число знаков либо потеряло бы малые значения, либо завалило крупные.
      const decimals = (text: string) => (text.split(',')[1] ?? '').length;
      expect(decimals(formatConverted(1234.5))).toBe(2);
      expect(decimals(formatConverted(12.345))).toBe(4);
      expect(decimals(formatConverted(0.0123))).toBe(6);
      expect(decimals(formatConverted(0.000012))).toBe(9);
      expect(formatConverted(1e18)).toContain('·10^');
      expect(formatConverted(1e-9)).toContain('·10^');
    });

    it('совпадающие единицы не дают дрейфа', () => {
      // Проход через базу и обратно у аффинной шкалы даёт 36,599999999999994.
      const units = { c: { symbol: '°C', factor: 1, offset: 273.15 } };
      expect(convert(units, 36.6, 'c', 'c')).toBe(36.6);
    });
  });
});
