// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа калькулятора gas-laws. Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../components/islands/CalculatorIsland';
import type { CalculatorClientRuntime } from '../../lib/platform/runtime';
import { withSharedPhrases } from '../../lib/platform/runtime';
import { shared } from './shared.generated';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { localization } from './localization';

const runtime: CalculatorClientRuntime = {
  compute,
  contextualField,
  localization: withSharedPhrases(localization, shared),
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function GasLawsIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
