//sum of array using reduce method
let ar = [10,50,53,24,67,112]
console.log(ar.reduce((acc,item) => acc + item,0))

//check for leap year in the array
let year = [2004,2006,2012,2014,2016,2022,2020,2008,2002]
let leapyear = year.filter((i)=>i%4===0)
console.log(leapyear)

//map function
let fruits = ['Apple','Banana','Mango','Pear','Lichi','Pomogranete']
fruits.map((data,index) => console.log("data: ",data,"index: ",index))