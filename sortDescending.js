const request = [9, 3, 8, 1, 5, 6, 7, 2]
const response = _operate(request)
console.log(response)

function _operate(params) {
    for (let i = 0; i < params.length; i++) {
        for (let j = 0; j < params.length; j++) {
            if (params[i] > params[j]){
                [params[i], params[j]] = [params[j], params[i]]
            }
        }
    }
    return params.join(", ")
}