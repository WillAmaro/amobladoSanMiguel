

  const imagenDeSlider = document.querySelectorAll("#slider img");
  let index = 0;

  function siguienteImagen() {
    // posicion index = 0
    // posicionIndex0.obtengaClase.remueva("active")

    //estilo css

    // slider img {
    //opacity : 0;
    //}

    // slider img.active{

    // opacity : 1;
    // }

    //<img src="https://picsum.photos/id/1000/1920/1080" class="active">

    // let index = 0

    // imagen de la cruz
    // index = 0

    //

    imagenDeSlider[index].classList.remove("active");
    // index en el que estamos = 0
    index = (index + 1) % imagenDeSlider.length;
    //(0+1)%3  = 1%3 = 1

    //     index = 1

    // ya tengo cogida la siguiente imagen ( index 1 ) posicon 2
    //ya tengo la imagen del papa.clasee("activa")

    //siguiente linea de codigo

    //agarrar la imagen seleccionada
    //imagenDeSlider[index] = imagneDeSlider[1] = foto del papa con su hijo
    //.add agrega ( agrega la clase "activa")

    //opacidad = 1

    //se va a mostrar la imagen

    imagenDeSlider[index].classList.add("active");
  }

  function anteriorImagen() {
    //
    //imagen primera primera imagen
    //index 0
    //remueve la clase "activa"

    imagenDeSlider[index].classList.remove("active");

    //despues de realizar esta operacion si estamos en la posicion index 0 osea la primera
    //imagen
    //index = (0-1+3) % 3 = 2%3 = 2
    index = (index - 1 + imagenDeSlider.length) % imagenDeSlider.length;
    //resultado de index = 2

    //1era imagen index 0
    //2da img index 1
    //3era img index 2
    // estando en la ultima imagen
    imagenDeSlider[index].classList.add("active");

    // imagenDeSlider[2] = 3era imagen = 3eraImagen.Clase.Agregar("active")
}

setInterval(siguienteImagen, 5000); 


const fulImgBox = document.getElementById("fulImgBox");
const fulImg = document.getElementById("fulImg");

function closeImg(){

  fulImgBox.style.display = "none";
}


function openFulImg(reference){

  fulImgBox.style.display = "flex";
  fulImg.src = reference;
}


