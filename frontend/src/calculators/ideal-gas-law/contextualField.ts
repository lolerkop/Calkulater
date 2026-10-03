import type { CalculatorContextualField } from '../../lib/platform/types';

// Unit selectors change only the display/interpretation of the same input.
export const contextualField: CalculatorContextualField = (field, values, locale) => {
  if (field.name === 'n') return { ...field, unit: locale === 'ru' || locale === 'uk' ? 'моль' : 'mol' };
  if (field.name === 't') return { ...field, unit: values.tempUnit === 'c' ? '°C' : 'K' };
  if (field.name === 'v') return { ...field, unit: values.volumeUnit === 'l' ? 'L' : 'm³' };
  if (field.name === 'p') {
    const unit = values.pressureUnit === 'kpa' ? 'kPa' : values.pressureUnit === 'atm' ? 'atm' : 'Pa';
    return { ...field, unit };
  }
  return field;
};
