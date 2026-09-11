// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора break-even-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcBreakEven } from '../../../../lib/calculators/breakEven';
import { shared } from './shared.generated';

const runtime: CalculatorClientRuntime = {
  compute: calcBreakEven,
  localization: shared,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function BreakEvenCalculatorLegacyIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
