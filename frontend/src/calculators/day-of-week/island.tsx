// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа калькулятора day-of-week. Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../components/islands/CalculatorIsland';
import type { CalculatorClientRuntime } from '../../lib/platform/runtime';
import { compute } from './compute';
import { validateDate } from './validateDate';

const runtime: CalculatorClientRuntime = {
  compute,
  validateDate,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'> & {
  runtimeLocalization: NonNullable<CalculatorClientRuntime['localization']>;
};

export default function DayOfWeekIsland(props: Props) {
  const { runtimeLocalization, ...islandProps } = props;
  return <CalculatorIsland {...islandProps} runtime={{ ...runtime, localization: runtimeLocalization }} />;
}
