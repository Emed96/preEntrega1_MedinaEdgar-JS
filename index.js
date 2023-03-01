class Producto{
    constructor(nom, descrip, precio, stock){
        this.nom = nom;
        this.descrip = descrip;
        this.precio = precio;
        this.stock = stock;
    }

    addStock(cantidad){
        this.stock += cantidad;
    }

    comprados(cantidad){
        this.stock -= cantidad;
    }

    
}

let p = [
    termo = new Producto("Termo", "Termo para bebidas frias o calientes", 195.00, 100),
    vasoFiesta = new Producto("Vaso Fiesta", "Vaso con tapa de chupon para fiestas", 50.00, 100),
    vasoCafetero = new Producto("Vaso Cafe", "Vaso para cafe", 120.00, 100),
    cajaRegalo = new Producto("Caja Regalo", "Caja con tapa personalizada", 250.00, 150)
];
let opcion;
let termino;

function Comprar(){

}

const consulta = () => {
    let txt = "";
            
    p.forEach(prod => {
        txt += `Nombre: ${prod.nom}\nPrecio: ${prod.precio}\nStock: ${prod.stock}\n\n`;
    });

    return txt;
}

const menu = (opcion) => {
    console.log(`Estoy en el menu: ${opcion}`);

    switch (opcion) {
        case 1: //Ver productos
            alert(consulta());
            
            break;
        
        case 2: //Comprar productos

            break;

        case 3: //Añadir al stock

            break;

        default:
            alert("Ingrese una opcion correcta (1, 2, 3, 4)");
            break;
    }

    return true;
};

do {
    opcion = parseInt(prompt(`Que desea hacer?
    1 - Ver productos
    2 - Comprar productos
    3 - Añadir productos al stock
    4 - Salir`));
    
    termino = opcion != 4 ? menu(opcion) : false;

} while (termino);

alert("Adios");