import '../styles/main.scss';
import renderHome from './home';
import { loadHome, loadMenu, loadContact, toggleSelect } from './helpers.js';

//get container
const content = document.querySelector('.container');

//create header
const navBar = document.createElement('header');
navBar.classList.add('nav-bar');

//create heading
const pageHeader = document.createElement('h1');
pageHeader.classList.add('page-header');
pageHeader.textContent = 'Spudland';

const tabContainer = document.createElement('div');
tabContainer.classList.add('tab-container');

//create tab for loading home page
const homeTab = document.createElement('button');
homeTab.classList.add('nav-button', 'active');
homeTab.setAttribute('id', 'home');
homeTab.textContent = 'Home';
homeTab.addEventListener('click', loadHome);

//create tab for loading menu page
const menuTab = document.createElement('button');
menuTab.classList.add('nav-button');
menuTab.setAttribute('id', 'menu');
menuTab.textContent = 'Menu';
menuTab.addEventListener('click', loadMenu);

//create tab for loading contact page
const contactTab = document.createElement('button');
contactTab.classList.add('nav-button');
contactTab.setAttribute('id', 'contact');
contactTab.textContent = 'Contact';
contactTab.addEventListener('click', loadContact);

navBar.appendChild(pageHeader);
tabContainer.appendChild(homeTab);
tabContainer.appendChild(menuTab);
tabContainer.appendChild(contactTab);
navBar.appendChild(tabContainer);

content.appendChild(navBar);

renderHome();
