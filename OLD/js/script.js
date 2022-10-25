alert("Bienvenido a Wolf informatica. Por favor ingrese su usuario para continuar");
console.log("Bienvenido a Wolf Informatica. Por favor ingrese su usuario para continuar")

let usuario = prompt("Ingrese su usuario");
let password = prompt("Ingrese su password");

if(usuario == "Wolf" && password == "123"){
    alert("Hola " + usuario);
    console.log("Hola" + usuario);
    Main();
}else{
    alert("Password o usuario Incorrecto");
    usuario = prompt("Ingrese su usuario");
    password = prompt("Ingrese su password");
}



function Main(){
    if(usuario !=""){
        let opcion = prompt("1-Comprar componente.\n" + "2-Solicitar mantenimiento.\n" + "3-Seguimiento de mantenimiento\n");
        switch(opcion){
    
            case "1":
            Tienda();
            break;
        
            case "2":
            Mantenimiento();
            break;
        
            case "3":
            Seguimiento();
            break;
        }
        opcion = prompt("1-Comprar componente.\n" + "2-Solicitar mantenimiento.\n" + "3-Seguimiento de mantenimiento\n");
        }else{
        alert("Debe loguearse para poder acceder");
        console.log("Debe loguearse para poder acceder");
    }
}


function Tienda (){
    alert("Elija una opcion para continuar");
    let componente = prompt("Componente:\n" + "1-Procesador\n" + "2-Motherboard\n" + "3-Memoria Ram\n" + "4-Fuente de alimentacion\n" + "5-Gabinetes\n" + "6-Almacenamieno\n" + "7-VGA\n" + "8-Disipadores\n");
    switch(componente){
        case "1":
        alert("Esta seccion del programa esta en desarrollo, vuelva en el proximo commit");
        Main();
        break;
        case "2":
        alert("Esta seccion del programa esta en desarrollo, vuelva en el proximo commit");
        Main();
        break;
        case "3":
        alert("Esta seccion del programa esta en desarrollo, vuelva en el proximo commit");
        Main();            
        break;
        case "4":
        alert("Esta seccion del programa esta en desarrollo, vuelva en el proximo commit");
        Main();                        
        break;
        case "5":
        alert("Esta seccion del programa esta en desarrollo, vuelva en el proximo commit");
        Main();                        
        break;
        case "6":
        alert("Esta seccion del programa esta en desarrollo, vuelva en el proximo commit");
        Main();                        
        break;
        case "7":
        alert("Esta seccion del programa esta en desarrollo, vuelva en el proximo commit");
        Main();                        
        break;
        case "8":
        alert("Esta seccion del programa esta en desarrollo, vuelva en el proximo commit");
        Main();                        
        break;
        componente = prompt("Componente:\n" + "Procesador\n" + "Motherboard\n" + "Memoria Ram\n" + "Fuente de alimentacion\n" + "Gabinetes\n" + "Almacenamieno\n" + "VGA\n" + "Disipadores\n");
    }
    
}

function Mantenimiento(){
    let mantenimiento = prompt("Ingrese marca modelo de equipo");
    let problema = prompt("Explique su problema");
    console.log("Ingrese marca y modelo de equipo");
    console.log("Explique su problema");
    alert("Su solicitud sera revisada a la brevedad, gracias por confiar en Wolf Informatica");
    
}

function Seguimiento(){
    let Seguimiento = prompt("Ingrese el numero de seguimiento de tu mantenimiento");
    if (Seguimiento=="1234567890"){
        alert("Su mantenimiento " + Seguimiento + " se esta efectuando, le avisaremos cuando tengamos novedades");
        Main();
    }else{
        alert("No tenemos un mantenimiento con numero " + Seguimiento + "en nuestro reegistro");
        Main();
    }
}