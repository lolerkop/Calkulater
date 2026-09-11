// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора date-shift-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcDateShift } from '../../../../lib/calculators/dateShift';
import { shared } from './shared.generated';

const runtime: CalculatorClientRuntime = {
  compute: calcDateShift,
  localization: shared,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function DateShiftCalculatorLegacyIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
