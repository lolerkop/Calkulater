// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора brick-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcBrick } from '../../../../lib/calculators/brick';
import { shared } from './shared.generated';

const runtime: CalculatorClientRuntime = {
  compute: calcBrick,
  localization: shared,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function BrickCalculatorLegacyIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
