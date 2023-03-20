const request = 3
const response = _operate(request)
console.log(response)

function _operate(params) {
    let output = params
    for (let i = params; i > 0; i--) {
        if(i === params) continue
        output *= i
    }
    return output
}