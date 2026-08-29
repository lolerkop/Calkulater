import type { DeDetailedContent } from './types';

export const deBusiness4Content: Partial<Record<string, DeDetailedContent>> = {
  'fee-chain': {
    longDescription: 'Ermittelt, wie viel beim Verkäufer tatsächlich ankommt, nachdem die Plattform ihren Anteil genommen hat. Provision und Zahlungsabwicklung sind Prozentsätze des Warenpreises, während Versand und Lagerung feste Beträge je Paket sind, und zusammen ergeben sie eine Zahl, die ein einzelner Satz nicht liefern kann. Der Rechner zeigt jeden Abzug einzeln, ihren gemeinsamen Anteil am Preis und den Gewinn nach Wareneinsatz — er beantwortet also nicht „wie hoch ist die Provision“, sondern „lohnt sich dieser Preis zum Verkaufen“.',
    howToUse: [
      'Trage den Preis ein, den der Käufer für die Ware zahlt.',
      'Ergänze Provision und Zahlungsabwicklung aus deinem Tarif.',
      'Ergänze Versand und Lagerung je Paket, wenn sie gesondert einbehalten werden.',
      'Trage den Wareneinsatz ein, um den Gewinn statt nur der Auszahlung zu sehen.',
    ],
    howItWorks: 'Provision und Zahlungsabwicklung werden als Anteile des Warenpreises genommen, während Versand und Lagerung als feste Beträge hinzukommen. Auszahlung = Preis minus aller Abzüge; Gewinn = Auszahlung minus Wareneinsatz.',
    example: 'Eine Ware zu 40 € mit 17 % Provision, 1,5 % Zahlungsabwicklung und 1,10 € Versand zahlt 31,50 € aus und lässt bei 18 € Wareneinsatz 13,50 € Gewinn.',
    faq: [
      { q: 'Werden die Prozentsätze vom Preis oder vom Rest genommen?', a: 'Vom Warenpreis. Plattformen rechnen Abzüge so, und sie nacheinander aufeinander anzuwenden setzte die Endzahl zu niedrig an.' },
      { q: 'Warum wird der Versand je Paket eingetragen?', a: 'Weil er nicht am Preis hängt: die Zustellung kostet bei einer Ware zu 10 € dasselbe wie bei einer zu 100 €. Prozentsätze und feste Beträge werden deshalb getrennt eingetragen.' },
      { q: 'Was, wenn keine Lagerung einbehalten wird?', a: 'Lass das Feld leer oder auf null — die Zeile zur Lagerung erscheint dann schlicht nicht, und die Rechnung bleibt richtig.' },
      { q: 'Warum weicht der Gewinn von der Auszahlung ab?', a: 'Die Auszahlung ist das Geld, das die Plattform überweist. Der Gewinn ist, was nach dem Wareneinsatz bleibt, und daran zeigt sich, ob der Preis gerechtfertigt ist.' },
      { q: 'Ist die Steuer enthalten?', a: 'Nein. Die Steuer hängt von deiner Besteuerungsart ab und wird auf bereits erhaltene Einnahmen gerechnet; dieser Rechner klärt deine Abrechnung mit der Plattform.' },
    ],
  },
  'inventory-turnover': {
    longDescription: 'Zeigt, wie oft der Bestand im Zeitraum vollständig ersetzt wurde. Im Nenner steht der durchschnittliche Bestand und im Zähler der WARENEINSATZ, nicht der Umsatz: der Bestand wird zu Einkaufspreisen geführt, und den Umsatz durch ihn zu teilen blähte den Umschlag um die ganze Handelsspanne auf. Die Lagerdauer ist der Kehrwert — 365 geteilt durch den Umschlag ergibt die mittlere Zahl der Tage, die ein Artikel im Lager liegt.',
    howToUse: [
      'Trage den Wareneinsatz des Zeitraums ein — nicht den Umsatz.',
      'Gib den durchschnittlichen Bestand an oder Anfangs- und Endbestand.',
      'Lies Umschlagshäufigkeit und Lagerdauer ab.',
    ],
    howItWorks: 'Umschlagshäufigkeit = Wareneinsatz ÷ durchschnittlicher Bestand. Lagerdauer = 365 ÷ Umschlagshäufigkeit. Aus Beständen ist der durchschnittliche Bestand die halbe Summe aus Anfangs- und Endbestand.',
    example: 'Ein Wareneinsatz von 60 000 € bei einem durchschnittlichen Bestand von 15 000 € ergibt eine Umschlagshäufigkeit von 4,00 und eine Lagerdauer von 91,3 Tagen.',
    faq: [
      { q: 'Warum der Wareneinsatz und nicht der Umsatz?', a: 'Weil der Bestand zu Einkaufspreisen geführt wird. Den Umsatz durch ihn zu teilen fügte dem Umschlag die ganze Handelsspanne hinzu und setzte ihn zu hoch an.' },
      { q: 'Wie ermittle ich den durchschnittlichen Bestand?', a: 'Am einfachsten als halbe Summe aus Anfangs- und Endbestand — dieser Modus ist eingebaut. Monatsdurchschnitte sind genauer, wenn du sie hast.' },
      { q: 'Was zeigt die Lagerdauer?', a: 'Wie viele Tage ein Artikel im Mittel im Lager liegt, bevor er verkauft wird. Es ist dieselbe Aussage wie der Umschlag, nur in Tagen, und die lässt sich leichter mit Haltbarkeit und Lieferzeiten vergleichen.' },
      { q: 'Welche Umschlagshäufigkeit gilt als normal?', a: 'Das hängt von der Branche ab: Lebensmittel drehen sich viel schneller als Möbel. Ein Richtwert wird hier nicht genannt — vergleiche mit deinem eigenen Verlauf.' },
    ],
  },
  'ltv': {
    longDescription: 'Multipliziert den Umsatz je Zeitraum mit der Verweildauer des Kunden und mit der Rohmarge. Die Verweildauer wird entweder unmittelbar angegeben oder aus der Abwanderung als eins geteilt durch ihren Anteil abgeleitet. Es gibt viele Übereinkünfte für den LTV; diese wird klar benannt statt vorausgesetzt, damit sich die Zahl mit der Art vergleichen lässt, wie dein eigenes Team ihn rechnet.',
    howToUse: [
      'Wähle, ob du die Verweildauer oder die Abwanderung kennst.',
      'Trage den Umsatz je Zeitraum und die Rohmarge ein.',
      'Ergänze die Gewinnungskosten für das Verhältnis von LTV zu CAC.',
    ],
    howItWorks: 'LTV = Umsatz je Zeitraum × Verweildauer × Marge; bei der Abwanderung ist die Verweildauer eins geteilt durch den Anteil der Abwanderung.',
    example: '24 € im Monat bei 5 Prozent monatlicher Abwanderung ergeben eine Verweildauer von 20 Monaten und einen LTV von 480 €.',
    faq: [
      { q: 'Warum ergibt die Abwanderung die Verweildauer?', a: 'Geht jeden Zeitraum ein fester Anteil, ist die mittlere Verweildauer eins geteilt durch diesen Anteil. Fünf Prozent monatlich ergeben im Mittel zwanzig Monate.' },
      { q: 'Soll die Marge einbezogen werden?', a: 'Wenn du Gewinn statt Umsatz willst, ja. Sie auf hundert Prozent zu lassen ergibt stattdessen den Wert auf Umsatzbasis.' },
      { q: 'Welches Verhältnis von LTV zu CAC ist gesund?', a: 'Das hängt vom Geschäft und vom Amortisationszeitraum ab, deshalb wird kein Ziel genannt. Das Verhältnis steht da, damit du es an deiner eigenen Rechnung misst.' },
      { q: 'Warum wird eine Abwanderung von null abgewiesen?', a: 'Sie hieße, dass nie ein Kunde geht, die Verweildauer wäre unendlich und der Wert sinnlos.' },
    ],
  },
  'mrr-arr': {
    longDescription: 'Ermittelt den wiederkehrenden Umsatz eines Abonnementgeschäfts: monatlich als MRR und jährlich als ARR. Es zählt, dass der ARR hier der MRR mal zwölf ist — die derzeitige Rate aufs Jahr hochgerechnet und KEINE Vorhersage des Jahresumsatzes. Der Unterschied ist real: bei wachsender Basis fällt das tatsächliche Jahr höher aus und bei schrumpfender niedriger, der ARR gehört also nicht als erwartetes Geld in einen Plan. Das Wachstum wird nur einen Monat vorausgerechnet und bleibt deine eigene Annahme: einen Prozentsatz in die zwölfte Potenz zu erheben und das Ergebnis als Jahresumsatz auszugeben verkaufte eine Sicherheit, die es nicht gibt.',
    howToUse: [
      'Trage die Zahl der aktiven Abonnenten ein.',
      'Trage den mittleren Umsatz je Abonnent und Monat ein.',
      'Setze das angenommene monatliche Wachstum der Basis.',
      'Nimm einen negativen Prozentsatz für eine schrumpfende Basis.',
    ],
    howItWorks: 'MRR = Abonnenten × mittlerer Monatsumsatz. ARR = MRR × 12, die derzeitige Rate aufs Jahr hochgerechnet. MRR im nächsten Monat = MRR × (1 + Wachstum).',
    example: '420 Abonnenten zu je 14,90 € ergeben einen MRR von 6258,00 € und einen ARR von 75 096,00 €.',
    faq: [
      { q: 'Ist der ARR der Umsatz des Jahres?', a: 'Nein, er ist die derzeitige Monatsrate mal zwölf. Bei wachsender Basis fällt das tatsächliche Jahr höher aus und bei schrumpfender niedriger, mit dem ARR darf also nicht als erwartetem Geld geplant werden.' },
      { q: 'Warum wird das Wachstum nur einen Monat vorausgerechnet?', a: 'Weil das Wachstum deine Annahme ist und keine Vorhersage. Den Prozentsatz in die zwölfte Potenz zu erheben gäbe als Jahresumsatz eine Zahl aus, für die niemand einstehen kann.' },
      { q: 'Zählen einmalige Zahlungen zum MRR?', a: 'Nein. Der MRR ist gerade der wiederkehrende Umsatz. Ein einmaliger Verkauf, eine Einrichtungsgebühr oder eine Beratung gehören nicht hinein, sonst gibt die Kennzahl keine verlässliche Einnahme mehr wieder.' },
      { q: 'Wie behandle ich Jahresabonnements?', a: 'Teile die Jahreszahlung durch zwölf und nimm das Ergebnis in den mittleren Monatsumsatz. Sonst zeigt der Monat des Verkaufs einen Ausschlag, den es in Wahrheit nicht gibt.' },
      { q: 'Wie unterscheidet sich der MRR vom LTV?', a: 'Der MRR ist der Umsatz der ganzen Basis für einen Monat, während der LTV der Gesamtwert eines einzelnen Kunden über seine Verweildauer ist. Das erste betrifft die derzeitige Rate, das zweite den Zeitraum, in dem sich die Gewinnung amortisiert.' },
    ],
  },
  'payback-period': {
    longDescription: 'Die einfache Amortisationsdauer teilt die Investition durch den jährlichen Zahlungsstrom, und sie sieht immer optimistisch aus, weil sie den Zeitwert des Geldes außer Acht lässt. Die abgezinste Dauer arbeitet anders: die Barwerte schrumpfen, die Dauer wird deshalb durch Aufsummieren gefunden. Der Abstand zwischen beiden ist der Preis des Wartens — bei einem Satz von zehn Prozent wird aus fünf Jahren Amortisation beinahe sieben.',
    howToUse: [
      'Nimm den Nettozahlungsstrom: Einnahmen minus Kosten, aber ohne die Investition selbst abzuziehen.',
      'Setze den Abzinsungssatz auf null, wenn du nur die einfache Dauer willst.',
      'Angenommen wird ein gleichmäßiger Strom. Schwankt er nach Jahren, zerlege die Aufgabe in Zeiträume.',
      'Die Amortisation sagt nichts über den Gewinn NACH ihr — sie ist kein Maß der Rendite.',
    ],
    howItWorks: 'Einfach = Investition / Zahlungsstrom; abgezinst durch Aufsummieren von Strom/(1+r)ᵏ.',
    example: 'Eine Million bei einem Strom von dreihunderttausend amortisiert sich in 3,333 Jahren.',
    faq: [
      { q: 'Was ist der Nachteil der einfachen Amortisation?', a: 'Sie behandelt einen Euro in fünf Jahren wie einen heute. Bei einem kurzen Vorhaben ist der Unterschied klein; bei einem langen zählt er: bei zehn Prozent wird aus fünf Jahren beinahe sieben.' },
      { q: 'Warum kann ein hoher Satz gar keine Amortisation bedeuten?', a: 'Die abgezinsten Ströme bilden eine schrumpfende Reihe mit endlicher Summe: Strom geteilt durch Satz. Liegt die unter der Investition, holt das Aufsummieren sie nie ein — die Rechnung sagt das, statt tausend Jahre lang zu summieren.' },
      { q: 'Ersetzt die Amortisation eine Renditekennzahl?', a: 'Nein. Sie zeigt, wann das Geld zurückkommt, aber nichts darüber, was das Vorhaben danach einbringt. Zwei Vorhaben mit gleicher Amortisation können sich im Gesamtgewinn um ein Mehrfaches unterscheiden.' },
      { q: 'Welchen Abzinsungssatz soll ich nehmen?', a: 'Meist die Kapitalkosten: den Kreditzins oder die geforderte Rendite. Für eine grobe Zahl nimmt man Inflation plus Risikoaufschlag — hier ist es ein Feld und keine eingebaute Annahme.' },
    ],
  },
  'profit': {
    longDescription: 'Der Gewinn ist eine Subtraktion, die jeder ausführen kann; bei den beiden Prozentwerten daneben gehen Geschäfte schief. Die Marge teilt den Gewinn durch den Umsatz, der Aufschlag teilt denselben Gewinn durch die Kosten, und der Nenner ist der ganze Unterschied zwischen ihnen. Ein Aufschlag von hundert Prozent ist eine Marge von fünfzig, und beides beschreibt genau dasselbe Geschäft. Sich auf „vierzig Prozent“ zu einigen, ohne zu sagen welche davon, ist der gewöhnliche Weg, beim Preis um die Hälfte auseinanderzuliegen, und am häufigsten passiert das zwischen einem Lieferanten, der in Aufschlägen denkt, und einem Händler, der in Margen denkt.',
    howToUse: [
      'Trage den Umsatz des Zeitraums oder des Geschäfts ein.',
      'Trage die Kosten ein, die zu diesem Umsatz gehören.',
      'Lies die Marge ab, wenn du über den Umsatz sprichst, und den Aufschlag, wenn du über die Kosten sprichst.',
      'Halte beide Zahlen in derselben Währung und einheitlich vor oder nach Steuern.',
    ],
    howItWorks: 'Gewinn = Umsatz − Kosten. Marge = Gewinn ÷ Umsatz × 100. Aufschlag = Gewinn ÷ Kosten × 100. Bei Kosten von null gibt es nichts, wodurch geteilt werden könnte, die Zeile mit dem Aufschlag entfällt deshalb.',
    example: 'Ein Umsatz von 48 000 € gegen Kosten von 31 500 € ergibt 16 500 € Gewinn, eine Marge von 34,38 % und einen Aufschlag von 52,38 %.',
    faq: [
      { q: 'Was ist größer, Marge oder Aufschlag?', a: 'Der Aufschlag, immer, bei jedem gewinnbringenden Geschäft — er teilt durch die kleinere Zahl. Sie fallen nur zusammen, wenn der Gewinn null ist.' },
      { q: 'Wie rechne ich einen Aufschlag in eine Marge um?', a: 'Marge = Aufschlag ÷ (100 + Aufschlag) × 100. Ein Aufschlag von 50 % ist eine Marge von 33,33 %, und ein Aufschlag von 100 % ist eine Marge von 50 %.' },
      { q: 'Kann die Marge über hundert Prozent liegen?', a: 'Nein. Der Gewinn kann nicht größer sein als der Umsatz, aus dem er stammt, die Marge endet also bei hundert, was Kosten von null bedeutete. Der Aufschlag hat keine solche Obergrenze.' },
      { q: 'Welche Kosten soll ich einbeziehen?', a: 'Die der Ebene, die du misst: nur den Wareneinsatz für die Rohmarge, alles einschließlich Gehältern und Miete für die Nettomarge. Die beiden Ebenen zwischen Zeiträumen zu mischen ist es, was Verläufe sinnlos macht.' },
    ],
  },
};
