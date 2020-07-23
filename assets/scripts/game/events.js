const api = require('./api')
const ui = require('./ui')
const onStartGame = function (event) {
  event.preventDefault()
  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
  api.getGames()
    .then(displayGames)
}
const displayGames = function (response) {
  $('#games-played').text(response.games.length)
}

const gameSpots = document.querySelectorAll('.game-spots')
let currentMove = 'X'
// need reset to do what start game does. resets the whole gameboard
const onReset = () => {
  for (let i = 0; i < gameSpots.length; i++) {
    gameSpots[i].innerHTML = ''
    gameSpots[i].style.backgroundColor = 'rgb(51, 246, 249)'
    gameSpots[i].style.pointerEvents = 'none'
  }
  $('#message').text('Now Click Start Game To Start A New Game!')
  $('#status').text('')
}

const onCellClick = (e) => {
  // display the move
  // check winner
  // switch the player
  if (currentMove === 'X') {
    api.userChoice(e.target.dataset.cellIndex, currentMove)
      .then(ui.userChoiceSuccess)
      .catch(ui.userChoiceFailure)
    $('#' + e.target.id).append('<img class="spot-image" src="https://github.com/TheLog1/tic-tac-toe-client/blob/master/images/xGivingit.png?raw=true"/>')
    currentMove = '0'
  } else {
    api.userChoice(e.target.dataset.cellIndex, currentMove)
      .then(ui.userChoiceSuccess)
      .catch(ui.userChoiceFailure)
    $('#' + e.target.id).append('<img class="spot-image" src="https://raw.githubusercontent.com/TheLog1/tic-tac-toe-client/master/images/oGivingIt.png"/>')
    currentMove = 'X'
  }
  e.target.style.pointerEvents = 'none'
}

module.exports = {
  onStartGame,
  onCellClick,
  onReset,
  gameSpots
}
