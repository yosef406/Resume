//fading animation start
/** this section controls the animation on the home page */
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

//nav bar start
/** this section controls the nav bar active item */
const sections = document.querySelectorAll("section");

const options = { threshold: 0.7 };
let observer = new IntersectionObserver(navCheck, options);
function navCheck(entries) {
    entries.forEach(entry => {
        let idName = entry.target.id;
        idName = idName == "Home" ? "Top" : idName;
        const activeAnchor = document.querySelector(`[href="#${idName}"]`);
        const prevAnchor = document.querySelector(".active");
        if (entry.isIntersecting) {
            prevAnchor.classList.remove("active");
            activeAnchor.classList.add("active");
        }
    });
}

sections.forEach(section => { observer.observe(section); });
// nav bar End