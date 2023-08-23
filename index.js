import './index.css';

const buttone =document.querySelector('.buttone');
const butttwo =document.querySelector('.butttwo');
const buttthree =document.querySelector('.buttthree');
const buttfour =document.querySelector('.buttfour');
const green =document.querySelector('.green');
const black =document.querySelector('.black');
const red =document.querySelector('.red');
const yellow =document.querySelector('.yellow');
const wrapper =document.querySelector('.wrapper');
const cart =document.querySelector('.cart');


function init(){//refrsh
    wrapper.style.backgroundColor='rgb(107 114 128)';
    cart.style.backgroundColor='rgb(55 65 81)';
    green.classList.remove('hidden');
    black.classList.add('hidden');
    red.classList.add('hidden');
    yellow.classList.add('hidden');

}
init();


buttone.addEventListener('click', function(){
    wrapper.style.backgroundColor='rgb(107 114 128)';
    cart.style.backgroundColor='rgb(55 65 81)'
    green.classList.remove('hidden');
    black.classList.add('hidden');
    red.classList.add('hidden');
    yellow.classList.add('hidden');
})

butttwo.addEventListener('click', function(){
    wrapper.style.backgroundColor='rgb(31 41 55)';
    cart.style.backgroundColor='rgb(0 0 0)'
    green.classList.add('hidden');
    black.classList.remove('hidden');
    red.classList.add('hidden');
    yellow.classList.add('hidden');
})

buttthree.addEventListener('click', function(){
    wrapper.style.backgroundColor='rgb(239 68 68)';
    cart.style.backgroundColor='rgb(185 28 28)';
    green.classList.add('hidden');
    black.classList.add('hidden');
    red.classList.remove('hidden');
    yellow.classList.add('hidden');
})

buttfour.addEventListener('click', function(){
    wrapper.style.backgroundColor='rgb(59 130 246)';
    cart.style.backgroundColor='rgb(147 197 253)';
    green.classList.add('hidden');
    black.classList.add('hidden');
    red.classList.add('hidden');
    yellow.classList.remove('hidden');
})