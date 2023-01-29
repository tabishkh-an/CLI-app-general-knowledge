const readLineSync = require('readline-sync')
let score = 0;

const username = readLineSync.question("May I know your name? ");
console.log("Hi " + username);

console.log("Let's play a game!")

questions = [
    {
        question: "Capital of Belgium?",
        answer: "Brussels"
    },
    {
        question: "Which language has the more native speakers: English or Spanish?",
        answer: "Spanish"
    },
    {
        question: "Which planet has the most moons?",
        answer: "Saturn"
    }
]

for (var i = 0; i < questions.length; i++) {
    currentQuestion = questions[i]
    play(currentQuestion.question, currentQuestion.answer)
}


function play(question, answer) {
    const yourAnswer = readLineSync.question(question + " ");
    if (yourAnswer == answer) {
        console.log("You are right!");
        score = score + 1;
    } else {
        console.log("You are wrong!");
    }
    console.log("SCORE: " + score);
    console.log("----------------");
}