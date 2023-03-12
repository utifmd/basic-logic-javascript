const request = "recede" // "success" // "din"
const response = _operate(request)
console.log(response)

// console.log(`data ${params[i]} | index of ${params.indexOf(params[i])}`)
// output.splice(output.indexOf(params[i]), 1, ')')

function _operate(request) {
    let output = []
    const data = request.toLowerCase()
    for (let i = 0; i < data.length; i++) {
        if (data.indexOf(data[i]) !== i){
            output.push(')')
            output[data.indexOf(data[i])] = ')'
            continue
        }
        output.push('(')
    }
    return output.join("")
}