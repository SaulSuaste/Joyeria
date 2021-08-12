// Se obtiene el tamaño del body menos el tamaño de la ventana
const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById("fondo");

window.onscroll = () => { //al hacer scrool ejecuta
    //el número de píxeles que el documento se está desplazando actualmente a lo largo del eje vertical / la altura, por 400px
    const anchoFondo = (window.pageYOffset / altura) * 450;
    if(anchoFondo <= 100){
        fondo.style.width = anchoFondo + "%"; //agrega la cantidad como porcentaje de width a la clase fondo
    }
}

