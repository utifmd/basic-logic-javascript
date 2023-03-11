const request = 5
const response = _operate(request)
console.log(response)

function _operate(params) {
    let output = ""
    for (let i = params -1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            output += "   "
        }
        for (let j = params -1; j > i; j--) {
            output += " * "
        }
        output += " * "
        output += "\n"
    }
    return output
}