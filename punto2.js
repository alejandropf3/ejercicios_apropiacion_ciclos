
for (let i = 0; i < 5; i++) //Inicio un bucle que contara de 0 hasta el 5
{
    let eleccion = prompt("El niño ["+(i+1)+"] trae carnet? (si/no)") //Solicitamos el ingreso de una eleccion
    if (eleccion == "si") //Condicional en caso de que eleccion sea "si"
    {
        alert("El niño cuenta con carnet, puede ingresar") //Imprimir mensaje 
    }
    else{ //En caso contrario
        alert("El niño no cuenta con carnet, no puede ingresar")
    }
}