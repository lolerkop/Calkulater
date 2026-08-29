// Подробный немецкий текст калькуляторов.
//
// Устроено так же, как украинский слой: общая оболочка достраивает страницу, а
// здесь лежит то, что у каждого калькулятора своё — объяснение механики, разбор
// примера и вопросы по этому конкретному инструменту. Без этого файла немецкая
// страница получила бы общий шаблон, а сотня одинаковых абзацев «Der Rechner
// wendet die Formel an» — это не локализация, а её имитация.
//
// Источник смысла — сам compute калькулятора и английский слой; русский и
// украинский тексты служат сверкой. Числа в примерах пересчитаны по формуле,
// а не перенесены из другой локали.

import type { CalculatorDef } from '../lib/types';
import { deAutomotiveContent } from './deContent/automotive';
import { deBuilding1Content } from './deContent/building1';
import { deBuilding2Content } from './deContent/building2';
import { deBuilding3Content } from './deContent/building3';
import { deBuilding4Content } from './deContent/building4';
import { deBuilding5Content } from './deContent/building5';
import { deBusiness1Content } from './deContent/business1';
import { deBusiness2Content } from './deContent/business2';
import { deBusiness3Content } from './deContent/business3';
import { deBusiness4Content } from './deContent/business4';
import { deBusiness5Content } from './deContent/business5';
import { deChemistryContent } from './deContent/chemistry';
import { deComputers1Content } from './deContent/computers1';
import { deComputers2Content } from './deContent/computers2';
import { deConverters1Content } from './deContent/converters1';
import { deConverters2Content } from './deContent/converters2';
import { deConverters3Content } from './deContent/converters3';
import { deDatetimeContent } from './deContent/datetime';
import { deElectronics1Content } from './deContent/electronics1';
import { deElectronics2Content } from './deContent/electronics2';
import { deElectronics3Content } from './deContent/electronics3';
import { deGeometry1Content } from './deContent/geometry1';
import { deGeometry2Content } from './deContent/geometry2';
import { deGeometry3Content } from './deContent/geometry3';
import { deHousehold1Content } from './deContent/household1';
import { deHousehold2Content } from './deContent/household2';
import { deHousehold3Content } from './deContent/household3';
import { deHousehold4Content } from './deContent/household4';
import { deHousehold5Content } from './deContent/household5';
import { deMath1Content } from './deContent/math1';
import { deMath2Content } from './deContent/math2';
import { deMath3Content } from './deContent/math3';
import { deMath4Content } from './deContent/math4';
import { deMath5Content } from './deContent/math5';
import { dePhysics1Content } from './deContent/physics1';
import { dePhysics2Content } from './deContent/physics2';
import { dePhysics3Content } from './deContent/physics3';
import { dePhysics4Content } from './deContent/physics4';
import { dePhysics5Content } from './deContent/physics5';
import { dePhysics6Content } from './deContent/physics6';
import { dePhysics7Content } from './deContent/physics7';
import { deSport1Content } from './deContent/sport1';
import { deSport2Content } from './deContent/sport2';

export type DeDetailedContent = Pick<
  CalculatorDef,
  'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq'
>;

// Историческая партия 27DE-F лежит здесь; новые партии — в deContent/<категория>.ts,
// чтобы diff одной партии читался отдельно от остальных.
const deFoundationContent: Partial<Record<string, DeDetailedContent>> = {
  'tire-size': {
    longDescription:
      'Aus der Reifengröße an der Flanke — etwa 205/55 R16 — ergeben sich alle Maße, die beim Wechsel der Bereifung zählen: die Höhe der Seitenwand, der Abrolldurchmesser, der Umfang und wie oft sich das Rad auf einem Kilometer dreht. Wer von einer Größe auf eine andere wechselt, sieht damit sofort, ob der Tacho künftig zu viel oder zu wenig anzeigt.',
    howToUse: [
      'Trage die Reifenbreite in Millimetern ein — die erste Zahl der Größenangabe.',
      'Trage das Höhen-Breiten-Verhältnis in Prozent ein — die Zahl nach dem Schrägstrich.',
      'Trage den Felgendurchmesser in Zoll ein — die Zahl nach dem R.',
      'Vergleiche Abrolldurchmesser und Umdrehungen je Kilometer mit deiner bisherigen Größe.',
    ],
    howItWorks:
      'Die Flankenhöhe ist Breite × Verhältnis ÷ 100. Der Abrolldurchmesser ist der Felgendurchmesser in Millimetern plus zweimal die Flankenhöhe, denn die Flanke sitzt oben und unten. Der Umfang folgt daraus mit π × Durchmesser, und die Umdrehungen je Kilometer sind 1 000 000 mm geteilt durch diesen Umfang.',
    example:
      'Für 205/55 R16 beträgt die Flankenhöhe 205 × 55 ÷ 100 = 112,75 mm. Der Felgendurchmesser sind 16 × 25,4 = 406,4 mm, der Abrolldurchmesser also 406,4 + 2 × 112,75 = 631,9 mm. Bei einem Umfang von rund 1985 mm dreht sich das Rad etwa 504-mal je Kilometer.',
    faq: [
      { q: 'Warum weicht der Tacho nach einem Größenwechsel ab?', a: 'Der Tacho zählt Radumdrehungen und rechnet sie mit dem Umfang der Serienbereifung in Geschwindigkeit um. Ein größerer Abrolldurchmesser bedeutet weniger Umdrehungen je Kilometer, sodass der Tacho zu wenig anzeigt — und umgekehrt.' },
      { q: 'Wie viel Abweichung im Durchmesser ist unkritisch?', a: 'Als Faustregel gelten etwa zwei Prozent Abweichung vom Serienmaß als unauffällig. Verbindlich ist aber immer die Freigabe in den Fahrzeugpapieren, nicht die Rechnung.' },
      { q: 'Ist die Breite an der Flanke die Aufstandsbreite?', a: 'Nein. Die erste Zahl ist die Nennbreite des Reifens, nicht die Breite der Aufstandsfläche. Diese hängt zusätzlich von Luftdruck, Last und Felgenmaulweite ab.' },
      { q: 'Gilt die Rechnung auch für Zollgrößen?', a: 'Der Rechner erwartet die metrische Schreibweise mit Breite in Millimetern und Felge in Zoll. Reine Zollgrößen wie 31×10.50 R15 geben den Durchmesser bereits direkt an und müssen nicht umgerechnet werden.' },
    ],
  },

  skirting: {
    longDescription:
      'Sockelleisten laufen am Raumumfang entlang, aber nicht durch die Türen. Der Rechner nimmt Länge und Breite des Raums, zieht die Türöffnungen ab, schlägt Verschnitt für Gehrungen und Fehlschnitte auf und teilt das Ergebnis in ganze Leisten der gewählten Länge — also genau die Zahl, die im Baumarkt gebraucht wird.',
    howToUse: [
      'Trage Länge und Breite des Raums in Metern ein.',
      'Gib die Gesamtbreite aller Türöffnungen an, an denen keine Leiste verlegt wird.',
      'Wähle den Verschnittzuschlag in Prozent — bei vielen Ecken eher am oberen Rand.',
      'Trage die Länge einer einzelnen Leiste ein und lies die benötigte Stückzahl ab.',
    ],
    howItWorks:
      'Der Umfang eines rechteckigen Raums ist 2 × (Länge + Breite). Davon wird die Summe der Türbreiten abgezogen. Auf die verbleibende Länge kommt der Verschnittzuschlag, und die Stückzahl ist diese Länge geteilt durch die Leistenlänge, immer auf die nächste ganze Leiste aufgerundet.',
    example:
      'Ein Raum von 5 × 4 m hat 18 m Umfang. Bei zwei Türen mit zusammen 1,8 m bleiben 16,2 m. Mit 10 % Verschnitt sind das 17,82 m, bei 2,5-m-Leisten also 8 Stück.',
    faq: [
      { q: 'Warum wird immer aufgerundet?', a: 'Leisten werden als ganze Stücke verkauft. Eine rechnerisch benötigte Länge von 7,1 Leisten bedeutet in der Praxis 8 Stück, weil das Reststück der achten Leiste den Rest abdeckt.' },
      { q: 'Wie viel Verschnitt ist sinnvoll?', a: 'Bei einem einfachen Rechteck reichen meist 5 bis 10 Prozent. Viele Ecken, Nischen oder ein Muster, das auf Gehrung passen muss, rechtfertigen 15 Prozent.' },
      { q: 'Gilt die Rechnung auch für nicht rechteckige Räume?', a: 'Der Umfang wird aus Länge und Breite gebildet, also für ein Rechteck. Bei verwinkelten Räumen misst du den tatsächlichen Umfang und rechnest mit einem gedachten Rechteck gleichen Umfangs weiter.' },
      { q: 'Zählen Türzargen zur Öffnung?', a: 'Abgezogen wird die Breite, an der tatsächlich keine Leiste sitzt. Bei Zargen ohne Sockelanschluss ist das die lichte Öffnung samt Zargenbreite.' },
    ],
  },

  cac: {
    longDescription:
      'Die Kundenakquisekosten sagen, was ein einzelner neuer Kunde im Schnitt gekostet hat. Erst im Verhältnis zum Kundenwert wird daraus eine Aussage: Ein Kunde für 40 Euro ist günstig, wenn er 400 Euro Deckungsbeitrag bringt, und ruinös, wenn er 30 Euro bringt. Der Rechner stellt beides nebeneinander.',
    howToUse: [
      'Trage die gesamten Akquiseausgaben der Periode ein — Werbung, Vertrieb und alles, was der Neukundengewinnung dient.',
      'Gib die Zahl der in derselben Periode gewonnenen Neukunden an.',
      'Ergänze den Kundenwert über die Kundenbeziehung, wenn du das Verhältnis LTV zu CAC sehen willst.',
      'Vergleiche das Verhältnis mit deinem eigenen Zielwert.',
    ],
    howItWorks:
      'Die Kundenakquisekosten sind Ausgaben geteilt durch gewonnene Kunden. Das Verhältnis LTV zu CAC ist der Kundenwert geteilt durch diese Kosten. Beide Größen müssen sich auf dieselbe Periode und dieselbe Kundengruppe beziehen, sonst vergleicht die Zahl zwei verschiedene Dinge.',
    example:
      'Bei 12 000 Euro Ausgaben und 150 gewonnenen Kunden liegen die Akquisekosten bei 80 Euro je Kunde. Beträgt der Kundenwert 320 Euro, ergibt sich ein Verhältnis von 4,0 — ein Kunde bringt das Vierfache dessen ein, was seine Gewinnung gekostet hat.',
    faq: [
      { q: 'Welche Kosten gehören in die Akquiseausgaben?', a: 'Alles, was der Gewinnung neuer Kunden dient: Mediabudget, Agenturhonorare, Provisionen und die Personalkosten von Marketing und Vertrieb. Kosten für die Betreuung bestehender Kunden gehören nicht dazu.' },
      { q: 'Welches Verhältnis von LTV zu CAC ist gut?', a: 'In der Praxis gilt ein Wert um 3 als tragfähig. Deutlich darunter zehrt die Akquise die Marge auf, deutlich darüber deutet oft darauf hin, dass zu wenig investiert wird und Wachstum liegen bleibt.' },
      { q: 'Warum verzerrt eine lange Kaufentscheidung die Zahl?', a: 'Wenn Ausgaben und Abschlüsse in verschiedene Perioden fallen, teilt die Rechnung das Budget dieses Monats durch die Kunden des letzten. Bei langen Zyklen sollten die Perioden entsprechend verschoben werden.' },
      { q: 'Zählen organisch gewonnene Kunden mit?', a: 'Nimmst du sie in die Kundenzahl auf, sinken die rechnerischen Akquisekosten, ohne dass die bezahlte Akquise besser geworden wäre. Sauberer ist es, nur bezahlt gewonnene Kunden zu zählen.' },
    ],
  },

  'molar-mass': {
    longDescription:
      'Die molare Masse einer Verbindung ist die Summe der Atommassen aller enthaltenen Atome. Der Rechner liest die Summenformel, zählt die Atome je Element — auch in Klammern und mit Faktoren — und zeigt neben der Gesamtmasse, welchen Anteil jedes Element daran hat. Damit lässt sich eine Einwaage in Stoffmenge umrechnen und umgekehrt.',
    howToUse: [
      'Trage die Summenformel in üblicher Schreibweise ein, etwa H2O, NaCl oder Ca(OH)2.',
      'Groß- und Kleinschreibung der Elementsymbole beachten: Co ist Cobalt, CO ist Kohlenmonoxid.',
      'Lies die molare Masse in Gramm je Mol ab.',
      'Prüfe in der Tabelle, welches Element den größten Massenanteil beisteuert.',
    ],
    howItWorks:
      'Jedes Elementsymbol wird mit seiner Atommasse aus dem Periodensystem angesetzt und mit der Anzahl der Atome multipliziert. Klammern werden ausmultipliziert, sodass Ca(OH)2 zwei Sauerstoff- und zwei Wasserstoffatome enthält. Die Summe aller Beiträge ist die molare Masse in g/mol; der Anteil eines Elements ist sein Beitrag geteilt durch diese Summe.',
    example:
      'Für H2O ergeben zwei Wasserstoffatome 2 × 1,008 = 2,016 g/mol und ein Sauerstoffatom 15,999 g/mol. Zusammen sind das 18,015 g/mol, wovon der Sauerstoff rund 88,8 Prozent stellt.',
    faq: [
      { q: 'Warum sind Atommassen keine ganzen Zahlen?', a: 'Die angegebene Atommasse ist der Mittelwert über die natürlichen Isotope eines Elements, gewichtet nach ihrer Häufigkeit. Chlor liegt deshalb bei etwa 35,45 und nicht bei 35 oder 37.' },
      { q: 'Wie werden Kristallwasseranteile geschrieben?', a: 'Der Rechner erwartet eine ausmultiplizierte Formel. Statt CuSO4·5H2O trägst du die Atome zusammengefasst ein, damit das Kristallwasser in die Summe eingeht.' },
      { q: 'Ist die molare Masse dasselbe wie das Molekulargewicht?', a: 'Zahlenmäßig stimmen sie überein, die Einheiten unterscheiden sich: Die molare Masse hat die Einheit g/mol, das relative Molekulargewicht ist eine dimensionslose Verhältniszahl.' },
      { q: 'Wie komme ich von der Masse zur Stoffmenge?', a: 'Die Stoffmenge ist die eingewogene Masse geteilt durch die molare Masse. 9 g Wasser entsprechen bei 18,015 g/mol also etwa 0,5 mol.' },
    ],
  },

  'aspect-ratio': {
    longDescription:
      'Das Seitenverhältnis beschreibt das Format eines Bildes unabhängig von seiner Größe. Der Rechner kürzt eine Auflösung auf ihr Verhältnis — 1920 × 1080 wird zu 16:9 — und findet umgekehrt die fehlende Kantenlänge, wenn das Verhältnis und eine Seite bekannt sind. Das ist die Rechnung hinter Zuschnitten, Bildschirmwahl und Videoformaten.',
    howToUse: [
      'Wähle, ob du aus einer Auflösung das Verhältnis bestimmen oder eine fehlende Seite finden willst.',
      'Für das Verhältnis trägst du Breite und Höhe in Pixeln ein.',
      'Für die fehlende Seite gibst du das Verhältnis und die bekannte Kantenlänge an.',
      'Lies das gekürzte Verhältnis oder die gesuchte Kantenlänge ab.',
    ],
    howItWorks:
      'Das Verhältnis entsteht, indem Breite und Höhe durch ihren größten gemeinsamen Teiler geteilt werden: 1920 und 1080 haben den Teiler 120, daraus wird 16:9. Die fehlende Seite folgt aus der Proportion Breite ÷ Höhe = Verhältnisbreite ÷ Verhältnishöhe, nach der gesuchten Größe aufgelöst.',
    example:
      'Für 2560 × 1080 ist der größte gemeinsame Teiler 40, das Verhältnis also 64:27 — das übliche 21:9 ist dafür nur die gerundete Marketingangabe. Umgekehrt gehören zu 16:9 und einer Höhe von 1440 Pixeln genau 2560 Pixel Breite.',
    faq: [
      { q: 'Warum ergibt 2560 × 1080 nicht glatt 21:9?', a: 'Gekürzt sind es 64:27. Die Angabe 21:9 ist ein eingebürgerter Näherungsname für diese Klasse von Formaten, nicht das exakte Verhältnis der Pixelzahlen.' },
      { q: 'Ändert sich das Verhältnis beim Skalieren?', a: 'Nein. Werden Breite und Höhe mit demselben Faktor multipliziert, bleibt das Verhältnis gleich — genau deshalb beschreibt es das Format und nicht die Größe.' },
      { q: 'Was sind nicht quadratische Pixel?', a: 'Bei manchen Videoformaten ist ein Pixel breiter als hoch. Dann weicht das Verhältnis der Pixelzahlen vom sichtbaren Bildformat ab; der Rechner geht von quadratischen Pixeln aus.' },
      { q: 'Kann die fehlende Seite gebrochen ausfallen?', a: 'Ja. 16:9 und eine Höhe von 1000 Pixeln ergeben rechnerisch 1777,78 Pixel Breite. In der Praxis wird auf ganze Pixel gerundet, was das Format minimal verschiebt.' },
    ],
  },

  'convert-temperature': {
    longDescription:
      'Temperaturskalen unterscheiden sich in zwei Dingen: wo ihr Nullpunkt liegt und wie groß ein Grad ist. Celsius und Kelvin teilen die Schrittweite, aber nicht den Nullpunkt; Fahrenheit und Rankine ebenso. Der Rechner rechnet zwischen allen vier Skalen um und behandelt negative Werte korrekt — ein Punkt, an dem eine reine Faktorumrechnung scheitert.',
    howToUse: [
      'Trage den Temperaturwert ein, auch mit Minuszeichen.',
      'Wähle die Ausgangsskala.',
      'Wähle die Zielskala.',
      'Lies den umgerechneten Wert ab.',
    ],
    howItWorks:
      'Alle Umrechnungen laufen über Kelvin als gemeinsame Bezugsskala. Von Celsius nach Kelvin werden 273,15 addiert, von Fahrenheit nach Celsius gilt (°F − 32) × 5 ÷ 9, und Rankine ist Kelvin × 9 ÷ 5. Weil jede Skala einen eigenen Nullpunkt hat, ist die Umrechnung eine Verschiebung mit Streckung und keine einfache Multiplikation.',
    example:
      '−40 °C entsprechen −40 °F — der einzige Punkt, an dem beide Skalen denselben Zahlenwert zeigen. In Kelvin sind das 233,15 K, in Rankine 419,67 °R.',
    faq: [
      { q: 'Warum kann Kelvin nicht negativ werden?', a: 'Kelvin beginnt am absoluten Nullpunkt, dem tiefsten physikalisch möglichen Zustand. Ein negativer Kelvinwert entspräche einer Temperatur unterhalb dieses Punktes und existiert nicht.' },
      { q: 'Wo liegt der absolute Nullpunkt in Celsius?', a: 'Bei −273,15 °C. Genau diese Zahl ist die Verschiebung zwischen der Celsius- und der Kelvinskala.' },
      { q: 'Warum ist −40 in Celsius und Fahrenheit gleich?', a: 'Beide Geraden schneiden sich in genau einem Punkt. Setzt man °C = °F in die Umrechnungsformel ein, ergibt sich −40 als einzige Lösung.' },
      { q: 'Wofür wird Rankine noch verwendet?', a: 'Rankine ist eine absolute Skala mit der Schrittweite von Fahrenheit und begegnet vor allem in der US-amerikanischen Thermodynamik und Verfahrenstechnik.' },
    ],
  },

  'currency-exchange-fee': {
    longDescription:
      'Beim Geldwechseln kostet selten nur die Gebühr. Der Kurs der Wechselstube liegt bereits ungünstiger als der Referenzkurs, dazu kommen oft ein Prozentsatz und ein fester Betrag. Der Rechner legt alle drei Anteile zusammen und zeigt, was am Ende tatsächlich ankommt und wie hoch die Gesamtkosten gemessen am Referenzkurs sind.',
    howToUse: [
      'Wähle, ob du Währung verkaufst oder kaufst.',
      'Trage den Betrag und den angebotenen Kurs ein.',
      'Gib den Spread in Prozent an — den Abstand zum Referenzkurs.',
      'Ergänze prozentuale Gebühr und Festbetrag und lies den Nettobetrag ab.',
    ],
    howItWorks:
      'Der Spread verschiebt den Kurs zu deinen Ungunsten: beim Verkauf nach unten, beim Kauf nach oben. Auf den so verschobenen Kurs wird der Betrag umgerechnet, davon die prozentuale Gebühr abgezogen und zuletzt der Festbetrag. Die Gesamtkosten sind die Differenz zwischen dem Ergebnis zum Referenzkurs und dem tatsächlich ausgezahlten Betrag.',
    example:
      'Werden 1000 Einheiten zu einem Kurs von 92,50 mit 0,5 % Spread, 1,5 % Gebühr und ohne Festbetrag verkauft, sinkt der Kurs auf 92,04. Daraus werden 92 037 Einheiten, abzüglich 1,5 % bleiben rund 90 657 — gegenüber dem Referenzkurs fehlen etwa 1843 Einheiten.',
    faq: [
      { q: 'Was ist der Unterschied zwischen Spread und Gebühr?', a: 'Der Spread steckt im Kurs und ist deshalb auf den ersten Blick unsichtbar. Die Gebühr wird zusätzlich ausgewiesen. Wirtschaftlich wirken beide gleich: Sie verringern den ausgezahlten Betrag.' },
      { q: 'Warum ist ein Angebot ohne Gebühr nicht automatisch günstig?', a: 'Ein Anbieter kann auf jede Gebühr verzichten und den Aufschlag vollständig in den Kurs legen. Vergleichbar werden Angebote erst über den Betrag, der am Ende ankommt.' },
      { q: 'Welcher Kurs ist der Referenzkurs?', a: 'Gemeint ist der Mittelkurs ohne Auf- oder Abschlag, wie ihn Zentralbanken veröffentlichen. Er ist kein handelbarer Kurs, sondern die Bezugsgröße, an der sich Kosten messen lassen.' },
      { q: 'Lohnt sich ein Festbetrag bei kleinen Summen?', a: 'Selten. Ein fester Betrag fällt prozentual umso stärker ins Gewicht, je kleiner die Summe ist, und kann bei kleinen Beträgen die gesamten Kosten dominieren.' },
    ],
  },

  'week-number': {
    longDescription:
      'Die Kalenderwoche nach ISO 8601 ist international eindeutig geregelt, weicht aber von der landläufigen Zählung ab: Eine Woche beginnt am Montag, und die erste Kalenderwoche eines Jahres ist die mit dem ersten Donnerstag. Der Rechner bestimmt zu jedem Datum die ISO-Woche, den Tag des Jahres und die im Jahr verbleibenden Tage.',
    howToUse: [
      'Wähle das Datum aus, für das du die Kalenderwoche brauchst.',
      'Lies die ISO-Kalenderwoche und das zugehörige ISO-Jahr ab.',
      'Prüfe daneben den Tag des Jahres und die verbleibenden Tage.',
      'Beachte am Jahreswechsel, dass ISO-Jahr und Kalenderjahr auseinanderfallen können.',
    ],
    howItWorks:
      'Nach ISO 8601 gehört eine Woche zu dem Jahr, in dem ihr Donnerstag liegt. Daraus folgt: Die erste Woche eines Jahres enthält immer den 4. Januar, und ein Jahr hat 52 oder 53 Kalenderwochen. Der Tag des Jahres ist die laufende Nummer des Datums ab dem 1. Januar, Schaltjahre eingeschlossen.',
    example:
      'Der 1. Januar 2027 ist ein Freitag und gehört damit noch zur 53. Kalenderwoche des ISO-Jahres 2026, weil der Donnerstag dieser Woche im Dezember liegt. Als Tag des Jahres ist es dennoch der 1. von 365.',
    faq: [
      { q: 'Warum liegt der 1. Januar manchmal in der letzten Woche des Vorjahres?', a: 'Weil eine ISO-Woche vollständig zu dem Jahr gehört, in dem ihr Donnerstag liegt. Fällt der 1. Januar auf Freitag, Samstag oder Sonntag, liegt der Donnerstag dieser Woche noch im alten Jahr.' },
      { q: 'Wann hat ein Jahr 53 Kalenderwochen?', a: 'Wenn das Jahr an einem Donnerstag beginnt oder ein Schaltjahr an einem Mittwoch. Dann fällt ein 53. Donnerstag ins Jahr und begründet eine zusätzliche Woche.' },
      { q: 'Beginnt die Woche überall am Montag?', a: 'Nach ISO 8601 ja. In den USA und einigen anderen Ländern ist der Sonntag der Wochenbeginn, weshalb dieselbe Datei dort eine andere Wochennummer zeigen kann.' },
      { q: 'Ist das ISO-Jahr dasselbe wie das Kalenderjahr?', a: 'Meist ja, an den Jahresrändern aber nicht. Ein Datum vom 31. Dezember kann bereits zur ersten ISO-Woche des Folgejahres gehören.' },
    ],
  },

  gpa: {
    longDescription:
      'Ein Notendurchschnitt ist selten das einfache Mittel aller Noten: Eine Vorlesung mit zehn Leistungspunkten wiegt schwerer als ein Seminar mit zwei. Der Rechner nimmt eine Liste aus Note und Gewicht, bildet den gewichteten Durchschnitt und stellt das ungewichtete Mittel daneben — die Differenz zeigt, wie stark die Gewichtung das Ergebnis verschiebt.',
    howToUse: [
      'Trage je Zeile eine Note ein, danach durch Leerzeichen getrennt ihr Gewicht.',
      'Lässt du das Gewicht weg, zählt die Zeile mit dem Gewicht 1.',
      'Lies den gewichteten Durchschnitt ab.',
      'Vergleiche ihn mit dem ungewichteten Mittel, um den Einfluss der Gewichte zu sehen.',
    ],
    howItWorks:
      'Der gewichtete Durchschnitt ist die Summe aus Note × Gewicht, geteilt durch die Summe der Gewichte. Das ungewichtete Mittel ist die Summe der Noten geteilt durch ihre Anzahl. Beide Werte unterscheiden sich genau dann, wenn nicht alle Gewichte gleich sind.',
    example:
      'Bei den Zeilen „1,7 10“, „2,3 4“ und „1,0 2“ ergibt sich 1,7 × 10 + 2,3 × 4 + 1,0 × 2 = 28,2 bei 16 Gewichtspunkten, also ein gewichteter Durchschnitt von 1,76. Das ungewichtete Mittel läge bei 1,67.',
    faq: [
      { q: 'Welche Notenskala erwartet der Rechner?', a: 'Keine bestimmte. Er rechnet mit den eingetragenen Zahlen, gleich ob deutsche Noten von 1 bis 5, Punkte von 0 bis 15 oder eine Vier-Punkte-Skala verwendet werden. Wichtig ist nur, dass alle Zeilen dieselbe Skala nutzen.' },
      { q: 'Was zählt als Gewicht?', a: 'Üblich sind Leistungspunkte, Semesterwochenstunden oder eine Prüfungsgewichtung in Prozent. Entscheidend ist, dass dasselbe Maß in allen Zeilen steht.' },
      { q: 'Warum unterscheiden sich gewichteter und ungewichteter Wert?', a: 'Weil das gewichtete Mittel große Module stärker berücksichtigt. Eine gute Note in einem kleinen Seminar hebt den Schnitt weniger, als es das einfache Mittel vermuten lässt.' },
      { q: 'Was passiert bei einem Gewicht von null?', a: 'Eine Zeile mit dem Gewicht null geht nicht in den gewichteten Durchschnitt ein. Im ungewichteten Mittel zählt sie weiterhin mit, weil dort nur die Anzahl der Noten zählt.' },
    ],
  },

  'ohms-law': {
    longDescription:
      'Spannung, Strom und Widerstand hängen über das ohmsche Gesetz zusammen: Sind zwei der Größen bekannt, folgt die dritte. Zusammen mit der Leistung ergeben sich vier Größen, von denen je zwei genügen. Der Rechner löst die Beziehung in die Richtung auf, die du brauchst, und gibt zusätzlich die umgesetzte Leistung aus.',
    howToUse: [
      'Wähle, welche Größe berechnet werden soll.',
      'Trage die beiden bekannten Werte in ihren SI-Einheiten ein — Volt, Ampere, Ohm oder Watt.',
      'Lies die gesuchte Größe ab.',
      'Prüfe die Leistung, wenn es um Wärmeentwicklung oder die Belastbarkeit eines Bauteils geht.',
    ],
    howItWorks:
      'Das ohmsche Gesetz lautet U = I × R. Umgestellt ergibt sich I = U ÷ R und R = U ÷ I. Die Leistung folgt aus P = U × I und lässt sich mit dem Gesetz auch als P = I² × R oder P = U² ÷ R schreiben — je nachdem, welche Größen bekannt sind.',
    example:
      'An einem Widerstand von 220 Ω liegen 12 V an. Der Strom beträgt 12 ÷ 220 = 0,0545 A, also rund 55 mA. Die umgesetzte Leistung ist 12 × 0,0545 = 0,65 W — ein Viertelwatt-Widerstand wäre hier bereits überlastet.',
    faq: [
      { q: 'Gilt das ohmsche Gesetz für jedes Bauteil?', a: 'Nein. Es gilt für ohmsche Widerstände, bei denen der Strom proportional zur Spannung wächst. Dioden, LEDs und Transistoren verhalten sich nichtlinear und lassen sich damit nicht beschreiben.' },
      { q: 'Warum wird ein Widerstand warm?', a: 'Die elektrische Leistung P = U × I wird im Widerstand vollständig in Wärme umgesetzt. Übersteigt sie die Nennbelastbarkeit des Bauteils, altert es schnell oder fällt aus.' },
      { q: 'Wie rechne ich mit Milliampere?', a: 'Der Rechner erwartet Ampere. 55 mA sind 0,055 A. Wer Milliampere direkt einträgt, erhält ein Ergebnis, das um den Faktor tausend danebenliegt.' },
      { q: 'Gilt die Rechnung auch für Wechselstrom?', a: 'Für rein ohmsche Lasten ja, mit Effektivwerten von Spannung und Strom. Sobald Spulen oder Kondensatoren im Spiel sind, tritt an die Stelle des Widerstands die Impedanz.' },
    ],
  },

  annuity: {
    longDescription:
      'Bei einem Annuitätendarlehen bleibt die Rate über die gesamte Laufzeit gleich, ihre Zusammensetzung aber nicht: Anfangs geht der größte Teil in die Zinsen, gegen Ende in die Tilgung. Der Rechner bestimmt die Rate und zeigt Monat für Monat, wie sich Zinsanteil, Tilgungsanteil und Restschuld verschieben.',
    howToUse: [
      'Trage die Darlehenssumme ein.',
      'Gib den nominalen Jahreszins in Prozent an.',
      'Trage die Laufzeit in Monaten ein.',
      'Lies die Rate ab und verfolge im Tilgungsplan, wann die Tilgung den Zinsanteil überholt.',
    ],
    howItWorks:
      'Die Rate folgt aus der Annuitätenformel A = K × i ÷ (1 − (1 + i)^−n), wobei i der Monatszins — Jahreszins geteilt durch zwölf — und n die Zahl der Monate ist. In jedem Monat sind die Zinsen die Restschuld × i; was von der Rate übrig bleibt, tilgt und verringert die Restschuld für den Folgemonat.',
    example:
      'Bei 200 000 Euro, 4 % Jahreszins und 240 Monaten beträgt der Monatszins 0,3333 %. Die Rate liegt bei rund 1212 Euro. Im ersten Monat entfallen davon etwa 667 Euro auf Zinsen und 545 Euro auf Tilgung; im letzten Monat kehrt sich das Verhältnis nahezu um.',
    faq: [
      { q: 'Warum sinkt der Zinsanteil im Lauf der Zeit?', a: 'Die Zinsen werden jeden Monat auf die verbliebene Restschuld berechnet. Da diese durch die Tilgung sinkt, fällt auch der Zinsanteil — und weil die Rate gleich bleibt, wächst der Tilgungsanteil entsprechend.' },
      { q: 'Ist der Nominalzins dasselbe wie der Effektivzins?', a: 'Nein. Der Effektivzins berücksichtigt zusätzlich Gebühren, Auszahlungskurse und den Zahlungsrhythmus. Diese Rechnung arbeitet mit dem Nominalzins.' },
      { q: 'Was ändert eine Sondertilgung?', a: 'Sie verringert die Restschuld unmittelbar. Bei gleichbleibender Rate verkürzt sich dadurch die Laufzeit, und die insgesamt gezahlten Zinsen sinken deutlich.' },
      { q: 'Warum weicht die letzte Rate ab?', a: 'Durch Rundungen auf Cent-Beträge bleibt am Ende ein kleiner Rest. Die Schlussrate gleicht diese Differenz aus und fällt deshalb geringfügig anders aus.' },
    ],
  },

  'pyramid-frustum': {
    longDescription:
      'Ein Pyramidenstumpf entsteht, wenn von einer Pyramide die Spitze parallel zur Grundfläche abgeschnitten wird. Übrig bleibt ein Körper mit zwei quadratischen, zueinander parallelen Flächen. Der Rechner bestimmt aus beiden Kantenlängen und der Höhe das Volumen, die Seitenhöhe sowie Mantel- und Gesamtoberfläche — die Maße für Fundamente, Trichter und Behälter.',
    howToUse: [
      'Trage die Kantenlänge der unteren Grundfläche ein.',
      'Trage die Kantenlänge der oberen Deckfläche ein.',
      'Gib die senkrechte Höhe zwischen beiden Flächen an.',
      'Lies Volumen, Seitenhöhe und Oberflächen ab.',
    ],
    howItWorks:
      'Das Volumen ist V = h ÷ 3 × (a² + a × b + b²) mit den Kantenlängen a und b. Die Seitenhöhe folgt aus dem Satz des Pythagoras über der halben Kantendifferenz: m = √(h² + ((a − b) ÷ 2)²). Die Mantelfläche ist 2 × (a + b) × m, die Gesamtoberfläche zusätzlich um beide Quadrate größer.',
    example:
      'Für a = 4 m, b = 2 m und h = 3 m ergibt sich V = 3 ÷ 3 × (16 + 8 + 4) = 28 m³. Die Seitenhöhe beträgt √(9 + 1) = 3,16 m, die Mantelfläche 2 × 6 × 3,16 = 37,9 m² und die Gesamtoberfläche 57,9 m².',
    faq: [
      { q: 'Warum steht im Volumen a² + a × b + b²?', a: 'Der Ausdruck ergibt sich, wenn man das Volumen der großen Pyramide um das der abgeschnittenen Spitze verringert und zusammenfasst. Er liegt zwischen a² und b² und gewichtet beide Flächen samt ihrem geometrischen Mittel.' },
      { q: 'Ist die Seitenhöhe dasselbe wie die Höhe?', a: 'Nein. Die Höhe steht senkrecht zwischen den beiden Flächen, die Seitenhöhe verläuft in der Mantelfläche schräg nach außen und ist deshalb immer länger.' },
      { q: 'Was passiert, wenn die Deckfläche null wird?', a: 'Dann geht der Stumpf in eine vollständige Pyramide über, und die Formel vereinfacht sich zu V = h × a² ÷ 3 — dem bekannten Pyramidenvolumen.' },
      { q: 'Gilt die Rechnung auch für rechteckige Flächen?', a: 'Nein, sie setzt quadratische Grund- und Deckflächen voraus. Bei rechteckigen Flächen sind beide Kantenlängen je Ebene getrennt zu berücksichtigen.' },
    ],
  },

  'utility-total': {
    longDescription:
      'Eine Nebenkostenabrechnung besteht aus zwei Teilen: verbrauchsabhängigen Positionen, die sich aus Zählerständen ergeben, und festen Grundgebühren. Der Rechner nimmt beliebig viele Zählerpositionen mit Verbrauch und Tarif entgegen, addiert die Festbeträge und führt alles zu einer Monatssumme zusammen.',
    howToUse: [
      'Trage je Zeile eine Position ein: Verbrauch und Tarif, durch Leerzeichen getrennt.',
      'Verwende für jede Sparte eine eigene Zeile — Strom, Wasser, Gas.',
      'Trage die Summe der festen Grundgebühren in das dafür vorgesehene Feld ein.',
      'Lies die Monatssumme ab und prüfe in der Tabelle, welche Position am stärksten wiegt.',
    ],
    howItWorks:
      'Für jede Zeile wird Verbrauch × Tarif gerechnet, und alle Zeilenbeträge werden addiert. Die festen Grundgebühren kommen unabhängig vom Verbrauch hinzu. Die Summe ist der Monatsbetrag; der Anteil einer Position ist ihr Betrag geteilt durch diese Summe.',
    example:
      'Bei den Zeilen „250 0,32“ für Strom, „6 4,10“ für Wasser und „80 0,11“ für Gas ergeben sich 80,00 + 24,60 + 8,80 = 113,40. Mit 18,50 Grundgebühr sind das 131,90 im Monat, wovon der Strom gut 60 Prozent stellt.',
    faq: [
      { q: 'Wie ermittle ich den Verbrauch aus zwei Zählerständen?', a: 'Der Verbrauch ist der aktuelle Zählerstand minus dem vorherigen. Trage in die Zeile diese Differenz ein, nicht den abgelesenen Stand selbst.' },
      { q: 'Gehört die Grundgebühr in die Zeilen?', a: 'Nein. Sie fällt unabhängig vom Verbrauch an und gehört in das eigene Feld. In einer Zeile mit Tarif würde sie fälschlich mit dem Verbrauch multipliziert.' },
      { q: 'Kann ich mit gemischten Einheiten rechnen?', a: 'Ja, solange Verbrauch und Tarif in einer Zeile zusammenpassen — Kilowattstunden mit dem Preis je Kilowattstunde, Kubikmeter mit dem Preis je Kubikmeter.' },
      { q: 'Ist die Umsatzsteuer enthalten?', a: 'Das hängt von den eingetragenen Tarifen ab. Trägst du Bruttopreise ein, ist die Summe brutto; bei Nettopreisen ist sie netto.' },
    ],
  },

  'quadratic-equation': {
    longDescription:
      'Eine quadratische Gleichung der Form ax² + bx + c = 0 hat je nach Diskriminante zwei, eine oder keine reelle Lösung. Der Rechner bestimmt die Diskriminante, daraus die Lösungen und zusätzlich den Scheitelpunkt der Parabel — also die Stelle, an der die Funktion ihren kleinsten oder größten Wert annimmt.',
    howToUse: [
      'Trage den Koeffizienten a ein; er darf nicht null sein, sonst ist die Gleichung linear.',
      'Trage b und c ein, Vorzeichen eingeschlossen.',
      'Lies die Diskriminante und die Zahl der reellen Lösungen ab.',
      'Prüfe den Scheitelpunkt, wenn du den Verlauf der Parabel brauchst.',
    ],
    howItWorks:
      'Die Diskriminante ist D = b² − 4ac. Ist D positiv, gibt es zwei Lösungen x = (−b ± √D) ÷ (2a); ist D null, fallen beide zu einer zusammen; ist D negativ, existiert keine reelle Lösung. Der Scheitelpunkt liegt bei x = −b ÷ (2a), sein Funktionswert folgt durch Einsetzen.',
    example:
      'Für x² − 5x + 6 = 0 ist D = 25 − 24 = 1. Daraus folgen x = (5 ± 1) ÷ 2, also 3 und 2. Der Scheitelpunkt liegt bei x = 2,5 mit dem Wert −0,25 — die Parabel taucht also knapp unter die x-Achse.',
    faq: [
      { q: 'Was bedeutet eine negative Diskriminante?', a: 'Die Parabel schneidet die x-Achse nicht. Reelle Lösungen gibt es dann keine; im Bereich der komplexen Zahlen existieren zwei zueinander konjugierte Lösungen.' },
      { q: 'Warum darf a nicht null sein?', a: 'Mit a = 0 verschwindet das quadratische Glied, und es bleibt die lineare Gleichung bx + c = 0. Die Lösungsformel enthält 2a im Nenner und wäre nicht definiert.' },
      { q: 'Wie hängen die Lösungen mit dem Scheitelpunkt zusammen?', a: 'Der Scheitelpunkt liegt genau in der Mitte zwischen beiden Lösungen. Deshalb ist seine x-Koordinate der Mittelwert der Lösungen, auch wenn diese zusammenfallen.' },
      { q: 'Was besagt der Satz von Vieta?', a: 'Bei a = 1 ist die Summe der Lösungen −b und ihr Produkt c. Im Beispiel gilt 3 + 2 = 5 und 3 × 2 = 6, was sich mit den Koeffizienten deckt.' },
    ],
  },

  density: {
    longDescription:
      'Die Dichte gibt an, wie viel Masse in einem bestimmten Volumen steckt. Sie unterscheidet Stoffe unabhängig von ihrer Menge: Ein Gramm Blei und eine Tonne Blei haben dieselbe Dichte. Der Rechner löst ρ = m ÷ V in jede Richtung auf, sodass sich aus zwei bekannten Größen die dritte ergibt.',
    howToUse: [
      'Wähle, ob Dichte, Masse oder Volumen gesucht ist.',
      'Trage die beiden bekannten Größen in ihren Einheiten ein.',
      'Achte darauf, dass Masse und Volumen zueinander passen — Kilogramm zu Kubikmetern oder Gramm zu Kubikzentimetern.',
      'Lies die gesuchte Größe ab.',
    ],
    howItWorks:
      'Die Dichte ist ρ = m ÷ V. Umgestellt ergeben sich m = ρ × V und V = m ÷ ρ. In SI-Einheiten wird die Dichte in Kilogramm je Kubikmeter angegeben; die im Alltag geläufigen Gramm je Kubikzentimeter sind derselbe Wert, geteilt durch tausend.',
    example:
      'Ein Aluminiumblock von 5,4 kg nimmt 0,002 m³ ein. Die Dichte ist 5,4 ÷ 0,002 = 2700 kg/m³, also 2,7 g/cm³ — der bekannte Wert für Aluminium.',
    faq: [
      { q: 'Warum ist die Dichte temperaturabhängig?', a: 'Die meisten Stoffe dehnen sich beim Erwärmen aus. Die Masse bleibt gleich, das Volumen wächst, also sinkt die Dichte. Tabellenwerte gelten deshalb immer für eine angegebene Temperatur.' },
      { q: 'Was ist der Unterschied zur spezifischen Dichte?', a: 'Die relative oder spezifische Dichte ist das Verhältnis zur Dichte von Wasser und damit dimensionslos. Die hier berechnete Dichte trägt dagegen eine Einheit.' },
      { q: 'Warum schwimmt Eis auf Wasser?', a: 'Wasser hat sein Dichtemaximum bei etwa 4 °C. Beim Gefrieren nimmt das Volumen zu, die Dichte sinkt unter die des flüssigen Wassers, und Eis schwimmt auf.' },
      { q: 'Gilt die Formel auch für poröse Stoffe?', a: 'Sie liefert die Rohdichte einschließlich der Hohlräume. Die Reindichte des Materials ohne Poren ist höher und muss getrennt bestimmt werden.' },
    ],
  },

  vo2max: {
    longDescription:
      'Die maximale Sauerstoffaufnahme beschreibt, wie viel Sauerstoff der Körper unter Ausbelastung je Minute verwerten kann, bezogen auf das Körpergewicht. Sie ist die gebräuchlichste Kennzahl der Ausdauerleistungsfähigkeit. Der Rechner schätzt sie wahlweise aus der im Cooper-Test gelaufenen Strecke oder aus dem Verhältnis von Maximal- zu Ruhepuls.',
    howToUse: [
      'Wähle die Methode: Cooper-Test oder Herzfrequenz.',
      'Für den Cooper-Test trägst du die in zwölf Minuten gelaufene Strecke in Metern ein.',
      'Für die Herzfrequenzmethode gibst du Ruhepuls und Maximalpuls an.',
      'Lies die geschätzte maximale Sauerstoffaufnahme in Milliliter je Kilogramm und Minute ab.',
    ],
    howItWorks:
      'Beim Cooper-Test gilt die Näherung VO2max = (Strecke in Metern − 504,9) ÷ 44,73. Die Herzfrequenzmethode nutzt den Zusammenhang VO2max ≈ 15 × Maximalpuls ÷ Ruhepuls. Beide sind empirische Schätzformeln aus Reihenuntersuchungen und ersetzen keine Messung per Spiroergometrie.',
    example:
      'Wer im Cooper-Test 2800 m läuft, kommt auf (2800 − 504,9) ÷ 44,73 ≈ 51,3 ml/kg/min. Bei einem Ruhepuls von 55 und einem Maximalpuls von 190 ergibt die Herzfrequenzmethode 15 × 190 ÷ 55 ≈ 51,8 — beide Wege führen hier zu einem ähnlichen Wert.',
    faq: [
      { q: 'Wie genau sind diese Schätzungen?', a: 'Es sind Näherungen aus Reihenuntersuchungen mit einer typischen Streuung von etwa zehn bis fünfzehn Prozent. Für die Verlaufsbeobachtung mit stets derselben Methode taugen sie gut, für einen absoluten Wert nicht.' },
      { q: 'Wie ermittle ich meinen Maximalpuls?', a: 'Verlässlich nur unter Ausbelastung oder im Labor. Faustformeln wie 220 minus Lebensalter streuen stark und übertragen ihren Fehler direkt in die Schätzung.' },
      { q: 'Warum ist der Wert auf das Körpergewicht bezogen?', a: 'Weil beim Laufen das eigene Gewicht mitbewegt wird. Die relative Angabe in Milliliter je Kilogramm und Minute macht Menschen unterschiedlicher Statur vergleichbar.' },
      { q: 'Ist der Cooper-Test für Untrainierte geeignet?', a: 'Er verlangt zwölf Minuten maximale Belastung. Wer untrainiert ist oder Vorerkrankungen hat, sollte vorher ärztlichen Rat einholen und stattdessen ein submaximales Verfahren wählen.' },
    ],
  },
};

export const deCalculatorContent: Partial<Record<string, DeDetailedContent>> = {
  ...deFoundationContent,
  ...deAutomotiveContent,
  ...deBuilding1Content,
  ...deBuilding2Content,
  ...deBuilding3Content,
  ...deBuilding4Content,
  ...deBuilding5Content,
  ...deBusiness1Content,
  ...deBusiness2Content,
  ...deBusiness3Content,
  ...deBusiness4Content,
  ...deBusiness5Content,
  ...deChemistryContent,
  ...deComputers1Content,
  ...deComputers2Content,
  ...deConverters1Content,
  ...deConverters2Content,
  ...deConverters3Content,
  ...deDatetimeContent,
  ...deElectronics1Content,
  ...deElectronics2Content,
  ...deElectronics3Content,
  ...deGeometry1Content,
  ...deGeometry2Content,
  ...deGeometry3Content,
  ...deHousehold1Content,
  ...deHousehold2Content,
  ...deHousehold3Content,
  ...deHousehold4Content,
  ...deHousehold5Content,
  ...deMath1Content,
  ...deMath2Content,
  ...deMath3Content,
  ...deMath4Content,
  ...deMath5Content,
  ...dePhysics1Content,
  ...dePhysics2Content,
  ...dePhysics3Content,
  ...dePhysics4Content,
  ...dePhysics5Content,
  ...dePhysics6Content,
  ...dePhysics7Content,
  ...deSport1Content,
  ...deSport2Content,
};
