document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
  
    let valid = true;
  
    // Simple validation
    [name, email, message].forEach((field) => {
      if (!field.value.trim()) {
        field.classList.add("is-invalid");
        valid = false;
      } else {
        field.classList.remove("is-invalid");
      }
    });
  
    if (valid) {
      alert("Message sent successfully!");
      this.reset();
    }
  });
  