// Getting names and scores from submit-form and displaying them in high-score.html

const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('name');
const score = urlParams.get('score');

// Check if name and score are provided
if (username && score) {
  // Check if high score already exists
  const existingHighScore = JSON.parse(localStorage.getItem('highScores')) || [];
  const isNewHighScore = !existingHighScore.some(entry => entry.name === username && entry.score === score);

  // If it's a new high score, add it to localStorage
  if (isNewHighScore) {
    existingHighScore.push({ username, score });
    localStorage.setItem('highScores', JSON.stringify(existingHighScore));
  }
  return false; 
}
// Display all high scores
const highscoresElement = document.getElementById('highscores');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
highScores.forEach(highScore => {
  const listItem = document.createElement('p');
  listItem.textContent = `${highScore.username}: ${highScore.score}`;
  highscoresElement.appendChild(listItem);
});

function clearHighScores() {
  localStorage.removeItem('highScores');
  // Refresh the page to reflect the changes
  updateHighScoresList();
}

function updateHighScoresList() {
  const highscoresElement = document.getElementById('highscores');
  highscoresElement.innerHTML = ''; // Clear existing list
}
