$(document).ready(function(){   
    var frase = $("h2");
    var placeholder = frase.find("span");

    //evento de clique nos blocos de imagem

    $(".img").on("click", function(e){
        
        e.preventDefault();

        //gravar titulo da imagem em variavel

        var estaImagem = $(this);
        var titulo = estaImagem.find("h3").text();

        //titulo da imagem no placeholder

        placeholder.text(titulo)

        //adicionar class open
        
        estaImagem.addClass("open");

        //remover calss open dos siblings

        if(estaImagem.siblings(".open")){
            console.log(estaImagem);
            estaImagem.siblings().removeClass("open");
        }
        


    })
});
