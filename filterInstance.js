const request = [1,2,'a','b']
const response = _operate(request)
console.log(response)

function _operate(list) {
  // Return a new array with the strings filtered out
  let output = []
  for(let i in list){
    if (typeof(list[i]) === 'string') continue
    output.push(list[i])
  }
  return output
}