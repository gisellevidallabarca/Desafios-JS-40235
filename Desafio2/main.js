class Menu {
    constructor (id, nombre, precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }

}

const hamburguesaQueso = new Menu ("1", "Hamburguesa con queso" , 1000);
const hamburguesaDoble = new Menu ("2", "Hamburguesa doble" , 1500);
const hamburguesaBacon = new Menu ("3", "Hamburguesa bacon", 1600);

let idMenu;
let total = 0;
let nombre = prompt("Ingrese su nombre")


function bienvenida (){
    alert (`Hola ${nombre} a continuacion elegi tu hamburguesa`)
}

bienvenida()

const menues = [hamburguesaQueso, hamburguesaDoble, hamburguesaBacon];

const menuesElegidos = []

function elegiHamburguesa (){
    idMenu = prompt('Elija una opcion:' + `\n` +
    hamburguesaQueso.id + " " + hamburguesaQueso.nombre + '\n' +
    hamburguesaDoble.id + " " + hamburguesaDoble.nombre + '\n' +
    hamburguesaBacon.id + " " + hamburguesaBacon.nombre  
    )
 
    cargarHamburguesa();    
 
opcion = prompt(`Vuelve a ingresar una opcion: 
2: agregar mas productos
3: finalizar compra
`)
}


function cargarHamburguesa(){
    const menuBuscado = menues.find(menu => menu.id === idMenu)
    total += menuBuscado.precio;
    menuesElegidos.push(menuBuscado.nombre)
    alert("Elegiste" +" " + menuBuscado.nombre)
    /*for(let menu of menues){
        if (idMenu === menu.id){
            alert("Elegiste" +" " + menu.nombre)
            total += menu.precio
            menuesElegidos.push(menu.nombre)
        }
    } */  
}

function agregarProductos (){
  
    while(opcion == 2){
        elegiHamburguesa()
    }
     
    finalizarCompra()
}
    

function finalizarCompra (){
        if(opcion == 3){
            alert("Usted compro:" + " " + menuesElegidos.join(", ") +'\n' +
            'Debera abonar:' + " " + "$" + total)
           // alert ("Tiene que abonar" + " " + total)
        }
    }

elegiHamburguesa()
agregarProductos ()








