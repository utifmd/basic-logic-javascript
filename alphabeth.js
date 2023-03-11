const response = _operate()
console.log(response)

function _operate() {
    let output = ""
    for (
        let i = 'a'.charCodeAt(0); 
        i <= 'z'.charCodeAt(0); 
        i++
    ) {
        output += String.fromCharCode(i)
    }
    return output
}