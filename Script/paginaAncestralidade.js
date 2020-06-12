function setHuman(){
    var id = "ancestrySet";
    emptyDiv(id);
    createNewInput(id, "Qual é o nome do seu personagem? ", "name", "text");
    addBrToDiv(id);
    addPToDiv(id, "Atributos iniciais de Humano:");
    showAttributes(id, 10, 10, 10, 10);
    createOptionsInput(id, "Escolha um atributo para aumentar em 1:", "raisedAttribute", ["Força", "Agilidade", "Intelecto", "Vontade"], ["strength", "agility", "intellect", "will"]);
    addBrToDiv(id);
    createOptionsInput(id, "Selecione o tamanho do seu personagem:", "size", ["1", "1/2"], [1, 0.5]);
    addBrToDiv(id);
    createOptionsInput(id, "Você deseja adicionar uma profissão ou uma língua?(A profissão ou língua será adicionada na próxima página) ", "professionLanguageChoice", ["Profissão", "Língua"], ["profession", "language"]);
    addBrToDiv(id);
    createTextareaInput(id, "Qual é a personalidade do seu personagem? ", "personality");
    addBrToDiv(id);
    createTextareaInput(id, "Qual é a religião do seu personagem? ", "religion", "Se não tiver religião coloque: O personagem não tem religião.");
    addBrToDiv(id);
    createNewInput(id, "Qual é a idade do seu personagem? ", "age", "number", null, 25, 0);
    addBrToDiv(id);
    createTextareaInput(id, "Qual é a estatura do seu personagem?", "build");
    addBrToDiv(id);
    createTextareaInput(id, "Qual é a aparência do seu personagem?", "appearance");
    addBrToDiv(id);
    createTextareaInput(id, "Qual é o antecedente do seu personagem?", "background");
    createOptionsInput(id, "Seu antecedente é algum desses?(se não for nenhum, selecione a última opção: \"Nenhum\") ", "backgroundChange", ["O personagem morreu e voltou a vida. Ele começa o jogo com 1d6 de Insanidade.", "O personagem foi brevemente possuído por um demônio. Ele começa o jogo com 1 de Corrupção.", "O personagem matou alguém a sangue frio. Ele começa o jogo com 1 de Corrupção.", "O personagem pertencia a um culto estranho e viu muitas coisas estranhas. Ele começa o jogo com 1 de Insanidade.", "O personagem ganha a vida trabalhando em uma profissão.", "O personagem viajou muito. Ele fala um idioma adicional.", "O personagem recebeu educação. Ele sabe ler a língua comum.", "O personagem encontrou um velho mapa do tesouro. ", "O personagem conseguiu algum dinheiro e começa o jogo com 2d6 cc.", "Nenhum"], ["1d6 insanity", "1 corruption", "1 corruption", "1 insanity", "profession", "language", "read common language", "treasure map", "2d6 cp", "none"]);
}

function setDwarf(){
    var id = "ancestrySet";
}

function setClockwork(){
    var id = "ancestrySet";
}

function setChangeling(){
    var id = "ancestrySet";
}

function setGoblin(){
    var id = "ancestrySet";
}

function setOrc(){
    var id = "ancestrySet";
}

function setAncestry(){
    var select = document.querySelector("#ancestry");
    var ancestry = select.value;
    switch(ancestry){
        case "human":
            setHuman();
            break;
        case "dwarf":
            setDwarf();
            break;
        case "clockwork":
            setClockwork();
            break;
        case "changeling":
            setChangeling();
            break;
        case "goblin":
            setGoblin();
            break;
        case "orc":
            setOrc();
            break;
        default:
            console.error(ancestry + " isn't a possible option");
    }
}

function createCharacter(){
    var ancestry = document.querySelector("#ancestry").value;
    var nameInput = document.querySelector("#name");
    var canChangePage = true;
    if(!nameInput){
        alert("Clique no botão \"Ok\" depois de \"Selecione sua ancestralidade\" e coloque as informações do seu personagem.")
        canChangePage = false;
    } else{
        switch(ancestry){
            case "human":
                var name = nameInput.value;
                var raisedAttribute = document.querySelector("#raisedAttribute").value;
                var size = document.querySelector("#size").value;
                var professionLanguageChoice = document.querySelector("#professionLanguageChoice").value;
                var personality = document.querySelector("#personality").value;
                var religion = document.querySelector("#religion").value;
                var age = document.querySelector("#age").value;
                var build = document.querySelector("#build").value;
                var appearance = document.querySelector("#appearance").value;
                var background = document.querySelector("#background").value;
                var backgroundChange = document.querySelector("#backgroundChange").value;
                if(personality == "" || religion == "" || age == "" || build == "" || appearance == "" || background == ""){
                    alert("Coloque todas as informações do seu personagem");
                    canChangePage = false;
                    break;
                }
                //var human = new Human(name, personality, age, background, raisedAttribute, {option: "profession", value: "Pastor"}, size, religion, build, appearance);
                //console.log(human);
                if(!localStorage.getItem(name)){
                    //localStorage.setItem(name, JSON.stringify(human));
                } else{
                    console.log(JSON.parse(localStorage.getItem(name)));
                }
                break;
            case "dwarf":
                break;
            case "clockwork":
                break;
            case "changeling":
                break;
            case "goblin":
                break;
            case "orc":
                break;
            default:
                console.log("Unknown error")
                canChangePage = false;
        }
    }
    if(canChangePage){
        console.log("Character created");
        //window.location.href = 'paginaExtras.html';
    }
}