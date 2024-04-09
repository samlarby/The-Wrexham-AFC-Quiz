//*javascript for the quiz questions*//

//Game setup 

const urlParams = new URLSearchParams(window.location.search);
const selectedDifficulty = urlParams.get('difficulty');

//Easy questions
const easyQuestions = [
    {
        question: "Who saved a penalty against Notts County to help Wrexham get promoted?",
        choices: ["Ben Foster", "Mark Howard"],
        correctAnswer: "Ben Foster",
    },
    {
        question: "What is the name of the Wrexham stadium?",
        choices: ["Liberty Stadium", "Racecourse Ground"],
        correctAnswer: "Racecourse Ground",
    },
    {
        question: "Which two Americans bought the club in 2020?",
        choices: ["Chris Hemsworth and Liam Hemsworth", "Ryan Reynolds and Rob McElhenney"],
        correctAnswer: "Ryan Reynolds and Rob McElhenney",
    },
    {
        question: "Who was named Wrexham's player of the year for the 21-22 season?",
        choices: ["Paul Mullin", "Luke Young"],
        correctAnswer: "Paul Mullin",
    },
    {
        question: "Who is the Wrexham manager?",
        choices: ["Phil Parkinson", "Roy Hodgson"],
        correctAnswer: "Phil Parkinson",
    },
    {
        question: "Who would be classed as Wrexham's biggest derby?",
        choices: ["Notts County", "Chester"],
        correctAnswer: "Chester",
    },
    {
        question: "In what division do Wrexham A.F.C play football in the 2023/24 season?",
        choices: ["National League", "League 2"],
        correctAnswer: "League 2",
    },
    {
        question: "What is the nickname of Wrexham A.F.C?",
        choices: ["The Red Dragons", "The Swans"],
        correctAnswer: "The Red Dragons",
    },
    {
        question: "Where is Wrexham located?",
        choices: ["England", "Wales"],
        correctAnswer: "Wales",
    },
    {
        question: "What is the name of the Wrexham A.F.C mascot?",
        choices: ["Wrex the Dragon", "Wrex the Dog"],
        correctAnswer: "Wrex the Dragon",
    },

];

//Hard Questions

const hardQuestions = [
    {
        question: "In what year was the club founded?",
        choices: ["1874", "1894", "1864", "1884"],
        correctAnswer: "1864",
    },
    {
        question: "What is the max capacity of the clubs home ground?",
        choices: ["12,789", "9,002", "21,400", "15,333"],
        correctAnswer: "12,789",
    },
    {
        question: "Who scored the winning goal against Arsenal in the 1992 FA Cup?",
        choices: ["Paul Mullin", "Mickey Thomas", "Joey Jones", "Steve Watkin"],
        correctAnswer: "Mickey Thomas",
    },
    {
        question: "How many times have Wrexham A.F.C won the Welsh Cup?",
        choices: ["23", "25", "27", "20"],
        correctAnswer: "23",
    },
    {
        question: "What year were Wrexham A.F.C relegated out of the football league?",
        choices: ["2005", "2006", "20010", "2008"],
        correctAnswer: "2008", 
    },
    {
        question: "In what year did Wrexham A.F.C win the football league trophy?",
        choices: ["2005", "2009", "2003", "2004"],
        correctAnswer: "2005",
    },
    {
        question: "How many times have Wrexham been promoted as National League champions?",
        choices: ["2", "1", "4", "3"],
        correctAnswer: "1",
    },
    {
        question: "In which country did the club play there first European tie?",
        choices: ["Portugal", "Turkey", "Switzerland", "Spain"],
        correctAnswer: "Switzerland",
    },
    {
        question: "What is the name of the derby between Wrexham A.F.C and Chester F.C?",
        choices: ["Two country derby", "North West derby", "The battle of the wall", "Cross-border derby"],
        correctAnswer: "Cross-border derby",
    },
    {
        question: "In what year did Wrexham A.F.C exit administration?",
        choices: ["2004", "2007", "2006", "2005"],
        correctAnswer: "2006",
    },
    
];


let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('quiz-question');
    const choicesElement = document.getElementById('choices');

    const question = currentQuestions[currentQuestion];
    questionElement.textContent = question.question;

    choicesElement.innerHTML = '';

    question.choices.forEach(choice => {
      const button = document.createElement('button');
      button.textContent = choice;
      button.onclick = () => checkAnswer(choice);
      choicesElement.appendChild(button);
    });
  }

  function checkAnswer(answer) {
    const question = currentQuestions[currentQuestion];
    if (answer === question.correctAnswer) {
      score++; 
    }
    markSelectedAnswer(answer)
  }

  function markSelectedAnswer(answer) {
    const choiceButtons = document.querySelectorAll('#choices button');
      choiceButtons.forEach(button => {
        if (button.textContent === answer) {
          button.style.backgroundColor = '#6da594';
        }
      });
  }
  

  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < currentQuestions.length) {
      loadQuestion();
    } else {
      showScore();
    }
  }

  function showScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Score: ${score} out of ${currentQuestions.length}`;
  }

  if (selectedDifficulty === "easy") {
    currentQuestions = easyQuestions;
  } else {
    currentQuestions = hardQuestions;
  }
  loadQuestion();
    


