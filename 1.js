/**
 * Toko "Sj Dia"
 *
 * Toko "Si Dia" merupakan toko online yang menyediakan barang-barang keperluan "si dia". 
 * Vincent selaku pemilik toko tersebut ingin mengurutkan nilai dari yang terkecil hingga terbesar.
 *
 * Contoh :
 * let prices = [19, 5, 42, 2, 77]
 * Hasil yang di harapkan -> [2, 5, 19, 42, 77]
 *
 * DIRECTIONS
 * ------------
 * Buatlah sebuah function yang memiliki 1 parameter prices berupa array. 
 * Lalu urutkan value dalam array dengan menggunakan teknik Bubble Sort (atau bebas juga boleh).
 *
 * RULES : Tidak boleh menggunakan built in function!!
 * Kecuali: .push(), .pop(), dan semua Math
 * */

const request = [19, 5, 42, 2, 77]
const response = _operate(request)

console.log(response)

function _operate(params) {
    for (let i = 0; i < params.length; i++) {
        for (let j = 0; j < params.length; j++) {
            if(params[i] > params[j]) continue

            [params[i], params[j]] = [params[j], params[i]]
        }
    }
    return params
}