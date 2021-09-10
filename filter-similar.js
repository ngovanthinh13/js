var obj1 = {1 : "Hello", 2: "World"};   
var obj2 = { 3 : "Welcome", 4: "to"};  
var obj3 = { 5 : "javaTpoint"}   
    
// Using Object.assign()   
var final_obj = Object.assign(obj1, obj2, obj3);   
console.log(final_obj);  

var final_obj_2 = {...obj1, ...obj2, ...obj3};  
console.log(final_obj_2);  

Object.keys(final_obj).map(el=> console.log("liệt kê phần tử trong object: ",final_obj[el]))

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f', 'a', 'b'];
const array3 = array1.concat(array2);

  console.log("mảng sau khi nối: ",array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
array3.map(el => console.log(el))
let colors = new Set(array3);  
console.log(colors);  
