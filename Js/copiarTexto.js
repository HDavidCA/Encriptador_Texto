function copiarTexto() {
    const respuestaDiv = document.getElementById('respuesta');
    const texto = respuestaDiv.innerText || respuestaDiv.textContent;

    navigator.clipboard.writeText(texto).then(() => {
        console.log('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}