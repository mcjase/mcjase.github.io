let first = document.getElementById("typing");
let after = document.getElementById("typing_after");
let first_txt = "jase";
let after_txt = "#1970";
let i = 0;
let speed = 100;

function typeWriter() {
    // types first text and then second text
    if (i < first_txt.length) {
        first.innerHTML += first_txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else if (i < first_txt.length + after_txt.length) {
        after.innerHTML += after_txt.charAt(i - first_txt.length);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();