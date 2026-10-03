import type { CalculatorCopy } from '../../lib/platform/types';

export const bikeWheelSizeCopyEn: CalculatorCopy = {
  "name": "Bicycle wheel size calculator",
  "slug": "bike-wheel-size",
  "shortDescription": "Estimate wheel geometry from ETRTO, or calculate it from a measured outside diameter.",
  "seoTitle": "Bicycle wheel size calculator: diameter and circumference",
  "seoDescription": "Estimate wheel geometry from ETRTO, or calculate it from a measured outside diameter.",
  "h1": "Bicycle wheel size calculator",
  "keywords": [
    "bike wheel circumference",
    "ETRTO calculator",
    "wheel size calculator",
    "bike computer wheel size"
  ],
  "longDescription": "ETRTO numbers describe nominal tyre width and rim bead-seat diameter. This tool estimates outside diameter by assuming tyre height equals width; that is an approximation, not the ETRTO definition. Inch mode uses the entered outside diameter as a geometric measurement; an historical label such as “26 inch” is not necessarily that measurement.",
  "howToUse": [
    "For marking 25-622, enter width 25 and bead-seat diameter 622 mm.",
    "Treat the ETRTO result as an initial geometric estimate.",
    "In inch mode enter measured outside diameter, not only a nominal size name.",
    "For a bike computer, measure one loaded wheel revolution at working pressure."
  ],
  "howItWorks": "ETRTO estimate: D≈BSD+2W, where nominal width W substitutes for radial tyre height. Inches: D=d×25.4 mm. Then circumference C=πD, radius=D/2 and revolutions per km=1,000,000/C. Zero width describes a rim circle only, not a usable tyre assembly.",
  "example": "25-622: D≈622+2×25=672 mm, C≈2111.15 mm=2.11115 m and about 473.68 revolutions per km. This estimates geometry rather than measuring a particular tyre’s rollout.",
  "faq": [
    {
      "q": "How do I read an ETRTO tyre size?",
      "a": "25-622 means nominal width 25 mm and bead-seat diameter 622 mm. It helps match the bead size, but does not check all rim, tyre and frame compatibility."
    },
    {
      "q": "Why is tyre width doubled in this estimate?",
      "a": "Radial height contributes above and below the rim. This model approximates height with width; actual shape depends on tyre and rim."
    },
    {
      "q": "Why do nominal inches differ from ETRTO?",
      "a": "Historical inch labels are ambiguous. 28 and 29 can both use a 622 mm bead seat; “26” alone does not identify one bead-seat diameter."
    },
    {
      "q": "Is estimated circumference suitable for a bike computer?",
      "a": "Rollout varies with construction, rim, pressure and load. Measure the distance of one loaded revolution for calibration."
    },
    {
      "q": "How do I pass circumference to the gear calculator?",
      "a": "Divide millimetres by 1000:2111.15 mm → 2.11115 m. Prefer measured rollout when available."
    }
  ],
  "disclaimer": "Preliminary geometry assuming height≈width. It does not establish exact rollout, tyre fit, clearance or safe installation."
};
