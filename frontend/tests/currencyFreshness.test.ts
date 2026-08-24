import { describe, expect, it } from 'vitest';
import {
  MAX_CURRENCY_SOURCE_CHECK_AGE_HOURS,
  assessCurrencySourceFreshness,
  assessProvidersFreshness,
  currencySetIsStale,
  currencySourceCheckAgeHours,
  providerMaxAgeHours,
} from '../src/lib/currencyFreshness';

function assess({
  effectiveDate = '2026-08-15',
  lastSuccessfulCheckAt = '2026-08-15T12:00:00.000Z',
  lastSuccessfulEffectiveDate = effectiveDate,
  now = new Date('2026-08-16T12:00:00.000Z'),
}: {
  effectiveDate?: string;
  lastSuccessfulCheckAt?: string;
  lastSuccessfulEffectiveDate?: string;
  now?: Date;
} = {}) {
  return assessCurrencySourceFreshness({
    effectiveDate,
    lastSuccessfulCheckAt,
    lastSuccessfulEffectiveDate,
    now,
  });
}

describe('currency source freshness', () => {
  it('measures age from the successful source check', () => {
    expect(currencySourceCheckAgeHours(
      '2026-08-15T12:00:00.000Z',
      new Date('2026-08-17T12:00:00.000Z'),
    )).toBe(48);
  });

  it('accepts an old effective date when the official source check is fresh', () => {
    const result = assess({
      effectiveDate: '2024-12-29',
      lastSuccessfulEffectiveDate: '2024-12-29',
      lastSuccessfulCheckAt: '2025-01-09T05:17:00.000Z',
      now: new Date('2025-01-09T12:00:00.000Z'),
    });

    expect(result).toEqual({ fresh: true, reason: 'fresh', ageHours: 6.716666666666667 });
  });

  it('rejects a successful source check older than 96 hours', () => {
    const staleCheck = new Date(
      Date.parse('2026-08-16T12:00:00.000Z') -
      (MAX_CURRENCY_SOURCE_CHECK_AGE_HOURS + 1) * 3_600_000,
    ).toISOString();

    expect(assess({ lastSuccessfulCheckAt: staleCheck })).toMatchObject({
      fresh: false,
      reason: 'stale-successful-check',
      ageHours: 97,
    });
  });

  it('keeps the long 29 December to 10 January holiday period fresh after daily checks', () => {
    for (const day of [3, 4, 5, 6, 7, 8, 9]) {
      const now = new Date(`2025-01-${String(day).padStart(2, '0')}T12:00:00.000Z`);
      const checkedAt = new Date(now.getTime() - 6 * 3_600_000).toISOString();

      expect(assess({
        effectiveDate: '2024-12-29',
        lastSuccessfulEffectiveDate: '2024-12-29',
        lastSuccessfulCheckAt: checkedAt,
        now,
      })).toMatchObject({ fresh: true, reason: 'fresh' });
    }
  });

  it('rejects a missing successful-check timestamp', () => {
    expect(assess({ lastSuccessfulCheckAt: '' })).toMatchObject({
      fresh: false,
      reason: 'missing-successful-check',
    });
  });

  it.each([
    ['invalid', 'invalid-successful-check'],
    ['2026-08-15', 'invalid-successful-check'],
    ['2026-08-17T12:00:00.000Z', 'future-successful-check'],
  ] as const)('rejects successful-check timestamp %s', (lastSuccessfulCheckAt, reason) => {
    expect(assess({ lastSuccessfulCheckAt })).toMatchObject({ fresh: false, reason });
  });

  it('rejects a success status associated with another rates effective date', () => {
    expect(assess({
      effectiveDate: '2026-08-15',
      lastSuccessfulEffectiveDate: '2026-08-14',
    })).toMatchObject({
      fresh: false,
      reason: 'effective-date-mismatch',
    });
  });

  it('rejects an invalid rates effective date', () => {
    expect(assess({
      effectiveDate: '2026-02-31',
      lastSuccessfulEffectiveDate: '2026-02-31',
    })).toMatchObject({
      fresh: false,
      reason: 'invalid-effective-date',
    });
  });
});


// ── Календарь публикации источников ────────────────────────────────────────
//
// Центробанки печатают курс не каждый день, и окна между публикациями у них
// разной длины. Плоский суточный порог этого не учитывал: обычное закрытие
// ЕЦБ на Пасху выглядело как устаревшие данные и валило сборку всего сайта.
// Эти тесты закрепляют, какие окна считаются нормальными, а какие — залипанием.

describe('возраст данных с оглядкой на календарь источника', () => {
  const ecb = (date: string, now: string) =>
    assessProvidersFreshness({ ecb: { date } }, new Date(now));

  it('обычный рабочий день: данные вчерашние', () => {
    // Обновление ходит в 05:17 UTC, а ЕЦБ публикует около 14:00 UTC, поэтому
    // утренний запуск ВСЕГДА берёт данные предыдущего рабочего дня.
    const a = ecb('2027-03-22', '2027-03-23T05:17:00.000Z');
    expect(a.fresh).toBe(true);
    expect(a.providers[0].ageHours).toBeCloseTo(5.3, 1);
  });

  it('понедельник после обычных выходных', () => {
    const a = ecb('2027-03-19', '2027-03-22T05:17:00.000Z');
    expect(a.fresh).toBe(true);
    expect(a.providers[0].ageHours).toBeCloseTo(53.3, 1);
  });

  it('вторник после Пасхи: четыре нерабочих дня подряд не считаются залипанием', () => {
    // Страстная пятница, суббота, воскресенье и Пасхальный понедельник закрыты,
    // поэтому после четверга следующая публикация только во вторник.
    const утро = ecb('2027-03-25', '2027-03-30T05:17:00.000Z');
    expect(утро.fresh, 'утренний запуск во вторник').toBe(true);
    expect(утро.providers[0].ageHours).toBeCloseTo(101.3, 1);

    // Худший момент — перед самой публикацией во вторник около 14:00 UTC.
    const передВыпуском = ecb('2027-03-25', '2027-03-30T13:59:00.000Z');
    expect(передВыпуском.fresh, 'перед публикацией во вторник').toBe(true);
    expect(передВыпуском.providers[0].ageHours).toBeCloseTo(110.0, 1);
  });

  it('Рождество 25–26 декабря на четверг с пятницей', () => {
    const a = ecb('2026-12-24', '2026-12-28T05:17:00.000Z');
    expect(a.fresh).toBe(true);
    expect(a.providers[0].ageHours).toBeCloseTo(77.3, 1);
  });

  it('НЕГАТИВНЫЙ КОНТРОЛЬ: шесть суток без публикации — уже залипание', () => {
    const a = ecb('2027-03-24', '2027-03-30T13:59:00.000Z');
    expect(a.fresh).toBe(false);
    expect(a.stale[0].reason).toBe('stale');
    expect(a.stale[0].ageHours).toBeGreaterThan(120);
  });

  it('НЕГАТИВНЫЙ КОНТРОЛЬ: пропущенная неделя публикаций', () => {
    const a = ecb('2027-03-18', '2027-03-30T05:17:00.000Z');
    expect(a.fresh).toBe(false);
    expect(a.stale[0].reason).toBe('stale');
  });

  it('резервному источнику послаблений не даётся: он обновляется ежедневно', () => {
    // Тот же возраст, что проходит у ЕЦБ, для резерва означает залипание.
    const резерв = assessProvidersFreshness(
      { erapi: { date: '2027-03-25', fallback: true } },
      new Date('2027-03-30T05:17:00.000Z'),
    );
    expect(резерв.fresh).toBe(false);
    expect(резерв.stale[0].reason).toBe('stale');

    expect(providerMaxAgeHours('ecb')).toBe(120);
    expect(providerMaxAgeHours('erapi')).toBe(96);
    expect(providerMaxAgeHours('неизвестный')).toBe(96);
  });

  it('признак устаревания для посетителя считается по тем же правилам', () => {
    // Иначе ворота пропускали бы сборку, а на странице висело бы
    // предупреждение об устаревших данных.
    const пасха = { ecb: { date: '2027-03-25' }, bnm: { date: '2027-03-27' } };
    expect(currencySetIsStale(пасха, new Date('2027-03-30T05:17:00.000Z'))).toBe(false);

    const залипание = { ecb: { date: '2027-03-18' }, bnm: { date: '2027-03-27' } };
    expect(currencySetIsStale(залипание, new Date('2027-03-30T05:17:00.000Z'))).toBe(true);
  });
});
