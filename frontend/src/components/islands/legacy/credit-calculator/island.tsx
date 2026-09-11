// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора credit-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcCredit } from '../../../../lib/calculators/credit';
import { shared } from './shared.generated';

const runtime: CalculatorClientRuntime = {
  compute: calcCredit,
  localization: shared,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function CreditCalculatorLegacyIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
