questions = [
    // OŚ 1: WYKSZTAŁCENIE (Kształcony +econ / Niekształcony -econ)
    {
        "question": "Jeśli w wiosce lub na zamku trzeba szybko policzyć worki z ziarnem dla poborcy, to właśnie do mnie się z tym idzie.",
        "effect": { "econ": 10, "dipl": 0, "govt": 0, "scty": 0 }
    },
    {
        "question": "Prawdziwa praca polega na pocie, twardych odciskach i bólu pleców, a nie na delikatnym przewracaniu pergaminów.",
        "effect": { "econ": -10, "dipl": 0, "govt": 0, "scty": 0 }
    },
    {
        "question": "Znam się na skomplikowanym fachu, rzemiośle lub mechanizmach znacznie lepiej niż przeciętny parobek z widłami.",
        "effect": { "econ": 10, "dipl": 0, "govt": 0, "scty": 0 }
    },
    {
        "question": "Znak koślawego krzyżyka na pergaminie w zupełności mi wystarcza; litery to wymysł, który chłopom tylko miesza w głowach.",
        "effect": { "econ": -10, "dipl": 0, "govt": 0, "scty": 0 }
    },
    {
        "question": "Potrafię precyzyjnie wycenić wartość towaru, odważyć kruszec i obliczyć zysk, by żaden wędrowny kramarz mnie nie oszukał.",
        "effect": { "econ": 10, "dipl": 0, "govt": 0, "scty": 0 }
    },
    {
        "question": "Mój jedyny fach to ten, którego nauczył mnie ojciec w polu i zagrodzie – orać, zbierać i jakoś przetrwać do przednówka.",
        "effect": { "econ": -10, "dipl": 0, "govt": 0, "scty": 0 }
    },
    {
        "question": "Kiedy widzę zapisaną księgę lub pismo z lakową pieczęcią, widzę w tym sens i wartość, a nie tylko zbiór niezrozumiałych szlaczków.",
        "effect": { "econ": 10, "dipl": 0, "govt": 0, "scty": 0 }
    },
    {
        "question": "Gdy potrzebuję rady, idę do najstarszych we wsi, by posłuchać ludowych mądrości, a nie szukam odpowiedzi u wyuczonych skrybów.",
        "effect": { "econ": -10, "dipl": 0, "govt": 0, "scty": -10 }
    },

    // OŚ 2: WALKA (Walczący +dipl / Niewalczący -dipl)
    {
        "question": "Gdy do wsi zbliża się banda zwierzoludzi lub głodnych wilków, chwytam za broń i staję w szeregu, zamiast chować się w oborze.",
        "effect": { "econ": 0, "dipl": 10, "govt": 0, "scty": 0 }
    },
    {
        "question": "Rozlew krwi to sprawa Rycerzy i ich zbrojnych; ja jestem prostym chłopem od ciężkiej pracy i dbania o to, by inni mieli co jeść.",
        "effect": { "econ": 0, "dipl": -10, "govt": 0, "scty": 0 }
    },
    {
        "question": "Znam się na naciąganiu łuku, rąbaniu mieczem lub tropieniu zwierzyny znacznie lepiej niż zwykły rolnik.",
        "effect": { "econ": 0, "dipl": 10, "govt": 0, "scty": 0 }
    },
    {
        "question": "Widok rozprutych brzuchów, otwartych ran i trupów napawa mnie obrzydzeniem i sprawia, że drżą mi kolana.",
        "effect": { "econ": 0, "dipl": -10, "govt": 0, "scty": 0 }
    },
    {
        "question": "Mam za sobą regularną służbę w straży, zamkowym garnizonie lub jako pachołek w poczcie zbrojnym mojego Pana.",
        "effect": { "econ": 0, "dipl": 10, "govt": 10, "scty": 0 }
    },
    {
        "question": "Zamiast wdawać się w bójkę na noże w karczmie, wolę schować dumę do kieszeni i postawić krewkim chłopom po kolejce piwa.",
        "effect": { "econ": 0, "dipl": -10, "govt": 0, "scty": 10 }
    },
    {
        "question": "Uważam, że każdy chłop w Bretonii powinien umieć obronić swój dobytek siłą i zabić, jeśli zajdzie taka ostateczna potrzeba.",
        "effect": { "econ": 0, "dipl": 10, "govt": 0, "scty": 0 }
    },
    {
        "question": "Mój fach w rękach jest zbyt cenny, bym ryzykował utratę palców lub życia w jakiejś głupiej, zbrojnej potyczce.",
        "effect": { "econ": 10, "dipl": -10, "govt": 0, "scty": 0 }
    },

    // OŚ 3: OBYCIE (Zamkowy +govt / Wiejski -govt)
    {
        "question": "Wiem, jak głęboko się ukłonić i jakich słów użyć, by nie rozgniewać przejeżdżającego w pobliżu Rycerza.",
        "effect": { "econ": 0, "dipl": 0, "govt": 10, "scty": 0 }
    },
    {
        "question": "Na widok Pana w lśniącej zbroi najchętniej padam twarzą w błoto i modlę się, by jego koń po mnie nie przejechał.",
        "effect": { "econ": 0, "dipl": 0, "govt": -10, "scty": 0 }
    },
    {
        "question": "Z chęcią i dumą noszę kolory i znaki heraldyczne swojego Pana, a także dbam o biżuterię, bo ubiór świadczy o człowieku.",
        "effect": { "econ": 0, "dipl": 0, "govt": 10, "scty": 0 }
    },
    {
        "question": "Moje życie to błoto, zapach obory i nieprana tunika – i nie wstydzę się tego, bo tacy są wszyscy chłopi z mojej wioski.",
        "effect": { "econ": 0, "dipl": 0, "govt": -10, "scty": 0 }
    },
    {
        "question": "Praca na zamku, podgrodziu lub w miejskim kramie to dowód na to, że jestem kimś lepszym i bardziej ambitnym niż zwykły kopacz rzepy.",
        "effect": { "econ": 0, "dipl": 0, "govt": 10, "scty": 0 }
    },
    {
        "question": "Dworskie obyczaje, intrygi służby i etykieta są mi całkowicie obce; wolę rozwiązywać spory wewnątrz gromady.",
        "effect": { "econ": 0, "dipl": 0, "govt": -10, "scty": 0 }
    },
    {
        "question": "Czuję się swobodnie w otoczeniu ludzi bogatszych i wyższych stanem, rozumiem ich świat, choć sam do niego nie należę.",
        "effect": { "econ": 0, "dipl": 0, "govt": 10, "scty": 0 }
    },
    {
        "question": "Nigdy nie opuściłem swoich rodzinnych stron, a obcy budzą we mnie ogromną nieufność i podejrzliwość.",
        "effect": { "econ": -10, "dipl": 0, "govt": -10, "scty": 0 }
    },

    // OŚ 4: PODEJŚCIE DO ŻYCIA (Rubarum +scty / Sanctum -scty)
    {
        "question": "Życie chłopa jest krótkie i parszywe, dlatego trzeba pić, tańczyć i bawić się przy każdej możliwej okazji, żyjąc chwilą.",
        "effect": { "econ": 0, "dipl": 0, "govt": 0, "scty": 10 }
    },
    {
        "question": "Każdego dnia gorliwie modlę się do Bóstw, a widome znaki mojej wiary to mój najważniejszy dobytek.",
        "effect": { "econ": 0, "dipl": 0, "govt": 0, "scty": -10 }
    },
    {
        "question": "Nawet po największej tragedii uważam, że \"co się stało, to się nie odstanie\" i po prostu wyciągam z sytuacji to, co najwygodniejsze.",
        "effect": { "econ": 0, "dipl": 0, "govt": 0, "scty": 10 }
    },
    {
        "question": "Wolałbym oddać swój ostatni miedziak jako ofiarę dla wędrownego kapłana lub pielgrzyma, niż wydać go na antałek wina w karczmie.",
        "effect": { "econ": 0, "dipl": 0, "govt": 0, "scty": -10 }
    },
    {
        "question": "Zgadzam się z powiedzeniem, że wolę dostać \"rybę\" niż \"wędkę\" – jestem trochę leniwy, ale za to wesoły i towarzyski.",
        "effect": { "econ": -10, "dipl": 0, "govt": 0, "scty": 10 }
    },
    {
        "question": "Kiedy przychodzi susza, choroba lub głód, wierzę, że to gniew Bogów i jedynym ratunkiem jest surowa pokuta.",
        "effect": { "econ": 0, "dipl": 0, "govt": -10, "scty": -10 }
    },
    {
        "question": "W karczmie zawsze jestem pierwszy do śpiewu i tańca, bo uważam, że smutek to marnowanie cennego czasu.",
        "effect": { "econ": 0, "dipl": 0, "govt": 0, "scty": 10 }
    },
    {
        "question": "Pielgrzymki, wierność Bóstwom i cicha, wytrwała modlitwa uszlachetniają chłopa i dają mu nadzieję na lepszy los po śmierci.",
        "effect": { "econ": 0, "dipl": 0, "govt": 0, "scty": -10 }
    }
];
