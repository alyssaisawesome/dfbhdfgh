if (localStorage.getItem("who"=="")) {
  var who='';
  localStorage.setItem("who", who);
}
else {
  var who=localStorage.getItem("who");
  localStorage.setItem("who", who);
}
var imgcat="";
var imgbathroom="";
var imgbook = ""
var imgbedroom = "";
var imgbadminton ="";

function preload() {
  imgcat=loadImage('cat.jpg');
  imgbathroom=loadImage('bath.jpg');
  imgbedroom=loadImage('bedroom.jpg');
  imgbook=loadImage('book.jpeg');
  imgbadminton=loadImage('badminton.jpg');
}

function bathroom() {
  console.log('HELLO');
  who="bathroom";
  localStorage.setItem("who", who);
  window.location.href="bathroom.html";
}
function bedroom() {
  console.log('HELLO');
  who="bedroom";
  localStorage.setItem("who", who);
  window.location.href="bedroom.html";
}
function cat() {
  console.log('HELLO');
  who="cat";
  localStorage.setItem("who", who);
  window.location.href="cat.html";
}
function books() {
  console.log('HELLO');
  who="books";
  localStorage.setItem("who", who);
  window.location.href="book.html";
}
function badminton() {
  console.log('HELLO');
  who="badminton";
  localStorage.setItem("who", who);
  window.location.href="badminton.html";
}

function back() {
  window.location.href="index.html";
  console.log('HELLO');
  who="";
}

function art() {
  window.open('https://act.hoyoverse.com/ys/event/e20220517-jump-eola/index.html?game_biz=hk4e_global&mhy_presentation_style=fullscreen&mhy_auth_required=true&mhy_landscape=true&mhy_hide_status_bar=true&utm_source=sns&utm_medium=twitter');
}

function setup() {
  who=localStorage.getItem("who");
  console.log('entered: ' + who);
  if (who != "") {
    console.log('if');
  canvas=createCanvas(640,420);
  canvas.center();
  objectDetector=ml5.objectDetector('cocossd',modelLoaded);
  if (who == "bathroom") {
  document.getElementById('bathroomstatus').innerHTML="Status: Detecting objects";
  }
  else if (who == "bedroom") {
    document.getElementById('bedroomstatus').innerHTML="Status: Detecting objects";
    }
    else if (who == "cat") {
      document.getElementById('catstatus').innerHTML="Status: Detecting objects";
      }
      else if (who == "badminton") {
        document.getElementById('badmintonstatus').innerHTML="Status: Detecting objects";
        }
        else if (who == "bedroom") {
          document.getElementById('badmintonstatus').innerHTML="Status: Detecting objects";
          }
  }
}

function modelLoaded() {
  console.log('model loaded');
  if (who == 'bathroom') {
  objectDetector.detect(imgbathroom, gotResult);
  document.getElementById('bathroomstatus').innerHTML="Status: Detected objects";
  }
  if (who == 'badminton') {
    objectDetector.detect(imgbathroom, gotResult);
    document.getElementById('badmintonstatus').innerHTML="Status: Detected objects";
    }
    if (who == 'bedroom') {
      objectDetector.detect(imgbathroom, gotResult);
      document.getElementById('bedroomstatus').innerHTML="Status: Detected objects";
      }
      if (who == 'books') {
        objectDetector.detect(imgbathroom, gotResult);
        document.getElementById('bookstatus').innerHTML="Status: Detected objects";
        }
        if (who == 'cat') {
          objectDetector.detect(imgbathroom, gotResult);
          document.getElementById('catstatus').innerHTML="Status: Detected objects";
          }
}

function gotResult(error, results) {
  if (error) {
  console.log(error);
  }
  console.log(results);
  }

  function draw() {
    if (who=="bathroom") {
    image(imgbathroom,0,0,640,420);
    fill('red');
    text('bathtub',45,270);
    noFill();
    stroke('red');
    rect(30,250,150,150);

    fill('red');
    text('sink',410,270);
    noFill();
    stroke('red');
    rect(400,250,230,160);

    fill('red');
    text('toilet',330,270);
    noFill();
    stroke('red');
    rect(320,250,70,150);
    }
    if (who=="cat") {
      image(imgcat,0,0,640,650);
      fill('red');
      text('I have only did the rectangles for the bathroom image to save time and to demonstrate that I can do it.',45,300);
      }
      if (who=="books") {
        image(imgbook,0,0,640,420);
        fill('red');
        text('I have only did the rectangles for the bathroom image to save time and to demonstrate that I can do it.',45,300);
        }
        if (who=="bedroom") {
          image(imgbedroom,0,0,640,420);
          fill('red');
          text('I have only did the rectangles for the bathroom image to save time and to demonstrate that I can do it.',45,300);
          }
          if (who=="badminton") {
            image(imgbadminton,0,0,640,420);
            fill('red');
            text('I have only did the rectangles for the bathroom image to save time and to demonstrate that I can do it.',45,300);
            }
  }