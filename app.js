// chapter 1

alert("hello world");
alert("Error! Please enter a valid password");
alert("Welcome to js land... \n Happy coding")

var msg = ("Hello... I can run JS through browser developer console")
console.log(msg)

// chapter 2

var username = ("...")
var myname = ("ahmed")
var message = ("hello world")
alert(message)

var namee = +prompt("enter your name")
var age = +prompt("enter your age")
var course = +prompt("course name")
alert(namee)
alert(age)
alert(course)

var email = ("example@example.com")
alert("my email address is " + email)

var book = ("A smarter way to learn jawascript")
alert("I am trying to learn from the book " + book)

document.getElementById("jspara").innerHTML = "yah i can write html through jawascript"

var design = ("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”")
alert(design)

// chapter 3

var age = prompt("enter your age")
alert(age)

var birth = +prompt("enter birth year")
document.getElementById("birthpara").innerHTML = ("My birth year is" + birth + "\nData type of my declared variable is number")

var visname = prompt("visitor's name")
var title = prompt("product title")
var quantity = +prompt("Quantity?")
document.getElementById("order").innerHTML= ( visname + " ordered " +    quantity  +  title + " on xyz clothing store ")

// chapter 4

var first = ("eye")
var second = ("nose")
var third = ("head")

// legal:
var first = ("eye")
var second2 = ("nose")
var third3rd = ("head")
var first$ = ("leg")
var $second = ("hand")

// illegal
var 123 = ("head")
var 3third = ("head")
var $* = ("head")
var var = ("head")
var +prompt = ("head")

// chapter 5

var first = +prompt("maths")
var second = +prompt("eng")
var total = first + second

document.getElementById("order").innerHTML=(" The sum of " + first + " and " + second + " is " + total)

var first = +prompt("maths")
var second = +prompt("eng")
var total = first - second

document.getElementById("order").innerHTML=(" The subtraction of " + first + " and " + second + " is " + total)

var first = +prompt("maths")
var second = +prompt("eng")
var total = first * second

document.getElementById("order").innerHTML=(" The multiplication of " + first + " and " + second + " is " + total)

var first = +prompt("maths")
var second = +prompt("eng")
var total = first / second

document.getElementById("order").innerHTML=(" The division of " + first + " and " + second + " is " + total)


var value = +prompt("enter no 5")
document.getElementById("order1").innerHTML=("initial value is " + value)
var value = ++value
document.getElementById("order2").innerHTML=("value after increment is " + value)
var value = 7 + value
document.getElementById("order3").innerHTML=("value after addition is " + value)
var value = --value
document.getElementById("order4").innerHTML=("value after decrement is " + value)
var value = value/3
document.getElementById("order5").innerHTML=("the reminder is " + value)

var ticketprice = (600)
var quantity = +prompt("no of tickets")
var totalcost = ticketprice * quantity
document.getElementById("ticket").innerHTML=("total cost to buy " + quantity + " tickets is " + totalcost)

for (var t = 1; t<11; t++)
console.log(" 2 x " + t + " = " + t*2 )

var celcius = +prompt("enter temp")
var fer = (celcius * 9/5) + 32
document.getElementById("temperature").innerHTML=(celcius + "C is " + fer + "F")

var item1 = +prompt("price of item 1")
var item2 = +prompt("price of item 2")
var quan1 = +prompt("quantity of item 1")
var quan2 = +prompt("quantity of item 2")
var shipping =(200)
var total = (item1 * quan1 + quan2 * item2 + shipping)
document.getElementById("total").innerHTML=("total amount is " + total)

var US = (10)
var saudi = (25)
var pakistani = (US * 104.80 + saudi * 28)
document.getElementById("currency").innerHTML=("total currency is " + pakistani)

var no = (15)
var cal = (((no + 5) * 10 ) /2)
alert(cal)

// chapter 6 to 9

var a = +prompt("enter no")
console.log(a)

var a = ++a
console.log(a)

var a = a++
console.log(a)

var a = --a
console.log(a)

var a = a--
console.log(a)

var a = (2)
var b = (1)
var result = --a - --b + ++b + b--
console.log(result)

var username = prompt("enter your name")
document.getElementById("username").innerHTML=("hello " + username + " how are you")

var number = +prompt("enter any no");
for (i=1; i<=11; i++){
    document.getElementById("multi").innerHTML= (number + "x" + i + "=" + (number*i))
}

var sub1 = prompt("enter first subject")
var sub2 = prompt("enter second subject")
var sub3 = prompt("enter third subject")
var total = 100
var mark1 = +prompt("enter marks of sub1")
var mark2 = +prompt("enter marks of sub2")
var mark3 = +prompt("enter marks of sub3")
var percentage = (mark1 + mark2 + mark3)/300 *100
console.log(percentage)

// chapter 9 to 11

var city = prompt("enter city name")
if(city == karachi){
    alert ("Welcome to city of lights")
}

var gender = prompt("enter your gender")
var male = true
if (gender == male) {
    male = true
}
if (male == true) {
    document.getElementById("gend").innerHTML = ("Good Morning Sir")
} else if(male==false) {
    document.getElementById("gend2").innerHTML = ("Good Morning mam")
    
}
var gender = prompt("enter gender")
if (gender ==male){
    alert("good morning sir")
} else{
    alert("good morning mam")
}

var light = prompt("traffic light color")
var red = ("must stop")
var yellow = ("ready to move")
var green = ("move now")
if(light >= red){
    alert(red)
}else if(light >= yellow){
    alert(yellow)
} else if(light >= green){
    alert(green)
}

var petrol = prompt("petrol in liters")
if(petrol <= 0.25){
    alert("please refuel the tank")
}else{
    alert("have much fuel")
}

var a = 4
if (++a === 5){
    alert("true")
}

var b = 82
if(b++ === 83){
    alert("false")
}

var c = 12
if(c++ ===13){
    alert("true")
}

var i = 500
var j = 1000
var t = i + j
if(t === j + i){
    alert("equal")
}

// chapter 12 to 13

var hour = +prompt("enter hour")
if(hour<=12){
    alert("good morning")
}else {
    alert("good day")
}

// chapter 17 to 20

var a = ["0", "1", "2", "3"]
var b = ["1", "0", "1", "2"]
var c = ["2", "1", "0", "1"]
console.log(a)
console.log(b)
console.log(c)

for(var i=0; i<10; i++){
console.log(i)
}

var tableno = +prompt("enter table no")
for(var i=1; i<11; i++){
    console.log(tableno + " x " + i + " = " + (tableno*i))
}

for(var i=1; i<16; i++){
    console.log(i)
}

for(var j=10;j>0; j-=1){
    console.log(j)
}

for(var l=0;l<16; l+=2){
    console.log(l)
}

for(var k=1;k<16; k+=2){
        console.log(k)
    }

for(var m =2;m<16; m+=2){
console.log(m+"k")
}

var a = ["tomato", "potato", "chilli", "grapes","orange", "banana", "mango", "apple"]
var b = prompt("enter item you want")
var itemfound = false

for(var i=0; i<a.length; i++){
    if(b==a[i]){
        itemfound=true;
        break;
    }
}
if(itemfound==true){
    alert(b + " is available")
}else{
    alert("not available")
}




























































