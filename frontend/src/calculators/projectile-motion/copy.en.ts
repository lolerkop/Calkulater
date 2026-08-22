import type { CalculatorCopy } from '../../lib/platform/types';

export const projectileMotionCopyEn: CalculatorCopy = {
  name: "Projectile motion calculator",
  slug: "projectile-motion",
  shortDescription: "Range, flight time and apex height of a body thrown at an angle.",
  longDescription:
    "Works out the flight of a body launched at an angle from any height: range, time to the ground, apex height and both velocity components. The launch height enters the calculation properly rather than as a correction — a throw from two metres carries noticeably further than one from the ground at the same speed, simply because the body falls for longer. Air resistance is not modelled: for a dense body at tens of metres per second the correction is small, but for a ball or a finned projectile it is substantial.",
  seoTitle: "Projectile motion calculator — range, time and apex",
  seoDescription: "Calculate the range, flight time and apex height of a projectile launched at an angle from a given height.",
  h1: "Projectile motion calculator",
  keywords: ["projectile motion calculator", "projectile range calculator", "trajectory calculator", "time of flight calculator"],
  howToUse: [
    "Enter the initial speed in metres per second.",
    "Set the angle to the horizon between 0 and 90 degrees.",
    "Give the launch height; leave it at zero for a throw from the ground.",
    "Compare the time to apex with the total time: launching from height makes them unequal halves.",
  ],
  howItWorks: "The speed splits into components: vy = v·sin α, vx = v·cos α. Flight time = (vy + √(vy² + 2gh)) ÷ g, and range = vx × time. Gravity is taken as 9.80665 m/s².",
  example: "A throw of 20 m/s at 45° from the ground carries 40.789 m in 2.884 s.",
  faq: [
    { q: "Why is 45° the best angle?", a: "Only from ground level. Raise the launch point and the optimum drops below 45°: the body falls for longer, so the horizontal component is worth more than the vertical one." },
    { q: "Is air resistance included?", a: "No. For a dense body at tens of metres per second the correction is small, but for a ball, a finned projectile or a light object it matters and shortens the range." },
    { q: "Why is the range exactly zero at 90°?", a: "Because there is no horizontal component. In binary arithmetic cos 90° comes out as 6·10⁻¹⁷, and without snapping that to zero the range would read as a trillionth of a millimetre instead of an honest nought." },
    { q: "Which value of g is used?", a: "9.80665 m/s², the standard value fixed by definition. Real gravity is about half a per cent higher at the poles and lower at the equator." },
  ],
};
