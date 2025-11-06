
let boleto = 15 //Inicializamos la variable boleto

while(boleto > 0) //Inicializamos el ciclo while
{
    let edad = prompt("Ingrese la edad del comprador") //Solicitamos la edad del comprador
    let pg = prompt("La pelicula es para mayores de edad? (si/no)") //Soliciramos el rango de edad de la pelicula

    if ((edad >= 18 && pg == "si") || (pg == "no")) //Condicional
    {
        boleto -= 1 //Restamos 1 boleto
        alert("Boleto vendido \nBoletos restantes: "+boleto) //Imprimimos el mensaje
    }
    else{
        alert("Se rechazo la venta") //Mensaje en caso de error
    }
}