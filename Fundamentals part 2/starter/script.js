"use strict";
/*
const  percentageOfWorld3 = population => (population / 7900)*100;
const percentageOfWorld1 = percentageOfWorld3(141);
console.log(percentageOfWorld1);

const describePopulation = (country, population) => {
    const percentage = percentageOfWorld3(population);
    return `${country} has ${population} milion people, which is about ${percentage}% of the world`;
}
// console.log(describePopulation("China", 1441));*/

//CODING CHALLANGE #1

/*const dolphinsScore1 = 85;
const dolphinsScore2 = 54;
const dolphinsScore3 = 41;
const koalaScore1 = 23;
const koalaScore2 = 34;
const koalaScore3 = 27;
const calcAverage = (score1, score2, score3) => (score1+score2+score3)/3;

const dolphinsAvgScore = calcAverage(dolphinsScore1,dolphinsScore2,dolphinsScore3);
const koalasAvgScore = calcAverage(koalaScore1,koalaScore2,koalaScore3);
function checkWinner (dolphinsAvgScore, koalasAvgScore){
if (dolphinsAvgScore >= 2*koalasAvgScore){
return `Doplhins win (${dolphinsAvgScore} vs ${koalasAvgScore})`;
}
else if (koalasAvgScore >= 2*dolphinsAvgScore)
{
    return `Koalas win (${koalasAvgScore} vs ${dolphinsAvgScore})`;
}
else{
    return `No winner(${koalasAvgScore} vs ${dolphinsAvgScore})`;
 }
}
console.log(checkWinner(dolphinsAvgScore, koalasAvgScore));
*/
//CODING CHALLANGE #2

/*function calcTip(inputBill){
    let tip = 1.20;
    if (inputBill > 50 && inputBill < 300){
        return tip = 1.15;
    } else return tip;
}*/
/*
function calcTip(inputBill){
    return inputBill > 50 && inputBill < 300 ? inputBill * 0.15 :
    inputBill * 0.2;
}
let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])]
console.log(bills, tips);
console.log(total);
*/
/*const myCountry = {
country: "Bosna",
    capital: "Sarajevo",
        language: "Bosanski",
            population: 3,
                neighbours: ["Srbija", "Hrtvatska", "Crna Gora"],

                    describe: function () {
                        console.log(`${this.country} has ${this.neighbours.
                            length} neighbours and the best one is: ${this.
                                neighbours[0]}`)
                    },
checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ?
        true : false;
    // this.isIsland = !Boolean(this.neighbours.length);
}
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

myCountry.population += 2;
console.log(myCountry.population)
myCountry["population"] -= 2;
console.log(myCountry.population)
*/
//  CODING CHALLANGE #3

/*const mark = {
    fullname: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        return this.bmi = this.mass / this.height ** 2;
    }
}
const john = {
    fullname: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
john.calcBMI();
mark.calcBMI();
console.log(`${john.fullname} BMI (${john.
    bmi}) is higher than Mark's (${mark.
        bmi})!`);
*/
/*
function percentageOfWorld(inputPop) {
    return (inputPop / 7900)*100;
}

const populations = [2,35,89,65];
const percentage2 = [];

for (let i = 0;i < populations.length;i++){
    let caclulation = percentageOfWorld(populations[i]);
    percentage2.push(caclulation);
}
console.log(percentage2);
*/
/*const listOfNeighbors = [["Canada", "Mexico"], ["Spain"], ["Norway", 
"Sweden", "Russia"]];
for (let i = 0; i < listOfNeighbors.length; i++){
    for (let k = 0; k < listOfNeighbors[i].length; k++){
        //console.log(listOfNeighbors[i].length);
        console.log(listOfNeighbors[i][k]);
    }

}*/
//CODING CHALLANGE #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];
const tips = [];
const totals = [];

function calcTip(inputBill){
    let tip = 1.20;
    if (inputBill > 50 && inputBill < 300){
        return tip = 1.15;
    } else return tip;
}
for (let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
    console.log(tips[i]);
    let totalCalc = bills[i] * tips[i];
    totals.push(totalCalc);
}
console.log(tips);
console.log(totals);

function calcAverage(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    
    const avg = sum / arr.length;
    return avg;
}
console.log(calcAverage(totals));

