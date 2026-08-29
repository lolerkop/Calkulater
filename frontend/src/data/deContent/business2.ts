import type { DeDetailedContent } from './types';

export const deBusiness2Content: Partial<Record<string, DeDetailedContent>> = {
  'cogs': {
    longDescription: 'Der Wareneinsatz wird über die Bestandsbewegung gemessen und nicht über Lieferantenrechnungen: die Zukäufe kommen zum Anfangsbestand hinzu, und was am Ende des Zeitraums übrig ist, wird abgezogen. Was bleibt, sind die Kosten der Ware, die tatsächlich bei Kunden angekommen ist. Der Unterschied zwischen „ausgegeben“ und „verkauft“ zählt hier: sich einzudecken erhöht den Geldabfluss des Monats, nicht aber den Wareneinsatz, denn die Ware liegt noch im Regal und wird später gezählt, wenn sie verkauft ist. Genau deshalb hält diese Formel den Rohertrag davon ab, mit dem Lieferplan zu schwanken.',
    howToUse: [
      'Trage den Wert des Bestands ein, mit dem der Zeitraum begann.',
      'Trage ein, wie viel Ware im Zeitraum zugekauft wurde.',
      'Trage den Wert des am Ende verbliebenen Bestands ein.',
      'Nimm für alle drei Zahlen dieselben Preise — Einkaufspreise, nicht Verkaufspreise.',
    ],
    howItWorks: 'Wareneinsatz = Anfangsbestand + Zukäufe − Endbestand. Die Zwischenzahl, die zum Verkauf verfügbare Ware, ist die Summe der ersten beiden: alles, was im Zeitraum hätte verkauft werden können.',
    example: 'Anfangsbestand 32 000 €, Zukäufe 78 000 €, Endbestand 41 500 € — der Wareneinsatz beträgt 68 500 €.',
    faq: [
      { q: 'Warum wird der Endbestand abgezogen und nicht addiert?', a: 'Weil er nicht verkauft wurde. In den Wareneinsatz des Zeitraums gehört nur Ware, die bei Kunden angekommen ist; alles andere bleibt Vermögen und wird in dem Zeitraum gezählt, in dem es verkauft wird.' },
      { q: 'Zählen Frachtkosten beim Einkauf als Zukäufe?', a: 'Ja, wenn sie den Wert der Ware im Regal erhöhen. Der Versand zum Kunden ist ein Vertriebsaufwand und gehört nicht in diese Formel.' },
      { q: 'Was, wenn der Bestand nie gezählt wurde?', a: 'Ohne Endbestand liefert die Rechnung nur die zum Verkauf verfügbare Ware. Den Endbestand aus der Buchführung zu schätzen ist vertretbar, aber jeder Fehler darin geht eins zu eins in den Wareneinsatz über — er wird unmittelbar abgezogen.' },
      { q: 'Warum ist der Wareneinsatz höher als meine Zukäufe?', a: 'Das Lager ist im Zeitraum geschrumpft: du hast nicht nur Zugekauftes verkauft, sondern auch Übertragenes. Das ist ein gewöhnlicher Fall und kein Eingabefehler.' },
    ],
  },
  'cogs-unit-cost': {
    longDescription: 'Die Stückkosten sind die Summe dreier Kostengruppen geteilt durch die Größe der Auflage. Material und Arbeit wachsen mit der Auflage, die Gemeinkosten meist nicht, weshalb dasselbe Erzeugnis je Stück billiger wird, wenn die Auflage steigt. Der Materialanteil neben dem Ergebnis beantwortet eine andere Frage: wovon die Kosten tatsächlich abhängen. Eine Auflage, bei der Material neunzig Prozent ausmacht, folgt Rohstoffpreisen beinahe eins zu eins, während eine bei dreißig Prozent sich kaum bewegt — und Einsparungen dort müssen von woanders kommen.',
    howToUse: [
      'Trage die Materialkosten für die ganze Auflage ein.',
      'Trage die Arbeitskosten derselben Auflage ein.',
      'Trage die der Auflage zugerechneten Gemeinkosten ein.',
      'Trage ein, wie viele Einheiten die Auflage hervorgebracht hat.',
    ],
    howItWorks: 'Kosten je Einheit = (Material + Arbeit + Gemeinkosten) ÷ Einheiten. Der Materialanteil ist das Material geteilt durch die Gesamtkosten, in Prozent.',
    example: 'Material 24 000 €, Arbeit 9600 € und Gemeinkosten 5400 € über 1500 Einheiten ergeben 26 € je Stück.',
    faq: [
      { q: 'Welche Kosten gehören hier zu den Gemeinkosten?', a: 'Alles, was die Auflage verbraucht hat, ohne Teil des Erzeugnisses zu sein: Miete der Fertigungsfläche, Abschreibung der Anlagen, Aufsicht. Unternehmensweite Kosten wie Marketing gehören meist nicht in die Stückkosten.' },
      { q: 'Warum fallen die Stückkosten bei größerer Auflage?', a: 'Die Gemeinkosten sind weitgehend fest, sie über mehr Einheiten zu verteilen senkt den Wert je Stück also selbst dann, wenn Material und Arbeit je Einheit genau gleich bleiben.' },
      { q: 'Sollen fehlerhafte Stücke zur Auflage zählen?', a: 'Nein. Teile durch die Einheiten, die du tatsächlich verkaufen kannst — Ausschuss ist Kosten und kein Ausstoß. Ihn als Ausstoß zu zählen setzt die wahren Kosten jeder verkäuflichen Einheit zu niedrig an.' },
      { q: 'Ist das der Preis, den ich verlangen sollte?', a: 'Nein, es ist die Untergrenze. Vertrieb und Versand, Steuern und die Marge kommen obendrauf; diese Zahl sagt dir nur, wo der Verlust beginnt.' },
    ],
  },
  'contribution-margin': {
    longDescription: 'Der Deckungsbeitrag ist der Teil des Preises, der die variablen Kosten überlebt und für Fixkosten und Gewinn zur Verfügung steht. Der Anteil am Preis zählt mehr als der absolute Betrag: er lässt Erzeugnisse mit sehr verschiedenen Preisschildern vergleichen.',
    howToUse: [
      'Trage den Preis je Stück ein.',
      'Trage die variablen Kosten je Stück ein.',
      'Ergänze die Menge, wenn du die Summe brauchst.',
    ],
    howItWorks: 'Deckungsbeitrag = Preis − variable Kosten. Sein Anteil am Preis ist diese Differenz geteilt durch den Preis.',
    example: 'Ein Preis von 50 € bei variablen Kosten von 30 € lässt einen Deckungsbeitrag von 20 €, also 40 % des Preises.',
    faq: [
      { q: 'Welche Kosten gelten als variabel?', a: 'Die, die mit jeder weiteren Einheit wachsen: Material, Stücklöhne, Verpackung, Zahlungsgebühren. Miete und Gehälter sind fest und bleiben draußen.' },
      { q: 'Warum ist der Anteil nützlicher als der Betrag?', a: 'Er hängt nicht vom Preisniveau ab, Erzeugnisse sehr verschiedener Preise werden damit vergleichbar.' },
      { q: 'Was bedeutet ein negativer Deckungsbeitrag?', a: 'Jedes verkaufte Stück vertieft den Verlust. Der Rechner zeigt das klar an, statt die Eingabe abzuweisen.' },
      { q: 'Ist das dasselbe wie der Rohertrag?', a: 'Nein. Der Rohertrag zieht die vollen Kosten der Ware ab; der Deckungsbeitrag zieht nur den variablen Teil ab.' },
    ],
  },
  'conversion-rate': {
    longDescription: 'Ermittelt den Anteil der Besuche, die in einer Zielhandlung endeten, und bei angegebenem Budget die Kosten einer Konversion. Das ist der untere Teil des Trichters: die Klickrate teilt Klicks durch Einblendungen, während die Konversion Zielhandlungen durch Besuche teilt — der Nenner ist ein anderer. Die Besuche je Konversion sind dieselbe Zahl von innen nach außen gekehrt: „33 Besuche je Bestellung“ kommt bei vielen besser an als „3 %“. Bei null Konversionen erscheinen weder die Kosten je Konversion noch diese Zahl: beide verlangten eine Division durch null, während eine Konversionsrate von null selbst eine gültige und aussagekräftige Antwort ist.',
    howToUse: [
      'Trage die Zahl der Besuche im Zeitraum ein.',
      'Trage die Zahl der Zielhandlungen desselben Zeitraums ein.',
      'Das Budget ist freiwillig — ohne es erscheint nur die Rate.',
      'Mit einem Budget bekommst du zusätzlich die Kosten je Konversion.',
    ],
    howItWorks: 'Konversionsrate = Zielhandlungen ÷ Besuche. Kosten je Konversion = Budget ÷ Zielhandlungen. Besuche je Konversion = Besuche ÷ Zielhandlungen — dieselbe Rate, anders ausgedrückt.',
    example: '240 Bestellungen aus 8000 Besuchen ergeben eine Konversionsrate von 3,00 %, und bei einem Budget von 1200 € Kosten von 5,00 € je Konversion.',
    faq: [
      { q: 'Wie unterscheidet sich die Konversion von der Klickrate?', a: 'Die Klickrate teilt Klicks durch EINBLENDUNGEN, während die Konversion Zielhandlungen durch Besuche teilt. Es sind verschiedene Stufen des Trichters, und ihre Nenner dürfen nicht vermengt werden.' },
      { q: 'Was zählt als Zielhandlung?', a: 'Das, wofür die Seite da ist: eine Bestellung, eine Anfrage, eine Anmeldung, ein Abonnement. Nötig ist allein, dass Besuche und Handlungen denselben Zeitraum abdecken.' },
      { q: 'Warum sind die Kosten je Konversion bei null Konversionen verborgen?', a: 'Weil das Budget durch null geteilt werden müsste. Die Rate von null wird trotzdem angezeigt: sie ist eine aussagekräftige Antwort, anders als unendliche Kosten.' },
      { q: 'Wozu die Zeile mit den Besuchen je Konversion?', a: 'Es ist dieselbe Rate von innen nach außen gekehrt. „33 Besuche für eine Bestellung“ lässt sich leichter in Handeln übersetzen als „3 %“, und sie rechnet sich unmittelbar in ein Besucherziel um.' },
      { q: 'Ist eine Konversionsrate von 3 % gut?', a: 'Das hängt von der Nische und der Handlung ab: 1–3 % sind für einen Onlineshop gewöhnlich, während ein Anfrageformular 10 % erreichen kann. Vergleiche mit deinem eigenen vorigen Zeitraum statt mit fremden Branchenwerten.' },
    ],
  },
  'cpa-cpl-cpi': {
    longDescription: 'Die drei Kennzahlen teilen eine Division und unterscheiden sich nur darin, was als Handlung zählt: eine beliebige Zielhandlung bei CPA, eine Anfrage oder ein Kontakt bei CPL, eine App-Installation bei CPI. Sie auf einer Seite zu halten ist Absicht — drei getrennte Rechner mit derselben Division wären drei Kopien derselben Seite, und die Verwirrung, die sie stiften, ist keine der Rechnung, sondern der Festlegung. Über die Zahl entscheidet in Wahrheit, wo du die Grenze ziehst: geöffnete statt abgesendeter Formulare zu zählen kann einen CPL halbieren, ohne dass sich in der Kampagne irgendetwas ändert.',
    howToUse: [
      'Wähle, was die Kampagne als Handlung zählt.',
      'Trage das ausgegebene Werbebudget ein.',
      'Trage ein, wie viele Handlungen dieses Budget gebracht hat.',
      'Nimm beide Zahlen aus demselben Zeitraum und derselben Kampagne.',
    ],
    howItWorks: 'Kosten je Handlung = Budget ÷ Handlungen. Der Wert je tausend ist dieses Ergebnis mal tausend, so wird im Mediaeinkauf oft gerechnet.',
    example: 'Ein Budget von 1680 €, das 320 Anfragen gebracht hat, ergibt einen CPL von 5,25 €.',
    faq: [
      { q: 'Was ist der Unterschied zwischen CPA, CPL und CPI?', a: 'Allein die Festlegung der Handlung. CPA zählt, was die Kampagne als Konversion behandelt, CPL zählt Anfragen oder Kontakte, CPI zählt App-Installationen. Die Division selbst ist dieselbe.' },
      { q: 'Soll das Budget Agenturkosten enthalten?', a: 'Nimm sie hinein, wenn du die wahren Kosten einer Handlung willst. Allein die Ausgaben auf der Werbeplattform setzen sie zu niedrig an, und Kampagnen werden oft auf verschiedenen Grundlagen verglichen, ohne dass es jemandem auffällt.' },
      { q: 'Warum weicht mein CPL vom Wert der Werbeplattform ab?', a: 'Plattformen zählen Konversionen auf ihre eigene Art, meist mit einem Zuordnungsfenster und einer eigenen Festlegung dessen, was eine Anfrage ist. Bestätigte Anfragen im eigenen Kundensystem zu zählen ergibt fast immer eine höhere Zahl.' },
      { q: 'Sind niedrigere Kosten je Handlung immer besser?', a: 'Nein. Billige Handlungen schlechter Güte können je Verkauf mehr kosten als teure gute. Diese Zahl gehört neben das gelesen, was eine Handlung dir tatsächlich wert ist.' },
    ],
  },
  'cpc': {
    longDescription: 'Der Klickpreis braucht nur zwei Zahlen, und der Rechner fragt nach einer dritten, weil Einblendungen zwei weitere Kennzahlen freischalten, die etwas sagen, was die erste nicht kann. Der CPC sagt, was Besucher kosten; der CPM sagt, was Aufmerksamkeit kostet; die Klickrate sagt, wie gut die Gestaltung Aufmerksamkeit in Besucher verwandelt. Zusammen trennen sie zwei sehr verschiedene Probleme, die ein steigender CPC allein nicht unterscheiden kann — eine teurer gewordene Auktion und eine Anzeige, die aufgehört hat zu wirken. Null Einblendungen heißt deshalb „nicht gemeldet“: der CPC bleibt gültig, und die beiden anderen Zeilen entfallen schlicht.',
    howToUse: [
      'Trage das ausgegebene Werbebudget ein.',
      'Trage ein, wie viele Klicks es gebracht hat.',
      'Ergänze die Einblendungen — CPM und Klickrate folgen daraus.',
      'Trage bei den Einblendungen null ein, wenn die Plattform sie nicht meldet.',
    ],
    howItWorks: 'CPC = Budget ÷ Klicks. Bei bekannten Einblendungen ist CPM = Budget ÷ Einblendungen × 1000 und die Klickrate = Klicks ÷ Einblendungen × 100.',
    example: 'Ein Budget von 720 € mit 1450 Klicks und 92 000 Einblendungen ergibt einen CPC von 0,50 € und eine Klickrate von 1,58 %.',
    faq: [
      { q: 'Warum ist mein CPC gestiegen?', a: 'Entweder ist die Auktion teurer geworden oder die Klickrate gefallen. Der CPC allein kann das nicht unterscheiden, dafür sind die Zeilen zu CPM und Klickrate da.' },
      { q: 'Was gilt als gute Klickrate?', a: 'Das hängt ganz vom Platz ab. Suchwerbung auf genaue Anfragen erreicht oft mehrere Prozent; Bannerwerbung liegt häufig unter einem Zehntelprozent, und beides zu vergleichen ist sinnlos.' },
      { q: 'Kann ich den CPC ohne Einblendungen berechnen?', a: 'Ja. Nur CPM und Klickrate brauchen Einblendungen; trage dort null ein, und beide Zeilen entfallen schlicht.' },
      { q: 'Ist ein niedrigerer CPC immer besser?', a: 'Nein. Billige Klicks aus einem unpassenden Publikum können je Verkauf mehr kosten als teure aus einer genauen Anfrage. Der Klickpreis sagt ohne die Konversionsrate daneben wenig.' },
    ],
  },
};
