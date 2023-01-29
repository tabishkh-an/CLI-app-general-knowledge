const chalk = require('chalk');
const readLineSync = require('readline-sync');

let score = 0;

const quizArray = [
    {
        question: "What's the smallest country in the world?",
        answer: "Hum, Croatia",
        options: ["St. Asaph, Wales", "Hum, Croatia", "Adamstown, Pitcairn Islands"]
    },
    {
        question: "What country is responsible for creating the Olympic Games?",
        answer: "Greece",
        options: ["Germany", "Greece", "Poland"]
    },
    {
        question: "What sport is dubbed the king of sports?",
        answer: "Soccer",
        options: ["Tennis", "Basketball", "Soccer"]

    },
    {
        question: "Dump, floater, and wipe are terms used in which team sport?",
        answer: "Volleyball",
        options: ["Tennis", "Basketball", "Volleyball"]

    },
    {
        question: "Which country borders 14 nations and crosses 8 time zones?",
        answer: "Russia",
        options: ["Russia", "China", "India"]

    },
    {
        question: "What is the opposite of matter?",
        answer: "Antimatter",
        options: ["Darkmatter", "Nomatter", "Antimatter"]

    },
    {
        question: "The name of which African animal means river horse?",
        answer: "Hippopotamus",
        options: ["Hippopotamus", "Seahorse", "Crocodile"]

    },
    {
        question: "What's the largest bone in the human body?",
        answer: "Femur",
        options: ["Humerus", "Tibia", "Femur"]

    },
    {
        question: "Which language has the more native speakers?",
        answer: "Mandarin Chinese",
        options: ["English", "Spanish", "Mandarin Chinese"]

    },
    {
        question: "What is the strongest muscle in the human body?",
        answer: "masseter",
        options: ["Masseter", "tongue", " Stapedius"]

    }
]

let highScoreChecked = false;

const highScores = {
    name: "Rim",
    score: 1,
}


var username = readLineSync.question("May I know your name? ");
console.log("Hi " + username);
console.log("Lets play a game!");

for (let i = 0; i < quizArray.length; i++) {
    let currentQuestion = quizArray[i];

    play(currentQuestion.options, currentQuestion.question, currentQuestion.answer)

    levelTwo()

    if (!highScoreChecked) {
        checkHighScore()
    }

    if (i == quizArray.length - 1) {
        console.log("****** THE END! ******")
    }
}

function play(options, question, answer) {
    let useranswer = readLineSync.keyInSelect(options, chalk.bgYellow(question) + " ")

    if (useranswer === -1) {
        console.log("-----------------------");
        return;
    }
    else if (options[useranswer].toUpperCase() === answer.toUpperCase()) {
        console.log(chalk.bold.green("You are right!"));
        score += 1
    } else {
        console.log(chalk.bold.red("You are wrong!"));
    }

    console.log("SCORE: " + score);
    console.log("-----------------------");
}

function levelTwo() {
    if (score === 5) {
        console.log("****** Welcome to LEVEL 2! ******")

        score = score + 2

        console.log("****** BONUS POINTS🥳 ******");
        console.log("SCORE: " + score);
        console.log("-----------------------");
    } else if (score === 3) {
        console.log("****** Answer 2 more correct to reach LEVEL 2 ******");
        console.log("****** SURPRISE awaits! ******");
        console.log("-----------------------");
    }
}

function checkHighScore() {
    if (score > highScores.score) {
        console.log("\n");
        console.log("-----------------------");
        console.log(chalk.cyanBright("HIGH SCORE!!!.") + " You beat " + chalk.redBright(highScores.name) + ".");
        console.log(chalk.redBright(username) + ", please send a screenshot of your high score.");
        console.log("-----------------------");

        highScoreChecked = true;
    }
}