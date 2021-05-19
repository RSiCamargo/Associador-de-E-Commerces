'use-strict';

const homeSection = document.getElementById('home-section');
const searchSection = document.getElementById('search-section');
const couponSection = document.getElementById('coupon-section');
const btnHome = document.querySelector('.btn_home');
const btnSearch = document.querySelector('.btn_search');
const btnCoupon = document.querySelector('.btn_coupon');


const toHomeSection = () => {
    searchSection.classList.add('d-none');
    couponSection.classList.add('d-none');
    homeSection.classList.remove('d-none');
}

const toSearchSection = () => {
    searchSection.classList.remove('d-none');
    homeSection.classList.add('d-none');
    couponSection.classList.add('d-none');
}

const toCouponSection = () => {
    searchSection.classList.add('d-none');
    homeSection.classList.add('d-none');
    couponSection.classList.remove('d-none');
}



btnHome.addEventListener('click', toHomeSection);
btnSearch.addEventListener('click', toSearchSection);
btnCoupon.addEventListener('click', toCouponSection);