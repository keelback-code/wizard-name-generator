const wizardFirstNames = ["Scout", "Starmaker", "Ziggy", "Moonage", "Velvet", "Data", "Hoggle", "Rudi", "Izzy", "Genesis", "Groulf", "Ged", "Sparrowhawk", "Zorgon", "Neb", "Jesha", "Kin", "Lorsa", "Kay", "Emice", "Donn", "Klegg", "Bean", "Zues", "Alta", "Celestial", "Jatz", "Tam", "Merlyn", "Taliesin", "Spacedrop", "Oblivia", "Laser", "Action", "Sparky", "Ulgrub", "Ulm", "Germ", "Hobb", "Sneer", "Aborghast", "Mew", "Storm", "Geld", "Blue", "Winnifrederico", "Soup", "Jillius", "Lox", "Pollux", "Abie-See Diefgie", "Tomby", "Aeiou", "Xippy", "Zoot", "Poot", "Pteey", "Kompooter", "Book", "Vul", "Hoggard", "Furio", "Zemrak", "Nickel", "Apprentice", "Rona", "Neko", "Rouge", "Billiard", "Aster", "Student", "Rookie", "Novice", "Fledgling", "Stranger", "Outsider", "M.", "G.", "K.", "F.", "E.", "Pupil", "Buttoncup", "Elderbell", "Jammie", "Dodgers", "Monte", "Danish", "Wizardy", "Sogg", "Miasma", "Rasmodius"];
const wizardLastNames = ["Rumbles", "Gorgonmitre", "Jupiter", "Stardust", "Glass", "Blackout", "Daydream", "Smith", "The Night Bringer", "The Day Waker", "Genesis", "The Garrulous", "Of The Adler Groves", "Of The Deep Forests", "Of The Underbrush", "Of The Deep Places", "Of The Dark Dank", "The Eldest", "The Elder", "The Young", "The Middle", "The Last", "The Wizened", "The Feeble", "The Feral", "The Knotty", "The Friable", "Of Horndown", "The Wet", "The Moist", "The Moister", "With the Mostest", "The Cantankerous", "The Dulcet", "The Ghastly", "Of The Long Spindle", "Of The Dells", "Of Widow's Peak", "Of Glendale, CA", "With The Short Cane", "The Long of Neck, Humped of Back", "The Wyrd", "The Not-Terrible", "The Amazing Fantastic Excellent Very Good", "The Intergalactic", "The Nefarious", "The Relentless", "The Cryptic", "42", "The Luminuous", "The Shimmerer", "The Mathemagician", "The Ordinary", "Devourer Of Nibbles", "The Betrayer", "The Unassuming", "Of Many Hats", "Percival", "Hoarder of Shiny Things", "The Most Stinky", "Of The Pub Around The Corner", "The Extravagant", "The Perpetually Miffed", "The Vile", "The Sneaky", "Who Flees Before Small Canines", "Liberator of Cockroaches", "The Snarky", "The Smug", "Who You've Probably Never Heard Of But I'm Really Super Famous In Flurgleburg, I Swear", "Splonk", "Stubb", "Weaver of Despair and Baskets", "Of Chains", "The Dumpy", "The Thicc", "Of The Sun", "The Tight Lipped", "Master of Destruction", "Tamer Of Things That Need Taming", "The Balls", "Starlight", "Eater of Peanuts", "The Sparkly", "The Engulfed", "The Sexy", "The Boring", "The User Of Puppets", "Of Lasers", "Fire-eater", "Master of Various Liquids", "Earthen Fist", "The Light", "Blight-Befaller", "Pestilence", "Shockmaster", "The Drowned", "The Triggered", "Of Fanciness", "The Fancy", "The Forgetful", "Death Denier", "The Nosy", "Mousemaster", "Of The Fairies", "Of The Merpeople", "Cyclops Slayer", "User of Tiny Things", "The Perpetually Sleepy", "Biscuit", "Cookies", "The Saboteur", "McWizardface", "Cindersap", "Tiramisu"];
let printHistory = [];
let rotationStart = 0;

document.addEventListener("DOMContentLoaded", function () {

    const dice = document.getElementsByTagName("button");

    for (let die of dice) {
        die.addEventListener('click', function () {
            const rollType = this.getAttribute("data-roll-type");
            startRoll(rollType);
        });

        //Code to animate D20 adapted from https://cloudinary.com/blog/rotating_images_in_javascript_three_quick_tutorials .
        die.addEventListener('click', function () {
            rotationStart += 60;
            die.style.transform = 'rotate(' + rotationStart + 'deg)';
        });
    }
});

/**
 * Function to determine which button has been clicked and start the 'roll' for that mode.
 */
function startRoll(rollType) {

    if (rollType === "biscuit") {
        biscuitRoll();
        asciiCeilingError();
        createNameHistory();
        setTimeout(resetNameHistory, 4000);
    } else if (rollType === "wildcard") {
        wildcardRoll();
        createNameHistory();
        setTimeout(resetNameHistory, 4000);
    } else {
        alert(`Unknown roll.`);
        throw `Unknown roll.`;
    }
}

/**
 * Function to begin biscuit mode; checks if user has entered input for Jaffa cakes, if not then checks for any input, then calls calculateAsciiValue function.
 */
function biscuitRoll() {

    const biscuitInput = document.getElementById("biscuit-input").value;

    if (biscuitInput === "Jaffa Cakes" || biscuitInput === "jaffa cakes" || biscuitInput === "jaffacakes" || biscuitInput === "Jaffa cakes") {
        alert("Is that really a biscuit? I find no name here in that file. Please roll again.");
    } else if (biscuitInput.length <= 0) {
        alert("Hey! You have to enter a biscuit name before you can roll! Go back and try again! Please. (Cookies and crackers also accepted.)");
    } else {
        calculateAsciiValue();
    }
}

/**
 * Function to calculate the ASCII value of the user input and use that to generate a random wizard name using one from each array.
 */
function calculateAsciiValue() {

    const biscuitVar = document.getElementById("biscuit-input").value;
    let biscuitSum = 0;

    for (let i of biscuitVar) {
        let x = biscuitVar.charCodeAt(i);
        biscuitSum += x;
    }

    const biscuitDivide = biscuitSum / 2;
    const biscNum1 = Math.floor(biscuitDivide / 42);
    const biscNum2 = Math.floor(biscuitDivide / 21);

    document.getElementById("first-name-result-biscuit").textContent = `${(wizardFirstNames[biscNum1])}`;
    document.getElementById("last-name-result-biscuit").textContent = `${(wizardLastNames[biscNum2])}`;
}

/**
 * Function to check for values outside the range of the program and generate an alert asking for a smaller word.
 */
function asciiCeilingError() {

    const firstName = document.getElementById("first-name-result-biscuit").textContent;
    const lastName = document.getElementById("last-name-result-biscuit").textContent;

    if (firstName === "undefined" || lastName === "undefined") {
        alert("Your word is too valuable! The gremlins have taken it; please enter a shorter word.");
        document.getElementById("first-name-result-biscuit").textContent = "Please try another biscuit.";
        document.getElementById("last-name-result-biscuit").textContent = "";
    }
}

/**
 * Function to calculate two random numbers and use that to generate a random wizard name using one from each array.
 */
function wildcardRoll() {

    const wildNum1 = Math.floor(Math.random() * wizardFirstNames.length);
    const wildNum2 = Math.floor(Math.random() * wizardLastNames.length);

    document.getElementById("first-name-result-wildcard").textContent = `${(wizardFirstNames[wildNum1])}`;
    document.getElementById("last-name-result-wildcard").textContent = `${(wizardLastNames[wildNum2])}`;
}

/**
 * Function to display name history by storing it in an array which is displayed in the HTML as a list. Will not add empty strings or error message from asciiCeilingError function to display.
 */
function createNameHistory() {

    const firstHistoryName = document.getElementsByClassName("name-display")[0].textContent;
    const lastHistoryName = document.getElementsByClassName("name-display")[1].textContent;
    const names = firstHistoryName + " " + lastHistoryName;
    const li = document.createElement("li");
    document.getElementsByClassName("name-history-storage")[0].appendChild(li);

    if (firstHistoryName === "Please try another biscuit." || firstHistoryName === "undefined" || lastHistoryName === "undefined") {
        printHistory.push();
        li.textContent = "";
    } else {
        printHistory.push(names);
        li.textContent += printHistory[printHistory.length - 1];
    }
}

/**
 * Function to alert user once name history has reached a cap, and to reset history.
 */
function resetNameHistory() {

    if (printHistory.length >= 6) {
        alert(`Your wizardex is full and will be erased on your next roll. If you would like to grab a quill and make note of the names you have generated so far, they are: ${printHistory}`);
        printHistory = [];
        document.getElementsByClassName("name-history-storage")[0].innerHTML = "";
    }
}