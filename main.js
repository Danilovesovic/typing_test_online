var playerArea = document.querySelector('#playerArea');
var comp1Area = document.querySelector('#comp1Area');
var comp2Area = document.querySelector('#comp2Area');
var comp3Area = document.querySelector('#comp3Area');
var playerBtn = document.querySelector('#playerBtn');
var comp1Btn = document.querySelector('#comp1Btn');
var comp2Btn = document.querySelector('#comp2Btn');
var comp3Btn = document.querySelector('#comp3Btn');
var startBtn = document.querySelector('#startBtn');
var infoDiv = document.querySelector('#info');
var rand;
var pos = 0;

var texts = ['Danas je divan dan','Sutra je divan dan','Prekosutra je divan dan'];

startBtn.addEventListener('click',startTimer);

function startTimer() {
  var time = 2;
  startBtn.innerHTML = time;
  var loop = setInterval(function () {
    time--;
    startBtn.innerHTML = time;
    if (time == 0) {
      clearInterval(loop);
      startBtn.style.display = "none";
      startTyping();
    }
  },1000)
}
function startTyping() {
  infoDiv.style.display = "block";
    rand = Math.floor(Math.random()*texts.length);
  var randText = texts[rand];
  infoDiv.innerHTML = '<h3>'+randText+'</h3>';
  playerArea.focus();
  comp1StartTyping();
  comp2StartTyping();
  comp3StartTyping();
  playerStartTyping();
}


function playerStartTyping() {
  playerArea.addEventListener('keyup',function (e) {
    if(e.keyCode === 13){
      var userText = this.value.trim();
      if(userText === texts[rand]){
        pos++;
        playerBtn.innerHTML = "Position : "+pos;
        playerBtn.className = "btn btn-success form-control";
      }else{
        playerBtn.innerHTML = "Wrong typing";
        playerBtn.className = "btn btn-danger form-control";
      }
    }
  })
}

function comp1StartTyping() {
  var text = texts[rand];
  var textArray = text.split("");
  var loop = setInterval(function () {
    if(textArray.length != 0){
      comp1Area.value += textArray.shift();
    }else{
      pos++;
      comp1Btn.innerHTML = "Position : "+pos;
      comp1Btn.className = "btn btn-success form-control";
      clearInterval(loop);
    }
  },250)
}
function comp2StartTyping() {
  var text = texts[rand];
  var textArray = text.split("");
  var loop = setInterval(function () {
    if(textArray.length != 0){
      comp2Area.value += textArray.shift();
    }else{
      pos++;
      comp2Btn.innerHTML = "Position : "+pos;
      comp2Btn.className = "btn btn-success form-control";
      clearInterval(loop);
    }
  },350)
}
function comp3StartTyping() {
  var text = texts[rand];
  var textArray = text.split("");
  var loop = setInterval(function () {
    if(textArray.length != 0){
      comp3Area.value += textArray.shift();
    }else{
      pos++;
      comp3Btn.innerHTML = "Position : "+pos;
      comp3Btn.className = "btn btn-success form-control";
      clearInterval(loop);
    }
  },400)
}
