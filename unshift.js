const request = ["A", "B", "C", "D", "E", "F", "G", "H"]
const response = _operate(request)

console.log(response)

function _operate(params = []) {
    const savedLast = params[params.length -1]
    const savedLastLeft = params[params.length -2]
    for (let i = params.length; i > 0; i--) {
        if (i === params.length) continue
        params[i] = params[i -2]
    }
    params[0] = savedLastLeft
    params[1] = savedLast
    return params
}

function _operateA(params = []) {
    params.unshift(params[params.length -2], params[params.length -1])
    params.pop()
    params.pop()
    return params
}