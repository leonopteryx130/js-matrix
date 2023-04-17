import { zeroMatrix } from "../apifunc/apifunc.js"
import { Matrix } from "../matrix.js"

var a = new Matrix([[2, 7], [1, 2], [5, 1]])
var b = new Matrix([[7, 7], [1, 3], [9, 1]])
console.log(a)
console.log(b)
console.log(a.add(b))