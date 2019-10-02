var prix = 100;
var longueur;
var manche;
var composition;
var livraison = prix*0.15;

longueur = prompt("Veuillez entrer la longueur du manche.(la longueur doit être plus grande que zéro)");
manche = prompt("Veuillez choisir entre un gros manche ou un manche normal.(G ou N)");
composition = prompt("Veuillez choisir entre un bâton en érable, bouleau jaune ou mérisier.");

if (longueur > 33){
    prix += 25;
}

    else{
    prix += 0;
}

if (manche === "G || g"){
    prix += 10;
}

    else{
        prix += 0;
}

if (composition === "érable") {
    prix += 50;
}

else if(composition === "bouleau jaune"){
    prix += 55;
}

else{
    prix += 0;
}

alert("Votre bâton fait de : " + composition + "avec un" + manche + "et une longueur de " + longueur + "coûte " + Number(prix + livraison));