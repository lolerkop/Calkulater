// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа калькулятора paint-calculator. Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../components/islands/CalculatorIsland';
import type { CalculatorClientRuntime } from '../../lib/platform/runtime';
import { compute } from './compute';

const runtime: CalculatorClientRuntime = {
  compute,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function PaintCalculatorIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
