document.querySelector("#registrateButton").addEventListener("click", testFields);
document.querySelector("#loginButton").addEventListener("click", loginMethod);
function testFields() {
  "use strict";
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  let forms = document.querySelectorAll(".needs-validation");
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (form.checkValidity()) {
          event.preventDefault();
          event.stopImmediatePropagation();
          registration();
          return false;
        } else {
          event.preventDefault();
          event.stopPropagation();
          alert("Molimo vas da popunite obavezna polja");
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
}

function registration() {
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let ime = document.querySelector("#ime").value;
  let prezime = document.querySelector("#prezime").value;
  let datum = document.querySelector("#datum").value;
  let pol = 1;
  if (document.querySelector("#zenski").checked) {
    pol = 2;
  }

  let data = "email=" + email + "&ime=" + ime + "&prezime=" + prezime + "&password=" + password + "&datum=" + datum + "&pol=" + pol;
  console.log(data);
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      let answer = JSON.parse(this.responseText);
      if (answer.success) {
        alert("Uspješno ste kreirali novi nalog!");
        location.reload();
      } else {
        alert(answer.message);
      }
    }
  };
  xhttp.open("POST", "./saveRegistration.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(data);
}

function loginMethod() {
  let email = document.querySelector("#usernameLogin").value;
  let password = document.querySelector("#passwordLogin").value;
  let url = "./login.php?email=" + email + "&password=" + password;
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    let answer = JSON.parse(this.responseText);
    if (answer.success) {
      window.open("./index.html", "_self");
    } else {
      alert(answer.message);
    }
  };
  xmlhttp.open("GET", url);
  xmlhttp.send();
}
