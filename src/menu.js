import mealOne from '../assets/potato-meal-1.jpg';
import mealTwo from '../assets/potato-meal-2.jpg';
import mealThree from '../assets/potato-meal-3.jpg';
import mealFour from '../assets/potato-meal-4.jpg';
import mealFive from '../assets/potato-meal-5.jpg';
import mealSix from '../assets/potato-meal-6.jpg';

export default function renderMenu() {

    const container = document.querySelector('.container');
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    // create recipes imgs, containers and ingredients list

    // recipe 1 element creation
    const containerOne = document.createElement('div');
    containerOne.classList.add('recipe-container', 'container-one')
    const recipeOne = document.createElement('img');
    recipeOne.classList.add('recipe-one');
    recipeOne.src = mealOne;
    const recipeOneInfo = document.createElement('p');
    recipeOneInfo.innerText = 'info goes here';

    //recipe 1 appending elements
    containerOne.appendChild(recipeOne);
    containerOne.appendChild(recipeOneInfo);

    // recipe 2 element creation
    const containerTwo = document.createElement('div');
    containerTwo.classList.add('recipe-container', 'container-two')
    const recipeTwo = document.createElement('img');
    recipeTwo.classList.add('recipe-two');
    recipeTwo.src = mealTwo;
    const recipeTwoInfo = document.createElement('p');
    recipeTwoInfo.innerText = 'info goes here';

    //recipe 2 appending elements
    containerTwo.appendChild(recipeTwo);
    containerTwo.appendChild(recipeTwoInfo);

    // recipe 3 element creation
    const containerThree = document.createElement('div');
    containerThree.classList.add('recipe-container', 'container-three');
    const recipeThree = document.createElement('img');
    recipeThree.classList.add('recipe-three');
    recipeThree.src = mealThree;
    const recipeThreeInfo = document.createElement('p');
    recipeThreeInfo.innerText = 'info goes here';

    //recipe 3 appending elements
    containerThree.appendChild(recipeThree);
    containerThree.appendChild(recipeThreeInfo);

    // recipe 4 element creation
    const containerFour = document.createElement('div');
    containerFour.classList.add('recipe-container', 'container-four');
    const recipeFour = document.createElement('img');
    recipeFour.classList.add('recipe-four');
    recipeFour.src = mealFour;
    const recipeFourInfo = document.createElement('p');
    recipeFourInfo.innerText = 'info goes here';

    //recipe 4 appending elements
    containerFour.appendChild(recipeFour);
    containerFour.appendChild(recipeFourInfo);

     // recipe 5 element creation
     const containerFive = document.createElement('div');
     containerFive.classList.add('recipe-container', 'container-five');
     const recipeFive = document.createElement('img');
     recipeFive.classList.add('recipe-five');
     recipeFive.src = mealFive;
     const recipeFiveInfo = document.createElement('p');
     recipeFiveInfo.innerText = 'info goes here';

     //recipe 5 appending elements
     containerFive.appendChild(recipeFive);
     containerFive.appendChild(recipeFiveInfo);

     // recipe 5 element creation
     const containerSix = document.createElement('div');
     containerSix.classList.add('recipe-container', 'container-six');
     const recipeSix = document.createElement('img');
     recipeSix.classList.add('recipe-six');
     recipeSix.src = mealSix;
     const recipeSixInfo = document.createElement('p');
     recipeSixInfo.innerText = 'info goes here';

     //recipe 5 appending elements
     containerSix.appendChild(recipeSix);
     containerSix.appendChild(recipeSixInfo);

    //appending recipes to menu container
    menuContainer.appendChild(containerOne);
    menuContainer.appendChild(containerTwo);
    menuContainer.appendChild(containerThree);
    menuContainer.appendChild(containerFour);
    menuContainer.appendChild(containerFive);
    menuContainer.appendChild(containerSix);
    container.appendChild(menuContainer);
}