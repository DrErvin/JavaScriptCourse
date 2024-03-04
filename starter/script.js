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
/*if (markHigherBMI == true) {
    console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})`);
}
else console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})`);
*/
/*
const numNeighbors = Number(prompt("How many neighbour countries does your country have?"));
if(numNeighbors === 1){
    console.log("Only 1 neighbor");
}
else{
    console.log("Zero or more than one neighbor");
}*/
/*const country = "Portugal"
const language = "english";
const population = 34;
const isIsland = false;

if (language === "english" && population < 50 && !isIsland) {
    console.log(`You should live in ${country}!`);
}
else console.log(`${country} doesn't meet you criteria`);
*/
/* 
There are two gymnastics teams, Dolphins and Koalas. They compete 
against each other 3 times. The winner with the highest average 
score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data 
below
2. Compare the team's average scores to determine the winner of 
the competition, and print it to the console. Don't forget that 
there can be a draw, so test for that as well (draw means they have
 the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With 
this rule, a team only wins if it has a higher score than the other 
team, and the same time a score of at least 100 points. Hint: Use a 
logical operator to test for minimum score, as well as multiple 
else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only 
happens when both teams have the same score and both have a score 
greater or equal 100 points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK �
*/
/*
const dolphinsFirstTake = 97;
const dolphinsSecondTake = 112;
const dolphinsThirdTake = 101;
const koalasFirstTake = 109;
const koalasSecondTake = 95;
const koalasThirdTake = 106;

const dolphinsAvg = (dolphinsFirstTake + dolphinsSecondTake + dolphinsThirdTake) / 3;
const koalasAvg = (koalasFirstTake + koalasSecondTake + koalasThirdTake) / 3;

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log(`Dolphins win the trophy with the average score of: ${dolphinsAvg} points!`)
}
else if (dolphinsAvg >= 100 && koalasAvg >= 100 && dolphinsAvg === koalasAvg) {
    console.log(`The score is equal for the both teams`);
}
else if (koalasAvg >= 100) {
    console.log(`Koalas win the trophy with the average score of: ${koalasAvg} points!`)
}
else {
    console.log(`No teams reached more than 100 points!`);
}
*/
//const countryPop = 35;

//countryPop > 33 ? console.log(`Country pop is above average`) : console.log(`Country pop is below average`);
/* 
Coding Challenge #4 
Steven wants to build a very simple tip calculator for whenever he goes eating 
in a restaurant. In his country, it's usual to tip 15% if the bill value is 
between 50 and 300. If the value is different, the tip is 20%. 
Your tasks: 
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement 
�
� (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!) 
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25” 
Test data: 
§ Data 1: Test for bill values 275, 40 and 430 
Hints: 
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2 
§ Value X is between 50 and 300, if it's >= 50 && <= 300 
GOOD LUCK 
�
*/
let tip;
const bill = 275;
bill >= 50 && bill <= 300 ? console.log(``):null;
