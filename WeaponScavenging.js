/**
 * Weapon Scavenging
 *
 * Array 2 dimensi yang diberikan merupakan asumsi jumlah daerah yang ada
 *
 * Officer Rick mencari senjata - senjata yang dia dapat dari daerah yang dia lewati dan bertujuan untuk 
 * mendapatkan sebanyak mungkin dari total energi yang dia milik.
 *
 * Senjata yang di cari berupa kode seperti berikut :
 * R : Revolver
 * H : Handgun
 * S : Shotgun
 * Jika dia menemukan jenis lain atau barang lain maka di abaikan.
 *
 * Contoh :
 * [
 *      ["#","#","S","#","H","#","R"],
 *      ["X","#","#","A","R","H","S"],
 *      ["R","#","K","#","?","S","H"]
 * ]
 *
 * Test Case I
 * Energi : 21
 * Result :
 * [
 *      ["Revolver",3], ["Handgun",3], ["Shotgun",3]
 * ]
 *
 * Test Case II
 * Energi : 7
 * Result :
 * [
 *      ["Revolver",1], ["Handgun",1], ["Shotgun",1]
 * ]
 *
 * RULES : Tidak boleh menggunakan built in function!!
 * Kecuali: .push()
 */

const request = [
    ["#","#","S","#","H","#","R"],
    ["X","#","#","A","R","H","S"],
    ["R","#","K","#","?","S","H"]
]
// const response = _operate(request, 21)
const response = _operate(request, 7)

console.log(response)

function _operate(params, energy) {
    let output = {}
    for (let i = 0; i < params.length; i++) {
        for (let j = 0; j < params[i].length; j++) {
            energy--
            if (params[i][j] !== 'H' && params[i][j] !== 'R' && params[i][j] !== 'S') continue
            if (energy < 0) continue
            output[params[i][j]] = params[i][j] ? i +1 : 1
        }
    }
    let result = []
    for(let item of Object.entries(output)){
        let left = item[0] === 'R' ? 'Revolver' : item[0] === 'H' ? 'Handgun' : 'Shotgun'
        result.push([left, item[1]])
    }
    return result
}