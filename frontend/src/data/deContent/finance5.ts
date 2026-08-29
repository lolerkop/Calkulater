import type { DeDetailedContent } from './types';

export const deFinance5Content: Partial<Record<string, DeDetailedContent>> = {
  'refinancing': {
    longDescription: 'Stellt das Darlehen, das du hast, neben das Darlehen, das dir geboten wird, und beziffert den Abstand. Beide Raten kommen aus derselben Annuitätenformel, der Vergleich ist also ehrlich: der Unterschied entsteht aus Zinssätzen und Laufzeiten und nicht aus zwei verschiedenen Rechenweisen. Die Kosten des Wechsels werden der neuen Summe zugeschlagen statt weggelassen — Wertgutachten, Versicherung und Gebühren zahlst du gerade deshalb, weil du wechselst. Ein negatives Ergebnis wird als negativ ausgewiesen: eine längere Laufzeit zu einem niedrigeren Satz senkt meist die Rate und erhöht die Summe, und genau das musst du sehen.',
    howToUse: [
      'Trage ein, was du noch schuldest, und nicht, was du ursprünglich aufgenommen hast.',
      'Trage den jetzigen Zinssatz und die verbleibenden Monate ein.',
      'Trage Zinssatz und Laufzeit des Angebots ein.',
      'Ergänze die Kosten des Wechsels: Gutachten, Versicherung, Gebühren.',
    ],
    howItWorks: 'Jede Rate ist die Annuitätenrate auf die Restschuld zu ihrem eigenen Satz und ihrer eigenen Laufzeit. Die Summe je Darlehen ist die Rate mal der Zahl der Monate, und die Kosten des Wechsels werden der neuen Summe zugeschlagen.',
    example: '200 000 € Restschuld zu 6 % über 15 Jahre gegen 4 % bei gleicher Laufzeit: die Rate sinkt von 1687,71 € auf 1479,36 €, und nach Abzug von 2000 € Kosten bleibt ein Gewinn von rund 35 500 €.',
    faq: [
      { q: 'Warum ist der Gewinn manchmal negativ?', a: 'Weil ein niedrigerer Satz über eine längere Laufzeit insgesamt mehr kosten kann, obwohl die monatliche Rate sinkt. Genau deshalb stehen der Unterschied der Rate und der Unterschied der Summe getrennt.' },
      { q: 'Trage ich die ursprüngliche Summe oder die Restschuld ein?', a: 'Die Restschuld. Eine Umschuldung ersetzt das, was übrig ist, und nicht das, womit du angefangen hast.' },
      { q: 'Was zählt zu den Kosten des Wechsels?', a: 'Alles, was du zahlst, weil du wechselst: Wertgutachten, eine neue Versicherung, Gebühren für die Eintragung, manchmal eine Vorfälligkeitsentschädigung. Sie wegzulassen lässt das Angebot besser aussehen, als es ist.' },
      { q: 'Wird von einem Annuitätenplan ausgegangen?', a: 'Ja. Beide Darlehen werden mit gleichbleibenden Monatsraten gerechnet, wie es die meisten Verbraucherkredite tun. Ein Plan mit fallenden Raten ergäbe andere Summen.' },
      { q: 'Ist das dasselbe wie eine Sondertilgung?', a: 'Nein. Dort behältst du dein Darlehen und zahlst zusätzlich ein. Hier wird das Darlehen durch ein anderes ersetzt.' },
    ],
  },
  'rental-yield': {
    longDescription: 'Zeigt, welchen Jahresprozentsatz eine gekaufte Immobilie bei Vermietung abwirft. Die Bruttorendite nimmt die ganze Miete, die Nettorendite zieht die jährlichen Kosten ab — Steuer, Versicherung, Instandhaltung und Leerstand. Der Abstand zwischen beiden entscheidet gewöhnlich, ob sich ein Kauf lohnt: aus brutto 6 % werden schnell 4 %, sobald die Kosten wirklich anfallen, und es ist die Nettozahl, die du mit einem Festgeldzins vergleichst.',
    howToUse: [
      'Trage den Kaufpreis ein.',
      'Gib die Miete je Jahr oder je Monat an.',
      'Ergänze bei Bedarf die jährlichen Kosten — dann erscheint die Nettorendite.',
    ],
    howItWorks: 'Bruttorendite = Jahresmiete ÷ Kaufpreis × 100. Netto = (Jahresmiete − jährliche Kosten) ÷ Kaufpreis × 100. Die Amortisationsdauer ist der Preis geteilt durch den Jahresertrag.',
    example: 'Eine Wohnung für 250 000 €, für 950 € im Monat vermietet, bringt eine Bruttorendite von 4,56 %.',
    faq: [
      { q: 'Worin unterscheiden sich Brutto- und Nettorendite?', a: 'Brutto nimmt die ganze Miete, netto zieht die jährlichen Kosten ab. Mit einem Festgeldzins zu vergleichen lohnt sich nur die Nettozahl.' },
      { q: 'Was zählt zu den jährlichen Kosten?', a: 'Alles, was jedes Jahr anfällt: Steuer, Versicherung, Hausgeld, Instandhaltung, Reparaturen und Ausfälle durch leere Monate. Was du einbeziehst, entscheidest du — der Rechner nimmt die Summe.' },
      { q: 'Ist die Wertsteigerung der Immobilie enthalten?', a: 'Nein. Gerechnet wird allein der Mietertrag. Der Wertzuwachs ist ein eigener und schwer vorhersehbarer Teil.' },
      { q: 'Was zeigt die Amortisationsdauer?', a: 'Wie viele Jahre an Mieteinnahmen den Kaufpreis bei unveränderten Bedingungen zurückzahlen. Sie ist der Kehrwert der Rendite.' },
    ],
  },
  'risk-reward': {
    longDescription: 'Beantwortet «lohnt diese Position» und nicht «wie groß soll sie sein». Die Größe ist hier freiwillig und rechnet das Ergebnis lediglich in Geld um: die Beurteilung selbst kommt aus drei Kursen — Einstieg, Stopp und Ziel. Die nützliche Zahl ist nicht das Verhältnis, sondern die Trefferquote für die Nulllinie: bei einem Verhältnis von 3 genügt ein Viertel gewinnender Positionen, um auf null zu kommen, bei 0,5 brauchst du zwei Drittel. Diese Zahl verbindet eine einzelne Position mit deiner tatsächlichen Statistik und zeigt, ob das Ziel realistisch ist.',
    howToUse: [
      'Wähle die Richtung: eine Long-Position stoppt unter dem Einstieg, eine Short-Position darüber.',
      'Trage Einstiegskurs, Stoppkurs und Zielkurs ein.',
      'Trage die Größe ein, wenn du Risiko und Ertrag in Geld sehen willst.',
      'Vergleiche die Trefferquote für die Nulllinie mit deiner eigenen Statistik.',
    ],
    howItWorks: 'Das Risiko ist der Abstand vom Einstieg zum Stopp und der Ertrag der Abstand vom Einstieg zum Ziel, beide als Beträge. Verhältnis = Ertrag ÷ Risiko, und die Trefferquote für die Nulllinie = 1 ÷ (1 + Verhältnis).',
    example: 'Einstieg 250, Stopp 240, Ziel 280 ergeben ein Verhältnis von 3: 25 % gewinnende Positionen genügen für ein Nullergebnis.',
    faq: [
      { q: 'Worin unterscheidet sich das von der Positionsgröße?', a: 'Die Positionsgröße beantwortet, wie viele Einheiten bei gegebenem Risiko zu nehmen sind. Hier wird keine Größe abgeleitet — beurteilt wird die Position selbst aus drei Kursen.' },
      { q: 'Was zeigt die Trefferquote für die Nulllinie?', a: 'Den Anteil der Positionen, die im Gewinn schließen müssen, damit die Reihe auf null herauskommt. Bei einem Verhältnis von 3 sind das 25 %, bei 1 die Hälfte, bei 0,5 zwei Drittel.' },
      { q: 'Welches Verhältnis gilt als annehmbar?', a: 'Ein verbreiteter Anhaltspunkt ist mindestens 2, damit seltene Gewinne häufige Verluste aufwiegen. Das ist eine Übereinkunft des Geldmanagements und keine Empfehlung.' },
      { q: 'Warum werden die Abstände als Beträge genommen?', a: 'Weil eine Short-Position über dem Einstieg stoppt und darunter zielt, das Vorzeichen der Differenz also von der Richtung abhängt. Risiko und Ertrag sind Beträge und keine Richtungen.' },
      { q: 'Sind Gebühren enthalten?', a: 'Nein. Gebühren mindern den tatsächlichen Gewinn und vergrößern Verluste, das wirkliche Verhältnis liegt also etwas unter dem berechneten.' },
    ],
  },
  'roi': {
    longDescription: 'Die Kapitalrendite vergleicht den Gewinn mit allem, was die Anlage gekostet hat. Zusätzliche Kosten gehen sowohl in den Zähler als auch in den Nenner ein, denn sie gehören ebenso zur Anlage wie der Grundbetrag — sie nur vom Gewinn abzuziehen lässt das Ergebnis besser aussehen, als es ist.',
    howToUse: [
      'Trage die Werte ein.',
      'Prüfe den zulässigen Bereich, falls ein Feld abgewiesen wird.',
      'Lies das Ergebnis ab.',
    ],
    howItWorks: 'ROI = (erhalten − eingesetzt − zusätzlich) ÷ (eingesetzt + zusätzlich) × 100.',
    example: 'Wer 100 000 € einsetzt und 130 000 € zurückerhält, erzielt eine Rendite von 30 %.',
    faq: [
      { q: 'Warum tauchen die zusätzlichen Kosten zweimal auf?', a: 'Sie mindern den Gewinn und erhöhen das Eingesetzte. Sie nur vom Gewinn abzuziehen setzt die Rendite zu hoch an.' },
      { q: 'Wie unterscheidet sich das vom ROI einer Werbekampagne?', a: 'Die Formel ist dieselbe, der Unterschied liegt darin, was als Anlage zählt. Die Werbevariante nimmt die Kosten und den Umsatz der Kampagne.' },
      { q: 'Berücksichtigt der ROI die Zeit?', a: 'Nein. Dreißig Prozent über ein Jahr und über fünf Jahre sehen hier gleich aus — für Jahreswerte nimm den Zinseszins.' },
      { q: 'Was bedeutet ein negativer ROI?', a: 'Es kam weniger zurück, als hineinging. Der Rechner zeigt das, statt bei null abzuschneiden.' },
    ],
  },
  'rule-of-72': {
    longDescription: 'Zweiundsiebzig geteilt durch den Zinssatz ergibt die Verdopplungszeit in Jahren — eine Näherung, die im Kopf gelingt. Der genaue Wert aus dem Logarithmus steht daneben, zusammen mit dem Abstand zwischen beiden, nicht um die Faustregel zu ersetzen, sondern um zu zeigen, wo sie in die Irre führt. Bei acht Prozent liegt der Abstand unter einer Woche, bei einem halben Prozent schätzt die Regel fünf Jahre falsch.',
    howToUse: [
      'Trage den Jahreszins ein.',
      'Lies die Schätzung nach der Regel von 72 ab.',
      'Vergleiche sie mit dem genauen Wert daneben.',
    ],
    howItWorks: 'Die Schätzung ist 72 ÷ Zinssatz, die genaue Zeit ist ln 2 ÷ ln(1 + Zinssatz ÷ 100) bei jährlicher Verzinsung.',
    example: 'Bei 8 Prozent nennt die Regel 72 ÷ 8 = 9 Jahre, und der genaue Wert ist 9,01.',
    faq: [
      { q: 'Warum 72 und nicht 70?', a: 'Zweiundsiebzig lässt sich durch viele gebräuchliche Sätze glatt teilen — 2, 3, 4, 6, 8, 9, 12 — und genau das macht die Faustregel im Kopf brauchbar.' },
      { q: 'Wann versagt die Regel?', a: 'Unter etwa 4 Prozent und über etwa 12 Prozent wächst der Abstand schnell. Deshalb steht die Abweichung in einer eigenen Zeile.' },
      { q: 'Ist das dasselbe wie ein Zinseszinsrechner?', a: 'Nein. Ein Zinseszinsrechner lässt einen Betrag über einen Zeitraum wachsen, den du wählst; hier geht es um eine einzige Frage — wann verdoppelt er sich.' },
      { q: 'Von welcher Verzinsung wird ausgegangen?', a: 'Von jährlicher. Häufigere Verzinsung verkürzt die genaue Zeit etwas, und die Faustregel bildet das nicht ab.' },
    ],
  },
  'salary-convert': {
    longDescription: 'Alles läuft über einen einzigen Nenner — die Arbeitsstunde — mit einem Tag zu 8 Stunden, einer Woche zu 40, einem Monat zu 168 und einem Jahr zu 2016. Das sind Arbeitsnormen und kein Kalender, weshalb ein Jahr genau zwölf solcher Monate ist, ohne Rücksicht auf die Länge des Februars oder auf Feiertage. Anders zu rechnen ergäbe für dasselbe Gehalt je nach Monat verschiedene Antworten. Alle vier Zeiträume stehen zugleich da, weil die eigentliche Aufgabe meist der Vergleich von Angeboten in verschiedenen Einheiten ist und ein Umrechnen nacheinander bedeutet, aus dem Gedächtnis zu vergleichen.',
    howToUse: [
      'Trage den Betrag ein, den du bereits kennst.',
      'Wähle den Zeitraum, auf den sich dieser Betrag bezieht.',
      'Wähle den Zeitraum, in den du ihn umrechnen willst.',
      'Die übrigen Zeiträume stehen zum Vergleich daneben.',
    ],
    howItWorks: 'Der Betrag wird durch die Stunden seines eigenen Zeitraums geteilt und mit den Stunden des Zielzeitraums multipliziert. Tag 8 h, Woche 40 h, Monat 168 h, Jahr 2016 h.',
    example: '4200 € im Monat sind 50 400 € im Jahr und 25 € in der Stunde.',
    faq: [
      { q: 'Warum hat ein Monat 168 Stunden und nicht den wirklichen Kalender?', a: 'Weil ein Arbeitsmonat von 21 Tagen zu 8 Stunden der übliche Ansatz in Verträgen ist. Mit wirklichen Kalenderlängen ergäbe dasselbe Gehalt in jedem Monat des Jahres einen anderen Stundenlohn.' },
      { q: 'Sind Feiertage und Urlaub berücksichtigt?', a: 'Nein. Bezahlter Urlaub erhöht den Stundenwert eines Jahresgehalts, unbezahlte Freistellung senkt ihn; beides liegt außerhalb dieser einfachen Umrechnung.' },
      { q: 'Soll ich Angebote über den Stundenlohn vergleichen?', a: 'Bei verschiedenen Arbeitszeiten ist er die fairste gemeinsame Einheit. Eine Viertagewoche gegen eine Fünftagewoche allein am Monatsgehalt zu messen verbirgt einen Unterschied von zwanzig Prozent je Stunde.' },
      { q: 'Ist der Betrag brutto oder netto?', a: 'Was immer du einträgst. Die Umrechnung ist proportional: brutto hinein ergibt brutto heraus, netto hinein ergibt netto heraus.' },
    ],
  },
  'salary-raise': {
    longDescription: 'Die beiden Richtungen zählen, weil Verhandlungen in Prozent geführt und Entscheidungen in Geld getroffen werden. Ist die neue Zahl bekannt, liefert der Rechner den Prozentsatz; ist der Prozentsatz bekannt, liefert er die Zahl. Beide zeigen den Unterschied in Euro daneben, und das ist die Zahl, die wirklich etwas ändert: zehn Prozent auf ein kleines Gehalt und drei Prozent auf ein großes können derselbe Betrag sein. Eine Kürzung wird ehrlich als negativer Prozentsatz ausgewiesen und nicht als null versteckt — die Rechnung läuft in beide Richtungen gleich, und alles andere beschriebe das Geschehene falsch.',
    howToUse: [
      'Wähle, ob du das neue Gehalt oder den Prozentsatz kennst.',
      'Trage das bisherige Gehalt ein.',
      'Trage entweder das neue Gehalt oder den Prozentsatz der Erhöhung ein.',
      'Vergleiche Angebote am Unterschied in Geld und nicht am Prozentsatz allein.',
    ],
    howItWorks: 'Prozentsatz = (neu ÷ bisher − 1) × 100. Umgekehrt gilt neu = bisher × (1 + Prozentsatz ÷ 100).',
    example: 'Von 3400 € auf 3750 € sind 10,29 % und 350 € mehr im Monat.',
    faq: [
      { q: 'Wird der Prozentsatz vom Brutto- oder Nettogehalt genommen?', a: 'Vom Bruttogehalt, denn so stehen Gehälter im Arbeitsvertrag. Eine Bruttoerhöhung schlägt wegen der Steuerprogression nicht eins zu eins auf das Netto durch.' },
      { q: 'Ist die Inflation berücksichtigt?', a: 'Nein. Eine Erhöhung um fünf Prozent bei acht Prozent Inflation ist real eine Kürzung, und dieser Vergleich ist eine eigene Rechnung.' },
      { q: 'Warum wird eine Kürzung als negativer Prozentsatz angezeigt?', a: 'Weil sie eine ist. Bei null abzuschneiden verbärge die Richtung der Veränderung, und die Rechnung verhält sich in beide Richtungen gleich.' },
      { q: 'Wozu zusätzlich der Unterschied in Geld?', a: 'Weil Prozentangaben die Bezugsgröße verbergen. Drei Prozent auf ein großes Gehalt können zehn Prozent auf ein kleines schlagen, und erst die Spalte in Euro macht das sichtbar.' },
    ],
  },
};
