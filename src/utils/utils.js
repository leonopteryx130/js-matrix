import { zeroMatrix } from "../apifunc/apifunc.js"

function matrixAdd(matrixA, matrixB) {
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

function matrixMinus(matrixA, matrixB) {
    /*
        数据形式的矩阵相加，输入为两个同shape的数组，不需要数据类型和shape验证
    */
   var result = []
   for(let i in matrixA) {
        result.push([])
        for(let j in matrixA[i]){
            result[i].push(matrixA[i][j] - matrixB[i][j])
        }
    }
    return result
}

function matrixTranspose(matrix) {
    /*
    数组形式的矩阵转置
    */
    const M = matrix.length
    const N = matrix[0].length

    //这么写运行效率会受一定影响
    let res = zeroMatrix(N, M).matrix
    
    for(let i=0;i<M;i++){
        for(let j=0;j<N;j++){
            res[j][i] = matrix[i][j]
        }
    }
    return res
}

export {
    matrixAdd,
    matrixMinus,
    matrixTranspose
}