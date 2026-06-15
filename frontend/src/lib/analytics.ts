export type AnalyticsEventName =
  | 'calculator_view'
  | 'calculator_input_started'
  | 'calculator_result_shown'
  | 'calculator_validation_error'
  | 'calculator_copy_link_clicked'
  | 'calculator_copy_link_confirmed'
  | 'calculator_copy_link_cancelled'
  | 'language_switch_clicked'
  | 'related_calculator_clicked'
  | 'contact_link_clicked';

export type AnalyticsEventMetadata = {
  calculator_id?: string;
  locale?: string;
  target_locale?: string;
  target_path?: string;
};

export function trackAnalyticsEvent(
  name: AnalyticsEventName,
  metadata: AnalyticsEventMetadata = {},
): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('calcuway:analytics', {
    detail: { name, metadata },
  }));
}
