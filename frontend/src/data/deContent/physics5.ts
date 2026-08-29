import type { DeDetailedContent } from './types';

export const dePhysics5Content: Partial<Record<string, DeDetailedContent>> = {
  'momentum': {
    longDescription: 'Berechnet den Impuls — Masse mal Geschwindigkeit — und löst die Formel auch rückwärts. Der Impuls beantwortet eine Frage, die die Energie nicht beantwortet: wie schwer ein Körper anzuhalten ist. Er ist die Größe, die bei Stößen erhalten bleibt. Anders als bei der kinetischen Energie geht die Geschwindigkeit in der ersten Potenz ein und nicht im Quadrat.',
    howToUse: [
      'Wähle die gesuchte Größe.',
      'Trage die beiden anderen in SI-Einheiten ein.',
      'Lies den Impuls und die zugehörigen Größen ab.',
    ],
    howItWorks: 'p = m · v, daraus v = p ÷ m und m = p ÷ v. Die kinetische Energie steht daneben als p · v ÷ 2 — sie wächst schneller als der Impuls.',
    example: 'Ein Körper von 3 kg bei 4 m/s hat einen Impuls von 12 kg·m/s.',
    faq: [
      { q: 'Wie unterscheidet sich der Impuls von der kinetischen Energie?', a: 'In den Impuls geht die Geschwindigkeit in der ersten Potenz ein und in die Energie in der zweiten. Ein doppelt so schneller Körper hat den doppelten Impuls, aber die vierfache Energie.' },
      { q: 'Warum zählt der Impuls bei Stößen?', a: 'Weil er erhalten bleibt: der Gesamtimpuls vor einem Stoß gleicht dem danach. Die Energie kann dagegen teilweise in Wärme und Verformung übergehen.' },
      { q: 'Was bedeutet die Geschwindigkeit null?', a: 'Der Impuls ist null: ein ruhender Körper hat keinen. Das ist ein gültiges Ergebnis und kein Fehler.' },
      { q: 'Wird die Richtung berücksichtigt?', a: 'Nein, berechnet wird der Betrag. Der Impuls ist ein Vektor, und bei der Untersuchung von Stößen werden die Vorzeichen der Richtungen gesondert vergeben.' },
    ],
  },
  'newton-force': {
    longDescription: 'Löst das zweite newtonsche Gesetz in jede Richtung: Masse und Beschleunigung ergeben die Kraft, Kraft und Beschleunigung ergeben die Masse, Kraft und Masse ergeben die Beschleunigung. Der Teiler des gewählten Modus wird zuerst geprüft — bei einer Beschleunigung von null ist die Masse nicht bestimmt, und die Division lieferte eine Unendlichkeit im Gewand einer Antwort. Das Gewicht erscheint hier als Sonderfall: es ist schlicht die Kraft, die die Schwerkraft auf einen Körper ausübt.',
    howToUse: [
      'Wähle die gesuchte Größe.',
      'Trage die beiden anderen in SI-Einheiten ein.',
      'Lies das Ergebnis und die zugehörigen Größen ab.',
    ],
    howItWorks: 'F = m · a, daraus m = F ÷ a und a = F ÷ m. Das Gewicht an der Erdoberfläche ist m · 9,80665.',
    example: 'Eine Masse von 10 kg, die mit 2 m/s² beschleunigt wird, braucht eine Kraft von 20 N.',
    faq: [
      { q: 'Wie unterscheidet sich Kraft von Gewicht?', a: 'Das Gewicht ist die Schwerkraft auf einen Körper: m · g. Die Masse wird in Kilogramm gemessen und ändert sich nicht; das Gewicht wird in Newton gemessen und hängt von der Anziehung ab.' },
      { q: 'Warum wird eine Beschleunigung von null abgewiesen, wenn die Masse gesucht ist?', a: 'Die Masse ist Kraft geteilt durch Beschleunigung. Bei einer Beschleunigung von null hat die Division keinen Wert, über die Masse lässt sich also nichts schließen.' },
      { q: 'Darf die Beschleunigung null sein, wenn die Kraft gesucht ist?', a: 'Ja. Ein gleichförmig bewegter Körper braucht keine resultierende Kraft — das ist ein wirklicher Zustand und kein Eingabefehler.' },
      { q: 'Ist die Reibung berücksichtigt?', a: 'Nein. F = m · a verbindet die Masse mit der RESULTIERENDEN Kraft; um die Reibung zu berücksichtigen, zieh sie selbst von der aufgebrachten Kraft ab.' },
    ],
  },
  'orbital-period': {
    longDescription: 'Ermittelt, wie lange ein Umlauf auf einer Kreisbahn dauert. Der Unterschied zur Zentripetalkraft zählt: jene nimmt die Umlaufzeit aus einer GEGEBENEN Geschwindigkeit, während hier die Geschwindigkeit aus der Masse des Zentralkörpers folgt, die Frage ist also eine andere — wie lange eine Runde in dieser Höhe dauert und nicht bei dieser Geschwindigkeit. Die Masse wird in Einheiten von 10²⁴ kg und der Radius in Kilometern eingetragen, weil die Erdmasse in Kilogramm in Exponentialform geschrieben wird, die das Eingabefeld nicht annimmt.',
    howToUse: [
      'Masse des Zentralkörpers in Einheiten von 10²⁴ kg: die Erde hat 5,972, die Sonne 1 989 100.',
      'Der Bahnradius wird vom MITTELPUNKT des Körpers gemessen und nicht von der Oberfläche: 400 km über der Erde sind 6771 km.',
      'Die geostationäre Bahn liegt bei 42 164 km und ergibt genau einen Sterntag.',
      'Die Umläufe je Tag helfen beim Abgleich mit einem Überflugplan.',
    ],
    howItWorks: 'T = 2π√(r³/GM) mit G = 6,6743·10⁻¹¹, und die Bahngeschwindigkeit ist v = √(GM/r).',
    example: 'Eine Bahn mit 6771 km um die Erde dauert 5545 Sekunden — rund anderthalb Stunden.',
    faq: [
      { q: 'Warum wird der Radius vom Mittelpunkt gemessen?', a: 'Weil die Schwerkraft vom Abstand zum Massenmittelpunkt abhängt. Ein Satellit in 400 km Höhe sitzt auf einem Radius von 6371 + 400 = 6771 km, und allein die Höhe einzusetzen wäre um ein Mehrfaches falsch.' },
      { q: 'Wie unterscheidet sich das von der Zentripetalkraft?', a: 'Jene nimmt die Umlaufzeit aus einer gegebenen Geschwindigkeit. Hier folgt die Geschwindigkeit aus der Zentralmasse, es genügt also zu wissen, was du umkreist und auf welchem Radius.' },
      { q: 'Warum liegt die geostationäre Bahn bei 42 164 km?', a: 'Weil die Umlaufzeit dort dem Sterntag entspricht — 23 Stunden 56 Minuten. Nur dort steht ein Satellit über einem Punkt des Äquators.' },
      { q: 'Zählt die Masse des Satelliten?', a: 'Nein, und das ist keine Vereinfachung: sie taucht in der Formel überhaupt nicht auf. Ein schwerer und ein leichter Satellit auf derselben Bahn teilen dieselbe Umlaufzeit.' },
    ],
  },
  'pendulum': {
    longDescription: 'In der Formel steht keine Masse — das Erste, was überrascht: ein schwerer und ein leichter Körper an demselben Faden schwingen mit derselben Dauer. Es steht aber g darin, weshalb das Pendel das erste genaue Gerät zu seiner Messung war. Die Schwingungsdauer wächst mit der Wurzel der Länge: sie zu verdoppeln braucht die vierfache Fadenlänge — daher misst ein Sekundenpendel rund 25 Zentimeter und nicht den erwarteten Meter.',
    howToUse: [
      'Die Länge reicht bis zum Massenmittelpunkt des Pendelkörpers und nicht bis zum Aufhängepunkt.',
      'Die Fallbeschleunigung ist einstellbar: 1,62 auf dem Mond, 3,72 m/s² auf dem Mars.',
      'Die Formel gilt für kleine Ausschläge: über rund 15° wächst die Dauer merklich.',
      'Die Masse des Pendelkörpers wirkt sich nicht auf die Dauer aus — sie steht nicht in der Formel.',
    ],
    howItWorks: 'T = 2π√(L/g); Frequenz = 1/T.',
    example: 'Ein Faden von einem Meter schwingt mit einer Dauer von 2,006 s — beinahe zwei Sekunden und nicht eine.',
    faq: [
      { q: 'Warum wirkt sich die Masse nicht auf die Dauer aus?', a: 'Ein schwererer Körper wird stärker gezogen, ist aber genau so viel schwerer zu beschleunigen. Die Masse geht sowohl in die Kraft als auch in die Trägheit ein und kürzt sich heraus — genauso wie beim freien Fall.' },
      { q: 'Wie lang ist ein Sekundenpendel?', a: 'Rund 24,8 Zentimeter bei irdischer Fallbeschleunigung. Ein Faden von einem Meter braucht beinahe zwei Sekunden: die Dauer folgt der Wurzel der Länge, ein Viertel der Länge ist also doppelt so schnell.' },
      { q: 'Warum nur kleine Ausschläge?', a: 'Die Formel ersetzt den Sinus des Winkels durch den Winkel selbst, eine Näherung, die nur nahe null gilt. Bei 30° Ausschlag ist die Dauer schon rund 1,7 % länger, bei 90° rund 18 %.' },
      { q: 'Wie wurde g mit einem Pendel gemessen?', a: 'Durch Messen von Länge und Dauer und Auflösen der Formel. Das Verfahren erreichte Bruchteile eines Prozents und zeigte, dass die Schwerkraft am Äquator schwächer ist als an den Polen.' },
    ],
  },
  'photon-energy': {
    longDescription: 'Die Photonenenergie ist der Wellenlänge umgekehrt proportional: blaues Licht trägt die doppelte Energie von rotem, und Ultraviolett vermag bereits chemische Bindungen zu brechen — daher Sonnenbrand und Ausbleichen. Die Größe ist winzig, rund 10⁻¹⁹ Joule, die Hauptantwort steht deshalb in Exponentialform, mit demselben Ergebnis in Elektronenvolt daneben, wo es als Zahl in der Größenordnung eins herauskommt.',
    howToUse: [
      'Wellenlänge in Nanometern: sichtbares Licht reicht grob von 380 bis 780 nm.',
      'Für Röntgen- und Gammastrahlung nimm Bruchteile eines Nanometers — die Rechnung gilt auch dort.',
      'Elektronenvolt sind handlicher als Joule: sichtbares Licht liegt bei 1,6–3,3 eV.',
      'Die Wellenzahl in reziproken Zentimetern ist die Einheit der Spektroskopie.',
    ],
    howItWorks: 'E = hc/λ, mit h = 6,62607015·10⁻³⁴ J·s und c = 299 792 458 m/s.',
    example: 'Grünes Licht bei 550 nm trägt 3,612·10⁻¹⁹ J, also 2,254 eV.',
    faq: [
      { q: 'Warum ist Ultraviolett schädlicher als sichtbares Licht?', a: 'Weil die Photonenenergie der Wellenlänge umgekehrt proportional ist. Bei 300 nm sind es rund 4,1 eV — genug, um viele chemische Bindungen zu brechen; rotes Licht hat 1,8 eV, und ein solches Photon bricht keine Bindung, wie viele auch eintreffen.' },
      { q: 'Hängt die Photonenenergie von der Helligkeit ab?', a: 'Nein. Die Helligkeit ist die Zahl der Photonen je Sekunde, während die Energie jedes Photons allein aus der Wellenlänge folgt. Genau das erklärt den photoelektrischen Effekt: schwaches Ultraviolett löst Elektronen aus, starkes rotes Licht nicht.' },
      { q: 'Was ist ein Elektronenvolt?', a: 'Die Energie, die ein Elektron beim Durchlaufen eines Volts gewinnt: 1,602·10⁻¹⁹ J. In diesen Einheiten kommen Photonenenergien, Bindungsenergien und Niveaus als Zahlen der Größenordnung eins heraus statt als Zehnerpotenzen.' },
      { q: 'Wie hängen Energie und Frequenz zusammen?', a: 'Unmittelbar: E = hν. Wellenlänge und Frequenz sind über die Lichtgeschwindigkeit verbunden, zwei beliebige der drei legen also die dritte fest.' },
    ],
  },
  'physics-power': {
    longDescription: 'Verbindet Arbeit mit Zeit: die Leistung sagt, wie schnell Arbeit verrichtet wird, und nicht, wie viel davon. Dieselbe Arbeit kann eine Sekunde oder eine Stunde dauern — die Arbeit ist dieselbe, die Leistung unterscheidet sich um den Faktor 3600. Gemeint ist der mechanische Sinn: die Arbeit einer Kraft und nicht die elektrische Leistung, für die es das ohmsche Gesetz und eine eigene Seite gibt.',
    howToUse: [
      'Wähle die gesuchte Größe.',
      'Trage die beiden anderen in SI-Einheiten ein.',
      'Lies das Ergebnis ab — die Leistung erscheint auch in Pferdestärken.',
    ],
    howItWorks: 'P = W ÷ t, daraus t = W ÷ P und W = P · t. Eine metrische Pferdestärke sind 735,49875 W.',
    example: 'Eine Arbeit von 1000 J in 10 s entspricht einer Leistung von 100 W.',
    faq: [
      { q: 'Wie unterscheidet sich Leistung von Arbeit?', a: 'Die Arbeit ist, wie viel verrichtet wurde; die Leistung ist, wie schnell. Dieselbe Arbeit kann langsam bei kleiner Leistung oder schnell bei großer verrichtet werden.' },
      { q: 'Ist das dieselbe Leistung wie in der Elektrotechnik?', a: 'Dieselbe Größe und dieselbe Einheit — das Watt. Hier folgt sie aus mechanischer Arbeit; für einen Stromkreis wird die Leistung auf einer eigenen Seite aus Spannung und Strom berechnet.' },
      { q: 'Warum wird eine Zeit von null abgewiesen?', a: 'Die Leistung ist Arbeit geteilt durch Zeit. In null Zeit wird keine Arbeit verrichtet, und die Division hat keinen Wert.' },
      { q: 'Warum erscheint die Leistung auch in Pferdestärken?', a: 'Zur Anschauung: Watt sind das, womit Geräte angegeben werden, während die Leistung von Motoren meist in Pferdestärken genannt wird. Verwendet wird die metrische — 735,49875 W und nicht die mechanische 745,7.' },
    ],
  },
  'physics-torque': {
    longDescription: 'Berechnet das Drehmoment als τ = F·r·sin θ. Das ist die Berechnung einer physikalischen Größe und keine Einheitenumrechnung — der Umrechner für Drehmomenteinheiten ist eine eigene Seite, die eine bereits bekannte Zahl nur umskaliert. Der Winkel zwischen Kraft und Hebel zählt erheblich: im rechten Winkel ist das Drehmoment am größten, und bei null zieht die Kraft entlang des Hebels und dreht ihn überhaupt nicht. Diese Null ist hier genau und kein Rest aus dem Sinus.',
    howToUse: [
      'Trage die Kraft in Newton ein.',
      'Gib die Hebellänge in Metern an.',
      'Setze den Winkel zwischen Kraft und Hebel.',
    ],
    howItWorks: 'τ = F · r · sin θ, wobei der Winkel ausdrücklich ins Bogenmaß umgerechnet wird. Das Produkt r·sin θ ist der wirksame Hebelarm — der Abstand von der Achse zur Wirkungslinie —, und das Drehmoment ist die Kraft mal ihm.',
    example: 'Eine Kraft von 50 N an einem Hebel von 0,3 m ergibt im rechten Winkel 15 N·m; bei 30° die Hälfte davon, 7,5 N·m.',
    faq: [
      { q: 'Wie unterscheidet sich das vom Drehmomentumrechner?', a: 'Der Umrechner rechnet ein bereits bekanntes Drehmoment zwischen Newtonmetern und anderen Einheiten um. Hier wird das Drehmoment aus Kraft, Hebel und Winkel berechnet — eine andere Aufgabe.' },
      { q: 'Warum ist das Drehmoment bei einem Winkel von null gleich null?', a: 'Weil die Kraft entlang des Hebels wirkt und ihn nur zieht, ohne ihn zu drehen. Der Sinus von null ist null, und diese Null ist hier genau und kein Rest der binären Arithmetik.' },
      { q: 'Was ist der wirksame Hebelarm?', a: 'Der Abstand von der Drehachse zur Wirkungslinie der Kraft, also r·sin θ. Das Drehmoment ist die Kraft mal ihm und wächst mit ihm.' },
      { q: 'Bei welchem Winkel ist das Drehmoment am größten?', a: 'Bei 90 Grad: der Sinus ist eins, und die ganze Kraft arbeitet am Drehen. Genau deshalb wird ein Schraubenschlüssel senkrecht gehalten.' },
    ],
  },
};
