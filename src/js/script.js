'use-strict';
//!ADD Refresh

// --- ELEMENTOS ---
const homeSection = document.getElementById('home-section');
const searchSection = document.getElementById('search-section');
const couponSection = document.getElementById('coupon-section');
const productsSection = document.getElementById('products-section');
const srcProd = document.getElementById("searchedElements");
const btnHome = document.querySelector('.btn_home');
const btnSearch = document.querySelector('.btn_search');
const btnCoupon = document.querySelector('.btn_coupon');
const btnProducts = document.querySelector('.btn_products');

// --- VARIÁVEIS ---
let tagArr = []; //Vetor com tags buscadas
/*let objDB = [{
    objId: 1,
    objTitle: 'Camiseta Branca',
    objPrice: 85.90,
    objDesc: 'Uma Camiseta branca normal',
    tags: ['camiseta', 'branca', 'camisetas'],
    coverImage: './src/img/camisetaTeste.png',
}];*/
let objDB = [];
let objSrc = []; //Obj de itens encontrados na pesquisa
let tagString;



// --- FUNÇÕES ---
//Visualizar Home
const toHomeSection = () => {
    searchSection.classList.add('d-none');
    couponSection.classList.add('d-none');
    productsSection.classList.add('d-none');
    homeSection.classList.remove('d-none');
}

//Visualizar pesquisa
const toSearchSection = () => {
    if (tagArr.length > 1 || tagArr[0] != ''){
        tagString = document.getElementById("searchInput").value;
        tagArr = tagString.split(" ");
        searchSection.classList.remove('d-none');
        homeSection.classList.add('d-none');
        couponSection.classList.add('d-none');
        productsSection.classList.add('d-none');
        addSearchResults(tagArr);
        //Criar funcao para limpar busca anterior
    }
}

//Habilitar pesquisa com Enter
const srcInput = (event) => {
    if (event.keyCode === 13) {
        toSearchSection();
    }
 }

//Adicionar resultados da pesquisa
const addSearchResults = (param) => {
    for(let i = 0 ; i < objDB.length ; i++){
        loop:
        for(let t = 0 ; t < objDB[i].tags.length ; t++){
            for(let z = 0 ; z < param.length ; z++){
                if((objDB[i].tags[t]).toLowerCase() == param[z].toLowerCase()){
                    objSrc.push(objDB[i]);
                    //Montar funcao com linha abaixo para filtragem
                    //createItem(objDB[i].coverImage, objDB[i].objTitle, objDB[i].objPrice);
                    let template = '';
                    objDB.forEach(element => {
                        template += `  
                            <div style="width: 20rem; height: 32rem; background-color: white;">
                                <img src="${element.image}" href="#" style="width: 20rem; height: 23rem; padding: 3rem 2rem;">
                                <div style="width: 20rem; height: 9rem; padding: 1rem 2rem;">
                                    <div style="width: 100%; height: 2rem; color: black; display: flex; justify-content: center;">${element.desc}</div>
                                    <div style="width: 100%; height: 2rem; margin: 1rem 0rem; color: black; display: flex; justify-content: center;">R$${element.price}</div>
                                </div>
                            </div>
                            `
                    })
    srcProd.innerHTML = template;
                    break loop;
                } 
            }
        }
    }
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
    imgProd.style.height = "23rem";
    imgProd.style.padding = "3rem 2rem";
    imgProd.setAttribute("src", coverImage);
    imgProd.setAttribute("href", "#");
    div.appendChild(imgProd);

    var divInfo = document.createElement("div");
    divInfo.style.width = "20rem";
    divInfo.style.height = "9rem";
    divInfo.style.padding = "1rem 2rem";
    div.appendChild(divInfo);

    var divDesc = document.createElement("div");
    divDesc.style.width = "100%";
    divDesc.style.height = "2rem";
    divDesc.style.color = "black";
    divDesc.style.display = "flex";
    divDesc.style.justifyContent = "center";
    imgProd.setAttribute("href", "#");
    divDesc.innerHTML = title;
    divInfo.appendChild(divDesc);

    var divPrice = document.createElement("div");
    divPrice.style.width = "100%";
    divPrice.style.height = "2rem";
    divPrice.style.margin = "1rem 0rem";
    divPrice.style.color = "black";
    divPrice.style.display = "flex";
    divPrice.style.justifyContent = "center";
    imgProd.setAttribute("href", "#");
    divPrice.innerHTML = "R$" + Math.floor(price) + "," + ((price % Math.floor(price) * 100).toFixed(0));
    divInfo.appendChild(divPrice);
}

//Permitir apenas letras no campo nome
function ValidarLetras() {
    let campo = document.getElementById('campo-nome');
    campo.value = campo.value.replace(/[^a-zA-Z]+/, '');
}

//Verificar senhas 
function verificarSenha(){
    let senha1 = document.getElementById('campo-senha').value;
    let senha2 = document.getElementById('campo-senha2').value;

    if(senha1 != senha2)
            alert("A confirmação de senha deve ser igual a senha digitada");
    else return true;
}

//Verifica os campos de cadastro
function validaCadastro(){
    let nome = document.getElementById('campo-nome').value;
    let usuario = document.getElementById('campo-usuario').value;
    let email = document.getElementById('campo-email').value;
    let datanasc = document.getElementById('campo-datanasc').value;
    let senha = document.getElementById('campo-senha').value;

    if(nome == "" || usuario == "" || email == "" || datanasc == "" || senha == "")
        false;
    else if(verificarSenha() == true)
        alert("ok");
}
//cadastrar conta no banco
const formAccount = document.getElementById('accounts');


const createAccount = async (e) => {
    e.preventDefault();
    const doc = {
        name: formAccount.camponome.value,
        username: formAccount.campousuario.value,
        email: formAccount.campoemail.value,
        birthdate: formAccount.campodata.value,
        password: formAccount.camposenha.value
    }

    await fetch('http://localhost:3000/accounts',{
        method: 'POST',
        body: JSON.stringify(doc),
        headers: {'Content-Type': 'aplication/json'}
    });
    
    window.location.replace("../../index.html");
}

//Carregar os produtos na pag produtos
const divProduct = document.querySelector('.products');
/*const renderProducts = async () => {
    let uri = 'http://localhost:3000/products';

    const res = await fetch(uri);
    const products = await res.json();

    let template = '';
    products.forEach(product => {
        template += `  
            <div class="card" style="width: 18rem;">
                <img class="card-img-top " src="${product.image}" >
                <div class="card-body">
                    <h5 class="card-title text-center">${product.title}</h5>
                    <h5 class="card-text text-center">R$${product.price}</h5>
                    <p class="card-text">${product.desc}</p>
                    <a class="btn btn-secondary" href"#">Visitar</a>
                </div>
            </div>
        `
    })
    divProduct.innerHTML = template;
}*/
const renderProducts = async () => {
    let uri = 'http://localhost:3000/products';

    const res = await fetch(uri);
    const products = await res.json();
    
    products.forEach(product => {
        objDB.push(
            {
            objId: product.id,
            objTitle: product.title,
            objPrice: product.price,
            objDesc: product.desc,
            tags: product.tags,
            coverImage: product.image,
        });
    })
}

//Carregar os produtos na pag cupom
const divCoupon = document.querySelector('.coupons');
const renderCoupons = async () => {
    let uri = 'http://localhost:3000/coupons';

    const res = await fetch(uri);
    const coupons = await res.json();

    let template = '';
    coupons.forEach(coupon => {
        template += `  
            <div class="card" style="width: 18rem;">
                <img class="card-img " src="${coupon.image}" >
                <div class="card-body">
                    <h5 class="card-title">${coupon.title}</h5>
                    <p class="card-text">${coupon.desc}</p>
                    <p class="card-text">Código do cupom:${coupon.cod}</p>
                </div>
            </div>
        `
    })
    divCoupon.innerHTML = template;

}

//Quando todo conteudo estiver carregado, dispara a função render
window.addEventListener('DOMContentLoaded', () => renderProducts());
window.addEventListener('DOMContentLoaded', () => renderCoupons());


//Visualizar Cupons
const toCouponSection = () => {
    searchSection.classList.add('d-none');
    homeSection.classList.add('d-none');
    productsSection.classList.add('d-none');
    couponSection.classList.remove('d-none');
}
//Visualizar Produtos
const toProductsSection = () => {
    searchSection.classList.add('d-none');
    homeSection.classList.add('d-none');
    couponSection.classList.add('d-none');
    productsSection.classList.remove('d-none');
}



// --- BOTÕES ---
btnHome.addEventListener('click', toHomeSection);
btnSearch.addEventListener('click', toSearchSection);
btnCoupon.addEventListener('click', toCouponSection);
btnProducts.addEventListener('click', toProductsSection);