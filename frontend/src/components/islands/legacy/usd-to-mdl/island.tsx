// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора usd-to-mdl.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcCurrency } from '../../../../lib/calculators/currency';


const runtime: CalculatorClientRuntime = {
  compute: calcCurrency,

};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'> & {
  runtimeLocalization: NonNullable<CalculatorClientRuntime['localization']>;
};

export default function UsdToMdlLegacyIsland(props: Props) {
  const { runtimeLocalization, ...islandProps } = props;
  return <CalculatorIsland {...islandProps} runtime={{ ...runtime, localization: runtimeLocalization }} />;
}
