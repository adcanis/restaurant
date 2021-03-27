
function makeContact() {
  const content = document.querySelector("#content");
  const contact = document.createElement("modal");
  contact.classList.add('modal');
  contact.setAttribute("id", "contact");

  contact.innerHTML = `
  <div class="main">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">We would love to hear from you</p>
    </header>
    <section class="modal-card-body" id="contactSection">
    <input class="input" type="text" placeholder="First Name">
    <input class="input" type="text" placeholder="Last Name">
    <input class="input" type="text" placeholder="email@email.com">
    <textarea class="textarea" placeholder="Whats on your mind"></textarea>
    <button class="button is-info" id="sendMsg">Send Message</button>
      
    </section>
    <footer class="modal-card-foot">
      <button class="button is-dark" id="contactClose">Close</button>
    </footer>
  </div>
  </div>
</div>
`;

  content.appendChild(contact);

} makeContact();

export { makeContact };