// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора working-days-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcWorkingDays } from '../../../../lib/calculators/workingDays';


const runtime: CalculatorClientRuntime = {
  compute: calcWorkingDays,

};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'> & {
  runtimeLocalization: NonNullable<CalculatorClientRuntime['localization']>;
};

export default function WorkingDaysCalculatorLegacyIsland(props: Props) {
  const { runtimeLocalization, ...islandProps } = props;
  return <CalculatorIsland {...islandProps} runtime={{ ...runtime, localization: runtimeLocalization }} />;
}
