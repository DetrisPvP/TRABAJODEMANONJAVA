const nombre = prompt("¿Cuál es tu nombre?");
const nacimiento = prompt("¿En qué año naciste?");


const añoActual = 2025;
let edad = null;


if (nacimiento && !isNaN(nacimiento)) {
edad = añoActual - parseInt(nacimiento);
}


const mensaje = edad !== null
? `Hola, ${nombre}. Tienes ${edad} años.`
: "No se pudo calcular la edad. Verifica los datos.";


document.getElementById("resultado").textContent = mensaje;