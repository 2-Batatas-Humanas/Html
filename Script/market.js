character = JSON.parse(localStorage.getItem("character"));
if(!character) console.log("Couldn't load character");
choices = JSON.parse(localStorage.getItem("choices"));
if(!choices) console.log("Couldn't load choices");

if(!character.bag){
    character.bag = {
        weapons: {},
        ammo: {},
        armors: {},
        items: {},
        hirelings: {},
        animals: {},
        money: {
            bits: 0,
            copperPennies: parseInt(choices.backgroundMoney) || 0,
            silverShillings:    parseInt(choices.level1Money),
            goldCrowns: 0
        }
    };
    character.bag.items[choices.interestingThings[0]] = {};
    if(character.ancestry == "yerath" && choices.backgroundChange == "extra interesting thing"){
        character.bag.items[choices.interestingThings[1]] = {};
    }
    
    switch(character.wealth){
        case "destitute":
            character.bag.type = "Bolsa";
            character.bag.armors["Trapos"] = deepCopy(item.armor["Roupas"]);
            character.bag.money.bits = parseInt(choices.initialWealthMoney);

            if(choices.wealthWeaponChoice == "club"){
                character.bag.weapons["Porrete"] = deepCopy(item.weapon["Porrete"]);
            } else{// Sling
                character.bag.weapons["Funda"] = deepCopy(item.weapon["Funda"]);
                character.bag.ammo["Pedras"] = {
                    price: item.ammo["Pedras"],
                    quantity: 20
                }
            }
            break;
        case "poor":
            character.bag.type = "Saco";
            character.bag.money.bits = parseInt(choices.initialWealthMoney);
            character.bag.armors["Roupas comuns remendadas"] = deepCopy(item.armor["Roupas"]);
            character.bag.items["Pão"] = {};
            character.bag.items["Odre"] = deepCopy(item.personalGear["Odre"]);
            character.bag.items["Pederneira"] = deepCopy(item.personalGear["Pederneira"]);
            character.bag.items["Vela"] = deepCopy(item.personalGear["Vela"]);

            if(choices.wealthWeaponChoice == "staff"){
                character.bag.weapons["Cajado"] = deepCopy(item.weapon["Cajado"]);
            } else{// Sling
                character.bag.weapons["Funda"] = deepCopy(item.weapon["Funda"]);
                character.bag.ammo["Pedras"] = {
                    price: item.ammo["Pedras"],
                    quantity: 20
                }
            }
            break;
        case "gettingBy":
            character.bag.type = "Mochila";
            character.bag.money.copperPennies += parseInt(choices.initialWealthMoney);
            character.bag.weapons["Adaga"] = deepCopy(item.weapon["Adaga ou faca"]);
            character.bag.armors["Roupas comuns"] = deepCopy(item.armor["Roupas"]);
            character.bag.items["Rações para uma semana"] = deepCopy(item.food["Ração"]);
            character.bag.items["Odre"] = deepCopy(item.personalGear["Odre"]);
            character.bag.items["Pederneira"] = deepCopy(item.personalGear["Pederneira"]);
            for(let i = 0; i < (choices.numTorch || 1); i++){
                character.bag.items["Tocha " + i + 1] = deepCopy(item.personalGear["Tocha"]);
            }

            if(choices.wealthWeaponChoice == "club"){
                character.bag.weapons["Porrete"] = deepCopy(item.weapon["Porrete"]);
            } else if(choices.wealthWeaponChoice == "staff"){
                character.bag.weapons["Cajado"] = deepCopy(item.weapon["Cajado"]);
            } else{// Sling
                character.bag.weapons["Funda"] = deepCopy(item.weapon["Funda"]);
                character.bag.ammo["Pedras"] = {
                    price: item.ammo["Pedras"],
                    quantity: 20
                }
            }
            break;
        case "comfortable":
            character.bag.type = "Mochila";
            character.bag.money.copperPennies += parseInt(choices.initialWealthMoney);
            character.bag.weapons["Adaga"] = deepCopy(item.weapon["Adaga ou faca"]);
            character.bag.armors["Roupas de qualidade"] = deepCopy(item.armor["Roupas"]);
            character.bag.items["Manto"] = deepCopy(item.clothingAndAccessory["Manto"]);
            character.bag.items["Odre"] = deepCopy(item.personalGear["Odre"]);
            character.bag.items["Rações para uma semana"] = deepCopy(item.food["Ração"]);
            character.bag.items["Corda (20 metros)"] = deepCopy(item.personalGear["Corda (20 metros)"]);
            character.bag.items["Poção de Cura"] = deepCopy(item.potion["Cura"]);
            character.bag.items["Pederneira"] = deepCopy(item.personalGear["Pederneira"]);
            character.bag.items["Tocha 1"] = deepCopy(item.personalGear["Tocha"]);
            character.bag.items["Tocha 2"] = deepCopy(item.personalGear["Tocha"]);
            character.bag.items["Kit de cura"] = deepCopy(item.tool["Kit de Curandeiro (6 usos)"]);
            if(choices.kit == "tools"){
                character.bag.items["Kit de ferramentas"] = deepCopy(item.tool["Kit de Ferramentas"]);
            } else{
                character.bag.items["Kit de escrita"] = deepCopy(item.tool["Kit de Escrita"]);
            }
            character.bag.weapons["Escudo pequeno"] = deepCopy(item.weapon["Escudo pequeno"]);
            character.bag.items["Feitiço nível 0"] = deepCopy(item.incantation["Nível 0"]);

            if(choices.wealthWeaponChoice == "club"){
                character.bag.weapons["Porrete"] = deepCopy(item.weapon["Porrete"]);
            } else if(choices.wealthWeaponChoice == "staff"){
                character.bag.weapons["Cajado"] = deepCopy(item.weapon["Cajado"]);
            } else{// Sling
                character.bag.weapons["Funda"] = deepCopy(item.weapon["Funda"]);
                character.bag.ammo["Pedras"] = {
                    price: item.ammo["Pedras"],
                    quantity: 20
                }
            }
            break;
        case "wealthy":
            character.bag.type = "Mochila";
            character.bag.money.silverShillings += parseInt(choices.initialWealthMoney);
            character.bag.weapons["Adaga"] = deepCopy(item.weapon["Adaga ou faca"]);
            character.bag.armors["Roupas de cortesão"] = deepCopy(item.armor["Roupas"]);
            character.bag.items["Manto"] = deepCopy(item.clothingAndAccessory["Manto"]);
            character.bag.items["Rações para uma semana"] = deepCopy(item.food["Ração"]);
            character.bag.items["Odre"] = deepCopy(item.personalGear["Odre"]);
            character.bag.items["Corda (20 metros)"] = deepCopy(item.personalGear["Corda (20 metros)"]);
            character.bag.items["Poção de Cura"] = deepCopy(item.potion["Cura"]);
            character.bag.items["Pederneira"] = deepCopy(item.personalGear["Pederneira"]);
            character.bag.items["Lanterna"] = deepCopy(item.personalGear["Lanterna"]);
            character.bag.items["Frasco de óleo 1"] = deepCopy(item.personalGear["Óleo, frasco"]);
            character.bag.items["Frasco de óleo 2"] = deepCopy(item.personalGear["Óleo, frasco"]);
            character.bag.weapons["Escudo pequeno"] = deepCopy(item.weapon["Escudo pequeno"]);
            character.bag.items["Kit de cura"] = deepCopy(item.tool["Kit de Curandeiro (6 usos)"]);
            character.bag.items["Kit de ferramentas"] = deepCopy(item.tool["Kit de Ferramentas"]);
            character.bag.items["Kit de escrita"] = deepCopy(item.tool["Kit de Escrita"]);
            character.bag.items["Feitiço nível 0"] = deepCopy(item.incantation["Nível 0"]);
            break;
        case "rich":
            character.bag.type = "Cavalos e servo";
            character.bag.money.silverShillings += parseInt(choices.initialWealthMoney);
            character.bag.weapons["Adaga"] = deepCopy(item.weapon["Adaga ou faca"]);
            character.bag.armors["Roupas de nobre"] = deepCopy(item.armor["Roupas"]);
            character.bag.items["Manto"] = deepCopy(item.clothingAndAccessory["Manto"]);
            character.bag.items["Rações para uma semana"] = deepCopy(item.food["Ração"]);
            character.bag.items["Odre"] = deepCopy(item.personalGear["Odre"]);
            character.bag.items["Poção de Cura"] = deepCopy(item.potion["Cura"]);
            character.bag.hirelings["Servo pessoal"] = deepCopy(item.hireling["Plebeu"]);
            character.bag.hirelings["Guarda"] = deepCopy(item.hireling["Mercenário"]);
            character.bag.animals["Cavalo 1"] = deepCopy(item.animal["Cavalo, mula, pônei"]);
            character.bag.animals["Cavalo 1"].hasSaddle = true;
            character.bag.items["Sela 1"] = deepCopy(item.animalGear["Sela"]);
            character.bag.animals["Cavalo 2"] = deepCopy(item.animal["Cavalo, mula, pônei"]);
            character.bag.animals["Cavalo 2"].hasSaddle = true;
            character.bag.items["Sela 2"] = deepCopy(item.animalGear["Sela"]);
            character.bag.animals["Cavalo 3"] = deepCopy(item.animal["Cavalo, mula, pônei"]);
            character.bag.animals["Cavalo 3"].hasSaddle = true;
            character.bag.items["Sela 3"] = deepCopy(item.animalGear["Sela"]);
            break;
    }
    
    switch(choices.backgroundChange){
        case "treasure map":
            character.bag.items["Mapa do Tesouro"] = {};
            break;
        case "battlehammer/warhammer":
            if(choices.battleWarHammer == "battlehammer"){
                character.bag.weapons["Machado de batalha"] = deepCopy(item.weapon["Machado de batalha, mangual, estrela da manhã, picareta, ou espada"]);
            } else{
                character.bag.weapons["Martelo de guerra"] = deepCopy(item.weapons["Espada bastarda ou martelo de guerra"]);
            }
            break;
        case "key to ancient dwarf tresure vault":
            character.bag.items["Chave para um antigo cofre de tesouros dos anões"] = {};
            break;
        case "knife":
            character.bag.weapons["Faca"] = deepCopy(item.weapon["Adaga ou faca"]);
            break;
        case "lock of hair":
            character.bag.items["Cacho do cabelo da Rainha das Fadas"] = {};
            break;
        case "signet ring":
            character.bag.items["Anel com sinete"] = {};
            break;
        case "medal":
            character.bag.items["Medalha por Coragem"] = {};
            break;
        case "sword":
            character.bag.weapons["Espada"] = deepCopy(item.weapon["Espada bastarda ou martelo de guerra"]);
            break;
        case "random enchanted object":
            character.bag.weapons[choices.newObject] = {
                description: choices.magicProperty
            };
            break;
        case "incantation rank 0 spell":
            character.bag.item["Feitiço nível 0"] = deepCopy(item.incantation["Nível 0"]);
            break;
    }
}

function setBag(){
    let id = "bagDiv";
    if(!isEmpty(character.bag.weapons)){
        createHtmlList(id, "bag", ["Armas:"]);

        let weaponsId = "bagWeapons";
        createHtmlList("bag", weaponsId, []);

        let weapons = Object.keys(character.bag.weapons);
        let wpnCount = 0;
        weapons.forEach(function(weapon){
            appendLiElement(weaponsId, weapon);
            createHtmlList(weaponsId, "weapon" + wpnCount,
            ["Tipo: " + character.bag.weapons[weapon].type, "Dano: " + character.bag.weapons[weapon].damage, "Mãos: " + character.bag.weapons[weapon].hands, "Propriedades:"]);
            createHtmlList("weapon" + wpnCount, "propertiesWeapon" + wpnCount, character.bag.weapons[weapon].properties);
            wpnCount++;
        });
    }

    if(!isEmpty(character.bag.ammo)){
        appendLiElement("bag", "Munição:");
        createHtmlList("bag", "bagAmmo", []);
        let ammo = Object.keys(character.bag.ammo);
        ammo.forEach(function(val){
            appendLiElement("bagAmmo", val + ": " + character.bag.ammo.quantity);
        });
    }
    if(!isEmpty(character.bag.armors)){
        appendLiElement("bag", "Armaduras:")

        let armorId = "bagArmors";
        createHtmlList("bag", armorId, []);

        let armors = Object.keys(character.bag.armors);
        let armorCount = 0;
        armors.forEach(function(armor){
            appendLiElement(armorId, armor);
            createHtmlList(armorId, "armor" + armorCount,
            ["Tipo: " + character.bag.armors[armor].type, "Defesa: " + character.bag.armors[armor].defense, "Descrição: " + character.bag.armors[armor].description]);
            armorCount++;
        });
    }
    if(!isEmpty(character.bag.items)){
        appendLiElement("bag", "Itens:");

        let itemsId = "bagItems";
        createHtmlList("bag", itemsId, []);

        let items = Object.keys(character.bag.items);
        items.forEach(function(item){
            if(!character.bag.items[item].description){
                appendLiElement(itemsId, item);
            } else{
                let desc = `<details>
                        <summary>${item}</summary>
                        <p>Descrição: ${character.bag.items[item].description}</p>
                    </details>`
                appendLiElement(itemsId, desc);

            }
        });
    }
    if(!isEmpty(character.bag.hirelings)){
        appendLiElement("bag", "Serviçais:");

        let hirelingsId = "bagHirelings";
        createHtmlList("bag", hirelingsId, []);

        let hirelings = Object.keys(character.bag.hirelings);
        hirelings.forEach(function(hireling){
            let desc = `<details><summary>${hireling}</summary>`;
            switch(character.bag.hirelings[hireling].price){
                case 50:
                    desc += `<p>Preço por semana: ${(character.bag.hirelings[hireling].price)/10} Centavos de cobre(cc)</p>`
                    break;
                case 100:
                case 500:
                    desc += `<p>Preço por semana: ${(character.bag.hirelings[hireling].price)/100} Xelins de Prata(xp)</p>`   
            }
            desc += `<p>Descrição: ${character.bag.hirelings[hireling].description}</p></details>`
            appendLiElement(itemsId, desc);            
        });
    }
    if(!isEmpty(character.bag.animals)){
        appendLiElement("bag", "Animais:");

        let animalsId = "bagAnimals";
        createHtmlList("bag", animalsId, []);

        let animals = Object.keys(character.bag.animals);
        animals.forEach(function(animal){
            let desc = `<details><summary>${animal}</summary>`;
            if(character.bag.animals[animal].hasSaddle){
                desc += `<p>Esse animal possui uma sela acoplada</p>`;
            }
            if(character.bag.animals[animal].properties){
                desc += `<p>Características do animal</p><ul>`
                for(charac in Object.keys(character.bag.animals[animal].properties)){
                    switch(charac){
                        case "size":
                            desc += `<li>Tamanho: ${character.bag.animals[animal].properties[charac]}</li>`;
                            break;
                        case "perception":
                            desc += `<li>Percepção: ${character.bag.animals[animal].properties[charac]}</li>`;
                            break;
                        case "defense":
                            desc += `<li>Defesa: ${character.bag.animals[animal].properties[charac]}</li>`;
                            break;
                        case "health":
                            desc += `<li>Saúde: ${character.bag.animals[animal].properties[charac]}</li>`;
                            break;
                        case "strength":
                            desc += `<li>Força: ${character.bag.animals[animal].properties[charac]}</li>`;
                            break;
                        case "agility":
                            desc += `<li>Agilidade: ${character.bag.animals[animal].properties[charac]}</li>`;
                            break;
                        case "intellect":
                            desc += `<li>Intelecto: ${character.bag.animals[animal].properties[charac]}</li>`;
                            break;
                        case "will":
                            desc += `<li>Vontade: ${character.bag.animals[animal].properties[charac]}</li>`;
                            break;
                        case "speed":
                            desc += `<li>Deslocamento: ${character.bag.animals[animal].properties[charac]}</li>`;
                            break;
                        case "attackOptions":
                            desc += `<li>Opção de ataque: Arma Natural</li><ul>
                                <li>Tipo: ${character.bag.animals[animal].properties[charac]["Arma Natural"].type}</li>
                                <li>Modificador de ataque: ${character.bag.animals[animal].properties[charac]["Arma Natural"].attack}</li>
                                <li>Dano se acertar: ${character.bag.animals[animal].properties[charac]["Arma Natural"].damage}</li>
                            </ul>`
                            break;
                        case "specialAttack":
                            desc += `<li>Ataque especial: Distrair</li><ul>
                                <li>Descrição: ${character.bag.animals[animal].properties[charac]["Distrair"].description}</li>
                            </ul>`;
                            break;
                    }
                }
                desc += `</ul>`;
            }
            desc += `</details>`;
            appendLiElement(animalsId, desc);
        });
    }
}

function processMoney(){
    let bits = document.querySelector("#bitsCurrent");
    bits.value = character.bag.money.bits;
    let copperPennies = document.querySelector("#copperPenniesCurrent");
    copperPennies.value = character.bag.money.copperPennies;
    let silverShillings = document.querySelector("#silverShillingsCurrent");
    silverShillings.value = character.bag.money.silverShillings;
    let goldCrowns = document.querySelector("#goldCrownsCurrent");
    goldCrowns.value = character.bag.money.goldCrowns;
}

function stockMarket(){
    let div = document.querySelector("#flexWeapon");// Get the flexbox div

    let weapons = Object.keys(item.weapon);// Get all the weapons
    weapons.forEach(function(wpn){// For each weapon(wpn)
        let auxDiv = document.createElement("div");// Create a new div
        auxDiv.className = "weapon";// Div class => weapon

        let auxP = document.createElement("p");// Create a p for the weapon's name
        auxP.innerHTML = wpn;// Put the name in the p
        auxDiv.appendChild(auxP);// Append the p in the div

        let auxUl = document.createElement("ul");// Create a ul for the weapon's properties

        let price = item.weapon[wpn].price;// Get the price to be normalized
        let priceType = "";
        if(price > 1000){// Normalizing price
            price /= 1000
            priceType = "Coroas de Ouro(co)";
        }
        else if(price > 100){
            price /= 100
            priceType = "Xelins de Prata(xp)";
        }
        else if(price > 10){
            price /= 10
            priceType = "Centavos de Cobre(cc)";
        }
        else if(price === null){
            price = "";
        }
        else{
            priceType = "Milavos(ma)";
        }
        // Setting weapon properties:
        auxUl.innerHTML = `
            <li>Tipo: ${item.weapon[wpn].type}</li>
            <li>Dano: ${item.weapon[wpn].damage}</li>
            <li>Mãos: ${item.weapon[wpn].hands}</li>
            <li>Propriedades: ${item.weapon[wpn].properties.toString()}</li>
            <li>Preço: ${price} ${priceType}</li>
            <li>Disponibilidade: ${item.weapon[wpn].availability}</li>
        `
        auxDiv.appendChild(auxUl);// Append ul
        div.appendChild(auxDiv);// Append div in flexbox div
    });

    div = document.querySelector("#flexAmmo");
    
    let ammo = Object.keys(item.ammo);
    ammo.forEach(function(val){
        let auxDiv = document.createElement("div");
        auxDiv.className = "ammo";

        let auxP = document.createElement("p");
        auxP.innerHTML = val;
        auxDiv.appendChild(auxP);

        let auxUl = document.createElement("ul");
        let price = item.ammo[val];
        let priceType = "";
        if(price > 1000){
            price /= 1000
            priceType = "Coroas de Ouro(co)";
        }
        else if(price > 100){
            price /= 100
            priceType = "Xelins de Prata(xp)";
        }
        else if(price > 10){
            price /= 10
            priceType = "Centavos de Cobre(cc)";
        }
        else if(price === null){
            price = "";
        }
        else{
            priceType = "Milavos(ma)";
        }
        auxUl.innerHTML = `
            <li>Preço: ${price} ${priceType}</li>
        `
        auxDiv.appendChild(auxUl);
        div.appendChild(auxDiv);
    });

    div = document.querySelector("#flexArmor");
    
    let armors = Object.keys(item.armor);
    armors.forEach(function(armor){
        let auxDiv = document.createElement("div");
        auxDiv.className = "armor";

        let auxP = document.createElement("p");
        auxP.innerHTML = armor;
        auxDiv.appendChild(auxP);

        let auxUl = document.createElement("ul");
        let price = item.armor[armor].price;
        let priceType = "";
        if(price > 1000){
            price /= 1000
            priceType = "Coroas de Ouro(co)";
        }
        else if(price > 100){
            price /= 100
            priceType = "Xelins de Prata(xp)";
        }
        else if(price > 10){
            price /= 10
            priceType = "Centavos de Cobre(cc)";
        }
        else if(price === null){
            price = "";
        }
        else{
            priceType = "Milavos(ma)";
        }
        auxUl.innerHTML = `
            <li>Tipo: ${item.armor[armor].type}</li>
            <li>Defense: ${item.armor[armor].defense}</li>
            <li>Descrição: ${item.armor[armor].description}</li>
            <li>Preço: ${price} ${priceType}</li>
            <li>Disponibilidade: ${item.armor[armor].availability}</li>
        `
        auxDiv.appendChild(auxUl);
        div.appendChild(auxDiv);
    });

    div = document.querySelector("#flexPersonalGear");
    
    let personalGears = Object.keys(item.personalGear);
    personalGears.forEach(function(gear){
        let auxDiv = document.createElement("div");
        auxDiv.className = "personalGear";

        let auxP = document.createElement("p");
        auxP.innerHTML = gear;
        auxDiv.appendChild(auxP);

        let auxUl = document.createElement("ul");
        let price = item.personalGear[gear].price;
        let priceType = "";
        if(price > 1000){
            price /= 1000
            priceType = "Coroas de Ouro(co)";
        }
        else if(price > 100){
            price /= 100
            priceType = "Xelins de Prata(xp)";
        }
        else if(price > 10){
            price /= 10
            priceType = "Centavos de Cobre(cc)";
        }
        else if(price === null){
            price = "";
        }
        else{
            priceType = "Milavos(ma)";
        }
        if(item.personalGear[gear].description){
            auxUl.innerHTML = `<li>Descrição: ${item.personalGear[gear].description}`;
        }
        auxUl.innerHTML += `
            <li>Preço: ${price} ${priceType}</li>
            <li>Disponibilidade: ${item.personalGear[gear].availability}</li>
        `
        auxDiv.appendChild(auxUl);
        div.appendChild(auxDiv);
    });

    div = document.querySelector("#flexClothingAcessory");
    
    let clothingAcessories = Object.keys(item.clothingAndAccessory);
    clothingAcessories.forEach(function(val){
        let auxDiv = document.createElement("div");
        auxDiv.className = "clothingAcessory";

        let auxP = document.createElement("p");
        auxP.innerHTML = val;
        auxDiv.appendChild(auxP);

        let auxUl = document.createElement("ul");
        let price = item.clothingAndAccessory[val].price;
        let priceType = "";
        if(price > 1000){
            price /= 1000
            priceType = "Coroas de Ouro(co)";
        }
        else if(price > 100){
            price /= 100
            priceType = "Xelins de Prata(xp)";
        }
        else if(price > 10){
            price /= 10
            priceType = "Centavos de Cobre(cc)";
        }
        else if(price === null){
            price = "";
        }
        else{
            priceType = "Milavos(ma)";
        }
        auxUl.innerHTML += `
            <li>Preço: ${price} ${priceType}</li>
            <li>Disponibilidade: ${item.clothingAndAccessory[val].availability}</li>
        `
        auxDiv.appendChild(auxUl);
        div.appendChild(auxDiv);
    });

    div = document.querySelector("#flexTool");
    
    let tools = Object.keys(item.tool);
    tools.forEach(function(tool){
        let auxDiv = document.createElement("div");
        auxDiv.className = "tool";

        let auxP = document.createElement("p");
        auxP.innerHTML = tool;
        auxDiv.appendChild(auxP);

        let auxUl = document.createElement("ul");
        let price = item.tool[tool].price;
        let priceType = "";
        if(price > 1000){
            price /= 1000
            priceType = "Coroas de Ouro(co)";
        }
        else if(price > 100){
            price /= 100
            priceType = "Xelins de Prata(xp)";
        }
        else if(price > 10){
            price /= 10
            priceType = "Centavos de Cobre(cc)";
        }
        else if(price === null){
            price = "";
        }
        else{
            priceType = "Milavos(ma)";
        }
        if(item.tool[tool].description){
            auxUl.innerHTML = `<li>Descrição: ${item.tool[tool].description}`;
        }
        auxUl.innerHTML += `
            <li>Preço: ${price} ${priceType}</li>
            <li>Disponibilidade: ${item.tool[tool].availability}</li>
        `
        auxDiv.appendChild(auxUl);
        div.appendChild(auxDiv);
    });

    div = document.querySelector("#flexFood");
    
    let foods = Object.keys(item.food);
    foods.forEach(function(food){
        let auxDiv = document.createElement("div");
        auxDiv.className = "food";

        let auxP = document.createElement("p");
        auxP.innerHTML = food;
        auxDiv.appendChild(auxP);

        let auxUl = document.createElement("ul");
        let price = item.food[food].price;
        let priceType = "";
        if(price > 1000){
            price /= 1000
            priceType = "Coroas de Ouro(co)";
        }
        else if(price > 100){
            price /= 100
            priceType = "Xelins de Prata(xp)";
        }
        else if(price > 10){
            price /= 10
            priceType = "Centavos de Cobre(cc)";
        }
        else if(price === null){
            price = "";
        }
        else{
            priceType = "Milavos(ma)";
        }
        auxUl.innerHTML += `
            <li>Preço: ${price} ${priceType}</li>
            <li>Disponibilidade: ${item.food[food].availability}</li>
        `
        auxDiv.appendChild(auxUl);
        div.appendChild(auxDiv);
    });

    div = document.querySelector("#flexAnimal");
    
    let animals = Object.keys(item.animal);
    animals.forEach(function(animal){
        let auxDiv = document.createElement("div");
        auxDiv.className = "animal";

        let auxP = document.createElement("p");
        auxP.innerHTML = animal;
        auxDiv.appendChild(auxP);

        let auxUl = document.createElement("ul");
        let price = item.animal[animal].price;
        let priceType = "";
        if(price > 1000){
            price /= 1000
            priceType = "Coroas de Ouro(co)";
        }
        else if(price > 100){
            price /= 100
            priceType = "Xelins de Prata(xp)";
        }
        else if(price > 10){
            price /= 10
            priceType = "Centavos de Cobre(cc)";
        }
        else if(price === null){
            price = "";
        }
        else{
            priceType = "Milavos(ma)";
        }
        if(item.animal[animal].properties){
            let aux = item.animal[animal].properties
            let auxText = "";
            if(aux.size == 0.25){
                auxText += `<li>Tamanho: 1/4</li>`;
            } else {
                auxText += `<li>Tamanho: 1/2</li>`;
            }
            auxText += `
                <li>Percepção: ${aux.perception}</li>
                <li>Defesa: ${aux.defense}</li>
                <li>Saúde: ${aux.health}</li>
                <li>Força: ${aux.strength}</li>
                <li>Agilidade: ${aux.agility}</li>
                <li>Intelecto: ${aux.intellect}</li>
                <li>Vontade: ${aux.will}</li>
                <li>Deslocamento: ${aux.speed}</li>
                <li>Opções de Ataque:</li>
                <ul>
                    <li>Arma Natural:</li>
                    <ul>
                        <li>Tipo: ${aux.attackOptions["Arma Natural"].type}</li>
                        <li>Ataque: ${aux.attackOptions["Arma Natural"].attack}</li>
                        <li>Dano: ${aux.attackOptions["Arma Natural"].damage}</li>
                    </ul>
            `;
            if(aux.specialAttack){
                auxText += `
                    <li>Distrair</li>
                    <ul>
                        <li>Descrição: ${aux.specialAttack["Distrair"].description}</li>
                    </ul>
                `;
            }
            auxText += `</ul>`
            auxUl.innerHTML += auxText
        }
        auxUl.innerHTML += `
            <li>Preço: ${price} ${priceType}</li>
            <li>Disponibilidade: ${item.animal[animal].availability}</li>
        `
        auxDiv.appendChild(auxUl);
        div.appendChild(auxDiv);
    });

    div = document.querySelector("#flexAnimalGear");
    
    let animalGears = Object.keys(item.animalGear);
    animalGears.forEach(function(gear){
        let auxDiv = document.createElement("div");
        auxDiv.className = "animalGear";

        let auxP = document.createElement("p");
        auxP.innerHTML = gear;
        auxDiv.appendChild(auxP);

        let auxUl = document.createElement("ul");
        let price = item.animalGear[gear].price;
        let priceType = "";
        if(price > 1000){
            price /= 1000
            priceType = "Coroas de Ouro(co)";
        }
        else if(price > 100){
            price /= 100
            priceType = "Xelins de Prata(xp)";
        }
        else if(price > 10){
            price /= 10
            priceType = "Centavos de Cobre(cc)";
        }
        else if(price === null){
            price = "";
        }
        else{
            priceType = "Milavos(ma)";
        }
        auxUl.innerHTML += `
            <li>Preço: ${price} ${priceType}</li>
            <li>Disponibilidade: ${item.animalGear[gear].availability}</li>
        `
        auxDiv.appendChild(auxUl);
        div.appendChild(auxDiv);
    });

    div = document.querySelector("#flexHireling");
    
    let hirelings = Object.keys(item.hireling);
    hirelings.forEach(function(val){
        let auxDiv = document.createElement("div");
        auxDiv.className = "hireling";

        let auxP = document.createElement("p");
        auxP.innerHTML = val;
        auxDiv.appendChild(auxP);

        let auxUl = document.createElement("ul");
        let price = item.hireling[val].pricePerWeek;
        let priceType = "";
        if(price > 1000){
            price /= 1000
            priceType = "Coroas de Ouro(co)";
        }
        else if(price > 100){
            price /= 100
            priceType = "Xelins de Prata(xp)";
        }
        else if(price > 10){
            price /= 10
            priceType = "Centavos de Cobre(cc)";
        }
        else if(price === null){
            price = "";
        }
        else{
            priceType = "Milavos(ma)";
        }
        auxUl.innerHTML += `
            <li>Preço por semana: ${price} ${priceType} por semana</li>
            <li>Descrição: ${item.hireling[val].description}</li>
        `
        auxDiv.appendChild(auxUl);
        div.appendChild(auxDiv);
    });
    
    div = document.querySelector("#flexPotion");
    
    let potions = Object.keys(item.potion);
    potions.forEach(function(potion){
        let auxDiv = document.createElement("div");
        auxDiv.className = "potion";

        let auxP = document.createElement("p");
        auxP.innerHTML = potion;
        auxDiv.appendChild(auxP);

        let auxUl = document.createElement("ul");
        let price = item.potion[potion].price;
        let priceType = "";
        if(price > 1000){
            price /= 1000
            priceType = "Coroas de Ouro(co)";
        }
        else if(price > 100){
            price /= 100
            priceType = "Xelins de Prata(xp)";
        }
        else if(price > 10){
            price /= 10
            priceType = "Centavos de Cobre(cc)";
        }
        else if(price === null){
            price = "";
        }
        else{
            priceType = "Milavos(ma)";
        }
        auxUl.innerHTML += `
            <li>Descrição: ${item.potion[potion].description}</li>
            <li>Preço: ${price} ${priceType}</li>
            <li>Disponibilidade: ${item.potion[potion].availability} </li>
        `
        auxDiv.appendChild(auxUl);
        div.appendChild(auxDiv);
    });

    div = document.querySelector("#flexIncantation");
    
    let incantations = Object.keys(item.incantation);
    incantations.forEach(function(val){
        let auxDiv = document.createElement("div");
        auxDiv.className = "incantation";

        let auxP = document.createElement("p");
        auxP.innerHTML = val;
        auxDiv.appendChild(auxP);

        let auxUl = document.createElement("ul");
        let price = item.incantation[val].price;
        let priceType = "";
        if(price > 1000){
            price /= 1000
            priceType = "Coroas de Ouro(co)";
        }
        else if(price > 100){
            price /= 100
            priceType = "Xelins de Prata(xp)";
        }
        else if(price > 10){
            price /= 10
            priceType = "Centavos de Cobre(cc)";
        }
        else if(price === null){
            price = "";
        }
        else{
            priceType = "Milavos(ma)";
        }
        auxUl.innerHTML += `
            <li>Preço: ${price} ${priceType}</li>
            <li>Disponibilidade: ${item.incantation[val].availability} </li>
        `
        auxDiv.appendChild(auxUl);
        div.appendChild(auxDiv);
    });
}
