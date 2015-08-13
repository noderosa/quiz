$(document).ready(function(){

	var questionNum = 0;
	var numCorrect = 0;

	var questions = [{
	q: "All that we are is the result of what we have thought.",
	c: ["John Lennon", "Mahatma Gandhi", "Buddha"], 
	a: 3,
	},
	{
	q: "Quality is more important than quantity. One home run is much better than two doubles.",
	c: ["Steve Jobs", "Joe Torre", "Joe Biden"],
	a: 1,
	},
	{
	q: "Why is it that nobody understands me, yet everybody likes me?",
	c: ["Donald Trump", "Albert Einstein", "Kanye West"],
	a: 2,
	},
	{
	q: "Everything has beauty, but not everyone sees it.",
	c: ["Winnie the Pooh", "Kim Kardashian", "Confucious"],
	a: 3,
	},
	{
	q: "True friends stab you in the front.",
	c: ["Oscar Wilde", "Nas", "Socrates"],
	a: 1,
	}];


	function checkAnswer() {

		if( $('input:radio[name="answer"]:checked').val() == questions[questionNum].a ) {
			alert("Right!");
			nextQuestion();
			numCorrect++;
		}
		else {
			alert("Wrong. Try again!");
		}
	}
	
	
	function nextQuestion(){
			if(questionNum == 4) {
				results();
			}
			
			//check if this is the last question) {
			//results();

		else {
			$('input[name="answer"]').prop('checked', false);
			questionNum++;
			$('.questionNum').html(questionNum+1);
			$('.q-question').html(questions[questionNum].q);
			$('#answerOne').html(questions[questionNum].c[0]);
			$('#answerTwo').html(questions[questionNum].c[1]);
			$('#answerThree').html(questions[questionNum].c[2]);
		}
	}

	function results(){
		$('#results').text("You answered " + numCorrect + " out of 5 questions right!");
		$('#question-box').hide();
		$('#q-square').hide();
		$('#q-question').hide();
		$('#q-answers').hide();
		$('#submit').hide();
	}


	$(".submit").on('click', function () {
		event.preventDefault();
		checkAnswer(); 
		//nextQuestion();
		
	});

	
});

