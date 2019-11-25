var tab = [];
var random;
var miseInitiale = 1;
var banque = 1000;
var conditionSortie = 2000;
var nbDefaites = 0;
var nbMaxDefaites = 0;
var miseActuelle = 1;

for (var i = 0; i <= 10; i++) {
    random = Math.floor(Math.random() * 2);
    tab.push(random);


    if (tab[i] === 0) {
        miseActuelle = miseActuelle * 2;
        nbDefaites ++;
        if (nbDefaites > nbMaxDefaites) {
            nbMaxDefaites = nbDefaites;
            document.write("Perdu <br>");
        }
    }
    else if (tab[i] === 1) {
        banque += miseActuelle;
        miseInitiale = 1;
        nbDefaites = 0;
        miseActuelle = 1;
        document.write("Gagné <br>");
    }
    if (miseActuelle > banque) {
        document.write("Vous n'avez plus d'argent, vous avez perdu.");
    }
    document.write("Banque = " + banque + "<br>");
    document.write("Random = " + tab[i] + "<br>");
    document.write("Mise actuelle = " + miseActuelle + "<br><br>");
}
document.write("Le nombre de défaites consécutives est de " + nbMaxDefaites);


