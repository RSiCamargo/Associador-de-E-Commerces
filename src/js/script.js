'use-strict';

// --- ELEMENTOS ---
const homeSection = document.getElementById('home-section');
const searchSection = document.getElementById('search-section');
const btnHome = document.querySelector('.btn_home');
const btnSearch = document.querySelector('.btn_search');

// --- VARIÁVEIS ---
let searchTag;


// --- FUNÇÕES ---
//Visualizar Home
const toHomeSection = () => {
    searchSection.classList.add('d-none');
    homeSection.classList.remove('d-none');
}

//Visualizar pesquisa
const toSearchSection = () => {
    searchSection.classList.remove('d-none');
    homeSection.classList.add('d-none');
    
    searchTag = document.getElementById('searchInput').value;
}



// --- BOTÕES ---
btnHome.addEventListener('click', toHomeSection);
btnSearch.addEventListener('click', toSearchSection);




//Objeto Teste
const objTeste = {
    objTitle: 'Camiseta Branca',
    objPrice: ('R$' + 85.90),
    objDesc: 'Uma Camiseta branca normal',
    tags: ['camiseta', 'branca', 'camisetas'],
};