$(document).ready(function() {
    const Swal = window.Swal;
  
    $('#formulario').validate({
      rules: {
        inputNombre: "required",
        inputEmail: {
          required: true,
          email: true
        },
        inputPassword: {
          required: true,
          minlength: 8
        }
      },
      messages: {
        inputNombre: "Por favor, Escriba su nombre",
        inputEmail: {
          required: "Ingrese su correo electronico",
          email: "Por favor, Introduzca un correo electronico valido"
        },
        inputPassword: {
          required: "Introduzca su contraseña",
          minlength: "La constraseña debe tener 8 caracteres minimo"
        }
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });