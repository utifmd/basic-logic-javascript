const request = [1, 7, 5, 6, 2]
const response = _operate(request)
console.log(response)

function _operate(request){
    for(
        let i = 0, j = request.length -1; 
        i < j; 
        i += 1, j -= 1
    ){
        [request[i], request[j]] = [request[j], request[i]]
    }
    return request.join(", ")
}