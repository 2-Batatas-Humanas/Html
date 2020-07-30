character = JSON.parse(localStorage.getItem("character"));

choice = localStorage.getItem("choice");

function loadChoice(){
    let label = document.querySelector("#langProfLabel");
    switch(choice){
        case "add new language":
            label.innerHTML = "Qual é o nome do seu novo idioma?";
            break;
        case "Add profession":
            label.innerHTML = "Qual é a sua nova profissão?";
            break;
        case "Add academic profession":
            label.innerHTML = "Qual é a sua nova profissão do tipo acadêmica?";
            break;
        case "Add religious profession":
            label.innerHTML = "Qual é a sua nova profissão do tipo religiosa?";
            break;
        case "Add wilderness profession":
            label.innerHTML = "Qual é a sua nova profissão do tipo selvagem?";
            break;
        case "Add common profession":
            label.innerHTML = "Qual é a sua nova profissão do tipo comum?";
            break;
        case "Add criminal profession":
            label.innerHTML = "Qual é a sua nova profissão do tipo criminosa?";
            break;
    }
}

function nextPage(){
    let langProf = document.querySelector("#langProf").value;
    if(!langProf){
        if(choice == "add new language"){
            alert("Coloque o nome do novo idioma");
        } else {
            alert("Coloque o nome da nova profissão");
        }
        return
    }
    if(choice == "add new language"){
        character.languages[langProf] = {
            speakable: true,
            readable: false,
            writable: false
        }
    } else{
        character.professions.push(langProf);
    }
    localStorage.removeItem("choice");
    let magic = localStorage.getItem("magic");
    if(magic){
        window.location.href = "spells.html";
        return
    }
    window.location.href = "character.html";
}