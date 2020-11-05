let nombre;
let valorhora;
let horaTrab;
let sueldo;

nombre = String(prompt("Digite un nombre del empleado: "));
horaTrab = Number(prompt("Digite horas trabajadas: "));
valorhora = Number(prompt("Digite valor de la hora: "));

sueldo = horaTrab*valorhora;

alert("El empleado: "+nombre+", sueldo: "+sueldo);
console.log("El empleado: "+nombre+", sueldo: "+sueldo);
document.write("El empleado: "+nombre+", sueldo: "+sueldo);