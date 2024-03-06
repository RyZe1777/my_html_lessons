/**
 *  inicializaçao do jQuery
 */

$(document).ready(function(){ // ready e uma função que aceita outra função
    console.log("o elemento esta pronto");

    $("input, textarea").on("focusin focusout", function(event){
        /* $s(this) refere-se ao elemento selecionado nesta funçao*/
        $(this).toggleClass("border-form");
        //mostrar detalhes do evento na consolaea wqWEJ«I-
        console.log(event);
    });
    
    //quando o fomulario for submetido
    $("#loader").hide(); //escoder o loader (linha 57 html)
    $("form").on("submit",function(event){
        //log q o evento aconteceu
        console.log("submit");
        //prevenir açao default = que a pagina seja recarregada
        event.preventDefault();
        //mostrar loader
        $("#loader").fadeIn(1000, function(){
            console.log ("fadeIn completo");
            $(this).find("span").text("Registo Efetuado");
            //funcionamento do botao fechar
            $(this).find('.close').on ("click",function(){
                $("#loader").fadeOut(1000);
            });
        });
    });

});


