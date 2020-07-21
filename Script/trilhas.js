class Path{
    constructor(training, pathName, talents, choices = null){
        this._training = training;
        this._pathName = pathName;
        this._talents = talents;
        this._choices = choices || null;
    }
    get training(){
        return this._training;
    }
    set training(newTraining){
        this._training = newTraining;
    }
    get pathName(){
        return this._pathName;
    }
    set pathName(pathName){
        this._pathName = pathName;
    }
    get choices(){
        return this._choices;
    }
    get talents(){
        return this._talents;
    }
    addTalent(name, talent){
        this._talents[name] = talent;
    }
    modifyTalentName(previousName, newName){
        if(previousName in Object.keys(this._talents)){
            this._talents[newName] = this._talents[previousName];
            delete this._talents[previousName];
            return true;
        } else{
            return false;
        }
    }
    modifyTalent(name, talent){
        if(name in Object.keys(this._talents)){
            this._talents[name] = talent;
            return true;
        } else{
            return false;
        }
    }
    deleteTalent(name){
        if(name in Object.keys(this._talents)){
            delete this._talents[name];
            return true;
        } else{
            return false;
        }
    }
}

// Novice Paths

class Warrior extends Path{
    constructor(training, level){
        let talents = {
            "Recuperar o Fôlego": "O guerreiro pode utilizar uma ação ou ação desencadeada em seu turno para curar dano igual à sua taxa de cura. Uma vez que utilizou este talento, o mesmo não pode ser utilizado até que o guerreiro complete um descanso.",
            "Treino com Armas": "Quando o guerreiro ataca com uma arma, ele faz a jogada de ataque com 1 dádiva."
        }
        if(level >= 2){
            talents["Valor em Combate"] = "Os ataques do guerreiro com armas causam 1d6 de dano adicional.";
            talents["Golpe Violento"] = "Quando o resultado total das jogadas de ataque do guerreiro é 20 ou mais e excede o número alvo em 5 ou mais, o ataque causa 1d6 de dano adicional.";
        }
        if(level >= 5){
            talents["Especialização em Combate"] = "Quando o guerreiro utiliza uma ação para atacar com uma arma, ele pode escolher entre causar 1d6 de dano adicional neste ataque ou fazer outro ataque contra um alvo diferente a qualquer momento antes do fim do turno.";
        }
        if(level >= 8){
            talents["Determinação"] = "O guerreiro pode utilizar Recuperar o Fôlego duas vezes a cada descanso.",
            talents["Maestria em Combate"] = "Quando o guerreiro utiliza uma ação para atacar com uma arma, ele pode escolher entre causar 1d6 de dano adicional neste ataque ou fazer outro ataque contra um alvo diferente a qualquer momento antes do fim do turno. Este talento é cumulativo com Especialização em Combate. O guerreiro deve escolher um alvo diferente para cada ataque que fizer."
        }
        super(training, "Guerreiro", talents);
    }

    level2(){
        return {
            health: 5
        }
    }

    level5(){
        return {
            health: 5,
            defense: 1
        }
    }

    level8(){
        return {
            health: 5
        }
    }
}

class Rogue extends Path{
    constructor(training, level, choices){
        let rogueTalent2 = choices.rogueTalent2 || null;
        let rogueTalent8 = choices.rogueTalent8 || null;
        let talents = {
            "Recuperação Ligeira": "O ladino pode utilizar uma ação para curar uma quantidade de dano igual à sua taxa de cura e então se mover até metade de seu Deslocamento sem desencadear ataques livres. Uma vez que utilizou este talento, o mesmo não pode mais ser utilizado até que o ladino tenha completado um descanso.",
            "Trapaça": "Uma vez por rodada, o ladino pode fazer uma jogada de ataque ou desafio com 1 dádiva. Caso o ladino ataque com 1 dádiva deste talento, o ataque causa 1d6 de dano adicional."
        }
        if(level >= 2){
            talents["Explorar Oportunidade"] = "Uma vez por rodada, quando o total da jogada de ataque for 20 ou mais e exceder o número alvo por pelo menos 5, o ladino pode fazer mais um turno a qualquer momento antes do fim da rodada.";
            switch(rogueTalent2){
                case "Ataque Furtivo":
                    talents[rogueTalent2] = "Uma vez por rodada, quando o ladino ataca com uma arma básica ou rápida e faz a jogada de ataque com ao menos 1 dádiva, o ataque causa 1d6 de dano adicional.";
                    break;
                case "Magia":
                    talents[rogueTalent2] = "O ladino aumenta seu Poder em 1 e descobre uma tradição. Em seguida, ele faz duas escolhas: descobrir uma tradição ou aprender uma magia, para cada escolha. ";
                    break;
                case "Escaramuça":
                    talents[rogueTalent2] = "O ladino pode utilizar uma ação para se mover até metade de seu Deslocamento. Esse movimento não desencadeia ataques livres. Durante seu movimento, o ladino pode executar um ataque. A jogada de ataque é feita com 1 perdição, mas o ataque causa 1d6 de dano adicional. ";
                    break;
                case "Subterfúgio":
                    talents[rogueTalent2] = " O personagem pode utilizar uma ação para fazer uma jogada de ataque de Intelecto contra o Intelecto de uma criatura, a curta distância, que possa ouvi-lo e entender o que diz. Caso seja bem-sucedido, o alvo fica encantado por 1 rodada ou até que o ataque. Caso fracasse, o alvo fica imune ao Subterfúgio do ladino até que complete um descanso.";
                    break;
                case "Ameaças":
                    talents[rogueTalent2] = "O ladino pode utilizar uma ação desencadeada em seu turno para fazer uma jogada de ataque de Intelecto contra a Vontade de uma criatura alvo, a curta distância, que possa ouvi-lo e vê-lo. Caso seja bem-sucedido, o alvo fica assustado por 1 rodada. Caso fracasse, o alvo fica imune a Ameaças do ladino até que complete um descanso.";
                    break;
            }
        }
        if(level >= 5){
            talents["Truques Sujos"] = "Os ataques do ladino causam 1d6 de dano adicional quando faz uma jogada de ataque com 1 dádiva.";
            talents["Astúcia Ladina"] = "O ladino pode utilizar Trapaça duas vezes por rodada.";
        }
        if(level >= 8){
            let same = false;
            if(rogueTalent8 == rogueTalent2) same = true;
            switch(rogueTalent8){
                case "Ataque Furtivo":
                    if(same){
                        talents[rogueTalent8] = "Uma vez por rodada, quando o ladino ataca com uma arma básica ou rápida e faz a jogada de ataque com ao menos 1 dádiva, o ataque causa 2d6 de dano adicional.";
                    } else{
                        talents[rogueTalent8] = "Uma vez por rodada, quando o ladino ataca com uma arma básica ou rápida e faz a jogada de ataque com ao menos 1 dádiva, o ataque causa 1d6 de dano adicional.";
                    }
                    break;
                case "Magia":
                    if(same){
                        talents[rogueTalent8 + "2"] = "O ladino aumenta seu Poder em 1 e descobre uma tradição ou aprende uma magia. ";
                    } else{
                        talents[rogueTalent8] = "O ladino aumenta seu Poder em 1 e descobre uma tradição. Em seguida, ele faz duas escolhas: descobrir uma tradição ou aprender uma magia, para cada escolha. ";
                    }
                    break;
                case "Escaramuça":
                    if(same){
                        talents[rogueTalent8] = "O ladino pode utilizar uma ação para se mover até o seu Deslocamento completo. Esse movimento não desencadeia ataques livres. Durante seu movimento, o ladino pode executar um ataque. A jogada de ataque é feita com 1 perdição, mas o ataque causa 1d6 de dano adicional. ";
                    } else{
                        talents[rogueTalent8] = "O ladino pode utilizar uma ação para se mover até metade de seu Deslocamento. Esse movimento não desencadeia ataques livres. Durante seu movimento, o ladino pode executar um ataque. A jogada de ataque é feita com 1 perdição, mas o ataque causa 1d6 de dano adicional. ";
                    }
                    break;
                case "Subterfúgio":
                    if(same){
                        talents[rogueTalent8] = " O personagem pode utilizar uma ação para fazer uma jogada de ataque com uma dádiva de Intelecto contra o Intelecto de uma criatura, a curta distância, que possa ouvi-lo. Caso seja bem-sucedido, o alvo fica encantado por 1 rodada ou até que o ataque. Caso fracasse, o alvo fica imune ao Subterfúgio do ladino até que complete um descanso.";
                    } else{
                        talents[rogueTalent8] = " O personagem pode utilizar uma ação para fazer uma jogada de ataque de Intelecto contra o Intelecto de uma criatura, a curta distância, que possa ouvi-lo e entender o que diz. Caso seja bem-sucedido, o alvo fica encantado por 1 rodada ou até que o ataque. Caso fracasse, o alvo fica imune ao Subterfúgio do ladino até que complete um descanso.";
                    }
                    break;
                case "Ameaças":
                    if(same){
                        talents[rogueTalent8] = "O ladino pode utilizar uma ação desencadeada em seu turno para fazer uma jogada de ataque de Intelecto contra a Vontade de uma criatura alvo, a curta distância, que possa ouvi-lo e vê-lo. Caso seja bem-sucedido, o alvo fica assustado por 1 rodada e os ataques do ladino com armas causam 1d6 de dano adicional a alvos assustados dessa maneira. Caso fracasse, o alvo fica imune a Ameaças do ladino até que complete um descanso.";
                    } else{
                        talents[rogueTalent8] = "O ladino pode utilizar uma ação desencadeada em seu turno para fazer uma jogada de ataque de Intelecto contra a Vontade de uma criatura alvo, a curta distância, que possa ouvi-lo e vê-lo. Caso seja bem-sucedido, o alvo fica assustado por 1 rodada. Caso fracasse, o alvo fica imune a Ameaças do ladino até que complete um descanso.";
                    }
                    break;
            }
        }
        super(training, "Ladino", talents, choices);
    }
    level2(){
        return {
            health: 3
        }
    }

    level5(){
        return {
            health: 3
        }
    }

    level8(){
        return {
            health: 3
        }
    }
}

class Magician extends Path{
    constructor(training, level){
        let talents = {
            "Truques": "Toda vez que descobrir uma tradição, o mágico aprende uma magia de nível 0 adicional daquela tradição.",
            "Sentir Magia": "Área - Uma esfera de 5 metros de raio centrada em um ponto dentro do seu espaço e que permite saber se há algum efeito mágico na área e de que ponto se origina."
        }
        if(level >= 2){
            talents["Recuperar Magia"] = "O mágico pode utilizar uma ação para curar dano igual à sua taxa de cura e recuperar uma conjuração gasta de uma magia conhecida. Uma vez que utilizou este talento, o mesmo não pode ser utilizado até que o mágico complete um descanso.";
        }
        if(level >= 5){
            talents["Contramágica"] = "Quando uma criatura que o personagem pode ver o ataca com uma magia, ele pode utilizar uma ação desencadeada para confrontá-la. A criatura que desencadeou o efeito faz uma jogada de ataque com 1 perdição e o personagem faz uma jogada de desafio para resistir com 1 dádiva.";
        }
        if(level >= 8){
            talents["Recuperar Magia Aprimorado"] = "Quando utilizar Recuperar Magia, o personagem recupera duas conjurações em vez de uma.";
        }
        super(training, "Mágico", talents);
    }
    level2(){
        return {
            health: 2,
            magicChoices: 2
        }
    }

    level5(){
        return {
            health: 2,
            power: 1,
            magicChoices: 1
        }
    }

    level8(){
        return {
            health: 2,
            magicChoices: 1
        }
    }
}

class Priest extends Path{
    constructor(training, level, choices){
        let talents = {
            "Recuperação Compartilhada": "O personagem pode utilizar uma ação para curar dano igual à sua taxa de cura. Então, escolha uma criatura além do personagem que esteja a curta distância. O alvo também cura dano igual à taxa de cura dele. Uma vez que utilizou este talento, o mesmo não pode mais ser utilizado até que o sacerdote complete um descanso."
        }
        if(level >= 2){
            talents["Oração"] = "Quando uma criatura dentro de curta distância do sacerdote faz uma jogada de ataque ou jogada de desafio, ele pode utilizar uma ação desencadeada para fornecer 1 dádiva a jogada desencadeante.";
        }
        if(level >= 5){
            talents["Golpe Divino"] = "Quando o sacerdote utilizar Oração para fornecer a uma criatura 1 dádiva em uma jogada de ataque, o ataque da criatura causa 1d6 de dano adicional.";
        }
        if(level >= 8){
            talents["Oração Inspiradora"] = "Quando o sacerdote utilizar Oração em uma criatura que não seja ele mesmo, ele faz suas jogadas de ataque e de desafio com 1 dádiva por 1 rodada.";
            talents["Recuperação Compartilhada Aprimorada"] = "O sacerdote pode utilizar Recuperação Compartilhada duas vezes.";
        }
        super(training, "Sacerdote", talents, choices);
    }
    level2(){
        return {
            health: 4,
            magicChoices: 2
        }
    }

    level5(){
        return {
            health: 4,
            power: 1,
            magicChoices: 1
        }
    }

    level8(){
        return {
            health: 4,
            magicChoices: 1
        }
    }
}

// Expert Paths

//Trilhas da Fé:
class Clerigo extends Path{
    constructor(training, level){
        let talents = {
            "Convicção": "O clérigo faz jogadas de desafio de Vontade com 1 dádiva para resistir aos efeitos das características assustador e horripilante",
            "Ícone de Fé": "O clérigo escolhe uma tradição que já descobriu e que seja associada a sua religião. Quando conjurar uma magia de ataque daquela tradição enquanto estiver empunhando ou vestindo um símbolo sagrado, o clérigo faz as jogadas de ataque com 1 dádiva e a criatura alvo faz a jogada de desafio para resistir ao ataque com 1 perdição."
        };
        if(level >= 6){
            talents["Símbolo Fortalecido"] = "Quando o clérigo conjura uma magia da tradição que escolheu para Ícone da Fé que causa dano ou cura dano, a magia causa ou cura 1d6 de dano adicional.";
        }
        if(level >= 9){
            talents["Poder Divino"] = "Os benefícios de Ícone da Fé se aplicam a conjuração de quaisquer magias de ataque que sejam de uma tradição associada a religião do clérigo.";
        }
        super(training, "Clérigo", talents);
    }
    level3(){
        return {
            health: 4,
            power: 1,
            magicChoices: 1,
            choice: {
                language: "new",
                profession: "academic",
                profession2: "religious"
            }
        }
    }
    level6(){
        return {
            health: 4,
            magicChoices: 1
        }
    }
    level9(){
        return {
            health: 4,
            power: 1,
            magicChoices: 1
        }
    }
}

class Druida extends Path{
    constructor(training, level){
        let talents = {
            "Mistérios Druídicos": "O druida aprendeu os antigos mistérios druídicos como parte de sua iniciação. Ele pode fazer todos os seguintes:<ul><li>Identificar qualquer animal ou planta que ele possa ver.</li><li>Saber se a água ou comida, que ele vê, é segura para o consumo.</li> <li>Predizer corretamente o clima com 24 horas de antecedência, desde que esteja a céu aberto.</li><li>Mover-se até seu Deslocamento total por terreno difícil, desde que esse seja criado por características naturais de terreno.</li><li>Deixar pegadas quando estiver se movendo por terreno natural apenas quando desejar.</li></ul>"
        };
        if(level >= 6){
            talents["Caminhante das Árvores"] = " Uma vez por rodada, enquanto está se movendo, o druida pode entrar em um espaço ocupado por uma árvore viva e imediatamente sair em um espaço adjacente ao espaço ocupado por outra árvore à média distância do espaço da árvore que entrou. O druida pode escolher sair da árvore que entrou, se movendo para um espaço livre.";
        }
        if(level >= 9){
            talents["Resistir aos Elementos"] = "O druida nunca corre o risco de ficar fatigado por exposição. Você toma metade do dano de eletricidade, fogo, frio e trovões.";
        }
        super(training, "Druida", talents);
    }
    level3(){
        return {
            health: 4,
            power: 1,
            magicChoices: 1,
            choices: {
                language: "new",
                profession: "religious",
                profession: "wilderness"
            }
        }
    }
    level6(){
        return {
            health: 4,
            magicChoices: 1
        }
    }
    level9(){
        return {
            health: 4,
            power: 1,
            magicChoices: 1
        }
    }
}

class Oraculo extends Path{
    constructor(training, level){
        let talents = {
            "Êxtase Divino": "O oráculo pode utilizar uma ação para entrar em um estado de êxtase que dura 1 minuto. Ele ganha os seguintes benefícios durante este período: <ul><li>Recebe um bônus de +10 para a Saúde.</li><li>Não pode ficar assustado, compelido ou encantado.</li><li>Não pode ganhar pontos de Insanidade.</li><li>Faz jogadas de ataque e de desafio de Intelecto, Vontade ou Percepção com 1 dádiva.</li></ul> Quando este efeito termina, o oráculo deve fazer uma jogada de desafio de Vontade ou ganha 1 de Insanidade. O oráculo pode utilizar este talento uma quantidade de vezes igual a seu Poder. Ele restaura seus usos quando completa um descanso."
        };
        if(level >= 6){
            talents["Comunhão com os Deuses"] = "Quando o oráculo usa Êxtase Divino, pode decidir entrar em transe. Caso se concentre até que o efeito termine, ele pode fazer até três perguntas para a presença sobrenatural que podem ser respondidas com sim, não e talvez. Então, o oráculo faz uma jogada de desafio de Vontade com 1 perdição. Caso seja bem-sucedido, o Mestre deve responder com a verdade. Caso fracasse, o oráculo ganha 1 de Insanidade.";
        }
        if(level >= 9){
            talents["Avatar"] = "Enquanto está sob o efeito de Êxtase Divino, o oráculo recebe os seguintes benefícios adicionais: <ul><li>Recebe um bônus de +1 para Defesa.</li><li>Faz jogadas de ataques e desafio de Força e Agilidade com 1 dádiva.</li><li>Seus ataques causam 1d6 de dano adicional.</li></ul>";
        }
        super(training, "Oráculo", talents);
    }
    level3(){
        return {
            health: 3,
            power: 1,
            magicChoices: 1,
            choice: {
                language: "new",
                profession: "any"
            }
        }
    }
    level6(){
        return {
            health: 3,
            magicChoices: 1
        }
    }
    level9(){
        return {
            health: 3,
            power: 1,
            magicChoices: 1
        }
    }
}

class Paladino extends Path{
    constructor(training, level){
        let talents = {
            "Punição Divina": "Quando o paladino é bem-sucedido em um ataque com uma arma, ele pode gastar a conjuração de uma magia. O ataque causa 1d6 de dano adicional por nível da magia gasta (mínimo 1d6 de dano adicional). Caso o alvo seja um demônio, diabo, espírito, fada ou morto-vivo, o dano adicional aumenta em 1d6.",
            "Cura pela Fé": "O paladino pode utilizar uma ação para tocar uma criatura viva, dentro de seu alcance, e gastar a conjuração de uma magia para fazer um dos seguintes:<ul><li>O alvo cura uma quantidade de dano igual à metade de sua taxa de cura.</li><li>O paladino remove a aflição doente de um alvo.</li><li>O paladino remove a aflição envenenado de um alvo.</li></ul>"
        };
        if(level >= 6){
            talents["Vigor Divino"] = "O paladino não pode ficar doente ou envenenado. Ele nunca toma dano por doença e veneno.";
            talents["Sentir Inimigos"] = "O paladino pode utilizar uma ação ou ação desencadeada em seu turno para encontrar inimigos. Por 1 minuto, nenhuma criatura, até média distância, pode se esconder do paladino e suas jogadas de ataque contra criaturas, até média distância, ignoram os efeitos de obscurecimento. O paladino pode utilizar este talento uma quantidade de vezes igual a seu Poder. Ele restaura seus usos quando completa um descanso.";
        }
        if(level >= 9){
            talents["Resplendor Divino"] = "Em seu turno, o paladino pode utilizar uma ação ou ação desencadeada para fazer uma luz brilhar de um ponto dentro de seu espaço até um número de metros igual a duas vezes seu Poder. A luz se move com ele e dura pelo menos 1 minuto. Até que o efeito termine, o paladino e os membros de seu grupo na área iluminada não podem ser assustados e fazem jogadas de desafio com 1 dádiva para resistir a ataques. Da mesma maneira, demônios, diabos, fadas, espíritos e mortos-vivos ficam debilitados enquanto estão na área iluminada. O paladino pode utilizar este talento uma quantidade de vezes igual a seu Poder. Ele restaura seus usos quando completa um descanso.";
        }
        super(training, "Paladino", talents);
    }
    level3(){
        return {
            health: 4,
            power: 1,
            magicChoices: 1
        }
    }
    level6(){
        return {
            health: 4,
            magicChoices: 1
        }
    }
    level9(){
        return {
            health: 4,
            power: 1,
            magicChoices: 1
        }
    }
}

//Trilhas do Poder:

class Artifice extends Path{
    constructor(training, level){
        let talents = {
            "Bolsa de Artífice": "O artífice tem uma bolsa cheia de peças sobressalentes que pode utilizar para criar equipamentos. O artífice mede a quantidade de peças em coroas de ouro, embora essas peças não tenham valor para ninguém além de outro artífice. O valor em co destas peças sobressalentes é igual a duas vezes o nível do grupo. O artífice pode utilizar uma ação para começar a montar as peças e formar uma armadura, uma arma, munição ou um item de engenharia, gastando uma quantidade de peças da bolsa equivalentes ao preço do item. É necessário 1 minuto para criar um objeto, no qual o artífice deve se concentrar e utilizar um kit de ferramentas. Ao fim deste tempo, o artífice obtém uma peça de equipamento finalizada que permanece até que ele complete um descanso, neste momento, o equipamento se desmonta em partes novamente. Quando completa um descanso, o artífice repõe as peças de sua Bolsa de Artífice, até o valor máximo de co. Caso perca sua Bolsa de Artífice, o artífice pode criar uma nova. Custa uma quantidade de coroas de ouro igual ao nível do grupo. O artífice pode ter apenas uma Bolsa do Artífice por vez."
        };
        if(level >= 6){
            talents["Armazenar Magia"] = "O artífice pode utilizar uma ação para tocar um objeto que criou a partir de sua Bolsa de Artífice. Caso se concentre durante um 1 minuto, tempo no qual o Artífice deve se manter em contato com o objeto, ele pode gastar uma conjuração de magia e imbuir a conjuração daquela magia no objeto. A conjuração fica no objeto até que o artífice complete um descanso ou até que seja gasto. Qualquer criatura que segurar o objeto pode utilizar uma ação para gastar a conjuração da magia do objeto e conjurar a magia, independentemente do Poder da criatura.";
        }
        if(level >= 9){
            talents["Servo Mecânico"] = "O artífice pode utilizar uma ação para criar um ou mais pequenos construtos utilizando materiais contidos em sua Bolsa de Artífice. Para cada 1 co de materiais gastos, um construto pequeno compelido aparece em um espaço aberto à curta distância do artífice. O artífice pode fornecer a característica voador a qualquer número de construtos ao gastar 1 co adicional da bolsa para cada um deles. Os construtos permanecem até serem destruídos ou até que o artífice complete um descanso. Ao fim deste período, os servos mecânicos se desmontam em partes.";
        }
        super(training, "Artífice", talents);
    }
    level3(){
        return {
            health: 2,
            power: 1,
            magicChoices: 1,
            choice: {
                language: "new",
                profession: "academic"
            }
        }
    }
    level6(){
        return {
            health: 2,
            magicChoices: 1
        }
    }
    level9(){
        return {
            health: 2,
            power: 1,
            magicChoices: 1
        }
    }
}

class Bruxa extends Path{
    constructor(training, level){
        let talents = {
            "Orientação": "Quando uma criatura que pode ouvir e entender o que a bruxa diz faz uma jogada de desafio, a bruxa pode utilizar uma ação desencadeada para oferecer orientação para a criatura. A criatura faz o teste com 2 dádivas."
        };
        if(level >= 6){
            talents["Vassoura Voadora"] = "A bruxa pode utilizar uma ação para tocar uma vassoura e gastar a conjuração de uma magia. Ela imbui a vassoura de magia que se mantém por uma quantidade de horas igual ao Poder da bruxa adicionado do nível da magia cuja conjuração foi gasta. Até que o efeito termine, enquanto a bruxa estiver sentada no cabo da vassoura, ela pode se mover voando. A vassoura pode carregar um ou mais passageiros cujo total de Tamanhos não exceda 1.";
        }
        if(level >= 9){
            talents["Laço Duradouro"] = "A bruxa pode utilizar uma ação para criar um laço com uma criatura a curta distância que possa vê-la e ouvi-la. Caso o alvo esteja disposto, ele se conecta a bruxa até que ela morra, o alvo morra, ou a bruxa utilize esse talento novamente. Até o fim do efeito, a bruxa e o alvo fazem todas as suas jogadas de Percepção com 1 dádiva enquanto estiverem dentro de uma média distância um do outro. Toda vez que a bruxa ou o alvo cura dano, o outro cura metade do dano, contanto que estejam dentro de uma média distância um do outro. Por fim, a bruxa pode utilizar uma ação para fazer com que a imagem do alvo apareça em uma superfície reflexiva que ela pode ver a curta distância e essa imagem se mantém ali por quanto tempo a bruxa desejar. A imagem mostra o alvo e a área a curta distância dele.";
        }
        super(training, "Bruxa", talents);
    }
    level3(){
        return {
            health: 2,
            power: 1,
            magicChoices: 1,
            choice: {
                language: "new",
                profession: "academic",
                profession2: "common",
                profession3: "wilderness"
            },
            spell: "Fogo das Bruxas"
        }
    }
    level6(){
        return {
            health: 2,
            magicChoices: 1
        }
    }
    level9(){
        return {
            health: 2,
            power: 1,
            magicChoices: 1
        }
    }
}

class Feiticeiro extends Path{
    constructor(training, level){
        let talents = {
            "Feitiçaria": "Quando o feiticeiro conjura uma magia de ataque, ele pode utilizar este talento para fazer uma jogada de ataque com 1 dádiva e impor 1 perdição nas jogadas de desafio da criatura que tentar resistir a magia. Depois de resolver o efeito da magia, o personagem recebe 1 ponto de <b>tensão</b>. A tensão se mantém até que ele complete um descanso completo.",
            "Tensão do Feiticeiro": "Ao fim de cada rodada na qual o feiticeiro recebe 1 ou mais pontos de tensão, ele deve fazer uma jogada de desafio de Vontade. A jogada é feita com uma quantidade de perdições igual à sua tensão total. Caso fracasse, a energia explode de um ponto dentro do alcance do personagem até um número de metros igual ao total de tensão. Tudo na área, exceto o feiticeiro, sofre 1d6 de dano por ponto de Poder do feiticeiro. Se as criaturas nesta área obtiverem sucesso em uma jogada de desafio de Agilidade, sofrem metade do dano. A tensão cai para 0."
        };
        if(level >= 6){
            talents["Feitiçaria Maior"] = "Quando o feiticeiro conjura uma magia, pode ampliar seus efeitos. Ele recebe 1 ponto de tensão e aplica uma das seguintes características a magia:<ul><li>Caso a magia exija uma jogada de ataque, a jogada é feita com 2 dádivas.</li><li>Criaturas que fazem jogadas de desafio para resistirem a magia, fazem suas jogadas com 2 perdições.</li><li>O alcance do efeito aumenta de curto para médio, de médio para longo e de longo para extremo.</li><li>Dobra o tamanho da área de efeito da magia.</li><li>Caso o alvo receba dano da magia, ele recebe 2d6 de dano adicional.</li><li>Caso o alvo seja curado pela magia, ele recebe 2d6 de cura adicionais.</li></ul>";
        }
        if(level >= 9){
            talents["Explosão de Feitiçaria"] = "Enquanto o feiticeiro tem 1 ou mais pontos de tensão, ele pode utilizar uma ação para liberar uma explosão de energia de feitiçaria em uma criatura ou objeto que esteja até média distância. Ele reduz a tensão em 1 e faz uma jogada de ataque de Intelecto ou Vontade contra a Agilidade do alvo. Caso seja bem-sucedido, a explosão atinge o alvo e ele sofre 2d6 de dano.";
        }
        super(training, "Feiticeiro", talents);
    }
    level3(){
        return {
            health: 2,
            power: 1,
            magicChoices: 1
        }
    }
    level6(){
        return {
            health: 2,
            magicChoices: 1
        }
    }
    level9(){
        return {
            health: 2,
            power: 1,
            magicChoices: 1
        }
    }
}

class Mago extends Path{
    constructor(training, level){
        let talents = {
            "Grimório": "O mago ganha um tomo repleto de conhecimentos mágicos. Ele escolhe três magias de qualquer tradição e as anota no grimório. As magias devem ser de um nível que o mago possa conjurar. Se aprender essas magias normalmente faria com que o mago ganhasse pontos de Corrupção, ele recebe a Corrupção como se as tivesse aprendido. Caso esteja segurando seu grimório, o mago pode gastar a conjuração de uma magia que tenha aprendido para conjurar uma magia contida no grimório, desde que a magia seja do mesmo nível ou menor. Toda vez que aprende uma magia que já esteja escrita no grimório, o mago pode adicionar uma nova magia de mesmo nível ou menor ao grimório. A magia adicionada deve ser de um nível que o mago possa conjurar, mas pode ser de qualquer tradição."
        };
        if(level >= 6){
            talents["Especialista em Magia"] = "O mago aumenta o número de conjurações de magias de nível 0 e 1 em 1.";
        }
        if(level >= 9){
            talents["Maestria em Magia"] = "O mago tornou-se mestre na conjuração de magias. Ele recebe 6 pontos de magia. Quando conjura uma magia, o mago pode gastar uma quantidade de pontos de magia igual 1 + o nível da magia para conjurar a magia sem gastar a conjuração ou para conjurar uma magia para a qual não sobraram mais conjurações. O mago recupera seus pontos de magia quando completa um descanso.";
        }
        super(training, "Mago", talents);
    }
    level3(){
        return {
            health: 2,
            power: 1,
            magicChoices: 1,
            choice: {
                language: "new",
                profession: "academic"
            }
        }
    }
    level6(){
        return {
            health: 2,
            magicChoices: 1,
        }
    }
    level9(){
        return {
            health: 2,
            power: 1,
            magicChoices: 1,
        }
    }
}

//Trilhas da Trapaça:

class Assassino extends Path{
    constructor(training, level){
        let talents = {
            "": ""
        };
        if(level >= 6){
            talents[""] = "";
        }
        if(level >= 9){
            talents[""] = "";
        }
        super(training, "", talents);
    }
    level3(){
        return {
            
        }
    }
    level6(){
        return {
            
        }
    }
    level9(){
        return {
            
        }
    }
}

class Batedor extends Path{
    constructor(training, level){
        let talents = {
            "": ""
        };
        if(level >= 6){
            talents[""] = "";
        }
        if(level >= 9){
            talents[""] = "";
        }
        super(training, "", talents);
    }
    level3(){
        return {
            
        }
    }
    level6(){
        return {
            
        }
    }
    level9(){
        return {
            
        }
    }
}

class Ladrao extends Path{
    constructor(training, level){
        let talents = {
            "": ""
        };
        if(level >= 6){
            talents[""] = "";
        }
        if(level >= 9){
            talents[""] = "";
        }
        super(training, "", talents);
    }
    level3(){
        return {
            
        }
    }
    level6(){
        return {
            
        }
    }
    level9(){
        return {
            
        }
    }
}

class Warlock extends Path{
    constructor(training, level){
        let talents = {
            "": ""
        };
        if(level >= 6){
            talents[""] = "";
        }
        if(level >= 9){
            talents[""] = "";
        }
        super(training, "", talents);
    }
    level3(){
        return {
            
        }
    }
    level6(){
        return {
            
        }
    }
    level9(){
        return {
            
        }
    }
}

//Trilhas da Guerra:

class AtadorDeFeiticos extends Path{
    constructor(training, level){
        let talents = {
            "": ""
        };
        if(level >= 6){
            talents[""] = "";
        }
        if(level >= 9){
            talents[""] = "";
        }
        super(training, "", talents);
    }
    level3(){
        return {
            
        }
    }
    level6(){
        return {
            
        }
    }
    level9(){
        return {
            
        }
    }
}

class Combatente extends Path{
    constructor(training, level){
        let talents = {
            "": ""
        };
        if(level >= 6){
            talents[""] = "";
        }
        if(level >= 9){
            talents[""] = "";
        }
        super(training, "", talents);
    }
    level3(){
        return {
            
        }
    }
    level6(){
        return {
            
        }
    }
    level9(){
        return {
            
        }
    }
}

class Furioso extends Path{
    constructor(training, level){
        let talents = {
            "": ""
        };
        if(level >= 6){
            talents[""] = "";
        }
        if(level >= 9){
            talents[""] = "";
        }
        super(training, "", talents);
    }
    level3(){
        return {
            
        }
    }
    level6(){
        return {
            
        }
    }
    level9(){
        return {
            
        }
    }
}

class Patrulheiro extends Path{
    constructor(training, level){
        let talents = {
            "": ""
        };
        if(level >= 6){
            talents[""] = "";
        }
        if(level >= 9){
            talents[""] = "";
        }
        super(training, "", talents);
    }
    level3(){
        return {
            
        }
    }
    level6(){
        return {
            
        }
    }
    level9(){
        return {
            
        }
    }
}
