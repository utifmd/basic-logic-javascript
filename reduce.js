const request = [5, 4] // 240
const response = _operateDiv(request)
console.log(response)

function _operateSum(params) {
    let output = 0;
    for (let i = 0; i < params.length; i++) {
        output += params[i]
    }
    return output
}
function _operateSubtract(params) {
    let output = params[0];
    for (let i = 0; i < params.length; i++) {
        if (i === 0) continue
        output -= params[i]
    }
    return output
}
function _operateDiv(params) {
    let output = params[0];
    for (let i = 0; i < params.length; i++) {
        if (i === 0) continue
        output /= params[i]
    }
    return output
}
function _operateMultiple(params) {
    let output = params[0];
    for (let i = 0; i < params.length; i++) {
        if (i === 0) continue
        output *= params[i]
    }
    return output
}