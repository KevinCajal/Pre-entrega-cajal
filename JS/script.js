// Creo la funcion con los productos que tengo para ofrecer al cliente
function Producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock || 0;
    this.restarStock = function(cantidad){
        this.stock -= cantidad
    }
    this.sumarStock = function(cantidad){
        this.stock += cantidad
    }
}

let productoA = new Producto("Rimel", 1500, 5)
let productoB = new Producto("Labial", 200, 25)
let productoC = new Producto("Perfilador", 1050, 3)
let productoD = new Producto("Delineador", 1300, 15)
let productoE = new Producto("Sombra", 1100, 8)

//Creo el Array 
let listaProductos = [productoA, productoB, productoC, productoD, productoE]

let listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0)

let listaNombres = listaProductosConStock.map((prod) => prod.nombre)

let precioTotal = 0

//Bienvenida

alert("Bienvenido a Mica Bordon Make Up. Por el momento contamos con estos productos: \n - " + listaNombres.join("\n - "))

function calculoPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)
}

function calculoStock(cantidad, stock, precio){
    if(cantidad <= stock){
        calculoPrecio(cantidad, precio)
    }
    else{
        alert("Actualmente tenemos " + stock + " unidades de este producto")
    }
}

let cantidadCompra = parseInt(prompt("Ya vio nuestros productos, ahora que cantidad de productos distintos quiere comprar:"))

for(let i = 0; i < cantidadCompra; i = i + 1){

    let productoCompra = prompt("Ingrese que producto quiere comprar: \n - Rimel\n - Labial\n - Perfilador\n - Delineador\n - Sombra")
    
    if(productoCompra.toUpperCase() == 'RIMEL'){
        let cantidadProductoRimel = prompt("ingrese que cantidad de " + productoA.nombre + " desea comprar:")
        calculoStock(cantidadProductoRimel, productoA.stock, productoA.precio)
        productoA.restarStock(cantidadProductoRimel)
    }
    else if(productoCompra.toUpperCase() == 'LABIAL'){
        let cantidadProductoLabial = prompt("ingrese que cantidad de " + productoB.nombre + " desea comprar:")
        calculoStock(cantidadProductoLabial, productoB.stock, productoB.precio)
        productoB.restarStock(cantidadProductoLabial)
    }
    else if(productoCompra.toUpperCase() == 'PERFILADOR'){
        let cantidadProductoPerfilador = prompt("ingrese que cantidad de " + productoC.nombre + " desea comprar:")
        calculoStock(cantidadProductoPerfilador, productoC.stock, productoC.precio)
        productoC.restarStock(cantidadProductoPerfilador)
    }
    else if(productoCompra.toUpperCase() == 'DELINEADOR'){
        let cantidadProductoDelineador = prompt("ingrese que cantidad de " + productoD.nombre + " desea comprar:")
        calculoStock(cantidadProductoDelineador, productoD.stock, productoD.precio)
        productoD.restarStock(cantidadProductoDelineador)
    }
    else if(productoCompra.toUpperCase() == 'SOMBRA'){
        let cantidadProductoSombra = prompt("ingrese que cantidad de " + productoE.nombre + " desea comprar:")
        calculoStock(cantidadProductoSombra, productoE.stock, productoE.precio)
        productoE.restarStock(cantidadProductoSombra)
    }
    else{
        alert("No tenemos ese producto a la venta")
    }
}
if(precioTotal != 0){
    alert("El precio por el momento es: $" + precioTotal + ". Gracias por su visita")
}
