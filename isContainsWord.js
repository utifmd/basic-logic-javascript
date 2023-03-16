const request = "aku suka javascript"
const response = _operate(request, "k")
console.log(response)

function _operate(params, regex) {
    let output = false
    for (let i = 0; i < params.length; i++) {
        if (params[i] === regex){
            output = true
            break
        }
    }
    return output
}