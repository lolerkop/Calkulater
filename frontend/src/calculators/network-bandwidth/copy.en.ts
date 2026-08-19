import type { CalculatorCopy } from '../../lib/platform/types';

export const networkBandwidthCopyEn: CalculatorCopy = {
  name: "Network bandwidth calculator",
  slug: "network-bandwidth-calculator",
  shortDescription: "Bandwidth required for a number of concurrent users.",
  longDescription:
    "Multiplies the number of users by the share active at once and the bandwidth each one needs, then adds the headroom you choose. Nothing is hidden in a protocol coefficient: real overhead depends on protocol, codec and network, so every factor that changes the answer is a visible field.",
  seoTitle: "Network bandwidth calculator — capacity for concurrent users",
  seoDescription: "Calculate the bandwidth an office or venue needs from the number of concurrent users, per-user demand and your chosen headroom.",
  h1: "Network bandwidth calculator",
  keywords: ["network bandwidth calculator", "bandwidth per user", "internet capacity planning"],
  howToUse: ["Enter how many users the link serves.", "Enter the bandwidth each one needs.", "Set the share active at once and the headroom."],
  howItWorks: "Raw bandwidth = users × active share × per-user demand; the requirement adds the headroom on top.",
  example: "50 users at 5 Mbit/s each is 250 Mbit/s raw, or 300 Mbit/s with 20 percent headroom.",
  faq: [
    { q: "Should I count all users or only active ones?", a: "Both, separately. Enter the total and set the share active at once — a hundred seats rarely stream simultaneously." },
    { q: "Where does the headroom percentage go?", a: "It is added on top of the raw figure. Nothing else is applied behind it, because real protocol overhead varies too much to guess on your behalf." },
    { q: "How much headroom is sensible?", a: "That depends on how bursty the traffic is. The field exists so the assumption stays yours and stays visible." },
    { q: "Why megabits and not megabytes?", a: "Links are sold in bits per second. The result also shows megabytes per second for comparison with download speeds." },
  ],
};
