const request = 5
const response = _operate(request)

console.log(response)

function _operate(params) {
    let output = ''
    for (let i = 1; i <= params; i++) {
        for (let j = 0; j < i; j++) {
            output += '1'
        }
        output += i < params ? ', ' : ''
    }
    return output
}

function _operateA(params) {
    let output = ''
    for (let i = 1; i <= params; i++) {
        output += `1`.repeat(i) // Array(i +1).join('1')
        output += i >= params ? ` ` : ', '
    }
    return output
}