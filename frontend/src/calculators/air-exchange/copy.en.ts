import type { CalculatorCopy } from '../../lib/platform/types';

export const airExchangeCopyEn: CalculatorCopy = {
  name: "Air changes per hour calculator",
  slug: "air-changes-per-hour",
  shortDescription: "Required airflow from room volume and the air change rate.",
  longDescription:
    "The air change rate says how many times an hour the whole volume of a room is replaced. Sizing a fan or an air handling unit starts there: volume times rate gives the airflow in cubic metres per hour, and equipment is chosen against that. The rate is a field on purpose — a living room, a kitchen, a bathroom, a workshop and a laboratory differ by multiples, and borrowing someone else's figure is worse than asking.",
  seoTitle: "Air changes per hour calculator — required airflow",
  seoDescription: "Calculate the required airflow from room area, ceiling height and air changes per hour — in m³/h and L/s.",
  h1: "Air changes per hour calculator",
  keywords: ["air changes per hour", "required airflow", "fan sizing", "room ventilation"],
  howToUse: [
    "Take the rate from your design or the requirements for that particular room — it is a field here, not a built-in table.",
    "Measure the height to the structural ceiling, not the suspended one: the whole volume takes part.",
    "Litres per second are given because in-line fans are often rated in them.",
    "The airflow follows volume. For densely occupied rooms check the per-person requirement too.",
  ],
  howItWorks: "Airflow = area × height × air change rate.",
  example: "A 20 m² room with a 2.7 m ceiling at 3 air changes needs 162 m³/h.",
  faq: [
    { q: "Which rate should I use?", a: "It follows the purpose of the room and comes from your design or from sector requirements. The calculation deliberately does not fill it in: the spread between a living room and a production area reaches tens of times, and a borrowed figure here is worse than an empty field." },
    { q: "Why does the airflow not depend on people?", a: "The rate works from volume, not occupancy. For dense occupancy — meeting rooms, classrooms, halls — also check the per-person requirement and take the larger of the two." },
    { q: "Will a fan of this rating be enough?", a: "Rated output is measured without duct resistance. In a duct with grilles and bends it drops, sometimes by half, so a fan is chosen with margin on pressure, not just on flow." },
    { q: "What does \"air changes per day\" show?", a: "The same rate on a daily scale: how many times the air would be replaced in a day of continuous running. It makes the point plainly when someone proposes half an hour of ventilation a day." },
  ],
};
