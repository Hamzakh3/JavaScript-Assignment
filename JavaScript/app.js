function toTitleCase(a) {
    if(a[0] === ' ' || a[0] === undefined){
        alert('Removing Extra Spaces')
    }
    else {
        a = a[0].toUpperCase() + a.slice(1).toLowerCase()
    }
    return a;
}

// ------------------------ Chapter 1 ---------------------------------
function greeting() {
    alert("Hello Thanks For Visit our Website")
}

function jsAlert() {
    alert("Error! Please enter a valid password")
}
function jsWelcomeAlert() {
    alert("Welcome to JS land... \nHappy Coding!")
}
function sequenceAlert() {
    alert("welcom to JS land.")
    alert("Happy Codding!")
}
// alert("Hello! I can run JS through my web browser's console")

// ------------------------- CHAPTER 2 --------------------------------

var userName;

var myName = 'Muhammad Hamza'

var message = 'Hello World'
alert(message)

var nam = prompt('Enter your Name')
var age = prompt('Enter your age')
var course = prompt('Enter your course Name')
alert('Name: '+nam)
alert('Age: '+age)
alert('Course Name: '+course)

var pizza = 'PIZZA\nPIZZ\nPIZ\nPI\nP'
alert(pizza)

var email = 'hamkh3@gmail.com'
alert('My email address is '+email)

var book = '"A smarter way to learn JavaScript"'
alert(book)

document.write('Yah! I can write HTML content through JavaScript')

var end = '“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”'
alert(end)

//------------------------------CHAPTER 3----------------------
var yourAge = prompt('Enter Your Age')
alert('I am '+yourAge+' years old', 0)

var visitCount = 0
alert('You have visited this site '+ ++visitCount +' times')
alert('You have visited this site '+ ++visitCount +' times')
alert('You have visited this site '+ ++visitCount +' times')
alert('You have visited this site '+ ++visitCount +' times')

var birthYear = parseInt(prompt('Enter Your Birth Year'))
document.write('My Birth Year is '+birthYear+'\nData type of my declared veriable is number' )

var visitorName = prompt('Enter Visitor Name')
var productTitle = prompt('Enter Product Name')
var qty = parseInt(prompt('How many qty you want to order', 0))
document.write('"'+visitorName+' ordered '+productTitle+' on Z Store"')


//----------------------------CHAPTER 4 ---------------------------

var a, b, c;

var _Cloud;
var _1Cloud;
var _$cloud;
var cloud_1;
var cloud1_;
// var 1Cloud;
// var cloud 1;
// var @Cloud;
// var (cloud);
// var cloud>1;

document.write('<h2>“Rules for naming JS variables”</h2>')
document.write('<p>Variable names can only contain Dollar Sign ($), alphabet, underscore (_) and number.</p>')
document.write('<p>Variables must begin with a Dollar Sign ($), UnderScore (_) or Alphabet.</p>')
document.write('<p>Variable names are case Sensitive</p>')
document.write('<p>Variable names Should not be JS keyword</p>')

//---------------------------------CHAPTER 5 ------------------------------

var n1 = parseInt(prompt('Enter First Number '))
var n2 = parseInt(prompt('Enter Second Number '))
var add = n1+n2
var sub = n1-n2
var mul = n1*n2
var div = n1/n2
var mod = n1%n2
document.write('<h3>Addition</h3>')
document.write('Sum of '+n1+' and '+n2+ ' is '+add)
document.write('<h3>Subtraction</h3>')
document.write('Subtraction of '+n1+' and '+n2+ ' is '+sub)
document.write('<h3>Multiplication</h3>')
document.write('Multplication of '+n1+' and '+n2+ ' is '+mul)
document.write('<h3>Division</h3>')
document.write('Division of '+n1+' and '+n2+ ' is '+div)
document.write('<h3>Modulus</h3>')
document.write('Reminder of '+n1+' and '+n2+ ' is '+mod+'<br>')

var sample;
document.writeln(' “Value after variable declaration is: '+sample+' ”<br>')
sample =  45;
document.writeln(' “Initial value:'+sample+'” <br>')
sample++
document.writeln(' “Veriable after increment:'+sample+'” <br>')
sample+7
document.writeln(' “Value after addition:'+sample+'” <br>')
sample--
document.writeln(' “Veriable after decrement:'+sample+'” <br>')
sample%3
document.writeln(' “The Reminder is:'+sample+'” <br>')


var ticketCost = 600
document.write('<p>Total cost to buy 5 tickets to a movie is '+ticketCost*5+'PKR</p>')

document.write('<h3>Table of 4</h3>')
for(i=1; i<11; i++){
    document.write('<p> 4  X ' + i + ' = ' + 4*i + '</p>')
}

var  fahrenheit = parseInt(prompt('Temperature Converter,Please Enter Fahrenheit',0))
var celcius = parseInt(prompt('Temperature Converter, Please Enter Celcius',0))
var findCel = (fahrenheit - 32) * 5/9
var findFah = (celcius * 9/5) +32
document.write('<p>'+ fahrenheit + '<sup>o</sup>F is '+findCel+'<sup>o</sup>C</p>')
document.write('<p>'+ celcius + '<sup>o</sup>C is '+findFah+'<sup>o</sup>F</p>')

var firstPrice = 340
var secondPrice = 560
var firstItem = 7
var secondItem = 30
var shipCahrges =  670
var first = firstPrice * firstItem
var second = secondPrice * secondItem
document.write(`
    <h2>Shopping Cart</h2>
    <ul>
        <li>Price of First Item is Rs.${firstPrice}</li>
        <li>Qty of First Item is ${firstItem}</li>
        <li>Price of Second Item is Rs.${secondPrice}</li>
        <li>Qty of Second Item is${secondItem}</li>
        <li>Shipping Charges ${shipCahrges}</li>
    </ul>
    <p>Total Cost of your order is ${first+second+shipCahrges}</p>
`)

var totalMarks = 950
var obtMarks = 780
var percet = obtMarks * 100 / totalMarks
document.write(`
    <h2>MarkSheet</h2>
    <p>Total Marks is ${totalMarks}</p>
    <p>Obtain Marks is ${obtMarks}</p>
    <p>Student Percentage is ${percet}%</p>
`)

var dollar = 10
var riyal = 25
var dollar1 = 104.80
var riyal1 = 28 
var dollarToRupees = dollar*dollar1
var riyalToRupees = riyal*riyal1
document.write(`
    <h2>Currency in PKR</h2>
    <p>Total currency in PKR: ${dollarToRupees+riyalToRupees}</p>
`)

var numbers =  10+5*10/2
alert(numbers)

var curYear = parseInt(prompt('Enter current Year'))
var birYear = parseInt(prompt('Enter birth Year'))
var ageIs = curYear - birYear
document.write(`
    <h2>Age Calculator</h2>
    <p>Current Year: ${curYear}</p>
    <p>Birth Year: ${birYear}</p>
    <p>Your Age is: ${ageIs}</p>
`)

var radius = parseInt(prompt('Enter Radius'))
var circum = (2 * 3.142) * radius
var area = 3.142 * (radius * radius)
document.write(`
    <h2>The Geometrizer</h2>
    <p>Radius: ${radius}</p>
    <p>Circumference: ${circum}</p>
    <p>Area: ${area}</p>
`)

var favSnack = 'AndayWala Biscuit'
var currentAge = 23
var maxAge = 65
var remainDays = (65-23) * 365 
var snackPerDay = 5
var needSnack = snackPerDay * remainDays
document.write(`
    <h2>The Lifetime Supply Calculator</h2>
    <p>Favourite Snack: ${favSnack}</p>
    <p>Current Age: ${currentAge}</p>
    <p>Maximum Age: ${maxAge}</p>
    <p>Snack per day: ${snackPerDay}</p>
    <p>You will need ${needSnack}  ${favSnack}to last you until the ripe old age of ${maxAge}</p>
`)

//----------------------------------Chapter 6 - 8 -----------------------------------------------


var a = 10
document.write(`Result:<br>The value of a is: ${a}`)
document.write(`<br>. . . . . . . . . . . .<br>`)
++a
document.write(`The value ++a is: ${a}<br> The value of a is: ${a}`)
a++
document.write(`The value a++ is: ${a}<br> The value of a is: ${a}`)
--a
document.write(`The value --a is: ${a}<br> The value of a is: ${a}`)
a--
document.write(`The value a-- is: ${a}<br> The value of a is: ${a}`)

var x = 2;
var y = 1;
var result = --x - --y + ++y + y--
document.write(`
    <br>
    <p>x is: ${x}</p>
    <p>y is: ${y}</p>
    <p>result is: ${result}</p>
`)

var inputName =  prompt('Enter User Name')
document.write(`<p>Hello ${inputName}</p>`)

var tableToPrint = parseInt(prompt('What number you want Table to print', 5))
document.write(`<h3>Table of ${tableToPrint}</h3>`)
for(i=1; i<11; i++){
    document.write(`<p> ${tableToPrint}  X ${i} = ${tableToPrint*i}</p>`)
}

var subj1 =  prompt('Please Enter First subject name', 'subject 1')
var subj2 =  prompt('Please Enter Second subject name', 'subject 2')
var subj3 =  prompt('Please Enter Third subject name', 'subject 3')
var eachSubjMarks = 100
var obtSubj1 = parseInt(prompt('Enter Obtained Marks for '+subj1, 0))
var obtSubj2 = parseInt(prompt('Enter Obtained Marks for '+subj2, 0))
var obtSubj3 = parseInt(prompt('Enter Obtained Marks for '+subj3, 0))
document.write(`
    <h2>MarkSheet</h2>
    <table border='1' style="text-align:center;">
        <tr>
            <td>Subjects</td>
            <td>Total Marks</td>
            <td>Obt Marks</td>
            <td>Percentage</td>
        </tr>
        <tr>
            <td>${subj1}</td>
            <td>${eachSubjMarks}</td>
            <td>${obtSubj1}</td>
            <td>${obtSubj1*100/eachSubjMarks}</td>
        </tr>
        <tr>
            <td>${subj2}</td>
            <td>${eachSubjMarks}</td>
            <td>${obtSubj2}</td>
            <td>${obtSubj2*100/eachSubjMarks}</td>
        </tr>
        <tr>
            <td>${subj3}</td>
            <td>${eachSubjMarks}</td>
            <td>${obtSubj3}</td>
            <td>${obtSubj3*100/eachSubjMarks}</td>
        </tr>
        <tr>
            <td>Overall</td>
            <td>${eachSubjMarks*3}</td>
            <td>${obtSubj1+obtSubj2+obtSubj3}</td>
            <td>${(obtSubj1+obtSubj2+obtSubj3)*100/(eachSubjMarks*3)}</td>
        </tr>
    </table>
`)

//-------------------------------------Chapter 9 - 11 --------------------------

var city = prompt('Enter City Name').toLowerCase()
if (city === 'karachi') {
    alert('Welcome to the City of Lights')
}
else {
    alert(`Welcome to ${city}`)
}

var gender = prompt('Enter your Gender').toLowerCase()
if (gender === 'male') {
    alert('Good Morning Sir')
}
else if (gender === 'female') {
    alert(`Good Morning Ma'am`)
}
else {
    alert('welcome')
}

var traficSignal = prompt('Enter Trafic Light Color',).toLowerCase()
if (traficSignal === 'red') {
    alert('Must Stop')
}
else if (traficSignal === 'yellow') {
    alert(`Ready to move`)
}
else if (traficSignal === 'green') {
    alert('Move now')
}
else {
    alert(`${traficSignal} color is not trafic color`)
}

var fuel = parseFloat(prompt('Enter Fuel', 0))
if (fuel <= 0.25) {
    alert(`Please refill the fuel, your current fuel is ${fuel} Litres`)
}

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

var subj1 =  prompt('Please Enter First subject name', 'subject 1')
var subj2 =  prompt('Please Enter Second subject name', 'subject 2')
var subj3 =  prompt('Please Enter Third subject name', 'subject 3')
var eachSubjMarks = 100
var obtSubj1 = parseInt(prompt('Enter Obtained Marks for '+subj1, 0))
var obtSubj2 = parseInt(prompt('Enter Obtained Marks for '+subj2, 0))
var obtSubj3 = parseInt(prompt('Enter Obtained Marks for '+subj3, 0))
var totalSubjMarks =  eachSubjMarks*3
var totalObt = obtSubj1+obtSubj2+obtSubj3
var percent = totalObt*100/totalSubjMarks
var grade,remarks;
if(percent >= 80){
    grade = 'A-One'
    remarks = 'Excellent'
}
else if(percent >= 70){
    grade = 'A'
    remarks = 'Good'
}
else if(percent >= 60){
    grade = 'B'
    remarks = 'You need to improve'
}
else if(percent < 60){
    grade = 'Fail'
    remarks = 'Sorry'
}
document.write(`
    <h2>MarkSheet with Grades</h2>
    <br>
    <h4>Total Marks: ${totalSubjMarks}</h4>
    <h4>Obtained Marks: ${totalObt}</h4>
    <h4>Percentage: ${percent}%</h4>
    <h4>Grade: " ${grade} "</h4>
    <h4>Remarks: ${remarks}</h4>    
`)

var secretNum = 4;
var guessedNum = parseInt(prompt('Enter any number from 1 to 10, if you guessed secret number you win', 0))
if(guessedNum === secretNum){
    alert('Bingo! Correct answer!, You Win')
}
else{
    if(guessedNum+1 === secretNum+1){
        alert('Close enough to the correct answer')
    }
    else{
        alert('Sorry Try Again')
    }
}

var divisibleBy3 = parseInt(prompt('Enter any number for check its divide by 3 or not', 0))
var chk = divisibleBy3%3
if(chk === 0){
    alert(`${divisibleBy3} is complete divisible by 3`)
}
else{
    alert(`${divisibleBy3} can't divisible by 3`)
}

var evenOdd = parseInt(prompt('Enter any number to check Even or Odd', 0))
var checkEvenOdd = evenOdd%2
if(checkEvenOdd === 0){
    alert(`" ${evenOdd} " is an Even Number`)
}
else if(checkEvenOdd > 0){
    alert(`" ${evenOdd} " is an Odd Number`)
}

var temp = parseInt(prompt('Check Temperatue', 0))
if(temp > 40){
    alert('It is too hot outside.')
}
else if (temp > 30){
    alert('The Weather today is Normal.')
}
else if (temp > 20){
    alert('Today’s Weather is cool.”')
}
else if(temp > 10){
    alert('OMG! Today’s weather is so Cool.')
}

var number1 = parseInt(prompt('Enter First Number', 0))
var number2 = parseInt(prompt('Enter Second Number', 0))
var selectOperation = prompt('Select operation from below\n +, -, /, *, %')
if(selectOperation == "+"){
    alert(`You select ' ${selectOperation} ' and Addition of ${number1} and ${number2} is ${number1+number2}`)
}
else if(selectOperation == "-"){
    alert(`You select ' ${selectOperation} ' and Subtraction of ${number1} and ${number2} is ${number1-number2}`)
}
else if(selectOperation == "*"){
    alert(`You select ' ${selectOperation} ' and Multiplication of ${number1} and ${number2} is ${number1*number2}`)
}
else if(selectOperation == "/"){
    alert(`You select ' ${selectOperation} ' and Division of ${number1} and ${number2} is ${number1/number2}`)
}
else if(selectOperation == "%"){
    alert(`You select ' ${selectOperation} ' and Remainder of ${number1} and ${number2} is ${number1-number2}`)
}
else{
    alert(`You select ' ${selectOperation} ', some thing wrong with this operation, please check again. `)
}

//------------------------------------------------Chapter 12 - 13 -----------------------------------------

console.log('Hamza'.charCodeAt())
var numStr = prompt('Enter any number or alphabet')
if(parseInt(numStr >= 0)){
    alert('your input data type is a Number')
}
else if(numStr.charCodeAt() >= 65 && numStr.charCodeAt() <= 90 ){
    console.log(numStr.charCodeAt())
    alert('your input data type is a String and Input is in UPPERCASE')
}
else if(numStr.charCodeAt() >= 97 && numStr.charCodeAt() <= 122 ){
    // console.log(numStr.charCodeAt())
    alert('your input data type is a String and Input is in LOWERCASE')
}
else{
    alert('Something wrong')
}

var int1 = parseInt(prompt('Enter First integer'))
var int2 = parseInt(prompt('Enter Second integer'))

if(++int1 == int2){
    alert(`Integers are Equal`)
}
else {
    alert(`First Integer is ${int1}\nSecond Integer is ${int2}`)
}

var anyNumber =  parseInt(prompt('Enter any number', 0))
if(anyNumber > 0){
    alert(`Your Input number ${anyNumber} is Positve`)
}
else if(anyNumber < 0){
    alert(`Your Input number ${anyNumber} is Negative`)
}
else if(anyNumber == 0){
    alert(`Your Input number ${anyNumber} is Zero`)
}
else{
    alert(`Some thing wrong with your input number ${anyNumber}`)
}

var char = prompt('Type any character to find Vowel')
var vowel = ['a', 'e', 'i', 'o', 'u']
flag = false
if (char.length == 1) {
    for (i = 0; i < vowel.length; i++) {
        if (char == vowel[i]) {
            flag = true
            alert(true)
        }
    }
    if(flag == false){
        alert(false)
    }
}
else {
    alert('Please type 1 character')
}

var pass = 'abc'
var pass1 = prompt('Enter a password')
if(pass1 === pass){
    alert(`Correct! The password you entered matches the original password`)
}
else if(pass1.length === 0){
    alert(`Please type your password`)
}
else if(pass1 !== pass){
    alert(`Password is incorrect`)
}

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}

var waqt = prompt('Enter a time (Use 24 Hour format i.e. 1300)')
console.log(waqt.length)
if(waqt.length == 4){
    if(waqt >= 0000 && waqt < 1200){
        alert(`Good Morning`)
    }
    else if(waqt >= 1200 && waqt < 1700){
        alert(`Good Afternoon`)
    }
    else if(waqt >= 1700 && waqt < 2100){
        alert(`Good Evening`)
    }
    else if(waqt >= 1200 && waqt < 1700){
        alert(`Good Afternoon`)
    }
    else if(waqt >= 1700 && waqt < 2359){
        alert(`Good Night`)
    }
    else{
        alert(`Invalid time`)
    }
}

//---------------------------------Chapter 14 - 16 -------------------------

var students = [];

var student = new Array()

var stringArray = ['Apple','Mango', 'Peach']

var numberArray = [1,3,5,2]

var booleanArray = [true, false, true, true]

var mixedArray = ['Apple',1, false]

var qualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM','MS', 'M. Phil','phD']
document.write(`<h3>Qualifications:</h3>`)
for(var i=0; i<qualification.length; i++){
    document.write(`<p>${i+1}) ${qualification[i]}</p>`)
}

students = ['Hamza', 'Subhan', 'Furqan', 'A Rafay']
var score = [390, 456, 457, 398]
var tMarks = 500
for(var i=0; i<students.length; i++){
    document.write(`<p>Score of ${students[i]} is ${score[i]}. Percentage: ${score[i]*100/tMarks}%</p>`)
}

//Q9 Area

document.write(`Scores of Students: ${score}`)
document.write(`<br>Ordered Scores of Students: ${score.sort()}<br>`)

var cities = ['Karachi', 'Quetta', 'Peshawar', 'Lahore', 'Islamabad']
var selectedCities = cities.slice(0, -2)
document.write(`<br>Cities: ${cities}`)
document.write(`<br>Selected Cities: ${selectedCities}<br>`)

var arrayGreet = ['Thanks', 'for', 'visit']
var joinGreet = arrayGreet.join(' ')
console.log(joinGreet)
document.write(`<br>Array Messge: ${arrayGreet}`)
document.write(`<br>Join Messge: ${joinGreet}<br>`)

var inventory = ['keyboard','mouse','lcd','speaker','usb']
document.write(`<h3>Inventory</h3>`)
document.write(`<b>${inventory}</b><br>`)
for(var i=0; i<inventory.length; i++){
    document.write(`Out: ${inventory[i]}<br>`)
}


document.write(`<h3>Inventory</h3>`)
document.write(`<b>${inventory}</b><br>`)
for(var i=inventory.length-1; i>=0; i--){
    document.write(`Out: ${inventory[i]}<br>`)
}

var phoneManf = ['Apple','Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier']
console.log(phoneManf)
document.write(`Phone Manufactures Companies: <select>`)
document.write(`<option>${phoneManf[0]}</option>`)
document.write(`<option>${phoneManf[1]}</option>`)
document.write(`<option>${phoneManf[2]}</option>`)
document.write(`<option>${phoneManf[3]}</option>`)
document.write(`<option>${phoneManf[4]}</option>`)
document.write(`<option>${phoneManf[5]}</option>`)
document.write(`</select>`)


//---------------------------------Chapter 17 - 20 -------------------------

var multiArray = []
multiArray.push([0, 1, 2, 3])
multiArray.push([1, 0, 1, 2])
multiArray.push([2, 1, 0, 1])
for (var i = 0; i < multiArray.length; i++) {
    document.write(`${multiArray[i]}<br>`)
}

document.write(`<h3>Count 1 - 10</h3>`)
for (var i = 1; i <= 10; i++) {
    document.write(`${i}<br>`)
}

var tableToPrint = parseInt(prompt('What Table number you want to print', 3))
var tableRange = parseInt(prompt('How much range of table', 5))
document.write(`<h3>Multiplication table of ${tableToPrint}</h3>`)
document.write(`<h3>Length ${tableRange}</h3>`)
for(i=1; i<=tableRange; i++){
    document.write(`<p> ${tableToPrint}  X ${i} = ${tableToPrint*i}</p>`)
}

var fruit = ['apple', 'banana', 'mango', 'orange','strawberry']
document.write(`<h3>Fruit Name with Indexes</h3>`)
for(i=0; i<fruit.length; i++){
    document.write(`<p>Element at index ${i} is ${fruit[i]}.</p>`)
}

var counting = []
for(var i=1; i<=15; i++){
    counting.push(i)
}
document.write(`<h3>Counting</h3> ${counting}`)
var revCounting = []
for(var i=10; i>0; i--){
    revCounting.push(i)
}
document.write(`<h3>Reverse Counting</h3> ${revCounting}`)
var evenCounting = []
for(var a=0; a<=20; a++){
    if(a%2 === 0){
        evenCounting.push(a)
    }
}
document.write(`<h3>Even Counting</h3> ${evenCounting}`)
var oddCounting = []
for(var a=0; a<=20; a++){
    if(a%2 === 1){
        oddCounting.push(a)
    }
}
document.write(`<h3>Odd Counting</h3> ${oddCounting}`)
var series = []
for(var a=2; a<=20; a++){
    if(a%2 === 0){
        series.push(a+'k')
    }
}
document.write(`<h3>Series</h3> ${series}`)

var backeryStock = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var order = prompt('Welcome our Bakery, what you want to order?')
var chkFlag = false
for (var i = 0; i < backeryStock.length; i++) {
    if (backeryStock[i] == order.toLowerCase()) {
        alert(`${order} is avaialble at index ${i} in our bakery`)
        chkFlag = true
        break
    }
} 
if (chkFlag == false) {
    alert(`${order} is not avaialble in our bakery`)
}

var chkMaxNum = [24, 53, 78, 91, 12]
var max = 0;
for(var i=0; i<chkMaxNum.length; i++){
    if(chkMaxNum[i] >= max){
        max = chkMaxNum[i]
    }
}
document.write(`Array Items: ${chkMaxNum}`)
document.write(`<br>The Largest number is  ${max}`)

var chkMinNum = [24, 53, 78, 91, 12]
var min=max;
for(var i=0; i<chkMinNum.length; i++){
    if(chkMinNum[i] <= min){
        min = chkMinNum[i]
    }
}
document.write(`<br>Array Items: ${chkMinNum}`)
document.write(`<br>The Smallest number is  ${min}`)

var multipleof5 = []
for(var i=5; i<=100; i++){
    if(i%5 === 0){
        multipleof5.push(i)
    }
}
document.write(multipleof5)

//--------------------------------Chapter 21 -25-----------------------------------

var firstName = prompt('Enter your first name')
var secondName = prompt('Enter your second name')
alert(`Your Full Name is ${firstName} ${secondName}.`)

var mobileModel = prompt('Enter your favourite mobile phone model')
document.write(`Your Favourite Mobils is: ${mobileModel}`)
document.write(`<br>Length of String is: ${mobileModel.length}`)

var pakistani = 'Pakistani'
for (var i = 0; i < pakistani.length; i++) {
    if (pakistani[i] === 'n') {
        document.write(`String is: ${pakistani}`)
        document.write(`<br>Index of 'n' is: ${i}`)
        break
    }
}

var helloW = 'Hello World'
for (var i = helloW.length; i >= 0; i--) {
    if (helloW[i] === 'l') {
        document.write(`<br>String is: ${helloW}`)
        document.write(`<br>Index of last 'l' is: ${i}`)
        break
    }
}

document.write(`<br>String is: ${pakistani}`)
document.write(`<br>Character at Index 3: ${pakistani[3]}`)

document.write(`<br>Concat() Method: <br><b>${'Q1'.concat('Q1')}</b>`)

var citi = 'hyderabad'
document.write(`<br>String: <b>${citi}</b>`)
for (var i = 0; i < citi.length; i++) {
    if (citi.slice(i, i + 5) === 'hyder') {
        citi = 'Islam' + citi.slice(i+5)
    }
}
document.write(`<br>After Replacement: <b>${citi}</b>`)

var message = 'Ali and Sami are best friends. They play cricket and football together'
document.write(`<br>Before Replacement: <b>${message}</b>`)
for(var i=0; i<message.length; i++){
    var andq = message.slice(i, i+3)
    if(andq === 'and'){
        message = message.slice(0, i)+'&'+message.slice(i+3)
    }
}
document.write(`<br>After Replacement: <b>${message}</b>`)

var numValue = '472'
document.write(`<br>Value: <b>${numValue}</b>`)
document.write(`<br>Type: <b>${typeof(numValue)}</b>`)
var convertType = parseInt(numValue)
document.write(`<br>Value: <b>${convertType}</b>`)
document.write(`<br>Type: <b>${typeof(convertType)}</b>`)

var peanuts = prompt('Enter any String and convert into UPPERCASE..')
document.write(`<br>User Input: <b>${peanuts}</b>`)
document.write(`<br>Upper Case: <b>${peanuts.toUpperCase()}</b>`)

var peanuts1 = prompt('Enter any String and convert into Title Case..')
document.write(`<br>User Input: <b>${peanuts1}</b>`)
document.write(`<br>Title Case: <b>${peanuts1[0].toUpperCase() + peanuts1.slice(1).toLowerCase()}</b>`)

var floatVal = 55.36
var convertStr = floatVal.toString()
document.write(`<br>Number: <b>${floatVal}</b>`)
document.write(`<br>Result: <b>${convertStr.slice(0,2) + convertStr.slice(3)}</b>`)

var specialChar = [33, 44, 46, 64]
var userNam = prompt('Enter User Name, special characters are not allowed.')
for (var i = 0; i < userNam.length; i++) {
    for (var x = 0; x < specialChar.length; x++) {        
        if (userNam[i].charCodeAt() === specialChar[x]) {
            alert('Please enter Valid User Name')
            break
        }
    }
}

var haveItem = false
var backeryStock = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var bakeryItem = prompt('WELCOME to our Bakery, What you want to test..')
for (var i = 0; i < backeryStock.length; i++) {
    if(bakeryItem.toLowerCase() === backeryStock[i].toLowerCase()){
        alert(`${toTitleCase(bakeryItem)} is avaialble at index ${i} in our bakery`)
        haveItem = true;
        break;       
    }
}
if(haveItem == false){
    alert(`${toTitleCase(bakeryItem)} is not avaialble in our bakery`)       
}

Q15 . PENDING
var capsAlpha = []
var lowerAlpha = []
var numChar = []
var numCh = false
var capsLower = false
for (var i = 65; i <= 90; i++) {
    capsAlpha.push(i)
    lowerAlpha.push(i + 32)

}
for (var i = 48; i <= 57; i++) {
    // console.log(capsAlpha[i].charAt)
    numChar.push(i)
}
var userPass = prompt('Enter your Password')
if (userPass.length === 6) {
    for(var a=0; a<numChar.length; a++){
        if(userPass[0].charCodeAt() !== numChar[a]){
            numCh = true
        }
    }
    for(var b = 0; b<userPass.length; b++){
        for(var f = 0; f<numChar.length; f++){

        }
    }
    for(var d = 0; d<userPass.length; d++){
        for(var e = 0; e<capsAlpha.length; e++){
            if(userPass[d].charCodeAt() === capsAlpha[c] || userPass[d].charCodeAt() === lowerAlpha[c]){
                capsLower = true
            }
        }
    }
}

var uni = 'Univesity of Karachi'
var newUni= uni.split('')
for(var u=0; u<newUni.length; u++){
    document.write(newUni[u]+'<br>')
}

var nation = prompt('Any thing and find last character of your Input')
document.write('<br>User Input: '+nation)
document.write('<br>Last Character of innput is: '+nation[nation.length-1])

var quick = 'The quick brown fox jumps over the lazy dog'.toLowerCase()
var wordOccur = 0;
for(var i =0; i<quick.length; i++){
    if(quick.slice(i, i+3) === 'the'){
        wordOccur = wordOccur + 1
        console.log(wordOccur)
    }
}
document.write(`<br>Text: ${quick}`)
document.write(`<br>There are ${wordOccur} occurence(s) of word 'the': ${quick}`)

// ---------------------------- Chapter 26 - 30 ---------------------------

var numInput = parseFloat(prompt('Input any positve number'))
var newNumInput = Math.random() + numInput
if (numInput > 0) {
    document.write(`<br>number: ${newNumInput}`)
    document.write(`<br>round off value: ${Math.round(newNumInput)}`)
    document.write(`<br>Floor: ${Math.floor(newNumInput)}`)
    document.write(`<br>Ceil: ${Math.ceil(newNumInput)}`)
}
else{
    alert('please input any positive number')
}

var numInputNeg = parseFloat(prompt('Input any Negative number'))
var newNumInputNeg = Math.random() + numInputNeg
if (numInputNeg < 0) {
    document.write(`<br>number: ${newNumInputNeg}`)
    document.write(`<br>round off value: ${Math.round(newNumInputNeg)}`)
    document.write(`<br>Floor: ${Math.floor(newNumInputNeg)}`)
    document.write(`<br>Ceil: ${Math.ceil(newNumInputNeg)}`)
}
else{
    alert('please input any Neagtive number')
}

var absoluteNum = parseInt(prompt('Input any number, to find Absolute Value'))
if(absoluteNum < 0){
    let num = absoluteNum *-2 
    document.write(`<br>The Absolute value of ${absoluteNum} is ${num/2}`)
}
else if(absoluteNum>0){
    document.write(`<br>The Absolute value of ${absoluteNum} is ${absoluteNum}`)
}

var genRandom = Math.floor(Math.random()*6+1)
var genRandom1 = Math.floor(Math.random()*6+1)
    document.write(`<br>Random Value of Dice is: ${genRandom}`)
    document.write(`<br>Random Value of Dice is: ${genRandom1}`)

var headTail = Math.floor(Math.random()*2+1)
if(headTail === 2){
    document.write(`<br>${headTail}`)
    document.write(`<br>Random Coin Value: Heads`)
}else if(headTail === 1){
    document.write(`<br>${headTail}`)
    document.write(`<br>Random Coin Value: Tails`)
}


var randomNum = Math.floor(Math.random()*100+1)
document.write(`<br>Random Number between 1 to 100: ${randomNum}`)

// Q7.
var numChar1 = []
var numCh1 = false
var kgs = false
for (var i = 48; i <= 57; i++) {
    numChar1.push(i)
}
// var weight = prompt('Enter your weight in Kilograms')
// weight = weight.toLowerCase()
// for(var i=0; i<weight.length; i++){
//     if(weight.slice(i, i+3) === 'kgs' || weight.slice(i, i+9) === 'kilograms'){
//         kgs=true
//     }
// }
// for(var i=0; i<weight.length; i++){
//     for()
// }
// if(){

// }
// else if(weight.slice(weight.length-9) === 'kilograms'){
//     document.write(`The Weight of user is ${weight.slice(0, weight.length-9)} Kilograms`) 

// }
// else if(weight.slice(weight.length-3) ==='kgs'){
//     document.write(`The Weight of user is ${weight.slice(0, weight.length-3)} Kilograms`) 
// } 
// else {
//     alert('Please input valid data')
// }



// //---------------------------CHAPTER 31 - 34 ----------------------------
var date = new Date();
var date1 = new Date('1-1-1970')
var getMonth = date.getMonth()
var getDay = date.getDay()
var todayDate = date.getDate()

document.write('<br>' + date)

var months = ['January', 'February', 'March', 'April', 'May', ' June', 'July', 'August',
    'September', 'October', 'November', 'December']

var days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
document.write('<br>Current Monht: ' + months[getMonth])

document.write('<br>Today is: ' + days[getDay].slice(0, 3))
if (days[getDay] === 'Saturday' || days[getDay] === 'Sunday') {
    document.write('<br>Its Fun Day!')
}
else {
    document.write('<br>Today is not Fun Day :( so wait for funday and now working hard :)')
}

if (todayDate < 16) {
    document.write(`<br>First fifteen days of the month`)
}
else if (todayDate > 15) {
    document.write(`<br>Last days of the month`)
}

document.write(`<br>Current Date: ${date}`)
document.write(`<br>Elapsed Miliseconds since July 23, 2020: ${(date.getMilliseconds() - date1.getMilliseconds())/1000}`)
document.write(`<br>Elapsed Minutes since July 23, 2020: ${(date.getMilliseconds() - date1.getMilliseconds())/1000* 60 * 60}`)

if (date.getHours() >= 00 && date.getHours() < 12) {
    document.write(`<br>It's AM`)
}
else if (date.getHours() >= 12 && date.getHours() < 24) {
    document.write(`<br>It's PM`)
}

var laterDate = new Date('12-31-2020')
document.write(`<br>Later Date: ${laterDate}`)

//Q9.
// var firstRamadan = new Date('4-25-2020')
// console.log(((date - firstRamadan/60)/60)/24/365)

var todayStart = new Date('1-1-2020')
document.write(`<br>${((date-todayStart)/60)} Seconds had passed since begining of 2020`)

//Q11. till end peding


//- - --- - -  - - - Chpater 35 -38 - - - - -  - - - - - - - 

function curentDate(){
    let current_Date = new Date()
    document.write(`<br> ${current_Date}`)
}
curentDate()

function userInfo(){
    let fName = prompt('ENter you First Name')
    let lName = prompt('ENter you Last Name')
    document.write(`<br>Welcome ${fName}  ${lName}`)
}
userInfo()

function sumof2Num(){
    let fNum = parseInt(prompt('ENter First Number'))
    let sNum = prompt('ENter Second Number')
    return `Total Sum of  ${fNum + sNum }`
}

let no1 = parseInt(prompt('ENter First Number'))
let no2 = parseInt(prompt('ENter Second Number'))
let oper = prompt('Select any one Operation below list \n "+", "-", "/", "*", "%"')
function calc(n1, n2, op){
    let res;
    if(op === '+'){
        res = "Sum "+ parseInt(n1+n2)
    }
    else if(op === '-'){
        res = "Subtraction " + n1-n2
    }
    else if(op === '/'){
        res = "Division " + n1/n2
    }
    else if(op === '*'){
        res = "Multiplication "+ n1*n2
    }
    else if(op === '%'){
        res = "Reminder " + n1%n2
    }
    else{
        alert('Invalid Operation.')
        res = 'You select wrong Operation.!'
    }
    document.write(`<br>Output: ${res}`)
}
calc(no1, no2, oper)

var findSquare = prompt('Please enter any number to find out Square')
function square(a, flag=true) {
    if (flag === true) {
        document.write(`<br>The Square of ${a} is ${a * a}`)
    }
    return a*a
}
square(findSquare)

var factorial = prompt('Please enter any number to find factorial')
function findFactorial(fact){
    let resu = 1
    for(var i=fact; i>0; i--){
        resu = resu*i
        console.log(resu)
    }
}
findFactorial(factorial)

var startNum = parseInt(prompt('Enter Start Number')) 
var endNum = parseInt(prompt('Enter End Number')) 
document.write(`<br>Counting ${startNum} till ${endNum}`)
for(var i=startNum; i<=endNum; i++){
    document.write(`<br> ${i}`)
}

var base = parseInt(prompt('Enter Base'))
var perpendicular = parseInt(prompt('Enter Perpendicular'))
function hypotenuse(bas, per) {
    var hypo = square(bas,false)+square(per, false)
    console.log(Math.sqrt(hypo))
}
hypotenuse(base, perpendicular)

var wid = parseInt(prompt('Enter Widht'))
var hei = parseInt(prompt('Enter Height'))
function triAngle(width, height){
    document.write(`<br>The Area of Trianhle is <b>${width * height}<b>`)
}
triAngle(wid, 54)

var palindrome =  prompt('Enter any string to check its palindrome or not?')
var chkPali = ''
for(var i=palindrome.length-1; i>=0;i--){
    chkPali = chkPali+palindrome[i]
}
if(palindrome.toLowerCase() === chkPali.toLowerCase()){
    alert(`${palindrome} is Palindrome`)
}
else{
    alert(`${palindrome} is not Palindrome`)
}

var titleString =  prompt('Enter any string you want to convert String in Ttitle Case')+" "
let lastIndex = 0
let splitWord = [];
let spaceCount = 0
for(var i=0; i<titleString.length; i++){
    
    if(titleString[i] === ' '){
        spaceCount++
        splitWord.push(toTitleCase(titleString.slice(lastIndex, i)))
        lastIndex = i+spaceCount
        continue

    }
}
document.write(`Example String: ${splitWord.join(' ')}`)
// document.write(`Expected Output: ${splitWord.join(' ')}`)

var titleString1 =  prompt('Enter any string')+" "
let lastIndex1 = 0
let splitWord1 = [];
for(var i=0; i<titleString1.length; i++){
    
    if(titleString1[i] === ' '){
        splitWord1.push(toTitleCase(titleString1.slice(lastIndex1, i)))
        lastIndex1 = i+1
        continue

    }
}
var longWord = splitWord1[0]
for(var i=0; i<splitWord1.length; i++){
    if(splitWord1[i].length > longWord.length){
        console.log('hamza')
        longWord = splitWord1[i]
    }
}
document.write(`Example String: ${titleString1}`)
document.write(`Expected Output: ${longWord}`)

var word = prompt('Enter any word')
var letter = prompt('Check letter how many times repeat in your given word')
function countLetter(word, letter){
    let letterCount = 0
    for(var i=0; i<word.length; i++){
        if(word[i] === letter){
            letterCount = letterCount + 1
        }
    }
    if(letterCount > 0){
        document.write(`<br>${letterCount} times Repeat ${letter} in String`)
    }
    else {
        document.write(`<br> ${letter} not found in String`)
    }
}
countLetter(word, letter)


var cicum = prompt('Find Cicumference of Circle')
var radi = prompt('Find Aria of Circle')
function calcCircumference(radius, pi = 3.14){
    document.write(`<br>The Circumference of Circle is ${2 * (pi * radius)}`)
}
function calcArea(radius, pi = 3.14){
    document.write(`<br>The Area of Circle is ${pi * (radius * radius)}`)
}
calcCircumference(cicum)
calcArea(radi)

// ----------------------------- Chapter 38-42

var ba = parseInt(prompt('Enter Base'))
var exp = parseInt(prompt('Enter Exponent'))

function power(a,b){
    let res=a
    for(var i=1; i<b; i++){
        res = res*a
    }
    return res
}
document.write(`<br> The Exponent(${exp}) of ${ba} is ${power(ba, exp)}`)

var leapYear = prompt('Enter Any year to Find its leap year or not')
function findLeapYear(leap){
    if(leapYear%4 === 0){
        document.write(`${leap} a Leap Year`)
    }
    else{
        document.write(`${leap} is not a Leap Year`)
    }
}
findLeapYear(leapYear)

var tri1 = parseInt(prompt('Enter first Side Length of Triangle '))
var tri2 = parseInt(prompt('Enter second Side Length of Triangle '))
var tri3 = parseInt(prompt('Enter third Side Length of Triangle '))
function findingS(t1,t2,t3){
    return (t1+t2+t3)/2
}
function findArea(a,b,c){
    let S = findingS(a,b,c)
    let area = S * (S-a) * (S-b) * (S-c)

    document.write(`The Area of Triangle is ${area}`)
}
findArea(tri1,tri2, tri3)

var s1 = Number(prompt('Enter First subject obtained marks'))
var s2 = Number(prompt('Enter Second subject obtained marks'))
var s3 = Number(prompt('Enter Third subject obtained marks'))
var tot = 300
function findPercentage(a,b,c){
    return ((a+b+c)*100)/tot
}
function findAver(a,b,c){
    return (a+b+c)/3
}
function stdResult(sub1,sub2,sub3){
    document.write(`Student Result is Average Marks: <b>${findAver(sub1+sub2+sub3)}</b>
     and Percentage is ${findPercentage(sub1+sub2+sub3)}%`)
}
stdResult(s1,s2,s3)

var wrd = prompt('Enter Any word')
var strng = prompt('Enter letter to finnd Index')
function findInedex1(a,b){
    document.write(`<br>Example Word: <b>${a}</b>`)
    document.write(`<br>Index of ${b}: <b>${a.indexOf(b)}</b>`)

}
findInedex1(wrd, strng)

var removeVowel = prompt('Write any sentence, sentence is no more then 25')
var vow = ['a','e','i','o','u']
var newRemoveVow = removeVowel.split('')
var exceptVowel=[]
console.log(newRemoveVow)
function removeVow(a){
    for(var i=0; i<newRemoveVow.length; i++){
        for(var e= 0; e<vow.length; e++){
            if(newRemoveVow[i] !== vow[e] ){
                exceptVowel.push(newRemoveVow[i])
                break
            }
        }
    }
    document.write(`Sentence is Except Vowels: ${exceptVowel}`)
}
removeVow(removeVowel)
