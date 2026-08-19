import type { CalculatorCopy } from '../../lib/platform/types';

export const testScorePercentCopyEn: CalculatorCopy = {
  name: 'Test score percentage calculator',
  slug: 'test-score-percentage-calculator',
  shortDescription: 'Turn correct answers into a percentage, with an optional pass mark.',
  longDescription:
    'Divides correct answers by the total number of questions and shows the percentage, the number of errors and the share they represent. Give a pass mark and the result gains a verdict. The denominator is every question on the test, so skipping one costs you the same as answering it wrongly.',
  seoTitle: 'Test score percentage calculator — correct answers to percent',
  seoDescription: 'Convert correct answers into a test percentage, see how many you got wrong and whether you cleared the pass mark.',
  h1: 'Test score percentage calculator',
  keywords: ['test score calculator', 'percentage of correct answers', 'exam percentage'],
  howToUse: ['Enter how many answers were correct.', 'Enter how many questions the test had.', 'Add a pass mark if you want a verdict.'],
  howItWorks: 'percentage = correct ÷ total × 100, and the error count is simply the difference.',
  example: '18 correct out of 20 questions is 18 ÷ 20 × 100 = 90 percent.',
  faq: [
    { q: 'Why can I not get a letter grade?', a: 'Grade scales differ between schools and countries. Without a reference table the conversion would be made up, so the result stays a percentage.' },
    { q: 'Do skipped questions count against me?', a: 'Yes. The denominator is the whole test, so an unanswered question counts the same as a wrong one.' },
    { q: 'What happens if I enter more correct answers than questions?', a: 'That is rejected. The arithmetic would happily return 105 percent, which looks like an answer but is an input error.' },
    { q: 'Is the pass mark required?', a: 'No, it is optional. Leave it empty and you simply get the percentage without a verdict.' },
  ],
};
