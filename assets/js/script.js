wizardFirstNames = ["Scout", "The", "Starmaker", "Ziggy", "Moonage", "Velvet", "Data", "Hoggle", "Rudi", "Izzy", "Genesis", "Groulf", "Ged", "Sparrowhawk", "Zorgon", "Neb", "Jesha", "Kin", "Lorsa", "Kay", "Emice", "Donn", "Klegg", "Bean", "Zues", "Alta", "Celestial", "Jatz", "Tam", "Merlyn", "Taliesin", "Spacedrop", "Oblivia"];
wizardLastNames = ["Rumbles", "Gorgonmitre", "Jupiter", "Stardust", "Glass", "Blackout", "Daydream", "Smith", "The Night Bringer", "The Day Waker", "Genesis", "The Garrulous", "Of The Adler Groves", "Of The Deep Forests", "Of The Underbrush", "Of The Deep Places", "Of The Dark Dank", "The Eldest", "The Elder", "The Young", "The Middle", "The Last", "The Wizened", "The Feeble", "The Feral", "The Knotty", "The Friable", "Of Horndown", "The Wet", "The Moist", "The Moister", "With the Mostest", "The Cantankerous", "The Dulcet", "The Ghastly", "Of The Long Spindle", "Of The Dells", "Of Widow's Peak", "Of Glendale, CA", "With The Short Cane", "The Long of Neck, Humped of Back", "The Wyrd", "The Not-Terrible", "The Amazing Fantastic Excellent Very Good", "The Intergalactic", "The Nefarious", "The Relentless", "The Cryptic", "42", "The Luminuous", "The Shimmerer", "The Mathemagician", "The Ordinary"];

document.addEventListener("DOMContentLoaded", function() {

    let biscuitRoll = document.getElementById("biscuit-roll");
    biscuitRoll.addEventListener('click', runBiscuitMode); 
    
})

document.addEventListener("DOMContentLoaded", function() {
    
    let wildcardRoll = document.getElementById("wildcard-roll");
    wildcardRoll.addEventListener('click', runWildcardMode);
    
})

//document.addEventListener("window.onload", function() {
    
    //let histTest = document.getElementsByClassName("first-name-display");
    //document.addEventListener('load', histTestThree);

    //document.getElementById("first-name-result-wildcard").addEventListener("load", histTestThree);
    
//})
    

function runBiscuitMode() { 
    biscuitRoll();
    asciiCeilingError();
    //histTest();
    //displayNameHistory();
    //histTestTwo();
    histTestThree();
    resetNameHistory();
}

function runWildcardMode() {
    wildcardRoll()
    //displayNameHistory();
    //histTest();
    //histTestTwo();
    histTestThree();
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

function histTest() {
    let printHistory = [];
    
    
    for (i of printHistory) {
        let firstHistoryName = document.getElementById("first-name-result-wildcard").textContent;
        let lastHistoryName = document.getElementById("last-name-result-wildcard").textContent;
        printHistory.push(firstHistoryName);
        printHistory.push(lastHistoryName);
        console.log(printHistory);
    }
    
    

}

function histTestThree() {
    
    document.getElementById("first-name-result-wildcard").addEventListener("load", histTestThree);
    
    const printHistory = [];
    let firstHistoryName = document.getElementById("first-name-result-wildcard").textContent;
    let lastHistoryName = document.getElementById("last-name-result-wildcard").textContent;
    printHistory.push(firstHistoryName, lastHistoryName);

    //let names = firstHistoryName + lastHistoryName;

    //localStorage.setItem("names", JSON.stringify(names));
    //let data = JSON.parse(localStorage.getItem("names"));

    if (printHistory.length >= 1) {
        window.onload = printHistory.push(firstHistoryName, lastHistoryName);
    } //else {
    //    printHistory = [];
    //}

    console.log(printHistory);
    //console.log(printHistory);
    
}


function histTestTwo() {
    if (typeof(Storage) !== "undefined") {

        let printHistory = [];

        localStorage.setItem("names", JSON.stringify(printHistory));
        let data = JSON.parse(localStorage.getItem("names"))

        if (localStorage.getItem("names")) {
            names = JSON.parse(localStorage.getItem("names"))
        } else {
            names = []
        }

        data.forEach((names) => {
            document.getElementById("first-name-history-biscuit").textContent = localStorage.getItem("names");
        })

        //} else {
        //alert("alert here, including name")
    }
}




function displayNameHistory() {

    //if (typeof(Storage) !== "undefined") {
        // Code for localStorage
        //} else {
        //alert("alert here, including name")
    //}

    //let history = [];
    //let firstHistoryName = document.getElementById("first-name-result-biscuit");
    //let lastHistoryName = document.getElementById("last-name-result-biscuit");

    //for (i in history) {
     //   history.push(firstHistoryName[i].textContent);
     //   history.push(lastHistoryName[i].textContent);
     //   document.getElementById("first-name-history-biscuit").innerHTML = history[i];
     //   console.log(history);
    //}

    //console.log(history);
    





    //let history = [];
    //history.push(document.getElementById("first-name-result").textContent);
    //history.push(document.getElementById("last-name-result").textContent);
    //names.push(history);
    //document.getElementById("name-history").textContent = history;
    //console.log(history);

    //document.getElementById("first-name-history").textContent = history;  
    
    //let nameHistory = [];
    
    let firstHistoryName = document.getElementById("first-name-result-biscuit").textContent;
    let lastHistoryName = document.getElementById("last-name-result-biscuit").textContent;

    localStorage.setItem("firstNameHistory", document.getElementById("first-name-result-biscuit").textContent);
    localStorage.setItem("lastNameHistory", document.getElementById("last-name-result-biscuit").textContent);

    //for (let i = 0; i < localStorage.length; i++) {
    //    let key = localStorage.key(i);
    //    console.log(localStorage)
    //}
    for (i in localStorage) {
        localStorage.push(firstHistoryName);
        localStorage.push(lastHistoryName);
     //   localStorage.setItem("nameHistory", JSON.stringify(nameHistory));
     //   document.getElementById("first-name-result-biscuit").textContent.push(localStorage);
     //   document.getElementById("last-name-result-biscuit").textContent.push(nameHistory);
     //   document.getElementById("first-name-history").textContent = localStorage.getItem("firstNameHistory");
     //   document.getElementById("last-name-history").textContent = localStorage.getItem("lastNameHistory");
     //   console.log(nameHistory);
     //   console.log(localStorage);  
    }

    //console.log(nameHistory);
    console.log(localStorage);
    
    //history.push(document.getElementById("first-name-result").textContent);
    //localStorage.setItem("nameHistory", JSON.stringify(nameHistory));

    //document.getElementById("first-name-history").textContent = localStorage.getItem("firstNameHistory");
    //document.getElementById("last-name-history").textContent = localStorage.getItem("lastNameHistory");

    //printHistory = [];
    //firstNameHistory.push(printHistory);
    //lastNameHistory.push(printHistory);
    //console.log(printHistory);

}

function resetNameHistory() {

    if (localStorage.length > 4) {
        alert("Your wizardex is full");
        clear();
    }

}