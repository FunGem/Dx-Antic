const burger = document.getElementById("burger");
const view =document.getElementById("mobile_card");



function controller() {
    view.classList.toggle("show");
}

burger.addEventListener("click", function (e) {
    e.preventDefault()
    controller();
})