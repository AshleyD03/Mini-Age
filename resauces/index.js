document.getElementById("button-mini").addEventListener("click", function(){
    document.getElementById("mini-container").style.visibility = "visible";
    document.getElementById("wait-container").style.visibility = "hidden";
})
button_wait = document.getElementById("button-wait").addEventListener("click", function(){
    document.getElementById("mini-container").style.visibility = "hidden";
    document.getElementById("wait-container").style.visibility = "visible";
})

function minimum_Age(age){
    age = (age / 2 + 7).toString()
    document.getElementById("mini-result").innerHTML = "Your Minimum dating age is " + age
}

function wait_Years(){
        var a = parseInt(document.getElementById("wait-input1").value); var b = parseInt(document.getElementById("wait-input2").value)
        // Used to tell which inout box has a greater value
        if (a > b) {
            var wait = wait_calculate(a, b)
        }
        else {
            var wait = wait_calculate(b,a)
        }

        // If they have no years to wait
        if (wait <= 0) {
            wait = 0
            document.getElementById("wait-comment").innerHTML = "No waiting for you guys"
        }
        // If they have to wait
        else {
            a += wait; b += wait
            document.getElementById("wait-comment").innerHTML = "A will be " + a.toString() + " Years Old and B will be " + b.toString() + " Years Old"
        }
        // Year message 
        document.getElementById("wait-result").innerHTML = "You'll have to wait " + wait.toString() + " years"
        
}

function wait_calculate(old, young){
    wait = 14 + (old - young) - young
    return(wait)
}