// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора discount-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcDiscount } from '../../../../lib/calculators/discount';
import { shared } from './shared.generated';

const runtime: CalculatorClientRuntime = {
  compute: calcDiscount,
  localization: shared,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function DiscountCalculatorLegacyIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
