import jquery=require('jquery');

const $:JQueryStatic=jquery;



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event:any) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

$('#Python').prop('required', true)
$('#TypeScript').prop('required', true)
$('#C1').prop('required', true)
$('#C').prop('required', true)
$('#PHP').prop('required', true)
$('#Ruby').prop('required', true)
$('#R').prop('required', true)
$('#Groovy').prop('required', true)
$('#Go').prop('required', true)
$('#Swift').prop('required', true)
$('#Kotlin').prop('required', true)
$('#Estructura').prop('required', true)
$('#Inteligencia').prop('required', true)
$('#Interaccion').prop('required', true)
$('#Sistemas').prop('required', true)
$('#Otro').prop('required', true)

let limpiar:any=document.getElementById("limpiar");
limpiar.addEventListener("click",limpiarDatos);
let enviar:any=document.getElementById("enviar")
enviar.addEventListener("click",checkbox1)
enviar.addEventListener("click",checkbox2)

function limpiarDatos(){
  $(':input','#formulario')

  .not(':button, :submit, :reset, :hidden')

  .val('')

  .prop('checked', false)

  .prop('selected', false);
  $('#Python').prop('required', true)
  $('#TypeScript').prop('required', true)
  $('#C1').prop('required', true)
  $('#C').prop('required', true)
  $('#PHP').prop('required', true)
  $('#Ruby').prop('required', true)
  $('#R').prop('required', true)
  $('#Groovy').prop('required', true)
  $('#Go').prop('required', true)
  $('#Swift').prop('required', true)
  $('#Kotlin').prop('required', true)
  $('#Estructura').prop('required', true)
  $('#Inteligencia').prop('required', true)
  $('#Interaccion').prop('required', true)
  $('#Sistemas').prop('required', true)
  $('#Otro').prop('required', true)
}


function checkbox1(){
  if($('#lenguajes input:checked').length > 0){
    $('#Python').removeAttr('required')
    $('#TypeScript').removeAttr('required')
    $('#C1').removeAttr('required')
    $('#C').removeAttr('required')
    $('#PHP').removeAttr('required')
    $('#Ruby').removeAttr('required')
    $('#R').removeAttr('required')
    $('#Groovy').removeAttr('required')
    $('#Go').removeAttr('required')
    $('#Swift').removeAttr('required')
    $('#Kotlin').removeAttr('required')
  }
}

function checkbox2(){
  let entrada:string=String($('#Otro').val())
  if($('#dificultad input:checked').length > 0 || entrada.length > 0){
    $('#Estructura').removeAttr('required')
    $('#Inteligencia').removeAttr('required')
    $('#Interaccion').removeAttr('required')
    $('#Sistemas').removeAttr('required')
    $('#Otro').removeAttr('required')
  }
}


