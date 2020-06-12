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
            
        }
    },
    "Alteração": {
        attribute: "will",
        darkMagic: false,
        spells: {
            
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