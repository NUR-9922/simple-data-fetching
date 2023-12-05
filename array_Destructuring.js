// let arr = ["nuralam",'mondal'];
// let [name,mondal,age = 118] = arr;
// console.log(arr);
// console.log(name,mondal,age);

// ignoring element
// let arr = ["nuralam",'mondal','age - 18'];

// const [name,, age] = arr;
// console.log(name,age);


 let arr = ["nuralam",'mondal','age - 18'];

 const[fName,lName,...etc] = arr

 console.log(fName,lName,etc);