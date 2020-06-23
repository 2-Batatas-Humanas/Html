traditions ={
    // Tradições de intelecto:
    "Adivinhação": { //Divination
        attribute: "intellect",
        darkMagic: false,
        spells: {
            "Bisbilhotar": {
                description: "O conjurador escolhe um ponto no espaço que possa ver a longa distância. Enquanto a magia está em efeito, ele ouve como se estivesse no ponto escolhido.",
                duration: "Concentração, até 1 minuto",
                type: "UT",
                level: 0
            },
            "Epifania": {
                description: "O conjurador pode utilizar uma ação desencadeada para conjurar a magia quando faz uma jogada de desafio ou de ataque. Ele joga o d20 duas vezes e utiliza o maior resultado do dado.",
                triggered: true,
                type: "UT",
                level: 0
            },
            "Augúrio": {
                description: "Enquanto o conjurador se concentra, ele utiliza as ferramentas de adivinhação para conseguir ver o futuro. Ao final deste período, ele faz uma pergunta ao Mestre, que possa ser respondida com “sim” ou “não”. O Mestre deve responder honestamente.",
                duration:  "Concentração, até 1 minuto",
                requisites: "O conjurador deve utilizar implementos de adivinhação, tal como cartas, dados, folhas de chá ou varetas entalhadas.",
                type: "UT",
                level: 1
            },
            "Predizer": {
                description: "Enquanto dura a magia, quando o alvo faz uma jogada de ataque ou de desafio e pode ouvir o conjurador, ele faz a jogada com 3 dádivas.",
                target: " Uma criatura no campo de visão do conjurador a curta distância",
                duration: "Concentração, até 1 minuto",
                type: "UT",
                level: 1
            },
            "Psicometria": {
                description: "O conjurador toca um alvo e aprende 1d6 fatos reais sobre ele, como a identidade do último proprietário; se o objeto é ou não amaldiçoado, possuído ou mágico; como o proprietário anterior ganhou ou perdeu o objeto; ou onde ele foi feito.",
                target: "Um objeto ao alcance do conjurador",
                type: "UT",
                level: 1
            },
            "Leitura": {
                description: "Enquanto se concentra, o conjurador lê a palma da mão do alvo. Ao fim deste período, o conjurador revela detalhes sobre o futuro do alvo. O alvo ganha seis previsões, que se mantêm por 1 hora ou até que gaste a última. Quando faz uma jogada de ataque ou de desafio, ele pode gastar uma previsão para fazer a jogada com 2 dádivas.",
                target: "Uma criatura ao alcance do conjurador",
                duration: "Concentração, até 1 minuto",
                type: "UT",
                level: 2
            },
            "Ouvir verdades": {
                description: "Enquanto durar a magia, o conjurador entende todos os idiomas que ouve e sabe quando estão dizendo a verdade.",
                duration: "1 hora",
                type: "UT",
                level: 2
            },
            "Localizar": {
                description: "O conjurador deve se concentrar por 1 minuto, durante este tempo ele visualiza uma criatura ou objeto. Ele pode visualizar uma coisa específica, tal como a taça utilizada por um monarca pela última vez, ou uma categoria geral, como uma armadilha. Quando termina, o conjurador sabe a localização da criatura ou objeto que escolheu sempre que estiver a média distância dele. O objeto/criatura não pode ficar escondido do conjurador, enquanto durar o efeito da magia. Este conhecimento também revela o caminho para chegar até ele. Caso diversos sujeitos caibam na mesma descrição, o conjurador sabe a localização de todos.",
                duration: "1 hora; consulte o efeito",
                type: "UT",
                level: 3
            },
            "Ver o futuro": {
                description: "Enquanto durar a magia, os movimentos do conjurador não desencadeiam ataques livres, impõe 2 perdições a jogadas de ataque contra ele e faz jogadas de desafio de Agilidade com 2 dádivas para resistir a ataques e outros efeitos nocivos",
                duration: "1 minuto",
                type: "UT",
                level: 3
            },
            "Visão": {
                description: "Enquanto durar a magia, o conjurador recebe os seguintes benefícios:\n• Pode ver em áreas obscurecidas por sombras e escuridão como se estivessem iluminadas.\n• Pode ver através de efeitos de cobertura, disfarce ou itens com invisibilidade.\n• Vê auras ao redor de objetos sob efeito de magia e reconhece, imediatamente, qualquer coisa criada por uma magia de ilusão como tal.\n • Vê criaturas sob efeitos de magias de Transformação pelo que elas realmente são.\n • Pode utilizar uma ação para focar sua visão para ver através de obstáculos sólidos, enquanto está concentrado. O conjurador pode ver através de 1 metro de madeira, 30 cm de pedra ou 2,5 cm de metal.",
                duration: "1 hora; consulte o efeito",
                type: "UT",
                level: 4
            },
            "Clarividência": {
                description: "",
                target: "Uma bola de cristal ao alcance do conjurador",
                duration: "Concentração, até 1 hora; consulte o efeito",
                type: "UT",
                level: 5
            }
        }
    },
    "Arcana": {
        attribute: "intellect",
        darkMagic: false,
        spells: {
            "Armadura arcana": {
                description: "Um campo de força invisível surge ao redor do conjurador, fornecendo um bônus de +2 para sua Defesa, enquanto durar a magia. Além disso, enquanto a magia está em efeito, precipitação normal não toca o conjurador, ventos suaves não o afetam e ele não sente desconforto por frio ou calor, embora ainda sofra dano por fogo e frio.",
                requisites: " O conjurador não deve estar vestindo armadura.",
                duration: "4 horas",
                type: "UT",
                level: 0
            },
            "Dardo mágico": {
                description: "Um dardo mágico voa da ponta do dedo do conjurador. O dardo acerta automaticamente, se o caminho entre o conjurador e o alvo não estiver obstruído. O alvo sofre 1d3+1 de dano.",
                target: "Uma criatura ou objeto a longa distância",
                type: "AT",
                level: 0
            },
            "Dardos infalíveis": {
                description: "Sete dardos mágicos voam para fora das pontas dos dedos do conjurador, divididos como ele escolher entre seus alvos. Cada dardo acerta automaticamente, se o caminho entre o conjurador e os alvos não estiver obstruído. O alvo sofre 1 de dano para cada dardo que o atingir.",
                target: "Uma a três criaturas ou objetos a longa distância",
                type: "AT",
                level: 1
            },
            "Escudo arcano": {
                description: "Pela duração da magia, uma barreira de energia protege o conjurador, impondo 1 perdição a jogadas de ataque contra sua Defesa ou Agilidade. Desencadeada Quando uma criatura faz uma jogada de ataque contra sua Defesa ou Agilidade, o conjurador pode utilizar uma ação desencadeada para conjurar esta magia. A criatura desencadeante faz sua jogada de ataque com 3 perdições e, em seguida, o efeito termina.",
                duration: "1 minuto",
                triggered: true,
                type: "UT",
                level: 1
            },
            "Visão arcana": {
                description: "Pela duração da magia, o conjurador vê auras ao redor de criaturas, objetos e áreas afetadas por magia. A critério do Mestre, ele talvez possa aprender a qual tradição a magia pertence.",
                duration: "1 minuto",
                type: "UT",
                level: 1
            },
            "Dardos explosivos": {
                description: "Três dardos mágicos voam para fora das pontas dos dedos do conjurador, divididos como ele escolher entre seus alvos. Cada dardo acerta automaticamente, se o caminho entre o conjurador e os alvos não estiver obstruído. Cada dardo causa 1 de dano em seu alvo e em seguida explode em um raio de 1 metro de um ponto dentro do espaço do alvo. Tudo na área sofre 1d6+1 de dano, ou metade do dano, caso o alvo seja bem-sucedido em uma jogada de desafio de Agilidade.",
                target: " Uma a três criaturas ou objetos a longa distância",
                type: "AT",
                level: 2
            },
            "Magia fortalecida": {
                description: "Pela duração da magia, quando o conjurador conjurar uma magia, ele faz quaisquer jogadas de ataque com 1 dádiva, jogadas de ataque feitas para resistir ao efeito da magia são realizadas com 1 perdição.",
                duration: "1 minuto",
                type: "UT",
                level: 2
            },
            "Destruir magia": {
                description: "Todos os efeitos criados por magias de nível 3 ou menos que estejam ativos em qualquer coisa na área terminam imediatamente",
                area: "Um cubo, com 5 metros de lado, originado de um ponto a média distância",
                type: "UT",
                level: 3
            },
            "Relâmpago arcano": {
                description: "O relâmpago causa 5d6 de dano em tudo na área. Cada criatura na área deve fazer uma jogada de desafio de Agilidade, sofrendo metade do dano em caso de sucesso.",
                target: "Um cone, 5 metros de comprimento, originado em um ponto ao alcance do conjurador",
                type: "AT",
                level: 3
            },
            "Acumular magia": {
                description: "O conjurador acumula energia mágica, medida em pontos. Jogue 1d6+3 para determinar quantos pontos de energia mágica são acumulados. Você retêm esses pontos até completar um descanso ou gastá-los. Enquanto tiver pontos restantes, não poderá conjurar acumular magia novamente. O conjurador pode gastar os pontos de energia para conjurar uma magia que conheça em vez de gastar a conjuração daquela magia, mesmo que não haja mais conjurações restantes. Ele gasta uma quantidade de pontos igual ao nível da magia.",
                duration: "Consulte o efeito",
                type: "UT",
                level: 4
            },
            "Retribuição arcana": {
                description: "O conjurador ganha um bônus de +5 para sua defesa enquanto a magia está em efeito. A próxima vez que uma criatura a curta distância do conjurador obtiver um sucesso em uma jogada de ataque com uma arma contra ele, este efeito termina e o sucesso automaticamente se torna um fracasso. A criatura desencadeante deve fazer uma jogada de desafio de Força. Caso fracasse, ela sofre 10d6 de dano, é movida a 2d6 metros para longe do conjurador e fica prostrada. Ela sofre metade do dano caso seja bem-sucedida.",
                duration:" 4 horas; consulte o efeito",
                type: "AT",
                level: 5
            }
        }
    },
    "Batalha": {
        attribute: "intellect",
        darkMagic: false,
        spells: {
            
        }
    },
    "Encantamento": {
        attribute: "intellect",
        darkMagic: false,
        spells: {
            
        }
    },
    "Ilusão": {
        attribute: "intellect",
        darkMagic: false,
        spells: {
            
        }
    },
    "Invocação": {
        attribute: "intellect",
        darkMagic: false,
        spells: {
            
        }
    },
    "Maldição": {
        attribute: "intellect",
        darkMagic: true,
        spells: {
            
        }
    },
    "Necromancia": {
        attribute: "intellect",
        darkMagic: true,
        spells: {
            
        }
    },
    "Proibida": {
        attribute: "intellect",
        darkMagic: true,
        spells: {
            
        }
    },
    "Proteção": {
        attribute: "intellect",
        darkMagic: false,
        spells: {
            
        }
    },
    "Runas": {
        attribute: "intellect",
        darkMagic: false,
        spells: {
            
        }
    },
    "Sombras": {
        attribute: "intellect",
        darkMagic: false,
        spells: {
            
        }
    },
    "Tecnomancia": {
        attribute: "intellect",
        darkMagic: false,
        spells: {
            
        }
    },
    "Teleporte": {
        attribute: "intellect",
        darkMagic: false,
        spells: {
            
        }
    },
    "Tempo": {
        attribute: "intellect",
        darkMagic: false,
        spells: {
            
        }
    },
    // Tradições de vontade:
    "Água": {
        attribute: "will",
        darkMagic: false,
        spells: {
            "Criar água":{
                description:"O conjurador toca o alvo, que se enche de água fresca e limpa.",
                target:"Um copo, vasilha ou recipiente similar ao alcance do jogador",
                type:"UT",
                level:"0"
            },
            "Congelar":{
                description:"A temperatura cai ao redor do alvo. O conjurador faz uma jogada de Vontade contra a Agilidade do alvo. Caso seja bem-sucedido, ele sofre 1d3 de dano e fica imobilizado por 1 rodada.",
                target:"Uma criatura a curta distância",
                type:"AT",
                level:"0",
                attackRoll20:"O alvo sofre 1d3 de dano adicional."
            },
            "Afogar":{
                description:"Água se acumula nos pulmões do alvo ou em um órgão similar. O alvo deve fazer uma jogada de desafio de Força; caso fracasse, ele sofre 1d6+2 de dano e fica debilitado. Ao final de cada rodada que o alvo está debilitado devido a este efeito, ele deve fazer uma jogada de desafio de Força com 1 dádiva para tentar remover a aflição. Depois de três fracassos, o alvo sufoca e morre.",
                target:"Uma criatura a curta distância que respire ar.",
                type:"AT",
                level:"1"
            },
            "Explosão de gelo":{
                description:"O conjurador arremessa fragmentos de gelo dentados que causam 2d6+2 de dano a tudo na área; ou metade do dano, caso a criatura seja bem-sucedida em uma jogada de desafio de Agilidade. O chão na área se torna terreno difícil durante uma 1 rodada.",
                area:" Um cone com 3 metros de comprimento, originado de um ponto ao alcance do conjurador.",
                type:"AT",
                level:"1"
            },
            "Fonte da vida":{
                description:"Águas curativas obscurecem parcialmente a área enquanto a magia durar. Cada criatura viva na área não precisa beber água até que tenha completado um descanso. Além disso, quando uma criatura na área cura dano, ela cura 1d3 de dano adicional.",
                target:"Um hemisfério com raio 2 metros, centrado em um ponto no solo a curta distância.",
                duration:"1 minuto",
                type:"UT",
                level:"1"
            },
            "Gêiser":{
                description:"Uma coluna de água escaldante emerge da área, sobe 2d6 metros antes de cair no chão cobrindo metade desta quantidade de metros de área, extinguindo chamas que não estejam protegidas. A força da água move objetos de Tamanho 1 ou menor, que não sejam fixos, 1d6 metros para longe do ponto de origem; enquanto cada criatura na área sofre 2d6+2 de dano das águas quentes e deve fazer uma jogada de desafio de agilidade. Caso fracasse, a criatura fica prostrada, e caso seja bem-sucedida, sofre apenas metade do dano.",
                area:"Um círculo com 5 metros de raio, centrado em um ponto no solo a média distância",
                type:"AT",
                level:"2"
            },
            "Onda":{
                description:"Água preenche a área enquanto durar a magia. A água obscurece parcialmente qualquer coisa em seu espaço e atrás dela, fornecendo metade de cobertura. A água também extingue quaisquer chamas na área. Quando o efeito termina, a linha de água dobra e cai para longe do conjurador ou na sua direção, como ele desejar, cobrindo uma área com 10 metros de comprimento e 10 metros de largura. Cada criatura na área sofre 1d6 de dano e deve fazer uma jogada de desafio de Força. Caso fracasse, ela fica prostrada; caso seja bem-sucedida, sofre metade do dano. A água então se espalha por mais 10 metros em todas as direções, extinguindo quaisquer chamas que tocar.",
                area:" Uma linha com 10 metros de comprimento, 10 metros de altura e 1 metro de largura originada de um ponto no solo a média distância.",
                duration:"1 rodada",
                type:"AT",
                level:"2"
            },
            "Esfera de água":{
                description:"Água preenche a área e permanece até o fim da magia. Cada vez que o conjurador utiliza uma ação para se concentrar na magia, ele pode mover a esfera e tudo dentro dela até 5 metros em qualquer direção. Cada criatura na área quando o personagem conjura esta magia fica presa na esfera, assim como qualquer criatura cujo espaço seja coberto pela esfera. Ao fim de cada rodada, até o fim do efeito, cada criatura que respira ar presa dentro da esfera precisa obter um sucesso em uma jogada de desafio de Força ou sofre 2d6 de dano. Uma criatura presa por este efeito pode utilizar uma ação para fazer uma jogada de desafio de Força. Caso seja bem-sucedida, ela nada para a liberdade e cai em um espaço aberto de sua escolha a 1 metro da esfera.",
                area:"Uma esfera com 3 metros de raio, centrada em um ponto a média distância.",
                duration:"Concentração, até 1 minuto.",
                type:"AT",
                level:"3"
            },
            "Força das mares":{
                description:"Cada alvo deve fazer uma jogada de desafio de Força. Caso fracasse, o alvo é movido 2d6 metros para perto ou longe do conjurador (à escolha dele) e fica pasmo por 1 rodada. Caso seja bem-sucedido, o alvo é movido apenas metade da distância.",
                area:"Qualquer quantidade de criaturas a média distância.",
                type:"AT",
                level:"3"
            },
            "Onda de frio":{
                description:"Frio letal se dispersa pela área, congelando instantaneamente água e líquidos a base de água, incluindo poções. O frio causa 7d6 de dano a tudo na área. Criaturas na área sofrem metade do dano, caso obtenham sucesso em uma jogada de desafio de Força. Uma criatura que fique incapacitada por este dano congela e morre instantaneamente.",
                area:" Um cone com 8 metros de comprimento, originado de um ponto ao alcance do conjurador.",
                type:"AT",
                level:"4"
            },
            "Compelir gênio da água":{
                description:"No fim da rodada que o personagem conjurou a magia, o alvo se torna um gênio da água de Tamanho 2. O conjurador não pode terminar voluntariamente esta magia. Quando o gênio surge, o conjurador faz uma jogada de ataque de Vontade contra a Vontade do gênio. O gênio fica compelido enquanto durar a magia, caso o conjurador seja bem-sucedido; caso ele fracasse, o gênio se torna hostil.",
                area:"Um cubo de gelo, neve ou água, com 2 metros de lado, originado de um ponto a longa distância.",
                duration:"1 minuto.",
                type:"UT",
                level:"5"
            }    
        }
    },
    "Alteração": {
        attribute: "will",
        darkMagic: false,
        spells: {
            "Compreensão":{
                description:"O conjurador toca o alvo. Dado que este saiba ao menos 1 idioma, o conjurador pode se comunicar com o alvo enquanto mantém contato físico com ele, independente de compartilharem um idioma mútuo.",
                target:"O conjurador e uma criatura ao alcance do conjurador.",
                duration:"Concentração, até 1 minuto.",
                type:"UT",
                level:"0"
            },
            "Distorcer aparência":{
                description:"O conjurador toca um alvo e torna sua aparência indistinta. Pela duração da magia, quando o alvo tentar se esconder, ele faz suas jogadas de desafio de Agilidade com 1 dádiva; criaturas que veem o alvo e atacam sua Defesa ou Agilidade fazem suas jogadas de ataque com 1 perdição.",
                target:"Uma criatura ao alcance do conjurador.",
                duration:"1 minuto.",
                type:"UT",
                level:"0"
            },
            "Adaptação subaquática":{
                description:"O conjurador toca o alvo. Pela duração da magia, o alvo pode respirar água tão facilmente quanto respira ar, se mover até seu Deslocamento total enquanto nada e não precisa fazer jogadas de desafio para nadar.",
                target:"Uma criatura ao alcance do conjurador.",
                duration:"1 hora.",
                type:"UT",
                level:"1"
            },
            "Ampliar os sentidos":{
                description:"O conjurador toca o alvo. Pela duração da magia, o alvo recebe um bônus de +5 para sua Percepção e pode enxergar em áreas obscurecidas por sombras ou escuridão como se estivessem iluminadas; no entanto, o alvo faz jogadas de desafio para resistir a ficar cego ou surdo com 1 perdição.",
                target:"Uma criatura ao alcance do conjurador.",
                duration:"1 hora.",
                type:"UT",
                level:"1"
            },
            "Escalada de aranha":{
                description:"O conjurador toca o alvo. Pela duração da magia, o alvo pode se mover até seu Deslocamento total por paredes, tetos ou outras áreas horizontais, não precisa fazer uma jogada de desafio para escalar.",
                target:"Uma criatura ao alcance do conjurador.",
                duration:"1 hora.",
                type:"UT",
                level:"1"
            },
            "Aprimorar atributo":{
                description:"O conjurador toca o alvo. Ele escolhe Força, Agilidade, Intelecto ou Vontade. Pela duração da magia, quando o alvo faz uma jogada de ataque ou de desafio utilizando o atributo escolhido, ele faz a jogada com 1 dádiva.",
                target:"Uma criatura ao alcance do conjurador.",
                duration:"1 minuto.",
                type:"UT",
                level:"2"
            },
            "Aprimorar defesa":{
                description:"O conjurador toca o alvo. Pela duração da magia, o alvo ganha um bônus de +5 para sua Saúde, jogadas de ataque contra o alvo são feitas com 1 perdição.",
                target:"Uma criatura ao alcance do conjurador.",
                duratiom:"1 minuto.",
                type:"UT",
                level:"2"
            },
            "Alterar tamanho":{
                description:"O conjurador toca o alvo, ele cresce ou encolhe e se mantém em seu novo Tamanho enquanto durar a magia. Tudo que o alvo veste e carrega também cresce ou encolhe para se acomodar a nova forma, mas se esses objetos deixarem de estar na posse do alvo, eles imediatamente voltam ao tamanho normal. Se o alvo cresce, seu Tamanho duplica e ele recebe um bônus de +10 para sua Saúde. Os ataques de sua arma causam 1d6 de dano adicional, caso seu novo Tamanho seja 3 ou menos, ou 2d6 de dano adicional, caso seu novo Tamanho seja 4 ou mais. Se o espaço que o alvo ocupa não é grande o bastante para acomodar seu novo Tamanho, ele sofre 5d6 de dano e o efeito termina imediatamente. Se o alvo encolhe, seu Tamanho é dividido pela metade. Ele causa metade do dano com ataques de armas, faz jogadas de ataque e desafio de Força com 1 perdição e faz jogadas de ataque e desafio de Agilidade com 1 dádiva.",
                target:"Uma criatura ao alcance do conjurador.",
                duration:"1 minuto.",
                type:"UT",
                level:"3"
            },
            "Regeneração":{
                description:"O conjurador toca o alvo. Ao fim de cada rodada enquanto durar a magia, o alvo cura uma quantidade de dano igual à metade de sua taxa de cura.",
                target:"Uma criatura viva ao alcance do conjurador.",
                duration:"1 minuto",
                type:"UT",
                level:"3"
            },
            "Maleabilidade":{
                description:"O conjurador toca o alvo. Enquanto durar a magia, o alvo pode se mover até seu Deslocamento total por terreno difícil, espaços ocupados por outras criaturas independentemente de seu Tamanho e livremente por aberturas de pelo menos 2,5 cm de largura. Da mesma maneira, pela duração da magia, o alvo não pode ficar prostrado e é imune as aflições agarrado, imobilizado e lento.",
                target:"Uma criatura ao alcance do conjurador.",
                duration:"1 hora.",
                type:"UT",
                level:"4"
            },
            "Despertar o potencial":{
                description:"O conjurador toca o alvo. Ele escolhe Força, Agilidade, Intelecto ou Vontade e joga 1d6. O alvo recebe um bônus para o atributo escolhido igual ao resultado da jogada, até o valor máximo de 20, enquanto durar a magia. O efeito também afeta quaisquer características relacionadas ao atributo.",
                target:"Uma criatura ao alcance do conjurador.",
                duration:"1 hora.",
                type:"UT",
                level:"5"
            }
        }
    },
    "Ar": {
        attribute: "will",
        darkMagic: false,
        spells: {
            "Agitar o ar":{
                description:"O conjurador cria uma leve brisa na área, que se move junto a ele até o fim do efeito. A brisa limpa odores e poeira, espalha objetos leves tais como papéis, apaga velas e faz com que chamas maiores bruxuleiem e dancem Criaturas na área que atacarem o conjurador com armas arremessadas ou de combate à distância fazem suas jogadas de ataque com 1 perdição.",
                area:"Uma esfera com 2 metros de raio centrada em um ponto ao alcance do conjurador.",
                duration:"1 minuto.",
                type:"UT",
                level:"0"
            },
            "Rajada de vento":{
                description:"Uma ventania poderosa atinge o alvo. O conjurador faz uma jogada de ataque de Vontade contra a Força do alvo. Caso seja bem-sucedido, o vento move o alvo 1d6 metros para longe do conjurador.",
                target:" Uma criatura ou objeto a curta distância.",
                type:"AT",
                attackRoll20:"O alvo fica prostrado ao final do movimento.",
                level:"0"
            },
            "Esfolar":{
                description:"Areia no ar arranha o alvo. O conjurador faz uma jogada de ataque de Vontade contra a Força do alvo. Caso seja bem-sucedido, o alvo sofre 2d6+3 de dano. Se uma criatura viva fica incapacitada devido a esse dano, ela morre instantaneamente, sua pele (caso tenha) é arrancada dos ossos.",
                target:"Uma criatura ou objeto a curta distância.",
                type:"AT",
                attackRoll20:"O alvo sofre 2d6 de dano adicional.",
                level:"1"
            },
            "Invocar ventania":{
                description:"Um vento uivante dispersa vapores, névoa, fumaça e gás da área. Chamas desprotegidas se apagam e objetos leves são soprados para o canto mais próximo da área. Cada criatura na área deve ter sucesso em uma jogada de desafio de Força ou é movida 1d6 metros para longe do ponto de origem. Criaturas voadoras fazem o teste com 1 perdição.",
                area:"Um cone, 3 metros de comprimento, originado em um ponto a curta distância.",
                type:"AT",
                level:"1"
            },
            "Planar":{
                description:"Desencadeada O conjurador pode utilizar uma ação desencadeada para conjurar a magia quando vê um alvo cair. Durante o tempo da duração, o alvo não sofre dano por aterrissar depois de uma queda. Caso o alvo continue caindo após o fim do efeito, ele sofre dano baseado no ponto a partir do qual a queda continuou após o fim do efeito da magia.",
                target:"Uma criatura a longa distância.",
                duration:"1 minuto.",
                type:"UT",
                level:"1"
            },
            "Palma do trovão":{
                description:"Uma onda de som retumbante se dispersa a partir do centro da área, causando 1d6+1 de dano em tudo na área Cada criatura na área deve fazer uma jogada de desafio de Força e sofrer metade do dano em caso de sucesso. Caso fracasse, a criatura também fica surda por 1 minuto.",
                area:"Uma esfera com 10 metros de raio centrada em um ponto a média distância.",
                type:"AT",
                level:"2"
            },
            "Parar o ar":{
                description:"Pela duração da magia, nenhum som emana ou chega até a área. Criaturas na área ficam ensurdecidas e imunes a ataques baseados em sons, tal como a magia paLma do trovão.",
                area:"Uma esfera com 4 metros de raio centrada em um ponto a média distância.",
                duration:"1 hora.",
                type:"UT",
                level:"2"
            },
            "Conceder o voo":{
                description:"O conjurador toca o alvo. O alvo pode voar até seu Deslocamento normal pelo tempo de duração da magia.",
                target:"Uma criatura ao alcance do conjurador.",
                duration:"1 hora.",
                type:"UT",
                level:"3"
            },
            "Lançar":{
                description:"Uma poderosa rajada de vento irrompe do ponto de origem. Cada criatura na área deve fazer uma jogada de desafio de Força; criaturas de Tamanho 1 ou menor fazem a jogada com 1 perdição. Caso fracasse, a criatura fica prostrada e é movida 5d6 metros para longe do ponto de origem. Caso encontre uma superfície sólida antes de completar a distância total do movimento, a criatura e a superfície contra qual bateu sofrem 1d6 de dano mais 1d6 de dano adicional para cada 5 metros de movimento remanescente (arredondado para baixo).",
                area:"Um cilindro com 4 metros de altura e raio de 4 metros, centrado em um ponto a longa distância.",
                type:"AT",
                level:"3"
            },
            "Criar ciclone":{
                description:"Um poderoso tufão aparece em uma das pontas da área e se move por ela, causando 3d6 de dano a qualquer coisa cujo espaço ele entrar. Todo objeto que não esteja fixo no chão que sofra dano desta forma, é movido 1d6 metros em uma direção à escolha do conjurador. Cada criatura que sofre dano desta forma deve fazer uma jogada de desafio de Força. Caso fracasse, ela é movida 1d6 metros na direção escolhida pelo conjurador ou fica prostrada. Caso tenha sucesso, a criatura sofre metade do dano.",
                area:"Uma linha com 20 metros de comprimento, 10 metros de altura e 2 metros de largura originada de um ponto a longa distância.",
                type:"AT",
                level:"4"
            },
            "Compelir gênio do vento":{
                description:"No fim da rodada em que esta magia é conjurada, o cubo alvo se torna um gênio do vento de Tamanho 2. O conjurador não pode finalizar esta magia voluntariamente. Quando o gênio aparece, o conjurador faz uma jogada de ataque de Vontade contra a Vontade dele. O gênio se torna compelido pela duração da magia caso a jogada seja bem-sucedida, ou se torna hostil caso seja um fracasso.",
                target:"Um cubo de ar, com 2 metros de lado, originado de um ponto a longa distância.",
                duration:"1 minuto.",
                type:"UT",
                level:"5"
            }
        }
    },
    "Canção": {
        attribute: "will",
        darkMagic: false,
        spells: {
            "Canção da amizade":{
                description:"O conjurador se concentra por 1 minuto, durante o qual ele canta. Quando termina, cada alvo deve fazer uma jogada de desafio de Vontade. Caso fracasse, ele fica encantado por 1 hora ou até que sofra dano.",
                target:" Cada criatura escolhida pelo conjurador a curta distância que possa ouvi-lo.",
                type:"AT",
                level:"0"
            },
            "Projetar voz":{
                description:"Enquanto durar a magia, tudo que o conjurador diz ou canta pode ser ouvido a até 1,6 km de distância.",
                duration:"1 minuto.",
                type:"UT",
                level:"0"
            },
            "Canção da coragem":{
                description:"Enquanto durar a magia, nenhum alvo pode ser encantado, compelido ou assustado, se estiver a curta distância do conjurador e puder ouvi-lo. O efeito termina imediatamente, caso o conjurador pare de cantar ou conjure outra magia.",
                duration:"1 minunto.",
                type:"UT",
                level:"1"
            },
            "Canção da inspiração":{
                description:"Quando conjura essa magia, e a cada turno de duração, o conjurador escolhe uma criatura a curta distância que possa ouvi-lo. Ela faz sua próxima jogada de ataque com 2 dádivas. O efeito termina imediatamente, caso o conjurador pare de cantar ou conjure outra magia.",
                duration:"1 minuto.",
                type:"UT",
                level:"1"
            },
            "Canção da valentia":{
                description:"Quando conjura essa magia, e a cada turno de duração, o conjurador escolhe uma criatura a curta distância que possa ouvi-lo. Ela causa 1d6 de dano adicional em seus ataques com armas por 1 rodada. O efeito termina imediatamente, caso o conjurador pare de cantar ou conjure outra magia.",
                duration:"1 minuto",
                type:"UT",
                level:"1"
            },
            "Canção da cura":{
                description:"O conjurador se concentra por 1 minuto, durante o qual passa o tempo cantando. Quando termina, cada alvo a curta distância do conjurador durante toda a performance cura uma quantidade de dano igual à sua taxa de cura.",
                target:"Cada criatura escolhida pelo conjurador a curta distância que possa ouvi-lo.",
                type:"UT",
                level:"2"
            },
            "Canção do deslumbramento":{
                description:"Quando conjura essa magia, e quando utiliza uma ação para se concentrar nela, o conjurador escolhe uma criatura a curta distância que possa ouvi-lo. Ela deve obter um sucesso em uma jogada de desafio de Vontade ou fica encantada enquanto durar o efeito. Se estiver encantada por esse motivo, a criatura pode apenas fazer turnos lentos e, caso esteja a mais de 10 metros do conjurador, deve se mover em direção a ele em seu turno. O efeito termina imediatamente, caso o conjurador pare de cantar ou conjure outra magia.",
                duration:"Concentração, até 1 minuto.",
                type:"AT",
                level:"2"
            },
            "Canção da obscenidade":{
                description:"Quando conjura essa magia, e quando utiliza uma ação para se concentrar nela, o conjurador escolhe uma criatura a curta distância que possa ouvi-lo. Ela deve fazer uma jogada de desafio de Vontade. Caso seja bem-sucedida, se torna imune à conjuração desta magia. Caso fracasse, fica debilitada enquanto durar o efeito. Se estiver debilitada por este motivo, também fica lenta.",
                duration:"Concentração, até 1 minuto.",
                type:"AT",
                level:"3"
            },
            "Canção do pavor":{
                description:"Quando conjura essa magia, e quando utiliza uma ação para se concentrar nela, o conjurador escolhe uma criatura a curta distância que possa ouvi-lo. Ela deve fazer uma jogada de desafio de Vontade. Caso seja bem-sucedida, se torna imune à conjuração dessa magia. Caso fracasse, fica assustada enquanto durar o efeito. Se estiver assustada por este motivo, a criatura deve utilizar sua ação a cada turno para se afastar do conjurador pelo caminho mais seguro. Caso a criatura não possa ouvi-lo ao fim da rodada, ela remove essa aflição.",
                duration:"Concentração, até 1 minuto.",
                type:"AT",
                level:"3"
            },
            "Canção do sono":{
                description:"Quando conjura essa magia, e quando utiliza uma ação para se concentrar nela, o conjurador escolhe uma criatura a curta distância que possa ouvi-lo. Ela deve fazer uma jogada de desafio de Vontade. Caso seja bem-sucedida, se torna imune à conjuração dessa magia., Caso fracasse, fica lenta enquanto durar o efeito. Se estiver lenta por este motivo, ela também fica fatigada. Caso a criatura não possa ouvi-lo ao fim da rodada, ela remove essas aflições. Se já estiver lenta, ela cai no sono por 1 hora.",
                duration:"Concentração, até 1 minuto.",
                type:"AT",
                level:"4"
            },
            "Canção dos heróis":{
                description:"Enquanto durar a magia, ou até que não possam mais ouvi-lo, cada alvo recebe um bônus de +20 para a Saúde, +2 para o seu Deslocamento e faz jogadas de ataque e desafio com 2 dádivas. O efeito termina imediatamente, caso o conjurador pare de cantar ou conjure outra magia.",
                target:"Até três criaturas a curta distância que possam ouvi-lo.",
                type:"UT",
                level:"5"
            }
        }
    },
    "Caos": {
        attribute: "will",
        darkMagic: false,
        spells: {
            "Dádiva do caos":{
                description:"Enquanto durar a magia, o conjurador joga um dado do caos (um d6) toda vez que faz uma jogada de ataque ou de desafio. Se o resultado for um número ímpar, ele é aplicado como penalidade à jogada do d20; sendo um número par, ele é aplicado como bônus.",
                duration:"1 minuto.",
                type:"UT",
                level:"0"
            },
            "Raio errático":{
                description:"Um raio colorido e efervescente voa da mão do conjurador. Ele faz uma jogada de ataque de Vontade contra a Agilidade do alvo. Caso seja bem-sucedido, o alvo sofre 1d6 de dano. Depois da jogada de ataque, o conjurador joga um d6. Se o resultado for 6, o ataque é repetido contra um alvo diferente, amigo ou inimigo, a média distância do alvo anterior. O conjurador escolhe o alvo caso mais de um esteja disponível.",
                target:"Uma criatura ou objeto a média distância.",
                type:"AT",
                attaclRoll20:"O alvo sofre 1d6 de dano adicional.",
                level:"0"
            },
            "Devastação inconstante":{
                description:"Uma bola tremulante de energia salta da mão do conjurador. Ele faz uma jogada de ataque de Vontade contra a Agilidade do alvo e joga um d6. Se o resultado for um número ímpar, ele é aplicado como penalidade à jogada de ataque, sendo um número par como bônus. Caso seja bem-sucedido, o alvo sofre 2d6 de dano, mais 2d6 de dano adicional caso tenha a jogada de ataque tenha recebido penalidade.",
                target:"Uma criatura ou objeto a média distância.",
                type:"AT",
                attackRoll20:" O alvo também é teleportado 1d6 metros para um lugar aberto na direção que o conjurador escolher.",
                level:"1"
            },
            "Dobrar espaço":{
                description:"O conjurador joga 2d6. O conjurador se teleporta para um espaço aberto de sua escolha até uma quantidade de metros igual ao resultado da jogada. Desencadeada O conjurador pode utilizar uma ação desencadeada para conjurar esta magia em seu turno. Caso faça isso, ele joga 1d6 em vez de 2d6 para determinar a distância do teleporte.",
                type:"UT",
                level:"1"
            },
            "Escudo iridescente":{
                description:"Um campo brilhante e colorido surge ao redor do conjurador. Ele joga um d6 e adiciona o resultado como bônus para sua Defesa. Cada vez que uma criatura realizar um ataque contra sua Defesa, o bônus é reduzido em 1 (até o mínimo de 0, o que termina o efeito).",
                duration:"1 hora; consulte o efeito.",
                type:"UT",
                level:"1"
            },
            "Cor da magia":{
                description:"Um globo colorido dispara da mão do conjurador em direção ao alvo. Quando alcança este ponto, ou caso encontre uma criatura ou objeto sólido antes, o globo explode. Energia caótica multicolorida se dispersa por uma esfera de 1 metro de raio centrada no alvo ou em um ponto na criatura ou objeto no espaço. Tudo na área sofre 1d6+1 de dano. Caso o resultado do dado de dano tenha sido um número ímpar, tudo na área sofre 3d6 de dano adicional.",
                target:"Um ponto no espaço a média distância.",
                type:"AT",
                level:"2"
            },
            "Tremula":{
                description:"O conjurador entra e sai da existência. Ao fim de cada rodada de duração, ele joga um d6. O conjurador se teleporta para um espaço aberto até uma quantidade de metros igual ao resultado da jogada. Caso o resultado seja ímpar, o Mestre escolhe onde vai aparecer. Caso seja par, ele escolhe.",
                duration:"1d6 minutos.",
                type:"UT",
                level:"2"
            },
            "Lança caótica":{
                description:"Um jato de energia multicolorida se espalha por uma área. Cada criatura na área deve fazer uma jogada de desafio de Vontade. A criatura sofre 5d6+5 de dano em caso de fracasso, ou cura 2d6+5 caso em caso de sucesso.",
                area:" Uma linha moldável com 15 metros de comprimento e 2 metros de largura, originada em um ponto ao alcance do conjurador.",
                type:"AT",
                level:"3"
            },
            "Magia selvagem":{
                description:"Luzes estranhas, sons incomuns e outras esquisitices se espalham pela área. O conjurador joga um d20 para descobrir o que acontece.",
                area:" Uma esfera com 1d6 metros de raio centrada em um ponto ao alcance do conjurador.",
                type:"UT",
                level:"3"
            },
            "Campo espelhado":{
                description:"Uma barreira similar a um espelho preenche a área até o fim do efeito, obscurecendo tudo atrás dela. Quando uma criatura entra neste espaço, joga-se um d6. Um resultado par faz com que a criatura se mova 1 metro através da barreira para um espaço aberto do outro lado (a criatura escolhe a direção). Um resultado ímpar teleporta a criatura para um espaço aberto escolhido pelo conjurador em uma superfície sólida a uma quantidade de metros igual ao resultado da jogada.",
                area:"Uma linha moldável com 10 metros de comprimento, 5 metros de altura e 1 metro de largura originada de um ponto a média distância.",
                duration:"1 minuto.",
                type:"UT",
                level:"4"
            },
            "Singularidade":{
                description:"Um aglomerado turvo multicolorido surge no ponto de origem e se mantém até o fim do efeito. Quando o personagem conjura esta magia, objetos que não sejam fixos se movem 2d6 metros para o ponto de origem. Cada criatura presente na área quando a magia é conjurada ou que entra na área deve fazer uma jogada de desafio de Força com 1 perdição. Caso fracasse, a criatura é movida 2d6 metros em direção ao ponto de origem e não pode se mover para longe dele enquanto durar o efeito da magia. Qualquer criatura que chegar ao ponto de origem sofre 10d6 de dano. Caso fique incapacitada por esse dano, ela é completamente apagada da existência, seu corpo e alma desaparecem para sempre. Quando o efeito termina, o aglomerado explode, causando 4d6 de dano a tudo na área da magia. Cada criatura na área deve fazer uma jogada de desafio de Força. Caso fracasse, a criatura fica prostrada no chão; caso seja bem-sucedida, a criatura apenas sofre metade do dano.",
                area:"Uma esfera de 10 metros de raio centrada em um ponto a longa distância.",
                duration:"1 rodada.",
                type:"AT",
                level:"5"
            }
        }
    },
    "Celestial": {
        attribute: "will",
        darkMagic: false,
        spells: {
            "Feixe ardente":{
                description:"Um feixe flamejante escapa da mão do conjurador. Ele faz uma jogada de ataque de Vontade contra a Agilidade do alvo. Caso seja bem-sucedido, o alvo sofre 1d6 de dano adicional.",
                target:"Uma criatura ou objeto a distância.",
                type:"AT",
                attackRoll20:"O alvo fica cego por 1 rodada.",
                level:"0"
            },
            "Luz":{
                description:"O conjurador toca o objeto e uma luz brilha a partir dele em um raio de 5 metros pelo tempo de duração da magia.",
                target:"Um objeto ao alcance do conjurador",
                duration:"1 hora.",
                type:"UT",
                level:"0"
            },
            "Clarão":{
                description:"Um clarão de luz brilhante surge na frente do alvo. O conjurador faz uma jogada de ataque de Vontade contra a Percepção do alvo. Caso seja bem-sucedido, o alvo fica cego por 1 rodada.",
                target:" Uma criatura dentro do campo de visão a curta distância.",
                type:"AT",
                level:"1"
            },
            "Raios solares":{
                description:"Três raios flamejantes voam para fora da mão do conjurador, divididos como ele escolher entre seus alvos. Para cada raio, ele faz uma jogada de ataque de Vontade contra a Agilidade do alvo. Caso seja bem-sucedido, o alvo sofre 1d6 de dano. Caso seja capaz de enxergar, o alvo também fica debilitado por 1 rodada.",
                target:"Até três criaturas ou objetos a média distância.",
                type:"AT",
                attaclRoll20:"O alvo sofre 1d3 de dano adicional.",
                level:"2"
            },
            "Estrela cadente":{
                description:"Uma partícula de luz branca aparece em qualquer lugar dentro do alcance da magia e corre em direção ao alvo. Quando alcança este ponto, ou caso encontre uma criatura ou objeto sólido antes, a partícula explode. Chamas se dispersam por uma esfera de 3 metros de raio centrada no alvo ou em um ponto no espaço da criatura ou objeto, causando 2d6+2 de dano a tudo na área. Cada criatura na área deve fazer uma jogada de desafio de Força. A criatura fica debilitada por 1 rodada em caso de falha, ou apenas sofre metade do dano em caso de sucesso.",
                target:"Um ponto no espaço a média distância.",
                type:"AT",
                level:"3"
            },
            "Irradiação":{
                description:"Um suave brilho verde se dispersa pela área, transformando escuridão em sombras pela duração da magia. Tudo na área sofre 1d6 de dano quando a magia é conjurada e ao fim de cada turno seguinte enquanto a magia estiver ativa. Cada criatura que sofre dano desta maneira deve fazer uma jogada de desafio de Força. Caso fracasse, ela fica fatigada por 1 rodada e lenta enquanto estiver fatigada devido a este efeito. Caso seja bem-sucedida, a criatura sofre metade do dano.",
                area:"Uma esfera com 3 metros de raio centrada em um ponto a longa distância.",
                duration:"1 mminuto.",
                type:"AT",
                level:"3"
            },
            "Nova":{
                description:"Luz brilhante explode e se dispersa pela área. Todas as criaturas, com exceção do conjurador, sofrem 2d6+2 de dano e devem fazer uma jogada de desafio de Força. A criatura fica cega por 1 rodada em caso de falha, ou apenas sofre metade do dano em caso de sucesso.",
                area:"Uma esfera de 8 metros de raio centrada em um ponto ao alcance do conjurador.",
                type:"AT",
                level:"4"
            },
            "Feixe solar":{
                description:"O conjurador libera um feixe de luz brilhante e ardente de sua mão, causando 3d6+3 de dano a tudo na área. Cada criatura que sofrer este dano deve fazer uma jogada de desafio de Força. A criatura fica cega por 1 minuto em caso de falha, ou apenas sofre metade do dano em caso de sucesso.",
                area:" Uma linha com 25 metros de comprimento e 1 metro de largura, originada em um ponto ao alcance do conjurador.",
                type:"AT",
                level:"5"
            }
        }
    },
    "Destruição": {
        attribute: "will",
        darkMagic: false,
        spells: {
            "Arruinar":{
                description:"O conjurador sofre 1 ponto de dano. O alvo sofre 1d6 de dano; caso seja uma criatura, ela deve fazer uma jogada de desafio de Força, ficando fatigada por 1 minuto, caso fracasse.",
                target:"Uma criatura ou objeto a curta distância.",
                type:"AT",
                level:"0"
            },
            "Quebrar":{
                description:"O conjurador sofre 1 ponto de dano. O alvo sofre dano igual à sua própria Saúde.",
                target:"Um objeto de Tamanho 1/2 ou menor a curta distância.",
                type:"AT",
                level:"0"
            },
            "Dissolver":{
                description:"O conjurador sofre 2 pontos de dano e faz uma jogada de ataque de Vontade contra a Força do alvo. Caso seja bem-sucedido, ele sofre 1d6+ 1 de dano devido ao toque corrosivo do conjurador e fica debilitado por 1 minuto. Se o alvo ficar incapacitado devido a este dano, ele morre instantaneamente e se torna uma gosma, deixando tudo que vestia ou carregava no espaço que ocupava.",
                target:" Uma criatura com corpo físico ao alcance do conjurador.",
                type:"AT",
                attaclRoll20:"O alvo sofre 1d6 de dano adicional.",
                level:"1"
            },
            "Fender":{
                description:"O conjurador sofre 2 de dano e o alvo sofre 3d6 de dano. Caso este dano destrua o alvo, ele explode em um raio de 2 metros de um ponto em seu espaço, causando 1d6 de dano a tudo na área devido aos detritos arremessados. Cada criatura na área, que for bem-sucedida em uma jogada de desafio de Agilidade, sofre metade do dano.",
                target:" Um objeto feito de vidro, metal ou pedra no campo de visão do conjurador a média distância.",
                type:"AT",
                level:"1"
            },
            "Lacerar":{
                description:"O conjurador sofre 2 pontos de dano e faz uma jogada de ataque de Vontade contra a Agilidade do alvo. Caso seja bem-sucedido, ele sofre 3d6 de dano.",
                target:"Uma criatura no campo de visão do conjurador a curta distância.",
                type:"AT",
                attackRoll20:"O alvo sofre 2d6 de dano adicional.",
                level:"1"
            },
            "Corroer":{
                description:"O conjurador sofre 3 pontos de dano e faz uma jogada de ataque de Vontade contra a Agilidade do alvo. Caso seja bem-sucedido, ele fica debilitado por 1 minuto. Ao fim de cada rodada em que o alvo está debilitado por este efeito, ele sofre 1d6 pontos de dano.",
                target:"Uma criatura com corpo físico no campo de visão do conjurador a curta distância.",
                type:"AT",
                attackRoll20:"O alvo sofre 1d6 de dano adicional ao final de cada rodada, enquanto está debilitado por este efeito.",
                level:"2"
            },
            "Poder entrópico":{
                description:"Sofra 3 pontos de dano. Enquanto durar o efeito, as criaturas que sofrerem dano com suas magias de ataque dele sofrem 1d6 de dano adicional. Desencadeada Quando o personagem conjura uma magia de ataque que causa dano, ele pode utilizar uma ação desencadeada para conjurar esta magia, que durará até o final da rodada. Caso o alvo sofra dano da sua magia de ataque, ele sofre 2d6 de dano adicional.",
                duration:"1 minuto.",
                type:"UT",
                level:"2"
            },
            "Detonar":{
                description:"O conjurador sofre 4 pontos de dano. O alvo sofre dano igual à sua própria Saúde e explode em um raio de 4 metros de um ponto em seu espaço, causando 6d6 de dano a tudo na área devido aos detritos arremessados. Cada criatura na área, que for bem-sucedida em uma jogada de desafio de Agilidade, sofre metade do dano.",
                target:" Um objeto (que nunca tenha sido uma criatura) de Tamanho 1 ou menor no campo de visão do conjurador a média distância.",
                type:"AT",
                level:"3"
            },
            "Evaporar":{
                description:"O conjurador sofre 4 pontos de dano e faz uma jogada de ataque de Vontade contra a Agilidade do alvo. Caso seja bem-sucedido, ele sofre 6d6 de dano e começa a evaporar. Um objeto destruído por este dano evapora em uma névoa suave. Uma criatura incapacitada por este dano morre instantaneamente e se torna uma nuvem carmim, que obscurece parcialmente o espaço ocupado por 1 rodada.",
                target:" Uma criatura ou objeto com corpo físico ao alcance do conjurador.",
                type:"AT",
                attackRoll20:"O alvo sofre 2d6 de dano adicional.",
                level:"3"
            },
            "Destruir":{
                description:"O conjurador sofre 5 pontos de dano. O alvo sofre 30 pontos de dano.",
                target:"Uma criatura ou objeto de Tamanho 3 ou menor no campo de visão do conjurador a média distância.",
                type:"AT",
                level:"4"
            },
            "Desintegrar":{
                description:"O conjurador sofre 6 pontos de dano e faz uma jogada de ataque de Vontade contra a Agilidade do alvo. Caso seja bem-sucedido, ele sofre 9d6 de dano. Uma criatura incapacitada por este dano morre imediatamente e é reduzida a um pequeno monte de poeira no espaço que ocupava.",
                target:"Uma criatura ou objeto com corpo físico no campo de visão do conjurador a longa distância.",
                type:"AT",
                attackRoll20:"O alvo sofre 3d6 de dano adicional.",
                level:"5"
            }
        }
    },
    "Fogo": {
        attribute: "will",
        darkMagic: false,
        spells: {
            "Controlar chama":{
                description:"O conjurador acende ou apaga uma chama em um alvo.",
                target:"Um objeto inflamável de Tamanho 1 ou menor a curta distância.",
                type:"UT",
                level:"0"
            },
            "Projétil de chamas":{
                description:"O conjurador libera um projétil incandescente sobre o alvo. O conjurador faz uma jogada de ataque de Vontade contra a Agilidade do alvo. Caso seja bem-sucedido, ele sofre 1d6 de dano.",
                target:"Uma criatura ou objeto a longa distância.",
                type:"AT",
                attackRoll20:"O alvo sofre 1d6 de dano adicional.",
                level:"0"
            },
            "Explosão do fogo":{
                description:"Chamas saltam das suas mãos, causando 3d6 de dano a tudo na área. As criaturas na área sofrem metade do dano, caso sejam bem-sucedidas em uma jogada de desafio de Agilidade.",
                area:"Um cone, 3 metros de comprimento, originado em um ponto ao alcance do conjurador.",
                type:"AT",
                level:"1"
            },
            "Meteoro":{
                description:"O conjurador arremessa uma rocha em chamas. Quando ela atinge o alvo, ou caso encontre uma criatura ou objeto sólido antes, explode. Chamas se dispersam em uma esfera de 1 metro de raio, centrada no alvo em um ponto no espaço da criatura ou objeto, causando 2d6+2 de dano a tudo na área. As criaturas na área sofrem metade do dano, caso sejam bem-sucedidas em uma jogada de desafio de Agilidade.",
                target:"Um ponto no espaço a média distância.",
                type:"AT",
                level:"1"
            },
            "Proteção contra as chamas":{
                description:"O conjurador toca o alvo. Enquanto durar a magia, ele sofre metade do dano por fogo.",
                target:"Uma criatura ao alcance do conjurador.",
                duration:"1 hora.",
                type:"UT",
                level:"1"
            },
            "Mortalha flamejante":{
                description:"Chamas envolvem o conjurador enquanto durar a magia, iluminando um raio de 10 metros ao redor dele. As chamas são quentes, mas não ferem o conjurador nem nada que ele carrega. Enquanto durar a magia, ele sofre metade do dano por frio e não fica fatigado por exposição a temperaturas baixas. Além disso, quando uma criatura toca o conjurador ou obtém um sucesso em um ataque contra ele utilizando uma arma de combate corpo a corpo, ela sofre 1d6 de dano por fogo.",
                duration:"1 minuto",
                type:"UT",
                level:"2"
            },
            "Bola de fogo":{
                description:"O conjurador arremessa um globo de fogo. Quando esse globo atinge o alvo, ou caso encontre uma criatura ou objeto sólido antes, ele explode. Chamas se dispersam em uma esfera de 5 metros de raio, centrada no alvo em um ponto no espaço da criatura ou objeto, causando 5d6 de dano a tudo na área. Cada criatura na área sofre metade do dano, caso seja bem-sucedida em uma jogada de desafio de Agilidade.",
                target:"Um ponto no espaço a longa distância.",
                type:"AT",
                level:"3"
            },
            "Imolar":{
                description:"O alvo fumega e ameaça explodir em chamas. O conjurador faz uma jogada de ataque de Vontade contra a Agilidade do alvo. Caso seja bem-sucedido, o alvo sofre 4d6 de dano e pega fogo.",
                target:"Uma criatura ou objeto a média distância.",
                type:"AT",
                attackRoll20:"O alvo sofre 2d6 de dano adicional.",
                level:"3"
            },
            "Muralha de chamas":{
                description:"Chamas preenchem a área durante o efeito da magia, obscurecendo parcialmente tudo dentro e atrás delas. Criaturas ou objetos na área sofrem 3d6 de dano, quando o personagem conjura a magia ou ao entrarem na área. Ao fim de cada rodada, enquanto dura a magia, cada criatura e objeto inflamável sofre 3d6 de dano e criaturas a curta distância da borda sofrem 1d6 de dano, a não ser que obtenham sucesso em uma jogada de desafio de Força.",
                area:"Uma linha moldável com 10 metros de comprimento, 5 metros de altura e 1 metro de largura, originada de um ponto a longa distância.",
                duration:"1 minuto.",
                type:"AT",
                level:"4"
            },
            "Compelir gênio das chamas":{
                description:"No fim da rodada na qual esta magia é conjurada, o cubo alvo se torna um gênio de chamas de Tamanho 2. O conjurador não pode finalizar esta magia voluntariamente. Quando o gênio aparece, o conjurador faz uma jogada de ataque de Vontade contra a Vontade dele. O gênio se torna compelido pela duração da magia, caso a jogada seja bem-sucedida, ou se torna hostil, caso seja um fracasso.",
                target:"Um cubo de fogo com 2 metros de lado, originado de um ponto a longa distância.",
                duration:"1 minuto",
                type:"UT",
                level:"5"
            }
        }
    },
    "Natureza": {
        attribute: "will",
        darkMagic: false,
        spells: {
            "Bolotas mágicas":{
                description:"O conjurador toca os alvos, imbuindo cada um com magia que dura até o fim do efeito ou até serem usados por uma criatura. Ela pode atacar com as bolotas ao arremessá-las contra criaturas ou objetos a curta distância, fazendo uma jogada de ataque de Agilidade contra a Agilidade do alvo. Caso obtenha sucesso, ele sofre 1d3 de dano e fica lento por 1 rodada. Caso seja incapacitado por esse dano, o alvo se enraíza no chão e se transforma em um broto permanentemente.",
                target:"Até cinco bolotas, nozes ou sementes ao alcance do conjurador.",
                duration:"1 hora; consulte o efeito.",
                type:"AT",
                attackRoll20:"O alvo sofre 1d6 de dano adicional.",
                level:"0"
            },
            "Pele de carvalho":{
                description:"Enquanto durar a magia, o conjurador ganha um bônus de +2 para sua Defesa. Além disso, quando tenta se esconder em ambientes de floresta, ele faz jogadas de desafio de Agilidade com 1 dádiva.",
                duration:"1 hora",
                type:"UT",
                level:"0"
            },
            "Bagas curativas":{
                description:"O conjurador toca os alvos, imbuindo cada um com magia que dura até o fim do efeito ou até serem consumidas. Uma criatura viva pode utilizar uma ação para consumir a fruta alvo, curando uma quantidade de dano igual à metade de sua taxa de cura.",
                target:"Até três frutas, ao  alcance do conjurador.",
                duration:"8 horas; consulte o efeito.",
                type:"UT",
                level:"1"
            },
            "Exuberância":{
                description:"Ervas e cipós se espalham por uma área, que se torna terreno difícil enquanto durar a magia. Quando o efeito termina, o crescimento resseca e morre.",
                area:"Um círculo no solo com 10 metros de raio, centrado em um ponto a média distância.",
                duration:"1 hora.",
                type:"UT",
                level:"1"
            },
            "Shillelagh":{
                description:"O conjurador imbui a arma alvo com magia que dura até o fim do efeito ou até que ele o solte. Enquanto segura a arma alvo, o conjurador recebe um bônus de +2 para seu Deslocamento e ataques, também causa 1d6 de dano adicional.",
                target:"Um porrete ou cajado empunhado pelo conjurador.",
                duration:"1 hora; consulte o efeito.",
                type:"UT",
                level:"1"
            },
            "Pinhas flamejantes":{
                description:"O conjurador toca os alvos, imbuindo cada um com magia que dura até o fim do efeito ou até serem usados para atacar uma criatura. O item imbuído lança luz em um raio de 5 metros ao seu redor. Uma criatura pode atacar com os alvos ao arremessá-los contra criaturas ou objetos a média distância, fazendo uma jogada de ataque de Agilidade contra a Agilidade do alvo. Caso obtenha sucesso, ele sofre 1d6 de dano, e tudo a 1 metro dele sofre 1d3 de dano pelas faíscas.",
                target:"Até cinco pinhas, nozes ou sementes ao alcance do conjurador.",
                duration:"8 horas; consulte o efeito.",
                type:"AT",
                attackRoll20:"O alvo do ataque sofre 1d6 de dano adicional.",
                level:"2"
            },
            "Vinhas enredantes":{
                description:"Vinhas irrompem sob os alvos. Cada alvo deve obter sucesso em um teste de Agilidade ou fica imobilizado por 1 minuto. O alvo pode utilizar uma ação para remover a aflição, arrancando as vinhas.",
                target:"Até cinco criaturas a média distância.",
                type:"AT",
                level:"2"
            },
            "Caminhar pela floresta":{
                description:"O conjurador, junto com tudo que veste e carrega, fica verde-claro enquanto durar a magia. Durante o efeito, o conjurador pode entrar em um espaço ocupado por uma planta de seu Tamanho ou maior e instantaneamente sair em um espaço aberto de outra planta de seu Tamanho ou maior a média distância da planta cujo espaço ele entrou.",
                duration:"1 minuto.",
                target:"UT",
                level:"3"
            },
            "Espinheiro":{
                description:"Espinheiros com espinhos afiados como navalhas se espalham pela área, que se torna terreno difícil enquanto durar a magia. Quando o efeito termina, o espinheiro resseca e morre. Qualquer criatura que entre na área ou se mova através dela deve fazer uma jogada de desafio de Agilidade com 1 perdição, sofrendo 1d6 de dano, caso fracasse.",
                area:"Um círculo no solo com 10 metros de raio, centrado em um ponto a média distância.",
                duration:"1 minuto.",
                type:"UT",
                level:"3"
            },
            "Fúria da natureza":{
                description:"Vinhas como chicotes saltam e causam 3d6 de dano a cada alvo. Cada alvo deve fazer uma jogada de desafio de Agilidade. Caso fracasse, ele é movido 6 metros em uma direção escolhida pelo conjurador e fica imobilizado por 1 minuto. O alvo pode utilizar uma ação para fazer uma jogada de desafio de Força com 1 perdição, removendo a aflição, caso seja bem-sucedido.",
                area:"Até cinco criaturas a média distância.",
                type:"AT",
                level:"4"
            },
            "Forma do guradião de carvalho":{
                description:"O conjurador se transforma em uma poderosa árvore animada. Enquanto durar a magia, ele não pode conjurar magias, mas recebe os seguintes benefícios:<br>• Bônus de +3 para Defesa, +15 de para Saúde e seu Tamanho duplica.<br>• Faz jogadas de ataque e de desafio de Força com 1 dádiva.<br>• Seus galhos contam como armas de combate corpo a corpo que causam 3d6 de dano. <br>• Pode utilizar uma ação desencadeada em seu turno para gastar a conjuração de uma magia de Natureza. Caso faça isso, ele prolonga a duração da magia por uma quantidade de minutos igual ao nível da magia.",
                duration:"1 minuto",
                type:"UT",
                level:"5"
            }
        }
    },
    "Primitiva": {
        attribute: "will",
        darkMagic: false,
        spells: {
            "Esconder-se de animais":{
                description:"O conjurador se esconde de todos os animais enquanto durar a magia. Este efeito termina imediatamente, caso execute um ataque.",
                duration:"1 minuto; consulte o efeito.",
                type:"UT",
                level:"0"
            },
            "Fera interior":{
                description:"Os olhos do conjurador brilham, pelos cobrem seu corpo, as unhas crescem formando garras e os dentes se tornam presas. Enquanto durar a magia, ele ganha visão no escuro e um bônus de +2 no Deslocamento, seus ataques desarmados e armas naturais causam 1d6 de dano adicional.",
                duration:"1 minuto.",
                type:"UT",
                level:"0"
            },
            "Amizade animal":{
                description:"O conjurador faz uma jogada de ataque de Vontade contra a Vontade do alvo. Ele faz uma jogada de ataque com 1 dádiva, se estiver sob o efeito da magia idioma das feras. Caso a Saúde do alvo seja maior que a do conjurador, a magia fracassa e a conjuração é perdida. Caso seja bem-sucedido, o alvo fica encantado até que o conjurador complete um descanso. Ele o acompanha em suas aventuras e o ajuda da melhor maneira possível, embora permaneça sob controle do Mestre. O conjurador pode ter uma quantidade igual ao seu Poder de animais encantados desta forma. Caso a conjuração desta magia exceda essa quantidade, o efeito termina automaticamente no animal afetado há mais tempo.",
                target:"Um animal que possa ver o conjurador a curta distância.",
                type:"AT",
                attackRoll20:"O alvo fica permanentemente encantado.",
                level:"1"
            },
            "Idioma das feras":{
                description:"Enquanto durar a magia, o conjurador pode se comunicar com qualquer animal que possa ouvi-lo.",
                duration:"1 minuto.",
                type:"UT",
                level:"1"
            },
            "Convocar animal pequeno":{
                description:"Um animal pequeno ou minúsculo compelido aparece na área. O animal minúsculo pode ter uma das seguintes propriedades: escalador, nadador, venenoso ou voador. O animal é de um tipo apropriado ao ambiente no qual o personagem conjurou esta magia. Quando o efeito termina, o animal fica incapacitado, voltando para onde veio.",
                area:"Um cubo de espaço, com 1 metro de lado, originado em ponto a média distância sob uma superfície sólida.",
                type:"UT",
                level:"1"
            },
            "Convocar animal médio":{
                description:"Esta magia funciona como convocar animaL pequeno, exceto que um animal médio, pequeno ou minúsculo aparece na área. Um animal pequeno ou minúsculo pode ter uma das seguintes propriedades: escalador, nadador, venenoso ou voador.",
                area:"Um cubo de espaço, com 1 metro de lado, originado em ponto a média distância sob uma superfície sólida.",
                duration:"1 hora.",
                type:"UT",
                level:"2"
            },
            "Bote":{
                description:"O conjurador se desloca até o dobro de seu Deslocamento. A qualquer momento durante esse movimento, ele pode fazer um ataque desarmado ou com uma arma natural contra um alvo a seu alcance, utilizando Vontade no lugar do atributo que o ataque utilizaria normalmente. Caso seja bem-sucedido, o alvo sofre o dano do ataque mais 2d6 de dano adicional e fica prostrado.",
                requirements:"O conjurador deve estar sob efeito da magia fera interior.",
                type:"AT",
                level:"2"
            },
            "Convocar animal grande":{
                description:"Esta magia funciona como convocar animaL pequeno, exceto que um animal grande, médio ou pequeno aparece na área. Um animal médio ou pequeno pode ter uma dos seguintes propriedades: escalador, nadador, venenoso ou voador.",
                area:"Um cubo de espaço, com 2 metros de lado, originado em ponto a média distância sob uma superfície sólida.",
                duration:"1 hora.",
                type:"UT",
                level:"3"
            },
            "Chamado da selva":{
                description:"Os alvos assumem características bestiais. Enquanto durar a magia, cada alvo recebe um bônus de +10 para Saúde e +2 para Deslocamento, e causa 1d6 de dano adicional com seus ataques utilizando golpes desarmados e armas naturais.",
                target:"Até cinco criaturas a curta distância.",
                duration:"1 minuto.",
                type:"UT",
                level:"4"
            },
            "Convocar animal enorme":{
                description:"Esta magia funciona como convocar animaL pequeno, com exceção de que um animal enorme, grande ou médio aparece na área. Um animal grande ou médio pode ter uma das seguintes propriedades: escalador, nadador, venenoso ou voador.",
                area:"Um cubo de espaço, com 3 metros de lado, originado em ponto a média distância sob uma superfície sólida.",
                duration:"1 hora.",
                type:"UT",
                level:"5"
            }
        }
    },
    "Tempestade": {
        attribute: "will",
        darkMagic: false,
        spells: {
            "Choque":{
                description:"O conjurador faz uma jogada de ataque de Vontade contra a Agilidade do alvo. O conjurador faz a jogada de ataque com 1 dádiva, se o alvo estiver vestindo ou for feito de metal. Caso seja bem-sucedido, ele sofre 1d6 de dano.",
                target:"Uma criatura a curta distância.",
                type:"AT",
                attackRoll20:"O alvo também fica pasmo até o fim da rodada.",
                level:"0"
            },
            "Névoa":{
                description:"Névoa se espalha e obscurece parcialmente a área enquanto durar a magia ou até ser dispersada pelo vento.",
                area:"Um cilindro com 3 metros de altura e 5 metros de raio, centrado em um ponto a média distância.",
                duration:"1 hora; consulte o efeito.",
                type:"UT",
                level:"0"
            },
            "Chama de Santa Astrid":{
                description:"Chamas verdes inofensivas envolvem os alvos enquanto durar a magia. Cada alvo emite luz em um raio de 1 metro e não pode se tornar invisível ou escondido dos que podem vê-lo, criaturas fazem jogadas de ataque contra ele com 1 dádiva.",
                target:"Até três criaturas ou objetos a curta distância.",
                duration:"1 minuto.",
                type:"UT",
                level:"1"
            },
            "Névoa congelante":{
                description:"Névoa se espalha e obscurece parcialmente a área enquanto durar a magia ou até ser dispersa pelo vento. O chão na área se torna escorregadio e é considerado terreno difícil até o fim do efeito. Qualquer criatura na área quando a magia é conjurada ou ao fim da rodada enquanto estiver ativa deve fazer uma jogada de desafio de Força. Caso fracasse, ela sofre 1d3 de dano e fica lenta por 1 rodada.",
                area:"Um cilindro com 3 metros de altura e 5 metros de raio, centrado em um ponto a média distância.",
                duration:"1 minuto; consulte o efeito.",
                type:"AT",
                level:"1"
                
        }
    },
    "Terra": {
        attribute: "will",
        darkMagic: false,
        spells: {
            
        }
    },
    "Teurgia": {
        attribute: "will",
        darkMagic: false,
        spells: {
            
        }
    },
    "Transformação": {
        attribute: "will",
        darkMagic: false,
        spells: {
            
        }
    },
    "Vida": {
        attribute: "will",
        darkMagic: false,
        spells: {
            
        }
    }
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
        else
            return 1;
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
