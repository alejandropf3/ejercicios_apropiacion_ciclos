let suma = 0; //Inicializamos la variable suma

for (let i = 0; i < 100; i++) //Iniciamos el ciclo for que contara hasta 100
{
    if (suma % 2 == 0 && suma > 90) //Creamos condicional que determinara que numero es mayor que 90 y sea numero par
    {
        alert("El numero: "+suma+" es mayor que noventa y es par") //Mensaje en caso de cumplir la condicion
        break //Romper el ciclo for
    }
    else{ //de lo contrario
        suma +=1 //Incrementar suma
    }
}