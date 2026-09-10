// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора tile-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcTile } from '../../../../lib/calculators/tile';
import { shared } from './shared.generated';

const runtime: CalculatorClientRuntime = {
  compute: calcTile,
  localization: shared,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function TileCalculatorLegacyIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
