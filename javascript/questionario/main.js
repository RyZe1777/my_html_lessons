$(document).ready(function(){
    $("form").on("submit", function(event){
        //prevenir que a pagina do action seja carregada
        event.preventDefault();
        //guardar array com respostas seleccionadas
        var answers = $("input:checked");
        console.log(answers);
        //guardar array com respostas corretas
        var matrix = {
            "quest1": "Porche",
            "quest2": "Red Dead Redemption 2",
            "quest3": "Pêra",
            "quest4": "KFC",
            "quest5": "C++",
        };
        var correct = 0;
        var wrong = 0;  
        answers.each(function(){
            var thisV = $(this);
            var name = thisV[0]["name"];
            var id = thisV[0]["id"];
            console.log(name+ " - "+id);
            if(matrix[name] == id){
                console.log("CORRETO");
                correct++;
                thisV.addClass("correct");
            }   else {
                console.log("ERRADO");
                wrong++;
                thisV.addClass("wrong");
            }
        });
        $("form").append("Tem" +correct+"perguntas certas"
        + " e "+wrong+"perguntas erradas");

    });
});