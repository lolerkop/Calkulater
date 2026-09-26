import type { DeDetailedContent } from './types';

export const deLegacy4Content: Partial<Record<string, DeDetailedContent>> = {
  'currency-converter': {
    longDescription: 'Rechnet Beträge zwischen neun Währungen mit gespeicherten Referenzkursen um. Das sind keine Echtzeitkurse und keine Angebote einer Wechselstube: Banken können Auf- oder Abschläge und Gebühren anwenden. Für jede verwendete Währung nennt das Ergebnis die tatsächliche Quelle und ihr Datum; eine Ersatzquelle wird gesondert gekennzeichnet.',
    howToUse: [
      'Trage den Betrag ein.',
      'Wähle die Ausgangs- und die Zielwährung.',
      'Sieh dir das Kursdatum an, bevor du das Ergebnis verwendest.',
      'Rechne für einen wirklichen Umtausch mit Aufschlag und Gebühr deiner Bank.',
    ],
    howItWorks: 'Der Betrag wird über den Referenzkurs der Quelle umgerechnet. Kreuzkurse laufen über die gemeinsame Bezugswährung, und Kursdatum sowie Quelle stehen im Ergebnis.',
    example: '100 US-Dollar werden mit dem angezeigten Referenzkurs in Euro umgerechnet; das Angebot einer Bank kann abweichen.',
    faq: [
      { q: 'Sind das Echtzeitkurse?', a: 'Nein. Verwendet werden gespeicherte Referenzkurse. Die Quelle und das Datum jeder beteiligten Währung stehen im Ergebnis; für einen Umtausch gilt der Kurs des Anbieters.' },
      { q: 'Warum bekomme ich in der Bank einen anderen Betrag?', a: 'Eine Bank verwendet eigene An- und Verkaufskurse und kann zusätzlich eine Gebühr erheben. Der Referenzkurs ist kein verbindlicher Auszahlungsbetrag.' },
      { q: 'Woher kommen die Kurse?', a: 'Das Ergebnis nennt die tatsächlichen Quellen und Daten der verwendeten Währungen. Ist ein Hauptanbieter nicht verfügbar, wird die Ersatzquelle ausdrücklich markiert.' },
      { q: 'Wie alt darf der Kurs sein?', a: 'Referenzkurse können an Wochenenden und Feiertagen unverändert bleiben. Prüfe das Datum jeder Quelle; bei möglicher Veraltung erscheint ein Hinweis.' },
      { q: 'Sind Gebühren berücksichtigt?', a: 'Nein. Umrechnungsentgelt, Auslandseinsatzentgelt und Kartenaufschläge kommen hinzu und unterscheiden sich je Anbieter.' },
    ],
  },
  'usd-to-eur': {
    longDescription: 'Rechnet US-Dollar in Euro mit einem gespeicherten Referenzkurs um. Dessen tatsächliche Quelle und Datum stehen neben dem Ergebnis. Der Wert ist eine Schätzung und nicht der Preis, zu dem eine Bank tauscht: zwischen Ankauf und Verkauf liegt ein Spread, oft ergänzt um eine Gebühr.',
    howToUse: [
      'Trage den Betrag in US-Dollar ein.',
      'Lies das Ergebnis in Euro ab.',
      'Prüfe das Kursdatum — an Wochenenden gilt der Kurs des letzten Bankarbeitstags.',
      'Rechne für einen Umtausch den Aufschlag deiner Bank hinzu.',
    ],
    howItWorks: 'Der Betrag wird mit dem gespeicherten USD/EUR-Kreuzkurs multipliziert. Kursdatum und tatsächliche Quelle werden mit ausgewiesen.',
    example: '100 US-Dollar werden mit dem gespeicherten USD/EUR-Referenzkurs in Euro umgerechnet.',
    faq: [
      { q: 'Welcher Kurs wird verwendet?', a: 'Der gespeicherte Euro-Referenzkurs der im Ergebnis genannten Quelle zum dort angegebenen Datum.' },
      { q: 'Warum zahlt die Bank einen anderen Kurs?', a: 'Weil sie einen Spread zwischen An- und Verkauf nimmt und meist eine Gebühr erhebt. Beim Bargeldwechsel ist der Abstand am größten.' },
      { q: 'Gilt der Kurs am Wochenende?', a: 'Am Wochenende und an Feiertagen wird kein neuer Kurs gestellt; es gilt der letzte Bankarbeitstag, und das Datum steht im Ergebnis.' },
      { q: 'Kann ich damit eine Rechnung umrechnen?', a: 'Für eine Schätzung ja. Für Buchhaltung und Steuer gilt der Kurs des maßgeblichen Stichtags nach deiner örtlichen Regel.' },
    ],
  },
  'eur-to-mdl': {
    longDescription: 'Rechnet Euro in moldauische Lei mit gespeicherten Referenzkursen um. Quelle und Datum für EUR und MDL stehen getrennt neben dem Ergebnis; für MDL kann eine gekennzeichnete Ersatzquelle verwendet werden. Der Wert dient als Schätzung, nicht als Angebot einer Bank oder Wechselstube.',
    howToUse: [
      'Trage den Betrag in Euro ein.',
      'Lies das Ergebnis in moldauischen Lei ab.',
      'Prüfe das Kursdatum: an Feiertagen gilt der letzte Bankarbeitstag.',
      'Rechne für Bargeld mit einem Abschlag der Wechselstube.',
    ],
    howItWorks: 'Der Betrag wird mit dem Kreuzkurs aus den gespeicherten EUR- und MDL-Koeffizienten umgerechnet. Für beide Währungen stehen Quelle und Datum im Ergebnis.',
    example: '100 Euro werden mit dem angezeigten EUR/MDL-Kreuzkurs in moldauische Lei umgerechnet.',
    faq: [
      { q: 'Woher kommt der Kurs?', a: 'Aus den gespeicherten EUR- und MDL-Koeffizienten. Ihre tatsächlichen Quellen und Daten stehen im Ergebnis; eine Ersatzquelle wird gesondert markiert.' },
      { q: 'Warum weicht die Wechselstube stärker ab als bei Euro und Dollar?', a: 'Weil der Leu weniger gehandelt wird. Geringere Liquidität heißt größerer Spread, und beim Bargeld kommt der Aufwand der Bevorratung hinzu.' },
      { q: 'Wie oft wird der Kurs geprüft?', a: 'Die Quellen werden getrennt geprüft. Ihre veröffentlichten Kursdaten können sich unterscheiden und stehen einzeln im Ergebnis.' },
      { q: 'Taugt das für eine Überweisung?', a: 'Als Schätzung ja. Der Anbieter rechnet zu seinem eigenen Kurs ab und erhebt eine Gebühr, die getrennt zu prüfen ist.' },
    ],
  },
  'usd-to-mdl': {
    longDescription: 'Rechnet US-Dollar in moldauische Lei mit einem gespeicherten Referenzkurs um. Quelle und Datum des MDL-Kurses stehen im Ergebnis; eine Ersatzquelle ist gekennzeichnet. Für Verträge, Überweisungen und Bargeldwechsel gelten die Kurse und Gebühren des jeweiligen Anbieters.',
    howToUse: [
      'Trage den Betrag in US-Dollar ein.',
      'Lies das Ergebnis in moldauischen Lei ab.',
      'Prüfe das Kursdatum, bevor du den Wert weitergibst.',
      'Rechne für Bargeld mit dem Abschlag der Wechselstube.',
    ],
    howItWorks: 'Der Betrag wird mit dem gespeicherten USD/MDL-Kreuzkurs umgerechnet. Kursdatum und tatsächliche Quelle stehen im Ergebnis.',
    example: '100 US-Dollar werden mit dem angezeigten USD/MDL-Kurs in moldauische Lei umgerechnet.',
    faq: [
      { q: 'Warum ändert sich der USD/MDL-Kurs?', a: 'Er ergibt sich aus dem Verhältnis der gespeicherten MDL- und USD-Koeffizienten. Wenn sich der MDL-Koeffizient ändert, ändert sich auch der angezeigte Kurs.' },
      { q: 'Ist das der Kurs der Wechselstube?', a: 'Nein, es ist ein gespeicherter Referenzkurs. Eine Wechselstube kann einen Spread und weitere Gebühren berechnen.' },
      { q: 'Wie aktuell ist der Wert?', a: 'Quelle und Datum des verwendeten MDL-Kurses stehen im Ergebnis. Falls die Quelle veraltet sein könnte, erscheint ein Hinweis.' },
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
