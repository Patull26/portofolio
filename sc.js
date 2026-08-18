

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});

const sections = document.querySelectorAll("section");

function updateActiveNav() {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (
            window.scrollY >=
            sectionTop - 200
        ) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNav
);

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "active"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});

const magneticButtons =
    document.querySelectorAll(".magnetic");

magneticButtons.forEach(button => {

    button.addEventListener(
        "mousemove",
        event => {

            const rect =
                button.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left -
                rect.width / 2;

            const y =
                event.clientY -
                rect.top -
                rect.height / 2;

            button.style.transform =
                `translate(${x * 0.15}px,
                           ${y * 0.15}px)`;

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "translate(0,0)";

        }
    );

});

const heroVisual =
    document.querySelector(".hero-visual");

document.addEventListener(
    "mousemove",
    event => {

        if (!heroVisual) return;

        const x =
            (event.clientX /
            window.innerWidth -
            0.5);

        const y =
            (event.clientY /
            window.innerHeight -
            0.5);

        heroVisual.style.transform =
            `translate(
                ${x * 15}px,
                ${y * 15}px
            )`;

    }
);

const projects =
    document.querySelectorAll(".project");

projects.forEach(project => {

    project.addEventListener(
        "mouseenter",
        () => {

            project.style.transform =
                "translateY(-8px)";

        }
    );

    project.addEventListener(
        "mouseleave",
        () => {

            project.style.transform =
                "translateY(0)";

        }
    );

});

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function(event) {

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });