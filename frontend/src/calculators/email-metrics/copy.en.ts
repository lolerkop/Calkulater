import type { CalculatorCopy } from '../../lib/platform/types';

export const emailMetricsCopyEn: CalculatorCopy = {
  name: 'Email marketing metrics calculator',
  slug: 'email-marketing-metrics-calculator',
  shortDescription: 'Delivery, open and click rates for an email campaign.',
  longDescription:
    'The denominators here are chosen deliberately and they are not all the same. Open and click rates divide by delivered messages rather than by sent ones, because an email that never reached the inbox never had a chance to be opened, and counting it against the copy punishes the writing for the mail server\'s behaviour. The click-to-open rate divides by opens instead, and answers a genuinely different question: how convincing the message is to someone already reading it. A campaign can have a poor click rate and an excellent click-to-open rate, and that combination points at the subject line rather than at the content.',
  seoTitle: 'Email marketing metrics calculator — open and click rates',
  seoDescription:
    'Calculate delivery, open, click and click-to-open rates for an email campaign from sent, delivered, opened and clicked counts.',
  h1: 'Email marketing metrics calculator',
  keywords: ['email marketing metrics', 'open rate', 'click-to-open rate', 'delivery rate'],
  howToUse: [
    'Enter how many emails were sent.',
    'Enter how many were actually delivered.',
    'Enter how many were opened and how many were clicked.',
    'The funnel must narrow at every step — each figure is at most the previous one.',
  ],
  howItWorks:
    'Delivery rate is delivered ÷ sent. Open and click rates divide by delivered. The click-to-open rate divides clicks by opens.',
  example: 'Of 12,000 sent, 11,640 delivered, 3,025 opened and 412 clicked gives a 97% delivery rate and a 25.99% open rate.',
  faq: [
    {
      q: 'Why divide the open rate by delivered rather than sent?',
      a: 'Because undelivered mail could not be opened. Dividing by sent mixes list hygiene into a metric that is supposed to measure the subject line.',
    },
    {
      q: 'What is the difference between the click rate and the click-to-open rate?',
      a: 'The click rate measures clicks against everyone who received the email; the click-to-open rate measures them against those who opened it. A high second figure with a low first one points at the subject line, not the content.',
    },
    {
      q: 'How reliable are open rates now?',
      a: 'Less than they used to be. Privacy features that pre-fetch tracking pixels inflate opens, so the trend over time is far more informative than the absolute figure.',
    },
    {
      q: 'Why is a step in my funnel larger than the one before it?',
      a: 'That is an export error rather than an unusual campaign. Opens cannot exceed deliveries and clicks cannot exceed opens; a reversal usually means the counts come from different date ranges.',
    },
  ],
};
