document.getElementById("inquiryForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let service = document.getElementById("service").value;
  let schedule = document.getElementById("schedule").value;
  let message = document.getElementById("message").value;

  let subject = "Website Inquiry - " + service;

  let body =
    "Name: " + name + "%0D%0A" +
    "Email: " + email + "%0D%0A" +
    "Service Interested In: " + service + "%0D%0A" +
    "Preferred Schedule: " + schedule + "%0D%0A" +
    "Message: " + message;

  window.location.href =
    "mailto:YOUR_EMAIL@gmail.com?subject=" + subject + "&body=" + body;
});
