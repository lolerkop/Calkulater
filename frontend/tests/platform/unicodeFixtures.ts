// Помощник диагностики для ожидаемых форматированных значений.
//
// Формат различает неразрывный пробел U+00A0 между разрядами и обычный U+0020
// перед знаком валюты. Это часть продуктового контракта, а не оформление,
// поэтому сравнение остаётся точным: помощник ничего не нормализует, он лишь
// делает расхождение читаемым в отчёте о падении.

export const NBSP = ' ';

/** Показывает строку с явными кодами невидимых символов. */
export function explicit(value: string): string {
  return [...value]
    .map((ch) => {
      const code = ch.codePointAt(0)!;
      if (ch === ' ') return '⟨U+00A0⟩';
      if (ch === ' ') return '⟨U+202F⟩';
      if (ch === ' ') return '⟨U+0020⟩';
      return code > 0x7f && code < 0x400 ? `⟨U+${code.toString(16).toUpperCase().padStart(4, '0')}⟩` : ch;
    })
    .join('');
}

/**
 * Точное сравнение с понятной диагностикой. Никакой обрезки и замены пробелов:
 * подмена U+00A0 на обычный пробел — настоящая регрессия форматирования,
 * и тест обязан её показывать, а не прятать.
 */
export function expectExactText(actual: string, expected: string): void {
  if (actual !== expected) {
    throw new Error(
      `Тексты различаются.\n  ожидалось: ${explicit(expected)}\n  получено:  ${explicit(actual)}`,
    );
  }
}
