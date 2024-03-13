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
    });
});