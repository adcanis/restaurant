function makeHome() {
    const content = document.querySelector("#content");
    const home = document.createElement("div");
    home.classList.add("tab-content");

    home.innerHTML = `<div id="home" class="active" data-tab-content>
<div class="main">
    <div id="aboutus">

    <p id="mission">Hi there, I am in the midst of taking the Hardvard CS50x and FullStackOpen offered by the University of Helsinki, and this project represets a course test mock up.</p>
    <p id="mission">With that said, I would like to offer this site for free. If you choose to accept this offer, I will upload your information and provide hosting for 1yr.</p>
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