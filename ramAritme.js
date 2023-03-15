const request = 7
const response = _operate(request)

console.log(response)

function _operate(params) {
    let output = ""
    for (let i = 1; i < params * 50; i *= 2) {
        output += `${i}GB `
    }
    return output
}