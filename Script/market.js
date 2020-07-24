character = JSON.parse(localStorage.getItem("character"));
if(!character) console.log("Couldn't load character");
choices = JSON.parse(localStorage.getItem("choices"));
if(!choices) thereChoices = false;
else thereChoices = true;

if(thereChoices){
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
            silverShillings: parseInt(choices.level1Money),
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
            character.bag.weapons["Adaga ou faca"] = deepCopy(item.weapon["Adaga ou faca"]);
            character.bag.armors["Roupas comuns"] = deepCopy(item.armor["Roupas"]);
            character.bag.items["Rações para uma semana"] = deepCopy(item.food["Ração"]);
            character.bag.items["Odre"] = deepCopy(item.personalGear["Odre"]);
            character.bag.items["Pederneira"] = deepCopy(item.personalGear["Pederneira"]);
            for(let i = 0; i < (choices.numTorch || 1); i++){
                character.bag.items["Tocha " + (i + 1)] = deepCopy(item.personalGear["Tocha"]);
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
            character.bag.weapons["Adaga ou faca"] = deepCopy(item.weapon["Adaga ou faca"]);
            character.bag.armors["Roupas de qualidade"] = deepCopy(item.armor["Roupas"]);
            character.bag.items["Manto"] = deepCopy(item.clothingAndAccessory["Manto"]);
            character.bag.items["Odre"] = deepCopy(item.personalGear["Odre"]);
            character.bag.items["Rações para uma semana"] = deepCopy(item.food["Ração"]);
            character.bag.items["Corda (20 metros)"] = deepCopy(item.personalGear["Corda (20 metros)"]);
            character.bag.items["Poção de Cura"] = deepCopy(item.potion["Cura"]);
            character.bag.items["Pederneira"] = deepCopy(item.personalGear["Pederneira"]);
            character.bag.items["Tocha"] = deepCopy(item.personalGear["Tocha"]);
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
            character.bag.weapons["Adaga ou faca"] = deepCopy(item.weapon["Adaga ou faca"]);
            character.bag.armors["Roupas de cortesão"] = deepCopy(item.armor["Roupas"]);
            character.bag.items["Manto"] = deepCopy(item.clothingAndAccessory["Manto"]);
            character.bag.items["Rações para uma semana"] = deepCopy(item.food["Ração"]);
            character.bag.items["Odre"] = deepCopy(item.personalGear["Odre"]);
            character.bag.items["Corda (20 metros)"] = deepCopy(item.personalGear["Corda (20 metros)"]);
            character.bag.items["Poção de Cura"] = deepCopy(item.potion["Cura"]);
            character.bag.items["Pederneira"] = deepCopy(item.personalGear["Pederneira"]);
            character.bag.items["Lanterna"] = deepCopy(item.personalGear["Lanterna"]);
            character.bag.items["Frasco de óleo"] = deepCopy(item.personalGear["Óleo, frasco"]);
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
            character.bag.weapons["Adaga ou faca"] = deepCopy(item.weapon["Adaga ou faca"]);
            character.bag.armors["Roupas de nobre"] = deepCopy(item.armor["Roupas"]);
            character.bag.items["Manto"] = deepCopy(item.clothingAndAccessory["Manto"]);
            character.bag.items["Rações para uma semana"] = deepCopy(item.food["Ração"]);
            character.bag.items["Odre"] = deepCopy(item.personalGear["Odre"]);
            character.bag.items["Poção de Cura"] = deepCopy(item.potion["Cura"]);
            character.bag.hirelings["Servo pessoal"] = deepCopy(item.hireling["Plebeu"]);
            character.bag.hirelings["Guarda"] = deepCopy(item.hireling["Mercenário"]);
            character.bag.animals["Cavalo"] = deepCopy(item.animal["Cavalo, mula, pônei"]);
            character.bag.animals["Cavalo"].hasSaddle = true;
            character.bag.items["Sela"] = deepCopy(item.animalGear["Sela"]);
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
                character.bag.weapons["Martelo de guerra"] = deepCopy(item.weapon["Espada bastarda ou martelo de guerra"]);
            }
            break;
        case "key to ancient dwarf treasure vault":
            character.bag.items["Chave para um antigo cofre de tesouros dos anões"] = {};
            break;
        case "knife":
            if(!character.bag.weapons["Adaga ou faca"]){
                character.bag.weapons["Adaga ou faca"] = deepCopy(item.weapon["Adaga ou faca"]);
            } else{
                character.bag.weapons["Adaga ou faca 2"] = deepCopy(item.weapon["Adaga ou faca"]);
            }
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
            character.bag.weapons["Espada bastarda ou martelo de guerra"] = deepCopy(item.weapon["Espada bastarda ou martelo de guerra"]);
            break;
        case "random enchanted object":
            character.bag.weapons[choices.newObject] = {
                description: choices.magicProperty
            };
            break;
        case "incantation rank 0 spell":
            if(!character.bag.items["Feitiço nível 0"]){
                character.bag.items["Feitiço nível 0"] = deepCopy(item.incantation["Nível 0"]);
            } else {
                character.bag.items["Feitiço nível 0 2"] = deepCopy(item.incantation["Nível 0"]);
            }
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
            appendLiElement("bagAmmo", val + ": " + character.bag.ammo[val].quantity);
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
            appendLiElement(hirelingsId, desc);            
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
    let copperPennies = document.querySelector("#copperPenniesCurrent");
    let silverShillings = document.querySelector("#silverShillingsCurrent");
    let goldCrowns = document.querySelector("#goldCrownsCurrent");
    if(character.bag.money.bits >= 10){
        let auxValue = character.bag.money.bits;
        bits.value = auxValue % 10;
        character.bag.money.bits = auxValue % 10;
        character.bag.money.copperPennies += Math.floor(auxValue / 10);

    } else{
        bits.value = character.bag.money.bits;
    }
    if(character.bag.money.copperPennies >= 10){
        let auxValue = character.bag.money.copperPennies;
        copperPennies.value = auxValue % 10;
        character.bag.money.copperPennies = auxValue % 10;
        character.bag.money.silverShillings += Math.floor(auxValue / 10);
    } else{
        copperPennies.value = character.bag.money.copperPennies;
    }
    if(character.bag.money.silverShillings >= 10){
        let auxValue = character.bag.money.silverShillings;
        silverShillings.value = auxValue % 10;
        character.bag.money.silverShillings = auxValue % 10;
        character.bag.money.goldCrowns += Math.floor(auxValue / 10);
    } else{
        silverShillings.value = character.bag.money.silverShillings;
    }
    goldCrowns.value = character.bag.money.goldCrowns;
}

function stockMarket(){
    let div = document.querySelector("#flexWeapon");// Get the flexbox div

    let weapons = Object.keys(item.weapon);// Get all the weapons
    weapons.forEach(function(wpn){// For each weapon(wpn)
        let auxDiv = document.createElement("div");// Create a new div
        auxDiv.className = "weapon marketStuff";// Div classes => weapon and marketStuff
        auxDiv.ondragstart = (event) => {
            event.dataTransfer.setData("Values", event.target.dataset.value);
            event.dataTransfer.setData("Prices", event.target.dataset.price);
            event.dataTransfer.setData("Types", event.target.dataset.type);
        };

        let auxP = document.createElement("p");// Create a p for the weapon's name
        auxP.draggable = true;
        auxP.setAttribute("data-value", wpn);
        auxP.setAttribute("data-price", item.weapon[wpn].price);
        auxP.setAttribute("data-type", "weapon");
        auxP.innerHTML = wpn;// Put the name in the p
        auxDiv.appendChild(auxP);// Append the p in the div

        let auxUl = document.createElement("ul");// Create a ul for the weapon's properties

        let price = item.weapon[wpn].price;// Get the price to be normalized
        let priceType = "";
        if(price >= 1000){// Normalizing price
            price /= 1000
            priceType = "Coroa(s) de Ouro(co)";
        }
        else if(price >= 100){
            price /= 100
            priceType = "Xelin(s) de Prata(xp)";
        }
        else if(price >= 10){
            price /= 10
            priceType = "Centavo(s) de Cobre(cc)";
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
            <li>Propriedades: <a href="#help"> ${item.weapon[wpn].properties.toString()}</a></li>
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
        auxDiv.className = "ammo marketStuff";
        auxDiv.ondragstart = (event) => {
            event.dataTransfer.setData("Values", event.target.dataset.value);
            event.dataTransfer.setData("Prices", event.target.dataset.price);
            event.dataTransfer.setData("Types", event.target.dataset.type);
        };

        let auxP = document.createElement("p");
        auxP.draggable = true;
        auxP.setAttribute("data-value", val);
        auxP.setAttribute("data-price", item.ammo[val]);
        auxP.setAttribute("data-type", "ammo");
        auxP.innerHTML = val + "(5)";
        auxDiv.appendChild(auxP);

        let auxUl = document.createElement("ul");
        let price = item.ammo[val];
        let priceType = "";
        if(price >= 1000){
            price /= 1000
            priceType = "Coroa(s) de Ouro(co)";
        }
        else if(price >= 100){
            price /= 100
            priceType = "Xelin(s) de Prata(xp)";
        }
        else if(price >= 10){
            price /= 10
            priceType = "Centavo(s) de Cobre(cc)";
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
        auxDiv.className = "armor marketStuff";
        auxDiv.ondragstart = (event) => {
            event.dataTransfer.setData("Values", event.target.dataset.value);
            event.dataTransfer.setData("Prices", event.target.dataset.price);
            event.dataTransfer.setData("Types", event.target.dataset.type);
        };

        let auxP = document.createElement("p");
        auxP.draggable = true;
        auxP.setAttribute("data-value", armor);
        auxP.setAttribute("data-price", item.armor[armor].price);
        auxP.setAttribute("data-type", "armor");
        auxP.innerHTML = armor;
        auxDiv.appendChild(auxP);

        let auxUl = document.createElement("ul");
        let price = item.armor[armor].price;
        let priceType = "";
        if(price >= 1000){
            price /= 1000
            priceType = "Coroa(s) de Ouro(co)";
        }
        else if(price >= 100){
            price /= 100
            priceType = "Xelin(s) de Prata(xp)";
        }
        else if(price >= 10){
            price /= 10
            priceType = "Centavo(s) de Cobre(cc)";
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
        auxDiv.className = "personalGear marketStuff";
        auxDiv.ondragstart = (event) => {
            event.dataTransfer.setData("Values", event.target.dataset.value);
            event.dataTransfer.setData("Prices", event.target.dataset.price);
            event.dataTransfer.setData("Types", event.target.dataset.type);
        };

        let auxP = document.createElement("p");
        auxP.draggable = true;
        auxP.setAttribute("data-value", gear);
        auxP.setAttribute("data-price", item.personalGear[gear].price);
        auxP.setAttribute("data-type", "personalGear");
        auxP.innerHTML = gear;
        auxDiv.appendChild(auxP);

        let auxUl = document.createElement("ul");
        let price = item.personalGear[gear].price;
        let priceType = "";
        if(price >= 1000){
            price /= 1000
            priceType = "Coroa(s) de Ouro(co)";
        }
        else if(price >= 100){
            price /= 100
            priceType = "Xelin(s) de Prata(xp)";
        }
        else if(price >= 10){
            price /= 10
            priceType = "Centavo(s) de Cobre(cc)";
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
        auxDiv.className = "clothingAcessory marketStuff";
        auxDiv.ondragstart = (event) => {
            event.dataTransfer.setData("Values", event.target.dataset.value);
            event.dataTransfer.setData("Prices", event.target.dataset.price);
            event.dataTransfer.setData("Types", event.target.dataset.type);
        };

        let auxP = document.createElement("p");
        auxP.draggable = true;
        auxP.setAttribute("data-value", val);
        auxP.setAttribute("data-price", item.clothingAndAccessory[val].price);
        auxP.setAttribute("data-type", "clothingAcessory");
        auxP.innerHTML = val;
        auxDiv.appendChild(auxP);

        let auxUl = document.createElement("ul");
        let price = item.clothingAndAccessory[val].price;
        let priceType = "";
        if(price >= 1000){
            price /= 1000
            priceType = "Coroa(s) de Ouro(co)";
        }
        else if(price >= 100){
            price /= 100
            priceType = "Xelin(s) de Prata(xp)";
        }
        else if(price >= 10){
            price /= 10
            priceType = "Centavo(s) de Cobre(cc)";
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
        auxDiv.className = "tool marketStuff";
        auxDiv.ondragstart = (event) => {
            event.dataTransfer.setData("Values", event.target.dataset.value);
            event.dataTransfer.setData("Prices", event.target.dataset.price);
            event.dataTransfer.setData("Types", event.target.dataset.type);
        };

        let auxP = document.createElement("p");
        auxP.draggable = true;
        auxP.setAttribute("data-value", tool);
        auxP.setAttribute("data-price", item.tool[tool].price);
        auxP.setAttribute("data-type", "tool");
        auxP.innerHTML = tool;
        auxDiv.appendChild(auxP);

        let auxUl = document.createElement("ul");
        let price = item.tool[tool].price;
        let priceType = "";
        if(price >= 1000){
            price /= 1000
            priceType = "Coroa(s) de Ouro(co)";
        }
        else if(price >= 100){
            price /= 100
            priceType = "Xelin(s) de Prata(xp)";
        }
        else if(price >= 10){
            price /= 10
            priceType = "Centavo(s) de Cobre(cc)";
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
        auxDiv.className = "food marketStuff";
        auxDiv.ondragstart = (event) => {
            event.dataTransfer.setData("Values", event.target.dataset.value);
            event.dataTransfer.setData("Prices", event.target.dataset.price);
            event.dataTransfer.setData("Types", event.target.dataset.type);
        };

        let auxP = document.createElement("p");
        auxP.draggable = true;
        auxP.setAttribute("data-value", food);
        auxP.setAttribute("data-price", item.food[food].price);
        auxP.setAttribute("data-type", "food");
        auxP.innerHTML = food;
        auxDiv.appendChild(auxP);

        let auxUl = document.createElement("ul");
        let price = item.food[food].price;
        let priceType = "";
        if(price >= 1000){
            price /= 1000
            priceType = "Coroa(s) de Ouro(co)";
        }
        else if(price >= 100){
            price /= 100
            priceType = "Xelin(s) de Prata(xp)";
        }
        else if(price >= 10){
            price /= 10
            priceType = "Centavo(s) de Cobre(cc)";
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
        auxDiv.className = "animal marketStuff";
        auxDiv.ondragstart = (event) => {
            event.dataTransfer.setData("Values", event.target.dataset.value);
            event.dataTransfer.setData("Prices", event.target.dataset.price);
            event.dataTransfer.setData("Types", event.target.dataset.type);
        };

        let auxP = document.createElement("p");
        auxP.draggable = true;
        auxP.setAttribute("data-value", animal);
        auxP.setAttribute("data-price", item.animal[animal].price);
        auxP.setAttribute("data-type", "animal");
        auxP.innerHTML = animal;
        auxDiv.appendChild(auxP);

        let auxUl = document.createElement("ul");
        let price = item.animal[animal].price;
        let priceType = "";
        if(price >= 1000){
            price /= 1000
            priceType = "Coroa(s) de Ouro(co)";
        }
        else if(price >= 100){
            price /= 100
            priceType = "Xelin(s) de Prata(xp)";
        }
        else if(price >= 10){
            price /= 10
            priceType = "Centavo(s) de Cobre(cc)";
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
        auxDiv.className = "animalGear marketStuff";
        auxDiv.ondragstart = (event) => {
            event.dataTransfer.setData("Values", event.target.dataset.value);
            event.dataTransfer.setData("Prices", event.target.dataset.price);
            event.dataTransfer.setData("Types", event.target.dataset.type);
        };

        let auxP = document.createElement("p");
        auxP.draggable = true;
        auxP.setAttribute("data-value", gear);
        auxP.setAttribute("data-price", item.animalGear[gear].price);
        auxP.setAttribute("data-type", "animalGear");
        auxP.innerHTML = gear;
        auxDiv.appendChild(auxP);

        let auxUl = document.createElement("ul");
        let price = item.animalGear[gear].price;
        let priceType = "";
        if(price >= 1000){
            price /= 1000
            priceType = "Coroa(s) de Ouro(co)";
        }
        else if(price >= 100){
            price /= 100
            priceType = "Xelin(s) de Prata(xp)";
        }
        else if(price >= 10){
            price /= 10
            priceType = "Centavo(s) de Cobre(cc)";
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
        auxDiv.className = "hireling marketStuff";
        auxDiv.ondragstart = (event) => {
            event.dataTransfer.setData("Values", event.target.dataset.value);
            event.dataTransfer.setData("Prices", event.target.dataset.price);
            event.dataTransfer.setData("Types", event.target.dataset.type);
        };

        let auxP = document.createElement("p");
        auxP.draggable = true;
        auxP.setAttribute("data-value", val);
        auxP.setAttribute("data-price", item.hireling[val].pricePerWeek);
        auxP.setAttribute("data-type", "hireling");
        auxP.innerHTML = val;
        auxDiv.appendChild(auxP);

        let auxUl = document.createElement("ul");
        let price = item.hireling[val].pricePerWeek;
        let priceType = "";
        if(price >= 1000){
            price /= 1000
            priceType = "Coroa(s) de Ouro(co)";
        }
        else if(price >= 100){
            price /= 100
            priceType = "Xelin(s) de Prata(xp)";
        }
        else if(price >= 10){
            price /= 10
            priceType = "Centavo(s) de Cobre(cc)";
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
        auxDiv.className = "potion marketStuff";
        auxDiv.ondragstart = (event) => {
            event.dataTransfer.setData("Values", event.target.dataset.value);
            event.dataTransfer.setData("Prices", event.target.dataset.price);
            event.dataTransfer.setData("Types", event.target.dataset.type);
        };

        let auxP = document.createElement("p");
        auxP.draggable = true;
        auxP.setAttribute("data-value", "Poção " + potion);
        auxP.setAttribute("data-price", item.potion[potion].price);
        auxP.setAttribute("data-type", "potion");
        auxP.innerHTML = potion;
        auxDiv.appendChild(auxP);

        let auxUl = document.createElement("ul");
        let price = item.potion[potion].price;
        let priceType = "";
        if(price >= 1000){
            price /= 1000
            priceType = "Coroa(s) de Ouro(co)";
        }
        else if(price >= 100){
            price /= 100
            priceType = "Xelin(s) de Prata(xp)";
        }
        else if(price >= 10){
            price /= 10
            priceType = "Centavo(s) de Cobre(cc)";
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
        auxDiv.className = "incantation marketStuff";
        auxDiv.ondragstart = (event) => {
            event.dataTransfer.setData("Values", event.target.dataset.value);
            event.dataTransfer.setData("Prices", event.target.dataset.price);
            event.dataTransfer.setData("Types", event.target.dataset.type);
        };

        let auxP = document.createElement("p");
        auxP.draggable = true;
        auxP.setAttribute("data-value", "Feitiço " + val);
        auxP.setAttribute("data-price", item.incantation[val].price);
        auxP.setAttribute("data-type", "incantation");
        auxP.innerHTML = val;
        auxDiv.appendChild(auxP);

        let auxUl = document.createElement("ul");
        let price = item.incantation[val].price;
        let priceType = "";
        if(price >= 1000){
            price /= 1000
            priceType = "Coroa(s) de Ouro(co)";
        }
        else if(price >= 100){
            price /= 100
            priceType = "Xelin(s) de Prata(xp)";
        }
        else if(price >= 10){
            price /= 10
            priceType = "Centavo(s) de Cobre(cc)";
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

shoppingItemsNum = 0;
totalPrice = 0;

function putItemInShoppingBag(event){
    let name = event.dataTransfer.getData("Values");
    let price = parseInt(event.dataTransfer.getData("Prices"));
    let type = event.dataTransfer.getData("Types");
    let shoppingList = document.querySelector("#shoppingList");

    let shoppingItem = document.createElement("span");
    shoppingItem.id = "item" + shoppingItemsNum;
    shoppingItem.innerHTML = name;

    let removeButton = document.createElement("button");
    removeButton.style.color = "red";
    removeButton.innerHTML = "X";
    removeButton.setAttribute("onclick", `removeItemFromShoppingBag(${shoppingItemsNum})`);

    shoppingList.appendChild(shoppingItem);
    shoppingItem.appendChild(removeButton);

    handleItemPrice(price, shoppingItemsNum, type);
    shoppingItemsNum++;
}

function removeItemFromShoppingBag(itemNum){
    let shoppingList = document.querySelector("#shoppingList");
    let shoppingItem = document.querySelector("#item" + itemNum);
    shoppingList.removeChild(shoppingItem);
    removeItemPrice(itemNum);
}

priceItemList = {};

function handleItemPrice(price, itemNum, type){
    priceItemList[itemNum] = {
        price: price,
        type: type
    }
    if(price >= 1000){
        let goldCrowns = document.querySelector("#goldCrownsPrice");
        goldCrowns.value = parseInt(goldCrowns.value) + price/1000;
    }
    else if(price >= 100){
        let silverShillings = document.querySelector("#silverShillingsPrice");
        if(parseInt(silverShillings.value) + price/100 >= 10){
            silverShillings.value = (parseInt(silverShillings.value) + price/100) % 10;
            let goldCrowns = document.querySelector("#goldCrownsPrice");
            goldCrowns.value = parseInt(goldCrowns.value) + 1;
        } else{
            silverShillings.value = parseInt(silverShillings.value) + price/100;
        }
    }
    else if(price >= 10){
        let copperPennies = document.querySelector("#copperPenniesPrice");
        if(parseInt(copperPennies.value) + price/10 >= 10){
            copperPennies.value = (parseInt(copperPennies.value) + price/10) % 10;
            let silverShillings = document.querySelector("#silverShillingsPrice");
            if(parseInt(silverShillings.value) == 9){
                silverShillings.value = 0;
                let goldCrowns = document.querySelector("#goldCrownsPrice");
                goldCrowns.value = parseInt(goldCrowns.value) + 1;
            } else{
                silverShillings.value = parseInt(silverShillings.value) + 1;
            }
        } else{
            copperPennies.value = parseInt(copperPennies.value) + price/10;
        }
    }
    else if(price !== null){
        let bits = document.querySelector("#bitsPrice");
        if(parseInt(bits.value) + price >= 10){
            bits.value = (parseInt(bits.value) + price) % 10;
            let copperPennies = document.querySelector("#copperPenniesPrice");
            if(parseInt(copperPennies.value) == 9){
                copperPennies.value = 0;
                let silverShillings = document.querySelector("#silverShillingsPrice");
                if(parseInt(silverShillings.value) == 9){
                    silverShillings.value = 0;
                    let goldCrowns = document.querySelector("#goldCrownsPrice");
                    goldCrowns.value = parseInt(goldCrowns.value) + 1;
                } else{
                    silverShillings.value = parseInt(silverShillings.value) + 1;
                }
            } else{
                copperPennies.value = parseInt(copperPennies.value) + 1;
            }
        } else{
            bits.value = parseInt(bits.value) + price;
        }
    }
}

function removeItemPrice(itemNum){
    let price = priceItemList[itemNum].price;
    if(price >= 1000){
        let goldCrowns = document.querySelector("#goldCrownsPrice");
        goldCrowns.value = parseInt(goldCrowns.value) - price / 1000;
    }
    else if(price >= 100){
        let silverShillings = document.querySelector("#silverShillingsPrice");
        if(parseInt(silverShillings.value) < price / 100){
            let goldCrowns = document.querySelector("#goldCrownsPrice");
            goldCrowns.value = parseInt(goldCrowns.value) - 1;
            silverShillings.value = parseInt(silverShillings.value) + 10 - price / 100;
        } else{
            silverShillings.value = parseInt(silverShillings.value) - price / 100;
        }
    }
    else if(price >= 10){
        let copperPennies = document.querySelector("#copperPenniesPrice");
        if(parseInt(copperPennies.value) < price / 10){
            let silverShillings = document.querySelector("#silverShillingsPrice");
            if(parseInt(silverShillings.value) == 0){
                let goldCrowns = document.querySelector("#goldCrownsPrice");
                goldCrowns.value = parseInt(goldCrowns.value) - 1;
                silverShillings.value = parseInt(silverShillings.value) + 9;
                copperPennies.value = parseInt(copperPennies.value) + 10 - price / 10;
            } else{
                silverShillings.value = parseInt(silverShillings.value) - 1;
                copperPennies.value = parseInt(copperPennies.value) + 10 - price / 10;
            }
        } else{
            copperPennies.value = parseInt(copperPennies.value) - price / 10;
        }
    }
    else if(price !== null){
        let bits = document.querySelector("#bitsPrice");
        if(parseInt(bits.value) < price){
            let copperPennies = document.querySelector("#copperPenniesPrice");
            if(parseInt(copperPennies.value) == 0){
                let silverShillings = document.querySelector("#silverShillingsPrice");
                if(parseInt(silverShillings.value) == 0){
                    let goldCrowns = document.querySelector("#goldCrownsPrice");
                    goldCrowns.value = parseInt(goldCrowns.value) - 1;
                    silverShillings.value = parseInt(silverShillings.value) + 9;
                    copperPennies.value = parseInt(copperPennies.value) + 9;
                    bits.value = parseInt(bits.value) + 10 - price;
                } else{
                    silverShillings.value = parseInt(silverShillings.value) - 1;
                    copperPennies.value = parseInt(copperPennies.value) + 9;
                    bits.value = parseInt(bits.value) + 10 - price;
                }
            } else{
                copperPennies.value = parseInt(copperPennies.value) - 1;
                bits.value = parseInt(bits.value) + 10 - price;
            }
        } else{
            bits.value = parseInt(bits.value) - price;
        }
    }
    delete priceItemList[itemNum];
}

function loadWeaponsProperties(){
    let propertiesDiv = document.querySelector("#weaponsProperties");
    let properties = Object.keys(item.weaponProperties);
    properties.forEach(function(prop){
        let p = document.createElement("p");
        p.innerHTML = prop + ": " + item.weaponProperties[prop];
        propertiesDiv.appendChild(p);
    });
}

function buyItems(){
    let bCost = parseInt(document.querySelector("#bitsPrice").value);
    let bWallet = parseInt(document.querySelector("#bitsCurrent").value);

    let cpCost = parseInt(document.querySelector("#copperPenniesPrice").value);
    let cpWallet = parseInt(document.querySelector("#copperPenniesCurrent").value);

    let ssCost = parseInt(document.querySelector("#silverShillingsPrice").value);
    let ssWallet = parseInt(document.querySelector("#silverShillingsCurrent").value);

    let gcCost = parseInt(document.querySelector("#goldCrownsPrice").value);
    let gcWallet = parseInt(document.querySelector("#goldCrownsCurrent").value);

    let totalCost = gcCost * 1000 + ssCost * 100 + cpCost * 10 + bCost;
    let totalWallet = gcWallet * 1000 + ssWallet * 100 + cpWallet * 10 + bWallet;

    if(totalCost > totalWallet){
        alert("Preço total da compra maior que o dinheiro atual. Por favor, remova alguns itens.");
    } else{
        let difference = totalWallet - totalCost;
        if(difference >= 1000){
            character.bag.money.goldCrowns = Math.floor(difference / 1000);
            character.bag.money.silverShillings = Math.floor((difference % 1000) / 100);
            character.bag.money.copperPennies = Math.floor((difference % 100) / 10);
            character.bag.money.bits = difference % 10;
        }
        else if(difference >= 100){
            character.bag.money.goldCrowns = 0;
            character.bag.money.silverShillings = Math.floor(difference / 100);
            character.bag.money.copperPennies = Math.floor((difference % 100) / 10);
            character.bag.money.bits = difference % 10;
        }
        else if(difference >= 10){
            character.bag.money.goldCrowns = 0;
            character.bag.money.silverShillings = 0;
            character.bag.money.copperPennies = Math.floor(difference / 10);
            character.bag.money.bits = difference % 10
        }
        else {
            character.bag.money.goldCrowns = 0;
            character.bag.money.silverShillings = 0;
            character.bag.money.copperPennies = 0;
            character.bag.money.bits = difference;
        }
        let items = Object.keys(priceItemList);
        items.forEach(function(val){
            let newItem = document.querySelector("#item" + val).innerHTML;
            let pos = newItem.indexOf("<");
            newItem = newItem.slice(0, pos);
            switch(priceItemList[val].type){
                case "weapon":
                    if(character.bag.weapons[newItem]){
                        for(var i = 2; i < 100; i++){
                            if(!character.bag.weapons[newItem + " " + i.toString()]){
                                break;
                            }
                        }
                        character.bag.weapons[newItem + " " + i.toString()] = deepCopy(item.weapon[newItem]);
                    } else{
                        character.bag.weapons[newItem] = deepCopy(item.weapon[newItem]);
                    }
                    break;
                case "ammo":
                    if(character.bag.ammo[newItem]){
                        character.bag.ammo[newItem].quantity += 5;
                    } else{
                        character.bag.ammo[newItem] = {
                            price: item.ammo[newItem],
                            quantity: 5
                        }
                    }
                    break;
                case "armor":
                    if(character.bag.armors[newItem]){
                        for(var i = 2; i < 100; i++){
                            if(!character.bag.armors[newItem + " " + i.toString()]){
                                break;
                            }
                        }
                        character.bag.armors[newItem + " " + i.toString()] = deepCopy(item.armor[newItem]);
                    } else{
                        character.bag.armors[newItem] = deepCopy(item.armor[newItem]);
                    }
                    break;
                case "personalGear":
                    if(newItem == "Mochila"){
                        character.bag.type = "Mochila";
                    }
                    else{
                        if(character.bag.items[newItem]){
                            for(var i = 2; i < 100; i++){
                                if(!character.bag.items[newItem + " " + i.toString()]){
                                    break;
                                }
                            }
                            character.bag.items[newItem + " " + i.toString()] = deepCopy(item.personalGear[newItem]);
                        } else{
                            character.bag.items[newItem] = deepCopy(item.personalGear[newItem]);
                        }
                    }
                    break;
                case "clothingAcessory":
                    if(character.bag.items[newItem]){
                        for(var i = 2; i < 100; i++){
                            if(!character.bag.items[newItem + " " + i.toString()]){
                                break;
                            }
                        }
                        character.bag.items[newItem + " " + i.toString()] = deepCopy(item.clothingAndAccessory[newItem]);
                    } else{
                        character.bag.items[newItem] = deepCopy(item.clothingAndAccessory[newItem]);
                    }
                    break;
                case "tool":
                    if(character.bag.items[newItem]){
                        for(var i = 2; i < 100; i++){
                            if(!character.bag.items[newItem + " " + i.toString()]){
                                break;
                            }
                        }
                        character.bag.items[newItem + " " + i.toString()] = deepCopy(item.tool[newItem]);
                    } else{
                        character.bag.items[newItem] = deepCopy(item.tool[newItem]);
                    }
                    break;
                case "food":
                    if(character.bag.items[newItem]){
                        for(var i = 2; i < 100; i++){
                            if(!character.bag.items[newItem + " " + i.toString()]){
                                break;
                            }
                        }
                        character.bag.items[newItem + " " + i.toString()] = deepCopy(item.food[newItem]);
                    } else{
                        character.bag.items[newItem] = deepCopy(item.food[newItem]);
                    }
                    break;
                case "animal":
                    if(character.bag.animals[newItem]){
                        for(var i = 2; i < 100; i++){
                            if(!character.bag.animals[newItem + " " + i.toString()]){
                                break;
                            }
                        }
                        character.bag.animals[newItem + " " + i.toString()] = deepCopy(item.animal[newItem]);
                    } else{
                        character.bag.animals[newItem] = deepCopy(item.animal[newItem]);
                    }
                    break;
                case "animalGear":
                    if(character.bag.items[newItem]){
                        for(var i = 2; i < 100; i++){
                            if(!character.bag.items[newItem + " " + i.toString()]){
                                break;
                            }
                        }
                        character.bag.items[newItem + " " + i.toString()] = deepCopy(item.animalGear[newItem]);
                    } else{
                        character.bag.items[newItem] = deepCopy(item.animalGear[newItem]);
                    }
                    break;
                case "hireling":
                    if(character.bag.hirelings[newItem]){
                        for(var i = 2; i < 100; i++){
                            if(!character.bag.hirelings[newItem + " " + i.toString()]){
                                break;
                            }
                        }
                        character.bag.hirelings[newItem + " " + i.toString()] = deepCopy(item.hireling[newItem]);
                    } else{
                        character.bag.hirelings[newItem] = deepCopy(item.hireling[newItem]);
                    }
                    break;
                case "potion":
                    newItem = newItem.slice(6, newItem.length());
                    if(character.bag.items[newItem]){
                        for(var i = 2; i < 100; i++){
                            if(!character.bag.items[newItem + " " + i.toString()]){
                                break;
                            }
                        }
                        character.bag.items[newItem + " " + i.toString()] = deepCopy(item.potion[newItem]);
                    } else{
                        character.bag.items[newItem] = deepCopy(item.potion[newItem]);
                    }
                    break;
                case "incantation":
                    newItem = newItem.slice(8, newItem.length());
                    if(character.bag.items[newItem]){
                        for(var i = 2; i < 100; i++){
                            if(!character.bag.items[newItem + " " + i.toString()]){
                                break;
                            }
                        }
                        character.bag.items[newItem + " " + i.toString()] = deepCopy(item.incantation[newItem]);
                    } else{
                        character.bag.items[newItem] = deepCopy(item.incantation[newItem]);
                    }
                    break;
            }
        });
        if(thereChoices){
            character = processChoices(character, choices);
            localStorage.removeItem("choices");
        }
        localStorage.setItem("character", JSON.stringify(character));
        window.location.href = "character.html";
    }
}

function processChoices(charact, chs){
    let newCharacter = deepCopy(charact);
    newCharacter.status = {
        strength: 0,
        agility: 0,
        intellect: 0,
        will: 0,
        perception: 0,
        defense: null,
        health: 0,
        size: null,
        speed: null,
        damage: 0,
        power: 0,
        insanity: 0,
        corruption: 0,
        level: 1
    }
    if(chs.backgroundChange){
        switch(chs.backgroundChange){
            case "1d6 insanity":
            case "1d6 insanity+profession":
            case "1d3 insanity":
                newCharacter.status.insanity = chs.backgroundInsanity;
                break;
            case "1d3 corruption":
                newCharacter.status.corruption = chs.backgroundCorruption;
                break;
            case "1 corruption":
                newCharacter.status.corruption = 1;
                break;
            case "1 insanity":
                newCharacter.status.insanity = 1;
                break;
            case "2 corruption":
                newCharacter.status.corruption = 2;
                break;
            case "1 intellect+1 will+!caste att":
                newCharacter.status.intellect = 1;
                newCharacter.status.perception += 1;
                newCharacter.status.will = 1;
                break;
        }
    }
    switch(charact.ancestry){
        case "human":
            newCharacter.status[chs.raisedAttribute] = 1;
            switch(chs.raisedAttribute){
                case "strength":
                    newCharacter.status.health += 1;
                    break;
                case "agility":
                    newCharacter.status.defense = 11;
                    break;
                case "intellect":
                    newCharacter.status.perception += 1;
                    break;
            }
            break;
        case "clockwork":
            switch(chs.purposeChange){
                case "2 strength/agility":
                case "2 intellect/will":
                case "2 agility/intellect":
                case "2 attribute":
                    newCharacter.status[chs.purposeChoice] += 2;
                    switch(chs.purposeChoice){
                        case "strength":
                            newCharacter.status.health += 2;
                            break;
                        case "intellect":
                            newCharacter.status.perception += 2;
                            break;
                    }
                    break;
                case "2 strength":
                    newCharacter.status.strength += 2;
                    newCharacter.status.health += 2;
                    break;
            }
            break;
        case "yerath":
            if(chs.backgroundChange != "1 intellect+1 will+!caste att"){
                switch(chs.casteChoice){
                    case "profession laborer+2 strength+1 will":
                        newCharacter.status.strength += 2;
                        newCharacter.status.health += 2;
                        newCharacter.status.will += 1;
                        break;
                    case "profession guide+1 agility+1 perception":
                        newCharacter.status.agility += 1;
                        newCharacter.status.perception += 1;
                        break;
                    case "profession soldier+2 strength+13 defense":
                        newCharacter.status.strength += 2;
                        newCharacter.status.defense = 13;
                        newCharacter.status.health += 2;
                        break;
                }
            }
    }
    switch(charact.novicePath.type){
        case "warrior":
            newCharacter.status.health += 5;
            break;
        case "rogue":
            newCharacter.status.health += 3;
            break;
        case "magician":
            newCharacter.status.health += 2;
            newCharacter.status.power += 1;
            break;
        case "priest":
            newCharacter.status.power += 1;
            newCharacter.status.health += 4;
            break;
    }
    newCharacter.status[choices.novicePathAttributes[0]] += 1;
    switch(choices.novicePathAttributes[0]){
        case "strength":
            newCharacter.status.health += 1;
            break;
        case "agility":
            if(charact.ancestry != "clockwork" && charact.ancestry != "yerath"){
                switch(charact.ancestry){
                    case "human":
                        if(!newCharacter.status.defense){
                            newCharacter.status.defense = 10;
                        }
                        break;
                    case "dwarf":
                        newCharacter.status.defense = 9;
                        break;
                    case "changeling":
                        newCharacter.status.defense = 10;
                        break;
                    case "goblin":
                        newCharacter.status.defense = 12;
                        break;
                    case "orc":
                        newCharacter.status.defense = 10;
                        break;
                }
                newCharacter.status.defense += 1;
            }
            break;
        case "intellect":
            newCharacter.status.perception += 1;
            break;
    }
    newCharacter.status[choices.novicePathAttributes[1]] += 1;
    switch(choices.novicePathAttributes[1]){
        case "strength":
            newCharacter.status.health += 1;
            break;
        case "agility":
            if(charact.ancestry != "clockwork" && charact.ancestry != "yerath"){
                switch(charact.ancestry){
                    case "human":
                        if(!newCharacter.status.defense){
                            newCharacter.status.defense = 10;
                        }
                        break;
                    case "dwarf":
                        newCharacter.status.defense = 9;
                        break;
                    case "changeling":
                        newCharacter.status.defense = 10;
                        break;
                    case "goblin":
                        newCharacter.status.defense = 12;
                        break;
                    case "orc":
                        newCharacter.status.defense = 10;
                        break;
                }
                newCharacter.status.defense += 1;
            }
            break;
        case "intellect":
            newCharacter.status.perception += 1;
            break;
    }
    return newCharacter;
}
