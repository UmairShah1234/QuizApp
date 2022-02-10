qtArray = [
    {
        question: "Who is ShahRukh Khan?",
        a: "Actor",
        b: "Crickter",
        c: "Singer",
        d: "Director",
        correct: "a",
    },
    {
        question: "Where is Tokyo located?",
        a: "China",
        b: "India",
        c: "Turkey",
        d: "Japan",
        correct: "d",
    },
    {
        question: "Who is the current President of US?",
        a: "Donald Trump",
        b: "Barrack Obama",
        c: "Joe Biden",
        d: "George Bush",
        correct: "c",
    },
    {
        question: "who invented bulb?",
        a: "Thomas Edison",
        b: "Hiram Maxim",
        c: "Nicolas Tesla",
        d: "Galileo Galilei",
        correct: "a",
    },
    {
        question: "Who won 2014 football World Cup? ",
        a: "Spain",
        b: "Germany",
        c: "France",
        d: "Brazil",
        correct: "b",
    },
    {
        question: "When WW2 came to end?",
        a: "1945",
        b: "1939",
        c: "1918",
        d: "1942",
        correct: "a",
    },
    {
        question: "What did Christopher Columbus discover ?",
        a: "North America",
        b: "India",
        c: "America",
        d: "China",
        correct: "c",
    },
    {
        question: "Who is richest man in the world?",
        a: "Jeff Bezos",
        b: "Mukesh Ambani",
        c: "Elon Musk",
        d: "Warren Buffet",
        correct: "c",
    },
    {
        question: "Who is Spider-man?",
        a: "Tom Holland",
        b: "Toby Maguire",
        c: "Andrew Garfield",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Which programming language is used in AI?",
        a: "Python",
        b: "Java",
        c: "Javascript",
        d: "C#",
        correct: "a",
    },
]

var qts = document.getElementById("qts");
var ans1 = document.getElementById("1");
var ans2 = document.getElementById("2");
var ans3 = document.getElementById("3");
var ans4 = document.getElementById("4");
var header = document.getElementById("header");
var input = document.querySelectorAll(".input");
var quizTitle = document.querySelector(".quiz");
var currentQuiz = 0;
var currentScore = 0;
var qtno = 1;
function display() {
    deSelect();
    qts.innerText = qtArray[currentQuiz].question;
    ans1.innerText = qtArray[currentQuiz].a;
    ans2.innerText = qtArray[currentQuiz].b;
    ans3.innerText = qtArray[currentQuiz].c;
    ans4.innerText = qtArray[currentQuiz].d;
    header.innerHTML = "Q" + qtno;
    if (currentQuiz <= 2) {
        quizTitle.innerText = "Quiz Time! Lets check your knowlegde"
    } else if (currentQuiz > 2 && currentQuiz < 6) {
        quizTitle.innerText = "Go On there are more"
    } else if (currentQuiz >= 6 && currentQuiz < 10) {
        quizTitle.innerText = "A few more to go"
    } else if (currentQuiz == 10) {
        quizTitle.innerText = "This is the last one"
    }

}
display();

function checkAnswer() {
    let answer = undefined;
    input.forEach(i => {
        if (i.checked) {
            answer = i.id;
        }
    });
    return answer;
}

function deSelect() {
    input.forEach((i) => {
        i.checked = false;
    })
}

const btn = document.getElementById("btn");
btn.addEventListener(("click"), () => {
    const answer = checkAnswer();
    if (answer) {
        if (answer == qtArray[currentQuiz].correct) {
            currentScore++;
        }
    }
    currentQuiz++;
    qtno++;
    if (currentQuiz < qtArray.length) {
        display();
    } else {
        if (currentScore == 10) {
            document.querySelector(".box").innerHTML = `<h2>Quiz Over</h2>
            <h3>Your Score is ${currentScore}. Congratulations! You are Genius </h3>
            <button onclick="location.reload()" id="reload">Reload</button>`
                ;
            quizTitle.innerText = "Result"

        } else if (currentScore < 10 && currentScore > 5) {
            document.querySelector(".box").innerHTML = `<h2>Quiz Over</h2>
            <h3>Your Score is ${currentScore}. Congrats! you are smart</h3>
            <button onclick="location.reload()" id="reload">Reload</button>`
                ;
            quizTitle.innerText = "Result"

        } else if (currentScore < 5 && currentScore > 1) {
            document.querySelector(".box").innerHTML = `<h2 >Quiz Over</h2>
            <h3>Your Score is ${currentScore}. Hmmm! You can work on it</h3>
            <button onclick="location.reload()" id="reload">Reload</button>`
                ;
            quizTitle.innerText = "Result"
        } else {
            document.querySelector(".box").innerHTML = `<h2>Quiz Over</h2>
            <h3>Your Score is ${currentScore}. OOps! Try again</h3>
            <button onclick="location.reload()" id="reload">Reload</button>`
                ;
            quizTitle.innerText = "Result"


        }

    }



})