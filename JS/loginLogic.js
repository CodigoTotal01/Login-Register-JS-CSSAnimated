// variables 
const sign_in_btn = document.querySelector("#sign-in-btn"); //!ingresar cuenta 
const sign_up_btn = document.querySelector("#sign-up-btn"); //!crear cuenta
const container = document.querySelector(".container"); //!seleccion del contenedor
const formulario = document.querySelector("form");
const ingresarFormulario = document.querySelector(".sign-in-form");
const registrarteFormulario = document.querySelector(".sign-up-form");
const btnLocalIn = document.querySelector("#btnLocalIn");
const btnLocalUp = document.querySelector(".sign-up-form");



//event listerner 
window.onload = () => {
    eventListeners();
}
//functions
function eventListeners() {
    sign_up_btn.addEventListener("click", transitionRegistrarce);
    sign_in_btn.addEventListener("click", transitionIniciarSecion);
    ingresarFormulario.addEventListener("submit", ingresar);
    registrarteFormulario.addEventListener("submit", registrar);
}

function transitionRegistrarce() {
    container.classList.add("sign-up-mode");
}

function transitionIniciarSecion() {
    container.classList.remove("sign-up-mode");
}

function registrar(e) {
    e.preventDefault();
    const usernameUp = document.querySelector("#username-up").value;
    const passwordUp = document.querySelector("#password-up").value;
    const passwordUpConfirm = document.querySelector("#password-up-confirm").value;
    const emailUp = document.querySelector("#email-up").value;
    //evaluamos el contenido de los imput 

    if (usernameUp === "" || passwordUp === ""|| emailUp===""|| passwordUpConfirm ==="") {
        mostrarAlerta("Se requiere rellenar todos los campos", "error", btnLocalUp)
        return;
    }
}

function ingresar(e) {
    e.preventDefault();
    const usernameIn = document.querySelector("#username-in").value;
    const passwordIn = document.querySelector("#password-in").value;
    //evaluamos el contenido de los imput 
    if (usernameIn === "" || passwordIn === "") {
        //mostrar error
        mostrarAlerta("Se requiere rellenar todos los campos", "error", btnLocalIn)
        return;
    }
/*si todo sale bien mostrar espiner y redirigir al pomodoro*/

}

//generando clase que se encarga de el UI del proeycto 

   function  mostrarAlerta(message, tipe, btnLocal) {
        //gernarand div

        const existeError = document.querySelector('.error');

        if (tipe === "error" & !existeError) {
            const divMensaje = document.createElement("div");
            divMensaje.textContent = message;
            divMensaje.classList.add("error");
            formulario.insertBefore(divMensaje, btnLocal);
            setTimeout(() => {
                divMensaje.remove();
            }, 3000);
        }

    }



// error al ingresar cambpos imbalidos
// enlaces como nodos
//elementos higuales dentro de un padre son hermanos


/*
//!Error
const divError = document.createElement("div");
divError.textContent="Alerta";
divError.classList.add("alerta");
console.log(formulario.children)
formulario.children[3].before(divError);
*/
