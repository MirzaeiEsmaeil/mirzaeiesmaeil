const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', ()=> {
    navLinks.classList.toggle('active');
    menuBtn.innerHTML = navLinks.classList.contains('active')
    ? "<i class='ri-close-large-line'></i>"
    : "<i class='ri-menu-line'></i>";
})

document.querySelectorAll('.nav-links a').forEach((link)=>{
    link.addEventListener('click', ()=>{
        navLinks.classList.remove('active');
        menuBtn.innerHTML = "<i class='ri-menu-line'></i>";
    })
})

const texts = [
    "Front-End developer",
    "Back-End developer",
    "Software developer",
    "Database manager"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing-effect').textContent = letter;

    if(letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
    }
    else {
        setTimeout(type, 100);
    }
}


document
  .querySelector('.newsletter-form')
  .addEventListener('submit', function (e) {

    e.preventDefault();

    const form = this;
    const email = form.querySelector('input[type="email"]').value;
    const originalHTML = form.innerHTML;

    fetch("send.php", {
      method: "POST",
      body: new FormData(form)
    })
    .then(response => response.text())
    .then(data => {

      form.innerHTML = `
      <div style="text-align:center; padding:20px; border-radius:10px; background:rgba(76,175,80,0.1);">
        <i class="ri-checkbox-circle-line" style="font-size:3rem; color:#4CAF50;"></i>
        <p>Your message has been sent!</p>
        <p>We will contact you soon.</p>
      </div>
      `;

      setTimeout(() => {
        form.innerHTML = originalHTML;
      }, 3000);

    });

});


