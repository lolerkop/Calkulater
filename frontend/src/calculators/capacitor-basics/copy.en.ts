import type { CalculatorCopy } from '../../lib/platform/types';

export const capacitorBasicsCopyEn: CalculatorCopy = {
  name: "Capacitor charge and energy calculator",
  slug: "capacitor-charge-energy",
  shortDescription: "Charge, voltage or capacitance of a capacitor, plus the stored energy.",
  longDescription:
    "Ties together the three quantities of a capacitor — charge, voltage and capacitance — solving in any direction, and shows the energy of the electric field alongside. Capacitance is entered in microfarads and charge in microcoulombs, the units printed on the body of the part. Do not confuse farads with a battery's amp-hours: amp-hours are a store of charge for sustained delivery, farads are the ability to hold charge at a given voltage, and the two are different in kind.",
  seoTitle: "Capacitor calculator — charge, voltage, capacitance and energy",
  seoDescription: "Calculate the charge, voltage or capacitance of a capacitor from Q = C·V, along with the energy stored in its electric field.",
  h1: "Capacitor charge and energy calculator",
  keywords: ["capacitor charge calculator", "capacitor energy calculator", "capacitance calculator", "q = cv calculator"],
  howToUse: [
    "Choose which of the three quantities you are after.",
    "Enter the other two — the one being solved turns read-only.",
    "Take the capacitance in microfarads straight off the body of the part.",
    "Check the voltage against the capacitor's rating: this calculation does not.",
  ],
  howItWorks: "Charge is capacitance times voltage: Q = C·V. The stored energy is half the capacitance times the voltage squared, with microfarads converted to farads.",
  example: "A 100 µF capacitor at 12 V carries 1,200 µC and stores 0.0072 J.",
  faq: [
    { q: "How do farads differ from a battery's amp-hours?", a: "Amp-hours are a store of charge for sustained delivery. Farads are the ability to hold charge at a given voltage. They are different in kind and do not compare directly." },
    { q: "Why does energy grow faster than voltage?", a: "Because charge is linear in voltage while energy is quadratic. Double the voltage gives double the charge and four times the energy." },
    { q: "Is the voltage rating taken into account?", a: "No. The calculation relates the quantities by formula and knows nothing of the datasheet limit. Exceeding the rated voltage destroys the part regardless of the result shown." },
    { q: "What about series and parallel?", a: "This covers one capacitor. In parallel the capacitances add; in series the reciprocals add." },
  ],
};
