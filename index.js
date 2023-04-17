import { identityMatrix, zeroMatrix } from './src/apifunc/apifunc.js'
import { Matrix } from './src/matrix.js'

const jsMatrix = {
    Matrix: Matrix,
    identityMatrix :identityMatrix,
    zeroMatrix: zeroMatrix
}

export default jsMatrix