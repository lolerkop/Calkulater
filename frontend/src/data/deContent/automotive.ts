import type { DeDetailedContent } from './types';

export const deAutomotiveContent: Partial<Record<string, DeDetailedContent>> = {
  'car-depreciation': {
    longDescription: 'Ein Auto verliert seinen Wert auf einer Kurve und nicht auf einer Geraden, und das erste Jahr ist deren steilster Abschnitt. Dieser Rechner behält jenes Jahr als eigenen Satz und wendet den gewöhnlichen Jahressatz auf die folgenden Jahre an, damit ein dreijähriges Auto nicht so bewertet wird, als wäre es seit dem Neukauf gleichmäßig gealtert. Die Zahl, die herauskommt, ist der Teil des Kaufpreises, den du noch zurückbekommen kannst; der Verlust daneben ist der tatsächliche Preis des Besitzes, und bei den meisten Autos ist er größer als Kraftstoff und Wartung zusammen.',
    howToUse: [
      'Trage den Preis ein, für den das Auto gekauft wurde.',
      'Trage ein, wie viele volle Jahre es im Besitz ist.',
      'Trage den jährlichen Verlustsatz ab dem zweiten Jahr ein.',
      'Trage den Verlust im ersten Jahr gesondert ein — er ist gewöhnlich der größte.',
    ],
    howItWorks: 'Wert = Preis × (1 − Verlust im ersten Jahr) × (1 − Jahressatz) hoch der Zahl der Jahre nach dem ersten. Bei null Jahren entspricht der Wert dem Preis.',
    example: 'Ein für 30.000 € gekauftes Auto verliert im ersten Jahr 20 % und danach 12 % im Jahr: nach vier Jahren ist es 16.355,33 € wert.',
    faq: [
      { q: 'Warum hat das erste Jahr einen eigenen Satz?', a: 'Weil der Einbruch real und groß ist: Ein Auto hört in dem Moment auf, neu zu sein, in dem es zugelassen wird. Diesen Verlust über den ganzen Zeitraum zu mitteln, würde den Wert jedes zwei- und dreijährigen Autos zu hoch ansetzen.' },
      { q: 'Welcher Jahressatz ist realistisch?', a: 'Bei Volumenmodellen sind zehn bis fünfzehn Prozent im Jahr nach dem ersten üblich. Seltene Modelle, Nutzfahrzeuge und knappe Autos liegen weit daneben — nimm den Vorgabewert als Ausgangspunkt und nicht als Tatsache.' },
      { q: 'Ändert die Laufleistung das Ergebnis?', a: 'In diesem Modell nicht, es rechnet allein mit dem Alter. Eine hohe Laufleistung drückt den echten Preis unter diese Zahl, eine ungewöhnlich niedrige hebt ihn darüber.' },
      { q: 'Warum zählen angebrochene Jahre nicht?', a: 'Der Markt bepreist Autos nach Altersjahren, dreieinhalb Jahre handeln also als drei. Genau deshalb werden Jahre abgerundet.' },
    ],
  },
  'compression-ratio': {
    longDescription: 'Das Verdichtungsverhältnis ist das Gesamtvolumen des Zylinders geteilt durch das Volumen des Brennraums, und es bestimmt sowohl den Wirkungsgrad als auch den Kraftstoff, den der Motor verlangt. Die Empfindlichkeit ist ausgeprägt und einseitig: einen Kubikzentimeter vom Brennraum abzunehmen hebt das Verhältnis merklich, einen zum Hubraum hinzuzufügen bewegt es kaum. Daher die Praxis: verdichtet wird am Kopf und nicht durch Aufbohren des Blocks.',
    howToUse: [
      'Der Hubraum gilt für EINEN Zylinder, nicht für den ganzen Motor.',
      'Das Brennraumvolumen wird gemessen, indem der Kopf bei geschlossenen Ventilen mit Flüssigkeit gefüllt wird.',
      'Zum vollen Brennraum gehören Dichtung und Kolbenrücksprung — miss sie mit.',
      'Das ergibt das geometrische Verhältnis; Motoren mit spätem Einlassschluss laufen mit einem niedrigeren effektiven.',
    ],
    howItWorks: 'Verdichtungsverhältnis = (Hubraum + Brennraum) / Brennraum.',
    example: 'Ein Zylinder mit 454,17 cm³ und einem Brennraum von 45 cm³ ergibt 11,093.',
    faq: [
      { q: 'Was bringt ein höheres Verdichtungsverhältnis?', a: 'Mehr Wirkungsgrad und mehr Leistung aus demselben Hubraum: die Ladung verbrennt bei höherem Druck und gibt mehr ihrer Energie ab. Der Preis ist der Oktanbedarf — treibt man es zu weit, beginnt das Klopfen.' },
      { q: 'Warum hebt das Planen des Kopfes es so stark?', a: 'Weil der Brennraum im Nenner steht und klein ist. 3 cm³ von 45 abzunehmen sind sieben Prozent des Nenners; dieselben 3 cm³ auf 454 cm³ Hubraum sind unter einem Prozent.' },
      { q: 'Worin unterscheidet sich geometrische von effektiver Verdichtung?', a: 'Die geometrische wird aus Volumina gerechnet; die effektive beginnt, wenn das Einlassventil tatsächlich schließt. Motoren mit spätem Einlassschluss laufen merklich niedriger effektiv verdichtet — genau deshalb vertragen sie einen hohen geometrischen Wert.' },
      { q: 'Und bei Aufladung?', a: 'Der Ladedruck erhöht den Einlassdruck und den Gesamtdruck am Ende der Verdichtung. Deshalb laufen aufgeladene Motoren mit einem NIEDRIGEREN geometrischen Verhältnis — sonst käme das Klopfen früher.' },
    ],
  },
  'engine-displacement': {
    longDescription: 'Die Angabe im Fahrzeugschein ist gerundet: „1,8 Liter“ kann 1796 oder 1816 Kubikzentimeter bedeuten, während Steuer und Zoll mit der genauen Zahl arbeiten. Hier ergibt sie sich aus den drei Maßen, die in Teilekatalogen stehen und in den Block geschlagen sind. Eine eigene Zeile nennt das Verhältnis von Hub zu Bohrung: es erklärt, warum zwei Motoren mit gleichem Hubraum sich verschieden verhalten — ein Langhuber zieht von unten heraus, ein Kurzhuber dreht gern.',
    howToUse: [
      'Bohrung und Hub in Millimetern, so wie Teilekataloge sie ausweisen.',
      'Aufbohren ändert die Bohrung, nicht den Hub: trage das tatsächliche Laufbuchsenmaß ein.',
      'Ein Verhältnis von Hub zu Bohrung über eins bedeutet einen Langhuber, unter eins einen Kurzhuber.',
      'Das ist der Hubraum. Das gesamte Brennraumvolumen ist um den Verdichtungsraum größer.',
    ],
    howItWorks: 'V = π/4 · D² · S · n, mit Kubikmillimetern geteilt durch 1000.',
    example: 'Vier Zylinder mit 82×86 mm ergeben 1816,67 cm³ — die vertrauten „1,8 Liter“.',
    faq: [
      { q: 'Warum steht im Fahrzeugschein etwas anderes?', a: 'Der ausgewiesene Hubraum ist auf ein Zehntel gerundet, manchmal auf die Marketingzahl des Modells. Das genaue Volumen aus den Zylindermaßen weicht um Dutzende Kubikzentimeter ab, und mit dieser Zahl arbeiten Zoll und Steuer.' },
      { q: 'Was bewirkt das Aufbohren des Blocks?', a: 'Jeder zusätzliche Millimeter Bohrung bringt quadratisch Volumen: bei einem 82-mm-Motor bringt das Aufbohren auf 83 rund 45 cm³ über vier Zylinder. Der Hub bleibt, wo er ist — ihn setzt die Kurbelwelle.' },
      { q: 'Wie unterscheidet sich ein Langhuber?', a: 'Ist der Hub größer als die Bohrung, läuft der Kolben bei gleicher Drehzahl mit höherer mittlerer Geschwindigkeit; der Motor zieht von unten, dreht aber schlechter aus. Ein Kurzhuber ist das Gegenteil, weshalb Sportwagen ihn bevorzugen.' },
      { q: 'Funktioniert das auch für ein Motorrad?', a: 'Ja, die Formel kümmert sich nicht um das Fahrzeug. Bei einem Einzylinder trägst du eins ein, und die Rechnung zeigt dasselbe Volumen in beiden Zeilen.' },
    ],
  },
  'fuel-consumption': {
    longDescription: 'Nimmt die Liter, die du tatsächlich getankt hast, und die Strecke, die du tatsächlich gefahren bist, und macht daraus den Verbrauch. Der Kehrwert in Kilometern je Liter steht daneben, weil danach gefragt wird, und ein dritter Modus rechnet vorwärts: gib eine Strecke und einen bekannten Verbrauch an, und du bekommst den nötigen Kraftstoff.',
    howToUse: [
      'Wähle, was berechnet werden soll.',
      'Tanke voll, fahre und notiere Liter und Kilometer.',
      'Trage beides ein und lies den Verbrauch ab.',
    ],
    howItWorks: 'Liter je 100 km = Liter ÷ Kilometer × 100; der Kraftstoff für eine Fahrt ist Strecke ÷ 100 × Verbrauch.',
    example: '42 Liter auf 560 km sind 42 ÷ 560 × 100 = 7,5 Liter je 100 km.',
    faq: [
      { q: 'Ist das ein Umrechner für Meilen je Gallone?', a: 'Nein. Er berechnet den Verbrauch aus den Litern und Kilometern, die du gemessen hast. Zwischen l/100 km und mpg umzurechnen ist eine eigene Aufgabe und braucht einen Kehrwert.' },
      { q: 'Warum weicht mein Wert vom Bordcomputer ab?', a: 'Der Computer schätzt aus den Einspritzzeiten und setzt sich nach eigenem Takt zurück. Eine Messung von randvoll zu randvoll über eine ganze Tankfüllung ist der verlässlichere Vergleich.' },
      { q: 'Soll ich über eine oder mehrere Tankfüllungen messen?', a: 'Mehrere sind besser. Werte aus einer einzelnen Füllung schwanken mit Verkehr und Gelände, und der Mittelwert über einige Tankfüllungen glättet das.' },
      { q: 'Unterscheiden sich Stadt und Autobahn?', a: 'Deutlich. Der Rechner nimmt nur, was du einträgst — miss also die Art des Fahrens, über die du wirklich Bescheid wissen willst.' },
    ],
  },
  'fuel-oil-mix': {
    longDescription: 'Kettensäge, Freischneider und Außenborder werden von Öl geschmiert, das im Kraftstoff gelöst ist, und ein Fehler dabei kostet die Kolbengruppe: zu wenig Öl riefelt die Laufbahn, zu viel verkokt die Ringe. Nimm das Verhältnis aus der Anleitung deines Motors und nicht aus der Erinnerung — moderne Synthetiköle laufen von 1:25 bis 1:100. Der Ölanteil wird am fertigen Gemisch gemessen, deshalb kommt 1:50 auf 1,96 % und nicht auf glatte zwei.',
    howToUse: [
      'Nimm das Verhältnis aus der Anleitung deines Motors: 1:25 bei älterem Gerät, 1:50 bei den meisten neueren Maschinen.',
      'Nur Zweitaktöl: Motoröl aus dem Auto taugt hier nicht und verkokt den Kolben.',
      'Mische im Kanister und nicht im Tank — sonst setzt sich das Öl unten ab.',
      'Fertiges Gemisch hält etwa einen Monat: danach wird das Benzin schal und die schmierenden Zusätze zerfallen.',
    ],
    howItWorks: 'Öl = Benzin · 1000 / N Milliliter bei einem Verhältnis von 1:N.',
    example: 'Fünf Liter Benzin brauchen bei 1:50 genau 100 ml Öl, das ergibt 5,1 Liter Gemisch.',
    faq: [
      { q: 'Was passiert bei zu viel Öl?', a: 'Der Überschuss verbrennt nicht: er setzt Ruß auf dem Kolben ab, verkokt die Ringe und verstopft den Schalldämpfer. Der Motor verliert Leistung und qualmt, die Kerze verölt. Sicherer als zu wenig ist das nicht — der Schaden braucht nur länger.' },
      { q: 'Warum sind es bei 1:50 nicht genau 2 % Öl?', a: 'Weil das Verhältnis auf das Benzin bezogen ist, der Anteil aber am fertigen Gemisch gemessen wird. 1000 ml Benzin nehmen 20 ml Öl auf, das Gemisch sind jedoch 1020 ml, und 20/1020 ergeben 1,96 %.' },
      { q: 'Darf das Gemisch in einen Viertaktmotor?', a: 'Nein. Dort arbeitet das Öl in einem eigenen Kreislauf, und im Kraftstoff hinterlässt es nur Ruß und ruiniert die Kerze. Das Gemisch ist genau für Motoren gedacht, deren Schmierung mit dem Kraftstoff mitreist.' },
      { q: 'Taugt Benzin mit Ethanol?', a: 'Es entmischt sich früher und hält Öl schlechter in Schwebe. Für Saisongeräte nimmt man ethanolfreies Benzin oder mischt kleine Mengen an und schüttelt vor jedem Tanken.' },
    ],
  },
  'power-to-weight': {
    longDescription: 'Teilt die Motorleistung durch die Fahrzeugmasse und zeigt das Ergebnis in den drei Formen, in denen tatsächlich darüber gesprochen wird. Die Pferdestärke ist hier die metrische mit 735,49875 W — genau die Zahl, die in europäischen Fahrzeugpapieren steht; die mechanische Variante weicht um rund anderthalb Prozent ab und würde jeden Vergleich still verderben.',
    howToUse: [
      'Trage die Motorleistung ein und wähle ihre Einheit.',
      'Trage das Leergewicht ein.',
      'Ergänze eine zusätzliche Last, wenn sie mitzählen soll.',
    ],
    howItWorks: 'Die Leistung wird in Kilowatt umgerechnet, die Masse in Tonnen, daraus folgt das Verhältnis; Kilogramm je PS ist dieselbe Beziehung umgekehrt.',
    example: '150 PS in einem Auto mit 1400 kg sind 110,32 kW auf 1,4 t, also 78,80 kW je Tonne.',
    faq: [
      { q: 'Welche Pferdestärke wird verwendet?', a: 'Die metrische mit 735,49875 W, geschrieben als PS. Sie steht in den Fahrzeugpapieren in ganz Europa.' },
      { q: 'Sollen Insassen und Kraftstoff mitzählen?', a: 'Das entscheidest du. Üblich für Vergleiche ist das Leergewicht, und das Feld für die zusätzliche Last lässt dich hinzurechnen, was mitzählen soll.' },
      { q: 'Warum wird auch Kilogramm je PS angezeigt?', a: 'Viele merken sich die Zahl in dieser Form, und ein niedrigerer Wert bedeutet bessere Beschleunigung — manchen ist das anschaulicher.' },
      { q: 'Sagt das die Beschleunigung voraus?', a: 'Nur grob. Übersetzung, Traktion, Aerodynamik und die Stelle im Drehzahlband, an der die Leistung anliegt, zählen mit und stecken nicht im Modell.' },
    ],
  },
  'quarter-mile-elapsed-time': {
    longDescription: 'Eine Viertelmeile ist lang genug, dass das Leistungsgewicht den Lauf entscheidet und nicht der Start. Deshalb bindet Roger Huntingtons alte Faustformel das Ergebnis allein an Masse und Leistung und beschreibt gewöhnliche Autos immer noch recht gut. Bei vorbereiteten Dragstern trifft sie daneben, aus einem naheliegenden Grund: dort entsteht die halbe Zeit in der ersten halben Sekunde, aus Traktion und Startabstimmung statt aus dem Motor.',
    howToUse: [
      'Nimm die Leermasse mit Fahrer: achtzig Kilogramm machen sich auf der Bahn bemerkbar.',
      'Trage die Leistung an den Rädern ein, wenn du sie kennst; die angegebene Motorleistung ergibt ein optimistischeres Ergebnis.',
      'Die Formel ist für Pferdestärken und Pfund definiert; die Masse wird intern umgerechnet.',
      'Für Allrad und vorbereitete Autos ist die Schätzung pessimistisch: sie starten besser, als die Faustformel annimmt.',
    ],
    howItWorks: 'Huntingtons Faustformel: Zeit = 5,825·∛(Masse in Pfund / Leistung), Endgeschwindigkeit = 234·∛(Leistung / Masse in Pfund) mph.',
    example: '150 PS und 1300 kg ergeben 15,6 Sekunden und rund 141 km/h am Ende der Bahn.',
    faq: [
      { q: 'Warum stecken Traktion und Übersetzung nicht in der Formel?', a: 'Weil sie über eine Viertelmeile nur für die ersten Meter zählen; danach entscheidet allein, wie gut der Motor die Masse beschleunigt. Über diese Distanz schluckt das Leistungsgewicht die Unterschiede in der Übersetzung.' },
      { q: 'Wie genau ist das?', a: 'Bei einem gewöhnlichen Serienauto meist auf ein paar Zehntelsekunden. Bei Allrad, bei Motoren mit starkem Turboloch und bei vorbereiteten Dragstern wächst der Abstand auf eine Sekunde und mehr.' },
      { q: 'Welche Leistungsangabe soll ich nehmen?', a: 'Am besten eine an den Rädern gemessene: die angegebene wird an der Kurbelwelle genommen und lässt zehn bis zwanzig Prozent Antriebsverluste außer Acht. Mit der Katalogzahl fällt das Ergebnis optimistisch aus.' },
      { q: 'Warum zählt die Endgeschwindigkeit mehr als die Zeit?', a: 'Sie hängt weniger vom Start ab und beschreibt deshalb den Motor besser. Fahrer vergleichen sie, wenn sie wissen wollen, ob der Motor oder die Technik die Grenze setzt.' },
    ],
  },
  'speed-distance-time': {
    longDescription: 'Löst das Dreieck in die Richtung, die du brauchst, und zeigt daneben die Fahrzeit aufgeteilt in Stunden und Minuten. Es geht ausschließlich um die Durchschnittsgeschwindigkeit: Halte und Beschleunigung stecken nicht im Modell, die Zahl beantwortet also, wie lange eine gleichmäßige Fahrt dauert, und nicht, was der Tacho gerade anzeigt.',
    howToUse: [
      'Wähle, welchen Wert du brauchst.',
      'Trage die beiden bekannten ein.',
      'Lies das Ergebnis und die Fahrzeit ab.',
    ],
    howItWorks: 'Geschwindigkeit = Weg ÷ Zeit, Weg = Geschwindigkeit × Zeit, Zeit = Weg ÷ Geschwindigkeit.',
    example: '420 km in 5 Stunden sind im Mittel 84 km/h.',
    faq: [
      { q: 'Ist das die Durchschnitts- oder die Momentangeschwindigkeit?', a: 'Der Durchschnitt. Er beantwortet, wie schnell du insgesamt unterwegs warst, einschließlich dessen, was der Verkehr unterwegs gemacht hat.' },
      { q: 'Soll ich Halte in die Zeit einrechnen?', a: 'Das entscheidest du, und es ändert die Bedeutung. Mit Halten bekommst du den Durchschnitt der ganzen Fahrt, ohne sie den Durchschnitt in Bewegung.' },
      { q: 'Kann ich Meilen verwenden?', a: 'Nicht unmittelbar — die Rechnung läuft in Kilometern. Rechne vorher mit dem Einheitenumrechner um, wenn deine Zahlen in Meilen vorliegen.' },
      { q: 'Warum wird die Geschwindigkeit null abgewiesen, wenn die Zeit gesucht ist?', a: 'Eine Division dadurch hat keinen Wert: im Stand wird nie ein Weg zurückgelegt, also beantwortet keine Zeit die Frage.' },
    ],
  },
  'stopping-distance': {
    longDescription: 'Der Anhalteweg besteht aus zwei ungleichen Teilen. Der Reaktionsweg wächst linear mit der Geschwindigkeit, der Bremsweg QUADRATISCH: doppelte Geschwindigkeit heißt vierfacher Bremsweg. Deshalb kostet „nur ein bisschen mehr“ auf der Autobahn mehr, als es scheint: von 100 auf 120 km/h wächst der Bremsweg um fast die Hälfte. Die Neigung hat ein Vorzeichen — ein Gefälle zieht von der Haftung ab, eine Steigung kommt hinzu.',
    howToUse: [
      'Reibbeiwert: trockener Asphalt etwa 0,7, nass 0,4, Schnee 0,2, Eis 0,1.',
      'Die Reaktionszeit liegt bei rund einer Sekunde für einen aufmerksamen Fahrer, bei Müdigkeit oder Ablenkung deutlich darüber.',
      'Neigung in Prozent: ein Gefälle ist negativ, eine Steigung positiv.',
      'Gerechnet wird eine Vollbremsung in gerader Linie. Schleudern, ABS und unebener Untergrund stecken nicht im Modell.',
    ],
    howItWorks: 'Reaktionsweg = v·t; Bremsweg = v²/(2g(μ + Neigung)); der Anhalteweg ist die Summe.',
    example: 'Bei 90 km/h auf trockenem Asphalt und einer Sekunde Reaktionszeit sind es 70,52 m.',
    faq: [
      { q: 'Warum wächst der Bremsweg quadratisch?', a: 'Weil die Bremsen kinetische Energie abbauen, und die geht mit dem Quadrat der Geschwindigkeit. Doppelte Geschwindigkeit heißt vierfache Energie, also bei gleicher Haftung vierfacher Weg.' },
      { q: 'Wie gefährlich ist zu schnelles Fahren?', a: 'Von 100 auf 120 km/h wächst der Bremsweg um etwa das 1,44-Fache. Wo das Auto bei 100 schon steht, fährt es bei 120 noch rund 66 km/h — genug für einen schweren Aufprall.' },
      { q: 'Wie wirkt sich die Neigung aus?', a: 'Ein Gefälle verringert die wirksame Haftung, eine Steigung erhöht sie. Bei zehn Prozent Gefälle und einer Haftung von 0,7 wächst der Bremsweg um rund fünfzehn Prozent; bei schlechter Haftung kann ein Gefälle das Anhalten ganz unmöglich machen.' },
      { q: 'Verkürzt ABS den Weg?', a: 'Nicht immer. ABS erhält die Lenkbarkeit und verhindert blockierende Räder, auf trockenem Asphalt kommt der Weg aber etwa gleich heraus, und auf lockerem Schnee oder Schotter kann er sogar länger werden.' },
    ],
  },
  'trip-cost': {
    longDescription: 'Macht aus Strecke und Verbrauch Liter, bepreist sie an der Zapfsäule und rechnet die Maut hinzu. Gezählt wird nur, was du unterwegs tatsächlich ausgibst: Wertverlust, Verschleiß und Steuer je Kilometer hängen vom Auto und von der Laufleistung ab, und sie mit einer Zahl zu versehen hieße, eine Schätzung als Rechnung auszugeben.',
    howToUse: [
      'Trage die Strecke und deinen Verbrauch ein.',
      'Trage den Kraftstoffpreis ein, den du zahlst.',
      'Ergänze Maut und Mitfahrende, wenn sie anfallen.',
    ],
    howItWorks: 'Liter = Strecke ÷ 100 × Verbrauch; Kosten = Liter × Preis + Maut; der Anteil ist das geteilt durch die Zahl der Mitfahrenden.',
    example: '800 km bei 7,5 l/100 km und 1,75 € je Liter brauchen 60 Liter und kosten 105 €.',
    faq: [
      { q: 'Sind Verschleiß und Wertverlust enthalten?', a: 'Nein, nur Kraftstoff und Maut. Die Kosten je Kilometer für Verschleiß hängen stark vom Auto ab und wären eine Schätzung statt einer Rechnung.' },
      { q: 'Wie zähle ich die Rückfahrt mit?', a: 'Schalte die Rückfahrt ein, dann verdoppelt sich die Strecke samt dem Kraftstoff, den sie braucht.' },
      { q: 'Welchen Verbrauch soll ich eintragen?', a: 'Den, den du selbst gemessen hast. Autobahn und Stadt unterscheiden sich so stark, dass der Herstellerwert selten zu einer echten Fahrt passt.' },
      { q: 'Ist die Maut je Richtung oder insgesamt?', a: 'Insgesamt. Trage ein, was die ganze Fahrt an Maut kostet, einschließlich des Rückwegs, wenn du eine Rückfahrt gewählt hast.' },
    ],
  },
  'wheel-offset': {
    longDescription: 'Die Einpresstiefe ET ist der Abstand von der Anlagefläche zur Mitte der Felge, und sie kann negativ sein: bei tief geschüsselten Rädern liegt die Anlagefläche weiter innen. Die praktische Frage ist fast immer dieselbe — wie weit rückt das Rad mit einer anderen ET nach innen oder außen. Das Vorzeichen ist unanschaulich: eine KLEINERE Einpresstiefe drückt das Rad nach AUSSEN — deshalb steht die Richtung hier in Worten und nicht nur als Zahl.',
    howToUse: [
      'Felgenbreite in Zoll aus der Kennzeichnung — 7J bedeutet 7 Zoll.',
      'Der ET-Wert ist auf dem Rad eingeprägt und kann negativ sein.',
      'Das Rückmaß berücksichtigt die Hörner: die volle Felge ist einen Zoll breiter als das Maulmaß.',
      'Ein Rad nach außen zu rücken belastet das Radlager und kann am Radlauf streifen.',
    ],
    howItWorks: 'Rückmaß = Breite/2 + ET + 12,7 mm; Versatz = alte ET − neue ET.',
    example: 'Eine 7-Zoll-Felge mit ET 35 ergibt 136,6 mm Rückmaß; der Wechsel auf ET 45 zieht das Rad 10 mm nach innen.',
    faq: [
      { q: 'Warum drückt eine kleinere Einpresstiefe das Rad nach außen?', a: 'Die ET wird von der Anlagefläche gemessen, also von der Fläche, die an der Nabe anliegt. Diese Fläche bleibt, wo sie ist; eine kleinere ET rückt die Felgenmitte also weiter von der Nabe weg — nach außen.' },
      { q: 'Wie stark darf die Einpresstiefe abweichen?', a: 'Hersteller erlauben meist wenige Millimeter. Ein spürbarer Versatz nach außen vergrößert den Lenkrollradius, belastet das Lager und kann über den Federweg am Radlauf streifen.' },
      { q: 'Worin unterscheidet sich ET vom Rückmaß?', a: 'Die ET wird von der Felgenmitte gemessen, das Rückmaß von der inneren Kante. Das erste ist auf europäischen Rädern eingeprägt, das zweite steht in amerikanischen Tabellen; die halbe Felgenbreite verbindet beide.' },
      { q: 'Helfen Distanzscheiben?', a: 'Eine Distanzscheibe verringert die wirksame Einpresstiefe und drückt das Rad nach außen, sie löst also nur eines der beiden Probleme. Sie verkürzt außerdem den Gewindeeingriff und verlangt längere Schrauben — ohne sie wird die Befestigung unsicher.' },
    ],
  },
};
