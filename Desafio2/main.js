let hamburguesa;
let hamburguesaQueso = 1000;
let hamburguesaDoble = 1500;
let hamburguesaBacon = 1600;
let total = 0;
let nombre = prompt("Ingrese su nombre")



function bienvenida (){
    alert (`Hola ${nombre} a continuacion elegi tu hamburguesa`)
}

bienvenida()

function elegiHamburguesa (){
    hamburguesa = prompt(`Elija una opcion:
    1: Hamburguesa con queso
    2: Hamburguesa doble
    3: Hamburguesa bacon
`)
if (hamburguesa === "1") {
    alert("Elegiste hamburguesa con queso")
    total += hamburguesaQueso
}else if (hamburguesa === "2"){
    alert("Elegiste hamburguesa doble")
    total += hamburguesaDoble
}else if(hamburguesa === "3"){
    alert("Elegiste hamburguesa bacon")
    total += hamburguesaBacon
}
opcion = prompt(`Vuelve a ingresar una opcion: 
2: agregar mas productos
3: finalizar compra
`)

}



function agregarProductos (){
  
    while(opcion == 2){
        elegiHamburguesa()
    }
     
    finalizarCompra()
}
    

function finalizarCompra (){
        if(opcion == 3){
            alert ("Tenes que abonar" + " " + total)
        }
    }

elegiHamburguesa()
agregarProductos ()








