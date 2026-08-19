import type { CalculatorCopy } from '../../lib/platform/types';

export const engagementRateCopyEn: CalculatorCopy = {
  name: "Engagement rate calculator",
  slug: "engagement-rate-calculator",
  shortDescription: "Engagement rate of a post, by reach or by follower count.",
  longDescription:
    "Computes engagement rate — the share of reactions relative to the audience. There are two possible denominators and they give different numbers: reach shows how the post performed among those who saw it, while followers show how it performed against the whole audience. Neither is inherently correct, so the base is chosen explicitly and stated in the result: only figures with the same denominator can be compared.",
  seoTitle: "Engagement rate calculator — ER by reach and followers",
  seoDescription: "Calculate the engagement rate of a post by reach or by follower count, and compare figures on the same base.",
  h1: "Engagement rate calculator",
  keywords: ["engagement rate calculator", "er calculator", "engagement by reach", "social media engagement"],
  howToUse: ["Enter the total number of engagements.", "Choose the base: reach or followers.", "Enter its value and read the engagement rate."],
  howItWorks: "Engagement rate = engagements ÷ base × 100, where the base is either the post reach or the follower count, as you choose.",
  example: "450 engagements on a reach of 9000 give an engagement rate of 5.00%.",
  faq: [
    { q: "Which base is correct — reach or followers?", a: "Both are used and both are meaningful. Reach answers \"how did the post perform among those who saw it\"; followers answer \"how did it perform against the whole audience\". Only figures on the same base are comparable." },
    { q: "What counts as an engagement?", a: "Whatever you decide to include: likes, comments, shares, saves. What matters is counting the same way across every post you compare." },
    { q: "How does this differ from CTR?", a: "CTR is the share of clicks out of ad impressions. Engagement rate is the share of reactions out of a post’s audience. Different denominators, different actions." },
    { q: "What level is considered good?", a: "It depends on the platform, the topic and the audience size, so no benchmark is offered here. Compare against your own previous posts." },
  ],
};
