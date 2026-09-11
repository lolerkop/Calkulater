// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора bmi-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcBmi } from '../../../../lib/calculators/bmi';
import { shared } from './shared.generated';

const runtime: CalculatorClientRuntime = {
  compute: calcBmi,
  localization: shared,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function BmiCalculatorLegacyIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
