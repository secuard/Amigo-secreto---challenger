// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const expresion = /^[A-Za-zÑñÁáÉéÍíÓóÚú]+(?:[\s'-][A-Za-zÑñÁáÉéÍíÓóÚú]+)*$/;

    let nombre = input.value;

    if (nombre === "") {
        alert("Por favor ingresa un nombre."); //Validar que no se deje el campo vacio
        return;
    } 
    else if (!expresion.test(nombre)) {
        alert("Ingrese un nombre valido."); 
         return;
    }
    if (amigos.includes(nombre)) { //Validar que no se repitan nombres
        alert("Este nombre ya esta en la lista.");
    }
       else { amigos.push(nombre); //Agregar nombres a la lista
        console.log(amigos.toString()); 
        input.value =""; // Limpiar lista
        mostrarLista();
        return;

        }    

    } 

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""
    for(let i = 0; i <amigos.length; i++) {
        const amigo = document.createElement("li");
        amigo.textContent = amigos[i];
        lista.appendChild(amigo);
    }
   
}

function sortearAmigo() {
    let resultadoLista = document.getElementById("resultado");
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let sortear =document.getElementById("sortear");
    document.getElementById("resultado").innerHTML = "Tu amigo secreto es: " + amigoSorteado;

    if (amigos.length < 3) {
        alert("No hay amigos suficientes para realizar el sorteo");
        return;
    }
     sortear.disabled =true;

}

function reiniciarJuego() {
     document.getElementById("listaAmigos").innerHTML ="";
     document.getElementById("resultado").innerHTML = "";
}