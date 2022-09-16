/*class Menu {
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
//}

/*function agregarProductos (){
  
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
*/

/*
** Giselle Vidal Labarca
** 15/9/2022
** Descripcion: Carrito de compras.
*/
//Declaro Objeto.
class Menu {
    constructor (id, nombre, precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }

}

//Declaro instancias del objeto.
const hamburguesaQueso = new Menu ("1", "Hamburguesa con queso" , 1000);
const hamburguesaDoble = new Menu ("2", "Hamburguesa doble" , 1500);
const hamburguesaBacon = new Menu ("3", "Hamburguesa bacon", 1600);

//Declaro variables.
let idMenu;
let total = 0;
let menuesElegidos = [];
let totalAMostrar = document.createElement("div");
let menuesAMostrar = document.createElement("h6");


//Genero constantes trayendo la info por id.
//Escucho el evento con el que interactua el usuario.
const hamburQueso = document.querySelector("#SuperHambQueso");
hamburQueso.addEventListener("click", () => {
    agregar(hamburguesaQueso);
  });
    



const hamburDoble = document.querySelector("#SuperHambDoble");
hamburDoble.addEventListener("click", () => {
    agregar(hamburguesaDoble);
  });

const hamburBacon = document.querySelector("#SuperHambBacon");
hamburBacon.addEventListener("click", () => {
    agregar(hamburguesaBacon);
  });


//Funcion que utilizan todos los menus de la web ya que comparten variables y objeto.
function agregar(hamburguesa){
    idMenu =  hamburguesa.nombre
    total += hamburguesa.precio;
    menuesElegidos.push(idMenu)
   totalAMostrar.innerHTML = `<h3>Total: $ ${total}</h3>`
   menuesAMostrar.innerHTML = menuesElegidos
   document.body.appendChild(totalAMostrar);
   document.body.appendChild(menuesAMostrar);
};

//Vuelvo al carrito desde 0.
const vaciarCarrito = document.querySelector("#vaciarCarrito");
vaciarCarrito.onclick = function () {
    total=0;
    menuesElegidos = [];
    totalAMostrar.innerHTML = `<h3>Total: $ ${total}</h3>`
    menuesAMostrar.innerHTML = 'No selecciono ningun menu.'
    document.body.appendChild(totalAMostrar);
    document.body.appendChild(menuesAMostrar);
    
  }

