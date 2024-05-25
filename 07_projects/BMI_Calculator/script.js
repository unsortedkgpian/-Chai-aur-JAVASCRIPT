const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);// it come in string
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    

    if ( height < 0 || height === '' || isNaN(height)) {
        // result.appendChild(document.createTextNode(`Please Enter a valid Height`));// It will add so 
        result.innerHTML = "'Please Enter a valid Height'";
    }else if ( weight < 0 || weight === '' || isNaN(weight)){
        // result.appendChild(document.createTextNode(`Please Enter a valid Weight`));
        result.innerHTML = "Please Enter a valid Weight"
    }else{
        const bmi = (weight/ ((height*height)/10000)).toFixed(2);
        // result.appendChild(document.createTextNode(bmi));
        result.innerHTML = bmi
    }


})