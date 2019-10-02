var appartement;
var assuranceAnnulation;
var prixFinal = 0;

appartement = prompt("Veuillez entrer votre choix d’appartement (A ou  B)");
assuranceAnnulation = Number(prompt("Veuillez entrer votre choix d’assurance (1, 2 ou 3)"));

if (assuranceAnnulation === 2){

    if (appartement === "A" || appartement === "a"){
        prixFinal += 433;
    }
    else{
            prixFinal += 570;
    }
}

else if(assuranceAnnulation === 3){

    if (appartement === "A" ||  appartement === "a"){
        prixFinal += 447;
    }

    else{
        prixFinal += 585;
    }
}

else{
    if (appartement === "A" || appartement === "a"){
        prixFinal += 425;
    }

    else{
        prixFinal += 560;
    }
}

alert("Le montant à payer est de : " + prixFinal);



    