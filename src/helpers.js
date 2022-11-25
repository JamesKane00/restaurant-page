import renderHome from './home';
import renderMenu from './menu';

const toggleActive = () => {
	const tabs = Array.from(document.querySelectorAll('.nav-button'));
	tabs.forEach((tab) => {
		tab.classList.remove('active');
	});
};

const clearContainer = () => {
    const infoContainer = document.getElementById('info-container');
    const mainContainer = document.querySelector('.container');
    mainContainer.removeChild(infoContainer);
}

export const loadHome = (e) => {
    clearContainer();
	toggleActive();
	e.target.classList.add('active');
    renderHome();
};

export const loadMenu = (e) => {
    clearContainer();
	toggleActive();
	e.target.classList.add('active');
    renderMenu();
};

export const loadContact = (e) => {
    clearContainer();
	toggleActive();
	e.target.classList.add('active');
};