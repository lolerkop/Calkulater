import type { CalculatorCopy } from '../../lib/platform/types';

export const colorConvertCopyEn: CalculatorCopy = {
  name: "HEX, RGB and HSL colour converter",
  slug: "hex-rgb-hsl-converter",
  shortDescription: "Convert a colour from HEX to RGB and HSL with a per-channel breakdown.",
  longDescription:
    "Turns a hexadecimal colour code into rgb() and hsl() notation and shows each channel separately. The three-character form expands by doubling every digit: #F0A is #FF00AA rather than #F00A00, because that is how the format is defined. Channels are parsed byte by byte and stay exact whole numbers from 0 to 255, so converting back returns the original code. Hue is shown as a whole number of degrees while saturation and lightness carry two decimals: fractions of a degree on the colour wheel are invisible to the eye, whereas tenths of a percent of lightness already show.",
  seoTitle: "HEX to RGB and HSL colour converter online",
  seoDescription: "Convert a hexadecimal colour code into rgb() and hsl(), and see the channel values and lightness.",
  h1: "HEX, RGB and HSL colour converter",
  keywords: ["colour converter", "hex to rgb", "rgb to hsl", "colour code converter"],
  howToUse: [
    "Enter a colour code — for example #2E86DE.",
    "The hash is optional: 2E86DE works too.",
    "The short three-character form expands automatically.",
    "Letter case does not matter.",
  ],
  howItWorks:
    "Each pair of hexadecimal characters is one channel from 0 to 255. For HSL the channels are divided by 255, then hue comes from which channel is largest, lightness is the average of the largest and smallest, and saturation comes from their difference. The lightness row is the HSL lightness as a percentage.",
  example: "The code #2E86DE is rgb(46, 134, 222) and hsl(210, 72.73%, 52.55%).",
  faq: [
    { q: "Why does #F0A become #FF00AA?", a: "The short form expands by doubling each character — that is how the format is defined. Padding with zeros would give a different colour: #F00A00 rather than #FF00AA." },
    { q: "Is the hash required?", a: "No, it is optional, and letter case does not matter either. Both #2e86de and 2E86DE work." },
    { q: "What does the lightness row mean?", a: "It is the HSL lightness as a percentage: 0 is black, 100 is white, and around 50 is a pure saturated colour. It is also the third number in the hsl() notation." },
    { q: "How does HSL lightness differ from perceived brightness?", a: "Lightness uses one formula for every channel, while the eye sees green as far lighter than blue. Two colours with the same HSL lightness can therefore look quite different, and checking contrast needs a separate measure." },
    { q: "Is precision lost in the conversion?", a: "No. Channels are parsed byte by byte and stay whole numbers from 0 to 255, so the HEX row always matches what you entered — allowing for the expanded short form and upper case." },
  ],
};
