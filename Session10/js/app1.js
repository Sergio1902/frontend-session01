$(document).ready(function()
{
    $("#titulo").html("hemos cambiado");
    console.log($("#titulo").html());

    $("#parrafo").before("<h2>Description</h2>");
    $("#parrafo").after("<h2>HOLA MUNDO</h2>");


});
