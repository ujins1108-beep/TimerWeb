const slider = document.querySelector(".slider")
const circle = document.querySelector(".circle")
const body = document.querySelector("body")
const dltext = document.querySelector(".dltext")
const title = document.querySelector(".title")
const number = document.querySelector(".number")
const start = document.querySelector(".start")
const stop = document.querySelector(".stop")
const clear = document.querySelector(".clear")

let isclick = false

let sliderWidth = slider.offsetWidth;
let circleWidth = circle.offsetWidth;

let moveX = sliderWidth - circleWidth;

let numberValue = 0;

let startsituation = false;

let timer;

slider.addEventListener("click", () => {
    isclick = !isclick

    if (isclick) {
        circle.style.transform = `translateX(${moveX}px)`;
        slider.style.backgroundColor = "rgb(27, 126, 255)";
        body.style.backgroundColor = "rgb(19, 19, 19)"
        dltext.style.color = "whitesmoke"
        title.style.color = "whitesmoke"
        number.style.color = "whitesmoke"
    }
        

    if (!isclick) {
        circle.style.transform = `translateX(0px)`;
        slider.style.backgroundColor = "rgb(173, 173, 173)";
        body.style.backgroundColor = "white"
        dltext.style.color = "black"
        title.style.color = "black"
        number.style.color = "black"
    }
        

});

window.addEventListener("resize", () => {
    sliderWidth = slider.offsetWidth;
    circleWidth = circle.offsetWidth;

    moveX = sliderWidth - circleWidth;
});

start.addEventListener("click", () => {
    startsituation = true;

    if (timer) return;

    if (startsituation) {
        timer = setInterval(() => {
            numberValue += 0.01
            number.textContent = numberValue.toFixed(2);
        }, 10)
    }
});

stop.addEventListener("click", () => {
    startsituation = false;
    clearInterval(timer);
    timer = null;
});

clear.addEventListener("click", () => {
    clearInterval(timer);
    numberValue = 0.00;
    number.textContent = numberValue.toFixed(2);
    timer = null;
    
});