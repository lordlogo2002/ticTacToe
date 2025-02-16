document.addEventListener("DOMContentLoaded", function () {
    let roundTime = 15;
    let gameTime = 0;
    let roundTimer = document.getElementById("round-timer");
    let gameTimer = document.getElementById("game-timer");
    let roundInterval, gameInterval;

    // Get all game cells
    let cells = document.querySelectorAll(".game-cell");

    // Function to cycle cell state ("", "X", "O")
    function cycleCellState(cell) {
        if (cell.textContent === "") {
            cell.textContent = "X";
            cell.style.color = "darkred";
        } else if (cell.textContent === "X") {
            cell.textContent = "O";
            cell.style.color = "darkblue";
        } else {
            cell.textContent = "";
        }
    }

    // Attach event listeners to each cell
    cells.forEach(cell => {
        cell.addEventListener("click", function () {
            cycleCellState(cell);
        });
    });

    // Start Game Timer (Counts up)
    function startGameTimer() {
        gameInterval = setInterval(() => {
            gameTime++;
            let minutes = String(Math.floor(gameTime / 60)).padStart(2, "0");
            let seconds = String(gameTime % 60).padStart(2, "0");
            gameTimer.textContent = `${minutes}:${seconds}`;
        }, 1000);
    }

    // Start Round Timer (Counts down from 15)
    function startRoundTimer() {
        clearInterval(roundInterval);
        roundTime = 15;
        roundTimer.textContent = roundTime;
        roundTimer.parentElement.classList.remove("warning", "critical");

        roundInterval = setInterval(() => {
            roundTime--;
            roundTimer.textContent = roundTime;

            // Change color based on time remaining
            if (roundTime <= 5) {
                roundTimer.parentElement.classList.add("warning");
            }
            if (roundTime <= 2) {
                roundTimer.parentElement.classList.remove("warning");
                roundTimer.parentElement.classList.add("critical");
            }
            if (roundTime <= 0) {
                clearInterval(roundInterval);
                roundTimer.textContent = "Time's Up!";
            }
        }, 1000);
    }

    // Start timers when the page loads
    startGameTimer();
    startRoundTimer();
});
