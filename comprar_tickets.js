
const valorTicket = 200;

let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

let nombre = document.getElementById ("NombreTickets");
let apellido = document.getElementById("ApellidoTickets");
let mail = document.getElementById("CorreoTickets");
let cantidadTickets  = document.getElementById("Cantickets");
let categoria = document.getElementById("categoriaTickets");


function quitarClaseError() {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}


function ResetTotalAPagar() {
    quitarClaseError();
    TotalparaPago.innerHTML = "";
}



function emailValido(mail) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}



function TotalAPagarr() {

    quitarClaseError();

    if (nombre.value === "") {
        nombre.classList.add("is-invalid");
        nombre.focus();
        alert("Por favor, escribí tu nombre.");
        return;
    }

    if (apellido.value === "" ) {
        apellido.classList.add("is-invalid");
        apellido.focus();
        alert("Por favor, escribí tu apellido.");
        return;
    }

    if (mail.value === "") {
        mail.classList.add("is-invalid");
        mail.focus();
        alert("Por favor, escribí tu email.");
        return;
    }

    if (!emailValido(mail.value)) {
        mail.classList.add("is-invalid");
        mail.focus()
        alert("Por favor, escribí un correo electrónico válido.");
        return;
    }

    

    if ( (cantidadTickets.value == 0) || (isNaN(cantidadTickets.value)) ) {
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        alert("Por favor, ingresá correctamente cantidad de tickets.");
        return;
    }

    if (categoria.value == "") {
        categoria.classList.add("is-invalid");
        categoria.focus();
        alert("Por favor, seleccioná una categoría.");
        return;
    }


    let totalValorTickets = (cantidadTickets. value) * valorTicket
         
         //profe quise hacer el descuento pero no me sale 
        switch (categoria){
            case "0": totalValorTickets = totalValorTickets;
               
                break;
            case "e":  totalValorTickets = totalValorTickets - (totalValorTickets * (descuentoEstudiante / 100 ));
                 
                break;
            case "t": totalValorTickets = totalValorTickets - (totalValorTickets * (descuentoTrainee / 100 ));
                
                break;
            case "j": totalValorTickets = totalValorTickets - (totalValorTickets* (descuentoJunior / 100));
               
        }

    TotalparaPago.innerHTML =totalValorTickets; 
    
}

{ btnResumen.addEventListener("click", TotalAPagarr);
btnBorrar.addEventListener("click", ResetTotalAPagar);
   }
    /* 
    if (categoria.value == 0) {
        totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
    }
    if (categoria.value == 1) {
        totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
    }
    if (categoria.value == 2) {
        totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
    }
    if (categoria.value == 3) {
        totalValorTickets = totalValorTickets ;
    }
    */
