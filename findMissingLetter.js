// const request = ['a','b','c','d','f']
const request = ['O','Q','R','S']
const response = _operate(request)
console.log(response)

function _operate(params) {
    let output = ''
    for (
        let i = params[0].charCodeAt(0), j = 0; 
        i <= params[params.length -1].charCodeAt(0); 
        i++, j++
    ) {
        output = String.fromCharCode(i)
        if (output !== params[j]) break
    }
    return output
}