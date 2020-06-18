class Character{
    constructor(name, personality, age, religion, background, strength, agility, intellect, will, perception, defense, health, size, speed, power, damage, insanity, corruption, level){
        this._name = name;
        this._personality = personality;
        this._age = age;
        this._religion = religion;
        this._background = background;
        this._strength = strength;
        this._agility = agility;
        this._intellect = intellect;
        this._will = will;
        this._perception = perception;
        this._defense = defense;
        this._health = health;
        this._size = size;
        this._speed = speed;
        this._power = power;
        this._damage = damage;
        this._insanity = insanity;
        this._corruption = corruption;
        this._level = level;

        this._healingRate = Math.floor(health/4);
        this._languageList = {
            "Língua Comum": {
                speakable: true,
                readable: false,
                writable: false
            } 
        }
        this._professionList = [];
        this._talents = {};
        this._talents["ancestry"] = {};
        this._talents["novicePath"] = {};
        this._talents["expertPath"] = {};
        this._talents["masterPath"] = {};
    }
    // Most likely immutable properties
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    get personality(){
        return this._personality;
    }
    set personality(personality){
        this._personality = personality;
    }
    get age(){
        return this._age;
    }
    set age(age){
        this._age = age;
    }
    get religion(){
        return this._religion;
    }
    set religion(religion){
        this._religion = religion;
    }
    get background(){
        return this._background;
    }
    set background(background){
        this._background = background;
    }
    get speed(){
        return this._speed;
    }
    set speed(speed){
        this._speed = speed;
    }
    get size(){
        return this._size;
    }
    set size(size){
        this._size = size;
    }
    // Special case: all ancestries have healing rate = current health / 4 -> round down(floor)
    get healingRate(){
        return Math.floor(this._health/4);
    }
    // Special case 2: when you level up, a function inside the ancestry specific class will be triggered
    get level(){
        return this._level;
    }
    set level(value){
        this._level =  value; 
    }
    // Special case 3: when your power raises, a function inside MagicCharacter will be triggered
    get power(){
        return this._power;
    }
    set power(value){
        return this._power = value
    }
    // Mutable properties:
    //Strength:
    get strength(){
        return this._strength;
    }
    set strength(value){
        this._strength = value;
    }
    //Agility:
    get agility(){
        return this._agility;
    }
    set agility(value){
        this._agility = value;
    }
    //Intellect:
    get intellect(){
        return this._intellect;
    }
    set intellect(value){
        this._intellect = value;
    }
    //Will:
    get will(){
        return this._will;
    }
    set will(value){
        this._will = value;
    }
    //Perception:
    get perception(){
        return this._perception;
    }
    set perception(value){
        this._perception = value;
    }
    //Health:
    get health(){
        return this._health;
    }
    set health(value){
        this._health = value;
    }
    //Defense:
    get defense(){
        return this._defense;
    }
    set defense(value){
        this._defense = value;
    }
    //Damage:
    get damage(){
        return this._damage;
    }
    set damage(value){
        this._damage = value;
    }
    //Insanity:
    get insanity(){
        return this._insanity;
    }
    set insanity(value){
        this._insanity = value;
    }
    //Corruption:
    get corruption(){
        return this._corruption;
    }
    set corruption(value){
        this._corruption = value;
    }
    // Special property-handling methods: 
    //Languages:
    get languages(){
        return this._languageList;
    }   
    addSpeakedLanguage(language){
        if(!(language in this._languageList)){
            this._languageList[language] = {};
        }
        this._languageList[language]["speakable"] = true;
    }
    addReadableLanguage(language){
        if(!(language in this._languageList)){
            this._languageList[language] = {};
        }
        this._languageList[language]["readable"] = true;
    }
    addWritableLanguage(language){
        if(!(language in this._languageList)){
            this._languageList[language] = {};
        }
        this._languageList[language]["writable"] = true;
    }
    //Professions:
    get professions(){
        return this._professionList;
    }
    addProfession(profession){
        this._professionList[this._professionList.length] = profession;
    }
    //Talents:
    get talents(){
        return this._ancestryTalents;
    }
    addTalent(type, name, description){
        this._talents[type][name] = description;
    }
}

class Human extends Character{
    constructor(name, personality, age, religion, background, size, build, appearance, additionalAttCharacts){
        super(name, personality, age, religion, background,
            10+additionalAttCharacts.strength, 10+additionalAttCharacts.agility, 10+additionalAttCharacts.intellect, 10+additionalAttCharacts.will,
            10+additionalAttCharacts.intellect, 10+additionalAttCharacts.agility, 10+additionalAttCharacts.strength, size, 10,
            additionalAttCharacts.power, additionalAttCharacts.damage, additionalAttCharacts.insanity, additionalAttCharacts.corruption, additionalAttCharacts.level);
        this._build = build;
        this._appearance = appearance;
    }
    // Getting and setting new ancestry-specific properties:
    get build(){
        return this._build;
    }
    set build(newBuild){
        this._build = newBuild;
    }
    get appearance(){
        return this._appearance;
    }
    set appearance(newAppearence){
        this._appearance = newAppearence;
    }
    // Overriding properties setters:
    set strength(value){
        super.health = super.health - super.strength + value;
        super.strength = value;
    }
    set agility(value){
        super.defense = super.defense - super.agility + value;
        super.agility = value;
    }
    set intellect(value){
        super.perception = super.perception - super.intellect + value;
        super.intellect = value;
    }
    // New ascentry-specific methods:
    level4(){
        super.health = super.health + 5;
    }
    levelUp(){
        super.level = super.level + 1;
        if(super.level == 4){
            this.level4();
        }
    }
}

class Changeling extends Character{
    constructor(name, personality, trueAge, religion, background, apparentGender, apparentAncestry, apparentAge, apparentBuild, apparentAppearence, quirk, additionalAttCharacts){  
        super(name, personality, trueAge, religion, background,
            additionalAttCharacts.strength+9, additionalAttCharacts.agility+10, additionalAttCharacts.intellect+10, additionalAttCharacts.will+10,
            additionalAttCharacts.intellect+11, additionalAttCharacts.agility+10, additionalAttCharacts.strength+10,
            1, 10, additionalAttCharacts.power, additionalAttCharacts.damage, additionalAttCharacts.insanity, additionalAttCharacts.corruption, additionalAttCharacts.level);
        
        this._apparentGender = apparentGender;
        this._apparentAncestry = apparentAncestry;
        this._apparentAge = apparentAge;
        this._apparentBuild = apparentBuild;
        this._apparentAppearence = apparentAppearence;
        this._quirk = quirk;

        super.addTalent("ancestry", "Imune", "dano por doença; doente e encantado");
        super.addTalent("ancestry","Roubar Identidade","Pode utilizar uma ação para alterar sua aparência e copiar a de uma criatura viva que tenha visto a curta distância. O alvo precisa ter Tamanho 1 ou 1/2 e ter uma forma humanoide de carne e sangue. O corpo do changeling muda para que se pareça com o alvo; no entanto, roupas e bens permanecem inalterados. O efeito dura até que o talento seja utilizado novamente. Caso fique incapacitado ou toque um objeto feito de ferro, o changeling retorna à sua aparência normal imediatamente");
        super.addTalent("ancestry","Visão nas Sombras","Enxerga em áreas obscurecidas por sombras como se estivessem iluminadas");
        super.addTalent("ancestry","Vulnerabilidade a Ferro","Fica debilitado quando em contato com ferro");
    }
    // Getting and setting new ancestry-specific properties:
    get apparentGender(){
        return this._apparentGender;
    }
    set apparentGender(newApparentGender){
        this._apparentGender = newApparentGender;
    }
    get apparentAncestry(){
        return this._apparentAncestry;
    }
    set apparentAncestry(newApparentAncestry){
        this._apparentAncestry = newApparentAncestry;
    }
    get apparentAge(){
        return this._apparentAge;
    }
    set apparentAge(newApparentAge){
        this._apparentAge = newApparentAge;
    }
    get apparentBuild(){
        return this._apparentBuild;
    }
    set apparentBuild(newApparentBuild){
        this._apparentBuild = newApparentBuild;
    }
    get apparentAppearence(){
        return this._apparentAppearence;
    }
    set apparentAppearence(newApparentAppearence){
        this._apparentAppearence = newApparentAppearence;
    }
    get quirk(){
        return this._quirk;
    }
    set quirk(newQuirk){
        this._quirk = newQuirk;
    }
    // Overriding properties setters:
    set strength(value){
        super.health = super.health - super.strength + value;
        super.strength = value;
    }
    set agility(value){
        super.defense = super.defense - super.agility + value;
        super.agility = value;
    }
    set intellect(value){
        super.perception = super.perception - super.intellect + value;
        super.intellect = value;
    }
    // New ascentry-specific methods:
    level4(){
        super.health = super.health + 4;
    }
    levelUp(){
        super.level = super.level + 1;
        if(super.level == 4){
            this.level4();
        }
    }
}

class Clockwork extends Character{
    constructor(name, personality, age, religion, background, purpose, form, appearance, locationKey, additionalAttCharacts){  
        super(name, personality, age, religion, background,
            additionalAttCharacts.strength+9, additionalAttCharacts.agility+8, additionalAttCharacts.intellect+9, additionalAttCharacts.will+9,
            additionalAttCharacts.intellect+9, 13, additionalAttCharacts.strength+9,
            1, 8, additionalAttCharacts.power, additionalAttCharacts.damage, additionalAttCharacts.insanity, additionalAttCharacts.corruption, additionalAttCharacts.level);
        
        this._purpose = purpose;
        this._form = form;
        this._appearance = appearance;
        this._locationKey = locationKey;

        super.addTalent("ancestry","Imune","dano por doença e veneno; adormecido, doente, envenenado e fatigado");
        super.addTalent("ancestry","Chave","Um autômato tem uma chave em algum lugar de seu corpo que não pode alcançar. Quando a chave é virada e está rodando, ele é uma criatura. Quando a chave para, ele se torna um objeto. Essa chave para de rodar quando o autômato fica incapacitado. Ela também para ao final da rodada se o autômato teve um total de 0 ou menos em uma jogada de ataque ou de desafio. Enquanto é um objeto, não é possível utilizar ações, se mover, falar ou observar os arredores. Qualquer criatura que possa alcançar o autômato, pode utilizar uma ação para dar corda nele. Se o autômato não estiver incapacitado, se torna uma criatura novamente. Caso esteja incapacitado, o jogador joga 1d6. Para um resultado de 3 ou menos, não há efeito. Para 4 ou mais, o autômato cura 1 de dano e se torna uma criatura no fim da rodada. Embora seja um objeto enquanto está incapacitado, o autômato ainda está sujeito as regras para criaturas incapacitadas");
        super.addTalent("ancestry","Corpo Mecânico","Um autômato não come, bebe ou respira. Ele não envelhece e não pode ser transformado em uma criatura morta-viva. Seu corpo mecânico o impossibilita de nadar, então ele afunda quando submerso em líquido");
        super.addTalent("ancestry","Reparando Dano","Enquanto é uma criatura, o autômato se cura de dano como qualquer outra criatura. Caso seja um objeto, uma criatura pode utilizar uma ação para repará-lo com um kit de ferramentas. A criatura precisa trabalhar por no mínimo 4 horas. Ao fim deste período, ela faz um teste de intelecto com 1 perdição. Caso seja bem-sucedida, o autômato cura uma quantidade de dano igual sua taxa de cura");
    }
    // Getting and setting new ancestry-specific properties:
    get purpose(){
        return this._purpose;
    }
    set purpose(newPurpose){
        this._purpose = newPurpose;
    }
    get form(){
        return this._form;
    }
    set form(newForm){
        this._form = newForm;
    }
    get appearance(){
        return this._appearance;
    }
    set appearance(newAppearance){
        this._appearance = newAppearance;
    }
    get locationKey(){
        return this._locationKey;
    }
    set locationKey(newLocationKey){
        this._locationKey = newLocationKey;
    }
    // Overriding properties setters:
    set strength(value){
        super.health = super.health - super.strength + value;
        super.strength = value;
    }
    set intellect(value){
        super.perception = super.perception - super.intellect + value;
        super.intellect = value;
    }
    // New ascentry-specific methods:
    level4(){
        super.health = super.health + 5;
    }
    levelUp(){
        super.level = super.level + 1;
        if(super.level == 4){
            this.level4();
        }
    }
}

class Dwarf extends Character{
    constructor(name, personality, age, religion, background, build, appearance, hatred, additionalAttCharacts){  
        super(name, personality, age, religion, background,
            additionalAttCharacts.strength+10, additionalAttCharacts.agility+9, additionalAttCharacts.intellect+10, additionalAttCharacts.will+10,
            additionalAttCharacts.intellect+11, additionalAttCharacts.agility+9, additionalAttCharacts.strength+14,
            0.5, 8, additionalAttCharacts.power, additionalAttCharacts.damage, additionalAttCharacts.insanity, additionalAttCharacts.corruption, additionalAttCharacts.level);
        
        this._build = build
        this._appearance = appearance;
        this._hatred = hatred;

        super.addSpeakedLanguage("Anão");
        super.addReadableLanguage("Anão");
        super.addWritableLanguage("Anão");

        super.addTalent("ancestry","Constituição Robusta","Um anão toma metade do dano por veneno. Ele pode fazer jogadas de desafio com 1 dádiva para evitar ou remover a aflição envenenado");
        super.addTalent("ancestry","Criatura Odiada","O jogador escolhe uma criatura da tabela de Ódio. Este ódio concede 1 dádiva em jogadas de ataque do anão contra a criatura escolhida");
        super.addTalent("ancestry","Visão no Escuro","Enxerga em áreas obscurecidas por sombras e escuridão com um alcance médio como se estivessem iluminadas. Além desta distância, a escuridão é tratada como sombras e sombras como iluminado");
    }
    // Getting and setting new ancestry-specific properties:
    get build(){
        return this._build;
    }
    set build(newBuild){
        this._build = newBuild;
    }
    get appearance(){
        return this._appearance;
    }
    set appearance(newAppearance){
        this._appearance = newAppearance;
    }
    get hatred(){
        return this._hatred;
    }
    set hatred(newHatred){
        this._hatred = newHatred;
    }
    // Overriding properties setters:
    set strength(value){
        super.health = super.health - super.strength + value;
        super.strength = value;
    }
    set agility(value){
        super.defense = super.defense - super.agility + value;
        super.agility = value;
    }
    set intellect(value){
        super.perception = super.perception - super.intellect + value;
        super.intellect = value;
    }
    // New ascentry-specific methods:
    level4(){
        super.health = super.health + 6;
    }
    levelUp(){
        super.level = super.level + 1;
        if(super.level == 4){
            this.level4();
        }
    }
}

class Goblin extends Character{
    constructor(name, personality, age, religion, background, build, distinctiveAppearance, oddHabit, additionalAttCharacts){  
        super(name, personality, age, religion, background,
            additionalAttCharacts.strength+8, additionalAttCharacts.agility+12, additionalAttCharacts.intellect+10, additionalAttCharacts.will+9,
            additionalAttCharacts.intellect+11, additionalAttCharacts.agility+12, additionalAttCharacts.strength+8,
            0.5, 10, additionalAttCharacts.power, additionalAttCharacts.damage, additionalAttCharacts.insanity, additionalAttCharacts.corruption, additionalAttCharacts.level);
        
        this._build = build
        this._distinctiveAppearance = distinctiveAppearance;
        this._oddHabit = oddHabit;

        super.addSpeakedLanguage("Élfico");

        super.addTalent("ancestry","Imune","dano por doença; doente, encantado");
        super.addTalent("ancestry","Furtivo","Quando faz uma jogada para se esconder e mover-se silenciosamente, o goblin faz a jogada de desafio de Agilidade com 1 dádiva");
        super.addTalent("ancestry","Visão nas Sombras","Enxerga em áreas obscurecidas por sombras como se estivessem iluminadas");
        super.addTalent("ancestry","Vulnerabilidade a Ferro","Fica debilitado quando em contato com ferro");
    }
    // Getting and setting new ancestry-specific properties:
    get build(){
        return this._build;
    }
    set build(newBuild){
        this._build = newBuild;
    }
    get distinctiveAppearance(){
        return this._distinctiveAppearance;
    }
    set distinctiveAppearance(newDistinctiveAppearance){
        this._distinctiveAppearance = newDistinctiveAppearance;
    }
    get oddHabit(){
        return this._oddHabit;
    }
    set oddHabit(newOddHabit){
        this._oddHabit = newOddHabit;
    }
    // Overriding properties setters:
    set strength(value){
        super.health = super.health - super.strength + value;
        super.strength = value;
    }
    set agility(value){
        super.defense = super.defense - super.agility + value;
        super.agility = value;
    }
    set intellect(value){
        super.perception = super.perception - super.intellect + value;
        super.intellect = value;
    }
    // New ascentry-specific methods:
    level4(){
        super.health = super.health + 4;
    }
    levelUp(){
        super.level = super.level + 1;
        if(super.level == 4){
            this.level4();
        }
    }
}

class Orc extends Character{
    constructor(name, personality, age, religion, background, build, appearance, additionalAttCharacts){  
        super(name, personality, age, religion, background,
            additionalAttCharacts.strength+11, additionalAttCharacts.agility+10, additionalAttCharacts.intellect+9, additionalAttCharacts.will+9,
            additionalAttCharacts.intellect+10, additionalAttCharacts.agility+10, additionalAttCharacts.strength+11,
            1, 12, additionalAttCharacts.power, additionalAttCharacts.damage, additionalAttCharacts.insanity, additionalAttCharacts.corruption+1, additionalAttCharacts.level);
        
        this._build = build
        this._appearance = appearance;

        super.addSpeakedLanguage("Dialeto Sombrio");

        super.addTalent("ancestry","Visão nas Sombras","Enxerga em áreas obscurecidas por sombras como se estivessem iluminadas");
        
    }
    // Getting and setting new ancestry-specific properties:
    get build(){
        return this._build;
    }
    set build(newBuild){
        this._build = newBuild;
    }
    get appearance(){
        return this._appearance;
    }
    set appearance(newAppearance){
        this._appearance = newAppearance;
    }
    // Overriding properties setters:
    set strength(value){
        super.health = super.health - super.strength + value;
        super.strength = value;
    }
    set agility(value){
        super.defense = super.defense - super.agility + value;
        super.agility = value;
    }
    set intellect(value){
        super.perception = super.perception - super.intellect + value;
        super.intellect = value;
    }
    // New ascentry-specific methods:
    level4(){
        super.health = super.health + 6;
    }
    levelUp(){
        super.level = super.level + 1;
        if(super.level == 4){
            this.level4();
        }
    }
}

class Yerath extends Character{
    constructor(name, caste, age, religion, personality, background, additionalAttCharacts){
        super(name, personality, age, religion, background, 
            additionalAttCharacts.strength+9, additionalAttCharacts.agility+10, additionalAttCharacts.intellect+10, additionalAttCharacts.will+9,
            additionalAttCharacts.intellect+10, 12, additionalAttCharacts.strength+9,
            1, 10, additionalAttCharacts.power, additionalAttCharacts.damage, additionalAttCharacts.insanity, additionalAttCharacts.corruption, additionalAttCharacts.level);
        
        this._caste = caste;
    }
    // Getting and setting new ancestry-specific properties:
    get caste(){
        return this._caste;
    }
    set caste(newCaste){
        this._caste = newCaste;
    }
    // Overriding properties setters:
    set strength(value){
        super.health = super.health - super.strength + value;
        super.strength = value;
    }
    set intellect(value){
        super.perception = super.perception - super.intellect + value;
        super.intellect = value;
    }
    // New ascentry-specific methods:
    level4(){
        super._defense = super._defense + 1;
        super._health = super._health + 1;
    }
    levelUp(){
        super.level = super.level + 1;
        if(super.level == 4){
            this.level4();
        }
    }
}

function parseJsonBackToAncestryClassObject(ancestry, jsonObject){
    switch(ancestry){
        case "human":
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
            console.log("Unable to get ancestry object - " + ancestry + " isn't an ancestry");
    }
}


console.log("Ancestry examples:");

var human = new Human("Example 1", "Crazy", 20, "None", "Came from a mafia", 0.5, "Very very weak", "Handsome af", {
    strength: 0,
    agility: 1,
    intellect: 0,
    will: 0,
    damage: 0,
    power: 0,
    insanity: 0,
    corruption: 0,
    level: 1
});

var changeling = new Changeling("Example 2", "Cool", 30, "Dama da noite", "Kidnapped and used for slavor", "female", "orc", 12, "Strong af", "Ugly as hell", "Doesn't have fingernails or hair when changing their form", {
    strength: 0,
    agility: 0,
    intellect: 0,
    will: 0,
    damage: 0,
    power: 0,
    insanity: 0,
    corruption: 0,
    level: 1
});

var clockwork = new Clockwork("Robot 1", "Fluid", 150, "Pai morte", "Came from a rich family", "kill everyone", "great form", "Strange", "Anckle", {
    strength: 0,
    agility: 0,
    intellect: 0,
    will: 0,
    damage: 0,
    power: 0,
    insanity: 0,
    corruption: 0,
    level: 1
});

var dwarf = new Dwarf("Sneezy", "ATCHOU!", 50, "Winter is coming", "Snow white", "Weak", "Sick", "Orcs", {
    strength: 0,
    agility: 0,
    intellect: 0,
    will: 0,
    damage: 0,
    power: 0,
    insanity: 0,
    corruption: 0,
    level: 1
});

var goblin = new Goblin("Greeny", "Angry and sneaky", 15, "Lord Voldemort", "Robbery and assault", "Small", "Big nose", "Speak in lies", {
    strength: 0,
    agility: 0,
    intellect: 0,
    will: 0,
    damage: 0,
    power: 0,
    insanity: 0,
    corruption: 0,
    level: 1
});

var orc = new Orc("Construtor", "Kill.", 21, "None", "You received an education. You know how to read the Common Tongue.", "You are corpulent.", "You are ugly. You have thick tusks jutting from your broad jaw, a sloping forehead, and tiny eyes set deep in your skull.", {
    strength: 0,
    agility: 0,
    intellect: 0,
    will: 0,
    damage: 0,
    power: 0,
    insanity: 0,
    corruption: 0,
    level: 1
});

var yerath = new Yerath("HarleyQuinn", "Soldier", 12, "Herself", "Buzzly", "Bee happy", {
    strength: 0,
    agility: 0,
    intellect: 0,
    will: 0,
    damage: 0,
    power: 0,
    insanity: 0,
    corruption: 0,
    level: 1
});

console.log(human);
console.log(changeling);
console.log(clockwork);
console.log(dwarf);
console.log(goblin);
console.log(orc);
console.log(yerath);
