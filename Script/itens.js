// Preços em milavos
item = {
    weapon: {
        // ARMAS BÁSICAS DE COMBATE CORPO A CORPO
        "Adaga ou faca": {
            type: "Corpo a Corpo",
            damage: "1d3",
            hands: "Uma",
            properties: ["Acuidade", "Arremessável", "Alcance (curto)"],
            price: 50,
            availability: "C"
        },
        "Azagaia": {
            type: "Corpo a Corpo",
            damage: "1d3",
            hands: "Prim",
            properties: ["Acuidade", "Arremessável", "Distância (média)"],
            price: 100,
            availability: "C"
        },
        "Cajado": {
            type: "Corpo a Corpo",
            damage: "1d6+1",
            hands: "Duas",
            properties: ["Acuidade"],
            price: 50,
            availability: "C"
        },
        "Dardo": {
            type: "Corpo a Corpo",
            damage: "1",
            hands: "Uma",
            properties: ["Acuidade", "Arremessável", "Distância (curta)"],
            price: 10,
            availability: "C"
        },
        "Foice ou lança": {
            type: "Corpo a Corpo",
            damage: "1d6",
            hands: "Prim",
            properties: ["Acuidade"],
            price: 100,
            availability: "C"
        },
        "Golpe desarmado": {
            type: "Corpo a Corpo",
            damage: "1",
            hands: "Uma",
            properties: ["Acuidade"],
            price: null,
            availability: ""
        },
        "Machado": {
            type: "Corpo a Corpo",
            damage: "1d6+1",
            hands: "Prim",
            properties: [],
            price: 100,
            availability: "C"
        },
        "Martelo ou machadinha": {
            type: "Corpo a Corpo",
            damage: "1d3",
            hands: "Uma",
            properties: ["Arremessável", "Distância (curta)"],
            price: 100,
            availability: "C"
        },
        "Porrete": {
            type: "Corpo a Corpo",
            damage: "1d6",
            hands: "Prim",
            properties: [],
            price: 50,
            availability: "C"
        },
        // ARMAS DE COMBATE À DISTÂNCIA
        "Arco": {
            type: "Combate à Distancia",
            damage: "1d6",
            hands: "Duas",
            properties: ["Distância (longa)", "Usa flechas"],
            price: 500,
            availability: "C"
        },
        "Arco longo (exige Força 9+)": {
            type: "Combate à Distancia",
            damage: "1d6+1",
            hands: "Duas",
            properties: ["Tamanho 1", "Distância (longa)", "Usa flechas"],
            price: 1000,
            availability: "I"
        },
        "Besta": {
            type: "Combate à Distancia",
            damage: "2d6",
            hands: "Duas",
            properties: ["Distância (longa)", "Recarregar", "Usa virotes"],
            price: 1000,
            availability: "C"
        },
        "Besta manual": {
            type: "Combate à Distancia",
            damage: "1d6",
            hands: "Uma",
            properties: ["Distância (curta)", "Recarregar", "Usa virotes"],
            price: 2000,
            availability: "R"
        },
        "Funda": {
            type: "Combate à Distancia",
            damage: "1d3",
            hands: "Uma",
            properties: ["Distância (média)", "Usa pedras"],
            price: 50,
            availability: "C"
        },
        "Pistola": {
            type: "Combate à Distancia",
            damage: "2d6",
            hands: "Uma",
            properties: ["Falha", "Distância (médio)", "Recarregar", "Usa balas"],
            price: 5000,
            availability: "E"
        },
        "Rifle": {
            type: "Combate à Distancia",
            damage: "3d6",
            hands: "Duas",
            properties: ["Falha", "Distância (longa)", "Recarregar", "Usa balas"],
            price: 10000,
            availability: "E"
        },
        "Zarabatana": {
            type: "Combate à Distancia",
            damage: "1d3",
            hands: "Prim",
            properties: ["Distância (média)", "Usa agulhas"],
            price: 100,
            availability: "I"
        },
        // ESCUDOS (EXIGEM FORÇA 9 OU MAIOR)
        "Escudo pequeno": {
            type: "Escudo",
            damage: "1",
            hands: "Uma",
            properties: ["Defensivo +1"],
            price : 50,
            availability: "C"
        },
        "Escudo grande (exige Força 11+)": {
            type: "Escudo",
            damage: "1d3",
            hands: "Uma",
            properties: ["Tamanho 1", "Defensivo +2"],
            price : 100,
            availability: "C"
        },
        // ARMAS MILITARES DE COMBATE CORPO A CORPO (EXIGEM FORÇA 11 OU MAIOR)
        "Espada bastarda ou martelo de guerra": {
            type: "Corpo a Corpo - Arma Militar",
            damage: "2d6",
            hands: "Duas",
            properties: ["Pesada"],
            price: 1000,
            availability: "R"
        },
        "Glaive, alabarda, espontão": {
            type: "Corpo a Corpo - Arma Militar",
            damage: "1d6+2",
            hands: "Duas",
            properties: ["Alcance +1"],
            price: 1000,
            availability: "I"
        },
        "Lança": {
            type: "Corpo a Corpo - Arma Militar",
            damage: "1d6",
            hands: "Prim",
            properties: ["Acuidade", "Arremessável", "Distância (curta)"],
            price: 100,
            availability: "C"
        },
        "Lança de cavalaria": {
            type: "Corpo a Corpo - Arma Militar",
            damage: "1d6+1",
            hands: "Duas",
            properties: ["Uma mão quando montado", "Alcance +2"],
            price: 500,
            availability: "I"
        },
        "Maça": {
            type: "Corpo a Corpo - Arma Militar",
            damage: "1d6",
            hands: "Uma",
            properties: [],
            price: 500,
            availability: "C"
        },
        "Machado de batalha, mangual, estrela da manhã, picareta, ou espada": {
            type: "Corpo a Corpo - Arma Militar",
            damage: "1d6+2",
            hands: "Prim",
            properties: [],
            price: 500,
            availability: "I"
        },
        "Pique": {
            type: "Corpo a Corpo - Arma Militar",
            damage: "1d6",
            hands: "Duas",
            properties: ["Tamanho 1", "Alcance +2"],
            price: 500,
            availability: "I"
        },
        "Tridente": {
            type: "Corpo a Corpo - Arma Militar",
            damage: "1d6",
            hands: "Uma",
            properties: ["Arremessável", "Distância (curta)"],
            price: 500,
            availability: "I"
        },
        // ARMAS RÁPIDAS DE COMBATE CORPO A CORPO (EXIGEM FORÇA OU AGILIDADE 11 OU MAIOR)
        "Chicote": {
            type: "Corpo a Corpo - Armas Rápidas",
            damage : "1d3",
            hands: "Uma",
            properties: ["Acuidade", "Alcance +1"],
            price: 500,
            availability: "I"
        },
        "Corrente, cutelo, faca longa, flagelo, ou espada curta": {
            type: "Corpo a Corpo - Armas Rápidas",
            damage : "1d6",
            hands: "Uma",
            properties: ["Acuidade"],
            price: 500,
            availability: "I"
        },
        "Rapieira, sabre ou cimitarra": {
            type: "Corpo a Corpo - Armas Rápidas",
            damage : "1d6+1",
            hands: "Prim",
            properties: ["Acuidade"],
            price: 1000,
            availability: "I"
        },
        // ARMAS PESADAS DE COMBATE CORPO A CORPO (EXIGEM FORÇA 13 OU MAIOR)
        "Espada bastarda ou martelo de guerra": {
            type: "Corpo a Corpo - Armas Pesadas",
            damage: "2d6",
            hands: "Prim",
            properties: ["Pesada"],
            price: 1000,
            availability: "R"
        },
        "Machado grande, espada grande ou malho": {
            type: "Corpo a Corpo - Armas Pesadas",
            damage: "3d6",
            hands: "Duas",
            properties: ["Pesada"],
            price: 2000,
            availability: "R"
        }
    },
    ammo: {
        "Balas e Pólvora": 20,
        "Dardo": 10,
        "Flecha": 10,
        "Pedras": 10,
        "Virote": 10
    },
    weaponProperties: {
        "Acuidade": "O personagem pode fazer jogadas de ataque de Força ou de Agilidade quando ataca utilizando essa arma.",
        "Alcance +#": ": O jogador adiciona o valor \"#\" ao seu alcance quando ataca com essa arma.",
        "Arremessável": "O personagem pode fazer um ataque à distância com essa arma arremessando-a.",
        "Defensiva +#": "O personagem adiciona o valor \"#\" a sua Defesa enquanto empunha essa arma.",
        "Distância (curta, média ou longa)": " Esta entrada descreve a categoria de distância normal atingida pela arma.",
        "Falha": "Quando o personagem ataca com essa arma e o total de sua jogada de ataque é 0 ou menos, a arma falha. Jogue um d6. Caso o resultado seja um número par, o disparo simplesmente falha, a arma pode ser utilizada novamente assim que o personagem gastar 1 minuto para limpar o barril e reparar a arma utilizando ferramentas. Caso o resultado seja um número ímpar, a arma explode e o personagem sofre 2d6 de dano.",
        "Pesada": "Quando o personagem ataca com essa arma, ele faz a jogada de ataque com 1 perdição.",
        "Recarregar": " Essa arma pode ser utilizada para atacar apenas se estiver carregada.",
        "Tamanho 1": "O personagem deve ter Tamanho 1 ou maior para empunhar essa arma.",
        "Usa [munição]": "A arma dispara uma unidade do tipo de munição indicada. O personagem precisa ter uma unidade desta munição para atacar com a arma.",
    },
    armor: {
        // Roupas (Sem Requisito de Força)
        "Roupas": {
            type: "Roupas (Sem Requisito de Força)",
            defense: "Agilidade",
            price: null,
            availability: "C",
            description: "Roupas abrangem tudo, dos trapos de um aldeão até as roupas finas de um nobre."
        },
        "Couro": {
            type: "Roupas (Sem Requisito de Força)",
            defense: "Agilidade +1",
            price: 200,
            availability: "C",
            description: "Basicamente uma roupa de couro, o couro oferece uma proteção mínima, mas pode ser usado por qualquer um."
        },
        // Armadura Leve (Exige Força 11 ou maior)
        "Couro Batido": {
            type: "Armadura Leve (Exige Força 11 ou maior)",
            defense: "Agilidade +2",
            price: 500,
            availability: "C",
            description: "Esta armadura consiste de uma placa de peito, ombreiras, grevas e um gorro. Cada componentes é cozido em óleo e moldado na forma do corpo do usuário. Algumas apresentam rebites ou espinhos."
        },
        "Brigandina": {
            type: "Armadura Leve (Exige Força 11 ou maior)",
            defense: "13",
            price: 500,
            availability: "C",
            description: "A brigandina é um tipo de roupa reforçada com fitas de metal entre camadas de couro ou presas com rebites de metal. Ela costuma ser feita de um casaco de manga longa com grevas nas pernas."
        },
        // Armadura Média (Exige Força 13 ou maior)
        "Cota de Malha": {
            type: "Armadura Média (Exige Força 13 ou maior)",
            defense: "15",
            price: 1000,
            availability: "I",
            description: "Malha é um tecido feito de argolas de metal unidos sobre uma roupa acolchoada. A armadura inclui capuz, camisão com mangas e perneiras. Também acompanha um elmo."
        },
        "Escamas": {
            type: "Armadura Média (Exige Força 13 ou maior)",
            defense: "16",
            price: 2000,
            availability: "I",
            description: "A armadura de escamas é feita de pequenas escamas de metal sobrepostas. Ela cobre o torso, braços e região da cintura. A armadura inclui um elmo."
        },
        // Armadura Pesada (Exige Força 15 ou maior)
        "Cota de Malha Reforçada": {
            type: "Armadura Pesada (Exige Força 15 ou maior)",
            defense: "17",
            price: 5000,
            availability: "R",
            description: "Esta armadura completa de cota de malha é reforçada com placas, faixas e tiras de metal. Ela inclui uma placa de peito, grevas, ombreiras e outros componentes utilizados sobre a cota de malha e roupa acolchoada. Inclui um elmo fechado."
        },
        "Armadura Completa": {
            type: "Armadura Pesada (Exige Força 15 ou maior)",
            defense: "18",
            price: 25000,
            availability: "E",
            description: "Esta armadura protege o corpo com grandes placas, faixas ou tiras de metal utilizadas sobre uma cota de malha acolchoada. A armadura inclui uma placa de peito, grevas, ombreiras e um elmo."
        },
    },
    personalGear: {
        "Algibeira": {
            price: 10,
            availability: "C"
        },
        "Aljava para flechas ou virotes": {
            price: 5,
            availability: "C"
        },
        "Arpéu": {
            price: 10,
            availability: "I"
        },
        "Barril": {
            price: 20,
            availability: "C"
        },
        "Baú, madeira": {
            price: 40,
            availability: "I"
        },
        "Cachimbo": {
            price: 20,
            availability: "I"
        },
        "Caixa, metal": {
            price: 50,
            availability: "I"
        },
        "Cartas, baralho": {
            price: 3,
            availability: "I"
        },
        "Charutos, caixa": {
            price: 10,
            availability: "C"
        },
        "Cobertor": {
            price: 10,
            availability: "C"
        },
        "Conjunto de talheres": {
            price: 5,
            availability: "I"
        },
        "Corda (20 metros)": {
            price: 10,
            availability: "C"
        },
        "Cravo, grande de ferro": {
            price: 10,
            availability: "C"
        },
        "Dados": {
            price: 2,
            availability: "I"
        },
        "Espelho, pequeno de prata": {
            price: 100,
            availability: "R"
        },
        "Fósforos": {
            price: 100,
            availability: "E",
            description: "O personagem pode raspar um fósforo contra uma superfície sólida como uma atividade menor em seu turno. O fósforo transforma escuridão em sombras dentro de um raio de 1 metro centrado em seu espaço. Ele se mantém aceso por no máximo 1 rodada."
        },
        "Frasco": {
            price: 10,
            availability: "C"
        },
        "Grilhões": {
            price: 50,
            availability: "I"
        },
        "Kit de Aventureiro": {
            price: 100,
            availability: "C",
            description: "Este item inclui uma mochila, um saco de dormir, talheres, pederneira, 3 tochas, uma corda (20 metros), arpéu, uma semana de rações e um odre."
        },
        "Lanterna": {
            price: 100,
            availability: "I",
            description: "O personagem pode utilizar uma ação para acender uma lanterna preenchida com óleo. Uma lanterna acesa ilumina uma área com um raio de 10 metros centrada em seu espaço. Uma lanterna preenchida com um frasco inteiro de óleo queima por até 4 horas."
        },
        "Lanterna focada": {
            price: 500,
            availability: "I",
            description: "O personagem pode utilizar uma ação para acender uma lanterna focada preenchida com óleo. Uma lanterna acesa ilumina uma área com forma de cone de 20 metros. Uma lanterna preenchida com um frasco inteiro de óleo queima por até 4 horas."
        },
        "Mapa": {
            price: 100,
            availability: "I"
        },
        "Martelo e 10 pitons": {
            price: 10,
            availability: "I"
        },
        "Mochila": {
            price: 10,
            availability: "C"
        },
        "Odre": {
            price: 10,
            availability: "C"
        },
        "Óleo, frasco": {
            price: 10,
            availability: "C",
            description: "O personagem pode atacar com um frasco de óleo ao arremessá-lo em uma criatura ou objeto a média distância. Ele faz uma jogada de ataque de Agilidade contra a Agilidade do alvo. Caso obtenha sucesso, o óleo cobre o alvo e ele se mantém coberto a não ser que passe 1 minuto se limpando. Se uma criatura ou objeto coberto de óleo sofre dano por eletricidade ou fogo, o óleo entra em chamas e causa 1d6 de dano. O alvo sofre 1d6 de dano ao fim de cada rodada por 1d6 rodadas. A criatura pode utilizar uma ação para apagar as chamas."
        },
        "Panela": {
            price: 10,
            availability: "C"
        },
        "Pederneira": {
            price: 10,
            availability: "C"
        },
        "Porta pergaminho": {
            price: 20,
            availability: "I"
        },
        "Rações (1 semana)": {
            price: 10,
            availability: "C"
        },
        "Saco": {
            price: 5,
            availability: "C"
        },
        "Saco de Dormir": {
            price: 20,
            availability: "C"
        },
        "Tabaco para cachimbo": {
            price: 10,
            availability: "C"
        },
        "Tenda para 2 pessoas": {
            price: 50,
            availability: "I"
        },
        "Tocha": {
            price: 5,
            availability: "C",
            description: "O personagem pode utilizar uma ação para acender uma tocha. Ela ilumina uma área com um raio de 5 metros centrada em seu espaço. Uma tocha acesa queima por até 1 hora."
        },
        "Vara, 3 metros": {
            price: 10,
            availability: "C"
        },
        "Vela": {
            price: 1,
            availability: "I",
            description: "O personagem pode utilizar uma ação para acender uma vela. Uma vela acesa preenche uma área com luz com um raio de 1 metro a partir dela e se mantém acesa por até uma hora."
        }
    },
    clothingAndAccessory: {
        "Bolsa de mão": {
            price: 100,
            availability: "I"
        },
        "Calças, básicas": {
            price: 20,
            availability: "C"
        },
        "Calças, boa qualidade": {
            price: 200,
            availability: "R"
        },
        "Camisa": {
            price: 10,
            availability: "C"
        },
        "Camisa, boa qualidade": {
            price: 100,
            availability: "R"
        },
        "Cartola": {
            price: 80,
            availability: "I"
        },
        "Casaco de inverno": {
            price: 100,
            availability: "C"
        },
        "Casaco leve": {
            price: 50,
            availability: "C"
        },
        "Chapéu feminino": {
            price: 100,
            availability: "I"
        },
        "Cinto": {
            price: 10,
            availability: "C"
        },
        "Colete": {
            price: 30,
            availability: "C"
        },
        "Fantasia, elaborada": {
            price: 500,
            availability: "R"
        },
        "Fantasia, simples ": {
            price: 50,
            availability: "I"
        },
        "Gorro": {
            price: 5,
            availability: "C"
        },
        "Gorro, boa qualidade": {
            price: 100,
            availability: "R"
        },
        "Joias": {
            price: 100,
            availability: "R/E"
        },
        "Luvas, boa qualidade": {
            price: 100,
            availability: "R"
        },
        "Luvas, trabalho": {
            price: 10,
            availability: "C"
        },
        "Macacão de Trabalho": {
            price: 30,
            availability: "C"
        },
        "Manto": {
            price: 50,
            availability: "C"
        },
        "Meia de seda": {
            price: 80,
            availability: "I"
        },
        "Óculos": {
            price: 500,
            availability: "R"
        },
        "Roupas básicas": {
            price: 50,
            availability: "C"
        },
        "Roupas, artista": {
            price: 70,
            availability: "I"
        },
        "Roupas, cortesão": {
            price: 500,
            availability: "R"
        },
        "Roupas, inverno": {
            price: 80,
            availability: "I"
        },
        "Roupas, nobreza": {
            price: 5000,
            availability: "E"
        },
        "Roupas, realeza": {
            price: 25000,
            availability: "E"
        },
        "Sapatos, boa qualidade": {
            price: 200,
            availability: "R"
        },
        "Sapatos, couro": {
            price: 20,
            availability: "C"
        },
        "Sobretudo": {
            price: 100,
            availability: "I"
        },
        "Terno, alfaiataria": {
            price: 400,
            availability: "I"
        },
        "Terno, segunda mão": {
            price: 100,
            availability: "I"
        },
        "Túnica": {
            price: 100,
            availability: "I"
        },
        "Uniforme": {
            price: 50,
            availability: "I"
        },
        "Vestido, básico": {
            price: 50,
            availability: "C"
        },
        "Vestido, boa qualidade": {
            price: 500,
            availability: "R"
        }
    },
    tool: {
        "Água Benta": {
            price: 300,
            availability: "R",
            description: "O personagem pode atacar com a água benta ao arremessá-la em uma criatura ou objeto a seu alcance. Ele faz uma jogada de ataque de Agilidade contra a Agilidade do alvo. Caso seja bem-sucedido, o personagem molha o alvo com a água e o alvo sofre 1 ponto de dano por ponto de Corrupção. Se o alvo for um demônio, diabo, fada, espírito ou morto-vivo, ele sofre 1d6 de dano mais 1 por ponto de Corrupção."
        },
        "Ampulheta": {
            price: 100,
            availability: "R",
            description: "Um pescoço fino conecta os dois bulbos de vidro de uma ampulheta, de maneira que areia possa passar de um para outro. Leva uma hora para que a areia esvazie completamente um bulbo."
        },
        "Azevinho e Visco": {
            price: 10,
            availability: "C"
        },
        "Bola de Cristal": {
            price: 1000,
            availability: "E",
            description: "Uma orbe de 8 cm de diâmetro feita de vidro ou cristal, é necessária para o uso de certas magias de Adivinhação."
        },
        "Ferramentas de Torturador": {
            price: 200,
            availability: "I",
            description: "O personagem pode utilizar uma ação para empregar as ferramentas em uma criatura a seu alcance. Ele deve se concentrar por 10 minutos, durante este tempo usa as ferramentas para ferir o alvo, que deve estar presente durante todo o tempo — normalmente, preso de alguma maneira. Ao fim dos 10 minutos, o personagem faz uma jogada de ataque de Vontade contra a Vontade do alvo. Ele pode decidir causar o dano durante a tortura. O alvo sofre 1d6 de dano das ferramentas e o personagem faz a jogada de ataque com 1 dádiva. Caso seja bem-sucedido, o personagem pode perguntar uma questão. O alvo deve responder verdadeiramente ou inventar algo, caso não saiba a resposta."
        },
        "Garrote": {
            price: 1,
            availability: "C",
            description: "O personagem pode utilizar o garrote quando agarra uma criatura até 1 Tamanho maior que ele. Ele deve empunhar o garrote em ambas as mãos. Caso o personagem seja bem-sucedido na jogada de ataque, o alvo sofre 1d6 de dano da corda sendo amarrada ao redor de seu pescoço conforme é agarrado. Caso o alvo tente escapar, ele faz suas jogadas de ataque com 1 perdição."
        },
        "Gazuas": {
            price: 100,
            availability: "R",
            description: "O personagem pode utilizar uma ação para utilizar gazuas em uma fechadura dentro de seu alcance. Tipicamente, leva 1 minuto de trabalho contínuo para fazer uma tentativa, neste tempo o personagem deve estar concentrado. Quando termina o trabalho, ele faz uma jogada de desafio de Intelecto com 1 ou mais perdições dependendo da qualidade da fechadura. Caso seja bem-sucedido, a fechadura é aberta."
        },
        "Implemento de magia": {
            price: 100,
            availability: "I",
            description: "Um implemento de magia é um item utilizado para conjurar uma magia. Ele pode ser um atame (uma faca mística), um caldeirão, um cristal, um fetiche, um crânio gravado com runas, um medalhão com um pentagrama ou uma varinha. Implementos de magia também incluem ferramentas de adivinhação, tal como cartas, dados, varetas entalhas e assim por diante."
        },
        "Instrumento Musical": {
            price: 100,
            availability: "R",
            description: "Este item inclui diversos instrumentos de percussão, sopro e cordas. O Mestre define o preço baseado no tipo de instrumento procurado. Instrumentos mais raros podem custar 1 co ou mais."
        },
        "Instrumentos de Navegação": {
            price: 200,
            availability: "E",
            description: "Este estojo inclui um sextante e um astrolábio, além de um compasso, mapas e outras ferramentas úteis para navegação."
        },
        "Kit de Alquimia": {
            price: 500,
            availability: "E",
            description: "O personagem utiliza o kit de alquimia para criar poções, venenos e criar outros itens especiais."
        },
        "Kit de Curandeiro (6 usos)": {
            price: 500,
            availability: "I",
            description: "O personagem pode utilizar o kit de curandeiro para cuidar dos ferimentos de uma criatura a seu alcance. Ele gasta um uso do item e faz uma jogada de desafio de Intelecto. Caso o alvo esteja morrendo, o teste é feito com 1 perdição. Caso obtenha sucesso, o alvo cura 1 de dano."
        },
        "Kit de Disfarce (6 usos)": {
            price: 500,
            availability: "R",
            description: "O personagem utiliza um kit de disfarce para disfarçar-se ou disfarçar uma criatura a seu alcance. Ele pode utilizar uma ação para gastar um uso do kit para começar a disfarçar a criatura alvo. Completar o disfarce leva 1 minuto. O disfarce pode aumentar ou diminuir a altura do alvo em alguns centímetros, ajustar o peso em cerca de 25%, mudar cor da pele e do cabelo, adicionar ou esconder características distintas, ou fazer com que o alvo se pareça de um gênero ou ancestralidade diferente. O disfarce, no entanto, não é bom o bastante para permitir que uma pessoa imite outra pessoa em específico. Uma vez criado, o disfarce se mantém em efeito enquanto for utilizado ou até que a criatura seja exposta a algo que o arruinaria, por exemplo, água, fogo ou vento forte. Uma criatura desconfiada pode reconhecer o disfarce utilizando uma ação para fazer uma jogada de desafio de Percepção e sendo bem-sucedida na jogada."
        },
        "Kit de Escrita": {
            price: 100,
            availability: "R"
        },
        "Kit de Ferramentas": {
            price: 100,
            availability: "C",
            description: "Diversas ferramentas utilizadas em uma determinada profissão."
        },
        "Livro, impresso ou tomo": {
            price: 1000,
            availability: "E"
        },
        "Luneta": {
            price: 100000,
            availability: "E",
            description: "Olhar pelo vidro aumenta 5 vezes os objetos distantes."
        },
        "Lupa": {
            price: 100,
            availability: "E",
            description: "Uma lupa fornece 1 dádiva para jogadas de desafio de Percepção feitas para encontrar objetos escondidos, pegadas ou pistas enquanto a utiliza."
        },
        "Pé de Cabra": {
            price: 20,
            availability: "C",
            description: "O pé de cabra fornece 1 dádiva a jogadas de Força feitas para abrir portas, recipientes e outros objetos que possam ser abertos e fechados."
        },
        "Rede": {
            price: 50,
            availability: "C",
            description: "O personagem pode atacar com uma rede ao arremessá-la em uma criatura ou objeto de Tamanho 2 ou menor a curta distância. Ele faz uma jogada de ataque de Força contra a Agilidade do alvo. Caso obtenha sucesso, a rede atinge o alvo e ele fica lento. Enquanto está lento devido a rede, o alvo faz suas jogadas de ataque e desafio de Agilidade com 1 perdição. A criatura presa na rede pode utilizar uma ação para tentar cortar a rede e se libertar, o que a destrói, ou fazer uma jogada de desafio de Agilidade. Outra criatura pode utilizar uma ação para remover a rede, removendo também a aflição."
        },
        "Símbolo Sagrado": {
            price: 50,
            availability: "C"
        },
        "Soqueiras": {
            price: 100,
            availability: "C",
            description: "Soqueiras são vendidas em pares. Enquanto utilizá-las, os ataques desarmados do personagem causam 1 de dano adicional. É possível comprar soqueiras de prata como se fossem armas de mão inábil."
        },
        "Talha": {
            price: 100,
            availability: "I"
        },
        "Veneno": {
            price: 500,
            availability: "R",
            description: "O personagem pode utilizar uma ação para aplicar o veneno na lâmina ou ponta de uma arma; para cobrir três flechas, virotes ou dardos ou para envenenar comida ou bebida. Quando embebidas de veneno, armas e munição ficam venenosas por 1 hora ou até causarem dano. Quando uma criatura sofre dano de uma arma ou munição envenenada desta maneira, ela deve fazer uma jogada de desafio de Força. Caso fracasse, a criatura fica envenenada por 1 minuto. Caso o alvo já esteja envenenado, ele sofre 1d6 de dano adicional. Quando uma criatura consume comida ou bebida envenenada, ela deve fazer uma jogada de desafio de Força com 1 perdição. Caso fracasse, a criatura sofre 1d6 de dano e fica envenenada por 1 minuto. Caso já esteja envenenada por comida ou bebida, ela sofre 3d6 de dano adicional. A criatura envenenada dessa forma deve fazer uma jogada de desafio de Força ao fim de cada rodada. Caso fracasse, a criatura sofre 1d6 de dano. Três sucessos removem a aflição envenenado."
        }
    },
    accommodation: {
        pricePerNight: 10,
        availability: "C"
    },
    food: {
        "Birita": {
            price: 20,
            availability: "C"
        },
        "Cerveja, ale 500ml": {
            price: 2,
            availability: "C"
        },
        "Cerveja, comum 500ml": {
            price: 1,
            availability: "C"
        },
        "Destilado, comum": {
            price: 50,
            availability: "C"
        },
        "Destilado, excelente": {
            price: 100,
            availability: "I"
        },
        "Hidromel, 500ml": {
            price: 4,
            availability: "C"
        },
        "Ópio": {
            price: 50,
            availability: "I"
        },
        "Ração": {
            price: 4,
            availability: "C"
        },
        "Refeição, comum": {
            price: 5,
            availability: "C"
        },
        "Refeição, leve": {
            price: 3,
            availability: "C"
        },
        "Refeição, refinada": {
            price: 50,
            availability: "R"
        },
        "Vinho, bom": {
            price: "2d6 cc",
            availability: "I"
        },
        "Vinho, comum": {
            price: 4,
            availability: "C"
        },
        "Vinho, excelente": {
            price: "2d6 xp",
            availability: "R"
        }
    },
    animal: {
        "Cão (animal pequeno)": {
            properties: deepCopy(animal.small),
            price: 50,
            availability: "C"
        },
        "Cavalo de Guerra": {
            price: 10000,
            availability: "R"
        },
        "Cavalo, mula, pônei": {
            price: 200,
            availability: "C"
        },
        "Falcão (animal minúsculo, voador)": {
            properties: deepCopy(animal.tiny),
            price: 100,
            availability: "E"
        }
    },
    animalGear: {
        "Arreios": {
            price: 10,
            availability: "C"
        },
        "Bolsa de sela": {
            price: 20,
            availability: "I"
        },
        "Cobertor de sela": {
            price: 10,
            availability: "I"
        },
        "Freios e Rédea": {
            price: 10,
            availability: "C"
        },
        "Sela": {
            price: 50,
            availability: "I"
        }
    },
    hireling: {
        "Plebeu": {
            pricePerWeek: 50,
            description: "Servos, carregadores de tochas, trabalhadores e cavalariços executam as funções para as quais são contratados."
        },
        "Profissional": {
            pricePerWeek: 100,
            description: "Alquimistas, ferreiros, joalheiros e acadêmicos executam apenas as tarefas para as quais foram treinados e contratados"
        },
        "Mercenário": {
            pricePerWeek: 500,
            description: "Mercenários são soldados profissionais, eles lutam em troca de pagamento. Eles podem abandonar o serviço caso sofram abuso, sejam forçados a encarar riscos desnecessários ou sejam maltratados de outra maneira."
        }
    },
    potion: {
        "Antitoxina": {
            price: 500,
            availability: "R",
            description: "Este fluido verde brilhante tem um cheiro desagradável. Quando a poção entra em efeito, a criatura remove uma aflição envenenado de si mesma e, por 1 hora, faz jogadas de desafio para resistir a venenos com 1 dádiva."
        },
        "Crescimento": {
            price: 500,
            availability: "E",
            description: "Esta poção verde e grossa cheira a levedura e tem um sabor amargo. Quando a poção entra em efeito, a criatura, junto com tudo que ela veste e carrega, aumenta para Tamanho 2 ou, caso já seja de Tamanho 2 ou maior, aumenta em 1. Ela recebe um bônus para sua Saúde de 2d6 e seus ataques com armas causam 1d6 de dano adicional. Qualquer coisa que tenha sido afetada pela poção volta ao seu tamanho normal se a criatura a deixar cair no chão. O efeito da poção termina depois de 1d6 minutos."
        },
        "Cura": {
            price: 200,
            availability: "I",
            description: "Este líquido transparente tem um suave cheiro de álcool. Quando a poção entra em efeito, a criatura cura uma quantidade de dano igual à sua taxa de cura."
        },
        "Invisibilidade": {
            price: 1000,
            availability: "E",
            description: "Este líquido transparente não tem odor nem sabor. Quando a poção entra em efeito, a criatura fica invisível. O efeito da poção termina depois de 1d6 horas ou imediatamente após ela realizar um ataque."
        },
        "Juventude Passageira": {
            price: 1000,
            availability: "E",
            description: "Este líquido rosa tem cheiro doce e sabor floral. Quando a poção entra em efeito, a criatura cura uma quantidade de dano igual à sua taxa de cura e aparenta estar na flor da idade por 2d6 dias."
        },
        "Panaceia": {
            price: 10000,
            availability: "E",
            description: "Este fluido róseo tem um cheiro adocicado. Quando a poção entra em efeito, a criatura remove todas as doenças e aflições relativas a veneno e cura uma quantidade de dano igual a duas vezes sua taxa de cura."
        },
        "Prontidão": {
            price: 500,
            availability: "R",
            description: "Esta poção é um líquido leitoso com aroma de especiarias. Quando a poção entra em efeito, a criatura faz jogadas de desafio de Percepção com 1 dádiva por 2d6 horas. A criatura não pode descansar até que o efeito da poção termine."
        },
        "Resistência ao Fogo": {
            price: 500,
            availability: "R",
            description: "Este líquido vermelho vivo tem um cheiro ácido. Quando a poção entra em efeito, a criatura sofre metade do dano pelos efeitos de fogo e calor por 1 hora."
        },
        "Visão": {
            price: 500,
            availability: "E",
            description: "Este líquido grosso e negro tem um gosto asqueroso e odor repulsivo. Quando a poção entra em efeito, a criatura pode ver em áreas obscurecidas por sombras e escuridão, como se estivessem iluminadas até o alcance normal de sua visão. O efeito desta poção termina em 3d6 minutos."
        }
    },
    incantation: {
        "Nível 0": {
            price: 100,
            availability: "I"
        },
        "Nível 1": {
            price: 500,
            availability: "I"
        },
        "Nível 2": {
            price: 1000,
            availability: "R"
        },
        "Nível 3": {
            price: 5000,
            availability: "R"
        },
        "Nível 4": {
            price: 10000,
            availability: "E"
        },
        "Nível 5": {
            price: 50000,
            availability: "E"
        },
        "Nível 6": {
            price: 100000,
            availability: "E"
        },
        "Nível 7": {
            price: 250000,
            availability: "Mestre"
        },
        "Nível 8": {
            price: 500000,
            availability: "Mestre"
        },
        "Nível 9": {
            price: 1000000,
            availability: "Mestre"
        },
        "Nível 10": {
            price: 5000000,
            availability: "Mestre"
        }
    }
}