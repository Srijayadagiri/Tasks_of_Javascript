//1.Student Login Check .Ask username and password using prompt().
//if username="admin" and password="1234"
//print"login success" else print "invalid User".
let username = prompt("Enter username:");
let password = prompt("Enter password:");
if (username === "admin" && password ==="1234")
{
    console.log("Login success");
}
else{
    console.log("Invalid User");
}

//2.ATM Balance System. Create a variable balance=5000
//-Withdraw amount using prompt()
//-if amount less than balance "Withdraw Success"
//-else "Insufficient Balance".
let balance = 5000;
let withdrawamount = prompt("Enter withdrawal amount:");
if (withdrawamount <= balance){
    console.log("Withdraw Success");
}
else{
    console.log("Insufficient Balance");
}

//3.Traffic Signal Project. Using Switch
//-"red"-stop
//-"Yellow"-ready
//-"Green"-go
let trafficsignal = "yellow";
switch (trafficsignal){
    case "red": console.log("stop");
    break;
    case "yellow": console.log("ready");
    break;
    case "green": console.log("go");
    break;
}

//4.Age Eligible Checker.Take age from user.
//-age>=18 Eligible for vote
//-else Not Eligible
let age = prompt("Enter your age:");
if(age >=18){
    console.log("Eligible for vote");
}
else{
    console.log("Not Eligible");
}

//5.Shopping Discount System. Take product Price.
//-above 5000 20% discount
//-above 3000 10% discount
//-else no discount
let Price = prompt("Enter product price:");
if(Price >5000){
    console.log("20% discount");
}
else if(Price > 3000){
    console.log("10% discount");
}
else {
    console.log("No discount")
}

//Password strength checker.Check password length.
//-length >=8 Strong password
//-else Weak password
let password1 = prompt("Enter your password1:");
if(password1.length >=8){
    console.log("Strong Password");
}
else{
   console.log("Weak Password"); 
}

//7.Mobile Battery Wraning.Take battery percentage.
//- <=10 Battery low
//- <=50 Battery medium
//else battery Full
let battery_per= "46";
if(battery_per <= 10){
    console.log("Battery low");
}
else if(battery_per <= 50){
    console.log("Battery medium");
}
else{
  console.log("Battery full");
}

//8.Employee Salary Bonous.Create salary variable.
//-salary >= 50000 15% bonous
//-salary >=30000 10% bonous
//-else 5% bonous
let salarybonous = 45000;
if(salarybonous >= 50000){
    console.log("15% bonous");
}
else if(salarybonous >=30000){
    console.log("10% bonus");
}
else{
    console.log("5% bonous");
}

//9.Online Food Order. Take order amount.
//-above 499 Free delivery
//-else Delivery Charge added
let oreder_amount= prompt("Enter order amount");
if(oreder_amount > 499){
    console.log("Free Delivery");
}
else{
    console.log("Delivery charge Added");
}

//10.Movie Ticket Booking. Take age
//-Below 5 Free ticket
//-Below 18 Child ticket
//-Else Adult ticket
let M_age = prompt("Enter your age for Booking Ticket:");
if(M_age < 5){
    console.log("Free Ticket");
}
else if(M_age < 18){
    console.log("Child Tickte");
}
else{
    console.log("Adult Ticket");
}

//11.Instagram Likes Counter. Using for loop.
//Print:
//Like 1
//like 2
//like 3
//like 4
//like 5
for(let l=1; l<=5; l++){
    console.log("Like",l);
}

//12.Countdown Timer. Using while loop.
//print:
//5
//4
//3
//2
//1
//start
let count=5;
while(count >0 ){
    console.log(count);
    count--;
}
console.log("Start");

//13.OTP Verification. Create OTP=1234
//Take input from user.
//correct OTP Verified
//wrong Inavlid OTP
let OTP = 1234;
let user_OTP = prompt("Enter OTP:");
if(user_OTP == OTP){
    console.log("OTP Verified");
}
else{
    console.log("Inavliad OTP");
}

//14.E-commerce cart Total
//Array: Let cart=[200,500,1000,300]
//Find total cart value using loop.
let cart = [200,500,1000,300];
let total_cart_value = 0;
for(let i=0; i<cart.length; i++){
    total_cart_value += cart[i];
}
console.log("Total Cart Value:", total_cart_value);

//15.Student Mark Grade System. Take Mark.
//-90+ A Grade
//-70+ B Grade
//50+ C Grade
//-else Fail
let mark = 75;
if(mark>90){
    console.log("A Grade");
} 
else if(mark>70){
    console.log("B Grade");
}
else if(mark>50){
    console.log("C Grade");
}
else{
    console.log("Fail");
}

//16.Netflix Subscription Checker. Boolean Variable:
//-true Watch Movie
//-false Buy Subscription
let subscription = true;
if(subscription){
    console.log("Watch Movie");
}
else{
    console.log("Buy Subscription");
}

//17.Product Stock Checker.let stock = 0.
//stock>0 "Product Available"
//else "out of Stock".
let stock = 5;
if(stock > 0){
    console.log("Product Available");
}
else{
    console.log("Out of stock");
}

//18.Weather App Condition. Using Switch.
//-sunny Go outside
//rainy Take Umberella
//cold Wear Jacket
let weather = "rainy";
switch(weather){
    case "sunny" : console.log("Go outside");
    break;
    case "rainy" : console.log("Take Umbrella");
    break;
    case "cold" : console.log("Wear Jacket");
    break;
}

//19.User Profile object.Create Object:
//let user= {
//name : "navi",
//age : 20,
//city : "Bangalore"
//}
//Print Values using for in loop
let user_profile = {
    name : "navi",
    age : 20,
    city : "Bangalore"
}
for(let a in user_profile){
    console.log(user_profile[a]);
}

//20.WhatApp Chat Array.Array:
//let chats = ["hi","hello","where are you","0k"]
//print each message using for of loop.
let chats = ["hi","hello","where are you","ok"]
for(var a of chats){
    console.log(a);
}
