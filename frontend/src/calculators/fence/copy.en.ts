import type { CalculatorCopy } from '../../lib/platform/types';

export const fenceCopyEn: CalculatorCopy = {
  name: "Fence calculator",
  slug: "fence",
  shortDescription: "Posts, bays and rails for a fence of a given length.",
  longDescription:
    "Counts the frame of a fence. There is one more post than there are bays — the end of the run needs one on both sides — plus one for every opening, because a gate needs its own posts to hang from. Leave those out and the fence is cheaper on paper than on the plot. Bays round up, and the actual post spacing is worked back from that: forty metres in 2.5 m bays divides evenly, a hundred metres in 3 m bays does not, and the last bay comes out short. Showing that is more honest than staying quiet about it.",
  seoTitle: "Fence calculator: posts, bays and rails",
  seoDescription: "Work out how many posts, bays and metres of rail a fence takes, including gate posts and the real spacing.",
  h1: "Fence calculator",
  keywords: ["fence calculator", "fence post spacing", "how many fence posts", "fence rails calculator"],
  howToUse: [
    "Enter the total run of the fence.",
    "Enter the bay width you plan between posts.",
    "Enter the height and how many rails each bay carries.",
    "Add the gates and openings — each needs an extra post.",
  ],
  howItWorks:
    "Bays are the length divided by the bay width, rounded up. Posts are bays plus one plus the openings. Rail length is bays times bay width times the number of rails.",
  example: "40 m in 2.5 m bays with two rails and one gate needs 18 posts and 80 m of rail.",
  faq: [
    { q: "Why one more post than bays?", a: "Because posts stand at the ends of bays, not in the middle. Four bays have five posts, the same way four fence panels need five supports." },
    { q: "Why does a gate add a post?", a: "Because a gate hangs on its own posts, which are usually heavier than the line posts. A gate in the middle of a run breaks it into two, and both new ends need supporting." },
    { q: "What bay width should I use?", a: "2 to 3 m is usual. Wider bays use fewer posts but sag more, and the rail has to be stiffer to compensate." },
    { q: "Why is the actual spacing different from the bay width I entered?", a: "Because the length rarely divides evenly. The bays are made equal by shrinking them slightly, which is what the actual spacing line shows." },
    { q: "Is the cladding included?", a: "Only as an area. What that area costs depends on whether you are fitting boards, mesh or corrugated sheet." },
  ],
};
