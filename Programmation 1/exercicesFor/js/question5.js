var nombre = 1;
var carre;
var cube;

for (nombre = 1; nombre <= 10; nombre ++){
    carre = nombre*nombre;
    cube = nombre*nombre*nombre;
    document.write("Le nombre " + nombre + " possède un carré de " + carre + " et un cube de " + cube +"<br>");
}