// Globala variabler

// En tom string som fylls med det slumpade ordet
let selectedWord = " ";

// Antal max totala möjliga gissningar
let guesses = 10;

// Håller koll på antalet misstag spelaren gjort, och används för att updatera när ett till misstag görs.
let mistakes = 0;

// En tom array som fylls med de bokstäver som gissats
let guessed = [];

// Används för att visa det antal bokstäver som är i ordet, och visar bokstäver när en korrekt bokstav gissas
let wordStatus = null;

// Array: med spelets alla ord
const wordList = [
    "chas",
    "academy",
    "lampa",
    "däggdjur",
    "köpa",
    "allergi",
    "planet",
    "tandborste",
    "ansikte",
    "marknad",
    "president",
    "bild",
    "jaguar",
    "melodi",
    "svärfar",
    "kontinent",
    "prisjägare",
    "fallskärm",
    "konsonant",
    "lime",
    "tyskland",
    "hummer",
    "fortskaffningsmedel",
    "drog",
    "vetenskap",
    "programmeringsmetodik"
]; 

// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner 
function startGame() {
    createButtons()
    randomWord()
    guessedWord()
    document.querySelector("#guessesText").style.display = "block"
    document.querySelector("#guessText").style.display = "block"
    document.querySelector(".restart").style.display = "flex"
    document.querySelector(".start").style.display = "none"
    document.querySelector("#heading").style.display = "none"
    document.querySelector("#instructions").style.display = "none"

}

// Genererar knappar och delar upp de med en bokstav var. Alla får ett ID med sin bokstav och fuktionen för att spelet ska fungera. Detta skapar en mycket mer organiserad HTML.
function createButtons() {
    let buttons = "abcdefghijklmnopqrstuvwxyzåäö".split('').map(letter =>
        `
        <button class="btn"
        id="` + letter + `"
        onClick="letterGuess('` + letter + `')"
        >
        ` + letter + `
        </button>
        `).join('');
        
        document.querySelector("#gameBoard").innerHTML = buttons;
}

// Funktion som slumpar fram ett ord
function randomWord() {
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
}


// Funktion som körs när du trycker på bokstäverna och gissar bokstav
// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på
// Vid varje knapptryck pushas den bokstaven som valts in i guessed arrayen, som guessedWord funktionen sedan visar bokstaven om den är korrekt.
function letterGuess(guessedLetter) {
    guessed.indexOf(guessedLetter) === -1 ? guessed.push(guessedLetter) : null;
    document.getElementById(guessedLetter).setAttribute('disabled', true)
    // Om gissningen är korrekt, guessWord funktionen körs, som fyller i de korrekta bokstäverna. checkGameWin funktionen körs också för och se om selectedWord är lika med wordStatus
    if (selectedWord.indexOf(guessedLetter) >= 0) {
        guessedWord();
        checkGameWin()
        // Om gissningen är inkorrekt, addMistakes funktionen körs för att updatera sidan med antalet misstag. updateImg körs också för att updatera bilden. checkGameLose köra för att se om antalet misstag är uppe i max antal gissningar
    } else if (selectedWord.indexOf(guessedLetter) === -1) {
        addMistakes();
        checkGameLose()
        updateImg()
    }
}

// wordStatus tar selectedWord, splittar den och sätter den i en map. Därefter kollar den om den bokstav som pushats in i guessed array finns i wordStatus. Sidan uppdateras sedan. 
function guessedWord() {
    wordStatus = selectedWord.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.querySelector("#wordDisplay").innerHTML = wordStatus;
}


// Funktion som ropas vid vinst
function checkGameWin() {
    if (wordStatus === selectedWord) {
        document.querySelector("#gameBoard").innerText = "Du vann!"
        document.querySelector("#gameBoard").style.fontSize = "2rem"
        document.querySelector("#guessText").style.display = "none"
        document.querySelector("#hangmanImg").src = "images/hangman-win.png";
    }
}

// Funktion som ropas vid vinst förlust
function checkGameLose() {
    if (mistakes === guesses) {
        document.querySelector("#gameBoard").innerText = "Du förlorade"
        document.querySelector("#gameBoard").style.fontSize = "2rem"
        document.querySelector("#guessText").style.display = "none"
        document.querySelector("#wordDisplay").innerHTML = `Ordet var <strong>${selectedWord}</strong>`
        
    }
}

// Funktion som uppdaterar sidan med antalet misstag
function addMistakes() {
    mistakes++;
    document.querySelector("#mistakes").innerHTML = mistakes
}

// Function som uppdaterar hangmanImg vid tryck på fel bokstav
function updateImg() {
    document.querySelector("#hangmanImg").src = `images/hangman-step${mistakes}.png`;
}

// Displayar antalet misstag och hur många gissningar man har
document.querySelector("#guesses").innerText = guesses
document.querySelector("#mistakes").innerText = mistakes