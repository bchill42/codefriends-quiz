const questions = require('./quiz-questions.json');

let prompt = require('prompt-sync')();
let tstart = new Date().getTime();
let tend = new Date().getTime();
let quizTime = 0;
let numWrong = 0;
let numCorrect = 0;

for (let i = 0; i < questions.length; i++) {
    let difficulty = 1;
    //console.log(tstart);
    let userAnswer = prompt(questions[i].question).toLowerCase();
    if (userAnswer === questions[i].answer) {
        console.log('Correct! The answer is',questions[i].answer);
        numCorrect++;
        difficulty++;
    } else {
        console.log('Sorry',userAnswer,'is incorrect. The correct answer is',questions[i].answer,'.')
        numWrong++;
    }
    //console.log(tend);
}
tend = new Date().getTime();
quizTime = tend-tstart;
console.log('You answered',numCorrect,'question correct');
console.log('You answered',numWrong,'question incorrect');
console.log('You took',quizTime/1000,'seconds.')
