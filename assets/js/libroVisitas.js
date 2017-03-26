var contadorNota=1
function obtenerTextPreview(){
  var area = document.getElementById("textoArea").value;
  var mostrarTexto = document.getElementById("text");
  mostrarTexto.innerHTML = area;
  var textoPreview = mostrarTexto.innerHTML;
  return textoPreview;
}
function limpiar(){
  document.getElementById("textoArea").value="";
  document.getElementById("text").innerText="";
  console.log("text");
  document.getElementById("text").removeAttribute("style");
}

function agregarImagen(){
  var agregarURLImagen=prompt("Ingrese la URL de la Imagen");
  //nota: crear un elemento img y pasarle la url al src

}
function agregarHr(){

}

function enviar(){

  var textoCopia = document.getElementById("text").cloneNode(true);
  textoCopia.id = "nota"+contadorNota;
  contadorNota++;
  console.log(textoCopia);
  var contenedor = document.getElementById("contenedorNuevosArticulos");
  textoCopia.innerText = document.getElementById("text").innerText;
  contenedor.appendChild(textoCopia);
  contenedor.appendChild(document.createElement("hr"));
  console.log(textoCopia.innerText);
  limpiar();
}

function textoGrande(){
  document.getElementById("text").style.fontSize = "40px";
}

function textoMediano(){
  document.getElementById("text").style.fontSize = "30px";
}

function textoChico(){
  document.getElementById("text").style.fontSize = "10px";
}

function colorTexto(){
  var color=prompt("Ingresar el color del texto en hexadecimal");
  console.log(color);
  document.getElementById("text").style.color = color;
}

function colorFondo(){
  var color=prompt("ingrese el color del fondo");
  document.getElementById("text").style.background = color;
}

function alinearIzquierda(){
  document.getElementById("text").style.textAlign ="left";
}

function alinearCentro(){
  document.getElementById("text").style.textAlign ="center";
}

function alinearDerecha(){
  document.getElementById("text").style.textAlign ="right";
}
