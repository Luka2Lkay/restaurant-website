/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const createElement = (element) => {
    return document.createElement(element);
  };

  const addClass = (createElement, myclass) => {
    return createElement.classList.add(myclass);
  };

  const attributes = (createElement, property, value) => {
    return createElement.setAttribute(property, value);
  };



const createHomePage = () =>{
    const homePage = createElement('div');
    addClass(homePage, 'home_page');


    const specialFigure = createElement('figure');
    addClass(specialFigure, 'special_figure');
    const braaiImage = createElement('img');
    addClass(braaiImage, 'special_meal');
    attributes(braaiImage, 'src', 'images/special.jpeg');
    attributes(braaiImage, 'width', '500');
    attributes(braaiImage, 'height', '400');
    const specialFigCaption = createElement('figcaption');
    addClass(specialFigCaption, 'special_figcaption');
    specialFigCaption.innerHTML = `<h2>Grilled Beef, Borewores and Salads <br> Price: R 60.00</h2>`;


    
    specialFigure.appendChild(braaiImage);
    specialFigure.appendChild(specialFigCaption);

    homePage.appendChild(createSemiTitle('Today\'s Special'));
    homePage.appendChild(specialFigure);


    return homePage;
}


const createSemiTitle = (text) =>{
    const semiTitle = createElement('h2');
    addClass(semiTitle, 'homePage_title');

    semiTitle.textContent = text;
    
    return semiTitle;
}

const loadHome = () =>{
    const main = document.querySelector('.main_content');
    main.textContent = '';
    main.appendChild(createHomePage());

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createElement = (element) => {
    return document.createElement(element);
  };

  const addClass = (createElement, myclass) => {
    return createElement.classList.add(myclass);
  };

  const attributes = (createElement, property, value) => {
    return createElement.setAttribute(property, value);
  };



const createFood = (name, price) =>{
  const food = createElement('div');
  addClass(food, 'food_div');

  const figImage = createElement('figure');
  addClass(figImage, 'fig_image');
  const foodImage = createElement('img');
  addClass(foodImage, 'food_image');
  attributes(foodImage, 'src', `images/${name.toLowerCase()}.jpeg`);
  attributes(foodImage, 'width', '350');
  attributes(foodImage, 'height', '300');
  

  const foodFigCaption = createElement('figcaption');
  addClass(foodFigCaption, 'food_figcaption');
  foodFigCaption.textContent = `${name} ${price}`;

  const orderNow = createElement('h3');
  addClass(orderNow, 'order_now');
  orderNow.textContent = 'Order Now!!';

  figImage.appendChild(foodImage);
  figImage.appendChild(foodFigCaption);
  figImage.appendChild(orderNow);

  food.appendChild(figImage);
  return food;
}

const createMenu = () => {
    const menuPage = createElement('div');
    addClass(menuPage, 'menu_page');

    menuPage.appendChild(createFood('Ulusu', 'R 70.00'));
    menuPage.appendChild(createFood('Steak', 'R 40.00'));
    menuPage.appendChild(createFood('Isibindi', 'R 35.00'));
    menuPage.appendChild(createFood('Umleqwa', 'R 100.00'));

    return menuPage;

}

const loadMenu = () =>{
  const main = document.querySelector('.main_content');
  main.textContent = '';
  main.appendChild(createMenu());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/order.js":
/*!**********************!*\
  !*** ./src/order.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createElement = (element) => {
    return document.createElement(element);
  };

  const addClass = (createElement, myclass) => {
    return createElement.classList.add(myclass);
  };

  const attributes = (createElement, property, value) => {
    return createElement.setAttribute(property, value);
  };


  const createOrder = () =>{
      const order = createElement('div');
      addClass(order, 'food_order');

      const titleOrder = createElement('h1');
      titleOrder.textContent = 'Place your order';
      addClass(titleOrder, 'title_order');
            
      const phoneNumber = createElement('p');
      phoneNumber.textContent = 'Phone: 021 234 5678';
      addClass(phoneNumber, 'phone_number');

      const whatsApp = createElement('p');
      whatsApp.textContent = 'WhatsApp: 065 457 7891';
      addClass(whatsApp, 'whats_app');

      const address = createElement('p');
      address.textContent = 'Address: Luka\'s Place Sheffield road, Philippi, Cape Town';
      addClass(address, 'address');

      const mapOrder = createElement('img');
      attributes(mapOrder, 'src', 'images/map.png');
      addClass(mapOrder, 'map_order');

      order.appendChild(titleOrder);
      order.appendChild(phoneNumber);
      order.appendChild(whatsApp);
      order.appendChild(address);
      order.appendChild(mapOrder);

      return order;
  }

  const loadOrder = () =>{
      const main = document.querySelector('.main_content');
      main.textContent = '';
      main.appendChild(createOrder())
  }

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadOrder);

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order */ "./src/order.js");





const createElement = (element) => {
    return document.createElement(element);
  };

  const addClass = (createElement, myclass) => {
    return createElement.classList.add(myclass);
  };

  const links = (list, url) => {
    return list.appendChild(url);
  };



const activeNavLink = (link) => {
  const navLinks = document.querySelectorAll('.nav_links');

  navLinks.forEach((link) => {
    if (link !== undefined) link.classList.remove('active')  
  })
  
  link.classList.add('active');
}

const createSecondHeader = () =>{
    const secondHeader = createElement("div");
    addClass(secondHeader, "second-header");

    const navigation = createElement("nav");
    const unOrderedList = createElement("ul");

    const home = createElement("li");
    const homeLink = createElement("a");
    addClass(homeLink, 'nav_links');
    homeLink.textContent = "Home";

    homeLink.addEventListener('click', (e) =>{
      if (e.target.classList.contains('active')){
        return;
      } else {
        activeNavLink(homeLink);
        (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();
      }
    });



    const menu = createElement("li");
    const menuLink = createElement("a");
    addClass(menuLink, 'nav_links');
    menuLink.textContent = "Menu";
   
    menuLink.addEventListener('click', (e) =>{
      if (e.target.classList.contains('active')){
        return;
      } else {
        activeNavLink(menuLink);
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)();
      }
    });


    const order = createElement("li");
    const orderLink = createElement("a");
    addClass(orderLink, 'nav_links');
    orderLink.textContent = "Order";
    orderLink.addEventListener('click', (e) =>{
      if (e.target.classList.contains('active')){
        return;
      } else {
        activeNavLink(orderLink);
        (0,_order__WEBPACK_IMPORTED_MODULE_2__.default)();
      }
    });


    links(home, homeLink);
    links(menu, menuLink);
    links(order, orderLink);

    unOrderedList.appendChild(home);
    unOrderedList.appendChild(menu);
    unOrderedList.appendChild(order);
    navigation.appendChild(unOrderedList);
    secondHeader.appendChild(navigation);
   
    return secondHeader;
}


const createHeader = () => {
  const header = createElement("header");

  const firstHeader = createElement("div");
  addClass(firstHeader, "first-header");

  const title = createElement("h1");
  addClass(title, "my-title");
  title.textContent = "Luka's Restaurant";

  firstHeader.appendChild(title);  
  header.appendChild(firstHeader);
  header.appendChild(createSecondHeader());

  return header;
}

const createMain = () => {
  const main = createElement('div');
  addClass(main, 'main_content')

  return main;
}


const loadRestaurant = () => {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());

    activeNavLink(document.querySelector('.nav_links'));
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadRestaurant);



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ "./src/restaurant.js");


(0,_restaurant__WEBPACK_IMPORTED_MODULE_0__.default)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL1Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vUHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvb3JkZXIuanMiLCJ3ZWJwYWNrOi8vUHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcmVzdGF1cmFudC5qcyIsIndlYnBhY2s6Ly9Qcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Qcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vUHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Qcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsUUFBUSxFOzs7Ozs7Ozs7Ozs7OztBQzVEdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsbUJBQW1CO0FBQzVEO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxrQ0FBa0MsS0FBSyxHQUFHLE1BQU07O0FBRWhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRTs7Ozs7Ozs7Ozs7Ozs7QUM5RHZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLGlFQUFlLFNBQVMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRJO0FBQ0E7QUFDRTs7QUFFaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFNBQUk7QUFDckIsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFFBQVEsOENBQVE7QUFDaEI7QUFDQSxLQUFLOzs7O0FBSUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsUUFBUSw4Q0FBUTtBQUNoQjtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsUUFBUSwrQ0FBUztBQUNqQjtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUksOENBQVE7O0FBRVo7O0FBRUEsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7OztVQ25JOUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTnlDOztBQUV6QyxvREFBYyxHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgY3JlYXRlRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRDbGFzcyA9IChjcmVhdGVFbGVtZW50LCBteWNsYXNzKSA9PiB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKG15Y2xhc3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSAoY3JlYXRlRWxlbWVudCwgcHJvcGVydHksIHZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHZhbHVlKTtcclxuICB9O1xyXG5cclxuXHJcblxyXG5jb25zdCBjcmVhdGVIb21lUGFnZSA9ICgpID0+e1xyXG4gICAgY29uc3QgaG9tZVBhZ2UgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFkZENsYXNzKGhvbWVQYWdlLCAnaG9tZV9wYWdlJyk7XHJcblxyXG5cclxuICAgIGNvbnN0IHNwZWNpYWxGaWd1cmUgPSBjcmVhdGVFbGVtZW50KCdmaWd1cmUnKTtcclxuICAgIGFkZENsYXNzKHNwZWNpYWxGaWd1cmUsICdzcGVjaWFsX2ZpZ3VyZScpO1xyXG4gICAgY29uc3QgYnJhYWlJbWFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgYWRkQ2xhc3MoYnJhYWlJbWFnZSwgJ3NwZWNpYWxfbWVhbCcpO1xyXG4gICAgYXR0cmlidXRlcyhicmFhaUltYWdlLCAnc3JjJywgJ2ltYWdlcy9zcGVjaWFsLmpwZWcnKTtcclxuICAgIGF0dHJpYnV0ZXMoYnJhYWlJbWFnZSwgJ3dpZHRoJywgJzUwMCcpO1xyXG4gICAgYXR0cmlidXRlcyhicmFhaUltYWdlLCAnaGVpZ2h0JywgJzQwMCcpO1xyXG4gICAgY29uc3Qgc3BlY2lhbEZpZ0NhcHRpb24gPSBjcmVhdGVFbGVtZW50KCdmaWdjYXB0aW9uJyk7XHJcbiAgICBhZGRDbGFzcyhzcGVjaWFsRmlnQ2FwdGlvbiwgJ3NwZWNpYWxfZmlnY2FwdGlvbicpO1xyXG4gICAgc3BlY2lhbEZpZ0NhcHRpb24uaW5uZXJIVE1MID0gYDxoMj5HcmlsbGVkIEJlZWYsIEJvcmV3b3JlcyBhbmQgU2FsYWRzIDxicj4gUHJpY2U6IFIgNjAuMDA8L2gyPmA7XHJcblxyXG5cclxuICAgIFxyXG4gICAgc3BlY2lhbEZpZ3VyZS5hcHBlbmRDaGlsZChicmFhaUltYWdlKTtcclxuICAgIHNwZWNpYWxGaWd1cmUuYXBwZW5kQ2hpbGQoc3BlY2lhbEZpZ0NhcHRpb24pO1xyXG5cclxuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKGNyZWF0ZVNlbWlUaXRsZSgnVG9kYXlcXCdzIFNwZWNpYWwnKSk7XHJcbiAgICBob21lUGFnZS5hcHBlbmRDaGlsZChzcGVjaWFsRmlndXJlKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIGhvbWVQYWdlO1xyXG59XHJcblxyXG5cclxuY29uc3QgY3JlYXRlU2VtaVRpdGxlID0gKHRleHQpID0+e1xyXG4gICAgY29uc3Qgc2VtaVRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGFkZENsYXNzKHNlbWlUaXRsZSwgJ2hvbWVQYWdlX3RpdGxlJyk7XHJcblxyXG4gICAgc2VtaVRpdGxlLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIFxyXG4gICAgcmV0dXJuIHNlbWlUaXRsZTtcclxufVxyXG5cclxuY29uc3QgbG9hZEhvbWUgPSAoKSA9PntcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9jb250ZW50Jyk7XHJcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVQYWdlKCkpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7IiwiY29uc3QgY3JlYXRlRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRDbGFzcyA9IChjcmVhdGVFbGVtZW50LCBteWNsYXNzKSA9PiB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKG15Y2xhc3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSAoY3JlYXRlRWxlbWVudCwgcHJvcGVydHksIHZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHZhbHVlKTtcclxuICB9O1xyXG5cclxuXHJcblxyXG5jb25zdCBjcmVhdGVGb29kID0gKG5hbWUsIHByaWNlKSA9PntcclxuICBjb25zdCBmb29kID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYWRkQ2xhc3MoZm9vZCwgJ2Zvb2RfZGl2Jyk7XHJcblxyXG4gIGNvbnN0IGZpZ0ltYWdlID0gY3JlYXRlRWxlbWVudCgnZmlndXJlJyk7XHJcbiAgYWRkQ2xhc3MoZmlnSW1hZ2UsICdmaWdfaW1hZ2UnKTtcclxuICBjb25zdCBmb29kSW1hZ2UgPSBjcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBhZGRDbGFzcyhmb29kSW1hZ2UsICdmb29kX2ltYWdlJyk7XHJcbiAgYXR0cmlidXRlcyhmb29kSW1hZ2UsICdzcmMnLCBgaW1hZ2VzLyR7bmFtZS50b0xvd2VyQ2FzZSgpfS5qcGVnYCk7XHJcbiAgYXR0cmlidXRlcyhmb29kSW1hZ2UsICd3aWR0aCcsICczNTAnKTtcclxuICBhdHRyaWJ1dGVzKGZvb2RJbWFnZSwgJ2hlaWdodCcsICczMDAnKTtcclxuICBcclxuXHJcbiAgY29uc3QgZm9vZEZpZ0NhcHRpb24gPSBjcmVhdGVFbGVtZW50KCdmaWdjYXB0aW9uJyk7XHJcbiAgYWRkQ2xhc3MoZm9vZEZpZ0NhcHRpb24sICdmb29kX2ZpZ2NhcHRpb24nKTtcclxuICBmb29kRmlnQ2FwdGlvbi50ZXh0Q29udGVudCA9IGAke25hbWV9ICR7cHJpY2V9YDtcclxuXHJcbiAgY29uc3Qgb3JkZXJOb3cgPSBjcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIGFkZENsYXNzKG9yZGVyTm93LCAnb3JkZXJfbm93Jyk7XHJcbiAgb3JkZXJOb3cudGV4dENvbnRlbnQgPSAnT3JkZXIgTm93ISEnO1xyXG5cclxuICBmaWdJbWFnZS5hcHBlbmRDaGlsZChmb29kSW1hZ2UpO1xyXG4gIGZpZ0ltYWdlLmFwcGVuZENoaWxkKGZvb2RGaWdDYXB0aW9uKTtcclxuICBmaWdJbWFnZS5hcHBlbmRDaGlsZChvcmRlck5vdyk7XHJcblxyXG4gIGZvb2QuYXBwZW5kQ2hpbGQoZmlnSW1hZ2UpO1xyXG4gIHJldHVybiBmb29kO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWVudVBhZ2UgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFkZENsYXNzKG1lbnVQYWdlLCAnbWVudV9wYWdlJyk7XHJcblxyXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vZCgnVWx1c3UnLCAnUiA3MC4wMCcpKTtcclxuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKGNyZWF0ZUZvb2QoJ1N0ZWFrJywgJ1IgNDAuMDAnKSk7XHJcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChjcmVhdGVGb29kKCdJc2liaW5kaScsICdSIDM1LjAwJykpO1xyXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vZCgnVW1sZXF3YScsICdSIDEwMC4wMCcpKTtcclxuXHJcbiAgICByZXR1cm4gbWVudVBhZ2U7XHJcblxyXG59XHJcblxyXG5jb25zdCBsb2FkTWVudSA9ICgpID0+e1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9jb250ZW50Jyk7XHJcbiAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xyXG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7IiwiY29uc3QgY3JlYXRlRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gIH07XG5cbiAgY29uc3QgYWRkQ2xhc3MgPSAoY3JlYXRlRWxlbWVudCwgbXljbGFzcykgPT4ge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50LmNsYXNzTGlzdC5hZGQobXljbGFzcyk7XG4gIH07XG5cbiAgY29uc3QgYXR0cmlidXRlcyA9IChjcmVhdGVFbGVtZW50LCBwcm9wZXJ0eSwgdmFsdWUpID0+IHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHZhbHVlKTtcbiAgfTtcblxuXG4gIGNvbnN0IGNyZWF0ZU9yZGVyID0gKCkgPT57XG4gICAgICBjb25zdCBvcmRlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYWRkQ2xhc3Mob3JkZXIsICdmb29kX29yZGVyJyk7XG5cbiAgICAgIGNvbnN0IHRpdGxlT3JkZXIgPSBjcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgdGl0bGVPcmRlci50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIG9yZGVyJztcbiAgICAgIGFkZENsYXNzKHRpdGxlT3JkZXIsICd0aXRsZV9vcmRlcicpO1xuICAgICAgICAgICAgXG4gICAgICBjb25zdCBwaG9uZU51bWJlciA9IGNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHBob25lTnVtYmVyLnRleHRDb250ZW50ID0gJ1Bob25lOiAwMjEgMjM0IDU2NzgnO1xuICAgICAgYWRkQ2xhc3MocGhvbmVOdW1iZXIsICdwaG9uZV9udW1iZXInKTtcblxuICAgICAgY29uc3Qgd2hhdHNBcHAgPSBjcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICB3aGF0c0FwcC50ZXh0Q29udGVudCA9ICdXaGF0c0FwcDogMDY1IDQ1NyA3ODkxJztcbiAgICAgIGFkZENsYXNzKHdoYXRzQXBwLCAnd2hhdHNfYXBwJyk7XG5cbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBjcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gJ0FkZHJlc3M6IEx1a2FcXCdzIFBsYWNlIFNoZWZmaWVsZCByb2FkLCBQaGlsaXBwaSwgQ2FwZSBUb3duJztcbiAgICAgIGFkZENsYXNzKGFkZHJlc3MsICdhZGRyZXNzJyk7XG5cbiAgICAgIGNvbnN0IG1hcE9yZGVyID0gY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBhdHRyaWJ1dGVzKG1hcE9yZGVyLCAnc3JjJywgJ2ltYWdlcy9tYXAucG5nJyk7XG4gICAgICBhZGRDbGFzcyhtYXBPcmRlciwgJ21hcF9vcmRlcicpO1xuXG4gICAgICBvcmRlci5hcHBlbmRDaGlsZCh0aXRsZU9yZGVyKTtcbiAgICAgIG9yZGVyLmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcbiAgICAgIG9yZGVyLmFwcGVuZENoaWxkKHdoYXRzQXBwKTtcbiAgICAgIG9yZGVyLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgICAgb3JkZXIuYXBwZW5kQ2hpbGQobWFwT3JkZXIpO1xuXG4gICAgICByZXR1cm4gb3JkZXI7XG4gIH1cblxuICBjb25zdCBsb2FkT3JkZXIgPSAoKSA9PntcbiAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9jb250ZW50Jyk7XG4gICAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU9yZGVyKCkpXG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBsb2FkT3JkZXI7IiwiXHJcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUnO1xyXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51JztcclxuaW1wb3J0IGxvYWRPcmRlciBmcm9tICcuL29yZGVyJztcclxuXHJcbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkQ2xhc3MgPSAoY3JlYXRlRWxlbWVudCwgbXljbGFzcykgPT4ge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChteWNsYXNzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsaW5rcyA9IChsaXN0LCB1cmwpID0+IHtcclxuICAgIHJldHVybiBsaXN0LmFwcGVuZENoaWxkKHVybCk7XHJcbiAgfTtcclxuXHJcblxyXG5cclxuY29uc3QgYWN0aXZlTmF2TGluayA9IChsaW5rKSA9PiB7XHJcbiAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X2xpbmtzJyk7XHJcblxyXG4gIG5hdkxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgIGlmIChsaW5rICE9PSB0aGlzKSBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpICBcclxuICB9KVxyXG4gIFxyXG4gIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVNlY29uZEhlYWRlciA9ICgpID0+e1xyXG4gICAgY29uc3Qgc2Vjb25kSGVhZGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkZENsYXNzKHNlY29uZEhlYWRlciwgXCJzZWNvbmQtaGVhZGVyXCIpO1xyXG5cclxuICAgIGNvbnN0IG5hdmlnYXRpb24gPSBjcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgY29uc3QgdW5PcmRlcmVkTGlzdCA9IGNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHJcbiAgICBjb25zdCBob21lID0gY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgY29uc3QgaG9tZUxpbmsgPSBjcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGFkZENsYXNzKGhvbWVMaW5rLCAnbmF2X2xpbmtzJyk7XHJcbiAgICBob21lTGluay50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG5cclxuICAgIGhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xyXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFjdGl2ZU5hdkxpbmsoaG9tZUxpbmspO1xyXG4gICAgICAgIGxvYWRIb21lKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgbWVudSA9IGNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGNvbnN0IG1lbnVMaW5rID0gY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBhZGRDbGFzcyhtZW51TGluaywgJ25hdl9saW5rcycpO1xyXG4gICAgbWVudUxpbmsudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICAgXHJcbiAgICBtZW51TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcclxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhY3RpdmVOYXZMaW5rKG1lbnVMaW5rKTtcclxuICAgICAgICBsb2FkTWVudSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgY29uc3Qgb3JkZXIgPSBjcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb25zdCBvcmRlckxpbmsgPSBjcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGFkZENsYXNzKG9yZGVyTGluaywgJ25hdl9saW5rcycpO1xyXG4gICAgb3JkZXJMaW5rLnRleHRDb250ZW50ID0gXCJPcmRlclwiO1xyXG4gICAgb3JkZXJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xyXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFjdGl2ZU5hdkxpbmsob3JkZXJMaW5rKTtcclxuICAgICAgICBsb2FkT3JkZXIoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGxpbmtzKGhvbWUsIGhvbWVMaW5rKTtcclxuICAgIGxpbmtzKG1lbnUsIG1lbnVMaW5rKTtcclxuICAgIGxpbmtzKG9yZGVyLCBvcmRlckxpbmspO1xyXG5cclxuICAgIHVuT3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbiAgICB1bk9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKG1lbnUpO1xyXG4gICAgdW5PcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChvcmRlcik7XHJcbiAgICBuYXZpZ2F0aW9uLmFwcGVuZENoaWxkKHVuT3JkZXJlZExpc3QpO1xyXG4gICAgc2Vjb25kSGVhZGVyLmFwcGVuZENoaWxkKG5hdmlnYXRpb24pO1xyXG4gICBcclxuICAgIHJldHVybiBzZWNvbmRIZWFkZXI7XHJcbn1cclxuXHJcblxyXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuXHJcbiAgY29uc3QgZmlyc3RIZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGFkZENsYXNzKGZpcnN0SGVhZGVyLCBcImZpcnN0LWhlYWRlclwiKTtcclxuXHJcbiAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgYWRkQ2xhc3ModGl0bGUsIFwibXktdGl0bGVcIik7XHJcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkx1a2EncyBSZXN0YXVyYW50XCI7XHJcblxyXG4gIGZpcnN0SGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTsgIFxyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChmaXJzdEhlYWRlcik7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVNlY29uZEhlYWRlcigpKTtcclxuXHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+IHtcclxuICBjb25zdCBtYWluID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYWRkQ2xhc3MobWFpbiwgJ21haW5fY29udGVudCcpXHJcblxyXG4gIHJldHVybiBtYWluO1xyXG59XHJcblxyXG5cclxuY29uc3QgbG9hZFJlc3RhdXJhbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xyXG5cclxuICAgIGFjdGl2ZU5hdkxpbmsoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9saW5rcycpKTtcclxuICAgIGxvYWRIb21lKCk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkUmVzdGF1cmFudDtcclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkUmVzdGF1cmFudCBmcm9tICcuL3Jlc3RhdXJhbnQnXG5cbmxvYWRSZXN0YXVyYW50KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==