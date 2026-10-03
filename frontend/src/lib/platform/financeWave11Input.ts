export const choice = <T extends string>(value: unknown, choices: readonly T[], fallback: T): T | null =>
  value === undefined ? fallback : typeof value === 'string' && choices.includes(value as T) ? value as T : null;
