const questions = require('./quiz-questions.json');

let prompt = require('prompt-sync')();
let tstart = new Date().getTime();
let tend = new Date().getTime();
let quizTime = 0;
let numWrong = 0;
let numCorrect = 0;

for (i = 0; i < 3; i++) {
    let difficulty = 1;
    tstart = new Date().getTime();
    //console.log(tstart);
    let userAnswer = prompt(questions[i].question);
    if (typeof(userAnswer) === "string") {
        userAnswer = userAnswer.toLowerCase();
    }
    if (userAnswer === questions[i].answer) {
        console.log('Correct! The answer is',questions[i].answer);
        numCorrect++;
        difficulty++;
        } else {
        console.log('Sorry',userAnswer,'is incorrect. The correct answer is',questions[i].answer,'.')
        numWrong++;
    }
    tend = new Date().getTime();
    //console.log(tend);
    quizTime = quizTime + (tend-tstart);
}
console.log('You answered',numCorrect,'question correct');
console.log('You answered',numWrong,'question incorrect');
console.log('You took',quizTime/1000,'seconds.')
