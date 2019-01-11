let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let form = document.getElementsByClassName("form-content");
let success = document.getElementsByClassName("alert success");
let error = document.getElementsByClassName("alert error");
let user = document.getElementById("user");
let input = [name, email, message];

function submit() {
  if (name.value && email.value && message.value !== "") {

    user.innerHTML = name.value + " ";
    success[0].style.display = "block";

    for (let i = 0; i < input.length; i++) {

      input[i].style.borderColor = "rgb(91, 212, 95)";
      input[i].value = "";
    }

  } else {

    error[0].style.display = "block";

    for (let i = 0; i < input.length; i++) {

      if (input[i].value == "") {

        input[i].style.borderColor = "#f52c1ee3";
      }
    }

  }
}