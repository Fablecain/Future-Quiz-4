// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize quiz variables
  let time = 120; // Increased time to account for the added questions
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
