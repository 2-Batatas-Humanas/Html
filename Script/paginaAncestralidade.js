function setHuman(){
    var id = "ancestrySet";
    emptyDiv(id);
    createNewInput(id, "Qual é o nome do seu personagem? ", "name", "text");
    addPToDiv(id, "Atributos iniciais de Humano:");
    showAttributes(id, 10, 10, 10, 10);
    createOptionsInput(id, "Escolha um atributo para aumentar em 1:", "raisedAttribute", 
    ["Força", "Agilidade", "Intelecto", "Vontade"], 
    ["strength", "agility", "intellect", "will"]);
    addBrToDiv(id);
    createOptionsInput(id, "Selecione o tamanho do seu personagem:", "size", 
    ["1", "1/2"], 
    [1, 0.5]);
    addBrToDiv(id);
    createOptionsInput(id, "Você deseja adicionar uma profissão ou uma Idioma?(A profissão ou idioma será adicionada na próxima página) ", "professionLanguageChoice", 
    ["Profissão", "Idioma"], 
    ["profession", "language"]);
    addBrToDiv(id);
    createTextareaInput(id, "Qual é a personalidade do seu personagem? ", "personality");
    addBrToDiv(id);
    createTextareaInput(id, "Qual é a religião do seu personagem? ", "religion", "Se não tiver religião coloque: O personagem não tem religião.");
    addBrToDiv(id);
    createNewInput(id, "Qual é a idade do seu personagem? ", "age", "number", null, 25, 0);
    addBrToDiv(id);
    createTextareaInput(id, "Qual é a estatura do seu personagem? ", "build");
    addBrToDiv(id);
    createTextareaInput(id, "Qual é a aparência do seu personagem? ", "appearance");
    addBrToDiv(id);
    createTextareaInput(id, "Qual é o antecedente do seu personagem? ", "background");
    addBrToDiv(id, 1);
    createOptionsInput(id, "Seu antecedente é algum desses?(se não for nenhum, selecione a última opção: \"Nenhum\") ", "backgroundChange", 
    ["O personagem morreu e voltou a vida. Ele começa o jogo com 1d6 de Insanidade.", "O personagem foi brevemente possuído por um demônio. Ele começa o jogo com 1 de Corrupção.", "O personagem matou alguém a sangue frio. Ele começa o jogo com 1 de Corrupção.", "O personagem pertencia a um culto estranho e viu muitas coisas estranhas. Ele começa o jogo com 1 de Insanidade.", "O personagem ganha a vida trabalhando em uma profissão.", "O personagem viajou muito. Ele fala um idioma adicional.", "O personagem recebeu educação. Ele sabe ler a língua comum.", "O personagem encontrou um velho mapa do tesouro. ", "O personagem conseguiu algum dinheiro e começa o jogo com 2d6 cc.", "Nenhum"], 
    ["1d6 insanity", "1 corruption", "1 corruption", "1 insanity", "profession", "language", "read common language", "treasure map", "2d6 cp", "none"]);
}

function setDwarf(){
    var id = "ancestrySet";
    emptyDiv(id);
    createNewInput(id, "Qual é o nome do seu personagem? ", "name", "text");
    addBrToDiv(id);
    createOptionsInput(id, "Qual é o ódio anão do seu personagem(criatura odiada)? ", "hatred", 
    ["Ogros", "Trogloditas", "Homens-Fera", "Orc", "Goblins", "Elfos", "Trolls", "Gigantes", "Dragões", "Demônios"], 
    ["Ogres", "Troglodytes", "Beastmen", "Orcs", "Goblins", "Elves", "Trolls", "Giants", "Dragons", "Demons"]);
    addBrToDiv(id);
    createTextareaInput(id, "Qual é a personalidade do seu personagem? ", "personality");
    addBrToDiv(id);
    createNewInput(id, "Qual é a idade do seu personagem? ", "age", "number", null, 25, 0);
    addBrToDiv(id);
    createTextareaInput(id, "Qual é a estatura do seu personagem? ", "build");
    addBrToDiv(id);
    createTextareaInput(id, "Qual é a aparência do seu personagem? ", "appearance");
    addBrToDiv(id);
    createTextareaInput(id, "Qual é o antecedente do seu personagem? ", "background");
    addBrToDiv(id, 1);
    createOptionsInput(id, "Seu antecedente é algum desses?(se não for nenhum, selecione a última opção: \"Nenhum\") ", "backgroundChange", 
    ["O personagem vendeu sua alma ao diabo para ganhar riquezas. O diabo o enganou e o deixou sem dinheiro nenhum. Ele começa o jogo com 1 de Corrupção.", "O personagem ganha a vida trabalhando em uma profissão.", "O personagem é um artesão talentoso. Adicione artesão (qualquer um) a sua lista de profissões.", "O personagem viajou muito. Ele fala um idioma adicional.", "O personagem herdou um machado de batalha ou um martelo de guerra de um ancestral.", "O personagem tem a chave para um antigo cofre de tesouros dos anões, perdido há muito tempo.", "O personagem conseguiu algum dinheiro e começa o jogo com 2d6 cc.", "Nenhum"], 
    ["1 corruption+0 money", "profession", "profession artisan", "language", "battlehammer/warhammer", "key to ancient dwarf tresure vault", "2d6 cp", "none"]);
}

function setClockwork(){
    var id = "ancestrySet";
    emptyDiv(id);
    createNewInput(id, "Qual é o nome do seu personagem? ", "name", "text");
    addBrToDiv(id);
    createTextareaInput(id, "Qual é a personalidade do seu personagem? ", "personality");
    addBrToDiv(id);
    createTextareaInput(id, "Qual é a função do seu personagem? ", "purpose");
    addBrToDiv(id, 1);
    createOptionsInput(id, "Selecione qual das opções é esta função: ", "purposeChange", 
    ["O personagem foi construído para guerra. Aumente sua Força ou Agilidade em 2.", "O personagem foi construído para trabalhar. Aumente sua Força em 2.", "O personagem foi construído para utilizar magia. Aumente seu Intelecto ou Vontade em 2.", "O personagem foi construído para retirar informações sobre alvos assassinados. Aumente sua Agilidade ou Intelecto em 2.", "O personagem foi construído para um propósito inexplicável. Aumente um atributo de sua escolha em 2."], 
    ["2 strength/agility", "2 strength", "2 intellect/will", "2 agility/intellect", "2 attribute"]);
    addBrToDiv(id);
    createTextareaInput(id, "Qual é a forma do seu personagem? ", "form");
    addBrToDiv(id, 1);
    createOptionsInput(id, "Selecione qual das opções é esta forma: ", "formChange", 
    ["O personagem é um pequeno autômato alado. Reduza sua Saúde para 5 e seu Tamanho para 1/2. Ele pode voar, mas deve pousar no fim de seu movimento ou irá cair. Ele tem 90 cm de altura e pesa 22 quilos.", "O personagem é um pequeno autômato parecido com uma aranha com mãos funcionais. Reduza seu Tamanho para 1/2. Ele ignora o efeito de terreno difícil quando escala. Tem 90 cm de altura e pesa 22 quilos.", "O personagem é um pequeno autômato humanoide. Reduza seu Tamanho para 1/2. Ele tem 1,2 metros de altura e pesa 34 quilos.", "O personagem é um autômato humanoide. Ele tem 1,8 metros de altura e pesa 135 quilos.", "O personagem é um grande autômato humanoide. Aumente seu Tamanho para 2, mas reduza seu Deslocamento e Defesa em 2. Ele tem 3 metros de altura e pesa 340 quilos.", "O personagem é um grande autômato com a metade inferior de um cavalo. Aumente seu Tamanho para 2 e seu Deslocamento em 2. No entanto, reduza sua Defesa em 3. Ele tem 1,8 metros de comprimento, 1,8 metros de altura e pesa 340 quilos."], 
    ["-5 health+0.5 size", "0.5 size", "0.5 size", "nothing", "2 size+-2 speed+-2 defense", "2 size+2 speed+-3 defense"]);
    addBrToDiv(id);
    createNewInput(id, "Qual é a idade do seu personagem? ", "age", "number", null, 25, 0);
    addBrToDiv(id);
    createTextareaInput(id, "Qual é a aparência do seu personagem? ", "appearance");
    addBrToDiv(id);
    createNewInput(id, "Onde fica localizada a chave usada para ligar seu personagem? ", "locationKey", "text");
    addBrToDiv(id);
    createTextareaInput(id, "Qual é o antecedente do seu personagem? ", "background");
    addBrToDiv(id, 1);
    createOptionsInput(id, "Seu antecedente é algum desses?(se não for nenhum, selecione a última opção: \"Nenhum\") ", "backgroundChange", 
    ["A alma do personagem veio do inferno. Comece o jogo com 1d3 de Corrupção.", "A alma do personagem foi retirada do submundo antes que pudesse esquecer sua vida anterior. Comece o jogo com 1d6 de Insanidade e adicione uma profissão extra.", "O personagem foi feito por um tradutor. Ele fala um idioma adicional.", "O personagem foi feito para ser um escriba. Ele sabe ler e escrever a língua comum.", "O personagem conseguiu algum dinheiro e começa o jogo com 2d6 cc.", "Nenhum"], 
    ["1d3 corruption", "1d6 insanity+profession", "language", "read write common language", "2d6 cp", "none"]);
}

function setChangeling(){
    var id = "ancestrySet";
    var id = "ancestrySet";
    emptyDiv(id);
    createNewInput(id, "Qual é o nome do seu personagem? ", "name", "text");
    addBrToDiv(id);
    createTextareaInput(id, "Qual é a personalidade do seu personagem? ", "personality");
    addBrToDiv(id);
    createNewInput(id, "Qual é a idade real do seu personagem? ", "age", "number", null, 25, 0);
    addBrToDiv(id);
    createOptionsInput(id, "Selecione a ancestralidade aparente do seu personagem: ", "apparentAncestry", 
    ["Goblin", "Anão", "Humano", "Orc", "Outro"], 
    ["goblin" , "dwarf", "human", "orc", "other"]);
    addBrToDiv(id);
    createNewInput(id, "Qual é a idade aparente do seu personagem? ", "apparentAge", "number", null, 25, 0);
    addBrToDiv(id);
    createTextareaInput(id, "Qual é estatura aparente do seu personagem? ", "apparentBuild");
    addBrToDiv(id);
    createTextareaInput(id, "Qual é aparência aparente do seu personagem? ", "apparentAppearance");
    addBrToDiv(id);
    createOptionsInput(id, "Qual é o gênero aparente do seu personagem? ", "apparentGender", ["Macho", "Fêmea"], ["male", "female"]);
    addBrToDiv(id)
    createTextareaInput(id, "Qual é a peculiaridade do seu personagem? ", "quirk");
    addBrToDiv(id);
    createTextareaInput(id, "Qual é o antecedente do seu personagem? ", "background");
    addBrToDiv(id, 1);
    createOptionsInput(id, "Seu antecedente é algum desses?(se não for nenhum, selecione a última opção: \"Nenhum\") ", "backgroundChange",
    ["O personagem descobriu recentemente sua verdadeira natureza, e está tendo dificuldades para se adaptar a nova realidade. Ele começa o jogo com 1 de Insanidade.", "O personagem não tem ideia de que é um changeling. Ele acredita ser um membro da ancestralidade que adotou. Adicione uma profissão extra. Até ficar incapacitado ou tocar o ferro pela primeira vez, ele não pode utilizar Roubar Identidade.", "O personagem foi escravizado por uma bruxa e forçado a fazer atos indizíveis comandado por ela. Ele começa o jogo com 1 de Corrupção.", "O personagem matou a pessoa cuja identidade roubou para que pudesse assumir sua vida pessoal. Ele começa o jogo com 1 de Corrupção.", "O personagem ganha a vida trabalhando em uma profissão.", "O personagem recebeu educação. Ele sabe ler a língua comum.", "O personagem conseguiu algum dinheiro e começa o jogo com 2d6 cc.", "Nenhum"],
    ["1 insanity", "profession", "1 corruption", "1 corruption", "profession", "read common language", "2d6 cp", "none"]);
}

function setGoblin(){
    var id = "ancestrySet";
    emptyDiv(id);
    createNewInput(id, "Qual é o nome do seu personagem? ", "name", "text");
    addBrToDiv(id);
    createTextareaInput(id, "Qual é o aspecto característico do seu personagem? ", "distinctiveAppearance");
    addBrToDiv(id);
    createTextareaInput(id, "Qual é o hábito estranho do seu personagem? ", "oddHabit");
    addBrToDiv(id);
    createTextareaInput(id, "Qual é a personalidade do seu personagem? ", "personality");
    addBrToDiv(id);
    createNewInput(id, "Qual é a idade do seu personagem? ", "age", "number", null, 25, 0);
    addBrToDiv(id);
    createTextareaInput(id, "Qual é a estatura do seu personagem?", "build");
    addBrToDiv(id);
    createTextareaInput(id, "Qual é o antecedente do seu personagem?", "background");
    addBrToDiv(id, 1);
    createOptionsInput(id, "Seu antecedente é algum desses?(se não for nenhum, selecione a última opção: \"Nenhum\") ", "backgroundChange",
    ["O Rei Goblin transformou o personagem em um sapo. Ele se livrou disso depois que convenceu uma dama élfica a beijá-lo. Quando ela fez isso e gritou, o personagem a matou. Ele começa o jogo com 1 de Corrupção.", "O personagem passou dois dias acreditando que era um cão assustador. Ele começa o jogo com 1 de Insanidade.", "O personagem ganha a vida trabalhando em uma profissão.", "O personagem é um criminoso sem arrependimentos. Adicione uma profissão criminosa aleatória a sua lista de profissões.", "O personagem viajou muito. Ele fala um idioma adicional.", "O personagem roubou uma faca de um cavaleiro audacioso.", "O personagem entrou furtivamente em Alfheim e roubou um cacho da Rainha das Fadas.", "O personagem encontrou um anel com sinete no esgoto.", "O personagem conseguiu algum dinheiro e começa o jogo com 2d6 cc.", "Nenhum"],
    ["1 corruption", "1 insanity", "profession", "profession criminal", "language", "knife", "lock of hair", "signet ring", "2d6 cp", "none"]);
}

function setOrc(){
    var id = "ancestrySet";
    emptyDiv(id);
    createNewInput(id, "Qual é o nome do seu personagem? ", "name", "text");
    addBrToDiv(id);
    createTextareaInput(id, "Qual é a personalidade do seu personagem? ", "personality");
    addBrToDiv(id);
    createNewInput(id, "Qual é a idade do seu personagem? ", "age", "number", null, 25, 0);
    addBrToDiv(id);
    createTextareaInput(id, "Qual é a estatura do seu personagem? ", "build");
    addBrToDiv(id);
    createTextareaInput(id, "Qual é a aparência do seu personagem? ", "appearance");
    addBrToDiv(id);
    createTextareaInput(id, "Qual é o antecedente do seu personagem? ", "background");
    addBrToDiv(id, 1);
    createOptionsInput(id, "Seu antecedente é algum desses?(se não for nenhum, selecione a última opção: \"Nenhum\") ", "backgroundChange", 
    ["O personagem massacrou pessoas indefesas. Ele começa o jogo com 2 de Corrupção.", "O personagem foi brevemente possuído por um demônio. Ele começa o jogo com 1 de Corrupção.", "O personagem ganha a vida trabalhando em uma profissão.", "O personagem viajou muito. Ele fala um idioma adicional.", "O personagem recebeu educação. Ele sabe ler a língua comum.", "O personagem lutou bravamente pelo Imperador e ganhou uma medalha por sua coragem.", "O personagem pegou uma espada do corpo de um guerreiro que matou.", "Os Deuses de Sangue e Ferro o visitam em seus sonhos. O personagem começa o jogo com 1 de Insanidade.", "O personagem conseguiu algum dinheiro e começa o jogo com 2d6 cc.", "Nenhum"], 
    ["2 corruption", "1 corruption", "profession", "language", "read common language", "medal", "sword", "1 insanity", "2d6 cp", "none"]);
}

function setYerath(){
    id = "ancestrySet";
    emptyDiv(id);
    createNewInput(id, "Qual é o nome do seu personagem? ", "name", "text");
    addBrToDiv(id);
    createTextareaInput(id, "Qual é a personalidade do seu personagem? ", "personality");
    addBrToDiv(id);
    createNewInput(id, "Qual é a idade do seu personagem? ", "age", "number", null, 25, 0);
    addBrToDiv(id);
    createTextareaInput(id, "Qual é sua casta(caste)? ", "caste");
    addBrToDiv(id, 1);
    createOptionsInput(id, "Qual desses é sua casta? ", "casteOption", 
    ["Drone", "Scout", "Soldier"], 
    ["profession laborer+2 strength+1 will", "profession guide+1 agility+1 perception", "profession soldier+2 strength+13 defense"]);
    addBrToDiv(id);
    createTextareaInput(id, "Qual é o antecedente do seu personagem? ", "background");
    addBrToDiv(id, 1);
    createOptionsInput(id, "Seu antecedente é algum desses?(se não for nenhum, selecione a última opção: \"Nenhum\") ", "backgroundChange", 
    ["You discovered a shrine...", "Something murdered you queen...", "You found a bit of weird tecnology...", "You're secretly a queen...", "You traveled extensively.. ", "You worked in your profession", "You were sent out from your hive...", "You found something interesting...", "Deep underground, you found a ...", "You took a sword...", "You found an incantation...", "You came with money...", "Nenhum"],
    ["1 corruption", "1d3 insanity", "random enchanted object", "1 intellect+1 will+!caste att", "language", "profession", "profession academic", "extra interesting thing", "language gnomish", "sword", "incantation rank 0 spell", "2d6 cp", "none"]);
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
        case "yerath":
            setYerath();
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
                personagem = {
                    ancestry: "human",
                    name: nameInput.value,
                    personality: document.querySelector("#personality").value,
                    religion: document.querySelector("#religion").value,
                    build: document.querySelector("#build").value,
                    age: document.querySelector("#age").value,
                    size: document.querySelector("#size").value,
                    appearance: document.querySelector("#appearance").value,
                    background: document.querySelector("#background").value
                };
                escolhas = {
                    raisedAttribute: document.querySelector("#raisedAttribute").value,
                    professionLanguageChoice: {
                        option: document.querySelector("#professionLanguageChoice").value
                    } 
                };
                var backgroundChange = document.querySelector("#backgroundChange").value;
                if(personagem.name == "" || personagem.personality == "" || personagem.religion == "" || personagem.age == "" || personagem.build == "" || personagem.appearance == "" || personagem.background == ""){
                    alert("Coloque todas as informações do seu personagem");
                    canChangePage = false;
                    break;
                }
                if(backgroundChange != "none"){
                    escolhas.backgroundChange = backgroundChange;
                }
                localStorage.setItem("new human", JSON.stringify(personagem));
                localStorage.setItem("choices", JSON.stringify(escolhas));
                break;
            case "dwarf":
                personagem = {
                    ancestry: "dwarf",
                    name: nameInput.value,
                    hatred: document.querySelector("#hatred").value,
                    personality: document.querySelector("#personality").value,
                    age: document.querySelector("#age").value,
                    build: document.querySelector("#build").value,
                    appearance: document.querySelector("#appearance").value,
                    background: document.querySelector("#background").value
                };
                escolhas = {};
                var backgroundChange = document.querySelector("#backgroundChange").value;
                if(personagem.name == "" || personagem.personality == "" || personagem.age == "" || personagem.build == "" || personagem.appearance == "" || personagem.background == ""){
                    alert("Coloque todas as informações do seu personagem");
                    canChangePage = false;
                    break;
                }
                if(backgroundChange != "none"){
                    escolhas.backgroundChange = backgroundChange;
                }
                localStorage.setItem("new dwarf", JSON.stringify(personagem));
                localStorage.setItem("choices", JSON.stringify(escolhas));
                break;
            case "clockwork":
                personagem = {
                    ancestry: "clockwork",
                    name: nameInput.value,
                    personality: document.querySelector("#personality").value,
                    purpose: document.querySelector("#purpose").value,
                    form: document.querySelector("#form").value,
                    locationKey: document.querySelector("#locationKey").value,
                    age: document.querySelector("#age").value,
                    appearance: document.querySelector("#appearance").value,
                    background: document.querySelector("#background").value
                };
                escolhas = {
                    purposeChange: document.querySelector("#purposeChange"),
                    formChange: document.querySelector("#formChange")
                };
                var backgroundChange = document.querySelector("#backgroundChange").value;
                if(personagem.name == "" || personagem.personality == "" || personagem.age == "" || personagem.appearance == "" || personagem.background == "" || personagem.locationKey == ""){
                    alert("Coloque todas as informações do seu personagem");
                    canChangePage = false;
                    break;
                }
                if(backgroundChange != "none"){
                    escolhas.backgroundChange = backgroundChange;
                }
                localStorage.setItem("new clockwork", JSON.stringify(personagem));
                localStorage.setItem("choices", JSON.stringify(escolhas));
                break;
            case "changeling":
                personagem = {
                    ancestry: "changeling",
                    name: nameInput.value,
                    personality: document.querySelector("#personality").value,
                    apparentAncestry: document.querySelector("#apparentAncestry").value,
                    apparentBuild: document.querySelector("#apparentBuild").value,
                    apparentAge: document.querySelector("#apparentAge").value,
                    apparentAppearance: document.querySelector("#apparentAppearance").value,
                    apparentGender: document.querySelector("#apparentGender").value,
                    quirk: document.querySelector("#quirk").value,
                    age: document.querySelector("#age").value,
                    background: document.querySelector("#background").value
                };
                escolhas = {};
                var backgroundChange = document.querySelector("#backgroundChange").value;
                if(personagem.name == "" || personagem.personality == "" || personagem.age == "" || personagem.quirk == "" || personagem.apparentBuild == "" || personagem.apparentAppearance == "" || personagem.background == ""){
                    alert("Coloque todas as informações do seu personagem");
                    canChangePage = false;
                    break;
                }
                if(backgroundChange != "none"){
                    escolhas.backgroundChange = backgroundChange;
                }
                localStorage.setItem("new changeling", JSON.stringify(personagem));
                localStorage.setItem("choices", JSON.stringify(escolhas));
                break;
            case "goblin":
                personagem = {
                    ancestry: "goblin",
                    name: nameInput.value,
                    personality: document.querySelector("#personality").value,
                    age: document.querySelector("#age").value,
                    build: document.querySelector("#build").value,
                    distinctiveAppearance: document.querySelector("#distinctiveAppearance").value,
                    oddHabit: document.querySelector("#oddHabit"),
                    background: document.querySelector("#background").value
                };
                escolhas = {};
                var backgroundChange = document.querySelector("#backgroundChange").value;
                if(personagem.name == "" || personagem.personality == "" || personagem.age == "" || personagem.build == "" || personagem.distinctiveAppearance == "" || personagem.oddHabit == "" || personagem.background == ""){
                    alert("Coloque todas as informações do seu personagem");
                    canChangePage = false;
                    break;
                }
                if(backgroundChange != "none"){
                    escolhas.backgroundChange = backgroundChange;
                }
                localStorage.setItem("new goblin", JSON.stringify(personagem));
                localStorage.setItem("choices", JSON.stringify(escolhas));
                break;
            case "orc":
                personagem = {
                    ancestry: "orc",
                    name: nameInput.value,
                    personality: document.querySelector("#personality").value,
                    age: document.querySelector("#age").value,
                    build: document.querySelector("#build").value,
                    appearance: document.querySelector("#appearance").value,
                    background: document.querySelector("#background").value
                };
                escolhas = {};
                var backgroundChange = document.querySelector("#backgroundChange").value;
                if(personagem.name == "" || personagem.personality == "" || personagem.age == "" || personagem.build == "" || personagem.appearance == "" || personagem.background == ""){
                    alert("Coloque todas as informações do seu personagem");
                    canChangePage = false;
                    break;
                }
                if(backgroundChange != "none"){
                    escolhas.backgroundChange = backgroundChange;
                }
                localStorage.setItem("new orc", JSON.stringify(personagem));
                localStorage.setItem("choices", JSON.stringify(escolhas));
                break;
            case "yerath":
                personagem = {
                    ancestry: "yerath",
                    name: nameInput.value,
                    caste: document.querySelector("#caste").value,
                    personality: document.querySelector("#personality").value,
                    age: document.querySelector("#age").value,
                    background: document.querySelector("#background").value
                };
                escolhas = {
                    casteChoice: document.querySelector("#casteOption").value
                }
                var backgroundChange = document.querySelector("#backgroundChange").value;
                if(personagem.name == "" || personagem.caste == "" || personagem.personality == "" || personagem.age == "" || personagem.background == ""){
                    alert("Coloque todas as informações do seu personagem");
                    canChangePage = false;
                    break;
                }
                if(backgroundChange != "none"){
                    escolhas.backgroundChange = backgroundChange;
                }
                localStorage.setItem("new yerath", JSON.stringify(personagem));
                localStorage.setItem("choices", JSON.stringify(escolhas));
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
