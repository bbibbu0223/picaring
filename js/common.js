// $('header').load('inc.html header > div', nav, ul, li);
$(function nav(){
    
    const menuIc = document.querySelector('.menu_trigger');
    const menu = document.querySelector('nav > div');
    menuIc.addEventListener('click',function(){
        menuIc.classList.toggle('active');
        menu.classList.toggle('active');
    });
    
    new Swiper('.swiper-container');

    
});

function closeCart() {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling')
}

const openShopCart = document.querySelector('.shoppingCartButton');
openShopCart.addEventListener('click', () => {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling');
});


const closeShopCart = document.querySelector('#closeButton');
const overlay = document.querySelector('.overlay');
closeShopCart.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);
