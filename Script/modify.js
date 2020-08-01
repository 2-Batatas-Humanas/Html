character = JSON.parse(localStorage.getItem("character"));
if(!character) console.log("Coudn't load character");

character = getCharacter(character);

function loadCharacterData(){
    // Loading left input data:
    let name = document.querySelector("#name");
    name.value = character.name;

    let insanity = document.querySelector("#insanity");
    insanity.value = character.insanity;

    let corruption = document.querySelector("#corruption");
    corruption.value = character.corruption;

    let defense = document.querySelector("#defense");
    defense.value = character.defense;

    let damage = document.querySelector("#damage");
    damage.value = character.damage;

    let strength = document.querySelector("#strength");
    strength.value = character.strength;

    let agility = document.querySelector("#agility");
    agility.value = character.agility;

    let intellect = document.querySelector("#intellect");
    intellect.value = character.intellect;

    let will = document.querySelector("#will");
    will.value = character.will;

    let perception = document.querySelector("#perception");
    perception.value = character.perception;

    let speed = document.querySelector("#speed");
    speed.value = character.speed;

    let health = document.querySelector("#health");
    health.value = character.health;

    // Creating right input:
    let rightInput = document.querySelector("#part2");
    if(character instanceof Human){
        let appearanceLabel = document.createElement("label");
        appearanceLabel.innerHTML = "Aparência:";
        appearanceLabel.for = "appearance";
        let appearance = document.createElement("input");
        appearance.id = "appearance";
        appearance.type = "text";
        appearance.value = character.appearance;
        rightInput.appendChild(appearanceLabel);
        rightInput.appendChild(appearance);
        addBrToDiv("part2", 1);
        let buildLabel = document.createElement("label");
        buildLabel.innerHTML = "Estatura:";
        buildLabel.for = "build";
        let build = document.createElement("input");
        build.id = "build";
        build.type = "text";
        build.value = character.build;
        rightInput.appendChild(buildLabel);
        rightInput.appendChild(build);
        addBrToDiv("part2", 1);
    } else if(character instanceof Dwarf){
        let appearanceLabel = document.createElement("label");
        appearanceLabel.innerHTML = "Aparência:";
        appearanceLabel.for = "appearance";
        let appearance = document.createElement("input");
        appearance.id = "appearance";
        appearance.type = "text";
        appearance.value = character.appearance;
        rightInput.appendChild(appearanceLabel);
        rightInput.appendChild(appearance);
        addBrToDiv("part2", 1);
        let buildLabel = document.createElement("label");
        buildLabel.innerHTML = "Estatura:";
        buildLabel.for = "build";
        let build = document.createElement("input");
        build.id = "build";
        build.type = "text";
        build.value = character.build;
        rightInput.appendChild(buildLabel);
        rightInput.appendChild(build);
        addBrToDiv("part2", 1);
        let hatredLabel = document.createElement("label");
        hatredLabel.innerHTML = "Ódio Anão:";
        hatredLabel.for = "hatred";
        let hatred = document.createElement("input");
        hatred.id = "hatred";
        hatred.type = "text";
        hatred.value = character.hatred;
        rightInput.appendChild(hatredLabel);
        rightInput.appendChild(hatred);
        addBrToDiv("part2", 1);
    } else if(character instanceof Clockwork){
        let appearanceLabel = document.createElement("label");
        appearanceLabel.innerHTML = "Aparência:";
        appearanceLabel.for = "appearance";
        let appearance = document.createElement("input");
        appearance.id = "appearance";
        appearance.type = "text";
        appearance.value = character.appearance;
        rightInput.appendChild(appearanceLabel);
        rightInput.appendChild(appearance);
        addBrToDiv("part2", 1);
        let formLabel = document.createElement("label");
        formLabel.innerHTML = "Forma:";
        formLabel.for = "form";
        let form = document.createElement("input");
        form.id = "form";
        form.type = "text";
        form.value = character.form;
        rightInput.appendChild(formLabel);
        rightInput.appendChild(form);
        addBrToDiv("part2", 1);
        let purposeLabel = document.createElement("label");
        purposeLabel.innerHTML = "Função:";
        purposeLabel.for = "purpose";
        let purpose = document.createElement("input");
        purpose.id = "purpose";
        purpose.type = "text";
        purpose.value = character.purpose;
        rightInput.appendChild(purposeLabel);
        rightInput.appendChild(purpose);
        addBrToDiv("part2", 1);
    } else if(character instanceof Changeling){
        let appearanceLabel = document.createElement("label");
        appearanceLabel.innerHTML = "Aparência Aparente:";
        appearanceLabel.for = "appearance";
        let appearance = document.createElement("input");
        appearance.id = "appearance";
        appearance.type = "text";
        appearance.value = character.apparentAppearance;
        rightInput.appendChild(appearanceLabel);
        rightInput.appendChild(appearance);
        addBrToDiv("part2", 1);
        let buildLabel = document.createElement("label");
        buildLabel.innerHTML = "Estatura Aparente:";
        buildLabel.for = "build";
        let build = document.createElement("input");
        build.id = "build";
        build.type = "text";
        build.value = character.apparentBuild;
        rightInput.appendChild(buildLabel);
        rightInput.appendChild(build);
        addBrToDiv("part2", 1);
        let ancestryLabel = document.createElement("label");
        ancestryLabel.innerHTML = "Ancestralidade Aparente:";
        ancestryLabel.for = "ancestry";
        let ancestry = document.createElement("input");
        ancestry.id = "ancestry";
        ancestry.type = "text";
        ancestry.value = character.apparentAncestry;
        rightInput.appendChild(ancestryLabel);
        rightInput.appendChild(ancestry);
        addBrToDiv("part2", 1);
        let apparentAgeLabel = document.createElement("label");
        apparentAgeLabel.innerHTML = "Idade Aparente:";
        apparentAgeLabel.for = "apparentAge";
        let apparentAge = document.createElement("input");
        apparentAge.id = "apparentAge";
        apparentAge.type = "text";
        apparentAge.value = character.apparentAge;
        rightInput.appendChild(apparentAgeLabel);
        rightInput.appendChild(apparentAge);
        addBrToDiv("part2", 1);
        let genderLabel = document.createElement("label");
        genderLabel.innerHTML = "Gênero Aparente:";
        genderLabel.for = "gender";
        let gender = document.createElement("input");
        gender.id = "gender";
        gender.type = "text";
        gender.value = character.apparentGender;
        rightInput.appendChild(genderLabel);
        rightInput.appendChild(gender);
        addBrToDiv("part2", 1);
        let quirkLabel = document.createElement("label");
        quirkLabel.innerHTML = "Peculiaridade:";
        quirkLabel.for = "quirk";
        let quirk = document.createElement("input");
        quirk.id = "quirk";
        quirk.type = "text";
        quirk.value = character.quirk;
        rightInput.appendChild(quirkLabel);
        rightInput.appendChild(quirk);
        addBrToDiv("part2", 1);
    } else if(character instanceof Goblin){
        let buildLabel = document.createElement("label");
        buildLabel.innerHTML = "Estatura:";
        buildLabel.for = "build";
        let build = document.createElement("input");
        build.id = "build";
        build.type = "text";
        build.value = character.build;
        rightInput.appendChild(buildLabel);
        rightInput.appendChild(build);
        addBrToDiv("part2", 1);
        let appearanceLabel = document.createElement("label");
        appearanceLabel.innerHTML = "Aspecto Característico:";
        appearanceLabel.for = "appearance";
        let appearance = document.createElement("input");
        appearance.id = "appearance";
        appearance.type = "text";
        appearance.value = character.distinctiveAppearance;
        rightInput.appendChild(appearanceLabel);
        rightInput.appendChild(appearance);
        addBrToDiv("part2", 1);
        let oddHabitLabel = document.createElement("label");
        oddHabitLabel.innerHTML = "Hábito Estranho:";
        oddHabitLabel.for = "oddHabit";
        let oddHabit = document.createElement("input");
        oddHabit.id = "oddHabit";
        oddHabit.type = "text";
        oddHabit.value = character.oddHabit;
        rightInput.appendChild(oddHabitLabel);
        rightInput.appendChild(oddHabit);
        addBrToDiv("part2", 1);
    } else if(character instanceof Orc){
        let appearanceLabel = document.createElement("label");
        appearanceLabel.innerHTML = "Aparência:";
        appearanceLabel.for = "appearance";
        let appearance = document.createElement("input");
        appearance.id = "appearance";
        appearance.type = "text";
        appearance.value = character.appearance;
        rightInput.appendChild(appearanceLabel);
        rightInput.appendChild(appearance);
        addBrToDiv("part2", 1);
        let buildLabel = document.createElement("label");
        buildLabel.innerHTML = "Estatura:";
        buildLabel.for = "build";
        let build = document.createElement("input");
        build.id = "build";
        build.type = "text";
        build.value = character.build;
        rightInput.appendChild(buildLabel);
        rightInput.appendChild(build);
        addBrToDiv("part2", 1);
    } else if(character instanceof Yerath){
        let casteLabel = document.createElement("label");
        casteLabel.innerHTML = "Casta:";
        casteLabel.for = "caste";
        let caste = document.createElement("input");
        caste.id = "caste";
        caste.type = "text";
        caste.value = character.caste;
        rightInput.appendChild(casteLabel);
        rightInput.appendChild(caste);
        addBrToDiv("part2", 1);
    }
    let profList = document.querySelector("#professions");
    let profId = 0;
    character.professions.forEach(function(prof){
        let profession = document.createElement("li");
        profession.innerHTML = prof;
        profession.id = "prof" + profId;
        let editIcon = document.createElement("img");
        editIcon.src = "Images/edit.png";
        editIcon.onclick = `editProfession(${profId})`;
        profession.appendChild(editIcon);
        let removeIcon = document.createElement("img");
        removeIcon.src = "Images/crossSign.png";
        removeIcon.onclick = `removeProfession(${profId})`;
        profession.appendChild(removeIcon);
        profList.appendChild(profession);
        profId++;
    });
    let addIcon = document.createElement("img");
    addIcon.src = "Images/plusSign";
    addIcon.onclick = `addProfession()`;

    // Loading right input data:
    loadInfo();
}

function editProfession(id){

}

function removeProfession(id){

}

function addProfession(){
    
}

function loadInfo(){
    let age = document.querySelector("#age");
    age.value = character.age;

    let personality = document.querySelector("#personality");
    personality.value = character.personality;

    let religion = document.querySelector("#religion");
    religion.value = character.religion;

    let background = document.querySelector("#background");
    background.value = character.background;

    let size = document.querySelector("#size");
    switch(character.size){
        case 0.25:
            size.value = "1/4";
            break;
        case 0.5:
            size.value = "1/2";
            break;
        default:
            size.value = character.size;
    }
}

function changeOption(select){
    let id = "changeDiv";
    emptyDiv(id);
    switch(select.value){
        case "info":
            createNewInput(id, "Idade:", "age", "number");
            addBrToDiv(id, 1);
            createNewInput(id, "Personalidade:", "personality", "text");
            addBrToDiv(id, 1);
            createNewInput(id, "Religião:", "religion", "text");
            addBrToDiv(id, 1);
            createNewInput(id, "Antecedente:", "background", "text");
            addBrToDiv(id, 1);
            createOptionsInput(id, "Tamanho:", "size",
            ["1/4", "1/2", "1", "2", "3"],
            ["0.25", "0.5", "1", "2", "3"]);
            loadInfo();
            break;
        case "talents":
            break;
        case "equipment":
            break;
    }
}