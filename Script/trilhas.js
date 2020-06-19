class Path{
    constructor(training, pathType, talents){
        this._training = training;
        this._pathType = pathType;
        this._talents = talents;
    }
    get training(){
        return this._training;
    }
    set training(newTraining){
        this._training = newTraining;
    }
    get pathType(){
        return this._pathType;
    }
    set pathType(pathType){
        this._pathType = pathType;
    }
    get talents(){
        return this._talents;
    }
    addTalent(name, talent){
        this._talents[name] = talent;
    }
    modifyTalentName(previousName, newName){
        if(previousName in Object.keys(this._talents)){
            this._talents[newName] = this._talents[previousName];
            delete this._talents[previousName];
            return true;
        } else{
            return false;
        }
    }
    modifyTalent(name, talent){
        if(name in Object.keys(this._talents)){
            this._talents[name] = talent;
            return true;
        } else{
            return false;
        }
    }
    deleteTalent(name){
        if(name in Object.keys(this._talents)){
            delete this._talents[name];
            return true;
        } else{
            return false;
        }
    }
}

class Warrior extends Path{
    constructor(training){
        
    }
}
