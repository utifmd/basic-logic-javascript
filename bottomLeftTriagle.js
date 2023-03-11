const request = 5
const response = _operate(request)
console.log(response)

function _operate(params) {
    let output = ""
    for (let i = 0; i < params; i++) {
        for (let j = 0; j < i; j++) {
            output += " * "
        }
        output += " * "
        output += "\n"
    }
    return output
}