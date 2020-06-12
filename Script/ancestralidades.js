class Character{
    constructor(name, personality, age, background, strength, agility, intellect, will, perception, speed, size, health, defense, corruption){
        this._name = name;
        this._personality = personality;
        this._age = age;
        this._background = background;
        this._strength = strength;
        this._agility = agility;
        this._intellect = intellect;
        this._will = will;
        this._perception = perception;
        this._speed = speed;
        this._size = size;
        this._health = health;
        this._defense = defense;
        this._corruption = corruption;

        this._damage = 0;
        this._healingRate = Math.floor(health/4);
        this._power = 0;
        this._insanity = 0;
        this._level = 1;
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
    // Imutable properties:
    get name(){
        return this._name;
    }
    get personality(){
        return this._personality;
    }
    get age(){
        return this._age;
    }
    get background(){
        return this._background;
    }
    get speed(){
        return this._speed;
    }
    get size(){
        return this._size;
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
    constructor(name, personality, age, background, raisedAttribute, additionalLanguageOrProfession, size, religion, build, appearance){
        switch(raisedAttribute){
            case "strength":
                super(name, personality, age, background, 11, 10, 10, 10, 10, 10, size, 11, 10, 0);
                break;
            case "agility":
                super(name, personality, age, background, 10, 11, 10, 10, 10, 10, size, 10, 11, 0);
                break;
            case "intellect":
                super(name, personality, age, background, 10, 10, 11, 10, 11, 10, size, 10, 10, 0);
                break;
            default: //will
                super(name, personality, age, background, 10, 10, 10, 11, 10, 10, size, 10, 10, 0);
        }
        this._religion = religion;
        this._build = build;
        this._appearance = appearance;
        
        if(additionalLanguageOrProfession.option == "language"){
            super.addSpeakedLanguage(additionalLanguageOrProfession.value);
        } else{ // additionalLanguageOrProfession.option == "profession"
            super.addProfession(additionalLanguageOrProfession.value);
        }
    }
    // Getting and setting new ancestry-specific properties:
    get religion(){
        return this._religion;
    }
    set religion(newReligion){
        this._religion = newReligion;
    }
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
    constructor(name, personality, trueAge, background, apparentGender, apparentAncestry, apparentAge, apparentBuild, apparentAppearence, quirk){  
        super(name, personality, trueAge, background, 9, 10, 10, 10, 11, 10, 1, 9, 10, 0);
        
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
    constructor(name, personality, age, background, purpose, form, appearance, locationKey){  
        super(name, personality, age, background, 9, 8, 9, 9, 9, 8, 1, 9, 13, 0);
        
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
    constructor(name, personality, age, background, build, appearance, hatred){  
        super(name, personality, age, background, 10, 9, 10, 10, 11, 8, 0.5, 14, 9, 0);
        
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
    constructor(name, personality, age, background, build, distinctiveAppearance, oddHabit){  
        super(name, personality, age, background, 8, 12, 10, 9, 11, 10, 0.5, 8, 12, 0);
        
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
    constructor(name, personality, age, background, build, appearance){  
        super(name, personality, age, background, 11, 10, 9, 9, 11, 12, 1, 11, 10, 1);
        
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

function parseJsonBackToAncestryClassObject(ancestry, jsonObject){
    
}



var human = new Human("Example 1", "Crazy", 20, "Came from a mafia", "strength", {option: "profession", value: "Thief"}, 0.5, "None", "Very very weak", "Handsome af");

var changeling = new Changeling("Example 2", "Cool", 30, "Kidnapped and used for slavor", "female", "orc", 12, "Strong af", "Ugly as hell", "Doesn't have fingernails or hair when changing their form");

var clockwork = new Clockwork("Robot 1", "Fluid", 150, "Came from a rich family", "kill everyone", "great form", "Strange", "Anckle");

var dwarf = new Dwarf("Sneezy", "ATCHOU!", 50, "Snow white", "Weak", "Sick", "Orcs");

var goblin = new Goblin("Greeny", "Angry and sneaky", 15, "Robbery and assault", "Small", "Big nose", "Speak in lies");

var orc = new Orc("Construtor", "Kill.", 21, "You received an education. You know how to read the Common Tongue.", "You are corpulent.", "You are ugly. You have thick tusks jutting from your broad jaw, a sloping forehead, and tiny eyes set deep in your skull.");

console.log(human);
console.log(changeling);
console.log(clockwork);
console.log(dwarf);
console.log(goblin);
console.log(orc);