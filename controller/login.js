document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("formularioLogin")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Evitar que el formulario se envíe
      let nombre = document.getElementById("nombre");
      let password = document.getElementById("password");

      console.log(nombre.value + " " + password.value);

      if (!validateLogin(nombre.value, password.value)) {
        console.log("No existe este usuario");
        nombre.value = "";
        password.value = "";

        let parrafoError = document.createElement("p");
        let divError = document.getElementById("errorLogin");

        if (!divError.firstChild) {
          parrafoError.innerHTML = "Usuario o contraseña incorrecto";
          parrafoError.style.color = "red";
          divError.appendChild(parrafoError);
        }

        return;
      }
      console.log("Sesion iniciada");
      window.location.href = "../game/game.html";
    });

  function validateLogin(name, password) {
    if (name == "edu" && password == "edu") {
      return true;
    }

    return false;
  }
});
