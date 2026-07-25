const fortunes = ["大吉","中吉","小吉","吉","小吉"];
const drawButton = document.getElementById("omikuzi-btn");
const buttonReset = document.getElementById("reset");
const result = document.getElementById("result");


drawButton.addEventListener("click",function() {

    omikuzi();

});
function omikuzi(){
    const randomIndex = Math.floor(Math.random() * fortunes.length);

    buttonReset.textContent = "おみくじの結果をリセット!"

    result.textContent = "結果：" + fortunes[randomIndex];

    drawButton.disabled = true;
    buttonReset.disabled = false; 
}

buttonReset.addEventListener("click", function() {

    result.textContent = "おみくじの結果をリセットしたよ!";

      drawButton.disabled = false;  
      buttonReset.disabled = true;  
    });

buttonReset.disabled = true;