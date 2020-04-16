//para JQuery - siempre se inicializa con $
//el JQuery se debe ejecutar siempre despues que la pagina completa html haya cargado
$(document).ready(function(){
    alert("Todo correcto");
});

//cambios directamente en el HTML
$(document).ready(function(){
    //asignar el contenido
    $("#titulo").html("Soy Sergio");  
});

//para obtener un valor del html
    //saber si existe
    console.log($("#titulo"));
    //ver lo que dice en el html 
    console.log($("#titulo").html());
  
//seleccionar un id del HTML
$("#titulo");
//seleccionar una clase
$(".elemento");


//colocar un <h2> antes y despues del parrafo asignado
//de forma de div como bloques
$("#parrafo").before("<h2> LOREM IPSUM </h2>");
$("#parrafo").after("<h2>LOREM IPSUM <h2>");
//de forma hijo dentro del mismo padre
$("#parrafo").prepend("<span> LOREM IPSUM </span>");
$("#parrafo").append("<span>LOREM IPSUM <span>");

//cambiar estilos css desde el JQuery
$(".caja").css("background-color","skyblue");
//cambiar estilos css con mas de una linea
$(".caja").css({
    "border-radius":"20px",
    "padding":"20px"
});








