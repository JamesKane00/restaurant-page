/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderContact)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _assets_location_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/location.svg */ "./assets/location.svg");
/* harmony import */ var _assets_phone_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/phone.svg */ "./assets/phone.svg");
/* harmony import */ var _assets_map_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/map.png */ "./assets/map.png");




function renderContact() {
  var container = document.querySelector('.container');
  var contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');
  var contactWrapper = document.createElement('div');
  contactWrapper.classList.add('contact-wrapper');
  var contact = document.createElement('img');
  contact.classList.add('contact-img');
  contact.src = _assets_phone_svg__WEBPACK_IMPORTED_MODULE_2__;
  var contactNum = document.createElement('p');
  contactNum.innerText = '028 90 674 222';
  var locationWrapper = document.createElement('div');
  locationWrapper.classList.add('location-wrapper');
  var location = document.createElement('img');
  location.classList.add('location-img');
  location.src = _assets_location_svg__WEBPACK_IMPORTED_MODULE_1__;
  var locationInfo = document.createElement('p');
  locationInfo.innerText = 'Boucher Road 183, Belfast, Northern Ireland';
  var map = document.createElement('img');
  map.classList.add('map');
  map.src = _assets_map_png__WEBPACK_IMPORTED_MODULE_3__;
  contactWrapper.appendChild(contact);
  contactWrapper.appendChild(contactNum);
  locationWrapper.appendChild(location);
  locationWrapper.appendChild(locationInfo);
  contactContainer.appendChild(contactWrapper);
  contactContainer.appendChild(locationWrapper);
  contactContainer.appendChild(map);
  container.appendChild(contactContainer);
}

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContact": () => (/* binding */ loadContact),
/* harmony export */   "loadHome": () => (/* binding */ loadHome),
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");



var toggleActive = function toggleActive() {
  var tabs = Array.from(document.querySelectorAll('.nav-button'));
  tabs.forEach(function (tab) {
    tab.classList.remove('active');
  });
};
var clearContainer = function clearContainer() {
  var mainContainer = document.querySelector('.container');
  var nav = document.querySelector('.nav-bar');
  mainContainer.removeChild(nav.nextSibling);
};
var loadHome = function loadHome(e) {
  clearContainer();
  toggleActive();
  e.target.classList.add('active');
  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
};
var loadMenu = function loadMenu(e) {
  clearContainer();
  toggleActive();
  e.target.classList.add('active');
  (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
};
var loadContact = function loadContact(e) {
  clearContainer();
  toggleActive();
  e.target.classList.add('active');
  (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderHome)
/* harmony export */ });
/* harmony import */ var _assets_chef_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/chef.jpg */ "./assets/chef.jpg");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");


function renderHome() {
  //get container
  var content = document.querySelector('.container');
  //create display container with p for restaurant description
  var infoContainer = document.createElement('div');
  infoContainer.classList.add('info-container');
  infoContainer.setAttribute('id', 'info-container');

  //p tag for info
  var info = document.createElement('p');
  info.classList.add('info');
  info.textContent = 'The Finest Mythical Irish Spuds In All The Land, Forged In The Hot Fiery Kitchens Of Ferocious Irish Grandmothers';

  //img for chef
  var chefImg = document.createElement('img');
  chefImg.setAttribute('id', 'chef-img');
  chefImg.src = _assets_chef_jpg__WEBPACK_IMPORTED_MODULE_0__;

  //where to order
  var orderInfo = document.createElement('p');
  orderInfo.classList.add('order-info');
  orderInfo.textContent = 'Also Available For Delivery By Phone Or UberEats';
  infoContainer.appendChild(info);
  infoContainer.appendChild(chefImg);
  infoContainer.appendChild(orderInfo);
  content.appendChild(infoContainer);
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMenu)
/* harmony export */ });
/* harmony import */ var _assets_potato_meal_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/potato-meal-1.jpg */ "./assets/potato-meal-1.jpg");
/* harmony import */ var _assets_potato_meal_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/potato-meal-2.jpg */ "./assets/potato-meal-2.jpg");
/* harmony import */ var _assets_potato_meal_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/potato-meal-3.jpg */ "./assets/potato-meal-3.jpg");
/* harmony import */ var _assets_potato_meal_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/potato-meal-4.jpg */ "./assets/potato-meal-4.jpg");
/* harmony import */ var _assets_potato_meal_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/potato-meal-5.jpg */ "./assets/potato-meal-5.jpg");
/* harmony import */ var _assets_potato_meal_6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/potato-meal-6.jpg */ "./assets/potato-meal-6.jpg");






function renderMenu() {
  var container = document.querySelector('.container');
  var menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  // create recipes imgs, containers and ingredients list

  var createMenuItem = function createMenuItem(recipeNum, description) {
    var container = document.createElement('div');
    container.classList.add('recipe-container');
    var img = document.createElement('img');
    img.src = "".concat(recipeNum);
    var recipeInfo = document.createElement('p');
    recipeInfo.innerText = "".concat(description);
    container.appendChild(img);
    container.appendChild(recipeInfo);
    menuContainer.appendChild(container);
  };
  var menuItemOne = createMenuItem(_assets_potato_meal_1_jpg__WEBPACK_IMPORTED_MODULE_0__, 'Tasty Roast Potato Salad, Dressed With Spinach, Sesame Seeds, Olive Oil & Cajun Spice');
  var menuItemTwo = createMenuItem(_assets_potato_meal_2_jpg__WEBPACK_IMPORTED_MODULE_1__, 'Fabulous Bowl Shaped Potato Fritters, Stuffed With Cream Cheese And Chives');
  var menuItemThree = createMenuItem(_assets_potato_meal_3_jpg__WEBPACK_IMPORTED_MODULE_2__, 'Refreshing Roast Potato Salad With Broccoli, Corn, Carrots, Red Onions & Sesame Seeds');
  var menuItemFour = createMenuItem(_assets_potato_meal_4_jpg__WEBPACK_IMPORTED_MODULE_3__, 'Quick & Easy, Crispy, Home-Made Fries Seasoned With Peri-Peri Salt');
  var menuItemFive = createMenuItem(_assets_potato_meal_5_jpg__WEBPACK_IMPORTED_MODULE_4__, 'Delicious Crispy, Oven-Baked Curly Fries Seasoned With Paprika & Sweet Curry Powder, Served With Ketchup');
  var menuItemSix = createMenuItem(_assets_potato_meal_6_jpg__WEBPACK_IMPORTED_MODULE_5__, 'Healthy, Air-Fried Sweet Potato Fries Seasoned Lightly With Salt & Pepper. Served With Low Calories BBQ Sauce');
  container.appendChild(menuContainer);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/main.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/main.scss ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/futura/futur.ttf */ "./assets/futura/futur.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/potato-background.jpeg */ "./assets/potato-background.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Futura\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");\n  font-style: normal;\n}\n* {\n  box-sizing: border-box;\n  font-family: \"Futura\", Helvetica, Arial, sans-serif;\n  color: var(--font-color-main);\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n}\n\n:root {\n  --font-color-main: #fafafa;\n  --container-color-main: #171717;\n  --container-color-lighter: #404040;\n}\n\n.container {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  height: 100vh;\n  width: 100vw;\n}\n\n.container .nav-bar {\n  background-color: var(--container-color-main);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.25rem 2rem 0 2rem;\n  opacity: 80%;\n}\n\n.container .nav-bar h1 {\n  letter-spacing: 0.25rem;\n  font-style: italic;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n.tab-container {\n  display: flex;\n  gap: 2rem;\n}\n\n.nav-button {\n  appearance: none;\n  border: none;\n  letter-spacing: 0.25rem;\n  font-size: 1.75ch;\n  color: var(--font-color-main);\n  padding: 0.5rem 2rem;\n  background-color: var(--container-color-main);\n  opacity: 90%;\n}\n\n.nav-button:hover {\n  cursor: pointer;\n}\n\n.nav-button.active {\n  border-bottom: 2px solid var(--font-color-main);\n}\n\n.info-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  gap: 3rem;\n  height: 75%;\n  width: 70%;\n  background-color: var(--container-color-main);\n  opacity: 95%;\n  position: absolute;\n  top: 13%;\n  left: 15%;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n\n.info-container p {\n  letter-spacing: 0.15rem;\n  line-height: 1.75rem;\n  width: 90%;\n  font-size: 2ch;\n  text-align: center;\n  font-style: italic;\n  text-overflow: wrap;\n}\n\n.info-container img {\n  height: 70%;\n  width: 70%;\n  border-radius: 12rem;\n}\n\n.container div.menu-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  overflow: scroll;\n  background-color: var(--container-color-main);\n  opacity: 90%;\n  position: absolute;\n  top: 13%;\n  left: 15%;\n  padding: 3rem;\n  grid-column-gap: 2.5rem;\n  grid-row-gap: 1rem;\n  height: 70%;\n  width: 70%;\n}\n\n.recipe-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 300px;\n  gap: 1rem;\n  background-color: var(--container-color-main);\n  text-align: center;\n  padding: 2rem;\n  border: 0.1px dotted var(--font-color-main);\n  transition: all 0.35s ease-in-out;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n\n.recipe-container:hover {\n  cursor: pointer;\n  background-color: var(--container-color-lighter);\n}\n\n.menu-container img {\n  border-radius: 0;\n  height: 70%;\n  width: 85%;\n}\n\n.recipe-container p {\n  font-size: 1.5ch;\n  font-style: italic;\n  letter-spacing: 0.1rem;\n}\n\n.contact-container {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 80px 80px 1fr;\n  background-color: var(--container-color-main);\n  opacity: 90%;\n  position: absolute;\n  top: 13%;\n  left: 15%;\n  padding: 2.5rem;\n  grid-column-gap: 2.5rem;\n  grid-row-gap: 1rem;\n  height: 70%;\n  width: 70%;\n  letter-spacing: 0.1rem;\n}\n\n.contact-container div {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n\n.contact-container img:nth-child(1),\n.contact-container img:nth-child(2) {\n  height: 30px;\n  width: 30px;\n  filter: invert(100%) sepia(0%) saturate(1372%) hue-rotate(239deg) brightness(112%) contrast(96%);\n}\n\n.contact-container img:nth-child(3) {\n  width: 100%;\n  height: 100%;\n}\n\n.footer {\n  background-color: var(--container-color-main);\n  opacity: 80%;\n  color: var(--font-color-main);\n  letter-spacing: 0.25rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  position: absolute;\n  top: 91.5%;\n  width: 100%;\n}\n\n.footer a {\n  text-decoration: none;\n}\n\n.footer a:hover {\n  text-decoration: underline;\n}\n\n.footer #git-hub {\n  height: 20px;\n  width: 20px;\n  filter: invert(100%) sepia(0%) saturate(1372%) hue-rotate(239deg) brightness(112%) contrast(96%);\n  opacity: 100%;\n}\n\n.footer #git-hub:hover {\n  cursor: pointer;\n}\n\n@media (max-width: 850px) {\n  .container div.menu-container {\n    grid-template-columns: 1fr;\n  }\n}", "",{"version":3,"sources":["webpack://./styles/main.scss"],"names":[],"mappings":"AAAA;EACI,qBAAA;EACA,0DAAA;EACA,kBAAA;AACJ;AAEA;EACC,sBAAA;EACA,mDAAA;EACA,6BAAA;AAAD;;AAIA;EACC,UAAA;EACA,SAAA;AADD;;AAIA;EACC,0BAAA;EACA,+BAAA;EACG,kCAAA;AADJ;;AAKA;EACC,mDAAA;EACA,aAAA;EACA,YAAA;AAFD;;AAMA;EACC,6CAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,4BAAA;EACA,YAAA;AAHD;;AAMA;EACC,uBAAA;EACA,kBAAA;EACG,qDAAA;AAHJ;;AAMA;EACC,aAAA;EACA,SAAA;AAHD;;AAMA;EACC,gBAAA;EACA,YAAA;EACA,uBAAA;EACA,iBAAA;EACA,6BAAA;EACA,oBAAA;EACA,6CAAA;EACA,YAAA;AAHD;;AAMA;EACC,eAAA;AAHD;;AAMA;EACC,+CAAA;AAHD;;AAOA;EACC,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,SAAA;EACA,WAAA;EACA,UAAA;EACA,6CAAA;EACA,YAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACG,uLAAA;AAJJ;;AAOA;EACC,uBAAA;EACA,oBAAA;EACA,UAAA;EACA,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;AAJD;;AAOA;EACC,WAAA;EACA,UAAA;EACA,oBAAA;AAJD;;AAOA;EACC,aAAA;EACA,8BAAA;EACA,gBAAA;EACA,6CAAA;EACA,YAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,aAAA;EACA,uBAAA;EACG,kBAAA;EACH,WAAA;EACA,UAAA;AAJD;;AAOA;EACC,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACG,aAAA;EACH,SAAA;EACG,6CAAA;EACH,kBAAA;EACG,aAAA;EACA,2CAAA;EACA,iCAAA;EACA,uLAAA;AAJJ;;AAOA;EACI,eAAA;EACA,gDAAA;AAJJ;;AAOA;EACC,gBAAA;EACA,WAAA;EACA,UAAA;AAJD;;AAOA;EACI,gBAAA;EACA,kBAAA;EACA,sBAAA;AAJJ;;AAOA;EACI,aAAA;EACA,0BAAA;EACA,iCAAA;EACA,6CAAA;EACA,YAAA;EACA,kBAAA;EACH,QAAA;EACA,SAAA;EACA,eAAA;EACA,uBAAA;EACG,kBAAA;EACH,WAAA;EACA,UAAA;EACG,sBAAA;AAJJ;;AAOA;EACI,aAAA;EACA,mBAAA;EACA,WAAA;AAJJ;;AAOA;;EAEI,YAAA;EACA,WAAA;EACA,gGAAA;AAJJ;;AAOA;EACI,WAAA;EACA,YAAA;AAJJ;;AAOA;EACC,6CAAA;EACA,YAAA;EACA,6BAAA;EACA,uBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;AAJD;;AAOA;EACI,qBAAA;AAJJ;;AAOA;EACI,0BAAA;AAJJ;;AAOA;EACI,YAAA;EACA,WAAA;EACA,gGAAA;EACA,aAAA;AAJJ;;AAOA;EACI,eAAA;AAJJ;;AAOA;EACI;IACI,0BAAA;EAJN;AACF","sourcesContent":["@font-face {\n    font-family: 'Futura';\n    src: url('../assets/futura/futur.ttf') format('ttf');\n    font-style: normal;\n}\n\n* {\n\tbox-sizing: border-box;\n\tfont-family: 'Futura', Helvetica, Arial, sans-serif;\n\tcolor: var(--font-color-main);\n}\n\n\nbody {\n\tpadding: 0;\n\tmargin: 0;\n}\n\n:root {\n\t--font-color-main: #fafafa;\n\t--container-color-main: #171717;\n    --container-color-lighter: #404040;\n}\n\n// main container styling\n.container {\n\tbackground: url(../assets/potato-background.jpeg);\n\theight: 100vh;\n\twidth: 100vw;\n}\n\n// nav bar & tab button styling\n.container .nav-bar {\n\tbackground-color: var(--container-color-main);\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 0.25rem 2rem 0 2rem;\n\topacity: 80%;\n}\n\n.container .nav-bar h1 {\n\tletter-spacing: 0.25rem;\n\tfont-style: italic;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n}\n\n.tab-container {\n\tdisplay: flex;\n\tgap: 2rem;\n}\n\n.nav-button {\n\tappearance: none;\n\tborder: none;\n\tletter-spacing: 0.25rem;\n\tfont-size: 1.75ch;\n\tcolor: var(--font-color-main);\n\tpadding: 0.5rem 2rem;\n\tbackground-color: var(--container-color-main);\n\topacity: 90%;\n}\n\n.nav-button:hover {\n\tcursor: pointer;\n}\n\n.nav-button.active {\n\tborder-bottom: 2px solid var(--font-color-main);\n}\n\n// info container styling\n.info-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 2rem;\n\tgap: 3rem;\n\theight: 75%;\n\twidth: 70%;\n\tbackground-color: var(--container-color-main);\n\topacity: 95%;\n\tposition: absolute;\n\ttop: 13%;\n\tleft: 15%;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n\n.info-container p {\n\tletter-spacing: 0.15rem;\n\tline-height: 1.75rem;\n\twidth: 90%;\n\tfont-size: 2ch;\n\ttext-align: center;\n\tfont-style: italic;\n\ttext-overflow: wrap;\n}\n\n.info-container img {\n\theight: 70%;\n\twidth: 70%;\n\tborder-radius: 12rem;\n}\n\n.container div.menu-container {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\toverflow: scroll;\n\tbackground-color: var(--container-color-main);\n\topacity: 90%;\n\tposition: absolute;\n\ttop: 13%;\n\tleft: 15%;\n\tpadding: 3rem;\n\tgrid-column-gap: 2.5rem;\n    grid-row-gap: 1rem;\n\theight: 70%;\n\twidth: 70%;\n}\n\n.recipe-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n    height: 300px;\n\tgap: 1rem;\n    background-color: var(--container-color-main);\n\ttext-align: center;\n    padding: 2rem;\n    border: .1px dotted var(--font-color-main);\n    transition: all .35s ease-in-out;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n\n.recipe-container:hover {\n    cursor: pointer;\n    background-color: var(--container-color-lighter);\n}\n\n.menu-container img {\n\tborder-radius: 0;\n\theight: 70%;\n\twidth: 85%;\n}\n\n.recipe-container p {\n    font-size: 1.5ch;\n    font-style: italic;\n    letter-spacing: .1rem;\n}\n\n.contact-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 80px 80px 1fr;\n    background-color: var(--container-color-main);\n    opacity: 90%;\n    position: absolute;\n\ttop: 13%;\n\tleft: 15%;\n\tpadding: 2.5rem;\n\tgrid-column-gap: 2.5rem;\n    grid-row-gap: 1rem;\n\theight: 70%;\n\twidth: 70%;\n    letter-spacing: .1rem;\n}\n\n.contact-container div {\n    display: flex;\n    align-items: center;\n    gap: 1.5rem;\n}\n\n.contact-container img:nth-child(1),\n.contact-container img:nth-child(2) {\n    height: 30px;\n    width: 30px;\n    filter: invert(100%) sepia(0%) saturate(1372%) hue-rotate(239deg) brightness(112%) contrast(96%);\n}\n\n.contact-container img:nth-child(3) {\n    width: 100%;\n    height: 100%;\n}\n\n.footer {\n\tbackground-color: var(--container-color-main);\n\topacity: 80%;\n\tcolor: var(--font-color-main);\n\tletter-spacing: 0.25rem;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 2rem;\n\tposition: absolute;\n\ttop: 91.5%;\n\twidth: 100%;\n}\n\n.footer a {\n    text-decoration: none;\n}\n\n.footer a:hover {\n    text-decoration: underline;\n}\n\n.footer #git-hub {\n    height: 20px;\n    width: 20px;\n    filter: invert(100%) sepia(0%) saturate(1372%) hue-rotate(239deg) brightness(112%) contrast(96%);\n    opacity: 100%;\n}\n\n.footer #git-hub:hover {\n    cursor: pointer;\n}\n\n@media (max-width: 850px) {\n    .container div.menu-container {\n        grid-template-columns: 1fr;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./assets/chef.jpg":
/*!*************************!*\
  !*** ./assets/chef.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chef.jpg";

/***/ }),

/***/ "./assets/futura/futur.ttf":
/*!*********************************!*\
  !*** ./assets/futura/futur.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "futur.ttf";

/***/ }),

/***/ "./assets/github.svg":
/*!***************************!*\
  !*** ./assets/github.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "github.svg";

/***/ }),

/***/ "./assets/location.svg":
/*!*****************************!*\
  !*** ./assets/location.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "location.svg";

/***/ }),

/***/ "./assets/map.png":
/*!************************!*\
  !*** ./assets/map.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "map.png";

/***/ }),

/***/ "./assets/phone.svg":
/*!**************************!*\
  !*** ./assets/phone.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "phone.svg";

/***/ }),

/***/ "./assets/potato-background.jpeg":
/*!***************************************!*\
  !*** ./assets/potato-background.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "potato-background.jpeg";

/***/ }),

/***/ "./assets/potato-meal-1.jpg":
/*!**********************************!*\
  !*** ./assets/potato-meal-1.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "potato-meal-1.jpg";

/***/ }),

/***/ "./assets/potato-meal-2.jpg":
/*!**********************************!*\
  !*** ./assets/potato-meal-2.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "potato-meal-2.jpg";

/***/ }),

/***/ "./assets/potato-meal-3.jpg":
/*!**********************************!*\
  !*** ./assets/potato-meal-3.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "potato-meal-3.jpg";

/***/ }),

/***/ "./assets/potato-meal-4.jpg":
/*!**********************************!*\
  !*** ./assets/potato-meal-4.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "potato-meal-4.jpg";

/***/ }),

/***/ "./assets/potato-meal-5.jpg":
/*!**********************************!*\
  !*** ./assets/potato-meal-5.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "potato-meal-5.jpg";

/***/ }),

/***/ "./assets/potato-meal-6.jpg":
/*!**********************************!*\
  !*** ./assets/potato-meal-6.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "potato-meal-6.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _assets_github_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/github.svg */ "./assets/github.svg");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers.js */ "./src/helpers.js");





//get container
var content = document.querySelector('.container');

//create header
var navBar = document.createElement('header');
navBar.classList.add('nav-bar');

//create heading
var pageHeader = document.createElement('h1');
pageHeader.classList.add('page-header');
pageHeader.textContent = 'Spudland';
var tabContainer = document.createElement('div');
tabContainer.classList.add('tab-container');

//create tab for loading home page
var homeTab = document.createElement('button');
homeTab.classList.add('nav-button', 'active');
homeTab.setAttribute('id', 'home');
homeTab.textContent = 'Home';
homeTab.addEventListener('click', _helpers_js__WEBPACK_IMPORTED_MODULE_3__.loadHome);

//create tab for loading menu page
var menuTab = document.createElement('button');
menuTab.classList.add('nav-button');
menuTab.setAttribute('id', 'menu');
menuTab.textContent = 'Menu';
menuTab.addEventListener('click', _helpers_js__WEBPACK_IMPORTED_MODULE_3__.loadMenu);

//create tab for loading contact page
var contactTab = document.createElement('button');
contactTab.classList.add('nav-button');
contactTab.setAttribute('id', 'contact');
contactTab.textContent = 'Contact';
contactTab.addEventListener('click', _helpers_js__WEBPACK_IMPORTED_MODULE_3__.loadContact);
var gitIcon = document.getElementById('git-hub');
gitIcon.src = _assets_github_svg__WEBPACK_IMPORTED_MODULE_2__;
gitIcon.addEventListener('click', function () {
  return location.href = 'https://github.com/JamesKane00/restaurant-page';
});
navBar.appendChild(pageHeader);
tabContainer.appendChild(homeTab);
tabContainer.appendChild(menuTab);
tabContainer.appendChild(contactTab);
navBar.appendChild(tabContainer);
content.appendChild(navBar);
(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle653c22cf9efc1a1bfec9.js.map