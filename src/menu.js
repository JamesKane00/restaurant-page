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

    const createMenuItem = (recipeNum, description) => {
        let container = document.createElement('div');
        container.classList.add('recipe-container');
        let imgContainer = document.createElement('div')
        imgContainer.classList.add('menu-img-container')
        let img = document.createElement('img');
        img.src = `${recipeNum}`
        let recipeInfo = document.createElement('p');
        recipeInfo.innerText = `${description}`;

        imgContainer.appendChild(img);
        container.appendChild(imgContainer);
        container.appendChild(recipeInfo);
        menuContainer.appendChild(container);
    }

    const menuItemOne = createMenuItem(
        mealOne,
        'Tasty Roast Potato Salad, Dressed With Spinach, Sesame Seeds, Olive Oil & Cajun Spice'
    );

    const menuItemTwo = createMenuItem(
        mealTwo,
        'Fabulous Bowl Shaped Potato Fritters, Stuffed With Cream Cheese And Chives'
    );


    const menuItemThree = createMenuItem(
        mealThree,
        'Oven-Baked Halloween Baked Potatoes To Scare The Family'
    )

	const menuItemFour = createMenuItem(
        mealFour,
        'Quick & Easy, Crispy, Home-Made Fries Seasoned With Peri-Peri Salt'
    )

	const menuItemFive = createMenuItem(
        mealFive,
        'Delicious Crispy, Oven-Baked Potato Wedges Fries Seasoned With Paprika, Salt & Pepper'
    )
	
    const menuItemSix = createMenuItem(
        mealSix,
        'Healthy, Air-Fried Sweet Potato Fries Seasoned Lightly With Salt & Pepper. Served With Low Calories BBQ Sauce'
    )


	container.appendChild(menuContainer);
}
