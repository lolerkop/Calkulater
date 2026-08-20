import { describe, expect, it } from 'vitest';
import {
  CATALOG_HTML_CEILING_GZIP,
  CATALOG_SCALE_LOOKAHEAD_CARDS,
  CATALOG_SCALE_TARGET_CARDS,
  catalogScaleTarget,
} from '../scripts/catalog-scale.mjs';

// Гейт масштаба подборки.
//
// Проверка ловит не размер, а ВЫРОЖДЕНИЕ проверки. В Phase 16 помощник роста
// возвращал null, как только число карточек догоняло цель, и при 200 в
// настройке против 203 на сайте прогноз молча исчез из отчёта — в тот самый
// момент, когда предупреждение было нужнее всего. Здесь закреплено, что цель
// всегда строго впереди текущего числа, сколько бы карточек ни стало.

describe('цель прогноза подборки', () => {
  it('всегда строго больше текущего числа карточек', () => {
    for (const cards of [0, 1, 48, 199, 200, 203, 211, 299, 300, 301, 400, 1000]) {
      expect(catalogScaleTarget(cards), `при ${cards} карточках`).toBeGreaterThan(cards);
    }
  });

  it('не опускается ниже сертифицированной цели', () => {
    for (const cards of [0, 48, 211]) {
      expect(catalogScaleTarget(cards)).toBeGreaterThanOrEqual(CATALOG_SCALE_TARGET_CARDS);
    }
  });

  it('после перерастания цели смотрит на задел вперёд', () => {
    const target = CATALOG_SCALE_TARGET_CARDS; const ahead = CATALOG_SCALE_LOOKAHEAD_CARDS;
    expect(catalogScaleTarget(target + 10)).toBe(target + 10 + ahead);
  });

  it('сертифицированная цель — не меньше 300, потолок остался 30 КиБ', () => {
    expect(CATALOG_SCALE_TARGET_CARDS).toBeGreaterThanOrEqual(300);
    expect(CATALOG_SCALE_LOOKAHEAD_CARDS).toBeGreaterThan(0);
    expect(CATALOG_HTML_CEILING_GZIP).toBe(30 * 1024);
  });
});
