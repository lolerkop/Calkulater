// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора working-days-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcWorkingDays } from '../../../../lib/calculators/workingDays';
import { shared } from './shared.generated';

const runtime: CalculatorClientRuntime = {
  compute: calcWorkingDays,
  localization: shared,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function WorkingDaysCalculatorLegacyIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
