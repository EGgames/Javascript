const idMantenimiento = document.getElementById('id_mantenimiento')
const mailEstado = document.getElementById('emailEstado')
const btnSolicitud = document.getElementById('btnSolicitud')
const btnEstado = document.getElementById('btnEstado')

const name = document.getElementById('nombre')
const problem = document.getElementById('problema')
const description = document.getElementById('descripcion')
const emailSolicitud = document.getElementById('email-solicitud')

mensaje=document.getElementById('error-message');
mensajeSolicitud=document.getElementById('message_soli');


if (localStorage.getItem('mantenimientos')){
    mantenimientos=JSON.parse(localStorage.getItem('mantenimientos'))
}else{
    mantenimientos=[];
}
function limpiarCampos(){
    name.value='';
    emailSolicitud.value='';
    problem.value='';
    description.value='';
    
}
class Mantenimiento{
    constructor(idMantenimiento,emailRegistro,problem, description){
        this.idMantenimiento=idMantenimiento++;
        this.emailRegistro=emailSolicitud;
        this.problem=problem;
        this.rol='Mantenimiento Preventivo';
    }
}

function recuperarLocalStorage(){
    return JSON.parse(localStorage.getItem('mantenimientos'));
}

function guardarEnStorage(mantenimientos){
    return localStorage.setItem('mantenimientos',JSON.stringify(mantenimientos));
}

function guardarMantenimiento(mantenimiento){
    return mantenimientos.push(mantenimiento)
}

name.addEventListener('click',()=>{
    mensaje.innerText='';
})
emailSolicitud.addEventListener('click',()=>{
    mensaje.innerText='';
})
problem.addEventListener('click',()=>{
    mensaje.innerText='';
})
description.addEventListener('click',()=>{
    mensaje.innerText='';
})

idMantenimiento.addEventListener('click',()=>{
    mensajeSolicitud.innerText='';
})


btnSolicitud.addEventListener('click',(e)=>{
    e.preventDefault();
    if (name.value==''){
        mensaje.innerText='Debe ingresar un nombre';
    }else if (emailSolicitud.value==''){

        mensaje.innerText='Debe ingresar un correo';
    }else if ((problem.value=='')){
        mensaje.innerText='Debe ingresar un problema';
    }else if ((description.value=='')){
        mensaje.innerText='Debe ingresar una descripcion';
    }else{
    let nuevoMantenimiento=new Mantenimiento(idMantenimiento.value, emailSolicitud.value, problem.value, description.value);
    guardarMantenimiento(nuevoMantenimiento);
    guardarEnStorage(mantenimientos);
    idMantenimiento.value++;
    mensaje.innerText='Agregado Exitosamente con id de mantenimiento ' + idMantenimiento.value;
    limpiarCampos(); 
    }

})

btnEstado.addEventListener('click', (e)=>{
    e.preventDefault();
    if (idMantenimiento.value==''){
        mensaje.innerText='Debe ingresar un id de mantenimiento';
    }EstadoMantenimiento(mantenimientos)
})

function EstadoMantenimiento(mantenimientos){
    let encontrado=mantenimientos.find((mantenimiento)=>{
        return mantenimiento.idMantenimiento==idMantenimiento.value
    });
    console.log(encontrado);
    if (encontrado){
        mensajeSolicitud.innerText='Mantenimiento en desarrollo. Consulte nuevamente mas tarde';
    }else{
        mensajeSolicitud.innerText='ID de mantenimiento incorrecto';
    }
}