let timer = 60;
let score = 0;
let Hitran;



const audioContainer = new Audio("game.mp3"); // Create a new audio element

function increaseScore() {
    score += 10;
    document.getElementById("scorediv").textContent = score;
}

function getnewHit() {
    Hitran = Math.floor(Math.random() * 10);
    document.getElementById("hitval").textContent = Hitran;
}

function makeBubble() {
    let clutter = "";
    for (let i = 1; i <= 168; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".pbottom").innerHTML = clutter;
}

function runTimer() {
    let timerclear = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.getElementById("timerdiv").textContent = timer;
        } else {
            clearInterval(timerclear);
            document.querySelector(".pbottom").innerHTML = `
                <h1>Game Over !!</h1>` + `
                <h2>Your Score : ${score}</h2>`;

            // Stop the background music when the game is over
            pause();
        }

        // Start the background music when timer starts
        if (timer === 59) {
            playMp3(); // Set flag to true once audio has been started
        }
    }, 1000);
}

function playMp3() {
    audioContainer.loop = true;
    audioContainer.play();
}

function pause() {
    audioContainer.pause();
}

document.querySelector(".pbottom").addEventListener("click", (ele) => {
    if (Number(ele.target.textContent) === Hitran) {
        increaseScore();
        makeBubble();
        getnewHit();
    }
});

runTimer();
makeBubble();
getnewHit();