import type { CalculatorCopy } from '../../lib/platform/types';

export const thinLensCopyEn: CalculatorCopy = {
  name: "Thin lens calculator",
  slug: "thin-lens",
  shortDescription: "Image distance, magnification and image type from the thin lens equation.",
  longDescription:
    "One equation, 1/f = 1/d₀ + 1/dᵢ, describes the magnifying glass, the projector and the camera lens alike — only the position of the object relative to the focus tells them apart. Beyond the focus the lens forms a real inverted image you can catch on a screen; closer than the focus it forms a virtual upright image visible only through the lens. The sign of the answer is not a formality here but a direct statement of what you will get, so the image type is spelled out in words.",
  seoTitle: "Thin lens calculator — image distance and magnification",
  seoDescription: "Find the image distance, magnification and image type from the thin lens equation, or the focal length from two known distances.",
  h1: "Thin lens calculator",
  keywords: ["thin lens", "lens equation", "lens magnification", "optical power"],
  howToUse: [
    "A converging lens takes a positive focal length, a diverging lens a negative one.",
    "A positive image distance means a real image on the far side of the lens; a negative one means a virtual image on the same side as the object.",
    "Negative magnification means an inverted image, positive means upright; the absolute value is how many times the size changed.",
    "The \"focal length\" mode picks the lens when both distances are already fixed by the layout.",
  ],
  howItWorks: "1/f = 1/d₀ + 1/dᵢ, magnification −dᵢ/d₀, optical power 100/f in dioptres.",
  example: "An object 30 cm from a lens with a 10 cm focus forms an image at 15 cm, half the size and inverted.",
  faq: [
    { q: "Why is the magnification negative?", a: "The minus sign means the image is inverted, not that something went wrong. Every projector and every camera lens works this way: the sensor receives an upside-down picture and the electronics turn it back." },
    { q: "What happens when the object sits exactly at the focus?", a: "No image is formed at all: the rays leave the lens as a parallel beam and never converge. That is not \"very far away\" but the absence of an image, so the calculation refuses it." },
    { q: "When does a lens act as a magnifying glass?", a: "When the object is closer than the focus. The image distance comes out negative, the image is virtual and upright, and the magnification exceeds one in absolute value — exactly what you see through a loupe." },
    { q: "What is optical power in dioptres?", a: "It is the reciprocal of the focal length in metres. A lens with a 10 cm focus has a power of 10 dioptres, and that is the number written on a spectacle prescription." },
  ],
};
