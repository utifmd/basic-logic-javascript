const request = "aku suka bootcamp sentul OK city"
const response = _operate(request)
console.log(response)

function _operate(params) {
    const data = params.split(" ")
    let output = data[0]
    for (let i = 0; i < data.length; i++) {
        if (output.length > data[i].length) output = data[i]
    }
    return output
}