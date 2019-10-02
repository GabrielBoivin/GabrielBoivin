var jours = 1;
var montant = 0.01;
var sommaire = 0;


for (jours = 1; jours <= 10; jours ++){

    if (jours === 1){
        montant = 0.01;
        sommaire = 0.01;
    }

    else{
        montant = montant*2;
        sommaire += montant;
    }

   document.write("Jour # " + jours + " = " + montant + "$ de plus dans le compte banquaire et le sommaire est de " + sommaire + "$ <br>");
}

//sommaire ne fonctionne pas

