import menuHamburguesa from "../pokedex-page/hamburguesa.js";
import scrollHeader from "../header.js";
import searchPokemon from "../pokedex-page/search.js";
import getDataPokemonAndPrintLS from "./my-favs-async-data.js";
import favoritesLS from "./my-favs-ls.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  scrollHeader();
  getDataPokemonAndPrintLS();
  menuHamburguesa();
  searchPokemon("btn-search", "input-search");
  favoritesLS(".btn-add-favs", ".btn-remove-favs");
});
