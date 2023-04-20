# yq-jsmatrix

### **Introduction：**
This tool is used to create matrix in Javascript, this package is in developing, more functions will be developed, more details in github.

### **Install：**
```
npm i yq-jsmatrix
yarn add yq-jsmatrix
```

### **Document：**

**Create Object：**

You can use new key words to create a Matrix class, parameter of Matrix is an array which has two layers, the basic elements must be numbers, if it contains others type will report error.
```
import jsMatrix from 'yq-jsmatrix'

const arr = [[1, 3], [8, 7]]
var myMatrix = new jsMatrix.Matrix(arr)
```
