// ==================== NAVBAR SCROLL ====================

const header = document.querySelector("header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}


// ==================== SMOOTH SCROLL ====================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const targetId = link.getAttribute("href");

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ==================== LANGUAGE SWITCH ====================

const languageButtons =
    document.querySelectorAll(".language-switch button");

languageButtons.forEach(button => {

    button.addEventListener("click", () => {

        languageButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });

});


// ==================== QUIZ DATA ====================

const quizQuestions = [

    {
        question: "Di mana Upacara Melasti biasanya dilaksanakan?",

        options: [
            "Di gunung",
            "Di laut atau sumber air",
            "Di dalam rumah",
            "Di sawah"
        ],

        answer: 1
    },

    {
        question: "Apa tujuan utama dari Upacara Melasti?",

        options: [
            "Merayakan panen",
            "Menyambut musim hujan",
            "Penyucian diri dan alam",
            "Memperingati hari kelahiran"
        ],

        answer: 2
    },

    {
        question: "Melasti biasanya dilaksanakan menjelang hari raya apa?",

        options: [
            "Galungan",
            "Kuningan",
            "Nyepi",
            "Saraswati"
        ],

        answer: 2
    },

    {
        question: "Apa yang biasanya dibawa dalam prosesi Melasti?",

        options: [
            "Pratima dan sarana upacara",
            "Alat olahraga",
            "Peralatan memasak",
            "Buku pelajaran"
        ],

        answer: 0
    },

    {
        question: "Salah satu nilai penting dalam Melasti adalah...",

        options: [
            "Persaingan",
            "Menjaga keseimbangan dengan alam",
            "Mengumpulkan kekayaan",
            "Berlomba menjadi yang tercepat"
        ],

        answer: 1
    }

];


// ==================== QUIZ VARIABLES ====================

let currentQuestion = 0;

let score = 0;

let answerSelected = false;


// ==================== QUIZ ELEMENTS ====================

const questionNumber =
    document.querySelector(".quiz-question-number");

const questionText =
    document.querySelector(".quiz-question h3");

const optionsContainer =
    document.querySelector(".quiz-options");

const nextButton =
    document.querySelector(".quiz-next");

const progressBar =
    document.querySelector(".quiz-progress-bar");


// ==================== LOAD QUESTION ====================

function loadQuestion() {

    if (
        !questionNumber ||
        !questionText ||
        !optionsContainer ||
        !nextButton ||
        !progressBar
    ) {

        return;

    }

    const question =
        quizQuestions[currentQuestion];

    answerSelected = false;


    questionNumber.textContent =
        `Pertanyaan ${currentQuestion + 1} dari ${quizQuestions.length}`;


    questionText.textContent =
        question.question;


    optionsContainer.innerHTML = "";


    question.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.classList.add("quiz-option");

        button.type = "button";

        button.textContent =
            option;


        button.addEventListener("click", () => {

            selectAnswer(index);

        });


        optionsContainer.appendChild(button);

    });


    progressBar.style.width =
        `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;


    nextButton.style.display =
        "none";

}


// ==================== SELECT ANSWER ====================

function selectAnswer(selectedAnswer) {

    if (answerSelected) {
        return;
    }

    answerSelected = true;


    const question =
        quizQuestions[currentQuestion];


    const options =
        document.querySelectorAll(".quiz-option");


    options.forEach(button => {

        button.disabled = true;

    });


    if (selectedAnswer === question.answer) {

        score++;


        options[selectedAnswer].classList.add("correct");

    } else {

        options[selectedAnswer].classList.add("wrong");

        options[question.answer].classList.add("correct");

    }


    nextButton.style.display =
        "block";


    if (currentQuestion === quizQuestions.length - 1) {

        nextButton.textContent =
            "Lihat Hasil";

    } else {

        nextButton.textContent =
            "Pertanyaan Berikutnya";

    }

}


// ==================== NEXT QUESTION ====================

if (nextButton) {

    nextButton.addEventListener("click", () => {

        if (!answerSelected) {
            return;
        }


        currentQuestion++;


        if (currentQuestion < quizQuestions.length) {

            loadQuestion();

        } else {

            showResult();

        }

    });

}


// ==================== SHOW RESULT ====================

function showResult() {

    questionNumber.textContent =
        "Quiz Selesai!";


    questionText.textContent =
        `Kamu mendapatkan ${score} dari ${quizQuestions.length} jawaban benar.`;


    optionsContainer.innerHTML = "";


    const resultMessage =
        document.createElement("p");

    resultMessage.classList.add("quiz-result-message");


    if (score === quizQuestions.length) {

        resultMessage.textContent =
            "Luar biasa! Kamu benar-benar mengenal Melasti.";

    } else if (score >= 3) {

        resultMessage.textContent =
            "Bagus! Kamu sudah cukup mengenal Melasti.";

    } else {

        resultMessage.textContent =
            "Yuk pelajari lagi tentang Melasti dan coba kembali!";

    }


    optionsContainer.appendChild(resultMessage);


    progressBar.style.width =
        "100%";


    nextButton.textContent =
        "Coba Lagi";


    nextButton.style.display =
        "block";


    answerSelected = true;

}


// ==================== RESTART QUIZ ====================

if (nextButton) {

    nextButton.addEventListener("click", () => {

        if (
            currentQuestion >= quizQuestions.length &&
            answerSelected
        ) {

            restartQuiz();

        }

    });

}


function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    answerSelected = false;

    nextButton.textContent =
        "Pertanyaan Berikutnya";

    loadQuestion();

}


// ==================== START QUIZ ====================

loadQuestion();