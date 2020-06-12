class Path{
    constructor(training, pathType){
        this._training = training;
        this._pathType = pathType;
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
}

class Magician extends Path{
    constructor(training, attributes, languages, academicArea){
        
    }
}