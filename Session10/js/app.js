console.log('ejecutando java script desde un archivo externo')
/* variables - elementos que almacenan algun valor */
/* tipos de variables */

/* valores string - texto*/
var nombreVariable ="Devmaster";
var message="Hola esta vez soy una variable";

/* valores number - numero*/
var diasTrabajo =5;
var horasTrabajo=8;

/* valores decimales - numero*/
var porcentajeIGV=0.18;

/* imprimir en consola */
console.log(nombreVariable);
console.log(message);
console.log(diasTrabajo);
console.log(horasTrabajo);
console.log(porcentajeIGV);

/* Booleanos (true - false) */
var valorVerdad =true;
var valorFalse =false;

console.log(valorFalse);
console.log(valorVerdad);

/* Undefined - creo la variable pero no asigno valor */
var alumno;
console.log(alumno);

/* Null - no tiene valor se asigna manualmente */
var variableNull=null;
console.log(variableNull);

/* Arreglos - mas de un valor */
var alumnos=['Sergio','Katherine','Jeampiere'];
console.log(alumnos);
/* imprimir solo algun elemento */
console.log(alumnos[0]);
console.log(alumnos[2]);
/* saber la cantidad de elemntos del arreglo */
console.log(alumnos.length);

var animales=[];
animales.push['perro'];
animales.push['gato'];
animales.push['conejo'];
console.log(animales);

/* Objetc - va entre llaves */
var dato = {
    /* propiedad - valor */
    nombre:"Sergio Manuel",
    apellidos:'Carbajal Ramos',
    edad:'25 años',
    hijos:false
};

console.log(dato.nombre);

dato.domicilio="Av. 28 de julio";
console.log(dato);

/* agregar datos a las variables */
var miAuto = new Object;
miAuto.marca="Ford";
miAuto.modelo="Pustang"

console.log(miAuto);


var docente = [
    {   nombre:"Gian Franco",
        curso:"Base de Datos"},
    {   nombre:"Hervey",
        curso:"Algoritmo"  },
    {   nombre:"Jesús",
        curso:"Frontend"}
]
console.log(docente[1]);
/* llamar a un elemento */
console.log(docente[1].curso);











