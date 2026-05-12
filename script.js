// Random Alien Generator with Images //
const aliens = [
    { name: "Heatblast", img: "images/heatblast.jpg" },
    { name: "Four Arms", img: "images/fourarms.png" },
    { name: "XLR8", img: "images/xlr8.png" },
    { name: "Diamondhead", img: "images/diamondhead.png" },
    { name: "Grey Matter", img: "images/greymatter.jpg" },
    { name: "Stinkfly", img: "images/stinkfly.jpg" },
    { name: "Upgrade", img: "images/upgrade.png" },
    { name: "Ripjaws", img: "images/ripjaws.jpg" },
    { name: "Ghostfreak", img: "images/ghostfreak.png" },
    { name: "Wildmutt", img: "images/wildmutt.jpg" }
];

const alienBtn = document.getElementById("alien-btn");
const alienResult = document.getElementById("alien-result");
const alienImage = document.getElementById("alien-image");

if (alienBtn) {
    alienBtn.addEventListener("click", () => {
        const randomAlien = aliens[Math.floor(Math.random() * aliens.length)];

        // Show the name
        alienResult.textContent = "Your random alien is: " + randomAlien.name + "!";

        // Show the image
        alienImage.src = randomAlien.img;
        alienImage.alt = randomAlien.name;
        alienImage.style.display = "block";
    });
}

// Alien vs Villain Battle Simulator with NEW Type System //

// Aliens + Types
const battleAliens = [
    { name: "Heatblast", img: "images/heatblast.jpg", type: "elemental" },
    { name: "Four Arms", img: "images/fourarms.png", type: "strength" },
    { name: "XLR8", img: "images/xlr8.png", type: "speed" },
    { name: "Diamondhead", img: "images/diamondhead.png", type: "elemental" },
    { name: "Grey Matter", img: "images/greymatter.jpg", type: "intelligence" },
    { name: "Stinkfly", img: "images/stinkfly.jpg", type: "speed" },
    { name: "Upgrade", img: "images/upgrade.png", type: "intelligence" },
    { name: "Ripjaws", img: "images/ripjaws.jpg", type: "strength" },
    { name: "Ghostfreak", img: "images/ghostfreak.png", type: "elemental" },
    { name: "Wildmutt", img: "images/wildmutt.jpg", type: "strength" }
];

// Villains + Types
const battleVillains = [
    { name: "Dr. Animo", img: "images/animo.png", type: "intelligence" },
    { name: "Vilgax", img: "images/vilgax.png", type: "strength" },
    { name: "Kevin 11", img: "images/kevin11.png", type: "strength" },
    { name: "Charmcaster", img: "images/charmcaster.png", type: "elemental" },
    { name: "Khyber", img: "images/khyber.png", type: "speed" },
    { name: "Forever Knights", img: "images/foreverknights.png", type: "intelligence" },
    { name: "Albedo", img: "images/albedo.png", type: "intelligence" }
];

// HTML references
const battleBtn = document.getElementById("battle-btn");
const alienName = document.getElementById("alien-name");
const villainName = document.getElementById("villain-name");
const alienImg = document.getElementById("alien-img");
const villainImg = document.getElementById("villain-img");
const battleResult = document.getElementById("battle-result");

// NEW Type Advantage Logic
function getAdvantage(aType, vType) {
    if (aType === vType) return "tie";

    if (
        (aType === "strength" && vType === "speed") ||
        (aType === "speed" && vType === "intelligence") ||
        (aType === "intelligence" && vType === "elemental") ||
        (aType === "elemental" && vType === "strength")
    ) {
        return "alien";
    }

    return "villain";
}

if (battleBtn) {
    battleBtn.addEventListener("click", () => {

        const alien = battleAliens[Math.floor(Math.random() * battleAliens.length)];
        const villain = battleVillains[Math.floor(Math.random() * battleVillains.length)];

        // Display names
        alienName.textContent = alien.name + " (" + alien.type + ")";
        villainName.textContent = villain.name + " (" + villain.type + ")";

        // Display images
        alienImg.src = alien.img;
        alienImg.style.display = "block";

        villainImg.src = villain.img;
        villainImg.style.display = "block";

        // Determine winner
        const advantage = getAdvantage(alien.type, villain.type);

        let winner;

        if (advantage === "alien") {
            winner = alien.name + " wins! (Type Advantage)";
        } else if (advantage === "villain") {
            winner = villain.name + " wins! (Type Advantage)";
        } else {
            // If tie, random winner
            winner = (Math.random() < 0.5 ? alien.name : villain.name) + " wins!";
        }

        battleResult.textContent = winner;
    });
}

// Preferred Ally Quiz //

const allyQuizBtn = document.getElementById("ally-quiz-btn");
const allyResultName = document.getElementById("ally-result-name");
const allyResultDesc = document.getElementById("ally-result-desc");
const allyResultImg = document.getElementById("ally-result-img");

const allyResults = {
    gwen: {
        name: "Gwen Tennyson",
        img: "images/gwen.png",
        desc: "You prefer a smart, powerful, and strategic ally who can handle magic and think ahead."
    },
    kevin: {
        name: "Kevin Levin",
        img: "images/kevin.png",
        desc: "You want a tough, loyal fighter at your side who’s not afraid to jump into danger."
    },
    rook: {
        name: "Rook Blonko",
        img: "images/rook.png",
        desc: "You like a disciplined, tactical partner who follows protocol and uses advanced tech."
    },
    max: {
        name: "Grandpa Max",
        img: "images/grandpamax.png",
        desc: "You value experience, wisdom, and someone who always has your back no matter what."
    }
};

function getSelectedValue(name) {
    const options = document.querySelectorAll(`input[name="${name}"]:checked`);
    return options.length ? options[0].value : null;
}

if (allyQuizBtn) {
    allyQuizBtn.addEventListener("click", () => {

        const q1 = getSelectedValue("q1");
        const q2 = getSelectedValue("q2");
        const q3 = getSelectedValue("q3");
        const q4 = getSelectedValue("q4");
        const q5 = getSelectedValue("q5");

        if (!q1 || !q2 || !q3 || !q4 || !q5) {
            allyResultName.textContent = "Please answer all the questions first.";
            allyResultDesc.textContent = "";
            allyResultImg.style.display = "none";
            return;
        }

        const scores = { gwen: 0, kevin: 0, rook: 0, max: 0 };

        [q1, q2, q3, q4, q5].forEach(answer => {
            scores[answer]++;
        });

        let bestAlly = "gwen";
        let bestScore = -1;

        for (const ally in scores) {
            if (scores[ally] > bestScore) {
                bestScore = scores[ally];
                bestAlly = ally;
            }
        }

        const result = allyResults[bestAlly];

        allyResultName.textContent = "Your preferred ally is: " + result.name + "!";
        allyResultDesc.textContent = result.desc;

        allyResultImg.src = result.img;
        allyResultImg.style.display = "block";
    });
}

// Omnitrix Activation Button //

const activateBtn = document.getElementById("activate-btn");
const activationMessage = document.getElementById("activation-message");
const omniBeep = document.getElementById("omni-beep");

if (activateBtn) {
    activateBtn.addEventListener("click", () => {

        // Play beep sound
        omniBeep.currentTime = 0;
        omniBeep.play();

        // Flash screen
        document.body.classList.add("flash");
        setTimeout(() => document.body.classList.remove("flash"), 300);

        // Show activation message
        activationMessage.style.opacity = 1;

        // Hide message after 2 seconds
        setTimeout(() => {
            activationMessage.style.opacity = 0;
        }, 2000);
    });
}
