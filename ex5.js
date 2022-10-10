function checkUsersValid(goodUsers) {

let result = true

return function(user) {

let good = goodUsers.map (x => x.id)
let users = user.map(x => x.id)


users.forEach(element => {
      let find = good.find(anotherE => anotherE == element)
     if(find == undefined) {result = false }

});
   

return result

}
    

}




var goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
 ]
 
 // `checkUsersValid` is the function you'll define
 var testAllValid = checkUsersValid(goodUsers)


 
 console.log(testAllValid([
    { id: 2 },
    { id: 1 }
 ]))
 // => true
 
 console.log(testAllValid([
    { id: 2 },
    { id: 4 },
    { id: 1 }
 ]))
 // => false