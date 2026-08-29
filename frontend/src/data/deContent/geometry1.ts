import type { DeDetailedContent } from './types';

export const deGeometry1Content: Partial<Record<string, DeDetailedContent>> = {
  'belt-length': {
    longDescription: 'Die Länge eines offenen Riementriebs sind zwei gerade Trume, je die halbe Umfangslinie der Scheiben und eine kleine Korrektur dafür, dass ungleiche Scheiben die Trume nicht parallel führen. Bei gleichen Scheiben verschwindet die Korrektur, und die Formel schrumpft auf „zwei Achsabstände plus ein Umfang“. Der Umschlingungswinkel an der kleinen Scheibe steht gesondert: er begrenzt das übertragbare Drehmoment, und bei sehr ungleichen Durchmessern beginnt der Riemen zu rutschen.',
    howToUse: [
      'Nimm Wirkdurchmesser — gemessen an der Mittellinie des Riemens und nicht am äußeren Rand der Scheibe.',
      'Die Reihenfolge der Durchmesser spielt keine Rolle: die Rechnung findet die kleinere Scheibe selbst.',
      'Ein Umschlingungswinkel unter 120° birgt Rutschgefahr — setze eine Spannrolle ein.',
      'Für einen Keilriemen wähle die nächste Normlänge, meist aufgerundet.',
    ],
    howItWorks: 'L = 2C + π(D₁+D₂)/2 + (D₂−D₁)²/(4C).',
    example: 'Scheiben mit 100 und 200 mm bei 300 mm Achsabstand brauchen einen Riemen von 1079,08 mm.',
    faq: [
      { q: 'Wozu die Korrektur für ungleiche Durchmesser?', a: 'Bei ungleichen Scheiben stehen die geraden Trume schräg statt parallel und sind deshalb länger als der reine Achsabstand. Die Korrektur trägt dem Rechnung; bei gleichen Durchmessern verschwindet sie.' },
      { q: 'Warum ist ein kleiner Umschlingungswinkel ein Problem?', a: 'Ein Riemen überträgt Kraft über Reibung, und die wächst mit dem Umschlingungswinkel. Unter etwa 120° reicht der Halt nicht, der Riemen rutscht und wird heiß — dann setzt man eine Spannrolle ein oder rückt die Wellen weiter auseinander.' },
      { q: 'Was, wenn keine Normlänge passt?', a: 'Nimm die nächstgrößere und fange das Spiel über den Achsabstand ab, der fast immer verstellbar ist. Genau deshalb werden Triebe mit Schlitten oder Spanner gebaut.' },
      { q: 'Gilt das auch für einen Zahnriemen?', a: 'Die Länge wird genauso gerechnet, aber ein Zahnriemen muss eine ganze Zahl von Teilungen haben. Dort wählt man eine Zähnezahl aus der Normreihe statt einer Länge.' },
    ],
  },
  'geom-annulus': {
    longDescription: 'Ermittelt die Fläche eines Kreisrings — der Figur zwischen zwei Kreisen mit gemeinsamem Mittelpunkt. Die Fläche ist die Differenz zweier Kreisscheiben: π(R² − r²). Sie als π(R − r)² zu schreiben ist falsch, auch wenn der Fehler leicht passiert: dieser Ausdruck ergibt die Fläche einer Scheibe mit dem Radius R − r, eine völlig andere Figur, und bei einem schmalen Ring sind beide Zahlen klein genug, dass die Verwechslung plausibel aussieht. Ein innerer Radius gleich dem äußeren wird abgewiesen, denn einen Ring der Breite null gibt es nicht. Ein innerer Radius von null ist dagegen völlig zulässig — das ist eine volle Kreisscheibe.',
    howToUse: [
      'Wähle die Längeneinheit.',
      'Trage den äußeren Radius ein.',
      'Trage den inneren Radius ein — er muss kleiner als der äußere sein.',
      'Lass den inneren Radius auf null für eine volle Kreisscheibe.',
    ],
    howItWorks: 'Fläche S = π(R² − r²), die Differenz zweier Kreisscheiben. Die Breite des Rings ist R − r, die Umfänge sind 2πR und 2πr, und der mittlere Radius ist (R + r)/2.',
    example: 'Ein Ring mit den Radien 10 und 6 cm hat eine Fläche von 201,06 cm² und eine Breite von 4 cm.',
    faq: [
      { q: 'Warum ist die Fläche nicht π(R − r)²?', a: 'Weil das die Fläche einer Scheibe mit dem Radius R − r ist und nicht die des Rings. Für die Radien 10 und 6 lautet die richtige Antwort 201,06 cm², die falsche 50,27 cm² — ein Faktor vier auseinander, und beide sehen plausibel aus.' },
      { q: 'Was gilt bei einem inneren Radius von null?', a: 'Du bekommst eine volle Kreisscheibe, und die Rechnung lässt das zu: die Fläche wird πR², und der innere Umfang ist null.' },
      { q: 'Warum darf der innere Radius nicht dem äußeren gleichen?', a: 'Der Ring hätte dann die Breite null, es gibt also keine Figur. Eine Fläche von null auszugeben beantwortete eine Frage, die niemand gestellt hat.' },
      { q: 'Wozu der mittlere Radius?', a: 'Er lässt einen schmalen Ring wie einen Streifen behandeln: aufgerollt hat er die Länge 2π·R_mittel und die Breite R − r. Bei schmalen Ringen ergibt das die Fläche mit guter Genauigkeit.' },
      { q: 'Wie finde ich den Querschnitt eines Rohres?', a: 'Es ist genau diese Aufgabe: der äußere Radius des Rohres und der innere der Bohrung. Die Differenz ergibt die Metallfläche im Querschnitt.' },
    ],
  },
  'geom-circle': {
    longDescription: 'Löst einen Kreis aus dem, was du gerade weißt: Radius, Durchmesser, Umfang oder Fläche. Das zählt mehr, als es klingt — ein Rohr oder Fass wird meist über den Durchmesser angegeben, ein Beet über die Länge seiner Einfassung und ein Rohling über seine Fläche, und jeder Fall läuft von Hand anders. π wird in voller Genauigkeit genommen und nicht als 3,14, damit der Umfang nicht in der dritten Stelle davonläuft.',
    howToUse: [
      'Wähle die Längeneinheit.',
      'Gib an, welchen Wert du kennst.',
      'Trage ihn ein und lies die übrigen drei ab.',
    ],
    howItWorks: 'S = πr², C = 2πr und d = 2r; der Radius folgt aus dem Umfang als r = C ÷ 2π und aus der Fläche als r = √(S ÷ π).',
    example: 'Ein Kreis mit dem Radius 3 m hat eine Fläche von 28,274 m² und einen Umfang von 18,85 m.',
    faq: [
      { q: 'Welcher Wert von π wird verwendet?', a: 'Der volle Maschinenwert und nicht 3,14. Bei einem Radius von einigen Metern zeigt sich der Unterschied bereits in Zentimetern des Umfangs.' },
      { q: 'Wie unterscheiden sich Radius und Durchmesser bei der Eingabe?', a: 'Der Durchmesser ist der doppelte Radius, sie zu vertauschen ändert die Fläche also um das Vierfache. Genau deshalb wird der Eingabemodus ausdrücklich gewählt.' },
      { q: 'Bekomme ich den Radius aus der Fläche?', a: 'Ja — wähle den Modus für die Fläche; der Radius ist die Wurzel aus der Fläche geteilt durch π.' },
      { q: 'Was bedeutet Umfang hier?', a: 'Die Länge der geschlossenen Linie um den Rand des Kreises — das, was du mit einem Maßband um ein Rohr oder ein Fass messen würdest.' },
    ],
  },
  'geom-cone': {
    longDescription: 'Rechnet einen Kegel durch — die Form eines Sandhaufens, eines Trichters, eines Silotrichters oder eines Zeltdachs. Neben dem Volumen liefert er die Seitenhöhe: den Abstand entlang der Schräge von der Spitze zum Rand, den du zum Zuschneiden einer Verkleidung brauchst, während die Höhe die Senkrechte von der Spitze zur Mitte ist. Genau diese beiden werden verwechselt, und der Unterschied ist real: bei Radius 3 und Höhe 4 beträgt die Seitenhöhe 5.',
    howToUse: [
      'Wähle die Längeneinheit.',
      'Trage den Grundradius und die senkrechte Höhe ein.',
      'Lies Volumen, Seitenhöhe und die Flächen ab.',
    ],
    howItWorks: 'V = π · r² · h ÷ 3, die Seitenhöhe ist l = √(r² + h²), die Mantelfläche ist πrl und die Gesamtoberfläche πr(r + l).',
    example: 'Ein Kegel mit dem Radius 3 m und der Höhe 4 m hat eine Seitenhöhe von 5 m und ein Volumen von 37,699 m³.',
    faq: [
      { q: 'Wie unterscheidet sich die Seitenhöhe von der Höhe?', a: 'Die Höhe ist die Senkrechte von der Spitze zur Mitte der Grundfläche; die Seitenhöhe ist die schräge Linie von der Spitze zum Rand. Die Seitenhöhe ist immer länger, und sie ist es, die du zum Zuschneiden einer Verkleidung brauchst.' },
      { q: 'Warum ist ein Kegel ein Drittel eines Zylinders?', a: 'Weil ein Kegel mit gleicher Grundfläche und Höhe genau ein Drittel dieses Zylinders einnimmt — ein klassisches Ergebnis der Raumgeometrie.' },
      { q: 'Wie messe ich einen Sandhaufen?', a: 'Miss den Radius an der Grundfläche und die Höhe in der Mitte. Der Haufen gilt als idealer Kegel, das echte Volumen fällt deshalb etwas kleiner aus.' },
      { q: 'Was gehört zur Gesamtoberfläche?', a: 'Die Mantelfläche plus die kreisförmige Grundfläche. Bei einem offenen Trichter zählt nur der Mantel.' },
    ],
  },
  'geom-cube': {
    longDescription: 'Rechnet einen Würfel aus derjenigen von drei Größen durch, die du kennst: Kante, Volumen oder Oberfläche. In den umgekehrten Modi wird zuerst die Kante zurückgewonnen — a = ∛V oder a = √(S/6) —, und alles Weitere folgt wie gewohnt. In diesen Modi ist die Kante zugleich das Hauptergebnis: die Größe, die du gerade eingetippt hast, ist nicht die Antwort. Ein Würfel hat zwei verschiedene Diagonalen, und sie auseinanderzuhalten lohnt sich: die Flächendiagonale a√2 liegt flach in einer Seite, während die Raumdiagonale a√3 durch den Körper von Ecke zu gegenüberliegender Ecke läuft — sie ist die längere und entscheidet, ob ein langer Gegenstand hineinpasst.',
    howToUse: [
      'Wähle die Längeneinheit.',
      'Wähle, welche Größe du kennst.',
      'Trage ihren Wert ein.',
      'Die übrigen Eigenschaften werden sofort berechnet.',
    ],
    howItWorks: 'Volumen V = a³, Oberfläche S = 6a², Flächendiagonale a√2, Raumdiagonale a√3, Kantensumme 12a. In den umgekehrten Modi folgt die Kante aus a = ∛V oder a = √(S/6).',
    example: 'Ein Würfel mit 3 cm Kante hat ein Volumen von 27 cm³, eine Oberfläche von 54 cm² und eine Raumdiagonale von 5,196 cm.',
    faq: [
      { q: 'Wie unterscheidet sich die Raumdiagonale von der Flächendiagonale?', a: 'Die Flächendiagonale a√2 liegt flach innerhalb einer Seite, während die Raumdiagonale a√3 durch den Körper von Ecke zu gegenüberliegender Ecke läuft. Die zweite ist länger, und sie beantwortet, ob ein langer Gegenstand in eine Kiste passt.' },
      { q: 'Wie finde ich die Kante aus dem Volumen?', a: 'Zieh die dritte Wurzel: a = ∛V. Bei einem Volumen von 64 cm³ beträgt die Kante 4 cm. Wähle den Modus „das Volumen“, und der Rechner erledigt es für dich.' },
      { q: 'Wozu ein Würfelrechner, wenn es einen für den Quader gibt?', a: 'Ein Würfel ist dessen Sonderfall, aber er wird durch eine Größe statt durch drei beschrieben, und das macht die umgekehrten Aufgaben lösbar: die Kante folgt unmittelbar aus dem Volumen oder der Oberfläche. Der allgemeine Fall hat keine solche eindeutige Umkehrung.' },
      { q: 'Wie stark wächst das Volumen, wenn sich die Kante verdoppelt?', a: 'Um das Achtfache, während die Oberfläche um das Vierfache wächst. Das Volumen geht mit der dritten Potenz der Länge und die Fläche mit der zweiten — auch deshalb kühlen große Körper langsamer ab als kleine.' },
      { q: 'Wie rechne ich das Ergebnis in andere Einheiten um?', a: 'Wechsle die Längeneinheit vor der Rechnung. Ein fertiges Volumen von Hand umzurechnen ist heikel: ein Kubikzentimeter fasst tausend Kubikmillimeter und nicht zehn.' },
    ],
  },
  'geom-cuboid': {
    longDescription: 'Löst einen Quader aus seinen drei Kanten: Volumen, Oberfläche, Raumdiagonale und Kantensumme. Die Diagonale ist die Zahl, die beantwortet, ob ein Gegenstand über Eck in eine Kiste passt. Ein Würfel gilt nicht als eigene Form — er ist der Sonderfall dreier gleicher Kanten und läuft durch dieselbe Rechnung. Die Längeneinheit wird einmal gewählt: das Volumen kommt in ihrer dritten Potenz zurück und die Fläche in ihrer zweiten.',
    howToUse: [
      'Wähle die Längeneinheit.',
      'Trage die drei Kanten ein.',
      'Lies Volumen, Oberfläche und Diagonale ab.',
    ],
    howItWorks: 'V = abc; S = 2(ab + bc + ca); die Raumdiagonale d = √(a² + b² + c²) folgt aus zweimaliger Anwendung des Satzes von Pythagoras. Die Kantensumme ist 4(a + b + c), denn es gibt vier Kanten in jeder Richtung.',
    example: 'Eine Kiste mit 3 × 4 × 5 cm hat ein Volumen von 60 cm³, eine Oberfläche von 94 cm² und eine Diagonale von 7,071 cm.',
    faq: [
      { q: 'Was sagt mir die Raumdiagonale?', a: 'Den Abstand zwischen gegenüberliegenden Ecken — die längste Strecke, die hineinpasst. Sie prüfst du, um zu sehen, ob etwas über Eck in eine Kiste geht.' },
      { q: 'Deckt das auch einen Würfel ab?', a: 'Ja. Ein Würfel ist ein Quader mit drei gleichen Kanten: trage denselben Wert dreimal ein, und jede Formel gilt weiter.' },
      { q: 'Warum steht das Volumen in Kubikeinheiten und die Oberfläche in Quadrateinheiten?', a: 'Weil das Volumen in der dritten Potenz der gewählten Einheit gemessen wird und die Fläche in der zweiten. Beides mit einem linearen Faktor umzurechnen wäre falsch.' },
      { q: 'Wie komme ich vom Volumen zum Gewicht?', a: 'Multipliziere das Volumen mit der Dichte des Werkstoffs — genau das tut der Dichte-Rechner, und das Volumen lässt sich unmittelbar übernehmen.' },
    ],
  },
  'geom-cylinder': {
    longDescription: 'Rechnet einen Zylinder durch — die Form eines Fasses, eines Rohres, eines Tanks oder eines Brunnenrings. Neben dem Volumen nennt er zwei Flächen, und der Unterschied zählt: die Mantelfläche brauchst du zum Umwickeln oder Dämmen eines Rohres, die Gesamtoberfläche zum Streichen eines Behälters samt Boden und Deckel. Das Volumen kommt in der dritten Potenz der gewählten Einheit, die Flächen in ihrer zweiten.',
    howToUse: [
      'Wähle die Längeneinheit.',
      'Trage den Grundradius und die Höhe ein.',
      'Lies das Volumen und beide Flächen ab.',
    ],
    howItWorks: 'V = π · r² · h, die Mantelfläche ist 2πrh und die Gesamtoberfläche 2πr(r + h) — die Mantelfläche plus zwei Grundflächen.',
    example: 'Ein Zylinder mit dem Radius 3 m und der Höhe 10 m hat ein Volumen von 282,743 m³ und eine Mantelfläche von 188,496 m².',
    faq: [
      { q: 'Wie unterscheidet sich die Mantelfläche von der Gesamtoberfläche?', a: 'Die Mantelfläche ist allein die Wand, die sich zu einem Rechteck von 2πr mal h abrollen lässt. Die Gesamtoberfläche zählt die beiden kreisförmigen Grundflächen dazu.' },
      { q: 'Wie rechne ich das Volumen in Liter um?', a: 'Ein Kubikdezimeter ist ein Liter und ein Kubikmeter tausend Liter, rechne also in Metern und multipliziere mit 1000.' },
      { q: 'Gilt das auch für ein Rohr?', a: 'Für das äußere Volumen und die äußere Fläche ja. Die Bohrung ist eine eigene Rechnung aus dem inneren Radius; die Wandstärke steckt hier nicht im Modell.' },
      { q: 'Was, wenn ich den Durchmesser kenne?', a: 'Trage seine Hälfte ein. Der Radius ist der halbe Durchmesser, und den Durchmesser einzusetzen setzte das Volumen um das Vierfache zu hoch an.' },
    ],
  },
  'geom-ellipse': {
    longDescription: 'Ermittelt eine Ellipse aus ihren beiden Halbachsen. Die Fläche ist genau und einfach: S = πab. Der Umfang lässt sich dagegen überhaupt nicht in elementaren Funktionen schreiben — er braucht ein elliptisches Integral —, deshalb wird hier die Näherung von Ramanujan verwendet, deren Fehler bei mäßiger Abplattung unter einem Hunderttausendstel Prozent liegt, kleiner als der Unterschied zwischen den angezeigten Stellen. Die Zeile ist mit ihrer Quelle beschriftet, statt eine Näherung als genaue Formel auszugeben. Die Exzentrizität wird von der größeren Halbachse aus gemessen: sie sagt, wie gestreckt die Ellipse ist, und fällt genau dann auf null, wenn die Figur ein Kreis wird.',
    howToUse: [
      'Wähle die Längeneinheit.',
      'Trage beide Halbachsen ein — Hälften der Achsen, nicht die Achsen selbst.',
      'Die Reihenfolge spielt keine Rolle: die größere wird erkannt.',
      'Gleiche Halbachsen ergeben einen Kreis.',
    ],
    howItWorks: 'Fläche S = πab. Der Umfang nutzt die Näherung von Ramanujan π[3(a+b) − √((3a+b)(a+3b))]. Die Exzentrizität e = √(1 − b²/a²) wird von der größeren Halbachse genommen, und der Abstand der Brennpunkte ist 2√(a² − b²).',
    example: 'Eine Ellipse mit den Halbachsen 5 und 3 cm hat eine Fläche von 47,124 cm², einen Umfang von 25,527 cm und eine Exzentrizität von 0,8.',
    faq: [
      { q: 'Warum ist der Umfang genähert?', a: 'Der genaue Umfang einer Ellipse ist ein elliptisches Integral und keine elementare Formel. Die Näherung von Ramanujan irrt bei mäßiger Abplattung um weniger als 10⁻⁵ % — weniger als der Unterschied zwischen den angezeigten Stellen.' },
      { q: 'Was sagt mir die Exzentrizität?', a: 'Wie gestreckt die Ellipse ist. Null ist ein Kreis, Werte um 0,8 sind sichtbar länglich, und nahe eins ist die Form beinahe eine flache Strecke.' },
      { q: 'Ist eine Halbachse dasselbe wie eine Achse?', a: 'Nein, eine Halbachse ist die halbe Achse: der Abstand von der Mitte zum Rand und nicht von Rand zu Rand. Achsen statt Halbachsen einzutragen setzt die Fläche um das Vierfache zu hoch an.' },
      { q: 'Was sind die Brennpunkte einer Ellipse?', a: 'Zwei Punkte auf der großen Achse, für die die Summe der Abstände zu jedem Punkt der Kurve gleich bleibt. Genau diese Eigenschaft lässt eine Ellipse mit einer Schnur um zwei Nadeln zeichnen.' },
      { q: 'Was passiert bei gleichen Halbachsen?', a: 'Du bekommst einen Kreis: die Fläche wird πa², die Exzentrizität ist null, und die Brennpunkte treffen sich in der Mitte. Die Näherung von Ramanujan liefert dort genau 2πa.' },
    ],
  },
};
