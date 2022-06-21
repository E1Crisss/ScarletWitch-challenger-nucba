const names = document.getElementById('name'),
      email = document.getElementById('email'),
      form = document.getElementById('formulario'),
      errorE = document.getElementById('error');

const tomarValor = (e) => {
    e.preventDefault();
    
  /*   if(names){
        let dataName = names.value;
        names.value = '';
    }else{
        alert('ingresar Nombre')
        console.log('no ingreso datos');
        names.value = '';
    } */
    
    let dataName = names.value;
    let dataEmail = email.value;
    
    
    names.value = '';
    email.value = '';
    console.log(`Nombre: ${dataName}, Correo: ${dataEmail}`)
}


form.addEventListener('submit',tomarValor);