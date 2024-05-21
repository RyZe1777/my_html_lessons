$(document).ready(function(){
    //gravar seletores em variaveis
    var question = $ ("dl");
    var title = $ ("dt");
    var description = $ ("dd");

    description.hide();
    question.on ("click", function(){ //quando eu clico abre a funçao
        var thisQuestion = $(this);
        //abrir ou fechar a pergunta selecionada
        if(thisQuestion.is(".open")) {  //se ja tiver aberta:
            thisQuestion.removeClass("open").find("dd").fadeOut();
        } else { //caso contrario (se nao tiver aberta):
            thisQuestion.addClass("open").find("dd").fadeIn(); //adiciona a classe open ao dd e desliza-o pa baixo
        }
        //fechar outras perguntas abertas
        if(thisQuestion.siblings(".open")){ //this=dl || siblings=tudo oq esta ao mm nivel de tabelaçao 
            thisQuestion.siblings(".open").find("dd").fadeOut(function(){ // pega no sibling com a classe open e fecha a sua descriçao
                $(this).closest(".open").removeClass("open"); // quando o slideUp acabar tira a classe open do elemento mais prox com essa classe
            });
        }
    }); 
});