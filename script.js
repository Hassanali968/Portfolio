    /*==================================
        LOADER
==================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});

/*==================================
        MOBILE MENU
==================================*/

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.onclick = () => {

    nav.classList.toggle("active");

};

/*==================================
        TYPING EFFECT
==================================*/

const words = [

    "Backend Developer",
    "ASP.NET Core Developer",
    "C# Developer",
    "SQL Server Developer",
    "REST API Developer",
    "Web Developer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

/*==================================
        BACK TO TOP
==================================*/

const topBtn = document.createElement("a");

topBtn.className = "top-btn";

topBtn.href = "#home";

topBtn.innerHTML = "<i class='fa-solid fa-arrow-up'></i>";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

/*==================================
        SCROLL REVEAL
==================================*/

const reveals = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", reveal);

function reveal() {

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.classList.add("active");

        }

    });

}

/*==================================
        MOUSE GLOW
==================================*/

const glow = document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);

window.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

/*==================================
        FLOATING PARTICLES
==================================*/

for (let i = 0; i < 35; i++) {

    const particle = document.createElement("span");

    particle.className = "particle";

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =

        (5 + Math.random() * 8) + "s";

    particle.style.animationDelay =

        Math.random() * 5 + "s";

    document.querySelector(".background")

        .appendChild(particle);

}

/*==================================
        ACTIVE NAVBAR
==================================*/

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*==================================
        CLOSE MOBILE MENU
==================================*/

links.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});

/*==================================
        SMOOTH SCROLL
==================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});