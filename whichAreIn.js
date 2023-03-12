
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// a1 = ["live", "strong", "arp"]
a1 = ["arp", "live", "strong"]
// a1 = ["tarp", "mice", "bull"]
// a1 = ["xyz", "live", "strong"]

const response = _operate(a1, a2)
console.log(response)

function _operateA(client = [], server = []) {
    return client.filter(clt => 
        server.find(srv => srv.match(clt))
    ).sort()
}

function _operate(client, server) {
    let output = []
    for (let i = 0; i < client.length; i++) {
        for (let j = 0; j < server.length; j++) {
            if (!server[j].match(client[i])) continue
            if (output.includes(client[i])) continue 
            output.push(client[i])
        }
    }
    output.sort()
    return output
}