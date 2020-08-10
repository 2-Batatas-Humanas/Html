class Character{
    constructor(name, personality, age, religion, background, strength, agility, intellect, will,
        perception, defense, health, size, speed, power, damage, insanity, corruption, level,
        professions, paths, inventory, traditions, magicUses){
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
        

        this._languageList = {
            "Língua Comum": {
                speakable: true,
                readable: false,
                writable: false
            } 
        }
        this._professionList = professions;
        this._talents = {
            "ancestry": {},
            "novicePath": {},
            "expertPath": {},
            "masterPath": {}
        };

        switch(paths.novice.type){
            case "warrior":
                this._novicePath = new Warrior(paths.novice.training, level);
                break;
            case "rogue":
                this._novicePath = new Rogue(paths.novice.training, level, paths.novice.choices || {});
                break;
            case "magician":
                this._novicePath = new Magician(paths.novice.training, level);
                break;
            case "priest":
                this._novicePath = new Priest(paths.novice.training, level, paths.novice.choices || {});
                break;
        }
        this._talents.novicePath = this.novicePath.talents;

        if(paths.expert){
            switch(paths.expert.type){
                case "Clérigo":
                    this._expertPath = new Clerigo(paths.expert.training, level);
                    break;
                case "Druida":
                    this._expertPath = new Druida(paths.expert.training, level);
                    break;
                case "Oráculo":
                    this._expertPath = new Oraculo(paths.expert.training, level);
                    break;
                case "Paladino":
                    this._expertPath = new Paladino(paths.expert.training, level);
                    break;
                case "Artífice":
                    this._expertPath = new Artifice(paths.expert.training, level);
                    break;
                case "Bruxa":
                    this._expertPath = new Bruxa(paths.expert.training, level);
                    break;
                case "Feiticeiro":
                    this._expertPath = new Feiticeiro(paths.expert.training, level);
                    break;
                case "Mago":
                    this._expertPath = new Mago(paths.expert.training, level);
                    break;
                case "Assassino":
                    this._expertPath = new Assassino(paths.expert.training, level);
                    break;
                case "Batedor":
                    this._expertPath = new Batedor(paths.expert.training, level);
                    break;
                case "Ladrão":
                    this._expertPath = new Ladrao(paths.expert.training, level, paths.expert.choices);
                    break;
                case "Warlock":
                    this._expertPath = new Warlock(paths.expert.training, level);
                    break;
                case "Atador de Feitiços":
                    this._expertPath = new AtadorDeFeiticos(paths.expert.training, level);
                    break;
                case "Combatente":
                    this._expertPath = new Combatente(paths.expert.training, level, choices);
                    break;
                case "Furioso":
                    this._expertPath = new Furioso(paths.expert.training, level);
                    break;
                case "Patrulheiro":
                    this._expertPath = new Patrulheiro(paths.expert.training, level);
                    break;
                case "Highlander":
                    this._expertPath = new Highlander(paths.expert.training, level);
                    break;
                case "Silhouette":
                    this._expertPath = new Silhouette(paths.expert.training, level);
                    break;
                case "SummerChild":
                    this._expertPath = new SummerChild(paths.expert.training, level);
                    break;
                case "Soulthief":
                    this._expertPath = new Soulthief(paths.expert.training, level);
                    break;
            }
            this._talents.expertPath = this.expertPath.talents;
        }

        if(paths.master){
            switch(paths.master.type){

            }
            this._talents.masterPath = this.masterPath.talents;
        }

        this._inventory = inventory;

        this._traditions = traditions;
        if(isEmpty(magicUses)){
            let uses = {};
            let trads = Object.keys(this.traditions);
            let tradsObj = this.traditions;
            trads.forEach(function(trad){
                tradsObj[trad].forEach(function(spell){
                    uses[spell] = 0;
                });
            });
            this._magicUses = uses;
        } else {
            let uses = magicUses;
            let trads = Object.keys(this.traditions);
            let tradsObj = this.traditions;
            trads.forEach(function(trad){
                tradsObj[trad].forEach(function(spell){
                    if(!uses[spell]){
                        uses[spell] = 0;
                    }
                });
            });
            this._magicUses = uses;
        }
    }
    // Most likely immutable properties
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
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
        return Math.floor(this.health/4);
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
        this._power = value
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
            this._languageList[language] = {
                "readable": false,
                "writable": false
            };
        }
        this._languageList[language]["speakable"] = true;
    }
    addReadableLanguage(language){
        if(!(language in this._languageList)){
            this._languageList[language] = {
                "speakable": false,
                "writable": false
            };
        }
        this._languageList[language]["readable"] = true;
    }
    addWritableLanguage(language){
        if(!(language in this._languageList)){
            this._languageList[language] = {
                "readable": false,
                "speakable": false
            };
        }
        this._languageList[language]["writable"] = true;
    }
    //Professions:
    get professions(){
        return this._professionList;
    }
    addProfession(profession){
        this._professionList[this.professionList.length] = profession;
    }
    //Talents:
    get talents(){
        return this._talents;
    }

    addTalent(type, name, description){
        this._talents[type][name] = description;
    }

    get inventory(){
        return this._inventory;
    }

    get novicePath(){
        return this._novicePath;
    }

    get expertPath(){
        return this._expertPath;
    }

    get masterPath(){
        return this._masterPath;
    }

    get traditions(){
        return this._traditions;
    }

    get magicUses(){
        return this._magicUses;
    }
    useSpell(spell){
        if(Object.getOwnPropertyNames(this.magicUses).includes(spell)){
            this._magicUses[spell] = this._magicUses[spell] + 1;
        }
    }
    restoreUsesSpell(spell){
        if(Object.getOwnPropertyNames(this.magicUses).includes(spell)){
            this._magicUses[spell] = 0;
        }
    }
}

class Human extends Character{
    constructor(name, personality, age, religion, background, size, build, appearance,
        status, professions, paths, inventory, traditions, magicUses){
        super(name, personality, age, religion, background,
            10+status.strength, 10+status.agility, 10+status.intellect, 10+status.will,
            10+status.perception, status.defense || 10, 10+status.health, size, status.speed || 10,
            status.power, status.damage, status.insanity, status.corruption, status.level,
            professions, paths, inventory, traditions, magicUses);
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
    get strength(){
        return super.strength;
    }
    set strength(value){
        super.health = super.health - super.strength + value;
        super.strength = value;
    }
    get agility(){
        return super.agility;
    }
    set agility(value){
        super.defense = super.defense - super.agility + value;
        super.agility = value;
    }
    get intellect(){
        return super.intellect;
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
    constructor(name, personality, trueAge, religion, background, apparentGender, apparentAncestry,
        apparentAge, apparentBuild, apparentAppearence, quirk, status, professions, paths, inventory, traditions, magicUses){  
        super(name, personality, trueAge, religion, background,
            status.strength+9, status.agility+10, status.intellect+10, status.will+10,
            status.perception+11, status.defense || 10, status.health+9,
            status.size || 1, status.speed || 10, status.power, status.damage, status.insanity, status.corruption, status.level,
            professions, paths, inventory, traditions, magicUses);
        
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
    get strength(){
        return super.strength;
    }
    set strength(value){
        super.health = super.health - super.strength + value;
        super.strength = value;
    }
    get agility(){
        return super.agility;
    }
    set agility(value){
        super.defense = super.defense - super.agility + value;
        super.agility = value;
    }
    get intellect(){
        return super.intellect;
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
    constructor(name, personality, age, religion, background, purpose, form, appearance, locationKey, status,
        professions, paths, inventory, traditions, magicUses){  
        super(name, personality, age, religion, background,
            status.strength+9, status.agility+8, status.intellect+9, status.will+9,
            status.perception+9, status.defense || 13, status.health+9,
            status.size || 1, status.speed || 8, status.power, status.damage, status.insanity, status.corruption, status.level,
            professions, paths, inventory, traditions, magicUses);
        
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
    get strength(){
        return super.strength;
    }
    set strength(value){
        super.health = super.health - super.strength + value;
        super.strength = value;
    }
    get intellect(){
        return super.intellect;
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
    constructor(name, personality, age, religion, background, build, appearance, hatred, status,
        professions, paths, inventory, traditions, magicUses){  
        super(name, personality, age, religion, background,
            status.strength+10, status.agility+9, status.intellect+10, status.will+10,
            status.perception+11, status.defense || 9, status.health+14,
            status.size || 0.5, status.speed || 8, status.power, status.damage, status.insanity, status.corruption, status.level,
            professions, paths, inventory, traditions, magicUses);
        
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
    get strength(){
        return super.strength;
    }
    set strength(value){
        super.health = super.health - super.strength + value;
        super.strength = value;
    }
    get agility(){
        return super.agility;
    }
    set agility(value){
        super.defense = super.defense - super.agility + value;
        super.agility = value;
    }
    get intellect(){
        return super.intellect;
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
    constructor(name, personality, age, religion, background, build, distinctiveAppearance, oddHabit, status,
        professions, paths, inventory, traditions, magicUses){  
        super(name, personality, age, religion, background,
            status.strength+8, status.agility+12, status.intellect+10, status.will+9,
            status.perception+11, status.defense || 12, status.health+8,
            status.size || 0.5, status.speed || 10, status.power, status.damage, status.insanity, status.corruption, status.level,
            professions, paths, inventory, traditions, magicUses);
        
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
    get strength(){
        return super.strength;
    }
    set strength(value){
        super.health = super.health - super.strength + value;
        super.strength = value;
    }
    get agility(){
        return super.agility;
    }
    set agility(value){
        super.defense = super.defense - super.agility + value;
        super.agility = value;
    }
    get intellect(){
        return super.intellect;
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
    constructor(name, personality, age, religion, background, build, appearance, status,
        professions, paths, inventory, traditions, magicUses){  
        super(name, personality, age, religion, background,
            status.strength+11, status.agility+10, status.intellect+9, status.will+9,
            status.perception+10, status.defense || 10, status.health+11,
            status.size || 1, status.speed || 12, status.power, status.damage, status.insanity, status.corruption+1, status.level,
            professions, paths, inventory, traditions, magicUses);
        
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
    get strength(){
        return super.strength;
    }
    set strength(value){
        super.health = super.health - super.strength + value;
        super.strength = value;
    }
    get agility(){
        return super.agility;
    }
    set agility(value){
        super.defense = super.defense - super.agility + value;
        super.agility = value;
    }
    get intellect(){
        return super.intellect;
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
    constructor(name, caste, age, religion, personality, background, status,
        professions, paths, inventory, traditions, magicUses){
        super(name, personality, age, religion, background, 
            status.strength+9, status.agility+10, status.intellect+10, status.will+9,
            status.perception+10, status.defense || 12, status.health+9,
            status.size || 1, status.speed || 10, status.power, status.damage, status.insanity, status.corruption, status.level,
            professions, paths, inventory, traditions, magicUses);
        this._caste = caste;
        super.addSpeakedLanguage("Yerath");
        super.addTalent("ancestry", "Braços Extras", "Você tem um segundo par de braços que terminam em mãos. É apenas possível usá-los para carregar objetos pequenos e leves ou para realizar atividades menores. Você também tem como usar seus dedos normalmente. No seu turno, você pode usar uma ação desencadeada para recarregar uma arma.");
        super.addTalent("ancestry", "Voar", "Você pode usar uma ação para desenrolar suas asas. Dessa forma você pode se mover voando até o final da rodada, mas você se move na metade do seu deslocamento. Enquanto suas asas estão desenroladas, jogadas de ataque feitas contra você tem uma dádiva.");
        super.addTalent("ancestry", "Gosma", "Você pode usar uma ação, ou uma ação desencadeada quando você toma dano, para esguichar a sua gosma em um cubo de 1 metro de raio originando de um ponto que você consegue alcançar. Qualquer criatura nesse espaço precisa conseguir um sucesso em um jogada de desafio de força ou ficam desabilitados por uma rodada. Uma vez que você que usar sua gosma, você precisa esperar um minuto antes de você usá-la de novo. Como parte desse talento, você pode usar o cheiro da gosma para comunicar um sentimento para outros yeraths, como medo, raiva, tristeza ou segurança. Qualquer yerath dentro de 5 metros pode sentir essa mensagem.");
    }
    // Getting and setting new ancestry-specific properties:
    get caste(){
        return this._caste;
    }
    set caste(newCaste){
        this._caste = newCaste;
    }
    // Overriding properties setters:
    get strength(){
        return super.strength;
    }
    set strength(value){
        super.health = super.health - super.strength + value;
        super.strength = value;
    }
    get intellect(){
        return super.intellect;
    }
    set intellect(value){
        super.perception = super.perception - super.intellect + value;
        super.intellect = value;
    }
    // New ascentry-specific methods:
    level4(){
        super.defense = super.defense + 1;
        super.health = super.health + 1;
    }
    levelUp(){
        super.level = super.level + 1;
        if(super.level == 4){
            this.level4();
        }
    }
}

function getCharacter(object){
    if(!object.traditions){
        object.traditions = {};
    }
    let paths = {
        novice: object.novicePath,
        expert: object.expertPath || null,
        master: object.masterPath || null
    };
    let characterCreated;
    let keys;
    switch(object.ancestry){
        case "human":
            characterCreated = new Human(object.name, object.personality, object.age, object.religion,
                object.background, object.size, object.build, object.appearance, object.status,
                object.professions, paths, object.inventory, object.traditions, object.magicUses || null);
            keys = Object.keys(object.languages);
            keys.forEach(function(language){
                if(object.languages[language].speakable){
                    characterCreated.addSpeakedLanguage(language);
                }
                if(object.languages[language].readable){
                    characterCreated.addReadableLanguage(language);
                }
                if(object.languages[language].writable){
                    characterCreated.addWritableLanguage(language);
                }
            });
            return characterCreated;
        case "dwarf":
            characterCreated = new Dwarf(object.name, object.personality, object.age, object.religion,
                object.background, object.build, object.appearance, object.hatred, object.status,
                object.professions, paths, object.inventory, object.traditions, object.magicUses || null);
            keys = Object.keys(object.languages);
            keys.forEach(function(language){
                if(object.languages[language].speakable){
                    characterCreated.addSpeakedLanguage(language);
                }
                if(object.languages[language].readable){
                    characterCreated.addReadableLanguage(language);
                }
                if(object.languages[language].writable){
                    characterCreated.addWritableLanguage(language);
                }
            });
            return characterCreated;
        case "changeling":
            characterCreated = new Changeling(object.name, object.personality, object.age,
                object.religion, object.background, object.apparentGender, object.apparentAncestry,
                object.apparentAge, object.apparentBuild, object.apparentAppearance, 
                object.quirk, object.status, object.professions, paths, object.inventory, object.traditions, object.magicUses || null);
            keys = Object.keys(object.languages);
            keys.forEach(function(language){
                if(object.languages[language].speakable){
                    characterCreated.addSpeakedLanguage(language);
                }
                if(object.languages[language].readable){
                    characterCreated.addReadableLanguage(language);
                }
                if(object.languages[language].writable){
                    characterCreated.addWritableLanguage(language);
                }
            });
            return characterCreated;
        case "clockwork":
            characterCreated = new Clockwork(object.name, object.personality, object.age, object.religion,
                object.background, object.purpose, object.form, object.appearance,
                object.locationKey, object.status, object.professions, paths, object.inventory, object.traditions, object.magicUses || null);
            keys = Object.keys(object.languages);
            keys.forEach(function(language){
                if(object.languages[language].speakable){
                    characterCreated.addSpeakedLanguage(language);
                }
                if(object.languages[language].readable){
                    characterCreated.addReadableLanguage(language);
                }
                if(object.languages[language].writable){
                    characterCreated.addWritableLanguage(language);
                }
            });
            return characterCreated;
        case "goblin":
            characterCreated = new Goblin(object.name, object.personality, object.age, object.religion,
                object.background, object.build, object.distinctiveAppearance, object.oddHabit, object.status,
                object.professions, paths, object.inventory, object.traditions, object.magicUses || null);
            keys = Object.keys(object.languages);
            keys.forEach(function(language){
                if(object.languages[language].speakable){
                    characterCreated.addSpeakedLanguage(language);
                }
                if(object.languages[language].readable){
                    characterCreated.addReadableLanguage(language);
                }
                if(object.languages[language].writable){
                    characterCreated.addWritableLanguage(language);
                }
            });
            return characterCreated;
        case "orc":
            characterCreated = new Orc(object.name, object.personality, object.age, object.religion,
                object.background, object.build, object.appearance, object.status,
                object.professions, paths, object.inventory, object.traditions, object.magicUses || null);
            keys = Object.keys(object.languages);
            keys.forEach(function(language){
                if(object.languages[language].speakable){
                    characterCreated.addSpeakedLanguage(language);
                }
                if(object.languages[language].readable){
                    characterCreated.addReadableLanguage(language);
                }
                if(object.languages[language].writable){
                    characterCreated.addWritableLanguage(language);
                }
            });
            return characterCreated;
        case "yerath":
            characterCreated = new Yerath(object.name, object.caste, object.age, object.religion,
                object.personality, object.background, object.status,
                object.professions, paths, object.inventory, object.traditions, object.magicUses || null);
            keys = Object.keys(object.languages);
            keys.forEach(function(language){
                if(object.languages[language].speakable){
                    characterCreated.addSpeakedLanguage(language);
                }
                if(object.languages[language].readable){
                    characterCreated.addReadableLanguage(language);
                }
                if(object.languages[language].writable){
                    characterCreated.addWritableLanguage(language);
                }
            });
            return characterCreated;
        default:
            console.log("Unable to get ancestry character - " + ancestry + " isn't an ancestry");
    }
}

function getCharacterObject(characterToBeObject){
    let newObject = {
        "age": characterToBeObject.age,
        "personality": characterToBeObject.personality,
        "religion": characterToBeObject.religion,
        "background": characterToBeObject.background,
        "name": characterToBeObject.name,
        "professions": characterToBeObject.professions,
        "inventory": characterToBeObject.inventory,
        "traditions": characterToBeObject.traditions,
        "magicUses": characterToBeObject.magicUses
    };
    // Novice Path
    switch(characterToBeObject.novicePath.pathName){
        case "Guerreiro":
            newObject.novicePath = {
                type: "warrior",
                training: characterToBeObject.novicePath.training
            }
            break;
        case "Ladino":
            newObject.novicePath = {
                type: "rogue",
                training: characterToBeObject.novicePath.training,
                choices: characterToBeObject.novicePath.choices
            }
            break;
        case "Mágico":
            newObject.novicePath = {
                type: "magician",
                training: characterToBeObject.novicePath.training
            }
            break;
        case "Sacerdote":
            newObject.novicePath = {
                type: "priest",
                training: characterToBeObject.novicePath.training,
                choices: characterToBeObject.novicePath.choices
            }
            break;
    }
    
    // Expert Path
    if(characterToBeObject.expertPath){
        newObject.expertPath = {
            type: characterToBeObject.expertPath.pathName,
            training: characterToBeObject.expertPath.training
        }
        if(characterToBeObject.expertPath.choices){
            newObject.expertPath.choices = characterToBeObject.expertPath.choices;
        }
    }

    // Master Path

    // Languages
    newObject.languages = characterToBeObject.languages;

    // Ancestry
    if(characterToBeObject instanceof Human){
        newObject.ancestry = "human";
        newObject.size = characterToBeObject.size;
        newObject.appearance = characterToBeObject.appearance;
        newObject.build = characterToBeObject.build;
        newObject.status = {
            strength: characterToBeObject.strength - 10,
            agility: characterToBeObject.agility - 10,
            intellect: characterToBeObject.intellect - 10,
            will: characterToBeObject.will - 10,
            perception: characterToBeObject.perception - 10,
            health: characterToBeObject.health - 10,
            defense: characterToBeObject.defense,
            damage: characterToBeObject.damage,
            size: characterToBeObject.size,
            speed: characterToBeObject.speed,
            corruption: characterToBeObject.corruption,
            insanity: characterToBeObject.insanity,
            level: characterToBeObject.level,
            power: characterToBeObject.power
        }
    }
    else if(characterToBeObject instanceof Dwarf){
        newObject.ancestry = "dwarf";
        newObject.appearance = characterToBeObject.appearance;
        newObject.build = characterToBeObject.build;
        newObject.hatred = characterToBeObject.hatred;
        newObject.status = {
            strength: characterToBeObject.strength - 10,
            agility: characterToBeObject.agility - 9,
            intellect: characterToBeObject.intellect - 10,
            will: characterToBeObject.will - 10,
            perception: characterToBeObject.perception - 11,
            health: characterToBeObject.health - 14,
            defense: characterToBeObject.defense,
            damage: characterToBeObject.damage,
            size: characterToBeObject.size,
            speed: characterToBeObject.speed,
            corruption: characterToBeObject.corruption,
            insanity: characterToBeObject.insanity,
            level: characterToBeObject.level,
            power: characterToBeObject.power
        }
    }
    else if(characterToBeObject instanceof Changeling){
        newObject.ancestry = "changeling";
        newObject.apparentGender = characterToBeObject.apparentGender;
        newObject.apparentAncestry = characterToBeObject.apparentAncestry;
        newObject.apparentAge = characterToBeObject.apparentAge;
        newObject.apparentBuild = characterToBeObject.apparentBuild;
        newObject.apparentAppearence = characterToBeObject.apparentAppearence;
        newObject.quirk = characterToBeObject.quirk;
        newObject.status = {
            strength: characterToBeObject.strength - 9,
            agility: characterToBeObject.agility - 10,
            intellect: characterToBeObject.intellect - 10,
            will: characterToBeObject.will - 10,
            perception: characterToBeObject.perception - 11,
            health: characterToBeObject.health - 9,
            defense: characterToBeObject.defense,
            damage: characterToBeObject.damage,
            size: characterToBeObject.size,
            speed: characterToBeObject.speed,
            corruption: characterToBeObject.corruption,
            insanity: characterToBeObject.insanity,
            level: characterToBeObject.level,
            power: characterToBeObject.power
        }
    }
    else if(characterToBeObject instanceof Clockwork){
        newObject.ancestry = "clockwork";
        newObject.appearance = characterToBeObject.appearance;
        newObject.purpose = characterToBeObject.purpose;
        newObject.form = characterToBeObject.form;
        newObject.status = {
            strength: characterToBeObject.strength - 9,
            agility: characterToBeObject.agility - 8,
            intellect: characterToBeObject.intellect - 9,
            will: characterToBeObject.will - 9,
            perception: characterToBeObject.perception - 9,
            health: characterToBeObject.health - 9,
            defense: characterToBeObject.defense,
            damage: characterToBeObject.damage,
            size: characterToBeObject.size,
            speed: characterToBeObject.speed,
            corruption: characterToBeObject.corruption,
            insanity: characterToBeObject.insanity,
            level: characterToBeObject.level,
            power: characterToBeObject.power
        }
    }
    else if(characterToBeObject instanceof Goblin){
        newObject.ancestry = "goblin";
        newObject.build = characterToBeObject.build;
        newObject.distinctiveAppearance = characterToBeObject.distinctiveAppearance;
        newObject.oddHabit = characterToBeObject.oddHabit;
        newObject.status = {
            strength: characterToBeObject.strength - 8,
            agility: characterToBeObject.agility - 12,
            intellect: characterToBeObject.intellect - 10,
            will: characterToBeObject.will - 9,
            perception: characterToBeObject.perception - 11,
            health: characterToBeObject.health - 8,
            defense: characterToBeObject.defense,
            damage: characterToBeObject.damage,
            size: characterToBeObject.size,
            speed: characterToBeObject.speed,
            corruption: characterToBeObject.corruption,
            insanity: characterToBeObject.insanity,
            level: characterToBeObject.level,
            power: characterToBeObject.power
        }
    }
    else if(characterToBeObject instanceof Orc){
        newObject.ancestry = "orc";
        newObject.appearance = characterToBeObject.appearance;
        newObject.build = characterToBeObject.build;
        newObject.status = {
            strength: characterToBeObject.strength - 11,
            agility: characterToBeObject.agility - 10,
            intellect: characterToBeObject.intellect - 9,
            will: characterToBeObject.will - 9,
            perception: characterToBeObject.perception - 10,
            health: characterToBeObject.health - 11,
            defense: characterToBeObject.defense,
            damage: characterToBeObject.damage,
            size: characterToBeObject.size,
            speed: characterToBeObject.speed,
            corruption: characterToBeObject.corruption - 1,
            insanity: characterToBeObject.insanity,
            level: characterToBeObject.level,
            power: characterToBeObject.power
        }
    }
    else if(characterToBeObject instanceof Yerath){
        newObject.ancestry = "yerath";
        newObject.caste = characterToBeObject.caste;
        newObject.status = {
            strength: characterToBeObject.strength - 9,
            agility: characterToBeObject.agility - 10,
            intellect: characterToBeObject.intellect - 10,
            will: characterToBeObject.will - 9,
            perception: characterToBeObject.perception - 10,
            health: characterToBeObject.health - 9,
            defense: characterToBeObject.defense,
            damage: characterToBeObject.damage,
            size: characterToBeObject.size,
            speed: characterToBeObject.speed,
            corruption: characterToBeObject.corruption,
            insanity: characterToBeObject.insanity,
            level: characterToBeObject.level,
            power: characterToBeObject.power
        }
    }
    
    return newObject;
}


/*
var human = new Human("Harry Potter", "Powerful", 16, "None", "Orphan, wants to kill Voldermort", 1, "Thin and tall", "Dark hair", {
    strength: 2,
    agility: 3,
    intellect: 4,
    will: 3,
    perception: 3,
    defense: null,
    health: 5,
    size: null,
    speed: null,
    damage: 3,
    power: 3,
    insanity: 1,
    corruption: 1,
    level: 5
}, ["Student", "Auror"], {
    novice: {
        type: "magician",
        training: "Hogwarts"
    },
    expert: {
        type: "wizard",
        training: "Hogwarts"
    }
},{
    weapons: {
        "Varinha": {
            type: "À distância",
            damage: "1d3"
        }
    },
    armors: {
        "Invisibility Cloak": {
            defense: 1,
            description: "You become invisible the moment you wear it"
        }
    },
    items: {
        "Livro de transfiguração": {

        },
        "Livro do Príncipe Meio-Sangue": {
            description: "Tem dicas muito úteis para poções, além de feitiços."
        }
    },
    animals: {
        "Hedwig": {
            properties: {
                perception: 12,
                intelligence: 10
            }
        }
    },
    interestingThings: ["Pedra Filosofal"]
}, {
    "Defense Against the Dark Arts": ["Stupefy", "Expelliarmus"]
});


var changeling = new Changeling("Example 2", "Cool", 30, "Dama da noite", "Kidnapped and used for slavor", "female", "orc", 12, "Strong af", "Ugly as hell", "Doesn't have fingernails or hair when changing their form", {
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
});

var clockwork = new Clockwork("Robot 1", "Fluid", 150, "Pai morte", "Came from a rich family", "kill everyone", "great form", "Strange", "Anckle", {
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
});

var dwarf = new Dwarf("Sneezy", "ATCHOU!", 50, "Winter is coming", "Snow white", "Weak", "Sick", "Orcs", {
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
});

var goblin = new Goblin("Greeny", "Angry and sneaky", 15, "Lord Voldemort", "Robbery and assault", "Small", "Big nose", "Speak in lies", {
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
});

var orc = new Orc("Construtor", "Kill.", 21, "None", "You received an education. You know how to read the Common Tongue.", "You are corpulent.", "You are ugly. You have thick tusks jutting from your broad jaw, a sloping forehead, and tiny eyes set deep in your skull.", {
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
});

var yerath = new Yerath("HarleyQuinn", "Soldier", 12, "Herself", "Buzzly", "Bee happy", {
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
});
console.log(human);
console.log(changeling);
console.log(clockwork);
console.log(dwarf);
console.log(goblin);
console.log(orc);
console.log(yerath);
*/
