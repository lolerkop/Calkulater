import type { DeDetailedContent } from './types';

export const deMath3Content: Partial<Record<string, DeDetailedContent>> = {
  'gcd-lcm': {
    longDescription: 'Findet ggT und kgV für eine ganze Liste auf einmal und nicht nur für ein einzelnes Paar. Der ggT folgt aus dem euklidischen Algorithmus, paarweise über die Liste gefaltet, und das kgV wird über kgV(a,b) = a·b ÷ ggT(a,b) angesammelt, wobei vor dem Multiplizieren geteilt wird, damit das Produkt nicht früher überläuft als nötig. Beides entsteht in genauer ganzzahliger Arithmetik und wird nie gerundet: ein gerundetes kgV ließe sich nicht mehr ohne Rest durch die Ausgangszahlen teilen und sähe trotzdem plausibel aus. Eine eigene Zeile meldet, ob die Zahlen teilerfremd sind — der Fall, in dem der ggT 1 ist und das kgV schlicht ihr Produkt.',
    howToUse: [
      'Trage zwei oder mehr ganze Zahlen ein.',
      'Trenne sie mit Leerzeichen, Semikola oder Zeilenumbrüchen.',
      'Die Zahlen müssen ganz und größer als null sein.',
      'Das Ergebnis gilt für die ganze Liste auf einmal.',
    ],
    howItWorks: 'Der ggT einer Liste wird paarweise mit dem euklidischen Algorithmus gefaltet: ggT(a,b,c) = ggT(ggT(a,b),c). Das kgV folgt derselben Reihenfolge über kgV(a,b) = a ÷ ggT(a,b) × b. Beide Ergebnisse sind genaue ganze Zahlen.',
    example: 'Für 24, 36, 60 und 84 ist der größte gemeinsame Teiler 12 und das kleinste gemeinsame Vielfache 2520.',
    faq: [
      { q: 'Wie viele Zahlen darf ich eintragen?', a: 'Zwei oder mehr, ohne obere Grenze. Beide Werte falten sich paarweise über die Liste, zehn Zahlen sind also nicht schwerer als zwei.' },
      { q: 'Warum werden Brüche abgewiesen?', a: 'ggT und kgV sind für ganze Zahlen festgelegt. Brüche werden anders behandelt — über den ggT der Zähler und das kgV der Nenner —, und das ist eine Rechenart für Brüche und nicht für Zahlen in einer Liste.' },
      { q: 'Was bedeutet die Zeile zur Teilerfremdheit?', a: 'Dass die Zahlen keinen gemeinsamen Teiler außer eins haben, der ggT also 1 ist. In diesem Fall ist das kgV schlicht ihr Produkt.' },
      { q: 'Wofür wird das kgV eigentlich gebraucht?', a: 'Am häufigsten, um Brüche auf einen gemeinsamen Nenner zu bringen, und für Fragen danach, wann Zyklen zusammenfallen: zwei Ereignisse mit Perioden von 12 und 18 Tagen treffen nach 36 Tagen zusammen, ihrem kgV.' },
      { q: 'Warum kann die Rechnung bei einer langen Liste anhalten?', a: 'Das kgV wächst sehr schnell und übersteigt bei einer großen Menge den Bereich genauer ganzer Zahlen. Einen gerundeten Wert anzuzeigen kommt nicht infrage, weil er sich nicht mehr durch die Ausgangszahlen teilen ließe, deshalb hält die Rechnung ehrlich an.' },
    ],
  },
  'geometric-progression': {
    longDescription: 'Ein Zwilling des Rechners für die arithmetische Folge, Tabelle eingeschlossen, mit zwei Unterschieden, die zählen. Der Quotient darf nicht null sein — eine Reihe, die mit nichts multipliziert wird, bricht beim zweiten Glied zusammen und ist keine Folge. Und liegt der Quotient dem Betrag nach unter eins, erscheint die Summe der unendlichen Reihe, und meist ist genau sie der Grund, eine geometrische Folge überhaupt aufzurufen. Der darstellbare Bereich wird offen genannt: bei einem Quotienten von zehn und fünfzig Gliedern ist das letzte Glied zehn hoch neunundvierzig, und das als gewöhnliche Zahl auszugeben wäre still unredlich.',
    howToUse: [
      'Trage das erste Glied ein — es darf negativ sein.',
      'Trage den Quotienten ein: 2 verdoppelt jeden Schritt, 0,5 halbiert ihn.',
      'Trage ein, wie viele Glieder du brauchst, bis zu fünfzig.',
      'Die Tabelle führt die ersten zwanzig Glieder auf.',
    ],
    howItWorks: 'Das n-te Glied ist das erste Glied mal dem Quotienten hoch n minus eins. Die Summe ist das erste Glied mal eins minus dem Quotienten hoch n, geteilt durch eins minus dem Quotienten; ist der Quotient eins, ist die Summe schlicht das erste Glied mal n.',
    example: 'Beginnend bei 2 mit dem Quotienten 3 ist das zehnte Glied 39 366, und die Reihe summiert sich auf 59 048.',
    faq: [
      { q: 'Warum wird ein Quotient von null abgewiesen?', a: 'Weil jedes Glied nach dem ersten null wäre. Das ist keine Folge, und eine Tabelle voller Nullen ließe vermuten, die Eingabe hätte Sinn ergeben.' },
      { q: 'Wann besteht die unendliche Summe?', a: 'Wenn der Quotient echt zwischen minus eins und eins liegt. Dann schrumpfen die Glieder schnell genug, dass sich die Summe auf eine endliche Zahl einpendelt.' },
      { q: 'Darf der Quotient negativ sein?', a: 'Ja. Die Glieder wechseln dann das Vorzeichen, und die Summenformel kommt unverändert damit zurecht.' },
      { q: 'Warum fünfzig Glieder und nicht mehr?', a: 'Weil die Werte darüber hinaus den Bereich verlassen, in dem eine gewöhnliche Dezimalzahl lesbar bleibt. Die Grenze betrifft die Redlichkeit der Anzeige und nicht die Rechnung.' },
      { q: 'Ist eine Folge dasselbe wie Zinseszins?', a: 'Die Rechnung ist dieselbe, die Namen unterscheiden sich: der Quotient ist eins plus dem Zinssatz. Der Unterschied ist, dass du hier die Folge der Glieder siehst, während Geldrechner nur die Summe zeigen.' },
    ],
  },
  'linear-equation': {
    longDescription: 'Schafft die Konstante auf die andere Seite, teilt durch den Koeffizienten und prüft die Antwort durch Einsetzen. Die entarteten Fälle sind Antworten und keine Eingabefehler: bei einem Koeffizienten von null fällt die Gleichung auf b = c zusammen, was entweder für jedes x gilt oder für keines, und beide Ausgänge werden klar benannt statt hinter einem Strich verborgen.',
    howToUse: [
      'Trage den Koeffizienten vor x ein.',
      'Trage die Konstante und die rechte Seite ein.',
      'Lies die Lösung und die Schritte ab.',
    ],
    howItWorks: 'x = (c − b) ÷ a, sofern a nicht null ist; ist a null, läuft die Gleichung auf einen Vergleich von b mit c hinaus.',
    example: 'Für 3x + 5 = 20 ergibt das Verschieben der 5 zunächst 3x = 15 und das Teilen dann x = 5.',
    faq: [
      { q: 'Was passiert bei einem Koeffizienten von null?', a: 'Das x-Glied verschwindet, und die Gleichung wird zu b = c. Trifft das zu, ist jede Zahl eine Lösung; trifft es nicht zu, gibt es keine.' },
      { q: 'Werden negative Koeffizienten unterstützt?', a: 'Ja, alle drei Werte dürfen negativ oder gebrochen sein. Das Vorzeichen wird durch die Division mitgeführt.' },
      { q: 'Wozu die Probe durch Einsetzen?', a: 'Sie setzt die Lösung in die ursprüngliche Gleichung zurück. Kommt die rechte Seite wieder heraus, ist die Antwort auf einen Blick bestätigt.' },
      { q: 'Kann er quadratische Gleichungen lösen?', a: 'Nein, hier geht es nur um den ersten Grad. Für Gleichungen mit x² gibt es einen eigenen Rechner.' },
    ],
  },
  'linear-system': {
    longDescription: 'Zwei lineare Gleichungen mit zwei Unbekannten beschreiben zwei Geraden, und das System zu lösen heißt, ihren Schnittpunkt zu finden. Die Regel von Cramer kommt über Determinanten dorthin statt über Einsetzen, was die Rechnung kurz hält und den Sonderfall sichtbar macht: ist die Hauptdeterminante null, sind die Geraden parallel oder gleich, es gibt also entweder gar keinen Schnittpunkt oder unendlich viele. Der Rechner zeigt diese Determinante neben der Antwort gerade deshalb, weil sie darüber entscheidet, ob es eine Antwort gibt.',
    howToUse: [
      'Schreibe beide Gleichungen in der Form ax + by = c.',
      'Trage die Koeffizienten der ersten Gleichung ein: a₁, b₁ und c₁.',
      'Trage die Koeffizienten der zweiten Gleichung ein: a₂, b₂ und c₂.',
      'Eine fehlende Unbekannte bedeutet einen Koeffizienten von null und kein leeres Feld.',
    ],
    howItWorks: 'Die Hauptdeterminante ist Δ = a₁b₂ − a₂b₁. Dann gilt x = (c₁b₂ − c₂b₁) ÷ Δ und y = (a₁c₂ − a₂c₁) ÷ Δ. Eine Determinante von null bedeutet, dass das System keine eindeutige Lösung hat.',
    example: 'Für 2x + 3y = 13 und 4x − y = 5 ist die Determinante −14 und die Lösung x = 2, y = 3.',
    faq: [
      { q: 'Was bedeutet eine Determinante von null?', a: 'Die beiden Geraden sind parallel oder dieselbe Gerade. Parallele Geraden treffen sich nie, gleiche Geraden überall, und keiner der beiden Fälle lässt sich als ein einzelnes Zahlenpaar ausgeben.' },
      { q: 'Dürfen die Koeffizienten negativ oder gebrochen sein?', a: 'Ja. Beliebige reelle Zahlen gehen, auch negative und dezimale; nur eine Determinante von null hält die Rechnung an.' },
      { q: 'Wie trage ich eine Gleichung mit nur einer Unbekannten ein?', a: 'Setze für die fehlende Unbekannte den Koeffizienten null. Aus 3x = 12 wird a = 3, b = 0, c = 12.' },
      { q: 'Warum die Regel von Cramer und nicht Einsetzen?', a: 'Bei zwei Gleichungen liefern beide dasselbe Ergebnis, aber die Determinantenform trennt die Frage „gibt es eine Lösung“ von der Lösung selbst, und genau daran scheitert man am ehesten.' },
    ],
  },
  'logarithm': {
    longDescription: 'Findet den Exponenten, mit dem die Basis potenziert werden muss, um die Zahl zu ergeben. Alle drei Modi nutzen eine Formel, ln x geteilt durch ln b, und das Ergebnis kommt mit einer Probe durch Potenzieren.',
    howToUse: [
      'Trage die Werte ein.',
      'Prüfe den Definitionsbereich, wenn ein Feld abgewiesen wird.',
      'Lies das Ergebnis ab.',
    ],
    howItWorks: 'log_b(x) = ln x ÷ ln b; die Modi für Zehner- und natürlichen Logarithmus legen nur die Basis fest.',
    example: 'Der Logarithmus von 1024 zur Basis 2 ist 10, weil 2 hoch zehn 1024 ergibt.',
    faq: [
      { q: 'Warum muss die Zahl positiv sein?', a: 'Keine Potenz einer positiven Basis ergibt jemals null oder eine negative Zahl, der Logarithmus hat dort also keinen Wert.' },
      { q: 'Warum darf die Basis nicht eins sein?', a: 'Eins hoch jeder Potenz bleibt eins, die Gleichung hat also keine einzelne Antwort.' },
      { q: 'Was ist e?', a: 'Die Basis der natürlichen Logarithmen, rund 2,71828. Sie taucht überall dort auf, wo Wachstum stetig verläuft.' },
      { q: 'Wozu die Zeile mit der Probe?', a: 'Sie potenziert die Basis mit dem Ergebnis. Kommt die Ausgangszahl wieder heraus, ist die Antwort auf einen Blick bestätigt.' },
    ],
  },
  'modulo': {
    longDescription: 'Teilt eine ganze Zahl durch eine andere und zeigt den Rest, den Quotienten und die Gleichung, die beide verbindet. Die Vorzeichenregel ist die der Schulrechnung und der meisten Programmiersprachen: der Quotient wird gegen null abgeschnitten, und der Rest folgt dem Vorzeichen des Dividenden.',
    howToUse: [
      'Trage den Dividenden ein.',
      'Trage den Divisor ein.',
      'Lies Rest und Quotient ab.',
    ],
    howItWorks: 'Der Quotient ist die gegen null abgeschnittene Division; der Rest ist das, was die Gleichung a = b × q + r übrig lässt.',
    example: '17 geteilt durch 5 ergibt den Quotienten 3 und den Rest 2, denn 17 = 5 × 3 + 2.',
    faq: [
      { q: 'Was passiert bei negativen Zahlen?', a: 'Der Rest übernimmt das Vorzeichen des Dividenden: −17 und 5 ergeben den Quotienten −3 und den Rest −2, denn −17 = 5 × (−3) + (−2).' },
      { q: 'Ist das dasselbe wie Modulo in Python?', a: 'Nein. Python liefert einen Rest mit dem Vorzeichen des Divisors, −17 mod 5 sind dort also 3. Dieser Rechner folgt der abschneidenden Regel.' },
      { q: 'Kann ich Dezimalzahlen verwenden?', a: 'Nein. Die Division mit Rest ist für ganze Zahlen festgelegt, eine dezimale Eingabe wird deshalb abgewiesen statt gerundet.' },
      { q: 'Wozu die Zeile mit der Probe?', a: 'Sie macht die Antwort auf einen Blick nachprüfbar: multipliziere den Divisor mit dem Quotienten, addiere den Rest, und du hast den Dividenden zurück.' },
    ],
  },
};
