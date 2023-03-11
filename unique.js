const request = 'AAAABBBCCDAABBB'
// const request = [1,2,2,3,3]
const response = _operate(request)
console.log(response)

function _operate(params) {
    let output = []
    for (let i = 0; i < params.length; i++) {
        if(params.indexOf(params[i]) !== i) continue
        output.push(params[i])
    }
    return output
}