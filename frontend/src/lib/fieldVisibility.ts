import type { Field } from './types';

/** One condition drives rendering, validation and saved-link fields. */
export function isFieldVisible(field: Pick<Field, 'showIf'>, values: Readonly<Record<string, unknown>>): boolean {
  const condition = field.showIf;
  if (!condition) return true;
  const selected = values[condition.field];
  if (condition.oneOf) return condition.oneOf.some((value) => value === selected);
  return selected === condition.equals;
}
