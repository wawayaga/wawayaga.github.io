var i = 0;
var txt = 'Hello coffee addicts'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



let j = 1;
const clickHere = document.getElementById("clickhere");
const image = document.getElementById("animate");

function animation() {
    if(j < 8) {
        image.src = `../images/notAnyCoffee${j}.png`;
        j++;
        setTimeout(animation, 250);
    }
    else
    j = 1;
}

image.addEventListener("click", animation);
window.onload = typeWriter;
window.focus = bounce_right;