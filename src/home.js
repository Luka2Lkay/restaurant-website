
const createElement = (element) => {
    return document.createElement(element);
  };

  const addClass = (createElement, myclass) => {
    return createElement.classList.add(myclass);
  };

  const attributes = (createElement, property, value) => {
    return createElement.setAttribute(property, value);
  };

//Create homepage
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

//the home page is the main content
const loadHome = () =>{
    const main = document.querySelector('.main_content');
    main.textContent = '';
    main.appendChild(createHomePage());

}

export default loadHome;