
function makePage() {
    const content = document.querySelector("#content");
    const header = document.createElement("header");

    header.innerHTML = `
    <nav class="navbar" role="navigation" aria-label="main navigation">
                <a href="#"><img id="logo" src="images/logo.png"></a>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
                <div class="navbar-menu" id="navMenu">
    <div class="navbar-end">
      <a class="navbar-item" id="homeBtn">
        Home
      </a>
      <a class="navbar-item" id="menuBtn" href="#menu">
        Menu
      </a>
      <a class="navbar-item" id="contactBtn" href="#contact">
        Contact
      </a>
                <div class="navbar-end">
                    <div class="navbar-item">
                      <div class="buttons">
                        <a class="button is-danger" id="orderBtn">
                          <strong>Order Now</strong>
                        </a>
                        <a class="button is-dark fas fa-shopping-cart" id="cartBtn">
                        </a>
                      </div>
                    </div>
              </nav>
              <div class="headerImg">
              <img id="headerImg" src="images/headerImg.jpg">
              </div>
            </div>
`;
  
      content.appendChild(header)

  } makePage();

 