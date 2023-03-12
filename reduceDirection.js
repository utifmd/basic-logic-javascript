// const request = ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]
// const request = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
// const request = ["EAST","EAST","WEST","NORTH","WEST","EAST","EAST","SOUTH","NORTH","WEST"]

const request = ["NORTH", "WEST", "SOUTH", "EAST"]
const response = _operate(request)
console.log(response)

function _operate(params) {
    var opposite = {
        'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'
    };
    return params.reduce((current, next) => {
        current[current.length -1] !== opposite[next]
        ? current.push(next)
        : current.pop()

        return current;
    }, []);
}

function _operateX(params) {
    let output = [], vertical = 0, horizon = 0
    
    if (params.every((_, i) => params[i] !== params[i +1]) && params.length % 4 === 0) return params
    for (let i = 0; i < params.length; i++) {
        switch (params[i]) {
            case "NORTH":
                vertical += 1
                break;
            case "SOUTH":
                vertical -= 1
                break;
            case "EAST":
                horizon += 1
                break;
            case "WEST":
                horizon -= 1
                break;
        }
    }
    if (horizon < 0) output.push("WEST")
    if (horizon > 0) output.push("EAST")
    if (vertical > 0) output.push("NORTH")
    if (vertical < 0) output.push("SOUTH")
    
    // for (let i = 0; i < output.length; i++) {
    //     params.lastIndexOf(output[i]) > params.lastIndexOf(output[i +1])
    // }
    return output//.sort((a, b) => params[a] - params[b])
}