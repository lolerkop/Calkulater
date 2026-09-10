// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора eur-to-mdl.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcCurrency } from '../../../../lib/calculators/currency';
import { shared } from './shared.generated';

const runtime: CalculatorClientRuntime = {
  compute: calcCurrency,
  localization: shared,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function EurToMdlLegacyIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
