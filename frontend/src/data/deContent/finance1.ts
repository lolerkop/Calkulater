import type { DeDetailedContent } from './types';

export const deFinance1Content: Partial<Record<string, DeDetailedContent>> = {
  'apr-apy': {
    longDescription: 'Der Abstand zwischen den beiden Zinssätzen ist die unterjährige Verzinsung und sonst nichts. Ein nominaler Zinssatz nennt, was je Periode berechnet wird, mal der Zahl der Perioden; ein effektiver nennt, was ein Jahr tatsächlich kostet, denn was in der ersten Periode berechnet wurde, verzinst sich danach selbst mit. Achtzehn Prozent nominal bei monatlicher Verzinsung sind 19,56 Prozent effektiv, und ein Kreditgeber darf die Zahl nennen, die zur Anzeige passt. Zwischen beiden umzurechnen ist der einzige Weg, Angebote mit verschiedenen Zinsperioden zu vergleichen.',
    howToUse: [
      'Wähle die Richtung der Umrechnung.',
      'Trage den Zinssatz ein, den du kennst.',
      'Trage ein, wie oft im Jahr Zinsen berechnet werden.',
      'Vergleiche Angebote über den effektiven Zinssatz und nicht über den beworbenen.',
    ],
    howItWorks: 'Effektiv = (1 + nominal ÷ 100 ÷ m) hoch m, minus eins. Umgekehrt wird die m-te Wurzel aus dem Jahresfaktor gezogen und das Ergebnis mit m multipliziert.',
    example: 'Nominale 18 % mit monatlicher Verzinsung sind effektiv 19,56 % im Jahr.',
    faq: [
      { q: 'Welcher Zinssatz ist größer?', a: 'Der effektive, sobald mehr als einmal im Jahr verzinst wird. Bei jährlicher Verzinsung fallen beide genau zusammen, und das ist die einfachste Probe darauf, dass eine Umrechnung stimmt.' },
      { q: 'Hebt häufigere Verzinsung den effektiven Zinssatz immer weiter?', a: 'Sie hebt ihn, aber mit abnehmendem Gewinn. Achtzehn Prozent ergeben monatlich 19,56 % und täglich 19,72 %; die Grenze stetiger Verzinsung liegt ebenfalls bei 19,72 %, es gibt also eine Obergrenze.' },
      { q: 'Welchen Zinssatz bewerben Banken?', a: 'Den, der besser aussieht. Für Anlagen wird meist der effektive und für Kredite der nominale beworben, zwei Angebote nach den gedruckten Zahlen zu vergleichen heißt also oft, Verschiedenes zu vergleichen.' },
      { q: 'Sind Gebühren enthalten?', a: 'Nein. Hier geht es allein um die Verzinsung. Bearbeitungsgebühren, Versicherungen und Kontoführung ändern die wahren Kosten eines Kredits und liegen außerhalb dieser Umrechnung.' },
    ],
  },
  'bonus': {
    longDescription: 'Ein als Prozentsatz des Gehalts angekündigter Bonus und ein auf dem Konto eingegangener Bonus sind zwei verschiedene Zahlen, und der Abstand dazwischen ist die einbehaltene Steuer. „Dreißig Prozent Bonus“ beschreibt, was zugesagt wird; was ein Mitarbeiter tatsächlich sieht, ist das, was nach dem Abzug bleibt, und die Überraschung ist meist gerade deshalb unangenehm, weil die Ankündigung nie sagt, welche Zahl sie meint. Beide stehen hier deshalb nebeneinander, samt dem einbehaltenen Betrag, damit die Rechnung hinter dem Unterschied sichtbar ist und nicht angenommen wird.',
    howToUse: [
      'Trage das Grundgehalt ein, aus dem der Bonus berechnet wird.',
      'Trage den Bonus als Prozentsatz dieses Gehalts ein.',
      'Trage den geltenden Steuersatz ein.',
      'Ein Bonus über hundert Prozent ist bei Jahresprämien gewöhnlich.',
    ],
    howItWorks: 'Bonus vor Steuer = Gehalt × Prozentsatz ÷ 100. Die Steuer ist dieser Betrag mal dem Satz, und der Nettobetrag ist, was bleibt.',
    example: 'Ein Bonus von 35 % auf ein Gehalt von 4500 € sind 1575 € vor Steuer und bei 30 % Steuersatz 1102,50 € netto.',
    faq: [
      { q: 'Wird ein Bonus anders besteuert als das Gehalt?', a: 'In den meisten Systemen ist er gewöhnliches Einkommen und wird mit demselben Satz besteuert. Manche Länder wenden auf Einmalzahlungen eigene Abzugsregeln an, was den Zeitpunkt ändern kann, nicht aber die Summe.' },
      { q: 'Soll der Prozentsatz vom Brutto- oder vom Nettogehalt genommen werden?', a: 'Vom Bruttogehalt, praktisch immer. Arbeitsverträge nennen Boni als Anteil des zugesagten Gehalts, vor jedem Abzug.' },
      { q: 'Warum weicht mein Bonus von dieser Zahl ab?', a: 'Häufige Gründe sind Sozialabgaben zusätzlich zur Lohnsteuer, ein anteilig nach Arbeitszeit gekürzter Bonus oder eine Bemessungsgrundlage mit Zulagen, die diese Rechnung nicht kennt.' },
      { q: 'Kann der Bonusprozentsatz hundert übersteigen?', a: 'Ja, und bei Jahresprämien tut er das oft — ein dreizehntes Gehalt sind definitionsgemäß hundert Prozent. Die Rechnung kommt mit jedem nicht negativen Prozentsatz zurecht.' },
    ],
  },
  'budget-50-30-20': {
    longDescription: 'Die 50-30-20-Regel teilt das Einkommen nach Steuern in drei Teile: die Hälfte für den Bedarf, ein knappes Drittel für Wünsche und ein Fünftel fürs Sparen. Es ist ein Ausgangspunkt und kein Gesetz — der Nutzen liegt darin, alle drei Zahlen auf einmal zu sehen.',
    howToUse: [
      'Trage das monatliche Einkommen nach Steuern ein.',
      'Vergleiche die drei Beträge mit dem, was du tatsächlich ausgibst.',
      'Passe die Kategorie an, die am stärksten abweicht.',
    ],
    howItWorks: 'Bedarf = 50 % des Einkommens, Wünsche = 30 %, Sparen = 20 %.',
    example: 'Ein Einkommen von 2500 € ergibt 1250 € für den Bedarf, 750 € für Wünsche und 500 € fürs Sparen.',
    faq: [
      { q: 'Was zählt als Bedarf?', a: 'Wohnen, Essen, Verkehr, Nebenkosten, Arzneimittel und Mindestraten für Kredite — alles, was du im nächsten Monat nicht auslassen kannst.' },
      { q: 'Ist die Aufteilung streng?', a: 'Nein. Sie ist ein Anhaltspunkt. In teuren Städten übersteigt der Bedarf oft die Hälfte, und der nützliche Schritt ist zu sehen, um wie viel.' },
      { q: 'Vor oder nach Steuern?', a: 'Nach Steuern und nach Pflichtabzügen — sonst ist jeder Anteil zu hoch angesetzt.' },
      { q: 'Was, wenn das Sparen nicht hineinpasst?', a: 'Beginne mit dem, was übrig bleibt, und hebe es nach und nach. Ein kleiner regelmäßiger Anteil schlägt einen ehrgeizigen, den du aufgibst.' },
    ],
  },
  'budget-split': {
    longDescription: 'Nimmt einen Betrag und teilt ihn zwischen Personen auf, entweder zu gleichen Teilen oder im Verhältnis dessen, was jede verdient. Jede Zeile besteht aus einem Namen und einem Einkommen, und die letzte Zahl der Zeile wird als Einkommen gelesen, während alles davor als Name zählt. Die Anteile werden danach auf ganze Cent gerundet und der Rest dem größten Anteil zugerechnet, damit die Beiträge immer genau den eingetragenen Betrag ergeben — einer Tabelle, deren Spalte nicht zur Summe passt, sollte niemand trauen.',
    howToUse: [
      'Trage den Betrag ein, den du teilen musst.',
      'Liste die Beteiligten je Zeile auf: ein Name und ein Einkommen.',
      'Wähle, ob zu gleichen Teilen oder im Verhältnis der Einkommen geteilt wird.',
      'Prüfe die Tabelle: die Beiträge ergeben genau den Betrag.',
    ],
    howItWorks: 'Zu gleichen Teilen: jeder Anteil ist der Betrag geteilt durch die Zahl der Beteiligten. Anteilig: jeder Anteil ist der Betrag mal dem Einkommen dieser Person geteilt durch das Gesamteinkommen. Die Anteile werden auf Cent gerundet, und der Rundungsrest geht an den größten Anteil.',
    example: '1200 € geteilt zwischen Einkommen von 2400 € und 3600 € ergeben 480 € und 720 €.',
    faq: [
      { q: 'Warum bekommt der größte Anteil den übrigen Cent?', a: 'Weil die gerundeten Anteile den eingetragenen Betrag ergeben müssen. Hundert durch drei sind je 33,333…, und dreimal 33,33 sind 99,99 — der fehlende Cent muss irgendwo landen, und der größte Anteil nimmt ihn am wenigsten merklich auf.' },
      { q: 'Kann ich zu gleichen Teilen teilen, ohne Einkommen einzutragen?', a: 'Trage eine beliebige Zahl als Einkommen ein — im gleichmäßigen Modus wird sie übergangen, und es zählen nur die Namen. Die Einkommensspalte zeigt trotzdem, was du eingetippt hast.' },
      { q: 'Was, wenn jemand nichts verdient?', a: 'Im gleichmäßigen Modus ist das in Ordnung. Im anteiligen Modus bekommt eine Person ohne Einkommen einen Anteil von null, und verdient niemand etwas, hält die Rechnung an, statt durch null zu teilen.' },
      { q: 'Dürfen Namen Leerzeichen enthalten?', a: 'Ja. Nur die letzte Zahl der Zeile wird als Einkommen gelesen; alles davor ist der Name, „Anna Maria Schmidt 3200“ wird also richtig verstanden.' },
      { q: 'Ist das dasselbe wie ein 50-30-20-Budget?', a: 'Nein. Jenes teilt das Einkommen einer Person zwischen Ausgabenkategorien auf. Dieses teilt einen Betrag zwischen mehreren Personen.' },
    ],
  },
  'cagr': {
    longDescription: 'Die mittlere jährliche Wachstumsrate verteilt das Gesamtwachstum gleichmäßig über den Zeitraum, eine Verdopplung über fünf Jahre liest sich also als eine Jahreszahl statt als Klumpen. Sie macht Anlagen verschiedener Länge vergleichbar.',
    howToUse: [
      'Trage den Anfangswert ein.',
      'Trage den Endwert ein.',
      'Trage ein, wie viele Jahre dazwischen vergangen sind.',
    ],
    howItWorks: 'CAGR = (Endwert / Anfangswert) ^ (1 / Jahre) − 1, als Prozentwert ausgegeben.',
    example: 'Von 100 000 € auf 200 000 € über fünf Jahre sind 14,87 % im Jahr.',
    faq: [
      { q: 'Warum nicht einfach das Gesamtwachstum durch die Jahre teilen?', a: 'Das lässt die Aufzinsung außer Acht. Eine Verdopplung über fünf Jahre sind 14,87 % im Jahr und nicht 20 % — jedes Jahr wächst auf dem vorigen auf.' },
      { q: 'Kann die CAGR negativ sein?', a: 'Ja. Ein Rückgang ergibt eine negative Jahresrate, und das ist die ehrliche Art, einen schrumpfenden Wert zu beschreiben.' },
      { q: 'Zeigt sie die Schwankungen?', a: 'Nein. Die CAGR ist ein geglätteter Mittelwert — zwei Anlagen mit gleichem Anfang, Ende und Zeitraum teilen eine CAGR, wie verschieden sie sich dazwischen auch bewegt haben.' },
      { q: 'Was, wenn der Zeitraum keine ganzen Jahre umfasst?', a: 'Trage gebrochene Jahre ein. Achtzehn Monate sind 1,5.' },
    ],
  },
  'commission': {
    longDescription: 'Ermittle eine Provision aus Geschäftsbetrag und Satz, gewinne den Betrag aus einer bekannten Provision zurück oder finde den Satz, wenn beide Zahlen bekannt sind. Der Modus entscheidet, welche zwei Werte du einträgst und welcher berechnet wird.',
    howToUse: [
      'Wähle den Modus für das, was du bereits kennst.',
      'Trage die beiden bekannten Werte ein.',
      'Lies die fehlende Zahl und die Auszahlung ab.',
    ],
    howItWorks: 'Provision = Betrag × Satz / 100. Die übrigen Modi stellen dieselbe Gleichung um.',
    example: 'Ein Geschäft über 100 000 € zu 2,5 % ergibt eine Provision von 2500 € und eine Auszahlung von 97 500 €.',
    faq: [
      { q: 'Welchen Modus soll ich nehmen?', a: 'Den, der die beiden Werte nennt, die du bereits hast. Den dritten liefert der Rechner.' },
      { q: 'Ist die Steuer enthalten?', a: 'Nein. Das Ergebnis ist die Bruttoprovision; Steuern und Gebühren hängen von deinem Rechtsraum und deinem Vertrag ab.' },
      { q: 'Darf der Satz null sein?', a: 'Ja, wenn die Provision aus einem Betrag berechnet wird — das Ergebnis ist dann schlicht null. Einen Betrag aus einem Satz von null zurückzugewinnen hat keine Antwort.' },
      { q: 'Warum erscheint die Auszahlung in jedem Modus?', a: 'Sie ist die Zahl, die die meisten tatsächlich brauchen, und es ist in allen drei Richtungen dieselbe Subtraktion.' },
    ],
  },
};
