// generate random color 
const body = document.querySelector("body");
const chg = setInterval(() => {
    body.style.backgroundColor = randomC6olor();
} , 1000);
const randomC6olor = function(){
     return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

document.getElementById('start').addEventListener('click', function(){
    setInterval(chg, 1000);
})

document.getElementById('stop').addEventListener('click', function(){
    clearInterval(chg);
})