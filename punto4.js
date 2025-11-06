let saldo = prompt("Ingrese el dinero disponible en el cajero:") //Solicitamos el valor del saldo del cajero
while(saldo > 0) //utilizamos ciclo while (si saldo es mayor que 0)
{
    let dinero = prompt("Ingrese la cantidad de dinero a retirar:") //Solicitamos el dinero a retirar
    if (dinero <= saldo) //Si dinero es menor o igual a al saldo
    {
        saldo -= dinero //Restamos el valor de dinero al saldo
        alert("Se retiro: $"+dinero+" \nDinero restante: $"+saldo) //Imprimimos un mensaje de confirmacion
    }
    else{ //De lo contrario
        alert("No es posible retirar esta cantidad de dniero") //Imprimir un mensaje de error
    }
}