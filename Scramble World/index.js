let scrambledWord = document.getElementById("scrambledWordId");
let hintMessage = document.getElementById("hintMessageId");
let resultMessage = document.getElementById("resultMessageId");
let typedWordElement = document.getElementById('typedWordId');
let checkWordButton = document.getElementById('checkWordButtonId');
let refreshWord = document.getElementById('refreshWordId');

const MAX_TIME = 90;

var timeLeft = MAX_TIME;
var timerMessageDiv = document.getElementById('timerId');

var timerId = setInterval(countdown, 1000);

timerMessageDiv.innerHTML = "Time: " + timeLeft + ' seconds remaining';


function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        timerExpired();
    } else {
        timerMessageDiv.innerHTML = "Time: " + timeLeft + ' seconds remaining';
        timeLeft--;
    }
}



let listOfWords = ['Fly', 'Apple', 'Starfish', 'Jupiter', 'Fatality', 'Calculator', 'Skyscraper', 'Eclipse', 'Fire Hydrant', 'Alligator', 'Breakcore', 'September', 'Punctuation', 'Exhaustion', 'Monochrome', 'Daydreaming', 'Intoxication', 'Margarita', 'Imagination', "Switzerland", 'Circumference', 'Loneliness', 'Pterodactyl', 'Slaughterhouse', 'Counterargument', 'Extraterrestrial', 'Authorization', 'Thalassophobia', 'Synchronization', 'Uncharacteristically'];
let hints = ['How do you not know this? Are you 2?', 'A Fruit', "Under the sea", "It's in Space", 'Mortal Kombat famous Line', 'It has numbers in it', 'Tall Building', 'The sun and moon touch each other', "Helps put out a fire", "A Big Reptile", 'A genre of music', "A month", "Those dots in a sentence", "I'm tired from running", 'Black and White', "When you're bored from school", 'Too much beer', 'A type of drink', 'Creativity in your head', 'A country in Europe', 'The ring of a circle', 'Alone', ' A Dinosaur', 'A horrible place for animals', 'Let me explain why you are wrong.', 'Outer world creatures', 'Access: Granted', 'A type of intense fear', 'Precise coordination', "You don't usually act like this."];

let originalWord;
let eachHint;
let wordIndex = 0;
let currentWordIndex = 0;
pickWord();

function pickWord() {
    currentWord = wordIndex;
    typedWordElement.value = "";
    originalWord = listOfWords[wordIndex];
    eachHint = "Hint: " + hints[wordIndex];

    hintMessage.textContent = eachHint;
    scrambledWord.innerHTML = scramble(originalWord);
    wordIndex++;

}

function scramble(wordToScramble) {
    let strarray = wordToScramble.split('');
    var j, k, h;
    for (let i = 0; i < strarray.length * 2; i++) {
        j = Math.floor(Math.random() * strarray.length)
        k = Math.floor(Math.random() * strarray.length)
        h = strarray[j]
        strarray[j] = strarray[k]
        strarray[k] = h

    }

    return strarray.join(' ');
}

function checkWord() {

    let typedWord = typedWordElement.value;
    if (originalWord.toLowerCase() == typedWord.toLowerCase()) {
        resultMessage.innerHTML = 'You got it right!';
        pickWord();
        timeLeft = MAX_TIME;
    } else {
        resultMessage.innerHTML = "You got it wrong!";
    }
}



function pickAnotherWord() {


    // Got to the final word. Let's show finished messages
    if (wordIndex >= listOfWords.length) {

        resultMessage.innerHTML = "All Words Completed!"
        checkWordButton.disabled = true;
        refreshWord.disabled = true;
        timeLeft = 0;
        timerMessageDiv.innerHTML = "GREAT JOB!!!";
    } else {
        pickWord();
        checkWordButton.disabled = false;
        timeLeft = MAX_TIME;
        resultMessage.innerHTML = "";
        timerMessageDiv.innerHTML = "Time: " + timeLeft + ' seconds remaining';
        clearTimeout(timerId);
        timerId = setInterval(countdown, 1000);
    }
}

function timerExpired() {

    timerMessageDiv.innerHTML = "You're time has expired. Please refresh the word.";
    checkWordButton.disabled = true;
    timeLeft = MAX_TIME;
}