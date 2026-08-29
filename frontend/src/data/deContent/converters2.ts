import type { DeDetailedContent } from './types';

export const deConverters2Content: Partial<Record<string, DeDetailedContent>> = {
  'convert-force': {
    longDescription: 'Rechnet Kraft zwischen Newton, Kilonewton, Millinewton, Kilopond, Tonnenkraft, Pound-force und Dyn um. Das Kilopond steht in technischen Datenblättern, das Pound-force in amerikanischen Unterlagen.',
    howToUse: [
      'Trage den Wert ein.',
      'Wähle die Ausgangseinheit.',
      'Wähle die Zieleinheit.',
    ],
    howItWorks: 'Jede Einheit läuft über das Newton mit genau festgelegten Faktoren.',
    example: 'Ein Kilopond sind 9,80665 Newton — das Gewicht eines Kilogramms bei Normfallbeschleunigung.',
    faq: [
      { q: 'Wie unterscheidet sich das Kilopond vom Kilogramm?', a: 'Ein Kilogramm misst Masse; ein Kilopond misst Kraft — das Gewicht eines Kilogramms bei der Normfallbeschleunigung von 9,80665 m/s².' },
      { q: 'Ist die Umrechnung des Pound-force genau?', a: 'Ja. Das Pfund ist als 0,45359237 kg festgelegt und die Normfallbeschleunigung als 9,80665 m/s², ein Pound-force sind also genau 4,4482216152605 N.' },
      { q: 'Wo wird das Dyn verwendet?', a: 'Im CGS-System und in älteren physikalischen Nachschlagewerken: ein Dyn ist ein Hunderttausendstel Newton.' },
      { q: 'Lässt sich Kraft in Masse umrechnen?', a: 'Nein — es sind verschiedene Größen. Das Kilopond ist lediglich nach der Masse benannt, die es bei Normfallbeschleunigung erzeugt.' },
    ],
  },
  'convert-frequency': {
    longDescription: 'Rechnet Frequenz zwischen Hertz, Kilohertz, Megahertz, Gigahertz, Millihertz und Umdrehungen je Minute um. Gigahertz stehen in den Angaben zu Prozessoren und WLAN, Umdrehungen je Minute in Motordatenblättern.',
    howToUse: [
      'Trage den Wert ein.',
      'Wähle die Ausgangseinheit.',
      'Wähle die Zieleinheit.',
    ],
    howItWorks: 'Jede Einheit läuft über das Hertz mit den genauen Faktoren der SI-Vorsätze.',
    example: 'WLAN bei 2,4 GHz sind 2400 MHz, und ein Motor mit 3000 U/min dreht mit 50 Hz.',
    faq: [
      { q: 'Wie hängen Hertz und Umdrehungen je Minute zusammen?', a: 'Ein Hertz ist eine Umdrehung je Sekunde, also sechzig Umdrehungen je Minute.' },
      { q: 'Warum werden Prozessoren in Gigahertz gemessen?', a: 'Ein Gigahertz ist eine Milliarde Takte je Sekunde — ein bequemer Maßstab für heutige Bausteine.' },
      { q: 'Wie unterscheidet sich mHz von MHz?', a: 'Kleines m steht für Milli, ein Tausendstel Hertz; großes M für Mega, eine Million Hertz. Eine Milliarde auseinander.' },
      { q: 'Lässt sich Frequenz in die Periodendauer umrechnen?', a: 'Die Periodendauer ist der Kehrwert der Frequenz. Dieser Umrechner führt keine Kehrwertumformung aus — teile selbst eins durch die Frequenz.' },
    ],
  },
  'convert-fuel-economy': {
    longDescription: 'Rechnet den Kraftstoffverbrauch zwischen vier Einheiten um. Das Besondere daran ist, dass der Zusammenhang UMGEKEHRT ist: je mehr Liter auf hundert Kilometer, desto weniger Meilen je Gallone — ein gewöhnlicher Faktor genügt also nicht, denn doppelt so viele Liter halbieren die Strecke je Gallone. Alles läuft über l/100 km statt über eine Tabelle von Paaren: bei vier Einheiten kostete eine solche Tabelle sechzehn Einträge, von denen jeder mit den übrigen aus dem Takt geraten könnte. Amerikanische und britische Gallone unterscheiden sich um fast ein Viertel, deshalb stehen amerikanische und britische mpg in eigenen Zeilen — sie zu verwechseln ist ein Fehler von 20 %.',
    howToUse: [
      'Trage den Verbrauchswert ein.',
      'Wähle die Einheit, in der er angegeben ist.',
      'Wähle die gewünschte Einheit.',
      'Die übrigen drei stehen zum Vergleich daneben.',
    ],
    howItWorks: 'Jede Einheit läuft über l/100 km. Kilometer je Liter hängen umgekehrt zusammen: 100 ÷ Wert. Meilen je Gallone rechnen sich als 100 × Gallonenvolumen ÷ (Wert × 1,609344). Eine US-Gallone sind 3,785411784 l und eine britische 4,54609 l.',
    example: 'Ein Verbrauch von 8 l/100 km sind 12,5 km/l, 29,402 mpg (US) und 35,31 mpg (UK).',
    faq: [
      { q: 'Warum kann ich nicht einfach mit einem Faktor multiplizieren?', a: 'Weil der Zusammenhang umgekehrt ist und nicht proportional. Liter je hundert Kilometer steigen, während Meilen je Gallone fallen, die Umrechnung läuft also über eine Division, und einen festen Faktor dazwischen gibt es nicht.' },
      { q: 'Wie unterscheiden sich amerikanische und britische mpg?', a: 'Durch die Größe der Gallone: die amerikanische fasst 3,785 l und die britische 4,546 l. Das ist fast ein Viertel, dasselbe Auto „schafft“ also 30 mpg in den USA und 36 mpg in Großbritannien.' },
      { q: 'Welche Einheit wird wo verwendet?', a: 'Liter je 100 km sind in Kontinentaleuropa üblich, Kilometer je Liter in Teilen Asiens und Lateinamerikas, und Meilen je Gallone in den USA und Großbritannien.' },
      { q: 'Ist eine kleinere Zahl besser oder schlechter?', a: 'Das hängt von der Einheit ab, und daher rührt die übliche Verwirrung. Bei Litern je 100 km ist weniger besser; bei Kilometern je Liter und Meilen je Gallone ist mehr besser.' },
      { q: 'Warum spart der Schritt von 10 auf 9 l/100 km mehr als der von 6 auf 5?', a: 'Wegen desselben umgekehrten Zusammenhangs: ein gleicher Schritt in Litern ergibt eine andere Ersparnis in mpg. Deshalb rechnet sich eine Verbesserung an einem durstigen Auto schneller als dieselbe an einem sparsamen.' },
    ],
  },
  'convert-illuminance': {
    longDescription: 'Rechnet die Beleuchtungsstärke zwischen Lux, Kilolux, Millilux, Footcandle, Phot und Nox um. Lux stehen in Vorschriften zur Arbeitsplatzbeleuchtung, Footcandle in amerikanischen Beleuchtungsunterlagen.',
    howToUse: [
      'Trage den Wert ein.',
      'Wähle die Ausgangseinheit.',
      'Wähle die Zieleinheit.',
    ],
    howItWorks: 'Jede Einheit läuft über das Lux mit genauen Flächenfaktoren.',
    example: 'Eine Arbeitsplatzbeleuchtung von 500 Lux sind rund 46,45 Footcandle.',
    faq: [
      { q: 'Wie unterscheidet sich Beleuchtungsstärke vom Lichtstrom?', a: 'Der Lichtstrom wird in Lumen gemessen und beschreibt die ganze Lampe; die Beleuchtungsstärke ist der Lichtstrom, der auf einen Quadratmeter Fläche fällt.' },
      { q: 'Was ist ein Footcandle?', a: 'Ein Lumen je Quadratfuß. Da der Fuß genau festgelegt ist, sind ein Footcandle 10,7639 Lux.' },
      { q: 'Wo wird das Phot verwendet?', a: 'Im CGS-System: ein Lumen je Quadratzentimeter, also zehntausend Lux.' },
      { q: 'Lässt sich Lux in Watt umrechnen?', a: 'Nein — es sind verschiedene Größen, und der Zusammenhang hängt vom Spektrum der Lichtquelle ab.' },
    ],
  },
  'convert-length': {
    longDescription: 'Rechnet Längen zwischen metrischen und angelsächsischen Einheiten um: Millimeter, Zentimeter, Meter, Kilometer, Zoll, Fuß, Yard, Meilen und Seemeilen. Die Richtung ergibt sich aus der Einheitenwahl, ein Umrechner deckt also jedes Paar ab.',
    howToUse: [
      'Trage den Wert ein.',
      'Wähle die Ausgangseinheit.',
      'Wähle die Zieleinheit.',
    ],
    howItWorks: 'Jede Einheit hat einen genauen Faktor zum Meter, und die Umrechnung läuft über diese Basis.',
    example: '1 Zoll sind genau 2,54 cm, und 1 Meile sind genau 1609,344 m.',
    faq: [
      { q: 'Sind die angelsächsischen Umrechnungen genau?', a: 'Ja. Der Zoll ist als genau 0,0254 m festgelegt, und Fuß, Yard und Meile sind ganze Vielfache davon, die Umrechnung ist also genau und nicht genähert.' },
      { q: 'Was ist eine Seemeile?', a: 'Genau 1852 Meter, verwendet in der See- und Luftfahrt. Sie ist länger als die Landmeile mit 1609,344 m.' },
      { q: 'Funktioniert der Umrechner in beide Richtungen?', a: 'Ja. Tausche Ausgangs- und Zieleinheit, und die Umrechnung läuft in die andere Richtung.' },
      { q: 'Warum liefert dieselbe Einheit den Wert unverändert zurück?', a: 'Eine Einheit in sich selbst umzurechnen überspringt die Basis ganz, es entsteht also keine Gleitkommaabweichung.' },
    ],
  },
  'convert-mass': {
    longDescription: 'Rechnet Masse zwischen Milligramm, Gramm, Kilogramm, Tonnen, Unzen, Pfund und Stone um. Die angelsächsischen Einheiten sind genau festgelegt, Pfund in Gramm umzurechnen ist also genau und nicht genähert.',
    howToUse: [
      'Trage den Wert ein.',
      'Wähle die Ausgangseinheit.',
      'Wähle die Zieleinheit.',
    ],
    howItWorks: 'Jede Einheit hat einen genauen Faktor zum Kilogramm, und die Umrechnung läuft über diese Basis.',
    example: 'Ein Pfund sind genau 453,59237 Gramm, und ein Stone sind vierzehn Pfund.',
    faq: [
      { q: 'Ist die Umrechnung des Pfunds genau?', a: 'Ja. Das Pfund ist als genau 0,45359237 kg festgelegt, das Ergebnis ist also nach Festlegung genau und nicht gerundet.' },
      { q: 'Wie unterscheidet sich eine Unze von einer Feinunze?', a: 'Dieser Umrechner nutzt die Handelsunze. Die Feinunze für Edelmetalle ist schwerer und ist hier nicht enthalten.' },
      { q: 'Was ist ein Stone?', a: 'Eine britische Einheit zu 14 Pfund, rund 6,35 kg. Sie wird in Großbritannien und Irland noch für das Körpergewicht verwendet.' },
      { q: 'Sind Masse und Gewicht dasselbe?', a: 'Im Alltag ja, streng genommen hängt das Gewicht aber von der Fallbeschleunigung ab. Dieser Umrechner arbeitet mit der Masse.' },
    ],
  },
  'convert-power': {
    longDescription: 'Rechnet Leistung zwischen Watt, Kilowatt, Megawatt, mechanischen Pferdestärken, metrischen Pferdestärken und BTU je Stunde um. Mechanische und metrische Pferdestärke sind verschiedene Einheiten — dieser Umrechner hält sie auseinander, statt sie zu mitteln.',
    howToUse: [
      'Trage den Wert ein.',
      'Wähle die Ausgangseinheit.',
      'Wähle die Zieleinheit.',
    ],
    howItWorks: 'Jede Einheit läuft über das Watt mit festgelegten Faktoren.',
    example: '100 kW sind rund 136 metrische Pferdestärken oder rund 134 mechanische.',
    faq: [
      { q: 'Warum gibt es zwei Arten von Pferdestärken?', a: 'Die mechanische Pferdestärke sind 550 ft·lbf/s = 745,6999 W; die metrische sind genau 75 kp·m/s = 735,49875 W. Sie unterscheiden sich um rund 1,4 %.' },
      { q: 'Welche steht in Fahrzeugangaben?', a: 'Europäische Angaben nutzen gewöhnlich die metrische Pferdestärke (PS); amerikanische und britische Zahlen meinen meist die mechanische.' },
      { q: 'Wofür werden BTU je Stunde verwendet?', a: 'Für die Leistung von Heiz- und Klimageräten. Ein Kilowatt sind rund 3412 BTU/h.' },
      { q: 'Ist eine Kilowattstunde eine Einheit der Leistung?', a: 'Nein, sie ist Energie — Leistung mal Zeit. Für Kilowattstunden nimm den Energieumrechner.' },
    ],
  },
  'convert-pressure': {
    longDescription: 'Rechnet Druck zwischen Pascal, Bar, Atmosphären, psi und Millimeter Quecksilbersäule um. Vier Systeme treffen in einer Liste zusammen: Manometer und Reifen nutzen Bar oder psi, Wetterberichte Hektopascal und die Medizin Millimeter Quecksilbersäule.',
    howToUse: [
      'Trage den Wert ein.',
      'Wähle die Ausgangseinheit.',
      'Wähle die Zieleinheit.',
    ],
    howItWorks: 'Jede Einheit läuft über das Pascal mit genauen Faktoren.',
    example: 'Ein Bar sind 100 000 Pa und rund 14,5 psi.',
    faq: [
      { q: 'Sind Bar und Atmosphäre dasselbe?', a: 'Beinahe: ein Bar sind 100 000 Pa und eine Atmosphäre 101 325 Pa, rund 1,3 % auseinander.' },
      { q: 'Welchen Druck sollen Reifen haben?', a: 'Meist 2–2,5 bar, also rund 29–36 psi. Der genaue Wert steht in der Türsäule oder im Handbuch.' },
      { q: 'Warum nutzt die Medizin Millimeter Quecksilbersäule?', a: 'Eine historische Einheit vom Quecksilbermanometer: 1 mmHg sind genau 133,322387415 Pa. Die Normatmosphäre sind 760 Torr, das ergibt 759,9999 übliche Millimeter — Torr und mmHg sind leicht verschieden festgelegt.' },
      { q: 'Was ist ein Hektopascal im Wetterbericht?', a: 'Es sind 100 Pa, genau ein Millibar. Beide Einheiten sind zahlenmäßig gleich.' },
    ],
  },
  'convert-radiation': {
    longDescription: 'Bewusst auf eine einzige physikalische Größe begrenzt: die Äquivalentdosis. Die Energiedosis in Gray und die Aktivität in Becquerel sind andere Größen, und sie in eine gemeinsame flache Einheitenliste zu stellen böte eine Umrechnung an, die es nicht gibt — Sievert und Gray fallen zahlenmäßig nur dann zusammen, wenn der Qualitätsfaktor eins ist, und das Becquerel lässt sich überhaupt nicht in eine Dosis umrechnen. Innerhalb der Äquivalentdosis ist die Rechnung nach Festlegung genau: ein Rem sind genau 0,01 Sv, hier ist also nichts genähert.',
    howToUse: [
      'Trage den Wert ein, den du hast.',
      'Wähle die Einheit, in der er steht.',
      'Wähle die gewünschte Einheit.',
      'Die Zeile mit dem Verhältnis zeigt den Faktor, falls du ihn weiterverwenden willst.',
    ],
    howItWorks: 'Jede Einheit hat einen genauen Faktor zum Sievert: Milli ist ein Tausendstel, Mikro ein Millionstel, Nano ein Milliardstel, und ein Rem sind 0,01 Sv. Das Ergebnis ist der Wert mal dem Ausgangsfaktor geteilt durch den Zielfaktor.',
    example: '1 mSv sind 1000 µSv, und 250 mrem sind 2,5 mSv: ein Rem ist genau ein Hundertstel Sievert.',
    faq: [
      { q: 'Warum steht das Gray nicht in der Liste?', a: 'Weil es etwas anderes misst — aufgenommene Energie und nicht biologische Wirkung. Beide fallen zahlenmäßig nur bei einem Qualitätsfaktor von eins zusammen, und etwas anderes zu behaupten verdeckte die Physik.' },
      { q: 'Und Becquerel?', a: 'Die Aktivität sagt, wie stark eine Quelle zerfällt, und nicht, welche Dosis du empfängst. Eine Umrechnung dazwischen bräuchte Abstand, Zeit, Abschirmung und das Nuklid — das ist keine Einheitenumrechnung.' },
      { q: 'Ist die Umrechnung des Rem genau?', a: 'Ja, nach Festlegung: 1 rem = 0,01 Sv. Hier wird nichts gerundet außer der Anzeige.' },
      { q: 'Welche Einheit begegnet mir in der Praxis?', a: 'Millisievert bei der Jahresbelastung und bei medizinischen Untersuchungen, Mikrosievert bei einzelnen Messungen und Flügen. Rem steht noch in älteren und amerikanischen Quellen.' },
      { q: 'Ist ein Sievert viel?', a: 'Ein Sievert ist eine sehr hohe Dosis. Alltagszahlen bewegen sich in Millisievert und Mikrosievert — die natürliche Hintergrundstrahlung liegt bei einigen Millisievert im Jahr.' },
    ],
  },
};
