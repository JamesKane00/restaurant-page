import chef from '../assets/chef.jpg';
import { loadHome, loadMenu, loadContact, toggleSelect } from './helpers';

export default function renderHome() {
	
	//get container
	const content = document.querySelector('.container');
	//create display container with p for restaurant description
	const infoContainer = document.createElement('div')
	infoContainer.classList.add('info-container');
	infoContainer.setAttribute('id', 'info-container');

	//p tag for info
	const info = document.createElement('p');
	info.classList.add('info');
	info.textContent =
		'The Finest Mythical Irish Spuds In All The Land, Forged In The Hot Fiery Kitchens Of Ferocious Irish Grandmothers';

	//img for chef
	const chefImg = document.createElement('img');
	chefImg.setAttribute('id', 'chef-img');
	chefImg.src = chef;

	//where to order
	const orderInfo = document.createElement('p');
	orderInfo.classList.add('order-info');
	orderInfo.textContent = 'Also Available For Delivery By Phone Or UberEats';

	infoContainer.appendChild(info);
	infoContainer.appendChild(chefImg);
	infoContainer.appendChild(orderInfo);

	content.appendChild(infoContainer);
}
