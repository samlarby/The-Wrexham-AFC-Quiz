// Getting names and scores from play.html and displaying them in high-score.html

// retrieves highscore 
function updateHighScoresList() {
  const highscoresElement = document.getElementById('highscores');
  highscoresElement.innerHTML = ''; // Clear existing list

  // Retrieves high scores from local storage
  const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

  // Creates an element for the highscore to be displayed on the page 
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

  // if the high score does not already exist then it is added
  if (isNewHighScore) {
    existingHighScores.push({ username, score });
    localStorage.setItem('highScores', JSON.stringify(existingHighScores));
  }
}

// Call the function to get the high scores list initially
updateHighScoresList();


// Clear the high scores when clear high scores button is clicked
function clearHighScores() {
  localStorage.removeItem('highScores');
  updateHighScoresList();
}