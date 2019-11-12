function removerEstado(id, clases)
{
    $(id).removeClass(clases); // Formateo
    $(id).html(''); // Formateo
}
function imprimirEstado(id, clases, texto)
{
    removerEstado(id, clases);
    $(id).addClass(clases); // Aplico nuevo estado
    $(id).html('<p>'+texto+'</p>'); // Aplico nuevo estado
}