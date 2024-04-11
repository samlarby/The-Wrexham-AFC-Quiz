// Getting names and scores from submit-form and displaying them in high-score.html

const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('name');
    const score = urlParams.get('score');

    // Check if name and score are provided
    if (username && score) {
      // Store high score in localStorage
      const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
      highScores.push({ username, score });
      localStorage.setItem('highScores', JSON.stringify(highScores));
    }

    // Display all high scores
    const highscoresElement = document.getElementById('highscores');
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    highScores.forEach(highScore => {
      const listItem = document.createElement('p');
      listItem.textContent = `${highScore.username}: ${highScore.score}`;
      highscoresElement.appendChild(listItem);
    });