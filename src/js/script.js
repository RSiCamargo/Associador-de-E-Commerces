'use-strict';

// --- ELEMENTOS ---
const homeSection = document.getElementById('home-section');
const searchSection = document.getElementById('search-section');
const couponSection = document.getElementById('coupon-section');
const btnHome = document.querySelector('.btn_home');
const btnSearch = document.querySelector('.btn_search');
const btnCoupon = document.querySelector('.btn_coupon');

// --- VARIÁVEIS ---
let searchTag;


// --- FUNÇÕES ---
//Visualizar Home
const toHomeSection = () => {
    searchSection.classList.add('d-none');
    couponSection.classList.add('d-none');
    homeSection.classList.remove('d-none');
}

//Visualizar pesquisa
const toSearchSection = () => {
    searchSection.classList.remove('d-none');
    homeSection.classList.add('d-none');
    couponSection.classList.add('d-none');

    searchTag = document.getElementById('searchInput').value;
    //addSearchResults(searchTag); --> Arrumando
}

//Visualizar Cupons
const toCouponSection = () => {
    searchSection.classList.add('d-none');
    homeSection.classList.add('d-none');
    couponSection.classList.remove('d-none');
}

//Adicionar resultados da pesquisa
const addSearchResults = (param) => {
    // Realizar pesquisa no banco de objetos com o parametro entrado
    // Em seguida rodar a funcao abaixo para cada objeto encontrado (adicionar parametro objeto)
    // createItem();

}

//Criar objeto buscado
const createItem = (param) => {
    var div = document.createElement("div");

    div.style.width = "20rem";
    div.style.height = "32rem";
    div.style.backgroundColor = "lightgray";
    div.style.borderStyle = "solid";
    div.style.borderWidth = "1px";
    div.style.borderColor = "black";
    div.style.padding = "3px";
    div.innerHTML = "Camiseta Branca";

    document.getElementById("searchedElements").appendChild(div);

}



// --- BOTÕES ---
btnHome.addEventListener('click', toHomeSection);
btnSearch.addEventListener('click', toSearchSection);
btnCoupon.addEventListener('click', toCouponSection);



//Objeto Teste
const objTeste = {
    objTitle: 'Camiseta Branca',
    objPrice: ('R$' + 85.90),
    objDesc: 'Uma Camiseta branca normal',
    tags: ['camiseta', 'branca', 'camisetas'],
    coverImage: '../img/camisetaTeste.jpeg',
};