for (let i = 0; i < 5; i++) //Creamos el ciclo for para contar hasta 5
{
    let nombre = prompt("Ingrese el nombre:") //Solicitamos el nombre y la edad
    let edad = prompt("Ingresa la edad de: "+nombre)

    if (edad >= 18) //Condicional para determinar quien es mayor de edad
    {
        alert("Nombre: "+ nombre+" \nEdad: "+edad) //Imprimimos el nombre y la edad en caso de cumplir la condicion
    }
}