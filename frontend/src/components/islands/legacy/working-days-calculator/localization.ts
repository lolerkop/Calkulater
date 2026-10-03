import {dateTimeWave15Phrases} from '../../../../data/dateTimeWave15ResultPhrases';
import type {CalculatorLocalization} from '../../../../lib/platform/types';
const ownedKeys=["Выберите начало и конец", "Выберите режим учёта выходных", "Дата конца раньше начала", "Используйте список дат в формате ГГГГ-ММ-ДД"] as const;
export const localization:CalculatorLocalization=Object.fromEntries(['en','uk','de','es'].map(locale=>[locale,{values:dateTimeWave15Phrases(locale,ownedKeys)}]));
