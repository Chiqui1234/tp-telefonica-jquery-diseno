function obtenerInformacionDelDia()
{
    const nombresDias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const nombresMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let fecha = new Date();
    let parseado = 
    {
        diaDeLaSemana : nombresDias[fecha.getDay()], // string
        numeroDiaDelMes : fecha.getDate(), // int
        mes : nombresMeses[fecha.getMonth()]
    };
    return parseado;
}