// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора one-rep-max-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcOneRm } from '../../../../lib/calculators/oneRm';
import { shared } from './shared.generated';

const runtime: CalculatorClientRuntime = {
  compute: calcOneRm,
  localization: shared,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function OneRepMaxCalculatorLegacyIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
