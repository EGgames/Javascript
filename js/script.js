class Productos {
    constructor(nombre, precio, stock){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.stock = false;
    }
    IVA(){
        this.precio = this.precio * 0.22;
    }
  }
  
  const cpu1 = new Productos("Core i7 8700k", "540", true);
  
  const mother1 = new Productos("Asus ROG z370F Gaming", "250", true);
  
  const ram1 = new Productos("Corsair Vengeance 16GB DDR4 3000MHZ", "120", true);

  const psu1 = new Productos("Corsair RM850x", "150", true);
  
  const gabinete1 = new Productos("Cooler Master StormTrooper", "250", true);
  
  const almacenamiento1 = new Productos("Samsung EVO 960 250GB m.2 Nvme", "40", true);
  
  const vga1 = new Productos("EVGA RTX 3060 XC 12GB", "640", true);
  
  const disipador1 = new Productos("Cooler Master ML240R RGB", "150, true");
  
  const carrito = [];

const productosEnStock = [
{
    id:1, producto: "procesador", precio: 540
}
];


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
        let opcion = prompt("1-Comprar componente.\n" + "2-Solicitar mantenimiento.\n" + "3-Seguimiento de mantenimiento\n" + "4-Ver carrito de compras\n");
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
            case "4":
            Carrito();
        }
        opcion = prompt("1-Comprar componente.\n" + "2-Solicitar mantenimiento.\n" + "3-Seguimiento de mantenimiento\n" + "4-Ver carrito de compras\n");
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
          console.log(cpu1);
          let  cpu = prompt("1-" + cpu1.nombre +" Precio: " + cpu1.precio);
          switch(cpu){
            case "1":
            carrito.push(cpu1);
            break;
          }
          Main();
          break;
          case "2":
          console.log(mother1);
          let mother = prompt("1-" + mother1.nombre +" Precio: " + mother1.precio);
          switch(mother){
            case "1":
            carrito.push(mother1);
            break;
          }
          Main();
          break;
          case "3":
          console.log(ram1);
          let ram = prompt("1-" + ram1.nombre +" Precio: " + ram1.precio);
          switch(ram){
            case "1":
            carrito.push(ram1);
            break;
          }
          Main();            
          break;
          case "4":
          console.log(psu1);
          let psu = prompt("1-" + psu1.nombre +" Precio: " + psu1.precio);
          switch(psu){
            case "1":
            carrito.push(psu1);
            break;
          }
          Main();                        
          break;
          case "5":
          console.log(gabinete1);
          let gabinete = prompt("1-" + gabinete1.nombre +" Precio: " + gabinete1.precio);
          switch(gabinete){
            case "1":
            carrito.push(gabinete1);
            break;
          }
          Main();                        
          break;
          case "6":
          console.log(almacenamiento1);
          let almacenamiento = prompt("1-" + almacenamiento1.nombre +" Precio: " + almacenamiento1.precio);
          switch(almacenamiento){
            case "1":
            carrito.push(almacenamiento1);
            break;
          }
          Main();                        
          break;
          case "7":
          console.log(vga1);
          let vga = prompt("1-" + vga1.nombre +" Precio: " + vga1.precio);
          switch(vga){
            case "1":
            carrito.push(vga1);
            break;
          }
          Main();                        
          break;
          case "8":
          console.log(disipador1);
          let disipador = prompt("1-" + disipador1.nombre +" Precio: " + disipador1.precio);
          switch(disipador){
            case "1":
            carrito.push(disipador1);
            break;
          }
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
          alert("No tenemos un mantenimiento con numero " + Seguimiento + "en nuestro registro");
          Main();
      }
  }

  function Cart(){




    for(let i = 0 ; i < carrito.length; i++){
        console.log("Productos:\n" + carrito[i])
}
  }

  function Carrito(){
    let sumatoria=0;
    if(carrito.length == 0){
        alert("Tu carrito esta vacio");
        Main();
    }else{
        for(let i = 0 ; i < carrito.length; i++){
          alert("Producto: "+carrito[i].nombre+"\nPrecio: "+carrito[i].precio);
          sumatoria=sumatoria+carrito[i].precio;
    }
    }
    alert("El total de su compra es de: "+sumatoria);
  }