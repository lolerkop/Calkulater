// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора calorie-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcCalorie } from '../../../../lib/calculators/calorie';
import { shared } from './shared.generated';

const runtime: CalculatorClientRuntime = {
  compute: calcCalorie,
  localization: shared,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function CalorieCalculatorLegacyIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
