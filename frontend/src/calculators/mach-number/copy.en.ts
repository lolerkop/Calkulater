import type { CalculatorCopy } from '../../lib/platform/types';

export const machNumberCopyEn: CalculatorCopy = {
  name: "Mach number calculator",
  slug: "mach-number",
  shortDescription: "Mach number from speed and air temperature, with the flight regime named.",
  longDescription:
    "The Mach number is not a speed but a ratio to the speed of sound in the same air, so the same ground speed means different things at different altitudes. At cruise level, around −56 °C, sound travels almost ten per cent slower than at sea level, and an airliner at 900 km/h sits noticeably closer to the sound barrier than it appears. That is why the temperature is entered here rather than the altitude: the speed of sound depends on temperature alone.",
  seoTitle: "Mach number calculator — speed of sound and flight regime",
  seoDescription: "Compute the Mach number from speed and air temperature, with the speed of sound and the regime: subsonic, transonic or supersonic.",
  h1: "Mach number calculator",
  keywords: ["Mach number", "speed of sound", "sound barrier", "supersonic"],
  howToUse: [
    "Enter the temperature at the altitude in question: about 15 °C at sea level, about −50 °C at ten kilometres.",
    "The speed of sound does not depend on pressure or altitude directly — only on air temperature.",
    "The regime follows the usual boundaries: below 0.8 subsonic, below 1.2 transonic, below 5 supersonic.",
    "This does not apply to water or other media: the coefficient is set for air.",
  ],
  howItWorks: "Speed of sound 331.3·√(1 + t/273.15) m/s; the Mach number is the speed divided by it.",
  example: "900 km/h at −50 °C is Mach 0.873 — the transonic range is already close.",
  faq: [
    { q: "Why does the Mach number depend on temperature?", a: "The speed of sound is set by how quickly molecules pass a disturbance along, and that depends on their thermal speed. Cold air carries sound more slowly, so the same ground speed gives a higher Mach number." },
    { q: "Why is the supersonic boundary not exactly one?", a: "Because an aircraft is not a point: the flow over the wing accelerates beyond the free stream, and local supersonic flow appears from about 0.8. That is exactly why the 0.8 to 1.2 band is called transonic." },
    { q: "What temperature is there at what altitude?", a: "In the standard atmosphere the temperature falls about 6.5 degrees per kilometre up to eleven kilometres and then holds near −56.5 °C. For an exact figure take the actual temperature from the report." },
    { q: "Does this work for water?", a: "No. Sound travels at about 1500 m/s in water, and the air formula does not apply there. This calculation is meant for air." },
  ],
};
