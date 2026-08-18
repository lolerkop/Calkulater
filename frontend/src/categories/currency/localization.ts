// Копирайт и вопросы категории «Валюты» по локалям.
//
// Перенесено из общих карт i18n.ts дословно: тексты не перенабирались, а
// сериализованы из того же кода, который рендерил страницы до миграции.

import type { CategoryCopyByLocale, CategoryFaqByLocale } from '../types';

export const copy: CategoryCopyByLocale = {
  ru: {
    name: "Валюты",
    slug: "currency",
    description: "Конвертер валют и популярные валютные пары по официальным справочным курсам.",
    longDescription: "Валютные калькуляторы помогают быстро перевести сумму между популярными валютами и открыть отдельные страницы для частых пар вроде USD/EUR, EUR/MDL и USD/MDL. Курсы обновляются при сборке сайта из официальных данных Банка России. Перед обменом сверяйте коммерческий курс и комиссию конкретного банка или обменника.",
    seoTitle: "Конвертер валют — USD, EUR, MDL, RON и другие",
    seoDescription: "Онлайн-конвертер валют для USD, EUR, MDL, RON, UAH, PLN, GBP, CHF, TRY. Официальные справочные курсы с датой обновления.",
    h1: "Валютные калькуляторы",
  },
  en: {
    name: "Currency",
    slug: "currency",
    description: "Currency converter and popular pairs for quick travel, shopping and budget estimates.",
    longDescription: "Currency calculators convert amounts between common currencies using Bank of Russia reference rates published for the displayed date. Banks and exchange services may use different buy, sell and fee-inclusive rates.",
    seoTitle: "Currency converter — USD, EUR, MDL, RON and more",
    seoDescription: "Online currency converter for USD, EUR, MDL, RON, UAH, PLN, GBP, CHF and TRY. Official reference rates with an update date.",
    h1: "Currency calculators",
  },
  es: {
    name: "Divisas",
    slug: "divisas",
    description: "Conversor de divisas y pares populares para viajes, compras y presupuestos rápidos.",
    longDescription: "Las calculadoras de divisas convierten importes entre monedas comunes y ofrecen páginas separadas para pares populares. Las tasas son de demostración para probar la interfaz.",
    seoTitle: "Conversor de divisas — USD, EUR, MDL, RON y más",
    seoDescription: "Conversor online para USD, EUR, MDL, RON, UAH, PLN, GBP, CHF y TRY. Tasas demo para estimaciones rápidas.",
    h1: "Calculadoras de divisas",
  },
  de: {
    name: "Währungen",
    slug: "waehrungen",
    description: "Währungsrechner und beliebte Paare für Reisen, Einkäufe und schnelle Budgetschätzungen.",
    longDescription: "Währungsrechner konvertieren Beträge zwischen gängigen Währungen und bieten separate Seiten für beliebte Paare. Kurse sind Demo-Werte für die Oberfläche.",
    seoTitle: "Währungsrechner — USD, EUR, MDL, RON und mehr",
    seoDescription: "Online-Währungsrechner für USD, EUR, MDL, RON, UAH, PLN, GBP, CHF und TRY. Demo-Kurse für schnelle Schätzungen.",
    h1: "Währungsrechner",
  },
  fr: {
    name: "Devises",
    slug: "devises",
    description: "Convertisseur de devises et paires populaires pour voyages, achats et budgets rapides.",
    longDescription: "Les calculatrices de devises convertissent des montants entre monnaies courantes et proposent des pages séparées pour les paires populaires. Les taux sont des valeurs de démonstration pour tester l’interface.",
    seoTitle: "Convertisseur de devises - USD, EUR, MDL, RON et plus",
    seoDescription: "Convertisseur en ligne pour USD, EUR, MDL, RON, UAH, PLN, GBP, CHF et TRY. Taux de démonstration pour estimations rapides.",
    h1: "Calculatrices de devises",
  },
  pt: {
    name: "Moedas",
    slug: "moedas",
    description: "Conversor de moedas e pares populares para viagens, compras e estimativas rápidas de orçamento.",
    longDescription: "As calculadoras de moedas convertem valores entre moedas comuns e oferecem páginas separadas para pares populares. As taxas são valores de demonstração para testar a interface.",
    seoTitle: "Conversor de moedas - USD, EUR, MDL, RON e mais",
    seoDescription: "Conversor online para USD, EUR, MDL, RON, UAH, PLN, GBP, CHF e TRY. Taxas de demonstração para estimativas rápidas.",
    h1: "Calculadoras de moedas",
  },
  it: {
    name: "Valute",
    slug: "valute",
    description: "Convertitore di valute e coppie popolari per viaggi, acquisti e stime rapide di budget.",
    longDescription: "I calcolatori di valute convertono importi tra monete comuni e offrono pagine separate per coppie popolari. I tassi sono valori dimostrativi per testare l’interfaccia.",
    seoTitle: "Convertitore di valute - USD, EUR, MDL, RON e altro",
    seoDescription: "Convertitore online per USD, EUR, MDL, RON, UAH, PLN, GBP, CHF e TRY. Tassi dimostrativi per stime rapide.",
    h1: "Calcolatori di valute",
  },
  pl: {
    name: "Waluty",
    slug: "waluty",
    description: "Przelicznik walut i popularne pary do szybkich szacunkow podrozy, zakupow i budzetu.",
    longDescription: "Kalkulatory walut przeliczaja kwoty miedzy popularnymi walutami i daja osobne strony dla czesto sprawdzanych par. Kursy w MVP sa demonstracyjne, wiec przed transakcja sprawdz aktualny kurs.",
    seoTitle: "Przelicznik walut - USD, EUR, MDL, RON i wiecej",
    seoDescription: "Przelicznik walut online dla USD, EUR, MDL, RON, UAH, PLN, GBP, CHF i TRY. Demo kursy do szybkich szacunkow.",
    h1: "Kalkulatory walut",
  },
  nl: {
    name: "Valuta",
    slug: "valuta",
    description: "Valutaconverter en populaire valutaparen voor reizen, aankopen en snelle budgetschattingen.",
    longDescription: "Valutarekentools zetten bedragen om tussen veelgebruikte valuta en geven aparte pagina's voor populaire paren. Koersen zijn demo-waarden in dit MVP.",
    seoTitle: "Valutaconverter - USD, EUR, MDL, RON en meer",
    seoDescription: "Online valutaconverter voor USD, EUR, MDL, RON, UAH, PLN, GBP, CHF en TRY. Demo-koersen voor snelle schattingen.",
    h1: "Valutarekentools",
  },
  ro: {
    name: "Valute",
    slug: "valute",
    description: "Convertor valutar si perechi populare pentru calatorii, cumparaturi si estimari rapide de buget.",
    longDescription: "Calculatoarele valutare convertesc sume intre monede uzuale si ofera pagini separate pentru perechi populare. Cursurile sunt valori demonstrative in acest MVP.",
    seoTitle: "Convertor valutar - USD, EUR, MDL, RON si altele",
    seoDescription: "Convertor valutar online pentru USD, EUR, MDL, RON, UAH, PLN, GBP, CHF si TRY. Cursuri demo pentru estimari rapide.",
    h1: "Calculatoare valutare",
  },
  id: {
    name: "Mata uang",
    slug: "mata-uang",
    description: "Konverter mata uang dan pasangan populer untuk perjalanan, belanja, dan estimasi anggaran cepat.",
    longDescription: "Kalkulator mata uang mengonversi jumlah antar mata uang umum dan menyediakan halaman terpisah untuk pasangan populer. Kurs adalah nilai demo dalam MVP ini.",
    seoTitle: "Konverter mata uang - USD, EUR, MDL, RON, dan lainnya",
    seoDescription: "Konverter mata uang online untuk USD, EUR, MDL, RON, UAH, PLN, GBP, CHF, dan TRY. Kurs demo untuk estimasi cepat.",
    h1: "Kalkulator mata uang",
  },
  tr: {
    name: "Döviz",
    slug: "doviz",
    description: "Seyahat, alışveriş ve hızlı bütçe tahminleri için döviz çevirici ve popüler pariteler.",
    longDescription: "Döviz hesaplayıcıları tutarları yaygın para birimleri arasında çevirir ve popüler pariteler için ayrı sayfalar sunar. Bu MVP içinde kurlar demo değerlerdir.",
    seoTitle: "Döviz çevirici - USD, EUR, MDL, RON ve daha fazlası",
    seoDescription: "USD, EUR, MDL, RON, UAH, PLN, GBP, CHF ve TRY için online döviz çevirici. Hızlı tahminler için demo kurlar.",
    h1: "Döviz hesaplayıcıları",
  },
  vi: {
    name: "Tiền tệ",
    slug: "tien-te",
    description: "Bộ đổi tiền và các cặp tiền phổ biến cho du lịch, mua sắm và ước tính ngân sách nhanh.",
    longDescription: "Máy tính tiền tệ đổi số tiền giữa các đồng tiền phổ biến và có trang riêng cho các cặp thường dùng. Tỷ giá trong MVP này là giá trị demo.",
    seoTitle: "Bộ đổi tiền - USD, EUR, MDL, RON và nhiều đồng khác",
    seoDescription: "Bộ đổi tiền online cho USD, EUR, MDL, RON, UAH, PLN, GBP, CHF và TRY. Tỷ giá demo cho ước tính nhanh.",
    h1: "Máy tính tiền tệ",
  },
  cs: {
    name: "Měny",
    slug: "meny",
    description: "Převodník měn a oblíbené měnové páry pro cestování, nákupy a rychlé rozpočty.",
    longDescription: "Měnové kalkulačky převádějí částky mezi běžnými měnami a nabízejí samostatné stránky pro oblíbené páry. Kurzy jsou v MVP demonstrační hodnoty.",
    seoTitle: "Převodník měn - USD, EUR, MDL, RON a další",
    seoDescription: "Online převodník pro USD, EUR, MDL, RON, UAH, PLN, GBP, CHF a TRY. Demo kurzy pro rychlé odhady.",
    h1: "Měnové kalkulačky",
  },
  uk: {
    name: "Валюти",
    slug: "valyuty",
    description: "Конвертер валют і популярні валютні пари для подорожей, покупок і швидкого бюджету.",
    longDescription: "Валютні калькулятори переводять суми між поширеними валютами за офіційними довідковими курсами Банку Росії на вказану дату. Це не курси купівлі чи продажу: банки та обмінні сервіси можуть застосовувати власний курс, спред і комісію.",
    seoTitle: "Конвертер валют - USD, EUR, MDL, RON та інші",
    seoDescription: "Онлайн-конвертер для USD, EUR, MDL, RON, UAH, PLN, GBP, CHF і TRY. Офіційні довідкові курси з датою оновлення.",
    h1: "Валютні калькулятори",
  },
  sk: {
    name: "Meny",
    slug: "meny",
    description: "Prevodník mien a obľúbené menové páry na cestovanie, nákupy a rýchle rozpočty.",
    longDescription: "Menové kalkulačky prevádzajú sumy medzi bežnými menami a ponúkajú samostatné stránky pre populárne páry. Kurzy sú v MVP demonštračné hodnoty.",
    seoTitle: "Prevodník mien - USD, EUR, MDL, RON a ďalšie",
    seoDescription: "Online prevodník pre USD, EUR, MDL, RON, UAH, PLN, GBP, CHF a TRY. Demo kurzy pre rýchle odhady.",
    h1: "Menové kalkulačky",
  },
  hu: {
    name: "Valuták",
    slug: "valutak",
    description: "Valutaváltó és népszerű devizapárok utazáshoz, vásárláshoz és gyors költségvetéshez.",
    longDescription: "A valutakalkulátorok gyakori pénznemek között váltanak összegeket, és külön oldalakat adnak népszerű devizapárokhoz. Az árfolyamok ebben az MVP-ben demonstrációs értékek.",
    seoTitle: "Valutaváltó - USD, EUR, MDL, RON és további pénznemek",
    seoDescription: "Online valutaváltó USD, EUR, MDL, RON, UAH, PLN, GBP, CHF és TRY pénznemekhez. Demo árfolyamok gyors becslésekhez.",
    h1: "Valutakalkulátorok",
  },
};

export const faq: CategoryFaqByLocale = {
  ru: [
    {
      q: "Откуда берутся курсы валют?",
      a: "При сборке сайт загружает последние опубликованные официальные справочные курсы Банка России. Банковские курсы покупки и продажи могут отличаться из-за спреда и комиссии.",
    },
    {
      q: "Какие валюты поддерживаются?",
      a: "USD, EUR, MDL, RON, UAH, PLN, GBP, CHF, TRY. Список можно расширить — напишите нам через раздел Контакты.",
    },
    {
      q: "Можно ли использовать конвертер для обмена?",
      a: "Конвертер подходит только для прикидки. Перед обменом всегда уточняйте актуальный курс в банке или обменном пункте.",
    },
    {
      q: "Можно ли посмотреть курс на конкретную дату?",
      a: "Сейчас исторический график не поддерживается. Конвертер показывает последний официальный справочный курс, доступный на дату сборки сайта.",
    },
  ],
  en: [
    {
      q: "Are the exchange rates live?",
      a: "No. The site uses official Bank of Russia reference rates updated during the site build. Check the displayed date and your bank or exchange service before a transaction.",
    },
    {
      q: "Which currencies are supported?",
      a: "The converter includes USD, EUR, MDL, RON, UAH, PLN, GBP, CHF and TRY.",
    },
    {
      q: "Can I use it for travel budgets?",
      a: "Yes, it is useful for quick estimates, but final exchange amounts can differ.",
    },
  ],
  es: [
    {
      q: "¿Los tipos de cambio son en vivo?",
      a: "En este MVP las tasas son valores demo. Comprueba el banco o la fuente oficial antes de cambiar dinero.",
    },
    {
      q: "¿Qué monedas admite?",
      a: "El conversor incluye USD, EUR, MDL, RON, UAH, PLN, GBP, CHF y TRY.",
    },
    {
      q: "¿Sirve para presupuestos de viaje?",
      a: "Sí, es útil para estimaciones rápidas, pero el importe final puede variar.",
    },
  ],
  de: [
    {
      q: "Sind die Wechselkurse live?",
      a: "In diesem MVP sind die Kurse Demo-Werte. Prüfe vor einem Umtausch die Bank oder eine offizielle Quelle.",
    },
    {
      q: "Welche Währungen werden unterstützt?",
      a: "Der Rechner enthält USD, EUR, MDL, RON, UAH, PLN, GBP, CHF und TRY.",
    },
    {
      q: "Eignet sich der Rechner für Reisebudgets?",
      a: "Ja, für schnelle Schätzungen. Der endgültige Betrag kann abweichen.",
    },
  ],
  fr: [
    {
      q: "Les taux de change sont-ils en direct ?",
      a: "Dans ce MVP, les taux sont des valeurs de démonstration. Vérifiez une source officielle ou bancaire avant une transaction.",
    },
    {
      q: "Quelles devises sont prises en charge ?",
      a: "Le convertisseur inclut USD, EUR, MDL, RON, UAH, PLN, GBP, CHF et TRY.",
    },
    {
      q: "Puis-je l’utiliser pour un budget voyage ?",
      a: "Oui, c’est utile pour des estimations rapides, mais les montants finaux peuvent différer.",
    },
  ],
  pt: [
    {
      q: "As taxas de câmbio são em tempo real?",
      a: "Neste MVP, as taxas são valores de demonstração. Verifique uma fonte oficial ou bancária antes de uma transação.",
    },
    {
      q: "Que moedas são suportadas?",
      a: "O conversor inclui USD, EUR, MDL, RON, UAH, PLN, GBP, CHF e TRY.",
    },
    {
      q: "Serve para orçamentos de viagem?",
      a: "Sim, é útil para estimativas rápidas, mas os valores finais podem ser diferentes.",
    },
  ],
  it: [
    {
      q: "I tassi di cambio sono in tempo reale?",
      a: "In questo MVP i tassi sono valori dimostrativi. Verifica una fonte ufficiale o bancaria prima di una transazione.",
    },
    {
      q: "Quali valute sono supportate?",
      a: "Il convertitore include USD, EUR, MDL, RON, UAH, PLN, GBP, CHF e TRY.",
    },
    {
      q: "Posso usarlo per un budget di viaggio?",
      a: "Sì, è utile per stime rapide, ma gli importi finali possono differire.",
    },
  ],
  pl: [
    {
      q: "Czy kursy walut sa aktualne?",
      a: "W tym MVP kursy sa wartosciami demonstracyjnymi. Przed wymiana pieniedzy sprawdz bank lub oficjalne zrodlo.",
    },
    {
      q: "Jakie waluty sa obslugiwane?",
      a: "Przelicznik obejmuje USD, EUR, MDL, RON, UAH, PLN, GBP, CHF i TRY.",
    },
    {
      q: "Czy nadaje sie do budzetu podrozy?",
      a: "Tak, przydaje sie do szybkich szacunkow, ale kwota koncowa moze sie roznic.",
    },
  ],
  nl: [
    {
      q: "Zijn de wisselkoersen live?",
      a: "In dit MVP zijn de koersen demo-waarden. Controleer een bank of officiele bron voordat je geld wisselt.",
    },
    {
      q: "Welke valuta worden ondersteund?",
      a: "De converter bevat USD, EUR, MDL, RON, UAH, PLN, GBP, CHF en TRY.",
    },
    {
      q: "Kan ik dit gebruiken voor een reisbudget?",
      a: "Ja, het is handig voor snelle schattingen, maar eindbedragen kunnen afwijken.",
    },
  ],
  ro: [
    {
      q: "Cursurile valutare sunt live?",
      a: "In acest MVP cursurile sunt valori demonstrative. Verifica banca sau o sursa oficiala inainte de schimb valutar.",
    },
    {
      q: "Ce valute sunt acceptate?",
      a: "Convertorul include USD, EUR, MDL, RON, UAH, PLN, GBP, CHF si TRY.",
    },
    {
      q: "Il pot folosi pentru buget de calatorie?",
      a: "Da, este util pentru estimari rapide, dar suma finala poate diferi.",
    },
  ],
  id: [
    {
      q: "Apakah kurs mata uang live?",
      a: "Dalam MVP ini kurs adalah nilai demo. Periksa bank atau sumber resmi sebelum menukar uang.",
    },
    {
      q: "Mata uang apa saja yang didukung?",
      a: "Konverter mencakup USD, EUR, MDL, RON, UAH, PLN, GBP, CHF, dan TRY.",
    },
    {
      q: "Apakah cocok untuk anggaran perjalanan?",
      a: "Ya, berguna untuk estimasi cepat, tetapi jumlah akhir bisa berbeda.",
    },
  ],
  tr: [
    {
      q: "Döviz kurları canlı mı?",
      a: "Bu MVP içinde kurlar demo değerlerdir. Para bozdurmadan önce banka veya resmi kaynakla kontrol edin.",
    },
    {
      q: "Hangi para birimleri destekleniyor?",
      a: "Çevirici USD, EUR, MDL, RON, UAH, PLN, GBP, CHF ve TRY içerir.",
    },
    {
      q: "Seyahat bütçesi için kullanılabilir mi?",
      a: "Evet, hızlı tahminler için kullanışlıdır; ancak nihai tutar farklı olabilir.",
    },
  ],
  vi: [
    {
      q: "Tỷ giá có phải thời gian thực không?",
      a: "Trong MVP này, tỷ giá là giá trị demo. Hãy kiểm tra ngân hàng hoặc nguồn chính thức trước khi đổi tiền.",
    },
    {
      q: "Hỗ trợ những đồng tiền nào?",
      a: "Bộ đổi tiền gồm USD, EUR, MDL, RON, UAH, PLN, GBP, CHF và TRY.",
    },
    {
      q: "Có dùng được cho ngân sách du lịch không?",
      a: "Có, công cụ hữu ích cho ước tính nhanh, nhưng số tiền cuối cùng có thể khác.",
    },
  ],
  cs: [
    {
      q: "Jsou kurzy živé?",
      a: "V tomto MVP jsou kurzy demonstrační hodnoty. Před směnou peněz ověřte kurz u banky nebo oficiálního zdroje.",
    },
    {
      q: "Které měny jsou podporované?",
      a: "Převodník obsahuje USD, EUR, MDL, RON, UAH, PLN, GBP, CHF a TRY.",
    },
    {
      q: "Hodí se pro cestovní rozpočet?",
      a: "Ano, je užitečný pro rychlé odhady, ale konečná částka se může lišit.",
    },
  ],
  uk: [
    {
      q: "Курси валют оновлюються в реальному часі?",
      a: "Ні. Сайт використовує офіційні довідкові курси Банку Росії, оновлені під час складання сайту. Перевіряйте показану дату та курс банку або обмінного сервісу.",
    },
    {
      q: "Які валюти підтримуються?",
      a: "Конвертер містить USD, EUR, MDL, RON, UAH, PLN, GBP, CHF і TRY.",
    },
    {
      q: "Чи підходить це для бюджету подорожі?",
      a: "Так, інструмент корисний для швидких оцінок, але фінальна сума може відрізнятися.",
    },
  ],
  sk: [
    {
      q: "Sú kurzy živé?",
      a: "V tomto MVP sú kurzy demonštračné hodnoty. Pred výmenou peňazí overte kurz v banke alebo oficiálnom zdroji.",
    },
    {
      q: "Ktoré meny sú podporované?",
      a: "Prevodník obsahuje USD, EUR, MDL, RON, UAH, PLN, GBP, CHF a TRY.",
    },
    {
      q: "Hodí sa to na cestovný rozpočet?",
      a: "Áno, nástroj je užitočný na rýchle odhady, ale konečná suma sa môže líšiť.",
    },
  ],
  hu: [
    {
      q: "Élő árfolyamokat használ a váltó?",
      a: "Ebben az MVP-ben az árfolyamok demonstrációs értékek. Pénzváltás előtt ellenőrizze az árfolyamot banknál vagy hivatalos forrásnál.",
    },
    {
      q: "Mely pénznemek támogatottak?",
      a: "A váltó tartalmazza az USD, EUR, MDL, RON, UAH, PLN, GBP, CHF és TRY pénznemeket.",
    },
    {
      q: "Használható utazási költségvetéshez?",
      a: "Igen, gyors becslésekhez hasznos, de a végső összeg eltérhet.",
    },
  ],
};
