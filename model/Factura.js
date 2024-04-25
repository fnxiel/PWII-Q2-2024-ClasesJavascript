class Factura{
    //
    rtn
    monto
    fecha
    cai
    arregloProductos

    agregarProducto(producto){
        this.arregloProductos.push(producto)
    }
}

class Producto{
    nombre
    id
    precio
    stock
    
}

const factura = new Factura()

const producto1 = new Producto()
producto1.precio = 10
factura.agregarProducto(producto1)
