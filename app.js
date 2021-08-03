const div = document.querySelectorAll("div");

console.log(div);
console.log(div.length);

function onMouse() {
    this.classList.toggle("on");
}

let i = 0;
while(i < div.length) {
    div[i].addEventListener("mouseenter",onMouse);
    div[i].addEventListener("mouseleave",onMouse);
    i = i + 1;
}
