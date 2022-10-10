
Array.prototype.associateWith = function (associateWith) {

   let obj = {}

    for (let i  = 0 ; i < this.length ; i++) {
         obj += associateWith(this[i])

    }

    return obj 
}
  





let numbers = ["one", "two", "three", "four"]
console.log(numbers.associateWith( str => str.length ))

// { one: 3, two: 3, three: 5, four: 4}