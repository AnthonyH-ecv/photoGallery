let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

function submit() {

  if (name.value && email.value && message.value !== '') {
    console.log("success")
  } else {
    console.log("error");
  }
}