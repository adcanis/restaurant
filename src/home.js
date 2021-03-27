function makeHome() {
    const content = document.querySelector("#content");
    const home = document.createElement("div");
    home.classList.add("tab-content");

    home.innerHTML = `<div id="home" class="active" data-tab-content>
<div class="main">
    <div id="aboutus">

    <p id="mission">At "Your Restaurant", we know what we've got in our backyard. We aren't dubbed Ontario's Garden for no good reason</p>
    <p id="mission">Every morning we head out and gather our ingredients from you! That's right, you. We pride ourselves in knowing that the hands that worked this land, grew our herbs, fished our waters and raised our animals are the ones that put this wonderful food to plate. So kick off the boots, turn the john-deere off and join us for some grub!</p>
    </div>

    <div id="orderNow">

    <p id="orderText"><span><i id="fire" class="fas fa-fire"></i></span>  Our wood stove is burning away <span><i id="fire" class="fas fa-fire"></i></span></p>
    <p id="orderText">We're just waiting for you to click that button!</p>
    <button class="button is-danger" id="orderBtnBig">Order Now</button>
    </div>

</div>
  <div id="footerNav">
              <nav class="navbar" role="navigation" aria-label="main navigation">
              <img id="logo" src="images/logo.png">
              <div class="navbar-end">
                <div class="navbar-item">
                <div class="buttons">
                <a class="button fas fa-arrow-up" id="toTop">
                </a>
              </div>
            </div>
          </nav>
          </div>
`;
  
    content.appendChild(home);

  } makeHome();
  
  export { makeHome };