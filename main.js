/* INTRO */

let counter = 0;

const story = [
    "¡Sí, tú! ¿Te estás ahogando en tu propia desesperanza?",
    "¿Hasta la tarea más simple se siente como un peso a punto de arrancarte la vida del cuerpo?",
    "¿Eres una carga constante para tus padres y/o para ti mismo?",
    "¡No te preocupes, los servicios de <strong>“Adopta un Ángel”</strong> es justo lo que necesitas! <br><br> Una <span><strong>solución divina</strong></span> para un <span><strong>tormento infernal</strong></span> ;D"
];

const option = ["Eh...¿Sí?", "Exactamente.", "...Por desgracia."];

var arael = ["./Imagenes/arael-carisma.png",
             "./Imagenes/arael-actually1.png",
             "./Imagenes/arael-actually2.png"];

const text_content = document.getElementById("text");

const button_next = document.getElementById("btn");

const arael_sprite = document.getElementById("arael-pres");

button_next.addEventListener("click", changeText);

function changeText() {
 counter += 1;
    
 if (counter <= story.length) {
    text_content.innerHTML = story [counter -1];
    button_next.innerHTML = option [counter -1];
    arael_sprite.src = arael [counter -1];  
 }
 
 if (counter === story.length) {
    button_next.style.display = 'none';
    arael_sprite.style.display = 'none';
 }
}


