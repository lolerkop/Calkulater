import type { DeDetailedContent } from './types';

export const deFinance3Content: Partial<Record<string, DeDetailedContent>> = {
  'dti': {
    longDescription: 'Die Schuldendienstquote teilt die monatlichen Kreditraten durch das monatliche Einkommen. Banken lesen sie als Maß dafür, wie viel Spielraum einem Kreditnehmer bleibt, und die hier gezeigten Schwellen sind verbreitete Richtwerte und keine Rechtsvorschrift.',
    howToUse: [
      'Trage die gesamten monatlichen Kreditraten ein.',
      'Trage das monatliche Einkommen ein.',
      'Lies die Quote und den Rest ab.',
    ],
    howItWorks: 'Quote = Kreditraten ÷ Einkommen × 100. Bis 30 % gilt meist als bequem, bis 43 % als erhöht, darüber als hoch.',
    example: 'Raten von 900 € bei einem Einkommen von 3000 € ergeben eine Quote von 30 %.',
    faq: [
      { q: 'Welche Raten zählen mit?', a: 'Regelmäßige Verpflichtungen: Kredit- und Darlehensraten, Mindestbeträge auf Karten, Ratenkäufe. Miete und Nebenkosten bleiben meist außen vor, sofern deine Bank sie nicht einbezieht.' },
      { q: 'Einkommen vor oder nach Steuern?', a: 'Nimm den Betrag, der dich tatsächlich erreicht. Das Einkommen vor Steuern zu nehmen setzt die Belastung zu niedrig an.' },
      { q: 'Sind die Schwellen eine Regel?', a: 'Nein. Es sind verbreitete Richtwerte; jede Bank wendet eigene Grenzen und eine eigene Liste dessen an, was als Schuld zählt.' },
      { q: 'Warum übersteigt die Quote 100 %?', a: 'Die Raten sind größer als das Einkommen. Der Rechner zeigt das, statt zu deckeln, denn die Lage selbst ist die Antwort.' },
    ],
  },
  'early-repayment': {
    longDescription: 'Eine Sondertilgung wirkt auf die Restschuld, und die Restschuld setzt die Zinsen des nächsten Monats — deshalb verstärkt sich die Wirkung selbst, und deshalb gibt es dafür keine geschlossene Formel. Die Rechnung geht das Darlehen Monat für Monat durch: die Zinsen auf die derzeitige Restschuld gehen von der Rate ab, der Rest mindert die Schuld, und die kleinere Restschuld erzeugt beim nächsten Mal weniger Zinsen. Bei einem langen teuren Darlehen ist das Ergebnis erstaunlich: 200 € im Monat auf ein Darlehen über zwanzig Jahre zu achtzehn Prozent kürzen die Laufzeit von 240 auf 108 Raten und sparen mehr als die ursprüngliche Summe. Die Ersparnis wird an dem gemessen, was der Plan gekostet hätte, denn genau danach wird gefragt.',
    howToUse: [
      'Trage Darlehenssumme und Jahreszins ein.',
      'Trage die ursprüngliche Laufzeit in Jahren ein.',
      'Trage ein, wie viel du monatlich zusätzlich zahlen willst.',
      'Vergewissere dich, dass deine Bank Sondertilgungen auf die Schuld anrechnet und nicht auf künftige Raten.',
    ],
    howItWorks: 'Zuerst wird die planmäßige Annuität berechnet, danach wird das Darlehen Monat für Monat mit dem Zusatzbetrag getilgt. Die Ersparnis ist die planmäßige Summe minus dem tatsächlich Gezahlten.',
    example: 'Bei 60 000 € zu 18 % über 20 Jahre endet das Darlehen mit 200 € Sondertilgung im Monat nach 108 statt 240 Raten.',
    faq: [
      { q: 'Verkürzt die Sondertilgung die Laufzeit oder die Rate?', a: 'Hier verkürzt sie die Laufzeit, was weit mehr Zinsen spart. Viele Banken bieten beides; die Rate zu senken hält dich die volle Laufzeit in der Schuld und spart viel weniger.' },
      { q: 'Warum gibt es dafür keine einfache Formel?', a: 'Weil jede Sondertilgung die Restschuld ändert, die die Zinsen des nächsten Monats ändert, die ändern, wie viel der folgenden Rate die Schuld mindert. Die Kette muss Monat für Monat durchgegangen werden.' },
      { q: 'Lohnt sich eine Sondertilgung immer?', a: 'Vergleiche den Darlehenszins mit dem, was dasselbe Geld anderswo brächte. Ein Darlehen zu achtzehn Prozent zu tilgen ist eine sichere Rendite von achtzehn Prozent; gegen eine Baufinanzierung zu drei Prozent ist die Antwort weit weniger klar.' },
      { q: 'Was, wenn die Rate die Zinsen nicht deckt?', a: 'Dann wächst die Schuld, statt zu fallen, und das Darlehen endet nie. Die Rechnung weist eine solche Eingabe ab, statt Tausende Monate zu zählen.' },
    ],
  },
  'emergency-fund': {
    longDescription: 'Ein Notgroschen wird in Monaten gemessen und nicht in Geld. Zehntausend Euro sind bei Ausgaben von 1700 € sechs ruhige Monate und bei Ausgaben von 6000 € keine zwei, das Ziel wird deshalb in Monaten gesetzt und der Betrag folgt daraus und nicht umgekehrt. Fortschritt und Deckung werden mit Absicht beim Ziel gedeckelt: über das Ziel hinaus zu sparen gibt dir keine hundertzwanzig Prozent eines Polsters, sondern ein Polster plus übriges Geld, und dieses übrige Geld gehört in eine andere Rechnung — eine über Rendite und nicht über Sicherheit.',
    howToUse: [
      'Trage deine wirklichen Monatsausgaben ein und nicht dein Einkommen.',
      'Wähle, wie viele Monate an Deckung du willst.',
      'Trage ein, was du dafür bereits zurückgelegt hast.',
      'Zähle nur Geld, das du innerhalb eines oder zweier Tage erreichen könntest.',
    ],
    howItWorks: 'Ziel = Monatsausgaben × Monate an Deckung. Der Fortschritt ist der zurückgelegte Betrag gegen dieses Ziel, gedeckelt bei hundert Prozent.',
    example: 'Ausgaben von 1700 € brauchen für sechs Monate 10 200 €; 4200 € zurückgelegt decken 2,471 Monate.',
    faq: [
      { q: 'Wie viele Monate soll der Notgroschen decken?', a: 'Drei bis sechs ist der übliche Rat bei festem Angestelltenverhältnis, und sechs bis zwölf bei unregelmäßigem Einkommen, einem einzigen Verdienenden oder einem besonderen Beruf, dessen Ersatz länger dauert.' },
      { q: 'Ausgaben oder Einkommen?', a: 'Ausgaben, und zwar die wirklichen. Das Einkommen setzt das Ziel für jeden zu hoch an, der einen Teil davon spart, und der Notgroschen deckt das, was du ausgeben musst, und nicht das, was du gerade verdienst.' },
      { q: 'Wo soll der Notgroschen liegen?', a: 'Irgendwo, wo er innerhalb eines oder zweier Tage erreichbar ist und keinen Kursschwankungen ausgesetzt. Ein Notgroschen, an den du an dem Tag nicht herankommst, an dem du deine Stelle verlierst, erfüllt seine einzige Aufgabe nicht.' },
      { q: 'Warum ist der Fortschritt bei hundert Prozent gedeckelt?', a: 'Weil ein Notgroschen entweder vollständig ist oder nicht. Alles über dem Ziel ist gewöhnliches Sparen, und beides zu vermengen verbirgt, wann das Sicherheitsziel tatsächlich erreicht war.' },
    ],
  },
  'freelance-rate': {
    longDescription: 'Rechnet rückwärts: nicht „was verdiene ich zu diesem Satz“, sondern „welchen Satz muss ich verlangen, um so viel netto zu behalten“. Zwischen dem Zieleinkommen und dem Satz stehen zwei Korrekturen, und ohne sie fällt der Stundenpreis regelmäßig zu niedrig aus. Die erste ist der abrechenbare Anteil: ein Teil jeder Woche geht für E-Mails, Rechnungen und die Suche nach Aufträgen drauf, das Einkommen über alle Arbeitsstunden zu teilen heißt also, die halbe Zeit umsonst zu arbeiten. Die zweite ist die Steuer, die auf den Umsatz erhoben wird — du musst also mehr in Rechnung stellen, als du bekommen willst.',
    howToUse: [
      'Trage den Betrag ein, den du monatlich netto behalten willst.',
      'Trage die Arbeitstage und Arbeitsstunden ein, die du aufbringen willst.',
      'Setze den abrechenbaren Anteil — bei den meisten sind es 50–75 % und nicht 100.',
      'Ergänze deine Betriebskosten und den Satz deiner Besteuerung.',
    ],
    howItWorks: 'Abrechenbare Stunden = Tage × Stunden × Anteil. Du musst (Einkommen + Kosten) ÷ (1 − Steuersatz) in Rechnung stellen, denn die Steuer wird auf den Umsatz erhoben. Der Stundensatz ist dieser Betrag ÷ abrechenbare Stunden.',
    example: 'Um bei 21 Tagen zu 6 Stunden und 70 % abrechenbarer Zeit 3000 € netto zu behalten, kostet eine Stunde 39,80 €.',
    faq: [
      { q: 'Warum nicht das Einkommen über alle Arbeitsstunden teilen?', a: 'Weil ein Teil der Zeit nie abgerechnet wird: E-Mails, Rechnungen, Überarbeitungen und die Suche nach Aufträgen. Jede Stunde mitzuzählen setzt den Satz genau um diesen Anteil zu niedrig an.' },
      { q: 'Welchen abrechenbaren Anteil soll ich nehmen?', a: 'Bei den meisten Selbstständigen liegt er zwischen 50 und 75 %. Es ist eine Schätzung und keine Norm, deshalb wird er von Hand eingetragen — ermittle ihn aus deinem eigenen letzten Monat.' },
      { q: 'Warum wird die Steuer geteilt und nicht addiert?', a: 'Die Steuer wird auf das erhoben, was du bekommst, und nicht auf das, was du willst. Um bei einem Satz von 19 % 3000 € zu behalten, musst du 3703,70 € in Rechnung stellen und nicht 3570 €.' },
      { q: 'Was zählt als Betriebskosten?', a: 'Abonnements, Ausstattung, Miete für einen Arbeitsplatz und Plattformgebühren — alles, was aus dem Einkommen bezahlt wird, bevor es dir gehört.' },
      { q: 'Ist der Tagessatz der Verdienst eines vollen Tages?', a: 'Er ist der abrechenbare Teil eines Tages zum berechneten Satz. Ein voller Arbeitstag ist länger, weil ein Teil davon nicht abgerechnet wird.' },
    ],
  },
  'home-equity': {
    longDescription: 'Eine Bank sieht nicht darauf, wie viel du getilgt hast, sondern darauf, wie viel Schuld insgesamt auf der Immobilie lastet. Die Grenze folgt deshalb aus dem Wert der Immobilie beim zulässigen Beleihungsauslauf, und der verfügbare Betrag ist diese Grenze minus der Restschuld. Ist die Grenze ausgeschöpft, fällt er auf null, selbst wenn in der Wohnung reichlich Eigenkapital steckt. Trage deinen eigenen Beleihungsauslauf ein: er unterscheidet sich zwischen Banken und Programmen, und die Regel eines anderen fest einzubauen führte hier in die Irre.',
    howToUse: [
      'Nimm den Verkehrswert und nicht den Kaufpreis: die Bank bewertet die Immobilie neu.',
      'Die Restschuld ist das, was noch zu tilgen ist, und nicht das, was bereits getilgt wurde.',
      'Der zulässige Beleihungsauslauf unterscheidet sich zwischen Programmen; prüfe deinen und trage ihn hier ein.',
      'Die Rate ist eine Annuität auf den verfügbaren Betrag — eine Schätzung und kein Angebot einer Bank.',
    ],
    howItWorks: 'Grenze = Wert × Beleihungsauslauf; verfügbar = Grenze − Restschuld, nie unter null; die Rate ist eine Annuität auf den verfügbaren Betrag.',
    example: 'Bei einem Wert von 450 000 €, einer Restschuld von 160 000 € und einer Grenze von 80 Prozent sind 200 000 € verfügbar.',
    faq: [
      { q: 'Warum ist der verfügbare Betrag kleiner als mein Eigenkapital?', a: 'Weil eine Bank nicht dein ganzes Eigenkapital auszahlt: sie behält eine Reserve gegen einen Preisrückgang und die Kosten eines Verkaufs. Genau diese Reserve setzt die Grenze des Beleihungsauslaufs.' },
      { q: 'Was ist der Beleihungsauslauf?', a: 'Es ist das Verhältnis aller auf der Immobilie gesicherten Schulden zu ihrem Wert. Achtzig Prozent heißt, dass die Gesamtschuld nach dem neuen Darlehen achtzig Prozent des Werts nicht übersteigen darf.' },
      { q: 'Warum kann der verfügbare Betrag null sein?', a: 'Erreicht die bestehende Restschuld die Grenze bereits, ist keine freie Sicherheit mehr da. Das kommt nach einem jüngst getätigten Kauf mit wenig Eigenkapital vor oder wenn die Immobilienpreise fallen.' },
      { q: 'Ist das dasselbe wie eine Umschuldung?', a: 'Nein. Eine Umschuldung ersetzt das alte Darlehen durch ein neues; dies ist ein zusätzliches Darlehen neben dem bestehenden, und sein Zinssatz liegt gewöhnlich über dem einer Baufinanzierung.' },
    ],
  },
  'inflation': {
    longDescription: 'Zeigt, was mit der Kaufkraft des Geldes über einen gewählten Zeitraum geschieht. Die Inflation zinst auf, statt sich zu addieren, weshalb die anschauliche Schätzung fast immer falsch ist: 8 % über zehn Jahre fressen nicht 80 % eines Betrags, sondern rund 54 %, denn der Prozentsatz jedes Jahres wird von Geld genommen, das bereits an Wert verloren hat. Beide Seiten desselben Faktors werden gezeigt — was ein heutiger Betrag später kaufen kann und wie viel künftiges Geld es bräuchte, um zu kaufen, was er heute kauft. Der Satz ist deine Annahme und keine Vorhersage: dieser Rechner kennt die künftige Inflation nicht und gibt keine als bekannt aus.',
    howToUse: [
      'Trage den Betrag in heutigem Geld ein.',
      'Trage die erwartete jährliche Inflation ein.',
      'Trage den Zeitraum in Jahren ein.',
      'Der Satz ist deine Annahme und keine Vorhersage.',
    ],
    howItWorks: 'Preisfaktor = (1 + Inflation)^Jahre. Kaufkraft = Betrag ÷ Faktor. Nötiges künftiges Geld = Betrag × Faktor. Verlorener Anteil = 1 − 1 ÷ Faktor.',
    example: '10 000 € behalten bei 8 % Inflation über 10 Jahre die Kaufkraft von nur 4631,94 € — ein Verlust von 53,68 %.',
    faq: [
      { q: 'Warum sind 8 % über 10 Jahre nicht 80 %?', a: 'Weil die Inflation aufzinst, statt sich zu addieren: der Prozentsatz jedes Jahres wird von Geld genommen, das bereits an Wert verloren hat. Der wirkliche Verlust liegt bei rund 54 % und nicht bei 80 %.' },
      { q: 'Wie unterscheiden sich „Kaufkraft“ und „derselbe Wert in künftigem Geld“?', a: 'Es sind zwei Seiten desselben Faktors. Die erste sagt, was heutige 10 000 € später kaufen; die zweite, wie viele künftige Einheiten es bräuchte, um zu kaufen, was 10 000 € heute kaufen.' },
      { q: 'Amtlicher Index oder eigene Schätzung?', a: 'Möglichst die eigene. Ein amtlicher Index mittelt einen ganzen Warenkorb, während die persönliche Inflation davon abhängt, was du tatsächlich kaufst, und meist merklich vom Durchschnitt abweicht.' },
      { q: 'Darf ich eine negative Inflation eintragen?', a: 'Ja, das ist Deflation, und die Kaufkraft steigt dann. Sie ist selten und begleitet meist einen Abschwung, aber die Rechnung gilt.' },
      { q: 'Wie schütze ich Geld vor der Inflation?', a: 'Diese Rechnung berät nicht und kann es nicht. Sie zeigt allein das Ausmaß des Verlusts; welche Anlagen zu dir passen, hängt von deinem Zeitraum, deiner Risikobereitschaft und deinen Umständen ab.' },
    ],
  },
  'installment': {
    longDescription: 'Ermittelt die Rate eines Ratenkaufs: der Preis abzüglich der Anzahlung wird mit dem Aufschlag multipliziert und gleichmäßig über die Laufzeit geteilt. Auf den Restbetrag fallen keine Zinsen an — das unterscheidet einen Ratenkauf von einem Darlehen —, der Plan ist deshalb linear, und der Aufschlag wird einmal auf den ganzen Betrag erhoben. Eine Null-Prozent-Finanzierung ist kein Sonderfall, sondern ein Aufschlag von null: die Rate ist eine schlichte Division, und es gibt keine Mehrkosten.',
    howToUse: [
      'Trage den Kaufpreis und die Anzahlung ein.',
      'Gib die Laufzeit und den Aufschlag des Händlers an.',
      'Lies die Rate und den Plan ab.',
    ],
    howItWorks: 'Der finanzierte Betrag ist der Preis abzüglich der Anzahlung. Er wird mit dem Aufschlag multipliziert und gleichmäßig über die Monate geteilt. Die letzte Rate nimmt die durch das Runden übrig gebliebenen Cent auf, damit die Raten genau die Summe ergeben.',
    example: 'Ein Kauf über 600 € mit 100 € Anzahlung über sechs Monate bei 12 % Aufschlag ergibt eine Rate von 93,33 € und Mehrkosten von 60 €.',
    faq: [
      { q: 'Wie unterscheidet sich ein Ratenkauf von einem Darlehen?', a: 'Der Aufschlag wird einmal auf den ganzen Betrag erhoben, und auf den Restbetrag fallen keine Zinsen an. Das macht den Plan linear, und früher zu zahlen verkürzt die Laufzeit, ohne den Aufschlag zu mindern.' },
      { q: 'Wie bilde ich eine Null-Prozent-Finanzierung ab?', a: 'Lass den Aufschlag auf null. Der Betrag wird gleichmäßig über die Laufzeit geteilt, und es entstehen keine Mehrkosten — dafür braucht es keinen eigenen Modus.' },
      { q: 'Warum weicht die letzte Rate um ein paar Cent ab?', a: 'Weil die Summe selten glatt durch die Laufzeit teilbar ist. Der Rest geht in die letzte Rate, sonst ergäben die Raten nicht den Preis.' },
      { q: 'Sind Versicherung und Gebühren enthalten?', a: 'Nein. Rechnet der Händler sie dem Kauf zu, nimm sie in den Preis — die Rechnung ist linear, das Ergebnis bleibt also richtig.' },
    ],
  },
};
