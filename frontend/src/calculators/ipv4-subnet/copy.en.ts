import type { CalculatorCopy } from '../../lib/platform/types';

export const ipv4SubnetCopyEn: CalculatorCopy = {
  name: "IPv4 subnet calculator",
  slug: "ipv4-subnet-calculator",
  shortDescription: "Network address, mask, broadcast address and host count from CIDR notation.",
  longDescription:
    "Breaks an IPv4 network down from an address and a prefix length. All the arithmetic is bitwise: the address is a 32-bit number, the mask is a run of ones on the left, and the network address is their bitwise AND. That is exactly why a subnet boundary can fall inside an octet: a /20 prefix gives a mask of 255.255.240.0, which is not a network you work out in your head. Three cases are handled separately because the familiar «two to the power minus two» is wrong for them: /32 is a single host address, /31 is a two-address point-to-point link with no broadcast, and only from /30 down are the network and broadcast addresses subtracted.",
  seoTitle: "IPv4 subnet calculator — mask, network and hosts",
  seoDescription: "Calculate the network address, subnet mask, broadcast address, host range and host count from an IPv4 address and prefix length.",
  h1: "IPv4 subnet calculator",
  keywords: ["ipv4 subnet calculator", "subnet mask calculator", "cidr calculator", "network and broadcast address"],
  howToUse: [
    "Enter any address from the network — it need not be the network address itself.",
    "Enter the prefix length: the number after the slash in CIDR notation.",
    "Read the first and last host — that is the range available for assignment.",
    "The wildcard mask is handy for access lists on Cisco equipment.",
  ],
  howItWorks:
    "The address becomes a 32-bit number and the mask a run of ones set by the prefix. The network address is the bitwise AND of the two; the broadcast address is the network with ones in every free bit.",
  example: "Address 192.168.1.10 with a /24 prefix belongs to 192.168.1.0 with mask 255.255.255.0 and 254 hosts.",
  faq: [
    { q: "Must I enter the network address itself?", a: "No, any address from the network works. The calculator drops the low bits according to the mask and finds the network address itself." },
    { q: "Why does /20 give 255.255.240.0?", a: "Because a subnet boundary need not align with an octet boundary. Twenty mask bits end halfway through the third octet, which yields 240." },
    { q: "How many hosts are in a /31?", a: "Two, and both are usable. It is a point-to-point link under RFC 3021: no network or broadcast address is set aside." },
    { q: "And in a /32?", a: "A single address. That prefix designates one specific host, for example a route to a single server." },
    { q: "Is IPv6 supported?", a: "No, IPv4 only. IPv6 addressing works differently, and mixing them in one calculation would conflate two different models." },
  ],
};
