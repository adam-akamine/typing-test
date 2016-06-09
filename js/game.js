var startButton = document.getElementById('startButton');
startButton.onclick = start;// setListener;

var textArea = document.getElementById("textArea");
var outputArea = document.getElementById("output");

var targetText = "The quick brown fox jumps over the lazy dog.";
var options = {
  onkeyup: checkText
};
var input = "";
var finish = false;
var fin = new Event('finished');
var begin = new Date();
var timeElapsed = 0;

function wordsPerMin(err, wpm) {
  if(err) {
    console.log("Error!");
  }
  console.log("in WPM");
  start();
}

function start(callback) {
   alert("START TYPING!");
   textArea.addEventListener('finished', function(e) {
      addAttributes(textArea, options);
   }, false);
   textArea.dispatchEvent(fin);
   begin.getTime();
   //callback();
}

function timer() {
  var end = new Date().getTime();
  timeElapsed = end - begin;
  console.log("timeElapsed: " + timeElapsed + "ms");
  return timeElapsed;
}

function checkText(event) {
  input = event.target.value;
  if(input === targetText) {
    var elapsed = timer();
    finish = true;
    output.innerHTML = "Input matches! <br> Elapsed Time: " + elapsed + "ms";
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
