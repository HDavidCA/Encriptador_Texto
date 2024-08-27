// Función para desencriptar texto
function reemplazarEnCadena(cadena) {
    cadena = cadena.replace(/ai/g, 'a');
    cadena = cadena.replace(/enter/g, 'e');
    cadena = cadena.replace(/imes/g, 'i');
    cadena = cadena.replace(/ober/g, 'o');
    cadena = cadena.replace(/ufat/g, 'u');
    return cadena;
}

function desencriptarTexto() {
    // Captura información del input
    let textoIngresado = document.getElementById('textoIngresado').value;

    // Realiza la desencriptación utilizando la función correcta
    let textoDesencriptado = reemplazarEnCadena(textoIngresado);

    // Mostrar el resultado en el elemento con id "Respuesta"
    document.querySelector(".section-right-a").innerText = textoDesencriptado;
    console.log(textoDesencriptado);  
}

// Asigna el evento click al botón correcto
document.querySelector('.section-left__button.desencriptar').addEventListener('click', desencriptarTexto);

