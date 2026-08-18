import type { CalculatorDef } from './types';
import { categoryDefinitions } from '../categories/manifest.generated';

export type CalculatorGuidance = {
  useCases: string[];
  checklist: string[];
  mistakes: string[];
};

// Три списка категории — сценарии, чек-лист и ошибки — переехали в её модуль.
// Здесь они только собираются в карты: перечислять категории этот файл больше
// не обязан.
const commonUseCases: Record<CalculatorDef['category'], string[]> = Object.fromEntries(
  categoryDefinitions.map((definition) => [definition.id, [...definition.guidance.useCases]]),
) as Record<CalculatorDef['category'], string[]>;

const commonChecklist: Record<CalculatorDef['category'], string[]> = Object.fromEntries(
  categoryDefinitions.map((definition) => [definition.id, [...definition.guidance.checklist]]),
) as Record<CalculatorDef['category'], string[]>;

const commonMistakes: Record<CalculatorDef['category'], string[]> = Object.fromEntries(
  categoryDefinitions.map((definition) => [definition.id, [...definition.guidance.mistakes]]),
) as Record<CalculatorDef['category'], string[]>;

const specificMistakes: Partial<Record<string, string[]>> = {
  'income-tax-calculator': [
    'Считать прогрессивную шкалу одной ставкой на весь доход.',
    'Не отделять начисленную сумму от суммы “на руки”.',
    'Применять расчёт без проверки актуальных налоговых правил и вычетов.',
  ],
  'vat-calculator': [
    'Путать режим “выделить НДС” и “начислить НДС сверху”.',
    'Выбирать историческую ставку для актуального документа.',
    'Не проверять право на льготную или пониженную ставку.',
  ],
  'currency-converter': [
    'Сравнивать результат с наличным обменом без учёта курса покупки и продажи.',
    'Не проверять дату курса и коммерческий курс перед сделкой.',
    'Не учитывать комиссию перевода или конвертации.',
  ],
  'working-days-calculator': [
    'Не добавлять исключённые даты, праздники и переносы.',
    'Путать календарные дни с рабочими.',
    'Ошибаться в том, включать ли начальную и конечную дату.',
  ],
};

export function calculatorGuidance(calculator: CalculatorDef): CalculatorGuidance {
  return {
    useCases: commonUseCases[calculator.category],
    checklist: commonChecklist[calculator.category],
    mistakes: specificMistakes[calculator.id] ?? commonMistakes[calculator.category],
  };
}
