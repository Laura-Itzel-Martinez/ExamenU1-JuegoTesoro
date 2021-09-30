
//Esta funcion se encarga de generar numeros aleatorios
//Esta funcion fue creada a la vesion 6 de javacript
//Es una funcion de parametro flecha

let getRandomNumeros = size =>{

    //retorna math es una biblioteca global matematica
    //genera un numero aleatorio el floor convierte un numero decimal el entero
    //Math.floor es una funcion
    return Math.floor(Math.random() * size  ); 

}

//Creamos un funcion para obtener la distancia de 2 puntos
//la funcion obtendra 2 puntos que son en punto donde da clic el usuario es decir un evento
//el otro es donde se encuentra el mapa del tesoro el objetivo llamado target
let getDistancia = (e, target)  =>{

//vamos a tener la diferencia de las x, obtener la distancia en donde esta el click del ususrio
//esto es lado de las ejes x, se ubicara en tarjet de las ejes de las x
    let diffX = e.offsetX - target.x;

// se realizo lo mismo con el anterior como las ejes de x
//esta parte es con las ejes de y
    let diffY = e.offsetY - target.y

//Realizaremos el teorema de pitagoras
//Es para obtener la distancia de los 2 puntos
    return Math.sqrt((diffX * diffX)+ (diffY + diffY));

}

//Esta funcion es obtener las pistas que tan lejos o cerca esta del tesoro
//mediante un palabra si esta frio o caliente
//el parametro es la distancia de que ta lejos se encuenta
//la distancia lo tenemos a la funcion del teorema
let getDistanceHint = distance=>{
    
    //si la distancia es menor a 30 es decir, que esta muy cerca del mapa del tesoro
    if (distance < 30) {
        return "Hirviendo" //esta hirviento esta muy cerca

        //si la distancia es menor a 40 esta cerca
    }else if (distance < 40) {
        return "Muy caliente"

         //si la distancia es menor a 40 esta cerca
    } else if(distance < 60) {
        return "Caliente"

        //si la distancia es menor a 100 es caliente
    }else if(distance < 100){
        return "Calido"

    //si la distancia es menor a 180
    }else if(distance < 180){
        return "frio"

    //si la distancia es menor a 360 esta demasiado frio
    }else if(distance<360){
        return "realmente frio"

    }else {
        return "Congelado"
    }
}