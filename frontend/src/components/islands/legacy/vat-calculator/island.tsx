// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора vat-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcVat } from '../../../../lib/calculators/vat';
import { shared } from './shared.generated';

const runtime: CalculatorClientRuntime = {
  compute: calcVat,
  localization: shared,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function VatCalculatorLegacyIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
