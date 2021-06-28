
const ingreseNombre = prompt("Ingrese su nombre");
const ingreseApellido = prompt("Ingrese su apellido");
alert("Hola  " + ingreseNombre + " " + ingreseApellido + "!");

//let nombreIngresado = prompt ("¿Cuantos días tiene una semana?");

//if((nombreIngresado == "7") || (nombreIngresado == "Siete")  || (nombreIngresado == "SIETE")  || (nombreIngresado == "siete") ){
//   alert ("Correcto");
//}else{
//  alert ("Incorrecto.Pruebe de nuevo");
//}


//var dias =  ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

//for ( i = 0; i<=dias.length -1; i++ ){
//       console.log( dias[i] + "<br>");
//}

$(function(){
  $("input[type=radio]").click(function(){
    calcular();
  })
});

function calcular(){
  $radios = $("input[type=radio]:checked");
  $radios.each(function(){
      alert(1);
  })
}