$(document).ready(function(){
    
    //Validacion de contrasenia vieja
    $("#password_old").focusout(function(){
        if($(this).val().length <= 7){
            $(this).addClass("regError");
            $("#id1").html("<span style = 'color:#ba1c2e;'>Esta no puede ser una contraseña valida</span>");
        }
        
        else{
            $("#id1").html("<span></span>");
            $("#password_old").removeClass("regError");
        }
    });
    
    //Validacion de contrasenia nueva
    $("#password").focusout(function(){
        if($(this).val().length <= 7){
            $(this).addClass("regError");
            $("#id2").html("<span style = 'color:#ba1c2e;'>Contraseña no valida</span>");
        }
        
        else{
            $("#id2").html("<span></span>");
            $("#password").removeClass("regError");
        }
    });
    
    //Validacion de contrasenia igual
    $("#password_check").focusout(function(){
        if($("#password_check").val() !== $("#password").val()){
            $("#password_check").addClass("regError");
            $("#id3").html("<span style = 'color:#ba1c2e;'>Las contraseñas no coinciden</span>");
        }
        
        else{
            $("#id3").html("<span></span>");
            $("#password_check").removeClass("regError");
        }
    });
    
    //Validacion de nombre
    $("#name").focusout(function(){
        if($(this).val().length <= 3){
            $(this).addClass("regError");
            $("#id4").html("<span style = 'color:#ba1c2e;'>Tu nombre no puede ser tan corto</span>");
        }
        
        else{
            $("#id4").html("<span></span>");
            $("#name").removeClass("regError");
        }
    });
    
    
    //Validacion de correo
    $("#email").focusout(function(){
        var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
        var email = $("#email").val();
        
        if (caract.test(email) == true){
            $("#id5").html("<span style = 'color:green;'>Correo valido</span>");
            $("#email").removeClass("regError");
        }else{
            $("#id5").html("<span style = 'color:#ba1c2e;'>Correo invalido</span>");
            $(this).addClass("regError");
        }
    });
    
});