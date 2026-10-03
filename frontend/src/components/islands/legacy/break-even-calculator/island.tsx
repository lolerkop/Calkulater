// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора break-even-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcBreakEven } from '../../../../lib/calculators/breakEven';
import { validate } from './validate';

const runtime: CalculatorClientRuntime = {
  compute: calcBreakEven,
  validate,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'> & {
  runtimeLocalization: NonNullable<CalculatorClientRuntime['localization']>;
};

export default function BreakEvenCalculatorLegacyIsland(props: Props) {
  const { runtimeLocalization, ...islandProps } = props;
  return <CalculatorIsland {...islandProps} runtime={{ ...runtime, localization: runtimeLocalization }} />;
}
