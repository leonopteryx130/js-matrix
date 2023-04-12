export function CheckArray(arr) {
    /*
    通用方法：
    判断输入arr是否是一个由数字组成的数组
    */

    return arr instanceof Array?arr.every((item) => {
        return typeof item === 'number'
    }): false
}