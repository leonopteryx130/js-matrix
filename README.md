# yq-jsmatrix

### **Introduction：**
This tool is used to create matrix in Javascript, this package is in developing, more functions will be developed, more details in github.

### **Install：**
```
npm i yq-jsmatrix
yarn add yq-jsmatrix
```

### **Quick Start：**

**Create Object：**

You can use new key words to create a Matrix class, parameter of Matrix is an array which has two layers, the basic elements must be numbers, if it contains others type will report error.

The static function in Matrix will inspect the shape of Matrix, each lines must have the same length or will report error.
```
import jsMatrix from 'yq-jsmatrix'

const arr = [[1, 3], [8, 7]]
var myMatrix = new jsMatrix.Matrix(arr)
```
If you want to get the transposed matrix, you can try:
```
myMatrix.transpose()
```

**api functions**

Package supplied some apis for developers to create Matrix more convenient. 

You can try:
```
var zerosMatrix = jsMatrix.zeroMatrix(3, 4)
```
This api create a matrix function filled with zeros, parameters stand for the shape you expected.

result:
```
Matrix {
  matrix: [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ],
  shape: [ 3, 4 ]
}
```
You can also try ```oneMatrix()``` to create a matrix filled with ones by the same method. And ```identityMatrix()``` api allows you to create an identity matrix.

