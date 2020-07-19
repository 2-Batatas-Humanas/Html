characterLocalStorage = JSON.parse(localStorage.getItem("character"));
if(!characterLocalStorage){
    alert("Crie um personagem primeiro!");
    window.location.href = "index.html";
}
character = getCharacter(characterLocalStorage);

console.log(character)

function loadCharacterData() {
    let name = document.querySelector("#name");
    name.innerHTML = character.name;
    let level = document.querySelector("#level");
    level.innerHTML = character.level;
    let ancestry = document.querySelector("#ancestry");
    if(character instanceof Human){
        ancestry.innerHTML = "Humano";
    }
    else if(character instanceof Dwarf){
        ancestry.innerHTML = "Anão";
    }
    else if(character instanceof Clockwork){
        ancestry.innerHTML = "Autômato";
    }
    else if(character instanceof Changeling){
        ancestry.innerHTML = "Changeling";
    }
    else if(character instanceof Goblin){
        ancestry.innerHTML = "Goblin";
    }
    else if(character instanceof Orc){
        ancestry.innerHTML = "Orc";
    }
    else if(character instanceof Yerath){
        ancestry.innerHTML = "Yerath";
    }
    let novicePath = document.querySelector("#novicePath");
    if(character.novicePath instanceof Warrior){
        novicePath.innerHTML = "Guerreiro";
    }
    else if(character.novicePath instanceof Rogue){
        novicePath.innerHTML = "Ladino";
    }
    else if(character.novicePath instanceof Magician){
        novicePath.innerHTML = "Mágico";
    }
    else if(character.novicePath instanceof Priest){
        novicePath.innerHTML = "Sacerdote";
    }
    //Expert Path
    //Master Path

    let insanity = document.querySelector("#insanity");
    insanity.value = character.insanity;
    let corruption = document.querySelector("#corruption");
    corruption.value = character.corruption;
    let power = document.querySelector("#power");
    power.value = character.power;
    let defense = document.querySelector("#defense");
    defense.value = character.defense;
    let damage = document.querySelector("#damage");
    damage.value = character.damage;
    let healingRate = document.querySelector("#healingRate");
    healingRate.value = character.healingRate;

    let strength = document.querySelector("#strength");
    strength.innerHTML += character.strength + "(";
    if(character.strength > 10){
        strength.innerHTML += "+" + (character.strength - 10) + ")";
    }
    else if(character.strength < 10){
        strength.innerHTML += (character.strength - 10) + ")";
    }
    else{
        strength.innerHTML += (character.strength - 10) + ")";
    }
    let agility = document.querySelector("#agility");
    agility.innerHTML += character.agility + "(";
    if(character.agility > 10){
        agility.innerHTML += "+" + (character.agility - 10) + ")";
    }
    else if(character.agility < 10){
        agility.innerHTML += (character.agility - 10) + ")";
    }
    else{
        agility.innerHTML += (character.agility - 10) + ")";
    }
    let intellect = document.querySelector("#intellect");
    intellect.innerHTML += character.intellect + "(";
    if(character.intellect > 10){
        intellect.innerHTML += "+" + (character.intellect - 10) + ")";
    }
    else if(character.intellect < 10){
        intellect.innerHTML += (character.intellect - 10) + ")";
    }
    else{
        intellect.innerHTML += (character.intellect - 10) + ")";
    }
    let will = document.querySelector("#will");
    will.innerHTML += character.will + "(";
    if(character.will > 10){
        will.innerHTML += "+" + (character.will - 10) + ")";
    }
    else if(character.will < 10){
        will.innerHTML += (character.will - 10) + ")";
    }
    else{
        will.innerHTML += (character.will - 10) + ")";
    }
    let perception = document.querySelector("#perception");
    perception.innerHTML += character.perception + "(";
    if(character.perception > 10){
        perception.innerHTML += "+" + (character.perception - 10) + ")";
    }
    else if(character.perception < 10){
        perception.innerHTML += (character.perception - 10) + ")";
    }
    else{
        perception.innerHTML += (character.perception - 10) + ")";
    }
    let size = document.querySelector("#size");
    if(character.size == 0.25){
        size.innerHTML += "1/4";
    }
    else if(character.size == 0.5){
        size.innerHTML += "1/2";
    }
    else{
        size.innerHTML += character.size;
    }
    let speed = document.querySelector("#speed");
    speed.innerHTML += character.speed;
    let health = document.querySelector("#health");
    health.innerHTML += character.health;
}

function loadInfo(){
    let infoDiv = document.querySelector("#info");
    if(infoDiv.innerHTML == ""){
        let age = document.createElement("p");
        age.innerHTML = "Idade: " + character.age;
        infoDiv.appendChild(age);
        let personality = document.createElement("p");
        personality.innerHTML = "Personalidade: " + character.personality;
        infoDiv.appendChild(personality);
        let religion = document.createElement("p");
        religion.innerHTML = "Religião: " + character.religion;
        infoDiv.appendChild(religion);
        let background = document.createElement("p");
        background.innerHTML = "Antecedente: " + character.background;
        infoDiv.appendChild(background);
        if(character instanceof Human){
            let appearance = document.createElement("p");
            appearance.innerHTML = "Aparência: " + character.appearance;
            infoDiv.appendChild(appearance);
            let build = document.createElement("p");
            build.innerHTML = "Estatura: " + character.build;
            infoDiv.appendChild(build);
        }
        else if(character instanceof Dwarf){
            let appearance = document.createElement("p");
            appearance.innerHTML = "Aparência: " + character.appearance;
            infoDiv.appendChild(appearance);
            let build = document.createElement("p");
            build.innerHTML = "Estatura: " + character.build;
            infoDiv.appendChild(build);
            let hatred = document.createElement("p");
            hatred.innerHTML = "Ódio Anão: " + character.hatred;
            infoDiv.appendChild(hatred);
        }
        else if(character instanceof Changeling){
            let apparentAncestry = document.createElement("p");
            apparentAncestry.innerHTML = "Ancestralidade Aparência: " + character.apparentAncestry;
            infoDiv.appendChild(apparentAncestry);
            let apparentAge = document.createElement("p");
            apparentAge.innerHTML = "Idade Aparente: " + character.apparentAge;
            infoDiv.appendChild(apparentAge);
            let apparentGender = document.createElement("p");
            apparentGender.innerHTML = "Gênero Aparente: " + character.apparentGender;
            infoDiv.appendChild(apparentGender);
            let apparentAppearence = document.createElement("p");
            apparentAppearence.innerHTML = "Aparência Aparente: " + character.apparentAppearence;
            infoDiv.appendChild(apparentAppearence);
            let apparentBuild = document.createElement("p");
            apparentBuild.innerHTML = "Estatura Aparente: " + character.apparentBuild;
            infoDiv.appendChild(apparentBuild);
            let quirk = document.createElement("p");
            quirk.innerHTML = "Peculiaridade: " + character.quirk;
            infoDiv.appendChild(quirk);
        }
        else if(character instanceof Clockwork){
            let appearance = document.createElement("p");
            appearance.innerHTML = "Aparência: " + character.appearance;
            infoDiv.appendChild(appearance);
            let purpose = document.createElement("p");
            purpose.innerHTML = "Função: " + character.purpose;
            infoDiv.appendChild(purpose);
            let form = document.createElement("p");
            form.innerHTML = "Forma: " + character.form;
            infoDiv.appendChild(form);
        }
        else if(character instanceof Goblin){
            let build = document.createElement("p");
            build.innerHTML = "Estatura: " + character.build;
            infoDiv.appendChild(build);
            let oddHabit = document.createElement("p");
            oddHabit.innerHTML = "Hábito Estranho: " + character.oddHabit;
            infoDiv.appendChild(oddHabit);
            let distinctiveAppearance = document.createElement("p");
            distinctiveAppearance.innerHTML = "Aspecto Característico: " + character.distinctiveAppearance;
            infoDiv.appendChild(distinctiveAppearance);
        }
        else if(character instanceof Orc){
            let appearance = document.createElement("p");
            appearance.innerHTML = "Aparência: " + character.appearance;
            infoDiv.appendChild(appearance);
            let build = document.createElement("p");
            build.innerHTML = "Estatura: " + character.build;
            infoDiv.appendChild(build);
        }
        else if(character instanceof Yerath){
            let caste = document.createElement("p");
            caste.innerHTML = "Casta: " + character.caste;
            infoDiv.appendChild(caste);
        }
        let professions = document.createElement("p");
        professions.innerHTML = "Profissões: " + character.professions;
        infoDiv.appendChild(professions);

        let languages = document.createElement("p");
        languages.innerHTML = "Idiomas:";
        infoDiv.appendChild(languages);
        let languageList = document.createElement("ul");
        let langKeys = Object.keys(character.languages);
        langKeys.forEach(function(lang){
            let language = document.createElement("li");
            language.innerHTML = lang + "(";
            if(character.languages[lang].speakable){
                language.innerHTML += "falar";
            }
            if(character.languages[lang].readable || character.languages[lang].writable){
                if(character.languages[lang].readable){
                    language.innerHTML += ", ler";
                    if(character.languages[lang].writable){
                        language.innerHTML += ", escrever)";
                    } else{
                        language.innerHTML += ")";
                    }
                } else{
                    language.innerHTML += ", escrever)";

                }
            } else{
                language.innerHTML += ")";
            }
            languageList.appendChild(language);
        });
        infoDiv.appendChild(languageList);

    } else{
        infoDiv.innerHTML = "";
    }
}

function loadTalents(){
    let talents = document.querySelector("#talents");
    if(talents.innerHTML == ""){
        if(!isEmpty(character.talents.ancestry)){
            let ancestryTalents = document.createElement("p");
            ancestryTalents.innerHTML = "Talentos de Ancestralidade:";
            talents.appendChild(ancestryTalents);
            let ancestryList = document.createElement("ul");
            let allAncestryTalents = Object.keys(character.talents.ancestry);
            allAncestryTalents.forEach(function(value){
                let ancestryTalent = document.createElement("li");
                ancestryTalent.innerHTML = value + ": " + character.talents.ancestry[value];
                ancestryList.appendChild(ancestryTalent);
            });
            ancestryTalents.appendChild(ancestryList);
        }
        let noviceTalents = document.createElement("p");
        noviceTalents.innerHTML = "Talentos de Trilha de Aprendiz:";
        talents.appendChild(noviceTalents);
        let noviceList = document.createElement("ul");
        let allNoviceTalents = Object.keys(character.talents.novicePath);
        allNoviceTalents.forEach(function(value){
            let noviceTalent = document.createElement("li");
            noviceTalent.innerHTML = value + ": " + character.talents.novicePath[value];
            noviceList.appendChild(noviceTalent);
        });
        noviceTalents.appendChild(noviceList);
    } else{
        talents.innerHTML = "";
    }
}

function loadEquipment(){
    let equipments = document.querySelector("#equipments");
    if(equipments.innerHTML == ""){
        let weapons = document.createElement("button");
        weapons.innerHTML = ">Armas";
        weapons.onclick = loadWeapons;
        weaponsDiv = document.createElement("div");
        weaponsDiv.id = "weapons";
        equipments.appendChild(weapons);
        equipments.appendChild(weaponsDiv);

        let armors = document.createElement("button");
        armors.innerHTML = ">Armaduras";
        armors.onclick = loadArmors;
        armorsDiv = document.createElement("div");
        armorsDiv.id = "armors";
        equipments.appendChild(armors);
        equipments.appendChild(armorsDiv);

        if(!isEmpty(character.bag.ammo)){
            let ammo = document.createElement("button");
            ammo.innerHTML = ">Munição";
            ammo.onclick = loadAmmo;
            ammoDiv = document.createElement("div");
            ammoDiv.id = "ammo";
            equipments.appendChild(ammo);
            equipments.appendChild(ammoDiv);
        }

        let items = document.createElement("button");
        items.innerHTML = ">Itens";
        items.onclick = loadItems;
        itemsDiv = document.createElement("div");
        itemsDiv.id = "items";
        equipments.appendChild(items);
        equipments.appendChild(itemsDiv);

        if(!isEmpty(character.bag.animals)){
            let animals = document.createElement("button");
            animals.innerHTML = ">Animais";
            animals.onclick = loadAnimals;
            animalsDiv = document.createElement("div");
            animalsDiv.id = "animals";
            equipments.appendChild(animals);
            equipments.appendChild(animalsDiv);
        }

        if(!isEmpty(character.bag.hirelings)){
            let hirelings = document.createElement("button");
            hirelings.innerHTML = ">Serviçais";
            hirelings.onclick = loadHirelings;
            hirelingsDiv = document.createElement("div");
            hirelingsDiv.id = "hirelings";
            equipments.appendChild(hirelings);
            equipments.appendChild(hirelingsDiv);
        }

        let money = document.createElement("button");
        money.innerHTML = ">Dinheiro";
        money.onclick = loadMoney;
        moneyDiv = document.createElement("div");
        moneyDiv.id = "money";
        equipments.appendChild(money);
        equipments.appendChild(moneyDiv);
    } else{
        equipments.innerHTML = "";
    }
}

function loadWeapons(){
    let weapons = document.querySelector("#weapons");
    if(weapons.innerHTML == ""){
        let keys = Object.keys(character.bag.weapons);
        keys.forEach(function(value){
            let name = document.createElement("p");
            name.innerHTML = value;
            weapons.appendChild(name);

            let weaponList = document.createElement("ul");

            let type = document.createElement("li");
            type.innerHTML = "Tipo: " + character.bag.weapons[value].type;
            weaponList.appendChild(type);

            let damage = document.createElement("li");
            damage.innerHTML = "Dano: " + character.bag.weapons[value].damage;
            weaponList.appendChild(damage);

            let hands = document.createElement("li");
            hands.innerHTML = "Mãos: " + character.bag.weapons[value].hands;
            weaponList.appendChild(hands);

            let properties = document.createElement("li");
            properties.innerHTML = "Propriedades:";
            weaponList.appendChild(properties);
            let propertiesList = document.createElement("ul");
            for(let i = 0; i < character.bag.weapons[value].properties.length; i++){
                let property = document.createElement("li");
                property.innerHTML = character.bag.weapons[value].properties[i];
                propertiesList.appendChild(property);
            }
            weaponList.appendChild(propertiesList);
            weapons.appendChild(weaponList);
        });
    } else{
        weapons.innerHTML = "";
    }
}

function loadArmors(){
    let armors = document.querySelector("#armors");
    if(armors.innerHTML == ""){
        let keys = Object.keys(character.bag.armors);
        let armorNum = 0;
        keys.forEach(function(value){
            let name = document.createElement("p");
            name.innerHTML = value;
            armors.appendChild(name);

            let armorList = document.createElement("ul");

            let type = document.createElement("li");
            type.innerHTML = "Tipo: " + character.bag.armors[value].type;
            armorList.appendChild(type);

            let defense = document.createElement("li");
            defense.innerHTML = "Defesa: " + character.bag.armors[value].defense;
            armorList.appendChild(defense);

            let description = document.createElement("li");
            let descButton = document.createElement("button");
            descButton.innerHTML = "Descrição";
            let descSpan = document.createElement("span");
            descSpan.id = "armorSpan" + armorNum;
            descButton.setAttribute("onclick", `loadArmorDesc(${armorNum}, "${value}")`);
            description.appendChild(descButton);
            armorList.appendChild(description);
            armorList.appendChild(descSpan);

            armors.appendChild(armorList);
            armorNum++;
        });
    } else{
        armors.innerHTML = "";
    }
}

function loadArmorDesc(armorNum, name){
    let descSpan = document.querySelector("#armorSpan" + armorNum);
    if(descSpan.innerHTML == ""){
        descSpan.innerHTML = character.bag.armors[name].description;
    } else{
        descSpan.innerHTML = "";
    }
}

function loadAmmo(){
    let ammo = document.querySelector("#ammo");
    if(ammo.innerHTML == ""){
        let keys = Object.keys(character.bag.ammo);
        keys.forEach(function(value){
            let ammunition = document.createElement("p");
            ammunition.innerHTML = value + ": " + character.bag.ammo[value].quantity;
            ammo.appendChild(ammunition);
        })
    } else{
        ammo.innerHTML = "";
    }
}

function loadItems(){
    let items = document.querySelector("#items");
    if(items.innerHTML == ""){
        let keys = Object.keys(character.bag.items);
        let itemNum = 0;
        keys.forEach(function(value){
            let name = document.createElement("p");
            name.innerHTML = value;
            items.appendChild(name);

            if(character.bag.items[value].description){
                let descriptionButton = document.createElement("button");
                descriptionButton.innerHTML = "Descrição";
                descriptionButton.setAttribute("onclick", `loadItemDesc(${itemNum}, "${value}")`);
                items.appendChild(descriptionButton);
            }
            
            let descriptionDiv = document.createElement("div");
            descriptionDiv.id = "description" + itemNum;
            items.appendChild(descriptionDiv);

            itemNum++;
        })
    } else{
        items.innerHTML = "";
    }
}

function loadItemDesc(itemNum, name){
    let descDiv = document.querySelector("#description" + itemNum);
    if(descDiv.innerHTML == ""){
        let desc = document.createElement("p");
        desc.innerHTML = character.bag.items[name].description;
        descDiv.appendChild(desc);
    } else{
        descDiv.innerHTML = "";
    }
}

function loadAnimals(){
    alert("Não está pronto ainda. Desculpe");
}

function loadHirelings(){
    alert("Não está pronto ainda. Desculpe");
}

function loadMoney(){
    let money = document.querySelector("#money");
    if(money.innerHTML == ""){
        let bits = document.createElement("p");
        bits.innerHTML = "Milavos(MA): " + character.bag.money.bits;
        money.appendChild(bits);
        let copperPennies = document.createElement("p");
        copperPennies.innerHTML = "Centavos de Cobre(CC): " + character.bag.money.copperPennies;
        money.appendChild(copperPennies);
        let silverShillings = document.createElement("p");
        silverShillings.innerHTML = "Xelins de Prata(XP): " + character.bag.money.silverShillings;
        money.appendChild(silverShillings);
        let goldCrowns = document.createElement("p");
        goldCrowns.innerHTML = "Coroas de Ouro(CO): " + character.bag.money.goldCrowns;
        money.appendChild(goldCrowns);
    } else{
        money.innerHTML = "";
    }
}

function loadSpells(){
    let spells = document.querySelector("#spells");
    if(isEmpty(character.traditions)){
        alert("O seu personagem não tem magias");
        return
    }
    if(spells.innerHTML == ""){
        let keys = Object.keys(character.traditions);
        let tradNum = 0;
        keys.forEach(function(trad){
            let tradButton = document.createElement("button");
            tradButton.innerHTML = ">" + trad;
            tradButton.setAttribute("onclick", `loadTradition(${tradNum}, "${trad}")`);
            spells.appendChild(tradButton);
            let tradDiv = document.createElement("div");
            tradDiv.id = "tradition" + tradNum;
            spells.appendChild(tradDiv);
            tradNum++;
        })
    } else{
        spells.innerHTML = "";
    }
}

function loadTradition(tradNum, trad){
    console.log(tradNum);
    let tradition = document.querySelector("#tradition" + tradNum);
    if(tradition.innerHTML == ""){
        let keys = Object.keys(character.traditions[trad]);
        let spellNum = 0;
        keys.forEach(function(spell){
            let spellButton = document.createElement("button");
            spellButton.innerHTML = "-" + spell;
            spellButton.setAttribute("onclick", `loadSpell(${spellNum}, "${spell}", "${trad}")`);
            tradition.appendChild(spellButton);
            let spellDiv = document.createElement("div");
            spellDiv.id = "spell" + spellNum;
            tradition.appendChild(spellDiv);
            spellNum++;
        })
    } else{
        tradition.innerHTML = "";
    }
}

const addToDiv = function(att, name, spellObj, id){
    if(spellObj[att]){
        addPToDiv(id, name + ": " + spellObj[att]);
    }
}

function loadSpell(spellNum, spell, trad){
    let id = "spell" + spellNum;
    let spellDiv = document.querySelector("#" + id);
    if(spellDiv.innerHTML == ""){
        const atts = ["description", "target", "area", "duration", "attackRoll20", "requisites", "type", "level"];
        const names = ["Descrição", "Alvo", "Área", "Duração", "Ataque 20+", "Requisitos", "Tipo", "Nível"];
        for(let i = 0; i < atts.length; i++){
            addToDiv(atts[i], names[i], character.traditions[trad][spell], id);
        }
    } else{
        spellDiv.innerHTML = "";
    }
}
