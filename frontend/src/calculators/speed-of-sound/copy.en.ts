import type { CalculatorCopy } from '../../lib/platform/types';

export const speedOfSoundCopyEn: CalculatorCopy = {
  name: "Speed of sound calculator",
  slug: "speed-of-sound",
  shortDescription: "The speed of sound in air from temperature, with a conversion to kilometres per hour.",
  longDescription:
    "The speed of sound depends on air temperature alone — neither pressure nor altitude enters it directly, because they cancel in the gas law. That is why sound travels more slowly on a frosty morning than in the heat, and why an airliner at cruise level is closer to the sound barrier than its ground speed suggests. The most practical row here is how long sound takes to cover a kilometre: that is exactly how the distance to a thunderstorm is judged from the seconds between flash and thunder.",
  seoTitle: "Speed of sound calculator — from air temperature",
  seoDescription: "Compute the speed of sound in air from the temperature, in metres per second and kilometres per hour, plus the time to cover a kilometre.",
  h1: "Speed of sound calculator",
  keywords: ["speed of sound", "sound in air", "distance to a storm", "sound barrier"],
  howToUse: [
    "Enter the temperature of the air the sound travels through: at ground level, at cruise altitude or in a freezer.",
    "Pressure and altitude do not affect the speed of sound directly — only temperature does.",
    "To judge the distance to a storm, divide the seconds between flash and thunder by three to get kilometres.",
    "This does not apply to water or other media: the coefficient here is set for air.",
  ],
  howItWorks: "c = 331.3·√(1 + t/273.15) m/s, where 331.3 is the speed of sound in dry air at zero degrees.",
  example: "At 20 °C sound travels at 343.2 m/s and covers a kilometre in 2.9 seconds.",
  faq: [
    { q: "Why does pressure not affect the speed of sound?", a: "Because a rise in pressure raises the density in the same proportion, and they enter the formula as a ratio. What remains is a dependence on temperature alone — which is why altitude matters only indirectly, through the cold." },
    { q: "Why divide the distance to a storm by three?", a: "Sound covers a kilometre in roughly three seconds. Light arrives instantly, so the seconds between flash and thunder divided by three give the kilometres to the strike." },
    { q: "Does humidity matter?", a: "A little: moist air is slightly lighter than dry air and sound travels about half a per cent faster in it at high humidity. The formula gives dry air, and everyday use ignores the correction." },
    { q: "What about water and steel?", a: "About 1500 m/s in water and about 5900 m/s in steel — many times faster than in air, because those media are far less compressible. This calculation does not apply to them." },
  ],
};
