import {TypeError} from './error.js'

class Vector{

}

class Matrix{
    constructor(arr) {
        this._validation(arr)
        this.arr = arr
    }

    _validation(arr) {
        /* 
        验证输入是否为期望的数据类型（Array<Array>）

        Validate parameters is of the expected type(Array<Array>) or not
        */
        if(arr instanceof Array){
            arr.map((item, index) => {

            })
        }else{
            const err = new TypeError('Array<Array>', typeof(arr))
            console.log(err.print())
        }
    }

    _shape() {
        var shape = []
        if(this.arr instanceof Array) {

        }
    }

}

var data = new Matrix('3')
