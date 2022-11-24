import '../styles/main.scss';
import chef from '../assets/chef.jpg';

const toggleActive = () => {
	const tabs = Array.from(document.querySelectorAll('.nav-button'));
	tabs.forEach((tab) => {
		tab.classList.remove('active');
	});
};

const loadHome = (e) => {
	toggleActive();
	e.target.classList.add('active');
};

const loadMenu = (e) => {
	toggleActive();
	e.target.classList.add('active');
};

const loadContact = (e) => {
	toggleActive();
	e.target.classList.add('active');
};

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

//create display container with p for restaurant description
const infoContainer = document.getElementById('info-container')
infoContainer.classList.add('info-container');

//p tag for info
const info = document.createElement('p');
info.classList.add('info');
info.textContent =
	'The Finest Mythical Irish Spuds In All The Land, Forged In The Hot Fiery Kitchens Of Ferocious Irish Grandmothers';

const imgContainer = document.createElement('div');
imgContainer.classList.add('img-container');

//img for chef
const chefImg = document.getElementById('chef-img');
chefImg.src = chef;

//where to order
const orderInfo = document.createElement('p');
orderInfo.classList.add('order-info');
orderInfo.textContent = 'Also Available For Delivery By Phone Or UberEats';

navBar.appendChild(pageHeader);
tabContainer.appendChild(homeTab);
tabContainer.appendChild(menuTab);
tabContainer.appendChild(contactTab);
navBar.appendChild(tabContainer);

infoContainer.appendChild(info);
imgContainer.appendChild(chefImg)
infoContainer.appendChild(imgContainer);
infoContainer.appendChild(orderInfo);

content.appendChild(navBar);
content.appendChild(infoContainer);
