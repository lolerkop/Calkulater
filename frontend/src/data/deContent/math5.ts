import type { DeDetailedContent } from './types';

export const deMath5Content: Partial<Record<string, DeDetailedContent>> = {
  'roman-numerals': {
    longDescription: 'Rechnet eine arabische Zahl in eine römische um und zurück. Der Bereich reicht von 1 bis 3999, der größten Zahl, die sich ohne Überstrich schreiben lässt, und die Rückrichtung nimmt nur die kanonische Form an, damit jede Zahl genau eine Schreibweise hat.',
    howToUse: [
      'Wähle die Richtung.',
      'Trage die Zahl oder das Zahlzeichen ein.',
      'Lies das Ergebnis ab.',
    ],
    howItWorks: 'Die Zeichen werden vom größten her genommen; die Subtraktionspaare CM, CD, XC, XL, IX und IV halten die Schreibweise kanonisch.',
    example: '1994 ist MCMXCIV: M + CM + XC + IV.',
    faq: [
      { q: 'Warum endet der Bereich bei 3999?', a: 'Darüber hinaus brauchen Tausender einen Überstrich, und der gehört nicht zum reinen Text.' },
      { q: 'Warum wird IIII abgewiesen?', a: 'Die kanonische Schreibweise der Vier ist IV. Beides anzunehmen hieße, dass eine Zahl mehr als eine richtige Form hat, und die Rückumrechnung wäre nicht mehr eindeutig.' },
      { q: 'Gibt es eine römische Null?', a: 'Nein. Das System hat kein Zeichen für die Null und keine negativen Zahlen.' },
      { q: 'Werden Kleinbuchstaben angenommen?', a: 'Ja, die Eingabe wird ohne Rücksicht auf Groß- und Kleinschreibung gelesen, und die Antwort erscheint in Großbuchstaben.' },
    ],
  },
  'rounding': {
    longDescription: 'Drei Richtungen decken die Fälle ab, die sich tatsächlich unterscheiden. Kaufmännisches Runden schickt die Hälfte von der Null weg, aus 2,5 wird also 3 und aus −2,5 wird −3. Ab- und Aufrunden meinen hier Boden und Decke auf dem Zahlenstrahl und nicht das Weglassen oder Auffüllen des Betrags, und bei negativen Zahlen zählt dieser Unterschied: −2,44 auf eine Stelle abgerundet ist −2,5 und nicht −2,4. Die Zeile mit der Differenz zeigt genau, was das Runden verworfen hat — und genau dieser Teil häuft sich an, wenn dieselbe Rechnung auf eine ganze Spalte statt auf eine Zahl angewendet wird.',
    howToUse: [
      'Trage die Zahl ein, die gerundet werden soll.',
      'Trage ein, wie viele Nachkommastellen bleiben sollen.',
      'Wähle die Richtung: kaufmännisch, ab oder auf.',
      'Lies die Zeile mit der Differenz, um zu sehen, was verworfen wurde.',
    ],
    howItWorks: 'Der Wert wird mit zehn hoch der Stellenzahl vervielfacht, in die gewählte Richtung gerundet und danach zurückgerechnet. Null Stellen runden auf eine ganze Zahl.',
    example: '2748,536 auf zwei Stellen gerundet ergibt 2748,54 und verwirft 0,004.',
    faq: [
      { q: 'Wohin geht die Hälfte beim kaufmännischen Runden?', a: 'Von der Null weg: aus 2,5 wird 3 und aus −2,5 wird −3. Das ist die im Alltag und in den meisten Finanzregeln übliche Übereinkunft.' },
      { q: 'Ist Abrunden dasselbe wie das Weglassen der weiteren Stellen?', a: 'Nur bei positiven Zahlen. Bei negativen führt das Weglassen zur Null hin, während Abrunden von ihr weg führt: aus −2,44 wird auf eine Stelle −2,5.' },
      { q: 'Warum zählt die Differenz?', a: 'Weil sie sich anhäuft. Tausend Rechnungspositionen in dieselbe Richtung zu runden kann eine Summe merklich verschieben, weshalb Buchhaltungsregeln die Richtung vorschreiben, statt sie offenzulassen.' },
      { q: 'Kann ich auf Zehner oder Hunderter runden?', a: 'Mit diesem Feld nicht, es nimmt Nachkommastellen ab null. Vorher durch zehn zu teilen und danach zu multiplizieren hat dieselbe Wirkung.' },
    ],
  },
  'sample-size': {
    longDescription: 'Das ist die Umkehrung eines Konfidenzintervalls: dort ist die Zahl der Befragten bekannt und die Breite des Intervalls kommt heraus, hier ist der zulässige Fehler vorgegeben und die Zahl der Personen kommt heraus. Ein Anteil von 50 % ergibt die größte Stichprobe — p·(1−p) hat genau in der Mitte sein Maximum —, weshalb er die Voreinstellung ist: nach oben lässt sich nicht danebenliegen. Die Korrektur für endliche Grundgesamtheiten greift, sobald deren Größe bekannt ist: 384 Personen aus einem Dorf mit 500 zu befragen ist unnötig.',
    howToUse: [
      'Die Fehlergrenze ist die halbe Intervallbreite: „±3 %“ heißt 3.',
      'Setze den erwarteten Anteil auf 50 %, wenn er unbekannt ist: das ergibt die größte und damit sichere Stichprobe.',
      'Setze die Grundgesamtheit auf null, wenn sie groß oder unbekannt ist — die Korrektur bleibt dann aus.',
      'Angenommen wird eine einfache Zufallsstichprobe. Klumpen- oder Quotenverfahren brauchen mehr Personen.',
    ],
    howItWorks: 'n₀ = z²·p·(1−p)/e²; bei bekannter Grundgesamtheit n = n₀/(1 + (n₀−1)/N).',
    example: 'Bei 95 % und einer Fehlergrenze von 5 % brauchst du 385 Personen, gleich wie groß die Stadt ist.',
    faq: [
      { q: 'Warum ist die Stichprobe bei 50 % am größten?', a: 'Weil die Formel p·(1−p) enthält, und das hat genau bei der Hälfte sein Maximum. Bei 10 % oder 90 % ist die Streuung kleiner und du brauchst ein Drittel so viele — kennst du den Anteil aber vorher nicht, sind 50 % die sichere Wahl.' },
      { q: 'Warum hängt die Stichprobe kaum von der Stadtgröße ab?', a: 'Ohne die Korrektur geht die Größe der Grundgesamtheit gar nicht in die Formel ein: die Genauigkeit kommt aus der Zahl der Befragten und nicht aus ihrem Anteil an der Bevölkerung. Die Korrektur greift erst, wenn die Stichprobe mit der Grundgesamtheit vergleichbar wird — ab etwa einem Zwanzigstel.' },
      { q: 'Was kostet der Schritt von 95 % auf 99 %?', a: 'Der kritische Wert steigt von 1,96 auf 2,58 und die Stichprobe mit seinem Quadrat, also um das 1,73-Fache. Es ist die teuerste Einstellung: den Fehler zu halbieren ist billiger als vier Punkte mehr Sicherheit.' },
      { q: 'Deckt das A/B-Tests ab?', a: 'Teilweise: hier wird EIN Anteil bemessen. Zwei Varianten zu vergleichen verlangt eine Rechnung für die Differenz zweier Anteile und rund doppelt so viele Personen — eine Stichprobe je Variante.' },
    ],
  },
  'stats-descriptive': {
    longDescription: 'Ermittelt die beschreibenden Kennzahlen einer beliebigen Liste: Mittelwert und Median, die umso weiter auseinanderdriften, je schiefer die Daten sind, dazu Modus, Spannweite und Streuung. Die Zahlen lassen sich als Spalte einfügen oder mit Leerzeichen dazwischen eintippen. Die Varianz nutzt in der Voreinstellung die Stichprobenform mit n−1 im Nenner, weil eine Liste gewöhnlich eine Stichprobe aus etwas Größerem ist; die Form für die Grundgesamtheit ist eine ausdrückliche Wahl und keine versteckte.',
    howToUse: [
      'Füge die Zahlen als Spalte ein oder tippe sie mit Leerzeichen getrennt.',
      'Wähle, ob die Liste eine Stichprobe oder die ganze Grundgesamtheit ist.',
      'Lies den Mittelwert und darunter die Streuungsmaße ab.',
    ],
    howItWorks: 'Der Mittelwert ist die Summe geteilt durch die Anzahl. Der Median ist die Mitte der geordneten Liste oder das Mittel der beiden mittleren Werte bei gerader Anzahl. Die Varianz ist die mittlere quadratische Abweichung vom Mittelwert — geteilt durch n−1 bei einer Stichprobe und durch n bei einer Grundgesamtheit —, und die Standardabweichung ist ihre Quadratwurzel.',
    example: 'Die Liste 4, 8, 15, 16, 23, 42 hat einen Mittelwert von 18, aber einen Median von 15,5: ein großer Wert zieht den Mittelwert nach oben und bewegt den Median kaum.',
    faq: [
      { q: 'Wie unterscheidet sich der Median vom Mittelwert?', a: 'Der Mittelwert nutzt die Größe jedes Wertes, eine einzelne sehr große Zahl verschiebt ihn also merklich. Der Median nutzt nur die Reihenfolge, was ihn gegen Ausreißer weit widerstandsfähiger macht.' },
      { q: 'Soll ich die Varianz für Stichprobe oder Grundgesamtheit wählen?', a: 'Ist die Liste eine Stichprobe, mit der du etwas Größeres beurteilst, nimm die Stichprobenform mit n−1. Sind diese Zahlen jeder Fall, der dich betrifft, nimm die Form für die Grundgesamtheit.' },
      { q: 'Warum erscheint der Modus manchmal als Strich?', a: 'Weil es keinen gibt. Kommt jeder Wert genau einmal vor, gibt es keinen häufigsten Wert, und einen beliebigen zu nennen wäre falsch.' },
      { q: 'Was passiert bei einem Tippfehler in der Liste?', a: 'Es wird nichts berechnet, und stattdessen erscheint der nicht erkannte Ausschnitt. Ihn stillschweigend zu überspringen meldete Kennzahlen für andere Daten als die, die du auf dem Bildschirm siehst.' },
    ],
  },
  'weighted-mean': {
    longDescription: 'Mittelt Werte, die nicht gleich stark zählen: eine Kursnote gewichtet nach Leistungspunkten, ein Durchschnittspreis gewichtet nach der gekauften Menge, ein Ergebnis gewichtet nach Stunden. Die Paare werden je Zeile eingetragen — zuerst der Wert, dann sein Gewicht. Eine Zeile mit nur einer Zahl wird rundheraus abgewiesen, denn ein Gewicht von 1 für dich einzusetzen mittelte eine Menge, die du nie eingetragen hast.',
    howToUse: [
      'Trage die Paare je Zeile ein: der Wert, ein Leerzeichen, dann das Gewicht.',
      'Prüfe, dass jede Zeile genau zwei Zahlen enthält.',
      'Lies den gewichteten Durchschnitt und die Summe der Gewichte ab.',
    ],
    howItWorks: 'Jeder Wert wird mit seinem Gewicht multipliziert, die Produkte werden addiert und durch die Summe der Gewichte geteilt: x̄ = Σ(xᵢ·wᵢ) / Σwᵢ. Sind alle Gewichte gleich, entspricht das Ergebnis dem schlichten arithmetischen Mittel.',
    example: 'Noten von 90, 75 und 60 mit den Gewichten 3, 4 und 2 ergeben (270 + 300 + 120) / 9 = 76,6667 — am nächsten an 75, denn diese Note trägt das größte Gewicht.',
    faq: [
      { q: 'Wie unterscheidet sich das von einem schlichten Durchschnitt?', a: 'Ein schlichter Durchschnitt behandelt jeden Wert als gleich wichtig. Ein gewichteter berücksichtigt, dass manche Werte mehr zählen — eine Prüfung mit vier Leistungspunkten verschiebt das Ergebnis stärker als ein Test mit einem.' },
      { q: 'Was passiert, wenn alle Gewichte gleich sind?', a: 'Das Ergebnis entspricht dem schlichten arithmetischen Mittel: der gemeinsame Faktor kürzt sich aus Zähler und Nenner heraus.' },
      { q: 'Darf ein Gewicht null sein?', a: 'Bei einem einzelnen Wert ja — er fällt dann schlicht aus dem Ergebnis heraus. Sind alle Gewichte null, gibt es nichts, wodurch geteilt werden könnte, und der Rechner sagt das.' },
      { q: 'Warum ist eine Zeile mit einer Zahl ein Fehler?', a: 'Weil sich nicht erkennen lässt, ob es ein Wert ohne Gewicht oder ein Gewicht ohne Wert ist. Die fehlende Zahl zu ergänzen hieße, Daten zu erfinden.' },
    ],
  },
  'z-score': {
    longDescription: 'Rechnet einen einzelnen Wert in Standardabweichungen vom Mittelwert um, damit sich auf verschiedenen Skalen gemessene Ergebnisse vergleichen lassen: eine Punktzahl von 80 gegen einen Mittelwert von 75 bei einer Streuung von 8 sind dieselben 0,625 Sigma wie eine Größe von 178 gegen einen Mittelwert von 172 bei einer Streuung von 9,6. Das Vorzeichen bleibt erhalten — ein negativer Wert bedeutet, dass er unter dem Mittelwert liegt, und das ist eine Antwort und kein Eingabefehler.',
    howToUse: [
      'Trage den Wert ein, den du einordnen willst.',
      'Gib Mittelwert und Standardabweichung der Menge an.',
      'Lies ab, wie viele Sigma er entfernt liegt.',
    ],
    howItWorks: 'z = (x − μ) / σ. Der Zähler ist die gewöhnliche Abweichung vom Mittelwert; der Nenner rechnet sie in Einheiten der Streuung um, weshalb der z-Wert nicht von der ursprünglichen Messskala abhängt.',
    example: 'Ein Wert von 85 bei einem Mittelwert von 70 und einer Abweichung von 10 ergibt z = 1,5: anderthalb Standardabweichungen über dem Mittelwert.',
    faq: [
      { q: 'Was bedeutet ein negativer z-Wert?', a: 'Dass der Wert unter dem Mittelwert liegt. Das Vorzeichen gehört zur Antwort: −1,5 und +1,5 sind gleich weit vom Mittelwert entfernt, nur in entgegengesetzte Richtungen.' },
      { q: 'Warum wird eine Standardabweichung von null abgewiesen?', a: 'Streuung null heißt, dass alle Werte gleich sind. Es gibt nichts, wodurch geteilt werden könnte, und „unendlich weit vom Mittelwert“ ist keine Zahl.' },
      { q: 'Welche z-Werte gelten als groß?', a: 'Bei annähernd normalverteilten Daten liegen rund 68 % der Werte innerhalb von ±1 und rund 95 % innerhalb von ±2, ein Betrag über 2 sticht also bereits aus dem Rest heraus.' },
      { q: 'Woher kommen Mittelwert und Abweichung?', a: 'Sie lassen sich aus der Werteliste selbst berechnen — der Rechner für Mittelwert und Kennzahlen nennt beide zusammen.' },
    ],
  },
};
