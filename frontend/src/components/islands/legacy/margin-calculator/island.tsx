// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора margin-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcMargin } from '../../../../lib/calculators/margin';
import { validate } from './validate';

const runtime: CalculatorClientRuntime = {
  compute: calcMargin,
  validate,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'> & {
  runtimeLocalization: NonNullable<CalculatorClientRuntime['localization']>;
};

export default function MarginCalculatorLegacyIsland(props: Props) {
  const { runtimeLocalization, ...islandProps } = props;
  return <CalculatorIsland {...islandProps} runtime={{ ...runtime, localization: runtimeLocalization }} />;
}
