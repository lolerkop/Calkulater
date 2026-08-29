import type { DeDetailedContent } from './types';

export const deGeometry3Content: Partial<Record<string, DeDetailedContent>> = {
  'geom-right-triangle': {
    longDescription: 'Ergänzt ein rechtwinkliges Dreieck in beide Richtungen: zwei Katheten ergeben die Hypotenuse, eine Kathete mit der Hypotenuse ergibt die andere Kathete. Der zweite Modus ist der strengere — die Hypotenuse muss länger sein als die Kathete, sonst wird der Ausdruck unter der Wurzel negativ und das Ergebnis hört auf zu bestehen. Das ist die Rechnung hinter dem 3-4-5-Kniff vom Bau, mit dem sich eine rechtwinklige Ecke prüfen lässt.',
    howToUse: [
      'Wähle die Längeneinheit.',
      'Gib an, ob du zwei Katheten oder eine Kathete und die Hypotenuse kennst.',
      'Trage die Werte ein und lies die fehlende Seite ab.',
    ],
    howItWorks: 'a² + b² = c², also c = √(a² + b²) und b = √(c² − a²). Die Fläche eines rechtwinkligen Dreiecks ist das halbe Produkt seiner Katheten.',
    example: 'Katheten von 3 und 4 m ergeben eine Hypotenuse von 5 m, eine Fläche von 6 m² und einen Umfang von 12 m.',
    faq: [
      { q: 'Warum darf die Hypotenuse nicht einer Kathete gleichen?', a: 'Die Hypotenuse ist die längste Seite eines rechtwinkligen Dreiecks. Wären sie gleich, wäre die andere Kathete null, und das Dreieck fiele zu einer Strecke zusammen.' },
      { q: 'Was ist die 3-4-5-Regel?', a: 'Ein Kniff beim Abstecken: trage an zwei Seiten 3 und 4 Einheiten ab, und misst die Diagonale genau 5, ist der Winkel dazwischen ein rechter. Es ist ein Sonderfall des Satzes von Pythagoras.' },
      { q: 'Wie wird die Fläche berechnet?', a: 'Als halbes Produkt der Katheten: sie stehen senkrecht aufeinander, die eine dient also als Grundseite und die andere als Höhe.' },
      { q: 'Kann die Hypotenuse kürzer sein als eine Kathete?', a: 'Nein. Ein solcher Satz beschreibt kein Dreieck, und der Rechner sagt das, statt die Wurzel einer negativen Zahl zu liefern.' },
    ],
  },
  'geom-sector': {
    longDescription: 'Löst einen Kreissektor aus Radius und Mittelpunktswinkel: Fläche, Bogenlänge, Sehne und Umfang des Sektors, dazu den Anteil am ganzen Kreis. Der Winkel wird in Grad eingetragen und innerhalb der Rechnung ins Bogenmaß umgerechnet — die Formeln für Fläche und Bogen gelten nur im Bogenmaß. Beim vollen Kreis geht die Sehne auf genau null: die binäre Arithmetik liefert hier 1,22×10⁻¹⁶, und dieses Rauschen als Länge anzuzeigen wäre falsch.',
    howToUse: [
      'Wähle die Längeneinheit.',
      'Trage den Radius ein.',
      'Gib den Mittelpunktswinkel in Grad an.',
    ],
    howItWorks: 'Der Winkel wird zu θ = α·π/180 im Bogenmaß. Die Fläche des Sektors ist S = ½r²θ, die Bogenlänge L = rθ und die Sehne c = 2r·sin(θ/2). Der Umfang des Sektors zählt zum Bogen zwei Radien hinzu.',
    example: 'Ein Sektor mit dem Radius 5 cm und 60° Winkel hat eine Fläche von 13,09 cm², einen Bogen von 5,236 cm und eine Sehne von genau 5 cm.',
    faq: [
      { q: 'Warum ist die Sehne bei 360 Grad null?', a: 'Weil die Enden des Bogens zusammenfallen: die Strecke zwischen ihnen schrumpft auf einen Punkt. Die binäre Arithmetik lässt dort einen winzigen Rest, und der wird bewusst auf genau null gesetzt.' },
      { q: 'Wie unterscheidet sich eine Sehne von der Bogenlänge?', a: 'Der Bogen folgt dem Kreis, die Sehne läuft gerade zwischen seinen Enden. Die Sehne ist immer kürzer, und der Abstand wächst mit dem Winkel.' },
      { q: 'Warum werden Grad ins Bogenmaß umgerechnet?', a: 'Weil S = ½r²θ und L = rθ nur im Bogenmaß gelten. Grad einzusetzen läge um rund den Faktor 57 daneben.' },
      { q: 'Wie bekomme ich die Fläche eines Kreisabschnitts?', a: 'Zieh die Fläche des Dreiecks mit der Spitze im Mittelpunkt ab: S_Abschnitt = ½r²(θ − sin θ).' },
    ],
  },
  'geom-sphere': {
    longDescription: 'Löst eine Kugel aus dem Wert, den du gerade hast: Radius, Durchmesser oder das Volumen selbst. Die umgekehrte Richtung kommt häufiger vor als gedacht — ein Tankvolumen nennt dir den Radius, und der sagt dir, ob er durch eine Luke passt. Das Volumen wird in der dritten Potenz der gewählten Einheit ausgewiesen und die Oberfläche in ihrer zweiten: verschiedene Potenzen derselben Länge, und sie können keinen gemeinsamen Umrechnungsfaktor haben.',
    howToUse: [
      'Wähle die Längeneinheit.',
      'Gib an, ob du den Radius, den Durchmesser oder das Volumen kennst.',
      'Trage ihn ein und lies den Rest ab.',
    ],
    howItWorks: 'V = (4 ÷ 3) · π · r³ und S = 4 · π · r²; der Radius aus einem Volumen ist die dritte Wurzel aus 3V ÷ (4π).',
    example: 'Eine Kugel mit dem Radius 3 m hat ein Volumen von 113,097 m³ und eine Oberfläche von 113,097 m².',
    faq: [
      { q: 'Warum stimmen Volumen und Oberfläche beim Radius 3 überein?', a: 'Es ist ein Zusammentreffen der Zahlen und nicht der Größen: 4πr² und (4/3)πr³ sind genau bei r = 3 gleich. Ihre Einheiten unterscheiden sich — ein Quadrat und eine dritte Potenz der Länge.' },
      { q: 'Wie finde ich den Radius aus einem Volumen?', a: 'Wähle den Modus für das Volumen: der Radius ist die dritte Wurzel aus 3V ÷ (4π), und die Oberfläche folgt daraus.' },
      { q: 'Was ist der Unterschied zwischen Kugelfläche und Kugelkörper?', a: 'Die Kugelfläche ist allein die Oberfläche; der Kugelkörper ist der Körper samt seinem Inneren. Das Volumen gehört zum Körper, die Oberfläche zu der Fläche, die ihn begrenzt.' },
      { q: 'Wird die Wandstärke eines Tanks berücksichtigt?', a: 'Nein. Die Rechnung ist ideal — ein geometrischer Körper und kein Behälter mit Wänden aus Werkstoff.' },
    ],
  },
  'geom-square': {
    longDescription: 'Löst ein Quadrat aus dem Wert, den du gerade hast: der Seite, der Fläche oder dem Umfang. Alle vier Größen kommen zusammen zurück, eine Bodenfläche von 49 m² nennt dir also sofort die 7 m lange Wand, an der sie entlangläuft, und die 9,9 m, die du quer darüber messen würdest. Die Längeneinheit wird einmal gewählt und nie umgerechnet — die Fläche wird schlicht in ihrem Quadrat ausgewiesen.',
    howToUse: [
      'Wähle die Längeneinheit, in der du gemessen hast.',
      'Wähle, welchen Wert du kennst.',
      'Trage ihn ein und lies die übrigen drei ab.',
    ],
    howItWorks: 'S = a², P = 4a und d = a√2, eine aus der Fläche als a = √S gefundene Seite speist also dieselben drei Ergebnisse.',
    example: 'Ein quadratischer Raum mit 5 m Seite hat eine Fläche von 25 m², einen Umfang von 20 m und eine Diagonale von 7,071 m.',
    faq: [
      { q: 'Kann ich statt der Seite die Fläche eintragen?', a: 'Ja. Wähle den Modus für die Fläche, und die Seite wird als ihre Quadratwurzel zurückgewonnen, danach folgen Umfang und Diagonale daraus.' },
      { q: 'Warum steht die Fläche in Quadrateinheiten?', a: 'Weil eine Fläche das ist. Hast du Zentimeter eingetragen, steht die Fläche in Quadratzentimetern — sie mit einem linearen Faktor umzurechnen wäre falsch.' },
      { q: 'Wird eine Seite von null angenommen?', a: 'Nein. Ein Quadrat ohne Seite ist keine Figur, deshalb meldet der Rechner das Problem, statt eine plausible Null zu liefern.' },
      { q: 'Wie wird die Diagonale gefunden?', a: 'Über den Satz des Pythagoras für zwei gleiche Seiten, was sich zu d = a√2 vereinfacht.' },
    ],
  },
  'geom-trapezoid': {
    longDescription: 'Berechnet die Fläche eines Trapezes als halbe Summe der beiden parallelen Seiten mal der Höhe — die Formel hinter einem abschüssigen Grundstück, einer Dachschräge oder einer Trichterwand. Die Schenkel sind freiwillig: ohne sie bekommst du die Fläche, mit ihnen zusätzlich den Umfang. Die Höhe ist hier der senkrechte Abstand zwischen den Grundseiten und nicht die Länge eines Schenkels, und genau das ist der Fehler, der beim Messen am häufigsten passiert.',
    howToUse: [
      'Wähle die Längeneinheit.',
      'Trage beide Grundseiten und die Höhe zwischen ihnen ein.',
      'Ergänze die Schenkel, wenn du auch den Umfang möchtest.',
    ],
    howItWorks: 'S = ((a + b) ÷ 2) · h — die Fläche ist die Mittellinie mal der Höhe; der Umfang ist die Summe aller vier Seiten.',
    example: 'Ein Trapez mit den Grundseiten 10 und 6 m und der Höhe 4 m hat eine Fläche von 32 m² und eine Mittellinie von 8 m.',
    faq: [
      { q: 'Welche Höhe braucht die Formel?', a: 'Den senkrechten Abstand zwischen den Grundseiten. Ein schräger Schenkel ist länger als die Höhe und darf nicht für sie eingesetzt werden.' },
      { q: 'Was ist die Mittellinie?', a: 'Die Strecke, die die Mitten der Schenkel verbindet. Sie ist die halbe Summe der Grundseiten, und die Fläche ist schlicht die Mittellinie mal der Höhe.' },
      { q: 'Muss ich die Schenkel eintragen?', a: 'Nein. Ohne sie bekommst du Fläche und Mittellinie; der Umfang erscheint erst, wenn beide Schenkel angegeben sind.' },
      { q: 'Gilt die Formel für jedes Trapez?', a: 'Ja — gleichschenklig, rechtwinklig oder unregelmäßig. Wichtig ist nur, dass die beiden eingetragenen Grundseiten das parallele Paar sind.' },
    ],
  },
  'geom-triangle': {
    longDescription: 'Rechnet ein Dreieck auf zwei Wegen: aus drei Seiten nach der Formel von Heron oder aus einer Grundseite und ihrer Höhe als halbes Produkt. Drei Seiten werden zuerst gegen die Dreiecksungleichung geprüft — übersteigen zwei von ihnen die dritte nicht, gibt es die Figur nicht, und der Rechner sagt das, statt eine Null zu liefern, die sich wie eine Antwort liest. Zusätzlich nennt er die Art des Dreiecks: rechtwinklig, spitzwinklig oder stumpfwinklig.',
    howToUse: [
      'Wähle die Längeneinheit.',
      'Gib an, ob du drei Seiten oder eine Grundseite und ihre Höhe kennst.',
      'Trage die Werte ein und lies die Fläche ab.',
    ],
    howItWorks: 'Aus drei Seiten ist die Fläche nach Heron S = √(p(p−a)(p−b)(p−c)) mit p als halbem Umfang; aus Grundseite und Höhe ist sie S = ½ · a · h.',
    example: 'Ein Dreieck mit den Seiten 3, 4 und 5 m ist rechtwinklig: seine Fläche beträgt 6 m² und sein Umfang 12 m.',
    faq: [
      { q: 'Warum werden manche Seitensätze abgewiesen?', a: 'Drei Strecken bilden nur dann ein Dreieck, wenn je zwei von ihnen länger sind als die dritte. Seiten von 1, 2 und 3 liegen auf einer Geraden — es gibt keine Figur, sie hat also gar keine Fläche und nicht die Fläche null.' },
      { q: 'Was ist die Formel von Heron?', a: 'Ein Weg, die Fläche aus drei Seiten ohne Winkel und Höhen zu finden: bilde den halben Umfang und zieh danach die Wurzel aus dem Produkt vierer Differenzen.' },
      { q: 'Wie wird die Art des Dreiecks bestimmt?', a: 'Durch Vergleich des Quadrats der längsten Seite mit der Summe der Quadrate der beiden anderen: gleich heißt rechtwinklig, kleiner spitzwinklig, größer stumpfwinklig.' },
      { q: 'Muss die Höhe zur eingetragenen Grundseite gehören?', a: 'Ja. Die Höhe muss auf die eingetragene Grundseite gefällt sein, sonst ist ihr halbes Produkt nicht die Fläche dieses Dreiecks.' },
    ],
  },
  'golden-ratio': {
    longDescription: 'Teilt eine Strecke im Goldenen Schnitt und findet den Partner zu einer Größe, die du schon hast. φ = (1 + √5)/2 wird aus der Quadratwurzel in voller Genauigkeit berechnet und erst bei der Ausgabe gerundet: 1,618 als Quelle der Wahrheit zu schreiben verlöre die Genauigkeit genau dort, wo sie gebraucht wird. Nützlich in Layout und Typografie, wo φ dazu dient, eine Spaltenbreite gegen eine Seite oder eine Überschriftgröße gegen den Fließtext zu wählen.',
    howToUse: [
      'Wähle, ob du eine Strecke teilen oder einen Partner finden willst.',
      'Trage die Länge ein, die du kennst.',
      'Lies beide Teile oder beide Größen ab.',
    ],
    howItWorks: 'φ = (1 + √5)/2 ≈ 1,618034. Eine Strecke wird so geteilt, dass sich das Ganze zum größeren Teil verhält wie der größere zum kleineren: der größere Teil ist die Länge geteilt durch φ. Im Partnermodus wird die bekannte Größe mit φ multipliziert und durch φ geteilt, das ergibt beide Nachbarn in der Reihe.',
    example: 'Eine Strecke von 100 teilt sich in 61,8034 und 38,1966 — ihr Verhältnis entspricht dem des Ganzen zum größeren Teil.',
    faq: [
      { q: 'Warum wird φ nicht einfach auf 1,618 gesetzt?', a: 'Weil φ irrational ist. Es wird aus der Quadratwurzel in voller Genauigkeit berechnet und erst bei der Ausgabe gerundet — sonst wäre das Verhältnis der Teile schon bei der zweiten Division nicht mehr genau.' },
      { q: 'Wie prüfe ich, ob die Teilung stimmt?', a: 'Teile das Ganze durch den größeren Teil und den größeren durch den kleineren: beides ergibt dieselbe Zahl φ. Das ist die Festlegung.' },
      { q: 'Wo wird der Goldene Schnitt tatsächlich genutzt?', a: 'In Layout und Typografie — eine Spaltenbreite gegen eine Seite, eine Überschriftgröße gegen den Fließtext, die Proportionen einer Karte. Es ist ein Gestaltungsmittel und kein Naturgesetz.' },
      { q: 'Hängt er mit den Fibonacci-Zahlen zusammen?', a: 'Ja: das Verhältnis aufeinanderfolgender Fibonacci-Zahlen strebt gegen φ. Deshalb sind 34 und 55 beinahe ein goldenes Paar, wie der Partnermodus zeigt.' },
    ],
  },
  'slope': {
    longDescription: 'Prozent und Grad sind nicht dasselbe, und beides zu verwechseln ist teuer. Hundert Prozent Steigung sind fünfundvierzig Grad und nicht die Grenze der Steilheit; fünfzehn Prozent sind nur achteinhalb Grad. Beide stehen nebeneinander, weil Vorschriften zur Barrierefreiheit von Rampen in Prozent geschrieben sind, während das Werkzeug auf der Baustelle meist Grad anzeigt. Die Länge der Neigung steht gesondert, weil sie nach Metern gekauft wird — ein Handlauf, eine Verkleidung oder ein Kabel entlang der Schräge —, und die waagerechte Strecke stattdessen zu nehmen lässt die Arbeit zu kurz kommen.',
    howToUse: [
      'Trage den Höhenunterschied ein — den senkrechten Unterschied in Metern.',
      'Trage die waagerechte Strecke in Metern ein.',
      'Lies Prozent für Vorschriften und Grad für Werkzeuge ab.',
      'Nutze die Länge der Neigung beim Bestellen von Material entlang der Schräge.',
    ],
    howItWorks: 'Steigung = Höhenunterschied ÷ waagerechte Strecke × 100 Prozent. Der Winkel ist der Arkustangens dieses Verhältnisses, und die Länge ist die Hypotenuse aus Höhenunterschied und waagerechter Strecke.',
    example: 'Ein Höhenunterschied von 1,2 m auf 8 m ergibt 15 % Steigung, 8,531 Grad und eine Neigungslänge von 8,089 m.',
    faq: [
      { q: 'Wie hängen Prozent und Grad zusammen?', a: 'Prozent ist der Tangens des Winkels mal hundert. Sie stimmen nur nahe null eng überein: 5 % sind 2,86° und 10 % sind 5,71°, aber 100 % sind 45°.' },
      { q: 'Welche Steigung ist für eine Rollstuhlrampe zulässig?', a: 'Verbreitete Vorschriften begrenzen sie bei öffentlichen Rampen auf rund 6 %, kurze Abschnitte dürfen etwas steiler sein. Prüfe die Regel, die an deinem Bauort gilt.' },
      { q: 'Wird die Strecke waagerecht oder am Gelände entlang gemessen?', a: 'Waagerecht. Entlang der Neigung gemessen ergibt sich stattdessen die Neigungslänge, und sie als waagerechte Strecke zu nehmen setzt die Steigung zu niedrig an.' },
      { q: 'Kann der Höhenunterschied negativ sein?', a: 'Ja, und dann bedeutet er ein Gefälle. Prozentwert und Winkel kommen beide negativ heraus, und das beschreibt das Abwärtsgehen ehrlich.' },
    ],
  },
};
