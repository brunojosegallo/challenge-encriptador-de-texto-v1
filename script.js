
// DEFINO LAS VARIABLES QUE DESPUÉS VOY A EMPLEAR
var areaIngreso = document.querySelector(".ingresar_texto_a_encriptar");
var areaRespuesta= document.querySelector(".respuesta_texto_encriptado");
var botonCopiar = document.querySelector(".boton_copiar");
var respuestaTitulo = document.querySelector(".respuesta_titulo");
var respuestaInformacion = document.querySelector(".respuesta_informacion");

// MATRIZ CON LAS LLAVES DE ENCRIPTACIÓN
var arregloLlaves  =   [["e", "enter"],
                        ["i", "imes"],
                        ["a", "ai"],
                        ["o", "ober"],
                        ["u", "ufat"]
                    ]

// FUNCIÓN CORRESPONDIENTE AL CLICKEO DEL BOTÓN DE ENCRIPTAR
function clickBotonEncriptar(){
    // Primero se analiza si el texto es valido con la función validarTexto()
    // Si el texto es válido, se encripta
    // Si el texto no es válido, aparece un alert indicando lo sucedido y el campo de ingreso se limpia
    if (validarTexto(areaIngreso.value)){
        var textoEncriptado = encriptar(areaIngreso.value);
        areaRespuesta.value = textoEncriptado;
        areaRespuesta.style.backgroundImage = "none"; // Para que desaparezca la imagen cuando se hace click en el boton encriptar//
        areaIngreso.value = ""; //Para que desaparezca el texto en el area de ingreso cuando se hace clic en encriptar//
        respuestaTitulo.style.visibility = "hidden"; // Para que el elemento desaparezca //
        respuestaInformacion.style.visibility = "hidden"; // Para que el elemento desaparezca //
        botonCopiar.style.visibility = "visible"; // Para que el botón copiar aparezca, pasando visibility de hidden a visible//
    } else {
        areaIngreso.value = ""; // Se limpia la zona de ingreso de texto(podría dejarse el texto que no cumple los requisitos para corregirlo)
        areaRespuesta.value = ""; // se limpia el area de texto de respuesta
        areaRespuesta.style.backgroundImage = ""; // El elemento vuelve a aparecer
        respuestaTitulo.style.visibility = "visible"; // El elemento se observa como en su situación original
        respuestaInformacion.style.visibility = "visible"; // El elemento se observa como en su situación original
        botonCopiar.style.visibility = "hidden" // El elemento desaparece 
    }
}

// FUNCIÓN QUE REALIZA EL PROCESO DE ENCRIPTACIÓN
// Se va a emplear en la función de clickBotonEncriptar()
function encriptar(textoAEncriptar){
    textoAEncriptar = textoAEncriptar.toLowerCase()
    for (let i = 0; i < arregloLlaves.length; i++) {
        if (textoAEncriptar.includes(arregloLlaves[i][0])) {
            textoAEncriptar = textoAEncriptar.replaceAll(arregloLlaves[i][0], arregloLlaves[i][1])
        }   
    }
    return textoAEncriptar
}


// FUNCIÓN CORRESPONDIENTE AL CLICKEO DEL BOTÓN DE DESENCRIPTAR
function clickBotonDesencriptar(){
    // Primero se analiza si el texto es valido con la función validarTexto()
    // Si el texto es válido, se desencripta
    // Si el texto no es válido, aparece un alert indicando lo sucedido y el campo de ingreso se limpia
    if (validarTexto(areaIngreso.value)) {
        var textoDesencriptado = desencriptar(areaIngreso.value);
        areaIngreso.value = ""; //Para que desaparezca el texto en el area de ingreso cuando se hace clic en desencriptar//
        areaRespuesta.value = textoDesencriptado;
        areaRespuesta.style.backgroundImage = "none"; // Para que desaparezca la imagen cuando se hace click en el boton desencriptar//
        respuestaTitulo.style.visibility = "hidden"; // Para que el elemento desaparezca //
        respuestaInformacion.style.visibility = "hidden"; // Para que el elemento desaparezca //
        botonCopiar.style.visibility = "visible"; // Para que el botón copiar aparezca, pasando visibility de hidden a visible//

    } else {
        areaIngreso.value ="";
        areaRespuesta.value = "";
        areaRespuesta.style.backgroundImage = "";
        respuestaTitulo.style.visibility = "visible";
        respuestaInformacion.style.visibility = "visible";
        botonCopiar.style.visibility = "hidden";        
    }

}

// FUNCIÓN QUE REALIZA EL PROCESO DE DESEENCRIPTACIÓN
// Se va a emplear en la función de clickBotonDesencriptar()
function desencriptar(textoADesencriptar){
    textoADesencriptar = textoADesencriptar.toLowerCase()
    for (let i = 0; i < arregloLlaves.length; i++) {
        if (textoADesencriptar.includes(arregloLlaves[i][1])) {
            textoADesencriptar = textoADesencriptar.replaceAll(arregloLlaves[i][1], arregloLlaves[i][0])
        }   
    }
    return textoADesencriptar
}

// FUNCIÓN PARA VALIDAR EL TEXTO QUE SE INGRESA (NO DEBE CONTENER ACENTOS NI CARÁCTERES ESPECIALES)
// Se va a emplear en las funciones clickBotonEncriptar() y clickBotonDesencriptar()
function validarTexto(textoAValidar) {
    const regExpValidar = /^[\w\s]+$/;
    if (!regExpValidar.test(textoAValidar)) {
        alert("Texto no permitido. No puede tener carácteres especiales ni acentos")
        return false
    }
    return true
}


// FUNCIÓN DEL BOTÓN COPIAR
// Copia el texto que aparece en el cuadro de respuesta
function copiar(){
    const textoEncriptado = areaRespuesta.value;
    navigator.clipboard.writeText(textoEncriptado).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

