import type { DeDetailedContent } from './types';

export const deFinance2Content: Partial<Record<string, DeDetailedContent>> = {
  'credit-card-payoff': {
    longDescription: 'Ermittelt, wie viele Monate ein Kreditkartensaldo braucht, wenn du jeden Monat denselben Betrag zahlst. Eine Karte hat keine eigene Laufzeit: die Rate setzt sie, und die Rate entscheidet auch darüber, ob die Schuld je endet — unterhalb der monatlich berechneten Zinsen sinkt der Saldo nie. Deshalb vergleicht die Rechnung zuerst die Rate mit den Monatszinsen und verweigert die Antwort, statt eine Unendlichkeit zu zeigen. Der Plan Monat für Monat zeigt, wie viel jeder Rate an die Bank geht und wie viel die Schuld erreicht.',
    howToUse: [
      'Trage den derzeitigen Saldo der Karte ein.',
      'Gib den Jahreszins aus den Bedingungen an — er steht auch auf der Abrechnung.',
      'Setze den Betrag, den du jeden Monat zahlen kannst.',
      'Vergleiche die Zeile mit den Zinsen des ersten Monats mit deiner Rate: liegen sie nah beieinander, bewegt sich der Saldo kaum.',
    ],
    howItWorks: 'Monatszins = Jahreszins ÷ 12 ÷ 100. Monate = −ln(1 − Saldo × Zins ÷ Rate) ÷ ln(1 + Zins), aufgerundet. Die Rate muss die monatlich berechneten Zinsen übersteigen, sonst sinkt der Saldo nie.',
    example: 'Ein Saldo von 3000 € zu 24 % mit einer Rate von 150 € ist in 26 Monaten getilgt und kostet 869,62 € Zinsen.',
    faq: [
      { q: 'Wie unterscheidet sich das vom Tilgen eines Kredits?', a: 'Ein Kredit hat eine vertraglich gesetzte Laufzeit, und du suchst die Rate. Bei einer Karte ist es umgekehrt: die Laufzeit ist unbekannt, die Rate setzt sie, und eine zu kleine Rate heißt, dass sie nie endet.' },
      { q: 'Warum verweigert er die Antwort bei einer kleinen Rate?', a: 'Weil der Saldo unterhalb der Monatszinsen wächst, statt zu fallen. Die Formel zöge den Logarithmus einer negativen Zahl — Unsinn im Gewand einer Antwort.' },
      { q: 'Ist die zinsfreie Zeit enthalten?', a: 'Nein. Die Rechnung geht davon aus, dass auf den ganzen Saldo bereits Zinsen anfallen. Solange die Schuld innerhalb der zinsfreien Zeit liegt, gilt kein Zinssatz, und es gibt nichts zu rechnen.' },
      { q: 'Warum nennt die Bank eine andere Zahl?', a: 'Banken berechnen Zinsen täglich auf den tatsächlichen Saldo und rechnen Kontoführung und Gebühren für Barabhebungen hinzu. Hier steht eine monatliche Schätzung ohne Gebühren.' },
    ],
  },
  'crypto-pnl': {
    longDescription: 'Rechnet einen Handel so durch, wie es eine Börse tut: mit Richtung, zwei Gebühren und Hebel. Eine Short-Position gewinnt bei fallendem Preis, das Vorzeichen der Differenz kippt also — sie als Anstieg zu rechnen meldete einen Verlust, wo ein Gewinn war. Die Gebühr fällt zweimal an, beim Ein- und beim Ausstieg, und wird vom Umsatz jeder Seite genommen und nicht vom Ergebnis, ein Verlustgeschäft kostet also trotzdem Geld. Der Hebel ändert den Gewinn selbst nicht, nur sein Verhältnis zu deinem eigenen Geld — und dieses Verhältnis zeigt die Rendite der Position.',
    howToUse: [
      'Wähle die Richtung: long gewinnt bei steigendem, short bei fallendem Preis.',
      'Trage Einstiegspreis, Ausstiegspreis und Menge ein.',
      'Trage die Gebühr der Börse für eine Seite des Handels ein.',
      'Setze den Hebel, wenn die Position mit geliehenem Geld eröffnet wurde.',
    ],
    howItWorks: 'Ergebnis vor Gebühren = (Ausstieg − Einstieg) × Menge bei long und (Einstieg − Ausstieg) × Menge bei short. Die Gebühr wird vom Einstiegs- und vom Ausstiegsumsatz genommen. Eingesetzt = Einstiegsumsatz ÷ Hebel, und die Rendite wird daran gemessen.',
    example: 'Eine Long-Position über 0,5 Einheiten von 30 000 auf 34 500 bei 0,1 % Gebühr bringt netto 2217,75 und eine Rendite von 14,79 %.',
    faq: [
      { q: 'Warum kippt das Vorzeichen bei short?', a: 'Weil eine Short-Position bei fallendem Preis gewinnt: der Gewinn entsteht, wenn der Ausstiegspreis unter dem Einstiegspreis liegt. Sie als Anstieg zu rechnen meldete einen Verlust, wo ein Gewinn war.' },
      { q: 'Warum fällt die Gebühr zweimal an?', a: 'Die Börse nimmt sie sowohl beim Eröffnen als auch beim Schließen der Position. Jede Seite wird an ihrem eigenen Umsatz gemessen, ein Ausstieg zu höherem Preis kostet also mehr.' },
      { q: 'Wie ändert der Hebel das Ergebnis?', a: 'Der Gewinn in Geld ändert sich nicht — der eingesetzte Betrag schon. Ein Hebel von 2 halbiert dein eigenes Geld und verdoppelt die Rendite der Position.' },
      { q: 'Ist die Finanzierungsrate enthalten?', a: 'Nein. Die Finanzierung hängt von der Börse und von der Haltedauer ab; dieser Rechner rechnet den Handel selbst ab.' },
      { q: 'Was zeigt die Preisänderung?', a: 'Wie weit sich der Preis zwischen Ein- und Ausstieg bewegt hat, unabhängig von der Richtung des Handels und vom Hebel.' },
    ],
  },
  'dca': {
    longDescription: 'Ermittelt, was geschieht, wenn du jeden Monat dieselbe Summe zu einem sich ändernden Preis anlegst. Ein fester Betrag kauft bei niedrigem Preis mehr Anteile als bei hohem, der durchschnittliche Kaufpreis fällt deshalb UNTER den durchschnittlichen Preis des Zeitraums — das ist eine Eigenschaft des harmonischen Mittels und keine Wirkung der Anlagestrategie selbst. Das Preiswachstum ist hier eine Annahme, die du änderst, und keine Vorhersage: der Rechner kennt künftige Preise nicht und gibt sie nicht als bekannt aus. Der Endwert wird zum letzten Kaufpreis genommen, und die Tabelle zeigt, wie sich die Anteile Monat für Monat angesammelt haben.',
    howToUse: [
      'Trage den Betrag ein, den du jeden Monat anlegst.',
      'Trage ein, wie viele Monate die Käufe laufen.',
      'Trage den Preis je Anteil zu Beginn ein.',
      'Setze die angenommene monatliche Preisänderung — negativ für einen Rückgang.',
    ],
    howItWorks: 'Jeder Monat kauft Beitrag ÷ derzeitiger Preis Anteile, danach bewegt sich der Preis um den angegebenen Prozentsatz. Durchschnittlicher Kaufpreis = angelegt ÷ gekaufte Anteile. Endwert = gekaufte Anteile × letzter Kaufpreis.',
    example: '200 € im Monat über ein Jahr bei 2 % monatlichem Preisanstieg kaufen 21,574 Anteile zu einem Durchschnittspreis von 111,25 € und ergeben einen Endwert von 2682,42 €.',
    faq: [
      { q: 'Warum liegt der Durchschnittspreis unter dem durchschnittlichen Preis des Zeitraums?', a: 'Weil ein fester Betrag bei niedrigem Preis mehr Anteile kauft, die billigen Monate wiegen im Mittel also schwerer. Das ist eine Eigenschaft des harmonischen Mittels und gilt, wie sich der Preis auch bewegt.' },
      { q: 'Ist das eine Renditevorhersage?', a: 'Nein. Das Preiswachstum ist eine Zahl, die du angibst, und der Rechner spielt schlicht ihre Folgen durch. Er kennt den künftigen Preis nicht und erfindet keinen.' },
      { q: 'Auf welchem Preis beruht der Endwert?', a: 'Auf dem letzten Kaufpreis. Einen späteren Preis zu nehmen hieße, einen zusätzlichen Zeitraum zu erfinden, nach dem du nie gefragt hast.' },
      { q: 'Kann ich einen fallenden Preis abbilden?', a: 'Ja, trage einen negativen Prozentsatz ein. Bei einem Rückgang von 1 % im Monat ergeben 100 € im Monat über zwei Jahre einen Durchschnittspreis von 177,74 gegen einen Anfangspreis von 200.' },
      { q: 'Sind Gebühren und Steuern enthalten?', a: 'Nein, hier geht es um die reine Mechanik der Durchschnittsbildung. Depotgebühren und Steuern auf Gewinne werden gesondert gerechnet und wirken sich auf den Durchschnittspreis nicht aus.' },
    ],
  },
  'debt-snowball-avalanche': {
    longDescription: 'Arbeitet mit einer Simulation Monat für Monat statt mit einer geschlossenen Formel, denn eine getilgte Schuld gibt ihre Mindestrate frei und reicht sie an die nächste weiter — diese Rückkopplung lässt sich nicht als einzelner Ausdruck schreiben. Jeden Monat fallen Zinsen an, Mindestraten gehen hinaus, und alles Übrige geht an eine Zielschuld: der Schneeball zielt auf den kleinsten Saldo, die Lawine auf den höchsten Zinssatz. Die Lawine kostet immer weniger Zinsen, der Schneeball liefert früher eine getilgte Schuld, und die Tabelle nennt beide Ergebnisse Schuld für Schuld.',
    howToUse: [
      'Eine Schuld je Zeile: Name, Saldo, Jahreszins und Mindestrate.',
      'Der Name darf mehrere Wörter haben — die Zahlen werden vom Zeilenende gelesen.',
      'Das freie Geld ist das, was du über die Mindestraten hinaus zahlen willst.',
      'Vergleiche beide Strategien an denselben Schulden: der Unterschied zeigt sich in den Zinsen.',
    ],
    howItWorks: 'Simulation Monat für Monat: Zinsen, Mindestraten und alles Übrige an eine Zielschuld nach der gewählten Strategie.',
    example: 'Schulden von 1200 € zu 12 % und 6000 € zu 26 % sind mit 120 € freiem Geld nach der Lawine in 26 und nach dem Schneeball in 27 Monaten getilgt.',
    faq: [
      { q: 'Welche Strategie kostet weniger?', a: 'Die Lawine: sie greift den höchsten Zinssatz an, die gezahlten Zinsen sind also stets niedriger oder gleich. Der Schneeball tilgt die erste Schuld früher, und vielen ist das mehr wert als ein paar hundert Euro.' },
      { q: 'Warum Monat für Monat simulieren statt eine Formel zu nehmen?', a: 'Weil eine getilgte Schuld ihre Mindestrate freigibt, die danach zur nächsten Schuld hinzukommt. Diese Rückkopplung lässt sich nicht in einer geschlossenen Formel ausdrücken — nur Schritt für Schritt.' },
      { q: 'Was, wenn die Mindestrate die Zinsen nicht deckt?', a: 'Diese Schuld wird nie getilgt: der Saldo wächst schneller, als du zahlst. Die Rechnung sagt das klar, statt eine endlose Dauer zu zeigen.' },
      { q: 'Sind neue Kartenkäufe enthalten?', a: 'Nein. Die Simulation geht davon aus, dass du aufhörst, dich zu verschulden. Gibst du weiter mit der Karte aus, rückt die Dauer hinaus, und keine Strategie gleicht das aus.' },
    ],
  },
  'depreciation-methods': {
    longDescription: 'Berechnet die Abschreibung linear, doppelt degressiv und arithmetisch-degressiv. Die lineare teilt die Abschreibungsgrundlage gleichmäßig auf. Die doppelt degressive nimmt den doppelten linearen Satz vom verbleibenden Buchwert und schreibt in den frühen Jahren mehr ab, senkt den Buchwert aber nie unter den Restwert — dieser Boden unterscheidet das Verfahren von einer reinen geometrischen Reihe. Die arithmetisch-degressive verteilt die Grundlage im Verhältnis der verbleibenden Nutzungsdauer: von fünf Jahren nimmt das erste 5/15 und das letzte 1/15. Die Tabelle zeigt alle Jahre auf einmal.',
    howToUse: [
      'Trage den Anschaffungswert ein und das, wofür sich das Anlagegut am Ende seiner Nutzungsdauer verkaufen lässt.',
      'Die Nutzungsdauer wird in Jahren angegeben und setzt den Abschreibungssatz.',
      'Wähle ein Verfahren: linear ist gleichmäßig, degressiv am Anfang schneller, arithmetisch-degressiv liegt dazwischen.',
      'Das anzuzeigende Jahr hebt eine Zeile der Tabelle gesondert hervor.',
    ],
    howItWorks: 'Linear: (Anschaffung − Restwert) ÷ Nutzungsdauer. Doppelt degressiv: 2 ÷ Nutzungsdauer vom Buchwert, nie unter den Restwert. Arithmetisch-degressiv: Grundlage × verbleibende Jahre ÷ Summe der Jahreszahlen.',
    example: 'Ein Anlagegut für 120 000 € mit 20 000 € Restwert über fünf Jahre schreibt linear 20 000 € im Jahr ab.',
    faq: [
      { q: 'Wie unterscheidet sich die doppelt degressive von einer reinen geometrischen Reihe?', a: 'Durch ihren Boden: die Abschreibung senkt den Buchwert nie unter den Restwert. Ohne ihn näherte sich der Buchwert der Null und erreichte sie nie.' },
      { q: 'Wozu der Restwert?', a: 'Er ist das, wofür sich das Anlagegut am Ende seiner Nutzungsdauer verkaufen lässt. Abgeschrieben wird allein der Unterschied zwischen Anschaffung und Restwert — ein werthaltiges Gut auf null abzuschreiben wäre falsch.' },
      { q: 'Welches Verfahren soll ich nehmen?', a: 'Die lineare ist einfacher und gleichmäßig und die übliche Vorgabe. Beschleunigte Verfahren liegen näher an der Wirklichkeit bei Geräten, die früh an Wert verlieren, und senken die Steuerlast früher.' },
      { q: 'Ist das eine Steuerrechnung?', a: 'Nein. Hier steht die Rechnung dreier klassischer Verfahren. Welches davon deine Buchführung zulässt und über welche Nutzungsdauer, ist eine Frage der Richtlinien und des Rechts und nicht eines Rechners.' },
    ],
  },
  'dividend-yield': {
    longDescription: 'Die Dividendenrendite misst die Jahresdividende am Aktienkurs. Beide Zahlen trägst du selbst ein: die Rendite auf deinen Kaufpreis ist nicht die Rendite auf den heutigen Kurs, und der Rechner setzt die eine nicht stillschweigend für die andere ein.',
    howToUse: [
      'Trage die Werte ein.',
      'Prüfe den zulässigen Bereich, wenn ein Feld abgewiesen wird.',
      'Lies das Ergebnis ab.',
    ],
    howItWorks: 'Rendite = Jahresdividende je Aktie ÷ Aktienkurs × 100.',
    example: 'Eine Dividende von 1,20 € bei einem Kurs von 20 € ist eine Rendite von 6 %.',
    faq: [
      { q: 'Welchen Kurs soll ich nehmen?', a: 'Dein Kaufpreis ergibt die Rendite auf deine Anschaffungskosten; der derzeitige Kurs die Rendite, die ein neuer Käufer bekäme. Es sind verschiedene Zahlen, und beide sind berechtigt.' },
      { q: 'Sind Steuern berücksichtigt?', a: 'Nein. Trage die Dividende nach Steuern ein, wenn du die Nettorendite willst.' },
      { q: 'Ruft der Rechner Kurse ab?', a: 'Nein. Er arbeitet allein mit den Zahlen, die du einträgst, und verbindet sich mit nichts.' },
      { q: 'Ist eine hohe Rendite immer gut?', a: 'Nicht unbedingt. Die Rendite steigt, wenn der Kurs fällt, ein ungewöhnlich hoher Wert spiegelt also oft ein Problem und keine Großzügigkeit.' },
    ],
  },
  'down-payment': {
    longDescription: 'Teilt einen Kaufpreis in zwei Teile: was du im Voraus zahlst und was du aufnimmst. Es arbeitet in beide Richtungen — vom Prozentsatz zum Betrag und vom ersparten Betrag zu dem Anteil, den er ausmacht, und Letzteres ist gewöhnlich das Nützlichere: Menschen wissen, wie viel sie haben, und nicht, welchen Anteil des Preises das ist. Zinssatz und Laufzeit bleiben hier unberührt; das ist die eigene Rechnung für die Rate, während diese Seite beantwortet, ob das Eigenkapital reicht.',
    howToUse: [
      'Trage den Kaufpreis ein.',
      'Gib entweder den Prozentsatz oder den ersparten Betrag an.',
      'Lies Eigenkapital, verbleibende Darlehenssumme und Anteil ab.',
    ],
    howItWorks: 'Eigenkapital = Preis × Anteil ÷ 100; Darlehen = Preis − Eigenkapital. Im umgekehrten Modus gilt Anteil = Eigenkapital ÷ Preis × 100.',
    example: 'Bei einem Preis von 400 000 € und 20 % Eigenkapital zahlst du 80 000 € im Voraus und nimmst 320 000 € auf.',
    faq: [
      { q: 'Ist der Zinssatz berücksichtigt?', a: 'Nein. Diese Seite teilt den Preis: was jetzt gezahlt wird und was aufzunehmen bleibt. Die monatliche Rate aus Zinssatz und Laufzeit ist eine eigene Darlehensrechnung.' },
      { q: 'Was, wenn ich nur weiß, wie viel ich erspart habe?', a: 'Wähle den Modus „der ersparte Betrag“: der Anteil wird für dich berechnet, damit du sofort siehst, ob er die Mindestanforderung einer Bank erreicht.' },
      { q: 'Warum darf das Eigenkapital den Preis nicht übersteigen?', a: 'Weil dann überhaupt kein Darlehen nötig ist, und ein negatives Darlehen gibt es nicht. Eine solche Eingabe ist fast immer ein Zahlendreher.' },
      { q: 'Gehören die Nebenkosten in den Preis?', a: 'Nein. Trage den Preis ein, auf den die Bank den Prozentsatz anwendet; Versicherung, Wertermittlung und Gebühren werden gesondert geplant.' },
    ],
  },
};
