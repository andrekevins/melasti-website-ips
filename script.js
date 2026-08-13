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
        "Periksa Jawaban";


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

/* ============================================================
   MELASTI — CINEMATIC SCROLL SYSTEM
   PHASE 2
   ============================================================ */

(() => {

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    /* ========================================================
       SECTION SCROLL PROGRESS
       ======================================================== */

    const cinematicSections = [
        ".intro",
        "#definition",
        "#purpose",
        ".timeline-section",
        ".facts-section",
        ".moments-section",
        ".team-section"
    ];

    const sections =
        cinematicSections
            .map(selector =>
                document.querySelector(selector)
            )
            .filter(Boolean);


    function updateSectionProgress() {

        const viewport =
            window.innerHeight;


        sections.forEach(section => {

            const rect =
                section.getBoundingClientRect();


            /*
             0 = section hasn't entered yet
             1 = section has completely passed
            */

            const progress =
                (viewport - rect.top) /
                (viewport + rect.height);


            const clamped =
                Math.max(
                    0,
                    Math.min(1, progress)
                );


            section.style.setProperty(
                "--scroll-progress",
                clamped.toFixed(3)
            );


            /*
             Distance from viewport centre.
             Used for subtle depth.
            */

            const centre =
                rect.top +
                rect.height / 2;

            const distance =
                centre -
                viewport / 2;

            const normalized =
                Math.max(
                    -1,
                    Math.min(
                        1,
                        distance /
                        (viewport * .9)
                    )
                );


            section.style.setProperty(
                "--section-depth",
                normalized.toFixed(3)
            );

        });

    }


    /* ========================================================
       TIMELINE SYSTEM
       ======================================================== */

    const timeline =
        document.querySelector(".timeline");

    const timelineItems =
        timeline
            ? Array.from(
                timeline.querySelectorAll(
                    ".timeline-item"
                )
            )
            : [];


    if (timeline && timelineItems.length) {

        /*
         Create a live progress rail.

         We don't replace the existing rail.
         This sits over it.
        */

        const progressRail =
            document.createElement("div");

        progressRail.className =
            "timeline-progress";

        timeline.appendChild(
            progressRail
        );


        function updateTimeline() {

            const timelineRect =
                timeline.getBoundingClientRect();


            const viewportCentre =
                window.innerHeight * .5;


            /*
             Overall timeline progress.
            */

            const start =
                timelineRect.top -
                viewportCentre;

            const end =
                timelineRect.bottom -
                viewportCentre;


            const total =
                end - start;


            let progress =
                total === 0
                    ? 0
                    : (
                        -start /
                        total
                    );


            progress =
                Math.max(
                    0,
                    Math.min(
                        1,
                        progress
                    )
                );


            timeline.style.setProperty(
                "--timeline-progress",
                progress.toFixed(3)
            );


            /*
             Find the stage closest to
             the viewport centre.
            */

            let activeIndex = 0;

            let smallestDistance =
                Infinity;


            timelineItems.forEach(
                (item, index) => {

                    const rect =
                        item.getBoundingClientRect();


                    const itemCentre =
                        rect.top +
                        rect.height / 2;


                    const distance =
                        Math.abs(
                            itemCentre -
                            viewportCentre
                        );


                    if (
                        distance <
                        smallestDistance
                    ) {

                        smallestDistance =
                            distance;

                        activeIndex =
                            index;

                    }

                }
            );


            timelineItems.forEach(
                (item, index) => {

                    item.classList.toggle(
                        "timeline-active",
                        index === activeIndex
                    );


                    item.classList.toggle(
                        "timeline-past",
                        index < activeIndex
                    );


                    item.classList.toggle(
                        "timeline-next",
                        index > activeIndex
                    );

                }
            );

        }


        /*
         Put the progress rail
         directly over the existing line.
        */

        progressRail.style.cssText = `
            position:absolute;
            top:0;
            left:40px;
            width:2px;
            height:100%;
            pointer-events:none;
            transform-origin:top;
            transform:scaleY(var(--timeline-progress,0));
            background:
                linear-gradient(
                    180deg,
                    #5CC8E8,
                    rgba(92,200,232,.35)
                );
            box-shadow:
                0 0 18px rgba(92,200,232,.28);
            z-index:1;
        `;


        timeline.style.position =
            "relative";


        /*
         Mobile rail position.
        */

        if (
            window.innerWidth <= 600
        ) {

            progressRail.style.left =
                "29px";

        }

    }


    /* ========================================================
       SUBTLE CONTENT DEPTH
       ======================================================== */

    function updateContentDepth() {

        if (reducedMotion) {
            return;
        }


        sections.forEach(section => {

            /*
             Do NOT transform the entire section.
             That was the problem with the previous
             3D experiment.

             Instead we target specific visual
             elements inside each section.
            */

            const depth =
                parseFloat(
                    section.style.getPropertyValue(
                        "--section-depth"
                    )
                ) || 0;


            const images =
                section.querySelectorAll(
                    ".intro-image, .split-image, .moment-card img"
                );


            images.forEach(image => {

                /*
                 Maximum movement is tiny.
                */

                const movement =
                    depth * -10;


                image.style.transform =
                    `translate3d(0, ${movement}px, 0)`;

            });

        });

    }


    /* ========================================================
       SCROLL REVEAL ENHANCEMENT
       ======================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal, .reveal-left, .reveal-right, .reveal-scale"
        );


    /*
     IntersectionObserver handles visibility.

     We add a slight active state rather
     than continuously transforming everything.
    */

    const cinematicObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "cinematic-visible"
                        );

                    }

                });

            },
            {
                threshold:.18,
                rootMargin:"0px 0px -8% 0px"
            }
        );


    revealElements.forEach(
        element =>
            cinematicObserver.observe(
                element
            )
    );


    /* ========================================================
       REQUEST ANIMATION FRAME LOOP
       ======================================================== */

    let ticking = false;


    function update() {

        updateSectionProgress();

        if (
            timeline &&
            timelineItems.length
        ) {

            updateTimeline();

        }


        updateContentDepth();


        ticking = false;

    }


    function requestUpdate() {

        if (!ticking) {

            requestAnimationFrame(
                update
            );

            ticking = true;

        }

    }


    window.addEventListener(
        "scroll",
        requestUpdate,
        {
            passive:true
        }
    );


    window.addEventListener(
        "resize",
        requestUpdate,
        {
            passive:true
        }
    );


    /*
     Initial state.
    */

    update();


})();

/* ============================================================
   MELASTI — PHASE 3
   CINEMATIC TIMELINE ENGINE
   ============================================================ */

(() => {

    const timeline =
        document.querySelector(".timeline");

    if (!timeline) {
        return;
    }


    const items =
        Array.from(
            timeline.querySelectorAll(
                ".timeline-item"
            )
        );


    if (!items.length) {
        return;
    }


    const section =
        timeline.closest(
            ".timeline-section"
        );


    let activeIndex = 0;

    let ticking = false;


    /* ========================================================
       ACTIVE STAGE
       ======================================================== */

    function updateTimelineStage() {

        const viewportCenter =
            window.innerHeight * 0.5;


        let closest =
            Infinity;

        let closestIndex =
            0;


        items.forEach(
            (item, index) => {

                const rect =
                    item.getBoundingClientRect();


                const center =
                    rect.top +
                    rect.height * 0.5;


                const distance =
                    Math.abs(
                        center -
                        viewportCenter
                    );


                if (
                    distance <
                    closest
                ) {

                    closest =
                        distance;

                    closestIndex =
                        index;

                }

            }
        );


        if (
            closestIndex !==
            activeIndex
        ) {

            activeIndex =
                closestIndex;

        }


        items.forEach(
            (item, index) => {

                item.classList.toggle(
                    "timeline-active",
                    index === activeIndex
                );


                item.classList.toggle(
                    "timeline-past",
                    index < activeIndex
                );


                item.classList.toggle(
                    "timeline-next",
                    index > activeIndex
                );

            }
        );


        /*
           Overall section progress.
        */

        if (section) {

            const rect =
                section.getBoundingClientRect();


            const total =
                rect.height -
                window.innerHeight;


            const progress =
                total > 0
                    ? Math.max(
                        0,
                        Math.min(
                            1,
                            -rect.top /
                            total
                        )
                    )
                    : 0;


            section.style.setProperty(
                "--stage-progress",
                progress
            );

        }

    }


    /* ========================================================
       REQUEST FRAME
       ======================================================== */

    function requestUpdate() {

        if (ticking) {
            return;
        }


        ticking = true;


        requestAnimationFrame(
            () => {

                updateTimelineStage();

                ticking = false;

            }
        );

    }


    window.addEventListener(
        "scroll",
        requestUpdate,
        {
            passive:true
        }
    );


    window.addEventListener(
        "resize",
        requestUpdate,
        {
            passive:true
        }
    );


    /*
       Initial state.
    */

    updateTimelineStage();

})();

/* ============================================================
   MELASTI — ANIMATED UKIYO-E WAVE
   ============================================================ */

(() => {

    const canvas =
        document.getElementById(
            "melastiWaveCanvas"
        );

    if (!canvas) {
        return;
    }

    const ctx =
        canvas.getContext("2d");

    if (!ctx) {
        return;
    }


    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    let width = 0;
    let height = 0;
    let dpr = 1;

    let time = 0;

    let mouseX = 0.5;
    let mouseY = 0.5;

    let targetMouseX = 0.5;
    let targetMouseY = 0.5;


    /* ========================================================
       CANVAS
       ======================================================== */

    function resize() {

        const rect =
            canvas.getBoundingClientRect();

        width =
            rect.width;

        height =
            rect.height;

        dpr =
            Math.min(
                window.devicePixelRatio || 1,
                2
            );

        canvas.width =
            width * dpr;

        canvas.height =
            height * dpr;

        ctx.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );
    }


    resize();

    window.addEventListener(
        "resize",
        resize,
        {
            passive: true
        }
    );


    /* ========================================================
       MOUSE
       ======================================================== */

    canvas.addEventListener(
        "pointermove",
        event => {

            const rect =
                canvas.getBoundingClientRect();

            targetMouseX =
                (event.clientX - rect.left) /
                rect.width;

            targetMouseY =
                (event.clientY - rect.top) /
                rect.height;

        },
        {
            passive: true
        }
    );


    canvas.addEventListener(
        "pointerleave",
        () => {

            targetMouseX = .5;
            targetMouseY = .5;

        }
    );


    /* ========================================================
       WAVE PATH
       ======================================================== */

    function waveY(
        x,
        baseY,
        amplitude,
        frequency,
        speed,
        phase
    ) {

        const normalized =
            x / width;

        return (
            baseY +

            Math.sin(
                normalized *
                frequency *
                Math.PI *
                2 +
                time *
                speed +
                phase
            ) *
            amplitude +

            Math.sin(
                normalized *
                frequency *
                .43 *
                Math.PI *
                2 +
                time *
                speed *
                .47 +
                phase *
                1.7
            ) *
            amplitude *
            .42
        );

    }


    /* ========================================================
       DRAW LAYER
       ======================================================== */

    function drawWave(
        baseY,
        amplitude,
        frequency,
        speed,
        phase,
        fill,
        stroke,
        thickness
    ) {

        ctx.beginPath();

        ctx.moveTo(
            0,
            height
        );

        const resolution =
            Math.max(
                100,
                Math.floor(
                    width / 8
                )
            );


        for (
            let i = 0;
            i <= resolution;
            i++
        ) {

            const x =
                (i / resolution) *
                width;

            const y =
                waveY(
                    x,
                    baseY,
                    amplitude,
                    frequency,
                    speed,
                    phase
                );

            if (i === 0) {

                ctx.lineTo(
                    x,
                    y
                );

            } else {

                ctx.lineTo(
                    x,
                    y
                );

            }

        }


        ctx.lineTo(
            width,
            height
        );

        ctx.closePath();


        ctx.fillStyle =
            fill;

        ctx.fill();


        if (stroke) {

            ctx.beginPath();

            for (
                let i = 0;
                i <= resolution;
                i++
            ) {

                const x =
                    (i / resolution) *
                    width;

                const y =
                    waveY(
                        x,
                        baseY,
                        amplitude,
                        frequency,
                        speed,
                        phase
                    );

                if (i === 0) {

                    ctx.moveTo(
                        x,
                        y
                    );

                } else {

                    ctx.lineTo(
                        x,
                        y
                    );

                }

            }


            ctx.strokeStyle =
                stroke;

            ctx.lineWidth =
                thickness;

            ctx.stroke();

        }

    }


    /* ========================================================
       FOAM
       ======================================================== */

    function drawFoam(
        offset,
        scale,
        alpha
    ) {

        const crestX =
            width *
            (
                .63 +
                Math.sin(
                    time *
                    .23 +
                    offset
                ) *
                .08
            );


        const crestY =
            waveY(
                crestX,
                height * .49,
                height * .12,
                1.4,
                .45,
                offset
            );


        ctx.save();

        ctx.translate(
            crestX,
            crestY
        );

        ctx.scale(
            scale,
            scale
        );


        ctx.strokeStyle =
            `rgba(218,247,250,${alpha})`;

        ctx.lineWidth =
            3;


        /*
         * Large stylized foam claws.
         */

        for (
            let i = 0;
            i < 7;
            i++
        ) {

            const angle =
                -.9 +
                i * .31;

            const length =
                35 +
                Math.sin(
                    i * 1.7 +
                    time * .8
                ) *
                12;


            ctx.beginPath();

            ctx.moveTo(
                0,
                0
            );

            ctx.quadraticCurveTo(
                Math.cos(angle) *
                length *
                .55,

                Math.sin(angle) *
                length *
                .55,

                Math.cos(angle) *
                length,

                Math.sin(angle) *
                length
            );

            ctx.stroke();

        }


        /*
         * Small foam dots.
         */

        for (
            let i = 0;
            i < 22;
            i++
        ) {

            const angle =
                i * 2.399 +
                time * .12;

            const radius =
                15 +
                (
                    i % 5
                ) *
                12;


            const x =
                Math.cos(angle) *
                radius;

            const y =
                Math.sin(angle) *
                radius *
                .55;


            ctx.beginPath();

            ctx.arc(
                x,
                y,
                1.5 +
                (i % 3),
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                `rgba(
                    225,
                    249,
                    250,
                    ${alpha * .75}
                )`;

            ctx.fill();

        }


        ctx.restore();

    }


    /* ========================================================
       DISTANT MOUNTAIN
       ======================================================== */

    function drawMountain() {

        const mountainX =
            width * .78;

        const mountainBase =
            height * .56;

        const mountainHeight =
            height * .27;


        ctx.beginPath();

        ctx.moveTo(
            mountainX -
            width * .22,

            mountainBase
        );

        ctx.lineTo(
            mountainX,

            mountainBase -
            mountainHeight
        );

        ctx.lineTo(
            mountainX +
            width * .22,

            mountainBase
        );

        ctx.closePath();


        ctx.fillStyle =
            "rgba(9,57,72,.38)";

        ctx.fill();


        /*
         * Snow / light cap.
         */

        ctx.beginPath();

        ctx.moveTo(
            mountainX -
            width * .055,

            mountainBase -
            mountainHeight +
            height * .075
        );

        ctx.lineTo(
            mountainX,

            mountainBase -
            mountainHeight
        );

        ctx.lineTo(
            mountainX +
            width * .055,

            mountainBase -
            mountainHeight +
            height * .075
        );

        ctx.closePath();


        ctx.fillStyle =
            "rgba(169,216,229,.14)";

        ctx.fill();

    }


    /* ========================================================
       REFLECTION LINES
       ======================================================== */

    function drawReflection() {

        const y =
            height * .73;


        ctx.save();

        ctx.globalAlpha =
            .13;


        for (
            let i = 0;
            i < 28;
            i++
        ) {

            const x =
                (
                    i *
                    width /
                    28
                ) +
                Math.sin(
                    time *
                    .35 +
                    i
                ) *
                18;


            const length =
                20 +
                Math.sin(
                    time *
                    .6 +
                    i *
                    .8
                ) *
                15;


            ctx.beginPath();

            ctx.moveTo(
                x,
                y +
                i *
                4
            );

            ctx.lineTo(
                x + length,
                y +
                i *
                4
            );


            ctx.strokeStyle =
                "#8ED6E5";

            ctx.lineWidth =
                1;


            ctx.stroke();

        }

        ctx.restore();

    }


    /* ========================================================
       RENDER
       ======================================================== */

    function render() {

        /*
         * Mouse interpolation.
         */

        mouseX +=
            (
                targetMouseX -
                mouseX
            ) *
            .035;

        mouseY +=
            (
                targetMouseY -
                mouseY
            ) *
            .035;


        ctx.clearRect(
            0,
            0,
            width,
            height
        );


        /*
         * Background.
         */

        const gradient =
            ctx.createLinearGradient(
                0,
                0,
                0,
                height
            );


        gradient.addColorStop(
            0,
            "#062D3A"
        );

        gradient.addColorStop(
            .45,
            "#043646"
        );

        gradient.addColorStop(
            1,
            "#001921"
        );


        ctx.fillStyle =
            gradient;

        ctx.fillRect(
            0,
            0,
            width,
            height
        );


        /*
         * Slight mouse-driven light.
         */

        const glow =
            ctx.createRadialGradient(
                mouseX * width,
                mouseY * height,
                0,
                mouseX * width,
                mouseY * height,
                width * .5
            );


        glow.addColorStop(
            0,
            "rgba(92,200,232,.07)"
        );

        glow.addColorStop(
            1,
            "rgba(92,200,232,0)"
        );


        ctx.fillStyle =
            glow;

        ctx.fillRect(
            0,
            0,
            width,
            height
        );


        /*
         * Distant landscape.
         */

        drawMountain();


        /*
         * Far water.
         */

        drawWave(
            height * .62,
            height * .035,
            1.15,
            .18,
            1.4,
            "#073C4C",
            "rgba(107,197,215,.14)",
            1
        );


        /*
         * Middle wave.
         */

        drawWave(
            height * .65,
            height * .075,
            1.65,
            .27,
            .4,
            "#075166",
            "rgba(120,216,231,.20)",
            1.5
        );


        /*
         * Main dramatic wave.
         */

        drawWave(
            height * .58,
            height * .14,
            1.35,
            .42,
            -.7,
            "#08718A",
            "rgba(170,231,238,.34)",
            2
        );


        /*
         * Foreground wave.
         */

        drawWave(
            height * .73,
            height * .11,
            2.1,
            .31,
            2.2,
            "#03495C",
            "rgba(126,213,227,.18)",
            1.5
        );


        drawReflection();


        /*
         * Foam.
         */

        drawFoam(
            0,
            1.0,
            .75
        );

        drawFoam(
            2.7,
            .48,
            .32
        );


        /*
         * Reduced motion:
         * render once only.
         */

        if (!reducedMotion) {

            time += .008;

            requestAnimationFrame(
                render
            );

        }

    }


    render();

})();

/* ============================================================
   MELASTI — WAVE DETAIL LAYER
   ============================================================ */

(() => {

    const canvas =
        document.getElementById(
            "melastiWaveDetails"
        );

    if (!canvas) {
        return;
    }

    const ctx =
        canvas.getContext("2d");

    if (!ctx) {
        return;
    }


    const section =
        canvas.closest(
            ".melasti-wave-transition"
        );


    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    let width = 0;
    let height = 0;
    let dpr = 1;

    let time = 0;

    let mouseX = .5;
    let mouseY = .5;

    let targetMouseX = .5;
    let targetMouseY = .5;

    let scrollOffset = 0;


    /* ========================================================
       RESIZE
       ======================================================== */

    function resize() {

        const rect =
            canvas.getBoundingClientRect();

        width =
            rect.width;

        height =
            rect.height;

        dpr =
            Math.min(
                window.devicePixelRatio || 1,
                2
            );

        canvas.width =
            width * dpr;

        canvas.height =
            height * dpr;

        ctx.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );

    }


    resize();


    window.addEventListener(
        "resize",
        resize,
        {
            passive:true
        }
    );


    /* ========================================================
       MOUSE
       ======================================================== */

    window.addEventListener(
        "pointermove",
        event => {

            const rect =
                canvas.getBoundingClientRect();

            targetMouseX =
                (
                    event.clientX -
                    rect.left
                ) /
                rect.width;

            targetMouseY =
                (
                    event.clientY -
                    rect.top
                ) /
                rect.height;

        },
        {
            passive:true
        }
    );


    /* ========================================================
       SCROLL
       ======================================================== */

    window.addEventListener(
        "scroll",
        () => {

            if (!section) {
                return;
            }

            const rect =
                section.getBoundingClientRect();

            scrollOffset =
                (
                    window.innerHeight -
                    rect.top
                ) /
                (
                    window.innerHeight +
                    rect.height
                );

        },
        {
            passive:true
        }
    );


    /* ========================================================
       CREST FUNCTION
       ======================================================== */

    function crestY(x) {

        const n =
            x / width;

        return (
            height * .49 +

            Math.sin(
                n *
                Math.PI *
                2.7 +
                time *
                .42
            ) *
            height *
            .12 +

            Math.sin(
                n *
                Math.PI *
                1.1 +
                time *
                .21
            ) *
            height *
            .045
        );

    }


    /* ========================================================
       FOAM STROKES
       ======================================================== */

    function drawFoamStrokes() {

        /*
         * Main crest region.
         */

        for (
            let i = 0;
            i < 95;
            i++
        ) {

            const x =
                width *
                (
                    .35 +
                    (
                        i /
                        94
                    ) *
                    .48
                );


            const y =
                crestY(x);


            /*
             * Give each stroke a slightly
             * different phase.
             */

            const wave =
                Math.sin(
                    time *
                    .8 +
                    i *
                    1.73
                );


            const length =
                5 +
                (
                    (
                        wave +
                        1
                    ) /
                    2
                ) *
                15;


            const angle =
                -.45 +
                Math.sin(
                    i *
                    .91
                ) *
                .35;


            ctx.save();

            ctx.translate(
                x,
                y
            );

            ctx.rotate(
                angle
            );


            ctx.beginPath();

            ctx.moveTo(
                0,
                0
            );

            ctx.quadraticCurveTo(
                length *
                .45,

                -length *
                .25,

                length,

                -length *
                .12
            );


            ctx.strokeStyle =
                `rgba(
                    225,
                    248,
                    250,
                    ${
                        .15 +
                        (
                            (
                                wave +
                                1
                            ) /
                            2
                        ) *
                        .35
                    }
                )`;


            ctx.lineWidth =
                .7 +
                (
                    i %
                    3
                ) *
                .35;


            ctx.stroke();

            ctx.restore();

        }

    }


    /* ========================================================
       CURLING FOAM
       ======================================================== */

    function drawCurl() {

        const x =
            width *
            (
                .62 +
                Math.sin(
                    time *
                    .18
                ) *
                .025
            );


        const y =
            crestY(x);


        ctx.save();

        ctx.translate(
            x,
            y
        );


        ctx.strokeStyle =
            "rgba(229,249,250,.72)";

        ctx.lineWidth =
            2;


        /*
         * Main spiral.
         */

        ctx.beginPath();


        for (
            let i = 0;
            i < 70;
            i++
        ) {

            const t =
                i / 69;

            const angle =
                t *
                Math.PI *
                3.3;

            const radius =
                75 *
                (
                    1 -
                    t
                );


            const px =
                Math.cos(angle) *
                radius;

            const py =
                Math.sin(angle) *
                radius *
                .62;


            if (i === 0) {

                ctx.moveTo(
                    px,
                    py
                );

            } else {

                ctx.lineTo(
                    px,
                    py
                );

            }

        }


        ctx.stroke();


        /*
         * Secondary ink contour.
         */

        ctx.beginPath();

        for (
            let i = 0;
            i < 50;
            i++
        ) {

            const t =
                i / 49;

            const angle =
                t *
                Math.PI *
                2.8 +
                .5;

            const radius =
                48 *
                (
                    1 -
                    t
                );


            const px =
                Math.cos(angle) *
                radius;

            const py =
                Math.sin(angle) *
                radius *
                .55;


            if (i === 0) {

                ctx.moveTo(
                    px,
                    py
                );

            } else {

                ctx.lineTo(
                    px,
                    py
                );

            }

        }

        ctx.strokeStyle =
            "rgba(176,229,237,.35)";

        ctx.lineWidth =
            1;

        ctx.stroke();


        ctx.restore();

    }


    /* ========================================================
       SPRAY PARTICLES
       ======================================================== */

    function drawSpray() {

        const originX =
            width *
            .63;

        const originY =
            crestY(
                originX
            );


        for (
            let i = 0;
            i < 55;
            i++
        ) {

            const phase =
                i *
                2.37;


            const life =
                (
                    time *
                    (
                        .15 +
                        (
                            i %
                            5
                        ) *
                        .025
                    ) +
                    phase
                ) %
                1;


            /*
             * Particles rise and fall.
             */

            const x =
                originX +
                Math.sin(
                    phase
                ) *
                (
                    30 +
                    life *
                    100
                );


            const y =
                originY -
                life *
                (
                    45 +
                    (
                        i %
                        4
                    ) *
                    18
                ) +
                life *
                life *
                80;


            const size =
                1 +
                (
                    i %
                    3
                ) *
                .7;


            const alpha =
                (
                    1 -
                    life
                ) *
                .45;


            ctx.beginPath();

            ctx.arc(
                x,
                y,
                size,
                0,
                Math.PI *
                2
            );


            ctx.fillStyle =
                `rgba(
                    224,
                    249,
                    251,
                    ${alpha}
                )`;

            ctx.fill();

        }

    }


    /* ========================================================
       LIGHT REFLECTION
       ======================================================== */

    function drawLight() {

        const x =
            width *
            (
                .22 +
                mouseX *
                .55
            );


        const y =
            height *
            .76;


        const gradient =
            ctx.createRadialGradient(
                x,
                y,
                0,
                x,
                y,
                width *
                .3
            );


        gradient.addColorStop(
            0,
            "rgba(155,230,239,.14)"
        );

        gradient.addColorStop(
            .35,
            "rgba(92,200,232,.055)"
        );

        gradient.addColorStop(
            1,
            "rgba(92,200,232,0)"
        );


        ctx.fillStyle =
            gradient;

        ctx.fillRect(
            0,
            0,
            width,
            height
        );


        /*
         * Reflection strokes.
         */

        ctx.save();

        ctx.globalAlpha =
            .17;


        for (
            let i = 0;
            i < 35;
            i++
        ) {

            const offset =
                (
                    i -
                    17
                ) *
                8;


            const yOffset =
                y +
                Math.sin(
                    time *
                    .6 +
                    i
                ) *
                7;


            const length =
                20 +
                Math.sin(
                    time +
                    i *
                    .7
                ) *
                12;


            ctx.beginPath();

            ctx.moveTo(
                x +
                offset -
                length,
                yOffset
            );

            ctx.lineTo(
                x +
                offset +
                length,
                yOffset
            );


            ctx.strokeStyle =
                "#B9EAF0";

            ctx.lineWidth =
                .8;


            ctx.stroke();

        }


        ctx.restore();

    }


    /* ========================================================
       PAPER / INK TEXTURE
       ======================================================== */

    function drawTexture() {

        /*
         * Very subtle.
         *
         * This prevents the canvas from looking
         * like a perfectly clean digital gradient.
         */

        ctx.save();

        ctx.globalAlpha =
            .025;


        for (
            let i = 0;
            i < 180;
            i++
        ) {

            const x =
                Math.random() *
                width;

            const y =
                Math.random() *
                height;


            ctx.fillStyle =
                i % 2
                    ? "#D9F3F6"
                    : "#001019";


            ctx.fillRect(
                x,
                y,
                1,
                1
            );

        }


        ctx.restore();

    }


    /* ========================================================
       RENDER
       ======================================================== */

    function render() {

        mouseX +=
            (
                targetMouseX -
                mouseX
            ) *
            .04;


        mouseY +=
            (
                targetMouseY -
                mouseY
            ) *
            .04;


        ctx.clearRect(
            0,
            0,
            width,
            height
        );


        /*
         * Slight scroll movement.
         */

        ctx.save();

        ctx.translate(
            scrollOffset *
            -18,
            scrollOffset *
            5
        );


        drawLight();

        drawFoamStrokes();

        drawCurl();

        drawSpray();

        ctx.restore();


        drawTexture();


        if (!reducedMotion) {

            time += .009;

            requestAnimationFrame(
                render
            );

        }

    }


    render();

})();

/* ============================================================
   WAVE → TIMELINE TRANSITION
   ============================================================ */

(() => {

    const section =
        document.querySelector(
            ".wave-timeline-transition"
        );

    if (!section) return;


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        section.classList.add(
                            "is-visible"
                        );

                    }

                });

            },
            {
                threshold: 0.18
            }
        );


    observer.observe(section);

})();

/* ============================================================
   KATA PENGANTAR — SUBTLE SCROLL DEPTH
   ============================================================ */

(() => {

    const image =
        document.querySelector(
            ".kata-pengantar-image"
        );

    if (!image) return;

    let ticking = false;

    function updateDepth() {

        const rect =
            image.getBoundingClientRect();

        const viewportHeight =
            window.innerHeight;

        const center =
            rect.top +
            rect.height / 2;

        const distance =
            center -
            viewportHeight / 2;

        const progress =
            Math.max(
                -1,
                Math.min(
                    1,
                    distance /
                    viewportHeight
                )
            );

        const movement =
            progress * -18;

        image.style.transform =
            `translate3d(0, ${movement}px, 0)`;

        ticking = false;
    }

    function requestUpdate() {

        if (!ticking) {

            requestAnimationFrame(
                updateDepth
            );

            ticking = true;
        }
    }

    window.addEventListener(
        "scroll",
        requestUpdate,
        { passive: true }
    );

    requestUpdate();

})();

/* ============================================================
   AMBIENT SECTION DEPTH
   ============================================================ */

(() => {

    const sections =
        document.querySelectorAll(
            ".ambient-section"
        );

    if (!sections.length) return;

    let ticking = false;

    function update() {

        sections.forEach(section => {

            const rect =
                section.getBoundingClientRect();

            const center =
                rect.top +
                rect.height / 2;

            const progress =
                (
                    center -
                    window.innerHeight / 2
                ) / window.innerHeight;

            const offset =
                Math.max(
                    -35,
                    Math.min(
                        35,
                        progress * -18
                    )
                );

            section.style.setProperty(
                "--ambient-y",
                `${offset}px`
            );

        });

        ticking = false;
    }

    function requestUpdate() {

        if (ticking) return;

        ticking = true;

        requestAnimationFrame(
            update
        );
    }

    window.addEventListener(
        "scroll",
        requestUpdate,
        { passive: true }
    );

    requestUpdate();

})();