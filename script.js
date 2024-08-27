// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "Imagine you are part of a group full of energy and new ideas, always bringing change. What word describes this group?",
					answer: "youth",
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
					clue: "Imagine a world where everything is always moving forward—what word describes this kind of change?",
					answer: "progressive",
					position: 5,
					orientation: "across",
					startx: 1,
					starty: 3
				},
				{
					clue: "It's what happens when creativity meets progress.",
					answer: "innovation",
					position: 8,
					orientation: "across",
					startx: 1,
					starty: 5
				},
				{
					clue: "When success and wealth are thriving, what’s the term for it?",
					answer: "prosperity",
					position: 10,
					orientation: "across",	
					startx: 2,
					starty: 7
				},
				{
					clue: "What do you call the gradual improvement and advancement of something?",
					answer: "development",
					position: 13,
					orientation: "across",
					startx: 1,
					starty: 9
				},
				{
					clue: "What term describes city areas that are bustling with growth and change?",
					answer: "urban",
					position: 16,
					orientation: "across",
					startx: 1,
					starty: 11
				},
				{
					clue: "Represents the backbone of agriculture and traditional livelihoods.",
					answer: "rural",
					position: 17,
					orientation: "across",
					startx: 7,
					starty: 11
				},
				{
					clue: "Defines the alpha-numeric characters that are typically associated with text used in programming",
					answer: "ascii",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					clue: "In programming, what’s the term for a structure where each element is placed next to the previous one?",
					answer: "array",
					position: 2,
					orientation: "down",
					startx: 5,
					starty: 1
				},
				{
					clue: "This acronym stands for a set of instructions for building software. What is it?",
					answer: "api",
					position: 4,
					orientation: "down",
					startx: 9,
					starty: 1
				},
				{
					clue: "Think of the abbreviation for a platform that helps you code, debug, and manage projects. What is it?",
					answer: "ide",
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
					clue: "What do you call the quality of working together in harmony and cooperation?",
					answer: "unity",
					position: 11,
					orientation: "down",
					startx: 11,
					starty: 7
				},
				{
					clue: "Whats the short form for the software that manages a computer's hardware and software resources?",
					answer: "os",
					position: 12,
					orientation: "down",
					startx: 1,
					starty: 8
				},
				{
					clue: "Whats the abbreviation for the set of commands used to add, modify, or delete data in a database?",
					answer: "dml",
					position: 14,
					orientation: "down",
					startx: 3,
					starty: 9
				},
				{
					clue: "Think of the short form for the protocol that manages data flow and error checking in networking. What is it?",
					answer: "tcp",
					position: 15,
					orientation: "down",
					startx: 7,
					starty: 9
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
