var i = 0;
var numeros = [];
$(document).ready(function() {
    $('#generarNumero').click(function()
    {
        let numero = parseInt(Math.random()*1000);
        // alert('¡Se generó el número '+numero+'!');
        numeros[i] = numero;
        $('#numerosGenerados').append('<li>'+numero+'</li>');
        i++;
    });
});