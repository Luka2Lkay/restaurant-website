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

export default loadMenu;