import type { CalculatorCopy } from '../../lib/platform/types';

export const numberToWordsCopyEn: CalculatorCopy = {
  name: "Number to words converter",
  slug: "number-to-words",
  shortDescription: "A number written out in words, plus an amount in words for documents.",
  longDescription:
    "Writes a number out in words group by group: billions, millions, thousands, remainder. Grammatical agreement lives in the thousands — one thousand, two thousand — and the scale word takes the form the last two digits of the group require. Alongside comes the amount in words with kopecks: the line contracts and invoices ask for. Negative numbers start with the word minus, and zero stays zero.",
  seoTitle: "Number to words converter — write numbers out online",
  seoDescription: "Convert a number into words and get the amount in words with kopecks for a contract or an invoice.",
  h1: "Number to words converter",
  keywords: ["number to words", "amount in words", "spell out numbers", "write numbers in words"],
  howToUse: [
    "Enter a whole number — written-out form does not take a fractional part.",
    "For a document, use the \"Amount in words\" line: it already carries the kopecks.",
    "A negative number begins with the word minus.",
    "The limit is 999,999,999,999 in absolute value.",
  ],
  howItWorks: "The number is split into groups of three, each group is written in words, and the scale word is added in the required form.",
  example: "1234 is written as \"one thousand two hundred thirty four\".",
  faq: [
    { q: "Why does the thousands group change form?", a: "In Russian the word for thousand is feminine and the numeral agrees with it, while million and billion are masculine. The written form follows the grammar of the source language." },
    { q: "Where does the ending of the scale word come from?", a: "It is chosen by the last two digits of the group: 1 takes one form, 2 to 4 another, everything else a third, and numbers from 11 to 14 always take the last one." },
    { q: "Can a fractional number be written out?", a: "No, the written form works with whole numbers. For money use the amount line: roubles go in words and kopecks in digits, as documents expect." },
    { q: "Why is there a limit of 999,999,999,999?", a: "Beyond it come the trillions, whose names diverge between traditions: what one calls a billion another calls a milliard. The limit sits where that confusion has not started yet." },
  ],
};
