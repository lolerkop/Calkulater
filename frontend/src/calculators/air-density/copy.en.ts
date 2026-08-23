import type { CalculatorCopy } from '../../lib/platform/types';

export const airDensityCopyEn: CalculatorCopy = {
  name: "Air density calculator",
  slug: "air-density",
  shortDescription: "Density of moist air from temperature, pressure and humidity.",
  longDescription:
    "Moist air is LIGHTER than dry air \u2014 which surprises almost everyone. A water molecule weighs 18 against 29 for average air, and each one displaces a heavier one, so heat and humidity lower the density twice over. The consequences are practical: less lift from a wing, less power from a naturally aspirated engine, a longer take-off run. Saturation pressure follows the Tetens formula.",
  seoTitle: "Air density calculator \u2014 from temperature, pressure and humidity",
  seoDescription: "Calculate the density of moist air from temperature, atmospheric pressure and relative humidity.",
  h1: "Air density calculator",
  keywords: ["air density", "moist air", "saturation pressure", "standard atmosphere"],
  howToUse: [
    "Pressure in hectopascals: 1013.25 hPa is the standard sea-level atmosphere.",
    "Humidity as a percentage of saturation at that temperature.",
    "The deviation row compares against the standard density of 1.225 kg/m\u00b3.",
    "This covers dry air plus water vapour; other constituents and heavy dust are not modelled.",
  ],
  howItWorks: "\u03c1 = p_dry/(287.058\u00b7T) + p_vapour/(461.495\u00b7T), saturation pressure by Tetens.",
  example: "At 20 \u00b0C, 1013.25 hPa and 50 % humidity the density is 1.1997 kg/m\u00b3.",
  faq: [
    { q: "Why is moist air lighter than dry air?", a: "Because a water molecule is lighter than an average air molecule: 18 against 29 atomic units. At the same pressure and temperature a cubic metre holds the same number of molecules, so swapping heavy ones for light ones lowers the mass." },
    { q: "How far does density fall in the heat?", a: "Considerably. At 35 \u00b0C with high humidity it sits about ten per cent below standard. Aviation feels it: the take-off run lengthens and the climb rate drops \u2014 hence hot-day weight limits." },
    { q: "What is the standard 1.225 figure?", a: "The density of dry air at 15 \u00b0C and 1013.25 hPa, the reference of the International Standard Atmosphere. Aerodynamic figures are normalised to it so that tests in different weather stay comparable." },
    { q: "Does altitude matter?", a: "Through pressure. Enter the actual pressure at your elevation: at a kilometre it is around 900 hPa and density drops by roughly a tenth." },
  ],
};
