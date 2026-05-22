//1.Smart Attendance Checker
//Concept: if else,logical operator,function
//Scenario:A student can enter exam hall only if: -attendance >= 75,-fees paid == True
//Expected: Allowed for Exam otherwise NOt Allowed.

function AttendanceChecker(attendance,fees_paid){
if (attendance >= 75 && fees_paid === "true"){
    console.log("Allowed for Exam");
}
else{
    console.log("Not Allowed for Exam");
    }
 }
   AttendanceChecker(80,"true");
   AttendanceChecker(64,"true");
//2. Mobile Password Strength Checker.
//Concept: string, conditions
//Requirements: Check Password: minimum 8 Characters, should contain number,should contain uppercase.

function PasswordStrength(password){
    let MinLength = password.length >= 8;
    let Number = /\d/.test(password);
    let Uppercase = /[A-Z]/.test(password);
    if(MinLength && Number && Uppercase){
        console.log("Strong Password");
    }
    else{
        console.log("Weak password");
    }
} 
  PasswordStrength("XYZA4567");
  PasswordStrength("JKL346");

//3.Find Second Largest Number
//Concept:loop,conditions,variable
//Input:[10,50,80,20,90,70]
let array = [10,50,80,20,90,70];
 let largest = array[0];
 let SecondLargest = array[0];

for(let i=0; i<array.length; i++){
    if(array[i] > largest){
        SecondLargest = largest;
        largest = array[i];
    }
    else if (array[i] > SecondLargest && array[i] < largest){
         SecondLargest = array[i];
    }
}
 console.log(SecondLargest);


// 4. Bus Seat Booking System
//Concept: Array,loop,conditions
//Requirement:-Create 10 Seats
let seats = [false,false,true,false,false,true,false,false,true,false]; 
function Book_Seat(SeatNumber){
    if(SeatNumber < 1 || SeatNumber > 10){
        console.log("Invalid Seat Number");
    }
    if(seats[SeatNumber - 1] == true){
        console.log("Seat Already Booked");
    }
    else{
        seats[SeatNumber - 1] = true;
        console.log("Seat Booked Successfully");
    }
} 
  Book_Seat(6);
  Book_Seat(5);

// 5.ATM cash withdraw logic.
//Concept: -function, -return, -conditions.
//Rules: balance = 10000,user cannot withdraw morethan balance,minimun balance should maintain 1000
  let balance = 10000;
  function Withdraw_Cash(amount){
    if(amount > balance){
        return "Transcation failed due to insufficient balance.";
    }
    else if (amount <= 1000) {
        return "Transcation failed due to insufficient balance.";
    }
    else{
        balance = balance-amount;
        return "Transcation Succesfull ${amount}."
    }
  }
        console.log(Withdraw_Cash(18000));
        console.log(Withdraw_Cash(6000));
        console.log(Withdraw_Cash(200));

//6.Product Search Engine
//Concept: array, for of , String methods
//Requrirements : Search product from array.
let array1 = ["readmi","realme","samsung","iphone","oppo"];
function Search_Eng(product){
    for (let a of array1){
        if(a.toLowerCase() === product.toLowerCase()){
        console.log( "Product found");
        return;
        }
    else{
    console.log("No Product was found.");
}
}
}
  Search_Eng("Realme");
  Search_Eng("iphone 14");

//7.Voting Eligibility System.
//Concept: nested if,logical operator.
//Rules: age>=18, has voter id, citizen = Indian.

function Voting_Eligibility(age, id, citizen){
        if(age >= 18 && id === "Voterid" && citizen === "Indian"){
            console.log("Eligible for Vote.");
        }
        if(age < 18){
            console.log("Not eligible to Vote.");
        }
        if(citizen !== "Indian"){
            console.log("Not eligible to vote.");
        }
        if(id !== "Voterid"){
            console.log("Not Eligible to vote.");
        }
} 
    Voting_Eligibility(20,"Voterid","Indian");
    Voting_Eligibility(17,"Voterid","Indian") ;

// 8.Online Food Oreder Bill.
//Concept: Function, Parameters, Arithmetic operators.
//Requriment: Calclulate-Food Price, GST,Delivery charge,discount.
function Food_order(Food_price,GST,delivery_Charges,discount){
    let Totalbill = Food_price + GST + delivery_Charges - discount;
    console.log("Food Price: " +Food_price);
    console.log("GST: " +GST);
    console.log("Delivery Charges: " +delivery_Charges);
    console.log("Discount:" +discount) ;
    console.log("ToatalBill: " +Totalbill );  
}
 Food_order(800,59,10,20);

//9.Reverse Word Without reverse()
//Concept: loop,string.
//Input : JavaScript.
let str= "JavaScript";
let reverse = "";
     for (let i = str.length - 1;i >= 0; i--){
        reverse += str[i];
     } 
  console.log(reverse);

//10.Mini Instagram Like System
//concept: Variable,function, ternary operator
//Requrirement: When user clicks like: Liked❤️ else Like🤍 also mention Total likes count.
let TotalLikes = 50;
let Liked = false;
function Insta_Like(){
    Liked = !Liked;
    TotalLikes = Liked ? TotalLikes + 1 : TotalLikes -1;
    let statusText = Liked ? "Liked ❤️" : "Like 🤍";
    console.log("status:", statusText);
    console.log("Total Likes:", TotalLikes);
}
    Insta_Like();
    Insta_Like();
