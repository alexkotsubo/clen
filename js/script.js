'use strict';
let activeFixedMenu = false;
let body = document.querySelector('body');
let nav = document.querySelector('#nav');
let fixedPadding = document.querySelectorAll('.fixed-padding');

/* IB */

function ib() {
	let ib = document.querySelectorAll(".ib");
	for (let i = 0; i < ib.length; i++) {
		if (ib[i].querySelector('.ib_use')) {
			ib[i].style.backgroundImage = 'url(' + ib[i].querySelector('.ib_use').getAttribute('src') + ')';
		}
	}
}

ib();

/* Slider */

const sliderPagText = document.querySelectorAll('.header__slider-pagtext p');
const headerSliderElem = document.querySelector('.header__slider');
const headerImages = document.querySelectorAll('.header__slider-images img');

const headerSlider = new Swiper('.header__slider', {
	loop: true,
	autoplay: true,
	pagination: {
		el: '.header__slider-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			let text = 'Slide';
			if (sliderPagText.length >= (index + 1)) {
				text = sliderPagText[index].innerHTML;
			}
			return '<span class="' + className + '">' + '0' + (index + 1) + '. ' + text + '</span>';
		},
	},
});

headerSlider.on('slideChange', function () {
	headerSliderElem.style.backgroundImage = `url('${headerImages[headerSlider.realIndex].getAttribute('src')}')`;
});

/* Burger */

const burger = document.querySelector('.nav__burger');
const burgerBtn = document.querySelector('.nav__bottom-burger');
const burgerLinks = document.querySelectorAll('.nav__burger-menu > li');

for(let i = 0, length = burgerLinks.length; i < length; i++) {
	let subMenu = burgerLinks[i].querySelector('.nav__burger-submenu');

	burgerLinks[i].addEventListener('click', function(e) {
		subMenu.classList.toggle('active');
	});
}

burgerBtn.addEventListener('click', function(e) {
	burger.classList.toggle('active');
	burgerBtn.classList.toggle('active');
});