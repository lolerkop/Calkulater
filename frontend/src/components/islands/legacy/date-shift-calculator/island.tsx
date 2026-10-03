// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора date-shift-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcDateShift } from '../../../../lib/calculators/dateShift';
import { validate } from './validate';

const runtime: CalculatorClientRuntime = {
  compute: calcDateShift,
  validate,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'> & {
  runtimeLocalization: NonNullable<CalculatorClientRuntime['localization']>;
};

export default function DateShiftCalculatorLegacyIsland(props: Props) {
  const { runtimeLocalization, ...islandProps } = props;
  return <CalculatorIsland {...islandProps} runtime={{ ...runtime, localization: runtimeLocalization }} />;
}
