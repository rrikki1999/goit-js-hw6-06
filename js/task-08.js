const registerForm = document.querySelector(".form");
registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  
  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
    return;
  }
  const formData = {
    email: email,
    password: password
  };

  console.log(formData);
 
  form.reset();
}