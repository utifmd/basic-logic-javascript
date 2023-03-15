const lastRequest = new Date(2016, 6, 13)
const todayRequest = new Date(2016, 7, 16)
const cycleLengthRequest = 35

const response = _operate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28)
console.log(response)

function _operate(last, today, cycle) {
    return Math.floor((today - last) / (24 * 3600 * 1000)) > cycle
}