const marca = prompt("¿De cual de estas marcas queres saber? Honda, Yamaha, KTM, Suzuki")
const tipo = prompt('¿Y de que tipo?: Enduro o Competicion').toLowerCase();



if (tipo == "enduro" && marca == "KTM") {
  alert("KTM 300 EXC TPI: Considerada la reina en categorías de 2 tiempos, es famosa por su potencia, agilidad y excelente rendimiento en terrenos técnicos y duros.");
} else if (tipo === "enduro" && marca === "Honda") {
  alert("Honda CRF450RX: Es uno de los modelos más potentes y especializados para enduro, diseñado para competencia y terrenos exigentes, con un potente motor 450cc 4 tiempos y suspensión de alta calidad.");
} else if (tipo === "competicion" && marca === "KTM") {
  alert("KTM RC 8C: Una superbike de alto rendimiento desarrollada en colaboración con técnicas de MotoGP, con tecnología avanzada, motor potente y un peso reducido, destinada a la competición en circuitos.");
} else if (tipo === "competicion" && marca === "Honda") {
  alert("Honda CBR1000RR-R Fireblade SP. Aunque es principalmente una moto de calle de altas prestaciones, también se utiliza en competiciones de superbike y carreras en circuito debido a su rendimiento avanzado, tecnología de MotoGP y excelente manejo.");
} else {
  alert("Datos no válidos o marca no reconocida.");
}



function bienvenida(nombre) {
    console.log("Hola " + nombre , "esta es una pagina dedicada a Motos")
}
bienvenida("Jesus")



