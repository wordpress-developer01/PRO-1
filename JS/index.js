document.getElementById('install').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = "files/code-projects-main.zip";
    link.download = "code-projects-main.zip";
    link.click();
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
      const name = document.getElementById('fname').value.trim();
      const lastName = document.getElementById('lname').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const status = document.getElementById("form-status");

      if(!name || !lastName || !email || !message) {
          status.textContent = "Пожалуйста, заполните все поля.";
          status.style.color = "red";
          return;
      }
});
