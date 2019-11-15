class Alumno
{
    constructor(nombre, apellido, legajo)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.legajo = legajo;
    }
    //
    agregar = function(nombre, apellido, legajo)
    {
        this.nombre = nombre;
        this.apellido = apellido;
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
        let nombre = $('#nombreAlumno').val(), apellido = $('#apellidoAlumno'), legajo = parseInt($('#legajoAlumno').val);
        alumnos[i] = new Alumno; // En la posición[i] creo un objeto Alumno
        alumnos[i].agregar(nombre, apellido, legajo); // Llamo a la función del alumno
        i++;
        imprimirEstado('#cantAlumnos', 'ok okText full-width padding', '¡Agregaste ' + i + ' alumnos!');
    });
    $('#numeroLegajoo').bind('keyup', function() // Ejercicio 3
    {
        removerEstado('#resultadoAlumno', '');
        let legajo = $('#numeroLegajoo').val();
        console.log(legajo);
        let i = 0;
        while( legajo != alumnos[i].legajo && alumnos[i] != null)
        {
            i++;
        }
        if( legajo == alumnos[i].legajo ) // Lo encontré en el while()
            imprimirEstado('#resultadoAlumno', '', `<h5>¡Encontrado!</h5><p>${alumnos[i].nombre} ${alumnos[i].apellido} (${alumnos[i].legajo}).</p>`);    
        else 
            imprimirEstado('#resultadoAlumno', '', '<p>No se encontró ese legajo.</p>')
    });
});