import { Matrix } from "../matrix.js"

function identityMatrix(n) {
    /*
    创建n维的单位矩阵
    */
    var result = []
    for(let i=0; i<n; i++) {
        var arr = new Array(n)
        arr.fill(0)
        arr = arr.map((_, index) => {
            return index === i?1:0
        })
        result.push(arr)
    }
    return new Matrix(result)
}

function zeroMatrix(n, m) {
    /*
    创建全零矩阵
    */
    var arr = _fullXArray(0, [n, m])
    return new Matrix(arr)
}

function oneMatrix(n, m) {
    /*
    创建全1矩阵
    */
    var arr = _fullXArray(1, [n, m])
    return new Matrix(arr)
}

function _fullXArray(x, [n, m]) {
    /*
    创建值全为x的矩阵，可以指定矩阵shape，n为行，m为列
    接口暂不开放
    */
    var result = []
    for(let i=0; i<n; i++) {
        var arr = new Array(m)
        arr.fill(x)
        result.push(arr)
    }
    return result
}

export {
    identityMatrix,
    zeroMatrix,
    oneMatrix
}