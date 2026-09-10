// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора body-fat-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcBodyFat } from '../../../../lib/calculators/bodyFat';
import { shared } from './shared.generated';

const runtime: CalculatorClientRuntime = {
  compute: calcBodyFat,
  localization: shared,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function BodyFatCalculatorLegacyIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
