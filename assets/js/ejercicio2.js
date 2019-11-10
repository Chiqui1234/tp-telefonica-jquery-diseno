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
};

var alumnos = []; // Primero creo el array
var i = 0; // Tengo un contador que modifico cada vez que agrego/elimino un alumno
$(document).ready(function() {
    $('#agregarAlumno').click(function ()
    {
        alumnos[i] = new Alumno; // En la posición[i] creo un objeto Alumno
        let nombreCompletoAlumno = $('#nombreAlumno').val(); // Capto el valor de mi input#nombreAlumno
        let legajo = $('#legajoAlumno').val(); // Capto el valor de input#legajoAlumno
        console.log('Legajo es un número. Voy a crear el alumno.');
        alumnos[i].agregar(nombreCompletoAlumno, legajo); // Llamo a la función del alumno

        console.log(alumnos[i]);
        i++;
    });
});