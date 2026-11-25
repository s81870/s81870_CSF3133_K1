const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper text Markup Languange",
            "High Tech Modern Languange",
            "Hyperlink and Text Markup"
        ],
        answer: "Hyper Text Markup Languange"
    },
    {
        question: "Which languange is used for styling web pages?",
        options: ["HTML", "CSS", "Python"],
        answer: "CSS"
    },
    {
        question: "Which keyword declares a constant in JavaScript?",
        options: ["var", "let", "const"],
        answer: "const"
    },

    {
        question: "Which type of translator converts high-level programming code into machine code line-by-line during execution?",
        options: ["Compiler", "Assembler", "Interpreter", "Linker"],
        answer: "Interpreter"
    }
    
];

let currentIndex = 0;
let score = 0;
let timeLeft = 10;
let timer;

function shuffleQuestions(){
    questions.sort(() => Math.random() - 0.5);
}

function startTime(){
    clearInterval(timer);
    timeLeft = 10;
    document.getElementById("timer").textContent = "Time Left: " + timeLeft + "s";

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = "Time Left: " + timeLeft + "s";

        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("feedback").textContent = "Time's up!";
        }
    }, 1000);
}

function displayQuestion(){
    const q = questions[currentIndex];
    document.getElementById("question").textContent = q.question;
    document.getElementById("feedback").textContent = "";

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(opt => {
        optionsDiv.innerHTML += `
            <label> 
                <input type ="radio" name="option" value="${opt}"> ${opt}
            </label>
            `;
    });

    startTimer();
}

function checkAnswer(){
    clearInterval(timer);
    const selected = document.querySelector('input[name="option"]:checked');

    if (!selected){
        document.getElemnentById("feedback").textContent = "Please select an answer!";
        return;
    }

    if (selected.value === questions[currentIndex].answer){
        score++;
        document.getElementById("feedback").textContent = "Correct!";
    } else {
        document.getElementById("feedback").textContent = "Incorrect! Answer: " + questions[currentIndex].answer;
    }

    document.getElementById("score").textContent = "Score: " + score;
}

function nextQuestion(){
    currentIndex++;
    if (currentIndex < questions.length) {
        displayQuestion();
    } else {
        clearInterval(timer);
        document.getElementById("question").textContent = "Quiz Finished!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("feedback").textContent = "";
        document.getElementById("score").textContent = "Final Score: " + score + " / " + questions.length;
    }
}

function startQuiz(){
    shuffleQuestions();
    displayQuestion();
}

startQuiz();