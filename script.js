//make comments like this in the script.js file
//by adding two slashes at the start of lines of code you can 'comment out' the code
//it's helpful to write comments to keep track of what each line of code does

//a function to select random item from a list (do not edit)
const buttonEmail = document.getElementById("poem");
function getRandomFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}
var i = 0;
var speed = 50;

//function for network error message
const sent1 = [
  "uhh hello?",
  // "Your device is not connected.",
  // "Make sure '[—]' is turned on and in range.",
  // "Now discoverable as '[—]'.",
  // "Connection unsuccessful.",
  // "Your connection is unstable.",
  // "Out of range.",
  // "Unexpected device.",
  // "Bad connection.",
];

const buttonRetry = document.getElementById("button-network");

function changeResultsError() {
  const paragraph = document.getElementById("networkError");
  paragraph.innerText = getRandomFromList(sent1);
}
buttonRetry.addEventListener("click", changeResultsError);
//end of network error function

//function dropdown menu (do not edit this first part)
function addEval(evalText) {
  const subjectContent = document.getElementById("subject-content");
  subjectContent.innerText = evalText;
}
//when selected in the dropdown menu, the x variables trigger the associated text. Edit the x variables (and make sure to also update them in the index.html file) and edit the associated text/emojis within the quotes
//think about what use you might have for a dropdown menu: you could have someone select their 'mood' and give them an appropriate song, a bit of good or bad advice, an emoji, etc.
function dropdownFunction() {
  var x = document.getElementById("subject").value;
  if (x === "you") {
    addEval("crisp autumn mornings, two shot cappuccino, pint lager, people person, anxious, sketches, scuffed knees, soft hair, boyish smiles");
  } else if (x === "me") {
    addEval("loud rain on windows, strong iced latte, tulips, loud, sex, sharks, people pleaser, depressed, weed, wine, tortured artist, cherry red");
  } else if (x === "her") {
    addEval("hot summer days, decaf flat white, roses, softly spoken, pastel hues, science major, happiness reincarnate, vodka lime soda");
  } else if (x === "him") {
    addEval("windy nights, cold hands, running, hot sleeper, black cofee, calloused hands, guitar, not you");
  } else if (x === "us") {
    addEval("i think i've forgetton what it was to be with you");
  }
}
//end of dropdown function

//start of haiku function
//lists of variables: replace all of the 5 and 7 syllable constants in the two arrays below. The more constants you write, the more variety you will have in your poem
const fiveSyllables = [
  "don't get over zealous in wants",
  "allow for balance",
  "exercise self-awareness", 
  "don't avoid accountability of your actions", 
  "trapped in a cycle of bad habits",
  "foundations built, will crumble", 
  "revolution has started",
  "no room for the old insitutions",
  
];
const sevenSyllables = [
  "i know what i want",
  "no need to stray away",
  "no need to change",
  "give up the wheel",
  "become the passeger for once",
  "chariot in reverse warning",
  "don't hold on so tight",
  "experience pain",
  "experience grief",
  
];
//code for haiku function (do not edit)
const buttonHaiku = document.getElementById("button-haiku");
function changeResults() {
  const paragraph = document.getElementById("haiku-1-1");
  const paragraphTwo = document.getElementById("haiku-1-2");
  const paragraphThree = document.getElementById("haiku-1-3");
  const paragraphFour = document.getElementById("haiku-2-1");
  const paragraphFive = document.getElementById("haiku-2-2");
  const paragraphSix = document.getElementById("haiku-2-3");
  const paragraphSeven = document.getElementById("haiku-3-1");
  const paragraphEight = document.getElementById("haiku-3-2");
  const paragraphNine = document.getElementById("haiku-3-3");
  paragraph.innerText = getRandomFromList(fiveSyllables);
  paragraphTwo.innerText = getRandomFromList(sevenSyllables);
  paragraphThree.innerText = getRandomFromList(fiveSyllables);
  paragraphFour.innerText = getRandomFromList(fiveSyllables);
  paragraphFive.innerText = getRandomFromList(sevenSyllables);
  paragraphSix.innerText = getRandomFromList(fiveSyllables);
  paragraphSeven.innerText = getRandomFromList(fiveSyllables);
  paragraphEight.innerText = getRandomFromList(sevenSyllables);
  paragraphNine.innerText = getRandomFromList(fiveSyllables);
}
buttonHaiku.addEventListener("click", changeResults);
//end of haiku function

//start of search function
const textWrapper = document.getElementById("text-wrapper");
const textInput = document.getElementById("text-input");
//search function constants
//play with Google search function to come up with search terms most relevant to you. Think about how these search terms tell a story. Replace all of the placeholder text below (phrases in red font) with search terms of your own. If you keep the phrases organised alphabetically, you can ensure you have enough results for each word.
const words = [
  "are sharks fish?",
  "ask mum",
  "are all writers this tired?",

  "basic writing jobs, melbourne",
  "bookshelves",

  "cars for sale",
  "can i still make a claim?",
  "constant ache?",

  "do all men act like that",
  "delusional daydreaming",

  "emotions out of whack",
  "evermore font",

  "facebook marketplace",
  "flights to tasmania",
];
//search function (do not edit)
function changeText(e) {
  const searchWord = e.target.value.toLowerCase().trim();
  const resultWords = words.filter((word) =>
    word.toLowerCase().startsWith(searchWord)
  );
  // clear exist words
  while (textWrapper.firstChild) {
    textWrapper.removeChild(textWrapper.firstChild);
  }
  if (searchWord != "") {
    for (var i = 0; i < resultWords.length; i++) {
      const line = document.createElement("div");
      line.innerHTML = resultWords[i];
      textWrapper.appendChild(line);
    }

    if (resultWords.length === 0) {
      const line = document.createElement("div");
      line.innerHTML = "no results";
      textWrapper.appendChild(line);
    }
  }
}
textInput.addEventListener("input", changeText);
// end search function code

//start of code for poem

const subjects =
    "childhood friends, old situationships, broken relationships, shark plushies, strangers on the train, lost lovers".split(
      ","
    ),
  verbs =
    "wander,search, laughs at, kneel down, avoid, cry, weave through, hide in".split(
      ","
    ),
  objects =
    "foggy windows, wet grass, choppy waves, second hand clothes,broken mugs, empty late night roads, flooded paths, discarded rubbish".split(
      ","
    );
// set up the counter
let counter = 0;

// a function to pull a random item from a list
function getRandomFromList2(list) {
  return list[Math.floor(Math.random() * list.length)];
}
// add a line to the poem constructed from the lists of words
function addLine(indent = false) {
  // create the line
  const line = document.createElement("div");
  if (indent === true) {
    // indent is true so add an indent class
    line.classList.add("indent");
  }
  const text =
    getRandomFromList2(subjects) +
    " " +
    getRandomFromList2(verbs) +
    " " +
    getRandomFromList2(objects);
  const lineText = document.createTextNode(text);
  line.appendChild(lineText);
  // get the poem
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// add a blank line to the poem
function addBlankLine() {
  const line = document.createElement("div");
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// remove the first line from the poem
function removeFirstLine() {
  const poem = document.getElementById("poem");
  poem.removeChild(poem.childNodes[0]);
}
// implement the rules of the poem
function processPoem() {
  counter++;
  if (counter % 5 === 0) {
    addBlankLine();
  } else if (counter % 5 === 2 || counter % 5 === 4) {
    // if the second or fourth line add the line with an indent
    addLine(true);
  } else {
    addLine();
  }
  if (counter > 15) {
    removeFirstLine();
  }
}
window.setInterval(processPoem, 1000);