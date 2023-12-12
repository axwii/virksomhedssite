window.addEventListener("load", test);

function test() {
  console.log("show test");
}

// Active button on click - active on takeaway page and resturant page
let btnContainers = document.querySelectorAll('#btn_container');
let activeButtons = [];

btnContainers.forEach(function(btnContainer) {
  btnContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('secondary-btn')) {
      // Check if the clicked element has the 'secondary-btn' class
      let activeButton = activeButtons.find(function(button) {
        return button.container === btnContainer;
      });

      if (activeButton) {
        activeButton.button.classList.remove('active');
      }

      event.target.classList.add('active');
      activeButtons.push({
        container: btnContainer,
        button: event.target
      });
    }
  });
});

// takeaway page
function createProductContainer(title, description, imgSrc, altText, price) {
  const container = document.createElement('div');
  container.className = 'product_container';

  container.innerHTML = `
    <h4 class="product_title">${title}</h4>
    <p class="product_des">${description}</p>
    <div class="product_img_container">
      <img class="product_img" src="${imgSrc}" alt="${altText}">
    </div>
    <p class="product_prize">${price} kr.</p>
    <button class="primary-btn">
      <img src="img/cart.svg" alt="cart icon">
      Put i kurv
    </button>
  `;

  return container;
}

const snacksContainer = document.getElementById('snacksContainer');
const saladsContainer = document.getElementById('saladsContainer');

// Add snacks
snacksContainer.appendChild(createProductContainer('Peanuts', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', 'img/menu/Grilled_Eggplants.avif', 'Snack 1', 40));
snacksContainer.appendChild(createProductContainer('Shrip chips', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', 'img/menu/ruller.avif', 'Snack 2', 45));
snacksContainer.appendChild(createProductContainer('Wontons', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', 'img/menu/Fried_Tofu-Sticks.png', 'Snack 3', 45));

// Add salads
saladsContainer.appendChild(createProductContainer('Broccoli thai kale', 'Ristet broccoli og thai kale med hvidløg. VG.', 'img/menu/salad.avif', 'Side 1', 65));
saladsContainer.appendChild(createProductContainer('Cucumber salad', 'Traditionel, thailandsk agurkesalat, Tam Taeng, med thaibønner og thaiauberginer. GF, H', 'img/menu/ruller.avif', 'Side 2', 65));