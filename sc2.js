/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICK
========================================================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNav);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-title, .about-grid, .service-card, .skills-container, .project-card, .contact-content, .contact-info"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================================================
   PROJECT IMAGE FALLBACK
========================================================= */

const projectImages = document.querySelectorAll(
    ".project-image img"
);

projectImages.forEach(image => {

    image.addEventListener("error", () => {

        image.style.display = "none";

        image.parentElement.style.background =
            "linear-gradient(135deg, #302b17, #111)";

    });

});


/* =========================================================
   MOUSE PARALLAX
   Memberikan sedikit efek gerak pada background.
========================================================= */

const animeBackground =
    document.querySelector(".anime-background");

document.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 10;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 10;

    if (animeBackground) {

        animeBackground.style.transform =
            `translate(${x}px, ${y}px) scale(1.02)`;

    }

});


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});