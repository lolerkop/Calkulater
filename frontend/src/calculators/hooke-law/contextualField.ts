import type { CalculatorContextualField } from '../../lib/platform/types';

// The mode hides the unknown; it is shown in the result rather than a stale input.
// Preserve already-localised labels and units.
export const contextualField: CalculatorContextualField = field => field;
