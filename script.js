function submitForm(event) {
  event.preventDefault();

  // Get form values
  let name = document.querySelector("input[placeholder='Student Name']").value;
  let phone = document.querySelector("input[placeholder='Phone Number']").value;
  let className = document.querySelector("select").value;

  // Your WhatsApp number (change this)
  let yourNumber = "9779842828259";

  // Message format
  let message = `New Admission Form:%0A
Name: ${name}%0A
Phone: ${phone}%0A
Class: ${className}`;

  // Open WhatsApp
  let url = `https://wa.me/${yourNumber}?text=${message}`;

  window.open(url, "_blank");
}
