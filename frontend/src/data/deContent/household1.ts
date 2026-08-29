import type { DeDetailedContent } from './types';

export const deHousehold1Content: Partial<Record<string, DeDetailedContent>> = {
  'abv-alcohol': {
    longDescription: 'Hefe macht aus Zucker Alkohol, und die Dichte fällt: Zucker ist schwerer als Wasser, Alkohol leichter. Der Dichteabfall ist das Maß des vergorenen Zuckers, und der Faktor rechnet ihn in Volumenprozent Alkohol um. Der Vergärungsgrad steht daneben — welcher Anteil des Zuckers tatsächlich gegangen ist — und er erklärt, warum zwei Würzen gleicher Anfangsdichte Getränke verschiedener Stärke und verschiedener Süße ergeben können.',
    howToUse: [
      'Lies die Dichte mit einer Spindel bei ihrer Eichtemperatur ab oder rechne eine Korrektur ein.',
      'Nimm die Anfangsdichte vor dem Anstellen der Hefe und die Enddichte, wenn die Gärung steht.',
      'Der Faktor 131,25 ist der gebräuchlichste; die verwendeten Verfahren reichen von 129 bis 135.',
      'Nach dem Brennen gilt das nicht — dort wird die Stärke mit einer Alkoholspindel gemessen.',
    ],
    howItWorks: 'Alkoholgehalt = (Anfangsdichte − Enddichte) × Faktor.',
    example: 'Eine Würze von 1,050, auf 1,010 vergoren, ergibt 5,25 % und 80 % Vergärungsgrad.',
    faq: [
      { q: 'Warum fällt die Dichte während der Gärung?', a: 'In Wasser gelöster Zucker macht es schwerer, während Alkohol leichter ist als Wasser. Die Hefe tauscht das erste gegen das zweite, die Dichte fällt also doppelt — und dieser Abfall verrät, wie viel Alkohol entstanden ist.' },
      { q: 'Was sagt mir der Vergärungsgrad?', a: 'Welcher Anteil des ursprünglichen Zuckers vergoren ist. Achtzig Prozent sind ein gewöhnliches Ergebnis beim Bier; weniger bedeutet Restsüße, mehr bedeutet, dass das Getränk trocken geworden ist.' },
      { q: 'Warum unterscheiden sich die Faktoren?', a: 'Der Zusammenhang zwischen Dichteabfall und Stärke ist nicht linear, und jedes Verfahren nähert ihn auf eigene Weise an. Bei gewöhnlichen Dichten ist die Streuung klein, bei starken Würzen erreicht sie ein halbes Prozent.' },
      { q: 'Ist eine Temperaturkorrektur nötig?', a: 'Ja. Eine Spindel ist auf eine Temperatur geeicht, meist 20 °C. Eine warme Würze abzulesen ergibt einen zu niedrigen Wert und damit eine falsche Stärke.' },
    ],
  },
  'alcohol-units': {
    longDescription: 'Rechnet eine Portion eines Getränks in reinen Alkohol und in Standardeinheiten um. Die Festlegung der Einheit wird von Hand eingetragen, weil sie sich von Land zu Land unterscheidet: zehn Gramm in Großbritannien und Australien, vierzehn in den USA, zwölf in Frankreich, zehn bis zwölf im deutschsprachigen Raum — eine davon fest einzubauen gäbe eine örtliche Übereinkunft als Physik aus. Gezählt wird, was im Glas war, und nicht, wie betrunken jemand ist: die Blutalkoholkonzentration hängt von Körpergewicht, Geschlecht, Trinktempo und dem Mageninhalt ab, und nichts davon geht hier ein.',
    howToUse: [
      'Trage die Menge der Portion in Millilitern ein.',
      'Gib die Stärke vom Etikett an.',
      'Setze die Festlegung deines Landes: 10 g in Großbritannien, 14 g in den USA.',
      'Für mehrere Portionen addiere die Einheiten jeder einzelnen.',
    ],
    howItWorks: 'Reiner Alkohol nach Volumen = Menge × Stärke ÷ 100. Nach Masse ist es dieses Volumen × 0,789 g/ml, die Dichte von Ethanol. Einheiten = Masse geteilt durch die Festlegung der Einheit.',
    example: 'Ein Glas Wein von 150 ml mit 12 % enthält 18 ml Alkohol, nach Masse 14,2 g — bei einer Festlegung von 10 g sind das 1,42 Standardeinheiten.',
    faq: [
      { q: 'Warum trage ich die Festlegung der Einheit selbst ein?', a: 'Weil sie sich unterscheidet: 10 g in Großbritannien und Australien, 14 g in den USA, 12 g in Frankreich. Es gibt hier keinen einheitlichen physikalischen Wert — es ist eine Übereinkunft der Gesundheitspolitik.' },
      { q: 'Zeigt das den Rausch an?', a: 'Nein. Der Blutalkohol hängt von Körpergewicht, Geschlecht, Trinktempo und Essen ab. Hier wird allein ausgerechnet, wie viel Alkohol im Getränk war.' },
      { q: 'Warum unterscheiden sich Masse und Volumen des Alkohols?', a: 'Weil Ethanol leichter ist als Wasser: seine Dichte beträgt 0,789 g/ml. Achtzehn Milliliter Alkohol wiegen rund vierzehn Gramm.' },
      { q: 'Wie zähle ich einen ganzen Abend?', a: 'Addiere die Einheiten jeder Portion. Hier geht es um eine Portion, und sie lassen sich unmittelbar zusammenzählen.' },
    ],
  },
  'aquarium-water-change': {
    longDescription: 'Ein Becken mit der Angabe hundert Liter fasst nie hundert Liter Wasser: Kies, Steine und Wurzeln nehmen ihren Anteil ein, und der Wasserstand liegt unter dem Rand. Dieser Unterschied zählt zweifach. Bereitest du den Wechsel nach der Angabe vor, schleppst du mehr Wasser, als das Becken aufnehmen kann; dosierst du den Aufbereiter nach der Angabe, überdosierst du jedes Mal, denn die Dosierung folgt dem Wasser und nicht dem Glas. Dieser Rechner zieht zuerst den verdrängten Anteil ab und wendet den Wechselanteil dann auf das an, was tatsächlich Wasser ist.',
    howToUse: [
      'Trage das angegebene Volumen des Beckens in Litern ein.',
      'Trage den Anteil Wasser ein, den du wechseln willst.',
      'Schätze, welchen Anteil des Beckens Bodengrund, Steine und Einrichtung einnehmen.',
      'Nutze das Ergebnis sowohl für das vorzubereitende Wasser als auch für die Dosierung des Aufbereiters.',
    ],
    howItWorks: 'Nettowasser = Beckenvolumen × (1 − verdrängter Anteil). Der Wechsel ist diese Nettomenge mal dem Wechselanteil; was zurückbleibt, ist der Rest.',
    example: 'Ein Becken mit 240 Litern, bei dem 12 % auf den Bodengrund entfallen, hält 211,2 Liter Wasser; ein Wechsel von 25 % sind 52,8 Liter.',
    faq: [
      { q: 'Welchen Anteil nimmt der Bodengrund gewöhnlich ein?', a: 'Eine dünne Sandschicht liegt bei rund fünf Prozent, ein bepflanztes Becken mit hohem Bodengrund und Hartmaterial kann fünfzehn bis zwanzig erreichen. Beim Einrichten einmal mit einem Eimer zu messen schlägt wöchentliches Schätzen.' },
      { q: 'Warum nicht den Aufbereiter nach der Beckenangabe dosieren?', a: 'Weil der Aufbereiter auf das Wasser wirkt und die Angabe das Glas zählt. In einem eingerichteten Becken läuft dieser Fehler auf ein Fünftel der Dosis hinaus, in Richtung Überdosierung.' },
      { q: 'Wie groß sollte ein regelmäßiger Wechsel sein?', a: 'Zwanzig bis dreißig Prozent wöchentlich passen zu den meisten Süßwasserbecken. Größere Wechsel dienen der Behebung von Problemen und brauchen frisches Wasser mit angepasster Temperatur und vorheriger Aufbereitung.' },
      { q: 'Zählt das Volumen des Filters mit?', a: 'Ein Außenfilter und seine Schläuche halten zusätzliches Wasser, das diese Zahl außer Acht lässt. Dosierst du nach dem Beckenvolumen, ist dieser Zusatz eher eine kleine Sicherheitsreserve als ein Fehler.' },
    ],
  },
  'bakers-percentage': {
    longDescription: 'In der Bäckerschreibweise gilt das Mehl immer als 100 %, und alles andere wird als Anteil des Mehls angegeben und nicht des fertigen Teigs. Deshalb ergeben die Prozentwerte zusammen mehr als hundert — das ist normal und kein Fehler: bei 68 % Hydratation wiegt der Teig rund 170 % des Mehls. Diese Schreibweise macht ein Rezept übertragbar, weil ihr gleich ist, ob du ein halbes Kilo oder zwanzig anrührst. Der Rechner macht aus diesen Prozentwerten Gramm für dein eigenes Mehlgewicht und weist die Hydratation gesondert aus, denn sie entscheidet, ob der Teig fest oder weich wird.',
    howToUse: [
      'Trage das Mehlgewicht ein — das sind die 100 %.',
      'Trage die übrigen Zutaten je Zeile ein.',
      'In jeder Zeile ist die letzte Zahl der Prozentwert vom Mehlgewicht.',
      'Nenne die Flüssigkeit „Wasser“, um einen Wert für die Hydratation zu bekommen.',
    ],
    howItWorks: 'Zutatengewicht = Mehl × Prozent ÷ 100. Teiggewicht = Mehl + Summe der Zutaten. Hydratation = Wassergewicht ÷ Mehlgewicht. Mehl steht nicht in der Liste: es hat ein eigenes Feld und ist immer 100 %.',
    example: '500 g Mehl bei 68 % Hydratation mit 2 % Salz und 1,2 % Hefe ergeben 856 g Teig.',
    faq: [
      { q: 'Warum ergeben die Prozentwerte zusammen mehr als 100?', a: 'Das ist Absicht. Es sind Anteile des Mehls und nicht des Teigs, Mehl 100 % plus Wasser 68 % plus Salz 2 % ergeben also 170 % — das Gewicht des Teigs im Verhältnis zum Mehl.' },
      { q: 'Was ist die Hydratation und was ändert sie?', a: 'Es ist das Verhältnis von Wasser zu Mehl. Unter 60 % ist der Teig fest und hält seine Form gut, 65–75 % sind der übliche Brotbereich, und über 80 % läuft er breit und will gefaltet statt geknetet werden.' },
      { q: 'Gehört das Mehl in die Zutatenliste?', a: 'Nein. Das Mehl hat ein eigenes Feld und ist definitionsgemäß 100 %. Es zusätzlich in die Liste zu setzen zählte es doppelt.' },
      { q: 'Wie berücksichtige ich einen Sauerteig, der schon Wasser enthält?', a: 'Streng genommen zerlegst du ihn in Mehl und Wasser und rechnest jedes der passenden Zeile zu — das nennt sich Gesamtformel. Fürs Backen zu Hause reicht meist eine Zeile für den Sauerteig, im Bewusstsein, dass die wahre Hydratation etwas höher liegt.' },
      { q: 'Gilt diese Schreibweise auch für süße Teige?', a: 'Ja. Butter, Zucker, Eier und Milch werden wie Wasser als Prozent des Mehls geschrieben. Nur die Bereiche ändern sich: süße Teige tragen oft je 10–20 % Fett und Zucker.' },
    ],
  },
  'brew-ratio': {
    longDescription: 'Löst die Brühgleichung in jede Richtung: die Kaffeedosis für eine Wassermenge, das Wasser für eine Dosis oder das Verhältnis selbst aus einer bereits gebrühten Tasse. Das Verhältnis wird als 1:16 geschrieben und meint Gramm Kaffee zu Millilitern Wasser. Es unterscheidet sich vom Hochrechnen eines Rezepts nach Portionen — das streckt eine ganze Zutatenliste, während hier genau zwei Größen verbunden sind und die umgekehrte Frage, welches Verhältnis ich tatsächlich gebrüht habe, ebenso gültig ist wie die vorwärts gerichtete.',
    howToUse: [
      'Wähle, was du suchst: die Dosis, das Wasser oder das Verhältnis.',
      'Trage die beiden bekannten Größen ein — die dritte wird schreibgeschützt.',
      'Für Handfilter und Filtermaschine nimm 1:15–1:17; für eine Pressstempelkanne 1:12–1:15.',
      'Achte auf die Zeile zum Satz: ein Teil des Wassers erreicht die Tasse nie.',
    ],
    howItWorks: 'Wasser = Kaffee × k, Kaffee = Wasser ÷ k, k = Wasser ÷ Kaffee. Ein Milliliter Wasser gilt als ein Gramm: bei Brühtemperatur liegt der Unterschied unter drei Prozent.',
    example: '500 ml Wasser brauchen bei einem Verhältnis von 1:16 genau 31,25 g Kaffee.',
    faq: [
      { q: 'Welches Verhältnis soll ich nehmen?', a: 'Handfilter und Filtermaschine liegen meist bei 1:15–1:17; eine Pressstempelkanne brüht stärker bei 1:12–1:15. Je gröber der Mahlgrad und je kürzer der Kontakt, desto niedriger geht k.' },
      { q: 'Warum ist in der Tasse weniger als eingegossen?', a: 'Weil gemahlener Kaffee rund zwei Gramm Wasser je Gramm Dosis zurückhält. Die Zeile zum Satz zeigt diesen Verlust.' },
      { q: 'Wie unterscheidet sich das vom Hochrechnen eines Rezepts?', a: 'Das Hochrechnen streckt eine ganze Zutatenliste auf eine neue Portionszahl. Hier sind genau zwei Größen verbunden, und jede von beiden darf die Unbekannte sein.' },
      { q: 'Gramm oder Milliliter für das Wasser?', a: 'Es spielt kaum eine Rolle: bei Brühtemperatur wiegt ein Milliliter rund ein Gramm, und der Unterschied ist kleiner als der Fehler einer Küchenwaage.' },
    ],
  },
  'calories-per-serving': {
    longDescription: 'Zählt die Kalorien eines Gerichts aus seinen Zutaten zusammen und teilt sie durch die Zahl der Portionen. Jede Zeile besteht aus einem Namen, einem Gewicht in Gramm und dem Kaloriengehalt je 100 Gramm, und die letzten beiden Zahlen werden als Gewicht und Kalorien gelesen, während alles davor als Name zählt — „Weizenmehl Type 405 300 364“ wird also auch mit Leerzeichen im Namen richtig verstanden. Eine Zeile ohne Kalorien wird abgewiesen statt mit einer Null gefüllt: eine eingesetzte Null setzte das Gericht still zu niedrig an. Die Tabelle zeigt, was jede Zutat beiträgt, und meist stellt sich heraus, dass eine von ihnen das meiste trägt.',
    howToUse: [
      'Trage die Zutaten je Zeile ein.',
      'In jeder Zeile sind die letzten beiden Zahlen das Gewicht in Gramm und die Kalorien je 100 g.',
      'Der Name darf mehrere Wörter haben: „Weizenmehl Type 405 300 364“.',
      'Trage ein, wie viele Portionen das Gericht ergibt.',
    ],
    howItWorks: 'Jede Zeile steuert Gramm ÷ 100 × Kalorien je 100 g bei. Ihre Summe sind die Kalorien des Gerichts und wird durch die Zahl der Portionen geteilt.',
    example: 'Mehl, Butter und Zucker mit zusammen 2390 kcal ergeben bei vier Portionen 597 kcal je Portion.',
    faq: [
      { q: 'Wo finde ich die Kalorien je 100 g?', a: 'Auf der Verpackung: Nährwertangaben nennen den Energiegehalt je 100 g. Nimm diese Zahl, wie sie ist; der Rechner skaliert sie mit dem eingetragenen Gewicht.' },
      { q: 'Ändert das Kochen das Ergebnis?', a: 'Wasser verdampft, Kalorien nicht. Trage die rohen Gewichte der Zutaten ein — das Gericht hat nach dem Kochen weniger Gramm, aber dieselben Kalorien.' },
      { q: 'Warum wird eine Zeile ohne Kalorien abgewiesen?', a: 'Weil eine eingesetzte Null das Gericht still zu niedrig ansetzte. Anzuhalten ist besser, als eine plausible und falsche Zahl zu zeigen.' },
      { q: 'Darf ich Gramm und Milliliter mischen?', a: 'Trage Gramm ein. Bei wasserähnlichen Flüssigkeiten liegen Milliliter und Gramm nah genug beieinander, bei Öl oder Honig aber nicht — wiege sie oder rechne vorher um.' },
      { q: 'Ist das dasselbe wie ein Rechner für Makronährstoffe?', a: 'Nein. Dieser zählt die Kalorien dessen zusammen, was du tatsächlich in den Topf gegeben hast. Ein Makrorechner teilt eine Tageszufuhr in Eiweiß, Fett und Kohlenhydrate auf.' },
    ],
  },
};
