// Obtener referencias a los elementos HTML
let formulario = document.getElementById('form-cliente');
let num4Case = document.getElementById('num4');
let span_numeros=document.getElementById('numeros-icon');
let consecutivoCase = document.getElementById('consecutivo');
let span_consecutivo=document.getElementById('consecutivo-icon');
let igualesCase = document.getElementById('iguales');
let span_iguales=document.getElementById('iguales-icon');
 
function checkPassword (data){
  // Patrón para 4 caracteres numéricos
    const num4 = new RegExp('^[0-9]{4}$'); 
     // Patrón para tres dígitos repetidos 
    const repeatedDigitsPattern = /(\d).*\1.*\1/;
    // Patrón para tres dígitos consecutivos
    const consecutiveDigitsPattern = /(?:012|123|234|345|456|567|678|789|890|901)/; // Tres dígitos consecutivos

     
    // Verificar si tiene 4 caracteres numéricos 
    if(num4.test(data)){
      num4Case.classList.add('list-group-item-success')
      span_numeros.classList.replace('text-bg-light', 'text-bg-success');
      span_numeros.classList.replace('bi-dash-circle-dotted', 'bi-check2');  
    }else{
      num4Case.classList.remove('list-group-item-success')
      span_numeros.classList.replace('text-bg-success', 'text-bg-light');
      span_numeros.classList.replace('bi-check2', 'bi-dash-circle-dotted');
    }
  
    // Verificar si no tiene más de dos números repetidos consecutivos
    if (!repeatedDigitsPattern.test(data) ) {
        igualesCase.classList.add('list-group-item-success');
        span_iguales.classList.replace('text-bg-light', 'text-bg-success');
        span_iguales.classList.replace('bi-dash-circle-dotted', 'bi-check2');
    } else {
        igualesCase.classList.remove('list-group-item-success');
        span_iguales.classList.replace('text-bg-success', 'text-bg-light');
        span_iguales.classList.replace('bi-check2', 'bi-dash-circle-dotted');
    }

// Verificar si no tiene más de dos números consecutivos
    if (!consecutiveDigitsPattern.test(data)) {
        consecutivoCase.classList.add('list-group-item-success');
        span_consecutivo.classList.replace('text-bg-light', 'text-bg-success');
        span_consecutivo.classList.replace('bi-dash-circle-dotted', 'bi-check2');
    } else {
        consecutivoCase.classList.remove('list-group-item-success');
        span_consecutivo.classList.replace('text-bg-success', 'text-bg-light');
        span_consecutivo.classList.replace('bi-check2', 'bi-dash-circle-dotted');
    }

}

formulario.addEventListener('submit', function(event) {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

      // Verificar si las contraseñas coinciden
      if (password !== confirmPassword || password === '' || confirmPassword === '') {
        event.preventDefault();
        alert('Error: La contraseña no cumple con los requisitos.');
        return;
    }
    alert('Éxito: carga exitosa enviando formulario...');
});
 