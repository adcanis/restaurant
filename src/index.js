//<-----Imports----->\\
import { makePage } from "./setpage";
import { makeHome } from "./home";
import { makeMenu } from "./menu";
import { makeContact } from "./contact";

//<-----Main Nav Buttons----->\\
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

orderBtn.addEventListener('click', function () {
    alert('Online Ordering has been disabled');
})

cartBtn.addEventListener('click', function () {
  alert('Your cart is currently disabled');
})

homeBtn.addEventListener('click', function () {
  location.reload();
})

menuBtn.addEventListener('click', function () {
  menu.style.display = 'block';
})

contactBtn.addEventListener('click', function () {
  contact.style.display = 'block';
})

//<-----Home Page----->\\
orderBtnBig.addEventListener('click', function () {
  alert('Online Ordering has been disabled');
})

//<-----Menu Page----->\\
menuClose.addEventListener('click', function () {
  menu.style.display = 'none';
})

const addToCart = document.querySelectorAll('#addToCart');
addToCart.forEach(button => button.addEventListener('click', function () {
  alert('Your Cart is currently disabled');
}))

//<-----Contact Page----->\\
sendMsg.addEventListener('click', function () {
  alert('Thank you for your message!');
})

contactClose.addEventListener('click', function () {
  contact.style.display = 'none';
})




//<-----Footer Nav Buttons----->\\
toTop.addEventListener('click', function () {
  document.documentElement.scrollTop = 0;
})
