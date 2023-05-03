import { zeroMatrix } from "../apifunc/apifunc.js"
import { Matrix } from "../matrix.js"


var a = new Matrix([[2, 3, 5], [1, 8, 9]])
var b = new Matrix([[1, 8, 2], [1, 8, 9]])

console.log(a.minus(b))

