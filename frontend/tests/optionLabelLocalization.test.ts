import { describe, expect, it } from 'vitest';
import { getCalculators, locales } from '../src/lib/i18n';
import { fieldUnitLabel } from '../src/lib/fieldUnitLabel';

// Подписи вариантов переключателей.
//
// Раньше подпись варианта показывалась в одном месте — на самой кнопке
// переключателя, — и пропущенный перевод был малозаметен. Теперь из тех же
// подписей собирается строка блока «Поля и единицы», поэтому пропуск виден
// дважды, а расхождение между двумя поверхностями было бы прямой ошибкой.
//
// Словарь подписей отдаёт русский вариант, когда ключа для локали нет. Молча это
// выглядит как перевод, поэтому известные пропуски закрепляются точечно, а общая
// проверка следит за тем, чтобы обе поверхности всегда брали одно значение.

const публичные = ['ru', 'en', 'uk'] as const;

const вариант = (locale: (typeof публичные)[number], calcId: string, field: string, value: string) => {
  const c = getCalculators(locale).find((x) => x.id === calcId);
  const f = c?.fields.find((x) => x.name === field);
  return f?.options?.find((o) => o.value === value)?.label;
};

describe('подписи вариантов переключателей локализованы', () => {
  it('кирпич: способ задания стены переведён на украинский', () => {
    // «Размеры» — русское слово; украинское — «Розміри».
    expect(вариант('ru', 'brick-calculator', 'mode', 'dimensions')).toBe('Размеры');
    expect(вариант('en', 'brick-calculator', 'mode', 'dimensions')).toBe('By dimensions');
    expect(вариант('uk', 'brick-calculator', 'mode', 'dimensions')).toBe('Розміри');
  });

  it('кирпич: строка блока собирается из переведённых вариантов', () => {
    const c = getCalculators('uk').find((x) => x.id === 'brick-calculator')!;
    const f = c.fields.find((x) => x.name === 'mode')!;
    expect(fieldUnitLabel(f, 'uk')).toBe('Розміри / За площею');
    expect(fieldUnitLabel(f, 'uk')).not.toContain('Размеры');
  });

  it('соседние строительные калькуляторы не задеты', () => {
    expect(вариант('uk', 'tile-calculator', 'mode', 'room')).toBe('За кімнатою');
    expect(вариант('uk', 'tile-calculator', 'mode', 'area')).toBe('За площею');
    expect(вариант('uk', 'screed-calculator', 'mode', 'room')).toBe('За кімнатою');
    expect(вариант('uk', 'paint-calculator', 'mode', 'manual')).toBe('Ручна площа');
    expect(вариант('ru', 'brick-calculator', 'mode', 'area')).toBe('Площадь');
    expect(вариант('en', 'brick-calculator', 'mode', 'area')).toBe('By area');
  });

  for (const locale of публичные) {
    it(`${locale}: строка блока совпадает с подписями переключателя`, () => {
      const переключатели = getCalculators(locale)
        .flatMap((c) => c.fields.map((f) => ({ calc: c.id, f })))
        .filter((x) => x.f.type === 'toggle');
      expect(переключатели.length).toBeGreaterThan(0);
      for (const { calc, f } of переключатели) {
        const подписи = (f.options ?? []).map((o) => o.label.trim());
        // Обе поверхности обязаны брать одно и то же значение из одного источника.
        expect(fieldUnitLabel(f, locale), `${calc}.${f.name}`).toBe(подписи.join(' / '));
        for (const п of подписи) {
          expect(п, `${calc}.${f.name}: пустая подпись`).not.toBe('');
          expect(п, `${calc}.${f.name}: служебное значение`).not.toMatch(/\[object|undefined|null/);
        }
      }
    });
  }

  it('английские подписи вариантов не содержат кириллицы', () => {
    const кириллица = /[А-Яа-яЁёІіЇїЄєҐґ]/;
    for (const c of getCalculators('en')) {
      for (const f of c.fields) {
        if (f.type !== 'toggle') continue;
        for (const o of f.options ?? []) {
          expect(кириллица.test(o.label), `${c.id}.${f.name}.${o.value}: «${o.label}»`).toBe(false);
        }
      }
    }
  });

  it('непубличные локали не ломают сборку подписей', () => {
    for (const locale of locales) {
      for (const c of getCalculators(locale)) {
        for (const f of c.fields) {
          if (f.type !== 'toggle') continue;
          expect(typeof fieldUnitLabel(f, locale)).toBe('string');
        }
      }
    }
  });
});
