// IIFE - Imediately Invoke Function Expression (Self Executing Function)
(function(){
    
    function Run() : void {
        Loading();
        Processing();
        Startng();
    }

    
    // Function Declaration
    function Loading() : void {
        console.log("App Loading....");
    }


    // Function Expression or Annoymous Function (no this property)
    let Processing = function() : void {
        console.log("App Processing....");
    }


    // Arrow function or Lambda Function (Has this property)
    const Startng = () : void => {
        console.log("App started .....");
    }

    window.addEventListener("load", Run);

})()