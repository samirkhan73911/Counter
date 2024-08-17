let increasebtn = document.getElementById("increase")
let resetbtn = document.getElementById("reset")
let decreasebtn = document.getElementById("decrease")
let show = document.getElementById("show")
let count = 0

function increment() {
    count++
    //  if(count>=0)
    {
        show.textContent = count
    }

}
function decrement() {
    count--
    if (count >= 0)
        show.textContent = count
}

function reseting() {

    show.textContent = 0
}