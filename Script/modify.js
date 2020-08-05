character = JSON.parse(localStorage.getItem("character"));
if(!character) console.log("Coudn't load character");

character = getCharacter(character);

profsId = 0;
languagesId = 0;

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

    // Creating right input data:
    let select = document.querySelector("#changeOptions");
    changeOption(select);

    // Loading right input data:
    loadInfo();
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

    if(character instanceof Human){
        let appearance = document.querySelector("#appearance");
        appearance.value = character.appearence;
        let build = document.querySelector("#build");
        build.value = character.build;
    } else if(character instanceof Dwarf){
        let appearance = document.querySelector("#appearance");
        appearance.value = character.appearance;
        let build = document.querySelector("#build");
        build.value = character.build;
        let hatred = document.querySelector("#hatred");
        hatred.value = character.hatred;
    } else if(character instanceof Clockwork){
        let appearance = document.querySelector("#appearance");
        appearance.value = character.appearance;
        let form = document.querySelector("#form");
        form.value = character.form;
        let purpose = document.querySelector("#purpose");
        purpose.value = character.purpose;
    } else if(character instanceof Changeling){
        let appearance = document.querySelector("#appearance");
        appearance.value = character.apparentAppearance;
        let build = document.querySelector("#build");
        build.value = character.apparentBuild;
        let gender = document.querySelector("#gender");
        gender.value = character.apparentGender;
        let ancestry = document.querySelector("#ancestry");
        ancestry.value = character.apparentAncestry;
        let apparentAge = document.querySelector("#apparentAge");
        apparentAge.value = character.apparentAge;
        let quirk = document.querySelector("#quirk");
        quirk.value = character.quirk;
    } else if(character instanceof Goblin){
        let build = document.querySelector("#build");
        build.value = character.build;
        let appearance = document.querySelector("#appearance");
        appearance.value = character.distinctiveAppearance;
        let oddHabit = document.querySelector("#oddHabit");
        oddHabit.value = character.oddHabit;
    } else if(character instanceof Orc){
        let appearance = document.querySelector("#appearance");
        appearance.value = character.appearance;
        let build = document.querySelector("#build");
        build.value = character.build;
        
    } else if(character instanceof Yerath){
        let caste = document.querySelector("#caste");
        caste.value = character.caste;
    }

    let noviceTraining = document.querySelector("#noviceTraining");
    noviceTraining.value = character.novicePath.training;

    if(character.expertPath){
        let expertPath = document.querySelector("#expertTraining");
        expertPath.value = character.expertPath.training;
    }

    if(character.masterPath){
        let masterPath = document.querySelector("#masterTraining");
        masterPath.value = character.masterPath.training;
    }
}

talentsId = 0;

function changeOption(select){
    profsId = 0;
    languagesId = 0;
    talentsId = 0;
    let id = "changeDiv";
    let changeDiv = document.querySelector("#" + id);
    emptyDiv(id);
    let inputId = "rightInput";
    let inputDiv = document.createElement("div");
    inputDiv.id = inputId;
    changeDiv.appendChild(inputDiv);
    let profUl = document.createElement("ul");
    profUl.id = "professions";
    changeDiv.appendChild(profUl);
    let langDiv = document.createElement("div");
    langDiv.id = "languages";
    changeDiv.appendChild(langDiv);

    switch(select.value){
        case "info":
            createNewInput(inputId, "Idade:", "age", "number");
            addBrToDiv(inputId, 1);
            createNewInput(inputId, "Personalidade:", "personality", "text");
            addBrToDiv(inputId, 1);
            createNewInput(inputId, "Religião:", "religion", "text");
            addBrToDiv(inputId, 1);
            createNewInput(inputId, "Antecedente:", "background", "text");
            addBrToDiv(inputId, 1);
            createOptionsInput(inputId, "Tamanho:", "size",
            ["1/4", "1/2", "1", "2", "3"],
            ["0.25", "0.5", "1", "2", "3"]);
            addBrToDiv(inputId, 2);
            // Creating right input:
            if(character instanceof Human){
                let appearanceLabel = document.createElement("label");
                appearanceLabel.innerHTML = "Aparência:";
                appearanceLabel.for = "appearance";
                let appearance = document.createElement("input");
                appearance.id = "appearance";
                appearance.type = "text";
                rightInput.appendChild(appearanceLabel);
                rightInput.appendChild(appearance);
                addBrToDiv("rightInput", 1);
                let buildLabel = document.createElement("label");
                buildLabel.innerHTML = "Estatura:";
                buildLabel.for = "build";
                let build = document.createElement("input");
                build.id = "build";
                build.type = "text";
                rightInput.appendChild(buildLabel);
                rightInput.appendChild(build);
                addBrToDiv("rightInput", 1);
            } else if(character instanceof Dwarf){
                let appearanceLabel = document.createElement("label");
                appearanceLabel.innerHTML = "Aparência:";
                appearanceLabel.for = "appearance";
                let appearance = document.createElement("input");
                appearance.id = "appearance";
                appearance.type = "text";
                rightInput.appendChild(appearanceLabel);
                rightInput.appendChild(appearance);
                addBrToDiv("rightInput", 1);
                let buildLabel = document.createElement("label");
                buildLabel.innerHTML = "Estatura:";
                buildLabel.for = "build";
                let build = document.createElement("input");
                build.id = "build";
                build.type = "text";
                rightInput.appendChild(buildLabel);
                rightInput.appendChild(build);
                addBrToDiv("rightInput", 1);
                let hatredLabel = document.createElement("label");
                hatredLabel.innerHTML = "Ódio Anão:";
                hatredLabel.for = "hatred";
                let hatred = document.createElement("input");
                hatred.id = "hatred";
                hatred.type = "text";
                rightInput.appendChild(hatredLabel);
                rightInput.appendChild(hatred);
                addBrToDiv("rightInput", 1);
            } else if(character instanceof Clockwork){
                let appearanceLabel = document.createElement("label");
                appearanceLabel.innerHTML = "Aparência:";
                appearanceLabel.for = "appearance";
                let appearance = document.createElement("input");
                appearance.id = "appearance";
                appearance.type = "text";
                rightInput.appendChild(appearanceLabel);
                rightInput.appendChild(appearance);
                addBrToDiv("rightInput", 1);
                let formLabel = document.createElement("label");
                formLabel.innerHTML = "Forma:";
                formLabel.for = "form";
                let form = document.createElement("input");
                form.id = "form";
                form.type = "text";
                rightInput.appendChild(formLabel);
                rightInput.appendChild(form);
                addBrToDiv("rightInput", 1);
                let purposeLabel = document.createElement("label");
                purposeLabel.innerHTML = "Função:";
                purposeLabel.for = "purpose";
                let purpose = document.createElement("input");
                purpose.id = "purpose";
                purpose.type = "text";
                rightInput.appendChild(purposeLabel);
                rightInput.appendChild(purpose);
                addBrToDiv("rightInput", 1);
            } else if(character instanceof Changeling){
                let appearanceLabel = document.createElement("label");
                appearanceLabel.innerHTML = "Aparência Aparente:";
                appearanceLabel.for = "appearance";
                let appearance = document.createElement("input");
                appearance.id = "appearance";
                appearance.type = "text";
                rightInput.appendChild(appearanceLabel);
                rightInput.appendChild(appearance);
                addBrToDiv("rightInput", 1);
                let buildLabel = document.createElement("label");
                buildLabel.innerHTML = "Estatura Aparente:";
                buildLabel.for = "build";
                let build = document.createElement("input");
                build.id = "build";
                build.type = "text";
                rightInput.appendChild(buildLabel);
                rightInput.appendChild(build);
                addBrToDiv("rightInput", 1);
                let ancestryLabel = document.createElement("label");
                ancestryLabel.innerHTML = "Ancestralidade Aparente:";
                ancestryLabel.for = "ancestry";
                let ancestry = document.createElement("input");
                ancestry.id = "ancestry";
                ancestry.type = "text";
                rightInput.appendChild(ancestryLabel);
                rightInput.appendChild(ancestry);
                addBrToDiv("rightInput", 1);
                let apparentAgeLabel = document.createElement("label");
                apparentAgeLabel.innerHTML = "Idade Aparente:";
                apparentAgeLabel.for = "apparentAge";
                let apparentAge = document.createElement("input");
                apparentAge.id = "apparentAge";
                apparentAge.type = "text";
                rightInput.appendChild(apparentAgeLabel);
                rightInput.appendChild(apparentAge);
                addBrToDiv("rightInput", 1);
                let genderLabel = document.createElement("label");
                genderLabel.innerHTML = "Gênero Aparente:";
                genderLabel.for = "gender";
                let gender = document.createElement("input");
                gender.id = "gender";
                gender.type = "text";
                rightInput.appendChild(genderLabel);
                rightInput.appendChild(gender);
                addBrToDiv("rightInput", 1);
                let quirkLabel = document.createElement("label");
                quirkLabel.innerHTML = "Peculiaridade:";
                quirkLabel.for = "quirk";
                let quirk = document.createElement("input");
                quirk.id = "quirk";
                quirk.type = "text";
                rightInput.appendChild(quirkLabel);
                rightInput.appendChild(quirk);
                addBrToDiv("rightInput", 1);
            } else if(character instanceof Goblin){
                let buildLabel = document.createElement("label");
                buildLabel.innerHTML = "Estatura:";
                buildLabel.for = "build";
                let build = document.createElement("input");
                build.id = "build";
                build.type = "text";
                rightInput.appendChild(buildLabel);
                rightInput.appendChild(build);
                addBrToDiv("rightInput", 1);
                let appearanceLabel = document.createElement("label");
                appearanceLabel.innerHTML = "Aspecto Característico:";
                appearanceLabel.for = "appearance";
                let appearance = document.createElement("input");
                appearance.id = "appearance";
                appearance.type = "text";
                rightInput.appendChild(appearanceLabel);
                rightInput.appendChild(appearance);
                addBrToDiv("rightInput", 1);
                let oddHabitLabel = document.createElement("label");
                oddHabitLabel.innerHTML = "Hábito Estranho:";
                oddHabitLabel.for = "oddHabit";
                let oddHabit = document.createElement("input");
                oddHabit.id = "oddHabit";
                oddHabit.type = "text";
                rightInput.appendChild(oddHabitLabel);
                rightInput.appendChild(oddHabit);
                addBrToDiv("rightInput", 1);
            } else if(character instanceof Orc){
                let appearanceLabel = document.createElement("label");
                appearanceLabel.innerHTML = "Aparência:";
                appearanceLabel.for = "appearance";
                let appearance = document.createElement("input");
                appearance.id = "appearance";
                appearance.type = "text";
                rightInput.appendChild(appearanceLabel);
                rightInput.appendChild(appearance);
                addBrToDiv("rightInput", 1);
                let buildLabel = document.createElement("label");
                buildLabel.innerHTML = "Estatura:";
                buildLabel.for = "build";
                let build = document.createElement("input");
                build.id = "build";
                build.type = "text";
                rightInput.appendChild(buildLabel);
                rightInput.appendChild(build);
                addBrToDiv("rightInput", 1);
            } else if(character instanceof Yerath){
                let casteLabel = document.createElement("label");
                casteLabel.innerHTML = "Casta:";
                casteLabel.for = "caste";
                let caste = document.createElement("input");
                caste.id = "caste";
                caste.type = "text";
                rightInput.appendChild(casteLabel);
                rightInput.appendChild(caste);
                addBrToDiv("rightInput", 1);
            }
            let noviceLabel = document.createElement("label");
            noviceLabel.innerHTML = "Treinamento de Trilha de Aprendiz:";
            noviceLabel.for = "noviceTraining";
            let novice = document.createElement("input");
            novice.id = "noviceTraining";
            novice.type = "text";
            rightInput.appendChild(noviceLabel);
            rightInput.appendChild(novice);
            addBrToDiv("rightInput");

            if(character.expertPath){
                let expertLabel = document.createElement("label");
                expertLabel.innerHTML = "Treinamento de Trilha de Especialista:";
                expertLabel.for - "expertTraining";
                let expert = document.createElement("input");
                expert.id = "expertTraining";
                expert.type = "text";
                rightInput.appendChild(expertLabel);
                rightInput.appendChild(expert);
            }

            if(character.masterPath){
                let masterLabel = document.createElement("label");
                masterLabel.innerHTML = "Treinamento de Trilha de Mestre:";
                masterLabel.for - "masterTraining";
                let master = document.createElement("input");
                master.id = "masterTraining";
                master.type = "text";
                rightInput.appendChild(masterLabel);
                rightInput.appendChild(master);
            }

            let profList = document.querySelector("#professions");
            let profP = document.createElement("p");
            profP.innerHTML = "Profissões:";
            profList.appendChild(profP);
            character.professions.forEach(function(prof){
                let profession = document.createElement("li");
                profession.innerHTML = prof;
                profession.id = "prof" + profsId;
                let editIcon = document.createElement("img");
                editIcon.src = "Images/edit.png";
                editIcon.width = 10;
                editIcon.setAttribute("onclick", `editProfession(${profsId})`);
                profession.appendChild(editIcon);
                let removeIcon = document.createElement("img");
                removeIcon.src = "Images/crossSign.png";
                removeIcon.width = 10;
                removeIcon.setAttribute("onclick", `removeProfession(${profsId})`);
                profession.appendChild(removeIcon);
                profList.appendChild(profession);
                profsId++;
            });
            let addIcon = document.createElement("img");
            addIcon.src = "Images/plusSign.png";
            addIcon.width = 20;
            addIcon.setAttribute("onclick", `addProfession()`);
            profList.appendChild(addIcon);

            let languagesList = document.querySelector("#languages");
            let langP = document.createElement("p");
            langP.innerHTML = "Idiomas:";
            languagesList.appendChild(langP);
            Object.keys(character.languages).forEach(function(lang){
                let language = document.createElement("li");
                language.innerHTML = lang;
                let editIcon = document.createElement("img");
                editIcon.src = "Images/edit.png";
                editIcon.width = 10;
                editIcon.setAttribute("onclick", `editLanguage(${languagesId})`);
                language.appendChild(editIcon);
                let removeIcon = document.createElement("img");
                removeIcon.src = "Images/crossSign.png";
                removeIcon.width = 10;
                removeIcon.setAttribute("onclick", `removeLanguage(${languagesId})`);
                language.appendChild(removeIcon);
                language.innerHTML += "<br>";

                language.id = "lang" + languagesId;

                let speakableLabel = document.createElement("label");
                speakableLabel.innerHTML = "Falar";
                speakableLabel.for = "speakable" + languagesId;
                let speakable = document.createElement("input");
                speakable.type = "checkbox";
                speakable.id = "speakable" + languagesId;
                if(character.languages[lang].speakable){
                    speakable.checked = true;
                }
                language.appendChild(speakableLabel);
                language.appendChild(speakable);

                let readableLabel = document.createElement("label");
                readableLabel.innerHTML = "Ler";
                readableLabel.for = "readable" + languagesId;
                let readable = document.createElement("input");
                readable.id = "readable" + languagesId;
                readable.type = "checkbox";
                if(character.languages[lang].readable){
                    readable.checked = true;
                }
                language.appendChild(readableLabel);
                language.appendChild(readable);

                let writableLabel = document.createElement("label");
                writableLabel.innerHTML = "Escrever";
                writableLabel.for = "writable" + languagesId;
                let writable = document.createElement("input");
                writable.id = "writable" + languagesId;
                writable.type = "checkbox";
                if(character.languages[lang].writable){
                    writable.checked = true;
                }
                language.appendChild(writableLabel);
                language.appendChild(writable);

                languagesList.appendChild(language);
                languagesId++;
            });

            addIcon = document.createElement("img");
            addIcon.src = "Images/plusSign.png";
            addIcon.width = 20;
            addIcon.setAttribute("onclick", `addLanguage()`);
            languagesList.appendChild(addIcon);
            loadInfo();
            break;
        case "talents":
            let ancestryTalents = document.createElement("ul");
            ancestryTalents.id = "talentsAncestry";
            Object.keys(character.talents.ancestry).forEach(function(talent){
                let tal = document.createElement("li");
                tal.id = "talent" + talentsId;
                tal.innerHTML = talent + ": " + character.talents.ancestry[talent];
                let editIcon = document.createElement("img");
                editIcon.src = "Images/edit.png";
                editIcon.width = 10;
                editIcon.setAttribute("onclick", `editTalent(${talentsId}, "ancestry")`);
                tal.appendChild(editIcon);
                let removeIcon = document.createElement("img");
                removeIcon.src = "Images/crossSign.png";
                removeIcon.width = 10;
                removeIcon.setAttribute("onclick", `removeTalent(${talentsId}, "ancestry")`);
                tal.appendChild(removeIcon);
                ancestryTalents.appendChild(tal);
                talentsId++;
            });
            let addButton = document.createElement("img");
            addButton.src = "Images/plusSign.png";
            addButton.width = 20;
            addButton.setAttribute("onclick", `addTalent("ancestry")`);
            changeDiv.appendChild(ancestryTalents);
            changeDiv.appendChild(addButton);

            let noviceTalents = document.createElement("ul");
            noviceTalents.id = "talentsNovice";
            Object.keys(character.talents.novicePath).forEach(function(talent){
                let tal = document.createElement("li");
                tal.id = "talent" + talentsId;
                tal.innerHTML = talent + ": " + character.talents.novicePath[talent];
                let editIcon = document.createElement("img");
                editIcon.src = "Images/edit.png";
                editIcon.width = 10;
                editIcon.setAttribute("onclick", `editTalent(${talentsId}, "novice")`);
                tal.appendChild(editIcon);
                let removeIcon = document.createElement("img");
                removeIcon.src = "Images/crossSign.png";
                removeIcon.width = 10;
                removeIcon.setAttribute("onclick", `removeTalent(${talentsId}, "novice")`);
                tal.appendChild(removeIcon);
                noviceTalents.appendChild(tal);
                talentsId++;
            });
            addButton = document.createElement("img");
            addButton.src = "Images/plusSign.png";
            addButton.width = 20;
            addButton.setAttribute("onclick", `addTalent("novice")`);
            changeDiv.appendChild(noviceTalents);
            changeDiv.appendChild(addButton);

            if(character.expertPath){
                let expertTalents = document.createElement("ul");
                expertTalents.id = "talentsExpert";
                Object.keys(character.talents.expertPath).forEach(function(talent){
                    let tal = document.createElement("li");
                    tal.id = "talent" + talentsId;
                    tal.innerHTML = talent + ": " + character.talents.expertPath[talent];
                    let editIcon = document.createElement("img");
                    editIcon.src = "Images/edit.png";
                    editIcon.width = 10;
                    editIcon.setAttribute("onclick", `editTalent(${talentsId}, "expert")`);
                    tal.appendChild(editIcon);
                    let removeIcon = document.createElement("img");
                    removeIcon.src = "Images/crossSign.png";
                    removeIcon.width = 10;
                    removeIcon.setAttribute("onclick", `removeTalent(${talentsId}, "expert")`);
                    tal.appendChild(removeIcon);
                    expertTalents.appendChild(tal);
                });
                addButton = document.createElement("img");
                addButton.src = "Images/plusSign.png";
                addButton.width = 20;
                addButton.setAttribute("onclick", `addTalent("expert")`);
                changeDiv.appendChild(expertTalents);
                changeDiv.appendChild(addButton);
                talentsId++;
            }

            if(character.masterPath){
                let masterTalents = document.createElement("ul");
                masterTalents.id = "talentsMaster";
                Object.keys(character.talents.masterPath).forEach(function(talent){
                    let tal = document.createElement("li");
                    tal.id = "talent" + talentsId;
                    tal.innerHTML = talent + ": " + character.talents.masterPath[talent];
                    let editIcon = document.createElement("img");
                    editIcon.src = "Images/edit.png";
                    editIcon.width = 10;
                    editIcon.setAttribute("onclick", `editTalent(${talentsId}, "master")`);
                    tal.appendChild(editIcon);
                    let removeIcon = document.createElement("img");
                    removeIcon.src = "Images/crossSign.png";
                    removeIcon.width = 10;
                    removeIcon.setAttribute("onclick", `removeTalent(${talentsId}, "master")`);
                    masterTalents.appendChild(tal);
                    masterTalents.appendChild(removeIcon);
                });
                addButton = document.createElement("img");
                addButton.src = "Images/plusSign.png";
                addButton.width = 20;
                addButton.setAttribute("onclick", `addTalent("master")`);
                masterTalents.appendChild(addButton);
                changeDiv.appendChild(masterTalents);
                talentsId++;
            }
            changeDiv.innerHTML += "<br>";
            break;
        case "equipment":
            let weapons = document.createElement("button");
            weapons.innerHTML = "Armas";
            weapons.onclick = openWeapons;
            changeDiv.appendChild(weapons);
            let weaponsDiv = document.createElement("div");
            weaponsDiv.id = "weapons";
            changeDiv.appendChild(weaponsDiv);
            let armors = document.createElement("button");
            armors.innerHTML = "Armaduras";
            armors.onclick = openArmors;
            break;
    }
    let button = document.createElement("button");
    button.innerHTML = "Salvar mudanças";
    button.onclick = saveChangesRightInput;
    changeDiv.appendChild(button);
}

function editProfession(id){
    let prof = document.querySelector("#prof" + id);
    let checkAlready = document.querySelector("#inputProf" + id);
    if(!checkAlready){
        let input = document.createElement("input");
        input.id = "inputProf" + id;
        input.type = "text";
        prof.appendChild(input);
    }
    else {
        prof.removeChild(checkAlready);
    }
}

function removeProfession(id){
    let ul = document.querySelector("#professions");
    let prof = document.querySelector("#prof" + id);
    ul.removeChild(prof);
}

function addProfession(){
    let ul = document.querySelector("#professions");
    
    let li = document.createElement("li");
    li.id = "prof" + profsId;
    let input = document.createElement("input");
    input.type = "text";
    let removeIcon = document.createElement("img");
    removeIcon.src = "Images/crossSign.png";
    removeIcon.width = 10;
    removeIcon.setAttribute("onclick", `removeProfession(${profsId})`);
    li.appendChild(input);
    li.appendChild(removeIcon);
    ul.appendChild(li);
    profsId++;
}

function editLanguage(id){
    let lang = document.querySelector("#lang" + id);
    let checkAlready = document.querySelector("#inputlang" + id);
    if(!checkAlready){
        let input = document.createElement("input");
        input.id = "inputlang" + id;
        input.type = "text";
        lang.appendChild(input);
    }
    else {
        lang.removeChild(checkAlready);
    }
}

function removeLanguage(id){
    let div = document.querySelector("#languages");
    let lang = document.querySelector("#lang" + id);
    div.removeChild(lang);
}

function addLanguage(){
    let languagesList = document.querySelector("#languages");
    let language = document.createElement("li");
    let input = document.createElement("input");
    input.type = "text";
    language.appendChild(input);
    let removeIcon = document.createElement("img");
    removeIcon.src = "Images/crossSign.png";
    removeIcon.width = 10;
    removeIcon.setAttribute("onclick", `removeLanguage(${languagesId})`);
    language.appendChild(removeIcon);
    language.innerHTML += "<br>";   
    language.id = "lang" + languagesId; 
    let speakableLabel = document.createElement("label");
    speakableLabel.innerHTML = "Falar";
    speakableLabel.for = "speakable" + languagesId;
    let speakable = document.createElement("input");
    speakable.type = "checkbox";
    speakable.id = "speakable" + languagesId;
    language.appendChild(speakableLabel);
    language.appendChild(speakable);  

    let readableLabel = document.createElement("label");
    readableLabel.innerHTML = "Ler";
    readableLabel.for = "readable" + languagesId;
    let readable = document.createElement("input");
    readable.id = "readable" + languagesId;
    readable.type = "checkbox";
    language.appendChild(readableLabel);
    language.appendChild(readable); 

    let writableLabel = document.createElement("label");
    writableLabel.innerHTML = "Escrever";
    writableLabel.for = "writable" + languagesId;
    let writable = document.createElement("input");
    writable.id = "writable" + languagesId;
    writable.type = "checkbox";

    language.appendChild(writableLabel);
    language.appendChild(writable); 
    languagesList.appendChild(language);
    languagesId++;
}

function editTalent(id){
    let li = document.querySelector("#talent" + id);
    let checkAlready = document.querySelector("#talentDiv" + id);
    if(!checkAlready){
        li.innerHTML += "<br>";
        
        let talentDiv = document.createElement("div");
        talentDiv.id = "talentDiv" + id;

        let nameLabel = document.createElement("label");
        nameLabel.for = "talentName" + id;
        nameLabel.innerHTML = "Nome:"
        let name = document.createElement("input");
        name.type = "text";
        name.id = "talentName" + id;
        talentDiv.appendChild(nameLabel);
        talentDiv.appendChild(name);
        talentDiv.innerHTML += "<br>";

        let talentLabel = document.createElement("label");
        talentLabel.for = "talentInput" + id;
        talentLabel.innerHTML = "Talento:";
        let talent = document.createElement("input");
        talent.id = "talentInput" + id;
        talent.name = "text";
        talentDiv.appendChild(talentLabel);
        talentDiv.appendChild(talent);

        li.appendChild(talentDiv);
    } else{
        li.removeChild(checkAlready);
    }
}

function removeTalent(id, type){
    let ul;
    if(type == "ancestry"){
        ul = document.querySelector("#talentsAncestry");
    } else if(type == "novice"){
        ul = document.querySelector("#talentsNovice");
    } else if(type == "expert"){
        ul = document.querySelector("#talentsExpert");
    } else if(type == "master"){
        ul = document.querySelector("#talentsMaster");
    }
    let li = document.querySelector("#talent" + id);
    ul.removeChild(li);
    
}

function addTalent(type){
    let ul;
    if(type == "ancestry"){
        ul = document.querySelector("#talentsAncestry");
    } else if(type == "novice"){
        ul = document.querySelector("#talentsNovice");
    } else if(type == "expert"){
        ul = document.querySelector("#talentsExpert");
    } else if(type == "master"){
        ul = document.querySelector("#talentsMaster");
    }
    
    let li = document.createElement("li");
    li.id = "talent" + talentsId;
    let nameLabel = document.createElement("label");
    nameLabel.for = "talentName" + talentsId;
    nameLabel.innerHTML = "Nome:"
    let name = document.createElement("input");
    name.type = "text";
    name.id = "talentName" + talentsId;
    li.appendChild(nameLabel);
    li.appendChild(name);
    li.innerHTML += "<br>";

    let talentLabel = document.createElement("label");
    talentLabel.for = "talentInput" + talentsId;
    talentLabel.innerHTML = "Talento:";
    let talent = document.createElement("input");
    talent.id = "talentInput" + talentsId;
    talent.name = "text";
    li.appendChild(talentLabel);
    li.appendChild(talent);
    let image = document.createElement("img");
    image.src = "Images/crossSign.png";
    image.width = 20;
    image.setAttribute("onclick", `removeTalent(${talentsId}, "${type}")`);
    li.appendChild(image);
    ul.appendChild(li);
    talentsId++;
}

function openWeapons(){

}

function openArmors(){
    
}

function saveChangesRightInput(){

}

function saveChanges(){

}
