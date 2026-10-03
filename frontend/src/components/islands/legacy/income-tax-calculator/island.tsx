// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора income-tax-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcIncomeTax } from '../../../../lib/calculators/incomeTax';


const runtime: CalculatorClientRuntime = {
  compute: calcIncomeTax,

};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'> & {
  runtimeLocalization: NonNullable<CalculatorClientRuntime['localization']>;
};

export default function IncomeTaxCalculatorLegacyIsland(props: Props) {
  const { runtimeLocalization, ...islandProps } = props;
  return <CalculatorIsland {...islandProps} runtime={{ ...runtime, localization: runtimeLocalization }} />;
}
