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

const dolphinsScore1 = 85;
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



