import type { DeDetailedContent } from './types';

export const deGeometry2Content: Partial<Record<string, DeDetailedContent>> = {
  'geom-frustum': {
    longDescription: 'Rechnet einen Kegelstumpf durch — die Form eines Eimers, eines Lampenschirms oder eines Trinkglases. Das Volumen ist V = πh(R² + Rr + r²)/3, und der mittlere Term Rr ist keine Verzierung: ohne ihn fiele die Formel auf den Mittelwert zweier Zylinder zusammen und setzte das Volumen zu niedrig an. Das lässt sich leicht prüfen — setze den oberen Radius auf null, und der Ausdruck geht in den gewöhnlichen Kegel πR²h/3 über. Die Seitenhöhe wird aus der Differenz der Radien gemessen: l = √(h² + (R − r)²). Die Höhe für die Seitenhöhe einzusetzen ist ein verbreiteter Fehler, der die Mantelfläche zu hoch ansetzt, und zwar umso stärker, je weiter die Radien auseinanderliegen.',
    howToUse: [
      'Wähle die Längeneinheit.',
      'Trage den Radius der unteren Grundfläche ein.',
      'Trage den oberen Radius ein — er muss kleiner als der untere sein.',
      'Trage die Höhe ein: den senkrechten Abstand der Grundflächen, nicht die Schräge.',
    ],
    howItWorks: 'Volumen V = πh(R² + Rr + r²)/3. Seitenhöhe l = √(h² + (R − r)²). Die Mantelfläche ist π(R + r)l, und die Gesamtoberfläche zählt beide Grundflächen dazu.',
    example: 'Ein Kegelstumpf mit den Radien 6 und 3 cm und der Höhe 8 cm hat ein Volumen von 527,79 cm³.',
    faq: [
      { q: 'Wie unterscheidet sich die Höhe von der Seitenhöhe?', a: 'Die Höhe ist der senkrechte Abstand der Grundflächen; die Seitenhöhe läuft entlang der Mantelfläche. Die Höhe statt der Seitenhöhe zu nehmen setzt die Mantelfläche zu hoch an, und zwar umso stärker, je stärker sich der Kegel verjüngt.' },
      { q: 'Woher kommt der Term Rr im Volumen?', a: 'Daher, dass sich der Querschnitt allmählich ändert und nicht sprunghaft. Ohne diesen Term bekämst du den Mittelwert zweier Zylinder, und das Volumen fiele zu klein aus.' },
      { q: 'Was passiert bei einem oberen Radius von null?', a: 'Du bekommst einen gewöhnlichen Kegel, und die Formel geht in πR²h/3 über. Das ist eine bequeme Probe für das Ergebnis.' },
      { q: 'Warum muss der obere Radius kleiner sein als der untere?', a: 'Sonst steht die Figur gegenüber der üblichen Übereinkunft auf dem Kopf. Tausche die Radien einfach — das Volumen ist in beiden Fällen dasselbe.' },
      { q: 'Wie ermittle ich, was ein Eimer fasst?', a: 'Trage die Radien von Boden und Rand und die Innenhöhe ein. Das Volumen in Kubikzentimetern geteilt durch 1000 ergibt Liter.' },
    ],
  },
  'geom-parallelogram': {
    longDescription: 'Löst ein Parallelogramm auf zwei Wegen: aus einer Grundseite mit ihrer Höhe und aus zwei Seiten mit dem eingeschlossenen Winkel. Der zweite Modus liefert zusätzlich Umfang, Höhe und beide Diagonalen; der erste nur die Fläche, denn die zweite Seite folgt nicht aus Grundseite und Höhe, und statt eines plausiblen Umfangs steht dort ein Strich. Bei 0 oder 180 Grad fällt die Figur zu einer Linie zusammen: diese Eingabe wird abgewiesen, statt eine Fläche von null zu liefern.',
    howToUse: [
      'Wähle die Längeneinheit.',
      'Wähle, was du kennst — eine Höhe oder eine zweite Seite mit dem Winkel.',
      'Trage die Maße ein und lies die Fläche ab.',
    ],
    howItWorks: 'S = a·h, wenn die Höhe zur Seite a bekannt ist. Aus zwei Seiten und dem eingeschlossenen Winkel S = a·b·sin θ, wobei der Winkel ausdrücklich ins Bogenmaß umgerechnet wird. Die Diagonalen folgen aus dem Kosinussatz.',
    example: 'Seiten von 10 und 8 cm bei einem Winkel von 30° ergeben eine Fläche von 40 cm² und einen Umfang von 36 cm.',
    faq: [
      { q: 'Warum wird im Höhenmodus kein Umfang angezeigt?', a: 'Weil die zweite Seite nicht aus Grundseite und Höhe folgt: unendlich viele Parallelogramme verschiedener Neigung teilen dieselbe Fläche. Einen Umfang auszugeben wäre erfunden.' },
      { q: 'Was passiert bei 90 Grad?', a: 'Der Sinus ist eins, und das Parallelogramm wird zum Rechteck: die Fläche ist das Produkt der Seiten.' },
      { q: 'Warum werden 180 Grad abgewiesen?', a: 'Bei diesem Winkel fällt die Figur zu einer Linie zusammen und ist kein Parallelogramm mehr. Eine Fläche von null wäre formal richtig, aber sinnlos, deshalb meldet der Rechner stattdessen das Problem.' },
      { q: 'Wie unterscheidet sich ein Parallelogramm von einer Raute?', a: 'Bei einer Raute sind alle Seiten gleich. Trage für a und b denselben Wert ein, und die Rechnung gilt auch für sie.' },
    ],
  },
  'geom-polygon-coords': {
    longDescription: 'Ermittelt die Fläche eines beliebigen Vielecks über die gaußsche Trapezformel, die nichts weiter braucht als die Koordinaten der Ecken in ihrer Reihenfolge. Das Vorzeichen der Summe sagt, in welche Richtung der Umriss läuft, deshalb steht der Umlaufsinn neben der Fläche: die Eckpunkte in falscher Reihenfolge einzutragen ist der häufigste Fehler, und „im Uhrzeigersinn“ weist darauf hin, bevor du in den Zahlen zu suchen beginnst. Drei Punkte auf einer Geraden werden abgewiesen und nicht als null gezeigt — eine Null sähe nach einer gültigen Antwort aus.',
    howToUse: [
      'Trage einen Eckpunkt je Zeile ein: x und y.',
      'Folge dem Umriss der Reihe nach — beide Richtungen gehen, aber springe nicht quer.',
      'Wiederhole den ersten Eckpunkt am Ende nicht; der Umriss schließt sich selbst.',
      'Prüfe den Umlaufsinn, wenn die Form nicht die erwartete ist.',
    ],
    howItWorks: 'Die doppelte Fläche ist die Summe der Produkte x·y benachbarter Eckpunkte minus derselben Produkte in umgekehrter Richtung. Ihr halbierter Betrag ist die Fläche, und ihr Vorzeichen gibt den Umlaufsinn.',
    example: 'Ein Rechteck 4 mal 3, als vier Ecken eingetragen, ergibt eine Fläche von 12 und einen Umfang von 14.',
    faq: [
      { q: 'Muss ich den ersten Punkt am Ende wiederholen?', a: 'Nein. Der letzte Eckpunkt wird selbsttätig mit dem ersten verbunden. Ihn zu wiederholen fügt eine Seite der Länge null hinzu, was nichts ändert, aber wie ein Fehler aussieht.' },
      { q: 'Spielt die Richtung des Umlaufs eine Rolle?', a: 'Für die Fläche nicht — es wird der Betrag genommen. Die Richtung steht gesondert da, weil eine falsche Reihenfolge meist eine falsche Form bedeutet.' },
      { q: 'Darf das Vieleck nicht konvex sein?', a: 'Doch. Die gaußsche Trapezformel kommt mit jedem einfachen Vieleck zurecht, konvex oder nicht. Mit sich selbst schneidenden Umrissen kommt sie nicht zurecht: die haben keine wohlbestimmte Fläche.' },
      { q: 'In welchen Einheiten steht das Ergebnis?', a: 'In denselben wie die Koordinaten, im Quadrat. Meter hinein, Quadratmeter heraus.' },
      { q: 'Warum wird eine Gerade abgewiesen?', a: 'Weil drei Punkte auf einer Geraden nichts einschließen. Null anzuzeigen sähe nach einer gültigen Antwort auf eine ungültige Figur aus.' },
    ],
  },
  'geom-prism': {
    longDescription: 'Ein gerades Prisma mit einem regelmäßigen Vieleck als Grundfläche ist durch drei Zahlen vollständig beschrieben: wie viele Seiten die Grundfläche hat, wie lang jede ist und wie hoch der Körper steht. Die Grundfläche folgt aus der Apothema — dem Abstand von der Mitte zur Mitte einer Seite —, weshalb der Tangens von π geteilt durch die Seitenzahl genommen wird, im Bogenmaß und nicht in Grad. Die Mantelfläche ist schlicht der Umfang mal der Höhe, denn die Seiten eines geraden Prismas ergeben abgerollt ein einfaches Rechteck. Ein Quader ist der Sonderfall mit vier Seiten und ein dreiseitiges Prisma der kleinstmögliche.',
    howToUse: [
      'Wähle die Längeneinheit für alle Eingaben.',
      'Trage ein, wie viele Seiten das Grundvieleck hat.',
      'Trage die Länge einer Grundseite ein.',
      'Trage die Höhe des Prismas ein.',
    ],
    howItWorks: 'Apothema = Seite ÷ (2 × tan(π ÷ n)). Grundfläche = Umfang × Apothema ÷ 2. Volumen = Grundfläche × Höhe, und die Mantelfläche ist Umfang × Höhe.',
    example: 'Ein sechsseitiges Prisma mit 4 cm Seite und 10 cm Höhe fasst 415,69 cm³.',
    faq: [
      { q: 'Was macht ein Prisma regelmäßig?', a: 'Ein regelmäßiges Vieleck als Grundfläche und Seitenflächen senkrecht dazu. Schiefe Prismen haben dasselbe Volumen, aber eine größere Mantelfläche, und die deckt diese Rechnung nicht ab.' },
      { q: 'Warum braucht die Grundfläche eine Apothema?', a: 'Weil ein regelmäßiges Vieleck von seiner Mitte aus in gleiche Dreiecke zerfällt, jedes mit der Seite als Grundlinie und der Apothema als Höhe. Ihre Summe ergibt Umfang × Apothema ÷ 2.' },
      { q: 'Ist ein Quader ein Prisma?', a: 'Ja, ein Prisma mit vierseitiger Grundfläche. Vier Seiten einzutragen ergibt genau den Fall mit quadratischer Grundfläche, und die Formeln gehen in die vertrauten über.' },
      { q: 'Was passiert, wenn die Seitenzahl wächst?', a: 'Die Grundfläche nähert sich einem Kreis und das Prisma einem Zylinder. Bei hundert Seiten liegt der Unterschied im Volumen schon unter einem Zehntelprozent.' },
    ],
  },
  'geom-pyramid': {
    longDescription: 'In einer Pyramide gibt es zwei Apothemen, und sie zu verwechseln ist der übliche Fehler. Die Apothema der Grundfläche liegt flach in ihr und läuft von der Mitte zur Mitte einer Seite. Die Seitenhöhe ist die Höhe einer dreieckigen Seitenfläche, entlang der Schräge gemessen, und sie geht in die Mantelfläche ein. Die zweite ist stets länger als die erste, weil sie mit der Höhe der Pyramide die Hypotenuse bildet. Das Drittel in der Volumenformel ist keine Näherung: jede Pyramide und jeder Kegel nimmt genau ein Drittel des Prismas beziehungsweise Zylinders ein, der auf derselben Grundfläche in derselben Höhe steht.',
    howToUse: [
      'Wähle die Längeneinheit für alle Eingaben.',
      'Trage ein, wie viele Seiten das Grundvieleck hat.',
      'Trage die Länge einer Grundseite ein.',
      'Trage die senkrechte Höhe von der Grundfläche zur Spitze ein.',
    ],
    howItWorks: 'Apothema der Grundfläche = Seite ÷ (2 × tan(π ÷ n)). Die Seitenhöhe ist die Hypotenuse aus Höhe und dieser Apothema. Volumen = Grundfläche × Höhe ÷ 3.',
    example: 'Eine Pyramide mit quadratischer Grundfläche, 6 cm Seite und 9 cm Höhe fasst 108 cm³ bei einer Seitenhöhe von 9,487 cm.',
    faq: [
      { q: 'Wird die Höhe senkrecht oder entlang einer Seitenfläche gemessen?', a: 'Senkrecht, von der Mitte der Grundfläche zur Spitze. Das Maß entlang einer Seitenfläche ist die Seitenhöhe, und die wird als Ergebnis geliefert und nicht als Eingabe genommen.' },
      { q: 'Warum ein Drittel und nicht die Hälfte?', a: 'Weil drei gleiche Pyramiden ein Prisma gleicher Grundfläche und Höhe genau ausfüllen. Das ist eine geometrische Tatsache und kein gerundeter Faktor.' },
      { q: 'Gilt das auch für die Cheops-Pyramide?', a: 'Ja, als Pyramide mit quadratischer Grundfläche: vier Grundseiten, eine Seite von rund 230 m und eine Höhe nahe 146 m. Das Ergebnis liegt bei etwa 2,6 Millionen Kubikmetern.' },
      { q: 'Und bei einer Pyramide mit außermittiger Spitze?', a: 'Die Volumenformel gilt weiter, aber die Seitenflächen sind nicht mehr gleich, und eine einzelne Seitenhöhe verliert ihren Sinn. Diese Rechnung geht von einer regelmäßigen Pyramide aus.' },
    ],
  },
  'geom-rectangle': {
    longDescription: 'Rechnet ein Rechteck in beide Richtungen: zwei Seiten ergeben Fläche, Umfang und Diagonale, während eine Fläche plus eine Seite die andere Seite ergibt. Der zweite Modus beantwortet die Frage, die beim Zuschneiden oder Planen eines Raumes tatsächlich aufkommt — „ich brauche 30 m², und die Breite ist 6 m, wie lang wird das Stück?“. Die Diagonale folgt aus dem Satz des Pythagoras und ist das, was du misst, um zu prüfen, ob die Ecken wirklich rechtwinklig sind.',
    howToUse: [
      'Wähle die Längeneinheit, in der du gemessen hast.',
      'Gib an, ob du beide Seiten kennst oder die Fläche und eine Seite.',
      'Trage die Werte ein und lies den Rest ab.',
    ],
    howItWorks: 'S = a · b, P = 2(a + b) und d = √(a² + b²); im zweiten Modus folgt die fehlende Seite als b = S ÷ a.',
    example: 'Ein Raum mit 8 × 3 m hat eine Fläche von 24 m², einen Umfang von 22 m und eine Diagonale von 8,544 m.',
    faq: [
      { q: 'Wozu die Diagonale?', a: 'Mit ihr prüfst du, ob die Ecken rechtwinklig sind: stimmt die gemessene Diagonale mit der berechneten überein, sind die Winkel tatsächlich rechte. Ein alter Kniff beim Abstecken, und er kommt ohne Winkel aus.' },
      { q: 'Wie finde ich die zweite Seite aus der Fläche?', a: 'Wähle den Modus „die Fläche und eine Seite“ — die andere Seite folgt durch Division, und Umfang und Diagonale werden danach aus beiden berechnet.' },
      { q: 'Was, wenn beide Seiten gleich sind?', a: 'Du bekommst ein Quadrat. Die Rechnung lässt das zu und liefert richtige Werte; die Figur ist schlicht ein Sonderfall.' },
      { q: 'Warum darf ich die Fläche nicht einfach mit 100 umrechnen?', a: 'Weil der Weg von Metern zu Zentimetern den linearen Faktor quadriert: ein Quadratmeter sind 10 000 Quadratzentimeter und nicht 100.' },
    ],
  },
  'geom-regular-polygon': {
    longDescription: 'Rechnet ein regelmäßiges Vieleck durch — gleiche Seiten und gleiche Winkel: eine sechseckige Fliese, ein achteckiger Pavillon, ein drei- oder fünfeckiges Grundstück. Die Seitenzahl muss eine ganze Zahl und mindestens drei sein: zwei Strecken können kein Vieleck einschließen, und eine gebrochene Seitenzahl hat keinen Sinn. Der Innenwinkel wird in Grad ausgewiesen, obwohl die Fläche einen Tangens im Bogenmaß nutzt — beide Maße dürfen nie vermengt werden.',
    howToUse: [
      'Wähle die Längeneinheit.',
      'Trage die Zahl der Seiten ein — eine ganze Zahl, mindestens drei.',
      'Trage die Seitenlänge ein und lies die Fläche ab.',
    ],
    howItWorks: 'S = n · a² ÷ (4 · tan(π ÷ n)), P = n · a, und die Apothema ist m = a ÷ (2 · tan(π ÷ n)); der Innenwinkel ist (n − 2) · 180° ÷ n.',
    example: 'Ein regelmäßiges Sechseck mit 2 cm Seite hat eine Fläche von 10,392 cm² und einen Innenwinkel von 120°.',
    faq: [
      { q: 'Warum kann ich nicht zwei Seiten eintragen?', a: 'Zwei Strecken können keine Figur einschließen: ein Vieleck beginnt bei drei Seiten, und das ist eine Festlegung und keine Grenze des Rechners.' },
      { q: 'Was ist die Apothema?', a: 'Der Abstand von der Mitte zur Mitte einer Seite — der Radius des einbeschriebenen Kreises. Sie ist die praktische Zahl, um zu prüfen, ob die Form in eine Öffnung passt.' },
      { q: 'Warum muss die Seitenzahl ganz sein?', a: 'Eine Seite gibt es oder gibt es nicht; eine halbe Seite ist bei einem Vieleck sinnlos, deshalb wird ein gebrochener Wert abgewiesen.' },
      { q: 'In welcher Einheit steht der Winkel?', a: 'In Grad. Innen nutzt die Fläche einen Tangens im Bogenmaß, aber der ausgewiesene Winkel wird in die vertrauten Grad umgerechnet.' },
    ],
  },
  'geom-rhombus': {
    longDescription: 'Rechnet eine Raute aus ihren beiden Diagonalen durch — der gebräuchlichsten Art, sie zu beschreiben, weil Diagonalen leicht zu messen sind und Winkel nicht. Die Diagonalen einer Raute schneiden sich rechtwinklig und halbieren einander, die Seite ist deshalb die Hypotenuse eines rechtwinkligen Dreiecks mit den Katheten d₁/2 und d₂/2, und die Fläche ist das halbe Produkt. Die Höhe folgt aus der Fläche als h = S/a, ganz ohne einen Winkel zu kennen. Eine Raute mit gleichen Diagonalen ist ein Quadrat, und der Rechner behandelt diesen Fall ohne Sonderweg.',
    howToUse: [
      'Wähle die Längeneinheit.',
      'Miss beide Diagonalen — sie treffen sich rechtwinklig.',
      'Trage ihre Werte ein.',
      'Seite, Umfang und Höhe folgen sofort.',
    ],
    howItWorks: 'Fläche S = d₁·d₂/2. Die Seite a = √((d₁/2)² + (d₂/2)²), weil sich die Diagonalen rechtwinklig halbieren. Umfang P = 4a und Höhe h = S/a.',
    example: 'Eine Raute mit den Diagonalen 6 und 8 cm hat eine Fläche von 24 cm², eine Seite von 5 cm und eine Höhe von 4,8 cm.',
    faq: [
      { q: 'Warum ist die Fläche das halbe Produkt der Diagonalen?', a: 'Die Diagonalen zerschneiden die Raute in vier rechtwinklige Dreiecke mit den Katheten d₁/2 und d₂/2. Ihre Flächen ergeben zusammen d₁·d₂/2.' },
      { q: 'Wie unterscheidet sich eine Raute von einem Parallelogramm?', a: 'Bei einer Raute sind alle vier Seiten gleich, bei einem Parallelogramm nur die gegenüberliegenden. Deshalb legen zwei Diagonalen eine Raute eindeutig fest und ein Parallelogramm gar nicht.' },
      { q: 'Was, wenn die Diagonalen gleich sind?', a: 'Du bekommst ein Quadrat — eine Raute mit rechten Winkeln. Die Rechnung ändert sich nicht: die Seite ergibt sich zu d/√2, und die Höhe gleicht der Seite.' },
      { q: 'Kann ich stattdessen eine Seite und einen Winkel nehmen?', a: 'Rechnerisch ja, aber dieser Rechner will Diagonalen. In der Praxis sind sie leichter zu bekommen: ein Winkel braucht einen Winkelmesser, eine Diagonale nur ein Lineal.' },
      { q: 'Warum ist die Höhe kleiner als die Seite?', a: 'Die Höhe ist der Abstand zweier paralleler Seiten, während die Seite selbst schräg verläuft. Beide fielen nur bei einem auf der Seite stehenden Quadrat zusammen, also im rechten Winkel.' },
    ],
  },
};
