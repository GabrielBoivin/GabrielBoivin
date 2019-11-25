var noms = [];
var resultats = [];


for (var i = 1;i < 6; i ++){
    var name = prompt("Veuillez entrer le nom de l'élève #" + i);
    var note = prompt("Veuillez entrer le résultat de l'élève #" + i);
    noms.push(name);
    resultats.push(Number(note));
}

var moyenne = Number((resultats[0] + resultats[1] + resultats[2] + resultats[3] + resultats[4]) / 5);

for (i = 0 ; i < 6; i ++){
    if (resultats[i] > moyenne){
        noms[i];
        alert(noms[i] + " posséde une note plus grande que la moyenne de " + moyenne + " avec une note de " + resultats[i]);
    }
}









