import {TypeError} from './error.js'
import { CheckArray } from './utils/utils.js'

class Vector{

}

class Matrix{
    constructor(arr) {
        this.varlidation = this._validation(arr)
        this.arr = arr
    }

    _validation(arr) {
        /* 
        验证输入是否为期望的数据类型（Array<Array>）

        Validate parameters is of the expected type(Array<Array>) or not
        */
        if(arr instanceof Array){
            var subArrayLength = null //一个中间量，用于记录子数组的长度，初始化为null，遍历第一个主数组时候会赋值
            var result = arr.every((item) => {
                /*
                遍历数组每个元素，如果都是由数字组成的array
                */
                if(subArrayLength === null) {
                    //遍历第一个主数组的时候会保存长度，其后每个子数组都必须和第一个数组长度一样
                    subArrayLength = item.length
                    return true && CheckArray(item)
                }else {
                    //如果子数组和第一个数组的长度一样，并且是由数字组成的Array，那么久返回true
                    return item.length === subArrayLength && CheckArray(item)
                }
            })
            if(!result) {
                //如果不满足条件则抛出错误
                const err = new TypeError()
                throw err.customized('Check the subArray must be Arrays consisted of numbers\nEach subArray must have the same length')
            }
        }else{
            const err = new TypeError()
            throw err.structured('Array<Array>', typeof(arr))
        }
    }

    _shape() {
        var shape = []
        if(this.arr instanceof Array) {

        }
    }

}

var data = new Matrix([[1, 2], [3, 8]])
