var nombre = prompt("Introduzca su nombre");
var apellido1 = prompt("Introduzca su primer apellido");
var apellido2 = prompt("Introduzca su segundo apellido");

var nombreCompleto = nombre+apellido1+apellido2;

nombreCompleto.replace(" ","");
alert(nombreCompleto.length);
alert(nombre.toLowerCase()+" "+apellido1.toLowerCase()+" "+apellido2.toLowerCase());
alert(nombre.toUpperCase()+" "+apellido1.toUpperCase()+" "+apellido2.toUpperCase());

alert("Nombre:" +nombre+"\n"+
"Apellido 1:" +apellido1+"\n"+
"Apellido2:" +apellido2);

var usuario = nombre.toLowerCase()+apellido1.charAt(0).toLowerCase()+apellido2.charAt(0).toLowerCase();

alert(nombre+" "+apellido1+" " + apellido2 +" una propuesta sería " +usuario);

var usuario2 = nombre.slice(0,2).toLowerCase()+apellido1.slice(0,2).toLowerCase()+apellido2.slice(0,2).toLowerCase();

alert(nombre+" "+apellido1+" " + apellido2 +" otra propuesta sería " +usuario2);