const request = 42
const response = _operate(request)
console.log(response)

function _operate(params) {
    let /*output = "", */j = 1, result = 0
    for (let i = 0; i < params * 2; i++) {
        for (let k = 0; k < i; j += 2, k++) {
            if (i === params) result += j
            // output += ` ${j}`
        }
        // output += i !== 0 ? `, ` : ''
    }
    // console.log(result)
    return result
}