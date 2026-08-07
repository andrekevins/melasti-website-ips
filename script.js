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
    },

    {
        question: "Melasti merupakan bagian dari rangkaian persiapan menuju...",
        options: [
            "Hari Raya Nyepi",
            "Hari Kemerdekaan",
            "Hari Raya Galungan",
            "Hari Saraswati"
        ],
        answer: 0
    },

    {
        question: "Salah satu unsur penting dalam Melasti adalah hubungan manusia dengan...",
        options: [
            "Teknologi",
            "Alam",
            "Perdagangan",
            "Olahraga"
        ],
        answer: 1
    },

    {
        question: "Apa makna penyucian dalam Upacara Melasti?",
        options: [
            "Membersihkan diri secara lahir dan batin",
            "Mengumpulkan benda-benda baru",
            "Mempersiapkan makanan",
            "Menghias rumah"
        ],
        answer: 0
    },

    {
        question: "Ke mana masyarakat biasanya melakukan perjalanan dalam prosesi Melasti?",
        options: [
            "Ke pusat perbelanjaan",
            "Ke sumber air seperti laut",
            "Ke sekolah",
            "Ke pasar"
        ],
        answer: 1
    },

    {
        question: "Apa salah satu tujuan Melasti terhadap lingkungan?",
        options: [
            "Menjaga keharmonisan dan kesucian alam",
            "Menggunakan lebih banyak sumber daya",
            "Membangun tempat baru",
            "Menghindari lingkungan sekitar"
        ],
        answer: 0
    },

    {
        question: "Apa yang dimaksud dengan Melasti?",
        options: [
            "Upacara penyucian diri dan alam",
            "Upacara pernikahan",
            "Upacara panen",
            "Upacara kelahiran"
        ],
        answer: 0
    },

    {
        question: "Kapan Upacara Melasti umumnya dilakukan?",
        options: [
            "Beberapa hari menjelang Nyepi",
            "Setelah Hari Raya Nyepi",
            "Setiap akhir tahun",
            "Saat musim panen"
        ],
        answer: 0
    },

    {
        question: "Mengapa laut atau sumber air memiliki peran penting dalam Melasti?",
        options: [
        "Sebagai tempat rekreasi",
        "Sebagai tempat penyucian",
        "Sebagai tempat berdagang",
        "Sebagai tempat perlombaan"
        ],
        answer: 1
    },

    {
        question: "Apa yang dilakukan umat saat mengikuti prosesi Melasti?",
        options: [
            "Mengikuti perjalanan menuju sumber air",
            "Mengadakan pertandingan",
            "Membuat perlombaan",
            "Pergi berbelanja"
        ],
        answer: 0
    },

    {
        question: "Melasti mengajarkan manusia untuk menjaga hubungan yang harmonis dengan...",
        options: [
            "Alam dan lingkungan",
            "Perdagangan",
            "Teknologi",
            "Transportasi"
        ],
        answer: 0
    },

    {
        question: "Salah satu makna air dalam Upacara Melasti adalah sebagai simbol...",
        options: [
            "Penyucian",
            "Kekayaan",
            "Persaingan",
            "Kekuatan fisik"
        ],
        answer: 0
    },

    {
        question: "Apa yang menjadi salah satu tujuan spiritual dari Melasti?",
        options: [
            "Membersihkan diri dari hal-hal negatif",
            "Mendapatkan hadiah",
            "Memenangkan perlombaan",
            "Mengumpulkan makanan"
        ],
        answer: 0
        },

    {
        question: "Mengapa masyarakat biasanya mengikuti Melasti secara bersama-sama?",
        options: [
            "Untuk memperkuat kebersamaan dan keharmonisan",
            "Untuk menentukan pemenang",
            "Untuk mencari pekerjaan",
            "Untuk melakukan perdagangan"
        ],
        answer: 0
    },

    {
        question: "Selain penyucian diri, Melasti juga berkaitan dengan penyucian...",
        options: [
            "Alam semesta",
            "Kendaraan",
            "Bangunan sekolah",
            "Peralatan olahraga"
        ],
        answer: 0
    },

    {
        question: "Sikap apa yang sebaiknya ditunjukkan saat mengikuti Upacara Melasti?",
        options: [
            "Menghormati prosesi dan menjaga lingkungan",
            "Bermain-main selama upacara",
            "Membuang sampah sembarangan",
            "Mengganggu peserta lain"
        ],
        answer: 0
    }

];


// ==================== QUIZ VARIABLES ====================

let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];
let usedQuestions = [];
let selectedAnswer = null;
let answerConfirmed = false;
let showingResult = false;


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


// ==================== SHUFFLE ====================

function shuffleArray(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
            [shuffled[j], shuffled[i]];

    }

    return shuffled;

}


// ==================== CREATE QUIZ ====================

function createQuiz() {

    let availableQuestions =
        quizQuestions.filter(
            (question, index) =>
                !usedQuestions.includes(index)
        );


    // Kalau soal yang tersisa kurang dari 5,
    // mulai kembali dari awal
    if (availableQuestions.length < 5) {

        usedQuestions = [];

        availableQuestions = [...quizQuestions];

    }


    const questionPool =
        availableQuestions.map(question => ({
            question: question,
            index: quizQuestions.indexOf(question)
        }));


    const selected =
        shuffleArray(questionPool)
            .slice(0, 5);


    selectedQuestions =
        selected.map(item => {

            usedQuestions.push(item.index);


            const question =
                item.question;


            const shuffledOptions =
                question.options.map((option, index) => ({

                    text: option,

                    correct:
                        index === question.answer

                }));


            return {

                question: question.question,

                options:
                    shuffleArray(shuffledOptions)

            };

        });


    currentQuestion = 0;

    score = 0;

    selectedAnswer = null;

    answerConfirmed = false;

    showingResult = false;

}


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
        selectedQuestions[currentQuestion];


    selectedAnswer = null;
    answerConfirmed = false;


    questionNumber.textContent =
        `Pertanyaan ${currentQuestion + 1} dari 5`;


    questionText.textContent =
        question.question;


    optionsContainer.innerHTML = "";


    question.options.forEach((option, index) => {

        const button =
            document.createElement("button");


        button.classList.add("quiz-option");

        button.type = "button";

        button.textContent =
            option.text;


        button.addEventListener("click", () => {

            selectAnswer(index);

        });


        optionsContainer.appendChild(button);

    });


    progressBar.style.width =
        `${((currentQuestion + 1) / 5) * 100}%`;


    nextButton.style.display =
        "none";

    nextButton.textContent =
        currentQuestion === 4
            ? "Lihat Hasil"
            : "Pertanyaan Berikutnya";

}


// ==================== SELECT ANSWER ====================

function selectAnswer(index) {

    if (answerConfirmed) {
        return;
    }


    selectedAnswer = index;


    const options =
        document.querySelectorAll(".quiz-option");


    options.forEach((button, buttonIndex) => {

        button.classList.remove("selected");

        if (buttonIndex === index) {

            button.classList.add("selected");

        }

    });


    nextButton.textContent =
        "Konfirmasi Jawaban";


    nextButton.style.display =
        "block";

}


// ==================== CONFIRM ANSWER ====================

function confirmAnswer() {

    if (
        selectedAnswer === null ||
        answerConfirmed
    ) {
        return;
    }


    answerConfirmed = true;


    const question =
        selectedQuestions[currentQuestion];


    const options =
        document.querySelectorAll(".quiz-option");


    options.forEach(button => {

        button.disabled = true;

        button.classList.remove("selected");

    });


    if (
        question.options[selectedAnswer].correct
    ) {

        score++;


        options[selectedAnswer]
            .classList.add("correct");

    } else {

        options[selectedAnswer]
            .classList.add("wrong");


        const correctIndex =
            question.options.findIndex(
                option => option.correct
            );


        options[correctIndex]
            .classList.add("correct");

    }


    nextButton.textContent =
        currentQuestion === 4
            ? "Lihat Hasil"
            : "Pertanyaan Berikutnya";

}


// ==================== NEXT BUTTON ====================

if (nextButton) {

    nextButton.addEventListener("click", () => {

        if (showingResult) {

            createQuiz();

            loadQuestion();

            return;

        }


        if (!answerConfirmed) {

            confirmAnswer();

            return;

        }


        if (currentQuestion < 4) {

            currentQuestion++;

            loadQuestion();

            return;

        }


        showResult();

    });

}


// ==================== SHOW RESULT ====================

function showResult() {

    showingResult = true;


    questionNumber.textContent =
        "Quiz Selesai!";


    questionText.textContent =
        `Kamu mendapatkan ${score} dari 5 jawaban benar.`;


    optionsContainer.innerHTML = "";


    const resultMessage =
        document.createElement("p");


    resultMessage.classList.add(
        "quiz-result-message"
    );


    if (score === 5) {

        resultMessage.textContent =
            "Luar biasa! Kamu benar-benar mengenal Melasti.";

    } else if (score >= 3) {

        resultMessage.textContent =
            "Bagus! Kamu sudah cukup mengenal Melasti.";

    } else {

        resultMessage.textContent =
            "Yuk pelajari lagi tentang Melasti dan coba kembali!";

    }


    optionsContainer.appendChild(
        resultMessage
    );


    progressBar.style.width =
        "100%";


    nextButton.textContent =
        "Coba Lagi";


    nextButton.style.display =
        "block";

}


// ==================== START QUIZ ====================

createQuiz();

loadQuestion();

/* ==================== MOBILE NAVIGATION ==================== */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");


if(menuToggle && navLinks){

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });


    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}