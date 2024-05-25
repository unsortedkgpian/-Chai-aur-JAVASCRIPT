const clock = document.getElementById('clock');

// let Date = new Date(

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    console.log(date.toLocaleTimeString());

}, 1000);