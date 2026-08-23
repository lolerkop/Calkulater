// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа калькулятора quarter-mile-elapsed-time. Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../components/islands/CalculatorIsland';
import type { CalculatorClientRuntime } from '../../lib/platform/runtime';
import { compute } from './compute';
import { localization } from './localization';

const runtime: CalculatorClientRuntime = {
  compute,
  localization,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function QuarterMileElapsedTimeIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
