var tracker = []; //keeps track of questions already asked.
//var index = 0;
	
function randomQuestions() 
{
	var display = document.getElementById("display");

	var question = [];
	question.push("I'm tall when I'm young and short when I'm old.  What am I?");
	question.push("Which word in the dictionary is spelled incorrectly?");
	question.push("Imagine you're in a dark room.  How do you get out?");
	question.push("Paul's height is six feet, he's an assistant at a butcher's shop, and wears a size 10 shoe.  What does he weigh?");
	question.push("You can drop me from the tallest building and I'll be fine, but if you drop me in water I die.  What am I?");	
	question.push("If something is broken, would you rather fix it or replace it?");
	question.push("Would you rather be able to copy and paste in real life or undo in real life?");
	question.push("Would you rather never be able to express yourself accurately or always have to say the exact truth?");
	question.push("Has anyone ever seen the aircraft that enforces the speed limit?");
	question.push("If you had to work but didn't need the money, what would you choose to do?");
	question.push("Where in the world is Carmen Sandiego?");
	question.push("How mad is Max?");
	question.push("What are the 7 wonders of the world?");
	
	//Keep iterating through array until a unique index in picked.
	do 
	{
		index = Math.floor((Math.random() * question.length) + 0);
	}
	while (questionAsked());
	tracker.push(index);
	
	//Resets when max array length is reached.
	if(tracker.length == question.length) 
	{
		tracker = [];
		display.innerHTML = question[index]+"<br><br> That's all of the questions I have...for now.  Click the button the restart.";
	}
	else 
	{
		display.innerHTML = question[index];
		index = 0; //Resets index number.	
	}
}//randomQuestions

//Compares the question index number and number entered in tracker.
function questionAsked() 
{
	for(var i = 0; i < tracker.length; i++)
	{
		if(tracker[i] === index)
		{
			return true;
		}
	}
	return false;
}//end questionAsked
