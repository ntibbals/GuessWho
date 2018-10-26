'use strict';
//username question
console.log('Checking userName before prompt, should be invalid', userName);
var userName = prompt('Thanks for your interest. It\'s a pleasure to meet you virtually! If you don\'t mind, what\'s your name?'); //First quesiton prompt for name
console.log('Checking userName after prompt, should be valid', userName);
// //if then else statements quantify if name length is exactly 4, alert message, if less than 4 alert different message or if greater than 4 alert different msg
if (userName.length === 4) {
  alert('Wow! We have the exact same characters in our name ' + userName + '. Welcome.');
} else if (userName.length > 4) {
  alert('Thanks for coming' + userName + '. I appreciate you trusting with your personal information. I\'ll guard it closely.');
} else if (userName.length < 4) {
  alert('Did you know that there are some studies that show those with fewer characters in their name, tend to make more money? Thanks for visiting ' + userName + '.');
}

alert('Now that we have the introductions out of the way, please take a couple minutes to take play along with the following questiosn. Also, please only respond with Yes or No answers. Thanks ahead of time!');
var numCorrect = 0;
function questOne() {
  console.log('Checking responseOne before prompt, should be invalid', responseOne);
  var responseOne = prompt('To start, ' + userName + ', try guessing if I am originally from the Seattle area?').toUpperCase(); //first response including if/else statements on response, forcing each answer to be stored in Upper Case
  //subsequent if then else statements quantify if 'Y,y,Yes,yes alert user accordingly, however if 'N,n,No,no' then(else) alert user accordingly
  console.log('Checking responseOne after prompt, should be valid', responseOne);
  if (responseOne === 'N' || responseOne === 'NO') {
    alert('That\'s right! I\'m not originally from the Pudget Sound. I\'m actually from the east side of the state.');
    numCorrect++;
  } else {
    alert('Unfortunately, no. I was actually born in Spoakne Valley, WA!');
  }
}
questOne();
console.log('Checking number correct', numCorrect);
function questTwo() {
  console.log('Checking responseTwo before prompt, should be invalid', responseTwo);
  var responseTwo = prompt('Next, do you think I own a dog?').toUpperCase();//second response including if/else statements on response, forcing each answer to be stored in Upper Case
  console.log('Checking responseTwo after prompt, should be valid', responseTwo);
  //subsequent if then else statements quantify if 'Y,y,Yes,yes alert user accordingly, however if 'N,n,No,no' then(else) alert user accordingly
  if (responseTwo === 'N' || responseTwo === 'NO') {
    alert('You\'re right! I\'m currently living downtown without a backyard so as a result, my girlfriend and I have two cats.');
    numCorrect++;
  } else {
    alert('I hate to admit this, but no. I was actually roped into taking in two rescue cats who are actually brother and sister. All thanks to my beautiful girlfriend.');
  }
}
console.log('Checking number correct', numCorrect);
questTwo();
function questThree() {
  console.log('Checking responseThree before prompt, should be invalid', responseThree); //third response including if/else statements on response, forcing each answer to be stored in Upper Case
  var responseThree = prompt('Once again, thanks for playing. Next, try guessing whether I am an only sibling?').toUpperCase();
  console.log('Checking responseThree after prompt, should be valid', responseThree);
  //subsequent if then else statements quantify if 'Y,y,Yes,yes alert user accordingly, however if 'N,n,No,no' then(else) alert user accordingly
  if (responseThree === 'N' || responseThree === 'NO') {
    alert('You\'re right. I have both an incredible brother named Michael-Ray and awesome sister named Nicole');
    numCorrect++;
  } else {
    alert('No. I was blessed with an awesome brother and sister!');
    console.log('Checking number correct', numCorrect);
  }
}
questThree();
function questFour() {
  console.log('Checking responseFour before prompt, should be invalid', responseFour);
  var responseFour = prompt('Next, try taking a guess on whether you think I am more than 30 years old?').toUpperCase(); //fourth response including if/else statements on response, forcing each answer to be stored in Upper Case
  console.log('Checking responseFour after prompt, should be valid', responseFour);
  //subsequent if then else statements quantify if 'Y,y,Yes,yes' alert user accordingly, however if 'N,n,No,no' then(else) alert user accordingly
  if (responseFour === 'Y' || responseFour === 'YES') {
    alert('Ding ding, we have a winner. I\'m 31 years old.');
    numCorrect++;
    console.log('Checking number correct', numCorrect);
  } else {
    alert('Sorry but I\'m 31 years old.');
  }
}
questFour();
function questFive() {
  console.log('Checking responseFive before prompt, should be invalid', responseFive);
  var responseFive = prompt('Try guessing if I like sushi?').toUpperCase(); //fifth response including if/else statements on response, forcing each answer to be stored in Upper Case
  console.log('Checking responseFive after prompt, should be valid', responseFive);
  //subsequent if then else statements quantify if 'Y,y,Yes,yes alert user accordingly, however if 'N,n,No,no' then(else) alert user accordingly
  if (responseFive === 'Y' || responseFive === 'YES') {
    alert('A bit of a trick question as we live so close to AMAZING sushi. This is an absolute yes.');
    numCorrect++;
    console.log('Checking number correct', numCorrect);
  } else {
    alert('I thought this was an easy one due to how spoiled the Seattle area is when it comes to great sushi. I absolutely enjoy sushi.');
  }
}
questFive();
function questSix() {
  var numGuess = 0;
  var numAttempts = 0; //vairable limiting total number of attempts
  var origNumGuess = prompt('Try guessing how many apartments I have lived at the last 6 years in Seattle?');
  numGuess = parseInt(origNumGuess); // variable for while loop
  console.log('number of attempted guesses', numGuess); // variable for while loop
  while (numGuess !== 3 && numAttempts < 3) {
    if (origNumGuess > 3) {
      origNumGuess = prompt('A little high. Try again.');
      numGuess = parseInt(origNumGuess);
      console.log('number of attempted guesses', numGuess);
      // if statement logging if attempt is greater than answer
    } else if (origNumGuess < 3) {
      origNumGuess = prompt('A little low. Try again.');
      numGuess = parseInt(origNumGuess);
      console.log('number of attempted guesses', numGuess);
    } else {
      origNumGuess = prompt(origNumGuess + ' is not a number. Try Again!');
      numGuess = parseInt(origNumGuess);
    }
    console.log('number of attempted guesses', numGuess);
    numAttempts++; // if statement logging attempt if less than answer
  }
  if (numGuess !== 3) {
    alert('Sorry, too many chances. I\'ve lived in 3 apartments over the last 6 years through the Greater Seattle area.');
    console.log('number of attempted guesses', numGuess); // catches loop if hit limit on guesses and not answer
  } else {
    alert('That\'s right!'); //alert for when correct
    console.log('number of attempted guesses', numGuess);
    numCorrect++;
    console.log('Checking number correct', numCorrect);

  }
}
questSix();
function questSeven() {
  var favoriteAnimals = ['TIGER', 'LION', 'PANTHER', 'SHARK'];
  var counter2 = 0;
  var answer = false;
  var animalGuess = prompt('Guess one of my favorite animals?').toUpperCase();
  //while loop to control total number of guesses - for loop controls running through array
  while (counter2 <= 5) {
    for (var j = 0; j <= favoriteAnimals.length; j++) { //for loop to control running through the array
      if (animalGuess === favoriteAnimals[j]) {
        answer = true; //break out of the for loop
      }
    } if (answer === true) { // can also use variation if (answer) { alert}
      alert('Congrats. My favorite animals are ' + favoriteAnimals + '.');
      numCorrect++;
      break; // for while loop
    } else {
      animalGuess = prompt('Sorry. Try again').toUpperCase();
      counter2++;
    }
  }
}
questSeven();
//below is the overall counter for total correct
if (numCorrect > 4) {
  alert('Well, thanks for being a good sport ' + userName + ' and playing. It looks like you got ' + numCorrect + ' out of 7 questions. That\'s impressive. Hope to speak with you soon.'); //alert if total correct greater than 4
} else {
  alert('Sorry but it looks like you only got ' + numCorrect + ' out of 7 questions. No worries, let\'s grab coffee sometime regardless!');
}



