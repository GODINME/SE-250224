// IIFE - Imediately Invoke Function Expression (Self Executing Function)
(function(){
    
    function Run() {
        Loading();
        Processing();
        Startng();
    }

    
    // Function Declaration
    function Loading() {
        console.log("App Loading....");
    }


    // Function Expression or Annoymous Function (no this property)
    let Processing = function() {
        console.log("App Processing....");
    }


    // Arrow function or Lambda Function (Has this property)
    const Startng = () => {
        console.log("App started .....");
    }

    window.addEventListener("load", Run);

})()