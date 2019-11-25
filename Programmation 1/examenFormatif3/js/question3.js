var base = prompt("Veuillez entrer la base désirée");
var exposantMaximal = prompt("Veuillez entrer l'exposant maximal de la base");


for (var i = 0;i <= exposantMaximal; i ++){
    var reponse = Math.pow(base, i);
    document.write(base + " exp " + i + " = " + reponse + "<br>");
}
