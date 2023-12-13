
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

// Function to create a product container
function createProductContainer(title, description, imgSrc, altText, price) {
  // Create a new div element for the product container
  const container = document.createElement('div');
  // Set the class name for styling
  container.className = 'product_container';

  // Set the inner HTML of the container using template literals
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

  // Return the created container
  return container;
}

// Get references to containers in the HTML
const snacksContainer = document.getElementById('snacksContainer');
const saladsContainer = document.getElementById('saladsContainer');
const smallDishes = document.getElementById('smallDishes');
const soupsAndNoodles = document.getElementById('soupsAndNoodles');

// Add snacks
snacksContainer.appendChild(createProductContainer('Peanuts', 'Ristede peanuts, kaffir limeblade, havsalt, sprøde løg og ristet chili. VG, GF.', 'img/takeaway/peanuts.webp', 'Snack 1', 40));
snacksContainer.appendChild(createProductContainer('Shrip chips', 'Luftige rejeschips. Serveres med sweet chili sauce.', 'img/takeaway/shrimpChips.webp', 'Snack 2', 45));
snacksContainer.appendChild(createProductContainer('Wontons', 'Knasende, sprøde wontons med krydret fyld af kylling, rejer, forårsløg og koriander. 5 stk.', 'img/takeaway/wontons.webp', 'Snack 3', 45));
snacksContainer.appendChild(createProductContainer('Crispy beef', 'Soyamarineret oksefilet, dybstegt i tynde strimler.Serveres med soya chili sauce.', 'img/takeaway/crispyBeef.webp', 'Snack 4', 85));
snacksContainer.appendChild(createProductContainer('Spring rolls', 'Sprøde forårsruller med kylling, gulerod, kartofler, glasnudler og hvidkål. 3 stk.', 'img/takeaway/springRolls.webp', 'Snack 5', 75));
snacksContainer.appendChild(createProductContainer('Fresh spring rolls', 'Agurk, gulerod, salat, sød thaibasilikum, mynte og koriander rullet i rispapir. 6 stk. VG, GF', 'img/takeaway/freshSpringRolls.webp', 'Snack 6', 79));
snacksContainer.appendChild(createProductContainer('Vegan spring rolls', 'Sprøde, veganske forårsruller med gulerod, bønnespirer, glasnudler, hvidkål og forårsløg. 3 stk. VG', 'img/takeaway/veganSpringRolls.webp', 'Snack 7', 79));

// Add salads
saladsContainer.appendChild(createProductContainer('Broccoli thai kale', 'Ristet broccoli og thai kale med hvidløg. VG.', 'img/takeaway/broccoliThaiKale.webp', 'Side 1', 65));
saladsContainer.appendChild(createProductContainer('Cucumber salad', 'Traditionel, thailandsk agurkesalat, Tam Taeng, med thaibønner og thaiauberginer. GF, H', 'img/takeaway/cucumberSalad.webp', 'Side 2', 65));
saladsContainer.appendChild(createProductContainer('Green papaya', 'Blandet salat med grøn papaya, gulerod, thaibønner og cherrytomater. Toppet med frisk chili og peanuts. GF', 'img/takeaway/greenPapaya.webp', 'Side 3', 65));
saladsContainer.appendChild(createProductContainer('Eggplant w beans', 'Lange thaiauberginer med soyabønner, hvidløg,sød thaibasilikum og frisk chili. VG', 'img/takeaway/eggplantWBeans.webp', 'Side 4', 65));
saladsContainer.appendChild(createProductContainer('Morning glory', 'Thaispinat stegt i wok sammen med hvidløg,frisk chili og sprøde løg. VG, HH', 'img/takeaway/morningGlory.webp', 'Side 5', 65));
saladsContainer.appendChild(createProductContainer('Jasminris', '', 'img/takeaway/jasminris.webp', 'Side 6', 25));
saladsContainer.appendChild(createProductContainer('Brune jasminris', '', 'img/takeaway/bruneJasminris.webp', 'Side 7', 25));
saladsContainer.appendChild(createProductContainer('Risnudler', '', 'img/takeaway/risnudler.webp', 'Side 8', 25));

// Add small dishes
smallDishes.appendChild(createProductContainer('Fried tofu sticks', 'Dybstegte tofuspyd med knuste peanuts. Serveres med sweet & sour peanutsauce. 3 stk. VG, GF.', 'img/takeaway/friedTofuSticks.webp', 'Small 1', 85));
smallDishes.appendChild(createProductContainer('Chicken meatballs', 'Saftige kyllingekødboller med forårsløg og løg.Serveres med tamarindsauce. 3 stk.', 'img/takeaway/chickenMeatballs.webp', 'Small 2', 75));
smallDishes.appendChild(createProductContainer('Chicken wings', 'Dybstegte, marinerede chicken wings. Toppet med stegt, sød thaibasilikum. 3 stk.', 'img/takeaway/chickenWings.webp', 'Small 3', 75));
smallDishes.appendChild(createProductContainer('Corn fritters', 'Sprøde majsfritter med hvidløg, koriander, forårsløg og grøn chili. 3 stk. V', 'img/takeaway/cornFritters.webp', 'Small 4', 75));
smallDishes.appendChild(createProductContainer('Tamarind prawns', 'Marinerede tigerrejer i tamarindsauce med koriander, sprøde løg og chili. 5 stk.', 'img/takeaway/tamarindPrawns.webp', 'Small 5', 89));
smallDishes.appendChild(createProductContainer('Salmon w sauce', 'Grillet, marineret laks toppet med dressing lavet af koriander, hvidløg, lime og chili. GF, H', 'img/takeaway/salmonWSauce.webp', 'Small 6', 110));
smallDishes.appendChild(createProductContainer('Chicken satay', 'Marinerede kyllingespyd. Serveres med peanutsauce. 3 stk.', 'img/takeaway/chickenSatay.webp', 'Small 7', 75));

// Add soups and noodles
soupsAndNoodles.appendChild(createProductContainer('Tom kha', 'Kokossuppe med kylling, østershat, stråsvampe,citrongræs og galangal. Toppet med frisk chili, koriander og forårsløg.', 'img/takeaway/tomKhaSoup.webp', 'Soup and noodle 1', 175));
soupsAndNoodles.appendChild(createProductContainer('Fried noodles', 'Fintskåret oksekød stegt i wok med risnudler, æg, thai kale, broccoli, bønnespirer og forårsløg.', 'img/takeaway/friedNoodles.webp', 'Soup and noodle 2', 195));



// // Function to add products to a container
// function addProducts(container, products) {
//   // Loop through each product and append it to the container
//   products.forEach(product => container.appendChild(createProductContainer(...product)));
// }

// // Add snacks to the snacksContainer
// addProducts(snacksContainer, [
//   ['Peanuts', 'Ristede peanuts, kaffir limeblade, havsalt, sprøde løg og ristet chili. VG, GF.', 'img/takeaway/peanuts.webp', 'Snack 1', 40],
//   ['Shrip chips', 'Luftige rejeschips. Serveres med sweet chili sauce.', 'img/takeaway/shrimpChips.webp', 'Snack 2', 45],
//   ['Wontons', 'Knasende, sprøde wontons med krydret fyld af kylling, rejer, forårsløg og koriander. 5 stk.', 'img/takeaway/wontons.webp', 'Snack 3', 45],
//   ['Crispy beef', 'Soyamarineret oksefilet, dybstegt i tynde strimler.Serveres med soya chili sauce.', 'img/takeaway/crispyBeef.webp', 'Snack 4', 85],
//   ['Spring rolls', 'Sprøde forårsruller med kylling, gulerod, kartofler, glasnudler og hvidkål. 3 stk.', 'img/takeaway/springRolls.webp', 'Snack 5', 75],
//   ['Fresh spring rolls', 'Agurk, gulerod, salat, sød thaibasilikum, mynte og koriander rullet i rispapir. 6 stk. VG, GF', 'img/takeaway/freshSpringRolls.webp', 'Snack 6', 79],
//   ['Vegan spring rolls', 'Sprøde, veganske forårsruller med gulerod, bønnespirer, glasnudler, hvidkål og forårsløg. 3 stk. VG', 'img/takeaway/veganSpringRolls.webp', 'Snack 7', 79],
//   // ... (add other snacks)
// ]);

// // Add salads to the saladsContainer
// addProducts(saladsContainer, [
//   ['Broccoli thai kale', 'Ristet broccoli og thai kale med hvidløg. VG.', 'img/takeaway/broccoliThaiKale.webp', 'Side 1', 65],
//   ['Cucumber salad', 'Traditionel, thailandsk agurkesalat, Tam Taeng, med thaibønner og thaiauberginer. GF, H', 'img/takeaway/cucumberSalad.webp', 'Side 2', 65],
//   ['Green papaya', 'Blandet salat med grøn papaya, gulerod, thaibønner og cherrytomater. Toppet med frisk chili og peanuts. GF', 'img/takeaway/greenPapaya.webp', 'Side 3', 65],
//   ['Eggplant w beans', 'Lange thaiauberginer med soyabønner, hvidløg,sød thaibasilikum og frisk chili. VG', 'img/takeaway/eggplantWBeans.webp', 'Side 4', 65],
//   ['Morning glory', 'Thaispinat stegt i wok sammen med hvidløg,frisk chili og sprøde løg. VG, HH', 'img/takeaway/morningGlory.webp', 'Side 5', 65],
//   ['Jasminris', '', 'img/takeaway/jasminris.webp', 'Side 6', 25],
//   ['Brune jasminris', '', 'img/takeaway/bruneJasminris.webp', 'Side 7', 25]
//   ['Risnudler', '', 'img/takeaway/risnudler.webp', 'Side 8', 25],
//   // ... (add other salads)
// ]);

// // Add small dishes to the smallDishes container
// addProducts(smallDishes, [
//   ['Fried tofu sticks', 'Dybstegte tofuspyd med knuste peanuts. Serveres med sweet & sour peanutsauce. 3 stk. VG, GF.', 'img/takeaway/friedTofuSticks.webp', 'Small 1', 85],
//   ['Chicken meatballs', 'Saftige kyllingekødboller med forårsløg og løg.Serveres med tamarindsauce. 3 stk.', 'img/takeaway/chickenMeatballs.webp', 'Small 2', 75],
//   ['Chicken wings', 'Dybstegte, marinerede chicken wings. Toppet med stegt, sød thaibasilikum. 3 stk.', 'img/takeaway/chickenWings.webp', 'Small 3', 75],
//   ['Corn fritters', 'Sprøde majsfritter med hvidløg, koriander, forårsløg og grøn chili. 3 stk. V', 'img/takeaway/cornFritters.webp', 'Small 4', 75],
//   ['Tamarind prawns', 'Marinerede tigerrejer i tamarindsauce med koriander, sprøde løg og chili. 5 stk.', 'img/takeaway/tamarindPrawns.webp', 'Small 5', 89],
//   ['Salmon w sauce', 'Grillet, marineret laks toppet med dressing lavet af koriander, hvidløg, lime og chili. GF, H', 'img/takeaway/salmonWSauce.webp', 'Small 6', 110],
//   ['Chicken satay', 'Marinerede kyllingespyd. Serveres med peanutsauce. 3 stk.', 'img/takeaway/chickenSatay.webp', 'Small 7', 75],
//   // ... (add other small dishes)
// ]);

// // Add soups and noodles to the soupsAndNoodles container
// addProducts(soupsAndNoodles, [
//   ['Tom kha', 'Kokossuppe med kylling, østershat, stråsvampe,citrongræs og galangal. Toppet med frisk chili, koriander og forårsløg.', 'img/takeaway/tomKhaSoup.webp', 'Soup and noodle 1', 175],
//   ['Fried noodles', 'Fintskåret oksekød stegt i wok med risnudler, æg, thai kale, broccoli, bønnespirer og forårsløg.', 'img/takeaway/friedNoodles.webp', 'Soup and noodle 2', 195],
//   // ... (add other soups and noodles)
// ]);