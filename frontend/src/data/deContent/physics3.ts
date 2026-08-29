import type { DeDetailedContent } from './types';

export const dePhysics3Content: Partial<Record<string, DeDetailedContent>> = {
  'free-fall': {
    longDescription: 'Löst einen Fall von beiden Enden: aus der Höhe, wie lange er dauert und wie schnell der Körper den Boden trifft; aus der Zeit, welchen Weg er zurücklegt. Die Fallbeschleunigung ist ein Feld, weil sie auf dem Mond 1,62 und auf dem Mars 3,72 beträgt, während die Formel dieselbe bleibt. Der Luftwiderstand ist nicht enthalten, und das wird klar gesagt: bei einem Stein aus zehn Metern ist der Unterschied klein, bei einem Blatt Papier ist die Rechnung schlicht falsch, und ein Fallschirmspringer erreicht seine Endgeschwindigkeit und beschleunigt nicht weiter.',
    howToUse: [
      'Wähle, was du kennst: die Höhe oder die Fallzeit.',
      'Lass die Fallbeschleunigung bei den 9,80665 der Erde oder setze 1,62 für den Mond und 3,72 für den Mars.',
      'Die Aufprallgeschwindigkeit ist in beiden Modi die Hauptantwort: der Modus ändert, was bekannt ist, und nicht, was gefragt wird.',
      'Denk an die Luft: bei leichten oder flatternden Gegenständen setzt das die Geschwindigkeit zu hoch an.',
    ],
    howItWorks: 'h = g·t²/2, daraus t = √(2h/g), und die Aufprallgeschwindigkeit ist v = g·t.',
    example: 'Ein Fall aus zwanzig Metern dauert 2,02 Sekunden und endet bei 19,8 m/s — das sind 71 km/h.',
    faq: [
      { q: 'Hängt die Fallgeschwindigkeit von der Masse ab?', a: 'Ohne Luft nicht: eine Feder und ein Stein fallen gleich, und die Masse taucht in der Formel nicht auf. Mit Luft ist der Unterschied riesig, aber das ist dann kein freier Fall mehr.' },
      { q: 'Warum wächst die Höhe mit dem Quadrat der Zeit?', a: 'Weil die Geschwindigkeit gleichmäßig aufwächst und der zurückgelegte Weg die Fläche unter dem Geschwindigkeitsverlauf ist. In zwei Sekunden fällt ein Körper viermal so weit wie in einer.' },
      { q: 'Lässt sich damit ein Fallschirmsprung abbilden?', a: 'Nur die ersten Sekunden. Danach hält der Luftwiderstand dem Gewicht die Waage, die Geschwindigkeit pendelt sich nahe 55 m/s ein und wächst nicht weiter, während die Rechnung sie weiter erhöhen würde.' },
      { q: 'Woher kommen die 9,80665?', a: 'Es ist der vereinbarte Normwert für Rechnungen. Die wirkliche Fallbeschleunigung reicht von 9,78 am Äquator bis 9,83 an den Polen und nimmt mit der Höhe leicht ab.' },
    ],
  },
  'gravitational-force': {
    longDescription: 'Die Gravitationskonstante ist winzig, und genau deshalb ziehen sich alltägliche Gegenstände nicht sichtbar an: zwei Tonnen in zwei Metern Abstand ziehen mit rund 1,7·10⁻⁵ Newton, dem Gewicht eines Staubkorns. Die Schwerkraft wird erst bei Planetenmassen bemerkbar, weshalb die Exponentialschreibweise hier keine Verzierung ist, sondern die einzige Art, beide Enden des Bereichs auf einer Seite zu zeigen. Die Beschleunigung des ersten Körpers steht gesondert, weil die Kraft auf beide Körper gleich ist, ihre Beschleunigungen aber nicht — und diese Ungleichheit ist der ganze Grund, warum der Apfel fällt und nicht die Erde ihm entgegensteigt.',
    howToUse: [
      'Trage die beiden Massen in Kilogramm ein.',
      'Trage den Abstand ihrer Mittelpunkte in Metern ein.',
      'Für einen Körper auf einem Planeten nimmst du den Planetenradius und nicht die Höhe über dem Boden.',
      'Lies die Zeile mit der Beschleunigung, um die Wirkung auf den ersten Körper zu sehen.',
    ],
    howItWorks: 'F = G × m₁ × m₂ ÷ r², mit G = 6,674·10⁻¹¹ N·m²/kg². Die Beschleunigung des ersten Körpers ist diese Kraft geteilt durch seine eigene Masse, was sich zu G × m₂ ÷ r² vereinfacht.',
    example: 'Zwei Schiffe zu je 50 000 Tonnen ziehen sich in hundert Metern Abstand mit 16,685 N an.',
    faq: [
      { q: 'Warum wird der Abstand zwischen den Mittelpunkten gemessen?', a: 'Weil ein kugelsymmetrischer Körper so anzieht, als säße seine ganze Masse in seinem Mittelpunkt. Für einen Menschen auf der Erde heißt das der Planetenradius von rund 6371 km und nicht seine Körpergröße.' },
      { q: 'Warum ist die Kraft auf beide Körper gleich?', a: 'Weil die Schwerkraft gegenseitig ist und die Formel in beiden Massen symmetrisch. Verschieden ist die Beschleunigung, denn jeder Körper teilt dieselbe Kraft durch seine eigene Masse.' },
      { q: 'Wie ändert sich die Kraft mit dem Abstand?', a: 'Mit dem Kehrwert des Quadrats. Der doppelte Abstand viertelt die Kraft, der dreifache lässt ein Neuntel — weshalb die Bahnmechanik so empfindlich auf die Höhe reagiert.' },
      { q: 'Warum spüre ich die Anziehung naher Gegenstände nie?', a: 'Weil G bei rund 6,674·10⁻¹¹ liegt. Zwei Menschen in einem Meter Abstand ziehen sich mit rund 10⁻⁷ Newton an, tausendfach schwächer als die Reibung, die ihre Schuhe festhält.' },
    ],
  },
  'half-life': {
    longDescription: 'Eine Halbwertszeit ist keine Haltbarkeit, sondern die Zeit, in der genau die Hälfte des Vorhandenen verschwindet, und sie gilt auf jedem Abschnitt: zwei Halbwertszeiten lassen ein Viertel, drei ein Achtel. Null wird nie erreicht, die Frage wird deshalb umgekehrt gestellt — wie lange bis zu einem bestimmten Rest. Beide Modi hier sind zwei Seiten einer Gleichung. Die mittlere Lebensdauer steht gesondert: sie und nicht die Halbwertszeit taucht in der Formel für die Aktivität auf.',
    howToUse: [
      'Der Modus „Rest nach einer Zeit“ beantwortet, wie viel übrig ist; „Zeit bis zu einem Rest“ beantwortet, wie lange zu warten ist.',
      'Jede Zeiteinheit geht, solange es dieselbe ist: eine Halbwertszeit in Jahren bedeutet die verstrichene Zeit in Jahren.',
      'Kohlenstoff-14 hat eine Halbwertszeit von 5730 Jahren, Iod-131 rund 8 Tage, Caesium-137 rund 30 Jahre.',
      'Die mittlere Lebensdauer ist das 1,44-Fache der Halbwertszeit; die Formel für die Aktivität nutzt die mittlere Lebensdauer.',
    ],
    howItWorks: 'N = N₀·(1/2)^(t/T); der umgekehrte Modus ergibt t = T·ln(N₀/N)/ln2; mittlere Lebensdauer τ = T/ln2.',
    example: 'Zwei Halbwertszeiten von Kohlenstoff-14 bringen 100 g auf 25 g herunter.',
    faq: [
      { q: 'Warum verschwindet die Substanz nie ganz?', a: 'Jeder Zeitraum nimmt die Hälfte des Verbliebenen, und die Hälfte von etwas ist immer mehr als nichts. In der Praxis bleibt nach zehn Zeiträumen ein Tausendstel und wird vernachlässigt, rechnerisch wird die Null aber nie erreicht.' },
      { q: 'Wie unterscheidet sich die mittlere Lebensdauer von der Halbwertszeit?', a: 'Die mittlere Lebensdauer ist die Halbwertszeit geteilt durch den natürlichen Logarithmus von zwei, also rund 1,44-mal länger. Beides wird leicht verwechselt, und die Formel für die Aktivität nutzt die mittlere Lebensdauer.' },
      { q: 'Kann ich andere Einheiten verwenden?', a: 'Ja — jede Zeiteinheit geht, solange Halbwertszeit und verstrichene Zeit dieselbe teilen. Die Feldbeschriftungen nennen Jahre, aber die Rechnung hängt nicht daran.' },
      { q: 'Warum darf der Rest die Ausgangsmenge nicht übersteigen?', a: 'Weil der Zerfall nur Material entfernt. Ein solches Zahlenpaar bedeutet einen Tippfehler, und eine negative Zeit in der Antwort wäre schlechter als eine Verweigerung.' },
    ],
  },
  'heat-index': {
    longDescription: 'Ermittelt den Hitzeindex — die Temperatur, die ein Mensch bei gegebener Feuchte tatsächlich spürt. Feuchte Luft hindert den Schweiß am Verdunsten, und der Körper verliert seinen wichtigsten Weg, Wärme loszuwerden: bei 32 °C und 70 % Feuchte entspricht die Empfindung vierzig Grad trockener Luft. Die Rechnung nutzt die vollständige Regression mit neun Gliedern, die der US-Wetterdienst veröffentlicht hat, und gilt ab 26,7 °C; darunter beschreibt die Formel keine Empfindung mehr, die Seite verweigert also, statt zu extrapolieren.',
    howToUse: [
      'Trage die im Schatten gemessene Lufttemperatur ein.',
      'Gib die relative Luftfeuchte in Prozent an.',
      'Vergleiche den Zuschlag mit dem Thermometer: dieser Abstand ist der Beitrag der Feuchte.',
      'Achte auf den Bereich: unter 26,7 °C ist der Hitzeindex nicht festgelegt.',
    ],
    howItWorks: 'Die Temperatur wird in Fahrenheit umgerechnet, in eine Regression mit neun Gliedern in Temperatur und Feuchte gegeben und das Ergebnis zurück nach Celsius gerechnet.',
    example: 'Bei 32 °C und 70 % Feuchte fühlt sich die Luft wie 40,409 °C an — 8,409 Grad über dem Thermometer.',
    faq: [
      { q: 'Warum ändert die Feuchte die Empfindung so stark?', a: 'Weil der Körper durch verdunstenden Schweiß kühlt. In feuchter Luft verdunstet der Schweiß schlecht, die Wärmeabgabe fällt, und dieselbe Temperatur wird weit schwerer erträglich.' },
      { q: 'Warum verweigert er unter 26,7 °C?', a: 'Weil die Regression an Daten ab 80 °F angepasst wurde. Darunter liefert sie Zahlen, die keine Empfindung mehr beschreiben, und sie zu zeigen gäbe Extrapolation als Messung aus.' },
      { q: 'Wie unterscheidet sich der Hitzeindex vom Windchill?', a: 'Sie decken entgegengesetzte Bedingungen ab. Der Hitzeindex beschreibt Hitze mit Feuchte; der Windchill beschreibt Kälte mit Wind.' },
      { q: 'Wo soll die Temperatur gemessen werden?', a: 'Im Schatten, fern von erwärmten Flächen. In der prallen Sonne liegt die Empfindung noch mehrere Grad höher, und die Regression berücksichtigt das nicht.' },
    ],
  },
  'hooke-law': {
    longDescription: 'Löst das hookesche Gesetz in die Richtung, die du brauchst: welche Kraft eine bekannte Feder bei gewählter Stauchung aufbringt, wie weit eine bekannte Kraft sie staucht und welche Konstante eine Feder für ein gegebenes Paar haben muss. Neben der Antwort steht die gespeicherte Energie, die die Kraft allein nie zeigt: verdopple die Stauchung, und die Kraft verdoppelt sich, während die Energie sich vervierfacht. Das Gesetz ist nur bis zur Elastizitätsgrenze linear — darüber hinaus kehrt die Feder nicht in ihre ursprüngliche Länge zurück, und die Formel beschreibt nicht mehr, was geschieht.',
    howToUse: [
      'Wähle, welche der drei Größen du suchst.',
      'Trage die beiden anderen ein — die gesuchte wird schreibgeschützt.',
      'Gib die Auslenkung in Metern an: 5 cm sind 0,05.',
      'Stauchung und Dehnung arbeiten gleich; das Vorzeichen zeigt allein die Richtung.',
    ],
    howItWorks: 'Die elastische Kraft ist der Verformung proportional: F = k·x. Die gespeicherte Energie ist das halbe Produkt aus Kraft und Verformung, also k·x² ÷ 2.',
    example: 'Eine Feder mit 200 N/m drückt bei 5 cm Stauchung mit 10 N und speichert 0,25 J.',
    faq: [
      { q: 'Wie unterscheidet sich das vom zweiten newtonschen Gesetz?', a: 'Dort verbindet die Kraft Masse und Beschleunigung eines Körpers. Hier verbindet sie die Verformung eines elastischen Bauteils. Gemeinsam ist allein der Buchstabe F.' },
      { q: 'Warum wächst die Energie schneller als die Kraft?', a: 'Weil die Kraft linear in der Verformung ist und die Energie quadratisch. Doppelte Stauchung gibt doppelte Kraft und vierfache Energie.' },
      { q: 'Wie weit gilt das Gesetz?', a: 'Bis zur Elastizitätsgrenze des Werkstoffs. Darüber hinaus kehrt die Feder nicht mehr in ihre ursprüngliche Länge zurück, der Zusammenhang ist nicht mehr linear, und diese Rechnung kann das nicht erkennen.' },
      { q: 'Was bedeutet ein negatives Vorzeichen?', a: 'Allein die Richtung. Stauchung und Dehnung folgen einer Formel, und der Betrag der Kraft hängt nicht vom Vorzeichen ab.' },
    ],
  },
  'humidity-convert': {
    longDescription: 'Die relative Luftfeuchte allein sagt nichts über die Wassermenge: 50 % bei fünf Grad und 50 % bei dreißig unterscheiden sich um das Vierfache in der Feuchte. Genau deshalb sind Wohnungen im Winter trocken — Außenluft mit 90 % bei −10 °C, auf +22 °C erwärmt, kommt bei rund zehn Prozent heraus. Die absolute Luftfeuchte beantwortet die Frage unmittelbar, während die Wasserbeladung in Gramm je Kilogramm das ist, was die Auslegung von Entfeuchtern und Lüftung tatsächlich braucht.',
    howToUse: [
      'Nimm Temperatur und relative Luftfeuchte von einem Hygrometer.',
      'Die Zeile zum Höchstwert zeigt, wie viel Wasser die Luft bei dieser Temperatur überhaupt halten kann.',
      'Die Wasserbeladung in Gramm je Kilogramm trockener Luft ist das, womit Entfeuchter ausgelegt werden.',
      'Der Druck wirkt schwach und zählt vor allem für die Wasserbeladung.',
    ],
    howItWorks: 'Sättigungsdruck nach Tetens, absolute Luftfeuchte = 216,7·p_Dampf/T.',
    example: 'Bei 20 °C und 50 % Feuchte enthält ein Kubikmeter rund 8,65 Gramm Wasser.',
    faq: [
      { q: 'Warum sind Wohnungen im Winter trocken?', a: 'Kalte Luft kann körperlich nicht viel Feuchte halten. Außenluft bei −10 °C und 90 % trägt rund zwei Gramm je Kubikmeter; auf +22 °C erwärmt könnte sie neunzehn halten, dasselbe Wasser liest sich also als rund zehn Prozent relative Feuchte.' },
      { q: 'Warum ist die absolute Feuchte nützlicher als die relative?', a: 'Sie hängt nicht von der Temperatur ab und nennt die Wassermenge unmittelbar. Die relative Feuchte ist ein Anteil am Höchstwert, derselbe Prozentsatz bedeutet bei verschiedenen Temperaturen also völlig verschiedene Feuchte.' },
      { q: 'Was ist die Wasserbeladung?', a: 'Gramm Wasser je Kilogramm trockener Luft. Anders als die absolute Feuchte ändert sie sich beim Erwärmen oder Abkühlen ohne Kondensation nicht, weshalb Lüftungsrechnungen sie verwenden.' },
      { q: 'Wie hängt das mit dem Taupunkt zusammen?', a: 'Der Taupunkt ist die Temperatur, bei der der derzeitige Dampfdruck zum Sättigungsdruck wird. Es ist eine andere Art, dieselbe Größe anzugeben: mehr Wasser in der Luft bedeutet einen höheren Taupunkt.' },
    ],
  },
  'hydrostatic-pressure': {
    longDescription: 'Ermittelt den Druck, den eine Flüssigkeitssäule erzeugt: p = ρgh. Er hängt weder von der Form des Gefäßes noch von seinem Volumen ab — allein von Dichte, Tiefe und der Normfallbeschleunigung, die mit 9,80665 angesetzt wird. Ein äußerer Druck darüber ist freiwillig: ohne ihn ist das Ergebnis der Überdruck der Säule, mit ihm der absolute Druck, und der Rechner sagt, welcher — denn beides zu verwechseln ist ein Fehler von genau einer Atmosphäre.',
    howToUse: [
      'Trage die Dichte der Flüssigkeit ein: Süßwasser hat 1000 kg/m³.',
      'Gib die Tiefe an.',
      'Ergänze den äußeren Druck, wenn du ihn brauchst — der Luftdruck sind 101 325 Pa.',
    ],
    howItWorks: 'p = ρ·g·h mit g = 9,80665 m/s². Ein äußerer Druck wird zum Ergebnis addiert. Weder die Form des Gefäßes noch sein Volumen geht in die Formel ein: in derselben Tiefe ist der Druck in einem See derselbe wie in einem engen Rohr.',
    example: 'Zehn Meter Süßwasser ergeben einen Säulendruck von 98 066,5 Pa — beinahe eine Atmosphäre.',
    faq: [
      { q: 'Hängt der Druck von der Form des Gefäßes ab?', a: 'Nein. In die Formel gehen allein Dichte und Tiefe ein, in derselben Tiefe ergeben ein enges Rohr und ein weites Becken also denselben Druck — das hydrostatische Paradoxon.' },
      { q: 'Wie unterscheidet sich Überdruck von absolutem Druck?', a: 'Der Überdruck wird vom Luftdruck aus gemessen, der absolute von null. Ohne äußeren Druck ist das Ergebnis der Überdruck; addiere 101 325 Pa für den absoluten.' },
      { q: 'Welche Dichte soll ich nehmen?', a: 'Süßwasser hat 1000 kg/m³, Meerwasser rund 1025, Diesel etwa 840. Sie wird eingetragen, weil sie von Temperatur und Zusammensetzung abhängt.' },
      { q: 'Wie unterscheidet sich das vom Druckrechner?', a: 'Jener behandelt den Druck als Kraft geteilt durch Fläche. Hier entsteht der Druck aus dem Gewicht einer Flüssigkeitssäule, und die Tiefe geht in die Formel ein statt einer Berührfläche.' },
    ],
  },
};
