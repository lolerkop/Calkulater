import { describe, expect, it } from 'vitest';
import {
  CATEGORY_MEMBERSHIP_LOOKAHEAD,
  CATEGORY_MEMBERSHIP_TARGET,
  categoryMembershipTarget,
} from '../scripts/category-membership-scale.mjs';

// Гейт масштаба ОДНОГО раздела.
//
// Та же болезнь, что у подборки: фиксированная цель однажды остаётся позади,
// прогноз перестаёт строиться и проверка молча становится пустой. Здесь
// закреплено, что цель всегда строго впереди текущего числа членов, и что
// сертифицированная цель не опускается ниже 100 — числа, на котором раздел
// был измерен и признан помещающимся в тот же жёсткий потолок обычного
// маршрута.

describe('цель прогноза раздела', () => {
  it('всегда строго больше текущего числа членов', () => {
    for (const members of [0, 1, 43, 99, 100, 101, 125, 200, 1000]) {
      expect(categoryMembershipTarget(members), `при ${members} членах`).toBeGreaterThan(members);
    }
  });

  it('не опускается ниже сертифицированной цели', () => {
    for (const members of [0, 43, 99]) {
      expect(categoryMembershipTarget(members)).toBeGreaterThanOrEqual(CATEGORY_MEMBERSHIP_TARGET);
    }
  });

  it('после перерастания цели смотрит на задел вперёд', () => {
    const target = CATEGORY_MEMBERSHIP_TARGET;
    expect(categoryMembershipTarget(target + 7)).toBe(target + 7 + CATEGORY_MEMBERSHIP_LOOKAHEAD);
  });

  it('сертифицированная цель — не меньше 100 членов', () => {
    expect(CATEGORY_MEMBERSHIP_TARGET).toBeGreaterThanOrEqual(100);
    expect(CATEGORY_MEMBERSHIP_LOOKAHEAD).toBeGreaterThan(0);
  });
});

// Предел перечня раздела: та же величина, что у каталога, и обе проверки
// обязаны говорить об одном и том же числе.
describe('предел ItemList раздела', () => {
  it('не выше каталожного и не нулевой', async () => {
    const { CATEGORY_ITEM_LIST_MAX } = await import('../scripts/category-membership-scale.mjs');
    expect(CATEGORY_ITEM_LIST_MAX).toBeGreaterThan(0);
    expect(CATEGORY_ITEM_LIST_MAX).toBeLessThanOrEqual(24);
  });
});
