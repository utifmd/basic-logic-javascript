const request = [10, 3, 5, 6, 2]
const response = _operate(request)
console.log(response)

function _operate(numbers){
    let output = []
    for (let i = 0; i < numbers.length; i++) {
        let item = 1
        instanceof int
        for (let j = 0; j < numbers.length; j++) {
            if(j === i) continue
            item *= numbers[j]
        }
        output.push(item)
    }
    return output;
}