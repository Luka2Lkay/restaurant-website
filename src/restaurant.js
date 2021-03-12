
import loadHome from './home';
import loadMenu from './menu';
import loadOrder from './order';

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
    if (link !== this) link.classList.remove('active')  
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
        loadHome();
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
        loadMenu();
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
        loadOrder();
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
    loadHome();

}

export default loadRestaurant;

