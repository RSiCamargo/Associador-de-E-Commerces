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
}

//Visualizar Cupons
const toCouponSection = () => {
    searchSection.classList.add('d-none');
    homeSection.classList.add('d-none');
    couponSection.classList.remove('d-none');
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
};