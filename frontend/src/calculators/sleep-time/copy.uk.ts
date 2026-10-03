import { dateTimeWave15ContractContent } from '../../data/dateTimeWave15ContractContent';
import type { CalculatorSeoCopy } from '../../lib/platform/types';

export const sleepTimeCopyUk: CalculatorSeoCopy = {
  name: 'Калькулятор часу сну',
  slug: 'chas-snu',
  shortDescription: "Час підйому або відходу до сну за умовними 90-хвилинними блоками.",
  seoTitle: 'Калькулятор часу сну за циклами по 90 хвилин',
  seoDescription: "Порівняйте час підйому й відходу до сну за блоками 90 хвилин і часом засинання; формула не визначає справжніх фаз сну.",
  h1: 'Калькулятор часу сну',
  keywords: ["час сну", "коли лягти спати", "час підйому", "90 хвилин розрахунок"],

    ...dateTimeWave15ContractContent.uk['sleep-time'],
  };
