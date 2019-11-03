
function start() {
    var msg = document.getElementById("msg")
    var nTry = document.getElementById("nTry")
    var num = document.getElementById("num")
    var button = document.getElementById("button")
    var chooseBtn = document.getElementById("choose")


    var n = 0;
    button.addEventListener("click", check)
    chooseBtn.addEventListener("click", choose)

    var theNumber = 0

    function choose() {

        var inter = document.getElementById("inter")
        theNumber = Math.floor(Math.random() * inter.value)

    }


    function check() {

        if (num.value > theNumber) {

            msg.innerHTML = "<"

        } else if (num.value < theNumber) {

            msg.innerHTML = ">"

        } else {

            msg.innerHTML = theNumber
            msg.style.color = "green"

        }

        n++
        nTry.innerHTML = n


    }


}
