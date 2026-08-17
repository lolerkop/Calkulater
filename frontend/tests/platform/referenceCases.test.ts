// Обобщённый прогон эталонных случаев: один тест обслуживает все калькуляторы
// V2 и будет обслуживать будущие — новый калькулятор не требует нового теста.
//
// Ожидаемые значения выведены вручную из формул и записаны в директориях
// калькуляторов; здесь они только проверяются.

import { describe, expect, it } from 'vitest';
import { v2Definitions } from '../../src/calculators/manifest.generated';

describe('эталонные случаи калькуляторов V2', () => {
  for (const definition of v2Definitions) {
    describe(definition.id, () => {
      const cases = definition.referenceCases ?? [];

      it('эталонные случаи заданы', () => {
        expect(cases.length).toBeGreaterThan(0);
      });

      for (const testCase of cases) {
        it(testCase.name, () => {
          const result = definition.compute(testCase.inputs);
          expect(result.primary.value).toBe(testCase.expectPrimary);
          for (const expected of testCase.expectSecondary ?? []) {
            const row = result.secondary.find((item) => item.label === expected.label);
            expect(row, `нет строки «${expected.label}»`).toBeDefined();
            expect(row!.value).toBe(expected.value);
          }
        });
      }
    });
  }
});
