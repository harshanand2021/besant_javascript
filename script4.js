//reverse method
let ar = [10,56,78,43,19,76]
console.log("Array = ",ar)
console.log("Reversed Array = ",ar.reverse())

//reverse method
let str = ['Ramu','Shyam','Narendra','Jitendra','Ajay']
console.log("String Array = ",str)
console.log("Reversed String Array = ",str.reverse())

// set method
let num1 = [145,67,145,78,9,9,100,90,45,12,67]
console.log("Unique elements from array = ",[...new Set(num1)])

//filter method
let filter1 = num1.filter((item,i,array) => array.indexOf(item)===i)
console.log("Filtered item: ",filter1)

let filter2 = num1.filter((i)=>i%2 === 0)
console.log("Even numbers = ",filter2)

let filter3 = num1.filter((i)=>i%2 !== 0)
console.log("Odd Numbers = ",filter3)

//map()
num1.map((data,index) => console.log("data: ",data,"index: ",index))