$(document).ready(function() {
$('#numeroLegajoo').bind('keyup', function()
{
    let legajo = $('numeroLegajoo').val();
    console.log(legajo);
    let i = 0;
    while( legajo != alumnos[i].legajo && alumnos[i] != null)
    {
        i++;
    }
    if( legajo == alumnos[i].legajo ) // Lo encontré en el while()
        $('#resultadoAlumno').html(`<p>${alumnos[i].nombre} ${alumnos[i].apellido} (${alumnos[i].legajo}).</p>`);
    else 
        $('#resultadoAlumno').html('<p>No se encontró este legajo.</p>');
});
});