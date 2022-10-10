
function Spy(obj, method) {
    
    let spyvar = {count : 0 }
    obj[method] = function() {spyvar.count++}

    return obj
    
  }


var spy = Spy(console, 'error')

console.error('calling console.error')
console.error('calling console.error')
console.error('calling console.error')

console.log(spy.count) // 3