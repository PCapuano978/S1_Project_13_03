"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: Patrick M. Capuano
   Date:   3.26.19
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/

// The following global variables are all definied here, with "typeDirection" being specifically set to a text string of "right".
var allLetters,
      currentLetter,
      wordLetters,
      acrossClue,
      downClue,
      typeDirection = "right";

// As early as the window loads, the system is alredy made out to load the init function...
window.onload = init;

// Said init function that is to be declared here.
function init() {

      // allLetters being set to reference all the elements in the "table#crossword" span.
      allLetters = document.querySelectorAll("table#crossword");

      // Setting currentLetter to equal the first object in the allLetters collection.
      currentLetter = allLetters[0];

      // Setting both acrossID and downID as variables to the data-clue-a/d attributes of currentLetter.
      var acrossID = currentLetter.data - clue - a;
      var downID = currentLetter.data - clue - d;

      // Setting both acrossClue and downClue to reference two different elements, being through the IDs of acrossID and downID respectively. 
      acrossClue = document.getElementById("acrossID");
      downClue = document.getElementById("downID");

      // Declaring the formatPuzzle function with currentLetter as the parameter and the following commands.
      function formatPuzzle(currentLetter) {

            // Looping through all items in the allLetters collection, the cursor's style will be turned into the pointer when passing any of them, and an event listener will act upon onmousedown with target as the object and formatPuzzle as the applied function.
            for (var i = 0; i < allLetters.length; i++) {

                  cursor.style = "pointer";

                  target.addEventListener("onmousedown", formatPuzzle)
            };

      }

      // Sets typeimage to the elements with the ID of "directionImg"
      var typeImage = document.getElementById("directionImg");

      // Changes the image style of the cursor to the pointer.
      cursor.style.src = "pointer";

      // If the typeImage is clicked on, the switchTypeDirection function will play out.
      if (typeImage.click) {

            switchTypeDirection();

      }

      // When the Show Errors button is clicked, the allLetter's items will be filtered to have any that do not equal the dataset.letter have their color set to red.
      document.getElementById("showErrors").onclick(); {
            for (var i = 0; i < allLetters.length; i++) {

                  if (allLetter[i] != dataset.letter) {

                        allLetters[i].style.color = "red";

                  }

                  setTimeout(() => {

                        allLetters[i].style.color = "";

                  }, 3000);

            }
      }

      // A similar function is done here when the Show Solution button is clicked to have all items in allLetters have their value set to the dataset.letter.  
      document.getElementById("showSolution").onclick(); {

            for (var i = 0; i < allLetters.length; i++) {

                  allLetters[i] = dataset.letter;

            }
      }


}

// Created the function "formatPuzzle" with the parameter of "puzzleLetter"
function formatPuzzle(puzzleLetter) {

      // Sets the value of currentLetter to the value of the puzzleLetter parameter.
      currentLetter = puzzleLetter;

      // For loop set to specifically set every item of "allLetters" to a backgroundColor of nothing.
      for (var i = 0; i < allLetters.length; i++) {
            allLetters.style.backgroundColor = " ";
      };

      // Removes the highlighting from the current clues by setting their color to empty strings.
      acrossClue.style.color = " ";
      downClue.style.color = " ";
}

//   A conditional statement checking if currentLetter's dataset of clueA is not equal to undefined, where the commands below will proceed, if true.
if (currentLetter.dataset.clueA != undefined) {


      // acrossClue's value is being referenced to the elements with the ID provided below.
      acrossClue = document.getElementById("currentLetter.dataset.clueA");

      // acrossClue's text color is to be set to blue.
      acrossClue.style.color = "blue";

      // Sets wordLetters' value to a CSS selection of the following string, followed by the currentLetter value.
      wordLetters = document.getSelection("data-clue-A =" + currentLetter);

      // For every item in the wordLetters array, their background color shall be changed to a shade of light blue.
      for (var i = 0; i < wordLetters.length; i++) {
            wordLetters.style.backgroundColor = "rgb(231, 231, 255)"
      };

}

// Everything just done above is moreso repeated, but for the downClue with the following changes.
if (currentLetter.dataset.clueD != undefined) {


      // downClue's value is being referenced to the elements with the ID provided below.
      downClue = document.getElementById("currentLetter.dataset.clueD");

      // downClue's text color is to be set to red.
      downClue.style.color = "red";

      // Sets wordLetters' value to a CSS selection of the following string, followed by the currentLetter value.
      wordLetters = document.getSelection("data-clue-D =" + currentLetter);

      // For every item in the wordLetters array, their background color shall be changed to a shade of light red.
      for (var i = 0; i < wordLetters.length; i++) {
            wordLetters.style.backgroundColor = "rgb(255, 231, 231)"
      };

}

// Another conditional statement, this time seeing if typeDirection is equal to "right".
if (typeDirection = "right") {

      // If so, currentLetter's background color will be changed to a shade of blue, otherwise, it will become a shade of red.
      currentLetter.style.backgroundColor = "rgb(191, 191, 255)"
} else {
      currentLetter.style.backgroundColor = "rgb(255, 191, 191)"
}

// Declaring the selectLetter function for use.
function selectLetter() {

      // The followingg variables are set to the referenced variables to the left, above, right, and bellow what the current letter is selected.
      var leftLetter = currentLetter.dataset.left,
            upLetter = currentLetter.dataset.up,
            rightLetter = currentLetter.dataset.right,
            downLetter = currentLetter.dataset.down;

      // Variable "userKey" is set to store the code of the key pressed to the user by returning the tager of the keyCode attribute.
      var userKey = target.keyCode;

      // A bunch of conditional statements are inputted in here to make sure all userkey inputs are treated correctly, such as the arrow keys, and letters with their functions.
      if (userKey = 37) {
            formatPuzzle(leftLetter);
      }

      if (userKey = 38) {
            formatPuzzle(upLetter);
      }

      if (userKey = 39 || 9) {
            formatPuzzle(rightLetter);
      }

      if (userKey = 40 || 13) {
            formatPuzzle(downLetter);
      }

      if (userKey = 8 || 46) {
            $(currentLetter).remove();
      }

      if (userKey = 32) {
            switchTypeDirection();
      }

      if (userKey = 65 || 66 || 67 || 68 || 69 || 70 || 71 || 72 || 73 || 74 || 75 || 76 || 77 || 78 || 79 || 80 || 81 || 82 || 83 || 84 || 85 || 86 || 87 || 88 || 89 || 90) {
            currentLetter = getChar(userKey)
      }

      if (typeDirection = "right") {
            formatPuzzle(rightLetter);
      } else {
            formatPuzzle(downLetter);
      }

      // Preventing the browser from performing a default action after a response from the keyboard events.
      keyboard.preventDefault();

}

// Adds an event "keydown" for when the selectLetter functin runs.
target.addEventListener("keydown", selectLetter)

// switchTypeDirection is finally defined.
function switchTypeDirection() {

      // The local variable of typeImage is set to the elements with the ID of "directionImg".
      var typeImage = document.getElementById("directionImg");

      // if the typeDirection is right, then it will then be set to down, have the image src set to the right image, and then the background color set to a shade of red.
      if (typeDirection = "right") {

            typeDirection = "down";
            src.typeImage = "pc_right.png";
            currentLetter.style.backgroundColor = "rgb(255, 191, 191)";


            // If not however, it's typeDirection will be set to right, the src image will be set to be the down image, and the background color will become a shade of blue.
      } else {

            typeDirection = "right";
            src.typeImage = "pc_down.png";
            currentLetter.style.backgroundColor = "rgb(191, 191, 255)";

      }

}


/*====================================================*/

function getChar(keyNum) {
      return String.fromCharCode(keyNum);
}