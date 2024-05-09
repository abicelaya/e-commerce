// Exercise 6
function validate() {
  var error = 0;
  // Get the input fields
  var fName = document.getElementById("fName");
  var fEmail = document.getElementById("fEmail");
  var fAddress = document.getElementById("fAddress");
  var fLastN = document.getElementById("fLastN");
  var fPassword = document.getElementById("fPassword");
  var fPhone = document.getElementById("fPhone");

  // Get the error elements
  var errorName = document.getElementById("errorName");
  var errorEmail = document.getElementById("errorEmail");
  var errorAddress = document.getElementById("errorAddress");
  var errorLastN = document.getElementById("errorLastN");
  var errorPassword = document.getElementById("errorPassword");
  var errorPhone = document.getElementById("errorPhone");

  let caracterMinimo = 3;
  let expresionRegularLetras = /^[A-Za-z]+$/;
  let expresionRegularNumeros = /^[0-9]+$/;
  let expresionRegularPass = /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]+$/;
  let expresionRegularEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  // Validate fields entered by the user: name, phone, password, and email

  // ***Name***
  if (
    fName.value == "" ||
    fName.value.lenght < caracterMinimo ||
    expresionRegularLetras.test(fName.value) == false
  ) {
    fName.classList.add("is-invalid");
    errorName.style.display = "block";
    error++;
  } else {
    fName.classList.remove("is-invalid");
    errorName.style.display = "none";
  }

  // ***Email***
  if (
    fEmail.value == "" ||
    fEmail.value.lenght < caracterMinimo ||
    expresionRegularEmail.test(fEmail.value) == false
  ) {
    fEmail.classList.add("is-invalid");
    errorEmail.style.display = "block";
    error++;
  } else {
    fEmail.classList.remove("is-invalid");
    errorEmail.style.display = "none";
  }

  // ***Address***
  if (fAddress.value == "" || fAddress.value.lenght < caracterMinimo) {
    fAddress.classList.add("is-invalid");
    errorAddress.style.display = "block";
    error++;
  } else {
    fAddress.classList.remove("is-invalid");
    errorAddress.style.display = "none";
  }

  // ***Last Name***
  if (
    fLastN.value == "" ||
    fLastN.value.lenght < caracterMinimo ||
    expresionRegularLetras.test(fLastN.value) == false
  ) {
    fLastN.classList.add("is-invalid");
    errorLastN.style.display = "block";
    error++;
  } else {
    fLastN.classList.remove("is-invalid");
    errorLastN.style.display = "none";
  }

  // ***Password***
  if (
    fPassword.value == "" ||
    fPassword.value.lenght < caracterMinimo ||
    expresionRegularPass.test(fPassword.value) == false
  ) {
    fPassword.classList.add("is-invalid");
    errorPassword.style.display = "block";
    error++;
  } else {
    fPassword.classList.remove("is-invalid");
    errorPassword.style.display = "none";
  }
  // ***Phone***
  if (
    fPhone.value == "" ||
    fPhone.value.lenght < caracterMinimo ||
    expresionRegularNumeros.test(fPhone.value) == false
  ) {
    fPhone.classList.add("is-invalid");
    errorPhone.style.display = "block";
    error++;
  } else {
    fPhone.classList.remove("is-invalid");
    errorPhone.style.display = "none";
  }

  if (error > 0) {
    alert("Error");
    return false;
  } else {
    alert("OK");
    return true;
  }
}
