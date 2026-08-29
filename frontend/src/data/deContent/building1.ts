import type { DeDetailedContent } from './types';

export const deBuilding1Content: Partial<Record<string, DeDetailedContent>> = {
  'air-exchange': {
    longDescription: 'Die Luftwechselrate sagt, wie oft in einer Stunde das ganze Volumen eines Raumes ausgetauscht wird. Die Auslegung eines Ventilators oder eines Lüftungsgeräts beginnt dort: Volumen mal Rate ergibt den Volumenstrom in Kubikmetern je Stunde, und danach wird das Gerät gewählt. Die Rate ist mit Absicht ein Feld — Wohnzimmer, Küche, Bad, Werkstatt und Labor unterscheiden sich um ein Mehrfaches, und den Wert eines anderen zu übernehmen ist schlechter, als danach zu fragen.',
    howToUse: [
      'Nimm die Rate aus deiner Planung oder aus den Anforderungen für genau diesen Raum — sie ist hier ein Feld und keine eingebaute Tabelle.',
      'Miss die Höhe bis zur Rohdecke und nicht bis zur abgehängten: das ganze Volumen nimmt teil.',
      'Liter je Sekunde stehen da, weil Rohrventilatoren oft in ihnen angegeben werden.',
      'Der Volumenstrom folgt dem Volumen. Bei dicht belegten Räumen prüfe zusätzlich den Bedarf je Person.',
    ],
    howItWorks: 'Volumenstrom = Fläche × Höhe × Luftwechselrate.',
    example: 'Ein Raum von 20 m² mit 2,7 m Höhe braucht bei 3 Luftwechseln 162 m³/h.',
    faq: [
      { q: 'Welche Rate soll ich nehmen?', a: 'Sie folgt dem Zweck des Raumes und kommt aus deiner Planung oder aus branchenüblichen Anforderungen. Die Rechnung trägt sie bewusst nicht ein: die Spanne zwischen Wohnzimmer und Fertigungsbereich erreicht das Zigfache, und ein übernommener Wert ist hier schlechter als ein leeres Feld.' },
      { q: 'Warum hängt der Volumenstrom nicht an den Personen?', a: 'Die Rate arbeitet mit dem Volumen und nicht mit der Belegung. Bei dichter Belegung — Besprechungsräume, Klassenzimmer, Säle — prüfe zusätzlich den Bedarf je Person und nimm den größeren der beiden Werte.' },
      { q: 'Reicht ein Ventilator mit dieser Angabe?', a: 'Die Nennleistung wird ohne Widerstand der Leitung gemessen. In einem Kanal mit Gittern und Bögen fällt sie, bisweilen um die Hälfte, ein Ventilator wird deshalb mit Reserve beim Druck gewählt und nicht nur beim Volumenstrom.' },
      { q: 'Was zeigt „Luftwechsel je Tag“?', a: 'Dieselbe Rate auf den Tag bezogen: wie oft die Luft bei durchgehendem Betrieb an einem Tag ausgetauscht würde. Es macht die Sache anschaulich, wenn jemand eine halbe Stunde Lüften am Tag vorschlägt.' },
    ],
  },
  'baluster-spacing': {
    longDescription: 'Rechnet die Geländerstäbe aus der LÜCKE und nicht aus dem Abstand: ein Kind darf nicht zwischen zwei benachbarte Stäbe passen, die Höchstlücke ist also eine Sicherheitsvorgabe und keine Vorliebe. Der Rechner findet die kleinste Zahl von Stäben, bei der die gleichmäßige Lücke die Grenze nicht mehr übersteigt, und zeigt die tatsächliche Lücke sofort an — sie liegt stets unter der Grenze, weil Stäbe in ganzen Zahlen kommen. Es gibt eine Lücke mehr als Stäbe: die Enden zählen mit, gegen beide Pfosten.',
    howToUse: [
      'Miss die lichte Weite zwischen den Pfosten und nicht das ganze Geländer.',
      'Trage die Stabbreite quer zum Geländer ein.',
      'Setze die Höchstlücke, die deine Anforderungen zulassen.',
      'Rechne jedes Feld einzeln: Reste lassen sich nicht über einen Pfosten hinweg mitnehmen.',
    ],
    howItWorks: 'Lücke = (Feld − Anzahl × Breite) ÷ (Anzahl + 1). Die Anzahl wird erhöht, bis die Lücke nicht größer als die Grenze ist.',
    example: 'Ein Feld von 3000 mm mit 40 mm breiten Stäben und einer Grenze von 100 mm braucht 21 Stäbe — eine tatsächliche Lücke von 98,18 mm.',
    faq: [
      { q: 'Wie unterscheidet sich das von einem Zaunrechner?', a: 'Jener geht von einem gewünschten Pfostenabstand aus und liefert die Zahl der Pfosten. Dieser geht von einer Höchstlücke aus; der Abstand fällt daraus heraus, und die Breite des Stabes treibt alles.' },
      { q: 'Warum gibt es eine Lücke mehr als Stäbe?', a: 'Weil die Enden mitzählen — zwischen dem äußersten Stab und dem Pfosten auf jeder Seite.' },
      { q: 'Warum ist die tatsächliche Lücke kleiner als die Grenze?', a: 'Weil Stäbe in ganzen Zahlen kommen. Einen weiteren hinzuzufügen verringert die Lücke sofort, sie landet also unter der Grenze und nicht genau darauf.' },
      { q: 'Wie gehe ich mit mehreren Feldern um?', a: 'Jedes einzeln. Felder zwischen verschiedenen Pfostenpaaren sind voneinander unabhängig, und ein Rest lässt sich nicht hinübertragen.' },
    ],
  },
  'beam-deflection': {
    longDescription: 'Ein Träger enttäuscht gewöhnlich dadurch, dass er durchhängt, und nicht dadurch, dass er bricht: die Decke trägt die Last, federt aber unter den Füßen und reißt den Putz auf. Unter Gleichlast wächst die Durchbiegung mit der vierten Potenz der Stützweite, ein zusätzlicher halber Meter kostet also mehr als jede vernünftige Vergrößerung des Querschnitts. Achte auf die Einheit der Last: Gleichlast steht in Kilonewton JE METER, eine Einzellast ist eine einzelne Kraft in Kilonewton.',
    howToUse: [
      'Die Einheit der Last folgt dem Lastfall: Gleichlast in Kilonewton je Meter, Einzellast in Kilonewton.',
      'Elastizitätsmodul: Nadelholz rund 10 GPa, Stahl 210, Aluminium 70.',
      'Nimm das Flächenträgheitsmoment aus einer Profiltabelle oder rechne b·h³/12 für ein Rechteck in Zentimetern.',
      'Die Zeile „Grenze 1/250“ zeigt einen verbreiteten Richtwert bezogen auf die Stützweite — vergleiche die Durchbiegung damit.',
    ],
    howItWorks: 'Gleichlast 5wL⁴/(384EI), Einzellast FL³/(48EI); EI wird aus GPa und cm⁴ gebildet.',
    example: 'Ein Holzträger mit 1000 cm⁴ über 3 m Stützweite biegt sich unter 2 kN/m um 21,09 mm durch.',
    faq: [
      { q: 'Warum wächst die Durchbiegung so stark mit der Stützweite?', a: 'Unter Gleichlast ist sie der vierten Potenz der Stützweite proportional. Von drei auf vier Meter zu gehen verdreifacht die Durchbiegung, und keine vernünftige Vergrößerung der Bauhöhe holt das wieder herein.' },
      { q: 'Was bringt ein höherer Querschnitt?', a: 'Das Flächenträgheitsmoment wächst mit der dritten Potenz der Höhe: ein Balken 50×200 ist 2,37-mal steifer als einer mit 50×150. Deshalb werden Träger hochkant gestellt und nicht flach gelegt — derselbe Querschnitt arbeitet weit stärker.' },
      { q: 'Was bedeutet 1/250?', a: 'Es ist die bezogene Durchbiegung: Stützweite geteilt durch Durchbiegung. Je größer der Nenner, desto steifer das Bauteil. 1/250 ist ein verbreiteter Richtwert für Decken; verputzte Untersichten verlangen gewöhnlich mehr Steifigkeit.' },
      { q: 'Ist das Eigengewicht des Trägers enthalten?', a: 'Nein — rechne es selbst zur Gleichlast hinzu. Bei einem Holzträger sind es meist Bruchteile eines Kilonewtons je Meter und neben der Nutzlast oft klein.' },
    ],
  },
  'beam-stress': {
    longDescription: 'Das Widerstandsmoment entscheidet über alles. Bei einem Rechteck ist es b·h²/6, mit der Höhe im Quadrat: ein hochkant gestelltes Brett trägt das Dreifache dessen, was dasselbe Brett flach liegend trägt. Der Unterschied zum Zug zählt — dort ist die Spannung über den Querschnitt gleichmäßig und gleich Kraft durch Fläche, während sie beim Biegen von der neutralen Faser aus linear zunimmt und an der Außenfaser ihr Höchstmaß erreicht, die Fläche allein reicht also nicht, und die Form ist es, worauf es ankommt.',
    howToUse: [
      'Trage das Biegemoment in Newtonmetern ein: bei einem Einfeldträger mit Einzellast in der Mitte ist es Kraft mal Stützweite durch vier.',
      'Die Querschnittsmaße stehen in Millimetern.',
      'Beim Rechteck ist die Höhe das Maß in Richtung der Last, also senkrecht.',
      'Vergleiche das Ergebnis mit der zulässigen Spannung deines Werkstoffs — sie hängt von der Güte ab und wird hier nicht angenommen.',
    ],
    howItWorks: 'Widerstandsmoment: Rechteck b·h²/6, Kreis π·d³/32. Spannung = Moment ÷ Widerstandsmoment.',
    example: 'Ein rechteckiger Querschnitt von 100×200 mm trägt bei 4,5 kN·m eine Biegespannung von 6,75 MPa.',
    faq: [
      { q: 'Warum trägt ein hochkant gestelltes Brett so viel mehr?', a: 'Weil die Querschnittshöhe im Quadrat in das Widerstandsmoment eingeht. Ein Brett 50×150 von flach auf hochkant zu drehen verdreifacht seinen Biegewiderstand.' },
      { q: 'Wie unterscheidet sich das von einer Zugrechnung?', a: 'Beim Zug ist die Spannung über den Querschnitt gleichmäßig und gleich Kraft durch Fläche. Beim Biegen nimmt sie von der neutralen Faser aus linear zu und erreicht am Rand ihr Höchstmaß, die Form des Querschnitts zählt also mehr als seine Fläche.' },
      { q: 'Warum gibt es keine zulässige Spannung?', a: 'Sie hängt von der Stahlgüte, der Holzart und den Sicherheitsbeiwerten der geltenden Norm ab. Eine Zahl einzubauen gäbe einen Sonderfall als allgemeine Regel aus.' },
      { q: 'Ist das ein vollständiger Nachweis?', a: 'Nein. Hier geht es um die Biegespannung im elastischen Bereich und in einer Ebene. Durchbiegung, Knicken, Schub und Torsion sind eigene Nachweise.' },
    ],
  },
  'board-volume': {
    longDescription: 'Rechnet Länge und Querschnitt eines Brettes in Kubikmeter um — die Einheit, in der Schnittholz verkauft wird. Die Länge wird in Metern gemessen und der Querschnitt in Millimetern, und genau bei dieser Umrechnung geht das Kopfrechnen schief: Millimeter zu multiplizieren, als wären es Meter, liegt um den Faktor einer Million daneben und sieht dabei nach einer plausiblen Zahl aus. Hier geschieht sie ausdrücklich. Eine eigene Zeile nennt, wie viele solcher Bretter in einen Kubikmeter gehen — meist die Zahl, die auf dem Hof nachgeprüft wird.',
    howToUse: [
      'Trage die Brettlänge in Metern und Breite und Dicke in Millimetern ein.',
      'Gib die Zahl der Bretter an.',
      'Ergänze einen Preis je Kubikmeter, wenn du die Kosten brauchst.',
    ],
    howItWorks: 'Das Volumen eines Brettes ist seine Länge mal Breite und Dicke, die durch Teilen durch tausend aus Millimetern umgerechnet werden. Die Summe multipliziert das mit der Zahl, und die Bretter je Kubikmeter sind der Kehrwert des Volumens eines Brettes.',
    example: 'Ein Brett mit 6 m × 150 × 25 mm hat 0,0225 m³; fünfzig davon ergeben 1,125 m³, und ein Kubikmeter fasst 44,44 davon.',
    faq: [
      { q: 'Warum stehen Breite und Dicke in Millimetern?', a: 'Weil Holzquerschnitte so bezeichnet werden: 150 × 25. Die Umrechnung in Meter geschieht innerhalb der Rechnung, es ist also nicht nötig, 0,15 und 0,025 einzutippen, und es lässt sich kein Komma verrutschen.' },
      { q: 'Wie viele Bretter gehen auf einen Kubikmeter?', a: 'Es ist der Kehrwert des Volumens eines Brettes. Für 6 m × 150 × 25 mm sind das 44,44 — eine gebrochene Zahl ist hier normal und zeigt, dass ganze Bretter nie genau einen Kubikmeter ergeben.' },
      { q: 'Sind Baumkante oder Schwund enthalten?', a: 'Nein. Die Rechnung ist geometrisch und nutzt das Nennmaß. Getrocknetes gehobeltes Holz misst weniger als das Nennmaß, plane das also gesondert ein.' },
      { q: 'Funktioniert das auch für Balken?', a: 'Ja, für jeden rechteckigen Querschnitt: Länge, Breite und Dicke werden gleich eingetragen.' },
    ],
  },
};
