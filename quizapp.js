
$(document).ready(function () {

  var F1quiz = {
    title: "Formula One Racing Quiz",
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

  function runQuiz(quiz) {
    $('#title').text(quiz.title);

    // Global Variables
    var score = 0;
    var currentQuestion = 0;
    var finalLength = quiz.questions.length -1;
    $('#submit').append("<input type='submit' name='mysubmit' value='Next Question'>");
    $('#submit').click(function () {
      showScore();
      updateQuestion();
    })

    function displayQuestion(question) {
      $('#question').append('<h3>' + question.question + '</h3>');
      var answerChoices = '';
      for (var i = 0; i < question.answers.length; i++) {
        answerChoices += "<input type='radio' name='answers' value=" + i + ">";
        answerChoices += question.answers[i] + '<br>';

      }
      $('#answers').append('<h4>' + answerChoices + '<h4>');
      console.log(answerChoices);    
    }
  displayQuestion(quiz.questions[currentQuestion]);
        
    function updateQuestion() {
      if (currentQuestion < finalLength ) {
        $('h3').remove();
        $('h4').remove();
        currentQuestion++;
        displayQuestion(quiz.questions[currentQuestion]);
      }
      else if (currentQuestion == finalLength && score <= 2){
        $('#scoreCard').append('<img src="http://i393.photobucket.com/albums/pp19/Althecoding1/trophy1bronze_zpsubbfhtsh.png">')
        $('#scoreCard').append('<h1>You got ' + score +' correct, you may want to give it another shot!<h1>');
        $('#scoreCard').append("<input type='submit' name='newgame' value='Play Again!'onclick='window.location.reload()'>");
        $('h2').remove();
        $('h3').remove();
        $('h4').remove();
        $('#submit').remove(); 
      }
      else if (currentQuestion == finalLength && score <= 4){
        $('#scoreCard').append('<img src="http://i393.photobucket.com/albums/pp19/Althecoding1/trophy1silver_zpshskwss3j.png">')
        $('#scoreCard').append('<h1>Great job! You got ' + score + ' correct, Play again!<h1>');
        $('#scoreCard').append("<input type='submit' name='newgame' value='Play Again!' onclick='window.location.reload()'>");
        $('h2').remove();
        $('h3').remove();
        $('h4').remove();
        $('#submit').remove(); 
      }
      else if(currentQuestion == finalLength && score <= 5) {
        $('#allCorrect').append('<img src="http://i393.photobucket.com/albums/pp19/Althecoding1/trophy1_zpsnnp3zpxd.png">');
        $('#allCorrect').append('<h1>Congratulations, you correctly answered all the questions!<h1>')
        $('#scoreCard').append("<input type='submit' name='newgame' value='Play Again!' onclick='window.location.reload()'>");
        $('h2').remove();
        $('h3').remove();
        $('h4').remove();
        $('#submit').remove(); 
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