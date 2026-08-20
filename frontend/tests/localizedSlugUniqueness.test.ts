import { describe, expect, it } from 'vitest';
import { locales, getCalculators } from '../src/lib/i18n';

// Глобальная уникальность ЛОКАЛИЗОВАННОГО слага.
//
// Зачем отдельная защита. `dataQuality` проверяет уникальность `slug` и
// `fullPath`, но только по РУССКОМУ базовому реестру. Английский и украинский
// слаги живут в копирайте калькулятора (`copy.en.slug`, `copy.uk.slug`) и до
// сих пор не проверялись ничем.
//
// Дыра не гипотетическая. Phase 16R поймала настоящую коллизию уже на разборе
// релиза: новый `convert-fuel-economy` и выпущенный `fuel-consumption` делили
// украинский слаг `vytrata-palyva`. Маршруты различались категорией, поэтому
// проверка уникальности АДРЕСОВ молчала — а два разных калькулятора при этом
// назывались в украинской локали одинаково.
//
// Поэтому проверяется именно значение слага, а не `fullPath` и не пара
// «категория + слаг»: совпадение слага при разных категориях остаётся дефектом
// содержимого, даже когда адреса формально различны.
//
// Источник — `getCalculators(locale)`: он отдаёт ровно то, что публикуется в
// этой локали, вместе с легаси-калькуляторами и калькуляторами V2. Проверять
// манифест V2 отдельно значило бы не увидеть ровно ту коллизию, которая
// случилась: одна её сторона была легаси.
function duplicateSlugReport(locale: (typeof locales)[number]): string[] {
  const owners = new Map<string, string[]>();
  for (const calculator of getCalculators(locale)) {
    const bucket = owners.get(calculator.slug);
    if (bucket) bucket.push(calculator.id);
    else owners.set(calculator.slug, [calculator.id]);
  }
  return [...owners.entries()]
    .filter(([, ids]) => ids.length > 1)
    .map(([slug, ids]) => `${locale}: слаг «${slug}» занят калькуляторами ${ids.join(', ')}`)
    .sort();
}

describe('глобальная уникальность локализованных слагов', () => {
  for (const locale of locales) {
    it(`не допускает двух калькуляторов с одним слагом: ${locale}`, () => {
      expect(duplicateSlugReport(locale)).toEqual([]);
    });
  }

  it('слаг объявлен и имеет допустимую форму во всех локалях', () => {
    for (const locale of locales) {
      for (const calculator of getCalculators(locale)) {
        expect(calculator.slug, `${locale}/${calculator.id}: слаг обязателен`).toBeTruthy();
        expect(calculator.slug, `${locale}/${calculator.id}: слаг «${calculator.slug}»`)
          .toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      }
    }
  });

  // Отчёт об отказе — часть контракта: без локали и обоих идентификаторов
  // упавший тест не подсказывает, ЧЕЙ слаг менять, а менять надо всегда
  // неопубликованный.
  it('сообщение об отказе называет локаль, слаг и оба калькулятора', () => {
    const owners = new Map<string, string[]>([['vytrata-palyva', ['fuel-consumption', 'convert-fuel-economy']]]);
    const report = [...owners.entries()]
      .filter(([, ids]) => ids.length > 1)
      .map(([slug, ids]) => `uk: слаг «${slug}» занят калькуляторами ${ids.join(', ')}`);
    expect(report).toEqual([
      'uk: слаг «vytrata-palyva» занят калькуляторами fuel-consumption, convert-fuel-economy',
    ]);
  });
});
