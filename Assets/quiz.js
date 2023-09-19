// Using jQuery's ready function to wait for the DOM to be fully loaded
$(document).ready(function() {
  // Initialize quiz variables
  let time = 60;
  let timer;
  let currentQuestionIndex = 0;
  let questions = [
    {
      question: "What is the correct way to define a variable in JavaScript?",
      choices: ["int variable = 0;", "var variable = 0;", "variable := 0;", "let variable = 0"],
      answer: "let variable = 0"
    },
    {
      question: "Which of these is NOT a primitive data type in JavaScript?",
      choices: ["String", "Object", "Number", "Boolean"],
      answer: "Object"
    },
    {
      question: "How do you create a comment in HTML?",
      choices: ["<!-- This is a comment -->", "// This is a comment", "/* This is a comment */", "-- This is a comment"],
      answer: "<!-- This is a comment -->"
    },
    {
      question: "What does CSS stand for?",
      choices: ["Computer Style Sheet", "Creative Style Sheet", "Cascading Style Sheet", "Coding Style Sheet"],
      answer: "Cascading Style Sheet"
    },
    {
      question: "What HTML tag is used for inserting a line break?",
      choices: ["<br>", "<linebreak>", "<lb>", "<newline>"],
      answer: "<br>"
    },
    {
      question: "Which symbol is used to target an ID in CSS?",
      choices: [".", "#", "&", "*"],
      answer: "#"
    },
    {
      question: "How do you create an array in JavaScript?",
      choices: ["let arr = [1, 2, 3];", "array arr = {1, 2, 3};", "arr = 1->2->3;", "let arr = array(1, 2, 3);"],
      answer: "let arr = [1, 2, 3];"
    },
    {
      question: "How do you declare a function in JavaScript?",
      choices: ["func myFunction() {}", "void myFunction() {}", "myFunction() {}", "function myFunction() {}"],
      answer: "function myFunction() {}"
    },
    {
      question: "What method would you use to change the text of an HTML element using JavaScript?",
      choices: ["changeText()", "setText()", "innerHTML", "textChange()"],
      answer: "innerHTML"
    },
    {
      question: "Which HTML element is used for defining a form?",
      choices: ["<form>", "<input>", "<formbox>", "<textfield>"],
      answer: "<form>"
    }
  ];
  
 // Reference HTML elements using jQuery
 const startButton = $('#startButton');
 const viewHighScores = $('#viewHighScores');  // New addition
 const timerDiv = $('#timer');
 const questionArea = $('#questionArea');
 const answerButtons = $('#answerButtons');

 // Add an event listener to the start button using jQuery
 startButton.click(startQuiz);

 // New: Add an event listener for viewing high scores
 viewHighScores.click(function() {
   let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
   alert(`High Scores:\n${highScores.map(score => `${score.initials}: ${score.score}`).join("\n")}`);
 });

 // Function to start the quiz
 function startQuiz() {
   timer = setInterval(function() {
     time--;
     timerDiv.text(`Time: ${time}`);
     if (time <= 0) {
       endQuiz();
     }
   }, 1000);
   loadQuestion();
 }

 // Function to load a question
 function loadQuestion() {
   const currentQuestion = questions[currentQuestionIndex];
   questionArea.text(currentQuestion.question);
   answerButtons.empty();  // Clear the previous buttons
   $.each(currentQuestion.choices, function(index, choice) {
     const button = $('<button>').text(choice);
     button.click(function() {
       checkAnswer(choice);
     });
     answerButtons.append(button);
   });
 }

 // Function to check an answer
 function checkAnswer(answer) {
   const correct = questions[currentQuestionIndex].answer === answer;
   if (!correct) {
     time -= 10;
   }
   currentQuestionIndex++;
   if (currentQuestionIndex < questions.length && time > 0) {
     loadQuestion();
   } else {
     endQuiz();
   }
 }

 // Function to end the quiz
 function endQuiz() {
   clearInterval(timer);
   const initials = prompt("Game Over! Enter your initials:");
 
   // Save highscore logic
   let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
   let newScore = { initials: initials, score: time };
   highScores.push(newScore);
   highScores.sort((a, b) => b.score - a.score);
   highScores = highScores.slice(0, 5);  // Save only top 5 scores
   localStorage.setItem("highScores", JSON.stringify(highScores));
 
   // Display the high scores
   alert(`High Scores:\n${highScores.map(score => `${score.initials}: ${score.score}`).join("\n")}`);
 }
});