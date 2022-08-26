let numero1= Number(prompt("Ingrese un numero por el cual desee multiplicar"))

var numero2 = Number(prompt("Ingrese un numero menor a 15"))
while(numero2 >=15){
    numero2 = Number(prompt("Ingrese un numero menor a 15"))
}

for (let i= 1; i <= numero2; i++){
    if(numero1 === 0){
        alert('Todo numero multiplicado por 0 es igual a 0')
        break;
    }
    let resultado = numero1 * i
    mostrarResultado = numero1 +'*'+ i + '=' + resultado
    alert (mostrarResultado)
}