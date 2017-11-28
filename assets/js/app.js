
$(document).ready(function() { 
	$("#open").get(0).play();
	
	
	var q1 = {
  	quest: "Q1: Which of the following characters are rabbits?",
  	possAns: ["Easter Bunny", "Bugs Bunny", "Brer Rabbit", "None, they are all hares"],
  	corrAns: "None, they are all hares"
	};
	var q2 = {
  	quest: "Q2: What was Billy the Kid's real first name?",
  	possAns: ["Kidd", "William", "Henry", "Bill"],
  	corrAns: "Henry"
	};
	var q3 = {
  	quest: "Q3: Which of these animals was the first to be domesticated?",
  	possAns: ["Reindeer", "Cat", "Boar", "Horse"],
  	corrAns: "Reindeer"
	};
	var q4 = {
  	quest: "Q4: James Bond was searching for what kind of airplane in movie 'Thunderball'?",
  	possAns: ["707", "Piper Cub", "Vulkan", "B-52"],
  	corrAns: "Vulkan"
	};
	var q5 = {
  	quest: "Q5: How many Earths (approx.) would fit inside the Sun?",
  	possAns: ["100", "1,000,000", "10,000", "100,000"],
  	corrAns: "1,000,000"
	};
	var q6 = {
  	quest: "Q6: Anemophobia is the fear of what?",
  	possAns: ["Spiders", "The Dark", "Fire", "Wind"],
  	corrAns: "Wind"
	};
	var q7 = {
  	quest: "Q7: Which of the following items was owned by the fewest U.S. homes in 1990?",
  	possAns: ["Home Computer", "CD Player", "Cordless phone", "Dishwasher"],
  	corrAns: "CD Player"
	};
	var q8 = {
  	quest: "Q8: In 1990, in what percentage of U.S. married couples did wife earn more money than the husband?",
  	possAns: ["8", "18", "38", "58"],
  	corrAns: "18"
	};
	var q9 = {
  	quest: "Q9: The first black American pictured on a U.S. postage stamp was who?",
  	possAns: ["Frederick Douglass", "Booker T. Washington", "Louis Armstrong", "Joe louis"],
  	corrAns: "Joe louis"
	};
	var q10 = {
  	quest: "Q10: Who wrote 'don't count your chickens before they are hatched'?",
  	possAns: ["Aesop", "Shakespeare", "Ben Franklin", "Chaucer"],
  	corrAns: "Aesop"
	};



	var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

	
	
	
	
	$("#start").on("click", function() {

		$("#open").get(0).pause();
		clearInterval(myVar);
		$("#clock").get(0).pause();

		var y = 0;
	 	var unAnswered = 0;
	 	var correctAns = 0;
	 	var wrongAns = 0;
		//$("#start").hide();

		var myVar = 0;
		$("#startimg").attr("src","assets/img/ques.gif");
		$("#triviaImg").remove();
		$("#info").hide();
		
		displayQuestion();

		//setTimeout(displayQuestion, 2000);

	function newTimer() {
		 var i = 11;
			function timer() {
			$("#clock").get(0).play();

			var j = "0";
    		if (i>10) {
     			i--;
     			console.log(i);
     			$("#timeRem").text("Seconds Remaining " + i);
   			} else if (i>=1) {
       			i--;
       			console.log(j + i);
       			$("#timeRem").text("Seconds Remaining " + j + i);
      		} else {
       		
       			console.log("Time Over");
       			$("#timeRem").text("Time Over");
       			unAnswered++;
       		 
       			if (y === 9 ) {
       				reset();
       				clearInterval(myVar);

       			} else {
       			y++;
       			
			clearInterval(myVar);
			$("#timeRem").text("");
			$("#question").text("");
			
			setTimeout(displayQuestion, 2000);
			//displayQuestion();
		}
   
       	} 

       	}  
       	
     		myVar = setInterval(function(){ timer() }, 1000);
     		timer();
  	}


	function displayQuestion() {
		
		
	$("ul").empty();
	$("timeRem").empty();
	//newTimer();
	$("#question").text(questions[y].quest);
	for (k=0;k<questions[y].possAns.length;k++) {
		console.log(questions[y].possAns[k]);
		$("ul").append("<li>"+"<button>" + questions[y].possAns[k] + "</button>"+"</li><br>");
		console.log(k);

		 };
		 clearInterval(myVar);
		 ansChecker();
		 newTimer();
}


	function ansChecker() {
		
	$("li").on("click", function() {
	$("#clock").get(0).pause();
	var ansClick = $(this).text();
	console.log(ansClick);

	
			if (ansClick === questions[y].corrAns) {
			alert("You are right - Correct answer - " + questions[y].corrAns);
			$("li").remove();
			$("#timeRem").text("");
			$("#question").text("");
			correctAns++;
			if (y === 9) {
       				reset();
       				clearInterval(myVar);
       				
       			} else {
       			y++;


			clearInterval(myVar);

			
			setTimeout(displayQuestion, 2000);
			//displayQuestion();
			}//newTimer();

			} else if (ansClick != questions[y].corrAns) {
			alert("Wrong Anser - Correct answer is - " + questions[y].corrAns);
			$("li").remove();
			$("#timeRem").text("");
			$("#question").text("");
			wrongAns++;
			if (y === 9) {
       				reset();
       				clearInterval(myVar);
       				
       			} else {
       			y++;

			clearInterval(myVar);


			setTimeout(displayQuestion, 2000);
			//displayQuestion();
			}
		}
		});
	};


	

function reset() {
	$("#startimg").attr("src","assets/img/start.png");
	$("#clock").get(0).pause();
	$("#end").get(0).play();
	$("#question").text("GAME OVER");
	$("ul").empty();
	$("ul").prepend($('<img>',{id:'triviaImg',src:'assets/img/mainGiphy.gif'}))
	$("#timeRem").empty();
	$("ul").append("<p>"+ "Unanswered :" + unAnswered +"</p>");
	$("ul").append("<p>"+ "Correct Answers :" + correctAns +"</p>");
	$("ul").append("<p>"+ "Wrong Answers :" + wrongAns +"</p>");

}
	
});


});