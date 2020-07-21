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

class Paladino extends Path{
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

//Trilhas do Poder:

class Artifice extends Path{
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

class Bruxa extends Path{
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

class Feiticeiro extends Path{
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

class Mago extends Path{
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
