let corredores = 8; //Iniciamos la variable corredores y numero de vueltas 
let numero_vueltas = 4;

for (let i = 0; i < corredores; i++) //Iniciamos ciclo for que contara hasta el numero de corredores
{
    for(let x = 0; x < numero_vueltas; x++)//Iniciamos ciclo for que contara hasta el numero de vueltas
    {
        let eleccion = prompt("El corredor "+(i+1)+" se canso? (si/no)") //Solicitamos el ingreso de seleccion
        if (eleccion == "si") //Si eleccion es igual a "si"
        {
            alert("El corredor "+(i+1)+" se retira de la competencia") //Imprimir el numero del corredor que se retiro
            break;//Romper el ciclo for
        }
    }
}