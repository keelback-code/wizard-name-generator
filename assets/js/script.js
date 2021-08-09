wizardFirstNames = ["Scout", "The", "Starmaker", "Ziggy", "Moonage", "Velvet", "Data", "Hoggle", "Rudi", "Izzy", "Genesis", "Groulf", "Ged", "Sparrowhawk", "Zorgon", "Neb", "Jesha", "Kin", "Lorsa", "Kay", "Emice", "Donn", "Klegg", "Bean", "Zues", "Alta", "Celestial", "Jatz", "Tam", "Merlyn", "Taliesin", "Spacedrop"];
wizardLastNames = ["Rumbles", "Gorgonmitre", "Jupiter", "Stardust", "Glass", "Blackout", "Daydream", "Smith", "The Night Bringer", "The Day Waker", "Genesis", "The Garrulous", "Of The Adler Groves", "Of The Deep Forests", "Of The Underbrush", "Of The Deep Places", "Of The Dark Dank", "The Eldest", "The Elder", "The Young", "The Middle", "The Last", "The Wizened", "The Feeble", "The Feral", "The Knotty", "The Friable", "Of Horndown", "The Wet", "The Moist", "The Moister", "With the Mostest", "The Cantankerous", "The Dulcet", "The Ghastly", "Of The Long Spindle", "Of The Dells", "Of Widow's Peak", "Of Glendale, CA", "With The Short Cane", "The Long of Neck, Humped of Back", "The Wyrd", "The Not-Terrible", "The Amazing Fantastic Excellent Very Good", "The Intergalactic", "The Nefarious", "The Relentless", "The Cryptic", "42", "The Luminuous", "The Shimmerer", "The Mathemagician", "The Ordinary"];

document.addEventListener("DOMContentLoaded", function() {
// all the event listener related things in here, all functions underneath

    let biscuitRoll = document.getElementById("biscuit-roll");
    biscuitRoll.addEventListener('click', runBiscuitGame);

    let wildcardRoll = document.getElementById("wildcard-roll");
    wildcardRoll.addEventListener('click', runWildcardGame);


})

function runBiscuitGame() {
    calculateAsciiValue();
    asciiCeilingError();
}

function runWildcardGame() {

}

document.getElementById("biscuit-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        runBiscuitGame();
    }
})

/**
 * Function to calculate the ASCII value of the user input 
 */
function calculateAsciiValue() {

    biscuitVar = document.getElementById("biscuit-input").value;
    let biscuitSum = 0;

    for (i in biscuitVar) {
        let x = biscuitVar.charCodeAt(i);
        biscuitSum += x
    }

    biscuitDivide = biscuitSum / 2;
    let num1 = Math.floor(biscuitDivide / 42);
    let num2 = Math.floor(biscuitDivide / 21);
    
    document.getElementById("biscuit-first-name-result").textContent = `${(wizardFirstNames[num1])}`;
    document.getElementById("biscuit-last-name-result").textContent = `${(wizardLastNames[num2])}`;

}

/**
 * Function to check for values outside the range of the program and generate an alert asking for a smaller word.
 */
function asciiCeilingError() {

    let firstName = document.getElementById("biscuit-first-name-result").textContent
    let lastName = document.getElementById("biscuit-last-name-result").textContent

    if (firstName == "undefined" || lastName == "undefined") {
        alert("Your word is too valuable! The gremlins have taken it; please enter a shorter word.");
        document.getElementById("biscuit-first-name-result").textContent = "Please try another biscuit.";
        document.getElementById("biscuit-last-name-result").textContent = "";
    }
}

function wildcardRoll() {

}

function displayNameHistory() {
//    let history = [];
//   document.getElementById("name-printout").push
}

function resetNameHistory() {

}