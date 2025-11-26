// const nuevoElemento = document.createElement('A');
// // una vez creado el nuevo elemnto se debe poner los distintos atributos
// //href
// nuevoElemento.href='https://www.linkedin.com/in/joel-franco-3990111a0/';
// //texto
// nuevoElemento.textContent='Linkedin';
// //class
// nuevoElemento.classList = 'Nueva__clase navegacion__link'


// //agregar al documento

// console.log(nuevoElemento);


// const navegacion = document.querySelector('.navegacion');

// navegacion.appendChild(nuevoElemento);



// //Eventos

// console.log('1');

// window.addEventListener('load', imprimir);


// document.addEventListener('DOMContentLoaded',  function(){ //se ejecuta primero que el evento de la ventana window que pusimos por que solo espera que se descargue el HTML, no espera JS ni CSS
//     console.log('4');
// })

// console.log('5');


// //funciones para reutilizar
//  function imprimir(){ //load espera a que el JS y lo s archivos que dependen del HTML esten listos 
//     console.log('3');
    
//     console.log('2');
// }


//SELECCIONAR ELEMENTOS DE NUESTRO HTML Y ASOCIARLES UN EVENTO.

// const btnEnviar = document.querySelector('.campo__bonton--enviar');

// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault();
//     // console.log('enviado');
// }) 



//primero se seleccionan los ID y CLASES con los que se va a trabajar y se guarda en variables

const Nombre = document.querySelector('#nombre');
const email = document.querySelector('#input_email');
const mensaje = document.querySelector('#textarea_mensaje');
const formulario = document.querySelector('.formulario');

// se crea un objeto que recopilara la informacion del formulario
const datos = {
    nombre: '',
    input_email: '',
    textarea_mensaje:''
}

//ponemos a escuchar cada elemento selecionado con input, cada que el valor cambia, va a registrar actividad

Nombre.addEventListener('input', imprimir);
email.addEventListener('input', imprimir);
mensaje.addEventListener('input', imprimir);

//luego se ejecutara la funciona que hace que se cargue los datos escuchados en el objeto datos.

function imprimir(evento){
    datos[evento.target.id]= evento.target.value;
    
    console.log(datos); //solo para ver que datos esta escuchando y cargando en datos

}

//esto seria la validacion del formulario con un submit

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();


    //aplicamos un destructuring para sacar las los datos previamente escuchada y guardada en datos, y creeamos las variables

    const {nombre, input_email, textarea_mensaje} = datos;

    if(nombre=== ''|| input_email=== '' || textarea_mensaje===""){

        console.log('todos los campos son obligatorioss');
        
        return;
    }
    

    console.log(`nombre: ${nombre} , email: ${input_email}, ${mensaje}}`);
    
//imprimimos los datos que se terminario de guardar del destructuring;
    console.log('DATOS ENVIADOS');
})

