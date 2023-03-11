const request = 'The sunset sets at twelve o\' clock.';
// const response = _operateLetterPosition(request)
const response = _operate()
console.log(response)

function _operateLetterPosition(params) {
    let output = []
    const alphabeth = _operate()
    const data = params.replace(/[^a-zA-Z]/gm, "").toLowerCase()
    for(let i = 0; i < data.length; i++){
        output.push(alphabeth.indexOf(data[i]) +1)
    }
    return output.join(" ");
}
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