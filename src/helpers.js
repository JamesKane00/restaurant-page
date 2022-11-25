import renderHome from './home';
import renderMenu from './menu';

const toggleActive = () => {
	const tabs = Array.from(document.querySelectorAll('.nav-button'));
	tabs.forEach((tab) => {
		tab.classList.remove('active');
	});
};

const clearContainer = () => {
    const container = document.getElementById('info-container');
    container.innerHTML = '';
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