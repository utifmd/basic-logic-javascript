// const request = "The quick brown fox jumps over the lazy dog.";
const request = "This is not a pangram.";
const response = _operate(request)
console.log(response)

function _operate(request) {
    let output = ""
    let data = request.toLowerCase()
    let alphabeth = "abcdefghijklmnopqrstuvwxyz"

    for (let i = 0; i < alphabeth.length; i++) {
        if(i <= alphabeth.length) output = false
        if(!data.includes(alphabeth[i])) break
        output = true
    }
    return output
}

function _operateA(request) {
    let data = request.toLowerCase()
    let alphabeth = "abcdefghijklmnopqrstuvwxyz".split("")

    return alphabeth.every(letter => data.includes(letter))
}