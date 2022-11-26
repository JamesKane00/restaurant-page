import { loadHome, loadMenu, loadContact, toggleSelect } from './helpers';
import locationMarker from '../assets/location.svg';
import phone from '../assets/phone.svg';
import mapImg from '../assets/map.jpeg';

export default function renderContact() {
    const container = document.querySelector('.container');

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    const contactWrapper = document.createElement('div');
    contactWrapper.classList.add('contact-wrapper');

    const contact = document.createElement('img');
    contact.classList.add('contact-img');
    contact.src = phone;
    const contactNum = document.createElement('p');
    contactNum.innerText = '028 90 674 222';

    const locationWrapper = document.createElement('div');
    locationWrapper.classList.add('location-wrapper');

    const location = document.createElement('img');
    location.classList.add('location-img');
    location.src = locationMarker;
    const locationInfo = document.createElement('p');
    locationInfo.innerText = 'Boucher Road 183, Belfast, Northern Ireland';
    
    const map = document.createElement('img');
    map.classList.add('map');
    map.src = mapImg;

    contactWrapper.appendChild(contact);
    contactWrapper.appendChild(contactNum);

    locationWrapper.appendChild(location);
    locationWrapper.appendChild(locationInfo);

    contactContainer.appendChild(contactWrapper);
    contactContainer.appendChild(locationWrapper);
    contactContainer.appendChild(map);

    container.appendChild(contactContainer);
}