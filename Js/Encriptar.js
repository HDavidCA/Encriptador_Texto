function encriptarTexto(){
    //array caracteres prohibidos
    let mayusculas = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
                      'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    // captura informacion del input
    let textoIngresado = document.getElementById('textoIngresado').value;
    //convierte informacion en un arreglo
    let convertirArreglo = Array.from(textoIngresado);
    console.log(convertirArreglo);
    //verifica que no existan Mayusculas
    for(let j = 0; j < convertirArreglo.length; j++){
        if(mayusculas.includes(convertirArreglo[j])){
            console.log('No se permiten mayúsculas');
            return; // si cumple retorna informacion
        }
    }
    //reemplaza valores dentro del arreglo
    for(let i=0; i < convertirArreglo.length; i++){
        if(convertirArreglo[i] =='a'){
            convertirArreglo[i] ='ai';
        }else if(convertirArreglo[i] =='e'){
            convertirArreglo[i] ='enter';
        }else if(convertirArreglo[i] =='i'){
            convertirArreglo[i] ='imes';
        }else if(convertirArreglo[i] =='o'){
            convertirArreglo[i] ='ober';
        }else if(convertirArreglo[i] =='u'){
            convertirArreglo[i] ='ufat';
        }else{}  
            
    }
    //convertir Arreglo en cadena 
    let convertirACadena = convertirArreglo.join('');

    //Mostrar resultado
    document.querySelector(".section-right-a").innerText = convertirACadena;
    console.log(convertirACadena);   
}
      


