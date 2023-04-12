import { Matrix } from "../matrix.js"

export function identityMatrix(n) {
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