// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа калькулятора concrete. Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../components/islands/CalculatorIsland';
import type { CalculatorClientRuntime } from '../../lib/platform/runtime';
import { withSharedPhrases } from '../../lib/platform/runtime';
import { shared } from './shared.generated';
import { compute } from './compute';
import { localization } from './localization';

const runtime: CalculatorClientRuntime = {
  compute,
  localization: withSharedPhrases(localization, shared),
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function ConcreteIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
