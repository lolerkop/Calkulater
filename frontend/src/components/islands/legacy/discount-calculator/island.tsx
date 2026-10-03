// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора discount-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcDiscount } from '../../../../lib/calculators/discount';


const runtime: CalculatorClientRuntime = {
  compute: calcDiscount,

};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'> & {
  runtimeLocalization: NonNullable<CalculatorClientRuntime['localization']>;
};

export default function DiscountCalculatorLegacyIsland(props: Props) {
  const { runtimeLocalization, ...islandProps } = props;
  return <CalculatorIsland {...islandProps} runtime={{ ...runtime, localization: runtimeLocalization }} />;
}
