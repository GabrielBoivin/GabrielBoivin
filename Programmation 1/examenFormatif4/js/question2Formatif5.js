var nbLignes = 7;
var nbColonnes = 6;
var nb = 0; // Quel est le premier nombre de l'exercice
var espaces = 30;

for (var i = 0; i < nbLignes; i ++){                   //Toujours lignes en premier (avec une var. i),colonnes en deuxième (avec une var. j)
    for (var j = 0; j < nbColonnes; j ++){
        if (j === 0){
            for (var k = 0; k < espaces; k ++){
                document.write(".");
            }
            espaces -= 5;
        }
        document.write(nb + " ");
        nb += 10;
    }
    document.write("<br>");
    nb -= 10;
    nb *= 2;
}

