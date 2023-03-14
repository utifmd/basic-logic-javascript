const request = [':)', ';(', ';}', ':-D']
const response = _operate(request)
console.log(response)

function _operateA(params) {
    let output = 0, 
        validSimley = ";D :D ;~D :~D ;-D :-D ;) :) ;~) :~) ;-) :-)"
    for (let i = 0; i < params.length; i++) {
        if(validSimley.includes(params[i])) continue
        output += 1
    }
    return output
}
function _operate(params) {
    return params.reduce((prev, current) => {
        if (/^[;:][~-]?[D)]$/.test(current)) prev += 1
        return prev
    }, 0)
}