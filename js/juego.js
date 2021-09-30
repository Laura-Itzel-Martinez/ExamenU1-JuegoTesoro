//Definir el ancho y largo de la imagen mediante con constantes
const WIDTH=400;
const HEIGH=400;

//generar el mapa del tesoro
let target = {
    //con los parametros x y y van a obtenr los numeros aleatorios con el ancho y largo del imagen
    x: getRandomNumeros(WIDTH),
    y: getRandomNumeros(HEIGH)
};
//muestra en donde se encuentra en tesoro mediante consola
console.log(target);

//obtener en donde hace clic el usuario
//la referencia va hacer mediante la imagen
//se guarda en la variable $map y hace referencia a un elemento de html
let $map = document.getElementById('map');

//lo guardareos en una valriable en la cual esta refernecia en una eqitueta de html
let $distance = document.getElementById('distance');

//obtenido lo click van a ir incrementado 
let clicks = 0;


// se agrega un escuchador para el evento clic
//es cuando el usuario haga clic se va realizar algo
$map.addEventListener ('click', function (e){

    //un contador de clicks que va incremetando
    clicks++

//obtener la coordena del usuario
//en la variable de distance se utilizara la funcion en donde se realizo el teorema de pitagora
    let distance = getDistancia(e,target);

    //se mostrara los datos es decir la distancia en donde se encuentra en usuario
    console.log(distance);

    //esto nos volvera las palabra que se encuentra frio o caliente 
    //lo guardaremos en una variable 
    let distanceHint = getDistanceHint(distance);

    //es para mostrar en consola
    //console.log(distanceHint )

    //la etiqueta colacaremos el string que nos esta devolviendo
    $distance.innerHTML = `<h1>${distanceHint}</h1>`;

    //si la distancia es menor a 20 esta bastante cerca

    if (distance < 20) {
        alert(`Haz encontrado el tesoro :D en ${clicks} clicks!`);

        //refrescar la pagina con javascript
        location.reload();
        
    } else {
        
    }
});