// SLIDER

const slideList = [{
        img: "url(img/food6.jpg)",
        textH1: 'Pizza Menu',
        textP: 'Smaki Azjatyckie'
    },
    {
        img: "url(img/food4.jpg)",
        textH1: 'Burger Menu',
        textP: 'Nowe Receptury'
    },
    {
        img: "url(img/food2.jpg)",
        textH1: 'Vege Burger',
        textP: 'Smaki Veganskie'
    }
];

const image = document.querySelector('header');
const h1 = document.querySelector('.change-h1');
const p = document.querySelector('.change-p');
const button = document.querySelector('.header-text button');
const dots = [...document.querySelectorAll('.dots span')];
// Interfejs
const time = 6000;
let active = 0;

// Implementacje

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    h1.classList.add('animate');
    p.classList.add('animate');
    button.classList.add('animate');
    image.style.backgroundImage = slideList[active].img;
    h1.textContent = slideList[active].textH1;
    p.textContent = slideList[active].textP;
    changeDot()

}
let intervalIndex = setInterval(changeSlide, time);
h1.addEventListener('animationend', function () {
    h1.classList.remove('animate')
})
p.addEventListener('animationend', function () {
    p.classList.remove('animate')
})
button.addEventListener('animationend', function () {
    button.classList.remove('animate')
})

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        if (dot.classList.contains('one')) {
            active = 0;
            h1.classList.add('animate');
            p.classList.add('animate');
            button.classList.add('animate');
            image.style.backgroundImage = slideList[active].img;
            h1.textContent = slideList[active].textH1;
            p.textContent = slideList[active].textP;
            changeDot()
        } else if (dot.classList.contains('two')) {
            active = 1;
            h1.classList.add('animate');
            p.classList.add('animate');
            button.classList.add('animate');
            image.style.backgroundImage = slideList[active].img;
            h1.textContent = slideList[active].textH1;
            p.textContent = slideList[active].textP;
            changeDot()
        } else if (dot.classList.contains('three')) {
            active = 2;
            h1.classList.add('animate');
            p.classList.add('animate');
            button.classList.add('animate');
            image.style.backgroundImage = slideList[active].img;
            h1.textContent = slideList[active].textH1;
            p.textContent = slideList[active].textP;
            changeDot()
        }
    })
});

// BURGER
const burger = document.querySelector('div.burger');
const navMobile = document.querySelector('nav.mobile');
burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    navMobile.classList.toggle('active');

})

// MENU
const menuPosition = document.querySelectorAll('.menu-position');
const showMenu = function () {
    this.classList.toggle('active');
}

menuPosition.forEach(item => {
    item.addEventListener('click', showMenu);
})