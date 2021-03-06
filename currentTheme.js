
export default class CurrentTheme{
    static thislink = null

    constructor() {
        if(CurrentTheme.thislink){
            return CurrentTheme.thislink
        }
        CurrentTheme.thislink = this;
        this.render();
        this.getSubelements();
    }

    render () {
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');
        div.append(h1,p);
        this.element = div;
    }

    getSubelements () {
        this.subelements ={
            "p":this.element.querySelector('p'),
            "h1":this.element.querySelector('h1')
        }
    }

    changeTheme (topic) {
        const theme = topic_themeDict[topic];
        this.subelements["h1"].textContent = theme;
        this.subelements["p"].textContent = themeDict[theme];
    }

    remove () {
        this.element.remove();
    }

    destroy () {
        this.remove();
        this.element = null;
        this.subelements = null;
        CurrentTheme.thislink = null;
     }


}

const themeDict = {
    "Возврат денег (refound)": "Не знаю, что случилось с конторой, но уже 3 депозита по 500 рублей не было возвращено на карту. Тп в чате сообщает что \"все зарезервированные средства разблокированы, обращайтесь в банк\".Тп Сбербанка сообщает что были произведены операции покупки/списания, и никаких средств возвращено не было. Первый звоночек был 16.03.2021, второй и третий сегодня 29.03.2021. Что делать?",
    "Парковка (parking)":"Отвратительно. Мой первый опыт самокатов в России и такой негативный. Зачем вы делаете красные зоны и нейтральные (не красные), если я не могу там везде парковаться? Я взяла вуш около института, но поставить его туда обратно не смогла, так как нужно было ехать до зоны Р. Ниче, что зона Р в обратном направлении от меня км назад? Если у вас можно парковаться на зонах Р, сделайте тогда все зоны кроме них красными. В Европе такой хероты не было. Можно было оставить на улице везде в разрешённых зон.",
    "Непрозрачные расчеты (opaque calculation)":"За 25 минут на 2 самокатах заплатил почти 400 рублей, хотя тариф 5р/минута, причем на 1 самокате за 25 минут сняли 200 р , а на 2 самокате за 28 минут 175 рублей, какие то странные расчёты.",
    "Трудности с началом/концом аренды (Start/End issues)":"Настоятельно не рекомендую! ! ! По факту покатались час , потом в течении двух часов не могли завершить аренду ,(почему нельзя сделать -закрыл замок и деньги перестали капать... приложение все время виснет...не отвечает.. горячей линии нет !!! Итог два часа вместо сна потрачено на завершение аренды потрачены нервы и естественно деньги , очень жаль что вы так испортились ...удаляю навсегда !",
    "Блокировка аккаунта (account block)":"Отвратительное отношение к клиентам у данной компании. Пользовался их услугами, всё было нормально, всё нравилось, собирался пользоваться дальше. Но внезапно приложение перестало работать. Точнее, стало выдавать сообщение, что аккаунт заблокирован, и клиент должен написать им в техподдержку (как будто это проблема клиента). Ладно, написал в техподдержку. Ответа ноль (прошло уже 18 дней). В итоге что в сухом остатке: без разбирательств, без объяснения причин и без каких-либо извинений заблокировали клиента, который им приносил несколько тысяч рублей за месяц. Наверное, могут себе позволить... Очень показательный пример свинского отношения к клиентам, которые приносят им доход. Ладно, буду переходить на другие сервисы. Кто останется в выигрыше?",
    "Неавторизированные списания средств (unauthorized money transfers)":"Это мошенники!!! Списали повторно без моего разрешения деньги с карты!!! После моего обращения вернули деньги не на карту, а на бонусный счет в приложении и я их не могу потратить потому что просят привязать снова карту, чтобы снова красть!!! Верните туда, откуда украли. 500 вместо 250!!! То, что вы смогли без моего смс подтверждения украсть с карты деньги, это уже мошеннические действия! Я завершила всё по правилам раньше на 2 мин! Уроды!",
    "Проблемы с регистрацией (registration issues)": "Не смог зарегистрироваться. а этапе фото документов пишет ошибку и предлагает попробовать позже. раза с 12-го удалось загрузить все 6 фото, но при нажатии на кнопку регистрации выдает окошко с надписью что срок лицензии истёк (на английском). на этом всё. удалил приложении, установил заново - ещё 14 попыток зарегистрироваться и снова всё то же самое",
    "Безопасность (safety)": "Большинство самокатов для города не предназначены. По брусчатке ехать невозможно, колеса маленькие, привод передний - если тащишь самокат, то она бьет тебя по ногам задним колесом, так как вся масса спереди. Вместо тормозов очень слабый рекуператор - это очень опасно для всех. А еще все дико ушатанное, потому что это самые дешевые самокаты.",
    "Трудности с приложением (app issues)": "Скачал ваше приложение потому что, то которым я пользуюсь обычно сегодня не работает. Невозможно найти самокат. Я дал приложению все рзрешения, в итоге когда нажимаю кнопку геолокации (найти меня) карта скролится куда-то в сторону Африки... не знаю есть ли там ваши самокаты, но мне надо самокат в Москве. Пытался искать самокат по карте, не в центре города, не удалось найти т.к. карта интуитивно не понятна.",
    "Цена (price)": "Ну вы ребята обнаглели вообще! Мало того, что в Санкт-Петербурге за посадку надо 50₽ сразу платить и при такой стоимости минуты проката, зачастую получается дороже каршеринга! Так теперь ещё и скорость снизили. Цена осталась та же, например 7₽/мин, а скорость вместо 24 км/ч, стала 10 км/ч. То есть одно и тоже расстояние теперь мы проезжаем значительно дороже! Снизили скорость, снижайте цены!",
    "Простота использования (ease of use)":"Очень классно покатались на самокатах! Приложение удобное и понятное. А у метро Василеостровская ещё и чудесный консультант стоял Дмитрий! Спасибо ему огромное! Помог с первой поездкой, всё рассказал, показал, ещё и скидку получили! Всем рекомендую! Таких бы консультантов побольше. Теперь, благодаря его совету купить подписку, планируем кататься часто.",
}

const topic_themeDict = {
    1:"Возврат денег (refound)",
    2:"Парковка (parking)",
    3:"Непрозрачные расчеты (opaque calculation)",
    4:"Трудности с началом/концом аренды (Start/End issues)",
    5:"Блокировка аккаунта (account block)",
    6:"Неавторизированные списания средств (unauthorized money transfers)",
    7:"Проблемы с регистрацией (registration issues)",
    8:"Безопасность (safety)",
    9:"Трудности с приложением (app issues)",
    10:"Цена (price)",
    11:"Простота использования (ease of use)"
}