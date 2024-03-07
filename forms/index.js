document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
  
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const formData = new FormData(contactForm);
  
      const payload = {
        fromEmail: "notarizedocuments4you@gmail.com",
        fromName: "Mary Mcilvain",
        fromPhone: "+1 (425) 765-4195",
        name: formData.get('name'),
        subject: formData.get('subject'),
        email: formData.get('email'),
        phoneNumber: "+91 70222 41471",
        message: formData.get('message'),
      };
  
      fetch("https://api.thenotary.app/service-form/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(data => {
          document.querySelector(".sent-message").style.display = "block";
          contactForm.reset();
        })
        .catch(error => {
          document.querySelector(".error-msg").innerText = "An error occurred while sending your message. Please try again later.";
          document.querySelector(".error-msg").style.display = "block";
        });
    });
  });
  