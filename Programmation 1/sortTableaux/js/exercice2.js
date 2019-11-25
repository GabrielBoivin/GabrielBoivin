var tabCours = ["INFORMATIQUE","ADMINISTRATION","HISTOIRE","GÉNIE","GÉOGRAPHIE","BUREAUTIQUE"];
var cours= prompt("Entrez le cours de votre choix");
var trouver = false;
for (var i = 0; i < 6; i++) {
    cours = cours.toUpperCase();
    if (tabCours[i] === cours) {
        alert("Le collège offre cette option");
        trouver= true;
    }

}
if(trouver === false){
    alert("Le collège n'offre pas cette option");
}





