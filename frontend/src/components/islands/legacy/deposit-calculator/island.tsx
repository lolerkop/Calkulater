// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора deposit-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcDeposit } from '../../../../lib/calculators/deposit';
import { shared } from './shared.generated';

const runtime: CalculatorClientRuntime = {
  compute: calcDeposit,
  localization: shared,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function DepositCalculatorLegacyIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
