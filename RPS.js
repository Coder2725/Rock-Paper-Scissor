let buttons = document.querySelectorAll(".actions");
let ani1 = document.getElementById("ani1");
let ani2 = document.getElementById("ani2");
let bRock = document.querySelector("#rock");
let bPaper = document.querySelector("#paper");
let bScissor = document.querySelector("#scissor");
let nextButton = document.querySelectorAll(".next");


let sPlayer = 0;
let sComp = 0;
let r = false;
let p = false;
let s = false;
let verdict;
let continueFlag = true;
let GOverFlag = false;

nextButton.forEach((button) => {
    button.addEventListener("click", function(events) {
        location.reload();
    });
});


const nextRound = (events) => {
    console.log ("running");
    if (continueFlag === true) {
        continueFlag = false;
        disableButtons();
        document.getElementById("default1").setAttribute("src", "default.png");
        document.getElementById("default2").setAttribute("src", "default.png");
        document.getElementById("default1").style.animation = "none";
        document.getElementById("default2").style.animation = "none";
        void document.getElementById("default1").offsetWidth;
        void document.getElementById("default2").offsetWidth;
        document.getElementById("default1").style.animation = "rotate1 0.8s 0s 3";
        document.getElementById("default2").style.animation = "rotate2 0.8s 0s 3";
r = false;
p = false;
s = false;
ani1.style.display = "block";
ani2.style.display = "block";
if (events.target.id === "rock") {
    r = true;
} else if (events.target.id === "paper") {
    p = true; 
} else if (events.target.id === "scissor") {
    s = true; 
}

setTimeout(() => {
let compInput = Math.floor(Math.random() * 3);
console.log("The Random Number is", compInput);
continueGame(compInput);
}, 2300);
}
}


buttons.forEach((button) => {
    button.addEventListener("click", function(events) {
        nextRound(events);
    });
});


function disableButtons() {
    buttons.forEach(btn => btn.disabled = true);
    nextButton.disabled = true;
}

function enableButtons() {
    buttons.forEach(btn => btn.disabled = false);
    nextButton.disabled = false;
}

const continueGame = (compInput) => {
    // For Player's Input    
    if (r == true) {
            document.getElementById("default1").setAttribute("src", "rock_Board.png");
        } else if (p == true) {
            document.getElementById("default1").setAttribute("src", "paper_Board.png");
        } else if (s == true) {
            document.getElementById("default1").setAttribute("src", "scissor_Board.png");
        }

        ///For Computer's Random Output
        if (compInput == 0) {
            document.getElementById("default2").setAttribute("src", "rock_Board.png");
        } else if (compInput == 1) {
            document.getElementById("default2").setAttribute("src", "paper_Board.png");
        } else if (compInput == 2) {
            document.getElementById("default2").setAttribute("src", "scissor_Board.png");
        }

        if (r == true && compInput == 0) {
            verdict = "Its a Tie";
            document.querySelector(".verdict").style.color = "Yellow"
        } else if (r == true && compInput == 1) {
            verdict = "Computer gets a Point";
            sComp++;
            document.querySelector(".verdict").style.color = "red"
        } else if (r == true && compInput == 2) {
            verdict = "You get a Point";
            sPlayer++;
            document.querySelector(".verdict").style.color = "Green"
        } else if (p == true && compInput == 0) {
            verdict = "You get a Point";
            sPlayer++;
            document.querySelector(".verdict").style.color = "Green"
        } else if (p == true && compInput == 1) {
            verdict = "Its a Tie";
            document.querySelector(".verdict").style.color = "Yellow"
        } else if (p == true && compInput == 2) {
            verdict = "Computer gets a Point";
            sComp++;
            document.querySelector(".verdict").style.color = "red"
        } else if (s == true && compInput == 0) {
            verdict = "Computer gets a Point";
            sComp++;
            document.querySelector(".verdict").style.color = "red"
        } else if (s == true && compInput == 1) {
            verdict = "You get a Point";
            sPlayer++;
            document.querySelector(".verdict").style.color = "Green"
        } else if (s == true && compInput == 2) {
            verdict = "Its a Tie";
            document.querySelector(".verdict").style.color = "Yellow"
        }
        console.log(verdict);
        document.querySelector(".verdict").innerHTML = `${verdict}`;
        document.getElementById("sp").innerHTML = `Player's Score : ${sPlayer}`;
        document.getElementById("sc").innerHTML = `Computer's Score : ${sComp}`;
        CheckWinner();
    };
    const CheckWinner = () => {
        if (sPlayer < 3 && sComp < 3) {
            enableButtons();
            continueFlag = true;
            console.log("Goint to next Round");
        } else if (sPlayer === 3) {
            document.getElementById("sp").style.backgroundColor = "Green";
            document.querySelector(".verdict").innerHTML = `You Win!!!`;
            document.querySelector(".verdict").style.color = "Green"
            document.getElementById("next").style.display = "block";
            console.log ("Player Wins");
            const victorySound = document.querySelector(".victory");
            victorySound.src = "goodresult-82807.mp3";
            victorySound.play();
            continueFlag = false;
            GOverFlag = true;
        } else if (sComp === 3) {
            document.getElementById("sc").style.backgroundColor = "Green";
            document.querySelector(".verdict").innerHTML = `You Lose...`;
            document.querySelector(".verdict").style.color = "Red"
            document.getElementById("next").style.display = "block";
            console.log ("Computer Wins");
            const defeatSound = document.querySelector(".defeat");
            defeatSound.src = "losing-horn-313723.mp3";
            defeatSound.play();
            continueFlag = false;
            GOverFlag = true;
        }
    };