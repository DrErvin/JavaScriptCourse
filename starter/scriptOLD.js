/*let js = "majmun";
if (js === "majmun") alert("JS je jaka stvar!");

54 + 65 + 45 - 43;
console.log(54 + 65 + 45 - 43);

let upitnik = true;
console.log(typeof upitnik);

*/
/* 
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.
GOOD LUCK 
*/
const marksMass = 95;
const makrsHeight = 1.88;
const johnsMass = 85;
const johnsHeight = 1.76;

let marksBMI = marksMass / makrsHeight ** 2;
let johnsBMI = johnsMass / johnsHeight ** 2;
let markHigherBMI = marksBMI > johnsBMI;
console.log(marksBMI, johnsBMI, markHigherBMI);

/*
let markHigherBMI;
if (marksBMI > johnsBMI) {
    markHigherBMI = true;
    console.log("Mark has a higher bmi than John");
}*/
/*const country = "Bosna";
const continent = "Europe";
let descprition = `${country} is in ${continent}.`;
console.log(descprition);*/
/*
Use the BMI example from Challenge #1, and the code you 
already wrote, and improve it.
Your tasks:
1. Print a nice output to the console, saying who has the 
higher BMI. The message is either "Mark's BMI is higher 
than John's!" or "John's BMI is higher than Mark's!" 
2. Use a template literal to include the BMI values in 
the outputs. Example: "Mark's BMI (28.3) is higher than 
John's (23.9)!"

Hint: Use an if/else statement �
GOOD LUCK �
*/
if (markHigherBMI == true) {
    console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})`);
}
else console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})`);
