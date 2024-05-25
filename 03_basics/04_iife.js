// Immediately Invoked Function Expression (IIFE)

// ()() ;
// ; is nessary

// It is use to safe the fuction from outer polution from global scope

(function chai (){
    let v = 10;//named iife because funtion is name
    console.log("v: " + v);
})();

// ***************************

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// It doest know where to stop so ; is nessacary


((name) => { 
    //simple iife
    console.log(name);
})("Aditya");