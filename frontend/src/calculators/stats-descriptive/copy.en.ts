import type { CalculatorCopy } from '../../lib/platform/types';

export const statsDescriptiveCopyEn: CalculatorCopy = {
  name: 'Mean, median and standard deviation calculator',
  slug: 'descriptive-statistics-calculator',
  shortDescription: 'Mean, median, mode, range and standard deviation for a list of numbers.',
  longDescription:
    'Works out the descriptive statistics of any list: the mean and the median, which drift apart the more lopsided the data is, together with the mode, the range and the spread. Numbers can be pasted as a column or typed with spaces between them. Variance defaults to the sample form with n−1 in the denominator, because a list is usually a sample of something larger; the population form is an explicit choice, not a hidden one.',
  seoTitle: 'Mean and standard deviation calculator — median, mode, variance',
  seoDescription: 'Calculate the mean, median, mode, range, variance and standard deviation of a list of numbers.',
  h1: 'Mean and statistics calculator',
  keywords: ['mean calculator', 'median calculator', 'standard deviation calculator', 'variance calculator'],
  howToUse: [
    'Paste the numbers as a column, or type them separated by spaces.',
    'Choose whether the list is a sample or the whole population.',
    'Read the mean and the spread measures below it.',
  ],
  howItWorks:
    'The mean is the sum divided by the count. The median is the middle of the ordered list, or the average of the two central values when the count is even. Variance is the mean squared deviation from the mean — divided by n−1 for a sample and by n for a population — and the standard deviation is its square root.',
  example: 'The list 4, 8, 15, 16, 23, 42 has a mean of 18 but a median of 15.5: one large value pulls the mean up and barely moves the median.',
  faq: [
    { q: 'How does the median differ from the mean?', a: 'The mean uses the size of every value, so a single very large number shifts it noticeably. The median only uses the ordering, which makes it far more resistant to outliers.' },
    { q: 'Should I pick sample or population variance?', a: 'If the list is a sample you are using to judge something larger, use the sample form with n−1. If those numbers are every case you care about, use the population form.' },
    { q: 'Why is the mode sometimes shown as a dash?', a: 'Because there is not one. If every value occurs exactly once there is no most frequent value, and naming an arbitrary one would be wrong.' },
    { q: 'What happens if the list has a typo in it?', a: 'Nothing is calculated and the unrecognised fragment is shown instead. Silently skipping it would report statistics for data other than what you can see on screen.' },
  ],
};
