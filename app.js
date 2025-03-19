// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();

    let nombreValido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombreAmigo);

    if (nombreAmigo === "" || !nombreValido) {
        alert("Nombre inválido. Ingresa solo letras y espacios.");
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let resultadoElemento = document.getElementById("resultado");

    if (amigos.length === 0) {
        resultadoElemento.innerHTML = "<li>No hay amigos disponibles, debes agregarlos antes de realizar el sorteo</li>";
        resultadoElemento.style.color = "red";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    resultadoElemento.innerHTML = `<li>${amigoSorteado}</li>`;
    resultadoElemento.style.color = "green";
}