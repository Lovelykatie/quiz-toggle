const toggleBtn = document.getElementById("theme-toggle");
const page = document.getElementById("page");

toggleBtn.addEventListener("click", () => {
    page.classList.toggle("dark");

    if (page.classList.contains('dark')) {
        page.classList.replace("bg-white", "bg-gray-900");
        page.classList.replace("text-black", "text-white");
    } else {
        page.classList.replace("bg-gray-900", "bg-white");
        page.classList.replace("text-white", "text-black");
    }
});


 
 const questions = [
    {
        question: "What is the largest ocean in the world?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3 
    },

    {
        question: "What is 5 + 2?",
        answers: ["12", "9", "6", "7"],
        correct: 3 
    },

    {
        question: "What is the capital of Yobe State?",
        answers: ["Minna", "Benin", "Damaturu", "Asaba"],
        correct: 2
    },

    {
        question: "Choose the odd one",
        answers: ["Ship", "Bus", "Car","Motorcycle"],
        correct: 0
    },

    {
        question: "What is the largest organ in the human body?",
        answers: ["Heart", "Skin", "Brain","Liver"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function showQuestion() {
    const current = questions[currentQuestionIndex];
    questionEl.textContent = current.question;
    answersEl.innerHTML = "";

    current.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.className = "answer-btn block w-full px-4 py-2 bg-white dark:bg-gray-700 dark:text-white border rounded transition-colors duration-200";
        btn.onclick = () => selectAnswer(index);
        answersEl.appendChild(btn);
    });

    nextBtn.style.display = "none";
}

function selectAnswer(index) {
    const buttons = answersEl.querySelectorAll(".answer-btn");

    buttons.forEach((btn, i) => {

        btn.classList.remove("bg-blue-500", "text-white", "selected");
        btn.classList.add("bg-white", "dark:bg-gray-700", "dark:text-white");

        if (i === index) {
            btn.classList.remove("bg-white", "dark:bg-gray-700", "dark:text-white");
            btn.classList.add("bg-blue-500", "text-white", "selected");
        }
    });

    selectedAnswerIndex = index;
    nextBtn.style.display = "block";
}


nextBtn.onclick = () => {
    const correct = questions[currentQuestionIndex].correct;
    if (selectedAnswerIndex === correct) {
        score++;
    }

    currentQuestionIndex++;
    selectedAnswerIndex = null;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
};

function showScore() {
    questionEl.style.display = "none";
    answersEl.style.display = "none";
    nextBtn.style.display = "none";
    scoreEl.style.display = "block";
    scoreEl.textContent = `Score: ${score} / ${questions.length}`;
    document.getElementById("back-btn").style.display = "block";

}

const backBtn = document.getElementById("back-btn");

backBtn.onclick = () => {
    
    currentQuestionIndex = 0;
    score = 0;

    questionEl.style.display = "block";
    answersEl.style.display = "block";
    nextBtn.style.display = "none";
    scoreEl.style.display = "none";
    backBtn.style.display = "none";

    showQuestion();
};

showQuestion();

