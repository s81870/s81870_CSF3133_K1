let started = false;
let wins = 0;
let losses = 0;
let draws = 0;
let round = 0;
let results = [];

function startGame(){
    const name = document.getElementById("playerName").value.trim();
    if (name === ""){
        alert("Please enter your name.");
        return;
    }
    started = true;
    document.getElementById("welcome").innerHTML = "Welcome, " + name + "!";
    document.getElementById("startTime").innerHTML = new Date();
}

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice){
    if(!stared){
        alert("Click Start Game first.");
        return;
    }

    const compChoice = getComputerChoice();
    round++;

    document.getElementById("playerImg").src = playerChoice + "C:\Users\HP\Documents\GitHub\s81870_CSF3133_K1\Lab6.png";
    document.getElementById("computerImg").src = compChoice + "C:\Users\HP\Documents\GitHub\s81870_CSF3133_K1\Lab6.png";

    let outcome = "";
    let color = "grey";

    if(playerChoice === compChoice){
        outcome = "Draw";
        color = "grey";
        draws++;
        document.getElementById("draws").innerHTML = draws;
    } else if (
        (playerChoice === "rock" && compChoice === "scissors") ||
        (playerChoice === "scissors" && compChoice === "paper") ||
        (playerChoice === "paper" && compChoice === "rock")
    ) {
        outcome = "Win";
        color = "green";
        wins++;
        document.getElementById("wins").innerHTML = wins;
    } else  {
        outcome = "Lose";
        color = "red";
        losses++;
        document.getElementById("losses").innerHTML = losses;
    }

    const resEL = document.getElementById ("result");
    resEl.innerHTML = "You: " + playerChoice + " | Computer: " + compChoice + " -> " + outcome;
    resEl.style.color = color;

    results.push(outcome);
    document.getElementById("history").innerHTML +=
        "<tr><td>" + round + "</td><td>" + playerChoice + "</td><td>" + compChoice + "</td><td>" + outcome + "</td></tr>";
}

function showSummary() {
  let winCount = 0;
  for (let i = 0; i < results.length; i++) {
    if (results[i] === "Win") {
      winCount++;
    }
  }
  const pct = results.length > 0 ? Math.round((winCount / results.length) * 100) : 0;
  document.getElementById("summary").innerHTML =
    "You played " + results.length + " rounds and won " + pct + "%";
}

function resetGame() {
  wins = 0;
  losses = 0;
  draws = 0;
  round = 0;
  results = [];
  started = false;

  document.getElementById("wins").innerHTML = 0;
  document.getElementById("losses").innerHTML = 0;
  document.getElementById("draws").innerHTML = 0;
  document.getElementById("result").innerHTML = "";
  document.getElementById("summary").innerHTML = "";
  document.getElementById("history").innerHTML =
    "<tr><th>Round</th><th>You</th><th>Computer</th><th>Result</th></tr>";
}

