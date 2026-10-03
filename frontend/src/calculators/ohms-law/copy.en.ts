import type { CalculatorCopy } from '../../lib/platform/types';

export const ohmsLawCopyEn: CalculatorCopy = {
  name: "Ohm's law calculator",
  slug: "ohms-law-calculator",
  shortDescription: "Voltage, current or resistance from the known pair, with power dissipation.",
  seoTitle: "Ohm's law calculator — voltage, current, resistance, power",
  seoDescription: "Find missing voltage, current or resistance and dissipated power for an ohmic load from two known quantities.",
  h1: "Ohm's law calculator",
  keywords: ["ohm's law calculator", "voltage current resistance", "electrical power calculator"],
  longDescription: "Find the missing voltage, current or resistance for an ohmic load, plus dissipated power. Choose the known pair explicitly: U/I, U/R or I/R. Power is an output, not an input mode. Values are nonnegative magnitudes; the model does not describe current direction, a diode’s nonlinear characteristic or resistance changing with temperature.",
  howToUse: ["Choose the actual known pair; the third input marked as computed is not used.", "Enter volts, amperes and ohms. Divide milliamperes by 1000: 20 mA = 0.020 A.", "Compare calculated dissipation with the component rating under its cooling conditions; this tool does not choose a part rating."],
  howItWorks: "U = IR; I = U/R when R > 0; R = U/I when I > 0. P = UI = I²R = U²/R for positive R. For DC this is resistive power; for a purely resistive AC load use RMS voltage and current.",
  example: "12 V and 2 A give R = 12/2 = 6.00 Ω and P = 12 × 2 = 24.00 W. 5 V across 250 Ω give I = 0.020 A and P = 0.10 W. U = 0 with R = 100 Ω gives I = 0 and P = 0.",
  faq: [{"q": "Can power be supplied instead of voltage?", "a": "No. The supported pairs are U/I, U/R and I/R; power is calculated after recovering the third quantity."}, {"q": "When does Ohm’s law accept zero?", "a": "U = 0 with R > 0 gives zero current. I = 0 with known R also gives U = P = 0. Solving R from zero I or I from zero R requires division by zero, so these modes cannot provide a result."}, {"q": "Does this describe a motor or diode?", "a": "Not in general. Reactive loads need impedance and power factor; a diode does not have constant ohmic resistance U/I."}, {"q": "What happens to power if resistance doubles at the same voltage?", "a": "With ideal constant voltage U, I = U/R and P = U²/R. Doubling R halves both current and power. At 12 V and 6 Ω, power is 24 W; at 12 Ω it is 12 W. Constant current is different: P = I²R."}],
  disclaimer: "Ideal ohmic load with constant resistance. This calculation does not establish circuit, cooling or component-rating safety.",
};
