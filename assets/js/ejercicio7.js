function crearGuiones(id, cantGuiones)
{
    let guionesHtml = '';
    for(let i = 0;i < cantGuiones;i++)
        guionesHtml += `<div id="letra${i}">_</div>`;       
    return guionesHtml;
}

function search(palabra, letra)
{
    let pos = [];
    /* Caso de ejemplo:
        Si tengo 'elefante', la función search() debe devolver la posición 2 y 7. Recordar que la primer pos y la última ya están dadas por la aplicación.
    */
   for(let i = 1;i < palabra.length-1;i++)
       if(palabra.charAt(i) == letra) // Si el caracter analizado es igual a la letra
        pos.push(i); // Lo agrego al array de coincidencias
    
   return pos;
}

function agregarLetras(id, letra, pos)
{
    let finalId, i = pos[0], z = 0;
    console.log('Se agrega una letra');
    do // Si la i es menor al último valor del array
    {
        finalId = '#' + id + (i-1);console.log(finalId);
        $(finalId).html(letra);
        console.log(`Se inserta en la pos ${pos[z]-1}, la i vale ${i-1}.`);
        i = pos[z]-1;
        z++;
    } while( i < pos[pos.length-1] && z < pos.length );
}

$(document).ready(function()
{
    let palabra = '', vidas = 0;
    do
    {
        palabra = prompt('Ingresar palabra a adivinar por el jugador');
        vidas = parseInt(prompt('Ingresar vidas del jugador'));
    } while( palabra.length < 3 && vidas > 0 );
    let cantLetras = palabra.length;
    let cantGuiones = cantLetras-2; // Le resto el primer y último caracter, que son las letras que SI van a aparecer desde el primer momento
    guionesHtml = crearGuiones('palabra', cantGuiones);
    let letrasEncontradas = [];
    $('#cantVidas').html(vidas);
    $('#cantLetras').html(cantLetras);
    $('#palabra').html(palabra.charAt(0)+guionesHtml+palabra.charAt(cantLetras-1));
    $('#enviar').click(function()
    {
        if(vidas == 0) // Si perdiste, te redirijo al inicio
        {
            alert('¡Perdiste!');
            $(location).attr('href', 'index.html');
        }
            
        let letra = $('#letraNueva').val();
        let pos = search(palabra, letra);
        agregarLetras('letra', letra, pos); // Agrego las letras al document.
        if(pos.length == 0)
            vidas--;
        $('#cantVidas').html(vidas);
    });
});