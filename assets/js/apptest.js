
$(document).ready(function() { 
	$("#open").get(0).play();
	
	
	var q1 = {
  	quest: "Which of the following characters are rabbits?",
  	possAns: ["Easter Bunny", "Bugs Bunny", "Brer Rabbit", "None, they are all hares"],
  	corrAns: "None, they are all hares"
	};
	var q2 = {
  	quest: "What was Billy the Kid's real first name?",
  	possAns: ["Kidd", "William", "Henry", "Bill"],
  	corrAns: "Henry"
	};
	var q3 = {
  	quest: "Which of these animals was the first to be domesticated?",
  	possAns: ["Reindeer", "Cat", "Boar", "Horse"],
  	corrAns: "Reindeer"
	};
	var q4 = {
  	quest: "James Bond was searching for what kind of airplane in movie 'Thunderball'?",
  	possAns: ["707", "Piper Cub", "Vulkan", "B-52"],
  	corrAns: "Vulkan"
	};
	var q5 = {
  	quest: "How many Earths (approx.) would fit inside the Sun?",
  	possAns: ["100", "1,000,000", "10,000", "100,000"],
  	corrAns: "1,000,000"
	};
	var q6 = {
  	quest: "Anemophobia is the fear of what?",
  	possAns: ["Spiders", "The Dark", "Fire", "Wind"],
  	corrAns: "Wind"
	};
	var q7 = {
  	quest: "Which of the following items was owned by the fewest U.S. homes in 1990?",
  	possAns: ["Home Computer", "CD Player", "Cordless phone", "Dishwasher"],
  	corrAns: "CD Player"
	};
	var q8 = {
  	quest: "In 1990, in what percentage of U.S. married couples did wife earn more money than the husband?",
  	possAns: ["8", "18", "38", "58"],
  	corrAns: "18"
	};
	var q9 = {
  	quest: "The first black American pictured on a U.S. postage stamp was who?",
  	possAns: ["Frederick Douglass", "Booker T. Washington", "Louis Armstrong", "Joe louis"],
  	corrAns: "Joe louis"
	};
	var q10 = {
  	quest: "Who wrote 'don't count your chickens before they are hatched'?",
  	possAns: ["Aesop", "Shakespeare", "Ben Franklin", "Chaucer"],
  	corrAns: "Aesop"
	};



	var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

	// var k = 0;
	 
	//  var unAnswered = 0;
	//  var correctAns = 0;
	//  var wrongAns = 0;
	
	
	
	$("#start").on("click", function() {
		$("#open").get(0).pause();
		var y = 0;
// 		var k = 0;
	 
	 var unAnswered = 0;
	 var correctAns = 0;
	 var wrongAns = 0;//if (y > questions.length-1) {
// 			alert("GAME Over");
// 			$("ul").empty();
// 	$("timeRem").empty();
	
// 	$("#question").empty();
// } else {


		var myVar = 0;
		$("#triviaImg").remove();
		
		//clearInterval(myVar);
		displayQuestion();
		//click();


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
			displayQuestion();
		}
   
       		 } 

       	}  
       	
     		   myVar = setInterval(function(){ timer() }, 1000);
     		timer();
  	}

// function reset() {
// 	$("#question").text("GAME OVER");
// 	$("ul").empty();
	
// }

	function displayQuestion() {
		
		//if (y < questions.length) {
		
	$("ul").empty();
	$("timeRem").empty();
	//newTimer();
	$("#question").text(questions[y].quest);
	for (k=0;k<questions[y].possAns.length;k++) {
		console.log(questions[y].possAns[k]);
		//$("li").empty();
		$("ul").append("<li>"+"<button>" + questions[y].possAns[k] + "</button>"+"</li><br>");
		console.log(k);

		
		
		//ansChecker();
		 };
		 clearInterval(myVar);
		 ansChecker();
		 newTimer();
}
	//} else {
		//alert("GAME OVER"); 
	//};
	// function click() {
	// 	var ansClick = "";

	// // $("li").on("click", function() {
	// // ansClick = $(this).text();
	// // console.log(ansClick);
	
	// ansChecker();
	
	// });	


	function ansChecker() {
		
$("li").on("click", function() {
	$("#clock").get(0).pause();
	//clearInterval(myVar);
	//newTimer();
	var ansClick = $(this).text();
	console.log(ansClick);

	
			if (ansClick === questions[y].corrAns) {
			alert("You are right - Correct answer - " + questions[y].corrAns);
			$("li").remove();
			correctAns++;
			if (y === 9) {
       				reset();
       				clearInterval(myVar);
       				
       			} else {
       			y++;


			clearInterval(myVar);
			displayQuestion();
			}//newTimer();

			} else if (ansClick != questions[y].corrAns) {
			alert("Wrong Anser - Correct answer is - " + questions[y].corrAns);
			$("li").remove();
			wrongAns++;
			if (y === 9) {
       				reset();
       				clearInterval(myVar);
       				
       			} else {
       			y++;

			clearInterval(myVar);
			displayQuestion();
			}//newTimer();
		}
		});
	};


	

function reset() {
	$("#clock").get(0).pause();
	$("#end").get(0).play();
	$("#question").text("GAME OVER");
	$("ul").empty();
	$("ul").prepend($('<img>',{id:'triviaImg',src:'assets/img/mainGiphy.gif'}))//$("img").src('assets/img/mainGiphy.gif');
	$("#timeRem").empty();
	$("ul").append("<p>"+ "Unanswered :" + unAnswered +"</p>");
	$("ul").append("<p>"+ "Correct Answers :" + correctAns +"</p>");
	$("ul").append("<p>"+ "Wrong Answers :" + wrongAns +"</p>");

}

		
	
	//displayQuestion();

	//}
	
});


});