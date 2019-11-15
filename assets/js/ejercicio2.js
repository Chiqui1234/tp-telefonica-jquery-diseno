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
        console.log('Legajo a evaluar: '+numero);
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
        let nombre = $('#nombreAlumno').val(), apellido = $('#apellidoAlumno').val(), legajo = parseInt($('#legajoAlumno').val());
        alumnos[i] = new Alumno; // En la posición[i] creo un objeto Alumno
        alumnos[i].agregar(nombre, apellido, legajo); // Llamo a la función del alumno
        console.log(`Nombre: ${alumnos[i].nombre} \n Apellido: ${alumnos[i].apellido} \n Legajo: ${alumnos[i].legajo}`);
        i++;
        imprimirEstado('#cantAlumnos', 'ok okText full-width padding', '¡Agregaste ' + i + ' alumnos!');
    });
    $('#numeroLegajoo').bind('keyup', function() // Ejercicio 3
    {
        // console.log('Alumnos: ', alumnos[0]);
        removerEstado('#resultadoAlumno', '');
        let legajo = parseInt($('#numeroLegajoo').val());
        let z = 0;
        while( legajo != alumnos[z].legajo )
        {
            z++;
        }
        if( legajo == alumnos[z].legajo ) // Lo encontré en el while()
            imprimirEstado('#resultadoAlumno', '', `<h5>¡Encontrado!</h5><p>${alumnos[z].nombre} ${alumnos[z].apellido} (${alumnos[z].legajo}).</p>`);    
        else 
            imprimirEstado('#resultadoAlumno', '', '<p>No se encontró ese legajo.</p>');
    });
});