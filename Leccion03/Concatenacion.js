var nombre = "Ricardo";
var apellido = "Quitian";
var nombreCompleto = (nombre + " " + apellido); /*Aqui estamos concatenando nombre + espacio en blanco + apellido*/
console.log (nombreCompleto)

var x = nombre + 2 + 4;  /*Todo se convierte a cadena*/
console.log (x)

x = nombre + (2+4); /*Cuando se separa por parentesis, le damos prioridad a lo que está en parentesis*/
console.log (x)

x = 2 + 4 + nombre /*Como J.S toma de izquierda a derecha, primero sumo los números y luego le concateno el texto*/
console.log (x) 