import "./style.css";
import css from "./css.js";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
import about from "./about.js";

document.querySelector('nav').style.height = '5vh';

document.querySelector('.home').addEventListener('click', home);
document.querySelector('.menu').addEventListener('click', menu);
document.querySelector('.contact').addEventListener('click', contact);
document.querySelector('.about').addEventListener('click', about);

const content = document.querySelector('#content');
css(content, {
    'display': 'flex',
    'flex-direction': 'row',
    'justify-content': 'center',
    'align-items': 'stretch',

    'width': '100%',
    'height': '90vh',

    'box-sizing': 'border-box',
    'font-size': '3vh',
})
home();