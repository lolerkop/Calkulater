import type { CalculatorCopy } from '../../lib/platform/types';

export const physicsPowerCopyEn: CalculatorCopy = {
  name: "Mechanical power calculator",
  slug: "mechanical-power-calculator",
  shortDescription: "Power, work or time from P = W ÷ t.",
  seoTitle: "Mechanical power calculator — P = W ÷ t",
  seoDescription: "Calculate mechanical power, work or time from P = W ÷ t in SI units.",
  h1: "Mechanical power calculator",
  keywords: ["mechanical power calculator", "power from work and time", "p = w/t calculator"],
  longDescription: "Relate mechanical work to elapsed time: find average power, duration, or work at constant average power. Use it to compare lifting rates and energy transfer. One watt is one joule per second; power is not stored energy. The result is not a motor’s electrical input power because losses and efficiency are not inputs.",
  howToUse: ["Choose power, time or work and enter the two known quantities.", "Use joules, seconds and watts: multiply minutes by 60 and kilojoules by 1000.", "Work and power are nonnegative here. Power and work modes require positive duration; zero power cannot determine duration."],
  howItWorks: "Pavg = W/t; t = W/P; W = Pavg t. This is the average over an interval; varying power requires integration over time. Metric horsepower uses 1 PS = 735.49875 W. Signed force work can be negative in general, but this interface calculates a nonnegative amount of transferred energy.",
  example: "1000 J in 10 s gives P = 100 W = 0.136 metric horsepower. The same work in 20 s gives 50 W. Inverse modes: 600 J at 50 W take 12 s; 75 W over 4 s transfer 300 J.",
  faq: [{"q": "Is this instantaneous motor power?", "a": "No. W/t gives average power over the interval. Peak or instantaneous power can differ."}, {"q": "Can I use lifting work from mgh?", "a": "Yes, as ideal useful work. Dividing by time gives average useful power; motor input power additionally needs efficiency."}, {"q": "Why can zero watts not determine time?", "a": "Nonzero work cannot be completed in finite time at zero power. With zero work and zero power, time is still undetermined: 0/0 does not give an answer."}, {"q": "Is metric horsepower identical to mechanical hp?", "a": "No. This tool uses metric horsepower: 735.49875 W. Mechanical hp is about 745.6999 W. Thus 100 W is about 0.136 metric horsepower. Check which unit a specification uses before comparing equipment ratings."}],
  disclaimer: "Average nonnegative mechanical power. Efficiency, peak loading and electrical supply power are not calculated.",
};
