// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора compound-interest.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcCompound } from '../../../../lib/calculators/compound';
import { shared } from './shared.generated';

const runtime: CalculatorClientRuntime = {
  compute: calcCompound,
  localization: shared,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function CompoundInterestLegacyIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
