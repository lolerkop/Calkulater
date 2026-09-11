// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора laminate-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcLaminate } from '../../../../lib/calculators/laminate';
import { shared } from './shared.generated';

const runtime: CalculatorClientRuntime = {
  compute: calcLaminate,
  localization: shared,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function LaminateCalculatorLegacyIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
