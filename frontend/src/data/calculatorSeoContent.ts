import type { CalculatorDef, CalculatorSeoContent } from '../lib/types';

type SeoContentByLocale = Record<string, Record<string, CalculatorSeoContent>>;

export const calculatorSeoContent: SeoContentByLocale = {
  ru: {
    'credit-calculator': {
      intro:
        'Кредитный калькулятор считает примерный ежемесячный платеж, общую сумму выплат и переплату по кредиту. Он нужен тем, кто сравнивает предложения банков, планирует покупку в рассрочку или проверяет, потянет ли бюджет новый заем. Расчет особенно полезен до подачи заявки, когда нужно быстро понять разницу между сроком, ставкой и типом платежа.',
      howItWorks:
        'Расчет начинается с суммы кредита, срока и годовой процентной ставки. Если выбран аннуитетный платеж, калькулятор переводит годовую ставку в месячную и распределяет долг так, чтобы каждый месяц платеж был одинаковым. Внутри этого платежа доля процентов постепенно уменьшается, а доля погашения основного долга растет. Если выбран дифференцированный платеж, основной долг делится на равные части, а проценты каждый месяц считаются от оставшегося долга. Поэтому первые платежи обычно выше, зато общая переплата часто ниже. Итоговая сумма выплат складывается из всех месячных платежей, а переплата показывает разницу между этой суммой и первоначальным кредитом. Такой подход помогает увидеть не только первый платеж, но и полную стоимость заемных денег. Калькулятор не добавляет страхование, комиссии, платные услуги банка и штрафы за просрочку, поэтому результат стоит воспринимать как базовую модель кредита, а не как окончательный график договора.',
      example:
        'Допустим, пользователь хочет взять 500 000 ₽ на 5 лет под 14% годовых и выбирает аннуитетный платеж. В форму вводятся сумма 500000, срок 5 лет, ставка 14 и тип платежа “аннуитет”. Калькулятор покажет ежемесячный платеж около 11,6 тыс. ₽, общую выплату примерно 698 тыс. ₽ и переплату около 198 тыс. ₽. Это значит, что кредит выглядит посильным только если такой платеж стабильно помещается в ежемесячный бюджет вместе с обязательными расходами. Если после расчета заменить срок на 3 года, платеж вырастет, но переплата заметно уменьшится.',
      tips:
        'Главная ошибка при расчете кредита — смотреть только на ежемесячный платеж и забывать про итоговую переплату. Длинный срок снижает нагрузку на месяц, но почти всегда увеличивает сумму процентов. Вторая частая ошибка — сравнивать предложения банков без учета страховки, комиссии за обслуживание, платного снижения ставки и условий досрочного погашения. Если банк предлагает низкую ставку только при покупке дополнительных услуг, реальная выгода может исчезнуть. Для проверки лучше считать несколько сценариев: короткий срок, длинный срок, ставка выше на 1-2 пункта и досрочное погашение отдельными платежами. Результат калькулятора может отличаться от банковского графика, если банк считает проценты по точным датам, использует ежедневное начисление или добавляет обязательные платежи вне процентной ставки. Перед заявкой также проверьте, какой платеж останется комфортным при временном снижении дохода или росте расходов.',
      faq: [
        {
          q: 'Как рассчитать ежемесячный платеж по кредиту?',
          a: 'Введите сумму кредита, срок, годовую ставку и выберите тип платежа. При аннуитете платеж будет одинаковым каждый месяц, при дифференцированной схеме первые платежи выше и затем снижаются. Калькулятор покажет ориентировочный платеж, общую сумму выплат и переплату без учета страховок, комиссий и банковских дополнительных услуг.',
        },
        {
          q: 'Что выгоднее: аннуитетный или дифференцированный платеж?',
          a: 'При одинаковой ставке и сроке дифференцированный платеж обычно дает меньшую переплату, потому что основной долг уменьшается быстрее. Но первые месяцы нагрузка заметно выше. Аннуитет проще для бюджета: сумма платежа стабильна, поэтому его чаще предлагают банки. Выгодность зависит от дохода, срока кредита и планов по досрочному погашению.',
        },
        {
          q: 'Почему переплата по кредиту получается такой большой?',
          a: 'Переплата растет из-за срока и ставки. Чем дольше вы пользуетесь заемными деньгами, тем больше месяцев банк начисляет проценты на остаток долга. Даже небольшая разница в ставке заметна на длинном сроке. Поэтому полезно сравнивать не только платеж в месяц, но и полную сумму процентов за весь период.',
        },
        {
          q: 'Учитывает ли кредитный калькулятор страховку и комиссии?',
          a: 'Нет, базовый расчет учитывает только сумму кредита, срок, ставку и тип платежа. Страхование жизни, страховка имущества, комиссия за выдачу, платное обслуживание карты и другие услуги могут увеличить фактическую стоимость кредита. Перед подписанием договора нужно сверить результат с графиком банка и полной стоимостью кредита.',
        },
        {
          q: 'Как уменьшить ежемесячный платеж по кредиту?',
          a: 'Платеж можно снизить за счет большего срока, меньшей суммы кредита, более низкой ставки или частичного досрочного погашения с уменьшением платежа. Но увеличение срока часто повышает переплату. Перед решением стоит сравнить два варианта досрочного погашения: уменьшение срока и уменьшение ежемесячного платежа.',
        },
      ],
    },
    'percent-calculator': {
      intro:
        'Калькулятор процентов помогает быстро найти процент от числа, процентное изменение, наценку или исходное значение. Он подходит для покупок, скидок, финансовых расчетов, школьных задач и проверки отчетов. Инструмент полезен, когда нужно не просто получить число, а понять, насколько изменилась сумма в процентах.',
      howItWorks:
        'Логика зависит от выбранного режима. Чтобы найти процент от числа, калькулятор умножает число на процент и делит результат на 100. Например, 15% от 2 000 — это 2 000 × 15 / 100. Для процентного изменения берется разница между новым и старым значением, затем она делится на старое значение и переводится в проценты. Так можно понять, на сколько процентов выросла цена, доход или расход. Для наценки процент прибавляется к базовой цене, а для обратного процента калькулятор восстанавливает исходное значение, если известна сумма после увеличения или уменьшения. Важно выбрать правильный режим, потому что “20% от числа” и “число выросло на 20%” отвечают на разные вопросы. Первый режим ищет долю, второй описывает изменение относительно базы. Поэтому перед вводом стоит сформулировать задачу обычной фразой.',
      example:
        'Представим, что товар стоил 4 000 ₽, а новая цена стала 4 800 ₽. Пользователь выбирает режим процентного изменения, вводит старое значение 4000 и новое значение 4800. Калькулятор покажет рост на 20%. Это означает, что цена увеличилась не просто на 800 ₽, а на одну пятую от прежней стоимости. Такой расчет удобен для сравнения подорожания между разными товарами, даже если их цены сильно отличаются. Если другой товар вырос на 600 ₽, но стоил 2 000 ₽, его рост уже составит 30%.',
      tips:
        'Частая ошибка — путать процентные пункты и проценты. Если ставка выросла с 10% до 12%, это рост на 2 процентных пункта, но относительно старой ставки увеличение составляет 20%. Еще один нюанс: последовательные проценты не складываются напрямую. Скидка 20%, а затем 10% — это не 30%, потому что вторая скидка применяется уже к уменьшенной цене. При обратных расчетах важно понимать, от какой базы считается процент. Если цена после НДС равна 1200 ₽, то налог 20% считается не от 1200, а от суммы без налога. Для финансовых решений всегда проверяйте, является ли процент годовым, месячным, разовым или накопительным. В отчетах отдельно подписывайте базовое число, иначе результат легко истолковать наоборот. Для сравнения нескольких вариантов сохраняйте одинаковую базу расчета и одинаковые единицы измерения данных.',
      faq: [
        {
          q: 'Как посчитать процент от числа?',
          a: 'Умножьте число на нужный процент и разделите на 100. Например, 18% от 5 000 считается как 5 000 × 18 / 100, то есть 900. В калькуляторе достаточно выбрать режим “процент от числа”, ввести базовое значение и процент, после чего результат появится автоматически.',
        },
        {
          q: 'Как узнать, на сколько процентов выросла цена?',
          a: 'Нужно вычесть старую цену из новой, разделить разницу на старую цену и умножить на 100. Если товар стоил 2 000 ₽, а стал стоить 2 500 ₽, рост равен 25%. Такой расчет показывает изменение относительно исходной цены, а не просто разницу в рублях.',
        },
        {
          q: 'Почему скидки 20% и 10% подряд не дают 30%?',
          a: 'Потому что каждая следующая скидка применяется к уже уменьшенной сумме. Если цена 1 000 ₽ сначала снижается на 20%, остается 800 ₽. Затем скидка 10% считается от 800 ₽, а не от 1 000 ₽. Итоговая цена будет 720 ₽, то есть общая скидка составит 28%.',
        },
        {
          q: 'Как найти исходное число, если известна сумма после процента?',
          a: 'Для обратного расчета нужно понимать, было ли увеличение или уменьшение. Если сумма после роста на 20% равна 1 200, исходное число равно 1 200 / 1,2, то есть 1 000. Если сумма после скидки 20% равна 800, исходное число равно 800 / 0,8, тоже 1 000.',
        },
        {
          q: 'Чем процент отличается от процентного пункта?',
          a: 'Процент показывает относительное изменение, а процентный пункт — простую разницу между двумя процентными значениями. Рост ставки с 5% до 7% — это плюс 2 процентных пункта. Но относительно старой ставки 5% увеличение составляет 40%, потому что 2 делится на 5.',
        },
      ],
    },
    'discount-calculator': {
      intro:
        'Калькулятор скидки считает финальную цену товара, размер экономии и обратную цену до скидки. Он пригодится при онлайн-покупках, распродажах, сравнении промокодов и проверке ценников в магазине. Расчет помогает понять реальную выгоду, особенно когда скидка задана процентом, фиксированной суммой или применяется в несколько этапов.',
      howItWorks:
        'Если скидка задана в процентах, калькулятор умножает исходную цену на процент скидки и делит на 100. Полученная сумма вычитается из начальной цены. Например, скидка 25% на товар за 8 000 ₽ означает экономию 2 000 ₽ и итоговую цену 6 000 ₽. Если скидка фиксированная, калькулятор просто вычитает указанную сумму из цены. В обратном режиме можно восстановить старую цену, если известна итоговая цена и процент скидки: финальная цена делится на коэффициент после скидки. Например, после скидки 20% остается 80% цены, поэтому 4 000 ₽ нужно разделить на 0,8. Важно учитывать порядок применения скидок: процентная скидка после промокода считается от уже уменьшенной суммы, а не от первоначальной цены. Поэтому результат лучше сверять с правилами конкретной акции и итоговой корзиной перед оплатой.',
      example:
        'Пользователь видит товар за 12 000 ₽ со скидкой 15% и дополнительным промокодом на 500 ₽. Сначала он вводит цену 12000 и процент скидки 15. Калькулятор показывает экономию 1 800 ₽ и цену 10 200 ₽. Затем можно отдельно вычесть промокод 500 ₽, получив 9 700 ₽. Такой подход показывает, что фактическая экономия равна 2 300 ₽, но процентная скидка и фиксированный промокод считаются по-разному. Если доставка стоит 400 ₽, итоговая выгода уже будет меньше, чем кажется на ценнике покупателю.',
      tips:
        'Не все скидки одинаково выгодны. Магазин может заранее поднять цену, а затем показать крупный процент снижения. Поэтому полезно сравнивать итоговую цену с ценой у других продавцов, а не только смотреть на размер скидки. Вторая ошибка — забывать про доставку, минимальную сумму заказа, платную подписку или ограничения промокода. Иногда скидка действует только на часть корзины или не суммируется с другими акциями. При нескольких скидках считайте их по очереди: 30% и 10% не равны 40%. Для крупных покупок проверяйте цену за единицу товара, гарантию и условия возврата. Самый честный показатель выгоды — не красивый процент, а итоговая сумма, которую вы реально заплатите. Для техники и мебели дополнительно смотрите стоимость доставки, сборки и расширенной гарантии. При покупке в кредит учитывайте еще и проценты.',
      faq: [
        {
          q: 'Как посчитать цену со скидкой?',
          a: 'Умножьте исходную цену на процент скидки и разделите на 100, чтобы получить сумму экономии. Затем вычтите экономию из исходной цены. Например, товар за 3 000 ₽ со скидкой 20% даст экономию 600 ₽ и итоговую цену 2 400 ₽. Калькулятор делает эти действия автоматически.',
        },
        {
          q: 'Как узнать, сколько я сэкономлю на скидке?',
          a: 'Экономия зависит от исходной цены и размера скидки. При процентной скидке сумма экономии равна цене, умноженной на процент и разделенной на 100. При фиксированной скидке экономия равна указанной сумме. Для честного сравнения учитывайте доставку, комиссии, минимальную сумму заказа и условия акции.',
        },
        {
          q: 'Как найти старую цену до скидки?',
          a: 'Если известна цена после скидки и процент скидки, используйте обратный расчет. Например, после скидки 25% остается 75% цены. Значит, итоговую цену нужно разделить на 0,75. Если после скидки товар стоит 1 500 ₽, старая цена была 2 000 ₽ до акции.',
        },
        {
          q: 'Складываются ли две скидки между собой?',
          a: 'Обычно нет. Если сначала применили скидку 20%, а затем еще 10%, вторая скидка считается от новой, уже уменьшенной цены. Для товара за 1 000 ₽ это будет 800 ₽ после первой скидки и 720 ₽ после второй. Итоговая скидка составит 28%, а не 30%.',
        },
        {
          q: 'Почему большая скидка не всегда означает выгодную покупку?',
          a: 'Процент скидки может выглядеть крупно, но исходная цена иногда завышена. Кроме того, выгоду могут уменьшить доставка, обязательная подписка, ограниченная гарантия или невозможность возврата. Перед покупкой лучше сравнить итоговую цену с несколькими магазинами и проверить цену за единицу товара или комплекта.',
        },
      ],
    },
    'bmi-calculator': {
      intro:
        'Калькулятор ИМТ рассчитывает индекс массы тела по росту и весу и показывает общую категорию: недостаточный вес, норма, избыточный вес или ожирение. Он полезен для первичной самопроверки, отслеживания динамики и подготовки к разговору с врачом или тренером. ИМТ не является диагнозом, но помогает быстро оценить ориентир.',
      howItWorks:
        'Индекс массы тела считается по простой формуле: вес в килограммах делится на рост в метрах, возведенный в квадрат. Например, если человек весит 72 кг при росте 1,75 м, расчет выглядит так: 72 / 1,75². Полученное число сравнивается с общепринятыми диапазонами. Обычно значение ниже 18,5 относят к недостаточной массе, 18,5-24,9 — к нормальному диапазону, 25-29,9 — к избыточной массе, 30 и выше — к ожирению. Формула не учитывает процент жира, мышечную массу, возраст, пол, тип телосложения и распределение веса. Поэтому у спортсменов, беременных, подростков, пожилых людей и людей с выраженной мышечной массой ИМТ может давать неполную картину. Это скрининговый показатель, а не медицинское заключение. Его задача — быстро подсветить диапазон, который стоит проверить точнее другими методами оценки здоровья и состава тела.',
      example:
        'Пользователь вводит вес 82 кг и рост 178 см. Калькулятор переводит рост в метры, получает 1,78 и считает 82 / 1,78². Результат будет около 25,9. Такой ИМТ попадает в диапазон избыточной массы тела. Это не означает автоматическую проблему со здоровьем, но показывает, что стоит дополнительно оценить окружность талии, уровень активности, питание и другие показатели. Если тот же человек активно занимается силовыми тренировками, результат нужно сравнивать с составом тела, а не только с таблицей ИМТ для взрослых людей и врачебными рекомендациями.',
      tips:
        'ИМТ удобно использовать для общей ориентации, но нельзя делать выводы только по одному числу. Самая частая ошибка — воспринимать категорию как диагноз. У человека с высокой мышечной массой ИМТ может быть выше нормы, хотя процент жира невысокий. У пожилых людей или людей с низкой мышечной массой нормальный ИМТ иногда скрывает недостаток мышц. Для более точной оценки полезно смотреть окружность талии, соотношение талии и роста, динамику веса, анализы и самочувствие. Измеряйте рост и вес без обуви, в одинаковых условиях и не сравнивайте дневные колебания после еды или тренировки. Если результат резко изменился или попадает в крайние диапазоны, лучше обсудить его со специалистом. Также не используйте взрослые нормы для детей и подростков без специальных таблиц роста и пола, принятых в современной педиатрии.',
      faq: [
        {
          q: 'Какой ИМТ считается нормальным?',
          a: 'Для взрослых нормальным обычно считают диапазон от 18,5 до 24,9. Значения ниже могут указывать на недостаточную массу тела, а значения от 25 и выше — на избыточную массу или ожирение. Но ИМТ не учитывает мышцы, возраст и распределение жира, поэтому это ориентир, а не диагноз.',
        },
        {
          q: 'Точен ли ИМТ для спортсменов?',
          a: 'Для спортсменов ИМТ часто бывает неточным, потому что формула не отличает мышечную массу от жировой ткани. Человек с развитой мускулатурой может иметь высокий ИМТ и при этом низкий процент жира. В таких случаях лучше дополнительно использовать измерение состава тела и окружности талии.',
        },
        {
          q: 'Почему ИМТ может вводить в заблуждение?',
          a: 'ИМТ учитывает только рост и вес. Он не показывает, где расположен жир, сколько в теле мышц, каков возраст человека и есть ли медицинские особенности. Два человека с одинаковым ИМТ могут иметь разный уровень риска для здоровья. Поэтому показатель лучше использовать вместе с другими данными.',
        },
        {
          q: 'Можно ли использовать ИМТ для детей?',
          a: 'Для детей и подростков обычные взрослые диапазоны ИМТ не подходят. У них оценка зависит от возраста и пола и проводится по процентильным таблицам. Этот калькулятор лучше использовать для взрослых. Если нужно оценить вес ребенка, безопаснее обратиться к педиатру или специализированным детским таблицам.',
        },
        {
          q: 'Что делать, если ИМТ выше нормы?',
          a: 'Сначала не стоит паниковать: проверьте измерения, оцените окружность талии, питание, активность и динамику веса. Если показатель стабильно высокий или есть жалобы, лучше обсудить результат с врачом. Цель — не просто снизить число ИМТ, а улучшить состав тела и общее здоровье.',
        },
      ],
    },
  },
  en: {
    'credit-calculator': {
      intro:
        'The loan calculator estimates a monthly payment, total repayment and interest cost from the loan amount, term and annual rate. It is useful when comparing bank offers, planning a purchase financed by debt or checking whether a future payment fits your budget. Use it before applying, when you still want to test different terms.',
      howItWorks:
        'The calculator first converts the annual percentage rate into a monthly rate and uses the selected loan term to build a payment estimate. With an amortized payment, the monthly amount stays the same during the whole term. Early payments contain more interest, while later payments repay more principal. With a declining balance style payment, the principal is split into equal parts and interest is calculated on the remaining balance each month, so the first payments are higher and later payments fall. Total repayment is the sum of all scheduled payments. Interest cost is the difference between that total and the original amount borrowed. The result does not include origination fees, insurance, late penalties, taxes or optional bank products. Treat it as a clean loan model for comparison, not as the final contract schedule from a lender.',
      example:
        'Suppose you want to borrow $20,000 for 5 years at 8% APR and choose an amortized payment. You enter 20000 as the loan amount, 5 years as the term and 8 as the annual rate. The calculator returns an estimated monthly payment of about $406, a total repayment of roughly $24,300 and interest of about $4,300. That number helps you judge whether the payment is comfortable before you request an official offer. If you shorten the term to 3 years, the payment rises, but total interest usually falls.',
      tips:
        'Do not judge a loan only by the monthly payment. A longer term can make the payment look affordable while raising the total interest cost. Compare the total repayment, not just the first line of the offer. Also check whether the advertised rate requires insurance, an account package, automatic payments or other conditions. If you may repay early, compare scenarios with extra payments and ask whether the lender charges prepayment fees. The estimate can differ from a real schedule when a lender calculates interest daily, uses exact calendar dates or adds closing costs outside the interest rate. For a serious decision, use this calculator to narrow the options, then compare the lender’s APR, full fee disclosure and payment schedule carefully.',
      faq: [
        {
          q: 'How do I calculate a monthly loan payment?',
          a: 'Enter the amount borrowed, annual interest rate, term and payment type. For an amortized loan, the calculator spreads principal and interest into equal monthly payments. For a declining balance structure, principal repayment is fixed and interest falls over time. The result is an estimate before lender fees, insurance and contract-specific costs.',
        },
        {
          q: 'What affects the total interest paid on a loan?',
          a: 'The biggest drivers are the interest rate, loan amount and term. A higher rate increases interest immediately, while a longer term gives interest more months to accumulate. Extra fees and optional products can also raise the real cost, even if the monthly payment looks manageable.',
        },
        {
          q: 'Is a shorter loan term always better?',
          a: 'A shorter term usually reduces total interest, but it raises the monthly payment. It is better only if the payment remains comfortable and does not force you into missed payments or expensive debt elsewhere. Compare both monthly affordability and total repayment before choosing the term.',
        },
        {
          q: 'Does this loan calculator include fees?',
          a: 'No. The base calculation uses only amount, term, interest rate and payment type. Origination fees, insurance, account charges, taxes and late penalties are outside the formula. When comparing real offers, check the APR and the lender’s payment schedule to understand the complete cost.',
        },
        {
          q: 'How can I lower my loan payment?',
          a: 'You can lower the payment by borrowing less, getting a lower rate, choosing a longer term or making a larger upfront payment. A longer term may increase total interest, so it should be compared carefully. Extra principal payments can also reduce future interest if the lender allows them without penalties.',
        },
      ],
    },
    'percent-calculator': {
      intro:
        'The percentage calculator solves common percent tasks: percent of a number, percentage change, markup and reverse percentage. It is useful for shopping, finance, reports, schoolwork and quick checks in spreadsheets. Use it when you need to understand both the number itself and the relative change behind it.',
      howItWorks:
        'Each mode answers a different question. To find a percent of a number, the calculator multiplies the base number by the percentage and divides by 100. To calculate percentage change, it subtracts the old value from the new value, divides the difference by the old value and converts the result to a percent. This shows how much something increased or decreased relative to the starting point. Markup adds a percentage to the original value, while reverse percentage works backward from a value after an increase or discount. Choosing the correct mode matters because “20% of 500” and “500 increased by 20%” are not the same question. The first returns a part of the base number. The second returns the new value after the percentage has been applied.',
      example:
        'Imagine a subscription price increased from $40 to $50. You choose percentage change, enter 40 as the old value and 50 as the new value. The calculator returns 25%. The dollar difference is $10, but the relative increase is one quarter of the original price. That makes it easier to compare this change with another subscription that increased by a different dollar amount. A $15 increase on a $150 plan, for example, is only 10%, even though the dollar increase is larger.',
      tips:
        'A common mistake is confusing percent with percentage points. If an interest rate rises from 5% to 7%, it increased by 2 percentage points, but the relative increase is 40%. Another mistake is adding sequential percentages directly. A 20% discount followed by another 10% discount does not equal 30%, because the second discount applies to the reduced price. Reverse percentage also needs a clear base: if a price after 20% tax is $120, the tax is not 20% of $120; the original base is $100. When using percentages in finance, check whether the rate is annual, monthly, one-time or compounded, because the same number can mean different things. In reports, label the base value clearly before sharing the result publicly.',
      faq: [
        {
          q: 'How do I calculate a percentage of a number?',
          a: 'Multiply the number by the percentage and divide by 100. For example, 15% of 200 is 200 × 15 / 100, which equals 30. In the calculator, select the percent-of-a-number mode, enter the base value and the percent, and the result is shown instantly.',
        },
        {
          q: 'How do I calculate percentage increase?',
          a: 'Subtract the old value from the new value, divide the difference by the old value and multiply by 100. If a price rises from $80 to $100, the increase is $20 divided by $80, or 25%. This measures growth relative to the original value.',
        },
        {
          q: 'Why do two discounts not add up directly?',
          a: 'Sequential discounts apply one after another. If a $100 item gets 20% off, the price becomes $80. A second 10% discount is calculated from $80, not from $100, so the final price is $72. The total discount is 28%, not 30%.',
        },
        {
          q: 'How do I find the original number before a percentage change?',
          a: 'Use reverse percentage. If a value after a 20% increase is 120, divide 120 by 1.2 to get the original value of 100. If a value after a 20% discount is 80, divide 80 by 0.8. The key is knowing whether the percentage was added or subtracted.',
        },
        {
          q: 'What is the difference between percent and percentage points?',
          a: 'Percent describes relative change, while percentage points describe the simple difference between two percentages. Moving from 10% to 12% is an increase of 2 percentage points. Relative to the old 10% rate, however, the increase is 20%. Both numbers are correct but answer different questions.',
        },
      ],
    },
    'discount-calculator': {
      intro:
        'The discount calculator finds the final price, amount saved and original price before a discount. It helps with online shopping, sale labels, promo codes and price comparisons. Use it when a discount is shown as a percentage, a fixed amount or when you need to work backward from the final price.',
      howItWorks:
        'For a percentage discount, the calculator multiplies the original price by the discount rate and divides by 100. That gives the amount saved, which is then subtracted from the original price. For example, 25% off a $200 item saves $50 and leaves a final price of $150. For a fixed discount, the calculator subtracts the discount amount directly. Reverse discount works from the final price back to the original price. If the final price is after 20% off, it represents 80% of the original price, so the final price is divided by 0.8. The order of discounts matters. A promo code applied after a store discount is usually calculated from the already reduced price, not from the first listed price.',
      example:
        'Suppose a jacket costs $120 and the store offers 15% off. You enter 120 as the original price and 15 as the discount. The calculator shows a saving of $18 and a final price of $102. If you also have a $10 promo code, you subtract it after the percentage discount and pay $92. This separates percentage savings from fixed discounts and makes the real checkout price clearer. If shipping costs $8, the practical deal is $100, not just the sale price shown on the product page.',
      tips:
        'A large discount does not always mean the best deal. Some stores raise the list price before a sale, so compare the final price with other sellers. Also check shipping, minimum order value, membership requirements and whether the promo code applies to the whole cart or only selected items. Multiple discounts should be calculated one by one, because 30% off and then 10% off is not the same as 40% off. For groceries, subscriptions or bulk purchases, compare the price per unit rather than the headline discount. The most useful number is the final amount you will actually pay, including fees and delivery, not the largest percentage on the banner. For expensive items, review warranty and return terms too before checkout.',
      faq: [
        {
          q: 'How do I calculate a discount price?',
          a: 'Multiply the original price by the discount percentage and divide by 100 to find the amount saved. Then subtract that saving from the original price. For a $50 item with 20% off, the saving is $10 and the final price is $40. The calculator performs both steps automatically.',
        },
        {
          q: 'How do I calculate how much I saved?',
          a: 'For a percentage discount, the saving equals original price multiplied by the discount rate and divided by 100. For a fixed discount, the saving is the stated amount. To understand the real benefit, include shipping, fees and any conditions attached to the promotion.',
        },
        {
          q: 'How can I find the original price before a discount?',
          a: 'Use reverse discount. If the final price after 25% off is $75, it represents 75% of the original price. Divide $75 by 0.75 to get $100. This is useful when stores show only the sale price and discount percentage on a product page.',
        },
        {
          q: 'Can I add two discount percentages together?',
          a: 'Usually no. Discounts are normally applied in sequence. A 20% discount followed by 10% off leaves 72% of the original price, so the total discount is 28%, not 30%. Always calculate the first discount, then apply the second to the new price.',
        },
        {
          q: 'Why can a big discount still be a bad deal?',
          a: 'The original price may be inflated, or extra costs may reduce the benefit. Shipping, limited warranty, return restrictions and required memberships can make the final deal less attractive. Compare the final checkout price with other stores, not just the advertised percentage discount.',
        },
      ],
    },
    'bmi-calculator': {
      intro:
        'The BMI calculator estimates body mass index from height and weight and assigns a general weight category. It is useful for a quick health screening, tracking long-term changes or preparing for a conversation with a doctor or coach. BMI is not a diagnosis, but it gives a simple starting point.',
      howItWorks:
        'BMI is calculated by dividing weight in kilograms by height in meters squared. In US-style inputs, the calculator first converts pounds and inches into metric units before applying the same formula. The result is compared with standard adult ranges: below 18.5 is commonly considered underweight, 18.5 to 24.9 is the healthy range, 25 to 29.9 is overweight and 30 or higher is obesity. The formula is intentionally simple, which makes it useful for population-level screening, but it does not measure body fat directly. It does not know how much of your weight is muscle, bone, water or fat, and it does not account for age, sex, pregnancy, athletic training or fat distribution. Because of that, BMI should be interpreted as a general signal rather than a complete health assessment.',
      example:
        'A user enters 180 pounds and 5 feet 10 inches. The calculator converts the values, then computes BMI using the standard formula. The result is about 25.8, which falls in the overweight range for adults. This does not automatically mean the person is unhealthy, but it suggests that waist size, activity level, blood pressure, lab results and body composition may be worth checking. If the user lifts weights regularly, the result should be interpreted together with muscle mass and waist measurement.',
      tips:
        'The most common mistake is treating BMI as a final verdict. A muscular athlete can have a high BMI with low body fat, while an older adult can have a normal BMI but low muscle mass. BMI also says nothing about where fat is stored, even though abdominal fat is often more relevant to health risk. Measure height and weight consistently, preferably without shoes and at a similar time of day. Do not overreact to daily weight swings after meals, travel or training. For a fuller picture, combine BMI with waist circumference, waist-to-height ratio, fitness level, medical history and professional advice. If the result is in an extreme range or changes quickly without explanation, it is worth discussing with a healthcare professional.',
      faq: [
        {
          q: 'What is a healthy BMI range?',
          a: 'For most adults, a BMI between 18.5 and 24.9 is commonly considered the healthy range. Below 18.5 may indicate underweight, while 25 and above falls into overweight or obesity ranges. These categories are general screening ranges and do not replace an individual medical assessment.',
        },
        {
          q: 'Is BMI accurate for athletes?',
          a: 'BMI can be misleading for athletes because it does not distinguish muscle from fat. A strength athlete may have a high BMI because of lean mass, not excess body fat. In that case, body composition, waist circumference and performance context provide better information than BMI alone.',
        },
        {
          q: 'Why can BMI be misleading?',
          a: 'BMI uses only height and weight. It ignores age, sex, muscle mass, bone structure and where fat is stored. Two people with the same BMI may have very different health profiles. That is why BMI is best used as a quick screening tool, not a complete diagnosis.',
        },
        {
          q: 'Can children use the adult BMI ranges?',
          a: 'No. Children and teenagers should be assessed with age- and sex-specific BMI percentiles, not adult cutoffs. Growth patterns change quickly, so adult categories can misclassify children. If you need to evaluate a child’s weight, use pediatric charts or speak with a healthcare professional.',
        },
        {
          q: 'What should I do if my BMI is high?',
          a: 'First, confirm that height and weight were entered correctly. Then consider waist size, activity, nutrition, sleep and medical history. A high BMI is a reason to look deeper, not to panic. If it stays high or comes with health concerns, discuss it with a doctor or qualified dietitian.',
        },
      ],
    },
  },
};

type SeoLocaleCopy = {
  intro: (p: GeneratedParams) => string;
  howItWorks: (p: GeneratedParams) => string;
  example: (p: GeneratedParams) => string;
  tips: (p: GeneratedParams) => string;
  faq: (p: GeneratedParams) => { q: string; a: string }[];
};

type GeneratedParams = {
  name: string;
  shortDescription: string;
  fields: string;
  results: string;
  example: string;
  categoryTip: string;
  formula: string;
  accuracy: string;
};

const categoryTips: Record<string, Record<string, string>> = {
  finance: {
    ru: 'сравнивайте несколько сценариев, проверяйте комиссии, ставки, налоги и условия договора перед финансовым решением',
    en: 'compare several scenarios and check fees, rates, taxes and contract terms before making a financial decision',
  },
  currency: {
    ru: 'проверяйте актуальный курс, банковскую комиссию, спред обменника и дату обновления перед обменом денег',
    en: 'check the live rate, bank fee, exchange spread and update time before exchanging money',
  },
  sport: {
    ru: 'используйте результат как ориентир и учитывайте здоровье, опыт тренировок, восстановление и индивидуальные ограничения',
    en: 'use the result as guidance and consider health, training history, recovery and individual limits',
  },
  building: {
    ru: 'добавляйте запас материала, проверяйте размеры упаковки, особенности основания и реальные потери при монтаже',
    en: 'add material reserve and check pack sizes, surface conditions and real installation waste',
  },
  'date-time': {
    ru: 'проверяйте включение начальной и конечной даты, праздники, часовой пояс и локальные правила календаря',
    en: 'check whether start and end dates are included, plus holidays, time zone and local calendar rules',
  },
};

const formulaHints: Record<string, Record<string, string>> = {
  finance: {
    ru: 'Финансовая логика строится вокруг суммы, срока, ставки или процента: калькулятор приводит входные данные к одной базе и показывает итоговую денежную оценку.',
    en: 'The financial logic is built around amount, term, rate or percentage: the calculator normalizes the inputs and returns a monetary estimate.',
  },
  currency: {
    ru: 'Валютная логика умножает исходную сумму на выбранный курс или соотношение валют, поэтому результат зависит от базовой пары и демонстрационного курса.',
    en: 'Currency logic multiplies the source amount by the selected rate or currency ratio, so the result depends on the base pair and demo rate.',
  },
  sport: {
    ru: 'Спортивная логика использует антропометрические, временные или тренировочные показатели и переводит их в понятный ориентир для самопроверки.',
    en: 'Fitness logic uses body, time or training inputs and turns them into a practical reference value for self-checking.',
  },
  building: {
    ru: 'Строительная логика переводит размеры помещения и материала в площадь, количество упаковок или расход с учетом запаса.',
    en: 'Home-improvement logic converts room and material dimensions into area, pack count or consumption with reserve.',
  },
  'date-time': {
    ru: 'Календарная логика сравнивает даты, считает интервалы и применяет правила включения дней, выходных или исключений.',
    en: 'Date logic compares dates, counts intervals and applies rules for included days, weekends or exclusions.',
  },
};

const genericCopy: Record<string, SeoLocaleCopy> = {
  ru: {
    intro: (p) =>
      `${p.name} помогает решить конкретную расчетную задачу без таблиц и ручных формул. ${p.shortDescription} Он подходит для быстрой проверки идеи, сравнения нескольких вариантов и подготовки цифр перед разговором с банком, тренером, подрядчиком или другим специалистом. Используйте его, когда нужно понять порядок результата до окончательного решения.`,
    howItWorks: (p) =>
      `Расчет начинается с ключевых входных данных: ${p.fields}. ${p.formula} Калькулятор проверяет введенные значения, приводит их к нужным единицам и применяет расчетную логику, связанную с выбранным режимом. Затем результат выводится в виде основных показателей: ${p.results}. Такой подход удобен тем, что пользователь видит не только одно итоговое число, но и связанные значения, которые помогают понять структуру результата. Если часть параметров меняется, например ставка, срок, размер помещения, вес, дата или процент, итог пересчитывается сразу и показывает чувствительность расчета. Формула остается справочной моделью: она хорошо подходит для предварительной оценки, но не заменяет официальный договор, медицинскую консультацию, смету подрядчика или профессиональное заключение там, где они обязательны. Поэтому важно читать результат вместе с пояснениями.`,
    example: (p) =>
      `Пример можно разобрать от входных данных к результату. Пользователь открывает ${p.name}, оставляет типовой сценарий или вводит свои значения в поля ${p.fields}. После расчета блок результата показывает ${p.results}. Встроенный пример для этой страницы: ${p.example} Его удобно использовать как контрольную точку: сначала проверьте, что логика понятна на готовых числах, затем замените значения на свои. Если итог кажется неожиданным, меняйте только один параметр за раз, чтобы увидеть, что именно сильнее всего влияет на расчет.`,
    tips: (p) =>
      `Главная ошибка при использовании ${p.name} — вводить числа без проверки единиц измерения, периода, валюты или правил округления. ${p.categoryTip}. Результат может быть неточным, если исходные данные взяты приблизительно, если часть расходов или ограничений не входит в формулу, либо если реальные условия отличаются от типового сценария. Для надежной оценки сохраните несколько вариантов: базовый, осторожный и оптимистичный. Не округляйте исходные значения слишком рано, потому что маленькая разница на входе иногда заметно меняет итог. ${p.accuracy} Если расчет влияет на деньги, здоровье, ремонт или сроки, используйте его как ориентир и сверяйте финальное решение с профильным источником. Полезно также сохранить ссылку с введенными параметрами и вернуться к ней после уточнения данных.`,
    faq: (p) => [
      {
        q: `Как правильно пользоваться ${p.name}?`,
        a: `Сначала определите, какую задачу вы хотите проверить, затем заполните поля ${p.fields}. После этого сравните основные показатели ${p.results} и при необходимости измените один параметр. Такой порядок помогает понять, что именно влияет на итог, а не просто получить случайное число без контекста.`,
      },
      {
        q: `Как считается результат в ${p.name}?`,
        a: `${p.formula} Калькулятор берет введенные значения, приводит их к нужному формату и применяет расчетную модель. Итоговые показатели ${p.results} показывают практический результат, но не учитывают все индивидуальные условия, если они не представлены отдельными полями формы.`,
      },
      {
        q: `Почему результат ${p.name} может отличаться от реального?`,
        a: `Расхождение появляется, когда реальные условия шире, чем форма расчета. На итог могут влиять комиссии, точные даты, налоги, физические свойства материалов, состояние здоровья, локальные правила или округления. Поэтому результат стоит использовать как предварительную оценку, а важные решения сверять с документами или специалистом.`,
      },
      {
        q: `Какие данные нужны для ${p.name}?`,
        a: `Обычно достаточно заполнить основные поля: ${p.fields}. Чем точнее исходные значения, тем полезнее результат. Если часть данных неизвестна, можно начать с примерных цифр и затем пересчитать страницу, когда появятся точные условия, размеры, даты, ставки или параметры для окончательной проверки сценария.`,
      },
      {
        q: `Можно ли использовать ${p.name} для сравнения вариантов?`,
        a: `Да, это один из самых полезных сценариев. Сначала сохраните базовый вариант, затем меняйте по одному параметру и сравнивайте ${p.results}. Так проще увидеть, какой фактор сильнее влияет на итог и где есть запас для экономии, снижения риска или более точного планирования.`,
      },
    ],
  },
  en: {
    intro: (p) =>
      `${p.name} helps solve a specific calculation task without spreadsheets or manual formulas. ${p.shortDescription} It is useful for a quick check, comparing alternatives and preparing numbers before speaking with a lender, coach, contractor or specialist. Use it when you need a realistic estimate before making a final decision.`,
    howItWorks: (p) =>
      `The calculation starts with the main inputs: ${p.fields}. ${p.formula} The calculator validates the entered values, converts them into the required units and applies the logic for the selected mode. It then returns the main result fields: ${p.results}. This is useful because you see not only a single final number, but also supporting values that explain the result. When one input changes, such as rate, term, room size, weight, date or percentage, the estimate updates and shows how sensitive the calculation is. The formula is still a reference model: it is suitable for planning and comparison, but it does not replace a formal contract, medical advice, contractor quote or professional decision where one is required.`,
    example: (p) =>
      `A practical example starts with the inputs and then reads the result. Open ${p.name}, keep the default scenario or enter your own values in ${p.fields}. After calculation, the result area shows ${p.results}. The built-in example for this page is: ${p.example} Use it as a reference point: first confirm that the logic makes sense with sample numbers, then replace them with your own. If the result feels unexpected, change only one input at a time so you can see which factor drives the estimate.`,
    tips: (p) =>
      `The most common mistake with ${p.name} is entering numbers without checking units, period, currency or rounding rules. ${p.categoryTip}. The result may be inaccurate when inputs are approximate, when extra costs or constraints are outside the formula, or when real conditions differ from the standard scenario. For better planning, keep three versions: baseline, conservative and optimistic. Avoid rounding inputs too early, because small changes can noticeably affect the final estimate. ${p.accuracy} If the calculation affects money, health, renovation work or deadlines, treat it as guidance and verify the final decision with an authoritative source. It is also useful to save the pre-filled link and revisit it after clarifying the inputs.`,
    faq: (p) => [
      {
        q: `How do I use ${p.name} correctly?`,
        a: `Start by deciding what you want to check, then fill in the main fields: ${p.fields}. Read the result fields ${p.results}, and change one input at a time if you want to compare scenarios. This helps you understand the calculation instead of relying on a number without context.`,
      },
      {
        q: `How is ${p.name} calculated?`,
        a: `${p.formula} The calculator takes the entered values, converts them into the required format and applies the relevant model. The output fields ${p.results} show the practical estimate, but they may not include individual conditions unless those conditions are available as form inputs.`,
      },
      {
        q: `Why can ${p.name} differ from a real result?`,
        a: `Differences appear when real conditions are wider than the form. Fees, exact dates, taxes, material properties, health factors, local rules or rounding can change the final number. Use the result as a preliminary estimate and verify important decisions with documents or a qualified specialist.`,
      },
      {
        q: `What data do I need for ${p.name}?`,
        a: `In most cases you need the values shown in the main fields: ${p.fields}. The more accurate the inputs are, the more useful the estimate becomes. If some data is unknown, start with reasonable assumptions and recalculate when exact rates, dates, dimensions or parameters are available for final checking.`,
      },
      {
        q: `Can I compare scenarios with ${p.name}?`,
        a: `Yes. Calculate a baseline first, then adjust one input and compare ${p.results}. This is often the easiest way to see which factor changes the outcome most and where you have room to save money, reduce risk or plan more accurately.`,
      },
    ],
  },
};

type LocalizedTerms = {
  introA: string;
  introB: string;
  introC: string;
  howA: string;
  howB: string;
  howC: string;
  howD: string;
  howE: string;
  exampleA: string;
  exampleB: string;
  exampleC: string;
  exampleD: string;
  tipsA: string;
  tipsB: string;
  tipsC: string;
  tipsD: string;
  qUse: string;
  qCalc: string;
  qDiff: string;
  qData: string;
  qCompare: string;
  aUse: string;
  aCalc: string;
  aDiff: string;
  aData: string;
  aCompare: string;
};

function makeLocalizedCopy(t: LocalizedTerms): SeoLocaleCopy {
  return {
    intro: (p) =>
      `${p.name} ${t.introA}. ${p.shortDescription} ${t.introB}. ${t.introC}.`,
    howItWorks: (p) =>
      `${t.howA}: ${p.fields}. ${t.aCalc}. ${t.howB}. ${t.howC}: ${p.results}. ${t.howD}. ${t.howE}. ${t.tipsB}. ${t.tipsC}. ${t.tipsD}.`,
    example: (p) =>
      `${t.exampleA} ${p.name}. ${t.exampleB}: ${p.fields}. ${t.exampleC}: ${p.results}. ${p.example} ${t.exampleD}. ${t.howD}. ${t.tipsC}.`,
    tips: (p) =>
      `${t.tipsA} ${p.name}. ${t.tipsB}. ${t.tipsC}. ${t.tipsD}. ${t.exampleD}. ${t.howE}. ${t.howD}. ${t.aCompare}: ${p.results}.`,
    faq: (p) => [
      {
        q: `${t.qUse} ${p.name}?`,
        a: `${t.aUse}: ${p.fields}. ${p.results}. ${t.tipsC}. ${t.exampleD}.`,
      },
      {
        q: `${t.qCalc} ${p.name}?`,
        a: `${t.aCalc}. ${t.howB}. ${p.results}. ${t.howD}. ${t.howE}.`,
      },
      {
        q: `${t.qDiff} ${p.name}?`,
        a: `${t.aDiff}. ${t.tipsB}. ${t.tipsC}. ${t.tipsD}.`,
      },
      {
        q: `${t.qData} ${p.name}?`,
        a: `${t.aData}: ${p.fields}. ${t.tipsC}. ${t.exampleD}.`,
      },
      {
        q: `${t.qCompare} ${p.name}?`,
        a: `${t.aCompare}: ${p.results}. ${t.tipsC}. ${t.howD}.`,
      },
    ],
  };
}

Object.assign(genericCopy, {
  es: makeLocalizedCopy({
    introA: 'ayuda a resolver una tarea de cálculo concreta sin hojas de cálculo ni fórmulas manuales',
    introB: 'Sirve para comprobar una idea, comparar alternativas y preparar números antes de tomar una decisión',
    introC: 'Úsalo cuando necesites una estimación clara, no solo un número aislado',
    howA: 'El cálculo empieza con los datos principales',
    howB: 'La calculadora valida los valores, los convierte a las unidades necesarias y aplica la lógica del modo elegido',
    howC: 'Después muestra los indicadores principales',
    howD: 'Esto permite ver el resultado final y también los valores que explican de dónde sale',
    howE: 'La fórmula es un modelo de referencia útil para planificar, pero no sustituye documentos oficiales, asesoramiento médico, presupuesto profesional ni condiciones contractuales',
    exampleA: 'Un ejemplo práctico se lee desde los datos de entrada hasta el resultado en',
    exampleB: 'El usuario introduce o revisa los campos',
    exampleC: 'La zona de resultado muestra',
    exampleD: 'Primero comprueba el ejemplo y después cambia tus propios valores uno por uno para entender qué parámetro pesa más',
    tipsA: 'El error más habitual es introducir números sin revisar unidades, periodo, moneda o redondeo en',
    tipsB: 'El resultado puede ser impreciso si los datos son aproximados o si hay costes, reglas o limitaciones fuera de la fórmula',
    tipsC: 'Guarda una versión base, una conservadora y una optimista para comparar escenarios',
    tipsD: 'Si el cálculo afecta dinero, salud, reforma o plazos, úsalo como orientación y confirma la decisión con una fuente especializada',
    qUse: '¿Cómo usar correctamente',
    qCalc: '¿Cómo se calcula el resultado en',
    qDiff: '¿Por qué puede diferir el resultado de',
    qData: '¿Qué datos necesito para',
    qCompare: '¿Puedo comparar escenarios con',
    aUse: 'Define primero la pregunta, completa los campos principales y cambia un solo valor cada vez para comparar',
    aCalc: 'La herramienta toma los datos introducidos, los normaliza y aplica una fórmula de referencia',
    aDiff: 'Las diferencias aparecen cuando las condiciones reales incluyen comisiones, fechas exactas, impuestos, materiales, salud, reglas locales o redondeos',
    aData: 'Normalmente basta con introducir los valores principales y recalcular cuando tengas datos más exactos',
    aCompare: 'Sí, calcula una versión base y luego modifica un parámetro para ver cómo cambian los indicadores',
  }),
  de: makeLocalizedCopy({
    introA: 'löst eine konkrete Rechenaufgabe ohne Tabellen und manuelle Formeln',
    introB: 'Es eignet sich für schnelle Prüfungen, Variantenvergleiche und die Vorbereitung von Zahlen vor einer Entscheidung',
    introC: 'Nutze es, wenn du eine nachvollziehbare Schätzung statt einer bloßen Einzelzahl brauchst',
    howA: 'Die Berechnung beginnt mit den wichtigsten Eingaben',
    howB: 'Der Rechner prüft die Werte, bringt sie in passende Einheiten und wendet die Logik des gewählten Modus an',
    howC: 'Danach erscheinen die wichtigsten Ergebnisfelder',
    howD: 'So siehst du nicht nur das Endergebnis, sondern auch unterstützende Werte, die die Struktur erklären',
    howE: 'Die Formel ist ein Referenzmodell für Planung und Vergleich, ersetzt aber keine Verträge, medizinische Beratung, Fachangebote oder verbindliche Regeln',
    exampleA: 'Ein praktisches Beispiel führt von den Eingaben zum Ergebnis in',
    exampleB: 'Der Nutzer prüft oder füllt diese Felder aus',
    exampleC: 'Der Ergebnisbereich zeigt',
    exampleD: 'Prüfe zuerst das Beispiel und ändere danach eigene Werte einzeln, um den stärksten Einfluss zu erkennen',
    tipsA: 'Ein häufiger Fehler ist, Zahlen ohne Prüfung von Einheiten, Zeitraum, Währung oder Rundung einzugeben in',
    tipsB: 'Das Ergebnis kann ungenau sein, wenn Eingaben grob geschätzt sind oder Kosten, Regeln und Einschränkungen außerhalb der Formel liegen',
    tipsC: 'Speichere am besten eine Basis-, eine vorsichtige und eine optimistische Variante',
    tipsD: 'Bei Geld, Gesundheit, Renovierung oder Terminen sollte das Ergebnis als Orientierung dienen und fachlich geprüft werden',
    qUse: 'Wie nutzt man',
    qCalc: 'Wie wird das Ergebnis in',
    qDiff: 'Warum kann das Ergebnis von',
    qData: 'Welche Daten brauche ich für',
    qCompare: 'Kann ich mit',
    aUse: 'Lege zuerst die konkrete Frage fest, fülle die Hauptfelder aus und ändere für Vergleiche jeweils nur einen Wert',
    aCalc: 'Das Tool übernimmt die eingegebenen Werte, normalisiert sie und wendet ein Referenzmodell an',
    aDiff: 'Abweichungen entstehen, wenn reale Bedingungen Gebühren, genaue Daten, Steuern, Materialeigenschaften, Gesundheitsfaktoren, lokale Regeln oder Rundungen enthalten',
    aData: 'Meist reichen die Hauptwerte; bei unsicheren Angaben kannst du mit Annahmen starten und später neu rechnen',
    aCompare: 'Ja, berechne zuerst eine Basisvariante und ändere danach einzelne Parameter, um die Ergebnisänderung zu sehen',
  }),
  fr: makeLocalizedCopy({
    introA: 'résout une tâche de calcul précise sans tableur ni formule manuelle',
    introB: 'Il sert à vérifier rapidement une hypothèse, comparer plusieurs options et préparer des chiffres avant une décision',
    introC: 'Utilisez-le quand vous voulez une estimation lisible plutôt qu’un simple nombre isolé',
    howA: 'Le calcul commence par les données principales',
    howB: 'La calculatrice vérifie les valeurs, les convertit si nécessaire et applique la logique du mode choisi',
    howC: 'Elle affiche ensuite les indicateurs principaux',
    howD: 'Vous voyez ainsi le résultat final et les valeurs qui expliquent sa construction',
    howE: 'La formule reste un modèle de référence pour comparer et planifier; elle ne remplace pas un contrat, un avis médical, un devis ou une règle officielle',
    exampleA: 'Un exemple pratique se lit depuis les données saisies jusqu’au résultat dans',
    exampleB: 'L’utilisateur renseigne ou contrôle les champs',
    exampleC: 'La zone de résultat affiche',
    exampleD: 'Commencez par vérifier l’exemple, puis remplacez les valeurs par les vôtres en ne changeant qu’un paramètre à la fois',
    tipsA: 'L’erreur fréquente consiste à saisir des nombres sans vérifier unités, période, devise ou arrondis dans',
    tipsB: 'Le résultat peut être imprécis si les données sont approximatives ou si des frais, contraintes ou règles restent hors formule',
    tipsC: 'Gardez une version de base, une version prudente et une version optimiste pour comparer',
    tipsD: 'Si le calcul touche l’argent, la santé, les travaux ou les délais, utilisez-le comme repère et confirmez avec une source qualifiée',
    qUse: 'Comment bien utiliser',
    qCalc: 'Comment le résultat est-il calculé dans',
    qDiff: 'Pourquoi le résultat de',
    qData: 'Quelles données faut-il pour',
    qCompare: 'Peut-on comparer des scénarios avec',
    aUse: 'Commencez par définir la question, remplissez les champs principaux et modifiez un seul paramètre à la fois',
    aCalc: 'L’outil prend les valeurs saisies, les normalise et applique un modèle de calcul de référence',
    aDiff: 'Les écarts apparaissent quand les conditions réelles incluent frais, dates exactes, taxes, propriétés des matériaux, santé, règles locales ou arrondis',
    aData: 'Il suffit généralement de renseigner les valeurs principales, puis de recalculer quand les données exactes sont connues',
    aCompare: 'Oui, calculez une version de base puis modifiez un paramètre pour voir comment les indicateurs changent',
  }),
  pt: makeLocalizedCopy({
    introA: 'resolve uma tarefa de cálculo específica sem planilhas nem fórmulas manuais',
    introB: 'É útil para verificar uma ideia, comparar alternativas e preparar números antes de decidir',
    introC: 'Use quando precisar de uma estimativa compreensível e não apenas de um número solto',
    howA: 'O cálculo começa pelos dados principais',
    howB: 'A calculadora valida os valores, converte unidades quando necessário e aplica a lógica do modo escolhido',
    howC: 'Em seguida mostra os indicadores principais',
    howD: 'Assim você vê o resultado final e também os valores que explicam a estrutura do cálculo',
    howE: 'A fórmula é um modelo de referência para planejamento e comparação, mas não substitui contrato, orientação médica, orçamento técnico ou regra oficial',
    exampleA: 'Um exemplo prático vai dos dados inseridos ao resultado em',
    exampleB: 'O usuário preenche ou confere os campos',
    exampleC: 'A área de resultado mostra',
    exampleD: 'Confira primeiro o exemplo e depois troque pelos seus valores, mudando um parâmetro por vez',
    tipsA: 'O erro mais comum é inserir números sem conferir unidades, período, moeda ou arredondamento em',
    tipsB: 'O resultado pode ser impreciso quando os dados são aproximados ou quando custos, regras e limitações ficam fora da fórmula',
    tipsC: 'Guarde uma versão base, uma conservadora e uma otimista para comparar cenários',
    tipsD: 'Se o cálculo afetar dinheiro, saúde, obra ou prazos, use como orientação e confirme com uma fonte qualificada',
    qUse: 'Como usar corretamente',
    qCalc: 'Como é calculado o resultado em',
    qDiff: 'Por que o resultado de',
    qData: 'Quais dados são necessários para',
    qCompare: 'Posso comparar cenários com',
    aUse: 'Defina primeiro a pergunta, preencha os campos principais e altere um valor por vez para comparar',
    aCalc: 'A ferramenta usa os valores informados, normaliza os dados e aplica um modelo de referência',
    aDiff: 'Diferenças surgem quando as condições reais incluem taxas, datas exatas, impostos, materiais, saúde, regras locais ou arredondamentos',
    aData: 'Normalmente bastam os valores principais; se algo for incerto, comece com hipóteses e recalcule depois',
    aCompare: 'Sim, calcule uma versão base e depois mude um parâmetro para ver como os indicadores variam',
  }),
  it: makeLocalizedCopy({
    introA: 'risolve un compito di calcolo specifico senza fogli di lavoro o formule manuali',
    introB: 'È utile per controllare un’ipotesi, confrontare alternative e preparare numeri prima di decidere',
    introC: 'Usalo quando ti serve una stima leggibile, non solo un numero isolato',
    howA: 'Il calcolo parte dai dati principali',
    howB: 'Il calcolatore controlla i valori, li converte nelle unità necessarie e applica la logica della modalità scelta',
    howC: 'Poi mostra gli indicatori principali',
    howD: 'Così vedi il risultato finale e i valori che spiegano come è stato costruito',
    howE: 'La formula è un modello di riferimento per pianificare e confrontare, ma non sostituisce contratti, consulenze mediche, preventivi o regole ufficiali',
    exampleA: 'Un esempio pratico collega i dati inseriti al risultato in',
    exampleB: 'L’utente compila o controlla i campi',
    exampleC: 'L’area dei risultati mostra',
    exampleD: 'Prima verifica l’esempio, poi sostituisci i valori con i tuoi cambiando un parametro alla volta',
    tipsA: 'L’errore più comune è inserire numeri senza controllare unità, periodo, valuta o arrotondamenti in',
    tipsB: 'Il risultato può essere impreciso se i dati sono approssimativi o se costi, regole e limiti restano fuori dalla formula',
    tipsC: 'Conserva una versione base, una prudente e una ottimistica per confrontare gli scenari',
    tipsD: 'Se il calcolo incide su denaro, salute, lavori o scadenze, usalo come guida e verifica con una fonte qualificata',
    qUse: 'Come usare correttamente',
    qCalc: 'Come viene calcolato il risultato in',
    qDiff: 'Perché il risultato di',
    qData: 'Quali dati servono per',
    qCompare: 'Posso confrontare scenari con',
    aUse: 'Definisci prima la domanda, compila i campi principali e modifica un solo valore alla volta',
    aCalc: 'Lo strumento prende i valori inseriti, li normalizza e applica un modello di riferimento',
    aDiff: 'Le differenze nascono quando le condizioni reali includono commissioni, date esatte, tasse, materiali, salute, regole locali o arrotondamenti',
    aData: 'Di solito bastano i valori principali; se alcuni dati mancano, parti da ipotesi ragionevoli e ricalcola dopo',
    aCompare: 'Sì, calcola una versione base e poi cambia un parametro per vedere come variano gli indicatori',
  }),
  pl: makeLocalizedCopy({
    introA: 'rozwiązuje konkretny problem obliczeniowy bez arkuszy i ręcznych wzorów',
    introB: 'Pomaga szybko sprawdzić założenie, porównać warianty i przygotować liczby przed decyzją',
    introC: 'Użyj go, gdy potrzebujesz zrozumiałego oszacowania, a nie pojedynczej liczby bez kontekstu',
    howA: 'Obliczenie zaczyna się od głównych danych',
    howB: 'Kalkulator sprawdza wartości, przelicza jednostki i stosuje logikę wybranego trybu',
    howC: 'Następnie pokazuje najważniejsze wskaźniki',
    howD: 'Dzięki temu widać wynik końcowy oraz wartości wyjaśniające jego strukturę',
    howE: 'Wzór jest modelem referencyjnym do planowania i porównań, ale nie zastępuje umowy, porady medycznej, kosztorysu ani oficjalnych zasad',
    exampleA: 'Praktyczny przykład prowadzi od danych wejściowych do wyniku w',
    exampleB: 'Użytkownik uzupełnia lub sprawdza pola',
    exampleC: 'Sekcja wyniku pokazuje',
    exampleD: 'Najpierw sprawdź przykład, a potem podstaw swoje wartości, zmieniając tylko jeden parametr naraz',
    tipsA: 'Najczęstszy błąd to wpisywanie liczb bez sprawdzenia jednostek, okresu, waluty lub zaokrągleń w',
    tipsB: 'Wynik może być niedokładny, jeśli dane są przybliżone albo koszty, zasady i ograniczenia są poza wzorem',
    tipsC: 'Zapisz wariant bazowy, ostrożny i optymistyczny, aby porównać scenariusze',
    tipsD: 'Jeśli wynik dotyczy pieniędzy, zdrowia, remontu lub terminów, traktuj go jako wskazówkę i potwierdź w wiarygodnym źródle',
    qUse: 'Jak poprawnie używać',
    qCalc: 'Jak obliczany jest wynik w',
    qDiff: 'Dlaczego wynik z',
    qData: 'Jakie dane są potrzebne do',
    qCompare: 'Czy można porównać scenariusze w',
    aUse: 'Najpierw określ pytanie, uzupełnij główne pola i zmieniaj tylko jedną wartość naraz',
    aCalc: 'Narzędzie pobiera wpisane wartości, normalizuje je i stosuje model referencyjny',
    aDiff: 'Różnice pojawiają się, gdy realne warunki obejmują opłaty, dokładne daty, podatki, materiały, zdrowie, lokalne zasady lub zaokrąglenia',
    aData: 'Zwykle wystarczą główne wartości; przy brakach można zacząć od założeń i przeliczyć ponownie',
    aCompare: 'Tak, najpierw policz wariant bazowy, a potem zmień jeden parametr i porównaj wskaźniki',
  }),
  nl: makeLocalizedCopy({
    introA: 'lost een concrete berekening op zonder spreadsheets of handmatige formules',
    introB: 'Het helpt om snel een idee te controleren, opties te vergelijken en cijfers voor te bereiden vóór een beslissing',
    introC: 'Gebruik het wanneer je een duidelijke schatting nodig hebt in plaats van alleen één los getal',
    howA: 'De berekening begint met de belangrijkste invoer',
    howB: 'De calculator controleert de waarden, zet ze om naar de juiste eenheden en past de logica van de gekozen modus toe',
    howC: 'Daarna verschijnen de belangrijkste resultaatvelden',
    howD: 'Zo zie je het eindresultaat en ook de waarden die de opbouw verklaren',
    howE: 'De formule is een referentiemodel voor planning en vergelijking, maar vervangt geen contract, medisch advies, offerte of officiële regel',
    exampleA: 'Een praktisch voorbeeld loopt van invoer naar resultaat in',
    exampleB: 'De gebruiker vult of controleert de velden',
    exampleC: 'Het resultaatgedeelte toont',
    exampleD: 'Controleer eerst het voorbeeld en vervang daarna de waarden door je eigen gegevens, één parameter tegelijk',
    tipsA: 'Een veelgemaakte fout is cijfers invoeren zonder eenheden, periode, valuta of afronding te controleren in',
    tipsB: 'Het resultaat kan onnauwkeurig zijn als gegevens geschat zijn of als kosten, regels en beperkingen buiten de formule vallen',
    tipsC: 'Bewaar een basis-, voorzichtige en optimistische versie om scenario’s te vergelijken',
    tipsD: 'Als de berekening geld, gezondheid, verbouwing of deadlines raakt, gebruik haar als richting en controleer bij een betrouwbare bron',
    qUse: 'Hoe gebruik je',
    qCalc: 'Hoe wordt het resultaat berekend in',
    qDiff: 'Waarom kan het resultaat van',
    qData: 'Welke gegevens heb ik nodig voor',
    qCompare: 'Kan ik scenario’s vergelijken met',
    aUse: 'Bepaal eerst de vraag, vul de belangrijkste velden in en wijzig voor vergelijking telkens maar één waarde',
    aCalc: 'De tool neemt de ingevoerde waarden, normaliseert ze en past een referentiemodel toe',
    aDiff: 'Verschillen ontstaan wanneer echte omstandigheden kosten, exacte datums, belastingen, materiaal, gezondheid, lokale regels of afrondingen bevatten',
    aData: 'Meestal zijn de hoofdwaarden voldoende; begin bij onzekerheid met aannames en reken later opnieuw',
    aCompare: 'Ja, bereken eerst een basisversie en wijzig daarna één parameter om de indicatoren te vergelijken',
  }),
  ro: makeLocalizedCopy({
    introA: 'rezolvă o sarcină de calcul concretă fără tabele sau formule manuale',
    introB: 'Este util pentru verificări rapide, compararea variantelor și pregătirea cifrelor înainte de decizie',
    introC: 'Folosește-l când ai nevoie de o estimare clară, nu doar de un număr izolat',
    howA: 'Calculul pornește de la datele principale',
    howB: 'Calculatorul verifică valorile, le aduce la unitățile potrivite și aplică logica modului ales',
    howC: 'Apoi afișează indicatorii principali',
    howD: 'Astfel vezi rezultatul final și valorile care explică structura lui',
    howE: 'Formula este un model de referință pentru planificare și comparație, dar nu înlocuiește contracte, sfaturi medicale, devize sau reguli oficiale',
    exampleA: 'Un exemplu practic leagă datele introduse de rezultat în',
    exampleB: 'Utilizatorul completează sau verifică aceste câmpuri',
    exampleC: 'Zona de rezultat afișează',
    exampleD: 'Verifică întâi exemplul, apoi înlocuiește valorile cu ale tale schimbând câte un parametru',
    tipsA: 'Greșeala frecventă este introducerea numerelor fără verificarea unităților, perioadei, monedei sau rotunjirii în',
    tipsB: 'Rezultatul poate fi inexact dacă datele sunt aproximative sau dacă există costuri, reguli și limite în afara formulei',
    tipsC: 'Păstrează o variantă de bază, una prudentă și una optimistă pentru comparație',
    tipsD: 'Dacă rezultatul afectează bani, sănătate, renovări sau termene, folosește-l ca orientare și confirmă cu o sursă calificată',
    qUse: 'Cum se folosește corect',
    qCalc: 'Cum se calculează rezultatul în',
    qDiff: 'De ce poate diferi rezultatul din',
    qData: 'Ce date sunt necesare pentru',
    qCompare: 'Pot compara scenarii cu',
    aUse: 'Stabilește întâi întrebarea, completează câmpurile principale și schimbă câte o singură valoare pentru comparații',
    aCalc: 'Instrumentul preia valorile introduse, le normalizează și aplică un model de referință',
    aDiff: 'Diferențele apar când condițiile reale includ comisioane, date exacte, taxe, materiale, sănătate, reguli locale sau rotunjiri',
    aData: 'De obicei sunt suficiente valorile principale; dacă lipsesc date, pornește de la ipoteze și recalculează ulterior',
    aCompare: 'Da, calculează întâi scenariul de bază și schimbă apoi un parametru pentru a vedea diferența',
  }),
  id: makeLocalizedCopy({
    introA: 'membantu menyelesaikan tugas perhitungan tertentu tanpa spreadsheet atau rumus manual',
    introB: 'Cocok untuk pemeriksaan cepat, membandingkan beberapa opsi, dan menyiapkan angka sebelum mengambil keputusan',
    introC: 'Gunakan saat Anda membutuhkan estimasi yang jelas, bukan sekadar satu angka tanpa konteks',
    howA: 'Perhitungan dimulai dari input utama',
    howB: 'Kalkulator memeriksa nilai, menyesuaikan satuan, lalu menerapkan logika sesuai mode yang dipilih',
    howC: 'Setelah itu hasil utama ditampilkan',
    howD: 'Dengan begitu Anda melihat angka akhir sekaligus nilai pendukung yang menjelaskan strukturnya',
    howE: 'Rumus ini adalah model referensi untuk perencanaan dan perbandingan, bukan pengganti kontrak, saran medis, penawaran profesional, atau aturan resmi',
    exampleA: 'Contoh praktis menghubungkan data input dengan hasil pada',
    exampleB: 'Pengguna mengisi atau memeriksa kolom',
    exampleC: 'Area hasil menampilkan',
    exampleD: 'Periksa contoh terlebih dahulu, lalu ganti dengan nilai Anda sendiri satu per satu',
    tipsA: 'Kesalahan umum adalah memasukkan angka tanpa memeriksa satuan, periode, mata uang, atau pembulatan di',
    tipsB: 'Hasil bisa kurang akurat jika data masih perkiraan atau biaya, aturan, dan batasan berada di luar rumus',
    tipsC: 'Simpan skenario dasar, konservatif, dan optimistis untuk perbandingan',
    tipsD: 'Jika perhitungan memengaruhi uang, kesehatan, renovasi, atau tenggat, gunakan sebagai panduan dan verifikasi dengan sumber tepercaya',
    qUse: 'Bagaimana cara menggunakan',
    qCalc: 'Bagaimana hasil dihitung di',
    qDiff: 'Mengapa hasil dari',
    qData: 'Data apa yang diperlukan untuk',
    qCompare: 'Bisakah membandingkan skenario dengan',
    aUse: 'Tentukan pertanyaan, isi kolom utama, lalu ubah satu nilai setiap kali ingin membandingkan',
    aCalc: 'Alat mengambil nilai yang dimasukkan, menormalkannya, lalu menerapkan model referensi',
    aDiff: 'Perbedaan muncul ketika kondisi nyata mencakup biaya, tanggal tepat, pajak, material, kesehatan, aturan lokal, atau pembulatan',
    aData: 'Biasanya cukup mengisi nilai utama; jika data belum pasti, mulai dengan asumsi wajar dan hitung ulang nanti',
    aCompare: 'Ya, hitung skenario dasar terlebih dahulu, lalu ubah satu parameter untuk melihat perubahan indikator',
  }),
  tr: makeLocalizedCopy({
    introA: 'elektronik tablo veya elle formül kullanmadan belirli bir hesaplama işini çözer',
    introB: 'Hızlı kontrol, seçenek karşılaştırma ve karar öncesi sayıları hazırlamak için kullanışlıdır',
    introC: 'Tek bir kopuk sayı yerine anlaşılır bir tahmine ihtiyacınız olduğunda kullanın',
    howA: 'Hesaplama ana girdilerle başlar',
    howB: 'Hesaplayıcı değerleri kontrol eder, gerekli birimlere dönüştürür ve seçilen moda göre mantığı uygular',
    howC: 'Ardından ana sonuç göstergeleri görüntülenir',
    howD: 'Böylece yalnızca nihai sayıyı değil, sonucu açıklayan destek değerleri de görürsünüz',
    howE: 'Formül planlama ve karşılaştırma için referans modeldir; sözleşme, tıbbi tavsiye, profesyonel teklif veya resmi kural yerine geçmez',
    exampleA: 'Pratik örnek, girilen verilerden sonuca kadar süreci gösterir:',
    exampleB: 'Kullanıcı şu alanları doldurur veya kontrol eder',
    exampleC: 'Sonuç alanı şunları gösterir',
    exampleD: 'Önce örneği kontrol edin, sonra kendi değerlerinizi tek tek değiştirerek etkiyi görün',
    tipsA: 'En yaygın hata, birim, dönem, para birimi veya yuvarlama kontrolü yapmadan sayı girmektir:',
    tipsB: 'Veriler yaklaşık olduğunda veya maliyetler, kurallar ve sınırlar formül dışında kaldığında sonuç hatalı olabilir',
    tipsC: 'Karşılaştırma için temel, temkinli ve iyimser üç senaryo saklayın',
    tipsD: 'Hesaplama para, sağlık, tadilat veya takvimleri etkiliyorsa sonucu rehber olarak kullanın ve yetkin kaynakla doğrulayın',
    qUse: 'Nasıl doğru kullanılır',
    qCalc: 'Sonuç nasıl hesaplanır',
    qDiff: 'Neden sonuç farklı olabilir',
    qData: 'Hangi veriler gerekir',
    qCompare: 'Senaryolar karşılaştırılabilir mi',
    aUse: 'Önce soruyu belirleyin, ana alanları doldurun ve karşılaştırma için her seferinde tek değeri değiştirin',
    aCalc: 'Araç girilen değerleri alır, normalleştirir ve referans hesaplama modelini uygular',
    aDiff: 'Gerçek koşullar ücretler, kesin tarihler, vergiler, malzemeler, sağlık, yerel kurallar veya yuvarlama içerdiğinde fark oluşur',
    aData: 'Genellikle ana değerler yeterlidir; belirsiz bilgiler için makul varsayımla başlayıp sonra yeniden hesaplayabilirsiniz',
    aCompare: 'Evet, önce temel senaryoyu hesaplayın, sonra bir parametreyi değiştirerek göstergeleri karşılaştırın',
  }),
  vi: makeLocalizedCopy({
    introA: 'giúp giải một bài toán tính toán cụ thể mà không cần bảng tính hay công thức thủ công',
    introB: 'Phù hợp để kiểm tra nhanh, so sánh phương án và chuẩn bị số liệu trước khi quyết định',
    introC: 'Hãy dùng khi bạn cần một ước tính dễ hiểu thay vì một con số rời rạc',
    howA: 'Phép tính bắt đầu từ các dữ liệu chính',
    howB: 'Máy tính kiểm tra giá trị, đổi về đơn vị cần thiết và áp dụng logic của chế độ đã chọn',
    howC: 'Sau đó các chỉ số kết quả chính được hiển thị',
    howD: 'Bạn thấy số cuối cùng và cả các giá trị giúp giải thích cấu trúc kết quả',
    howE: 'Công thức là mô hình tham khảo để lập kế hoạch và so sánh, không thay thế hợp đồng, tư vấn y tế, báo giá chuyên môn hay quy định chính thức',
    exampleA: 'Ví dụ thực tế đi từ dữ liệu nhập đến kết quả trong',
    exampleB: 'Người dùng điền hoặc kiểm tra các trường',
    exampleC: 'Khu vực kết quả hiển thị',
    exampleD: 'Hãy kiểm tra ví dụ trước, sau đó thay bằng số của bạn và chỉ đổi một tham số mỗi lần',
    tipsA: 'Lỗi thường gặp là nhập số mà chưa kiểm tra đơn vị, kỳ hạn, tiền tệ hoặc cách làm tròn trong',
    tipsB: 'Kết quả có thể thiếu chính xác nếu dữ liệu chỉ ước lượng hoặc chi phí, quy tắc và giới hạn nằm ngoài công thức',
    tipsC: 'Nên lưu một kịch bản cơ sở, một kịch bản thận trọng và một kịch bản lạc quan để so sánh',
    tipsD: 'Nếu phép tính ảnh hưởng đến tiền bạc, sức khỏe, sửa nhà hoặc thời hạn, hãy dùng như tham khảo và xác minh với nguồn đáng tin cậy',
    qUse: 'Cách sử dụng đúng',
    qCalc: 'Kết quả được tính như thế nào trong',
    qDiff: 'Vì sao kết quả của',
    qData: 'Cần dữ liệu gì cho',
    qCompare: 'Có thể so sánh kịch bản với',
    aUse: 'Trước tiên xác định câu hỏi, điền các trường chính và chỉ thay đổi một giá trị mỗi lần khi so sánh',
    aCalc: 'Công cụ lấy các giá trị đã nhập, chuẩn hóa chúng và áp dụng mô hình tham khảo',
    aDiff: 'Chênh lệch xuất hiện khi điều kiện thực tế có phí, ngày chính xác, thuế, vật liệu, sức khỏe, quy tắc địa phương hoặc làm tròn',
    aData: 'Thông thường chỉ cần các giá trị chính; nếu chưa biết chính xác, hãy bắt đầu bằng giả định hợp lý rồi tính lại',
    aCompare: 'Có, hãy tính kịch bản cơ sở trước, sau đó đổi một tham số để xem chỉ số thay đổi ra sao',
  }),
  cs: makeLocalizedCopy({
    introA: 'řeší konkrétní výpočet bez tabulek a ručních vzorců',
    introB: 'Hodí se pro rychlou kontrolu, porovnání variant a přípravu čísel před rozhodnutím',
    introC: 'Použijte jej, když potřebujete srozumitelný odhad, ne jen izolované číslo',
    howA: 'Výpočet začíná hlavními vstupy',
    howB: 'Kalkulačka zkontroluje hodnoty, převede je do potřebných jednotek a použije logiku zvoleného režimu',
    howC: 'Poté zobrazí hlavní výsledkové ukazatele',
    howD: 'Vidíte tak finální číslo i podpůrné hodnoty, které vysvětlují strukturu výsledku',
    howE: 'Vzorec je referenční model pro plánování a porovnání, ale nenahrazuje smlouvu, lékařskou radu, odbornou nabídku ani oficiální pravidla',
    exampleA: 'Praktický příklad vede od zadaných dat k výsledku v',
    exampleB: 'Uživatel vyplní nebo zkontroluje pole',
    exampleC: 'Výsledková část zobrazí',
    exampleD: 'Nejprve ověřte příklad a poté nahraďte hodnoty vlastními, vždy jen jeden parametr',
    tipsA: 'Častou chybou je zadat čísla bez kontroly jednotek, období, měny nebo zaokrouhlení v',
    tipsB: 'Výsledek může být nepřesný, pokud jsou vstupy odhadované nebo pokud náklady, pravidla a omezení leží mimo vzorec',
    tipsC: 'Uložte základní, opatrnou a optimistickou variantu pro porovnání scénářů',
    tipsD: 'Pokud výpočet ovlivňuje peníze, zdraví, rekonstrukci nebo termíny, berte jej jako vodítko a ověřte u kvalifikovaného zdroje',
    qUse: 'Jak správně používat',
    qCalc: 'Jak se počítá výsledek v',
    qDiff: 'Proč se může výsledek z',
    qData: 'Jaká data jsou potřeba pro',
    qCompare: 'Lze porovnat scénáře pomocí',
    aUse: 'Nejprve určete otázku, vyplňte hlavní pole a pro porovnání měňte vždy jen jednu hodnotu',
    aCalc: 'Nástroj převezme zadané hodnoty, normalizuje je a použije referenční model',
    aDiff: 'Rozdíly vznikají, když reálné podmínky zahrnují poplatky, přesná data, daně, materiály, zdraví, místní pravidla nebo zaokrouhlení',
    aData: 'Obvykle stačí hlavní hodnoty; při nejistotě začněte rozumným odhadem a později přepočítejte',
    aCompare: 'Ano, nejprve spočítejte základní scénář a potom změňte jeden parametr, abyste viděli dopad',
  }),
  uk: makeLocalizedCopy({
    introA: 'допомагає розв’язати конкретну розрахункову задачу без таблиць і ручних формул',
    introB: 'Він корисний для швидкої перевірки ідеї, порівняння варіантів і підготовки чисел перед рішенням',
    introC: 'Використовуйте його, коли потрібна зрозуміла оцінка, а не одне число без контексту',
    howA: 'Розрахунок починається з основних вхідних даних',
    howB: 'Калькулятор перевіряє значення, приводить їх до потрібних одиниць і застосовує логіку вибраного режиму',
    howC: 'Після цього виводяться головні показники результату',
    howD: 'Так видно не лише підсумкове число, а й значення, що пояснюють структуру результату',
    howE: 'Формула є довідковою моделлю для планування й порівняння, але не замінює договір, медичну консультацію, кошторис або офіційні правила',
    exampleA: 'Практичний приклад проходить шлях від введених даних до результату в',
    exampleB: 'Користувач заповнює або перевіряє поля',
    exampleC: 'Блок результату показує',
    exampleD: 'Спочатку перевірте приклад, а потім підставте власні значення, змінюючи один параметр за раз',
    tipsA: 'Поширена помилка — вводити числа без перевірки одиниць, періоду, валюти або округлення в',
    tipsB: 'Результат може бути неточним, якщо дані приблизні або якщо витрати, правила й обмеження не входять у формулу',
    tipsC: 'Збережіть базовий, обережний та оптимістичний сценарії для порівняння',
    tipsD: 'Якщо розрахунок впливає на гроші, здоров’я, ремонт або строки, використовуйте його як орієнтир і звіряйте з надійним джерелом',
    qUse: 'Як правильно користуватися',
    qCalc: 'Як обчислюється результат у',
    qDiff: 'Чому результат',
    qData: 'Які дані потрібні для',
    qCompare: 'Чи можна порівнювати сценарії з',
    aUse: 'Спочатку визначте питання, заповніть основні поля й змінюйте лише одне значення під час порівняння',
    aCalc: 'Інструмент бере введені значення, нормалізує їх і застосовує довідкову модель розрахунку',
    aDiff: 'Відмінності виникають, коли реальні умови містять комісії, точні дати, податки, матеріали, здоров’я, місцеві правила або округлення',
    aData: 'Зазвичай достатньо основних значень; якщо дані невідомі, почніть з припущень і перерахуйте пізніше',
    aCompare: 'Так, спочатку порахуйте базовий варіант, а потім змініть один параметр і порівняйте показники',
  }),
  sk: makeLocalizedCopy({
    introA: 'rieši konkrétnu výpočtovú úlohu bez tabuliek a ručných vzorcov',
    introB: 'Hodí sa na rýchlu kontrolu, porovnanie možností a prípravu čísel pred rozhodnutím',
    introC: 'Použite ho, keď potrebujete zrozumiteľný odhad, nie iba izolované číslo',
    howA: 'Výpočet začína hlavnými vstupmi',
    howB: 'Kalkulačka skontroluje hodnoty, prevedie jednotky a použije logiku zvoleného režimu',
    howC: 'Potom zobrazí hlavné výsledkové ukazovatele',
    howD: 'Vidíte tak konečný výsledok aj hodnoty, ktoré vysvetľujú jeho štruktúru',
    howE: 'Vzorec je referenčný model na plánovanie a porovnanie, ale nenahrádza zmluvu, lekársku radu, odbornú ponuku ani oficiálne pravidlá',
    exampleA: 'Praktický príklad vedie od zadaných údajov k výsledku v',
    exampleB: 'Používateľ vyplní alebo skontroluje polia',
    exampleC: 'Výsledková časť zobrazí',
    exampleD: 'Najprv overte príklad a potom dosaďte vlastné hodnoty, vždy iba jeden parameter',
    tipsA: 'Častou chybou je zadávať čísla bez kontroly jednotiek, obdobia, meny alebo zaokrúhlenia v',
    tipsB: 'Výsledok môže byť nepresný, ak sú vstupy odhadované alebo ak náklady, pravidlá a obmedzenia zostávajú mimo vzorca',
    tipsC: 'Uložte základný, opatrný a optimistický scenár na porovnanie',
    tipsD: 'Ak výpočet ovplyvňuje peniaze, zdravie, rekonštrukciu alebo termíny, berte ho ako orientáciu a overte u kvalifikovaného zdroja',
    qUse: 'Ako správne používať',
    qCalc: 'Ako sa počíta výsledok v',
    qDiff: 'Prečo sa môže výsledok z',
    qData: 'Aké údaje sú potrebné pre',
    qCompare: 'Dajú sa porovnať scenáre pomocou',
    aUse: 'Najprv určte otázku, vyplňte hlavné polia a pri porovnaní meňte vždy len jednu hodnotu',
    aCalc: 'Nástroj prevezme zadané hodnoty, normalizuje ich a použije referenčný model',
    aDiff: 'Rozdiely vznikajú, keď reálne podmienky zahŕňajú poplatky, presné dátumy, dane, materiály, zdravie, miestne pravidlá alebo zaokrúhlenia',
    aData: 'Zvyčajne stačia hlavné hodnoty; pri neistote začnite rozumným odhadom a neskôr prepočítajte',
    aCompare: 'Áno, najprv vypočítajte základný scenár a potom zmeňte jeden parameter, aby ste videli rozdiel',
  }),
  hu: makeLocalizedCopy({
    introA: 'egy konkrét számítási feladatot old meg táblázatok és kézi képletek nélkül',
    introB: 'Hasznos gyors ellenőrzéshez, alternatívák összehasonlításához és döntés előtti számoláshoz',
    introC: 'Akkor használja, ha érthető becslésre van szüksége, nem csak egy elszigetelt számra',
    howA: 'A számítás a fő bemeneti adatokkal kezdődik',
    howB: 'A kalkulátor ellenőrzi az értékeket, szükség esetén egységeket vált, majd alkalmazza a választott mód logikáját',
    howC: 'Ezután megjeleníti a fő eredménymutatókat',
    howD: 'Így nemcsak a végső szám látható, hanem azok az értékek is, amelyek magyarázzák az eredmény felépítését',
    howE: 'A képlet tervezési és összehasonlítási referenciamodell, de nem helyettesít szerződést, orvosi tanácsot, szakmai ajánlatot vagy hivatalos szabályt',
    exampleA: 'A gyakorlati példa a megadott adatoktól az eredményig vezet a következőben:',
    exampleB: 'A felhasználó kitölti vagy ellenőrzi ezeket a mezőket',
    exampleC: 'Az eredményterület ezt mutatja',
    exampleD: 'Először ellenőrizze a példát, majd saját értékeit egyenként módosítva nézze meg a hatást',
    tipsA: 'Gyakori hiba, hogy valaki egység, időszak, pénznem vagy kerekítés ellenőrzése nélkül ír be számokat ebben:',
    tipsB: 'Az eredmény pontatlan lehet, ha az adatok becslések, vagy költségek, szabályok és korlátok kívül esnek a képleten',
    tipsC: 'Érdemes alap, óvatos és optimista változatot menteni az összehasonlításhoz',
    tipsD: 'Ha a számítás pénzt, egészséget, felújítást vagy határidőt érint, tekintse iránymutatásnak és ellenőrizze megbízható forrásból',
    qUse: 'Hogyan kell helyesen használni',
    qCalc: 'Hogyan számolja az eredményt',
    qDiff: 'Miért térhet el az eredménye',
    qData: 'Milyen adatok kellenek ehhez:',
    qCompare: 'Összehasonlíthatók forgatókönyvek ezzel:',
    aUse: 'Először határozza meg a kérdést, töltse ki a fő mezőket, és összehasonlításkor egyszerre csak egy értéket változtasson',
    aCalc: 'Az eszköz átveszi a megadott értékeket, normalizálja őket, majd referenciamodellt alkalmaz',
    aDiff: 'Eltérés akkor jelenik meg, ha a valós feltételek díjakat, pontos dátumokat, adókat, anyagokat, egészségi tényezőket, helyi szabályokat vagy kerekítést tartalmaznak',
    aData: 'Általában a fő értékek elegendők; bizonytalan adatoknál induljon ésszerű feltételezéssel, majd számoljon újra',
    aCompare: 'Igen, először számolja ki az alapváltozatot, majd módosítson egy paramétert és hasonlítsa össze a mutatókat',
  }),
});

const localeFallback: Record<string, keyof typeof genericCopy> = {
  es: 'es',
  de: 'de',
  fr: 'fr',
  pt: 'pt',
  it: 'it',
  pl: 'pl',
  nl: 'nl',
  ro: 'ro',
  id: 'id',
  tr: 'tr',
  vi: 'vi',
  cs: 'cs',
  uk: 'uk',
  sk: 'sk',
  hu: 'hu',
};

const categoryAccuracy: Record<string, Record<string, string>> = {
  finance: {
    ru: 'Для финансовых расчетов отдельно проверяйте актуальные ставки, налоги и условия банка или сервиса.',
    en: 'For financial calculations, separately check current rates, taxes and provider terms.',
  },
  currency: {
    ru: 'Для валютных расчетов сверяйте курс перед фактической покупкой, продажей или переводом денег.',
    en: 'For currency calculations, check the rate before an actual exchange, purchase or transfer.',
  },
  sport: {
    ru: 'Для спортивных и медицинских показателей учитывайте самочувствие, опыт и рекомендации специалиста.',
    en: 'For fitness and health values, consider wellbeing, experience and professional guidance.',
  },
  building: {
    ru: 'Для ремонта сверяйте результат с инструкциями производителя и реальными условиями помещения.',
    en: 'For renovation work, compare the estimate with manufacturer instructions and real room conditions.',
  },
  'date-time': {
    ru: 'Для дат проверяйте локальные праздники, рабочие правила и формат включения границ периода.',
    en: 'For dates, check local holidays, working rules and whether period boundaries are included.',
  },
};

function listText(items: string[]): string {
  return items.filter(Boolean).slice(0, 5).join(', ');
}

function normalizeSpaces(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

function wordCount(text: string): number {
  return normalizeSpaces(text).split(/\s+/).filter(Boolean).length;
}

function asSentence(text: string): string {
  const clean = normalizeSpaces(text);
  if (!clean) return '';
  return /[.!?]$/.test(clean) ? clean : `${clean}.`;
}

function clampToMax(text: string, min: number, max: number): string {
  const sentences = normalizeSpaces(text)
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);

  if (sentences.length <= 1) return normalizeSpaces(text);

  while (wordCount(sentences.join(' ')) > max && sentences.length > 1) {
    const next = sentences.slice(0, -1).join(' ');
    if (wordCount(next) < min) break;
    sentences.pop();
  }

  return normalizeSpaces(sentences.join(' '));
}

function padToMin(text: string, min: number, max: number, additions: string[]): string {
  let output = clampToMax(text, min, max);

  for (const addition of additions) {
    if (wordCount(output) >= min) break;

    const sentence = asSentence(addition);
    if (!sentence || output.includes(sentence)) continue;

    if (wordCount(output) + wordCount(sentence) <= max) {
      output = normalizeSpaces(`${output} ${sentence}`);
    }
  }

  return clampToMax(output, min, max);
}

function contentParams(calculator: CalculatorDef, locale: string): GeneratedParams {
  const base = locale === 'ru' || locale === 'uk' ? 'ru' : 'en';
  const fields = listText(calculator.fields.map((field) => field.label));
  const results = listText(Object.values(calculator.resultLabels));
  return {
    name: calculator.name,
    shortDescription: calculator.shortDescription,
    fields: fields || calculator.name,
    results: results || calculator.name,
    example: calculator.example,
    categoryTip: categoryTips[calculator.category]?.[locale] ?? categoryTips[calculator.category]?.[base] ?? categoryTips.finance.en,
    formula: formulaHints[calculator.category]?.[locale] ?? formulaHints[calculator.category]?.[base] ?? formulaHints.finance.en,
    accuracy: categoryAccuracy[calculator.category]?.[locale] ?? categoryAccuracy[calculator.category]?.[base] ?? categoryAccuracy.finance.en,
  };
}

export function getCalculatorSeoContent(calculator: CalculatorDef, locale: string): CalculatorSeoContent {
  const manual = calculatorSeoContent[locale]?.[calculator.id];
  if (manual) return manual;

  const copyKey = locale === 'ru' ? 'ru' : (localeFallback[locale] ?? 'en');
  const copy = genericCopy[copyKey];
  const params = contentParams(calculator, locale);
  const intro = normalizeSpaces(copy.intro(params));
  const howItWorks = normalizeSpaces(copy.howItWorks(params));
  const example = normalizeSpaces(copy.example(params));
  const tips = normalizeSpaces(copy.tips(params));

  return {
    intro: padToMin(intro, 40, 80, [params.example, params.fields, params.results]),
    howItWorks: padToMin(howItWorks, 120, 250, [params.shortDescription, params.example, params.results]),
    example: padToMin(example, 80, 150, [
      params.shortDescription,
      params.fields,
      params.results,
      `${params.name} ${params.fields} ${params.results}`,
    ]),
    tips: padToMin(tips, 120, 200, [params.shortDescription, params.example, params.fields]),
    faq: copy.faq(params).map((item) => ({
      q: normalizeSpaces(item.q),
      a: padToMin(normalizeSpaces(item.a), 40, 90, [params.shortDescription, params.example, params.results]),
    })),
  };
}
