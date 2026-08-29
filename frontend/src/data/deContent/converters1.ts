import type { DeDetailedContent } from './types';

export const deConverters1Content: Partial<Record<string, DeDetailedContent>> = {
  'convert-angle': {
    longDescription: 'Rechnet Winkel zwischen Bogenmaß, Grad, Gon, vollen Umdrehungen, Bogenminuten und Bogensekunden um. Alle Faktoren sind über π ausgedrückt statt als dezimale Näherung, deshalb ergeben 180° genau π und 400 Gon genau eine Umdrehung.',
    howToUse: [
      'Trage den Wert ein.',
      'Wähle die Ausgangseinheit.',
      'Wähle die Zieleinheit.',
    ],
    howItWorks: 'Jede Einheit läuft über das Bogenmaß mit Faktoren, die als Bruchteile von π geschrieben sind.',
    example: '180 Grad sind π im Bogenmaß, und ein Grad hat 60 Bogenminuten oder 3600 Bogensekunden.',
    faq: [
      { q: 'Was ist ein Gon?', a: 'Ein Hundertstel eines rechten Winkels, eine volle Umdrehung hat also 400 Gon. Es wird im Vermessungswesen verwendet.' },
      { q: 'Warum wird ein Grad nicht als 0,0174533 rad gespeichert?', a: 'Eine dezimale Näherung ist in der sechsten Stelle falsch, und genaue Beziehungen wie 180° = π gälten dann nicht mehr.' },
      { q: 'Wo werden Bogenminuten verwendet?', a: 'In Astronomie, Navigation und Optik — eine Bogenminute ist ein Sechzigstel eines Grades.' },
      { q: 'Deckt das auch geografische Breite und Länge ab?', a: 'Es rechnet den Winkel selbst um. Die Koordinatenschreibweise in Grad, Minuten und Sekunden ist ein eigenes Format.' },
    ],
  },
  'convert-area': {
    longDescription: 'Rechnet Flächen zwischen Quadratmillimetern, -zentimetern, -metern und -kilometern, Hektar, Quadratzoll und Quadratfuß sowie Acre um. Die quadrierten Faktoren sind genau, bei Grundstücksmaßen häuft sich also kein Rundungsfehler an.',
    howToUse: [
      'Trage den Wert ein.',
      'Wähle die Ausgangseinheit.',
      'Wähle die Zieleinheit.',
    ],
    howItWorks: 'Jede Einheit hat einen genauen Faktor zum Quadratmeter.',
    example: 'Ein Hektar sind 10 000 m² und ein Acre 4046,8564224 m².',
    faq: [
      { q: 'Wie unterscheidet sich ein Hektar von einem Acre?', a: 'Ein Hektar sind genau 10 000 m², ein Acre dagegen 4046,86 m². Ein Hektar sind rund 2,47 Acre.' },
      { q: 'Warum sind die Faktoren nicht die Quadrate der Längenfaktoren?', a: 'Sie sind es, aber als fertige Zahlen ausgeschrieben, damit der Umrechner nicht von einer Dimensionsrechnung abhängt und leicht nachzuprüfen bleibt.' },
      { q: 'Taugt das für Grundstücke?', a: 'Ja, Hektar und Acre sind übliche Landmaße. Für Urkunden gleiche mit der amtlichen Vermessung ab.' },
      { q: 'Sind die angelsächsischen Flächeneinheiten genau?', a: 'Ja. Ein Quadratzoll sind 0,00064516 m² nach der Festlegung des Zolls.' },
    ],
  },
  'convert-cooking-volume': {
    longDescription: 'Rechnet Küchenvolumen zwischen Millilitern, Litern, Tee- und Esslöffeln, Tassen und Flüssigunzen um. Eine amerikanische Tasse fasst 236,59 ml und eine metrische 250 ml, deshalb ist jedes Maß ausdrücklich benannt.',
    howToUse: [
      'Trage den Wert ein.',
      'Wähle die Ausgangseinheit.',
      'Wähle die Zieleinheit.',
    ],
    howItWorks: 'Jedes Maß läuft über den Milliliter mit genauen Faktoren.',
    example: 'Eine amerikanische Tasse fasst 236,59 ml, eine metrische 250 ml — ein unbemerkt übernommenes Rezept liegt um fünf Prozent daneben.',
    faq: [
      { q: 'Welche Tasse meint ein Rezept?', a: 'Das hängt von der Quelle ab: die amerikanische Tasse fasst 236,59 ml, die metrische 250 ml. Beide sind hier ausdrücklich benannt, die Wahl bleibt also deine.' },
      { q: 'Lässt sich eine Tasse Mehl in Gramm umrechnen?', a: 'Nein — dafür braucht es die Dichte der jeweiligen Zutat, und dieser Umrechner arbeitet nur mit Volumen.' },
      { q: 'Wie viele Teelöffel gehen auf einen Esslöffel?', a: 'Drei, sowohl im metrischen als auch im amerikanischen System.' },
      { q: 'Was ist eine Flüssigunze?', a: 'Die amerikanische Flüssigunze sind genau 29,5735295625 ml; die britische weicht ab und wird hier nicht verwendet.' },
    ],
  },
  'convert-cooking-weight': {
    longDescription: 'Rechnet Küchenvolumen in Gewicht um, wofür neben der Zahl auch die Zutat gebraucht wird: eine Tasse Mehl und eine Tasse Honig unterscheiden sich um fast das Dreifache. Die Dichten sind eine kleine Tabelle, die diesem Rechner gehört, und die verwendete steht immer in einer eigenen Zeile — eine Zahl ohne ihre Dichte wäre eine Zahl, die du nicht nachprüfen kannst. Die Tasse ist hier die metrische mit 240 ml, ausdrücklich gesagt statt angenommen, denn eine amerikanische Tasse fasst 236,6 ml, und genau diese stille Uneinigkeit lässt Rezepte schiefgehen.',
    howToUse: [
      'Wähle die Zutat — die Dichte ist es, die aus Volumen Gewicht macht.',
      'Wähle die Einheit, in der du misst.',
      'Trage die Menge ein.',
      'Wechsle die Richtung, wenn du Gramm hast und Volumen brauchst.',
    ],
    howItWorks: 'Die Menge wird über den Einheitenfaktor in Milliliter umgerechnet und mit der Dichte der Zutat multipliziert. In der anderen Richtung werden Gramm durch die Dichte geteilt und danach in die gewählte Einheit zurückgerechnet.',
    example: 'Eine metrische Tasse Mehl mit 0,53 g/ml sind 127,2 g.',
    faq: [
      { q: 'Warum zählt die Zutat?', a: 'Weil das Gewicht je Milliliter eine Eigenschaft des Stoffes ist. Eine Tasse Wasser wiegt 240 g, eine Tasse Mehl rund 127 g und eine Tasse Honig rund 341 g.' },
      { q: 'Wie genau sind die Dichten?', a: 'Es sind übliche Küchenwerte, und der Rechner zeigt den verwendeten an. Trockene Zutaten schwanken damit, wie sie eingefüllt wurden: gelöffeltes, geschöpftes oder festgedrücktes Mehl kann sich um ein Viertel unterscheiden.' },
      { q: 'Welche Tasse wird verwendet?', a: 'Die metrische mit 240 ml. Ist dein Rezept amerikanisch, fasst seine Tasse 236,6 ml — rund 1,4 % weniger, was beim Backen zählt und bei einer Suppe nicht.' },
      { q: 'Kann ich Gramm zurück in Tassen umrechnen?', a: 'Ja, wechsle die Richtung. Es wird dieselbe Dichte verwendet, hin und zurück ergibt also wieder die Ausgangszahl.' },
      { q: 'Warum nicht einfach eine Waage nehmen?', a: 'Tu das, wenn du eine hast. Das hier ist für Rezepte in Tassen, wenn du Gramm hast, oder umgekehrt.' },
    ],
  },
  'convert-data-rate': {
    longDescription: 'Rechnet die Datenrate zwischen Bit und Byte je Sekunde mit dezimalen und binären Vorsätzen um. Anbieter geben Megabit an, während Browser Megabyte anzeigen: der Unterschied ist genau acht.',
    howToUse: [
      'Trage den Wert ein.',
      'Wähle die Ausgangseinheit.',
      'Wähle die Zieleinheit.',
    ],
    howItWorks: 'Jede Einheit läuft über das Bit je Sekunde; ein Byte zählt als acht Bit.',
    example: 'Eine Leitung mit 100 Mbit/s liefert 12,5 MB/s: der Anbieter zählt Bit, der Browser zeigt Byte.',
    faq: [
      { q: 'Warum ergeben 100 Mbit/s nur 12,5 MB/s?', a: 'Ein Byte hält acht Bit. Anbieter geben Bit an und Dateimanager zeigen Byte, das Verhältnis ist also genau acht.' },
      { q: 'Wie unterscheidet sich MiB/s von MB/s?', a: 'Ein Mebibyte sind 1024² Byte, ein Megabyte 10⁶ Byte — rund 4,9 % mehr.' },
      { q: 'Ist der Protokollaufwand enthalten?', a: 'Nein — hier werden Einheiten umgerechnet. Die tatsächliche Downloadgeschwindigkeit liegt immer unter der Leitungsrate.' },
      { q: 'Wie komme ich von einer Rate zu einer Datenmenge?', a: 'Multipliziere mit der Zeit. Für Datenmengen gibt es einen eigenen Umrechner.' },
    ],
  },
  'convert-density': {
    longDescription: 'Rechnet die Dichte zwischen Kilogramm je Kubikmeter, Gramm je Kubikzentimeter, Kilogramm je Liter, Tonnen je Kubikmeter, Gramm je Liter, Pfund je Kubikfuß und je US-Gallone sowie Unzen je Kubikzoll um.',
    howToUse: [
      'Trage den Wert ein.',
      'Wähle die Ausgangseinheit.',
      'Wähle die Zieleinheit.',
    ],
    howItWorks: 'Jede Einheit läuft über das Kilogramm je Kubikmeter mit genauen Faktoren.',
    example: 'Wasser hat rund 1 g/cm³, das sind 1000 kg/m³ oder etwa 62,43 Pfund je Kubikfuß.',
    faq: [
      { q: 'Warum sind 1 g/cm³ gleich 1000 kg/m³?', a: 'Ein Kilogramm hält tausend Gramm und ein Kubikmeter eine Million Kubikzentimeter; eine Million geteilt durch tausend ergibt tausend.' },
      { q: 'Wie groß ist die Dichte von Wasser?', a: 'Rund 1 g/cm³ bei 4 °C. Der genaue Wert hängt von der Temperatur ab, deshalb rechnet dieses Werkzeug Einheiten um und schlägt keine Stoffe nach.' },
      { q: 'Lässt sich Dichte in Masse umrechnen?', a: 'Nein — dafür braucht es ein Volumen. Dichte ist Masse je Volumen, und der Umrechner arbeitet allein mit dieser Größe.' },
      { q: 'Welche Gallone wird verwendet?', a: 'Die US-Gallone mit 3,785411784 Litern. Die britische Gallone ist größer und wird hier nicht verwendet.' },
    ],
  },
  'convert-digital': {
    longDescription: 'Rechnet Datenmengen zwischen dezimalen Einheiten (kB, MB, GB, TB) und binären (KiB, MiB, GiB, TiB) um. Die beiden Systeme sind nicht dasselbe: ein Gigabyte sind tausend Millionen Byte, ein Gibibyte dagegen 1 073 741 824 — deshalb erscheint eine Platte mit 1 TB als 931 GiB.',
    howToUse: [
      'Trage die Größe ein.',
      'Wähle die Ausgangseinheit.',
      'Wähle die Zieleinheit.',
    ],
    howItWorks: 'Dezimale Vorsätze gehen in Potenzen von 1000, binäre in Potenzen von 1024.',
    example: '1 TB sind 931,32 GiB — deshalb wirken Plattenkapazitäten im Betriebssystem kleiner.',
    faq: [
      { q: 'Ist ein Megabyte dasselbe wie ein Mebibyte?', a: 'Nein. Ein Megabyte sind 1 000 000 Byte und ein Mebibyte 1 048 576. Der Abstand wächst mit jedem Vorsatzschritt.' },
      { q: 'Warum zeigt meine Platte mit 1 TB nur 931 GB?', a: 'Der Hersteller zählt dezimale Terabyte, während das Betriebssystem binäre Gibibyte meldet, sie aber oft als GB beschriftet. Die Menge ist dieselbe, die Einheiten sind es nicht.' },
      { q: 'Welches System soll ich verwenden?', a: 'Hersteller von Datenträgern und Netzwerktechnik nutzen dezimale Einheiten. Betriebssysteme und Speichergrößen sind meist binär. Richte dich danach, was deine Quelle verwendet.' },
      { q: 'Wo passen Bit hinein?', a: 'Ein Byte sind acht Bit. Netzgeschwindigkeiten werden meist in Bit je Sekunde angegeben, Datenmengen in Byte.' },
    ],
  },
  'convert-energy': {
    longDescription: 'Rechnet Energie zwischen Joule, Kilojoule, Megajoule, Wattstunden, Kilowattstunden, Kalorien, Kilokalorien, BTU und Elektronenvolt um. Kilowattstunden stehen auf der Stromrechnung, Kilokalorien auf Lebensmittelverpackungen, BTU auf Heiz- und Klimageräten.',
    howToUse: [
      'Trage den Wert ein.',
      'Wähle die Ausgangseinheit.',
      'Wähle die Zieleinheit.',
    ],
    howItWorks: 'Jede Einheit läuft über das Joule mit genau festgelegten Faktoren.',
    example: 'Eine Kilowattstunde sind genau 3 600 000 Joule, und eine Kilokalorie genau 4184 Joule.',
    faq: [
      { q: 'Warum sind eine Kilowattstunde 3 600 000 Joule?', a: 'Ein Watt ist ein Joule je Sekunde, ein Kilowatt über eine Stunde sind also 1000 × 3600 Joule.' },
      { q: 'Ist die Kalorie auf Lebensmitteln dieselbe wie hier?', a: 'Die „Kalorie“ auf Lebensmitteln ist eine Kilokalorie. Wähle kcal für Nährwertangaben und cal für die kleine thermochemische Kalorie mit 4,184 J.' },
      { q: 'Welche BTU wird verwendet?', a: 'Die BTU nach International Table mit 1055,05585262 J. Andere Festlegungen weichen in der dritten Nachkommastelle ab.' },
      { q: 'Warum steht das Elektronenvolt in Exponentialform?', a: 'Es sind rund 1,6 × 10⁻¹⁹ Joule, eine gewöhnliche Schreibweise bräuchte also neunzehn führende Nullen.' },
    ],
  },
  'convert-flow': {
    longDescription: 'Rechnet den Volumenstrom zwischen Kubikmetern je Sekunde und je Stunde, Litern je Sekunde, Minute und Stunde, Kubikfuß je Minute und US-Gallonen je Minute um.',
    howToUse: [
      'Trage den Wert ein.',
      'Wähle die Ausgangseinheit.',
      'Wähle die Zieleinheit.',
    ],
    howItWorks: 'Jede Einheit läuft über den Kubikmeter je Sekunde mit genauen Faktoren.',
    example: 'Ein Kubikmeter je Stunde sind 16,67 Liter je Minute.',
    faq: [
      { q: 'Geht es um Volumen- oder Massenstrom?', a: 'Um den Volumenstrom: er arbeitet mit Volumen je Zeiteinheit und braucht keine Stoffdichte.' },
      { q: 'Was sind CFM und GPM?', a: 'CFM sind Kubikfuß je Minute, üblich in der Lüftungstechnik; GPM sind US-Gallonen je Minute, üblich bei Pumpen.' },
      { q: 'Wie komme ich zum Massenstrom?', a: 'Multipliziere den Volumenstrom mit der Dichte des Stoffes. Dafür gibt es einen eigenen Dichteumrechner.' },
      { q: 'Welche Gallone meint GPM?', a: 'Die US-Gallone mit 3,785411784 Litern. Die britische Gallone ist größer; Pumpenangaben nutzen die amerikanische.' },
    ],
  },
};
