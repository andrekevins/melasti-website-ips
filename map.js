(() => {
    "use strict";

    const locations = [
        {
            id: "melasti-beach",
            name: "Pantai Melasti",
            region: "Badung, Bali",
            type: "Pantai",
            description: "Pantai Melasti merupakan salah satu kawasan pantai di Bali yang dikenal sebagai tempat pelaksanaan kegiatan Melasti.",
            image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Melasti_Beach.jpg",
            imageAlt: "Pantai Melasti dari udara",
            credit: "Schweigeblick",
            source: "https://commons.wikimedia.org/wiki/File:Melasti_Beach.jpg",
            license: "CC BY-SA 4.0"
        },
        {
            id: "umeanyar",
            name: "Pantai Umeanyar",
            region: "Buleleng, Bali",
            type: "Pantai",
            description: "Pantai Umeanyar menjadi salah satu lokasi yang terdokumentasi digunakan untuk pelaksanaan Melasti di Bali.",
            image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Melasti_at_Umeanyar_Beach.jpg",
            imageAlt: "Upacara Melasti di Pantai Umeanyar",
            credit: "Aryakori",
            source: "https://commons.wikimedia.org/wiki/File:Melasti_at_Umeanyar_Beach.jpg",
            license: "CC BY-SA 4.0"
        },
        {
            id: "lake-bratan",
            name: "Danau Bratan",
            region: "Tabanan, Bali",
            type: "Danau",
            description: "Danau Bratan merupakan salah satu sumber air di Bali yang juga terdokumentasi menjadi lokasi pelaksanaan Melasti.",
            image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Balinese_Hindu_Melasti.jpg",
            imageAlt: "Umat Hindu melaksanakan Melasti di Danau Bratan",
            credit: "Cempedak9",
            source: "https://commons.wikimedia.org/wiki/File:Balinese_Hindu_Melasti.jpg",
            license: "CC BY-SA 4.0"
        }
    ];

    const mapStyles = `
        .bali-map-section {
            position: relative;
            padding: clamp(120px, 12vw, 170px) 0;
            overflow: hidden;
            background:
                radial-gradient(circle at 20% 30%, rgba(92,200,232,.08), transparent 30%),
                radial-gradient(circle at 80% 70%, rgba(92,200,232,.05), transparent 35%),
                linear-gradient(180deg, #001921 0%, #032A38 100%);
        }

        .bali-map-section::before {
            content: "";
            position: absolute;
            width: 520px;
            height: 520px;
            top: 12%;
            left: -260px;
            border-radius: 50%;
            background: rgba(92,200,232,.035);
            filter: blur(30px);
            pointer-events: none;
        }

        .bali-map-intro {
            width: min(760px, 92%);
            margin: 0 auto clamp(55px, 7vw, 80px);
            text-align: center;
        }

        .bali-map-intro p:last-child {
            margin-top: 22px;
            color: var(--textSoft);
            line-height: 1.95;
            font-size: clamp(1rem, 1.7vw, 1.08rem);
        }

        .bali-map-layout {
            display: grid;
            grid-template-columns: minmax(0, 1.05fr) minmax(320px, .75fr);
            align-items: center;
            gap: clamp(45px, 7vw, 90px);
        }

        .bali-map-visual {
            position: relative;
            min-height: 560px;
            display: grid;
            place-items: center;
            border-radius: 32px;
            border: 1px solid rgba(255,255,255,.07);
            background:
                linear-gradient(145deg, rgba(255,255,255,.045), rgba(255,255,255,.015));
            box-shadow: var(--shadowLarge);
            overflow: hidden;
            isolation: isolate;
        }

        .bali-map-visual::before,
        .bali-map-visual::after {
            content: "";
            position: absolute;
            border-radius: 50%;
            border: 1px solid rgba(92,200,232,.08);
            pointer-events: none;
        }

        .bali-map-visual::before {
            width: 72%;
            aspect-ratio: 1;
            animation: baliMapOrbit 18s linear infinite;
        }

        .bali-map-visual::after {
            width: 52%;
            aspect-ratio: 1;
            animation: baliMapOrbitReverse 13s linear infinite;
        }

        .bali-map-svg {
            position: relative;
            z-index: 2;
            width: min(570px, 82%);
            height: auto;
            overflow: visible;
            filter: drop-shadow(0 25px 35px rgba(0,0,0,.24));
            animation: baliMapFloat 7s ease-in-out infinite;
        }

        .bali-island {
            fill: rgba(92,200,232,.14);
            stroke: rgba(132,217,242,.75);
            stroke-width: 2;
            vector-effect: non-scaling-stroke;
        }

        .bali-island-detail {
            fill: none;
            stroke: rgba(255,255,255,.12);
            stroke-width: 1.5;
            stroke-dasharray: 5 8;
        }

        .bali-marker {
            position: absolute;
            z-index: 5;
            width: 24px;
            height: 24px;
            padding: 0;
            border: 0;
            border-radius: 50%;
            background: var(--primary);
            box-shadow: 0 0 0 7px rgba(92,200,232,.11), 0 0 28px rgba(92,200,232,.55);
            cursor: pointer;
            transition: transform .35s cubic-bezier(.22,.61,.36,1), box-shadow .35s ease;
            animation: baliMarkerPulse 2.4s ease-in-out infinite;
        }

        .bali-marker::after {
            content: "";
            position: absolute;
            inset: 7px;
            border-radius: 50%;
            background: #001921;
        }

        .bali-marker:hover,
        .bali-marker:focus-visible,
        .bali-marker.active {
            transform: scale(1.3);
            box-shadow: 0 0 0 9px rgba(92,200,232,.14), 0 0 42px rgba(92,200,232,.8);
            outline: none;
        }

        .bali-marker-label {
            position: absolute;
            left: 50%;
            bottom: calc(100% + 15px);
            transform: translateX(-50%) translateY(5px);
            padding: 8px 12px;
            border-radius: 999px;
            white-space: nowrap;
            color: var(--white);
            background: rgba(0,25,33,.86);
            border: 1px solid rgba(255,255,255,.08);
            backdrop-filter: blur(12px);
            font-family: "Poppins", sans-serif;
            font-size: .72rem;
            font-weight: 600;
            opacity: 0;
            pointer-events: none;
            transition: .3s ease;
        }

        .bali-marker:hover .bali-marker-label,
        .bali-marker:focus-visible .bali-marker-label,
        .bali-marker.active .bali-marker-label {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }

        .marker-melasti-beach { left: 58%; top: 72%; }
        .marker-umeanyar { left: 41%; top: 28%; }
        .marker-lake-bratan { left: 47%; top: 40%; }

        .bali-map-hint {
            position: absolute;
            z-index: 4;
            left: 50%;
            bottom: 28px;
            transform: translateX(-50%);
            width: max-content;
            max-width: 90%;
            padding: 9px 15px;
            border-radius: 999px;
            color: rgba(255,255,255,.72);
            background: rgba(0,25,33,.62);
            border: 1px solid rgba(255,255,255,.06);
            backdrop-filter: blur(10px);
            font-size: .78rem;
            text-align: center;
        }

        .bali-location-card {
            position: relative;
            min-height: 500px;
            border-radius: 30px;
            overflow: hidden;
            background: rgba(255,255,255,.045);
            border: 1px solid rgba(255,255,255,.08);
            box-shadow: var(--shadowLarge);
            transform: translateY(0);
            transition: opacity .35s ease, transform .35s ease;
        }

        .bali-location-card.is-changing {
            opacity: 0;
            transform: translateY(14px);
        }

        .bali-location-image-wrap {
            position: relative;
            height: 245px;
            overflow: hidden;
        }

        .bali-location-image-wrap::after {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent 45%, rgba(0,25,33,.82));
        }

        .bali-location-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .bali-location-type {
            position: absolute;
            z-index: 2;
            left: 24px;
            bottom: 20px;
            padding: 7px 11px;
            border-radius: 999px;
            color: #001921;
            background: var(--primary);
            font-family: "Poppins", sans-serif;
            font-size: .72rem;
            font-weight: 700;
            letter-spacing: .8px;
            text-transform: uppercase;
        }

        .bali-location-content {
            padding: 28px 30px 30px;
        }

        .bali-location-region {
            color: var(--primary);
            font-size: .78rem;
            font-weight: 600;
            letter-spacing: 1.5px;
            text-transform: uppercase;
        }

        .bali-location-title {
            margin: 9px 0 14px;
            font-family: "Poppins", sans-serif;
            font-size: clamp(1.6rem, 3vw, 2.1rem);
            line-height: 1.2;
        }

        .bali-location-description {
            color: var(--textSoft);
            line-height: 1.85;
            font-size: .98rem;
        }

        .bali-location-credit {
            margin-top: 22px;
            padding-top: 16px;
            border-top: 1px solid rgba(255,255,255,.07);
            color: rgba(255,255,255,.5);
            font-size: .7rem;
            line-height: 1.6;
        }

        .bali-location-credit a {
            color: rgba(255,255,255,.68);
            text-decoration: underline;
            text-underline-offset: 3px;
        }

        .bali-location-credit a:hover {
            color: var(--primary);
        }

        @keyframes baliMarkerPulse {
            0%, 100% { box-shadow: 0 0 0 7px rgba(92,200,232,.11), 0 0 28px rgba(92,200,232,.45); }
            50% { box-shadow: 0 0 0 11px rgba(92,200,232,.04), 0 0 40px rgba(92,200,232,.68); }
        }

        @keyframes baliMapFloat {
            0%, 100% { transform: translateY(0) rotate(-.4deg); }
            50% { transform: translateY(-8px) rotate(.4deg); }
        }

        @keyframes baliMapOrbit {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        @keyframes baliMapOrbitReverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
        }

        @media (max-width: 900px) {
            .bali-map-layout {
                grid-template-columns: 1fr;
            }

            .bali-map-visual {
                min-height: 520px;
            }

            .bali-location-card {
                width: min(700px, 100%);
                margin: 0 auto;
            }
        }

        @media (max-width: 600px) {
            .bali-map-section {
                padding: 100px 0;
            }

            .bali-map-visual {
                min-height: 390px;
                border-radius: 24px;
            }

            .bali-map-svg {
                width: 88%;
            }

            .bali-marker {
                width: 20px;
                height: 20px;
            }

            .bali-marker::after {
                inset: 6px;
            }

            .marker-melasti-beach { left: 59%; top: 70%; }
            .marker-umeanyar { left: 38%; top: 29%; }
            .marker-lake-bratan { left: 46%; top: 40%; }

            .bali-marker-label {
                display: none;
            }

            .bali-map-hint {
                bottom: 18px;
                font-size: .7rem;
            }

            .bali-location-card {
                min-height: 0;
                border-radius: 24px;
            }

            .bali-location-image-wrap {
                height: 210px;
            }

            .bali-location-content {
                padding: 24px;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .bali-map-svg,
            .bali-marker,
            .bali-map-visual::before,
            .bali-map-visual::after {
                animation: none;
            }
        }
    `;

    const section = document.createElement("section");
    section.id = "locations";
    section.className = "bali-map-section";

    section.innerHTML = `
        <div class="container">
            <div class="bali-map-intro reveal">
                <p class="section-label">LOKASI</p>
                <h2>Di Mana Melasti Dilaksanakan?</h2>
                <p>
                    Melasti dapat dilaksanakan di berbagai sumber air yang dianggap suci, seperti pantai, laut, danau, atau mata air. Klik salah satu titik pada peta untuk melihat lokasi yang terdokumentasi.
                </p>
            </div>

            <div class="bali-map-layout">
                <div class="bali-map-visual" aria-label="Peta interaktif Bali">
                    <svg class="bali-map-svg" viewBox="0 0 500 650" role="img" aria-label="Peta bergaya Pulau Bali">
                        <path class="bali-island" d="M250 30 C276 48 286 73 304 94 C326 119 355 126 378 149 C401 171 415 204 404 235 C397 254 379 269 374 293 C369 319 387 338 390 366 C394 399 375 422 354 446 C337 466 329 495 312 521 C298 542 276 559 254 579 C237 594 219 613 195 619 C171 625 150 612 132 597 C113 582 91 571 75 554 C56 534 49 509 57 486 C65 463 84 450 94 428 C104 406 102 382 90 361 C77 339 66 314 71 289 C76 265 95 248 109 229 C124 208 126 183 142 163 C160 140 189 132 207 111 C225 91 223 65 235 45 C240 37 245 32 250 30 Z"/>
                        <path class="bali-island-detail" d="M145 170 C188 192 230 188 268 167 C310 144 353 163 385 198 M91 326 C135 315 171 332 206 352 C242 372 284 363 324 344 C350 331 374 331 392 347 M110 459 C151 442 186 449 220 468 C256 488 294 483 333 459"/>
                    </svg>

                    <button class="bali-marker marker-umeanyar active" type="button" data-location="umeanyar" aria-label="Lihat Pantai Umeanyar">
                        <span class="bali-marker-label">Pantai Umeanyar</span>
                    </button>

                    <button class="bali-marker marker-lake-bratan" type="button" data-location="lake-bratan" aria-label="Lihat Danau Bratan">
                        <span class="bali-marker-label">Danau Bratan</span>
                    </button>

                    <button class="bali-marker marker-melasti-beach" type="button" data-location="melasti-beach" aria-label="Lihat Pantai Melasti">
                        <span class="bali-marker-label">Pantai Melasti</span>
                    </button>

                    <div class="bali-map-hint">Pilih titik lokasi untuk menjelajah</div>
                </div>

                <article class="bali-location-card" aria-live="polite"></article>
            </div>
        </div>
    `;

    const style = document.createElement("style");
    style.id = "bali-map-styles";
    style.textContent = mapStyles;
    document.head.appendChild(style);

    const definition = document.querySelector("#definition");
    if (definition) {
        definition.insertAdjacentElement("afterend", section);
    } else {
        document.querySelector("main")?.prepend(section);
    }

    const card = section.querySelector(".bali-location-card");
    const markers = [...section.querySelectorAll(".bali-marker")];

    function renderLocation(id, animate = false) {
        const location = locations.find(item => item.id === id);
        if (!location) return;

        if (animate) card.classList.add("is-changing");

        const render = () => {
            card.innerHTML = `
                <div class="bali-location-image-wrap">
                    <img class="bali-location-image" src="${location.image}" alt="${location.imageAlt}" loading="lazy">
                    <span class="bali-location-type">${location.type}</span>
                </div>
                <div class="bali-location-content">
                    <p class="bali-location-region">${location.region}</p>
                    <h3 class="bali-location-title">${location.name}</h3>
                    <p class="bali-location-description">${location.description}</p>
                    <p class="bali-location-credit">
                        Foto: ${location.credit} · ${location.license}<br>
                        <a href="${location.source}" target="_blank" rel="noopener noreferrer">Lihat sumber & lisensi Wikimedia Commons ↗</a>
                    </p>
                </div>
            `;
            card.classList.remove("is-changing");
        };

        if (animate) {
            window.setTimeout(render, 180);
        } else {
            render();
        }

        markers.forEach(marker => {
            marker.classList.toggle("active", marker.dataset.location === id);
            marker.setAttribute("aria-pressed", marker.dataset.location === id ? "true" : "false");
        });
    }

    markers.forEach(marker => {
        marker.addEventListener("click", () => {
            renderLocation(marker.dataset.location, true);
        });
    });

    renderLocation("umeanyar");

    const revealElements = section.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealElements.forEach(element => observer.observe(element));
    } else {
        revealElements.forEach(element => element.classList.add("active"));
    }
})();
