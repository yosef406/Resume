//fading animation start
const homeAnimatedText = document.querySelector(".changingHeader");
const strHomeAnimatedText = homeAnimatedText.textContent;
const splitHomeAnimatedText = strHomeAnimatedText.split("");
homeAnimatedText.textContent = "";
for (let i = 0; i < splitHomeAnimatedText.length; i++) {
    homeAnimatedText.innerHTML += '<span class="wordAnimatedFade">' + splitHomeAnimatedText[i] + '</span>';
}

var charIndex = 0;
var timer = setInterval(onAnimationTick, 50);

function onAnimationTick() {
    const span = homeAnimatedText.querySelectorAll("span")[charIndex];
    span.classList.add("fadeAnimation");
    charIndex++;
    if (charIndex === splitHomeAnimatedText.length) {
        completeAnimation();
        return;
    }
}

function completeAnimation() {
    clearInterval(timer);
    timer = null;
}
//fading animation end