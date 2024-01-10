let arr = ["India", 110, 102.45, true];
console.log(arr);

let arr1 = new Array(10, 56.23, false, "Besant");
console.log("arr1 = ", arr1);

//for loop iteration in array
for (let index = 0; index < 4; index++) {
  console.log("arr[index] = ", arr[index], "index = ", index);
}

//push() method
let color = ["yellow", "orange", "red", "green"];
color.push("grey");
console.log(color);

//pop() method
color.pop();
console.log(color);

//splice()
let fruit = ["mango", "banana", "apple", "watermelon"];
console.log("Fruits = ", fruit);
let x = fruit.splice(0, 1, "pear")
console.log(x);

//indexOf()
let month = ["jan", "feb", "mar", "april", "may", "jun"];
console.log(month.indexOf("jan"));

//sort()
console.log(month.sort());
console.log(month.sort((a, b) => a - b));

let num = [90, 57, 200, 0];
console.log(num.sort((a, b) => a - b));

//reduce
let x1 = [5, 10, 4, 3];
console.log(x1.reduce((acc, item) => acc + item, 0));
