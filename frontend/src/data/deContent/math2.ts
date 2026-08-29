import type { DeDetailedContent } from './types';

export const deMath2Content: Partial<Record<string, DeDetailedContent>> = {
  'dice-probability': {
    longDescription: 'Summen auf mehreren Würfeln sind nicht gleich wahrscheinlich, und genau darum geht es. Es gibt genau einen Weg, mit zwei sechsseitigen Würfeln eine Zwei zu werfen, und sechs Wege für eine Sieben, die Sieben kommt also sechsmal so oft. Der Rechner zählt die günstigen Kombinationen genau über das Prinzip von Inklusion und Exklusion, statt Würfe zu simulieren, die Antwort ist deshalb ein bestimmter Bruch und keine Schätzung. Beide Anzahlen entstehen in genauer ganzzahliger Arithmetik, und das zählt, sobald sie wachsen: zehn zwanzigseitige Würfel haben mehr als zehn Billiarden Ausgänge, jenseits dessen, wo gewöhnliches Zählen mit Gleitkommazahlen verlässlich bleibt.',
    howToUse: [
      'Trage ein, wie viele Würfel geworfen werden.',
      'Trage ein, wie viele Seiten jeder Würfel hat.',
      'Trage die Summe ein, die dich interessiert.',
      'Die Summe muss zwischen der Zahl der Würfel und Würfel × Seiten liegen.',
    ],
    howItWorks: 'Die günstigen Kombinationen folgen aus Inklusion und Exklusion über die Zahl der Würfel, die ihren Höchstwert überschreiten. Die Gesamtzahl der Ausgänge ist Seiten hoch der Zahl der Würfel, und die Wahrscheinlichkeit ist ihr Verhältnis.',
    example: 'Zwei sechsseitige Würfel ergeben eine Sieben in sechs von sechsunddreißig Fällen, also 16,67 %.',
    faq: [
      { q: 'Warum ist die Sieben bei zwei Würfeln die wahrscheinlichste Summe?', a: 'Weil sie die meisten Kombinationen hat: sechs, von 1+6 bis 6+1. Zwei und Zwölf haben je eine, sie erscheinen deshalb sechsmal seltener.' },
      { q: 'Deckt das Würfel mit verschiedenen Seitenzahlen ab?', a: 'Nein, alle Würfel sind hier gleich. Gemischte Sätze — etwa ein W6 mit einem W8 — brauchen eine andere Zählung und sind nicht das, was dieser Rechner berechnet.' },
      { q: 'Was ist die erwartete Summe?', a: 'Der Durchschnitt über viele Würfe: Würfel × (Seiten + 1) ÷ 2. Für drei sechsseitige Würfel sind es 10,5, weshalb Zehn und Elf die häufigsten Ergebnisse sind.' },
      { q: 'Wie bekomme ich die Chance auf mindestens eine bestimmte Summe?', a: 'Addiere die Wahrscheinlichkeiten dieser Summe und aller höheren. Dieser Rechner antwortet für jeweils eine genaue Summe.' },
    ],
  },
  'difference-abs-rel': {
    longDescription: 'Zeigt beide Differenzen zugleich: die schlichte Subtraktion und ihre Größe im Verhältnis zum Ausgangswert. Im Nenner steht der Betrag der Basis, ein Anstieg von einer negativen Zahl aus liest sich deshalb als Wachstum und nicht als negativer Prozentwert.',
    howToUse: [
      'Trage die Werte ein.',
      'Prüfe den zulässigen Bereich, wenn ein Feld abgewiesen wird.',
      'Lies das Ergebnis ab.',
    ],
    howItWorks: 'Absolut = nachher − vorher. Relativ = diese Differenz geteilt durch den Betrag von vorher, mal 100.',
    example: 'Von 100 auf 120 beträgt die absolute Differenz 20 und die relative 20 %.',
    faq: [
      { q: 'Wie unterscheidet sich das von der prozentualen Veränderung?', a: 'Die prozentuale Veränderung teilt durch die Basis selbst. Hier ist der Teiler ihr Betrag, ein Wachstum von einer negativen Zahl aus liest sich deshalb als positiv.' },
      { q: 'Warum fehlt die relative Differenz manchmal?', a: 'Ist der Ausgangswert null, gibt es nichts, wodurch geteilt werden könnte, es besteht also nur die absolute Differenz.' },
      { q: 'Welcher Wert ist die Basis?', a: 'Der erste — der Wert, von dem du ausgegangen bist. Die beiden zu tauschen ändert den Prozentwert.' },
      { q: 'Dürfen beide Werte negativ sein?', a: 'Ja. Die absolute Differenz behält ihr Vorzeichen, und die relative wird an der Größe der Basis gemessen.' },
    ],
  },
  'divisors': {
    longDescription: 'Die Probedivision läuft nur bis zur Quadratwurzel: jeder gefundene Teiler liefert sofort seinen Partner, eine Zahl nahe einer Billion braucht deshalb eine Million Schritte statt einer Billion. Eine Quadratzahl paart sich mit sich selbst, und dieses Doppel wird entfernt — sonst käme die Anzahl gerade heraus, wo sie stets ungerade ist.',
    howToUse: [
      'Trage eine ganze Zahl ab eins ein.',
      'Lies die vollständige Liste der Teiler ab.',
      'Prüfe darunter Anzahl und Summe.',
    ],
    howItWorks: 'Jedes i bis zur Quadratwurzel, das n teilt, steuert sowohl i als auch n ÷ i bei; bei einer Quadratzahl fallen beide zusammen.',
    example: '360 hat 24 Teiler, die zusammen 1170 ergeben.',
    faq: [
      { q: 'Wie unterscheidet sich das von der Primfaktorzerlegung?', a: 'Die Zerlegung nennt die primen Bausteine; hier steht jede Zahl, die ohne Rest teilt. Aus der einen Liste die andere zu bauen kostet trotzdem Arbeit.' },
      { q: 'Warum hat eine Quadratzahl eine ungerade Anzahl?', a: 'Ihre Quadratwurzel paart sich mit sich selbst, ein Teiler hat also keinen eigenen Partner, und die Gesamtzahl kommt ungerade heraus.' },
      { q: 'Was macht eine Zahl vollkommen?', a: 'Ihre echten Teiler ergeben zusammen die Zahl selbst. Sechs ist die kleinste: eins plus zwei plus drei.' },
      { q: 'Warum sind die Zahlen auf eine Billion begrenzt?', a: 'Die Probedivision bis zur Wurzel aus einer Billion sind schon eine Million Schritte. Darüber hinaus fühlte sich die Seite nicht mehr unmittelbar an.' },
    ],
  },
  'factorial': {
    longDescription: 'Multipliziert jede ganze Zahl bis n, in genauer ganzzahliger Arithmetik. Schon bei 20! übersteigt das Ergebnis das, was gewöhnliche Browserzahlen sicher halten, alles unterhalb genauer Arithmetik verlöre also still die niedrigen Stellen und gäbe eine Rundung als Antwort aus.',
    howToUse: [
      'Trage eine ganze Zahl von 0 bis 170 ein.',
      'Lies den genauen Wert ab.',
      'Prüfe bei sehr großen Ergebnissen die Stellenzahl.',
    ],
    howItWorks: 'n! ist das Produkt jeder ganzen Zahl von 1 bis n, und 0! ist als 1 festgelegt.',
    example: '10! sind 3 628 800, und 20! sind bereits 2 432 902 008 176 640 000.',
    faq: [
      { q: 'Warum ist bei 170 Schluss?', a: 'Das ist eine Grenze dieser Seite und nicht der Rechnung. 170! hat bereits 307 Stellen, und darüber hinaus hört die Antwort auf, lesbar zu sein.' },
      { q: 'Ist das Ergebnis genau?', a: 'Ja, jede Stelle. Gewöhnliche Zahlen verlieren ab 20! an Genauigkeit, deshalb wird durchgehend in genauen ganzen Zahlen gerechnet.' },
      { q: 'Warum ist 0! gleich eins?', a: 'Es ist das leere Produkt: multipliziert man nichts, bleibt das neutrale Element der Multiplikation, und die Festlegung hält die kombinatorischen Formeln stimmig.' },
      { q: 'Kann ich einen Bruch eintragen?', a: 'Nein. Die Fakultät auf nicht ganze Zahlen auszudehnen ist die Gammafunktion, und das ist eine andere Rechnung.' },
    ],
  },
  'fibonacci': {
    longDescription: 'Berechnet eine Fibonacci-Zahl aus ihrer Stelle, die Summe alles Vorangehenden und das Verhältnis zum vorigen Glied — jenes, das sich mit wachsender Stelle dem Goldenen Schnitt nähert. Die Zählung beginnt bei F₁ = 0 und F₂ = 1 und bleibt dabei: die andere gebräuchliche Übereinkunft, die bei 1 anfängt, verschöbe jede Antwort um eine Stelle. Die Rechnung endet beim 78. Glied, und diese Schranke ist gemessen und nicht gerundet — ab dem 79. verlässt die Reihe den Bereich genauer ganzer Zahlen, und die Antwort wiche still von der wahren ab. Bis 78 sind sowohl die Glieder als auch die Summen genau.',
    howToUse: [
      'Trage die Stelle des gesuchten Glieds ein.',
      'Die Zählung beginnt bei F₁ = 0 und F₂ = 1.',
      'Verfügbar sind die Stellen von der ersten bis zur achtundsiebzigsten.',
      'Das Verhältnis zum vorigen Glied erscheint ab dem dritten.',
    ],
    howItWorks: 'Jedes Glied ist die Summe der beiden vorangehenden: Fₙ = Fₙ₋₁ + Fₙ₋₂ mit F₁ = 0 und F₂ = 1. Das Verhältnis benachbarter Glieder nähert sich mit wachsender Stelle dem Goldenen Schnitt von 1,618.',
    example: 'Das zwanzigste Glied ist 4181, die Summe der ersten zwanzig ist 10 945, und das Verhältnis zum vorigen Glied liegt bereits bei 1,618.',
    faq: [
      { q: 'Wo beginnt die Reihe?', a: 'Hier bei null: F₁ = 0, F₂ = 1, F₃ = 1, F₄ = 2 und so fort. Eine andere gebräuchliche Übereinkunft macht das erste Glied zu 1, was jede Stelle um eins verschiebt — das zehnte Glied wäre dann 55 statt 34.' },
      { q: 'Warum kann ich nicht über das 78. Glied hinaus?', a: 'Ab dem 79. passen die Zahlen nicht mehr genau in den Ganzzahlbereich, mit dem der Browser rechnet, und die Antwort wiche von der wahren ab, während sie plausibel aussähe. Die Schranke wurde gegen genaue Arithmetik geprüft: bis 78 stimmen Glieder und Summen überein.' },
      { q: 'Wie hängt die Reihe mit dem Goldenen Schnitt zusammen?', a: 'Das Verhältnis benachbarter Glieder nähert sich mit wachsender Stelle 1,6180339… Beim zehnten Glied liegt es bei 1,619, und beim zwanzigsten ist es auf vier Nachkommastellen vom Grenzwert nicht zu unterscheiden.' },
      { q: 'Warum haben die ersten beiden Glieder kein Verhältnis?', a: 'Es gibt nichts, wodurch geteilt werden könnte: das erste Glied hat keinen Vorgänger, und der Vorgänger des zweiten ist null. Die Zeile wegzulassen ist ehrlicher, als unendlich auszugeben.' },
      { q: 'Wie groß ist die Summe der ersten n Glieder?', a: 'Sie ist stets um eins kleiner als das Glied an der Stelle n+2. Die Summe der ersten zehn ist 88, und das zwölfte Glied ist 89.' },
    ],
  },
  'fraction-arith': {
    longDescription: 'Rechnet mit Brüchen genau, in ganzen Zahlen, ohne den Umweg über Dezimalzahlen. Das zählt: ein Drittel hat keine endliche Dezimalform, und eine Rundung unterwegs lässt 1/3 + 2/3 als 0,99999… statt als eins herauskommen. Hier bleiben Zähler und Nenner bis zum Schluss ganzzahlig, das Ergebnis wird mit dem größten gemeinsamen Teiler gekürzt, und das Vorzeichen sitzt im Zähler. Der Dezimalwert steht daneben als Anhaltspunkt und nicht als Grundlage der Rechnung.',
    howToUse: [
      'Wähle die Rechenart.',
      'Trage Zähler und Nenner beider Brüche ein.',
      'Lies das genaue, gekürzte Ergebnis ab.',
    ],
    howItWorks: 'Addition und Subtraktion laufen über den gemeinsamen Nenner b·d, die Multiplikation multipliziert Zähler und Nenner, und die Division multipliziert mit dem Kehrwert des zweiten Bruchs. Das Ergebnis wird mit dem größten gemeinsamen Teiler gekürzt, und das Vorzeichen sitzt im Zähler.',
    example: '1/2 + 1/3 = 5/6 — genau, ohne Zwischenrundung.',
    faq: [
      { q: 'Warum nicht einfach die Dezimalwerte addieren?', a: 'Weil ein Drittel keine endliche Dezimalform hat. Rundet man es, kommt 1/3 + 2/3 als 0,99999… statt als eins heraus, und der Fehler wächst von dort weiter.' },
      { q: 'Wird das Ergebnis selbsttätig gekürzt?', a: 'Ja, mit dem größten gemeinsamen Teiler von Zähler und Nenner. 6/12 erscheint als 1/2, und der Faktor, mit dem gekürzt wurde, steht in einer eigenen Zeile.' },
      { q: 'Wohin gehört ein Minuszeichen?', a: 'In den Zähler. −1/2 und 1/−2 bedeuten dasselbe, der Nenner wird deshalb immer auf positiv gebracht.' },
      { q: 'Gibt es eine Grenze für die Größe der Zahlen?', a: 'Ja, eine Million dem Betrag nach für jede. So bleibt jedes Zwischenprodukt im Bereich genauer ganzer Zahlen, und das Ergebnis kann nicht still an Genauigkeit verlieren.' },
    ],
  },
};
