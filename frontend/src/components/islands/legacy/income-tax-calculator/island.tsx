// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора income-tax-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcIncomeTax } from '../../../../lib/calculators/incomeTax';
import { shared } from './shared.generated';

const runtime: CalculatorClientRuntime = {
  compute: calcIncomeTax,
  localization: shared,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function IncomeTaxCalculatorLegacyIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
