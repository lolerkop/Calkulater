import type { DeDetailedContent } from './types';

export const deLegacy4Content: Partial<Record<string, DeDetailedContent>> = {
  'currency-converter': {
    longDescription: 'Rechnet Beträge zwischen neun Währungen zu den amtlichen Referenzkursen der Zentralbanken um, die beim Bau der Seite geholt werden. Das sind keine Echtzeitkurse und keine Kurse einer Wechselstube: eine Zentralbank stellt einen Referenzkurs für den Tag, während Banken einen Auf- und Abschlag nehmen und eine Gebühr erheben. Deshalb stehen Kursdatum, Quelle und der Stand der Aktualisierung mit im Ergebnis — ein Umrechnungskurs ohne sein Datum ist keine Angabe, sondern eine Behauptung.',
    howToUse: [
      'Trage den Betrag ein.',
      'Wähle die Ausgangs- und die Zielwährung.',
      'Sieh dir das Kursdatum an, bevor du das Ergebnis verwendest.',
      'Rechne für einen wirklichen Umtausch mit Aufschlag und Gebühr deiner Bank.',
    ],
    howItWorks: 'Der Betrag wird über den Referenzkurs der Quelle umgerechnet. Kreuzkurse laufen über die gemeinsame Bezugswährung, und Kursdatum sowie Quelle stehen im Ergebnis.',
    example: '100 US-Dollar ergeben zum Referenzkurs rund 92 Euro; eine Bank zahlt für denselben Umtausch spürbar weniger aus.',
    faq: [
      { q: 'Sind das Echtzeitkurse?', a: 'Nein. Verwendet werden amtliche Referenzkurse zum angezeigten Datum. Der Devisenmarkt bewegt sich fortlaufend, für einen Umtausch gilt der Kurs im Augenblick des Geschäfts.' },
      { q: 'Warum bekomme ich in der Bank weniger?', a: 'Weil eine Bank an- und verkauft und dazwischen einen Spread nimmt, oft zwei bis vier Prozent, plus Gebühr. Der Referenzkurs ist die Mitte, nicht der Preis.' },
      { q: 'Woher kommen die Kurse?', a: 'Von den Zentralbanken — Europäische Zentralbank, Nationalbank der Ukraine, Nationalbank der Republik Moldau — mit einer Ersatzquelle, falls die Hauptquelle beim Bau nicht erreichbar war. Die verwendete Quelle steht im Ergebnis.' },
      { q: 'Wie alt darf der Kurs sein?', a: 'Zentralbanken stellen an Bankarbeitstagen. An Wochenenden und Feiertagen gilt der letzte Kurs; ist er älter als vier Tage, weist der Rechner darauf hin.' },
      { q: 'Sind Gebühren berücksichtigt?', a: 'Nein. Umrechnungsentgelt, Auslandseinsatzentgelt und Kartenaufschläge kommen hinzu und unterscheiden sich je Anbieter.' },
    ],
  },
  'usd-to-eur': {
    longDescription: 'Rechnet US-Dollar in Euro zum amtlichen Referenzkurs, den die Europäische Zentralbank an jedem Bankarbeitstag gegen 16:00 Uhr mitteleuropäischer Zeit veröffentlicht. Dieser Kurs ist eine Bezugsgröße für Verträge, Buchhaltung und Vergleiche und nicht der Preis, zu dem eine Bank tauscht: zwischen Ankauf und Verkauf liegt ein Spread, der beim Bargeldwechsel am größten ist. Kursdatum und Quelle stehen deshalb neben dem Ergebnis.',
    howToUse: [
      'Trage den Betrag in US-Dollar ein.',
      'Lies das Ergebnis in Euro ab.',
      'Prüfe das Kursdatum — an Wochenenden gilt der Kurs des letzten Bankarbeitstags.',
      'Rechne für einen Umtausch den Aufschlag deiner Bank hinzu.',
    ],
    howItWorks: 'Der Betrag wird mit dem Referenzkurs der Europäischen Zentralbank multipliziert. Das Kursdatum und die Quelle werden mit ausgewiesen.',
    example: '100 US-Dollar ergeben zum Referenzkurs rund 92 Euro.',
    faq: [
      { q: 'Welcher Kurs wird verwendet?', a: 'Der Euro-Referenzkurs der Europäischen Zentralbank zum angezeigten Datum. Er wird an Bankarbeitstagen gegen 16:00 Uhr MEZ veröffentlicht.' },
      { q: 'Warum zahlt die Bank einen anderen Kurs?', a: 'Weil sie einen Spread zwischen An- und Verkauf nimmt und meist eine Gebühr erhebt. Beim Bargeldwechsel ist der Abstand am größten.' },
      { q: 'Gilt der Kurs am Wochenende?', a: 'Am Wochenende und an Feiertagen wird kein neuer Kurs gestellt; es gilt der letzte Bankarbeitstag, und das Datum steht im Ergebnis.' },
      { q: 'Kann ich damit eine Rechnung umrechnen?', a: 'Für eine Schätzung ja. Für Buchhaltung und Steuer gilt der Kurs des maßgeblichen Stichtags nach deiner örtlichen Regel.' },
    ],
  },
  'eur-to-mdl': {
    longDescription: 'Rechnet Euro in moldauische Lei zum amtlichen Kurs der Nationalbank der Republik Moldau. Der Leu ist eine Währung mit geringem Handelsvolumen, und der Abstand zwischen dem amtlichen Kurs und dem Preis in einer Wechselstube fällt hier deutlicher aus als bei den großen Paaren — für Überweisungen, Mieten und Preisvergleiche taugt der amtliche Kurs, für den Bargeldwechsel erwarte einen spürbaren Abschlag. Kursdatum und Quelle stehen neben dem Ergebnis.',
    howToUse: [
      'Trage den Betrag in Euro ein.',
      'Lies das Ergebnis in moldauischen Lei ab.',
      'Prüfe das Kursdatum: an Feiertagen gilt der letzte Bankarbeitstag.',
      'Rechne für Bargeld mit einem Abschlag der Wechselstube.',
    ],
    howItWorks: 'Der Betrag wird mit dem amtlichen Kurs der Nationalbank der Republik Moldau multipliziert, und Kursdatum sowie Quelle stehen im Ergebnis.',
    example: '100 Euro ergeben zum amtlichen Kurs rund 1950 moldauische Lei.',
    faq: [
      { q: 'Woher kommt der Kurs?', a: 'Von der Nationalbank der Republik Moldau, mit einer Ersatzquelle, falls sie beim Bau der Seite nicht erreichbar war. Die verwendete Quelle steht im Ergebnis.' },
      { q: 'Warum weicht die Wechselstube stärker ab als bei Euro und Dollar?', a: 'Weil der Leu weniger gehandelt wird. Geringere Liquidität heißt größerer Spread, und beim Bargeld kommt der Aufwand der Bevorratung hinzu.' },
      { q: 'Wie oft wird der Kurs erneuert?', a: 'An Bankarbeitstagen. An Wochenenden und Feiertagen bleibt der letzte Kurs stehen, und sein Datum ist ausgewiesen.' },
      { q: 'Taugt das für eine Überweisung?', a: 'Als Schätzung ja. Der Anbieter rechnet zu seinem eigenen Kurs ab und erhebt eine Gebühr, die getrennt zu prüfen ist.' },
    ],
  },
  'usd-to-mdl': {
    longDescription: 'Rechnet US-Dollar in moldauische Lei zum amtlichen Kurs der Nationalbank der Republik Moldau. Der Kurs entsteht meist als Kreuzkurs über den Euro, weil der Handel zwischen Leu und Dollar dünn ist — deshalb bewegt sich dieses Paar auch dann, wenn sich zwischen Leu und Euro nichts tut. Für Verträge und Preisvergleiche ist der amtliche Kurs die richtige Bezugsgröße, für den Bargeldwechsel gilt der Preis der Wechselstube.',
    howToUse: [
      'Trage den Betrag in US-Dollar ein.',
      'Lies das Ergebnis in moldauischen Lei ab.',
      'Prüfe das Kursdatum, bevor du den Wert weitergibst.',
      'Rechne für Bargeld mit dem Abschlag der Wechselstube.',
    ],
    howItWorks: 'Der Betrag wird mit dem amtlichen Kurs der Nationalbank der Republik Moldau multipliziert; Kreuzkurse laufen über die gemeinsame Bezugswährung. Kursdatum und Quelle stehen im Ergebnis.',
    example: '100 US-Dollar ergeben zum amtlichen Kurs rund 1790 moldauische Lei.',
    faq: [
      { q: 'Warum ändert sich der Kurs, obwohl der Leu stabil wirkt?', a: 'Weil er als Kreuzkurs über den Euro entsteht. Bewegt sich Euro gegen Dollar, bewegt sich auch Leu gegen Dollar, ohne dass sich am Verhältnis zum Euro etwas ändert.' },
      { q: 'Ist das der Kurs der Wechselstube?', a: 'Nein, es ist der amtliche Kurs. Eine Wechselstube nimmt einen Spread und beim Bargeld einen zusätzlichen Aufschlag.' },
      { q: 'Wie aktuell ist der Wert?', a: 'Er stammt vom letzten Bau der Seite; das Kursdatum steht im Ergebnis. Ist es älter als vier Tage, erscheint ein Hinweis.' },
      { q: 'Taugt das für die Buchhaltung?', a: 'Als Schätzung ja. Für Belege gilt der Kurs des Stichtags nach der Regel, die für dich maßgeblich ist.' },
    ],
  },
  'age-calculator': {
    longDescription: 'Zählt das Alter so, wie der Kalender es zählt, und nicht durch Teilen der Tage: zuerst volle Jahre, dann die vollen Monate darüber hinaus, dann die restlichen Tage. Genau daran scheitert die Näherung durch 365,25 — sie liefert eine Zahl, die an keinem Geburtstag stimmt. Neben der Zerlegung stehen die insgesamt gelebten Tage, der Wochentag der Geburt und die Zeit bis zum nächsten Geburtstag; Schaltjahre ergeben sich von selbst, weil dem Kalender gefolgt wird.',
    howToUse: [
      'Trage das Geburtsdatum ein.',
      'Lass das Rechendatum auf heute stehen oder wähle ein anderes.',
      'Lies das Alter in Jahren, Monaten und Tagen ab.',
    ],
    howItWorks: 'Vom Rechendatum werden zuerst die vollen Jahre abgezogen, dann die vollen Monate, dann bleiben die Tage. Ist der Tag im Zielmonat noch nicht erreicht, wird ein Monat weniger gezählt und die Tage aus der Länge des vorangegangenen Monats ergänzt.',
    example: 'Wer am 15. März 1990 geboren wurde, ist am 29. August 2026 genau 36 Jahre, 5 Monate und 14 Tage alt.',
    faq: [
      { q: 'Warum nicht einfach die Tage durch 365,25 teilen?', a: 'Weil das Alter am Geburtstag um eins steigt und nicht nach einer mittleren Jahreslänge. Die Näherung weicht je nach Lage der Schaltjahre um Tage ab.' },
      { q: 'Wie wird der 29. Februar behandelt?', a: 'In Jahren ohne Schalttag gilt der 28. Februar als Geburtstag. Die gezählten Tage folgen dem wirklichen Kalender, der Schalttag ist dort ein Tag wie jeder andere.' },
      { q: 'Kann ich das Alter zu einem anderen Datum berechnen?', a: 'Ja, das Rechendatum lässt sich frei setzen — auch in der Zukunft, etwa um das Alter zu einem Stichtag zu prüfen.' },
      { q: 'Warum steht der Wochentag der Geburt dabei?', a: 'Weil er sich aus demselben Datum ergibt und häufig gesucht wird. Gerechnet wird er nach dem gregorianischen Kalender.' },
    ],
  },
  'working-days-calculator': {
    longDescription: 'Zählt die Arbeitstage zwischen zwei Daten und überlässt die Regeln dir, statt einen Feiertagskalender vorzugeben: ob der Samstag als Arbeitstag zählt und welche einzelnen Tage entfallen, hängt vom Land, von der Branche und vom Vertrag ab. Feiertage werden nicht erraten, sondern als Liste eingetragen — ein fest eingebauter Kalender wäre für die Hälfte der Leser schlicht falsch. Beide Grenztage zählen mit, und Kalendertage, Arbeitstage und Wochenendtage stehen getrennt.',
    howToUse: [
      'Trage Anfangs- und Enddatum ein — beide Tage zählen mit.',
      'Stelle ein, ob Wochenenden als Arbeitstage gelten.',
      'Stelle gesondert ein, ob der Samstag ein Arbeitstag ist.',
      'Trage Feiertage und andere freie Tage als Liste ein.',
    ],
    howItWorks: 'Gezählt werden alle Tage von Anfang bis Ende einschließlich. Samstag und Sonntag entfallen, sofern die Einstellungen nichts anderes sagen, und die eingetragenen Daten werden zusätzlich abgezogen.',
    example: 'Vom 1. bis 30. September 2026 liegen 30 Kalendertage, davon 22 Arbeitstage bei einer Fünftagewoche.',
    faq: [
      { q: 'Warum sind keine Feiertage eingebaut?', a: 'Weil sie sich nach Land und Bundesland unterscheiden und sich jedes Jahr verschieben. Ein fest eingebauter Kalender wäre für viele Leser falsch, deshalb trägst du die Tage selbst ein.' },
      { q: 'Zählen Anfangs- und Endtag mit?', a: 'Ja, beide. Für einen Abstand ohne den ersten Tag zieh eins ab.' },
      { q: 'Was ist der Unterschied zwischen Arbeitstag und Werktag?', a: 'Der Werktag umfasst rechtlich meist auch den Samstag, der Arbeitstag folgt dem Dienstplan. Deshalb gibt es einen eigenen Schalter für den Samstag.' },
      { q: 'In welchem Format trage ich die freien Tage ein?', a: 'Als Liste von Daten, ein Datum je Zeile. Tage außerhalb des Zeitraums bleiben ohne Wirkung.' },
      { q: 'Taugt das für gesetzliche Fristen?', a: 'Als Schätzung. Fristen zählen je nach Gesetz in Kalendertagen, Werktagen oder Bankarbeitstagen, und die maßgebliche Regel steht im Vertrag oder Gesetz.' },
    ],
  },
  'date-shift-calculator': {
    longDescription: 'Verschiebt ein Datum um Jahre, Monate, Wochen und Tage und folgt dabei dem Kalender statt einer festen Jahreslänge. Die Reihenfolge ist festgelegt: zuerst Jahre und Monate, danach Wochen und Tage. Ist der Zielmonat kürzer, wird auf seinen letzten Tag gekappt — der 31. Januar plus ein Monat ist der 28. Februar, im Schaltjahr der 29. Deshalb führt ein Monat vor und ein Monat zurück nicht immer auf dasselbe Datum, und das ist gewöhnliche Kalenderarithmetik und kein Rundungsfehler. Wochentag, Tag des Jahres und Kalenderwoche nach ISO 8601 stehen mit im Ergebnis.',
    howToUse: [
      'Trage das Ausgangsdatum ein.',
      'Wähle, ob addiert oder abgezogen wird.',
      'Trage Jahre, Monate, Wochen und Tage ein — sie wirken zusammen.',
      'Lies Ergebnisdatum, Wochentag und Kalenderwoche ab.',
    ],
    howItWorks: 'Zuerst werden Jahre und Monate angewendet und bei einem kürzeren Zielmonat auf dessen letzten Tag gekappt, danach Wochen und Tage. Schaltjahre ergeben sich von selbst, weil dem Kalender gefolgt wird.',
    example: 'Der 1. Januar 2026 plus 90 Tage ist der 1. April 2026, ein Mittwoch — der 91. Tag des Jahres in der Kalenderwoche 14.',
    faq: [
      { q: 'Wie werden Monate verschiedener Länge gezählt?', a: 'Nach dem Kalender und nicht als 30 Tage. Gibt es den Tag im Zielmonat nicht, wird sein letzter Tag genommen: der 31. Januar plus ein Monat ist der 28. Februar.' },
      { q: 'Warum führt ein Monat vor und zurück nicht immer zum Ausgangsdatum?', a: 'Wegen der Kappung. Der 31. Januar plus ein Monat ist der 28. Februar, und der 28. Februar minus ein Monat ist der 28. Januar.' },
      { q: 'Was geschieht mit dem 29. Februar?', a: 'Bei einer Verschiebung um Jahre oder Monate rückt er in Jahren ohne Schalttag auf den 28. Bei Tagen und Wochen zählt er als gewöhnlicher Tag.' },
      { q: 'Werden Wochenenden und Feiertage übersprungen?', a: 'Nein, gezählt werden zusammenhängende Kalendertage. Für Arbeitstage nimm den Arbeitstage-Rechner.' },
      { q: 'Was ist die Kalenderwoche nach ISO 8601?', a: 'Die internationale Wochenzählung: eine Woche beginnt am Montag, und die erste Woche eines Jahres ist die mit dem ersten Donnerstag. Deshalb gehört der 1. Januar manchmal zur letzten Woche des Vorjahres.' },
    ],
  },
};
