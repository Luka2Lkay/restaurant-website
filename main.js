/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst createElement = (element) => {\r\n    return document.createElement(element);\r\n  };\r\n\r\n  const addClass = (createElement, myclass) => {\r\n    return createElement.classList.add(myclass);\r\n  };\r\n\r\n  const attributes = (createElement, property, value) => {\r\n    return createElement.setAttribute(property, value);\r\n  };\r\n\r\n\r\n\r\nconst createHomePage = () =>{\r\n    const homePage = createElement('div');\r\n    addClass(homePage, 'home_page');\r\n\r\n\r\n    const specialFigure = createElement('figure');\r\n    addClass(specialFigure, 'special_figure');\r\n    const braaiImage = createElement('img');\r\n    addClass(braaiImage, 'special_meal');\r\n    attributes(braaiImage, 'src', 'images/special.jpeg');\r\n    attributes(braaiImage, 'width', '500');\r\n    attributes(braaiImage, 'height', '400');\r\n    const specialFigCaption = createElement('figcaption');\r\n    addClass(specialFigCaption, 'special_figcaption');\r\n    specialFigCaption.innerHTML = `<h2>Grilled Beef, Borewores and Salads <br> Price: R 60.00</h2>`;\r\n\r\n\r\n    \r\n    specialFigure.appendChild(braaiImage);\r\n    specialFigure.appendChild(specialFigCaption);\r\n\r\n    homePage.appendChild(createSemiTitle('Today\\'s Special'));\r\n    homePage.appendChild(specialFigure);\r\n\r\n\r\n    return homePage;\r\n}\r\n\r\n\r\nconst createSemiTitle = (text) =>{\r\n    const semiTitle = createElement('h2');\r\n    addClass(semiTitle, 'homePage_title');\r\n\r\n    semiTitle.textContent = text;\r\n    \r\n    return semiTitle;\r\n}\r\n\r\nconst loadHome = () =>{\r\n    const main = document.querySelector('.main_content');\r\n    main.textContent = '';\r\n    main.appendChild(createHomePage());\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://Project-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n\n\n(0,_restaurant__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://Project-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createElement = (element) => {\r\n    return document.createElement(element);\r\n  };\r\n\r\n  const addClass = (createElement, myclass) => {\r\n    return createElement.classList.add(myclass);\r\n  };\r\n\r\n  const attributes = (createElement, property, value) => {\r\n    return createElement.setAttribute(property, value);\r\n  };\r\n\r\n\r\n\r\nconst createFood = (name, price) =>{\r\n  const food = createElement('div');\r\n  addClass(food, 'food_div');\r\n\r\n  const figImage = createElement('figure');\r\n  addClass(figImage, 'fig_image');\r\n  const foodImage = createElement('img');\r\n  addClass(foodImage, 'food_image');\r\n  attributes(foodImage, 'src', `images/${name.toLowerCase()}.jpeg`);\r\n  attributes(foodImage, 'width', '350');\r\n  attributes(foodImage, 'height', '300');\r\n  \r\n\r\n  const foodFigCaption = createElement('figcaption');\r\n  addClass(foodFigCaption, 'food_figcaption');\r\n  foodFigCaption.textContent = `${name} ${price}`;\r\n\r\n  const orderNow = createElement('h3');\r\n  addClass(orderNow, 'order_now');\r\n  orderNow.textContent = 'Order Now!!';\r\n\r\n  figImage.appendChild(foodImage);\r\n  figImage.appendChild(foodFigCaption);\r\n  figImage.appendChild(orderNow);\r\n\r\n  food.appendChild(figImage);\r\n  return food;\r\n}\r\n\r\nconst createMenu = () => {\r\n    const menuPage = createElement('div');\r\n    addClass(menuPage, 'menu_page');\r\n\r\n    menuPage.appendChild(createFood('Ulusu', 'R 70.00'));\r\n    menuPage.appendChild(createFood('Steak', 'R 40.00'));\r\n    menuPage.appendChild(createFood('Isibindi', 'R 35.00'));\r\n    menuPage.appendChild(createFood('Umleqwa', 'R 100.00'));\r\n\r\n    return menuPage;\r\n\r\n}\r\n\r\nconst loadMenu = () =>{\r\n  const main = document.querySelector('.main_content');\r\n  main.textContent = '';\r\n  main.appendChild(createMenu());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://Project-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/order.js":
/*!**********************!*\
  !*** ./src/order.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createElement = (element) => {\n    return document.createElement(element);\n  };\n\n  const addClass = (createElement, myclass) => {\n    return createElement.classList.add(myclass);\n  };\n\n  const attributes = (createElement, property, value) => {\n    return createElement.setAttribute(property, value);\n  };\n\n\n  const createOrder = () =>{\n      const order = createElement('div');\n      addClass(order, 'food_order');\n\n      const titleOrder = createElement('h1');\n      titleOrder.textContent = 'Place your order';\n      addClass(titleOrder, 'title_order');\n            \n      const phoneNumber = createElement('p');\n      phoneNumber.textContent = 'Phone: 021 234 5678';\n      addClass(phoneNumber, 'phone_number');\n\n      const whatsApp = createElement('p');\n      whatsApp.textContent = 'WhatsApp: 065 457 7891';\n      addClass(whatsApp, 'whats_app');\n\n      const address = createElement('p');\n      address.textContent = 'Address: Luka\\'s Place Sheffield road, Philippi, Cape Town';\n      addClass(address, 'address');\n\n      const mapOrder = createElement('img');\n      attributes(mapOrder, 'src', 'images/map.png');\n      addClass(mapOrder, 'map_order');\n\n      order.appendChild(titleOrder);\n      order.appendChild(phoneNumber);\n      order.appendChild(whatsApp);\n      order.appendChild(address);\n      order.appendChild(mapOrder);\n\n      return order;\n  }\n\n  const loadOrder = () =>{\n      const main = document.querySelector('.main_content');\n      main.textContent = '';\n      main.appendChild(createOrder())\n  }\n\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadOrder);\n\n//# sourceURL=webpack://Project-restaurant-page/./src/order.js?");

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order */ \"./src/order.js\");\n\r\n\r\n\r\n\r\n\r\nconst createElement = (element) => {\r\n    return document.createElement(element);\r\n  };\r\n\r\n  const addClass = (createElement, myclass) => {\r\n    return createElement.classList.add(myclass);\r\n  };\r\n\r\n  const links = (list, url) => {\r\n    return list.appendChild(url);\r\n  };\r\n\r\n\r\n\r\nconst activeNavLink = (link) => {\r\n  const navLinks = document.querySelectorAll('.nav_links');\r\n\r\n  navLinks.forEach((link) => {\r\n    if (link !== undefined) link.classList.remove('active')  \r\n  })\r\n  \r\n  link.classList.add('active');\r\n}\r\n\r\nconst createSecondHeader = () =>{\r\n    const secondHeader = createElement(\"div\");\r\n    addClass(secondHeader, \"second-header\");\r\n\r\n    const navigation = createElement(\"nav\");\r\n    const unOrderedList = createElement(\"ul\");\r\n\r\n    const home = createElement(\"li\");\r\n    const homeLink = createElement(\"a\");\r\n    addClass(homeLink, 'nav_links');\r\n    homeLink.textContent = \"Home\";\r\n\r\n    homeLink.addEventListener('click', (e) =>{\r\n      if (e.target.classList.contains('active')){\r\n        return;\r\n      } else {\r\n        activeNavLink(homeLink);\r\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n      }\r\n    });\r\n\r\n\r\n\r\n    const menu = createElement(\"li\");\r\n    const menuLink = createElement(\"a\");\r\n    addClass(menuLink, 'nav_links');\r\n    menuLink.textContent = \"Menu\";\r\n   \r\n    menuLink.addEventListener('click', (e) =>{\r\n      if (e.target.classList.contains('active')){\r\n        return;\r\n      } else {\r\n        activeNavLink(menuLink);\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n      }\r\n    });\r\n\r\n\r\n    const order = createElement(\"li\");\r\n    const orderLink = createElement(\"a\");\r\n    addClass(orderLink, 'nav_links');\r\n    orderLink.textContent = \"Order\";\r\n    orderLink.addEventListener('click', (e) =>{\r\n      if (e.target.classList.contains('active')){\r\n        return;\r\n      } else {\r\n        activeNavLink(orderLink);\r\n        (0,_order__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n      }\r\n    });\r\n\r\n\r\n    links(home, homeLink);\r\n    links(menu, menuLink);\r\n    links(order, orderLink);\r\n\r\n    unOrderedList.appendChild(home);\r\n    unOrderedList.appendChild(menu);\r\n    unOrderedList.appendChild(order);\r\n    navigation.appendChild(unOrderedList);\r\n    secondHeader.appendChild(navigation);\r\n   \r\n    return secondHeader;\r\n}\r\n\r\n\r\nconst createHeader = () => {\r\n  const header = createElement(\"header\");\r\n\r\n  const firstHeader = createElement(\"div\");\r\n  addClass(firstHeader, \"first-header\");\r\n\r\n  const title = createElement(\"h1\");\r\n  addClass(title, \"my-title\");\r\n  title.textContent = \"Luka's Restaurant\";\r\n\r\n  firstHeader.appendChild(title);  \r\n  header.appendChild(firstHeader);\r\n  header.appendChild(createSecondHeader());\r\n\r\n  return header;\r\n}\r\n\r\nconst createMain = () => {\r\n  const main = createElement('div');\r\n  addClass(main, 'main_content')\r\n\r\n  return main;\r\n}\r\n\r\n\r\nconst loadRestaurant = () => {\r\n    const content = document.getElementById(\"content\");\r\n\r\n    content.appendChild(createHeader());\r\n    content.appendChild(createMain());\r\n\r\n    activeNavLink(document.querySelector('.nav_links'));\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadRestaurant);\r\n\r\n\n\n//# sourceURL=webpack://Project-restaurant-page/./src/restaurant.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;