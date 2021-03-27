//<-----Imports----->\\
import { makePage } from "./setpage";
import { makeHome } from "./home";
import { makeMenu } from "./menu";
import { makeContact } from "./contact";

//<-----Main Nav Buttons----->\\
orderBtn.addEventListener('click', function () {
    alert('Online Ordering has been disabled');
})

userBtn.addEventListener('click', function () {
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
