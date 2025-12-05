const listaPokemon = document.querySelector("#listaPokemon");
const botonesHeader = document.querySelectorAll(".btn-header");
let URL = "https://pokeapi.co/api/v2/pokemon/";

let pokemons = [];

// Descargar todos al inicio
async function cargarPokemons(){
    for (let i = 1 ; i <= 1025; i++){
        const res = await fetch(URL + i);
        const data = await res.json();
        pokemons.push(data);
    }

    pokemons.sort((a, b) => a.id - b.id); // Orden real
    mostrarLista(pokemons);
}

cargarPokemons();

// Mostrar múltiples
function mostrarLista(lista){
    listaPokemon.innerHTML = "";
    lista.forEach(poke => mostrarPokemon(poke));
}

// Mostrar uno
function mostrarPokemon(poke){

    let tipos = poke.types.map(type => `<p class="${type.type.name} tipo">${type.type.name} </p>`).join('');

    let pokeId = poke.id.toString().padStart(3, "0");

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <p class="pokemon-id-back">#${pokeId}</p>
        <div class="pokemon-imagen">
            <img src="${poke.sprites.other["official-artwork"].front_default}">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${pokeId}</p>
                <h2 class="pokemon-nombre">${poke.name}</h2>
            </div>
            <div class="pokemon-tipos">
                ${tipos}
            </div>
            <div class="pokemon-stats">
                <div class="stat">${poke.height}M</div>
                <div class="stat">${poke.weight}kg</div>
            </div>
        </div>
    `;
    listaPokemon.append(div);
}


// Filtros
botonesHeader.forEach(boton => boton.addEventListener("click",(event) =>{
    const botonId = event.currentTarget.id;

    if(botonId === "ver-todos"){
        mostrarLista(pokemons);
    }else{
        const filtrados = pokemons.filter(poke =>
            poke.types.some(t => t.type.name.includes(botonId))
        );
        mostrarLista(filtrados);
    }
}));
