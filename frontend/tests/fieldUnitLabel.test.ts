import { describe, expect, it } from 'vitest';
import { fieldUnitLabel } from '../src/lib/fieldUnitLabel';
import { getCalculators, locales } from '../src/lib/i18n';
import type { Field } from '../src/lib/types';

// Описание поля в блоке «Поля и единицы».
//
// Блок отвечает на вопрос «что и в чём тут вводят». У переключателя единицы нет,
// и раньше он описывался как «да или нет». Для флажка это правда, но
// переключателей-флажков в данных нет вовсе: «Единица срока» — это годы или
// месяцы, «Пол» — мужской или женский, «Способ расчёта» — по размерам или по
// площади. Двадцать полей из двадцати двух описывались неверно.
//
// Теперь переключатель описывается собственными вариантами. Они уже локализованы
// вместе с полем, поэтому описание верно во всех трёх публичных локалях и само
// остаётся верным при правке вариантов.

const публичные = ['ru', 'en', 'uk'] as const;

const поле = (over: Partial<Field>): Field => ({
  name: 'test', label: 'Тест', type: 'number', defaultValue: 0, ...over,
} as Field);

describe('fieldUnitLabel: контракт', () => {
  it('единица поля важнее любого описания', () => {
    expect(fieldUnitLabel(поле({ type: 'number', unit: '₽' }), 'ru')).toBe('₽');
    expect(fieldUnitLabel(поле({ type: 'number', unit: '% годовых' }), 'ru')).toBe('% годовых');
    // Даже у переключателя с единицей она остаётся ответом.
    expect(fieldUnitLabel(поле({ type: 'toggle', unit: 'км', options: [
      { value: 'a', label: 'Раз' }, { value: 'b', label: 'Два' }] }), 'ru')).toBe('км');
  });

  it('переключатель описывается своими вариантами, а не «да или нет»', () => {
    const f = поле({ type: 'toggle', options: [
      { value: 'years', label: 'Лет' }, { value: 'months', label: 'Месяцев' }] });
    expect(fieldUnitLabel(f, 'ru')).toBe('Лет / Месяцев');
    expect(fieldUnitLabel(f, 'ru')).not.toContain('да или нет');
  });

  it('вариантов может быть больше двух', () => {
    const f = поле({ type: 'toggle', options: [
      { value: 'a', label: 'Похудение' }, { value: 'b', label: 'Поддержание' }, { value: 'c', label: 'Набор' }] });
    expect(fieldUnitLabel(f, 'ru')).toBe('Похудение / Поддержание / Набор');
  });

  it('переключатель без вариантов — всё равно выбор, а не булево', () => {
    const f = поле({ type: 'toggle' });
    expect(fieldUnitLabel(f, 'ru')).toBe('вариант из списка');
    expect(fieldUnitLabel(f, 'en')).toBe('list option');
    expect(fieldUnitLabel(f, 'uk')).toBe('варіант зі списку');
  });

  it('флажок — единственный по-настоящему булев ввод', () => {
    const f = поле({ type: 'checkbox' } as Partial<Field>);
    expect(fieldUnitLabel(f, 'ru')).toBe('да или нет');
    expect(fieldUnitLabel(f, 'en')).toBe('yes or no');
    expect(fieldUnitLabel(f, 'uk')).toBe('так або ні');
  });

  it('остальные типы описываются как прежде', () => {
    expect(fieldUnitLabel(поле({ type: 'date' }), 'ru')).toBe('дата');
    expect(fieldUnitLabel(поле({ type: 'select' }), 'ru')).toBe('вариант из списка');
    expect(fieldUnitLabel(поле({ type: 'number' }), 'ru')).toBe('без единицы');
    expect(fieldUnitLabel(поле({ type: 'number' }), 'en')).toBe('unitless');
    expect(fieldUnitLabel(поле({ type: 'number' }), 'uk')).toBe('без одиниці');
  });

  it('лишних пробелов и пустых кусков не появляется', () => {
    const f = поле({ type: 'toggle', options: [
      { value: 'a', label: '  Лет ' }, { value: 'b', label: 'Месяцев' }] });
    expect(fieldUnitLabel(f, 'ru')).toBe('Лет / Месяцев');
  });
});

describe('fieldUnitLabel: реальные данные', () => {
  const булево: Record<string, string> = { ru: 'да или нет', en: 'yes or no', uk: 'так або ні' };

  it('ни один переключатель в данных не булев по типу', () => {
    // Флажков в проекте нет: если появятся, ветка checkbox их обслужит честно.
    const флажки = getCalculators('ru')
      .flatMap((c) => c.fields).filter((f) => (f.type as string) === 'checkbox');
    expect(флажки).toHaveLength(0);
  });

  for (const locale of публичные) {
    it(`${locale}: описание переключателя равно его вариантам`, () => {
      const переключатели = getCalculators(locale)
        .flatMap((c) => c.fields.map((f) => ({ calc: c.id, f })))
        .filter((x) => x.f.type === 'toggle');
      expect(переключатели.length, 'переключатели должны быть в данных').toBeGreaterThan(0);

      for (const { calc, f } of переключатели) {
        const текст = fieldUnitLabel(f, locale);
        const ожидание = (f.options ?? []).map((o) => o.label.trim()).join(' / ');
        expect(текст, `${calc}.${f.name}`).toBe(ожидание);
        expect(текст, `${calc}.${f.name}: служебные значения`).not.toMatch(/\[object|undefined|null/);
        // Ложное булево описание допустимо, только если варианты и правда «да/нет».
        const варианты = (f.options ?? []).map((o) => o.label.toLowerCase());
        const настоящийБулев = варианты.length === 2
          && варианты.every((v) => /^(да|нет|yes|no|так|ні)$/.test(v));
        if (!настоящийБулев) {
          expect(текст.toLowerCase(), `${calc}.${f.name}`).not.toContain(булево[locale]);
        }
      }
    });
  }

  it('непубличные локали не ломают функцию', () => {
    const f = поле({ type: 'toggle', options: [{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }] });
    for (const locale of locales) {
      expect(typeof fieldUnitLabel(f, locale)).toBe('string');
      expect(fieldUnitLabel(f, locale).length).toBeGreaterThan(0);
    }
  });
});
