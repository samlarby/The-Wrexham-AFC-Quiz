
//Linking the difficulty.html to play.html depending on which difficulty is chosen

function startQuiz(difficulty) {
  window.location.href = `play.html?difficulty=${difficulty}`;
}