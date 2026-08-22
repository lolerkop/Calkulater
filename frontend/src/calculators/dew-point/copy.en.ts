import type { CalculatorCopy } from '../../lib/platform/types';

export const dewPointCopyEn: CalculatorCopy = {
  name: "Dew point calculator",
  slug: "dew-point",
  shortDescription: "The temperature at which air of this humidity starts giving up moisture.",
  longDescription:
    "Works out the dew point from the Magnus–Tetens approximation: the temperature air must be cooled to before the vapour in it begins to condense. Alongside it comes the spread below the current temperature — the figure that actually decides whether dew forms on the glass, whether the wall sweats, and whether a lens fogs when carried in from the cold. The approximation holds to about 0.4 °C and was fitted for pressure near the ground; mountains and laboratories use other coefficients.",
  seoTitle: "Dew point calculator — from temperature and humidity",
  seoDescription: "Calculate the dew point from air temperature and relative humidity, with the spread below the current temperature and the value in degrees Fahrenheit.",
  h1: "Dew point calculator",
  keywords: ["dew point calculator", "condensation calculator", "humidity dew point", "when does condensation form"],
  howToUse: [
    "Enter the air temperature indoors or outside.",
    "Enter the relative humidity — a hygrometer or a weather report gives it.",
    "Watch the spread: the smaller it is, the closer a surface is to fogging.",
    "For a wall, use the room air here and compare against the wall's own temperature.",
  ],
  howItWorks: "γ = ln(RH/100) + 17.27·t/(237.7 + t), then dew point = 237.7·γ/(17.27 − γ).",
  example: "At 20 °C and 60% humidity the dew point is 11.99 °C — a spread of 8 °C, so condensation is not a risk.",
  faq: [
    { q: "Why does the dew point equal the temperature at 100%?", a: "Because the air is already saturated: no cooling is needed, condensation begins straight away. The logarithm of one is zero, and the formula honestly returns the original temperature." },
    { q: "Why does a wall sweat when the room is warm?", a: "Dew forms by the surface temperature, not the air temperature. A cold corner or window reveal can sit below the dew point while the room air is noticeably warmer." },
    { q: "How accurate is this formula?", a: "The Magnus–Tetens approximation holds to about 0.4 °C between 0 and 60 °C near the ground. Other coefficient pairs are used at altitude and at low temperatures, and their answers differ by tenths of a degree." },
    { q: "Why is zero humidity rejected?", a: "Because with zero humidity there is no dew point at all: there is nothing to condense. The logarithm of zero has no value at all, and that is a missing quantity, not an edge of the range." },
  ],
};
