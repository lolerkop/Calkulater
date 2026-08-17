// Фикстура: намеренное нарушение архитектуры. Guard обязан её поймать.
export function pick(calculatorId: string): string {
  if (calculatorId === 'percent-calculator') return 'особый случай';
  return 'общий путь';
}
