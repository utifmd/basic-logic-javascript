//UDDDUDUU
const request = ["U", "D", "U", "D", "U", "D", "U", "U"]
const response = _operate(request)
console.log(response)

function _operate(params) {
    let seaLevel = 0
    return params.reduce((current, next) => {
        switch (next) {
            case "U":
                seaLevel += 1
                if(seaLevel === 0) current["valley"] += 1
                break;
            case "D":
                seaLevel -= 1
                if(seaLevel === 0) current["mountain"] += 1
                break;
            default:
                break;
        }
        return current
    }, { mountain: 0, valley: 0 })
}