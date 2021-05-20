'use-strict';
//Objeto Teste
const objTeste = {
    objId: 123123,
    objTitle: 'Camiseta Branca',
    objPrice: ('R$' + 85.90),
    objDesc: 'Uma Camiseta branca normal',
    tags: ['camiseta', 'branca', 'camisetas'],
    coverImage: './src/img/camisetaTeste.png',
};

// --- ELEMENTOS ---
const homeSection = document.getElementById('home-section');
const searchSection = document.getElementById('search-section');
const couponSection = document.getElementById('coupon-section');
const btnHome = document.querySelector('.btn_home');
const btnSearch = document.querySelector('.btn_search');
const btnCoupon = document.querySelector('.btn_coupon');

// --- VARIÁVEIS ---
let searchTag;
let objDB = [];


// --- FUNÇÕES ---
//Visualizar Home
const toHomeSection = () => {
    searchSection.classList.add('d-none');
    couponSection.classList.add('d-none');
    homeSection.classList.remove('d-none');
}

//Visualizar pesquisa
const toSearchSection = () => {
    searchTag = document.getElementById('searchInput').value;
    if (searchTag != ""){
        searchSection.classList.remove('d-none');
        homeSection.classList.add('d-none');
        couponSection.classList.add('d-none');
    
        addSearchResults(searchTag);   
    }  
}

//Visualizar Cupons
const toCouponSection = () => {
    searchSection.classList.add('d-none');
    homeSection.classList.add('d-none');
    couponSection.classList.remove('d-none');
}

//Adicionar resultados da pesquisa
const addSearchResults = (param) => {
    // Realizar pesquisa no banco de objetos (objDB) com o parametro entrado (tag)
    // Em seguida rodar a funcao abaixo para cada objeto encontrado
    // createItem(objDB[i].id, objDB[i].Title, objDB[i].Price, objDB[i].Desc, objDB[i].coverImage);

    // Teste
    createItem(objTeste.coverImage, objTeste.objTitle, objTeste.objPrice);

}

//Criar objeto buscado
const createItem = (coverImage, title, price) => {
    var div = document.createElement("div");
    div.style.width = "20rem";
    div.style.height = "32rem";
    div.style.backgroundColor = "white";
    document.getElementById("searchedElements").appendChild(div);
    
    var imgProd = document.createElement("img");
    imgProd.style.width = "20rem";
    imgProd.style.height = "25rem";
    imgProd.style.padding = "4rem 2rem";
    imgProd.setAttribute("src", coverImage);
    div.appendChild(imgProd);

    var divInfo = document.createElement("div");
    divInfo.style.width = "20rem";
    divInfo.style.height = "7rem";
    divInfo.style.backgroundColor = "blue";
    divInfo.style.padding = "2rem";
    div.appendChild(divInfo);
}



// --- BOTÕES ---
btnHome.addEventListener('click', toHomeSection);
btnSearch.addEventListener('click', toSearchSection);
btnCoupon.addEventListener('click', toCouponSection);