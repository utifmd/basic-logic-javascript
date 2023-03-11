const request = 10
const response = _operate(request)
console.log(response)

function _operate(params) {
    let output = 0 
    const data = params.toString(2)
    for (let i = 0; i < data.length; i++) {
        if(data[i] === '1') output += 1
    }
    return output
}