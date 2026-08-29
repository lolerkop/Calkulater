import type { DeDetailedContent } from './types';

export const deBuilding3Content: Partial<Record<string, DeDetailedContent>> = {
  'insulation': {
    longDescription: 'Ermittelt, wie viel Dämmstoff eine Fläche bei gewählter Dicke braucht: das Volumen in Kubikmetern, die Zahl der Platten und die Zahl der Pakete. Plattenmaß und Stückzahl je Paket bleiben Felder — sie unterscheiden sich zwischen Herstellern, und einen Katalog fest einzubauen gäbe einen Einzelfall als Norm aus. Platten und Pakete werden aufgerundet, die Rundung ist aber gegen binäres Rauschen geschützt: eine Fläche, die genau aufgeht, verlangt keine weitere Platte.',
    howToUse: [
      'Trage die Fläche und die Dicke der Dämmung ein.',
      'Gib das Plattenmaß und die Platten je Paket vom Etikett an.',
      'Lies Volumen, Platten und Pakete ab.',
    ],
    howItWorks: 'Das Volumen ist die Fläche mal der Schichtdicke, die von Millimetern in Meter umgerechnet wird. Die Zahl der Platten ist die Fläche geteilt durch die Fläche einer Platte, aufgerundet; die Pakete folgen ebenso aus der Zahl der Platten.',
    example: '60 m² mit einer Schicht von 100 mm sind 6 m³ Dämmstoff: 84 Platten zu 0,72 m², das sind 14 Pakete zu sechs.',
    faq: [
      { q: 'Warum wird die Zahl der Platten aufgerundet?', a: 'Weil sich keine halbe Platte kaufen lässt und eine Teildeckung keine Deckung ist. Geht die Fläche genau auf, kommt keine weitere Platte hinzu — die Rundung ist gegen binäre Rundungsfehler geschützt.' },
      { q: 'Woher kommen Plattenfläche und Stückzahl je Paket?', a: 'Vom Etikett: sie unterscheiden sich zwischen Herstellern und Formaten. Die Vorgaben entsprechen einer verbreiteten Platte von 1200 × 600 mm, aber das ist eine Annahme und keine Norm.' },
      { q: 'Brauche ich einen Zuschlag für den Zuschnitt?', a: 'Bei verwinkelten Flächen ja. Erhöhe die Fläche vor der Rechnung um 5–10 % — es gibt bewusst kein eigenes Feld, damit Fläche und Zuschlag nicht vermengt werden.' },
      { q: 'Kommt das mit zwei Lagen zurecht?', a: 'Ja, trage einfach die Gesamtdicke ein. Das Volumen ist dasselbe; die Zahl der Platten hängt am Format, das du tatsächlich kaufst.' },
    ],
  },
  'linoleum': {
    longDescription: 'Bahnenbelag hat eine eigene Rechnung, anders als Laminat: du kaufst Laufmeter einer Rolle fester Breite und keine Fläche. Die Bahnen laufen entlang der Raumlänge, und ihre Zahl ist die Raumbreite geteilt durch die Bahnenbreite, aufgerundet — daher kommen auch die Nähte, eine weniger als Bahnen, ein Raum genau einer Bahnenbreite hat also keine. Der Verschnitt steht gesondert da: der Unterschied zwischen dem, was du kaufst, und dem, was du verlegst, ist das, was gerollt in der Ecke landet, und es ist besser, ihn vorher zu kennen, als ihn bei der Lieferung zu entdecken.',
    howToUse: [
      'Trage Raumlänge und Raumbreite ein.',
      'Trage die Breite der Bahn ein, die du kaufst — 2, 2,5, 3, 3,5 und 4 m sind üblich.',
      'Ergänze einen Zuschlag für das Beschneiden an den Wänden.',
      'Prüfe die Zahl der Nähte: eine breitere Bahn kann sie ganz vermeiden.',
    ],
    howItWorks: 'Die Bahnen sind die Raumbreite geteilt durch die Bahnenbreite, aufgerundet. Die Laufmeter sind Bahnen mal Raumlänge plus Zuschlag, und die gekaufte Fläche ist diese Länge mal der Bahnenbreite.',
    example: 'Ein Raum von 5 mal 3,5 m braucht auf einer Bahn von 3 m mit 5 % Zuschlag 10,5 Laufmeter in zwei Bahnen mit einer Naht.',
    faq: [
      { q: 'In welche Richtung sollen die Bahnen laufen?', a: 'Entlang der Länge und möglichst entlang des Lichteinfalls vom Fenster, damit die Naht am wenigsten auffällt. Dieser Rechner geht davon aus, dass die Bahnen entlang der Raumlänge laufen.' },
      { q: 'Wie vermeide ich eine Naht?', a: 'Kauf eine Bahn, die mindestens so breit ist wie der Raum. Dafür gibt es Bahnen mit 3,5 und 4 m — ein einzelnes Stück in einem gewöhnlichen Raum hat keine Fuge, die aufgehen könnte.' },
      { q: 'Warum bleibt so viel übrig?', a: 'Weil du die volle Bahnenbreite kaufst. Ein Raum von 3,5 m braucht auf einer Bahn von 3 m eine zweite Bahn, von der nur ein halber Meter gebraucht wird; der Rest ist der Preis dafür, wo die Naht liegt.' },
      { q: 'Ist der Zuschlag wirklich nötig?', a: 'Ja. Wände sind selten rechtwinklig, und die Bahn muss an ihnen ein Stück hochlaufen, bevor sie beschnitten wird. Fünf Prozent sind ein bescheidener, verbreiteter Wert.' },
      { q: 'Gilt das auch für Vinyl und Teppichboden?', a: 'Ja — jede Rollenware, die nach Laufmetern in fester Breite verkauft wird, folgt derselben Rechnung.' },
    ],
  },
  'metal-weight': {
    longDescription: 'Ermittelt die Masse eines Stabes aus seiner Querschnittsfläche, seiner Länge und der Dichte der Legierung. Die Dichte wird von Hand eingetragen und nicht aus einer Gütentabelle gewählt: zwischen Stählen unterscheidet sie sich in der dritten Stelle, während Aluminium, Messing und Kupfer sich in der ersten unterscheiden, und einen Buchwert einzusetzen hieße, für eine Legierung zu antworten, von der die Seite nichts weiß. Neben der Masse liefert sie das Metergewicht und wie viele Meter auf eine Tonne gehen — zwei Zeilen, mit denen sich die Rechnung eines Lieferanten ohne weiteres Nachrechnen prüfen lässt.',
    howToUse: [
      'Wähle den Querschnitt: rund, vierkant oder flach.',
      'Trage Durchmesser oder Seite in Millimetern ein; Flachstahl nimmt beide Seiten.',
      'Gib die Länge in Metern an.',
      'Setze die Dichte der Legierung: Stahl 7,85, Aluminium 2,7, Messing 8,5 g/cm³.',
    ],
    howItWorks: 'Masse = Querschnittsfläche × Länge × Dichte. Die Fläche ist π(d/2)² bei Rundstahl, a² bei Vierkant und a × b bei Flachstahl. Millimeter werden durch Teilen durch eine Million in Meter gebracht.',
    example: 'Ein Rundstahl aus Stahl mit 20 mm und 6 m Länge wiegt 14,797 kg — 2,466 kg je Meter.',
    faq: [
      { q: 'Warum die Dichte von Hand eintragen?', a: 'Weil sie von der Legierung abhängt. Stähle unterscheiden sich in der dritten Stelle, während Aluminium gegen Messing um das Dreifache abweicht, und eine Zahl für dich zu wählen hieße, für eine Güte zu antworten, die die Seite nicht kennt.' },
      { q: 'Welche Dichte soll ich für Stahl nehmen?', a: 'Für Bau- und niedriglegierte Stähle gewöhnlich 7,85 g/cm³. Austenitischer Edelstahl ist mit rund 7,9 etwas schwerer.' },
      { q: 'Funktioniert das für Rohr oder Winkel?', a: 'Nein. Die haben einen hohlen Querschnitt, und ihre Fläche ist eine Differenz zweier Formen. Diese Seite deckt Vollprofile ab: rund, vierkant und flach.' },
      { q: 'Warum weicht das tatsächliche Gewicht ab?', a: 'Walztoleranzen. Material wird mit Maßabweichung geliefert, und bei langen Profilen sind ein paar Prozent gewöhnlich.' },
    ],
  },
  'miter-angle': {
    longDescription: 'Jedes Stück wird im halben Eckwinkel geschnitten — aber das ist nicht die Zahl, die du an der Säge einstellst. Die Skala einer Kappsäge zählt vom Querschnitt aus, also von 90°, es kommt also der Ergänzungswinkel darauf. Beim rechten Winkel fallen die beiden Zahlen zufällig bei 45° zusammen, und genau das führt in die Irre: bei einer Ecke von 135° schneidest du 67,5° und stellst 22,5° an der Säge ein. Beide Zahlen bekommen eine eigene Zeile, damit sie nicht vertauscht werden.',
    howToUse: [
      'Miss den tatsächlichen Wandwinkel mit einem Winkelmesser: in echten Räumen ist ein rechter Winkel selten genau recht.',
      'Die Skala der Kappsäge nimmt die Zeile „Einstellung an der Säge ab 90°“ und nicht den Schnittwinkel selbst.',
      'Die beiden Stücke werden spiegelbildlich geschnitten: eines links, eines rechts derselben Einstellung.',
      'Eine geneigt sitzende Zierleiste braucht zusätzlich einen Neigungswinkel — ein flacher Schnitt nach dieser Formel lässt eine Fuge.',
    ],
    howItWorks: 'Schnittwinkel = Eckwinkel / 2; die Säge wird auf 90° − Schnittwinkel eingestellt.',
    example: 'Eine Ecke von 90° ergibt die klassische Gehrung: ein Schnitt von 45°, und an der Säge ebenfalls 45°.',
    faq: [
      { q: 'Warum ist die Zahl an der Säge eine andere?', a: 'Die Skala einer Kappsäge misst die Abweichung vom Querschnitt, also von 90°. Ein Schnitt von 67,5° heißt, die Säge um 22,5° aus der Rechtwinkligkeit zu drehen. Bei einer Ecke von 90° sind beide Zahlen 45°, und dieser Zufall wird falsch eingeprägt.' },
      { q: 'Warum trifft der Schnitt in einer echten Ecke nicht?', a: 'Weil Wände selten genau 90° haben. Schon zwei Grad Abweichung lassen bei breiten Sockelleisten eine sichtbare Fuge — deshalb wird der Winkel vor Ort gemessen und nicht aus einer Zeichnung genommen.' },
      { q: 'Deckt das Zierleisten an der Decke ab?', a: 'Nur für einen flachen Schnitt. Eine Deckenleiste sitzt zu beiden Flächen geneigt und braucht einen Doppelschnitt — den Gehrungswinkel zusammen mit einem Neigungswinkel an der Säge.' },
      { q: 'Und bei einer sehr spitzen Ecke?', a: 'Der Schnitt wird lang und dünn, und die Kante bröckelt. Unter rund 30° wird die Gehrung meist durch ein Deckstück ersetzt, oder das Material wird mit Übermaß geschnitten und von Hand eingepasst.' },
    ],
  },
  'pile-foundation': {
    longDescription: 'Bepreist beide Hälften eines Pfahlfundaments. Ein Pfahl gilt als Zylinder — Kreisfläche mal Tiefe —, und der Rost ist der Balken, der oben darauf verläuft und ihrer Summe hinzugerechnet und nicht an ihrer Stelle gezählt wird. Beide werden aus demselben Beton gegossen, aber das Verhältnis zwischen ihnen zeigt, wohin er tatsächlich geht: der Rost erweist sich meist als dreimal schwerer als die Pfähle selbst, und das lohnt es zu sehen, bevor der Mischer bestellt wird. Der Rost ist freiwillig — Nullen in seinen Maßen bedeuten „es gibt keinen“ und keinen Fehler.',
    howToUse: [
      'Trage ein, wie viele Pfähle der Plan vorsieht, und ihren Durchmesser und ihre Tiefe.',
      'Trage die Maße des Rosts ein oder Nullen, wenn es keinen gibt.',
      'Ergänze einen Zuschlag für das, was bei Anlieferung und Einbau verloren geht.',
      'Vergleiche die beiden Volumen: der Rost ist gewöhnlich das größere.',
    ],
    howItWorks: 'Ein Pfahl ist die Kreisfläche mal der Tiefe. Mit der Anzahl multipliziert ergibt das die Pfähle; der Rost ist Länge mal Breite mal Höhe, und beides zusammen plus Zuschlag ergibt die Summe.',
    example: 'Zwölf Pfähle mit 300 mm und 1,8 m Tiefe brauchen mit einem Rost von 32 m 6,979 m³ Beton.',
    faq: [
      { q: 'Warum ist der Rost größer als die Pfähle?', a: 'Weil er den ganzen Umriss entlangläuft. Zwölf Pfähle mit 300 mm fassen zusammen rund 1,5 m³, während 32 m Balken mit 400 mal 400 für sich über 5 m³ ausmachen.' },
      { q: 'Was, wenn ich keinen Rost habe?', a: 'Lass seine Maße auf null. Die Pfähle sind dann die ganze Arbeit, so wird gewöhnlich ein Zaun oder eine leichte Terrasse gebaut.' },
      { q: 'Meint die Tiefe den ganzen Pfahl oder den Teil im Boden?', a: 'Das, was du vergießen wirst. Steht der Pfahl über den Boden hinaus, rechne diesen Teil mit — er braucht ebenfalls Beton.' },
      { q: 'Ist die Bewehrung enthalten?', a: 'Nein. Bewehrungskörbe und Roststäbe hängen an der Planung und sind eine eigene Zählung.' },
      { q: 'Warum nicht einfach den Rechner für das Streifenfundament nehmen?', a: 'Weil ein Streifen ein durchgehender Graben aus Beton ist, während dies einzelne Säulen plus einen Balken darüber sind. Die beiden Teile werden hier getrennt gezählt, und ihr Verhältnis ist der nützliche Teil.' },
    ],
  },
  'pipe-weight': {
    longDescription: 'Ein Rohr wird über den Kreisring zwischen Außen- und Innendurchmesser gerechnet und nicht über einen Kreis mit Korrektur. Deshalb verdoppelt eine doppelte Wandstärke die Masse nicht: der Zuwachs hängt auch am Durchmesser. Der Innendurchmesser steht in einer eigenen Zeile — nach ihm werden Fittings gewählt, und von ihm hängt der Durchfluss ab, und genau er wird beim Bestellen mit dem Außendurchmesser verwechselt.',
    howToUse: [
      'Trage den Außendurchmesser ein — damit ist das Rohr bezeichnet, während Fittings oft den Innendurchmesser nennen.',
      'Dichte: Stahl 7850, Edelstahl 7900, Kupfer 8960, Aluminium 2700, Polyethylen rund 950 kg/m³.',
      'Die Wand muss kleiner als der halbe Außendurchmesser sein, sonst bleibt keine Bohrung übrig.',
      'Das Innenvolumen sagt dir, wie viel Wasser oder Wärmeträger der Kreis fasst.',
    ],
    howItWorks: 'Kreisringfläche π/4·(D² − d²) in Metern mal Länge und Dichte; der Innendurchmesser ist D − 2·Wand.',
    example: 'Ein Stahlrohr 108×4 von sechs Metern wiegt 61,6 kg — rund 10,3 kg je Meter.',
    faq: [
      { q: 'Warum bedeutet die doppelte Wand nicht das doppelte Gewicht?', a: 'Der Kreisring trägt die Masse, und seine Fläche hängt am Durchmesser ebenso wie an der Wand. Bei einem Rohr 108×4 ist die Wand ein kleiner Anteil des Kreises, sie zu verdoppeln bringt also weniger als erwartet — während die Bohrung stark schrumpft.' },
      { q: 'Welche Dichte soll ich für Edelstahl nehmen?', a: 'Rund 7900 kg/m³ gegen 7850 bei gewöhnlichem Stahl — unter einem Prozent Unterschied, in der Masse kaum sichtbar. Kupfer, Aluminium und Kunststoff weichen weit stärker ab.' },
      { q: 'Stimmt das mit einem Werkszeugnis überein?', a: 'Beinahe: Zeugnisse berücksichtigen Wandtoleranzen und eine Schweißnaht, eine tatsächliche Lieferung kann also um ein paar Prozent abweichen. Für Last- und Lieferrechnungen reicht diese Genauigkeit.' },
      { q: 'Wie rechne ich ein Vierkantrohr?', a: 'Diese Rechnung gilt für Rundrohr. Bei einem rechteckigen Querschnitt nimm die Differenz zweier Rechtecke und berücksichtige die Eckradien.' },
    ],
  },
};
