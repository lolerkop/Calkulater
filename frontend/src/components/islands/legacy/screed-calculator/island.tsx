// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора screed-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcScreed } from '../../../../lib/calculators/screed';
import { shared } from './shared.generated';

const runtime: CalculatorClientRuntime = {
  compute: calcScreed,
  localization: shared,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function ScreedCalculatorLegacyIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
