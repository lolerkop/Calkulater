import type { DeDetailedContent } from './types';

export const dePhysics6Content: Partial<Record<string, DeDetailedContent>> = {
  'pipe-flow': {
    longDescription: 'Die Strömungsgeschwindigkeit treibt Geräusch, Druckverlust und Verschleiß, sie wird deshalb geprüft, bevor eine Pumpe gewählt wird. Sie ist der Durchfluss geteilt durch den Querschnitt, und zwei Einzelheiten zählen: der Durchmesser muss der INNERE sein, und er geht im Quadrat ein. Bei Polypropylen unterscheiden sich Außen- und Innendurchmesser so stark, dass ein Fehler hier die Antwort verdoppelt.',
    howToUse: [
      'Nimm den INNEREN Durchmesser: bei Polypropylen und Mehrschichtverbundrohr ist er merklich kleiner als der äußere.',
      'Der Durchfluss steht in Kubikmetern je Stunde — der Einheit, in der Pumpen und Zähler angegeben werden.',
      'Heizung und Wasserleitung im Haus halten die Geschwindigkeit meist innerhalb von 1,5–2 m/s.',
      'Über zwei Metern je Sekunde beginnt das Rohr zu singen, und Bögen verschleißen schneller.',
    ],
    howItWorks: 'Geschwindigkeit = Durchfluss / Querschnittsfläche, Fläche = πd²/4.',
    example: '10 m³/h durch einen Innendurchmesser von 50 mm ergeben 1,415 m/s.',
    faq: [
      { q: 'Welche Geschwindigkeit ist üblich?', a: 'Anlagen im Haus zielen meist auf 1,5–2 m/s. Darunter wird die Rohrführung unnötig teuer; darüber wird die Anlage hörbar, der Druckverlust steigt, und Bögen und Formstücke verschleißen schneller.' },
      { q: 'Warum gerade der Innendurchmesser?', a: 'Weil dort das Wasser fließt. Ein Polypropylenrohr mit 32 mm Außendurchmesser kann eine Bohrung von 21 mm haben — 2,3-mal weniger Fläche und die 2,3-fache Geschwindigkeit gegenüber dem Außenmaß.' },
      { q: 'Wie senke ich die Geschwindigkeit?', a: 'Vergrößere den Durchmesser. Die Fläche wächst im Quadrat: von 50 auf 63 mm senkt die Geschwindigkeit um rund das 1,6-Fache. Den Durchfluss zu verringern kommt meist nicht infrage — ihn setzen die Verbraucher.' },
      { q: 'Ist der Druckverlust enthalten?', a: 'Nein, hier geht es allein um die Geschwindigkeit. Die Verluste hängen zusätzlich von Länge, Rauheit und Formstücken ab, aber die Geschwindigkeit ist die erste Probe: sie zeigt sofort, ob der Durchmesser zu klein ist.' },
    ],
  },
  'potential-energy': {
    longDescription: 'Berechnet die Energie einer angehobenen Last und löst die Formel auch rückwärts: Energie und Masse ergeben die Höhe, Energie und Höhe ergeben die Masse. Die Fallbeschleunigung ist der Normwert 9,80665 m/s² und keine gerundete 9,8 — bei einer Masse von mehreren Tonnen läuft der Unterschied schon in die Hunderte Joule. Die Höhe wird von der Ebene aus gemessen, die du als null nimmst; die potentielle Energie ist nur bis auf diese Wahl festgelegt.',
    howToUse: [
      'Wähle die gesuchte Größe.',
      'Trage die beiden anderen in SI-Einheiten ein.',
      'Lies das Ergebnis ab.',
    ],
    howItWorks: 'E = m · g · h mit g = 9,80665 m/s²; daraus h = E ÷ (m · g) und m = E ÷ (g · h).',
    example: 'Eine Last von 5 kg, um 10 m angehoben, speichert 490,333 J potentielle Energie.',
    faq: [
      { q: 'Von welcher Ebene wird die Höhe gemessen?', a: 'Von der, die du als null nimmst: dem Boden, dem Erdreich, dem Meeresspiegel. Die potentielle Energie ist nur bis auf diese Wahl festgelegt, es zählt also der Höhenunterschied.' },
      { q: 'Warum ist g 9,80665 und nicht 9,8?', a: 'Das ist der durch Festlegung gesetzte Normwert. Ein Runden verschiebt die dritte Stelle des Ergebnisses, und bei großer Masse läuft der Abstand in die Hunderte Joule.' },
      { q: 'Was passiert bei der Höhe null?', a: 'Die Energie ist null: eine Last auf der Bezugsebene speichert nichts. Das ist ein gültiges Ergebnis.' },
      { q: 'Gilt die Formel in großen Höhen?', a: 'Für Alltagsaufgaben ja. Hunderte Kilometer hoch fällt die Fallbeschleunigung merklich, und mgh ist nicht mehr genau.' },
    ],
  },
  'pressure': {
    longDescription: 'Berechnet den mechanischen Druck — eine Kraft, verteilt über eine Fläche — und löst die Beziehung in jede Richtung. Der umgekehrte Schritt beantwortet eine praktische Frage: wie viel Auflagefläche nötig ist, damit Boden oder Fundament eine gegebene Last tragen. Er erklärt auch, warum ein breiter Ski auf Schnee trägt, während ein dünner Absatz einen Boden eindrückt: dieselbe Kraft, eine andere Fläche.',
    howToUse: [
      'Wähle die gesuchte Größe.',
      'Trage die beiden anderen in SI-Einheiten ein.',
      'Lies das Ergebnis ab — der Druck erscheint auch in Atmosphären.',
    ],
    howItWorks: 'p = F ÷ A, daraus F = p · A und A = F ÷ p. Eine Normatmosphäre sind 101 325 Pa.',
    example: 'Eine Kraft von 1000 N, verteilt über 2 m², ergibt einen Druck von 500 Pa.',
    faq: [
      { q: 'Warum drückt eine breitere Auflage weniger?', a: 'Weil dieselbe Kraft über eine größere Fläche verteilt wird. Der Druck ist ein Verhältnis, die doppelte Fläche halbiert ihn also.' },
      { q: 'Ist das der Über- oder der absolute Druck?', a: 'Es ist schlicht Kraft geteilt durch Fläche. Der Luftdruck wird nicht hinzugerechnet: brauchst du den absoluten Wert, addiere 101 325 Pa selbst.' },
      { q: 'Wie lege ich ein Fundament für eine Last aus?', a: 'Wähle den Flächenmodus, trage die Kraft und den zulässigen Druck des Bodens oder Fundaments ein — du bekommst die mindestens nötige Auflagefläche.' },
      { q: 'Ist das derselbe Druck wie in einem Reifen oder einem Rohr?', a: 'Dieselbe Größe und Einheit. Ein Manometer zeigt aber den Druck über dem Luftdruck, was beim Vergleich von Zahlen zu bedenken ist.' },
    ],
  },
  'projectile-motion': {
    longDescription: 'Berechnet den Flug eines schräg und aus beliebiger Höhe geworfenen Körpers: Weite, Zeit bis zum Boden, Scheitelhöhe und beide Geschwindigkeitskomponenten. Die Abwurfhöhe geht ordentlich in die Rechnung ein und nicht als Korrektur — ein Wurf aus zwei Metern trägt bei gleicher Geschwindigkeit merklich weiter als einer vom Boden, schlicht weil der Körper länger fällt. Der Luftwiderstand steckt nicht im Modell: bei einem dichten Körper mit Dutzenden Metern je Sekunde ist die Korrektur klein, bei einem Ball oder einem befiederten Geschoss aber erheblich.',
    howToUse: [
      'Trage die Anfangsgeschwindigkeit in Metern je Sekunde ein.',
      'Setze den Winkel zur Waagerechten zwischen 0 und 90 Grad.',
      'Gib die Abwurfhöhe an; lass sie bei null für einen Wurf vom Boden.',
      'Vergleiche die Zeit bis zum Scheitel mit der Gesamtzeit: ein Abwurf aus der Höhe macht sie zu ungleichen Hälften.',
    ],
    howItWorks: 'Die Geschwindigkeit zerfällt in Komponenten: vy = v·sin α, vx = v·cos α. Flugzeit = (vy + √(vy² + 2gh)) ÷ g, und Weite = vx × Zeit. Die Fallbeschleunigung wird mit 9,80665 m/s² angesetzt.',
    example: 'Ein Wurf mit 20 m/s unter 45° vom Boden trägt 40,789 m in 2,884 s.',
    faq: [
      { q: 'Warum sind 45° der beste Winkel?', a: 'Nur vom Boden aus. Hebst du den Abwurfpunkt, sinkt das Beste unter 45°: der Körper fällt länger, die waagerechte Komponente ist also mehr wert als die senkrechte.' },
      { q: 'Ist der Luftwiderstand enthalten?', a: 'Nein. Bei einem dichten Körper mit Dutzenden Metern je Sekunde ist die Korrektur klein, bei einem Ball, einem befiederten Geschoss oder einem leichten Gegenstand zählt sie und verkürzt die Weite.' },
      { q: 'Warum ist die Weite bei 90° genau null?', a: 'Weil es keine waagerechte Komponente gibt. In binärer Arithmetik kommt cos 90° als 6·10⁻¹⁷ heraus, und ohne dieses Abrunden auf null läse sich die Weite als Billionstel Millimeter statt als ehrliche Null.' },
      { q: 'Welcher Wert von g wird verwendet?', a: '9,80665 m/s², der durch Festlegung gesetzte Normwert. Die wirkliche Fallbeschleunigung ist an den Polen rund ein halbes Prozent höher und am Äquator niedriger.' },
    ],
  },
  'relativity-dilation': {
    longDescription: 'Bei alltäglichen Geschwindigkeiten ist die Wirkung nicht wahrnehmbar: selbst bei Bahngeschwindigkeit weicht der Lorentzfaktor erst in der neunten Nachkommastelle von eins ab. Bemerkbar wird sie nahe der Lichtgeschwindigkeit und wächst ungleichmäßig — zwischen 0,99c und 0,999c verdreifacht sie sich. Deshalb wird die Geschwindigkeit als BRUCHTEIL der Lichtgeschwindigkeit eingetragen und nicht in Metern je Sekunde: in Metern verschwindet dieser Unterschied zwischen den Stellen.',
    howToUse: [
      'Die Geschwindigkeit ist ein Bruchteil der Lichtgeschwindigkeit: 0,5 ist die Hälfte, 0,99 sind neunundneunzig Prozent.',
      'Die Eigenzeit ist das, was die Uhr des bewegten Beobachters anzeigt.',
      'Die Längenkontraktion erscheint als Anteil: 50 % heißt, dass der Körper für einen ruhenden Beobachter halb so lang ist.',
      'Eins ist nicht zulässig: kein massebehafteter Körper lässt sich auf Lichtgeschwindigkeit beschleunigen.',
    ],
    howItWorks: 'γ = 1/√(1 − β²); gedehnte Zeit = Eigenzeit × γ.',
    example: 'Bei der halben Lichtgeschwindigkeit dehnt sich eine Sekunde auf der bewegten Uhr auf 1,155 s.',
    faq: [
      { q: 'Warum ist bei alltäglichen Geschwindigkeiten nichts zu sehen?', a: 'Der Faktor weicht um β²/2 von eins ab. Bei einem Verkehrsflugzeug sind das 10⁻¹², eine Nanosekunde über Jahre des Fliegens. GPS-Satelliten sind der seltene Fall, in dem die Korrektur angewendet werden muss: dort summiert sie sich auf zig Mikrosekunden am Tag.' },
      { q: 'Was ist die Eigenzeit?', a: 'Die Zeit auf einer mitbewegten Uhr. Sie ist die „wirkliche“ Zeit für das Objekt selbst; ein ruhender Beobachter sieht sie gedehnt — und umgekehrt, woraus das Zwillingsparadoxon entsteht.' },
      { q: 'Warum lässt sich die Lichtgeschwindigkeit nicht erreichen?', a: 'Bei eins geht der Ausdruck unter der Wurzel auf null und der Faktor gegen unendlich. Physikalisch heißt das, dass es unendlich viel Energie kostete, einen massebehafteten Körper zu beschleunigen.' },
      { q: 'Verkürzt sich die Länge wirklich?', a: 'Ja, aber nur in Bewegungsrichtung und nur aus Sicht des ruhenden Beobachters. Für den bewegten Körper ändert sich nichts — für ihn verkürzt sich die umgebende Welt.' },
    ],
  },
  'specific-heat': {
    longDescription: 'Ermittelt die Wärme, die zum Erwärmen oder Abkühlen eines Körpers nötig ist, und löst in drei Richtungen: Energie, Temperaturänderung oder Masse. Die Temperaturänderung trägt mit Absicht ein Vorzeichen — Abkühlen ist ein ebenso berechtigter Fall wie Erwärmen, und eine negative Energie bedeutet abgegebene Wärme und keine vertippte Eingabe. Es unterscheidet sich von der Wärmeleitung durch eine Schicht: jene Seite liefert den Wärmestrom durch ein Bauteil in Watt, diese die Wärmemenge zum Erwärmen eines Stoffes in Joule. Die latente Wärme ist nicht enthalten: Schmelzen und Sieden verbrauchen Energie, während sich die Temperatur überhaupt nicht bewegt.',
    howToUse: [
      'Wähle, was du suchst: die Energie, die Temperaturänderung oder die Masse.',
      'Trage die beiden anderen samt der spezifischen Wärmekapazität des Stoffes ein.',
      'Wasser hat 4186, Aluminium 900, Stahl 460, Luft 1005 J/(kg·K).',
      'Für das Abkühlen gib eine negative Änderung an: die Energie kommt mit einem Minus heraus.',
    ],
    howItWorks: 'Die Wärme ist die spezifische Wärmekapazität mal Masse mal Temperaturänderung: Q = c·m·ΔT. Eine Änderung in Kelvin und in Grad Celsius ist zahlenmäßig dieselbe.',
    example: 'Zwei Liter Wasser um 50 K zu erwärmen kostet 418 600 J — rund 0,12 Kilowattstunden.',
    faq: [
      { q: 'Wie unterscheidet sich das von der Wärmeleitung durch eine Schicht?', a: 'Jene liefert den Wärmestrom durch ein Bauteil in Watt, getrieben von Leitfähigkeit und Dicke. Dies liefert die Wärme zum Erwärmen eines Stoffes in Joule, getrieben von Masse und Wärmekapazität.' },
      { q: 'Sind Schmelzen und Sieden enthalten?', a: 'Nein. Ein Phasenwechsel verbraucht Wärme, während sich die Temperatur nicht bewegt, und diese Formel beschreibt ihn nicht. Bei Wasser sind das 334 kJ/kg zum Schmelzen und 2260 kJ/kg zum Verdampfen.' },
      { q: 'Kelvin oder Celsius?', a: 'Für eine ÄNDERUNG der Temperatur spielt es keine Rolle: die Skalen unterscheiden sich nur im Anfangspunkt, und die Größe eines Grades ist dieselbe.' },
      { q: 'Warum kann die Energie negativ sein?', a: 'Weil der Körper abkühlt und Wärme abgibt, statt sie aufzunehmen. Das Vorzeichen zeigt die Richtung und keinen Fehler.' },
    ],
  },
  'speed-of-sound': {
    longDescription: 'Die Schallgeschwindigkeit hängt allein von der Lufttemperatur ab — weder Druck noch Höhe gehen unmittelbar ein, weil sie sich im Gasgesetz herauskürzen. Deshalb läuft der Schall an einem frostigen Morgen langsamer als in der Hitze, und deshalb ist ein Verkehrsflugzeug in Reiseflughöhe der Schallmauer näher, als seine Geschwindigkeit über Grund vermuten lässt. Die praktischste Zeile hier ist, wie lange der Schall für einen Kilometer braucht: genau so wird die Entfernung eines Gewitters aus den Sekunden zwischen Blitz und Donner geschätzt.',
    howToUse: [
      'Trage die Temperatur der Luft ein, durch die der Schall läuft: am Boden, in Reiseflughöhe oder in einer Gefriertruhe.',
      'Druck und Höhe wirken sich nicht unmittelbar auf die Schallgeschwindigkeit aus — allein die Temperatur tut es.',
      'Um die Entfernung eines Gewitters zu schätzen, teile die Sekunden zwischen Blitz und Donner durch drei und erhältst Kilometer.',
      'Für Wasser oder andere Medien gilt das nicht: der Faktor hier ist für Luft gesetzt.',
    ],
    howItWorks: 'c = 331,3·√(1 + t/273,15) m/s, wobei 331,3 die Schallgeschwindigkeit in trockener Luft bei null Grad ist.',
    example: 'Bei 20 °C läuft der Schall mit 343,2 m/s und legt einen Kilometer in 2,9 Sekunden zurück.',
    faq: [
      { q: 'Warum wirkt sich der Druck nicht auf die Schallgeschwindigkeit aus?', a: 'Weil ein Anstieg des Drucks die Dichte im selben Verhältnis erhöht, und beide gehen als Verhältnis in die Formel ein. Übrig bleibt eine Abhängigkeit allein von der Temperatur — weshalb die Höhe nur mittelbar zählt, über die Kälte.' },
      { q: 'Warum die Entfernung zum Gewitter durch drei teilen?', a: 'Der Schall legt einen Kilometer in rund drei Sekunden zurück. Das Licht trifft augenblicklich ein, die Sekunden zwischen Blitz und Donner geteilt durch drei ergeben also die Kilometer bis zum Einschlag.' },
      { q: 'Spielt die Luftfeuchte eine Rolle?', a: 'Ein wenig: feuchte Luft ist etwas leichter als trockene, und der Schall läuft bei hoher Feuchte rund ein halbes Prozent schneller. Die Formel gilt für trockene Luft, und im Alltag wird die Korrektur übergangen.' },
      { q: 'Und in Wasser und Stahl?', a: 'Rund 1500 m/s in Wasser und rund 5900 m/s in Stahl — ein Mehrfaches der Luft, weil diese Medien weit weniger zusammendrückbar sind. Diese Rechnung gilt für sie nicht.' },
    ],
  },
  'stress-strain': {
    longDescription: 'Löst den Zug auf drei Wegen: die Spannung, die eine Last auf einen Querschnitt bringt, den Modul eines Werkstoffs aus einer gemessenen Verlängerung und wie weit sich eine Probe bekannten Moduls dehnt. Ein Newton je Quadratmillimeter ist genau ein Megapascal, nirgends taucht also ein Umrechnungsfaktor auf. Der Unterschied zum hookeschen Gesetz einer Feder zählt: die Federkonstante gehört einem bestimmten Bauteil und hängt an seiner Geometrie, während der Elastizitätsmodul dem Werkstoff selbst gehört und für jede daraus geschnittene Probe derselbe ist.',
    howToUse: [
      'Wähle, was gesucht ist: Spannung, Modul oder Verlängerung.',
      'Trage die Kraft in Newton und den Querschnitt in Quadratmillimetern ein.',
      'Für Modul und Verlängerung gib die Ausgangslänge der Probe an.',
      'Denk an die Streckgrenze: darüber hinaus ist die Verformung nicht mehr elastisch, und die Rechnung verliert ihren Sinn.',
    ],
    howItWorks: 'Spannung = Kraft ÷ Fläche; Dehnung = Verlängerung ÷ Länge; Modul = Spannung ÷ Dehnung.',
    example: '10 kN auf 100 mm² ergeben 100 MPa, und 0,5 mm Dehnung über einen Meter ergeben einen Modul von 200 GPa — Stahl.',
    faq: [
      { q: 'Wie unterscheidet sich der Elastizitätsmodul von der Federkonstante?', a: 'Die Federkonstante gehört einem bestimmten Bauteil: derselbe Stahl ergibt in einer dünnen und einer dicken Feder verschiedene Werte. Der Elastizitätsmodul gehört dem Werkstoff und ist für jede Probe daraus derselbe, gleich welcher Abmessungen.' },
      { q: 'Warum ergeben Newton je mm² unmittelbar Megapascal?', a: 'Weil ein Pascal ein Newton je Quadratmeter ist und ein Quadratmillimeter millionenfach kleiner. Die Einheiten fallen genau zusammen, es ist also nichts umzurechnen.' },
      { q: 'Bis zu welcher Last gilt das?', a: 'Bis zur Streckgrenze des Werkstoffs. Darüber hinaus ist die Verformung nicht mehr elastisch, die Probe kehrt nicht in ihre Ausgangslänge zurück, und ein aus einer solchen Messung berechneter Modul beschreibt nichts. Die Grenze unterscheidet sich nach Werkstoff und ist dieser Rechnung nicht bekannt.' },
      { q: 'Gilt das auch für Druck?', a: 'Bei vielen Metallen ist der Modul im Druck praktisch derselbe, und die Formeln fallen zusammen. Beton, Gusseisen und Verbundwerkstoffe verhalten sich im Zug und im Druck verschieden, das Ergebnis lässt sich dort also nicht übertragen.' },
    ],
  },
};
