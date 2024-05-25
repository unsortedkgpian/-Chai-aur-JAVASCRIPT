const buttons = document.querySelectorAll('.buttons')

const body = document.querySelector("body");

buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        body.style.backgroundColor = e.target.id;
        // body.style.backgroundAttachment
        // body.style.backgroundColor = rgb(Math.floor(Math.random()*255) , Math.floor(Math.random()*255) , Math.floor(Math.random()*255) );
        
    })
})