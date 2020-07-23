const store = require('../store')
const signUpSuccess = function () {
  $('#message').text('Successfully signed up! Now Sign In!')
}
const signUpFailure = function () {
  $('#message').text('Sign Up failed :(')
}
const signInSuccess = function (response) {
  $('#message').text('Sign in Success!')
  store.user = response.user
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-up-button').hide()
  $('#change-password-button').show()
}
const signInFailure = function () {
  $('#message').text('Sign in failed')
  $('#sign-up').show()
}
const changePasswordSuccess = function () {
  $('#message').text('change password success!')
}
const changePasswordFailure = function () {
  $('#message').text('change password failed :(')
}
const signOutSuccess = function () {
  $('#message').text('sign out success!')
  store.user = null
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#change-password-button').hide()
}
const signOutFailure = function () {
  $('#message').text('sign out failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess
}
