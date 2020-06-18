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
            
        }
    },
    "Canção": {
        attribute: "will",
        darkMagic: false,
        spells: {
            
        }
    },
    "Caos": {
        attribute: "will",
        darkMagic: false,
        spells: {
            
        }
    },
    "Celestial": {
        attribute: "will",
        darkMagic: false,
        spells: {
            
        }
    },
    "Destruição": {
        attribute: "will",
        darkMagic: false,
        spells: {
            
        }
    },
    "Fogo": {
        attribute: "will",
        darkMagic: false,
        spells: {
            
        }
    },
    "Natureza": {
        attribute: "will",
        darkMagic: false,
        spells: {
            
        }
    },
    "Primitiva": {
        attribute: "will",
        darkMagic: false,
        spells: {
            
        }
    },
    "Tempestade": {
        attribute: "will",
        darkMagic: false,
        spells: {
            
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
