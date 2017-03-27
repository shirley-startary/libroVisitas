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

  //agregando el limpiar imagen en la visualizacion del formato texto.
  document.getElementById("imagenNota").src="";
  //oculta la x de la imagen al momento de limpiar.
  //document.getElementById("imagenNota").addAttribute("hidden");

}

function agregarImagen(){
  var agregarURLImagen=prompt("Ingrese la URL de la Imagen");
  //nota: crear un elemento img y pasarle la url al src
  document.getElementById("imagenNota").src=agregarURLImagen;
  document.getElementById("imagenNota").removeAttribute("hidden");

}

function enviar(){

  var textoCopia = document.getElementById("visita").cloneNode(true);
  console.log(textoCopia);
  //var textoCopia = document.getElementById("text").cloneNode(true);

  //en la sgte linea renombramos la nota, y resolver el error que nos re-escribia la primer nota.
  textoCopia.id = "nota"+contadorNota;

  //textoCopia.value="value"+contadorNota;
  //document.getElementsByTagName("nota"+contadorNota)["text"]="hola";


  var contenedor = document.getElementById("contenedorNuevosArticulos");
  //textoCopia.innerText = document.getElementById("text").innerText;
  contenedor.appendChild(textoCopia);
  // contenedor.appendChild(document.createElement("hr"));
  console.log(textoCopia.innerText);
  var contadorDeElemento = document.getElementById("nota"+contadorNota).children.length;

  for(var i=0;i<contadorDeElemento;i++){
    //en la siguiente linea, lo que hacemos es renombrar cada nota, y cada uno de sus hijos.
   document.getElementById("nota"+contadorNota).children[i].id=document.getElementById("nota"+contadorNota).children[i].id+contadorNota;
  }

  document.getElementById("botonEliminar"+contadorNota).removeAttribute("hidden");
  document.getElementById("imagenNota"+contadorNota).removeAttribute("hidden");
  document.getElementById("lineaSeparadora"+contadorNota).removeAttribute("hidden");
  document.getElementById("botonEliminar"+contadorNota).value=contadorNota;

  contadorNota++;
  agregarLista();
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

function eliminarNota(value){
  var  cantidadNotas = document.getElementById("contenedorNuevosArticulos").children.length;
  console.log(cantidadNotas);
  for (var i=0;i<cantidadNotas;i++){
    var nombreNota = document.getElementById("contenedorNuevosArticulos").children[i].id;
    console.log(nombreNota);
    //var aBorrar = document.getElementById("contenedorNuevosArticulos").children[i]
    //console.log(aBorrar);

    if(nombreNota=="nota"+value){
      /*si el nombre coincide, entonces eliminamos el elemento e igualamos "i" con "cantidadNotas" para que salga del ciclo
      y ya no entre al for*/
      document.getElementById("contenedorNuevosArticulos").removeChild(contenedorNuevosArticulos.children[i]);
      i=cantidadNotas;
    }
  }
}

function agregarLista(){
  var elementolistaVisita=document.createElement("li");
  elementolistaVisita.innerHTML=document.getElementById("text").innerHTML;
  document.getElementById("listaDeVisitas").appendChild(elementolistaVisita);
  console.log(elementolistaVisita);
  document.getElementById("divConScroll").removeAttribute("hidden");
}
