class BaseError{
    constructor() {
        /*
        待添加：
        获取报错信息位置的方法
        */
        this.statement = "Error: There is something wrong with your code, please check the source file"
    }
}

export class TypeError extends BaseError{
    constructor() {
        super()
        this.header = "TypeError: " //标识错误类型
        this.structured = this.structured.bind(this)
        this.customized = this.customized.bind(this)
    }

    structured(avaliableType, realType) {
        /*
        结构化输出
        */
        console.error(this.statement)
        return this.header + "expected type " + avaliableType + ". But get " + realType
    }

    constructorError(typeName) {
        console.error(this.statement)
        return this.header + "parameters expected to an instance of " + typeName + "constructor"
    }

    customized(message) {
        /*
        自定义输出
        */
        console.error(this.statement)
        return this.header + message
    }
}


export class ShapeError extends BaseError {
    constructor() {
        super()
        this.header = "ShapeError: " //标识错误类型
        this.structured = this.structured.bind(this)
        this.customized = this.customized.bind(this)
    }

    structured(expectedShape, realShape) {
        /*
        结构化输出
        */
        console.log(this.statement)
        return this.header + "expected shape " + expectedShape + ". But get " + realShape
    }

    customized(message) {
        /*
        自定义输出
        */
        console.error(this.statement)
        return this.header + message
    }
}

