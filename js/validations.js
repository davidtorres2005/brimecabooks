$(document).ready(function(){
    
    var validData = [];
    var inputsData = 5;
    
    for (var i = 0; i < inputsData; i++){
        validData.push(false);
    }
    
    //Validacion de nombre de usuario
    $("#user_name").focusout(function(){
        if($(this).val().length <= 5){
            $(this).addClass("regError");
            $("#id1").html("<span style = 'color:#ba1c2e;'> Nombre de usuario muy corto</span>");
            validData[0] = false;
        }
        
        else{
            $("#id1").html("<span></span>");
            $("#user_name").removeClass("regError");
            validData[0] = true;
        }
    });
    
    //Validacion de nombre
    $("#name").focusout(function(){
        if($(this).val().length <= 3){
            $(this).addClass("regError");
            $("#id2").html("<span style = 'color:#ba1c2e;'>Tu nombre no puede ser tan corto</span>");
            validData[1] = false;
        }
        
        else{
            $("#id2").html("<span></span>");
            $("#name").removeClass("regError");
            validData[1] = true;
        }
    });
    
    
    //Validacion de correo
    $("#email").focusout(function(){
        var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
        var email = $("#email").val();
        
        if (caract.test(email) == true){
            $("#id3").html("<span style = 'color:green;'>Correo valido</span>");
            $("#email").removeClass("regError");
            validData[2] = true;
        }else{
            $("#id3").html("<span style = 'color:#ba1c2e;'>Correo invalido</span>");
            $(this).addClass("regError");
            validData[2] = false;
        }
    });
    
    //Validacion de contrasenia
    $("#password").focusout(function(){
        if($(this).val().length <= 7){
            $(this).addClass("regError");
            $("#id4").html("<span style = 'color:#ba1c2e;'>Minimo 8 caracteres para la contraseña</span>");
            validData[3] = false;
        }
        
        else{
            $("#id4").html("<span></span>");
            $("#password").removeClass("regError");
            validData[3] = true;
        }
    });
    
    //Validacion de contrasenia igual
    $("#password_check").focusout(function(){
        if($("#password_check").val() !== $("#password").val()){
            $("#password_check").addClass("regError");
            $("#id5").html("<span style = 'color:#ba1c2e;'>Las contraseñas no coinciden</span>");
            validData[4] = false;
        }
        
        else{
            $("#id5").html("<span></span>");
            $("#password_check").removeClass("regError");
            validData[4] = true;
        }
    });
    
    $("#submitBtn").click(function(e){
        e.preventDefault();
        if( validData[0] == false){
            alert("Usuario incorrecto");
        }
        else if(validData[1] == false){
            alert("Nombre incorrecto");
        }
        else if(validData[2] == false){
            alert("Email no valido");
        }
        else if(validData[3] == false){
            alert("Contraseña no valida");
        }
        else if(validData[4] == false){
            alert("contraseñas no coinciden");
        }
        else{
            alert("todo bien");
        }
    });
});