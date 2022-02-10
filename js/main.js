//exicute js code when my DOM is ready
$(document).ready(function () {
            //execute in strict mode mening
            //no undeclared var can be used or removal of any object is not possible
            "use strict";
    
                                                          //$(this).hide();
    $("#howTo").hide(1000, function()
                    {
                console.log("hidden");
            });
             /*$("#howTo").show(1000,function()
                {
                console.log("Showing");
             });*/

    
    $("#showInst").click(function(){                                                //
                $("#howTo").show(1000,function()
                {
                console.log("Showing");
             });
             
    }); $("#showInst").dblclick(function(){                                                
                $("#howTo").hide(1000,function()
                {
                console.log("hidden");
                });
    });
    
    
    $("#introquote").on({
                 mouseenter: function(){
                     $(this).css("color","white");
                 },
                 mouseleave: function(){
                     $(this).css("color","pink");
                 }
    });
    
    
    $("#select").on({
                 mouseover: function(){
                     $(this).css("color","pink")
                 },
                 mouseout: function(){
                     $(this).css("color","white")
                 }
        //changes the color of the the select mood text on mouse over
        
        
    });
    
    
    $(".form").submit(function(){
        alert("form has been submitted");
        event.preventDefault();
        //lets user know they have submitted the form
    });
    
    
  
    
       
});