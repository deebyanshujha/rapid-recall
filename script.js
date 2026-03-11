// --- Variables to store game information ---
let players = [];           // List of players
let currentPlayerIndex = 0; // Whose turn is it? (0 for Player 1, 1 for Player 2, etc.)
let currentCategory = "";   // The category for the current turn
let usedWords = [];         // List of words that have already been used
let timer;                  // The timer variable
let timeLeft = 15;          // Seconds per turn
let gameData = {};          // Object to hold all our categories and words

// --- HTML Elements (Getting things from the page) ---
let startScreen = document.getElementById('start-screen');
let gameScreen = document.getElementById('game-screen');
let gameOverScreen = document.getElementById('game-over-screen');

let playerCountInput = document.getElementById('player-count');
let playerIndicator = document.getElementById('player-indicator');
let categoryDisplay = document.getElementById('current-category');
let answerInput = document.getElementById('answer-input');
let messageArea = document.getElementById('message-area');
let timerBar = document.getElementById('timer-bar');
let scoreList = document.getElementById('score-list');

// --- Setup Function (Runs when the page loads) ---
function init() {
    // getGameData comes from categories.js
    gameData = getGameData();
    console.log("Game Loaded!");
}

// --- Start the Game ---
function startGame() {
    // 1. Get number of players
    let count = parseInt(playerCountInput.value);
    
    // 2. create players
    players = [];
    for (let i = 0; i < count; i++) {
        players.push({
            name: "Player " + (i + 1),
            score: 0
        });
    }

    // 3. Reset game variables
    currentPlayerIndex = 0;
    usedWords = []; // Empty the used words list

    // 4. Show the Game Screen
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    gameOverScreen.classList.add('hidden');
    document.getElementById('scoreboard').classList.remove('hidden');

    // 5. Start the first turn
    startTurn();
}

// --- Start a New Turn ---
function startTurn() {
    // 1. Get current player
    let player = players[currentPlayerIndex];
    
    // 2. Update text on screen
    playerIndicator.innerText = player.name + "'s Turn";
    answerInput.value = ""; // Clear input box
    messageArea.innerText = ""; // Clear messages
    answerInput.focus(); // Put cursor in input box

    // 3. Pick a random category
    let categories = Object.keys(gameData); // ["Countries", "Actors", ...]
    let randomIndex = Math.floor(Math.random() * categories.length);
    currentCategory = categories[randomIndex];
    
    // Show category on screen
    categoryDisplay.innerText = currentCategory;

    // 4. Update Scoreboard
    updateScoreboard();

    // 5. Start the Timer
    startTimer();
}

// --- Timer Logic ---
function startTimer() {
    clearInterval(timer); // Stop any old timer
    timeLeft = 15; // Reset time
    updateTimerBar(); // Show full bar

    // Run this function every 100 milliseconds (0.1 seconds)
    timer = setInterval(function() {
        timeLeft = timeLeft - 0.1;
        updateTimerBar();

        // If time runs out
        if (timeLeft <= 0) {
            clearInterval(timer);
            showMessage("Time's up!", "error");
            setTimeout(nextTurn, 2000); // Wait 2 seconds then go to next turn
        }
    }, 100);
}

function updateTimerBar() {
    let percentage = (timeLeft / 15) * 100;
    timerBar.style.width = percentage + "%";
    
    // Change color to red if low time
    if (percentage < 30) {
        timerBar.style.backgroundColor = "red";
    } else {
        timerBar.style.backgroundColor = "#2ecc71"; // Green
    }
}

// --- Check the Answer ---
function submitAnswer() {
    let answer = answerInput.value.trim(); // Remove extra spaces
    let lowerCaseAnswer = answer.toLowerCase(); // Convert to lowercase

    if (answer === "") return; // Do nothing if empty

    // 1. Check if word was already used
    if (usedWords.includes(lowerCaseAnswer)) {
        showMessage("Already used!", "error");
        return;
    }

    // 2. Check if the word is in the list for the current category
    let validWords = gameData[currentCategory];
    
    // We need to check case-insensitive (ignore capital letters)
    let isValid = false;
    for (let i = 0; i < validWords.length; i++) {
        if (validWords[i].toLowerCase() === lowerCaseAnswer) {
            isValid = true;
            break;
        }
    }

    // 3. Handle Result
    if (isValid) {
        // Correct!
        showMessage("Correct!", "success");
        usedWords.push(lowerCaseAnswer); // Add to used list
        
        // Add point
        players[currentPlayerIndex].score++;
        updateScoreboard();

        clearInterval(timer); // Stop timer
        setTimeout(nextTurn, 1000); // Wait 1 second then next turn
    } else {
        // Wrong!
        showMessage("Not in " + currentCategory + "!", "error");
    }
}

// --- Pass Turn ---
function passTurn() {
    showMessage("Pass!", "error");
    clearInterval(timer);
    setTimeout(nextTurn, 1000);
}

// --- Go to Next Player ---
function nextTurn() {
    // Move index to next player (0 -> 1 -> 2 -> 0 ...)
    currentPlayerIndex++;
    if (currentPlayerIndex >= players.length) {
        currentPlayerIndex = 0;
    }
    startTurn();
}

// --- End Game ---
function endGame() {
    clearInterval(timer);
    gameScreen.classList.add('hidden');
    gameOverScreen.classList.remove('hidden');

    // Find Winner
    // Sort players by score (Highest first)
    players.sort(function(a, b) {
        return b.score - a.score;
    });

    let winner = players[0];
    let winnerText = document.getElementById('winner-text');
    
    // Check for tie
    if (players.length > 1 && players[0].score === players[1].score) {
         winnerText.innerText = "It's a Tie!";
    } else {
         winnerText.innerText = winner.name + " Wins!";
    }

    // Show Final Scores
    let finalScoresDiv = document.getElementById('final-scores');
    let html = "<h3>Final Scores:</h3><ul>";
    
    for (let i = 0; i < players.length; i++) {
        html += "<li>" + players[i].name + ": " + players[i].score + "</li>";
    }
    html += "</ul>";
    
    finalScoresDiv.innerHTML = html;
}

// --- Helper Functions ---
function updateScoreboard() {
    scoreList.innerHTML = ""; // Clear list
    
    for (let i = 0; i < players.length; i++) {
        let p = players[i];
        let item = document.createElement('li');
        item.innerText = p.name + ": " + p.score;
        
        // Highlight current player
        if (i === currentPlayerIndex) {
            item.style.color = "blue";
            item.style.fontWeight = "bold";
        }
        
        scoreList.appendChild(item);
    }
}

function showMessage(text, type) {
    messageArea.innerText = text;
    // Set class to change color (see css)
    messageArea.className = "message " + type; 
}

function resetGame() {
    startScreen.classList.remove('hidden');
    gameScreen.classList.add('hidden');
    gameOverScreen.classList.add('hidden');
}

// --- Button Clicks ---
document.getElementById('start-btn').onclick = startGame;
document.getElementById('submit-btn').onclick = submitAnswer;
document.getElementById('pass-btn').onclick = passTurn;
document.getElementById('end-btn').onclick = endGame;
document.getElementById('restart-btn').onclick = resetGame;

// Allow pressing "Enter" key
answerInput.onkeypress = function(e) {
    if (e.key === "Enter") {
        submitAnswer();
    }
};

// Start the setup
init();
