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

  export default loadOrder;