'use-strict';

const homeSection = document.getElementById('home-section');
const searchSection = document.getElementById('search-section');
const btnHome = document.querySelector('.btn_home');
const btnSearch = document.querySelector('.btn_search');


//mainSection.classList.remove('d-block');
//mainSection.classList.add('d-none');


const toHomeSection = () => {
    searchSection.classList.add('d-none');
    homeSection.classList.remove('d-none');
}

const toSearchSection = () => {
    searchSection.classList.remove('d-none');
    homeSection.classList.add('d-none');
}



btnHome.addEventListener('click', toHomeSection);
btnSearch.addEventListener('click', toSearchSection);