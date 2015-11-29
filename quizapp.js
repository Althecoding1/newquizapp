$(document).ready(function() {

  var F1quiz = {
    title : "Formula One Racing",
    questions: [
      {
        question : "How many different drivers currently make up the 2015 grid?",
        answers : [16, 24, 19, 21],
        correct : 3
      },
      {
        question : "What team won the Constructors title in 2015?",
        answers : ["Williams", "Force India", "Ferrari", "Mercedes", "Red Bull Racing", "Lotus"],
        correct : 3
      },
      {
        question : "What driver won the 2015 championship?",
        answers : ["Felipe Massa", "Sergio Perez", "Sebastian Vettel", "Lewis Hamilton", "Nico Rosberg"],
        correct : 3     
      },
      {
        question: "How many races comprise the 2015 season?",
        answers: [16, 20, 19, 15, 22],
        correct: 2
      },
      {
        question: "Which driver has won the most Driver Championships?",
        answers: ["Ruben Barrichello", "Fernando Alonso", "Michael Schumacher", "Sebastian Vettel", "Ayrton Senna"],
        correct: 2
      }
    ]
  }

/* Examples of how to access the quiz object

Get the question:
quiz.question[i].question

Get the correct answer:
quiz.question[i].answers[quiz.questions[i].correct]
*/


  function runQuiz(quiz) {
    // Display title of quiz
    $('#title').text(quiz.title);

    // Initialize game variables
    var score = 0;
    var currentQuestion = 0;

    function displayQuestion(question) {
      // Display question text
      $('#question').append('<h3>' + question.question + '</h3>');

      // Build answers with radio buttons and display answers block
      var answerChoices = '';
      for (var i = 0; i < question.answers.length; i++) {
         answerChoices += "<input type='radio' name='answers' value=" + i + ">";
         answerChoices += question.answers[i] + '<br>';
         
      }
      $('#answers').append(answerChoices);
      if(document.getElementById(answerChoices) == quiz.question[i].answers[quiz.questions]){
        console.log("correct");
      }
    }
    displayQuestion(quiz.questions[currentQuestion]);

  }
  $('#submit').append("<input type='submit' name='mysubmit' value='Check Answer'>");

// Start the quiz
  runQuiz(F1quiz);

})



