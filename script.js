// --- Quiz Data and Logic ---
const quizData = {
    question: "What is the main goal of the Melasti ritual?",
    options: [
        "A) To celebrate a harvest festival",
        "B) To purify the soul and universe of negative energy",
        "C) To race boats on the ocean"
    ],
    correct: 1
};

function loadQuiz() {
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");

    questionEl.textContent = quizData.question;
    optionsEl.innerHTML = "";

    quizData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("quiz-btn");
        
        button.addEventListener("click", () => checkAnswer(index));
        optionsEl.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const resultEl = document.getElementById("result-message");

    if (selectedIndex === quizData.correct) {
        resultEl.textContent = "Correct! Melasti purifies the soul and universe.";
        resultEl.style.color = "#48bb78";
    } else {
        resultEl.textContent = "Incorrect. Try again!";
        resultEl.style.color = "#f56565";
    }
}

loadQuiz();