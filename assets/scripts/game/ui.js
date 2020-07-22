const store = require('../store')
const api = require('./api')
const gameSpots = document.querySelectorAll('.game-spots')
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]
const startGameSuccess = function (response) {
  store.game = response.game
  $('#message').text('Game in progress!')
}
const startGameFailure = function () {
  $('#message').text('You Need To Sign In!')
}
const userChoiceSuccess = function (response) {
  store.game = response.game
  $('#status').text('user picked a box!')

  checkGameStatus(store.game)
}
const checkGameStatus = (game) => {
  const cells = game.cells
  winCombos.forEach(function (winCombo) {
    // Check if cells[winCombo[0]], cells[winCombo[1]] and cells[winCombo[2]]
    // all equal the same thing either x or o
    const winningString = cells[winCombo[0]] + cells[winCombo[1]] + cells[winCombo[2]]
    if (winningString === 'XXX' || winningString === '000') {
      $('#message').text('You Won')
      api.gameOver()
      gameSpots.forEach(function (gameSpot) {
        const cellIndex = parseInt(gameSpot.dataset.cellIndex)
        if (winCombo.includes(cellIndex)) {
          gameSpot.style.backgroundColor = 'green'
          gameSpot.style.pointerEvents = 'none'
        } else {
          gameSpot.style.backgroundColor = 'red'
          gameSpot.style.pointerEvents = 'none'
        }
      })
    }
  })
}
const userChoiceFailure = function () {
  $('#status').text('user choice failed to complete')
}

module.exports = {
  startGameFailure,
  startGameSuccess,
  userChoiceSuccess,
  userChoiceFailure
}
