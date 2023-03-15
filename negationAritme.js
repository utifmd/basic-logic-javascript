const request = 25
const response = _operate(request)

console.log(response)

function _operate(params) {
    let output = ''
    for (let i = 0; i < params; i++) {
        const item = Math.round((i +1) / 2)
        output += i % 2 !== 0 ? `${item}` : `-${item}`
        
        if (i < params -1 && i !== 3 && i !== 13 && i !== 19) output += ','
    }
    return output
}