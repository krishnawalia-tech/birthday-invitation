
const openingScreen = document.getElementById("openingScreen");
const invitation = document.getElementById("invitation");
const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");

let isOpened = false;

// =================================
// CUSTOM PARTY DETAILS
// =================================

document.getElementById("friendName").textContent = "Rahul";

document.getElementById("mainMessage").textContent =
    "Welcome to my birthday celebration! Your presence will make this day even more special. Let's make memories together!";

document.getElementById("partyDate").textContent = "25 December 2026";

document.getElementById("partyTime").textContent = "7:00 PM";

document.getElementById("partyVenue").textContent = "My Home";

// =================================
// ENVELOPE OPENING
// =================================

openButton.addEventListener("click", openInvitation);

envelope.addEventListener("click", openInvitation);

function openInvitation() {

    if (isOpened) return;

    isOpened = true;

    envelope.classList.add("open");

    setTimeout(() => {

        openingScreen.classList.add("hide");

        setTimeout(() => {

            openingScreen.style.display = "none";

            invitation.classList.add("show");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            createConfetti(100);

        }, 1000);

    }, 900);

}

// =================================
// GOLDEN PARTICLES
// =================================

const particlesContainer = document.getElementById("particles");

function createParticles() {

    for (let i = 0; i < 45; i++) {

        const particle = document.createElement("div");

        particle.classList.add("particle");

        particle.style.left = Math.random() * 100 + "%";

        particle.style.animationDuration =
            (Math.random() * 8 + 6) + "s";

        particle.style.animationDelay =
            Math.random() * 8 + "s";

        particle.style.width =
            (Math.random() * 3 + 2) + "px";

        particle.style.height = particle.style.width;

        particlesContainer.appendChild(particle);

    }

}

createParticles();

// =================================
// CONFETTI ANIMATION
// =================================

function createConfetti(amount = 70) {

    const symbols = ["✦", "✧", "●", "◆", "★"];

    for (let i = 0; i < amount; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.fontSize =
            (Math.random() * 10 + 8) + "px";

        confetti.style.color =
            ["#d9b56d", "#f8e6b4", "#ffffff", "#b98755"]
            [Math.floor(Math.random() * 4)];

        confetti.style.animationDuration =
            (Math.random() * 3 + 3) + "s";

        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 7000);

    }

}

// =================================
// CELEBRATE BUTTON
// =================================

document.getElementById("celebrateButton")
    .addEventListener("click", () => {

        createConfetti(150);

    });
