// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора margin-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcMargin } from '../../../../lib/calculators/margin';
import { shared } from './shared.generated';

const runtime: CalculatorClientRuntime = {
  compute: calcMargin,
  localization: shared,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function MarginCalculatorLegacyIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
