let duration = 10800; 
setInterval(() => {
    let hours = Math.floor(duration / 3600);
    let minutes = Math.floor((duration % 3600) / 60);
    let seconds = duration % 60;

    document.getElementById('hours').textContent = hours.toString().padStart(2,'0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2,'0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2,'0');

    if(duration > 0) duration--;
}, 1000);


const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;

slides.forEach((_, i) => {
    const dot = document.createElement("span");
    if(i === 0) dot.classList.add("active-dot");
    dot.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots span");

function showSlide(i){
    slides[index].classList.remove("active");
    dots[index].classList.remove("active-dot");

    index = i;

    slides[index].classList.add("active");
    dots[index].classList.add("active-dot");
}

next.addEventListener("click", () => {
    let newIndex = (index + 1) % slides.length;
    showSlide(newIndex);
});

prev.addEventListener("click", () => {
    let newIndex = (index - 1 + slides.length) % slides.length;
    showSlide(newIndex);
});

setInterval(() => {
    let newIndex = (index + 1) % slides.length;
    showSlide(newIndex);
}, 5000);