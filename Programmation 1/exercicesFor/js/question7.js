var nombre = 1;
var compteur = 0;

for(nombre = 1; nombre <= 49; nombre += 2){
    compteur ++;
    document.writeln(nombre);

    if(compteur >= 5){

        compteur = 0;
        document.write("<br>");

    }
}

