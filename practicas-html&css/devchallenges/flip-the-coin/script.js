let coin = document.querySelector(".img");
let btnFlip = document.getElementById("flip-button");

function flipCoin(){
    let result;
    let random = Math.round(Math.random() * 10);
    if (random < 5){
        result = "Heads"
    }
    else{
        result = "Tails"
    }

    coin.src = `resources/${result.toLowerCase()}.svg`;
    document.querySelector(".result").innerHTML = result;
}

coin.addEventListener("click", flipCoin)
btnFlip.addEventListener("click", flipCoin)


