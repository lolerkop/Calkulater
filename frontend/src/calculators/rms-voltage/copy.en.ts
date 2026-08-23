import type { CalculatorCopy } from '../../lib/platform/types';

export const rmsVoltageCopyEn: CalculatorCopy = {
  name: "RMS voltage calculator",
  slug: "rms-voltage",
  shortDescription: "Convert between peak, peak-to-peak and RMS voltage for sine, square and triangle waves.",
  longDescription:
    "A multimeter on AC volts shows the RMS value, an oscilloscope shows peak-to-peak, and the datasheet quotes the amplitude: three different numbers for one and the same signal. The crest factor ties them together, and it depends on the waveform alone — √2 for a sine, one for a square, √3 for a triangle. The mean absolute value is printed separately: cheap multimeters measure that and multiply by the sine form factor, which is why they misread any non-sinusoidal signal.",
  seoTitle: "RMS voltage calculator — peak, peak-to-peak and RMS",
  seoDescription: "Convert peak value, peak-to-peak and RMS voltage for sine, square and triangular waveforms.",
  h1: "RMS voltage calculator",
  keywords: ["RMS voltage", "peak value", "peak-to-peak", "crest factor"],
  howToUse: [
    "Pick which of the three values you know and enter it — the other two follow at once.",
    "The waveform is required: the same RMS value comes from different amplitudes on a sine and on a square wave.",
    "An oscilloscope usually reads peak-to-peak, so choose that mode when working from the screen.",
    "The \"mean absolute value\" row shows how far a multimeter without true RMS will be off.",
  ],
  howItWorks: "Crest factor by waveform: √2 sine, 1 square, √3 triangle; RMS = peak ÷ crest factor, peak-to-peak = 2 × peak.",
  example: "A 311 V sine amplitude gives an RMS voltage of 219.91 V — an ordinary mains supply.",
  faq: [
    { q: "Why is mains 220 V but the amplitude 311 V?", a: "220 volts is the RMS value: the DC voltage that would release the same heat in the same resistance. A sine amplitude is √2 times larger, about 311 volts, and insulation is rated for that." },
    { q: "Why does the waveform matter?", a: "The crest factor depends only on the shape. A square wave has an RMS equal to its amplitude, a sine is 1.414 times smaller, a triangle 1.732. Without the shape the question is simply not posed." },
    { q: "What does a cheap multimeter actually read?", a: "It measures the mean absolute value and multiplies by the sine form factor. That is right on a sine but tens of per cent off on a square wave or a PWM signal — which is why instruments advertise True RMS." },
    { q: "What is peak-to-peak?", a: "It is the distance from the bottom peak to the top one, twice the amplitude. Oscilloscopes display exactly that, and confusing it with the amplitude is the most common mistake when reading the screen." },
  ],
};
