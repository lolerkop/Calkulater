import type { DeDetailedContent } from './types';

export const deHousehold5Content: Partial<Record<string, DeDetailedContent>> = {
  'stock-duration': {
    longDescription: 'Beantwortet die alltägliche Frage „wie lange reicht das“: es teilt den vorhandenen Vorrat durch den Tagesverbrauch. Gemeint ist ein Vorrat im Sinne von Vorräten — Futter, Getreide, Kraftstoff, Verbrauchsmaterial — und keine Wertpapiere. Gib eine Sicherheitsreserve in Tagen an, und der Rechner sagt zusätzlich, wann nachzubestellen ist, damit dir nichts ausgeht, während die Lieferung unterwegs ist.',
    howToUse: [
      'Trage den vorhandenen Vorrat in der Einheit ein, die dir passt.',
      'Gib den Tagesverbrauch in derselben Einheit an.',
      'Setze bei Bedarf eine Sicherheitsreserve in Tagen.',
    ],
    howItWorks: 'Reichweite = Vorrat ÷ Tagesverbrauch. Der Bestellzeitpunkt ist die Reichweite minus der Sicherheitsreserve in Tagen.',
    example: '30 kg Futter bei einem Verbrauch von 2 kg am Tag reichen 15 Tage.',
    faq: [
      { q: 'In welcher Einheit soll der Vorrat stehen?', a: 'In beliebiger, solange Vorrat und Tagesverbrauch dieselbe teilen. Kilogramm, Liter, Stück — der Rechner teilt das eine durch das andere und arbeitet mit dem Verhältnis.' },
      { q: 'Was ist die Sicherheitsreserve in Tagen?', a: 'Die Deckung, die du beim Eintreffen der nächsten Lieferung noch haben willst — meist die Lieferzeit plus einen Aufschlag. So viele Tage früher solltest du bestellen.' },
      { q: 'Wird ungleichmäßiger Verbrauch berücksichtigt?', a: 'Nein, der Verbrauch gilt als gleichbleibend. Für saisonale Spitzen nimm den mittleren Verbrauch der Spitzenzeit und nicht den des Jahres.' },
      { q: 'Geht es um Vorräte oder um Aktien?', a: 'Um Vorräte: Futter, Getreide, Kraftstoff, Verbrauchsmaterial. Mit Wertpapieren hat das nichts zu tun.' },
    ],
  },
  'subscriptions-cost': {
    longDescription: 'Stellt jedes Abonnement auf dieselbe Grundlage, indem es seinen Preis durch die Zahl der abgedeckten Monate teilt. Jede Zeile besteht aus einem Namen, einem Preis und einem Zeitraum in Monaten, und der Zeitraum ist eine Zahl und kein Wort, weil ein Vorgabewert keinen Weg zur Übersetzung hat — „12“ liest sich überall gleich, während „jährlich“ eine Sprache in die andere tragen würde. Die Jahressumme wird aus der ungerundeten Monatssumme gebildet: eine Zwischenzahl zu runden und danach mit zwölf zu multiplizieren ist ein verlässlicher Weg, um sich um ein paar Einheiten mit sich selbst zu widersprechen.',
    howToUse: [
      'Trage ein Abonnement je Zeile ein: Name, Preis und Zeitraum in Monaten.',
      'Monatliche Abrechnung ist 1, jährliche 12, vierteljährliche 3.',
      'Der Name darf mehrere Wörter haben: „Cloudspeicher gross 19.90 12“.',
      'Lies die Monatszahl ab — sie macht die Tarife vergleichbar.',
    ],
    howItWorks: 'Jede Zeile steuert Preis ÷ Monate bei. Ihre Summe sind die Monatskosten, und das Zwölffache dieser Summe sind die Jahreskosten.',
    example: '2,99 € monatlich, 19,90 € jährlich und 1,69 € monatlich ergeben 6,34 € im Monat.',
    faq: [
      { q: 'Warum ist der Zeitraum eine Zahl und nicht „monatlich“ oder „jährlich“?', a: 'Weil der Vorgabewert eines Feldes in jeder Sprache derselbe ist. Eine Zahl liest sich in allen gleich; ein Wort müsste russisch, englisch oder ukrainisch sein und wäre in den anderen falsch.' },
      { q: 'Wie trage ich einen Vierteljahrestarif ein?', a: 'Als 3 Monate. Jeder Zeitraum geht — ein Zweijahrestarif sind 24.' },
      { q: 'Warum ist die Jahreszahl nicht das Zwölffache des gerundeten Monats?', a: 'Weil erst zu runden und danach zu multiplizieren abweicht. Die Jahressumme folgt aus der genauen Monatssumme, die beiden Zahlen stimmen also überein.' },
      { q: 'Wird eine kostenlose Probezeit berücksichtigt?', a: 'Nicht unmittelbar. Trage den Preis ein, der dir tatsächlich berechnet wird; eine Probezeit mit null wird angenommen und steuert schlicht nichts bei.' },
      { q: 'Ist der billigste Monatstarif immer der billigste?', a: 'Je Monat ja — genau das zeigt dieser Vergleich. Ob ein Jahrestarif, den du nach zwei Monaten nicht mehr nutzt, billiger war, ist eine andere Frage.' },
    ],
  },
  'tip': {
    longDescription: 'Rechnet ein Trinkgeld nach dem von dir gewählten Prozentsatz auf die Rechnung und teilt die Summe durch die Zahl der Personen. Jeden Anteil aufzurunden rechnet auch die Summe neu, denn wenn alle glatte Scheine hinlegen, zahlt der Tisch mehr als die Rechnung — die alte Zahl stehen zu lassen wäre unwahr. Den Prozentsatz setzt du selbst: die Gepflogenheiten unterscheiden sich nach Land und Lokal.',
    howToUse: [
      'Trage den Rechnungsbetrag ein.',
      'Setze den Trinkgeldsatz, den du geben willst.',
      'Trage ein, wie viele Personen teilen.',
    ],
    howItWorks: 'Trinkgeld = Rechnung × Prozent ÷ 100; Summe = Rechnung + Trinkgeld; jeder Anteil ist die Summe geteilt durch die Zahl der Personen.',
    example: 'Eine Rechnung über 54,00 € mit 10 Prozent Trinkgeld ergibt 59,40 €, also 14,85 € je Person bei vier Personen.',
    faq: [
      { q: 'Wie viel Trinkgeld soll ich geben?', a: 'Das hängt von Land und Lokal ab, den Prozentsatz wählst du deshalb selbst. Der Rechner schlägt keine Norm vor und trägt keine für dich ein.' },
      { q: 'Was bewirkt das Aufrunden je Anteil?', a: 'Es rundet jede Person auf eine glatte Einheit, was meist etwas mehr als die Rechnung ergibt. Dieser Überschuss steht in einer eigenen Zeile, damit nichts verborgen bleibt.' },
      { q: 'Wird ein bereits enthaltener Bedienzuschlag abgezogen?', a: 'Nein. Ob ein Bedienzuschlag das Trinkgeld ersetzt, ist eine Beurteilung deiner Rechnung und nichts, was die Rechnerei entscheiden kann.' },
      { q: 'Kann ich ihn ohne Aufteilen nutzen?', a: 'Ja. Lass die Zahl bei eins, und du bekommst schlicht das Trinkgeld und die Summe.' },
    ],
  },
  'trip-budget': {
    longDescription: 'Baut ein Reisebudget aus Posten auf, die verschieden skalieren: Übernachtungen werden mit der Zahl der Nächte multipliziert, das Essen mit Tagen und Reisenden zugleich, während Fahrt und Unternehmungen einzelne Beträge für die ganze Reise sind. Nächte und Tage werden mit Absicht auseinandergehalten: eine Reise über fünf Tage sind vier Nächte, und dieselbe Zahl in beide Formeln zu geben setzt die Unterkunft um eine volle Nacht zu hoch an. Das Ergebnis zeigt die Summe samt dem, was die Reise jeden Reisenden und jeden Tag kostet.',
    howToUse: [
      'Trage die Zahl der Übernachtungen und die Zahl der Reisetage ein — sie unterscheiden sich meist um eins.',
      'Trage den Preis je Nacht und das Essensbudget je Tag für einen Reisenden ein.',
      'Ergänze Fahrt und Unternehmungen als Summen für die ganze Reise.',
      'Trage sonstige Kosten für Visum, Versicherung oder Mitbringsel ein.',
    ],
    howItWorks: 'Unterkunft = Nächte × Preis je Nacht. Essen = Tage × Reisende × Tagessatz. Fahrt, Unternehmungen und sonstige Kosten kommen als Summen der Reise hinzu. Das Ergebnis wird danach durch Reisende und durch Tage geteilt.',
    example: 'Zwei Personen für fünf Tage und vier Nächte: 400 € Unterkunft, 300 € Essen, 240 € Fahrt und 100 € Unternehmungen — 1040 € für die Reise.',
    faq: [
      { q: 'Warum werden Nächte und Tage getrennt eingetragen?', a: 'Weil eine Reise über fünf Tage gewöhnlich vier Nächte sind. Die Tage in die Unterkunftskosten zu geben rechnet dem Budget eine ganze Nacht zu viel zu.' },
      { q: 'Gilt das Essensbudget für alle zusammen?', a: 'Nein — trage den Betrag für einen Reisenden je Tag ein, und der Rechner multipliziert ihn sowohl mit den Tagen als auch mit der Zahl der Reisenden.' },
      { q: 'Wohin gehören Flüge?', a: 'In die Fahrt, als Summe für die ganze Reise. Wurden die Tickets einzeln gekauft, trage ihre Gesamtsumme ein.' },
      { q: 'Was zeigen die Kosten je Tag?', a: 'Das ganze Budget geteilt durch die Zahl der Tage, einmalige Kosten wie Tickets eingeschlossen. Es ist ein Maßstab, um Reisen verschiedener Länge zu vergleichen.' },
      { q: 'Werden Wechselkurse angewendet?', a: 'Nein — trage jeden Betrag in einer einzigen Währung ein. Nutze vorher den Umrechner, wenn manche Kosten in einer anderen anfallen.' },
    ],
  },
  'water-heating': {
    longDescription: 'Wasser ist der wärmehungrigste Stoff im Haus: hundert Liter um fünfzig Grad zu erwärmen kostet fast sechs Kilowattstunden, und ein Heizstab mit zwei Kilowatt braucht dafür über drei Stunden. Daher die praktische Regel, dass es fast immer mehr Leistung kostet, bei Bedarf zu erwärmen, was sich im Voraus erwärmen ließe. Der Wirkungsgrad ist ein Feld — ein elektrischer Heizstab liegt bei rund 99 %, ein Speicher mit Mantelverlusten darunter, ein Gasgerät merklich darunter.',
    howToUse: [
      'Ein Liter Wasser zählt als ein Kilogramm: bei häuslichen Temperaturen liegt der Unterschied unter vier Prozent.',
      'Setze den Wirkungsgrad nach Bauart: ein elektrischer Heizstab rund 99 %, ein Speicher mit Verlusten darunter.',
      'Das Abkühlen während des Aufheizens steckt nicht im Modell: bei einem gut gedämmten Speicher vertretbar, bei einem offenen Gefäß nicht.',
      'Die Zeile zur Energie nennt den Verbrauch in Kilowattstunden — nutze sie, um den Lauf zu bepreisen.',
    ],
    howItWorks: 'Q = m·c·ΔT mit c = 4186 J/(kg·K); Zeit = Q / (Leistung × Wirkungsgrad).',
    example: 'Hundert Liter von 10 auf 60 Grad brauchen bei 2 kW und 95 % genau 3,06 Stunden.',
    faq: [
      { q: 'Warum ist das Erwärmen von Wasser so energiehungrig?', a: 'Wasser hat eine ungewöhnlich hohe spezifische Wärmekapazität — 4186 Joule je Kilogramm und Grad, das Vierfache von Luft und das Zehnfache von Stahl. Genau deshalb taugt es als Wärmeträger, und genau deshalb ist es teuer zu erwärmen.' },
      { q: 'Was bringt die doppelte Leistung?', a: 'Genau die halbe Zeit: die Energie bleibt dieselbe, nur die Rate ändert sich. Der Verbrauch in Kilowattstunden bleibt stehen, während die Spitzenlast auf der Leitung sich verdoppelt.' },
      { q: 'Soll das Abkühlen berücksichtigt werden?', a: 'Bei einem gedämmten Speicher werden die Verluste während des Aufheizens gewöhnlich vernachlässigt. Bei einem offenen Gefäß oder einem langen Aufheizen zählen sie, und die wirkliche Zeit übersteigt die Rechnung.' },
      { q: 'Warum hat ein Gasgerät einen geringeren Wirkungsgrad?', a: 'Ein Teil der Wärme geht mit dem Abgas fort. Ein gewöhnliches Gerät schafft 80–85 %; ein Brennwertgerät liegt darüber, weil es auch die Wärme des Wasserdampfs zurückgewinnt.' },
    ],
  },
  'yeast-convert': {
    longDescription: 'Rezepte sind in der Hefe geschrieben, die der Verfasser zur Hand hatte, und im Laden liegt eine andere. Das Verhältnis ist gesichert und folgt aus dem Wassergehalt: frische Hefe besteht zu rund siebzig Prozent aus Wasser, es braucht also ein Drittel so viel Trockenhefe und ein Viertel so viel Instanthefe. Alle drei Zahlen stehen zugleich da, es gibt also nichts zweimal umzurechnen, wenn das Rezept das eine und die Packung das andere sagt.',
    howToUse: [
      'Wähle links die Hefe, die das Rezept verlangt, und rechts die, die du tatsächlich hast.',
      'Das Verhältnis frisch : trocken : instant gilt als 1 : 1/3 : 1/4.',
      'Trockenhefe wird meist in warmer Flüssigkeit angesetzt; Instanthefe wird unmittelbar unter das Mehl gemischt.',
      'Die Zeile mit dem Verhältnis ist der Umrechnungsfaktor: 0,25 bedeutet ein Viertel des Gewichts.',
    ],
    howItWorks: 'Frische Hefe gilt als eins, Trockenhefe 1/3, Instanthefe 1/4; das Gewicht wird über die frische Hefe umgerechnet.',
    example: '30 g frische Hefe werden durch 7,5 g Instanthefe ersetzt.',
    faq: [
      { q: 'Woher kommt das Verhältnis eins zu drei?', a: 'Aus dem Wassergehalt. Frische Hefe besteht zu rund siebzig Prozent aus Wasser und Trockenhefe fast gar nicht, dieselbe Triebkraft passt also in etwa ein Drittel des Gewichts.' },
      { q: 'Wie unterscheidet sich Trockenhefe von Instanthefe?', a: 'In Korngröße und Handhabung: Trockenhefe wird in warmer Flüssigkeit gelöst und aufschäumen gelassen, Instanthefe kommt unmittelbar ins Mehl. Instanthefe braucht etwas weniger Gewicht, daher ein Viertel statt einem Drittel.' },
      { q: 'Kann ich Hefe stattdessen nach Volumen tauschen?', a: 'Nein — das Verhältnis gilt nach Gewicht. Ein Löffel frische und ein Löffel trockene Hefe unterscheiden sich in Dichte und Wassergehalt, ein Tausch nach Volumen liegt also deutlich weiter daneben.' },
      { q: 'Ändert sich die Gehzeit?', a: 'Ein wenig. Instanthefe treibt den Teig meist etwas schneller, während frische Hefe bei langer kalter Führung mehr Geschmack gibt. Das Verhältnis berücksichtigt das nicht — es geht allein um das Gewicht.' },
    ],
  },
};
