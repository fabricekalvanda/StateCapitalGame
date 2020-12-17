//FABRICE KALVANDA<----------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// STATE CAPITAL GUESSING GAME JAVASCRIPT
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
	INSTRUCTIONS:
	-------------
	Follow the Instructions through each of the nine (9) parts commented in the code below, replace each of the placeholders 
	labelled CODE GOES HERE with the line of code that pertains to the coinciding instruction and step number.
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
	INSTRUCTIONS: Part 1
	--------------------
	(1) Create a new array called 'city'
	(2) Initialize the city array with the 50 state capitals. A list of the state capitals is supplied under CITIES in the data.txt file for you to use as a reference only (I thought supplying this list would save you the time of having to "Google" them). This data.txt file is meant solely as a resource for copy-and-paste purposes. Please don't try to import it programmatically into your code. Use it only as a reference.
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1(1) CODE GOES HERE <-- 
// 1(2) CODE GOES HERE <-- 
var city = ["MONTGOMERY",
"JUNEAU",
"PHOENIX",
"LITTLE ROCK",
"SACRAMENTO",
"DENVER",
"HARTFORD",
"DOVER",
"TALLAHASSEE",
"ATLANTA",
"HONOLULU",
"BOISE",
"SPRINGFIELD",
"INDIANAPOLIS",
"DES MOINES",
"TOPEKA",
"FRANKFORT",
"BATON ROUGE",
"AUGUSTA",
"ANNAPOLIS",
"BOSTON",
"LANSING",
"SAINT PAUL",
"JACKSON",
"JEFFERSON CITY",
"HELENA",
"LINCOLN",
"CARSON CITY",
"CONCORD",
"TRENTON",
"SANTA FE",
"ALBANY",
"RALEIGH",
"BISMARK",
"COLUMBUS",
"OKLAHOMA CITY",
"SALEM",
"HARRISBURG",
"PROVIDENCE",
"COLUMBIA",
"PIERRE",
"NASHVILLE",
"AUSTIN",
"SALT LAKE CITY",
"MONTPELIER",
"RICHMOND",
"OLYMPIA",
"CHARLESTON",
"MADISON",
"CHEYENNE"];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
	INSTRUCTIONS: Part 2
	--------------------
	(1) Create a new array called 'state'
	(2) Initialize the city array with the 50 states. A list of the states is supplied under CITIES in the data.txt file for you to use as a reference only (I thought supplying this list would save you the time of having to "Google" them). This data.txt file is meant solely as a resource for copy-and-paste purposes. Please don't try to import it programmatically into your code. Use it only as a reference.
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2(1) CODE GOES HERE <-- 
// 2(2) CODE GOES HERE <-- 
var state = ["LABAMA",
"ALASKA",
"ARIZONA",
"ARKANSAS",
"CALIFORNIA",
"COLORADO",
"CONNECTICUT",
"DELAWARE",
"FLORIDA",
"GEORGIA",
"HAWAII",
"IDAHO",
"ILLINOIS",
"INDIANA",
"IOWA",
"KANSAS",
"KENTUCKY",
"LOUISIANA",
"MAINE",
"MARYLAND",
"MASSACHUSETTS",
"MICHIGAN",
"MINNESOTA",
"MISSISSIPPI",
"MISSOURI",
"MONTANA",
"NEBRASKA",
"NEVADA",
"NEW HAMPSHIRE",
"NEW JERSEY",
"NEW MEXICO",
"NEW YORK",
"NORTH CAROLINA",
"NORTH DAKOTA",
"OHIO",
"OKLAHOMA",
"OREGON",
"PENNSYLVANIA",
"RHODE ISLAND",
"SOUTH CAROLINA",
"SOUTH DAKOTA",
"TENNESSEE",
"TEXAS",
"UTAH",
"VERMONT",
"VIRGINIA",
"WASHINGTON",
"WEST VIRGINIA",
"WISCONSIN",
"WYOMING"];
// array to hold the path of the images for the fifty state maps (no need to touch this)
var stateImage = new Array();
stateImage[0] = "alabama.png";
stateImage[1] = "alaska.png";
stateImage[2] = "arizona.png";
stateImage[3] = "arkansas.png";
stateImage[4] = "california.png";
stateImage[5] = "colorado.png";
stateImage[6] = "connecticut.png";
stateImage[7] = "delaware.png";
stateImage[8] = "florida.png";
stateImage[9] = "georgia.png";
stateImage[10] = "hawaii.png";
stateImage[11] = "idaho.png";
stateImage[12] = "illinois.png";
stateImage[13] = "indiana.png";
stateImage[14] = "iowa.png";
stateImage[15] = "kansas.png";
stateImage[16] = "kentucky.png";
stateImage[17] = "louisiana.png";
stateImage[18] = "maine.png";
stateImage[19] = "maryland.png";
stateImage[20] = "massachusetts.png";
stateImage[21] = "michigan.png";
stateImage[22] = "minnesota.png";
stateImage[23] = "mississippi.png";
stateImage[24] = "missouri.png";
stateImage[25] = "montana.png";
stateImage[26] = "nebraska.png";
stateImage[27] = "nevada.png";
stateImage[28] = "new_hampshire.png";
stateImage[29] = "new_jersey.png";
stateImage[30] = "new_mexico.png";
stateImage[31] = "new_york.png";
stateImage[32] = "north_carolina.png";
stateImage[33] = "north_dakota.png";
stateImage[34] = "ohio.png";
stateImage[35] = "oklahoma.png";
stateImage[36] = "oregon.png";
stateImage[37] = "pennsylvania.png";
stateImage[38] = "rhode_island.png";
stateImage[39] = "south_carolina.png";
stateImage[40] = "south_dakota.png";
stateImage[41] = "tennessee.png";
stateImage[42] = "texas.png";
stateImage[43] = "utah.png";
stateImage[44] = "vermont.png";
stateImage[45] = "virginia.png";
stateImage[46] = "washington.png";
stateImage[47] = "west_virginia.png";
stateImage[48] = "wisconsin.png";
stateImage[49] = "wyoming.png";

// Variables
var num = Math.floor(Math.random() * city.length);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
	INSTRUCTIONS: Part 3
	--------------------
	Directly below, do the following:
	(1) Declare a variable called 'cityName'
	(2) Declare a variable called 'stateName'
	(3) Declare a variable called 'stateMap'
	(4) Declare a variable called 'tries' and initialize it to zero
	(5) Declare a variable called 'score' and initialize it to zero
	(6) Declare a variable called 'topScore' and initialize it to zero
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3(1) CODE GOES HERE <--
var cityName;
// 3(2) CODE GOES HERE <--
var stateName;
// 3(3) CODE GOES HERE <--
var stateMap;
// 3(4) CODE GOES HERE <--
var tries = 0;
// 3(5) CODE GOES HERE <--
var score = 0;
// 3(6) CODE GOES HERE <--
var topScore = 0;

// guessIt() Function (The main work horse of the guessing game; no need to touch this)
function guessIt(){
	var guess = document.form1.guess1.value;
	tries++;
	window.status = "Tries: " + tries;
	
	switch(tries)
	{
		case 1: document.form1.hint.value = "FIRST Hint: The state capital starts with \' " + 
		           cityName.charAt(0) + " \'";
				document.form1.stateClue.value = ""; // This removes the line of instructions
				break;
		case 2: document.form1.hint.value = "SECOND Hint: The state capital ends with \' " + 
		           cityName.charAt(cityName.length - 1).toLowerCase() + " \'";
				break;
		case 3:	document.form1.hint.value = "THIRD Hint: The second letter in name is \' " + 
		           cityName.charAt(1).toLowerCase() + " \'";
				break;
		default:document.form1.hint.value = "LAST Hint: The state capital has " + 
		           cityName.length + " characters";
				break;
	}
	
	if(guess.toUpperCase() == cityName) // Checks if guess equals cityName after converting to UPPERCASE
	{
		switch(tries)
		{
			case 1:	score += 10; // Awards 10 points for correct first guess
					break;
			case 2: score += 8 // Awards 8 points for correct second guess
					break;
			case 3:	score += 6; // Awards 6 points for correct third guess
					break;
			case 4: score += 4; // Awards 4 points for correct fourth guess
					break;
			default: score += 0; // Awards 0 points for correct no correct guess
		}
		alert("You are CORRECT!\n\nThe state capital of " + stateName.toTitleCase() + 
		      " is " + cityName + ".\n\nPlease hit OK for your next question");
      	document.form1.current1.value = "Current Score: " + score;
		if(score > topScore)
		{
			topScore = score;
			document.form1.top1.value = "High Score: " + topScore;
		}
		resetGame();
		localStorage.setItem("highScore", topScore); // HTML5 Storage saves the high score right in the browser (slick!)
	}
	else
	{
		if(tries == 5) // Game over without a correct guess
		{
			if(window.confirm("Sorry! You have run out of guesses.\n\nThe state capital of " + 
			   stateName.toTitleCase() + " is " + cityName +".\n\nDo you want to play again?"))
			{
				newGame(); // Reloads the game				
			}
		}
 	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
/* 
	INSTRUCTIONS: Part 4
	--------------------
	Directly below, you are going to build out the resetGame() function with the following lines of code:
	(1)  num = Math.floor(Math.random() * city.length); // USE AS IS; Randomly selects a number based on length of city array
	(2)  Associate city[num] to cityName // Selects a state capital based on the generated number
		 BLATANT HINT: cityName = city[num];
	(3)  Associate state[num] to StateName // Selects a state based on the generated number
		 HINT: See above hint
	(4)  Associate stateImage[num] to stateMap // Selects a state map based on the generated number
		 HINT: See above hint
	(5)  Reset 'tries' to zero // Resets tries back to zero
	(6)  document.showState.src = stateMap; // USE AS IS; Shows selected state map from image pool
	(7)  document.form1.hint.value = "The state to guess is: " + stateName.toTitleCase() + "."; // USE AS IS; Shows name of current state
	(8)  document.form1.stateClue.value = "Enter the state capital below and click Guess"; // USE AS IS; Gives some Instructions
	(9)  document.form1.guess1.value = ''; // USE AS IS; resets value of guess1 textbox back to empty
	(10) Call the unDisable() function // Makes the Guess button clickable. Button was disabled so user couldn't use before the game loaded
*/	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function resetGame() {
	// 4(1)  CODE GOES HERE <--
    num = Math.floor(Math.random() * city.length);
	// 4(2)  CODE GOES HERE <--
    cityName = city[num];
	// 4(3)  CODE GOES HERE <--
    stateName = state[num];
	// 4(4)  CODE GOES HERE <--
    stateMap = stateImage[num];
	// 4(5)  CODE GOES HERE <--
    tries = 0;
	// 4(6)  CODE GOES HERE <--
    document.showState.src = stateMap;
	// 4(7)  CODE GOES HERE <--
    document.form1.hint.value = "The state to guess is: " + stateName.toTitleCase() + ".";
	// 4(8)  CODE GOES HERE <--
    document.form1.stateClue.value = "Enter the state capital below and click Guess";
	// 4(9)  CODE GOES HERE <--
    document.form1.guess1.value = '';
	// 4(10) CODE GOES HERE <--
    unDisable();
}

// catchKeyCode() Function (no need to touch this)
function catchKeyCode()
{
	if(event.keyCode == 13)
	{
		guessIt();
	}
}

// guessStatus() Function (HTML5 storage element that gets the high score from its save location in  browser, with error handling; no need to touch this)
function guessStatus(){
	window.status = "Tries: " + tries;
	if(typeof(Storage) !== "undefined")
  	{
  		var temp1 = localStorage.getItem("highScore");
  		var temp2 = parseInt(temp1); // The parseInt() function parses a string and returns an integer, necessary for making comparisons
  
		if(temp2 > topScore)
		{
			topScore = temp2;
			document.form1.top1.value = "High Score: " + topScore;
		}
	}
	else
	{
  		alert("Sorry, this browser version does not support HTML5 Local Storage, and your High Score will not be saved.");
  	}
}

// clearBox() Function - This clears the guess textbox if user changes mind
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
/* 
	INSTRUCTIONS: Part 5
	--------------------
	Directly below, you are going to build out the clearBox() function with the following line of code:
	(1) Reset the guess1 value back to empty string
	    HINT: You may have seen this elsewhere in the code (and in Assignment 2)
*/	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function clearBox(){
	// 5(1) CODE GOES HERE <--
    document.form1.guess1.value = '';
}

// newGame() Function - Sets up new game with a call to resetGame(), zeros out the Current Score
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
/* 
	INSTRUCTIONS: Part 6
	--------------------
	Directly below, you are going to build out the newGame() function with the following lines of code:
	(1) Reset score back to zero
	(2) Reset current1 value to "Current Score: " + score
	    HINT: You may have seen this elsewhere in the code
	(3) Call the resetGame() function
*/	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function newGame(){
	// 6(1) CODE GOES HERE <--
    score = 0;
	// 6(2) CODE GOES HERE <--
    document.form1.current1.value = "Current Score: " + score;
	// 6(3) CODE GOES HERE <--
    resetGame();
}

// resetEverything() Function - Puts everything back to default settings, removes the High Score, displays start up image
function resetEverything(){
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
/* 
	INSTRUCTIONS: Part 7
	--------------------
	Directly below, you are going to build a confirm box in the if statement of the resetEverything() function with the following:
	(1) Using the start of the if statement, confirm the following message warning the user about selecting Reset (the message needs properly 
		formatted with newline breaks): 
		
		ARE YOU SURE YOU WANT TO RESET YOUR GAME?
		 		
		BIG WARNING: This will reset the game to its default settings and clear your HIGH SCORE.
		
		Click 'Cancel' if you do NOT want to lose your High Score, otherwise click 'OK'.
		
	
	HINT: There is a confirm used earlier in the code that you can use as a reference.
*/	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// 7(1) CODE GOES HERE <--
    if(window.confirm("ARE YOU SURE YOU WANT TO RESET YOUR GAME? " + "This will reset the game to its default settings and clear your HIGH SCORE. " + "Click 'Cancel' if you do NOT want to lose your High Score, otherwise click 'OK'."))
     
	{
		score = 0;
		topScore = 0;
		document.form1.current1.value = "Current Score: " + score; // Zeros out Current Score display
		document.form1.top1.value = "Top Score: " + topScore; // Zeros out High Score display
		
		localStorage.removeItem("highScore"); // Removes the High Score from HTML5 storage
		
		document.showState.src = "a_guessing_game.png"; // Displays start up image
		document.form1.stateClue.value = "Press 'New' to play again.";
		document.form1.hint.value = "The game has been reset to default settings.";
		window.location.reload(); // Does the same thing as the refresh button in the browser
		disable(); // Prevents user from clicking Guess before the new game actually loads
	}
}

// Function to change UPPERCASE string to Titlecase using a global REGULAR EXPRESSION
String.prototype.toTitleCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
/* 
	INSTRUCTIONS: Part 8
	--------------------
	Directly below, you are going to build out an unDisable() function with the following line of code:
	(1) Using getElementbyId, set 'guessBtn' disabled to false (in the HTML)
		HINT: This will follow the format d.g('g').d = f;
*/	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function unDisable() { // Function to programmatically enable a disabled button
	// 7(1) CODE GOES HERE <--
    document.getElementById('guessBtn').disabled = false;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
/* 
	INSTRUCTIONS: Part 9
	--------------------
	Directly below, you are going to build out a disable() function with the following line of code:
	(1) Using getElementbyId, set 'guessBtn' disabled to true (in the HTML)
		HINT: This will follow the format d.g('g').d = t;
*/	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function disable() { // Function to programmatically disable an enabled button
	// 8(1) CODE GOES HERE <--
    document.getElementById('guessBtn').disabled = true;
} 





