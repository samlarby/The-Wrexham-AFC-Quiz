//*javascript for the quiz questions*//

//Game setup 



let question = document.getElementById("quiz-question")



//Easy questions
let easyQuestions = [
    {
        question: "Who saved a penalty against Notts County to help Wrexham get promoted?",
        choices: ["Ben Foster", "Mark Howard"],
        answer: 0,
    },
    {
        question: "What is the name of the Wrexham stadium?",
        choices: ["Liberty Stadium", "Racecourse Ground"],
        answer: 1,
    },
    {
        question: "Which two Americans bought the club in 2020?",
        choices: ["Chris Hemsworth and Liam Hemsworth", "Ryan Reynolds and Rob McElhenney?"],
        answer: 1,
    },
    {
        question: "Who was named Wrexham's player of the year for the 21-22 season?",
        choices: ["Paul Mullin", "Luke Young"],
        answer: 0,
    },
    {
        question: "Who is the Wrexham manager?",
        choices: ["Phil Parkinson", "Roy Hodgson"],
        answer: 0,
    },
    {
        question: "Who would be classed as Wrexham's biggest derby?",
        choices: ["Notts County", "Chester"],
        answer: 1,
    },
    {
        question: "In what division do Wrexham A.F.C play football in the 2023/24 season?",
        choices: ["National League", "League 2"],
        answer: 1,
    },
    {
        question: "What is the nickname of Wrexham A.F.C?",
        choices: ["The Red Dragons", "The Swans"],
        answer: 0,
    },
    {
        question: "Where is Wrexham located?",
        choices: ["England", "Wales"],
        answer: 1,
    },
    {
        question: "What is the name of the Wrexham A.F.C mascot?",
        choices: ["Wrex the Dragon", "Wrex the Dog"],
        answer: 0,
    },

];

//Hard Questions

let hardQuestions = [
    {
        question: "In what year was the club founded?",
        choices: ["1874", "1894", "1864", "1884"],
        answer: 2,
    },
    {
        question: "What is the max capacity of the clubs home ground?",
        choices: ["12,789", "9,002", "21,400", "15,333"],
        answer: 0,
    },
    {
        question: "Who scored the winning goal against Arsenal in the 1992 FA Cup?",
        choices: ["Paul Mullin", "Mickey Thomas", "Joey Jones", "Steve Watkin"],
        answer: 1,
    },
    {
        question: "How many times have Wrexham A.F.C won the Welsh Cup?",
        choices: ["23", "25", "27", "20"],
        answer: 0,
    },
    {
        question: "What year were Wrexham A.F.C relegated out of the football league?",
        choices: ["2005", "2006", "20010", "2008"],
        answer: 3,
    },
    {
        question: "In what year did Wrexham A.F.C win the football league trophy?",
        choices: ["2005", "2009", "2003", "2004"],
        answer: 0,
    },
    {
        question: "How many times have Wrexham been promoted as National League champions?",
        choices: ["2", "1", "4", "3"],
        answer: 1,
    },
    {
        question: "In which country did the club play there first European tie?",
        choices: ["Portugal", "Turkey", "Switzerland", "Spain"],
        answer: 2,
    },
    {
        question: "What is the name of the derby between Wrexham A.F.C and Chester F.C?",
        choices: ["Two country derby", "North West derby", "The battle of the wall", "Cross-border derby"],
        answer: 3,
    },
    {
        question: "In what year did Wrexham A.F.C exit administration?",
        choices: ["2004", "2007", "2006", "2005"],
        answer: 2,
    },
    
];


