//UDDDUDUU
const request = ["U", "D", "U", "D", "U", "D", "U", "U"]
const response = _operate(request)
console.log(response)

function _operate(params) {
    let seaLevel = 0
    return params.reduce((prev, current) => {
        switch (current) {
            case "U":
                seaLevel += 1
                if(seaLevel === 0) prev["valley"] += 1
                break;
            case "D":
                seaLevel -= 1
                if(seaLevel === 0) prev["mountain"] += 1
                break;
            default:
                break;
        }
        return prev
    }, { mountain: 0, valley: 0 })
}