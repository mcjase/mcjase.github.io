let TXT = "> Jase _";
let SPEED = 300;
let i = 0;

let button = document.getElementById("enter-button");
let pre = document.getElementById("pre");
let post = document.getElementById("post");
let music = document.getElementById("skai");
let title = document.getElementById("typing");

/*

Typing effect

*/

function typeWriter() {
  if (i < TXT.length) {
    title.innerHTML += TXT.charAt(i);
    i++;
    setTimeout(typeWriter, SPEED);
  }
}

/*

Enter function

*/
function enter() {
  pre.style.display = "none";
  post.style.display = "block";
  button.remove;

  music.volume = 0.7;
  music.play();

  typeWriter();
}
