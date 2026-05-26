// 1.Spread operator
//Create 2 arrays:
//Using spread operator -merge both arrays,-Print the merged array.

let frontEnd = ["HTML","CSS"];
let backEnd = ["Node","MongoDB"];
let Merge = [...frontEnd, ...backEnd];
console.log(Merge);

// 2. Copy array
//Create Array:
// Using spread operator: 
// -Copy array into another variable,-Add 4 into copied array,-Print both arrays,-Check original array changed or not.
 
let original = [1,2,3];
let newArray = [...original];
newArray.push(4);
console.log(original);
console.log(newArray);

// 3. Object Merge
// Create 2 objects:
// Using spread operator:-merge objects,print results.

let student1 = {
   name : "Rahul"
}
let student2 = {
   role : "Developer"
}
let studentDetails = {...student1,...student2};
console.log(studentDetails);

// 4. Rest Operator
//Create Function:
//Tasks:-Print a,print b, print remaining values,-Print total count of remaining values.

function Totalvalues(a,b,...rest){
    console.log("a", a);
    console.log("b", b);
    console.log("Remaining Values:" ,rest);
    console.log("Total count of remaining:",rest.length);
}
Totalvalues(12,23,34,45,56,67,78,89)

// 5. Array destructuring
// Create array
//Tasks:-Store all values into separate variables using destructuring,-Print only blue color

let colors = ["red","green","blue","yellow"];
let [c1,c2,c3,c4] = colors;
console.log(c3);

// 6. Nested Array Destructuring
//Create Array
//Tasks:-Access all values using destructuring only,-print

let data = [1,[2,[3,[4]]]];
let[d1,[d2,[d3,[d4]]]] = data;
console.log(d1,d2,d3,d4);

// 7. Object Destructuring
// Create object
//Tasks: Destructuring all properties,-Print

let mobile = {
brand : "Samsung",
price : 20000,
color : "black"
}
let{brand, price, color} = mobile;
console.log(brand, color);

//8.puch() and pop()
//create Array:
//Tasks:-add 4,5,6 using push,-Remove last value using pop,-Print final array

let numbers = [1,2,3]
numbers.push(4,5,6,7,8,9);
console.log(numbers);
numbers.pop()
console.log(numbers);

// 9.shift() & unshift
//create Array
//Tasks:-Add "apple" in firstPosition,-Remove first Value,-Print final result.

let fruits = ["banana","orange"]
fruits.unshift("apple");
console.log(fruits);
fruits.shift();
console.log(fruits);

//10.splice()
//Create array
//Tasks- Remove 30 and 40,-Add 3and 4, print final array

let arr = [1,2,30,40,5,6];
arr.splice(2,2,3,4);
console.log(arr);

// 11.concat()
// Create 2 arrays:
// Tasks: -Merge using concat,-Add extra values 5,6,-Print result.

let a = [1,2];
let b = [3,4];
let array = a.concat(b,5,6);
console.log(array);

// 12. slice()
//Create Array
//Tasks : Extract only 30,40,50,-print extracted array

let marks = [10,20,30,40,50,60];
let extract_marks = marks.slice(2,5);
console.log(extract_marks);

// 13.Flat()
//Create Array
//Tasks:Convert nested array into single array,-print result.

let nest = [1,[2,[3,[4,[5]]]]]
let nested_flat = nest.flat(Infinity);
console.log(nested_flat);

// 14.fill()
//Create array
//Tasks-Replace last 2 values with "done",-Print array

let arr_f = [1,2,3,4,5];
arr_f.fill("done",3);
console.log(arr_f);

// 15.include()
//Create Array
//Tasks:-check 20 exists or not,-check 100 exists or not

let values = [10,20,30,40]
console.log(values.includes(20));
console.log(values.includes(100));

//16.indexof()
//Create array
//Tasks:-Find first index of 3,-Find firstindex of 2.

let arr_i = [1,2,3,4,3,2];
console.log(arr_i.indexOf(3));
console.log(arr_i.indexOf(2));

// 17.LastIndexof()
//Using Same array
//Tasks:-Find last index of 3, Find last index of 2.

console.log(arr_i.lastIndexOf(3));
console.log(arr_i.lastIndexOf(2));

// 18.sort()
//Create Array
//Task - sort array,-Observe wrong output,-Then solve using compare function

let nums = [100,2,55,1,9]
console.log(nums.sort());

console.log(nums.sort((a,b) => {a-b}));

// 19. reverse()
//Create array
//Tasks:-Reverse array,-Print output.

let letters = ["a","b","c","d"]
console.log(letters.reverse());

//20. Student Management
//Create Student array
//tasks:add new student,Remove one student,Replace one student name,Reverse student list.

let students = ["Rahul","Ajay","Kumar"];
students.push("Vinay");
console.log(students);
students.splice(1,1);
console.log(students);
students.splice(1,1,"Ram");
console.log(students);
console.log(students.reverse());

// 21.Shopping Cart
//Create array
//Tasks:-add "laptop",Remove "watch",Check "phone" exists or not,-Print total cart items

let cart = ["Shoes","Watch","Phone"];
cart.push("Laptop");
console.log(cart);
cart.splice(1,1);
console.log(cart);
console.log(cart.includes("Phone"));
console.log(cart);

// 22. Employee Database
//Create object
// Tasks: Destructure all values,-copy object using spread operator,-change salary in copied object only,-check original object changed or not.

 let employee = {
   name : "Naveen",
   role : "Web Developer",
   salary : "5LPA"
 }
 let{name,role,salary} = employee;
 console.log(name,role,salary);
 let employee2 = {
     name1 : "Vishnu",
     role1 : "Frontend Developer",
     salary1 : "7LPA"
 }
 let employees = {...employee,salary:"7LPA"};
 console.log(employees);
 console.log(employee);

 // 23.Custom functions
 // Create Function
 //Taks:-Print employee name,-Print all skills,-print total skill count
  
 function company(name,...skills){
   console.log("Name:", name);
   console.log("skills:", skills);
   console.log("skill count:", skills.length);
 }
company("Naveen","HTML","CSS","JS","React");

// 24.Array Analyzer
// Create array:
// Tasks:-Extract first 5 values,Reverse array,Check number 7 exists or not,Find index of 10

let data1 = [1,2,3,4,5,6,7,8,9,10];
 let firstfive = data1.slice(0,5);
 console.log(firstfive);
 console.log(data1.reverse());
 console.log(data1.includes(7));
 let index = data1.indexOf(10);
 console.log(index);

 // 25.Complete Challenge.
 // Create object
 //Tasks:-Add new user,-Remove Last user,merge another array of users,-Print all user names only,
 // -Reverse final array.

 let users = [
   {name:"Rahul",role : "Developer"},
   {name:"Ajay",role : "Designer"},
   {name:"Kumar",role : "Tester"}
 ];
 users.unshift({name : "Vinay",role : "Manager"});
 console.log(users);
 console.log(users.pop());
 let newUsers = [
  {name : "Suresh", role :"web Developer"},
  {name : "Anil" , role : "Intern"}
 ];
 let Allusers = [...users,...newUsers];
 console.log(Allusers);
 console.log(Allusers.map(user => user.name));
 console.log(Allusers.reverse());


