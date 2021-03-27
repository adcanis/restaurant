
function makeMenu() {
    const content = document.querySelector("#content");
    const menu = document.createElement('modal');
    menu.classList.add('modal');
    menu.setAttribute('id', 'menu');
    
    menu.innerHTML = `
    <div class="main">
    <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Our Menu</p>
    </header>
    <section class="modal-card-body" id="menuSection">

    <h3 id="menuTitle">The Norfolk</h3>
    <img id="menuPic" src="images/menu4.jpg">
    <p id="menuItem">This tasty morsal boast ingerdients from our very own roof top</p>
    <p id="price">$14.99</p>
    <button class="button is-info" id="addToCart">
    Add To Cart</button>

    <h3 id="menuTitle">The "Turkey" Pointer</h3>
    <img id="menuPic" src="images/menu1.jpg">
    <p id="menuItem">Jam packed full of flavour, there's no need to feel guilty with this Turkey burger</p>
    <p id="price">$24.99</p>
    <button class="button is-info" id="addToCart">
    Add To Cart</button>

    <h3 id="menuTitle">The Loaded Long Point</h3>
    <img id="menuPic" src="images/menu5.jpg">
    <p id="menuItem">Like the beach it's named after, this is packed! But worth every morsal</p>
    <p id="price">$24.99</p>
    <button class="button is-info" id="addToCart">
    Add To Cart</button>

    <h3 id="menuTitle">The Dover Rover </h3>
    <img id="menuPic" src="images/menu3.jpg">
    <p id="menuItem">A fantastic twist on a local favorite</p>
    <p id="price">$26.99</p>
    <button class="button is-info" id="addToCart">
    Add To Cart</button>

    <h3 id="menuTitle">The Front st. Fancy </h3>
    <img id="menuPic" src="images/menu2.jpg">
    <p id="menuItem">Need a reason to throw a pinky out? Then this is it</p>
    <p id="price">$28.99</p>
    <button class="button is-info" id="addToCart">
    Add To Cart</button>

    </section>
    <footer class="modal-card-foot">
      <button class="button is-dark" id="menuClose">Close</button>
    </footer>
  </div>
  </div>
  `;

    content.appendChild(menu);

  } makeMenu();
  
  export { makeMenu };



