const request = [':)', ';(', ';}', ':-D']
const response = _operate(request)
console.log(response)

function _operate(params) {
    let output = 0, 
        validSimley = ";D :D ;~D :~D ;-D :-D ;) :) ;~) :~) ;-) :-)"
    for (let i = 0; i < params.length; i++) {
        if(validSimley.includes(params[i])) continue
        output += 1
    }
    return output
}
function _operateA(params) {
    return params.reduce((prev, current) => {
        if (current.match("-D")) prev += 1
        return prev
    }, 0)
}