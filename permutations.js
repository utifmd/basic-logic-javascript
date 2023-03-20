const request = 'xyz'
const response = _operate(request)
console.log(response)

function _operate(params) {
    let output = []
    if (params.length < 2) return output.concat(params)

    for (let i = 0; i < params.length; i++) {
        let char = params[i]
        if (params.indexOf(char) !== i) continue

        let remaining = params.slice(0, i) + params.slice(i + 1, params.length)
        for (let outcome of _operate(remaining)) {
            output.push(char + outcome)
        }
    }
    return output
}