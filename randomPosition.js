const request = 5
const response = _operate(request)

console.log(response)

function _operate(params) {
    let output = '', threshold = params
    for (let i = 100; i < 900; i++) {
        if (i % 10 !== params) continue
        if (threshold < 0) break

        output += `${i} `
        threshold--
    }
    return output
}