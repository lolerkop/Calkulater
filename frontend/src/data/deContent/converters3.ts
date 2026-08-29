import type { DeDetailedContent } from './types';

export const deConverters3Content: Partial<Record<string, DeDetailedContent>> = {
  'convert-speed': {
    longDescription: 'Rechnet Geschwindigkeit zwischen Metern je Sekunde, Kilometern je Stunde, Meilen je Stunde, Knoten und Fuß je Sekunde um. Knoten werden in der See- und Luftfahrt verwendet, Meilen je Stunde auf Verkehrsschildern in den USA und Großbritannien.',
    howToUse: [
      'Trage den Wert ein.',
      'Wähle die Ausgangseinheit.',
      'Wähle die Zieleinheit.',
    ],
    howItWorks: 'Jede Einheit läuft über Meter je Sekunde mit genauen Faktoren.',
    example: '36 km/h sind genau 10 m/s, und ein Knoten sind 1,852 km/h.',
    faq: [
      { q: 'Was ist ein Knoten?', a: 'Eine Seemeile je Stunde, also 1,852 km/h. Er wird in der See- und Luftfahrt verwendet.' },
      { q: 'Warum sind 36 km/h genau 10 m/s?', a: 'Eine Stunde hat 3600 Sekunden und ein Kilometer 1000 Meter, km/h ist also genau 3,6-mal kleiner als m/s.' },
      { q: 'Ist die Umrechnung von mph genau?', a: 'Ja. Die Meile ist als 1609,344 m festgelegt, ein mph sind also genau 0,44704 m/s.' },
      { q: 'Taugt das fürs Laufen?', a: 'Das Lauftempo wird meist in Minuten je Kilometer angegeben — dafür gibt es einen eigenen Rechner.' },
    ],
  },
  'convert-time': {
    longDescription: 'Rechnet eine Dauer zwischen Millisekunden, Sekunden, Minuten, Stunden, Tagen und Wochen um. Monate und Jahre fehlen bewusst: ihre Länge liegt nicht fest, ein einzelner Faktor lieferte also eine plausible und falsche Antwort.',
    howToUse: [
      'Trage den Wert ein.',
      'Wähle die Ausgangseinheit.',
      'Wähle die Zieleinheit.',
    ],
    howItWorks: 'Jede Einheit läuft über die Sekunde mit genauen Faktoren.',
    example: '90 Minuten sind 1,5 Stunden, und eine Woche sind genau 604 800 Sekunden.',
    faq: [
      { q: 'Warum fehlen Monate und Jahre?', a: 'Ein Monat hat 28 bis 31 Tage, und ein Jahr kann ein Schaltjahr sein. Ein fester Faktor träfe still eine Annahme für dich.' },
      { q: 'Wie bekomme ich die Zeit zwischen zwei Daten?', a: 'Nimm den Rechner für die Differenz zweier Daten — er arbeitet mit dem Kalender und nicht mit einem Faktor.' },
      { q: 'Hat ein Tag hier immer 86 400 Sekunden?', a: 'Ja. Schaltsekunden und Umstellungen auf Sommerzeit sind Kalenderwirkungen und keine Festlegungen von Einheiten.' },
      { q: 'Kann ich damit das Lauftempo umrechnen?', a: 'Nein — das Tempo mischt Zeit und Strecke. Dafür gibt es den Rechner für das Lauftempo.' },
    ],
  },
  'convert-torque': {
    longDescription: 'Rechnet Drehmoment zwischen Newtonmetern, Kilonewtonmetern, Newtonzentimetern, Kilopondmetern, Pound-force-Fuß, Pound-force-Zoll und Ounce-force-Zoll um.',
    howToUse: [
      'Trage den Wert ein.',
      'Wähle die Ausgangseinheit.',
      'Wähle die Zieleinheit.',
    ],
    howItWorks: 'Jede Einheit läuft über den Newtonmeter mit genauen Faktoren für Kraft und Länge.',
    example: 'Ein Anzugsmoment von 100 N·m sind rund 73,76 Pound-force-Fuß.',
    faq: [
      { q: 'Wie unterscheidet sich Drehmoment von Kraft?', a: 'Drehmoment ist Kraft mal Hebelarm, seine Einheit ist deshalb zusammengesetzt: ein Newton mal einem Meter.' },
      { q: 'Ist die Umrechnung des Pound-force-Fuß genau?', a: 'Ja: Pfund, Fuß und Normfallbeschleunigung sind alle genau festgelegt, 1 lbf·ft sind also genau 1,3558179483314 N·m.' },
      { q: 'Was ist ein Ounce-force-Zoll?', a: 'Eine kleine amerikanische Einheit für die Feinmechanik: ein Sechzehntel eines Pound-force-Zoll.' },
      { q: 'Lässt sich Drehmoment in Energie umrechnen?', a: 'Nein. Ein Newtonmeter Drehmoment und ein Joule Energie teilen die Dimension, sind aber verschiedene Größen.' },
    ],
  },
  'convert-volume': {
    longDescription: 'Rechnet Volumen zwischen Millilitern, Litern, Kubikzentimetern, -metern und -fuß sowie amerikanischen und britischen Gallonen um. Amerikanische und britische Gallone unterscheiden sich um rund 20 %, die Liste hält sie deshalb auseinander.',
    howToUse: [
      'Trage den Wert ein.',
      'Wähle die Ausgangseinheit.',
      'Wähle die Zieleinheit.',
    ],
    howItWorks: 'Jede Einheit hat einen genauen Faktor zum Kubikmeter.',
    example: 'Eine US-Gallone sind 3,785 Liter und eine britische 4,546 Liter.',
    faq: [
      { q: 'Wie unterscheiden sich amerikanische und britische Gallone?', a: 'Es sind geschichtlich verschiedene Maße: 3,785 Liter gegen 4,546. Der Abstand von 20 % lässt sich in einem Rezept oder einer Anleitung leicht übersehen.' },
      { q: 'Ist ein Liter dasselbe wie ein Kubikdezimeter?', a: 'Ja, genau. Der Liter ist als Kubikdezimeter festgelegt, also 0,001 m³.' },
      { q: 'Ist ein Milliliter dasselbe wie ein Kubikzentimeter?', a: 'Ja, genau. Beide sind 10⁻⁶ m³.' },
      { q: 'Sind Küchenmaße enthalten?', a: 'Tassen und Löffel nicht: ihr Volumen ist von Land zu Land verschieden. Dafür braucht es den eigenen Küchenumrechner.' },
    ],
  },
  'coordinate-convert': {
    longDescription: 'Rechnet eine geografische Koordinate aus Grad, Minuten und Sekunden in Dezimalgrad um und zurück. Karten und Geräte sind sich über die Schreibweise nicht einig: Papierkarten und Luftfahrtdaten behalten Minuten und Sekunden, während Kartendienste im Browser und GPX-Dateien vorzeichenbehaftete Dezimalgrad verwenden. In diesem Paar trägt das Vorzeichen die Himmelsrichtung — GMS schreibt nie ein Minus, sondern einen Buchstaben —, deshalb steht die Richtung hier in einem eigenen Feld und nicht in der Zahl.',
    howToUse: [
      'Wähle die Richtung der Umrechnung.',
      'Aus GMS trägst du Grad, Minuten und Sekunden ein und wählst die Halbkugel.',
      'Andersherum trägst du vorzeichenbehaftete Dezimalgrad ein: ein Minus bedeutet Süd oder West.',
      'Achte auf den Bereich: die Breite bleibt innerhalb von 90°, die Länge innerhalb von 180°.',
    ],
    howItWorks: 'Dezimalgrad = Grad + Minuten ÷ 60 + Sekunden ÷ 3600. Zurück: der ganzzahlige Teil ergibt die Grad, der Bruchteil mal 60 die Minuten, und der Rest mal 60 die Sekunden.',
    example: '55°45′30″ nördlicher Breite sind 55,7583 Dezimalgrad.',
    faq: [
      { q: 'Warum ist die Halbkugel ein eigenes Feld?', a: 'Weil GMS nie ein Minus schreibt — die Richtung ist ein Buchstabe. Das Vorzeichen erscheint nur in der Dezimalschreibweise, und beide Systeme in einem Feld zu mischen lüde zu Fehlern ein.' },
      { q: 'Wie viele Nachkommastellen reichen?', a: 'Vier Nachkommastellen sind rund elf Meter in der Breite. Das deckt eine Anschrift oder eine Kartenmarkierung ab; die Vermessung braucht sechs oder mehr.' },
      { q: 'Warum werden Sekunden mit Bruchteil angezeigt?', a: 'Weil eine Sekunde auf eine ganze Zahl zu runden den Punkt um rund dreißig Meter verschiebt. Der Bruchteil ist Genauigkeit und keine Pedanterie.' },
      { q: 'Breite oder Länge?', a: 'Die Formel ist dieselbe. Nur der Bereich unterscheidet sich: die Breite endet bei 90°, die Länge bei 180°.' },
    ],
  },
  'number-scale-names': {
    longDescription: 'Das südasiatische System zählt nicht in Dreiergruppen: nach dem Tausender kommt das Lakh mit hunderttausend und danach das Crore mit zehn Millionen. Zwei Crore sind also nicht zwei Millionen, sondern zwanzig, und 1,00,00,000 gruppiert seine Ziffern anders als die vertrauten 10 000 000. Der Umrechner arbeitet in beide Richtungen und zeigt die Menge zugleich in Einheiten, in Lakh und in Crore, damit die Größenordnung als Ganzes sichtbar bleibt.',
    howToUse: [
      'Trage die Zahl ein und wähle die Skala, in der sie geschrieben ist.',
      'Wähle die Skala, in die sie umgerechnet werden soll.',
      'Die Zeilen für Einheiten, Lakh und Crore zeigen dieselbe Menge dreifach zugleich.',
      'Sehr große und sehr kleine Ergebnisse erscheinen in Exponentialschreibweise.',
    ],
    howItWorks: 'Jede Skala ist ein Faktor über der Einheit: Tausend 10³, Lakh 10⁵, Million 10⁶, Crore 10⁷, Milliarde 10⁹.',
    example: '25 Lakh sind 2,5 Millionen, also 2 500 000.',
    faq: [
      { q: 'Wie viel ist ein Crore?', a: 'Zehn Millionen. Das Crore folgt auf das Lakh, das hunderttausend ist, ein Crore hält also genau hundert Lakh.' },
      { q: 'Warum werden die Ziffern anders gruppiert?', a: 'Weil nach der ersten Dreiergruppe die Ziffern paarweise gehen: 1,00,00,000 ist ein Crore. Die westliche Schreibweise gruppiert durchgehend in Dreiergruppen.' },
      { q: 'Wo werden diese Namen verwendet?', a: 'In Indien, Pakistan, Bangladesch, Nepal und Sri Lanka — in Nachrichten, Immobilienpreisen und Geschäftsberichten. Begegnen sie einem im Text, ist man leicht um eine Größenordnung daneben.' },
      { q: 'Warum zeigt eine Einheit in Lakh einen Exponenten?', a: 'Eine Einheit sind 0,00001 Lakh, und unterhalb von 10⁻⁴ wechselt die Anzeige in die Exponentialschreibweise, damit der Wert nicht auf null gerundet wird.' },
    ],
  },
  'paper-quantity': {
    longDescription: 'Papier wird in Gramm je Quadratmeter angegeben, aber blattweise gekauft, und die A-Reihe verbindet beides. Nach ISO 216 misst ein Bogen A0 genau einen Quadratmeter, und jedes nächste Format ist die Hälfte des vorigen. „80 g/m²“ auf A4 bedeuten also genau 80/16 = 5 Gramm je Blatt, und ein Paket mit 500 Blatt wiegt 2,5 Kilogramm. Das zählt für Portostufen, für die Wahl eines Druckers und für die Frachtberechnung.',
    howToUse: [
      'Die Grammatur steht auf der Verpackung: 80 g/m² ist Büropapier, 160–300 sind Karton und Fotopapier.',
      'Die Formate folgen ISO 216, wo A0 einen Quadratmeter misst und jedes nächste die Hälfte davon.',
      'Für ein abweichendes Format nimm das nächstgelegene und rechne über das Flächenverhältnis hoch.',
      'Das Gewicht ist ohne Verpackung: Karton und Umschlag kommen hinzu.',
    ],
    howItWorks: 'Gewicht = Blattfläche × Grammatur × Blattzahl.',
    example: 'Ein Paket mit 500 Blatt A4 zu 80 g/m² wiegt genau 2,5 Kilogramm.',
    faq: [
      { q: 'Warum wiegt ein Paket A4 gerade so viel?', a: 'Weil A0 einen Quadratmeter misst und A4 sechzehnmal kleiner ist. Bei 80 g/m² wiegt ein Blatt 5 Gramm, 500 Blatt kommen also auf 2500 Gramm Papier; bei 64 g/m² landet dasselbe Paket bei 2 kg.' },
      { q: 'Wie unterscheidet sich die Grammatur von der Dicke?', a: 'Die Grammatur ist Masse je Fläche, während die Dicke auch davon abhängt, wie voluminös die Faser ist. Zwei Papiere mit 80 g/m² können sich in der Dicke um die Hälfte unterscheiden: lockeres Offsetpapier ist dicker als dichtes gestrichenes.' },
      { q: 'Wie ermittle ich das Porto?', a: 'Zähle alle Blätter zusammen und rechne den Umschlag dazu. Portotarife gehen in Stufen, wichtig ist also nicht das genaue Gewicht, sondern in welche Stufe es fällt — die Rechnung zeigt, ob du darunter bleibst.' },
      { q: 'Was sind „Blätter je Kilogramm“?', a: 'Die Umkehrzahl: wie viele Blätter dieses Formats und dieser Grammatur auf ein Kilogramm gehen. Praktisch im Großhandel, wo Papier nach Tonnen verkauft und nach Blatt verbraucht wird.' },
    ],
  },
  'scale-model': {
    longDescription: 'Rechnet in drei Richtungen: wie groß das Modellmaß wird, wie groß das Original war und welchen Maßstab ein vorhandenes Maßpaar darstellt. Der Nenner des Maßstabs ist ein eigenständiges Eingabefeld in der Sprache des Modellbaus — 1:87, 1:43, 1:72 — und kein namenloses Glied einer Verhältnisgleichung, das du selbst einsortieren müsstest. Die Antworten kommen in Millimetern, und ein ermittelter Maßstab wird in der vertrauten Form als 1:N ausgegeben.',
    howToUse: [
      'Wähle, was gesucht ist: das Modellmaß, das Maß am Original oder der Maßstab selbst.',
      'Trage die Maße in Millimetern ein — so sind Zeichnungen beschriftet und so werden Modelle gemessen.',
      'Der Nenner des Maßstabs ist die zweite Zahl der Schreibweise: bei 1:87 ist er 87.',
      'Das gesuchte Feld ist als „wird berechnet“ gekennzeichnet und wird von der Rechnung gefüllt.',
    ],
    howItWorks: 'Modell = Original ÷ Nenner; Original = Modell × Nenner; Maßstab = Original ÷ Modell.',
    example: 'Ein Waggon mit 4350 mm ergibt in 1:87 ein Modell von 50 mm.',
    faq: [
      { q: 'Was bedeutet die zweite Zahl in 1:87?', a: 'Um wie viel kleiner das Modell ist. Bei 1:87 steht jeder Millimeter am Modell für 87 Millimeter am wirklichen Vorbild.' },
      { q: 'Wie unterscheidet sich das von einem Rechner für Verhältnisse?', a: 'Ein Verhältnis löst ein namenloses a : b = c : d und überlässt dir, wo der Nenner hingehört. Hier ist der Maßstab ein eigenes Feld, die Antworten tragen Millimeter, und ein ermittelter Maßstab erscheint als 1:N.' },
      { q: 'Der Maßstab kam gebrochen heraus — ist das falsch?', a: 'Nein. Ein beliebiges Maßpaar landet selten auf einer runden Zahl: 1:12,5 heißt schlicht, dass das Original 12,5-mal größer ist. Für die üblichen Baugrößen nimm den nächstgelegenen anerkannten Maßstab.' },
      { q: 'Gilt das auch für Flächen und Volumen?', a: 'Die Felder behandeln lineare Maße. Eine Fläche schrumpft um N² und ein Volumen um N³, Quadratmeter dürfen hier also nicht eingetragen werden.' },
    ],
  },
};
