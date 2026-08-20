import type { CalculatorCopy } from '../../lib/platform/types';

export const heatingPowerCopyEn: CalculatorCopy = {
  name: "Heating power calculator",
  slug: "heating-power-calculator",
  shortDescription: "Heater or radiator power from room volume and a specific heat requirement.",
  longDescription:
    "Sizes heating from volume rather than floor area. With a 3.2 m ceiling the same room needs almost a fifth more heat than at 2.7 m, and the familiar «hundred watts per square metre» rule of thumb loses that difference entirely. The specific requirement is entered by hand because it depends on insulation, region and the age of the building: the usual spread of 30 to 50 watts per cubic metre means a one-and-a-half-fold difference in the final figure, so no single value can be presented as a universal standard. The window allowance is added separately — heat loss through glazing does not scale with room volume.",
  seoTitle: "Heating power calculator for a room",
  seoDescription: "Calculate the heating power a room needs from its volume, the specific heat requirement and the number of windows — in kilowatts and watts.",
  h1: "Heating power calculator",
  keywords: ["heating power calculator", "radiator size calculator", "heater power for a room", "kw needed to heat a room"],
  howToUse: [
    "Enter the floor area and the ceiling height — the calculation works from volume.",
    "Set the specific requirement: about 30 W/m³ for an insulated house, 40 for an ordinary one, 50 for a cold one.",
    "Enter the number of windows — each adds a hundred watts.",
    "Compare the kilowatts with the rating of the appliance you are choosing.",
  ],
  howItWorks:
    "Volume = floor area × ceiling height. Power = volume × specific requirement, plus a hundred watts per window. The result is shown in kilowatts and in watts.",
  example: "A 20 m² room with a 2.7 m ceiling and one window at 40 W/m³ needs 2.26 kW.",
  faq: [
    { q: "Why work from volume rather than floor area?", a: "Because it is air that gets heated, and how much of it there is depends on ceiling height. At 3.2 m instead of 2.7 m the same room needs almost a fifth more heat." },
    { q: "Which specific requirement should I choose?", a: "As a guide: 30 W/m³ for a well-insulated house, 40 for a typical flat, 50 for a corner room or an uninsulated house. It is an estimate rather than a standard, which is why it is entered by hand." },
    { q: "Where does the hundred watts per window come from?", a: "It is a common engineering allowance for heat loss through glazing. It is added separately because it depends on the number of windows, not on the volume of the room." },
    { q: "Does this apply to underfloor heating?", a: "It gives the required heat output whatever the method. Loop layout and pipe spacing are calculated separately." },
    { q: "Should I allow spare capacity?", a: "Usually 10–20% on top, so the appliance is not permanently at its limit. Raise the specific requirement if you want that margin built in." },
  ],
};
