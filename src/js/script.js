'use-strict';
//!ADD Refresh

// --- ELEMENTOS ---
const homeSection = document.getElementById('home-section');
const searchSection = document.getElementById('search-section');
const couponSection = document.getElementById('coupon-section');
const productsSection = document.getElementById('products-section');
const srcProd = document.getElementById("searchedElements");
const filterTag = document.getElementById("filterTag");
const btnHome = document.querySelector('.btn_home');
const btnSearch = document.querySelector('.btn_search');
const btnCoupon = document.querySelector('.btn_coupon');
const btnProducts = document.querySelector('.btn_products');
const nbRes = document.querySelector('.numResults');

// --- VARIÁVEIS ---
let tagArr = []; //Vetor com tags buscadas
let objDB = []; //Vetor que segura objs do banco (Possivel retirar depois)
let objSrc = []; //Obj de itens encontrados na pesquisa
let tagString; //String de pesquisa



// --- FUNÇÕES ---
const resetParameters = () => {
    srcProd.innerHTML = "";
    nbRes.innerHTML = "";
    filterTag.innerHTML = "";
    objSrc = [];
}

//Visualizar Home
const toHomeSection = () => {
    resetParameters();
    searchSection.classList.add('d-none');
    couponSection.classList.add('d-none');
    productsSection.classList.add('d-none');
    homeSection.classList.remove('d-none');
}

//Visualizar pesquisa
const toSearchSection = () => {
    resetParameters();
    tagString = document.getElementById("searchInput").value;
    if (tagString.length > 0){
        tagArr = [];
        tagArr = tagString.split(" ");
        searchSection.classList.remove('d-none');
        homeSection.classList.add('d-none');
        couponSection.classList.add('d-none');
        productsSection.classList.add('d-none');
        addSearchResults(tagArr);
    }
}

//Visualizar Cupons
const toCouponSection = () => {
    resetParameters();
    searchSection.classList.add('d-none');
    homeSection.classList.add('d-none');
    productsSection.classList.add('d-none');
    couponSection.classList.remove('d-none');
}

//Visualizar Produtos
const toProductsSection = () => {
    resetParameters();
    searchSection.classList.add('d-none');
    homeSection.classList.add('d-none');
    couponSection.classList.add('d-none');
    productsSection.classList.remove('d-none');
}

//Habilitar pesquisa com Enter
const srcInput = (event) => {
    if (event.keyCode === 13) {
        toSearchSection();
    }
 }

//Adicionar resultados da pesquisa
const addSearchResults = (param) => {
    let template = '';
    let template2 = '';
    
    tagArr.forEach(tagArr => {
            if(tagArr.length > 0){
                template2 += `  
                <i class="fa fa-tag" aria-hidden="true" style="margin: 0.35rem 0rem; color: coral"></i>
                <p style="margin: 0.1rem 2rem 0.1rem 0.35rem; color: gray">${tagArr}</p>
                `
            }
    })
    
    filterTag.innerHTML = template2;

    for(let i = 0 ; i < objDB.length ; i++){
        loop:
        for(let t = 0 ; t < objDB[i].tags.length ; t++){
            for(let z = 0 ; z < param.length ; z++){
                if((objDB[i].tags[t]).toLowerCase() == param[z].toLowerCase()){
                    objSrc.push(objDB[i]);
                        template += `  
                            <div style="width: 20rem; height: 32rem; background-color: white;">
                                <img src="${objDB[i].image}" href="#" style="width: 20rem; height: 23rem; padding: 3rem 2rem;">
                                <div style="width: 20rem; height: 9rem; padding: 1rem 2rem;">
                                    <div style="width: 100%; height: 2rem; color: black; display: flex; justify-content: center;">${objDB[i].desc}</div>
                                    <div style="width: 100%; height: 2rem; margin: 1rem 0rem; color: black; display: flex; justify-content: center;">R$${objDB[i].price}</div>
                                </div>
                            </div>
                            `
                    srcProd.innerHTML = template;
                    break loop;
                } 
            }
        }
    }
    nbRes.innerHTML = objSrc.length + " resultado(s) encontrado(s)";
    document.getElementById("searchInput").value = '';
}

//Filtro Valor Crescente
function filterFunc() {
    let fil = document.getElementById("filterSelect").value;
    if (fil == "lower"){
        srcProd.innerHTML = "";
        let template = '';
        objSrc.sort((a, b) => {return a.price - b.price;});

        objSrc.forEach(objSrc => {
            template += `  
            <div style="width: 20rem; height: 32rem; background-color: white;">
                <img src="${objSrc.image}" href="#" style="width: 20rem; height: 23rem; padding: 3rem 2rem;">
                <div style="width: 20rem; height: 9rem; padding: 1rem 2rem;">
                    <div style="width: 100%; height: 2rem; color: black; display: flex; justify-content: center;">${objSrc.desc}</div>
                    <div style="width: 100%; height: 2rem; margin: 1rem 0rem; color: black; display: flex; justify-content: center;">R$${objSrc.price}</div>
                </div>
            </div>
            `
        })
        srcProd.innerHTML = template;
        document.getElementById("searchInput").value = '';
    }else if(fil == "higher"){
        srcProd.innerHTML = "";
        let template = '';
        objSrc.sort((a, b) => {return b.price - a.price;});

        objSrc.forEach(objSrc => {
            template += `  
            <div style="width: 20rem; height: 32rem; background-color: white;">
                <img src="${objSrc.image}" href="#" style="width: 20rem; height: 23rem; padding: 3rem 2rem;">
                <div style="width: 20rem; height: 9rem; padding: 1rem 2rem;">
                    <div style="width: 100%; height: 2rem; color: black; display: flex; justify-content: center;">${objSrc.desc}</div>
                    <div style="width: 100%; height: 2rem; margin: 1rem 0rem; color: black; display: flex; justify-content: center;">R$${objSrc.price}</div>
                </div>
            </div>
            `
        })
        srcProd.innerHTML = template;
        document.getElementById("searchInput").value = '';
    }
}

//Filtro Valor Decrescente
const filterHigherLower = () => {

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
        createAccount();
}
//cadastrar conta no banco
const createAccount = async () => {

    let nome = document.getElementById('campo-nome').value;
    let usuario = document.getElementById('campo-usuario').value;
    let email = document.getElementById('campo-email').value;
    let datanasc = document.getElementById('campo-datanasc').value;
    let senha = document.getElementById('campo-senha').value;

    
    const doc = {
        name: nome,
        username: usuario,
        email: email,
        birthdate: datanasc,
        password: senha
    };

    await fetch('http://localhost:3000/accounts',{
        method: 'POST',
        body: JSON.stringify(doc),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    });

    window.location.replace("../../index.html");
}

//Verifica os campos de cadastro de Ecommerce
function validaCadastroEcommerce(){
    let nome = document.getElementById('ecom-nome').value;
    let cnpj = document.getElementById('ecom-cnpj').value;
    let link = document.getElementById('ecom-link').value;
    let email = document.getElementById('ecom-email').value;
    let phone = document.getElementById('ecom-tel').value;
    let desc = document.getElementById('ecom-desc').value;

    if(nome == "" || cnpj == "" || link == "" || email == "" || phone == "" || desc == "")
        false;
    else createEcommerce();
}
//Cadastra E-commerce no banco
const createEcommerce = async () => {

    let nome = document.getElementById('ecom-nome').value;
    let cnpj = document.getElementById('ecom-cnpj').value;
    let link = document.getElementById('ecom-link').value;
    let email = document.getElementById('ecom-email').value;
    let phone = document.getElementById('ecom-tel').value;
    let image = document.getElementById('ecom-img').value;
    let desc = document.getElementById('ecom-desc').value;

    
    const doc = {
        name: nome,
        cnpj: cnpj,
        link: link,
        email: email,
        phone: phone,
        image: image,
        desc: desc
    };

    alert(JSON.stringify(doc));
    await fetch('http://localhost:3000/ecommerces',{
        method: 'POST',
        body: JSON.stringify(doc),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    });

}

//Verifica os campos de cadastro de produto
function validaCadastroProdutos(){
    let title = document.getElementById('prod-title').value;
    let price = document.getElementById('prod-price').value;
    let desc = document.getElementById('prod-desc').value;
    let link = document.getElementById('prod-link').value;
    let image = document.getElementById('prod-img').value;
    let tag = document.getElementById('prod-tag').value;

    if(title == "" || price == "" || desc == "" || link == "" || image == "" || tag == "")
        false;
    else createProduct();
}
//Cadastra produto no banco
const createProduct = async () => {

    let title = document.getElementById('prod-title').value;
    let price = document.getElementById('prod-price').value;
    let desc = document.getElementById('prod-desc').value;
    let link = document.getElementById('prod-link').value;
    let image = document.getElementById('prod-img').value;
    let tag = document.getElementById('prod-tag').value;
    
    const doc = {
        title: title,
        price: price,
        desc: desc,
        link: link,
        image: image,
        tags: tag
    };

    alert(JSON.stringify(doc));
    await fetch('http://localhost:3000/products',{
        method: 'POST',
        body: JSON.stringify(doc),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    });

}

//Carregar os produtos na pag produtos
/*const divProduct = document.querySelector('.products');
const renderProducts = async () => {
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
            id: product.id,
            title: product.title,
            price: product.price,
            desc: product.desc,
            image: product.image,
            tags: product.tags,
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
            <div class="col">
            <div class="card">
                  <img src="${coupon.image}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${coupon.title}</h5>
                    <p class="card-text">${coupon.desc}</p>
                    <p class="card-text"><small class="text-muted">${coupon.cod}</small></p>
                  </div>
                </div>
            </div>
        `
    })
    divCoupon.innerHTML = template;

}

//Quando todo conteudo estiver carregado, dispara a função render
window.addEventListener('DOMContentLoaded', () => renderProducts());
window.addEventListener('DOMContentLoaded', () => renderCoupons());

// --- BOTÕES ---
btnHome.addEventListener('click', toHomeSection);
btnSearch.addEventListener('click', toSearchSection);
btnCoupon.addEventListener('click', toCouponSection);
btnProducts.addEventListener('click', toProductsSection);