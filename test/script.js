const PI= 3.1416
var a = 1;
var b = "TRES"
var c= a + b 

function mostrarMensaje(){
    alert(`ACABAS DE RPESIONAR EL BOTON ${c} `);
}

let contador = 0;

const contarClick= () =>{
    contador = contador +1
    document.getElementById('spnContador').innerHTML = contador

}