// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа калькулятора commission. Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../components/islands/CalculatorIsland';
import type { CalculatorClientRuntime } from '../../lib/platform/runtime';
import { compute } from './compute';
import { validate } from './validate';
import { contextualField } from './contextualField';
import { localization } from './localization';

const runtime: CalculatorClientRuntime = {
  compute,
  validate,
  contextualField,
  localization,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function CommissionIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
