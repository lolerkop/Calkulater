// Полный реестр расчётов: легаси плюс Platform V2.
//
// Существует отдельно от `runners.ts`, потому что тот импортируется островом,
// а этот — нет. Разделение и есть механизм: клиентский граф не должен видеть
// реализации всех калькуляторов сразу. Используется сборкой и тестами.

import type { CalcFunction } from './types';
import { runners as legacyRunners } from './runners';
import { v2Runners } from '../calculators/runtime.generated';

export const allRunners: Record<string, CalcFunction> = { ...legacyRunners, ...v2Runners };
