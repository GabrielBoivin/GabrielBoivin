var nombre = 1;
var nbLignes = 4;
var nbColonnes = 4;

for (var i = 0; i < nbLignes; i ++){
    for (var j = 0; j < nbColonnes; j ++){
        document.write(nombre + " ");
        nombre *=2;
    }
    document.write("<br>");
}

