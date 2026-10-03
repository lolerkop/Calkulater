// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора wallpaper-calculator.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { calcWallpaper } from '../../../../lib/calculators/wallpaper';
import { validate } from './validate';

const runtime: CalculatorClientRuntime = {
  compute: calcWallpaper,
  validate,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'> & {
  runtimeLocalization: NonNullable<CalculatorClientRuntime['localization']>;
};

export default function WallpaperCalculatorLegacyIsland(props: Props) {
  const { runtimeLocalization, ...islandProps } = props;
  return <CalculatorIsland {...islandProps} runtime={{ ...runtime, localization: runtimeLocalization }} />;
}
