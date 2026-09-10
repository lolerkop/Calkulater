// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора mortgage-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcMortgage } from '../../../../lib/calculators/mortgage';
import { shared } from './shared.generated';

const runtime: CalculatorClientRuntime = {
  compute: calcMortgage,
  localization: shared,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function MortgageCalculatorLegacyIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
