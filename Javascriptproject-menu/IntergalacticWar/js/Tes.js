//Hi, I know that you can see this whole javascript code.  That's why I warn you not to use the code of this game without my permission. just contact me at https://www.instagram.com/fikrimulyana_s for the permission.
var spaceship = document.querySelector('.spaceship');
var ufo = document.querySelector('.ufo');
var pos 
var posn
var image
var picture
var countdown
var timeShooting
var missiles 
var projectile
var score = 0 ;
var scoreBoard = document.querySelector(".score");
var t = 10;
w = document.documentElement.clientWidth;
h = document.documentElement.clientHeight;
var randomshot = Math.floor(Math.random()*600)
var n = 0
var gunshot = document.querySelector("#gunshot");
var alienshot = document.querySelector("#gunshot");
var crash = document.querySelector("#crash");
var broke = document.querySelector("#crash");
var health = document.querySelector(".progress-bar");
var life = 100;
health.style.width = life + "%";
//data about object position is stored in matrix (array) form

var randomwalk = Math.floor(Math.random()*300);
var poss = [140,400];
var posu = [10,50+(randomwalk)];
ufo.style.top = posu[1] + "px";

// setInterval code 

umove= setInterval(move, 10); 

//function for firing a bullet

function fire() {
  gunshot.play();
  pos = [(poss[0]+20),poss[1]];
  //console.log(pos[0] + "+" + pos[1])
  image = new Image(10,20);
  image.src = "Images/bullet.png";
  missiles = document.createElement("div");
  missiles.setAttribute('class', 'bullet_template');
  document.getElementsByClassName('canvas')[0].appendChild(missiles);
  n = n + 1;
  missiles.appendChild(image);
  missiles.style.left = pos[0]+ "px";
  missiles.style.top = pos[1] + "px";
  countdown = setInterval(launch,10);
}
function launch() {
  if (pos[1] < posu[1] && pos[1] > posu[1]-45 && pos[0] < posu[0]+50 && pos[0] > posu[0]) {
    broke.play();
    //ubah ufo menjadi animasi meledak
    missiles.removeChild(image);
    //alert('you win!!!');
    score = score + 1;
    if (score%5 === 0) {
      if (t === 2) {
        t = t/2;
      }
      else {
        t = t - 2; 
      }
    }
    scoreBoard.innerHTML = "Score : " + score;
    clearInterval(countdown);
    //console.log(pos[1] + " an " + posu[1])
  }
  else if (pos[1] < 50) {
    missiles.removeChild(image);
    clearInterval(countdown);
    console.log("sampai ke atas");
  }
  else {
    pos[1] = pos[1] - 3;
    missiles.style.top = pos[1] + "px";
  }
}

//function for moving ufo

function move() {
  if (poss[1] < posu[1] && poss[1] > posu[1]-45 && poss[0] < posu[0]+50 && poss[0] > posu[0]) {
    //langsung habis semua nyawa
    //anda kalah karena menabrak musuh
    clearInterval(umove);
    life = 0;
    health.style.width = life + "%";
  }
  if (poss[1] < posu[1]+45 && poss[1] > posu[1] && poss[0] < posu[0]+50 && poss[0] > posu[0]) {
    //langsung habis semua nyawa
    //anda kalah karena menabrak musuh
    clearInterval(umove);
    life = 0;
    health.style.width = life + "%";
    
  }
  if (posu[0] == 300) {
    var randomwalk = Math.floor(Math.random()*300);
    posu = [10,(50+randomwalk)];
    randomshot = Math.floor(Math.random()*600);
  }
  else {
    if (posu[0] === randomshot) {
      attack();
    }
    posu[0] = posu[0] + 0.5;
    ufo.style.left = posu[0] + "px";
    ufo.style.top = posu[1] + "px";
  }
}

//attack from UFO 
function attack() {
  alienshot.play();
  posn = [(posu[0]+20),posu[1]];
  //console.log(pos[0] + "+" + pos[1])
  picture = new Image(10,20);
  picture.src = "Images/bullet_reverse.png";
  projectile = document.createElement("div");
  projectile.setAttribute('class', 'projectile_template');
  document.getElementsByClassName('canvas')[0].appendChild(projectile);
  n = n + 1;
  /*if ( ) {
    
  }*/
  projectile.appendChild(picture);
  projectile.style.left = posn[0]+ "px";
  projectile.style.top = posn[1] + "px";
  timeShooting = setInterval(shot,t);
  console.log(projectile.length);
}

function shot() {
  if (posn[1] < poss[1]+45 && posn[1] > poss[1] && posn[0] < poss[0]+50 && posn[0] > poss[0]) {
    crash.play();
    //ubah ufo menjadi animasi meledak
    projectile.removeChild(picture);
    console.log('hello, you lose !!!');
    clearInterval(timeShooting);
    life = life - 25;
    health.style.width = life + "%";
    if (life === 0) {
      clearInterval(umove);
    }
  }
  else if (posn[1] > 430) {
    projectile.removeChild(picture);
    clearInterval(timeShooting);
    console.log("sampai ke bawah");
  }
  else {
    posn[1] = posn[1] + 3;
    projectile.style.top = posn[1] + "px";
  }
}
    

//functions for moving object

function ss_right() { 
  if (poss[0] == 300) {
    console.log("you've reach the end");
  }
  else {
    poss[0] = poss[0] + 10;
    spaceship.style.left = poss[0] + "px";
  }
}

function ss_left() {
  if (poss[0] == 10) {
    console.log("you've reach the end");
  }
  else {
    poss[0] = poss[0] - 10;
    spaceship.style.left = poss[0] + "px";
  }
} 

function ss_up() {
  if (poss[1] == 50) {
    console.log("you've reach the top");
  }
  else {
    poss[1] = poss[1] - 10;
    spaceship.style.top = poss[1] + "px";
  }
}
function ss_down() {
  if (poss[1] == 400 ) {
    console.log("you've reach the base");
  }
  else {
    poss[1] = poss[1] + 10;
    spaceship.style.top = poss[1] + "px";
  }
} 



//this line of code next to this letter ks just a trash : posu[0] = posu[0] + 0.5;
//  ufo.style.left = posu[0] + "px"; 
