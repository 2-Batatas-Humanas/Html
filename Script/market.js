character = JSON.parse(localStorage.getItem("character"));
if(!character) console.log("Couldn't load character");

// Getting Character Inventory

function setInventory(){
    let id = "inventoryDiv";
    if(!isEmpty(character.inventory.weapons)){
        createHtmlList(id, "inventory", ["Armas:"]);

        let weaponsId = "inventoryWeapons";
        createHtmlList("inventory", weaponsId, []);

        let weapons = Object.keys(character.inventory.weapons);
        let wpnCount = 0;
        weapons.forEach(function(weapon){
            if(character.inventory.weapons[weapon].quantity){
                appendLiElement(weaponsId, weapon + " x" + character.inventory.weapons[weapon].quantity);
            } else{
                appendLiElement(weaponsId, weapon);
            }
            createHtmlList(weaponsId, "weapon" + wpnCount,
            ["Tipo: " + character.inventory.weapons[weapon].type, "Dano: " + character.inventory.weapons[weapon].damage, "Mãos: " + character.inventory.weapons[weapon].hands, "Propriedades:"]);
            createHtmlList("weapon" + wpnCount, "propertiesWeapon" + wpnCount, character.inventory.weapons[weapon].properties);
            wpnCount++;
        });
    }

    if(!isEmpty(character.inventory.ammo)){
        appendLiElement("inventory", "Munição:");
        createHtmlList("inventory", "inventoryAmmo", []);
        let ammo = Object.keys(character.inventory.ammo);
        ammo.forEach(function(val){
            appendLiElement("inventoryAmmo", val + ": " + character.inventory.ammo[val].quantity);
        });
    }
    if(!isEmpty(character.inventory.armors)){
        appendLiElement("inventory", "Armaduras:")

        let armorId = "inventoryArmors";
        createHtmlList("inventory", armorId, []);

        let armors = Object.keys(character.inventory.armors);
        let armorCount = 0;
        armors.forEach(function(armor){
            appendLiElement(armorId, armor);
            createHtmlList(armorId, "armor" + armorCount,
            ["Tipo: " + character.inventory.armors[armor].type, "Defesa: " + character.inventory.armors[armor].defense, "Descrição: " + character.inventory.armors[armor].description]);
            armorCount++;
        });
    }
    if(!isEmpty(character.inventory.items)){
        appendLiElement("inventory", "Itens:");

        let itemsId = "inventoryItems";
        createHtmlList("inventory", itemsId, []);

        let items = Object.keys(character.inventory.items);
        items.forEach(function(item){
            if(!character.inventory.items[item].description){
                if(character.inventory.items[item].quantity){
                    appendLiElement(itemsId, item + " x" + character.inventory.items[item].quantity);
                } else{
                    appendLiElement(itemsId, item);
                }
            } else{
                if(character.inventory.items[item].quantity){
                    let desc = `<details>
                            <summary>${item} x${character.inventory.items[item].quantity}</summary>
                            <p>Descrição: ${character.inventory.items[item].description}</p>
                        </details>`
                    appendLiElement(itemsId, desc);
                } else{
                    let desc = `<details>
                            <summary>${item}</summary>
                            <p>Descrição: ${character.inventory.items[item].description}</p>
                        </details>`
                    appendLiElement(itemsId, desc);
                }

            }
        });
    }
    if(!isEmpty(character.inventory.interestingThings)){
        appendLiElement("inventory", "Coisas Interessantes:");

        let id = "interestingThings";
        createHtmlList("inventory", id, []);

        for(let i = 0;i < character.inventory.interestingThings.length; i++){
            appendLiElement(id, character.inventory.interestingThings[i]);
        }
    }
    if(!isEmpty(character.inventory.hirelings)){
        appendLiElement("inventory", "Serviçais:");

        let hirelingsId = "inventoryHirelings";
        createHtmlList("inventory", hirelingsId, []);

        let hirelings = Object.keys(character.inventory.hirelings);
        hirelings.forEach(function(hireling){
            if(character.inventory.hirelings[hireling].quantity){
                let desc = `<details><summary>${hireling} x${character.inventory.hirelings[hireling].quantity}</summary>`;
                if(character.inventory.hirelings[hireling].price * parseInt(character.inventory.hirelings[hireling].quantity >= 1000)){
                    desc += `<p>Preço total por semana: ${(character.inventory.hirelings[hireling].price * parseInt(character.inventory.hirelings[hireling].quantity))/1000} Coroas de Ouro(co)</p>`;
                }
                else if(character.inventory.hirelings[hireling].price * parseInt(character.inventory.hirelings[hireling].quantity) >= 100){
                    desc += `<p>Preço total por semana: ${(character.inventory.hirelings[hireling].price * parseInt(character.inventory.hirelings[hireling].quantity))/100} Xelins de Prata(xp)</p>`;
                }
                else {
                    desc += `<p>Preço total por semana: ${(character.inventory.hirelings[hireling].price * parseInt(character.inventory.hirelings[hireling].quantity))/10} Centavos de cobre(cc)</p>`
                }
            } else{
                let desc = `<details><summary>${hireling}</summary>`;
                switch(character.inventory.hirelings[hireling].price){
                    case 50:
                        desc += `<p>Preço por semana: ${(character.inventory.hirelings[hireling].price)/10} Centavos de cobre(cc)</p>`
                        break;
                    case 100:
                    case 500:
                        desc += `<p>Preço por semana: ${(character.inventory.hirelings[hireling].price)/100} Xelins de Prata(xp)</p>`   
                }
            }
            desc += `<p>Descrição: ${character.inventory.hirelings[hireling].description}</p></details>`
            appendLiElement(hirelingsId, desc);            
        });
    }
    if(!isEmpty(character.inventory.animals)){
        appendLiElement("inventory", "Animais:");

        let animalsId = "inventoryAnimals";
        createHtmlList("inventory", animalsId, []);

        let animals = Object.keys(character.inventory.animals);
        animals.forEach(function(animal){
            if(character.inventory.animals[animal].quantity){
                let desc = `<details><summary>${animal} x${character.inventory.animals[animal].quantity}</summary>`;
            } else{
                let desc = `<details><summary>${animal}</summary>`;
            }
            if(character.inventory.animals[animal].properties){
                desc += `<p>Características do animal</p><ul>`
                for(charac in Object.keys(character.inventory.animals[animal].properties)){
                    switch(charac){
                        case "size":
                            desc += `<li>Tamanho: ${character.inventory.animals[animal].properties[charac]}</li>`;
                            break;
                        case "perception":
                            desc += `<li>Percepção: ${character.inventory.animals[animal].properties[charac]}</li>`;
                            break;
                        case "defense":
                            desc += `<li>Defesa: ${character.inventory.animals[animal].properties[charac]}</li>`;
                            break;
                        case "health":
                            desc += `<li>Saúde: ${character.inventory.animals[animal].properties[charac]}</li>`;
                            break;
                        case "strength":
                            desc += `<li>Força: ${character.inventory.animals[animal].properties[charac]}</li>`;
                            break;
                        case "agility":
                            desc += `<li>Agilidade: ${character.inventory.animals[animal].properties[charac]}</li>`;
                            break;
                        case "intellect":
                            desc += `<li>Intelecto: ${character.inventory.animals[animal].properties[charac]}</li>`;
                            break;
                        case "will":
                            desc += `<li>Vontade: ${character.inventory.animals[animal].properties[charac]}</li>`;
                            break;
                        case "speed":
                            desc += `<li>Deslocamento: ${character.inventory.animals[animal].properties[charac]}</li>`;
                            break;
                        case "attackOptions":
                            desc += `<li>Opção de ataque: Arma Natural</li><ul>
                                <li>Tipo: ${character.inventory.animals[animal].properties[charac]["Arma Natural"].type}</li>
                                <li>Modificador de ataque: ${character.inventory.animals[animal].properties[charac]["Arma Natural"].attack}</li>
                                <li>Dano se acertar: ${character.inventory.animals[animal].properties[charac]["Arma Natural"].damage}</li>
                            </ul>`
                            break;
                        case "specialAttack":
                            desc += `<li>Ataque especial: Distrair</li><ul>
                                <li>Descrição: ${character.inventory.animals[animal].properties[charac]["Distrair"].description}</li>
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

// Getting character Money

function processMoney(){
    let bits = document.querySelector("#bitsCurrent");
    let copperPennies = document.querySelector("#copperPenniesCurrent");
    let silverShillings = document.querySelector("#silverShillingsCurrent");
    let goldCrowns = document.querySelector("#goldCrownsCurrent");
    if(character.inventory.money.bits >= 10){
        let auxValue = character.inventory.money.bits;
        bits.value = auxValue % 10;
        character.inventory.money.bits = auxValue % 10;
        character.inventory.money.copperPennies += Math.floor(auxValue / 10);

    } else{
        bits.value = character.inventory.money.bits;
    }
    if(character.inventory.money.copperPennies >= 10){
        let auxValue = character.inventory.money.copperPennies;
        copperPennies.value = auxValue % 10;
        character.inventory.money.copperPennies = auxValue % 10;
        character.inventory.money.silverShillings += Math.floor(auxValue / 10);
    } else{
        copperPennies.value = character.inventory.money.copperPennies;
    }
    if(character.inventory.money.silverShillings >= 10){
        let auxValue = character.inventory.money.silverShillings;
        silverShillings.value = auxValue % 10;
        character.inventory.money.silverShillings = auxValue % 10;
        character.inventory.money.goldCrowns += Math.floor(auxValue / 10);
    } else{
        silverShillings.value = character.inventory.money.silverShillings;
    }
    goldCrowns.value = character.inventory.money.goldCrowns;
}

// Open Weapons
const weaponCategories = ["Corpo a Corpo", "À Distância", "Escudos(Força 9+)", "Militares Corpo a Corpo(Força 11+)", "Rápidas Corpo a Corpo(Força ou Agilidade 11+)", "Pesadas Corpo a Corpo(Força 13+)"];
const weaponCategoriesCodes = ["wc1", "wc2", "wc3", "wc4", "wc5", "wc6"];

function openWeapons(){
    let div = document.querySelector("#flexWeapon");// Get the flexbox div
    if(div.innerHTML == ""){
        weaponCategories.forEach(function(cat){
            let button = document.createElement("button");
            button.className = "weaponCategory";
            button.innerHTML = cat;
            button.setAttribute("onclick", `openWeaponCategory("${cat}")`);
            div.appendChild(button);
            let catDiv = document.createElement("div");
            catDiv.id = weaponCategoriesCodes[weaponCategories.indexOf(cat)];
            div.appendChild(catDiv);
        });
    } else{
        div.innerHTML = "";
    }
}

// Find all weapons from a category

function findWeaponsByCategory(category){
    const weapons = [];
    const allWeapons = Object.keys(item.weapon);
    allWeapons.forEach(function(value){
        if(item.weapon[value].type == category){
            weapons.push(value);
        }
    });
    return weapons;
}

// Open a weapon category

function openWeaponCategory(category){
    let div = document.querySelector("#" + weaponCategoriesCodes[weaponCategories.indexOf(category)]);
    if(div.innerHTML == ""){
        const weapons = findWeaponsByCategory(category);
        weapons.forEach(function(value){
            let button = document.createElement("button");
            button.className = "weapon";
            button.innerHTML = value;
            button.setAttribute("onclick", `openWeapon("${value}")`);
            div.appendChild(button);
            let weaponDiv = document.createElement("div");
            weaponDiv.id = item.weapon[value].id;
            div.appendChild(weaponDiv);
        });
    } else{
        div.innerHTML = "";
    }
}

// Open a weapon

function openWeapon(weapon){
    let div = document.querySelector("#" + item.weapon[weapon].id);
    if(div.innerHTML == ""){
        let auxDiv = document.createElement("div");// Create a new div
        auxDiv.className = "marketStuff";// Div classes => weapon and marketStuff
        auxDiv.ondragstart = (event) => {
            event.dataTransfer.setData("Values", event.target.dataset.value);
            event.dataTransfer.setData("Prices", event.target.dataset.price);
            event.dataTransfer.setData("Types", event.target.dataset.type);
        };

        let auxP = document.createElement("p");// Create a p for the weapon's name
        auxP.draggable = true;
        auxP.setAttribute("data-value", weapon);
        auxP.setAttribute("data-price", item.weapon[weapon].price);
        auxP.setAttribute("data-type", "weapon");
        auxP.innerHTML = weapon;// Put the name in the p
        auxDiv.appendChild(auxP);// Append the p in the div

        let auxUl = document.createElement("ul");// Create a ul for the weapon's properties

        let price = item.weapon[weapon].price;// Get the price to be normalized
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
            <li>Tipo: ${item.weapon[weapon].type}</li>
            <li>Dano: ${item.weapon[weapon].damage}</li>
            <li>Mãos: ${item.weapon[weapon].hands}</li>
            <li>Propriedades: <a href="#help"> ${item.weapon[weapon].properties.toString()}</a></li>
            <li>Preço: ${price} ${priceType}</li>
            <li>Disponibilidade: ${item.weapon[weapon].availability}</li>
        `
        auxDiv.appendChild(auxUl);// Append ul
        div.appendChild(auxDiv);
    } else{
        div.innerHTML = "";
    }
}

// Open ammo

function openAmmo(){
    let div = document.querySelector("#flexAmmo");
    if(div.innerHTML == ""){
        let ammo = Object.keys(item.ammo);
        ammo.forEach(function(val){
            let auxDiv = document.createElement("div");
            auxDiv.className = "marketStuff";
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
    } else{
        div.innerHTML = "";
    }
}

// Open Armors
const armorCategories = ["Roupas", "Armadura Leve(Força 11+)", "Armadura Média(Força 13+)", "Armadura Pesada(Força 15+)"];
const armorCategoriesCodes = ["ac1", "ac2", "ac3", "ac4"];

function openArmors(){
    let div = document.querySelector("#flexArmor");
    if(div.innerHTML == ""){
        armorCategories.forEach(function(cat){
            let button = document.createElement("button");
            button.className = "armorCategory";
            button.innerHTML = cat;
            button.setAttribute("onclick", `openArmorCategory("${cat}")`);
            div.appendChild(button);
            let catDiv = document.createElement("div");
            catDiv.id = armorCategoriesCodes[armorCategories.indexOf(cat)];
            div.appendChild(catDiv);
        });
    } else{
        div.innerHTML = "";
    }
}

// Finding armors by category

function findArmorsByCategory(category){
    const armors = [];
    const allArmors = Object.keys(item.armor);
    allArmors.forEach(function(value){
        if(item.armor[value].type == category){
            armors.push(value);
        }
    });
    return armors;
}

// Open armor category

function openArmorCategory(category){
    let div = document.querySelector("#" + armorCategoriesCodes[armorCategories.indexOf(category)]);
    if(div.innerHTML == ""){
        const armors = findArmorsByCategory(category);
        armors.forEach(function(value){
            let button = document.createElement("button");
            button.className = "armor";
            button.innerHTML = value;
            button.setAttribute("onclick", `openArmor("${value}")`);
            div.appendChild(button);
            let armorDiv = document.createElement("div");
            armorDiv.id = item.armor[value].id;
            div.appendChild(armorDiv);
        });
    } else{
        div.innerHTML = "";
    }
}

// Open an Armor

function openArmor(armor){
    let div = document.querySelector("#" + item.armor[armor].id);
    if(div.innerHTML == ""){
        let auxDiv = document.createElement("div");
        auxDiv.className = "marketStuff";
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
    } else{
        div.innerHTML = "";
    }
}

// Open Personal Gears

function openPersonalGears(){
    let div = document.querySelector("#flexPersonalGear");
    if(div.innerHTML == ""){
        let personalGears = Object.keys(item.personalGear);
        personalGears.forEach(function(gear){
            let button = document.createElement("button");
            button.innerHTML = gear;
            button.className = "personalGear";
            button.setAttribute("onclick", `openPersonalGear("${gear}")`);
            div.appendChild(button);
            let gearDiv = document.createElement("div");
            gearDiv.id = item.personalGear[gear].id;
            div.appendChild(gearDiv);
        });
    } else{
        div.innerHTML = "";
    }
}

// Open Personal Gear

function openPersonalGear(gear){
    let div = document.querySelector("#" + item.personalGear[gear].id);
    if(div.innerHTML == ""){
        let auxDiv = document.createElement("div");
        auxDiv.className = "marketStuff";
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
    } else{
        div.innerHTML = "";
    }
}

// Open Clothings or Acessories

function openClothingAcessorys(){
    let div = document.querySelector("#flexClothingAcessory");
    if(div.innerHTML == ""){
        let clothingAcessories = Object.keys(item.clothingAndAccessory);
        clothingAcessories.forEach(function(val){
            let button = document.createElement("button");
            button.innerHTML = val;
            button.className = "clothingAcessory";
            button.setAttribute("onclick", `openClothingAcessory("${val}")`);
            div.appendChild(button);
            let clothingDiv = document.createElement("div");
            clothingDiv.id = item.clothingAndAccessory[val].id;
            div.appendChild(clothingDiv);
        });
    } else{
        div.innerHTML = "";
    }
}

function openClothingAcessory(val){
    let div = document.querySelector("#" + item.clothingAndAccessory[val].id);
    if(div.innerHTML == ""){
        let auxDiv = document.createElement("div");
        auxDiv.className = "marketStuff";
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
    } else{
        div.innerHTML = "";
    }
}

function openTools(){
    let div = document.querySelector("#flexTool");
    if(div.innerHTML == ""){
        let tools = Object.keys(item.tool);
        tools.forEach(function(tool){
            let button = document.createElement("button");
            button.innerHTML = tool;
            button.className = "tool";
            button.setAttribute("onclick", `openTool("${tool}")`);
            div.appendChild(button);
            let toolDiv = document.createElement("div");
            toolDiv.id = item.tool[tool].id;
            div.appendChild(toolDiv);
        });
    } else{
        div.innerHTML = "";
    }
}

function openTool(tool){
    let div = document.querySelector("#" + item.tool[tool].id);
    if(div.innerHTML == ""){
        let auxDiv = document.createElement("div");
        auxDiv.className = "marketStuff";
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
    } else{
        div.innerHTML = "";
    }
}

function openFoods(){
    let div = document.querySelector("#flexFood");
    if(div.innerHTML == ""){
        let foods = Object.keys(item.food);
        foods.forEach(function(food){
            let button = document.createElement("button");
            button.innerHTML = food;
            button.className = "food";
            button.setAttribute("onclick", `openFood("${food}")`);
            div.appendChild(button);
            let foodDiv = document.createElement("div");
            foodDiv.id = item.food[food].id;
            div.appendChild(foodDiv);
        });
    } else{
        div.innerHTML = "";
    }
}

function openFood(food){
    let div = document.querySelector("#" + item.food[food].id);
    if(div.innerHTML == ""){
        let auxDiv = document.createElement("div");
        auxDiv.className = "marketStuff";
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
    } else{
        div.innerHTML = "";
    }
}

function openAnimals(){
    let div = document.querySelector("#flexAnimal");
    if(div.innerHTML == ""){
        let animals = Object.keys(item.animal);
        animals.forEach(function(animal){
            let button = document.createElement("button");
            button.innerHTML = animal;
            button.className = "animal";
            button.setAttribute("onclick", `openAnimal("${animal}")`);
            div.appendChild(button);
            let animalDiv = document.createElement("div");
            animalDiv.id = item.animal[animal].id;
            div.appendChild(animalDiv);
        });
    } else{
        div.innerHTML = "";
    }
}

function openAnimal(animal){
    let div = document.querySelector("#" + item.animal[animal].id);
    if(div.innerHTML == ""){
        let auxDiv = document.createElement("div");
        auxDiv.className = "marketStuff";
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
    } else{
        div.innerHTML = "";
    }
}

function openAnimalGears(){
    let div = document.querySelector("#flexAnimalGear");
    if(div.innerHTML == ""){
        let animalGears = Object.keys(item.animalGear);
        animalGears.forEach(function(gear){
            let button = document.createElement("button");
            button.innerHTML = gear;
            button.className = "animalGear";
            button.setAttribute("onclick", `openAnimalGear("${gear}")`);
            div.appendChild(button);
            let gearDiv = document.createElement("div");
            gearDiv.id = item.animalGear[gear].id;
            div.appendChild(gearDiv);
        });
    } else{
        div.innerHTML = "";
    }
}

function openAnimalGear(gear){
    let div = document.querySelector("#" + item.animalGear[gear].id);
    if(div.innerHTML == ""){
        let auxDiv = document.createElement("div");
        auxDiv.className = "marketStuff";
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
    } else{
        div.innerHTML = "";
    }
}

function openHirelings(){
    let div = document.querySelector("#flexHireling");
    if(div.innerHTML == ""){
        let hirelings = Object.keys(item.hireling);
        hirelings.forEach(function(val){
            let button = document.createElement("button");
            button.innerHTML = val;
            button.className = "hireling";
            button.setAttribute("onclick", `openHireling("${val}")`);
            div.appendChild(button);
            let hirelingDiv = document.createElement("div");
            hirelingDiv.id = item.hireling[val].id;
            div.appendChild(hirelingDiv);
        });
    } else{
        div.innerHTML = "";
    }
}

function openHireling(val){
    let div = document.querySelector("#" + item.hireling[val].id);
    if(div.innerHTML == ""){
        let auxDiv = document.createElement("div");
        auxDiv.className = "marketStuff";
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
    } else{
        div.innerHTML = "";
    }
}

function openPotions(){
    let div = document.querySelector("#flexPotion");
    if(div.innerHTML == ""){
        let potions = Object.keys(item.potion);
        potions.forEach(function(potion){
            let button = document.createElement("button");
            button.innerHTML = potion;
            button.className = "potion";
            button.setAttribute("onclick", `openPotion("${potion}")`);
            div.appendChild(button);
            let potionDiv = document.createElement("div");
            potionDiv.id = item.potion[potion].id;
            div.appendChild(potionDiv);
        });
    } else{
        div.innerHTML = "";
    }
}

function openPotion(potion){
    let div = document.querySelector("#" + item.potion[potion].id);
    if(div.innerHTML == ""){
        let auxDiv = document.createElement("div");
        auxDiv.className = "marketStuff";
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
    } else{
        div.innerHTML = "";
    }
}

function openIncantations(){
    let div = document.querySelector("#flexIncantation");
    if(div.innerHTML == ""){
        let incantations = Object.keys(item.incantation);
        incantations.forEach(function(val){
            let button = document.createElement("button");
            button.innerHTML = val;
            button.className = "incantation";
            button.setAttribute("onclick", `openIncantation("${val}")`);
            div.appendChild(button);
            let incantationDiv = document.createElement("div");
            incantationDiv.id = "i" + item.incantation[val].level;
            div.appendChild(incantationDiv);
        });
    } else{
        div.innerHTML = "";
    }
}

function openIncantation(val){
    let div = document.querySelector("#i" + item.incantation[val].level);
    if(div.innerHTML == ""){
        let auxDiv = document.createElement("div");
        auxDiv.className = "marketStuff";
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
    } else{
        div.innerHTML = "";
    }
}


shoppingItemsNum = 0;
totalPrice = 0;

function putItemInShoppingInventory(event){
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
    removeButton.setAttribute("onclick", `removeItemFromShoppingInventory(${shoppingItemsNum})`);

    shoppingList.appendChild(shoppingItem);
    shoppingItem.appendChild(removeButton);

    handleItemPrice(price, shoppingItemsNum, type);
    shoppingItemsNum++;
}

function removeItemFromShoppingInventory(itemNum){
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
            character.inventory.money.goldCrowns = Math.floor(difference / 1000);
            character.inventory.money.silverShillings = Math.floor((difference % 1000) / 100);
            character.inventory.money.copperPennies = Math.floor((difference % 100) / 10);
            character.inventory.money.bits = difference % 10;
        }
        else if(difference >= 100){
            character.inventory.money.goldCrowns = 0;
            character.inventory.money.silverShillings = Math.floor(difference / 100);
            character.inventory.money.copperPennies = Math.floor((difference % 100) / 10);
            character.inventory.money.bits = difference % 10;
        }
        else if(difference >= 10){
            character.inventory.money.goldCrowns = 0;
            character.inventory.money.silverShillings = 0;
            character.inventory.money.copperPennies = Math.floor(difference / 10);
            character.inventory.money.bits = difference % 10
        }
        else {
            character.inventory.money.goldCrowns = 0;
            character.inventory.money.silverShillings = 0;
            character.inventory.money.copperPennies = 0;
            character.inventory.money.bits = difference;
        }
        let items = Object.keys(priceItemList);
        items.forEach(function(val){
            let newItem = document.querySelector("#item" + val).innerHTML;
            let pos = newItem.indexOf("<");
            newItem = newItem.slice(0, pos);
            switch(priceItemList[val].type){
                case "weapon":
                    if(character.inventory.weapons[newItem]){
                        character.inventory.weapons[newItem] = deepCopy(item.weapon[newItem]);
                        character.inventory.weapons[newItem].quantity = (character.inventory.weapons[newItem].quantity || 1) + 1;
                    } else{
                        character.inventory.weapons[newItem] = deepCopy(item.weapon[newItem]);
                    }
                    break;
                case "ammo":
                    if(character.inventory.ammo[newItem]){
                        character.inventory.ammo[newItem].quantity += 5;
                    } else{
                        character.inventory.ammo[newItem] = {
                            quantity: 5
                        }
                    }
                    break;
                case "armor":
                    if(character.inventory.armors[newItem]){
                        character.inventory.armors[newItem] = deepCopy(item.armor[newItem]);
                        character.inventory.armors[newItem].quantity = (character.inventory.armors[newItem].quantity || 1) + 1;
                    } else{
                        character.inventory.armors[newItem] = deepCopy(item.armor[newItem]);
                    }
                    break;
                case "personalGear":
                    if(newItem == "Mochila"){
                        character.inventory.bags.push("Mochila");
                    }
                    else{
                        if(character.inventory.items[newItem]){
                            character.inventory.items[newItem] = deepCopy(item.personalGear[newItem]);
                            character.inventory.items[newItem].quantity = (character.inventory.items[newItem].quantity || 1) + 1;
                        } else{
                            character.inventory.items[newItem] = deepCopy(item.personalGear[newItem]);
                        }
                    }
                    break;
                case "clothingAcessory":
                    if(character.inventory.items[newItem]){
                        character.inventory.items[newItem] = deepCopy(item.clothingAndAccessory[newItem]);
                        character.inventory.items[newItem].quantity = (character.inventory.items[newItem].quantity || 1) + 1;
                    } else{
                        character.inventory.items[newItem] = deepCopy(item.clothingAndAccessory[newItem]);
                    }
                    break;
                case "tool":
                    if(character.inventory.items[newItem]){
                        character.inventory.items[newItem] = deepCopy(item.tool[newItem]);
                        character.inventory.items[newItem].quantity = (character.inventory.items[newItem].quantity || 1) + 1;
                    } else{
                        character.inventory.items[newItem] = deepCopy(item.tool[newItem]);
                    }
                    break;
                case "food":
                    if(character.inventory.items[newItem]){
                        character.inventory.items[newItem] = deepCopy(item.food[newItem]);
                        character.inventory.items[newItem].quantity = (character.inventory.items[newItem].quantity || 1) + 1;
                    } else{
                        character.inventory.items[newItem] = deepCopy(item.food[newItem]);
                    }
                    break;
                case "animal":
                    if(character.inventory.animals[newItem]){
                        character.inventory.animals[newItem] = deepCopy(item.animal[newItem]);
                        character.inventory.animals[newItem].quantity = (character.inventory.animals[newItem].quantity || 1) + 1;
                    } else{
                        character.inventory.animals[newItem] = deepCopy(item.animal[newItem]);
                    }
                    break;
                case "animalGear":
                    if(character.inventory.items[newItem]){
                        character.inventory.items[newItem] = deepCopy(item.animalGear[newItem]);
                        character.inventory.items[newItem].quantity = (character.inventory.items[newItem].quantity || 1) + 1;
                    } else{
                        character.inventory.items[newItem] = deepCopy(item.animalGear[newItem]);
                    }
                    break;
                case "hireling":
                    if(character.inventory.hirelings[newItem]){
                        character.inventory.hirelings[newItem] = deepCopy(item.hireling[newItem]);
                        character.inventory.hirelings[newItem].quantity = (character.inventory.hirelings[newItem].quantity || 1) + 1;
                    } else{
                        character.inventory.hirelings[newItem] = deepCopy(item.hireling[newItem]);
                    }
                    break;
                case "potion":
                    newItem = newItem.slice(6, newItem.length);
                    if(character.inventory.items[newItem]){
                        character.inventory.items[newItem] = deepCopy(item.potion[newItem]);
                        character.inventory.items[newItem].quantity = (character.inventory.items[newItem].quantity || 1) + 1;
                    } else{
                        character.inventory.items[newItem] = deepCopy(item.potion[newItem]);
                    }
                    break;
                case "incantation":
                    newItem = newItem.slice(8, newItem.length);
                    if(character.inventory.items[newItem]){
                        character.inventory.items[newItem] = deepCopy(item.incantation[newItem]);
                        character.inventory.items[newItem].quantity = (character.inventory.items[newItem].quantity || 1) + 1;
                    } else{
                        character.inventory.items[newItem] = deepCopy(item.incantation[newItem]);
                    }
                    break;
            }
        });
        localStorage.setItem("character", JSON.stringify(character));
        window.location.href = "character.html";
    }
}
