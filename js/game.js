var startButton = document.getElementById('startButton');
var textArea = document.getElementById("textArea");
var outputArea = document.getElementById("output");
var targetText = "The quick brown fox jumps over the lazy dog.";
var numWords = 9;
var options = {
  onkeyup: checkText
};
var input = "";
var finish = false;
var fin = new Event('finished');
var begin = new Date();
var timeElapsed = 0;

startButton.setAttribute('onclick', 'start(wordsPerMin)');
//document.setAttribute('onkeypress', 'noPasting');
document.addEventListener("keydown", noPasting, false);

function noPasting(keypress) {
  //console.log(keypress.keyCode);
  if(keypress.keyCode === 86 && keypress.ctrlKey) {
    alert("NO COPY/PASTING!");
  }
}

function wordsPerMin(err, wpm) {
  if(err) {
    console.log("Error!");
  }
  console.log("Completed challenge.");
}

function start(wordsPerMin) {
   alert("READY SET TYPE!");
   textArea.addEventListener('finished',
    addAttributes(textArea, options), false);
   textArea.dispatchEvent(fin);
   begin.getTime();
   console.log("Starting...");
   wordsPerMin();
}

function timer() {
  var end = new Date().getTime();
  timeElapsed = end - begin;
  return timeElapsed;
}

function checkText(event) {
  input = event.target.value;
  if(input === targetText) {
    var elapsed = timer();
    var wpm = parseInt(numWords / (elapsed / 1000) * 60);
    finish = true;
    output.innerHTML = "Input matches! <br> Words per Min: " + wpm;
  }
  else {
    finish = false;
    output.innerHTML = "Input does not match: <br> The quick brown fox jumps over the lazy dog.";
  }
}

function addAttributes(element, attributes){
  if(typeof attributes === "object"){
    Object.keys(attributes).forEach(function(attribute){
      element[attribute] = attributes[attribute];
    });
  }else{
    throw new TypeError('attributes must be an Object');
  }
}

function sanityCheck() {
  console.log("You're sane.");
}
