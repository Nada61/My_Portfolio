$(document).ready(function(){
    /*Ady ll button class 3shan keda hy3ml 3la ay button*/
    $(" .softbtn").click(function(){
        $("body").css("overflow" , "hidden");
        /*var id =$(this).attr('custom');*/
        $('.bk-soft').fadeIn();
    });
    $(".bk-soft img").click(function(event){
        event.stopPropagation();
        
    });
    $(".bk-soft").click(function(){
        $("body").css("overflow" , "auto");
        $(this).fadeOut();
    });
    
    /**********************web**************************/
    /*class of button of web certificate*/
      $(".web").click(function(){
        $("body").css("overflow" , "hidden");
        $('.bk-web').fadeIn();
    });
    $(".bk-web embed ").click(function(event){
        event.stopPropagation();
        
    });
    $(".bk-web").click(function(){
        $("body").css("overflow" , "auto");
        $(this).fadeOut();
    });
    
    $(".form-data form").submit(function(e){
        var error=0;
        console.log(error);
        e.preventDefault();

        var inputs = $(this).find("input:not(.btn-primary)");
        for(var i=0 ; i<inputs.length;i++){
            if($(inputs[i]).val().length <5){
                error++;
            }
        }
        if(error>0){
            e.preventDefault();
            alert("Please Enter Data correctly");
        }
    });
})