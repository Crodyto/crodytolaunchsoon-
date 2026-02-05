const btn = document.getElementById("notifyBtn");

btn.addEventListener("click", () => {
  const phone = document.getElementById("phone").value.trim();

  if (!phone || phone.length < 10) {
    alert("Please enter a valid mobile number");
    return;
  }

  console.log("User Phone Number:", phone);
  alert("Thanks! We'll notify you soon 🚀");

  document.getElementById("phone").value = "";
});
