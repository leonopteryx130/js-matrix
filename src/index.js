class Vector{

}

class Matrix{
    constructor(arr) {
        this._validation(arr)
        this.arr = arr
    }

    _validation(arr) {
        if(arr instanceof Array){
            return
        }else{
            const err = new Error('TypeError: Parameters of Matrix must be an Array<Array>')
            console.log(err)
        }
    }

    _shape() {
        var shape = []
        if(this.arr instanceof Array) {

        }
    }

}

var data = new Matrix('3')
