# Pokédex

Este proyecto es una Pokédex interactiva que permite a los usuarios explorar y filtrar Pokémon según sus tipos.
Utiliza la PokéAPI para obtener datos en tiempo real sobre los Pokémon.

## Características

- Visualización de Pokémon con imagen, nombre, ID, tipos, altura y peso.
- Filtrado por tipo (Fire, Water, Grass, etc.).
- Diseño responsivo para diferentes tamaños de pantalla.

## Tecnologías utilizadas

- HTML: Estructura del proyecto.
- CSS: Estilos y diseño visual.
- JavaScript: Lógica de la aplicación y consumo de la API.
- PokéAPI: Fuente de datos de los Pokémon.

## Estructura del proyecto

/
├── img/
├── index.html
├── index.css
└── main.js

- index.html: Contiene la estructura principal de la página.
- index.css: Define los estilos y colores para los elementos de la página.
- main.js: Contiene la lógica para cargar los datos de la API, mostrar los Pokémon y aplicar los filtros.

## Cómo usar

1. Clonar el repositorio:
   git clone <URL_DEL_REPOSITORIO>

2. Abrir el proyecto:
   Abrir el archivo index.html en el navegador.

3. Explorar la Pokédex:
   - Usar los botones de tipo para filtrar los Pokémon.
   - Hacer clic en "Ver todos" para mostrar todos los Pokémon.

## Funcionalidades principales

Cargar Pokémon  
El archivo main.js utiliza la función cargarPokemons para descargar los 1025 Pokémon disponibles en la PokéAPI.

Mostrar Pokémon  
La función mostrarPokemon genera dinámicamente el HTML para cada Pokémon, incluyendo imagen, nombre, tipos, altura y peso.

Filtrar Pokémon  
Los botones en el encabezado permiten filtrar los Pokémon según su tipo mediante eventos click.

## Estilos

Los estilos están definidos en index.css.
Cada tipo de Pokémon tiene un color único definido mediante variables CSS en :root.

Ejemplo:
--type-fire: #F08030;
--type-water: #6890F0;

## Créditos

- PokéAPI: Por proporcionar los datos de los Pokémon.
- Rubik Font: Fuente utilizada en el diseño.

## Licencia

Este proyecto es de uso libre.
Siéntete libre de modificarlo y adaptarlo según tus necesidades.
