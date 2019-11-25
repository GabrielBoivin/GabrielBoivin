var tab = [];
var min = 9999999999999999;
var nbMax = -9999999999999999;

for (var i = 0; i < 10; i ++){
    var nombres = prompt("Veuillez entrer 10 nombres");
    tab.push(Number(nombres));

}

for (var j = 0; j < 10; j ++){

    if(min > tab[j]){
        min = tab[j];
    }

    if (nbMax < tab[j]){
        nbMax = tab[j];
    }

}

document.write("Le nombre minimum est : " + min + "<br>");
document.write("Le nombre maximum est : " + nbMax + "<br>");




