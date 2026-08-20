import type { CalculatorCopy } from '../../lib/platform/types';

export const print3dCostCopyEn: CalculatorCopy = {
  name: "3D printing cost calculator",
  slug: "3d-printing-cost-calculator",
  shortDescription: "Filament, electricity and printer wear in the cost of a single printed part.",
  longDescription:
    "Works out what a printed part actually costs. Filament is charged by the gram rather than by the spool: the price per gram is derived from the spool price and weight, so a part costs exactly what it weighs. Electricity comes from the printer's power draw and the print time, wear is entered per hour, and both are set by hand because they depend on the specific printer and tariff. Any markup is applied to the whole cost rather than to filament alone — otherwise it would not cover the hours the printer is occupied.",
  seoTitle: "3D printing cost calculator — cost per part",
  seoDescription: "Calculate the cost of a 3D print: filament use, electricity, printer wear and the markup on the finished part.",
  h1: "3D printing cost calculator",
  keywords: ["3d printing cost calculator", "filament cost calculator", "cost per print", "3d printer running cost"],
  howToUse: [
    "Enter the weight of the part — the slicer reports it next to the print time.",
    "Enter the spool price and weight so the calculator can derive the price per gram.",
    "Set the printer power draw and your price per kilowatt-hour.",
    "Add wear and markup if you are quoting a price to a customer.",
  ],
  howItWorks:
    "Filament = part weight × (spool price ÷ spool weight). Electricity = power ÷ 1000 × hours × price per kWh. Wear = hourly rate × hours. Any markup applies to their sum.",
  example: "An 85 g part from a spool at 1800 per kilogram, printed over 6.5 hours, costs 157.29 including electricity.",
  faq: [
    { q: "Why is the price per gram not entered directly?", a: "Because the label always shows the spool price. The calculator divides it by the spool weight itself, so you cannot slip converting kilograms to grams by hand." },
    { q: "Which printer power should I enter?", a: "The average draw over a print, not the peak. A desktop FDM printer with a heated bed usually sits at 100–150 W; the exact figure is in the specification." },
    { q: "What counts as wear?", a: "Nozzle, belt and bed wear divided by their life in hours. That is your own estimate, which is why the field is optional and empty by default." },
    { q: "Is markup applied to filament only?", a: "No — to the whole cost, electricity and wear included. A markup on filament alone would not cover the hours the printer is occupied." },
    { q: "Are failed prints included?", a: "No. If a part succeeds on the second attempt, enter the combined weight and combined time of all attempts." },
  ],
};
