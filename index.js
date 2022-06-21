const names = document.getElementById("name"),
  email = document.getElementById("email"),
  form = document.getElementById("formulario"),
  errorE = document.getElementById("error");

const tomarValor = (e) => {
  e.preventDefault();

  let dataName = names.value;
  let dataEmail = email.value;

  names.value = "";
  email.value = "";

  console.log(`Nombre: ${dataName}, Correo: ${dataEmail}`);
  alert("Gracias por suscribirse a Noticias Nucba");
};

form.addEventListener("submit", tomarValor);
