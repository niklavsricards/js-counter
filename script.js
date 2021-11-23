window.onload=function() {
    let button = document.querySelector("#button")
    let buttonMinus = document.querySelector("#buttonMinus")
    let counter = document.getElementById("counter")

    let count = 0;

    button.addEventListener("click", function () {
        count++
        counter.innerHTML = count
    })

    buttonMinus.addEventListener("click", function () {
        count--
        counter.innerHTML = count
    })
}