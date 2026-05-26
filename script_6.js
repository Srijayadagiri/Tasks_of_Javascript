// 1.Employee Bonus Filter
// Concept:filter(),map()
//Task: You have employee salaries.
//Find employees whose salary is greater than 300000 and print. "congrats <name>".

 let employees = [
       {name : "John", salrary : 200000},
       {name : "Rahul",salary : 500000},
       {name : "Siva", salary : 700000}
 ]
 let results = employees.filter(emp => emp.salary>300000);
 console.log(results);
 results.map(emp => console.log("Congrats "+emp.name));



//2. Shopping Cart Total
//Concept: reduce()
//Tasks : Calculate total bill amount.

let cart = [1200,3400,500,999]
let totalcartval = cart.reduce((acc,c)=>{
    return acc + c;
},0)
console.log(totalcartval);

// 3. Login Username Formatter
//Concept:slice(),toUpperCase()
//Task:Convert first letter into capital.

let user = "naveen";
let firstletter = user.slice(0,1).toUpperCase();
let remainingletter = user.slice(1,user.length);
console.log(firstletter + remainingletter);

// 4.OTP Checker
//Concept: includes()
//tasks:Check whether OTP contain number 0.

let OTP = "560890";
if(OTP.includes("0")){
    console.log("Valid OTP");
}
else{
    console.log("Invalid OTP");
}

//Food Delivery App
//Concept:push(),pop()
//Task: Add new order and remove delivered order.

let orders = ["burger","pizza"]
orders.push("shawarma");
console.log(orders);
console.log(orders.pop());
console.log(orders);

//6.Attendence Checker
//concept:every()
//Tasks: Check whether all students passed.

let marks = [40,50,70,80];
let passmarks = marks.every((c) => {
    return c >= 35;
})
console.log(passmarks);

// 7. Find VIP Customer
//Concept:find()
//Task: Find first customer whose purchaseis greater than 10000.

let customer = [
    {name : "Arun", purchase:5000},
    {name : "Vijay", purchase:15000},
    {name : "Surya", purchase:25000}
]
let customer_purchase = customer.find((c)=>{
    return c.purchase > 10000;
})
console.log(customer_purchase.name);

//8.Reverse Chat Message
//Concept:split(),reverse(),join()
//Tasks:Reverse the message.

let message = "hello";
let array = message.split("");
console.log(array);
let reversed_array = array.reverse();
let join_result = reversed_array.join("");
console.log(join_result);

// 9.Remove Duplicate Product
//Concept:indexof()
//Task:Find position of mobile.

let products = ["tv","laptop","mobile","watch"]
console.log(products.indexOf("mobile"));

//10.Student Rank Sort
//Concept:sort()
//Task: Sort marks ascending order.

let marks1 = [99,45,12,67,89];
let ascending_marks = marks1.sort((l,h)=>{
    return l-h;
})
console.log(ascending_marks);

// 11.Movie Search
//Concept: some()
//Task: Check whether "Leo" movie exists.

let movies = ["Jailer","Leo","Vikram"];
let fav_movie = movies.some((c)=>{
    return c === "Leo";
})
console.log(fav_movie)

// 12. Hide Mobile Number
//Concept:slice()
//Tasks:Show only last 4 digits.

let num = "6383366774";
console.log(num.slice(6,10));

// 13. Online Exam Result.
// Concept: ternary operator
//task:if mark >= 35 "pass" else "fail".

let mark = 78;
let result = mark >= 35 ? "Pass" : "Fail";
console.log(result);

// 14. Cab Booking Price.
//Concept: Function,return.
//Tasks: Create function for total fare.

function cab_booking(){
    let basefare = 100;
    let extraKM = 50;
    let Total_fare = basefare + extraKM;
    return Total_fare;
}
console.log(cab_booking());

// 15. Instagram Hashtag Generator
// Concept:replaceAll()
//Task : Convert spaces into_

let tag = "Web developer";
console.log(tag.replaceAll("Web developer","Web_developer"));

// 16. NetflixKids Content
//Concept: filter()
//Task:Get only movies below age 18.

let movie =[
    {name :"A", age:13},
    {name :"B", age:18},
    {name :"c", age:10}
]
let only_movies = movie.filter((c)=>{
    return c.age<18;
})
console.log(only_movies);

// 17.E-commerce Product Search.
//Concept: startswith()
//Tasks:Check whether product starts with "i".

let product = "iphone";
console.log(product.startsWith("i"));

//18. Whatsapp Group Names
// Concept: For Each()
//Task: Print all group names with numbering.

let groups = ["office","friends","family"];
let result1 = groups.forEach((group,index)=>{
    console.log(index + 1 +" " +group);
})

// 19.Salary Highest finder
//Concept: reduce()
//Tasks:Find Highest Salary.

let salary = [20000, 50000,70000,10000]
let HighestSalary = salary.reduce((max,c)=>{
    return c > max ? c : max;
},salary[0]);
console.log(HighestSalary);

//20.Password Security Checker
//Concept:length,includes()
//Task:Password should:-contain@,minimum 8 characters.
let password = "navi@123";
let password_length = password.length>=8;
let password_includes = password.includes("@");
if(password_length && password_includes){
    console.log("Strong Password");
}
else{
    console.log("Weak Password");
}