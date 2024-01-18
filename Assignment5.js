let num = 70 //Global scope

function add(){
    let x = num + 20 //Local scope
    console.log("Value of X = ",x)
}
//calling the function
add()

//declaring the varriable with var
var k = 236
console.log("Value of k = ",k)
//now we redefine it
var k = 200
console.log("Redefined value of k = ",k)
//we can redefine the varriable with var

let side = 7
//function with return statement
function parameter(){
    let par = 4*side
    return par
}
//now we call the function
let p = parameter()
//returned value is stored in p
console.log("Parameter = ",p)

//now we use const declaration
const pi = 3.14
//implementing in the function
function volume(){
    let r = 8;
    let vol = 4/3*pi*(r*r*r)
    return vol
}
let v = volume()
console.log("Volume of sphere = ",v)

//implementing ternary operator
let year = 2024
year%4==0 ? console.log("Leap Year") :
console.log("Normal Year")