$(document).ready(function() {

  var F1quiz = {
    title : "Formula One Racing",
    questions: [
      {
        question : "How many different drivers make up the grid?",
        answers : [12, 15, 21, 31],
        correct : 2
      },
      {
        question : "How many different drivers make up the grid?",
        answers : [12, 15, 21, 31],
        correct : 2
      },
      {
        question : "How many different drivers make up the grid?",
        answers : [12, 15, 21, 31],
        correct : 2      
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

    }

    //
    displayQuestion(quiz.questions[currentQuestion]);
  }

// Start the quiz
  runQuiz(F1quiz);

})



