var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber >= 10){
        document.getElementById("botao2").disabled = true;
    }

}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber <= -1){
        document.getElementById("currentNumber").style.color = "red";
    }
    if(currentNumber <= -10) {
        document.getElementById("botao1").disabled = true;
    }

}