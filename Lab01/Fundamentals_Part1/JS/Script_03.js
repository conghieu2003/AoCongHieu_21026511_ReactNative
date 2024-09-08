let dolphinsScores1 = [96, 108, 89];
let koalasScores1 = [88, 91, 110];

let dolphinsScoresBonus1 = [97, 112, 101];
let koalasScoresBonus1 = [109, 95, 123];

let dolphinsScoresBonus2 = [97, 112, 101];
let koalasScoresBonus2 = [109, 95, 106];

function calculateAverage(scoreArray) {
    let sum = 0;
    for (let i = 0; i < scoreArray.length; i++) {
        sum += scoreArray[i];
    }
    return sum / scoreArray.length;
}

function determineWinner(dolphinsAvg, koalasAvg) {
    if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
        console.log(`Dolphins win with an average score of ${dolphinsAvg.toFixed(2)}!`);
    } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
        console.log(`Koalas win with an average score of ${koalasAvg.toFixed(2)}!`);
    } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
        console.log(`It's a draw with both teams scoring ${dolphinsAvg.toFixed(2)}!`);
    } else {
        console.log('No team wins the trophy!');
    }
}

let dolphinsAvg1 = calculateAverage(dolphinsScores1);
let koalasAvg1 = calculateAverage(koalasScores1);
determineWinner(dolphinsAvg1, koalasAvg1); 

let dolphinsAvgBonus1 = calculateAverage(dolphinsScoresBonus1);
let koalasAvgBonus1 = calculateAverage(koalasScoresBonus1);
determineWinner(dolphinsAvgBonus1, koalasAvgBonus1); 

let dolphinsAvgBonus2 = calculateAverage(dolphinsScoresBonus2);
let koalasAvgBonus2 = calculateAverage(koalasScoresBonus2);
determineWinner(dolphinsAvgBonus2, koalasAvgBonus2); 
