// ==================== Refresh Bug Fix ====================
window.history.scrollRestoration = "manual";

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});



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

// ==================== NEW QUIZ SYSTEM ====================

let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];
let selectedAnswer = null;
let answerConfirmed = false;

const quizMultipleChoice =
document.querySelector(".quiz-multiple-choice");

const quizFillBlank =
document.querySelector(".quiz-fill-blank");

const quizReflection =
document.querySelector(".quiz-reflection");

const quizFinalResult =
document.querySelector(".quiz-final-result");

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

const fillAnswer =
document.querySelector(".fill-answer");

const fillSubmit =
document.querySelector(".fill-submit");

const fillFeedback =
document.querySelector(".fill-feedback");

const reflectionAnswer =
document.querySelector(".reflection-answer");

const reflectionSubmit =
document.querySelector(".reflection-submit");

const reflectionFeedback =
document.querySelector(".reflection-feedback");

const quizScore =
document.querySelector(".quiz-score");

const quizResultMessage =
document.querySelector(".quiz-final-result .quiz-result-message");

const quizRestart =
document.querySelector(".quiz-restart");

// ==================== QUIZ FUNCTIONS ====================

function shuffleArray(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
            [shuffled[j], shuffled[i]];

    }

    return shuffled;

}


function startQuiz() {

    if (!quizMultipleChoice) {
        return;
    }

    currentQuestion = 0;

    score = 0;

    selectedAnswer = null;

    answerConfirmed = false;


    selectedQuestions =
        shuffleArray(quizQuestions).slice(0, 5).map(question => {

            const options =
                question.options.map((option, index) => ({

                    text: option,

                    correct: index === question.answer

                }));


            return {

                question: question.question,

                options: shuffleArray(options)

            };

        });


    quizMultipleChoice.hidden = false;

    quizFillBlank.hidden = true;

    quizReflection.hidden = true;

    quizFinalResult.hidden = true;


    loadQuestion();

}


function loadQuestion() {

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


        button.type = "button";

        button.classList.add("quiz-option");

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
            ? "Lanjut ke Isian"
            : "Pertanyaan Berikutnya";

}


function nextQuestion() {

    if (!answerConfirmed) {

        confirmAnswer();

        return;

    }


    if (currentQuestion < 4) {

        currentQuestion++;

        loadQuestion();

        return;

    }


    showFillBlank();

}


function showFillBlank() {

    quizMultipleChoice.hidden = true;

    quizFillBlank.hidden = false;

    quizReflection.hidden = true;

    quizFinalResult.hidden = true;


    fillAnswer.value = "";

    fillFeedback.textContent = "";

}

// ==================== FILL IN THE BLANK ====================

function checkFillBlank() {

    const answer =
        fillAnswer.value.trim().toLowerCase();


    if (!answer) {

        fillFeedback.textContent =
            "Silakan isi jawaban terlebih dahulu.";

        return;

    }


    if (
        answer === "nyepi" ||
        answer === "hari raya nyepi"
    ) {

        score++;

        fillFeedback.innerHTML =
            "Benar! Melasti dilaksanakan menjelang Hari Raya <u>Nyepi</u>.";

    } else {

        fillFeedback.innerHTML =
            "Belum tepat. Jawaban yang benar adalah Hari Raya <u>Nyepi</u>.";

    }


    fillSubmit.disabled = true;


    setTimeout(() => {

        showReflection();

    }, 1200);

}


function showReflection() {

    quizMultipleChoice.hidden = true;

    quizFillBlank.hidden = true;

    quizReflection.hidden = false;

    quizFinalResult.hidden = true;


    reflectionAnswer.value = "";

    reflectionFeedback.textContent = "";

}

// ==================== REFLECTION ====================

function submitReflection() {

    const answer =
        reflectionAnswer.value.trim();


    if (!answer) {

        reflectionFeedback.textContent =
            "Silakan tuliskan jawabanmu terlebih dahulu.";

        return;

    }


    reflectionFeedback.textContent =
        "Jawabanmu sudah dicatat. Terima kasih sudah berbagi pendapat!";


    reflectionSubmit.disabled = true;


    setTimeout(() => {

        showFinalResult();

    }, 1200);

}

// ==================== FINAL RESULT ====================

function showFinalResult() {

    quizMultipleChoice.hidden = true;

    quizFillBlank.hidden = true;

    quizReflection.hidden = true;

    quizFinalResult.hidden = false;


    quizScore.textContent =
        `${score} / 6`;


    if (score === 6) {

        quizResultMessage.textContent =
            "Luar biasa! Kamu benar-benar memahami Melasti.";

    } else if (score >= 4) {

        quizResultMessage.textContent =
            "Bagus! Kamu sudah cukup memahami Melasti.";

    } else {

        quizResultMessage.textContent =
            "Masih bisa ditingkatkan! Coba baca kembali materi Melasti.";

    }

}

// ==================== QUIZ EVENT LISTENERS ====================

if (quizMultipleChoice) {

    nextButton.addEventListener("click", () => {

        nextQuestion();

    });


    fillSubmit.addEventListener("click", () => {

        checkFillBlank();

    });


    reflectionSubmit.addEventListener("click", () => {

        submitReflection();

    });


    quizRestart.addEventListener("click", () => {

        fillSubmit.disabled = false;

        reflectionSubmit.disabled = false;

        startQuiz();

    });


    startQuiz();

}

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

// ==================== BACK TO TOP ====================

const backToTop =
    document.querySelector(".back-to-top");


if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("visible");

        } else {

            backToTop.classList.remove("visible");

        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

// ==================== SCROLL REVEAL ====================

const revealElements =
document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale"
);

const revealObserver =
new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(
                    entry.target
                );

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {

    revealObserver.observe(element);

});

// ==================== HERO PARALLAX ====================

const hero = document.querySelector(".hero");
const heroBackground =
    document.querySelector(".hero-parallax-bg");

// ==================== HERO PARALLAX ====================

const heroParallax =
    document.querySelector(".hero-parallax");

if (heroParallax) {

    window.addEventListener("scroll", () => {

        const scrollY = window.scrollY;

        heroParallax.style.transform =
            `translate3d(0, ${scrollY * 0.35}px, 0)`;

    }, { passive:true });

}

// ==================== PAGE TRANSITION ====================

const pageTransition =
    document.querySelector(".page-transition");

const pageLinks =
    document.querySelectorAll(
        ".page-transition-link"
    );

pageLinks.forEach(link => {

    link.addEventListener("click", event => {

        const target =
            link.getAttribute("href");

        if (!target || !pageTransition) return;

        event.preventDefault();

        pageTransition.classList.add("active");

        setTimeout(() => {

            window.location.href = target;

        }, 550);

    });

});