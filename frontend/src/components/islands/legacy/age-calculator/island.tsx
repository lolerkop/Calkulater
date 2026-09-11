// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора age-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcAge } from '../../../../lib/calculators/age';
import { shared } from './shared.generated';

const runtime: CalculatorClientRuntime = {
  compute: calcAge,
  localization: shared,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function AgeCalculatorLegacyIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
