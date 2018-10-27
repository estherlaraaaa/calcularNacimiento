var persona = {
    nombre: "Esther",
    apellido: "Lara",
    fechaNaci: new Date(1998, 7, 28)
};

//Algoritmo de cálculo de edad.
function getAge(fechaNaci) {
    var hoy = new Date(Date.now());
    var edad = hoy.getUTCFullYear() - fechaNaci.getUTCFullYear();

    if (hoy.getMonth() > fechaNaci.getMonth()) {

    } else if (hoy.getMonth() == fechaNaci.getMonth()) {
        if (hoy.getDate() >= fechaNaci.getDate()) {

        } else {
            var edad = hoy.getUTCFullYear() - fechaNaci.getUTCFullYear();
            edad--;
        }
    } else {
        edad--;
    }
    return edad;

}

alert("Fecha de nacimiento: " + persona.fechaNaci.getDate() + "/" + (persona.fechaNaci.getMonth() + 1) + "/" + persona.fechaNaci.getUTCFullYear() + " (dd/mm/yyyy)");
alert("Edad: " + getAge(persona.fechaNaci) + " años");