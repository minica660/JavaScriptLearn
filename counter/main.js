// ただクリックするだけのもの
let count = 0;
const display = document.getElementById('count-display');
const button = document.getElementById('btn');
const log = document.getElementById('log');

button.addEventListener("click" ,() =>{

    count++;
    display.textContent = count;

    if(count === 100){
        log.insertAdjacentHTML('beforeend', `<p>${count}回目達成おめでとう!</p>`);
    }else if(count === 110){
        log.insertAdjacentHTML('beforeend', `<p>110回目達成おめでとう!</p>`);
    }

})