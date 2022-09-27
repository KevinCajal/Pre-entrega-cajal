
// VARIABLES DE PRODUCTOS
let productoA = "Rimel"
let productoB = "Labial"
let productoC = "Mascara de pestañas"
let productoD = "Delineador" 
//PRECIO
let valorProductoA = 1500
let valorProductoB = 1200
let valorProductoC = 1100
let valorProductoD = 1350
//TOTAL
let totalProductoA = 0
let totalProductoB = 0
let totalProductoC = 0
let totalProductoD = 0


alert("Bienvenido a Mica Bordon Make Up")

    let compra = prompt("Escriba el Número Correspondiente al producto que desea Comprar \n 1- Rimel\n 2- Labial\n 3- Mascara de pestañas\n 4- Delineador\n 5- Escriba ESC para finalizar la compra")

while (compra != "ESC"){

    if(compra == 1){
        let cantidadProductoA = prompt("seleccione cantidad de " + productoA + " que desea comprar")
        totalProductoA = totalProductoA+ (cantidadProductoA * valorProductoA)
    }
    
    
    else if(compra == 2){
        let cantidadProductoB = prompt("seleccione cantidad de " + productoB + " que desea comprar")
        totalProductoB = totalProductoB + (cantidadProductoB * valorProductoB)
    }

    else if(compra == 3){
        let cantidadProductoC = prompt("seleccione cantidad de " + productoC + " que desea comprar")
        totalProductoC = totalProductoC + (cantidadProductoC * valorProductoC)
    }

    else if(compra == 4){
        let cantidadProductoD = prompt("seleccione cantidad de " + productoD + " que desea comprar")
        totalProductoD = totalProductoD +  (cantidadProductoD * valorProductoD)
    }

    compra = prompt("Escriba el Número Correspondiente del producto que desea Comprar \n 1- Rimel\n 2- Labial\n 3- Mascara de pestañas\n 4- Delineador\n 5- Escriba ESC para finalizar la compra")
}

let precioTotal = (totalProductoA + totalProductoB + totalProductoC + totalProductoD)

if (precioTotal != 0){
    alert("El precio total de su Compra es: " + precioTotal)
}

    alert("Gracias por su visita")