function comprobarCaracteresNoPermitidos(email, caracteresNoPermitidos)
{
    for(let i = 0;i < caracteresNoPermitidos.length;i++)
        return email.charAt(i) == caracteresNoPermitidos[i]?false:true; // Si estoy leyendo un caracter no permitido, devuelvo FALSE
    
    return true; // Si se salió del bucle sin hacer un return previamente, es porque el bucle no encontró ningún caracter malo :)
}
function comprobarEmail(email)
{
    let caracteresNoPermitidos = // Esto me sirve para validar el email. Es un vector que le paso a comprobarCaracteresNoPermitidos()
    [
        '!','#','$','%','^','&','*','(',')','=','[',']','{','}','\'',';',':','='
    ];
    let arroba = 0, puntos = 0, caracteres = 0, lectura;
    for(let i = 0;i < email.length;i++)
    {
        lectura = email.charAt(i);
        if( lectura == '@' )
            arroba++;
        else if(lectura == '.')
            puntos++;
        else
            if( comprobarCaracteresNoPermitidos(email, caracteresNoPermitidos) )
                    caracteres++; // +1 al contador de caracteres
            else // Si hay algún caracter raro, el email es inválido
                return false;
    }
    return arroba==1&&puntos <= 3&&puntos>=1&&caracteres > 8?true:false;
}
function comprobarContrasena(contrasena)
{
    return contrasena.length>8?true:false;
}
function comprobarLogin(datos)
{
    let estadoSesion = {
        emailOk: false,
        contrasenaOk: false,
        clase: 'error' // .error u .ok debe ser activada
    };
    estadoSesion.emailOk = comprobarEmail(datos.email);
    estadoSesion.contrasenaOk = comprobarContrasena(datos.contrasena);
    if( estadoSesion.emailOk && estadoSesion.contrasenaOk )
        estadoSesion.clase = 'ok';
    else
        estadoSesion.clase = 'error';
    
    console.log('En la función: ');
    console.log(estadoSesion);
    return estadoSesion;
}