
//Creamos una constante llamda  "menuHamburger" que representa al icono de menu ( class="menu-hamburger" )

const menuHamburger = document.querySelector(".menu-hamburger");

// Alamacenar en la variable navLinks a el elemento html que tenga la clase "nav-links"

//HOME - CONTACT SERVICES SOCIAL INFO

const navLinks = document.querySelector(".nav-links");

//Almacenar en la variablo logo a el elemento html que tenga la clase "logo"

const logo = document.querySelector(".logo");

//Creamos el evento utilizando "addEventListener"

//La funcion se activara al momento de dar "click" en el icono del menu

menuHamburger.addEventListener("click", () => {
  //CODIGO PARA CUMPLIR LA FUNCION

  //La funcion togle se encarga de agregar o remover clases a un elemento html
  // Agregará o removera dependiendo de como se encuentre al momento de dar "click"
  //En caso la clase al momento de dar click este activa la removera, en caso este desactivada la agregará
  // Las clase "mobile-menu" solo contienen propiedades css que indicarán en que distancia, espacio y tiempo se desplazaran los elementos.
  navLinks.classList.toggle("mobile-menu");
  
});
const menu = document.querySelector(".menu")


const menuLink = document.querySelectorAll('.menu a[href^="#"]');

menuLink.forEach(menulink => {
  menulink.addEventListener("click",function(){
  menu.classList.remove("mobile-menu")
})

})

// function nombreDeFuncion () {

// FUNCION A CREAR

// }
// demo.onclick = function(){
//  imagenDeSlider[index].classList.remove("active");
//  index = (index + 1) % imagenDeSlider.length;
// imagenDeSlider[index].classList.add("active");

//};