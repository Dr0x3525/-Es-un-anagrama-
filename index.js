//funcion que va a recibir los datos
function recibirDosDatos() {
    let dato1 = Dato1();
    let dato2 = Dato2();

    if (comprobarDatosDiferente(dato1, dato2)) {
        console.log(dato1 + " " + dato2);
        let array1 = stringToArray(dato1);
        let array2 = stringToArray(dato2);

        if (compararArrays(array1, array2)) {
            console.log("Los dos arrays son iguales");
        } else {
            console.log("Los dos arrays no son iguales");
        }
    }


}

function Dato1() {
    let dato1 = "HoLa";
    return dato1.toUpperCase();
}

function Dato2() {
    let dato2 = "aloH";
    return dato2.toUpperCase();
}

//comprobar los datos no sean iguales 

function comprobarDatosDiferente(Dato1, Dato2) {
    if (Dato1 != Dato2) {
        return true;
    } else {
        return false;
    }
    
}

//funcion pasar de string a array

function stringToArray(string) {
    //el filter es para eliminar los espacios
    let array = string.split("").filter(letra => letra !== " ");
    return array;
}


//funcion para comparar los dos arrays

function compararArrays(array1, array2) {
    let contadorLetras = 0;

    if (array1.length === array2.length) {
        for (let i = 0; i < array1.length; i++) {
            for (let j = 0; j < array2.length; j++) {                        
                if (array1[i] === array2[j]) {
                    contadorLetras++;
                    if (contadorLetras === array1.length) {
                        return true;
                    }
                }
            }
        }
    }
    
    return false;

}


//funcion inicializar programa

function InicializarPrograma() {
    recibirDosDatos();
}

InicializarPrograma();