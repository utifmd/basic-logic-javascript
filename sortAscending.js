const request = [9, 3, 8, 1, 5, 6, 7, 2]
const response = _operate(request)
console.log(response)

function _operate(request) {
    for(let i = 0; i < request.length; i++){
        for(let j = 0; j < request.length; j++){
            if(request[i] < request[j]){
                [request[i], request[j]] = [request[j], request[i]]
            }
        }
    }
    return request.join(", ")
}