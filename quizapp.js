
$(document).ready(function () {

      var F1quiz = {
        title: "Formula One Racing",
        questions: [{
          question: "How many different drivers currently make up the 2015 grid?",
          answers: [16, 24, 19, 21],
          correct: 3
        }, {
          question: "What team won the Constructors title in 2015?",
          answers: ["Williams", "Force India", "Ferrari", "Mercedes", "Red Bull Racing", "Lotus"],
          correct: 3
        }, {
          question: "What driver won the 2015 championship?",
          answers: ["Felipe Massa", "Sergio Perez", "Sebastian Vettel", "Lewis Hamilton", "Nico Rosberg"],
          correct: 3
        }, {
          question: "How many races comprise the 2015 season?",
          answers: [16, 20, 19, 15, 22],
          correct: 2
        }, {
          question: "Which driver has won the most Driver Championships?",
          answers: ["Ruben Barrichello", "Fernando Alonso", "Michael Schumacher", "Sebastian Vettel", "Ayrton Senna"],
          correct: 2
        }]
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

        // Global Variables
        var score = 0;
        var currentQuestion = 0;
        $('#submit').append("<input type='submit' name='mysubmit' value='Next Question'>");
        $('#submit').click(function () {
          showScore();
          currentQuestion++;
          updateQuestion();
        })

        function displayQuestion(question) {
          // Display question texts

          $('#question').append('<h3>' + question.question + '</h3>');

          // Build answers with radio buttons and display answers block
          var answerChoices = '';
          for (var i = 0; i < question.answers.length; i++) {
            answerChoices += "<input type='radio' name='answers' value=" + i + ">";
            answerChoices += question.answers[i] + '<br>';

          }
          $('#answers').append('<h4>' + answerChoices + '<h4>');
          
        }

        displayQuestion(quiz.questions[currentQuestion]);
        


        function updateQuestion() {
          if (currentQuestion < quiz.questions.length) {
            $('h3').remove();
            $('h4').remove();
            displayQuestion(quiz.questions[currentQuestion]);
          }
          else if (currentQuestion >= quiz.questions.length && score < 3){
            $('#scoreCard').append('<h4>You got ' + score +' correct, you may want to give it another shot!<h4>');
            $('#scoreCard').append("<input type='submit' name='newgame' value='Play Again!'onclick='window.location.reload()'>");
          }
          else {
            $('#scoreCard').append('<h4>Great job! You got ' + score + ' correct, Play again!<h4>');
            $('#scoreCard').append("<input type='submit' name='newgame' value='Play Again!' onclick='window.location.reload()'>");
            
          }
        }
        function showScore() {
          var theAnswer = $("input:checked").val();
          var arraycorrectA = quiz.questions[currentQuestion].correct;
          $('h2').remove();
          if (theAnswer == arraycorrectA){
              score++;
              $('#qCorrect').append('<h2>' + 'Correct!' + '<h2>');
          }
          else {
            $('#qCorrect').append('<h2>' + 'Incorrect!' + '<h2>');
          }
        }
      }



        // Start the quiz
        runQuiz(F1quiz);

      })