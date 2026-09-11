// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора running-pace-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcPace } from '../../../../lib/calculators/pace';
import { shared } from './shared.generated';

const runtime: CalculatorClientRuntime = {
  compute: calcPace,
  localization: shared,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function RunningPaceCalculatorLegacyIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
