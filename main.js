//alert("clase 3 java script")  esta alerta la pone haber si main.js esta linkeado
// bucle infinito => es la condicion, no queremos bucles infinitos
// contador = variable qu s inicializara  intras la vaariabl dvueltas sea menor a 5
// el dvueltas = dvueltas +1 es igual al iterador .. dvueltas++ , hace lo mismo.
// el 0 tambien cuenta, para en este caso.
// for (let dvuelta = 0; dvuelta < 5; dvuelta++) {
//     console.log(dvuelta, "dvuelta")
// }

// sumas los primeros 10 numero naturales , utilizando el ciclo for que acabamo de aprender.
let sumatotal=0
for (let resultado = 0; resultado <= 10; resultado++) {
    sumatotal = sumatotal + resultado
    console.log(resultado, "resultado", sumatotal, "suma total")
}
// imprimir los pares del 1 al 20

// imprimir los pares del 1 al 20, este el primero se m ciclo por un ;
for (let NumPares = 0; NumPares <20;) {
    
    NumPares = NumPares + 2
    console.log (NumPares, "Solo Pares")
}

// // imprimir los pares del 1 al 20
for (let NumPares = 1; NumPares <=20; NumPares++) {
    // cuando el residulo divivido entre 2 , da 0 , imprime el pr
    if (NumPares % 2 === 0) {
        console.log (NumPares, "Solo Pares")
    }
}
const tabla= prompt("dame un numero al azar")

for (let Vueltas = 1; Vueltas <=10; Vueltas++) {
    Resultado = tabla * Vueltas;
    console.log(Tabla + "X" + Vuelta + "=" + Resultado)
    /*** */
    console.log('${tabla} X ${I} =  ${resultado}')
    // cuando el residulo divivido entre 2 , da 0 , imprime el pr
}

// Metodos de String, que es !! objeto padre en el lenguaje

const saludo = "hola"

console.log(saludo.includes("z")) // metodo 
console.log(saludo.length)


const habla= prompt("dame un expresion")

vueltas = console.log(habla.length)

for (let cuenta=1; Cuenta <= Vueltas; cuenta++) {
     console.log("dando vuelta" + cuenta);
}


// const habla = prompt("dame un expresion")

// for (let cuenta=0; cuenta < habla.length; cuenta++) {
//     console.log(habla[cuenta] + "posicion" + cuenta);
//     const curre
// }

// /*como invertir un cadena de TextDecoder*/
