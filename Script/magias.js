traditions = {
    // Tradições de intelecto:
    "Adivinhação": {
        id: "i0",
        attribute: "intellect",
        darkMagic: false,
        spells: {
            "Bisbilhotar": {
                id: "M0",
                description: "O conjurador escolhe um ponto no espaço que possa ver a longa distância. Enquanto a magia está em efeito, ele ouve como se estivesse no ponto escolhido.",
                duration: "Concentração, até 1 minuto",
                type: "UT",
                level: 0
            },
            "Epifania": {
                id: "M1",
                description: "<b>Desencadeada</b> O conjurador pode utilizar uma ação desencadeada para conjurar a magia quando faz uma jogada de desafio ou de ataque. Ele joga o d20 duas vezes e utiliza o maior resultado do dado.",
                type: "UT",
                level: 0
            },
            "Augúrio": {
                id: "M2",
                description: "Enquanto o conjurador se concentra, ele utiliza as ferramentas de adivinhação para conseguir ver o futuro. Ao final deste período, ele faz uma pergunta ao Mestre, que possa ser respondida com “sim” ou “não”. O Mestre deve responder honestamente.",
                duration:  "Concentração, até 1 minuto",
                requisites: "O conjurador deve utilizar implementos de adivinhação, tal como cartas, dados, folhas de chá ou varetas entalhadas.",
                type: "UT",
                level: 1
            },
            "Predizer": {
                id: "M3",
                description: "Enquanto dura a magia, quando o alvo faz uma jogada de ataque ou de desafio e pode ouvir o conjurador, ele faz a jogada com 3 dádivas.",
                target: " Uma criatura no campo de visão do conjurador a curta distância",
                duration: "Concentração, até 1 minuto",
                type: "UT",
                level: 1
            },
            "Psicometria": {
                id: "M4",
                description: "O conjurador toca um alvo e aprende 1d6 fatos reais sobre ele, como a identidade do último proprietário; se o objeto é ou não amaldiçoado, possuído ou mágico; como o proprietário anterior ganhou ou perdeu o objeto; ou onde ele foi feito.",
                target: "Um objeto ao alcance do conjurador",
                type: "UT",
                level: 1
            },
            "Leitura": {
                id: "M5",
                description: "Enquanto se concentra, o conjurador lê a palma da mão do alvo. Ao fim deste período, o conjurador revela detalhes sobre o futuro do alvo. O alvo ganha seis previsões, que se mantêm por 1 hora ou até que gaste a última. Quando faz uma jogada de ataque ou de desafio, ele pode gastar uma previsão para fazer a jogada com 2 dádivas.",
                target: "Uma criatura ao alcance do conjurador",
                duration: "Concentração, até 1 minuto",
                type: "UT",
                level: 2
            },
            "Ouvir verdades": {
                id: "M6",
                description: "Enquanto durar a magia, o conjurador entende todos os idiomas que ouve e sabe quando estão dizendo a verdade.",
                duration: "1 hora",
                type: "UT",
                level: 2
            },
            "Localizar": {
                id: "M7",
                description: "O conjurador deve se concentrar por 1 minuto, durante este tempo ele visualiza uma criatura ou objeto. Ele pode visualizar uma coisa específica, tal como a taça utilizada por um monarca pela última vez, ou uma categoria geral, como uma armadilha. Quando termina, o conjurador sabe a localização da criatura ou objeto que escolheu sempre que estiver a média distância dele. O objeto/criatura não pode ficar escondido do conjurador, enquanto durar o efeito da magia. Este conhecimento também revela o caminho para chegar até ele. Caso diversos sujeitos caibam na mesma descrição, o conjurador sabe a localização de todos.",
                duration: "1 hora; consulte o efeito",
                type: "UT",
                level: 3
            },
            "Ver o futuro": {
                id: "M8",
                description: "Enquanto durar a magia, os movimentos do conjurador não desencadeiam ataques livres, impõe 2 perdições a jogadas de ataque contra ele e faz jogadas de desafio de Agilidade com 2 dádivas para resistir a ataques e outros efeitos nocivos",
                duration: "1 minuto",
                type: "UT",
                level: 3
            },
            "Visão": {
                id: "M9",
                description: "Enquanto durar a magia, o conjurador recebe os seguintes benefícios:<ul><li>Pode ver em áreas obscurecidas por sombras e escuridão como se estivessem iluminadas.</li><li>Pode ver através de efeitos de cobertura, disfarce ou itens com invisibilidade.</li><li>Vê auras ao redor de objetos sob efeito de magia e reconhece, imediatamente, qualquer coisa criada por uma magia de ilusão como tal.</li><li>Vê criaturas sob efeitos de magias de Transformação pelo que elas realmente são.</li><li>Pode utilizar uma ação para focar sua visão para ver através de obstáculos sólidos, enquanto está concentrado. O conjurador pode ver através de 1 metro de madeira, 30 cm de pedra ou 2,5 cm de metal.</li></ul>",
                duration: "1 hora; consulte o efeito",
                type: "UT",
                level: 4
            },
            "Clarividência": {
                id: "M10",
                description: "O conjurador toca o alvo e se concentra por 1 minuto, durante este período ele visualiza um lugar que tenha visto pelo menos uma vez, que se encaixe em um cubo com cerca de 10 metros de lado, e que esteja a até 1,6 km dele. Ao final do período de concentração, a bola de cristal se enche de fumaça, então fica clara e mostra o local visualizado. A bola de cristal mostra o local para todos que possam vê-lo, enquanto durar a magia.",
                target: "Uma bola de cristal ao alcance do conjurador",
                duration: "Concentração, até 1 hora; consulte o efeito",
                type: "UT",
                level: 5
            }
        }
    },
    "Arcana": {
        id: "i1",
        attribute: "intellect",
        darkMagic: false,
        spells: {
            "Armadura arcana": {
                id: "M0",
                description: "Um campo de força invisível surge ao redor do conjurador, fornecendo um bônus de +2 para sua Defesa, enquanto durar a magia. Além disso, enquanto a magia está em efeito, precipitação normal não toca o conjurador, ventos suaves não o afetam e ele não sente desconforto por frio ou calor, embora ainda sofra dano por fogo e frio.",
                requisites: " O conjurador não deve estar vestindo armadura.",
                duration: "4 horas",
                type: "UT",
                level: 0
            },
            "Dardo mágico": {
                id: "M1",
                description: "Um dardo mágico voa da ponta do dedo do conjurador. O dardo acerta automaticamente, se o caminho entre o conjurador e o alvo não estiver obstruído. O alvo sofre 1d3+1 de dano.",
                target: "Uma criatura ou objeto a longa distância",
                type: "AT",
                level: 0
            },
            "Dardos infalíveis": {
                id: "M2",
                description: "Sete dardos mágicos voam para fora das pontas dos dedos do conjurador, divididos como ele escolher entre seus alvos. Cada dardo acerta automaticamente, se o caminho entre o conjurador e os alvos não estiver obstruído. O alvo sofre 1 de dano para cada dardo que o atingir.",
                target: "Uma a três criaturas ou objetos a longa distância",
                type: "AT",
                level: 1
            },
            "Escudo arcano": {
                id: "M3",
                description: "Pela duração da magia, uma barreira de energia protege o conjurador, impondo 1 perdição a jogadas de ataque contra sua Defesa ou Agilidade. <br><b>Desencadeada</b> Quando uma criatura faz uma jogada de ataque contra sua Defesa ou Agilidade, o conjurador pode utilizar uma ação desencadeada para conjurar esta magia. A criatura desencadeante faz sua jogada de ataque com 3 perdições e, em seguida, o efeito termina.",
                duration: "1 minuto",
                type: "UT",
                level: 1
            },
            "Visão arcana": {
                id: "M4",
                description: "Pela duração da magia, o conjurador vê auras ao redor de criaturas, objetos e áreas afetadas por magia. A critério do Mestre, ele talvez possa aprender a qual tradição a magia pertence.",
                duration: "1 minuto",
                type: "UT",
                level: 1
            },
            "Dardos explosivos": {
                id: "M5",
                description: "Três dardos mágicos voam para fora das pontas dos dedos do conjurador, divididos como ele escolher entre seus alvos. Cada dardo acerta automaticamente, se o caminho entre o conjurador e os alvos não estiver obstruído. Cada dardo causa 1 de dano em seu alvo e em seguida explode em um raio de 1 metro de um ponto dentro do espaço do alvo. Tudo na área sofre 1d6+1 de dano, ou metade do dano, caso o alvo seja bem-sucedido em uma jogada de desafio de Agilidade.",
                target: " Uma a três criaturas ou objetos a longa distância",
                type: "AT",
                level: 2
            },
            "Magia fortalecida": {
                id: "M6",
                description: "Pela duração da magia, quando o conjurador conjurar uma magia, ele faz quaisquer jogadas de ataque com 1 dádiva, jogadas de ataque feitas para resistir ao efeito da magia são realizadas com 1 perdição.",
                duration: "1 minuto",
                type: "UT",
                level: 2
            },
            "Destruir magia": {
                id: "M7",
                description: "Todos os efeitos criados por magias de nível 3 ou menos que estejam ativos em qualquer coisa na área terminam imediatamente",
                area: "Um cubo, com 5 metros de lado, originado de um ponto a média distância",
                type: "UT",
                level: 3
            },
            "Relâmpago arcano": {
                id: "M8",
                description: "O relâmpago causa 5d6 de dano em tudo na área. Cada criatura na área deve fazer uma jogada de desafio de Agilidade, sofrendo metade do dano em caso de sucesso.",
                target: "Um cone, 5 metros de comprimento, originado em um ponto ao alcance do conjurador",
                type: "AT",
                level: 3
            },
            "Acumular magia": {
                id: "M9",
                description: "O conjurador acumula energia mágica, medida em pontos. Jogue 1d6+3 para determinar quantos pontos de energia mágica são acumulados. Você retêm esses pontos até completar um descanso ou gastá-los. Enquanto tiver pontos restantes, não poderá conjurar acumular magia novamente. O conjurador pode gastar os pontos de energia para conjurar uma magia que conheça em vez de gastar a conjuração daquela magia, mesmo que não haja mais conjurações restantes. Ele gasta uma quantidade de pontos igual ao nível da magia.",
                duration: "Consulte o efeito",
                type: "UT",
                level: 4
            },
            "Retribuição arcana": {
                id: "M10",
                description: "O conjurador ganha um bônus de +5 para sua defesa enquanto a magia está em efeito. A próxima vez que uma criatura a curta distância do conjurador obtiver um sucesso em uma jogada de ataque com uma arma contra ele, este efeito termina e o sucesso automaticamente se torna um fracasso. A criatura desencadeante deve fazer uma jogada de desafio de Força. Caso fracasse, ela sofre 10d6 de dano, é movida a 2d6 metros para longe do conjurador e fica prostrada. Ela sofre metade do dano caso seja bem-sucedida.",
                duration:" 4 horas; consulte o efeito",
                type: "AT",
                level: 5
            }
        }
    },
    "Batalha": {
        id: "i2",
        attribute: "intellect",
        darkMagic: false,
        spells: {
            "Ataque Ampliado": {
                id: "M0",
                description: "Como parte da conjuração desta magia, o conjurador faz um ataque com uma arma. O conjurador faz a jogada de ataque com 1 dádiva e pode utilizar Intelecto ao invés do atributo normal do ataque.",
                type: "AT",
                level: 0
            },
            "Celeridade": {
                id: "M1",
                description: "O conjurador se move até o dobro do Deslocamento. Este movimento não desencadeia ataques livres. <br><b>Desencadeado</b> O conjurador pode utilizar uma ação desencadeada em seu turno para conjurar esta magia. Caso faça isso, ele se move até seu Deslocamento normal sem desencadear ataques livres.",
                type: "UT",
                level: 0
            },
            "Ataque Poderoso": {
                id: "M2",
                description: "Como parte da conjuração desta magia, o conjurador faz um ataque com uma arma. Ele faz a jogada de ataque com 1 dádiva e pode utilizar Intelecto ao invés do atributo normal do ataque. Caso seja bem-sucedido, o alvo sofre 2d6 de dano adicional.",
                type: "AT",
                level: 1
            },
            "Ataque Retumbante": {
                id: "M3",
                description: "Como parte da conjuração desta magia, o personagem faz um ataque com uma arma. O conjurador faz a jogada de ataque com 1 dádiva e pode utilizar Intelecto ao invés do atributo normal do ataque. Caso seja bem-sucedido, o alvo sofre o dano normal e fica pasmo por 1 rodada.",
                type: "AT",
                level: 1
            },
            "Fechar Ferimentos": {
                id: "M4",
                description: "O conjurador cura uma quantidade de pontos de dano igual sua taxa de cura. <br><b>Desencadeado</b> O conjurador pode utilizar uma ação desencadeada em seu turno para conjurar essa magia. Caso faça isso, ele cura uma quantidade de pontos de dano igual à metade de sua taxa de cura.",
                type: "UT",
                level: 1
            },
            "Arco da Morte": {
                id: "M5",
                description: "O conjurador desliza sua arma de combate corpo a corpo ao redor de si em um arco mortal, causando 3d6+3 de dano a cada alvo ao invés do dano normal da arma. Cada alvo sofre metade do dano se bem-sucedido em uma jogada de desafio de Agilidade.",
                target: "Cada criatura escolhida ao alcance do conjurador",
                type: "AT",
                level: 2
            },
            "Deslizamento da Montanha": {
                id: "M6",
                description: "O conjurador voa até o dobro de seu Deslocamento, então aterrissa. Quando aterrissar, uma onda de choque se dispersa pelo chão em um raio de 4 metros de um ponto em seu espaço. Cada criatura no chão deve fazer uma jogada de desafio de Agilidade. Caso a criatura fracasse, ela sofre 2d6 pontos de dano e fica prostrada.",
                type: "AT",
                level: 2
            },
            "Aptidão para a Batalha": {
                id: "M7",
                description: "O conjurador amplia suas habilidades de batalha. Enquanto durar a magia, toda vez que atacar com uma arma, ele pode fazer a jogada de ataque duas vezes e utilizar o melhor resultado. Além disso, seus ataques com arma causam 1d6 de dano adicional até o fim do efeito.",
                duration: "1 minuto",
                type: "UT",
                level: 3
            },
            "Ataque Meteórico": {
                id: "M8",
                description: "O conjurador se move até o dobro de seu Deslocamento em uma linha reta. Durante este movimento, ele pode fazer um ataque com arma contra cada criatura ao seu alcance, mas não mais que uma vez por criatura. Para cada ataque depois do primeiro, o conjurador faz a jogada de ataque com 1 perdição e cada ataque causa 1d6 de dano adicional. O conjurador pode utilizar Intelecto ao invés do atributo normal do ataque.",
                type: "AT",
                level: 3
            },
            "Muralhas de Espadas": {
                id: "M9",
                description: "Uma muralha de lâminas cortantes se forma na área e permanece pela duração da magia. Ela cobre tudo atrás dela. Quando a muralha surge, tudo na área sofre 5d6 de dano. Caso seja bem-sucedida em uma jogada de desafio de Agilidade, a criatura sofre metade do dano. Criaturas podem se mover pela área, como se fosse por terreno difícil. Quando uma criatura entra na área de fora, ou caso esteja dentro da área no fim da rodada, ela deve obter um sucesso em uma jogada de desafio de agilidade ou sofrer 3d6 de dano.",
                area: "Uma linha com 20 metros de comprimento, 5 metros de altura e 2 metros de largura originada de um ponto a longa distância",
                duration: "1 hora",
                type: "AT",
                level: 4
            },
            "Atacar como o Relâmpago": {
                id: "M10",
                description: "O conjurador se move como um borrão, atingindo furiosamente conforme passa. Cada criatura escolhida na área deve fazer uma jogada de desafio de Agilidade com 1 perdição. Caso fracasse, ela sofre 4d6+3 de dano. Em seguida, o conjurador se move até metade de seu Deslocamento. Este movimento não desencadeia ataques livres.",
                area: "Uma esfera com raio igual à metade do Deslocamento do conjurador centrada em um ponto a seu alcance",
                type: "AT",
                level: 5
            }
        }
    },
    "Encantamento": {
        id: "i3",
        attribute: "intellect",
        darkMagic: false,
        spells: {
            "Enfeitiçar": {
                id: "M0",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra o Intelecto do alvo. Caso seja bem-sucedido, ele é movido até o máximo de seu próprio Deslocamento.",
                target: "Uma criatura que possa ver o conjurador a longa distância.",
                attackRoll20: "O conjurador também recupera a conjuração desta magia.",
                type: "AT",
                level: 0
            },
            "Presença": {
                id: "M1",
                description: "Enquanto durar a magia, criaturas que, comumente, são atraídas por membros da raça do conjurador fazem jogadas de ataque contra ele com 1 perdição.",
                duration: "1 minuto",
                type: "UT",
                level: 0
            },
            "Comandar": {
                id: "M2",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra a Vontade do alvo. Caso seja bem-sucedido, ele fica compelido por 1 rodada. Se o alvo estiver encantado, o conjurador faz a jogada de ataque com 1 dádiva.",
                target: "Uma criatura a curta distância que possa ouvir o conjurador.",
                attackRoll20: "O conjurador também recupera a conjuração desta magia.",
                type: "AT",
                level: 1
            },
            "Encantar": {
                id: "M3",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra a Vontade do alvo. Caso seja bem-sucedido, ele fica encantado por 1 hora ou até que sofra dano. Se o conjurador ou membros de seu grupo tiverem atacado o alvo sem completarem ainda um descanso depois disso, ele faz a jogada de ataque com 1 perdição.",
                target: "Uma criatura a curta distância que possa ver o conjurador.",
                attackRoll20: "O alvo fica encantado por 1d6 horas ou até que sofra dano.",
                type: "AT",
                level: 1
            },
            "Indagar": {
                id: "M4",
                description: "O conjurador faz uma pergunta e uma jogada de ataque de Intelecto contra a Vontade do alvo. Caso seja bem-sucedido, ele deve responder sinceramente e com o maior número de detalhes possível.",
                target: "Uma criatura a curta distância que possa ver, ouvir e entender o conjurador.",
                attackRoll20: "O alvo também fica assustado por 1 rodada.",
                type: "AT",
                level: 1
            },
            "Compelir": {
                id: "M5",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra a Vontade do alvo. Caso seja bem-sucedido, ele fica compelido por 1 minuto ou até que sofra dano. Se o conjurador ou membros de seu grupo tiverem atacado o alvo sem completarem ainda um descanso depois disso, ele faz a jogada de ataque com 1 perdição.",
                target: "Uma criatura a média distância que possa ver o conjurador.",
                attackRoll20: "O alvo fica compelido por 1 hora ou até que sofra dano.",
                type: "AT",
                level: 2
            },
            "Prender a Mente": {
                id: "M6",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra a Vontade do alvo. Caso seja bem-sucedido, ele fica pasmo por 1 minuto ou até que sofra dano. Enquanto estiver pasmo por este efeito, o conjurador faz jogadas de ataque com 1 dádiva para interagir socialmente com ele. Se o conjurador ou membros de seu grupo tiverem atacado o alvo sem completarem ainda um descanso depois disso, ele faz a jogada de ataque com 1 perdição.",
                target: "Uma criatura a média distância que possa ver e ouvir o conjurador.",
                attackRoll20: " O alvo também fica atordoado enquanto está pasmo devido a este efeito.",
                type: "AT",
                level: 2
            },
            "Acovardar": {
                id: "M7",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra a Vontade do alvo. Caso seja bem-sucedido, ele se torna imobilizado por 1 minuto; enquanto estiver imobilizado desta maneira, também fica assustado. Uma vez por rodada, quando o alvo sofrer dano, ele pode fazer uma jogada de desafio de Vontade, caso seja bem-sucedido, remove a sua aflição imobilizado.",
                target: "Uma criatura a média distância",
                attackRoll20: "O alvo também fica prostrado e não pode se levantar enquanto estiver imobilizado devido a este efeito.",
                type: "AT",
                level: 3
            },
            "Implantar Sugestão": {
                id: "M8",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra a Vontade do alvo. Caso seja bem-sucedido, ele fica atordoado enquanto durar a magia ou até que sofra dano. Caso o conjurador se concentre por um minuto completo, ele descreve um curso de ação que, obviamente, não pode ser suicida e que possa ser resumido em uma frase ou duas. Ele também descreve o que desencadeia aquela atividade, por exemplo: chegar a um destino específico ou ouvir uma palavra ou frase. Caso a atividade sugerida possa ser potencialmente nociva para o alvo, seus entes queridos ou sua propriedade, ele pode fazer uma jogada de desafio de Vontade; caso seja bem-sucedido, não é afetado. Caso contrário, ele deve realizar a atividade descrita, se o desencadeador ocorrer nas próximas 8 horas. Uma vez que o alvo completou a atividade, o efeito termina.",
                target: "Uma criatura a curta distância que possa ver e ouvir o conjurador.",
                duration: "Concentração, até 1 minuto; consulte o efeito",
                type: "AT",
                level: 3
            },
            "Fascinar": {
                id: "M9",
                description: "Cada alvo deve fazer uma jogada de desafio de Vontade com 1 perdição. Caso fracasse, o alvo se torna encantado até que o conjurador o ataque ou complete um descanso. Enquanto estiver encantado desta maneira, caso se mova e fique acima da curta distância do conjurador, ele fica debilitado.",
                target: "Qualquer quantidade de criaturas a curta distância.",
                type: "AT",
                level: 4
            },
            "Escravizar": {
                id: "M10",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra a Vontade do alvo. Se o conjurador ou membros de seu grupo tiverem atacado o alvo sem completarem ainda um descanso depois disso, ele faz a jogada de ataque com 1 perdição. Caso seja bem-sucedido, o alvo fica encantado. Ele não envelhece enquanto estiver encantado devido a este efeito. Ao sofrer dano, pode fazer uma jogada de desafio de Vontade e remover a aflição, caso seja bem-sucedido. Enquanto o conjurador está até a longa distância do alvo e ele está encantado devido a este efeito, o conjurador pode utilizar uma ação para fazer uma jogada de ataque de Intelecto contra a Vontade do alvo. Caso seja bem-sucedido, ele fica compelido por 1 minuto.",
                target: "Uma criatura a média distância.",
                attackRoll20: "Caso o total da jogada de ataque inicial tenha sido 20 ou mais e exceda o número alvo em 5 ou mais, o conjurador faz as jogadas de ataque de Vontade secundárias contra o alvo com 2 dádivas.",
                type: "AT",
                level: 5
            }
        }
    },
    "Ilusão": {
        id: "i4",
        attribute: "intellect",
        darkMagic: false,
        spells: {
            "Clamor": {
                id: "M0",
                description: "O ponto alvo emite sons a escolha do conjurador enquanto durar a magia. Estes sons podem ser ruídos ou uma fala em um idioma conhecido, o volume pode variar de um sussurro a tão alto quanto um trovão. Enquanto dura a magia, o conjurador pode mudar o som como quiser para imitar efeitos como golpes de espada, uma conversa, passos em aproximação ou em fuga.",
                target: "Um ponto no espaço a média distância",
                duration: "1 minuto",
                type: "UT",
                level: 0
            },
            "Disfarce": {
                id: "M1",
                description: "O conjurador toca o alvo e fornece um disfarce ilusório que dura até o fim do efeito. O conjurador decide como é esse disfarce. Ele pode aumentar ou diminuir a altura aparente do alvo ou seu peso em até 25 por centro. A aparência das roupas e os equipamentos podem ser alterados também, embora o efeito não mascare os sons que ele faz normalmente.",
                target: "Uma criatura ao alcance do conjurador.",
                duration: "1 hora",
                type: "UT",
                level: 0
            },
            "Duplicatas": {
                id: "M2",
                description: "Quatro duplicatas ilusórias surgem em espaços abertos ao alcance do conjurador. Enquanto durar a magia, cada duplicata de move com o conjurador, continuamente trocando de lugar de maneira que os observadores não consigam discernir qual é o verdadeiro conjurador. O movimento das duplicatas não desencadeia ataques livres. Quando uma criatura é bem-sucedida em uma jogada de ataque contra a Defesa, Força ou Agilidade do conjurador, joga-se um d20 para descobrir se o ataque atinge o conjurador ou uma das duplicatas. Caso atinja uma das duplicatas, o número de duplicatas é reduzido em 1. O efeito termina quando a última duplicata some.",
                duration: "1 hora; consulte o efeito",
                type: "UT",
                level: 1
            },
            "Vertigem": {
                id: "M3",
                description: "O alvo vê o ambiente girar ao seu redor. O conjurador faz uma jogada de ataque de Intelecto contra a Percepção do alvo. Caso seja bem-sucedido, ele é afetado por vertigem durante 1 minuto. Caso se mova mais de 2 metros em seu turno enquanto estiver afetado por este efeito, deve fazer uma jogada de desafio de Agilidade. Caso fracasse, fica prostrado no fim de seu turno.",
                target: "Uma criatura a curta distância.",
                attackRoll20: "Enquanto estiver afetado pela vertigem, o alvo também fica prostrado, potencialmente terminando seu turno, quando sofre dano.",
                type: "AT",
                level: 1
            },
            "Visão": {
                id: "M4",
                description: "Uma ilusão visual silenciosa de uma criatura, objeto ou força aparece na área. Caso crie a ilusão de uma criatura, ela se move e se comporta como se estivesse viva enquanto durar a magia. Caso a ilusão seja atacada, ou caso o conjurador não possa vê-la no fim da rodada, o efeito termina imediatamente.",
                area: "Um cubo com 2 metros de lado, originado de um ponto no campo de visão do conjurador a curta distância.",
                duration: "1 hora; consulte o efeito",
                type: "UT",
                level: 1
            },
            "Fantasia": {
                id: "M5",
                description: "Uma ilusão visual e auditiva de uma criatura, objeto ou força surge na área. Caso o conjurador não possa ver a ilusão no fim da rodada, o efeito termina imediatamente. Se o conjurador criou a ilusão de uma força perigosa, tal como fogo ou água fervente, as criaturas devem fazer uma jogada de desafio de Percepção quando se movem para esse espaço. Elas sofrem 2d6 de dano, caso fracassem. Se o conjurador criou a ilusão de uma criatura, ela se move e se comporta como se estivesse viva e utiliza o valor de Intelecto do conjurador para seus atributos, Defesa e Saúde. Ela ignora todas as aflições e desaparece quando se torna incapacitada, encerrando o efeito. Enquanto durar a magia, o conjurador pode utilizar uma ação para mover a ilusão até 10 metros e atacar uma criatura a 1 metro dela, desde que a criatura possa ver a ilusão e acredite que ela é real. O conjurador faz uma jogada de ataque de Intelecto contra a Percepção do alvo. Caso seja bem-sucedido, ele acredita que foi ferido, queimado ou prejudicado de alguma maneira pela ilusão e sofre 2d6 de dano.",
                area: "Um cubo com 2 metros de lado, originado em um ponto no campo de visão do conjurador a curta distância.",
                duration: "1 hora; consulte o efeito",
                type: "UT",
                level: 2
            },
            "Invisibilidade": {
                id: "M6",
                description: "O conjurador toca o alvo que se torna invisível enquanto durar a magia.",
                target: "Uma criatura ou objeto ao alcance do conjurador.",
                duration: "1 minuto",
                type: "UT",
                level: 2
            },
            "Engodo": {
                id: "M7",
                description: "<b>Desencadeada</b> O conjurador pode utilizar uma ação desencadeada para conjurar esta magia, quando uma criatura obtém um sucesso em uma jogada de ataque contra ele. O sucesso se torna um fracasso, e o conjurador se teleporta para um espaço aberto de sua escolha a curta distância.",
                type: "UT",
                level: 3
            },
            "Fantasma": {
                id: "M8",
                description: "Uma ilusão de uma criatura, objeto ou força que parece e soa como se fosse real surge dentro da área. Caso o conjurador não possa ver a ilusão no fim da rodada, o efeito termina imediatamente. Se o conjurador criou a ilusão de uma força perigosa, tal como fogo ou água fervente, as criaturas devem fazer uma jogada de desafio de Percepção quando se movem para esse espaço e sofrem 3d6 de dano, caso fracassem. Se o conjurador criou a ilusão de uma criatura, ela se move e se comporta como se estivesse viva e utiliza o valor de Intelecto do conjurador para seus atributos, Defesa e Saúde. Ela ignora todas as aflições e desaparece quando se torna incapacitada, encerrando o efeito. Enquanto durar a magia, o conjurador pode utilizar uma ação para mover a ilusão até 10 metros e atacar uma criatura a 1 metro dela que possa ver a ilusão e que acredite que ela é real. O conjurador faz uma jogada de ataque de Intelecto contra a Percepção do alvo. Caso seja bem-sucedido, ele acredita que foi ferido, queimado ou prejudicado de alguma maneira pela ilusão e sofre 4d6 de dano.",
                area: "Um cubo com 4 metros de lado, originado de um ponto no campo de visão do conjurador a longa distância.",
                duration: "1 hora; consulte o efeito",
                attackRoll20: "O alvo sofre 2d6 de dano adicional.",
                type: "UT",
                level: 3
            },
            "Miragem": {
                id: "M9",
                description: "Um terreno ilusório surge dentro da área e se mantém enquanto durar a magia. Ele parece completamente real a visão, olfato, audição e tato. O conjurador pode mudar a aparência do terreno real completamente ou incorporar suas características na ilusão. Ela pode esconder completamente qualquer característica do terreno real em sua área e seus efeitos visuais. Por exemplo, o conjurador poderia tornar uma chama invisível e esconder completamente a luz que emana, no entanto, a emissão de calor permaneceria e criaturas que entrassem em contato com ela receberiam dano. <br><b>Sacrifício</b> O conjurador pode gastar uma conjuração dessa magia para conjurar fantasma. <br><b>Permanência</b> Caso o conjurador conjure essa magia na mesma área todos os dias, por um mês e um dia, esse efeito se torna permanente.",
                area: "Um cilindro com 5 metros de altura e 10 metros de raio, centrado em um ponto a longa distância.",
                duration: "Até o conjurador completar um descanso",
                type: "UT",
                level: 4
            },
            "Cópia Adicional": {
                id: "M10",
                description: "Uma cópia ilusória do conjurador surge dentro de uma área. A cópia se parece, soa e é idêntica a ele. Ela utiliza os atributos e caraterísticas do conjurador. No entanto, ignora todas as aflições e desaparece quando se torna incapacitada, o que termina o efeito. Quando o conjurador se move, ele também pode mover a cópia até seu Deslocamento total em qualquer direção, da mesma forma que se move normalmente. Ele pode escolher conjurar magias de seu espaço ou do espaço que a cópia ocupa. Quando uma criatura obtém um sucesso em uma jogada de ataque contra o conjurador, ele pode utilizar uma ação desencadeada para trocar de posição instantaneamente com a cópia, fazendo com que a cópia seja alvo do ataque em seu lugar.",
                area: "Um cubo, grande o bastante para acomodar uma criatura do tamanho do Conjurador, originado em um ponto a curta distância.",
                duration: "1 hora; consulte o efeito",
                type: "UT",
                level: 5
            }
        }
    },
    "Invocação": {
        id: "i5",
        attribute: "intellect",
        darkMagic: false,
        spells: {
            "Invocação Direta": {
                id: "M0",
                description: "O conjurador move o alvo até metade de seu Deslocamento.",
                target: "Uma criatura a curta distância criada por sua conjuração de uma magia de Invocação",
                type: "UT",
                level: 0
            },
            "Invocar Item Útil": {
                id: "M1",
                description: "Um objeto de Tamanho 1 ou menor que não seja mágico nem custe mais de 1 xp aparece na área.",
                area: "Um objeto de Tamanho 1 ou menor que não seja mágico nem custe mais de 1 xp aparece na área.",
                duration: "1 minuto",
                type: "UT",
                level: 0
            },
            "Invocar Arma": {
                id: "M2",
                description: "Uma arma ou pacote de munição surge na mão ou mãos do conjurador, ou a seus pés caso não tenha mãos livres.",
                duration: "1 hora",
                type: "UT",
                level: 1
            },
            "Invocar Banquete": {
                id: "M3",
                description: "Um banquete suntuoso e completo surge nas superfícies horizontais na área, o bastante para sustentar até cinco criaturas por um dia. Qualquer coisa que não seja consumida some ao fim do efeito.",
                area: "Um cubo, com 2 metros de lado, originado de um ponto ao alcance do conjurador",
                duration: "1 hora; consulte o efeito",
                type: "UT",
                level: 1
            },
            "Invocar Monstro Pequeno": {
                id: "M4",
                description: "Um monstro pequeno compelido aparece na área.",
                area: "Um cubo, com 1 metro de lado, originado de um ponto a média distância em cima de uma superfície sólida",
                duration: "1 minuto",
                type: "UT",
                level: 1
            },
            "Invocar Monstro Médio": {
                id: "M5",
                description: "Um monstro médio ou dois pequenos compelidos surgem na área.",
                area: "Um cubo, com 2 metros de lado, originado de um ponto a média distância em cima de uma superfície sólida",
                duration: "1 minuto",
                type: "UT",
                level: 2
            },
            "Invocar Montaria": {
                id: "M6",
                description: "Um grupo de 1d6 montarias (cavalo) surgem na área. Eles podem ter qualquer aparência que o conjurador desejar. As montarias conjuradas são amigáveis a ele e se tornam compelidas por qualquer criatura que montar nelas. <br><b>Sacrifício</b> O conjurador pode gastar a conjuração desta magia para conjurar invocar monstro pequeno.",
                target: "Um cubo, com 10 metros de lado, originado de um ponto a média distância em cima de uma superfície sólida",
                duration: "2 horas",
                type: "UT",
                level: 2
            },
            "Invocar Monstro Grande": {
                id: "M7",
                description: "Um monstro grande ou dois médios compelidos surgem na área.",
                area: "Um cubo, com 2 metros de lado, originado de um ponto a média distância em cima de uma superfície sólida",
                duration: "1 minuto",
                type: "UT",
                level: 3
            },
            "Invocar Parede": {
                id: "M8",
                description: "Uma parede de pedra preenche a área e permanece até o fim do efeito ou até ser destruída. A parede cobre tudo atrás dela. Cada cubo de 1 metro de parede tem Defesa 5 e Saúde 50, desaparecendo caso seja destruído.",
                area: "Uma linha moldável com 10 metros de comprimento, 5 metros de altura e 2 metros de largura, originada de um ponto a longa distância em qualquer orientação, desde que, pelo menos, dois lados se apoiem em superfícies sólidas",
                duration: "1 hora; consulte o efeito",
                type: "UT",
                level: 3
            },
            "Invocar Abrigo": {
                id: "M9",
                description: "O conjurador deve se concentrar por 1 minuto, durante este tempo ele visualiza um prédio ou ilha. Ao fim deste período, o prédio ou ilha visualizado surge na área e se mantém até o fim da duração da magia. Caso um prédio seja invocado, o conjurador decide como ele se parece, tal como entradas, janelas e quantidade de quartos. Ele inclui camas para até 10 pessoas, cadeiras, mesas, comida e bebida o bastante para sustentar até 10 pessoas e uma lareira acesa. Caso invoque uma ilha, ela fornece acomodações para até 10 pessoas da mesma maneira que se tivesse criado o prédio, mas na forma de bangalôs e cabanas. <br><b>Sacrifício</b> O conjurador pode gastar a conjuração desta magia para conjurar invocar monstro grande.",
                area: "Um cubo, com 20 metros de lado, originado de um ponto a longa distância em uma superfície sólida ou líquida",
                duration: "12 horas; consulte o efeito",
                type: "UT",
                level: 4
            },
            "Invocar Monstro Imenso": {
                id: "M10",
                description: "Um monstro imenso ou dois grandes compelidos surgem na área.",
                area: "Um cubo, com 4 metros de lado, originado de um ponto a média distância em cima de uma superfície sólida",
                duration: "1 minuto",
                type: "UT",
                level: 5
            }
        }
    },
    "Maldição": {
        id: "i6",
        attribute: "intellect",
        darkMagic: true,
        spells: {
            "Esconjurar": {
                id: "M0",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra a Vontade do alvo. Caso seja bem-sucedido, ele fica amaldiçoado por 1 minuto ou até que sofra dano. Enquanto está amaldiçoado, o alvo fica debilitado e o conjurador faz jogadas de ataque contra ele com 1 dádiva.",
                target: "Uma criatura a curta distância que possa ver o conjurador",
                attackRoll20: "O alvo também fica pasmo por 1 rodada.",
                type: "AT",
                level: 0
            },
            "Varíola": {
                id: "M1",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra a Força do alvo. Caso seja bem-sucedido, bolhas verdes e purulentas surgem nele. O alvo sofre 1d3 de dano por doença e fica assustado por 1 rodada.",
                target: "Uma criatura viva a curta distância",
                attackRoll20: "O alvo fica assustado por 1 minuto.",
                type: "AT",
                level: 0
            },
            "Assustar": {
                id: "M2",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra a Vontade do alvo. Caso seja bem-sucedido, ele fica assustado por 1 minuto. Enquanto está assustado desta maneira, o alvo pode utilizar uma ação para fazer uma jogada de desafio de Vontade e remove a aflição se for bem-sucedido.",
                target: "Uma criatura a curta distância que possa ver o conjurador",
                attackRoll20: "Enquanto está assustado desta maneira, o alvo também fica debilitado.",
                type: "AT",
                level: 1
            },
            "Dor": {
                id: "M3",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra a Força do alvo. Caso seja bem-sucedido, por 1 minuto, toda vez que o alvo sofrer dano, ele sofre 1d6 de dano adicional.",
                target: "Uma criatura a curta distância",
                attackRoll20: "Além disso, por 1 minuto, toda vez que o alvo sofre dano, ele fica pasmo por 1 rodada.",
                type: "AT",
                level: 1
            },
            "Mancar": {
                id: "M4",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra a Força do alvo. Caso seja bem-sucedido, ele fica lento por 1 minuto.",
                target: "Uma criatura a curta distância",
                attackRoll20: "O alvo também fica prostrado e não pode se levantar enquanto estiver lento devido a este efeito.",
                type: "AT",
                level: 1
            },
            "Fraqueza": {
                id: "M5",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra a Força do alvo. Caso seja bem-sucedido, ele fica amaldiçoado por 1 minuto. Enquanto está amaldiçoado, o alvo sofre uma penalidade de -10 para Saúde e faz jogadas de ataque de Força e Agilidade com 1 perdição.",
                target: "Uma criatura a média distância",
                attackRoll20: "A maldição dura até que o conjurador morra ou até que seja retirada.",
                type: "AT",
                level: 2
            },
            "Vulnerabilidade": {
                id: "M6",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra a Força do alvo. Caso seja bem-sucedido, ele fica amaldiçoado por 1 minuto. Enquanto está amaldiçoado, jogadas de ataque contra o alvo são feitas com 1 dádiva e ele faz suas jogadas de desafio para resistir a ataques com 1 perdição.",
                target: "Uma criatura a média distância",
                attackRoll20: "A maldição dura até que o conjurador morra ou até que seja retirada.",
                type: "AT",
                level: 2
            },
            "Pavor": {
                id: "M7",
                description: "Uma onda de terror se dispersa pela área. Cada criatura dentro dela deve fazer uma jogada de desafio de Vontade, ficando assustada por 1 minuto, caso fracasse. Enquanto está assustada devido a este efeito, a criatura deve fazer um turno rápido toda rodada, utilizando uma ação para fugir do conjurador pelo caminho mais seguro. Ao fim de cada rodada, caso a criatura não tenha um caminho desobstruído até o conjurador e não possa vê-lo, ela pode fazer uma jogada de desafio de Vontade para remover esta aflição.",
                area: "Um cone, 10 metros de comprimento, originado em um ponto ao alcance do conjurador",
                type: "AT",
                level: 3
            },
            "Suíno": {
                id: "M8",
                description: "Cada alvo deve fazer uma jogada de desafio de Força. Caso fracasse, ele é transformado em um porco (um animal pequeno) até o fim da duração, junto com tudo que veste ou carrega. Enquanto está transformado devido a este efeito, o alvo fica assustado e deve fazer um turno rápido toda rodada, utilizando uma ação para fugir do conjurador pelo caminho mais seguro. O efeito termina imediatamente quando o alvo sofre dano.",
                target: "Até três criaturas vivas no campo de visão do conjurador a média distância",
                duration: "1 minuto; consulte o efeito",
                type: "AT",
                level: 3
            },
            "Sapo": {
                id: "M9",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra a Força do alvo com 3 dádivas, se o alvo tiver 40 de Saúde ou menos. Caso obtenha sucesso, ele é transformado em um sapo inofensivo (um animal minúsculo) e se mantém nessa forma enquanto o conjurador se concentrar, até 1 minuto. Caso a concentração não seja interrompida por toda sua duração, a maldição permanece até que o conjurador morra ou que utilize uma ação para removê-la. A maldição também termina, caso uma virgem beije o alvo por vontade própria.",
                target: "Uma criatura no campo de visão do conjurador a média distância",
                duration: "Concentração, até 1 minuto; consulte o efeito",
                attackRoll20: "Enquanto a criatura estiver a até média distância do conjurador, a maldição dura automaticamente até que ele morra ou que utilize uma ação para removê-la.",
                type: "AT",
                level: 4
            },
            "Petrificar": {
                id: "M10",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra a Força do alvo com 3 dádivas, se o alvo tiver 50 de Saúde ou menos. Caso seja bem-sucedido, ele sofre 7d6+ 10 de dano e fica lento por 1 minuto. Se o alvo ficar incapacitado por este dano, ele morre imediatamente e se torna uma estátua de pedra.",
                target: "Uma criatura a média distância que tenha corpo físico",
                attackRoll20: "O alvo sofre 3d6 de dano adicional.",
                type: "AT",
                level: 5
            }
        }
    },
    "Necromancia": {
        id: "i7",
        attribute: "intellect",
        darkMagic: true,
        spells: {
            "Esconder-se de Mortos Vivos": {
                id: "M0",
                description: "O conjurador se esconde de criaturas mortas-vivas enquanto durar a magia. Este efeito termina imediatamente, caso execute um ataque.",
                duration: "1 minuto",
                type: "UT",
                level: 0
            },
            "Punho Espectral": {
                id: "M1",
                description: "Uma mão sombria se lança contra o alvo. O conjurador faz uma jogada de Intelecto contra a Agilidade do alvo. Caso seja bem-sucedido, ele sofre 1d3 de dano e faz suas jogadas de ataque com 1 perdição durante 1 rodada.",
                target: "Uma criatura a média distância",
                attackRoll20: "O alvo sofre 1d6 de dano adicional.",
                type: "AT",
                level: 0
            },
            "Animar Cadáver": {
                id: "M2",
                description: "O conjurador toca o alvo. Caso ele se concentre e mantenha contato com o alvo por 1 minuto, o alvo se torna um cadáver animado compelido de seu Tamanho. <br><b>Sacrifício</b> O conjurador pode gastar uma conjuração desta magia para conjurar punho espectral.",
                target: "Um cadáver de Tamanho 1 ou 1/2 ao alcance do conjurador",
                type: "UT",
                level: 1
            },
            "Colher Alma": {
                id: "M3",
                description: "Uma bola de luz suave sai do alvo e voa em direção ao conjurador, orbitando o corpo dele enquanto durar a magia. Ele pode utilizar uma ação para terminar o efeito imediatamente e curar dano igual à sua taxa de cura. Até que o efeito termine, a criatura alvo não pode ser trazida de volta a vida por nenhum meio.",
                target: "Uma criatura morta a no máximo 1 rodada, a curta distância.",
                duration: "4 horas; consulte o efeito",
                type: "AT",
                level: 1
            },
            "Garras da Sepultura": {
                id: "M4",
                description: "Enquanto durar a magia, escuridão de dispersa pela área; garras de ossos e mãos apodrecidas saem do chão, que se torna terreno difícil. Cada criatura que estiver na área no momento da conjuração da magia ou no fim da rodada, deve fazer uma jogada de desafio de Agilidade. Caso fracasse, ela sofre 1d6 de dano e fica imobilizada enquanto durar a magia. Caso já estivesse imobilizada, ela sofre mais 1d6 de dano. A criatura pode utilizar uma ação para se libertar, removendo a aflição imobilizado.",
                area: "Um círculo no solo com 5 metros de raio, centrado em um ponto a curta distância.",
                duration: "1 minuto",
                type: "AT",
                level: 1
            },
            "Crânio Estridente": {
                id: "M5",
                description: "Um crânio humano surge no ar, centrado no ponto alvo. Ele tem a propriedade voador, Defesa 20 e Saúde 10. Quando o valor de dano sofrido por ele se torna igual à sua Saúde, o crânio se desfaz e o efeito termina imediatamente. Quando o personagem conjura esta magia, ele pode fazer com que o crânio voe até 10 metros e grite; ele também pode fazer isso utilizando uma ação ou ação desencadeada em seu turno enquanto durar a magia. O ruído se dispersa por uma esfera com raio 3 metros, centrada no crânio. Cada criatura na área que possa ouvir deve obter um sucesso em um teste de desafio de Força ou sofre 1d6+1 de dano.",
                target: "Um ponto no espaço ao alcance do conjurador",
                duration: "1 minuto; consulte o efeito",
                type: "AT",
                level: 2
            },
            "Lascar Ossos": {
                id: "M6",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra a Força do alvo. Caso seja bem-sucedido, ele sofre 3d6+5 de dano. Caso se torne incapacitado por este dano, ele morre instantaneamente e os ossos em seu corpo explodem em um cone de 3 metros de comprimento de um ponto em seu espaço. Tudo na área sofre 1d6 de dano, criaturas que tiverem sucesso uma jogada de desafio de Agilidade não sofrem dano.",
                target: "Uma criatura que tenha ossos em seu corpo, a média distância.",
                attackRoll20: "O alvo sofre 2d6 de dano adicional.",
                type: "AT",
                level: 2
            },
            "Canibalizar Magia": {
                id: "M7",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra a Força do alvo. Caso seja bem-sucedido, ele sofre 3d6 de dano e o conjurador recupera a conjuração de uma magia de nível 1 ou menor.",
                target: " Uma criatura a média distância.",
                attackRoll20: "O alvo sofre 2d6 de dano adicional e o conjurador recupera a conjuração de uma magia de nível 2 ou menor.",
                type: "AT",
                level: 3
            },
            "Fosso de Poder Sombrio": {
                id: "M8",
                description: "Um glifo surge no ponto de origem. Enquanto durar a magia, quando uma criatura na área sofrer dano, ela sofre 2d6 de dano adicional.",
                area: "Um círculo no solo com 5 metros de raio, centrado em um ponto a média distância.",
                duration: "1 minuto",
                type: "UT",
                level: 3
            },
            "Selar os Portões do Submundo": {
                id: "M9",
                description: "Tentáculos de energia necromântica se espalham pela área. Enquanto durar a magia, mortos-vivos na área fazem jogadas de ataque e de desafio com 1 dádiva e criaturas vivas, com exceção do conjurador, fazem jogadas de ataque e de desafio com 1 perdição. Além disso, criaturas vivas, de Tamanho 1 ou 1/2, que morrerem na área se tornam cadáveres animados compelidos.",
                area: "Uma esfera com 10 metros de raio, centrada em um ponto a média distância",
                duration: "1 minuto",
                type: "AT",
                level: 4
            },
            "Exército dos Mortos": {
                id: "M10",
                description: "A área se torna terreno difícil enquanto durar a magia. Ao fim da rodada na qual a magia foi conjurada, 2d6 cadáveres animados compelidos saem do chão e se levantam. Todos os cadáveres animados criados por essa magia contam como uma única criatura, para determinar quantas criaturas mortas-vivas compelidas o conjurador pode controlar. O efeito termina quando o último destes cadáveres é destruído.",
                area: "Um círculo no solo com 2 metros de raio, centrado em um ponto a média distância.",
                duration: "1 hora",
                type: "UT",
                level: 5
            }
        }
    },
    "Proibida": {
        id: "i8",
        attribute: "intellect",
        darkMagic: true,
        spells: {
            "Ferir": {
                id: "M0",
                description: "Farpas invisíveis rasgam o corpo do alvo. Faça uma jogada de ataque de Intelecto contra a Força da vítima. Caso seja bem-sucedido, o alvo sofre uma penalidade de -5 em Saúde durante 1 minuto.",
                target: "Uma criatura que consiga ver, a curta distância.",
                attackRoll20: "A penalidade à Saúde é -10 ao invés de -5.",
                type: "AT",
                level: 0
            },
            "Idioma Negro": {
                id: "M1",
                description: "Enquanto durar a magia, o conjurador faz jogadas de ataque de Vontade contra demônios, diabos, espíritos e mortos-vivos com 1 dádiva.",
                duration: "1 minuto",
                type: "UT",
                level: 0
            },
            "Defecação Odiosa": {
                id: "M2",
                description: "As entranhas do alvo se torcem e roncam alto. Se sua Saúde for 10 ou menos, ele morre instantaneamente, jatos de sangue e fezes espirram de todos os orifícios. Se sua Saúde for maior que 10, o conjurador faz uma jogada de ataque de Intelecto contra a Força do alvo. Caso seja bem-sucedido, ele sofre 1d6+2 de dano e fica pasmo por 1 rodada, conforme o conteúdo dos intestinos é expelido violentamente. Se for incapacitado pelo dano, excremento, órgãos e sangue explodem em seu corpo, matando-o instantaneamente. Cada criatura a até 2 metros do espaço do alvo deve fazer uma jogada de desafio de Vontade; caso fracasse, fica debilitada por 1 rodada.",
                target: "Uma criatura, com corpo físico, a média distância.",
                attackRoll20: "O alvo sofre 1d6 de dano adicional.",
                type: "AT",
                level: 1
            },
            "Obediência": {
                id: "M3",
                description: "O conjurador fisga a alma do alvo. O conjurador faz uma jogada de ataque de Intelecto contra a Vontade do alvo. Caso seja bem-sucedido, durante o próximo minuto, ele deve escolher ao fim de cada turno, entre: sofrer 1d6 de dano ou ficar compelido por 1 rodada.",
                target: "Uma criatura viva a curta distância.",
                type: "AT",
                level: 1
            },
            "Rasgar Língua": {
                id: "M4",
                description: "O conjurador cospe no alvo. Ele faz uma jogada de ataque de Intelecto contra a Vontade do alvo. Caso seja bem-sucedido, sua língua se bifurca e o conjurador toma o controle da boca do alvo enquanto se concentrar, até 1 hora. Enquanto o efeito estiver ativo, toda vez que o conjurador fala, ele pode escolher usar sua própria boca ou a do alvo, contanto que esteja a até 1,6 km dele. Não há alteração na voz do alvo quando o conjurador fala utilizando sua boca.",
                target: "Uma criatura capaz de falar a curta distância.",
                attackRoll20: "O efeito dura por até 1 hora sem concentração.",
                type: "AT",
                level: 1
            },
            "O Fim da Visão": {
                id: "M5",
                description: "Os olhos do alvo incham e se espremem dentro da cabeça. Se sua Saúde for 15 ou menos, ele sofre 1d6 de dano e fica cego conforme seus olhos explodem. Se sua Saúde for 15 ou mais, o conjurador faz uma jogada de ataque de Intelecto contra a Força do alvo; este ataque é feito com 1 perdição, se sua Saúde for 30 ou mais. Caso seja bem-sucedido, ele fica cego enquanto o conjurador se concentrar, até 1 minuto. Ao fim de cada rodada, até o fim do efeito, o alvo deve fazer uma jogada de desafio de Força e sofre 1d6 de dano, caso fracasse. Se obtiver três fracassos antes do fim do efeito, a aflição cego se torna permanente — os olhos explodem, escorrendo pelo seu rosto.",
                target: "Uma criatura dentro do campo de visão a curta distância",
                attackRoll20: "O efeito dura por até 1 minuto sem concentração.",
                type: "AT",
                level: 2
            },
            "Vermes Vorazes": {
                id: "M6",
                description: "Vermes famintos preenchem a barriga do alvo, causando 2d6 de dano. Ao fim de cada rodada de duração, ele deve fazer uma jogada de desafio de Força. Caso fracasse, sofre 1d6 de dano e fica debilitado por 1 rodada. Caso seja bem-sucedido, não há efeito; no terceiro sucesso, o alvo vomita um emaranhado de vermes contorcidos e o efeito termina. Se ficar incapacitado devido ao dano da magia, ele morre instantaneamente e uma nuvem de moscas negras se dispersa em uma área de 5 metros de raio, a partir de um ponto dentro do espaço do alvo. As moscas obscurecem severamente a área e permanecem por 1 minuto ou até serem dispersas por fogo ou vento.",
                target: "Uma criatura viva a média distância.",
                duration: "1 minuto",
                type: "AT",
                level: 2
            },
            "O Fim do Desejo": {
                id: "M7",
                description: "O alvo sofre de uma dor interna aguda. O conjurador faz uma jogada de ataque de Intelecto contra a Força do alvo. Caso seja bem-sucedido, ele sofre 3d6 de dano e fica pasmo por 1d6 rodada, conforme os tristes restos de seus órgãos reprodutores caem de seu corpo.",
                target: "Uma criatura viva a curta distância.",
                attackRoll20: "O alvo sofre 3d6 de dano adicional e fica prostrado; ele não pode se levantar enquanto estiver pasmo devido a este efeito.",
                type: "AT",
                level: 3
            },
            "Separar Ossos da Carne": {
                id: "M8",
                description: "Os ossos do alvo se contorcem sob sua pele. O conjurador faz uma jogada de ataque de Intelecto contra a Força do alvo. Caso seja bem-sucedido, ele sofre 6d6 de dano. Caso fique incapacitado por esse dano, morre instantaneamente; seus ossos saem da carne e se tornam um cadáver animado do Tamanho do alvo, ocupando seu espaço anterior. O cadáver animado ataca a criatura mais próxima a cada rodada, escolhendo o alvo aleatoriamente, caso haja mais de um.",
                target: "Uma criatura que tenha ossos em seu corpo a média distância.",
                attackRoll20: "O alvo sofre 2d6 de dano adicional.",
                type: "AT",
                level: 3
            },
            "Trocar Almas": {
                id: "M9",
                description: "O conjurador agarra a alma dos alvos e faz uma jogada de ataque de Intelecto contra a Vontade do alvo. Caso seja bem-sucedido, ele fica pasmo por 1 minuto.<br><b>Especial</b> Caso o conjurador seja bem-sucedido contra ambos os alvos, suas almas trocam permanentemente de corpo. Cada alvo recebe 1d6 de Insanidade. Cada alma leva para o novo corpo as características a seguir, com exceção das apresentadas, ele utiliza os atributos do novo corpo, suas características e habilidades: <br>• Todos os idiomas e profissões <br>• Valores de Intelecto e Vontade (refazer cálculo da percepção, se necessário) <br>• Valores de Insanidade e Corrupção <br>• Todos os talentos <br>• Todas as tradições que descobriu e magias que conhece",
                target: "Duas criaturas vivas mortais a média distância.",
                attackRoll20: "O alvo também fica atordoado enquanto está pasmo por este efeito.",
                type: "AT",
                level: 4
            },
            "União Horrenda": {
                id: "M10",
                description: "A forma dos alvos fica indistinta por um momento. O conjurador faz uma jogada de ataque de Intelecto contra a Força de cada alvo. Caso seja bem-sucedido, ele sofre 3d6 de dano e fica debilitado por 1 rodada. <br><b>Especial</b> Caso o conjurador seja bem-sucedido contra ambos os alvos, seus corpos se fundem permanentemente em uma única criatura, que fica debilitada até que complete um descanso. A aparência da criatura fundida fica a critério do conjurador. A criatura fundida combina os atributos, características e outras habilidades dos alvos, da seguinte maneira: <br>• Ela tem o valor mais alto de Força dos alvos e o mais baixo de Agilidade. Cada alvo mantém seu próprio Intelecto e Vontade. <br>• Ela ganha 2d6 de Insanidade, substituindo o valor atual de Insanidade dos alvos (caso tivessem). A Corrupção dos alvos, caso exista, é somada. <br>• Os alvos ocupam o mesmo espaço, adicionando seus Tamanhos. Some o mais alto dos valores de Saúde dentre os alvos com metade da Saúde mais baixa. O Deslocamento da criatura fundida se torna 6. <br>• A criatura fundida tem as propriedades e talentos de ambos os alvos e ganha a propriedade horripilante, caso não tenha. <br>• Embora compartilhem um corpo, cada alvo faz um turno a cada rodada. Um deve fazer um turno rápido e o outro um turno lento; caso não consigam decidir, cada um joga um d6 e aquele que obtiver o resultado maior decide.",
                target: "Duas criaturas no campo de visão do conjurador a curta distância uma da outra e a média distância do conjurador.",
                attackRoll20: " O alvo sofre 3d6 de dano adicional.",
                type: "AT",
                level: 5
            }
        }
    },
    "Proteção": {
        id: "i9",
        attribute: "intellect",
        darkMagic: false,
        spells: {
            "Proteger Local": {
                id: "M0",
                description: "Um campo invisível surge junto a circunferência da área. Enquanto durar a magia, o conjurador sabe se uma criatura de Tamanho 1/2 ou maior se moveu para dentro ou para fora dela. Esta informação o acorda, caso esteja dormindo.",
                area: "Uma esfera com 10 metros de raio, centrada em um ponto ao alcance do conjurador.",
                duration: "6 horas",
                type: "UT",
                level: 0
            },
            "Tranca Mágica": {
                id: "M1",
                description: "O alvo se fecha e é trancado. Enquanto durar a magia, ele não pode ser aberto por meios não mágicos por outra criatura que não seja o conjurador, mas pode ser destruído.",
                target: "Um objeto a curta distância que possa ser aberto ou fechado, tal como uma porta, baú ou janela.",
                duration: "1 minuto",
                type: "UT",
                level: 0
            },
            "Campo de Força": {
                id: "M2",
                description: "Um campo de força invisível envolve o conjurador e se move com ele. O campo tem Saúde 10. Enquanto durar a magia, a qualquer momento que o conjurador sofrer dano, ao invés dele, o campo sofre o dano. Caso o dano total no campo seja igual à sua Saúde, o efeito termina imediatamente.",
                duration: "1 minuto; consulte o efeito.",
                type: "UT",
                level: 1
            },
            "Evasão": {
                id: "M3",
                description: "O conjurador se move até quatro vezes seu Deslocamento, sem desencadear ataques livres. <br><b>Desencadeada</b> O conjurador pode utilizar uma ação desencadeada para conjurar esta magia quando sofrer dano. Caso faça isso, o conjurador se move até o dobro de seu Deslocamento sem desencadear ataques livres.",
                type: "UT",
                level: 1
            },
            "Santuário": {
                id: "M4",
                description: "O conjurador toca o alvo, fazendo com que ele fique escondido de todas as criaturas enquanto durar a magia. Este efeito termina imediatamente, caso o alvo execute um ataque.",
                target: "Uma criatura ao alcance do conjurador",
                duration: "1 minuto; consulte o efeito",
                type: "UT",
                level: 1
            },
            "Vigilância": {
                id: "M5",
                description: "O conjurador toca o alvo, fornecendo uma ampliação em prontidão e consciência dos arredores. Enquanto durar a magia, o alvo faz suas jogadas de desafio de Percepção com 1 dádiva e não pode ser encantado, compelido, assustado, surpreso ou adormecido por magia.",
                target: "Uma criatura ao alcance do conjurador",
                duration: "4 horas",
                type: "UT",
                level: 2
            },
            "Vigor": {
                id: "M6",
                description: "O conjurador toca o alvo, fornecendo a ele um bônus de +10 para Saúde enquanto durar a magia.",
                target: "Uma criatura ao alcance do conjurador.",
                duration: "1 hora",
                type: "UT",
                level: 2
            },
            "Campo de Proteção": {
                id: "M7",
                description: "Uma barreira invisível e imóvel surge junto a circunferência da área e permanece enquanto durar a magia. Quando o personagem conjura a magia, ele designa uma quantidade de criaturas a média distância dele. Apenas elas podem se mover livremente e fazer ataques através da barreira. Nenhuma outra criatura pode se mover através da barreira, nem fazer ataques com armas de combate corpo a corpo contra alvos do outro lado.",
                area: "Uma esfera com 3 metros de raio, centrada em um ponto ao alcance do conjurador.",
                duration: "1 minuto",
                type: "UT",
                level: 3
            },
            "Proteção Contra Magias": {
                id: "M8",
                description: "O conjurador toca o alvo e fornece proteção contra magias enquanto durar o efeito. As criaturas que realizarem ataques desse tipo, o fazem com 1 perdição. Além disso, o alvo tem 1 dádiva para resistir nas jogadas de desafio",
                target: "Uma criatura ao alcance do conjurador.",
                duration: "1 hora",
                type: "UT",
                level: 3
            },
            "Invulnerabilidade": {
                id: "M9",
                description: "O conjurador toca o alvo, tornando-o imune a todo dano enquanto durar a magia.",
                target: "Uma criatura ao alcance do conjurador.",
                duration: "Concentração, até 1 minuto",
                type: "UT",
                level: 4
            },
            "Globo de Negação": {
                id: "M10",
                description: "Uma barreira invisível e imóvel surge junto a circunferência da área e permanece enquanto durar a magia. Jogadas de ataque com magia de nível 5 ou menor, contra alvos atrás da barreira, fracassam automaticamente. Da mesma maneira, a área dentro da barreira está excluída da área de qualquer magia de nível 5 ou menor. Por fim, magias conjuradas de dentro da barreira não podem ter um ponto de origem além da borda da barreira.",
                area: " Uma esfera com 5 metros de raio, centrada em um ponto ao alcance do conjurador.",
                duration: "1 minuto",
                type: "UT",
                level: 5
            }
        }
    },
    "Runas": {
        id: "i10",
        attribute: "intellect",
        darkMagic: false,
        spells: {
            "Runa do Encontro": {
                id: "M0",
                description: "O conjurador toca o alvo e deixa um símbolo nele. Enquanto durar a magia, o conjurador sempre sabe o local exato da criatura marcada.",
                target: " Uma criatura ou objeto ao alcance do conjurador",
                duration: "1 hora",
                type: "UT",
                level: 0
            },
            "Traduzir Tudo": {
                id: "M1",
                description: "Enquanto durar a magia, o conjurador pode ler qualquer escrita que encontrar.",
                duration: "1 minuto",
                type: "UT",
                level: 0
            },
            "Escudo Rúnico": {
                id: "M2",
                description: "O conjurador escreve uma runa no alvo que se mantém pela duração da magia. As criaturas que fizerem ataques com armas contra o portador da runa fazem suas jogadas de ataque com 1 perdição.",
                target: "Um escudo ao alcance do conjurador",
                duration: "1 minuto",
                type: "UT",
                level: 1
            },
            "Grifo de Fogo": {
                id: "M3",
                description: "Um glifo ardente aparece sobre o alvo enquanto durar a magia. Quando conjura a magia, e ao fim de cada rodada de duração, o glifo libera chamas que se espalham por uma esfera de 2 metros, centrada em um ponto no espaço do alvo, causando 1d6+2 de dano a tudo na área. Cada criatura na área deve fazer uma jogada de desafio de Agilidade com 1 perdição, caso obtenham sucesso, não sofrem dano.",
                target: "Um ponto no espaço a curta distância.",
                duration: "1 minuto",
                type: "AT",
                level: 1
            },
            "Marca da Ruína": {
                id: "M4",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra a Agilidade do alvo. Caso seja bem-sucedido, ele prende uma runa ao alvo por 1 minuto. Uma vez por rodada, enquanto durar a magia, quando o alvo sofrer dano, ele sofre 1d6 de dano adicional da runa.",
                target: "Uma criatura a curta distância.",
                type: "AT",
                level: 1
            },
            "Prisão Glífica": {
                id: "M5",
                description: "Um anel de glifos ardentes envolve o alvo e se mantém no lugar enquanto durar a magia. Caso abandone o espaço ou passe pelas runas, ele deve fazer uma jogada de desafio de Força com 1 perdição. Caso fracasse, ele sofre 6d6 de dano; ou metade do dano, caso seja bem-sucedido.",
                target: "Uma criatura no campo de visão do conjurador a curta distância",
                duration: "1 minuto",
                type: "AT",
                level: 2
            },
            "Runa da Ocultação": {
                id: "M6",
                description: "O conjurador toca o alvo e uma runa aparece sobre ele. Enquanto durar a magia, o alvo não pode ser percebido por magia, e caso esteja em uma área obscurecida no fim da rodada, ele automaticamente está escondido até que utilize uma ação para se mover.",
                target: "Uma criatura ao alcance do conjurador.",
                duration: "1 minuto",
                type: "UT",
                level: 2
            },
            "Armadilha Selo": {
                id: "M7",
                description: "Uma runa surge no ponto de origem e permanece até o fim da magia. Quando uma criatura se mover para dentro ou para fora da área, e ao fim de cada rodada enquanto durar o efeito, raios crepitantes se espalham a partir da runa, causando 2d6 de dano a tudo na área. Cada criatura na área deve fazer uma jogada de desafio de Agilidade. Ela se torna imóvel por 1 rodada, caso fracasse, ou sofre metade do dano, caso seja bem-sucedida.",
                target: "Um círculo com 4 metros de raio, centrado em um ponto no solo a média distância",
                duration: "1 minuto",
                type: "UT",
                level: 3
            },
            "Runa da Força": {
                id: "M8",
                description: "Uma runa brilhante surge no alvo onde o conjurador o tocou. Enquanto durar a magia, ele faz jogadas de ataque e de desafio de Força com 2 dádivas, seus ataques com armas de combate corpo a corpo passam a causar 2d6 de dano adicional.",
                target: "Uma criatura ao alcance do conjurador.",
                duration: "1 minuto",
                type: "UT",
                level: 3
            },
            "Arma Rúnica": {
                id: "M9",
                description: "O conjurador escreve uma runa brilhante na arma alvo. Enquanto durar a magia, ataques utilizando aquela arma causam 3d6 de dano adicional.",
                target: "Uma arma ao alcance do conjurador.",
                duration: "1 minuto",
                type: "UT",
                level: 4
            },
            "Runa do Poder": {
                id: "M10",
                description: "Uma runa brilhante surge no alvo onde o conjurador o tocou. Enquanto durar a magia, o alvo faz jogadas de ataque e de desafio com 2 dádivas, recebe um bônus de +20 para Saúde e causa 1d6 de dano adicional com qualquer ataque que cause dano.",
                target: "Uma criatura ao alcance do conjurador",
                duration: "1 minuto",
                type: "UT",
                level: 5
            }
        }
    },
    "Sombras": {
        id: "i11",
        attribute: "intellect",
        darkMagic: false,
        spells: {
            "Lâmina do Crepúsculo": {
                id: "M0",
                description: "Feixes de escuridão criam uma lâmina sólida na mão do conjurador que dura até que o efeito acabe ou a lâmina saia de sua mão. Ela funciona como uma arma rápida de mão inábil, com a propriedade sutileza e causa 1d6 de dano. Ela causa 1d6 de dano adicional, quando o conjurador é bem-sucedido em uma jogada de ataque contra um alvo escondido por sombras ou escuridão.",
                duration: "1 minuto; consulte o efeito",
                type: "UT",
                level: 0
            },
            "Muralha da Escuridão": {
                id: "M1",
                description: "A área se torna opaca enquanto durar o efeito e obscurece completamente tudo dentro e atrás dela, bloqueando toda luz criada por fontes naturais.",
                area: "Um círculo com 2 metros de raio, com qualquer orientação, centrado em um ponto a média distância",
                duration: "1 minuto",
                type: "UT",
                level: 0
            },
            "Dardo de Sombra": {
                id: "M2",
                description: "Um míssil de escuridão profunda salta da mão do personagem. O conjurador faz uma jogada de ataque de Intelecto contra a Agilidade do alvo. Caso seja bem-sucedido, ele sofre 2d6 de dano e faz suas jogadas de desafio de Percepção com 3 perdições por 1 minuto.",
                target: "Uma criatura a média distância.",
                type: "AT",
                level: 1
            },
            "Escuridão": {
                id: "M3",
                description: "Uma escuridão profunda preenche a área, obscurecendo completamente o espaço enquanto durar a magia. A escuridão cancela toda luz de fontes naturais e as criadas por magias de nível 0, além de bloquear toda visão não mágica, com exceção de visão da verdade. Caso o personagem conjure esta magia em um objeto que tenha tocado, a área de escuridão se move com ele. Se o objeto for completamente coberto, o efeito da magia é suprimido até que ele esteja livre novamente.",
                area: "Uma esfera com 5 metros de raio, centrada em um ponto a curta distância.",
                duration: "1 minuto",
                type: "UT",
                level: 1
            },
            "Visão no Escuro": {
                id: "M4",
                description: "O conjurador toca o alvo, que recebe visão no escuro enquanto durar a magia.",
                target: "Uma criatura ao alcance de toque.",
                duration: "1 hora",
                type: "UT",
                level: 1
            },
            "Caminhar nas Sombras": {
                id: "M5",
                description: "Enquanto durar a magia, quando o conjurador entra em um espaço obscurecido por sombras ou escuridão, ele pode sair instantaneamente em um local aberto nas mesmas condições a média distância daquele que entrou. Ele pode se mover desta maneira uma vez por rodada.",
                duration: "1 minuto",
                type: "UT",
                level: 2
            },
            "Monstro das Sombras": {
                id: "M6",
                description: "Filamentos de escuridão se reúnem em uma área para formar um monstro médio compelido com a propriedade voador. O monstro das sombras pode ter qualquer aparência que escolher. Caso ele fique incapacitado, o efeito termina.",
                area: "Um cubo, 1 metro de lado, originado de um ponto a média distância.",
                duration: "1 minuto",
                type: "UT",
                level: 2
            },
            "Raios Negros do Submundo": {
                id: "M7",
                description: "Três mísseis de escuridão saltam da mão do conjurador, que pode dividi-los como quiser entre os alvos. Para cada míssil, será realizada uma jogada de ataque de Intelecto contra a Agilidade do alvo. Caso obtenha sucesso, ele sofre 2d6 de dano e se move 1d6 metros para longe do conjurador",
                target: "Até três criaturas a média distância.",
                attackRoll20: "O alvo sofre 1d6 de dano adicional.",
                type: "AT",
                level: 3
            },
            "Magia das Sombras": {
                id: "M8",
                description: "O conjurador escolhe uma magia de nível 2 ou menor de uma tradição que não seja Sombra. Ele conjura a magia sem gastar a conjuração, mesmo que não tenha mais conjurações daquela magia sobrando.",
                type: "UT",
                level: 3
            },
            "Portais Sombrios": {
                id: "M9",
                description: "A escuridão preenche cada cubo, obscurecendo completamente seu espaço e bloqueando toda visão não mágica, com exceção de visão da verdade. Atribua um número de 1 a 6 a cada cubo. Quando uma criatura entra em um dos cubos, ela deve fazer uma jogada de desafio de Intelecto para escolher em qual cubo sairá. Caso seja bem-sucedida, ela instantaneamente sai no espaço aberto do cubo escolhido. Caso fracasse, a criatura joga um d6 para determinar o cubo do qual sai. Em ambos os casos, ela decide por qual direção sair do cubo.",
                area: "Seis cubos de 1 metro de lado a longa distância.",
                duration: "1 minuto",
                type: "UT",
                level: 4
            },
            "Enervação": {
                id: "M10",
                description: "Um raio negro salta da palma da mão do conjurador, que faz uma jogada de ataque de Intelecto contra a Agilidade do alvo. Caso seja bem-sucedido, ele sofre uma penalidade de -20 em sua Saúde por 1 hora. Quando essa penalidade se aplica, o alvo também fica debilitado.",
                target: "Uma criatura viva a longa distância.",
                attackRoll20: "A penalidade se torna -30.",
                type: "AT",
                level: 5
            }
        }
    },
    "Tecnomancia": {
        id: "i12",
        attribute: "intellect",
        darkMagic: false,
        spells: {
            "Fazer Gambiarra": {
                id: "M0",
                description: "O conjurador toca o alvo, removendo 1d6 de dano dele.",
                target: "Um objeto de Tamanho 2 ou menos que tenha sofrido 1 ou mais dano, mas que não esteja destruído, ao alcance do conjurador.",
                type: "UT",
                level: 0
            },
            "Ferramenta Mágica": {
                id: "M1",
                description: "O conjurador cria e ataca com uma chave inglesa. Ele faz uma jogada de ataque de Intelecto contra a Defesa do alvo. Caso seja bem-sucedido, o alvo sofre 1d6+1 de dano e fica prostrado.",
                target: "Uma criatura ou objeto a curta distância.",
                attackRoll20: "O alvo também fica debilitado até o fim da rodada.",
                type: "AT",
                level: 0
            },
            "Atiradeira de Virotes": {
                id: "M2",
                description: "O conjurador cria uma torre de besta de Tamanho 1 na área. A torre tem Defesa 5 e Saúde igual ao valor do Intelecto do conjurador. Ela existe enquanto durar a magia ou até ser destruída. Ao fim de cada rodada, a torre atira em uma criatura alvo ou objeto a longa distância. O conjurador faz uma jogada de ataque de Intelecto contra a Defesa do alvo. Caso seja bem-sucedido, o alvo sofre 2d6 de dano.",
                area: "Um cubo de espaço, com 1 metro de lado, originado em ponto ao alcance do conjurador sob uma superfície sólida.",
                duration: "1 minuto",
                attackRoll20: "O alvo sofre 1d6 de dano adicional.",
                type: "AT",
                level: 1
            },
            "Escudo Eletrizante": {
                id: "M3",
                description: "O conjurador cria um escudo em seu braço que se mantém até o fim da magia. Uma vez por rodada, quando uma criatura o ataca com uma arma de combate corpo a corpo e obtém um sucesso, o escudo brilha e a criatura atacante deve fazer uma jogada de desafio de Agilidade. Caso fracasse, ela sofre 1d6 de dano e é movida 1d3 metros para longe do conjurador, ficando prostrada ao fim deste movimento.",
                duration: "1 minuto",
                type: "UT",
                level: 1
            },
            "Estrepes": {
                id: "M4",
                description: "Pequenos pedaços de metal afiado emergem do ponto de origem, cobrindo todas as superfícies horizontais na área enquanto durar o efeito. Criaturas que entram ou se movem na área precisam ser bem-sucedidas em uma jogada de desafio de Agilidade ou sofrem 1d6+1 de dano e ficam lentas. Caso a criatura já tenha ficado lenta por esse efeito, ela fica prostrada e imobilizada. A criatura remove a aflição lenta e imobilizada quando cura o dano.",
                area: "Um círculo no solo com 5 metros de raio, centrado em um ponto a média distância.",
                duration: "1 minuto",
                type: "UT",
                level: 1
            },
            "Granadas": {
                id: "M5",
                description: "O conjurador arremessa três granadas, dividindo-as como quiser entre os alvos. Quando uma granada atinge o alvo, ou encontra uma criatura ou objeto sólido antes disso, ela explode. A explosão causa 1d6+1 de dano por fogo em tudo numa esfera de 1 metro de raio centrada no alvo ou em um ponto no espaço da criatura ou do objeto. Cada criatura na área que obtiver sucesso em uma jogada de desafio de Agilidade sofre metade do dano.",
                target: "Até três pontos a curta distância.",
                type: "AT",
                level: 2
            },
            "Lança-Chamas": {
                id: "M6",
                description: "O conjurador cria um lança-chamas, a arma contém 6 cargas. Ela surge em suas mãos ou aos pés dele, caso não esteja com as mãos livres. Quando seu último uso é gasto, o lança-chamas se desmonta em peças avulsas. Uma criatura empunhando o lança-chamas pode utilizar uma ação para gastar uma carga, que lança uma chama com uma linha de 5 metros de comprimento e 1 metro de largura, de um ponto ao alcance dela. As chamas causam 2d6 de dano a tudo na área; cada criatura que obtiver sucesso em uma jogada de desafio de Agilidade, sofre metade do dano. O lança-chamas explode quando a criatura que o empunha sofre dano por eletricidade ou fogo. Chamas preenchem uma esfera de 5 metros de raio, originadas de um ponto no espaço da criatura, causando 1d6 de dano por carga que não tenha sido usada. Cada criatura na área que obtiver sucesso em uma jogada de desafio de Agilidade sofre metade do dano.",
                duration: "Consulte o efeito",
                type: "UT",
                level: 2
            },
            "Bolas de Detonação": {
                id: "M15",
                description: "Você joga bolas de metal no chão, deixando elas livres para rolarem até o alvo. Faça uma jogada de ataque de intelecto com 1 dádiva contra a agilidade do alvo. Se for bem-sucedido, as bolas rolam para cobrir o corpo ou a superfície do alvo e ficam lá por 1 rodada. Enquanto coberto por bolas, o alvo fica desabilitado e lento. Quando o efeito acaba, as bolas explodem, dando 3d6 de dano ao alvo e tudo dentro de 1 metro dele. Uma criatura na área pode fazer um teste de desafio de agilidade e tomar somente metade do dano em um sucesso.",
                target: "Uma criatura ou objecto no chão dentro de alcance curto",
                attackRoll20: "O alvo toma 1d6 de dano adicional.",
                type: "AT",
                level: 2
            },
            "Lâminas Voadoras": {
                id: "M7",
                description: "Cinco lâminas voam da mão do conjurador, divididas como quiser entre os alvos. Para cada lâmina, ele faz uma jogada de ataque de Intelecto contra a Agilidade do alvo. Caso seja bem-sucedido, o alvo sofre 2d6 de dano.",
                target: "Até três criaturas ou objetos a média distância",
                attackRoll20: "O alvo sofre 1d6 de dano adicional.",
                type: "AT",
                level: 3
            },
            "Consertar": {
                id: "M8",
                description: "O conjurador toca o alvo, removendo todo de dano dele.",
                target: "Um objeto de Tamanho 3 ou menor que tenha sofrido 1 ou mais dano, mas que não esteja destruído, ao alcance do conjurador.",
                type: "UT",
                level: 3
            },
            "Armadura Energizada": {
                id: "M9",
                description: "O conjurador se concentra por 1 hora, durante este período ele constrói uma armadura de batalha energizada, um construto enorme na área. O construto se mantém enquanto durar a magia ou até que esteja incapacitado. Ele não pode utilizar ações ou se mover independentemente, o conjurador deve entrar na cabine para controlá-lo. Enquanto estiver dentro dele, o conjurador trata a Defesa e Saúde do construto com se fossem suas, se move com o Deslocamento do construto e pode utilizar as opções de ataque e ações dele no lugar das suas.",
                area: "Um cubo com 3 metros de lado, originado de um ponto ao alcance do conjurador",
                duration: "Até que o conjurador complete um descanso; consulte o efeito",
                type: "UT",
                level: 4
            },
            "Item Mágico": {
                id: "M10",
                description: "O conjurador toca o alvo e o imbui de poder mágico. Enquanto durar a magia, jogadas de ataque e desafio para qualquer tarefa feita utilizando o alvo são realizadas com 1 dádiva. Se o objeto é uma arma, seus ataques causam 1d6 de dano adicional. Caso seja uma armadura, o usuário ganha um bônus de +1 para sua Defesa. <br><b>Permanência</b> Se o conjurador gastar ingredientes raros no custo de 1 co quando conjurar esta magia, o efeito dura até que complete um descanso. Caso conjure esta magia da mesma maneira no mesmo alvo a cada dia por um mês, uma semana e um dia, o efeito se torna permanente.",
                target: "Um objeto ao alcance do conjurador",
                duration: "1 hora",
                type: "UT",
                level: 5
            }
        }
    },
    "Teleporte": {
        id: "i13",
        attribute: "intellect",
        darkMagic: false,
        spells: {
            "Buscar": {
                id: "M0",
                description: "O alvo é teleportado para a mão do conjurador ou cai aos seus pés, caso esteja com as mãos ocupadas.",
                target: "Um objeto que o conjurador poderia segurar em uma mão, a média distância.",
                type: "UT",
                level: 0
            },
            "Despachar": {
                id: "M1",
                description: "O alvo é teleportado para um espaço aberto a média distância.",
                target: "Um objeto de Tamanho 1 ou menor que esteja carregando.",
                type: "UT",
                level: 0
            },
            "Buraco da Glória": {
                id: "M2",
                description: "Um portal de 30 cm de largura se abre no centro de cada cubo e se mantêm enquanto durar o efeito. Os portais têm grossura desprezível, qualquer coisa colocada em um sai no outro. Quando o efeito termina, o portal se fecha, possivelmente cortando o que quer que esteja nele (como determinado pelo Mestre).",
                area: "Dois cubos de 1 metro de lado a média distância.",
                duration: "1 minuto",
                type: "UT",
                level: 1
            },
            "Divisão": {
                id: "M3",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra a Força do alvo. Caso seja bem-sucedido, o alvo sofre 3d6 de dano. Se ele for incapacitado por esse dano, pedaços de seu corpo se separam, ocasionando a morte instantaneamente.",
                target: "Uma criatura no campo de visão do conjurador a curta distância",
                attackRoll20: "O alvo sofre 1d6 de dano adicional.",
                type: "AT",
                level: 1
            },
            "Trocar": {
                id: "M4",
                description: "O conjurador e seu alvo são teleportados e trocam de posição. Um alvo relutante pode fazer uma jogada de desafio de Vontade e negar o efeito, caso obtenha sucesso. <br><b>Desencadeada</b> O conjurador pode utilizar uma ação desencadeada em seu turno para conjurar a magia. Caso faça isso, o alvo deve estar a curta distância.",
                target: "Uma criatura a longa distância.",
                type: "UT",
                level: 1
            },
            "Atalho": {
                id: "M5",
                description: "O conjurador se teleporta para um espaço aberto que possa ver a longa distância. <br><b>Desencadeada</b> O conjurador pode utilizar uma ação desencadeada em seu turno para conjurar a magia. Caso faça isso, o espaço aberto deve estar a média distância.",
                type: "UT",
                level: 2
            },
            "Remover": {
                id: "M6",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra a Agilidade do alvo. Caso seja bem-sucedido, ele toca o alvo e o teleporta para um espaço aberto em uma superfície sólida no seu campo de visão a média distância.",
                target: "Uma criatura ao alcance do conjurador.",
                attackRoll20: "O espaço aberto pode estar a distância extrema.",
                type: "AT",
                level: 2
            },
            "Fundir": {
                id: "M7",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra a Vontade do alvo. Caso seja bem-sucedido, o alvo é teleportado para um espaço aberto em uma superfície sólida a média distância do conjurador, parte dele se funde com a superfície. Ele sofre 6d6 de dano e fica imobilizado. A única maneira de remover essa aflição é destruir o objeto no qual o alvo está fundido ou utilizar uma ação para cortar o membro aprisionado (causando dano ao alvo igual a duas vezes sua taxa de cura).",
                target: "Uma criatura a média distância.",
                attackRoll20: "O alvo sofre 2d6 de dano adicional e também fica atordoado por 1 rodada.",
                type: "AT",
                level: 3
            },
            "Passo Infinito": {
                id: "M8",
                description: "Em cada um dos seus turnos enquanto durar a magia, o conjurador pode utilizar uma ação desencadeada para se teleportar para um espaço aberto dentro do seu campo de visão a média distância.",
                duration: "1 minuto",
                type: "UT",
                level: 3
            },
            "Portais": {
                id: "M9",
                description: "Um portal se abre no centro de cada cubo e se mantém enquanto durar o efeito. Cada portal tem 1 metro de largura e dois metros de altura, mas não tem grossura. O portal tem uma frente e um verso, pode ser orientado para qualquer lado. Qualquer coisa que entre pela frente de um portal sai imediatamente em um espaço aberto na parte de trás do outro, e vice-versa.",
                area: "Dois cubos, cada um com 2 metros de lado, um se originando em um ponto ao alcance do conjurador e o outro originado em um ponto a extrema distância.",
                duration: "1 minuto",
                type: "UT",
                level: 4
            },
            "Viagem": {
                id: "M10",
                description: "O conjurador toca cada um dos alvos e define um destino. Faça uma jogada de desafio de Intelecto. O Mestre impõe uma ou mais perdições a jogada, baseado na familiaridade do conjurador com o destino. Caso nomeie um lugar que não existe, a magia fracassa e conjuração é perdida. Caso seja bem-sucedido, o alvo é teleportado para o destino. Caso fracasse, cada alvo se teleporta separadamente para um local a 1d20 quilômetros do destino, escolhidos pelo Mestre. Caso o total da jogada seja 0 ou menos, cada alvo também sofre 10d6 de dano e ganha 1 de Insanidade pela magia ter saído terrivelmente errado. Caso o local de destino não seja largo o bastante para acomodar o alvo, ele sofre 5d6 de dano, recebe 1 de Insanidade e retorna ao espaço que saiu. Uma criatura incapacitada por este dano está morta quando volta, reduzida a uma pilha de sangue, ossos e carne. Caso o espaço de destino não seja aberto — como, por exemplo, o interior de uma parede — o alvo se funde com o material e morre instantaneamente.",
                target: "Até cinco criaturas dispostas, ao alcance do conjurador.",
                type: "UT",
                level: 5
            }
        }
    },
    "Tempo": {
        id: "i14",
        attribute: "intellect",
        darkMagic: false,
        spells: {
            "Rapidez": {
                id: "M0",
                description: "O conjurador toca o alvo, fornecendo a ele um bônus de +10 ao seu Deslocamento enquanto durar a magia. Quando o efeito termina, o alvo fica fatigado por 1 minuto.",
                target: "Uma criatura que não esteja fatigada ao alcance do conjurador.",
                duration: "1 minuto",
                type: "UT",
                level: 0
            },
            "Retardar o tempo": {
                id: "M1",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra a Vontade do alvo. Caso seja bem-sucedido, o alvo fica lento por 1 rodada.",
                target: "Uma criatura no campo de visão do conjurador a curta distância",
                attackRoll20: "O alvo também fica debilitado enquanto estiver lento devido a este efeito.",
                type: "AT",
                level: 0
            },
            "Lentidão": {
                id: "M2",
                description: "Cada alvo deve fazer uma jogada de desafio de Vontade. Caso fracasse, a criatura fica lenta por 1 minuto.",
                target: "Até cinco criaturas a média distância.",
                type: "AT",
                level: 1
            },
            "Paradoxo Menor": {
                id: "M3",
                description: "O conjurador faz uma jogada de ataque de Intelecto contra o Intelecto do alvo. Caso seja bem-sucedido, o alvo desaparece por 1 rodada. Ele ressurge no espaço onde estava ou no mais próximo, caso esteja ocupado.",
                target: "Uma criatura no campo de visão do conjurador a curta distância.",
                attackRoll20: "O conjurador também recupera a conjuração desta magia.",
                type: "AT",
                level: 1
            },
            "Reescrever o Momento": {
                id: "M4",
                description: "Uma vez por rodada, enquanto durar a magia, quando faz uma jogada, o conjurador pode descartar o resultado e jogar o dado novamente. Ele deve utilizar o segundo resultado.",
                duration: "1 minuto",
                type: "UT",
                level: 1
            },
            "Tempo Emprestado": {
                id: "M13",
                description: "<b>Desencadeada</b> No seu turno, você pode usar uma ação desencadeada para usar essa magia. Pela duração, você aumenta o número de ações que você pode fazer no seu turno em 1 e você ganha um bônus no seu deslocamento igual ao seu deslocamento. Ao final de cada rodada até o efeito acabar, você precisa tirar um sucesso em um teste de desafio de vontade ou você fica atordoado por 1 rodada. Você não pode encerrar esse efeito voluntariamente uma vez que você usou a magia.",
                duration: "1 minuto",
                type: "UT",
                level: 1
            },
            "Precognição": {
                id: "M5",
                description: "Enquanto durar a magia, jogadas de ataque contra o conjurador são feitas com 1 perdição. Além disso, ele faz jogadas de desafio para resistir a ataques com 1 dádiva.",
                duration: "1 minuto",
                type: "UT",
                level: 2
            },
            "Salto Temporal": {
                id: "M6",
                description: "O conjurador salta para frente no tempo, desaparecendo de seu espaço. A qualquer momento enquanto durar a magia, ele pode aparecer no espaço que abandonou ou no mais próximo, caso esteja ocupado. Caso contrário, ele reaparece no fim da rodada quando o efeito termina.",
                duration: "1 minuto",
                type: "UT",
                level: 2
            },
            "Aviso Temporal": {
                id: "M16",
                description: "<b>Desencadeada</b> Quando uma criatura até uma distância média que você pode ver iria tomar dano ou ganhar uma aflição, você pode usar uma ação desencadeada para usar essa magia. Você marca na sua mente o momento exato que esse evento ocorreu, e então seu eu do futuro de daqui a um tempo no futuro volta no passado logo antes do evento acontecer para avisar a criatura desencadeante. A criatura reduz o dano que levaria em 0 ou remove a aflição que teria ganhado. Ao fim de cada rodada depois do evento, você precisa fazer um teste de vontade com 1 perdição. Em um fracasso, você volta pro passado para avisar a criatura, desaparecendo e aparecendo no espaço que você ocupava 1 rodada depois, o que encerra o efeito. Se você ficar incapacitado antes de dar o aviso, você e a criatura desencadeante ganham 1d6 de insanidade como o tempo momentariamente se parte.",
                type: "UT",
                level: 2
            },
            "Acelerar": {
                id: "M7",
                description: "O conjurador toca o alvo. Enquanto durar a magia, a criatura pode fazer tanto um turno rápido quanto um lento a cada rodada. Quando o efeito termina, o alvo fica fatigado por 1d6 minutos.",
                target: "Uma criatura ao alcance do conjurador",
                duration: "1 minuto",
                type: "UT",
                level: 3
            },
            "Desacelerar": {
                id: "M8",
                description: "Cada criatura na área deve obter sucesso em uma jogada de desafio de Vontade ou fica lenta por 1 minuto. Enquanto estiver lenta devido a este efeito, quando a criatura faz um turno lento, ela pode utilizar uma ação ou movimento, mas não ambos.",
                area: "Uma esfera com 3 metros de raio, centrada em um ponto a média distância.",
                type: "AT",
                level: 3
            },
            "Dois de Si": {
                id: "M9",
                description: "Você faz com que seu eu do futuro apareça na área e ele permanecerá no seu presente pela duração da magia. Até lá, você e seu eu futuro fazem um turno cada por rodada, embora o paradoxo obrigue que ambos façam jogadas de ataque e de desafio com 1 perdição. Você e seu eu do futuro tem atributos, características e habilidades idênticas e contam como uma única criatura para propósito de compartilhamento de recursos. Sendo assim, caso um sofra dano ou ganhe Insanidade, isto é aplicado em ambas as versões. Se uma gastar o uso de uma magia, este uso é consumido para ambos. Caso um dos dois sofra alguma aflição, ou seja beneficiado por um efeito duradouro, a aflição ou efeito se aplica a ambos. Seu eu do futuro tem cópias idênticas de tudo que você tem e usa, com algumas exceções. Primeiramente, se você ou a duplicata consumirem ou gastarem um item, como uma poção de cura, o item é gasto para ambos. Além disto, caso tenha uma relíquia, você deverá decidir se é você ou seu eu do futuro que a carrega. Caso você ou sua duplicata fiquem incapacitados, o outro também ficará. E caso você morra, seu eu do futuro desaparece. Quando o efeito termina, você e seu eu do futuro desaparecem. Você reaparece 1 minuto depois, no espaço que o seu eu do futuro ocupava, e caso esteja ocupado, no espaço aberto mais próximo.",
                area: "Um cubo, grande o bastante para acomodar uma criatura do tamanho do conjurador, originado em um ponto a uma quantidade de metros igual ao seu Deslocamento",
                duration: "1 minuto; consulte o efeito",
                type: "UT",
                level: 4
            },
            "Viagem no Tempo": {
                id: "M10",
                description: "O conjurador escolhe um momento no tempo, até 100 anos no futuro. O conjurador desaparece. Quando o tempo do jogo alcançar o período destinado, ele imediatamente reaparece no espaço que abandonou ou no espaço aberto mais próximo, caso este esteja ocupado.",
                type: "UT",
                level: 5
            }
        }
    },
    // Tradições de vontade:
    "Água": {
        id: "v0",
        attribute: "will",
        darkMagic: false,
        spells: {
            "Criar água":{
                id: "M0",
                description:"O conjurador toca o alvo, que se enche de água fresca e limpa.",
                target:"Um copo, vasilha ou recipiente similar ao alcance do jogador",
                type:"UT",
                level:"0"
            },
            "Congelar":{
                id: "M1",
                description:"A temperatura cai ao redor do alvo. O conjurador faz uma jogada de Vontade contra a Agilidade do alvo. Caso seja bem-sucedido, ele sofre 1d3 de dano e fica imobilizado por 1 rodada.",
                target:"Uma criatura a curta distância",
                type:"AT",
                level:"0",
                attackRoll20:"O alvo sofre 1d3 de dano adicional."
            },
            "Afogar":{
                id: "M2",
                description:"Água se acumula nos pulmões do alvo ou em um órgão similar. O alvo deve fazer uma jogada de desafio de Força; caso fracasse, ele sofre 1d6+2 de dano e fica debilitado. Ao final de cada rodada que o alvo está debilitado devido a este efeito, ele deve fazer uma jogada de desafio de Força com 1 dádiva para tentar remover a aflição. Depois de três fracassos, o alvo sufoca e morre.",
                target:"Uma criatura a curta distância que respire ar.",
                type:"AT",
                level:"1"
            },
            "Explosão de gelo":{
                id: "M3",
                description:"O conjurador arremessa fragmentos de gelo dentados que causam 2d6+2 de dano a tudo na área; ou metade do dano, caso a criatura seja bem-sucedida em uma jogada de desafio de Agilidade. O chão na área se torna terreno difícil durante uma 1 rodada.",
                area:" Um cone com 3 metros de comprimento, originado de um ponto ao alcance do conjurador.",
                type:"AT",
                level:"1"
            },
            "Fonte da vida":{
                id: "M4",
                description:"Águas curativas obscurecem parcialmente a área enquanto a magia durar. Cada criatura viva na área não precisa beber água até que tenha completado um descanso. Além disso, quando uma criatura na área cura dano, ela cura 1d3 de dano adicional.",
                target:"Um hemisfério com raio 2 metros, centrado em um ponto no solo a curta distância.",
                duration:"1 minuto",
                type:"UT",
                level:"1"
            },
            "Gêiser":{
                id: "M5",
                description:"Uma coluna de água escaldante emerge da área, sobe 2d6 metros antes de cair no chão cobrindo metade desta quantidade de metros de área, extinguindo chamas que não estejam protegidas. A força da água move objetos de Tamanho 1 ou menor, que não sejam fixos, 1d6 metros para longe do ponto de origem; enquanto cada criatura na área sofre 2d6+2 de dano das águas quentes e deve fazer uma jogada de desafio de agilidade. Caso fracasse, a criatura fica prostrada, e caso seja bem-sucedida, sofre apenas metade do dano.",
                area:"Um círculo com 5 metros de raio, centrado em um ponto no solo a média distância",
                type:"AT",
                level:"2"
            },
            "Onda":{
                id: "M6",
                description:"Água preenche a área enquanto durar a magia. A água obscurece parcialmente qualquer coisa em seu espaço e atrás dela, fornecendo metade de cobertura. A água também extingue quaisquer chamas na área. Quando o efeito termina, a linha de água dobra e cai para longe do conjurador ou na sua direção, como ele desejar, cobrindo uma área com 10 metros de comprimento e 10 metros de largura. Cada criatura na área sofre 1d6 de dano e deve fazer uma jogada de desafio de Força. Caso fracasse, ela fica prostrada; caso seja bem-sucedida, sofre metade do dano. A água então se espalha por mais 10 metros em todas as direções, extinguindo quaisquer chamas que tocar.",
                area:" Uma linha com 10 metros de comprimento, 10 metros de altura e 1 metro de largura originada de um ponto no solo a média distância.",
                duration:"1 rodada",
                type:"AT",
                level:"2"
            },
            "Esfera de água":{
                id: "M7",
                description:"Água preenche a área e permanece até o fim da magia. Cada vez que o conjurador utiliza uma ação para se concentrar na magia, ele pode mover a esfera e tudo dentro dela até 5 metros em qualquer direção. Cada criatura na área quando o personagem conjura esta magia fica presa na esfera, assim como qualquer criatura cujo espaço seja coberto pela esfera. Ao fim de cada rodada, até o fim do efeito, cada criatura que respira ar presa dentro da esfera precisa obter um sucesso em uma jogada de desafio de Força ou sofre 2d6 de dano. Uma criatura presa por este efeito pode utilizar uma ação para fazer uma jogada de desafio de Força. Caso seja bem-sucedida, ela nada para a liberdade e cai em um espaço aberto de sua escolha a 1 metro da esfera.",
                area:"Uma esfera com 3 metros de raio, centrada em um ponto a média distância.",
                duration:"Concentração, até 1 minuto.",
                type:"AT",
                level:"3"
            },
            "Força das mares":{
                id: "M8",
                description:"Cada alvo deve fazer uma jogada de desafio de Força. Caso fracasse, o alvo é movido 2d6 metros para perto ou longe do conjurador (à escolha dele) e fica pasmo por 1 rodada. Caso seja bem-sucedido, o alvo é movido apenas metade da distância.",
                area:"Qualquer quantidade de criaturas a média distância.",
                type:"AT",
                level:"3"
            },
            "Onda de frio":{
                id: "M9",
                description:"Frio letal se dispersa pela área, congelando instantaneamente água e líquidos a base de água, incluindo poções. O frio causa 7d6 de dano a tudo na área. Criaturas na área sofrem metade do dano, caso obtenham sucesso em uma jogada de desafio de Força. Uma criatura que fique incapacitada por este dano congela e morre instantaneamente.",
                area:" Um cone com 8 metros de comprimento, originado de um ponto ao alcance do conjurador.",
                type:"AT",
                level:"4"
            },
            "Compelir gênio da água":{
                id: "M10",
                description:"No fim da rodada que o personagem conjurou a magia, o alvo se torna um gênio da água de Tamanho 2. O conjurador não pode terminar voluntariamente esta magia. Quando o gênio surge, o conjurador faz uma jogada de ataque de Vontade contra a Vontade do gênio. O gênio fica compelido enquanto durar a magia, caso o conjurador seja bem-sucedido; caso ele fracasse, o gênio se torna hostil.",
                area:"Um cubo de gelo, neve ou água, com 2 metros de lado, originado de um ponto a longa distância.",
                duration:"1 minuto.",
                type:"UT",
                level:"5"
            }    
        }
    },
    "Alteração": {
        id: "v1",
        attribute: "will",
        darkMagic: false,
        spells: {
            "Compreensão":{
                id: "M0",
                description:"O conjurador toca o alvo. Dado que este saiba ao menos 1 idioma, o conjurador pode se comunicar com o alvo enquanto mantém contato físico com ele, independente de compartilharem um idioma mútuo.",
                target:"O conjurador e uma criatura ao alcance do conjurador.",
                duration:"Concentração, até 1 minuto.",
                type:"UT",
                level:"0"
            },
            "Distorcer aparência":{
                id: "M1",
                description:"O conjurador toca um alvo e torna sua aparência indistinta. Pela duração da magia, quando o alvo tentar se esconder, ele faz suas jogadas de desafio de Agilidade com 1 dádiva; criaturas que veem o alvo e atacam sua Defesa ou Agilidade fazem suas jogadas de ataque com 1 perdição.",
                target:"Uma criatura ao alcance do conjurador.",
                duration:"1 minuto.",
                type:"UT",
                level:"0"
            },
            "Adaptação subaquática":{
                id: "M2",
                description:"O conjurador toca o alvo. Pela duração da magia, o alvo pode respirar água tão facilmente quanto respira ar, se mover até seu Deslocamento total enquanto nada e não precisa fazer jogadas de desafio para nadar.",
                target:"Uma criatura ao alcance do conjurador.",
                duration:"1 hora.",
                type:"UT",
                level:"1"
            },
            "Ampliar os sentidos":{
                id: "M3",
                description:"O conjurador toca o alvo. Pela duração da magia, o alvo recebe um bônus de +5 para sua Percepção e pode enxergar em áreas obscurecidas por sombras ou escuridão como se estivessem iluminadas; no entanto, o alvo faz jogadas de desafio para resistir a ficar cego ou surdo com 1 perdição.",
                target:"Uma criatura ao alcance do conjurador.",
                duration:"1 hora.",
                type:"UT",
                level:"1"
            },
            "Escalada de aranha":{
                id: "M4",
                description:"O conjurador toca o alvo. Pela duração da magia, o alvo pode se mover até seu Deslocamento total por paredes, tetos ou outras áreas horizontais, não precisa fazer uma jogada de desafio para escalar.",
                target:"Uma criatura ao alcance do conjurador.",
                duration:"1 hora.",
                type:"UT",
                level:"1"
            },
            "Aprimorar atributo":{
                id: "M5",
                description:"O conjurador toca o alvo. Ele escolhe Força, Agilidade, Intelecto ou Vontade. Pela duração da magia, quando o alvo faz uma jogada de ataque ou de desafio utilizando o atributo escolhido, ele faz a jogada com 1 dádiva.",
                target:"Uma criatura ao alcance do conjurador.",
                duration:"1 minuto.",
                type:"UT",
                level:"2"
            },
            "Aprimorar defesa":{
                id: "M6",
                description:"O conjurador toca o alvo. Pela duração da magia, o alvo ganha um bônus de +5 para sua Saúde, jogadas de ataque contra o alvo são feitas com 1 perdição.",
                target:"Uma criatura ao alcance do conjurador.",
                duration:"1 minuto.",
                type:"UT",
                level:"2"
            },
            "Alterar tamanho":{
                id: "M7",
                description:"O conjurador toca o alvo, ele cresce ou encolhe e se mantém em seu novo Tamanho enquanto durar a magia. Tudo que o alvo veste e carrega também cresce ou encolhe para se acomodar a nova forma, mas se esses objetos deixarem de estar na posse do alvo, eles imediatamente voltam ao tamanho normal. Se o alvo cresce, seu Tamanho duplica e ele recebe um bônus de +10 para sua Saúde. Os ataques de sua arma causam 1d6 de dano adicional, caso seu novo Tamanho seja 3 ou menos, ou 2d6 de dano adicional, caso seu novo Tamanho seja 4 ou mais. Se o espaço que o alvo ocupa não é grande o bastante para acomodar seu novo Tamanho, ele sofre 5d6 de dano e o efeito termina imediatamente. Se o alvo encolhe, seu Tamanho é dividido pela metade. Ele causa metade do dano com ataques de armas, faz jogadas de ataque e desafio de Força com 1 perdição e faz jogadas de ataque e desafio de Agilidade com 1 dádiva.",
                target:"Uma criatura ao alcance do conjurador.",
                duration:"1 minuto.",
                type:"UT",
                level:"3"
            },
            "Regeneração":{
                id: "M8",
                description:"O conjurador toca o alvo. Ao fim de cada rodada enquanto durar a magia, o alvo cura uma quantidade de dano igual à metade de sua taxa de cura.",
                target:"Uma criatura viva ao alcance do conjurador.",
                duration:"1 minuto",
                type:"UT",
                level:"3"
            },
            "Maleabilidade":{
                id: "M9",
                description:"O conjurador toca o alvo. Enquanto durar a magia, o alvo pode se mover até seu Deslocamento total por terreno difícil, espaços ocupados por outras criaturas independentemente de seu Tamanho e livremente por aberturas de pelo menos 2,5 cm de largura. Da mesma maneira, pela duração da magia, o alvo não pode ficar prostrado e é imune as aflições agarrado, imobilizado e lento.",
                target:"Uma criatura ao alcance do conjurador.",
                duration:"1 hora.",
                type:"UT",
                level:"4"
            },
            "Despertar o potencial":{
                id: "M10",
                description:"O conjurador toca o alvo. Ele escolhe Força, Agilidade, Intelecto ou Vontade e joga 1d6. O alvo recebe um bônus para o atributo escolhido igual ao resultado da jogada, até o valor máximo de 20, enquanto durar a magia. O efeito também afeta quaisquer características relacionadas ao atributo.",
                target:"Uma criatura ao alcance do conjurador.",
                duration:"1 hora.",
                type:"UT",
                level:"5"
            }
        }
    },
    "Ar": {
        id: "v2",
        attribute: "will",
        darkMagic: false,
        spells: {
            "Agitar o ar":{
                id: "M0",
                description:"O conjurador cria uma leve brisa na área, que se move junto a ele até o fim do efeito. A brisa limpa odores e poeira, espalha objetos leves tais como papéis, apaga velas e faz com que chamas maiores bruxuleiem e dancem Criaturas na área que atacarem o conjurador com armas arremessadas ou de combate à distância fazem suas jogadas de ataque com 1 perdição.",
                area:"Uma esfera com 2 metros de raio centrada em um ponto ao alcance do conjurador.",
                duration:"1 minuto.",
                type:"UT",
                level:"0"
            },
            "Rajada de vento":{
                id: "M1",
                description:"Uma ventania poderosa atinge o alvo. O conjurador faz uma jogada de ataque de Vontade contra a Força do alvo. Caso seja bem-sucedido, o vento move o alvo 1d6 metros para longe do conjurador.",
                target:" Uma criatura ou objeto a curta distância.",
                type:"AT",
                attackRoll20:"O alvo fica prostrado ao final do movimento.",
                level:"0"
            },
            "Esfolar":{
                id: "M2",
                description:"Areia no ar arranha o alvo. O conjurador faz uma jogada de ataque de Vontade contra a Força do alvo. Caso seja bem-sucedido, o alvo sofre 2d6+3 de dano. Se uma criatura viva fica incapacitada devido a esse dano, ela morre instantaneamente, sua pele (caso tenha) é arrancada dos ossos.",
                target:"Uma criatura ou objeto a curta distância.",
                type:"AT",
                attackRoll20:"O alvo sofre 2d6 de dano adicional.",
                level:"1"
            },
            "Invocar ventania":{
                id: "M3",
                description:"Um vento uivante dispersa vapores, névoa, fumaça e gás da área. Chamas desprotegidas se apagam e objetos leves são soprados para o canto mais próximo da área. Cada criatura na área deve ter sucesso em uma jogada de desafio de Força ou é movida 1d6 metros para longe do ponto de origem. Criaturas voadoras fazem o teste com 1 perdição.",
                area:"Um cone, 3 metros de comprimento, originado em um ponto a curta distância.",
                type:"AT",
                level:"1"
            },
            "Planar":{
                id: "M4",
                description:"Desencadeada O conjurador pode utilizar uma ação desencadeada para conjurar a magia quando vê um alvo cair. Durante o tempo da duração, o alvo não sofre dano por aterrissar depois de uma queda. Caso o alvo continue caindo após o fim do efeito, ele sofre dano baseado no ponto a partir do qual a queda continuou após o fim do efeito da magia.",
                target:"Uma criatura a longa distância.",
                duration:"1 minuto.",
                type:"UT",
                level:"1"
            },
            "Palma do trovão":{
                id: "M5",
                description:"Uma onda de som retumbante se dispersa a partir do centro da área, causando 1d6+1 de dano em tudo na área Cada criatura na área deve fazer uma jogada de desafio de Força e sofrer metade do dano em caso de sucesso. Caso fracasse, a criatura também fica surda por 1 minuto.",
                area:"Uma esfera com 10 metros de raio centrada em um ponto a média distância.",
                type:"AT",
                level:"2"
            },
            "Parar o ar":{
                id: "M6",
                description:"Pela duração da magia, nenhum som emana ou chega até a área. Criaturas na área ficam ensurdecidas e imunes a ataques baseados em sons, tal como a magia paLma do trovão.",
                area:"Uma esfera com 4 metros de raio centrada em um ponto a média distância.",
                duration:"1 hora.",
                type:"UT",
                level:"2"
            },
            "Conceder o voo":{
                id: "M7",
                description:"O conjurador toca o alvo. O alvo pode voar até seu Deslocamento normal pelo tempo de duração da magia.",
                target:"Uma criatura ao alcance do conjurador.",
                duration:"1 hora.",
                type:"UT",
                level:"3"
            },
            "Lançar":{
                id: "M8",
                description:"Uma poderosa rajada de vento irrompe do ponto de origem. Cada criatura na área deve fazer uma jogada de desafio de Força; criaturas de Tamanho 1 ou menor fazem a jogada com 1 perdição. Caso fracasse, a criatura fica prostrada e é movida 5d6 metros para longe do ponto de origem. Caso encontre uma superfície sólida antes de completar a distância total do movimento, a criatura e a superfície contra qual bateu sofrem 1d6 de dano mais 1d6 de dano adicional para cada 5 metros de movimento remanescente (arredondado para baixo).",
                area:"Um cilindro com 4 metros de altura e raio de 4 metros, centrado em um ponto a longa distância.",
                type:"AT",
                level:"3"
            },
            "Criar ciclone":{
                id: "M9",
                description:"Um poderoso tufão aparece em uma das pontas da área e se move por ela, causando 3d6 de dano a qualquer coisa cujo espaço ele entrar. Todo objeto que não esteja fixo no chão que sofra dano desta forma, é movido 1d6 metros em uma direção à escolha do conjurador. Cada criatura que sofre dano desta forma deve fazer uma jogada de desafio de Força. Caso fracasse, ela é movida 1d6 metros na direção escolhida pelo conjurador ou fica prostrada. Caso tenha sucesso, a criatura sofre metade do dano.",
                area:"Uma linha com 20 metros de comprimento, 10 metros de altura e 2 metros de largura originada de um ponto a longa distância.",
                type:"AT",
                level:"4"
            },
            "Compelir gênio do vento":{
                id: "M10",
                description:"No fim da rodada em que esta magia é conjurada, o cubo alvo se torna um gênio do vento de Tamanho 2. O conjurador não pode finalizar esta magia voluntariamente. Quando o gênio aparece, o conjurador faz uma jogada de ataque de Vontade contra a Vontade dele. O gênio se torna compelido pela duração da magia caso a jogada seja bem-sucedida, ou se torna hostil caso seja um fracasso.",
                target:"Um cubo de ar, com 2 metros de lado, originado de um ponto a longa distância.",
                duration:"1 minuto.",
                type:"UT",
                level:"5"
            }
        }
    },
    "Canção": {
        id: "v3",
        attribute: "will",
        darkMagic: false,
        spells: {
            "Canção da amizade":{
                id: "M0",
                description:"O conjurador se concentra por 1 minuto, durante o qual ele canta. Quando termina, cada alvo deve fazer uma jogada de desafio de Vontade. Caso fracasse, ele fica encantado por 1 hora ou até que sofra dano.",
                target:" Cada criatura escolhida pelo conjurador a curta distância que possa ouvi-lo.",
                type:"AT",
                level:"0"
            },
            "Projetar voz":{
                id: "M1",
                description:"Enquanto durar a magia, tudo que o conjurador diz ou canta pode ser ouvido a até 1,6 km de distância.",
                duration:"1 minuto.",
                type:"UT",
                level:"0"
            },
            "Canção da coragem":{
                id: "M2",
                description:"Enquanto durar a magia, nenhum alvo pode ser encantado, compelido ou assustado, se estiver a curta distância do conjurador e puder ouvi-lo. O efeito termina imediatamente, caso o conjurador pare de cantar ou conjure outra magia.",
                duration:"1 minunto.",
                type:"UT",
                level:"1"
            },
            "Canção da inspiração":{
                id: "M3",
                description:"Quando conjura essa magia, e a cada turno de duração, o conjurador escolhe uma criatura a curta distância que possa ouvi-lo. Ela faz sua próxima jogada de ataque com 2 dádivas. O efeito termina imediatamente, caso o conjurador pare de cantar ou conjure outra magia.",
                duration:"1 minuto.",
                type:"UT",
                level:"1"
            },
            "Canção da valentia":{
                id: "M4",
                description:"Quando conjura essa magia, e a cada turno de duração, o conjurador escolhe uma criatura a curta distância que possa ouvi-lo. Ela causa 1d6 de dano adicional em seus ataques com armas por 1 rodada. O efeito termina imediatamente, caso o conjurador pare de cantar ou conjure outra magia.",
                duration:"1 minuto",
                type:"UT",
                level:"1"
            },
            "Canção da cura":{
                id: "M5",
                description:"O conjurador se concentra por 1 minuto, durante o qual passa o tempo cantando. Quando termina, cada alvo a curta distância do conjurador durante toda a performance cura uma quantidade de dano igual à sua taxa de cura.",
                target:"Cada criatura escolhida pelo conjurador a curta distância que possa ouvi-lo.",
                type:"UT",
                level:"2"
            },
            "Canção do deslumbramento":{
                id: "M6",
                description:"Quando conjura essa magia, e quando utiliza uma ação para se concentrar nela, o conjurador escolhe uma criatura a curta distância que possa ouvi-lo. Ela deve obter um sucesso em uma jogada de desafio de Vontade ou fica encantada enquanto durar o efeito. Se estiver encantada por esse motivo, a criatura pode apenas fazer turnos lentos e, caso esteja a mais de 10 metros do conjurador, deve se mover em direção a ele em seu turno. O efeito termina imediatamente, caso o conjurador pare de cantar ou conjure outra magia.",
                duration:"Concentração, até 1 minuto.",
                type:"AT",
                level:"2"
            },
            "Canção da obscenidade":{
                id: "M7",
                description:"Quando conjura essa magia, e quando utiliza uma ação para se concentrar nela, o conjurador escolhe uma criatura a curta distância que possa ouvi-lo. Ela deve fazer uma jogada de desafio de Vontade. Caso seja bem-sucedida, se torna imune à conjuração desta magia. Caso fracasse, fica debilitada enquanto durar o efeito. Se estiver debilitada por este motivo, também fica lenta.",
                duration:"Concentração, até 1 minuto.",
                type:"AT",
                level:"3"
            },
            "Canção do pavor":{
                id: "M8",
                description:"Quando conjura essa magia, e quando utiliza uma ação para se concentrar nela, o conjurador escolhe uma criatura a curta distância que possa ouvi-lo. Ela deve fazer uma jogada de desafio de Vontade. Caso seja bem-sucedida, se torna imune à conjuração dessa magia. Caso fracasse, fica assustada enquanto durar o efeito. Se estiver assustada por este motivo, a criatura deve utilizar sua ação a cada turno para se afastar do conjurador pelo caminho mais seguro. Caso a criatura não possa ouvi-lo ao fim da rodada, ela remove essa aflição.",
                duration:"Concentração, até 1 minuto.",
                type:"AT",
                level:"3"
            },
            "Canção do sono":{
                id: "M9",
                description:"Quando conjura essa magia, e quando utiliza uma ação para se concentrar nela, o conjurador escolhe uma criatura a curta distância que possa ouvi-lo. Ela deve fazer uma jogada de desafio de Vontade. Caso seja bem-sucedida, se torna imune à conjuração dessa magia., Caso fracasse, fica lenta enquanto durar o efeito. Se estiver lenta por este motivo, ela também fica fatigada. Caso a criatura não possa ouvi-lo ao fim da rodada, ela remove essas aflições. Se já estiver lenta, ela cai no sono por 1 hora.",
                duration:"Concentração, até 1 minuto.",
                type:"AT",
                level:"4"
            },
            "Canção dos heróis":{
                id: "M10",
                description:"Enquanto durar a magia, ou até que não possam mais ouvi-lo, cada alvo recebe um bônus de +20 para a Saúde, +2 para o seu Deslocamento e faz jogadas de ataque e desafio com 2 dádivas. O efeito termina imediatamente, caso o conjurador pare de cantar ou conjure outra magia.",
                target:"Até três criaturas a curta distância que possam ouvi-lo.",
                type:"UT",
                level:"5"
            }
        }
    },
    "Caos": {
        id: "v4",
        attribute: "will",
        darkMagic: false,
        spells: {
            "Dádiva do caos":{
                id: "M0",
                description:"Enquanto durar a magia, o conjurador joga um dado do caos (um d6) toda vez que faz uma jogada de ataque ou de desafio. Se o resultado for um número ímpar, ele é aplicado como penalidade à jogada do d20; sendo um número par, ele é aplicado como bônus.",
                duration:"1 minuto.",
                type:"UT",
                level:"0"
            },
            "Raio errático":{
                id: "M1",
                description:"Um raio colorido e efervescente voa da mão do conjurador. Ele faz uma jogada de ataque de Vontade contra a Agilidade do alvo. Caso seja bem-sucedido, o alvo sofre 1d6 de dano. Depois da jogada de ataque, o conjurador joga um d6. Se o resultado for 6, o ataque é repetido contra um alvo diferente, amigo ou inimigo, a média distância do alvo anterior. O conjurador escolhe o alvo caso mais de um esteja disponível.",
                target:"Uma criatura ou objeto a média distância.",
                type:"AT",
                attackRoll20:"O alvo sofre 1d6 de dano adicional.",
                level:"0"
            },
            "Devastação inconstante":{
                id: "M2",
                description:"Uma bola tremulante de energia salta da mão do conjurador. Ele faz uma jogada de ataque de Vontade contra a Agilidade do alvo e joga um d6. Se o resultado for um número ímpar, ele é aplicado como penalidade à jogada de ataque, sendo um número par como bônus. Caso seja bem-sucedido, o alvo sofre 2d6 de dano, mais 2d6 de dano adicional caso tenha a jogada de ataque tenha recebido penalidade.",
                target:"Uma criatura ou objeto a média distância.",
                type:"AT",
                attackRoll20:" O alvo também é teleportado 1d6 metros para um lugar aberto na direção que o conjurador escolher.",
                level:"1"
            },
            "Dobrar espaço":{
                id: "M3",
                description:"O conjurador joga 2d6. O conjurador se teleporta para um espaço aberto de sua escolha até uma quantidade de metros igual ao resultado da jogada.<br><b>Desencadeada</b> O conjurador pode utilizar uma ação desencadeada para conjurar esta magia em seu turno. Caso faça isso, ele joga 1d6 em vez de 2d6 para determinar a distância do teleporte.",
                type:"UT",
                level:"1"
            },
            "Escudo iridescente":{
                id: "M4",
                description:"Um campo brilhante e colorido surge ao redor do conjurador. Ele joga um d6 e adiciona o resultado como bônus para sua Defesa. Cada vez que uma criatura realizar um ataque contra sua Defesa, o bônus é reduzido em 1 (até o mínimo de 0, o que termina o efeito).",
                duration:"1 hora; consulte o efeito.",
                type:"UT",
                level:"1"
            },
            "Cor da magia":{
                id: "M5",
                description:"Um globo colorido dispara da mão do conjurador em direção ao alvo. Quando alcança este ponto, ou caso encontre uma criatura ou objeto sólido antes, o globo explode. Energia caótica multicolorida se dispersa por uma esfera de 1 metro de raio centrada no alvo ou em um ponto na criatura ou objeto no espaço. Tudo na área sofre 1d6+1 de dano. Caso o resultado do dado de dano tenha sido um número ímpar, tudo na área sofre 3d6 de dano adicional.",
                target:"Um ponto no espaço a média distância.",
                type:"AT",
                level:"2"
            },
            "Tremula":{
                id: "M6",
                description:"O conjurador entra e sai da existência. Ao fim de cada rodada de duração, ele joga um d6. O conjurador se teleporta para um espaço aberto até uma quantidade de metros igual ao resultado da jogada. Caso o resultado seja ímpar, o Mestre escolhe onde vai aparecer. Caso seja par, ele escolhe.",
                duration:"1d6 minutos.",
                type:"UT",
                level:"2"
            },
            "Lança caótica":{
                id: "M7",
                description:"Um jato de energia multicolorida se espalha por uma área. Cada criatura na área deve fazer uma jogada de desafio de Vontade. A criatura sofre 5d6+5 de dano em caso de fracasso, ou cura 2d6+5 caso em caso de sucesso.",
                area:" Uma linha moldável com 15 metros de comprimento e 2 metros de largura, originada em um ponto ao alcance do conjurador.",
                type:"AT",
                level:"3"
            },
            "Magia selvagem":{
                id: "M8",
                description:"Luzes estranhas, sons incomuns e outras esquisitices se espalham pela área. O conjurador joga um d20 para descobrir o que acontece.",
                area:" Uma esfera com 1d6 metros de raio centrada em um ponto ao alcance do conjurador.",
                type:"UT",
                level:"3"
            },
            "Campo espelhado":{
                id: "M9",
                description:"Uma barreira similar a um espelho preenche a área até o fim do efeito, obscurecendo tudo atrás dela. Quando uma criatura entra neste espaço, joga-se um d6. Um resultado par faz com que a criatura se mova 1 metro através da barreira para um espaço aberto do outro lado (a criatura escolhe a direção). Um resultado ímpar teleporta a criatura para um espaço aberto escolhido pelo conjurador em uma superfície sólida a uma quantidade de metros igual ao resultado da jogada.",
                area:"Uma linha moldável com 10 metros de comprimento, 5 metros de altura e 1 metro de largura originada de um ponto a média distância.",
                duration:"1 minuto.",
                type:"UT",
                level:"4"
            },
            "Singularidade":{
                id: "M10",
                description:"Um aglomerado turvo multicolorido surge no ponto de origem e se mantém até o fim do efeito. Quando o personagem conjura esta magia, objetos que não sejam fixos se movem 2d6 metros para o ponto de origem. Cada criatura presente na área quando a magia é conjurada ou que entra na área deve fazer uma jogada de desafio de Força com 1 perdição. Caso fracasse, a criatura é movida 2d6 metros em direção ao ponto de origem e não pode se mover para longe dele enquanto durar o efeito da magia. Qualquer criatura que chegar ao ponto de origem sofre 10d6 de dano. Caso fique incapacitada por esse dano, ela é completamente apagada da existência, seu corpo e alma desaparecem para sempre. Quando o efeito termina, o aglomerado explode, causando 4d6 de dano a tudo na área da magia. Cada criatura na área deve fazer uma jogada de desafio de Força. Caso fracasse, a criatura fica prostrada no chão; caso seja bem-sucedida, a criatura apenas sofre metade do dano.",
                area:"Uma esfera de 10 metros de raio centrada em um ponto a longa distância.",
                duration:"1 rodada.",
                type:"AT",
                level:"5"
            }
        }
    },
    "Celestial": {
        id: "v5",
        attribute: "will",
        darkMagic: false,
        spells: {
            "Feixe ardente":{
                id: "M0",
                description:"Um feixe flamejante escapa da mão do conjurador. Ele faz uma jogada de ataque de Vontade contra a Agilidade do alvo. Caso seja bem-sucedido, o alvo sofre 1d6 de dano adicional.",
                target:"Uma criatura ou objeto a distância.",
                type:"AT",
                attackRoll20:"O alvo fica cego por 1 rodada.",
                level:"0"
            },
            "Luz":{
                id: "M1",
                description:"O conjurador toca o objeto e uma luz brilha a partir dele em um raio de 5 metros pelo tempo de duração da magia.",
                target:"Um objeto ao alcance do conjurador",
                duration:"1 hora.",
                type:"UT",
                level:"0"
            },
            "Clarão":{
                id: "M2",
                description:"Um clarão de luz brilhante surge na frente do alvo. O conjurador faz uma jogada de ataque de Vontade contra a Percepção do alvo. Caso seja bem-sucedido, o alvo fica cego por 1 rodada.",
                target:" Uma criatura dentro do campo de visão a curta distância.",
                type:"AT",
                level:"1"
            },
            "Explosão Primástica": {
                id: "M3",
                description: "Uma partícula brilhante voa do dedo do conjurador em direção ao alvo. Quando alcança o ponto alvo, ou caso encontre uma criatura ou objeto sólido antes dele, a partícula explode em luzes coloridas. Elas se dispersam em uma esfera de 1 metro de raio centrada no alvo ou em um ponto na criatura ou objeto. Cada criatura capaz de enxergar na área deve ser bem-sucedida em uma jogada de desafio de Percepção ou fica pasma por 1 rodada.",
                target: "Um ponto no espaço a média distância",
                type: "AT",
                level: 1
            },
            "Luz Persistente": {
                id: "M4",
                description: "O conjurador toca o objeto e uma luz brilha a partir dele em um raio de 10 metros pelo tempo de duração da magia.",
                target: "Um objeto ao alcance do conjurador",
                duration: "8 horas",
                type: "UT",
                level: 1
            },
            "Raios solares":{
                id: "M5",
                description:"Três raios flamejantes voam para fora da mão do conjurador, divididos como ele escolher entre seus alvos. Para cada raio, ele faz uma jogada de ataque de Vontade contra a Agilidade do alvo. Caso seja bem-sucedido, o alvo sofre 1d6 de dano. Caso seja capaz de enxergar, o alvo também fica debilitado por 1 rodada.",
                target:"Até três criaturas ou objetos a média distância.",
                type:"AT",
                attackRoll20:"O alvo sofre 1d3 de dano adicional.",
                level:"2"
            },
            "Alvorecer": {
                id: "M6",
                description: "Luz do sol se dispersa pela área enquanto a magia está ativa, eliminando sombras mágicas ou escuridão criadas por magias de nível 2 ou menor.",
                area: "Uma esfera com 10 metros de raio centrada em um ponto a longa distância",
                duration: "1 hora",
                type: "UT",
                level: 2
            },
            "Estrela cadente":{
                id: "M7",
                description:"Uma partícula de luz branca aparece em qualquer lugar dentro do alcance da magia e corre em direção ao alvo. Quando alcança este ponto, ou caso encontre uma criatura ou objeto sólido antes, a partícula explode. Chamas se dispersam por uma esfera de 3 metros de raio centrada no alvo ou em um ponto no espaço da criatura ou objeto, causando 2d6+2 de dano a tudo na área. Cada criatura na área deve fazer uma jogada de desafio de Força. A criatura fica debilitada por 1 rodada em caso de falha, ou apenas sofre metade do dano em caso de sucesso.",
                target:"Um ponto no espaço a média distância.",
                type:"AT",
                level:"3"
            },
            "Irradiação":{
                id: "M8",
                description:"Um suave brilho verde se dispersa pela área, transformando escuridão em sombras pela duração da magia. Tudo na área sofre 1d6 de dano quando a magia é conjurada e ao fim de cada turno seguinte enquanto a magia estiver ativa. Cada criatura que sofre dano desta maneira deve fazer uma jogada de desafio de Força. Caso fracasse, ela fica fatigada por 1 rodada e lenta enquanto estiver fatigada devido a este efeito. Caso seja bem-sucedida, a criatura sofre metade do dano.",
                area:"Uma esfera com 3 metros de raio centrada em um ponto a longa distância.",
                duration:"1 mminuto.",
                type:"AT",
                level:"3"
            },
            "Nova":{
                id: "M9",
                description:"Luz brilhante explode e se dispersa pela área. Todas as criaturas, com exceção do conjurador, sofrem 2d6+2 de dano e devem fazer uma jogada de desafio de Força. A criatura fica cega por 1 rodada em caso de falha, ou apenas sofre metade do dano em caso de sucesso.",
                area:"Uma esfera de 8 metros de raio centrada em um ponto ao alcance do conjurador.",
                type:"AT",
                level:"4"
            },
            "Feixe solar":{
                id: "M10",
                description:"O conjurador libera um feixe de luz brilhante e ardente de sua mão, causando 3d6+3 de dano a tudo na área. Cada criatura que sofrer este dano deve fazer uma jogada de desafio de Força. A criatura fica cega por 1 minuto em caso de falha, ou apenas sofre metade do dano em caso de sucesso.",
                area:" Uma linha com 25 metros de comprimento e 1 metro de largura, originada em um ponto ao alcance do conjurador.",
                type:"AT",
                level:"5"
            }
        }
    },
    "Destruição": {
        id: "v6",
        attribute: "will",
        darkMagic: false,
        spells: {
            "Arruinar":{
                id: "M0",
                description:"O conjurador sofre 1 ponto de dano. O alvo sofre 1d6 de dano; caso seja uma criatura, ela deve fazer uma jogada de desafio de Força, ficando fatigada por 1 minuto, caso fracasse.",
                target:"Uma criatura ou objeto a curta distância.",
                type:"AT",
                level:"0"
            },
            "Quebrar":{
                id: "M1",
                description:"O conjurador sofre 1 ponto de dano. O alvo sofre dano igual à sua própria Saúde.",
                target:"Um objeto de Tamanho 1/2 ou menor a curta distância.",
                type:"AT",
                level:"0"
            },
            "Dissolver":{
                id: "M2",
                description:"O conjurador sofre 2 pontos de dano e faz uma jogada de ataque de Vontade contra a Força do alvo. Caso seja bem-sucedido, ele sofre 1d6+ 1 de dano devido ao toque corrosivo do conjurador e fica debilitado por 1 minuto. Se o alvo ficar incapacitado devido a este dano, ele morre instantaneamente e se torna uma gosma, deixando tudo que vestia ou carregava no espaço que ocupava.",
                target:" Uma criatura com corpo físico ao alcance do conjurador.",
                type:"AT",
                attackRoll20:"O alvo sofre 1d6 de dano adicional.",
                level:"1"
            },
            "Fender":{
                id: "M3",
                description:"O conjurador sofre 2 de dano e o alvo sofre 3d6 de dano. Caso este dano destrua o alvo, ele explode em um raio de 2 metros de um ponto em seu espaço, causando 1d6 de dano a tudo na área devido aos detritos arremessados. Cada criatura na área, que for bem-sucedida em uma jogada de desafio de Agilidade, sofre metade do dano.",
                target:" Um objeto feito de vidro, metal ou pedra no campo de visão do conjurador a média distância.",
                type:"AT",
                level:"1"
            },
            "Lacerar":{
                id: "M4",
                description:"O conjurador sofre 2 pontos de dano e faz uma jogada de ataque de Vontade contra a Agilidade do alvo. Caso seja bem-sucedido, ele sofre 3d6 de dano.",
                target:"Uma criatura no campo de visão do conjurador a curta distância.",
                type:"AT",
                attackRoll20:"O alvo sofre 2d6 de dano adicional.",
                level:"1"
            },
            "Corroer":{
                id: "M5",
                description:"O conjurador sofre 3 pontos de dano e faz uma jogada de ataque de Vontade contra a Agilidade do alvo. Caso seja bem-sucedido, ele fica debilitado por 1 minuto. Ao fim de cada rodada em que o alvo está debilitado por este efeito, ele sofre 1d6 pontos de dano.",
                target:"Uma criatura com corpo físico no campo de visão do conjurador a curta distância.",
                type:"AT",
                attackRoll20:"O alvo sofre 1d6 de dano adicional ao final de cada rodada, enquanto está debilitado por este efeito.",
                level:"2"
            },
            "Poder entrópico":{
                id: "M6",
                description:"Sofra 3 pontos de dano. Enquanto durar o efeito, as criaturas que sofrerem dano com suas magias de ataque dele sofrem 1d6 de dano adicional. Desencadeada Quando o personagem conjura uma magia de ataque que causa dano, ele pode utilizar uma ação desencadeada para conjurar esta magia, que durará até o final da rodada. Caso o alvo sofra dano da sua magia de ataque, ele sofre 2d6 de dano adicional.",
                duration:"1 minuto.",
                type:"UT",
                level:"2"
            },
            "Detonar":{
                id: "M7",
                description:"O conjurador sofre 4 pontos de dano. O alvo sofre dano igual à sua própria Saúde e explode em um raio de 4 metros de um ponto em seu espaço, causando 6d6 de dano a tudo na área devido aos detritos arremessados. Cada criatura na área, que for bem-sucedida em uma jogada de desafio de Agilidade, sofre metade do dano.",
                target:"Um objeto (que nunca tenha sido uma criatura) de Tamanho 1 ou menor no campo de visão do conjurador a média distância.",
                type:"AT",
                level:"3"
            },
            "Evaporar":{
                id: "M8",
                description:"O conjurador sofre 4 pontos de dano e faz uma jogada de ataque de Vontade contra a Agilidade do alvo. Caso seja bem-sucedido, ele sofre 6d6 de dano e começa a evaporar. Um objeto destruído por este dano evapora em uma névoa suave. Uma criatura incapacitada por este dano morre instantaneamente e se torna uma nuvem carmim, que obscurece parcialmente o espaço ocupado por 1 rodada.",
                target:"Uma criatura ou objeto com corpo físico ao alcance do conjurador.",
                type:"AT",
                attackRoll20:"O alvo sofre 2d6 de dano adicional.",
                level:"3"
            },
            "Destruir":{
                id: "M9",
                description:"O conjurador sofre 5 pontos de dano. O alvo sofre 30 pontos de dano.",
                target:"Uma criatura ou objeto de Tamanho 3 ou menor no campo de visão do conjurador a média distância.",
                type:"AT",
                level:"4"
            },
            "Desintegrar":{
                id: "M10",
                description:"O conjurador sofre 6 pontos de dano e faz uma jogada de ataque de Vontade contra a Agilidade do alvo. Caso seja bem-sucedido, ele sofre 9d6 de dano. Uma criatura incapacitada por este dano morre imediatamente e é reduzida a um pequeno monte de poeira no espaço que ocupava.",
                target:"Uma criatura ou objeto com corpo físico no campo de visão do conjurador a longa distância.",
                type:"AT",
                attackRoll20:"O alvo sofre 3d6 de dano adicional.",
                level:"5"
            }
        }
    },
    "Fogo": {
        id: "v7",
        attribute: "will",
        darkMagic: false,
        spells: {
            "Controlar chama":{
                id: "M0",
                description:"O conjurador acende ou apaga uma chama em um alvo.",
                target:"Um objeto inflamável de Tamanho 1 ou menor a curta distância.",
                type:"UT",
                level:"0"
            },
            "Projétil de chamas":{
                id: "M1",
                description:"O conjurador libera um projétil incandescente sobre o alvo. O conjurador faz uma jogada de ataque de Vontade contra a Agilidade do alvo. Caso seja bem-sucedido, ele sofre 1d6 de dano.",
                target:"Uma criatura ou objeto a longa distância.",
                type:"AT",
                attackRoll20:"O alvo sofre 1d6 de dano adicional.",
                level:"0"
            },
            "Explosão do fogo":{
                id: "M2",
                description:"Chamas saltam das suas mãos, causando 3d6 de dano a tudo na área. As criaturas na área sofrem metade do dano, caso sejam bem-sucedidas em uma jogada de desafio de Agilidade.",
                area:"Um cone, 3 metros de comprimento, originado em um ponto ao alcance do conjurador.",
                type:"AT",
                level:"1"
            },
            "Meteoro":{
                id: "M3",
                description:"O conjurador arremessa uma rocha em chamas. Quando ela atinge o alvo, ou caso encontre uma criatura ou objeto sólido antes, explode. Chamas se dispersam em uma esfera de 1 metro de raio, centrada no alvo em um ponto no espaço da criatura ou objeto, causando 2d6+2 de dano a tudo na área. As criaturas na área sofrem metade do dano, caso sejam bem-sucedidas em uma jogada de desafio de Agilidade.",
                target:"Um ponto no espaço a média distância.",
                type:"AT",
                level:"1"
            },
            "Proteção contra as chamas":{
                id: "M4",
                description:"O conjurador toca o alvo. Enquanto durar a magia, ele sofre metade do dano por fogo.",
                target:"Uma criatura ao alcance do conjurador.",
                duration:"1 hora.",
                type:"UT",
                level:"1"
            },
            "Mortalha flamejante":{
                id: "M5",
                description:"Chamas envolvem o conjurador enquanto durar a magia, iluminando um raio de 10 metros ao redor dele. As chamas são quentes, mas não ferem o conjurador nem nada que ele carrega. Enquanto durar a magia, ele sofre metade do dano por frio e não fica fatigado por exposição a temperaturas baixas. Além disso, quando uma criatura toca o conjurador ou obtém um sucesso em um ataque contra ele utilizando uma arma de combate corpo a corpo, ela sofre 1d6 de dano por fogo.",
                duration:"1 minuto",
                type:"UT",
                level:"2"
            },
            "Saraivada Incandescente": {
                id: "M6",
                description: "O conjurador lança três projéteis de fogo, divididos como ele quiser entre os alvos. Para cada projétil, ele faz uma jogada de ataque de Vontade contra a Agilidade do alvo. Caso seja bem-sucedido, o alvo sofre 1d6+1 de dano.",
                target: "Até três criaturas ou objetos a média distância.",
                attackRoll20: "O alvo sofre 1d3 de dano adicional.",
                type: "AT",
                level: 2
            },
            "Bola de fogo":{
                id: "M7",
                description:"O conjurador arremessa um globo de fogo. Quando esse globo atinge o alvo, ou caso encontre uma criatura ou objeto sólido antes, ele explode. Chamas se dispersam em uma esfera de 5 metros de raio, centrada no alvo em um ponto no espaço da criatura ou objeto, causando 5d6 de dano a tudo na área. Cada criatura na área sofre metade do dano, caso seja bem-sucedida em uma jogada de desafio de Agilidade.",
                target:"Um ponto no espaço a longa distância.",
                type:"AT",
                level:"3"
            },
            "Imolar":{
                id: "M8",
                description:"O alvo fumega e ameaça explodir em chamas. O conjurador faz uma jogada de ataque de Vontade contra a Agilidade do alvo. Caso seja bem-sucedido, o alvo sofre 4d6 de dano e pega fogo.",
                target:"Uma criatura ou objeto a média distância.",
                type:"AT",
                attackRoll20:"O alvo sofre 2d6 de dano adicional.",
                level:"3"
            },
            "Muralha de chamas":{
                id: "M9",
                description:"Chamas preenchem a área durante o efeito da magia, obscurecendo parcialmente tudo dentro e atrás delas. Criaturas ou objetos na área sofrem 3d6 de dano, quando o personagem conjura a magia ou ao entrarem na área. Ao fim de cada rodada, enquanto dura a magia, cada criatura e objeto inflamável sofre 3d6 de dano e criaturas a curta distância da borda sofrem 1d6 de dano, a não ser que obtenham sucesso em uma jogada de desafio de Força.",
                area:"Uma linha moldável com 10 metros de comprimento, 5 metros de altura e 1 metro de largura, originada de um ponto a longa distância.",
                duration:"1 minuto.",
                type:"AT",
                level:"4"
            },
            "Compelir gênio das chamas":{
                id: "M10",
                description:"No fim da rodada na qual esta magia é conjurada, o cubo alvo se torna um gênio de chamas de Tamanho 2. O conjurador não pode finalizar esta magia voluntariamente. Quando o gênio aparece, o conjurador faz uma jogada de ataque de Vontade contra a Vontade dele. O gênio se torna compelido pela duração da magia, caso a jogada seja bem-sucedida, ou se torna hostil, caso seja um fracasso.",
                target:"Um cubo de fogo com 2 metros de lado, originado de um ponto a longa distância.",
                duration:"1 minuto",
                type:"UT",
                level:"5"
            }
        }
    },
    "Natureza": {
        id: "v8",
        attribute: "will",
        darkMagic: false,
        spells: {
            "Bolotas mágicas":{
                id: "M0",
                description:"O conjurador toca os alvos, imbuindo cada um com magia que dura até o fim do efeito ou até serem usados por uma criatura. Ela pode atacar com as bolotas ao arremessá-las contra criaturas ou objetos a curta distância, fazendo uma jogada de ataque de Agilidade contra a Agilidade do alvo. Caso obtenha sucesso, ele sofre 1d3 de dano e fica lento por 1 rodada. Caso seja incapacitado por esse dano, o alvo se enraíza no chão e se transforma em um broto permanentemente.",
                target:"Até cinco bolotas, nozes ou sementes ao alcance do conjurador.",
                duration:"1 hora; consulte o efeito.",
                type:"AT",
                attackRoll20:"O alvo sofre 1d6 de dano adicional.",
                level:"0"
            },
            "Pele de carvalho":{
                id: "M1",
                description:"Enquanto durar a magia, o conjurador ganha um bônus de +2 para sua Defesa. Além disso, quando tenta se esconder em ambientes de floresta, ele faz jogadas de desafio de Agilidade com 1 dádiva.",
                duration:"1 hora",
                type:"UT",
                level:"0"
            },
            "Bagas curativas":{
                id: "M2",
                description:"O conjurador toca os alvos, imbuindo cada um com magia que dura até o fim do efeito ou até serem consumidas. Uma criatura viva pode utilizar uma ação para consumir a fruta alvo, curando uma quantidade de dano igual à metade de sua taxa de cura.",
                target:"Até três frutas, ao  alcance do conjurador.",
                duration:"8 horas; consulte o efeito.",
                type:"UT",
                level:"1"
            },
            "Exuberância":{
                id: "M3",
                description:"Ervas e cipós se espalham por uma área, que se torna terreno difícil enquanto durar a magia. Quando o efeito termina, o crescimento resseca e morre.",
                area:"Um círculo no solo com 10 metros de raio, centrado em um ponto a média distância.",
                duration:"1 hora.",
                type:"UT",
                level:"1"
            },
            "Shillelagh":{
                id: "M4",
                description:"O conjurador imbui a arma alvo com magia que dura até o fim do efeito ou até que ele o solte. Enquanto segura a arma alvo, o conjurador recebe um bônus de +2 para seu Deslocamento e ataques, também causa 1d6 de dano adicional.",
                target:"Um porrete ou cajado empunhado pelo conjurador.",
                duration:"1 hora; consulte o efeito.",
                type:"UT",
                level:"1"
            },
            "Pinhas flamejantes":{
                id: "M5",
                description:"O conjurador toca os alvos, imbuindo cada um com magia que dura até o fim do efeito ou até serem usados para atacar uma criatura. O item imbuído lança luz em um raio de 5 metros ao seu redor. Uma criatura pode atacar com os alvos ao arremessá-los contra criaturas ou objetos a média distância, fazendo uma jogada de ataque de Agilidade contra a Agilidade do alvo. Caso obtenha sucesso, ele sofre 1d6 de dano, e tudo a 1 metro dele sofre 1d3 de dano pelas faíscas.",
                target:"Até cinco pinhas, nozes ou sementes ao alcance do conjurador.",
                duration:"8 horas; consulte o efeito.",
                type:"AT",
                attackRoll20:"O alvo do ataque sofre 1d6 de dano adicional.",
                level:"2"
            },
            "Vinhas enredantes":{
                id: "M6",
                description:"Vinhas irrompem sob os alvos. Cada alvo deve obter sucesso em um teste de Agilidade ou fica imobilizado por 1 minuto. O alvo pode utilizar uma ação para remover a aflição, arrancando as vinhas.",
                target:"Até cinco criaturas a média distância.",
                type:"AT",
                level:"2"
            },
            "Caminhar pela floresta":{
                id: "M7",
                description:"O conjurador, junto com tudo que veste e carrega, fica verde-claro enquanto durar a magia. Durante o efeito, o conjurador pode entrar em um espaço ocupado por uma planta de seu Tamanho ou maior e instantaneamente sair em um espaço aberto de outra planta de seu Tamanho ou maior a média distância da planta cujo espaço ele entrou.",
                duration:"1 minuto.",
                target:"UT",
                level:"3"
            },
            "Espinheiro":{
                id: "M8",
                description:"Espinheiros com espinhos afiados como navalhas se espalham pela área, que se torna terreno difícil enquanto durar a magia. Quando o efeito termina, o espinheiro resseca e morre. Qualquer criatura que entre na área ou se mova através dela deve fazer uma jogada de desafio de Agilidade com 1 perdição, sofrendo 1d6 de dano, caso fracasse.",
                area:"Um círculo no solo com 10 metros de raio, centrado em um ponto a média distância.",
                duration:"1 minuto.",
                type:"UT",
                level:"3"
            },
            "Fúria da natureza":{
                id: "M9",
                description:"Vinhas como chicotes saltam e causam 3d6 de dano a cada alvo. Cada alvo deve fazer uma jogada de desafio de Agilidade. Caso fracasse, ele é movido 6 metros em uma direção escolhida pelo conjurador e fica imobilizado por 1 minuto. O alvo pode utilizar uma ação para fazer uma jogada de desafio de Força com 1 perdição, removendo a aflição, caso seja bem-sucedido.",
                area:"Até cinco criaturas a média distância.",
                type:"AT",
                level:"4"
            },
            "Forma do guradião de carvalho":{
                id: "M10",
                description:"O conjurador se transforma em uma poderosa árvore animada. Enquanto durar a magia, ele não pode conjurar magias, mas recebe os seguintes benefícios:<br>• Bônus de +3 para Defesa, +15 de para Saúde e seu Tamanho duplica.<br>• Faz jogadas de ataque e de desafio de Força com 1 dádiva.<br>• Seus galhos contam como armas de combate corpo a corpo que causam 3d6 de dano. <br>• Pode utilizar uma ação desencadeada em seu turno para gastar a conjuração de uma magia de Natureza. Caso faça isso, ele prolonga a duração da magia por uma quantidade de minutos igual ao nível da magia.",
                duration:"1 minuto",
                type:"UT",
                level:"5"
            }
        }
    },
    "Primitiva": {
        id: "v9",
        attribute: "will",
        darkMagic: false,
        spells: {
            "Esconder-se de animais":{
                id: "M0",
                description:"O conjurador se esconde de todos os animais enquanto durar a magia. Este efeito termina imediatamente, caso execute um ataque.",
                duration:"1 minuto; consulte o efeito.",
                type:"UT",
                level:"0"
            },
            "Fera interior":{
                id: "M1",
                description:"Os olhos do conjurador brilham, pelos cobrem seu corpo, as unhas crescem formando garras e os dentes se tornam presas. Enquanto durar a magia, ele ganha visão no escuro e um bônus de +2 no Deslocamento, seus ataques desarmados e armas naturais causam 1d6 de dano adicional.",
                duration:"1 minuto.",
                type:"UT",
                level:"0"
            },
            "Amizade animal":{
                id: "M2",
                description:"O conjurador faz uma jogada de ataque de Vontade contra a Vontade do alvo. Ele faz uma jogada de ataque com 1 dádiva, se estiver sob o efeito da magia idioma das feras. Caso a Saúde do alvo seja maior que a do conjurador, a magia fracassa e a conjuração é perdida. Caso seja bem-sucedido, o alvo fica encantado até que o conjurador complete um descanso. Ele o acompanha em suas aventuras e o ajuda da melhor maneira possível, embora permaneça sob controle do Mestre. O conjurador pode ter uma quantidade igual ao seu Poder de animais encantados desta forma. Caso a conjuração desta magia exceda essa quantidade, o efeito termina automaticamente no animal afetado há mais tempo.",
                target:"Um animal que possa ver o conjurador a curta distância.",
                type:"AT",
                attackRoll20:"O alvo fica permanentemente encantado.",
                level:"1"
            },
            "Idioma das feras":{
                id: "M3",
                description:"Enquanto durar a magia, o conjurador pode se comunicar com qualquer animal que possa ouvi-lo.",
                duration:"1 minuto.",
                type:"UT",
                level:"1"
            },
            "Convocar animal pequeno":{
                id: "M4",
                description:"Um animal pequeno ou minúsculo compelido aparece na área. O animal minúsculo pode ter uma das seguintes propriedades: escalador, nadador, venenoso ou voador. O animal é de um tipo apropriado ao ambiente no qual o personagem conjurou esta magia. Quando o efeito termina, o animal fica incapacitado, voltando para onde veio.",
                area:"Um cubo de espaço, com 1 metro de lado, originado em ponto a média distância sob uma superfície sólida.",
                type:"UT",
                level:"1"
            },
            "Convocar animal médio":{
                id: "M5",
                description:"Esta magia funciona como convocar animaL pequeno, exceto que um animal médio, pequeno ou minúsculo aparece na área. Um animal pequeno ou minúsculo pode ter uma das seguintes propriedades: escalador, nadador, venenoso ou voador.",
                area:"Um cubo de espaço, com 1 metro de lado, originado em ponto a média distância sob uma superfície sólida.",
                duration:"1 hora.",
                type:"UT",
                level:"2"
            },
            "Fera Atroz": {
                id: "M6",
                description: "O alvo se torna uma besta selvagem. Enquanto durar a magia, o Tamanho do alvo aumenta para 1 ou aumenta em 1, caso seja de Tamanho 1 ou maior, seus ataques com golpes desarmados ou armas naturais causam 1d6 de dano adicional.",
                target: "O conjurador ou um animal a curta distância.",
                duration: "1 minuto",
                type: "UT",
                level: 2
            },
            "Bote":{
                id: "M7",
                description:"O conjurador se desloca até o dobro de seu Deslocamento. A qualquer momento durante esse movimento, ele pode fazer um ataque desarmado ou com uma arma natural contra um alvo a seu alcance, utilizando Vontade no lugar do atributo que o ataque utilizaria normalmente. Caso seja bem-sucedido, o alvo sofre o dano do ataque mais 2d6 de dano adicional e fica prostrado.",
                requisites:"O conjurador deve estar sob efeito da magia fera interior.",
                type:"AT",
                level: 3
            },
            "Convocar animal grande":{
                id: "M8",
                description:"Esta magia funciona como convocar animaL pequeno, exceto que um animal grande, médio ou pequeno aparece na área. Um animal médio ou pequeno pode ter uma dos seguintes propriedades: escalador, nadador, venenoso ou voador.",
                area:"Um cubo de espaço, com 2 metros de lado, originado em ponto a média distância sob uma superfície sólida.",
                duration:"1 hora.",
                type:"UT",
                level:"3"
            },
            "Chamado da selva":{
                id: "M9",
                description:"Os alvos assumem características bestiais. Enquanto durar a magia, cada alvo recebe um bônus de +10 para Saúde e +2 para Deslocamento, e causa 1d6 de dano adicional com seus ataques utilizando golpes desarmados e armas naturais.",
                target:"Até cinco criaturas a curta distância.",
                duration:"1 minuto.",
                type:"UT",
                level:"4"
            },
            "Convocar animal enorme":{
                id: "M10",
                description:"Esta magia funciona como convocar animaL pequeno, com exceção de que um animal enorme, grande ou médio aparece na área. Um animal grande ou médio pode ter uma das seguintes propriedades: escalador, nadador, venenoso ou voador.",
                area:"Um cubo de espaço, com 3 metros de lado, originado em ponto a média distância sob uma superfície sólida.",
                duration:"1 hora.",
                type:"UT",
                level:"5"
            }
        }
    },
    "Tempestade": {
        id: "v10",
        attribute: "will",
        darkMagic: false,
        spells: {
            "Choque":{
                id: "M0",
                description:"O conjurador faz uma jogada de ataque de Vontade contra a Agilidade do alvo. O conjurador faz a jogada de ataque com 1 dádiva, se o alvo estiver vestindo ou for feito de metal. Caso seja bem-sucedido, ele sofre 1d6 de dano.",
                target:"Uma criatura a curta distância.",
                type:"AT",
                attackRoll20:"O alvo também fica pasmo até o fim da rodada.",
                level:"0"
            },
            "Névoa":{
                id: "M1",
                description:"Névoa se espalha e obscurece parcialmente a área enquanto durar a magia ou até ser dispersada pelo vento.",
                area:"Um cilindro com 3 metros de altura e 5 metros de raio, centrado em um ponto a média distância.",
                duration:"1 hora; consulte o efeito.",
                type:"UT",
                level:"0"
            },
            "Chama de Santa Astrid":{
                id: "M2",
                description:"Chamas verdes inofensivas envolvem os alvos enquanto durar a magia. Cada alvo emite luz em um raio de 1 metro e não pode se tornar invisível ou escondido dos que podem vê-lo, criaturas fazem jogadas de ataque contra ele com 1 dádiva.",
                target:"Até três criaturas ou objetos a curta distância.",
                duration:"1 minuto.",
                type:"UT",
                level:"1"
            },
            "Névoa congelante":{
                id: "M3",
                description:"Névoa se espalha e obscurece parcialmente a área enquanto durar a magia ou até ser dispersa pelo vento. O chão na área se torna escorregadio e é considerado terreno difícil até o fim do efeito. Qualquer criatura na área quando a magia é conjurada ou ao fim da rodada enquanto estiver ativa deve fazer uma jogada de desafio de Força. Caso fracasse, ela sofre 1d3 de dano e fica lenta por 1 rodada.",
                area:"Um cilindro com 3 metros de altura e 5 metros de raio, centrado em um ponto a média distância.",
                duration:"1 minuto; consulte o efeito.",
                type:"AT",
                level:"1"
            },
            "Raio bifurcado":{
                id: "M4",
                description:"Para cada um deles, o conjurador faz uma jogada de Vontade contra Agilidade do alvo. O conjurador faz a jogada de ataque com 1 dádiva, se o alvo estiver vestindo ou for feito de metal. Caso seja bem-sucedido, ele sofre 1d6+2 de dano.",
                target:" Até duas criaturas ou objetos a curta distância de cada uma e a média distância do conjurador.",
                type:"AT",
                attackRoll20:"O alvo sofre 1d6 de dano adicional.",
                level:"1"
            },
            "Convocar relâmpago":{
                id: "M5",
                description:"Um relâmpago vindo do céu atinge o alvo e causa 3d6+5 de dano a tudo num raio de 3 metros daquele ponto. Cada criatura que sofre dano por este efeito deve fazer uma jogada de desafio de Força. Ela se torna surda por 1 hora, caso fracasse, ou sofre metade do dano, caso seja bem-sucedida.<br><b>Sacrifício</b> O conjurador pode gastar uma conjuração desta magia para conjurar raio bifurcado.",
                requisites:"O conjurador deve estar a céu aberto.",
                target:"Um ponto no solo a distância.",
                type:"AT",
                level:"2"
            },
            "Névoa venenosa":{
                id: "M6",
                description:"Névoa arroxeada se espalha e obscurece severamente a área enquanto durar a magia ou até ser dispersa pelo vento. A névoa é mais pesada que o ar, portanto ela adentra rachaduras e aberturas no chão abaixo dela. Ao fim de cada rodada de duração da magia, o jogador joga um d6. Se o número for par, a nuvem se move a metade do resultado em metros para longe do conjurador. Quando a névoa surge e ao fim de cada rodada enquanto está ativa, cada criatura na área deve obter sucesso em uma jogada de desafio de Força ou sofre 1d6 de dano e fica envenenada por 1 rodada. Enquanto estiver envenenada por este motivo, ela também fica imobilizada.",
                area:"Um cilindro com 2 metros de altura e 5 metros de raio, centrado em um ponto a média distância.",
                duration:"1 minuto; consulte o efeito.",
                type:"AT",
                level:"2"
            },
            "Chuva de granizo":{
                id: "M7",
                description:"Granizo cai de nuvens que se espalham pela área e permanecem enquanto durar a magia, obscurecendo-a parcialmente. Enquanto durar a magia, criaturas na área e a até 5 metros de sua borda ficam surdas. O chão se torna terreno difícil até que o granizo derreta. Quando a magia é conjurada, e ao fim de cada rodada enquanto estiver ativa, o granizo causa 3d6 de dano a tudo na área que não estiver protegido. Cada criatura que sofre dano por este efeito, deve fazer uma jogada de desafio de Agilidade. A criatura fica prostrada, caso fracasse, ou sofre metade do dano, caso seja bem-sucedida.",
                area:"Um cilindro com 2 metros de altura e 5 metros de raio, centrado em um ponto a longa distância.",
                duration:"1 minuto.",
                type:"AT",
                level:"3"
            },
            "Relâmpago":{
                id: "M8",
                description:"O relâmpago viaja por 5d6 metros pela área. Caso encontre um objeto sólido antes de encontrar o fim da linha, ele ricocheteia e viaja de volta para o conjurador em uma linha reta até a distância remanescente. O relâmpago causa 5d6 de dano a tudo na área. Cada criatura na área deve fazer uma jogada de desafio de Agilidade, caso seja feita de metal ou esteja utilizando armadura pesada, ela adiciona 1 perdição a jogada. Uma criatura no caminho de um relâmpago que tenha ricocheteado faz a jogada duas vezes. Caso seja bem-sucedida, ela sofre metade do dano.",
                area:" Uma linha de 30 metros de comprimento e 1 metro de largura, originada em um ponto ao alcance do mago.",
                type:"AT",
                level:"3"
            },
            "Chuva ácida":{
                id: "M9",
                description:"Chuva verde ácida cai de nuvens que se espalham pela área e permanecem enquanto durar a magia, obscurecendo-a parcialmente. Quando a magia é conjurada, e ao fim de cada rodada enquanto estiver ativa, a chuva causa 5d6 de dano a tudo na área que não estiver protegido. Cada criatura que sofre dano por este efeito deve fazer uma jogada de desafio de Força, sofrendo metade do dano, caso seja bem-sucedida.",
                area:"Um cilindro com 2 metros de altura e 5 metros de raio, centrado em um ponto a longa distância.",
                duration:"1 minuto.",
                type:"AT",
                level:"4"
            },
            "Raio saltador":{
                id: "M10",
                description:"O conjurador arremessa um relâmpago no alvo. Ele faz uma jogada de ataque de Vontade contra a Agilidade do alvo com 1 dádiva, se o alvo estiver vestindo ou for feito de metal. Caso seja bem-sucedido, ele sofre 8d6 de dano, e o conjurador pode repetir o ataque contra um alvo diferente a longa distância do primeiro. Cada vez que fizer isso, deve ser escolhido um alvo que ainda não tenha sido atacado com a conjuração desta magia, e reduzir o dano causado em 2d6. Quando o número de dados de dano cai para 0, o efeito termina.",
                target:"Uma criatura a longa distância; consulte o efeito.",
                type:"AT",
                level:"5"
            }                
        }
    },
    "Terra": {
        id: "v11",
        attribute: "will",
        darkMagic: false,
        spells: {
            "Cravo de terra":{
                id: "M0",
                description:"Um cravo afiado sai do chão sob o alvo. O conjurador faz uma jogada de ataque de Vontade contra a Agilidade do alvo. Caso a criatura fracasse, ela sofre 1d6 pontos de dano e fica prostrada.",
                target:"Uma criatura no solo a curta distância.",
                type:"AT",
                attackRoll20:"O alvo sofre 1d6 de dano adicional.",
                level:"0"
            },
            "Esculpir terra e pedra":{
                id: "M1",
                description:"O conjurador pode moldar o alvo como se fosse feito de argila macia, depois disso, ele volta à dureza normal.",
                target:"Um objeto de Tamanho 1 ou menor, feito de terra e pedra, ao alcance do conjurador.",
                duration:"Permanente",
                type:"UT",
                level:"0"
            },
            "Armadura de pedra":{
                id: "M2",
                description:"Pedras se dispersam até cobrirem o conjurador completamente. Enquanto durar a magia, jogadas de ataque contra a Defesa, Força ou Agilidade do conjurador são feitas com 1 perdição e ele sofre metade do dano por armas. Quando o efeito termina, as pedras que cobrem o conjurador explodem em uma esfera de 1 metro centrada em um ponto ao seu alcance, causando 1d6 de dano por rodada de concentração na magia a tudo na área, exceto ao próprio conjurador. Cada criatura na área, que for bem-sucedida em uma jogada de desafio de Agilidade, sofre metade do dano.",
                duration:"1 minuto.",
                type:"UT",
                level:"1"
            },
            "Lâminas rochosas":{
                id: "M3",
                description:"O conjurador arremessa estilhaços de pedra que causam 2d6 de dano a tudo na área. Cada criatura na área, que for bem-sucedida em uma jogada de desafio de Agilidade, sofre metade do dano. Caso fracasse, a criatura sofre um ferimento hemorrágico e 1d6 de dano ao fim de cada turno, até que cure algum ponto de dano ou outra criatura utilize uma ação para estancar o sangramento.",
                area:"Um cone de 3 metros de comprimento, originado em um ponto ao alcance do conjurador.",
                type:"AT",
                level:"1"
            },
            "Tremor":{
                id: "M4",
                description:"O chão treme e se eleva. Qualquer criatura parada na área, com exceção do conjurador, ou que se mova para dentro dela, deve fazer uma jogada de desafio de Agilidade. Caso fracasse, a criatura fica prostrada e não pode se levantar enquanto durar a magia.",
                area:"Um círculo no solo com 4 metros de raio centrado em um ponto ao alcance do conjurador.",
                duration:"1 rodada.",
                type:"AT",
                level:"1"
            },
            "Avalanche":{
                id: "M5",
                description:"O conjurador eleva a camada superficial do solo em um círculo e a arremessa em um cone. O solo em ambas as áreas se torna terreno difícil, até que os detritos sejam retirados. Tudo no cone sofre 4d6 de dano. Cada criatura na área, que for bem-sucedida em uma jogada de desafio de Agilidade, sofre metade do dano.",
                area:"Um círculo no solo, com 12 metros de raio, centrado em um ponto ao alcance do conjurador e um cone, com 5 metros de comprimento, originado em um ponto ao alcance do conjurador.",
                type:"AT",
                level:"2"
            },
            "Moldar terra e pedra":{
                id: "M6",
                description:"Quando conjura essa magia, o conjurador deve se concentrar e manter contato com a área por 1 minuto. Ao fim do período, ele molda a terra e a pedra na área como se fossem feitas de argila macia. Após isso, o material volta a sua dureza normal. O conjurador pode conjurar esta magia para abrir buracos em paredes de pedra, bloquear portas, criar armas de pedra ou limpar detritos em uma passagem.",
                area:"Um cubo de terra ou pedra, de 4 metros de lado, originado em um ponto ao alcance do conjurador.",
                duration:"Permanente; consulte o efeito.",
                type:"UT",
                level:"2"
            },
            "Erupção":{
                id: "M7",
                description:"O chão entra em erupção, arremessando cascalhos ao ar que caem e causam 5d6 de dano a tudo na área. Criaturas e objetos na área são movidos 1d6 metros para longe do ponto de origem. Cada criatura deve fazer uma jogada de desafio de Força. Caso fracasse, fica prostrado. Caso seja bem-sucedida, apenas sofre metade do dano. Depois do efeito, o solo a 5 metros do ponto de origem é preenchido com detritos e se torna terreno difícil até que seja limpo.",
                area:"Um cilindro de 10 metros de altura e 2 metros de raio centrado em um ponto no solo a média distância.",
                type:"AT",
                level:"3"
            },
            "Prender ao chão":{
                id: "M8",
                description:"A gravidade repentinamente se intensifica na área, que se torna terreno difícil enquanto a magia está em efeito. Cada criatura presente na área ou que entre nela deve fazer uma jogada de desafio de Força com 1 perdição; caso fracasse, fica prostrada e imobilizada enquanto durar a magia. Se estiver imobilizada por este efeito, a criatura não pode se levantar. Caso esteja voando, a criatura cai e sofre dano dobrado por causa da aterrissagem.",
                area:"Um cubo, com 10 metros de lado, originado em um ponto a longa distância.",
                duration:"1 minuto.",
                type:"AT",
                level:"3"
            },
            "Terremoto":{
                id: "M9",
                description:"O solo se agita e se eleva violentamente, se tornando terreno difícil enquanto a magia está em efeito. Quando o personagem conjura esta magia e ao final de cada turno de duração, cada criatura na área deve fazer uma jogada de desafio de Agilidade. Caso fracasse, a criatura sofre 1d6 de dano e fica prostrada. Além disso, quando o personagem conjura a magia e ao final de cada turno de duração, qualquer estrutura em contato com a área sofre 2d6 de dano. Uma estrutura destruída por este dano desmorona e tudo dentro ou embaixo dela sofre 4d6+10 de dano. Criaturas sobre essas estruturas podem sofrer dano por queda, caso haja desmoronamento.",
                area:"Um círculo no solo com 20 metros de raio centrado em um ponto a longa distância.",
                duration:"1 minuto.",
                type:"AT",
                level:"4"
            },
            "Compelir gênio da terra":{
                id: "M10",
                description:"No fim da rodada na qual esta magia é conjurada, o alvo se torna um gênio de terra de Tamanho 2. O conjurador não pode finalizar essa magia voluntariamente. Quando o efeito termina, o gênio se desfaz, transformando o chão em seu espaço em terreno difícil. Quando o gênio aparece, o conjurador faz uma jogada de ataque de Vontade contra a Vontade dele. Caso seja bem-sucedido, o gênio se torna compelido pela duração da magia. Caso seja um fracasso, ele se torna hostil.",
                area:"Um cubo de terra, com 2 metros de lado, originado de um ponto a longa distância.",
                duration:"1 minuto.",
                type:"UT",
                level:"5"
            }
        }
    },
    "Teurgia": {
        id: "v12",
        attribute: "will",
        darkMagic: false,
        spells: {
            "Acusar":{
                id: "M0",
                description:"O conjurador apresenta seu símbolo sagrado e faz uma jogada de ataque de Vontade contra a Vontade do alvo. Caso seja bem-sucedido, ele fica assustado por 1 rodada.",
                target:"Uma criatura a curta distância que possa ver e ouvir o conjurador.",
                type:"AT",
                attackRoll20:"O alvo fica prostrado.",
                level:"0"
            },
            "Criar símbolo sagrado":{
                id: "M1",
                description:"Um símbolo sagrado brilhante surge na mão do conjurador e se mantém pela duração da magia ou até ser derrubado. O símbolo sagrado fornece uma dádiva para as jogadas de ataque com magias de Teurgia do conjurador.",
                duration:"1 minuto; consulte o efeito.",
                type:"UT",
                level:"0"
            },
            "Benção":{
                id: "M2",
                description:"O conjurador toca cada um e concede sua benção. Enquanto durar a magia, o alvo faz jogadas de ataque e de desafio com 1 dádiva e não pode ser assustado.",
                target:"Qualquer quantidade de criaturas ao alcance do conjurador.",
                duration:"1 minuto.",
                type:"UT",
                level:"1"
            },
            "Censura":{
                id: "M3",
                description:"O conjurador apresenta seu símbolo sagrado, um pedaço de escritura ou algum tipo de representação física de sua fé e libera uma onda de poder sagrado que se dispersa pela área. Cada demônio, espírito, fada, diabo e morto-vivo na área deve fazer uma jogada de desafio de Vontade. Caso fracasse, a criatura fica assustada por 1 minuto.",
                area:" Uma esfera com 5 metros de raio, centrada em um ponto ao alcance do conjurador.",
                type:"AT",
                level:"1"
            },
            "Solo sagrado":{
                id: "M4",
                description:"Um domo transparente e imóvel brilha enquanto durar a magia. Nada de fora pode atravessá-lo, e a sua área interna está excluída dos efeitos de outras magias. Criaturas e objetos dentro do domo estão escondidos de todos fora dele, com exceção do conjurador. Uma criatura dentro do domo pode sair livremente, mas uma vez que faz isso não pode retornar. Este efeito termina imediatamente, caso uma criatura dentro do domo execute um ataque.",
                area:"Um domo transparente e imóvel brilha enquanto durar a magia. Nada de fora pode atravessá-lo, e a sua área interna está excluída dos efeitos de outras magias. Criaturas e objetos dentro do domo estão escondidos de todos fora dele, com exceção do conjurador. Uma criatura dentro do domo pode sair livremente, mas uma vez que faz isso não pode retornar. Este efeito termina imediatamente, caso uma criatura dentro do domo execute um ataque.",
                duration:"Concentração, até 1 minuto; consulte o efeito.",
                type:"UT",
                level:"1"
            },
            "Martelo de deus":{
                id: "M5",
                description:"Um martelo brilhante dourado surge no alvo e flutua. Enquanto durar a magia, o conjurador pode utilizar uma ação desencadeada em seu turno para mover o martelo até 10 metros e atacar uma criatura a 1 metro dele. O conjurador faz uma jogada de ataque de Vontade com 1 dádiva contra a Defesa do alvo. Caso seja bem-sucedido, o alvo sofre 2d6 de dano.",
                target:"Um ponto no espaço a média distância.",
                duration:"1 minuto.",
                type:"AT",
                attackRoll20:"O alvo 2d6 de danoadicional.",
                level:"2"
            },
            "Revelação":{
                id: "M6",
                description:"O conjurador toca o alvo, fornecendo sete revelações que duram até o fim da magia ou até que a última seja gasta. Quando o alvo faz uma jogada de ataque ou desafio, ele pode gastar quantas revelações quiser até o máximo restante. Para cada revelação gasta, o alvo faz a jogada com 2 dádivas.",
                target:"Uma criatura ao alcance do conjurador.",
                duration:"1 minuto; consulte o efeito.",
                type:"UT",
                level:"2"
            },
            "Auxílio divino":{
                id: "M7",
                description:"O conjurador toca o alvo, fornecendo sete revelações que duram até o fim da magia ou até que a última seja gasta. Quando o alvo faz uma jogada de ataque ou desafio, ele pode gastar quantas revelações quiser até o máximo restante. Para cada revelação gasta, o alvo faz a jogada com 2 dádivas.",
                target:"Criaturas escolhidas pelo conjurador a curta distância.",
                duration:"1 hora.",
                type:"UT",
                level:"3"
            },
            "Fúria de deus":{
                id: "M8",
                description:"Um relâmpago atinge o alvo e causa 2d6+2 de dano a cada criatura presente até 1d6 metros daquele ponto. Cada criatura que sofre dano por este efeito deve fazer uma jogada de desafio de Agilidade. Ela se torna pasma por 1 rodada, caso fracasse ou sofre metade do dano, caso seja bem-sucedida.",
                target:"Um ponto no solo a média distância.",
                type:"AT",
                level:"3"
            },
            "Avatar":{
                id: "M9",
                description:"Poder divino flui dentro do conjurador. Enquanto durar a magia, ele sofre metade do dano de todas as fontes, faz jogadas de ataque com 1 dádiva e causa 2d6 de dano adicional com ataques por armas.",
                duration:"1 minuto",
                type:"UT",
                level:"4"
            },
            "Fogo dos céus":{
                id: "M10",
                description:"Chamas se dispersam pela área e causam 7d6 de dano a cada criatura nela. Caso uma criatura seja bem-sucedida em uma jogada de desafio de Vontade, ela sofre metade do dano. Qualquer criatura incapacitada por este dano desaparece, apagada da trama da realidade.",
                area:" Um cilindro vertical com 25 metros de altura e 5 metros de raio, centrado em um ponto no solo a extrema distância.",
                type:"AT",
                level:"5"
            }
            
        }
    },
    "Transformação": {
        id: "v13",
        attribute: "will",
        darkMagic: false,
        spells: {
            "Forma fluida":{
                id: "M0",
                description:"Enquanto durar a magia, o conjurador pode se mover por espaços ocupados por outras criaturas independentemente de seu Tamanho.",
                duration:"1 minuto.",
                type:"UT",
                level:"0"
            },
            "Máscara":{
                id: "M1",
                description:"O conjurador altera a aparência de seu corpo, de maneira que se pareça com outra pessoa enquanto durar a magia ou até ficar inconsciente. Ele pode aumentar ou diminuir sua altura em até 30 cm, aumentar ou diminuir seu peso em 25% ou fazer outras alterações cosméticas que desejar. Nenhum dos atributos, características e outras habilidades mudam, o conjurador não pode assumir uma ancestralidade diferente.",
                duration:"1 hora; consulte o efeito.",
                type:"UT",
                level:"0"
            },
            "Forma animal":{
                id: "M2",
                description:"O conjurador assume a forma de um animal médio, pequeno ou minúsculo enquanto durar a magia. Caso assuma a forma de um animal minúsculo, ele pode ganhar uma das seguintes propriedades: escalador, nadador ou voador.",
                duration:"1 minuto.",
                type:"UT",
                level:"1"
            },
            "Passo amplo":{
                id: "M3",
                description:"Enquanto durar a magia, o conjurador recebe um bônus de +4 para seu Deslocamento e pode utilizar uma ação para pular 3d6 metros, aterrissando em segurança.",
                duration:"1 minuto.",
                type:"UT",
                level:"1"
            },
            "Revoada":{
                id: "M4",
                description:"O conjurador se desfaz e se torna uma nuvem de estorninhos que voa o dobro de seu Deslocamento sem desencadear ataques livres; ele pode se mover por espaços ocupados por outras criaturas independentemente do tamanho. Ao fim deste movimento, ele retorna a forma normal.<br><b>Desencadeada<b/> O conjurador pode utilizar uma ação desencadeada para conjurar esta magia quando sofrer dano. Caso faça isso, ele sofre metade do dano do ataque desencadeador, mas se move apenas metade do seu Deslocamento como descrito acima.",
                type:"UT",
                level:"1"
            },
            "Forma animal aprimorada":{
                id: "M5",
                description:"O conjurador assume a forma de um animal grande, médio, pequeno ou minúsculo enquanto durar a magia. Caso assuma a forma de um animal pequeno ou minúsculo, ele pode ganhar uma das seguintes propriedades: escalador, nadador ou voador.",
                duration:"1 hora.",
                type:"UT",
                level: 2
            },
            "Forma de objeto":{
                id: "M6",
                description:"O conjurador assume a forma de um objeto de seu Tamanho ou menor enquanto durar a magia, se tornando fisicamente indistinguível do objeto cuja forma assumiu. Ele toma todas as decisões sobre como sua nova forma se parece. Até que o efeito termine, o conjurador não pode falar e pode utilizar ações apenas para se concentrar na magia. No entanto, ele pode perceber o ambiente utilizando seus sentidos normais. Este efeito termina imediatamente, caso o conjurador sofra qualquer dano.",
                duration:"Concentração, até 8 horas.",
                type:"UT",
                level:"2"
            },
            "Acelerar cura":{
                id: "M7",
                description:"O conjurador deve se concentrar por 1 minuto enquanto conjura essa magia. Caso sua concentração não seja interrompida, ao fim deste período, o conjurador cura dano igual a duas vezes sua taxa de cura e remove qualquer uma das seguintes aflições de si mesmo: doente, fatigado ou envenenado.",
                type:"UT",
                level:"3"
            },
            "Forma de névoa":{
                id: "M8",
                description:"O conjurador assume a forma de névoa enquanto durar a magia. Até que o efeito termine, o ele tem todos os seguintes benefícios e penalidades: <br>• O conjurador é imune a dano. <br>• O conjurador ignora efeitos de jogadas de ataque contra sua Força ou que exijam uma jogada de desafio de Força. <br>• O conjurador pode voar e se mover por aberturas largas o bastante para permitir a passagem de ar, embora não possa se mover por espaços preenchidos por líquidos — eles funcionam como objetos sólidos. <br>• O conjurador não pode cair. Ele está imune às aflições agarrado, imobilizado, lento e prostrado. <br>• O conjurador não pode falar, nem utilizar ações, magias e objetos. <br>Ao fim de cada rodada, quando está em uma área de vento, o conjurador é movido 2d6 metros na direção que o vento sopra e sofre uma penalidade cumulativa de -5 à sua Saúde. A penalidade se mantém até que retorne a forma normal.",
                duration:"Concentração, até 1 hora.",
                type:"UT",
                level:"3"
            },
            "Mettalicus":{
                id: "M9",
                description:"O corpo do conjurador se torna de metal. Enquanto durar a magia, sua Defesa se torna 20 e ele ganha um bônus de +10 para sua Saúde, ficando imune às aflições adormecido, cego, doente, envenenado, fatigado e surdo, além de não poder ser movido contra sua vontade. O conjurador também sofre metade do dano por armas, fogo e frio. No entanto, ele também fica lento, e não pode beber, comer ou nadar.",
                duration:"1 minuto.",
                type:"UT",
                level:"4"
            },
            "Forma de animal maior":{
                id: "M10",
                description:"O conjurador assume a forma de um animal enorme, grande, médio, pequeno ou minúsculo enquanto durar a magia. Caso assuma a forma de um animal médio, pequeno ou minúsculo, ele pode ganhar uma das seguintes propriedades: escalador, nadador ou voador.",
                duration:"1 minuto.",
                type:"UT",
                level:"5"
            }
        }
    },
    "Vida": {
        id: "v14",
        attribute: "will",
        darkMagic: false,
        spells: {
            "Cura menor":{
                id: "M0",
                description:"O conjurador toca o alvo, curando dano igual à metade da taxa de cura do alvo.",
                target:"Uma criatura ao alcance conjurador.",
                duration:"UT",
                level:"0"
            },
            "Sentir vida":{
                id: "M1",
                description:"O conjurador sabe a localização de quaisquer criaturas vivas na área. Elas não podem se esconder dele enquanto durar a magia.",
                area:"Uma esfera com 5 metros de raio, centrada em um ponto no espaço do conjurador.",
                duration:"1 minuto.",
                type:"UT",
                level:"0"
            },
            "Cura leve":{
                id: "M2",
                description:"O conjurador toca o alvo, que cura uma quantidade de dano igual à sua própria taxa de cura.",
                target:"Uma criatura ao alcance do conjurador.",
                type: "UT",
                level: "1"
            },
            "Fonte de vida":{
                id: "M3",
                description:"Energias curativas se espalham pela área e se movem junto com o conjurador enquanto durar a magia. Toda vez que uma criatura viva na área curar dano, ela cura uma quantidade de dano adicional igual ao Poder do conjurador.",
                area:"Uma esfera com 2 metros de raio, centrada em um ponto ao alcance do conjurador.",
                duration:"1 minuto.",
                type: "UT",
                level: "1"
            },
            "Tratamento":{
                id: "M4",
                description:"O conjurador toca o alvo, fornecendo um dos seguintes benefícios: <br>• Remove uma das seguintes aflições do alvo: doente, fatigado, debilitado ou envenenado. <br>• Remove 1 ponto de Insanidade do alvo. <br>• Remove qualquer penalidade contra a Saúde do alvo. <br>• O alvo cura uma quantidade de dano igual à metade de sua taxa de cura.",
                target:"Uma criatura ao alcance do conjurador.",
                type:"UT",
                level:"1"
            },
            "Cura moderadora":{
                id: "M5",
                description:"O conjurador toca o alvo, que cura uma quantidade de dano igual ao dobro de sua própria taxa de cura.",
                target:"Uma criatura ao alcance do conjurador.",
                type:"UT",
                level:"2"
            },
            "Explosão de vitalidade":{
                id: "M6",
                description:"Cada alvo cura uma quantidade de dano igual à metade de sua taxa de cura.",
                target:"Até três criaturas vivas a curta distância.",
                type:"UT",
                level:"2"
            },
            "Cura Maior": {
                id: "M7",
                description: "O conjurador toca o alvo, que cura uma quantidade de dano igual ao triplo de sua própria taxa de cura.",
                target: "Uma criatura ao alcance do conjurador.",
                type: "UT",
                level: 3
            },
            "Tratamento maior":{
                id: "M8",
                description:"O conjurador toca cada um dos alvos, fornecendo um dos seguintes benefícios (ele pode escolher um benefício diferente para cada alvo): <br>• Remove uma das seguintes aflições do alvo: doente, fatigado, debilitado ou envenenado. <br>• Remove 1 ponto de Insanidade do alvo. <br>• Remove qualquer penalidade contra a Saúde do alvo. <br>• O alvo cura uma quantidade de dano igual à sua taxa de cura.",
                target:"Até três criaturas ao alcance do conjurador.",
                type:"UT",
                level:"3"
            },
            "Cura total":{
                id: "M9",
                description:"O conjurador toca o alvo, curando todos os seus pontos de dano.",
                target:"O conjurador toca o alvo, curando todos os seus pontos de dano.",
                type:"UT",
                level:"4"
            },
            "Ressurreição":{
                id: "M10",
                description:"O conjurador toca o alvo. Ele deve se concentrar por 1 hora, durante esse tempo o conjurador deve manter contato físico com o alvo. Caso a concentração não seja interrompida, ele talvez possa voltar à vida. Caso a alma do alvo resida no Submundo, ela retorna ao corpo e ele volta à vida. O alvo cura 1 ponto de dano e fica fatigado e debilitado, até que complete um descanso. Caso a alma do alvo resida no Inferno, o conjurador faz uma jogada de desafio de Vontade com uma quantidade de perdições igual à Corrupção do alvo. Caso seja bem-sucedido, ele volta à vida como descrito acima. Caso fracasse, a alma está completamente perdida. Ela não pode retornar ao corpo por meio de outras conjurações desta mesma magia.<br><b>Sacrifício<b> O conjurador pode gastar uma conjuração desta magia para conjurar cura total",
                target:"Uma criatura morta a não mais de 24 horas ao alcance do conjurador.",
                type:"UT",
                level: "5"
            }              
        }
    },
    "Alma": {
        id: "v15",
        attribute: "will",
        darkMagic: false,
        spells: {
            "Tirar Aflição": {
                id: "M0",
                description: "Faça uma teste de desafio de vontade. Se for bem-sucedido, você remove uma aflição sua.<br><b>Desencadeada</b> Quando você iria ganhar uma aflição, você pode usar uma ação desencadeada para usar essa magia. Faça o teste de desafio de vontade com 1 perdição. Se for bem-sucedido, você não ganha a aflição.",
                type: "UT",
                level: 0
            },
            "Relembrar Sucesso Passado": {
                id: "M1",
                description: "Na próxima vez que você fizer uma jogada de ataque ou de desafio antes da magia acabar, você faz a jogada com 2 dádivas.",
                duration: "1 rodada",
                type: "UT",
                level: 0
            },
            "Negar Dano": {
                id: "M2",
                description: "Pela duração, toda vez que você for levar dano, reduza o dano por 1d3(mínimo 0).<br><b>Desencadeada</b> Quando você iria levar dano, você pode usar uma ação desencadeada para usar essa magia. Você reduz o dano que você tomaria para 0, e a magia acaba.",
                duration: "1 minuto",
                type: "UT",
                level: 1
            },
            "Abrir o Terceiro Olho": {
                id: "M3",
                description: "Pela duração, suas jogadas de ataque ignoram perdições impostas por obscurecimento ou invisibilidade. Além disso, você não pode ficar cego.",
                duration: "1 minuto",
                type: "UT",
                level: 1
            },
            "Acertar a Alma": {
                id: "M4",
                description: "Quando você usa essa magia, você ataca o alvo com um ataque desarmado. Você faz a jogada de ataque com 3 dádivas e você pode substituir o atributo que você geralmente usa para fazer esse ataque pela vontade. Se for bem-sucedido, o alvo toma 1d6 de dano extra. Se o alvo estiver vivo, for feito de carne e sangue e tem uma alma, o alvo também ganha 1 de insanidade e fica debilitado por 1 rodada.",
                target: "Uma criatura ao seu alcance",
                attackRoll20: "Aumente o dano extra para 2d6",
                type: "AT",
                level: 1
            },
            "Ataque Devastador": {
                id: "M5",
                description: "Quando você usa essa magia, você ataca o alvo com um ataque desarmado. Você faz a jogada de ataque com 3 dádivas e você pode substituir o atributo que você geralmente usa para fazer esse ataque pela vontade. Se for bem-sucedido, o alvo toma 2d6 de dano extra. Se o alvo for um constructo ou um objeto, aumente o dano extra em 2d6.",
                target: "Uma criatura ou objeto ao seu alcance",
                attackRoll20: "Aumente o dano extra para 3d6",
                type: "AT",
                level: 2
            },
            "Andar pelos Céus": {
                id: "M6",
                description: "Pela duração, você se move voando. Ao final de cada rodada, você pode usar uma ação desencadeada para extender a duração por 1 rodada(até um máximo de 1 minuto).",
                duration: "1 rodada",
                type: "UT",
                level: 2
            },
            "Entrar em Fase": {
                id: "M7",
                description: "Pela duração, você toma metade do dano por armas e seus ataques dão metade do dano. Você pode se mover por objetos sólidos e outras criaturas e você ignora os efeitos de se mover por terreno difícil.",
                duration: "1 minuto",
                type: "UT",
                level: 3
            },
            "Velocidade": {
                id: "M8",
                description: "Quando você usa essa magia, você pode usar outra ação no mesmo turno. Pela duração, quando você faz um turno rápido, você pode se mover até o seu deslocamento e usar uma ação em qualquer momento do seu movimento. Quando você faz um turno lento, você pode se mover até o dobro do seu deslocamento e usar uma ação a qualquer momento do seu deslocamento. Você pode usar 2 ações desencadeadas por rodada e você coloca uma perdição nas jogadas de ataque feitas contra você.",
                duration: "1 minuto",
                type: "UT",
                level: 3
            },
            "Partir Alma": {
                id: "M9",
                description: "Quando você usa essa magia, você ataca o alvo com um ataque desarmado. Você faz a jogada de ataque com 3 dádivas e você pode substituir o atributo que você geralmente usa para fazer esse ataque pela vontade. Se for bem-sucedido, o alvo toma 2d6 de dano extra. Se o alvo estiver vivo, for mortal e for feito de carne e sangue, o alvo também ganha 2d6 de insanidade e precisa tirar um sucesso em um teste de vontade ou fica atordoado.",
                target: "Uma criatura ou objeto ao seu alcance",
                attackRoll20: "Aumente o dano extra para 4d6",
                type: "AT",
                level: 4
            },
            "Recuperação Transcendental": {
                id: "M10",
                description: "Você usa todo o poder da sua alma para recuperar sua saúde e vitalidade. Você cura todo dano, remove todas as aflições, remove todas as penalidades a atributos e características, e reduz sua insanidade em 1d3.<br><b>Pós-efeito</b> Por 1 minuto depois de usar magia, você faz jogadas de ataque e desafio com 1 dádiva.",
                type: "UT",
                level: 5
            }
        }
    },
    "Especial": {
        id: "s",
        spells: {
            "Sentir Magia": {
                id: "M1",
                description: "Você sabe se existe algum efeito mágico na área e de qual ponto ele é originário.",
                area: "Uma esfera de 5 metros de raio centrada em um ponto dentro do seu espaço e que permite saber se há algum efeito mágico na área e de que ponto se origina",
                type: "UT",
                level: 0
            },
            "Fogo das Bruxas": {
                id: "M2",
                description: "A bruxa se torna invisível e uma bola de fogo verde surge centrada em um ponto a seu alcance. Quando o efeito termina, a bruxa é teleportada para um espaço aberto de sua escolha dentro de 1 metro da bola de fogo. Quando a bruxa conjura esta magia e, toda vez que utilizar uma ação para se concentrar nela novamente, ela pode mover a bola de fogo até 10 metros e atacar uma criatura a até 1 metro dela. A bruxa faz uma jogada de ataque de Intelecto ou de Vontade contra a Agilidade do alvo. Caso seja bem-sucedida, o alvo sofre 2d6 de dano.",
                target: "Pessoal",
                duration: "Concentração, por até 1 minuto de duração",
                attackRoll20: "O alvo sofre 1d6 de dano adicional.",
                type: "AT",
                level: 1
            },
            "Enfeitiçar Arma": {
                id: "M3",
                description: "O personagem imbui o alvo com energia mágica que permanece pela duração da magia. Quando ataca com a arma alvo, o personagem faz a jogada de ataque com 1 dádiva. O alvo funciona como seu implemento (consulte o Capítulo 7). O personagem pode utilizar uma ação para teleportar o alvo até sua mão, dado que o alvo esteja a até 1,6 km do personagem. O personagem pode utilizar uma ação para tocar o alvo e remover todo o dano causado a ele, mesmo que tenha sido destruído, desde que tenha, pelo menos, um fragmento dele.",
                target: "Uma arma dentro do alcance",
                duration: "4 horas",
                type: "UT",
                level: 0
            },
            "Exorcismo": {
                id: "M4",
                description: "Caso o alvo tenha sido encantado, compelido ou assustado, a aflição é removida. Caso o alvo esteja possuído, o exorcista deve se concentrar por 1 minuto, durante este tempo o alvo deve ficar dentro do alcance e fazer uma jogada de ataque de Vontade contra a Vontade da criatura possuidora. Caso obtenha sucesso, a possessão termina, a criatura que possuía o alvo aparece em um espaço aberto a curta distância e fica pasma por 1 rodada.",
                target: "Uma criatura encantada, compelida, assustada ou possuída a curta distância",
                attackRoll20: "A criatura possuidora, em vez de pasma, fica atordoada por 1 rodada.",
                type: "AT",
                level: 1
            },
            "Templo da Fé": {
                id: "M5",
                description: "Poder sagrado inunda a área e permanece enquanto dura a magia. Quando uma criatura de fora se move para dentro da área, o templário pode utilizar uma ação desencadeada para se mover até o máximo de seu Deslocamento e atacar com uma arma. Caso seja bem-sucedido, a criatura também fica imobilizada por 1 rodada.",
                area: "Uma esfera com raio de 5 metros, centrada em um ponto dentro do alcance do templário. Se o ponto é em uma estatueta, relicário ou altar relacionado a religião do templário, o raio se estende até 10 metros.",
                duration: "1 minuto ou até que o templário abandone a área",
                type: "UT",
                level: 0
            }
        }
    }
}

function bubbleSort(arr){
    let indexArray = [];
    for(let i = 0; i < arr.length; i++){
        indexArray.push(i);
    }
    let changed = true;
    while(changed){
        changed = false;
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i + 1]){
                let a = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = a;
                let b = indexArray[i];
                indexArray[i] = indexArray[i + 1];
                indexArray[i + 1] = b;
                changed = true;
            }
        }
    }
    return indexArray;
}

class Spell{
    constructor(tradition, name, characterPower){
        if(tradition in traditions && name in traditions[tradition].spells){
            this._tradition = tradition;
            this._name = name;
            this._level = traditions[tradition][name].level;
            this._maxUses = Spell.getMaxUses(characterPower, )
        } else{
            alert("Não é uma das magias ou a tradição está errada");
        }
    }
    
    static getMaxUses(power, magicLevel){
        if (magicLevel == 0)
            return power + 1;
        else if (magicLevel == 1){
            if(power <= 1)
                return 1;
            else if(power < 5)
                return 2;
            else
                return 3;
        }
        else if (magicLevel == 2){
            if(power <= 3)
                return 1
            else if(power < 8)
                return 2
            else
                return 3
        }
        else if (magicLevel == 3){
            if(power <= 4)
                return 1
            else if(power < 9)
                return 2
            else
                return 3
        }
        else if (magicLevel == 4){
            if(power <= 5)
                return 1
            else if(power < 10)
                return 2
            else
                return 3
        }
        else if (magicLevel == 5){
            if(power <= 7)
                return 1;
            else
                return 2;
        }
            return 1;
    }
    static orderSpellsByTradition(trad, spells){
        let levelArray = [];
        for(let i = 0; i < spells.length; i++){
            levelArray[i] = parseInt(traditions[trad].spells[spells[i]].level);
        }
        let rightOrder = bubbleSort(levelArray);
        let orderedArray = [];
        for(let i = 0; i < spells.length; i++){
            orderedArray[i] = spells[rightOrder[i]];
        }
        return orderedArray;
    }
}

class Tradition{
    constructor(name){
        if(name in traditions){
            this._name = name;
            this._attribute = traditions[name].attribute;
            this._blackMagic = traditions[name].darkMagic;
        } else{
            alert("Esta tradição não existe");
        }
    }
}
