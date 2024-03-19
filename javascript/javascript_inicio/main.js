/**
 *  inicializaçao do jQuery
 */

$(document).ready(function(){ // ready e uma função que aceita outra função
    console.log("o elemento esta pronto");

    $("input, textarea").on("focusin focusout", function(event){
        /* $s(this) refere-se ao elemento selecionado nesta funçao*/
        $(this).toggleClass("border-form");
        //mostrar detalhes do evento na consolaea 
        console.log(event);
    });
    
    //quando o fomulario for submetido
    $("#loader").hide(); //escoder o loader (linha 57 html)

    $("form").on("submit",function(event){
        //log q o evento aconteceu
        console.log("submit");

        //gravar valores do form em vars
        var nome = $("input#nome").val();
        var Email = $("input#Email").val();
        var username = $("input#username").val();
        var Nascimento = $("input#Nascimento").val();
        var Password = $("input#Password").val();
        console.log(nome);

        //construir uma frase numa var
        var frase = "Olá "+nome+", o seu username "+username+
            " com data de nascimento " +Nascimento+ 
            ", for registado para o email " +Email;
        console.log(frase);

        //prevenir açao default = que a pagina seja recarregada
        event.preventDefault();
        //mostrar loader

        $("#loader").fadeIn(1000, function(){
            $("#loader").append("<p>"+frase+"</p>");
            console.log ("fadeIn completo");
            $(this).find("span").text("Registo Efetuado");
            //funcionamento do botao fechar
            $(this).find('.close').on ("click",function(){
                $("#loader").fadeOut(1000);
            });
        });
    });

});


