class BaseError{
    constructor() {
        this.statement = "There is something wrong with your code, please check the source file"
    }
}

export class TypeError extends BaseError{
    constructor(avaliableType, realType) {
        super()
        this.avaliableType = avaliableType
        this.realType = realType
        this.print = this.print.bind(this)
    }

    print(){
        console.log(this.statement)
        return "TypeError: expected type " + this.avaliableType + ". But get " + this.realType
    }
}


