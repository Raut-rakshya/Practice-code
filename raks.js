//1. find the sum of the even number from the array of input numbers from user. 

const prompt = require("prompt-sync")({ sigint: true });
num = new Array(50);
num = prompt(`Enter the numbers?`);
let sum = 0;
for(let i = 0; i < num.length; i++)
    {
       if(parseInt(num[i]) % 2 === 0){
       sum = sum + parseInt(num[i]);
       } 
       }
    console.log(`The sum of input is: ${sum}`);




//2. Given the array [3, 4, 5, 6, 7, 8, 2, 1, 10], find the sum of the even number from the array.

 let arr=[3,4,5,5,7,8,2,1,0];
 sum=0;
 for(i=0;i<arr.length;i++)
   {
   if(parseInt(arr[i]) % 2 == 0){
       sum = sum + parseInt(arr[i]);
 }
}
console.log(`The sum of even numbers is: ${sum}.`);



//3. Display the name & age of each people using map
//const students = [
  // { name: "Alice", age: 20 },
   //{ name: "Bob", age: 22 },
   //{ name: "Charlie", age: 21 },
   //{ name: "David", age: 19 }
//];

const students = [
   { name: "Alice", age: 20 },
   { name: "Bob", age: 22 },
   { name: "Charlie", age: 21 },
   { name: "David", age: 19 }
];
students.map((info) =>{
   console.log(`Name: ${info.name}, Age:${info.age}`);
})



//4. const randomNumbers = [18, 5, 42, 37, 9, 25, 14, 33, 20, 8]; Given the array, multiply each element by 2 and display the output on the console.

const randomNumbers = [18, 5, 42, 37, 9, 25, 14, 33, 20, 8];
for (i=0;i<randomNumbers.length;i++){
   console.log(randomNumbers[i] + " * 2 = " + randomNumbers[i]*2);
}

//OR
const randomNum = [18, 5, 42, 37, 9, 25, 14, 33, 20, 8];
print= randomNumbers.map((element,index) => {
return (randomNum[index] + " * 2 = " + randomNum[index]*2);
}
)
console.log(print);


//5. Write a JavaScript program to construct the following pattern.
	
//*  
//* *  
//* * *  
//* * * *  
//* * * * *  




let abc="";
for(i=0;i<5;i++)
   {
      console.log(`${abc}*`);
      abc= abc + "*";
   }