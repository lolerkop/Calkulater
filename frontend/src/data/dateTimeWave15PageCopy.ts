import {dateTimeWave15ContractContent}from './dateTimeWave15ContractContent';
const metadata:Record<string,Record<string,{seoDescription:string}>>={
  "en": {
    "age-calculator": {
      "seoDescription": "Calculate age in complete calendar years, months and days from birth to a chosen reference date, with an explicit end-of-month anniversary convention."
    }
  },
  "de": {
    "age-calculator": {
      "seoDescription": "Berechne das Alter in vollständigen Kalenderjahren, Monaten und Tagen zwischen Geburt und Stichtag, mit offener Regel für Monatsenden."
    }
  },
  "es": {
    "age-calculator": {
      "seoDescription": "Calcula la edad en años, meses y días naturales entre nacimiento y referencia, con una regla explícita para aniversarios al final del mes."
    }
  },
  "uk": {
    "working-days-calculator": {
      "seoDescription": "Порахуйте робочі, календарні, вихідні й виключені дні між двома включеними датами; свята задаються вручну, без готового календаря країни."
    }
  }
};
export function getDateTimeWave15PageCopy(id:string,locale:string){const body=dateTimeWave15ContractContent[locale as keyof typeof dateTimeWave15ContractContent]?.[id];return body?{...body,...metadata[locale]?.[id]}:undefined;}
