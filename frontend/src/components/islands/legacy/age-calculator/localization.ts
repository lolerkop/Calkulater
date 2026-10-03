import {dateTimeWave15Phrases} from '../../../../data/dateTimeWave15ResultPhrases';
import type {CalculatorLocalization} from '../../../../lib/platform/types';
const ownedKeys=["Выберите дату рождения", "Дата расчёта раньше даты рождения"] as const;
export const localization:CalculatorLocalization=Object.fromEntries(['en','uk','de','es'].map(locale=>[locale,{values:dateTimeWave15Phrases(locale,ownedKeys)}]));
