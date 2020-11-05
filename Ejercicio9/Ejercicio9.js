let precioIng;
let precioFin;

precioIng = Number(prompt("Ingrese valor del producto sin IVA: "));

precioFin = precioIng * 0.19 + precioIng;

console.log("El valor del producto con IVA: "+precioFin);
alert("El valor del producto con IVA: "+precioFin);
document.write("El valor del producto con IVA: "+precioFin);