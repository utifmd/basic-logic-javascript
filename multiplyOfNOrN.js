const request = 10
const response = _operate(request)
console.log(response)

function _operate(params) {
    let output = 0
    for (let i = 1; i < params; i++) {
        if (i % 3 !== 0 && i % 5 !== 0) continue
        output += i
    }
    return output
}