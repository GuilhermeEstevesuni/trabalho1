
function validateProperty(obj, propValidator) {
    let result = false

    for (let prop in obj) 
      if ( Object.keys(obj).find(key => key == propValidator.name)) {
        
          propValidator.validators.forEach(element => { 

            result = element( obj[`${prop}`])
        
        } )
         
      }
  
    
  
  return result
  
  }


function validateProperties(obj, propValidators) {

    let array = propValidators.filter( key => validateProperty(obj,key) == false )

    //propValidators.map(key => { if(!validateProperty(obj , key)) array.push(obj)} )

    return array.map(key => key.name)

}

Object.prototype.validateProperties3= function(propValidators){ return validateProperties(this,propValidators)}

const validator = {name : "p1" , validators: [s => typeof s == 'string' && s.length > 2, s => s[0]=="a"]  }
const obj1 = { p1 : "abc" }
const obj2 = { p2 : 123 }
const obj3 = { p1 : "a" , p2 : 123 }

console.log(validateProperty(obj1, validator) )//true
console.log(validateProperty(obj2, validator) )//false
console.log(validateProperty(obj3, validator)) //false


const validators = [
  {
  name : "p1" , validators: [s => typeof s == 'string' && s.length > 2, s => s[0]=="a"] 
  },
  {
  name : "p2" , validators: [s => Number.isInteger(s)] 
  }
]
const obj11 = { p1 : "a" }
const obj22 = { p1 : 123  }
const obj33 = { p1 : "abc" , p2 : 123 }

console.log(validateProperties(obj11, validators) )// ["p1", "p2"]
console.log(validateProperties(obj22, validators) )// ["p1", "p2"]
console.log(validateProperties(obj33, validators) )// []




