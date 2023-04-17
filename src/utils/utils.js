export function CheckArray(arr) {
    /*
    通用方法：
    判断输入arr是否是一个由数字组成的数组
    */

    return arr instanceof Array?arr.every((item) => {
        return typeof item === 'number'
    }): false
}

export function matrixAdd(matrixA, matrixB) {
    /*
        数据形式的矩阵相加，输入为两个同shape的数组，不需要数据类型和shape验证
    */
   var result = []
   for(let i in matrixA) {
        result.push([])
        for(let j in matrixA[i]){
            result[i].push(matrixA[i][j] + matrixB[i][j])
        }
    }
    return result
}