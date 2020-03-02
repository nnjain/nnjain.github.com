(function() {
  "use strict";

  const startGame = document.getElementById("startgame");
  const gameControl = document.getElementById("gamecontrol");
  const game = document.getElementById("game");
  const score = document.getElementById("score");
  const score1 = document.getElementById("player1Score");
  const score2 = document.getElementById("player2Score");
  var slider = document.getElementById("slider");
  var scoreboard = document.getElementById("scoreboard");

  const actionArea = document.getElementById("actions");
  const quitGame = document.getElementById("quitGame");

  var gameData = {
    dice: [
      "1die.jpg",
      "2die.jpg",
      "3die.jpg",
      "4die.jpg",
      "5die.jpg",
      "6die.jpg"
    ],
    players: ["Player 1", "Player 2"],
    score: [0, 0],
    roundScore: 0,
    roll1: 0,
    roll2: 0,
    rollSum: 0,
    index: 0,
    gameEnd: 49
  };

  startGame.addEventListener("click", function() {
    gameData.index = Math.round(Math.random());
    gameControl.innerHTML = "<h2>The Game Has Started</h2>";
    quitGame.innerHTML += '<button id="quit">Wanna Quit?</button>';

    document.getElementById("quit").addEventListener("click", function() {
      location.reload();
    });

    // console.log(gameData.index);
    setUpTurn();
  });

  function setUpTurn() {
    game.innerHTML = `<p>Roll the dice for the ${
      gameData.players[gameData.index]
    }</p>`;
    actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
    document.getElementById("roll").addEventListener("click", function() {
      throwDice();
    });
    checkWinningCondition();
  }

  function throwDice() {
    actionArea.innerHTML = "";
    gameData.roll1 = Math.ceil(Math.random() * 6);
    gameData.roll2 = Math.ceil(Math.random() * 6);
    game.innerHTML = `<p>Roll the dice for the ${
      gameData.players[gameData.index]
    }</p>`;
    game.innerHTML += `<img src="${gameData.dice[gameData.roll1 - 1]}"> 
						<img src="${gameData.dice[gameData.roll2 - 1]}">`;
    gameData.rollSum = gameData.roll1 + gameData.roll2;

    // if two 1's are rolled...
    if (gameData.rollSum === 2) {
      console.log("snake eyes were rolled");
      game.innerHTML += "<p>Haha, you go snake eyes!</p>";
      gameData.roundScore = 0;
      gameData.score[gameData.index] = 0;
      gameData.index ? (gameData.index = 0) : (gameData.index = 1);
      showCurrentScore();
      setTimeout(setUpTurn, 2000);
    }
    // if either die is a 1...
    else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
      gameData.score[gameData.index] -= gameData.roundScore;
      gameData.roundScore = 0;
      checkWinningCondition();
      gameData.index ? (gameData.index = 0) : (gameData.index = 1);
      game.innerHTML = `<p>You lost your points! Your turn is over, it is now ${
        gameData.players[gameData.index]
      }'s turn.</p>`;
      setTimeout(setUpTurn, 2000);
    }
    // if neither die is a 1...
    else {
      gameData.roundScore += gameData.rollSum;
      gameData.score[gameData.index] =
        gameData.score[gameData.index] + gameData.rollSum;
      actionArea.innerHTML =
        '<button id="rollagain">Roll again</button> <button id="pass">Pass</button>';

      document
        .getElementById("rollagain")
        .addEventListener("click", function() {
          throwDice();
        });

      document.getElementById("pass").addEventListener("click", function() {
        gameData.roundScore = 0;
        gameData.index ? (gameData.index = 0) : (gameData.index = 1);
        setUpTurn();
      });

      checkWinningCondition();
    }
  }

  function checkWinningCondition() {
    if (gameData.score[gameData.index] > gameData.gameEnd) {
      score.innerHTML = `<h2>${gameData.players[gameData.index]} 
		wins with ${gameData.score[gameData.index]} points!</h2>`;

      actionArea.innerHTML = "";
      document.getElementById("quit").innerHTML = "Start a New Game?";
    } else {
      showCurrentScore();
    }
  }

  function showCurrentScore() {
    if (gameData.index == 0) {
      score1.style.fontWeight = "800";
      score2.style.fontWeight = "400";
      slider.style.width = `${score1.offsetWidth}px`;
      slider.style.left = `${0}px`;
    } else {
      score2.style.fontWeight = "800";
      score1.style.fontWeight = "400";
      slider.style.width = `${score2.offsetWidth}px`;
      slider.style.left = `${scoreboard.offsetWidth - score2.offsetWidth}px`;
    }
    score1.innerHTML = `<p>${gameData.players[0]}: ${gameData.score[0]}</p>`;
    score2.innerHTML = `<p>${gameData.players[1]}: ${gameData.score[1]}</p>`;
    // score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}: ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}: ${gameData.score[1]}</p>`;
  }
})();
