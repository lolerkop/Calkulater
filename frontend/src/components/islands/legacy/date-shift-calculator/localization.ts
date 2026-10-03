import {dateTimeWave15Phrases} from '../../../../data/dateTimeWave15ResultPhrases';
import type {CalculatorLocalization} from '../../../../lib/platform/types';
const ownedKeys=["Выберите исходную дату", "Выберите направление сдвига", "Итоговая дата должна быть в диапазоне 0001–9999", "Интервал должен состоять из целых неотрицательных чисел"] as const;
export const localization:CalculatorLocalization=Object.fromEntries(['en','uk','de','es'].map(locale=>[locale,{values:dateTimeWave15Phrases(locale,ownedKeys)}]));
