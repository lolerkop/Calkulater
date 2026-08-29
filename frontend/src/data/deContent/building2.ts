import type { DeDetailedContent } from './types';

export const deBuilding2Content: Partial<Record<string, DeDetailedContent>> = {
  'bulk-material-volume': {
    longDescription: 'Ermittelt, wie viel Schüttgut eine Tragschicht braucht: das Volumen, die Masse in Tonnen und die Zahl der 25-kg-Säcke. Die Dichte ist hier die Schüttdichte und nicht die Dichte des Gesteins selbst: loser Schotter wiegt rund 1,4–1,6 t/m³, während massiver Granit bei 2,7 liegt, und den Gesteinswert zu nehmen verdoppelte die Masse beinahe. Es unterscheidet sich von einem Betonrechner — jener bestimmt eine Mischung nach Zusammensetzung und Güte, während hier ein einzelner Werkstoff behandelt wird und die Antwort lautet, wie viel davon zu bestellen ist.',
    howToUse: [
      'Trage Länge und Breite der zu füllenden Fläche ein.',
      'Setze die Schichtdicke in Zentimetern.',
      'Gib die Schüttdichte an: Schotter 1,4–1,6, Sand 1,5–1,7, Splitt 1,4 t/m³.',
      'Ergänze einen Zuschlag für die Verdichtung — unter der Walze meist 5–15 %.',
    ],
    howItWorks: 'Volumen = Länge × Breite × Schichtdicke, wobei Zentimeter durch Teilen durch 100 in Meter gebracht werden. Masse = Volumen mit Zuschlag × Schüttdichte.',
    example: 'Eine Fläche von 5 × 4 m mit 10 cm Schicht und 5 % Zuschlag braucht 2,1 m³ Schotter — 3,36 Tonnen.',
    faq: [
      { q: 'Welche Dichte trage ich ein?', a: 'Die Schüttdichte und nicht die Gesteinsdichte. Loser Schotter liegt bei 1,4–1,6 t/m³ und Sand bei 1,5–1,7. Die 2,7 von Granit beschreiben den Stein und nicht einen Haufen mit Luft zwischen den Körnern.' },
      { q: 'Warum ein Zuschlag für die Verdichtung?', a: 'Unter der Walze setzt sich die Schicht, das Volumen auf dem Lastwagen übersteigt also das Volumen in der fertigen Tragschicht. Fünf bis fünfzehn Prozent decken den Unterschied ab.' },
      { q: 'Wie unterscheidet sich das von einem Betonrechner?', a: 'Beton wird nach Mischung und Güte bestimmt: Zement, Sand, Zuschlag und Wasser im Verhältnis. Hier wird ein einzelner Werkstoff gemessen, und die Antwort lautet, wie viele Kubikmeter und Tonnen zu bestellen sind.' },
      { q: 'Warum so viele Säcke?', a: 'Weil ein Sack zu 25 kg rund 0,016 m³ fasst. Ab einem Kubikmeter ist lose Lieferung weit billiger.' },
    ],
  },
  'cladding-boards': {
    longDescription: 'Ermittelt, wie viele Bretter eine Wand braucht, wenn sie mit Überlappung verlegt werden. Die Überlappung ist der ganze Sinn der Korrektur: ein Brett von 190 mm, um 20 mm überlappt, deckt nur 170 ab, die Wandfläche durch die Brettfläche zu teilen zählt also um rund ein Zehntel zu wenig. Das unterscheidet sich vom Bepreisen nach Kubikmetern — jenes beantwortet Volumen und Preis, dies beantwortet die Deckung, und das Ergebnis wird in Stück und Laufmetern gemessen.',
    howToUse: [
      'Trage die Wandfläche ein und lass Öffnungen darin, wenn du sie als zusätzlichen Zuschlag willst.',
      'Gib die Kataloglänge und die volle Breite des Brettes an.',
      'Setze die Überlappung — wie weit benachbarte Bretter einander decken.',
      'Ergänze einen Zuschnittzuschlag, meist zwischen 5 und 15 %.',
    ],
    howItWorks: 'Nutzbare Breite = Breite − Überlappung. Bretter = Wandfläche mit Zuschlag, geteilt durch das Produkt aus Brettlänge und nutzbarer Breite, aufgerundet.',
    example: 'Eine Wand von 30 m² mit Brettern zu 3 × 0,19 m, 0,02 m Überlappung und 10 % Zuschlag braucht 65 Bretter — 195 Laufmeter.',
    faq: [
      { q: 'Warum nicht einfach die Fläche durch die Brettfläche teilen?', a: 'Weil die Überlappung einen Teil jedes Brettes frisst. Bei 190 mm Breite und 20 mm Überlappung arbeiten nur 170 mm, und ohne diese Korrektur fehlt rund ein Zehntel.' },
      { q: 'Wie unterscheidet sich das vom Bepreisen nach Volumen?', a: 'Jenes beantwortet Kubikmeter und Preis. Dies beantwortet die Deckung samt Überlappung, und das Ergebnis sind Stück und Laufmeter.' },
      { q: 'Welche Überlappung soll ich nehmen?', a: 'Bei Stülpschalung und Nut-und-Feder-Profilen setzt sie die Verbindung, meist 10–20 mm. Bei einfach überlappten Brettern wählst du sie, am häufigsten 20–30 mm.' },
      { q: 'Soll ich Fenster und Türen abziehen?', a: 'Du kannst, aber erhöhe dann den Zuschlag: kurze Reststücke über und unter Öffnungen werden selten alle verbraucht.' },
    ],
  },
  'concrete': {
    longDescription: 'Ermittelt das Betonvolumen für die drei üblichen Formen — eine Platte, einen Streifen und Stützen — und rechnet einen Zuschlag für Verluste hinzu. Nettovolumen und Volumen mit Zuschlag stehen getrennt da: du bestellst das zweite und prüfst gegen das erste. Der Zuschlag wird vom ungerundeten Volumen genommen, sonst häufte sich die Rundung zweimal an und triebe die Bestellung nach oben. Die Formen werden getrennt gerechnet, weil sie nur eine einzige Multiplikation gemeinsam haben, während sich ihre Eingaben unterscheiden.',
    howToUse: [
      'Wähle die Form des Betonierens.',
      'Trage ihre Maße ein.',
      'Setze den Zuschlag für Verluste und lies das zu bestellende Volumen ab.',
    ],
    howItWorks: 'Eine Platte ist Länge mal Breite mal Dicke. Ein Streifen ist seine Länge mal Breite und Tiefe. Stützen sind Querschnittsfläche mal Höhe mal Anzahl. Das sich ergebende Volumen wird mit eins plus dem Zuschlag als Bruchteil multipliziert.',
    example: 'Eine Platte von 6 × 4 m mit 0,2 m Dicke sind 4,8 m³ netto; mit 5 % Zuschlag bestellst du 5,04 m³.',
    faq: [
      { q: 'Welchen Zuschlag soll ich nehmen?', a: 'Meist 5–10 % für Verluste bei der Anlieferung, für Verschütten und einen unebenen Untergrund. Der genaue Wert hängt davon ab, wie die Baustelle vorbereitet ist, deshalb wird er eingetragen und nicht angenommen.' },
      { q: 'Warum steht das Nettovolumen gesondert da?', a: 'Weil es verschiedene Zahlen sind: das Nettovolumen prüft die Geometrie, das andere ist das, was du bestellst. Beides zu verwechseln ist ein verlässlicher Weg, beim letzten Kubikmeter zu kurz zu kommen.' },
      { q: 'Wie unterscheidet sich das vom Rechner für das Streifenfundament?', a: 'Dieser deckt drei Formen und das allgemeine Volumen ab. Der Rechner für das Streifenfundament ermittelt denselben Streifen aus dem Gebäudeumriss, mit den dafür eigenen Prüfungen.' },
      { q: 'Ist die Bewehrung berücksichtigt?', a: 'Nein. Der Stahl in einer Betonage ist neben dem Beton gering, und in der Praxis wird er nicht abgezogen.' },
    ],
  },
  'drywall': {
    longDescription: 'Zählt, was eine Trockenbauarbeit braucht. Der Zuschlag gilt für die Fläche jeder Lage und nicht nur für eine: Verschnitt fällt in jeder Lage an, und ein Zuschlag für eine Lage geht bei einer doppelten Beplankung auf halbem Weg aus. Platten werden aufgerundet — ein Baumarkt verkauft keine halbe. Die Profile werden als Ständer im gewählten Achsabstand plus waagerechte Querstücke etwa je Meter gezählt, was gängige Praxis und keine Regel ist, nimm diese Zeile also als Näherung. Die Schrauben sind sechzig je Platte und Lage, die übliche Befestigungsdichte für eine Wand.',
    howToUse: [
      'Trage die zu beplankende Fläche ein.',
      'Trage das Plattenmaß ein, das du kaufst.',
      'Wähle die Zahl der Lagen: eine für die meisten Wände, zwei für besseren Schall- oder Brandschutz.',
      'Setze den Achsabstand der Profile und einen Zuschlag für Verschnitt.',
    ],
    howItWorks: 'Fläche mal Lagen plus Zuschlag ergibt die nötige Plattenfläche; geteilt durch die Fläche einer Platte und aufgerundet ist das die Zahl der Platten. Die Profile sind Fläche durch Achsabstand plus Fläche durch drei, und die Schrauben sind sechzig je Platte und Lage.',
    example: '40 m² in einer Lage mit Platten zu 2,5 mal 1,2 und 10 % Zuschlag ergeben 15 Platten.',
    faq: [
      { q: 'Warum gilt der Zuschlag je Lage?', a: 'Weil du jede Lage zuschneidest. Eine zweite Lage wird gegenüber der ersten bewusst versetzt, damit die Fugen nicht aufeinanderliegen, und das erzeugt eigenen Verschnitt.' },
      { q: 'Wie genau ist die Zahl für die Profile?', a: 'Sie ist eine Schätzung. Die Ständer im gewählten Achsabstand stehen fest; die waagerechten Querstücke werden mit rund einem je Meter Höhe gezählt, was üblich, aber keine Norm ist.' },
      { q: 'Warum sechzig Schrauben je Platte?', a: 'Das ist die übliche Dichte für eine Wand bei 250 mm an den Rändern und 300 mm in der Fläche. Decken brauchen mehr; kauf in beiden Fällen mit Reserve, sie sind billig und ein Ausgehen ist es nicht.' },
      { q: 'Ist ein Achsabstand von 600 mm immer richtig?', a: '600 mm passt zu einer Plattenbreite von 1200 mm, deshalb ist er verbreitet. 400 mm ergeben eine steifere Wand und brauchen die Hälfte mehr Profil.' },
      { q: 'Sind Spachtelmasse und Bewehrungsstreifen enthalten?', a: 'Nein. Sie hängen an der Fugenlänge und der Zahl der Arbeitsgänge und werden meist eimerweise gekauft statt berechnet.' },
    ],
  },
  'epoxy-volume': {
    longDescription: 'Der Verbrauch folgt aus dem Volumen der Schicht und der Dichte der Mischung und teilt sich danach über das Verhältnis des Sets in Harz und Härter. Das Verhältnis ist hier ein Feld und keine Konstante: Sets kommen mit 2:1, 3:1, 4:1 und sogar 100:47, und sie zu verwechseln kommt nicht infrage. Dieser Fehler verzeiht nichts — zu viel Härter beschleunigt das Aushärten nicht, er lässt das Harz dauerhaft klebrig, und der Guss ist nicht zu retten.',
    howToUse: [
      'Nimm das Verhältnis vom Etikett des Sets: Teile Harz auf EINEN Teil Härter.',
      'Die meisten Epoxidmischungen liegen bei rund 1,1 g/cm³ — prüfe das Datenblatt.',
      'Dicke Schichten werden in Lagen gegossen: meist nicht mehr als 5–10 mm auf einmal wegen der Reaktionswärme.',
      'Rechne einen Zuschlag für das, was im Becher und am Werkzeug bleibt: fünf Prozent decken das meist ab.',
    ],
    howItWorks: 'Volumen = Länge × Breite × Dicke; Masse = Volumen × Dichte; die Aufteilung folgt dem Verhältnis.',
    example: 'Eine Platte von 100×50 cm mit 5 mm braucht 2,75 kg Mischung: 1,833 kg Harz und 0,917 kg Härter.',
    faq: [
      { q: 'Was passiert bei falschem Verhältnis?', a: 'Das Harz härtet nicht richtig aus. Zu viel Härter beschleunigt die Reaktion nicht, er zerstört das Mengenverhältnis: ein Teil der Moleküle bleibt ungebunden, und die Oberfläche bleibt dauerhaft klebrig. Eine Abhilfe gibt es nicht — nur Abtragen und neu gießen.' },
      { q: 'Warum nicht eine dicke Schicht auf einmal gießen?', a: 'Beim Aushärten wird Wärme frei, und in einer dicken Schicht kann sie nicht entweichen. Das Harz überhitzt, vergilbt, kocht zu Blasen auf und kann reißen. Daher Schichten von 5–10 mm mit Wartezeit dazwischen.' },
      { q: 'Gilt das Verhältnis nach Masse oder nach Volumen?', a: 'Das hängt vom Set ab — das Etikett sagt es. Die Rechnung liefert die Masse, weil Wiegen genauer ist als Abmessen; gilt das Verhältnis nach Volumen, rechne es über die Dichten der Komponenten um.' },
      { q: 'Wie viel soll ich für Verluste einplanen?', a: 'Meist rund fünf Prozent: ein Teil der Mischung bleibt im Becher und auf dem Spachtel. Kleine Güsse verlieren anteilig mehr, große weniger.' },
    ],
  },
  'fence': {
    longDescription: 'Zählt das Gerüst eines Zauns. Es gibt einen Pfosten mehr als Felder — das Ende der Strecke braucht auf beiden Seiten einen — plus einen für jede Öffnung, denn ein Tor braucht eigene Pfosten zum Anschlagen. Lässt man sie weg, ist der Zaun auf dem Papier billiger als auf dem Grundstück. Die Felder werden aufgerundet, und der tatsächliche Pfostenabstand wird daraus zurückgerechnet: vierzig Meter in Feldern zu 2,5 m gehen glatt auf, hundert Meter in Feldern zu 3 m nicht, und das letzte Feld fällt kurz aus. Das zu zeigen ist ehrlicher, als darüber zu schweigen.',
    howToUse: [
      'Trage die Gesamtlänge des Zauns ein.',
      'Trage die geplante Feldbreite zwischen den Pfosten ein.',
      'Trage die Höhe ein und wie viele Riegel jedes Feld trägt.',
      'Ergänze die Tore und Öffnungen — jede braucht einen zusätzlichen Pfosten.',
    ],
    howItWorks: 'Die Felder sind die Länge geteilt durch die Feldbreite, aufgerundet. Die Pfosten sind Felder plus eins plus die Öffnungen. Die Riegellänge ist Felder mal Feldbreite mal Zahl der Riegel.',
    example: '40 m in Feldern zu 2,5 m mit zwei Riegeln und einem Tor brauchen 18 Pfosten und 80 m Riegel.',
    faq: [
      { q: 'Warum ein Pfosten mehr als Felder?', a: 'Weil Pfosten an den Enden der Felder stehen und nicht in der Mitte. Vier Felder haben fünf Pfosten, so wie vier Zaunelemente fünf Stützen brauchen.' },
      { q: 'Warum bringt ein Tor einen Pfosten hinzu?', a: 'Weil ein Tor an eigenen Pfosten hängt, die gewöhnlich schwerer sind als die der Strecke. Ein Tor mitten in einer Strecke teilt sie in zwei, und beide neuen Enden brauchen eine Stütze.' },
      { q: 'Welche Feldbreite soll ich nehmen?', a: '2 bis 3 m sind üblich. Breitere Felder brauchen weniger Pfosten, hängen aber stärker durch, und der Riegel muss zum Ausgleich steifer sein.' },
      { q: 'Warum weicht der tatsächliche Abstand von der eingetragenen Feldbreite ab?', a: 'Weil die Länge selten glatt aufgeht. Die Felder werden gleich gemacht, indem sie leicht schrumpfen — genau das zeigt die Zeile zum tatsächlichen Abstand.' },
      { q: 'Ist die Bekleidung enthalten?', a: 'Nur als Fläche. Was diese Fläche kostet, hängt davon ab, ob du Bretter, Gitter oder Profilblech anbringst.' },
    ],
  },
};
