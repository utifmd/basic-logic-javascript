const request = 7
const response = _operate(request)

console.log(response)

function _operate(params) {
    let output = ""
    for (let j = 1, i = 0; i <= params; j *= 2, i++) {
        output += `${j}GB `
    }
    return output
}