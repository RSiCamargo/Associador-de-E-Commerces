'use-strict';
//!ADD Refresh

// --- ELEMENTOS ---
const homeSection = document.getElementById('home-section');
const searchSection = document.getElementById('search-section');
const couponSection = document.getElementById('coupon-section');
const btnHome = document.querySelector('.btn_home');
const btnSearch = document.querySelector('.btn_search');
const btnCoupon = document.querySelector('.btn_coupon');


// --- VARIÁVEIS ---
let tagArr = []; //Vetor com tags buscadas
let objDB = [{
    objId: 1,
    objTitle: 'Camiseta Branca',
    objPrice: 85.90,
    objDesc: 'Uma Camiseta branca normal',
    tags: ['camiseta', 'branca', 'camisetas'],
    coverImage: './src/img/camisetaTeste.png',
}];
let objSrc = []; //Obj de itens encontrados na pesquisa
let tagString;



// --- FUNÇÕES ---
//Visualizar Home
const toHomeSection = () => {
    searchSection.classList.add('d-none');
    couponSection.classList.add('d-none');
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
                    createItem(objDB[i].coverImage, objDB[i].objTitle, objDB[i].objPrice);
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
        cadastrarConta();
}

//teste de criar conta
function cadastrarConta(){
    let nome = document.getElementById('campo-nome').value;
    let usuario = document.getElementById('campo-usuario').value;
    let email = document.getElementById('campo-email').value;
    let datanasc = document.getElementById('campo-datanasc').value;
    let senha = document.getElementById('campo-senha').value;

    let novaConta = {Nome:nome, Usuario:usuario, Email:email, Data:datanasc, Senha:senha};

    if(typeof(Storage) !== "undefined"){
        let contas = localStorage.getItem("contas");
        if(contas == null) contas = [];
        else contas = JSON.parse(contas);
        contas.push(novaConta);
        localStorage.setItem("contas", JSON.stringify(contas));
        alert("Conta cadastrada com sucesso!");
    }
}
//Cria as div de perfil


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