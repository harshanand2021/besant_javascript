// let, var and const identifiers
let num = 50 // global scope varriable
function add(){
    let x = num + 50 // block scoped varriable
    console.log("Value of x = ",x)
}
add()

//values defined with var identifier can be reinitialized and
//can be redifined
var r = 67 // value can be reinitailized and redifined
var r = 24
//const indentifier is used to define constant values
//these values can neither be redefined nor reinitialized
const pi = 3.14 // constant value and cannot be updated
function area(){
    var ar = pi*r*r
    console.log("Area = ",ar)
}
area()

let x = 7

//values defined with let identifier
//can be reinitialized but not redefined
function mult(){
    x = 5
    let m = x*5
    console.log(m)
}
mult()

//functions with return statement
function average(x,y,z){
    let avg = (x + y + z)/3
    return avg
    console.log("Hello") // after return statement all execution is ignored
}
let av = average(10,40,60)
console.log("Average of 3 = ",av)

let marks = 70

// ternary operator
marks > 60 ? console.log("Grade A") :
marks >=50 && marks <=60 ? console.log("Grade B") :
console.log("Grade C")