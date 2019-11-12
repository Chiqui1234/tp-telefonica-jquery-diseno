class Alumno
{
    constructor(nombre, apellido, legajo)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.legajo = legajo;
    }
    //
    agregar = function(nombres, legajo)
    {
        let nombresTokens = nombres.split(' ');
        this.nombre = nombresTokens[0];
        this.apellido = nombresTokens[1];
        this.legajo = legajo;
    }
    mostrar = function(iterador)
    {
        let htmlParseado = '<p>'+this.nombre+' '+this.apellido+'('+this.legajo+')';
        return htmlParseado;
    }
};

var alumnos = []; // Primero creo el array
var i = 0; // Tengo un contador que modifico cada vez que agrego/elimino un alumno
$(document).ready(function() {
    $('#nombreAlumno').bind('keyup', function()
    {
        let nombres = $('#nombreAlumno').val().split(' ');
        console.log(nombres);
        if( nombres[1] == '' || nombres[1] == null )
            imprimirEstado('#estado', 'error errorText full-width padding', 'Coloca nombre y apellido');
        else
            removerEstado('#estado', 'error errorText full-width padding');
    });
    $('#legajoAlumno').bind('keyup', function() // Comprueba el cambio del legajo
    {
        let numero = parseInt( $('#legajoAlumno').val() );
        console.log(numero);
        if( Number.isInteger(numero) ) // Si es un número
        {
            removerEstado('#estado', 'error errorText full-width padding');
            $('#agregarAlumno').prop('disabled', false);
            $('#terminar').prop('disabled', false);
            // removerEstado('#estado', 'error errorText padding');
        } else
        { 
            imprimirEstado('#estado', 'error errorText full-width padding', 'El legajo debe ser un número.')
            $('#agregarAlumno').prop('disabled', true);
            $('#terminar').prop('disabled', true);
        }
    });
    $('#agregarAlumno').click(function ()
    {
        // removerEstado('#cantAlumnos', 'ok okText padding');
        alumnos[i] = new Alumno; // En la posición[i] creo un objeto Alumno
        let nombreCompletoAlumno = $('#nombreAlumno').val(); // Capto el valor de mi input#nombreAlumno
        let legajo = $('#legajoAlumno').val(); // Capto el valor de input#legajoAlumno
        console.log('Legajo es un número. Voy a crear el alumno.');
        alumnos[i].agregar(nombreCompletoAlumno, legajo); // Llamo a la función del alumno
        i++;
        imprimirEstado('#cantAlumnos', 'ok okText full-width padding', '¡Agregaste ' + i + ' alumnos!');
    });
});