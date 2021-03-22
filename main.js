"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importamos las clases
var persona_1 = require("./persona");
//PUNTO 1
console.log("-------------------------------------------------");
console.log("--- PUNTO 1 (3 nuevos registros de personas) ---");
//Creamos a los tres nuevos contactos
//Persona 1
var persona0 = new persona_1.Persona("Ayelén", "Campos Hinojosa", 23, "12345678Z", "30 de julio", "Azul", "Mujer", [], [], [], "Le debo 12€ de la última comida.");
persona0.addDireccion("Calle Primado Reig", 3, 5, "A", 46019, "Valencia", "Valencia", 0);
persona0.addMail("Personal", "ayelencampos@gmail.com", 0);
persona0.addTelefono("Personal", 666777888, 0);
//Persona 2
var persona1 = new persona_1.Persona("Noa", "Fierro Mojica", 43, "11223344B", "22 de febrero", "Amarillo", "Otro", [], [], [], "Amigue de la mamá. ¡Acordarse de felicitarle!");
persona1.addDireccion("Plaza Mayor", 43, 15, "D", 46333, "Valencia", "Valencia", 0);
persona1.addMail("Personal", "noafierro@gmail.com", 0);
persona1.addTelefono("Personal", 678901234, 0);
//Persona 3
var persona2 = new persona_1.Persona("Guillermo", "Rivera López", 19, "99887766P", "28 de mayo", "Verde", "Hombre", [], [], [], "Preparar su regalo de cumpleaños.");
persona2.addDireccion("Calle Fernández de Leceta", 10, 12, "B", 46111, "Valencia", "Valencia", 0);
persona2.addMail("Personal", "guillerivlo@gmail.com", 0);
persona2.addTelefono("Personal", 612345678, 0);
//Mostramos los datos en la consola
persona0.mostrarPersona();
persona1.mostrarPersona();
persona2.mostrarPersona();
//PUNTO 2 y 3
console.log("-------------------------------------------------");
console.log("-------------------------------------------------");
console.log("-- PUNTO 2 y 3 (modificación registro por DNI) --");
console.log("-------------------------------------------------");
//Buscamos mediante DNI en los registros creados y en aquel que coincida con el DNI especificado, añadimos teléfono, mail y dirección.
//DATOS: dni // calle, número, piso, letra, código postal, población, provincia, posición dirección a añadir // tipo mail, dirección de correo, posición mail a añadir // tipo teléfono, número teléfono, posición teléfono a añadir
persona0.nuevosDatos("11223344B", "Calle Angoso", 16, 5, "C", 23591, "Darmsadt", "Hessen", 1, "Trabajo", "noafiemo@trabajo.com", 1, "Teléfono fijo", 333444555, 1);
persona1.nuevosDatos("11223344B", "Calle Angoso", 16, 5, "C", 23591, "Darmsadt", "Hessen", 1, "Trabajo", "noafiemo@trabajo.com", 1, "Teléfono fijo", 333444555, 1);
persona2.nuevosDatos("11223344B", "Calle Angoso", 16, 5, "C", 23591, "Darmsadt", "Hessen", 1, "Trabajo", "noafiemo@trabajo.com", 1, "Teléfono fijo", 333444555, 1);
//Separación
console.log("-------------------------------------------------");
//Mostramos los datos en la consola con los cambios realizados
persona0.mostrarPersona();
persona1.mostrarPersona();
persona2.mostrarPersona();
