import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const analyticsSource = readFileSync('src/components/Analytics.astro', 'utf8');
const calculatorSource = readFileSync('src/components/islands/CalculatorIsland.tsx', 'utf8');

const taxonomy = [
  'calculator_view',
  'calculator_input_started',
  'calculator_result_shown',
  'calculator_validation_error',
  'calculator_copy_link_clicked',
  'calculator_copy_link_confirmed',
  'calculator_copy_link_cancelled',
  'language_switch_clicked',
  'related_calculator_clicked',
  'contact_link_clicked',
];

describe('analytics event taxonomy', () => {
  it('contains every approved event', () => {
    for (const event of taxonomy) expect(analyticsSource).toContain(`'${event}'`);
  });

  it('allows only non-sensitive metadata', () => {
    const allowedMetadata = analyticsSource.match(/const allowedMetadata = ([^\n]+)/)?.[1] ?? '';
    expect(allowedMetadata).toBe("new Set(['calculator_id', 'locale', 'target_locale', 'target_path']);");
    expect(allowedMetadata).not.toMatch(/amount|value|result|input/);
    expect(calculatorSource.match(/trackAnalyticsEvent\([^;]+/g)?.join('\n')).not.toMatch(/\b(?:values|result|amount)\b/);
  });
});
