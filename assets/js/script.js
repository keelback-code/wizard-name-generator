wizardFirstNames = ["Scout", "Starmaker", "Ziggy", "Moonage", "Velvet", "Data", "Hoggle", "Rudi", "Izzy", "Genesis", "Groulf", "Ged", "Sparrowhawk", "Zorgon", "Neb", "Jesha", "Kin", "Lorsa", "Kay", "Emice", "Donn", "Klegg", "Bean", "Zues", "Alta", "Celestial", "Jatz", "Tam", "Merlyn", "Taliesin", "Spacedrop", "Oblivia"];
wizardLastNames = ["Rumbles", "Gorgonmitre", "Jupiter", "Stardust", "Glass", "Blackout", "Daydream", "Smith", "The Night Bringer", "The Day Waker", "Genesis", "The Garrulous", "Of The Adler Groves", "Of The Deep Forests", "Of The Underbrush", "Of The Deep Places", "Of The Dark Dank", "The Eldest", "The Elder", "The Young", "The Middle", "The Last", "The Wizened", "The Feeble", "The Feral", "The Knotty", "The Friable", "Of Horndown", "The Wet", "The Moist", "The Moister", "With the Mostest", "The Cantankerous", "The Dulcet", "The Ghastly", "Of The Long Spindle", "Of The Dells", "Of Widow's Peak", "Of Glendale, CA", "With The Short Cane", "The Long of Neck, Humped of Back", "The Wyrd", "The Not-Terrible", "The Amazing Fantastic Excellent Very Good", "The Intergalactic", "The Nefarious", "The Relentless", "The Cryptic", "42", "The Luminuous", "The Shimmerer", "The Mathemagician", "The Ordinary"];
let printHistory = [];

document.addEventListener("DOMContentLoaded", function() {

    let biscuitRoll = document.getElementById("biscuit-roll");
    biscuitRoll.addEventListener('click', runBiscuitMode); 
    
})

document.addEventListener("DOMContentLoaded", function() {
    
    let wildcardRoll = document.getElementById("wildcard-roll");
    wildcardRoll.addEventListener('click', runWildcardMode);
    
})
    

function runBiscuitMode() { 
    biscuitRoll();
    asciiCeilingError();
    displayNameHistory();
    resetNameHistory();
}

function runWildcardMode() {
    wildcardRoll()
    displayNameHistory();
    resetNameHistory();
}

document.getElementById("biscuit-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        runBiscuitMode();
    }
})

/**
 * Function to begin biscuit mode; checks if user has entered input for Jaffa cakes, if not then runs calculateAsciiValue function.
 */
function biscuitRoll() {

    biscuitVar = document.getElementById("biscuit-input").value;
    
    if (biscuitVar == "Jaffa Cakes" || biscuitVar == "jaffa cakes" || biscuitVar == "jaffacakes" || biscuitVar == "Jaffa cakes") {
        alert("Is that really a biscuit? I find no name here in that file. Please roll again.");
    } else {
        calculateAsciiValue();
    }
  
}

/**
 * Function to calculate the ASCII value of the user input 
 */
function calculateAsciiValue() {

    let biscuitSum = 0;

    for (i in biscuitVar) {
        let x = biscuitVar.charCodeAt(i);
        biscuitSum += x
    }

    biscuitDivide = biscuitSum / 2;
    let biscNum1 = Math.floor(biscuitDivide / 42);
    let biscNum2 = Math.floor(biscuitDivide / 21);
    
    document.getElementById("first-name-result-biscuit").textContent = `${(wizardFirstNames[biscNum1])}`;
    document.getElementById("last-name-result-biscuit").textContent = `${(wizardLastNames[biscNum2])}`;

}

/**
 * Function to check for values outside the range of the program and generate an alert asking for a smaller word.
 */
function asciiCeilingError() {

    let firstName = document.getElementById("first-name-result-biscuit").textContent
    let lastName = document.getElementById("last-name-result-biscuit").textContent

    if (firstName == "undefined" || lastName == "undefined") {
        alert("Your word is too valuable! The gremlins have taken it; please enter a shorter word.");
        document.getElementById("first-name-result-biscuit").textContent = "Please try another biscuit.";
        document.getElementById("last-name-result-biscuit").textContent = "";

    }
}

/**
 * Function to calculate two random numbers and use that to generate random wizard name; one from each array.
 */
function wildcardRoll() {

    let wildNum1 = Math.floor(Math.random() * wizardFirstNames.length);
    let wildNum2 = Math.floor(Math.random() * wizardLastNames.length);

    document.getElementById("first-name-result-wildcard").textContent = `${(wizardFirstNames[wildNum1])}`;
    document.getElementById("last-name-result-wildcard").textContent = `${(wizardLastNames[wildNum2])}`;

}

function displayNameHistory() {
    
    document.getElementById("first-name-history-wildcard").textContent = document.getElementById("first-name-result-wildcard").textContent;
    document.getElementById("last-name-history-wildcard").textContent = document.getElementById("last-name-result-wildcard").textContent;
    let firstHistoryName = document.getElementById("first-name-history-wildcard").textContent;
    let lastHistoryName = document.getElementById("last-name-history-wildcard").textContent;
    let names = firstHistoryName + " " + lastHistoryName;
    printHistory.push(names);

    for (i in printHistory) {
        document.getElementById("second-name-history-storage").textContent = `${printHistory}`;
    }

    console.log(printHistory);
    
}

function resetNameHistory() {

    if (printHistory.length >= 5) {
        alert("Your wizardex is full");
        delete printHistory;
    }

}