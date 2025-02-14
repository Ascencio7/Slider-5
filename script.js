// Obtiene los botones de navegación del slider
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

// Obtiene los elementos principales del carrusel
let carouselDom = document.querySelector('.carousel'); // Contenedor del carrusel
let SliderDom = carouselDom.querySelector('.carousel .list'); // Lista de elementos del slider
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail'); // Contenedor de miniaturas
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item'); // Lista de miniaturas
let timeDom = document.querySelector('.carousel .time'); // Indicador de tiempo

// Mueve el primer elemento de las miniaturas al final para crear efecto de ciclo
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

// Definición de tiempos para animaciones y autoavance
let timeRunning = 3000; // Tiempo de duración de la animación
let timeAutoNext = 7000; // Tiempo para el avance automático del slider

// Eventos de clic para avanzar el slider
nextDom.onclick = function(){
    showSlider('next');    
}

// Eventos de clic para retroceder el slider
prevDom.onclick = function(){
    showSlider('prev');    
}

// Configuración del avance automático del slider
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click(); // Hace clic en el botón "siguiente" después de `timeAutoNext` milisegundos
}, timeAutoNext)

// Función para cambiar el slider (avanzar y retroceder)
function showSlider(type){
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item'); // Elementos del slider
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item'); // Elementos de miniaturas
    
    if(type === 'next'){
        // Mueve el primer elemento al final (efecto de rotación)
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next'); // Se agrega clase CSS para la animación
    }else{
        // Mueve el último elemento al inicio (retroceso)
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev'); // Se agrega clase CSS para animación
    }

    // Se reinicia el temporizador de la animación para limpiar la clase CSS
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    // Se reinicia el temporizador para el avance automático
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext);
}

/*
    Permite avanzar o retroceder en el slider con las flechas del teclado
*/
document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowRight'){
        showSlider('next'); // Flecha derecha avanza
    }
    else if(event.key === 'ArrowLeft'){
        showSlider('prev'); // Flecha izquierda retrocede
    }
});