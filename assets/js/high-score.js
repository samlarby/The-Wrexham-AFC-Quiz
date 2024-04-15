// Getting names and scores from submit-form and displaying them in high-score.html

function updateHighScoresList() {
  const highscoresElement = document.getElementById('highscores');
  highscoresElement.innerHTML = ''; // Clear existing list

  // Retrieve high scores from localStorage
  const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

  // Populate the high scores list
  highScores.forEach(highScore => {
    const listItem = document.createElement('p');
    listItem.textContent = `${highScore.username}: ${highScore.score}`;
    highscoresElement.appendChild(listItem);
  });
}

// Check if name and score are provided in URL parameters
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('name');
const score = urlParams.get('score');

// Add new high score if name and score exist
if (username && score) {
  // Check if high score already exists
  const existingHighScores = JSON.parse(localStorage.getItem('highScores')) || [];
  const isNewHighScore = !existingHighScores.some(entry => entry.username === username && entry.score === score);

  // If it's a new high score, add it to localStorage
  if (isNewHighScore) {
    existingHighScores.push({ username, score });
    localStorage.setItem('highScores', JSON.stringify(existingHighScores));
  }
}

// Call the function to populate the high scores list initially
updateHighScoresList();

function clearHighScores() {
  localStorage.removeItem('highScores');
  updateHighScoresList();
}