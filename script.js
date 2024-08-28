// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "A tiny light that starts a festival firework",
					answer: "spark",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "Imagine having the talents or abilities that help you get a job or start a business. What do you need to be successful?",
					answer: "skill",
					position: 3,
					orientation: "across",
					startx: 7,
					starty: 1
				},
				{
					clue: "An artist's crowning achievement",
					answer: "masterpiece",
					position: 5,
					orientation: "across",
					startx: 1,
					starty: 3
				},
				{
					clue: "A sense of fulfilment or joy",
					answer: "happiness",
					position: 8,
					orientation: "across",
					startx: 1,
					starty: 5
				},
				{
					clue: "Talent for making something unique",
					answer: "creativity",
					position: 10,
					orientation: "across",	
					startx: 2,
					starty: 7
				},
				{
					clue: "Joyful event with festivities and enjoyment",
					answer: "celebration",
					position: 13,
					orientation: "across",
					startx: 1,
					starty: 9
				},
				{
					clue: "Platform that allows you to store and share files online",
					answer: "cloud",
					position: 16,
					orientation: "across",
					startx: 1,
					starty: 11
				},
				{
					clue: "Sandy Spot where you find seashells",
					answer: "beach",
					position: 17,
					orientation: "across",
					startx: 7,
					starty: 11
				},
				{
					clue: "Code used to represent text in computers",
					answer: "ascii",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					clue: "List that stores multiple items in one place in programming",
					answer: "array",
					position: 2,
					orientation: "down",
					startx: 5,
					starty: 1
				},
				{
					clue: "State of extreme happiness",
					answer: "joy",
					position: 4,
					orientation: "down",
					startx: 9,
					starty: 1
				},
				{
					clue: "Bright object in the sky during the day",
					answer: "sun",
					position: 6,
					orientation: "down",
					startx: 7,
					starty: 3
				},
				{
					clue: "What do we call the field that involves teaching computers to act intelligently?(abbr)",
					answer: "ai",
					position: 7,
					orientation: "down",
					startx: 11,
					starty: 3
				},
				{
					clue: "This word describes the action of troubleshooting and fixing code issues. What is it?",
					answer: "debug",
					position: 9,
					orientation: "down",
					startx: 5,
					starty: 5
				},
				{
					clue: "A giant sea creature that sings songs underwater.",
					answer: "whale",
					position: 11,
					orientation: "down",
					startx: 11,
					starty: 7
				},
				{
					clue: "Short form for a system software that manages a computer s hardware and software resources?",
					answer: "os",
					position: 12,
					orientation: "down",
					startx: 1,
					starty: 8
				},
				{
					clue: "Favorite beverage of Indian people",
					answer: "tea",
					position: 14,
					orientation: "down",
					startx: 3,
					starty: 9
				},
				{
					clue: "Drawing that helps you find places",
					answer: "map",
					position: 15,
					orientation: "down",
					startx: 7,
					starty: 9
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
