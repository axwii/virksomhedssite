window.addEventListener("load", test);

function test() {
  console.log("show test");
}

let btnContainer = document.getElementById('btn_container');
let activeButton = null;

btnContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('secondary-btn')) {
    // Check if the clicked element has the 'secondary-btn' class
    if (activeButton) {
      activeButton.classList.remove('active');
    }
    event.target.classList.add('active');
    activeButton = event.target;
  }
});
