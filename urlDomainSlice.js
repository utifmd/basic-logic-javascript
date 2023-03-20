const request = "http://github.com/carbonfive/raygu\nhttp://www.zombie-bites.com\nhttps://www.cnet.com\nhttps://google.com/images/picture-1.png\nhttp://www.purge.com/images/picture-1.png\nhttp://m.purge.com/images/picture-1.png\nwww.xakep.com\nmmbeiazptd8sv5955.org/index.php"
const response = _operate(request)
console.log(response)

function _operate(params) {
    let regex = /.+\/\/|www\.|m\.|\..+/g
    params = params.replace(regex, '')
    return params
}