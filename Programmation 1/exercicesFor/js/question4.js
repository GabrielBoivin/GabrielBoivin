var montant = 5;
var taxe;
var montantFinal;

for (montant = 5; montant <= 100; montant += 5){
    taxe = montant*0.09;
    montantFinal = montant+taxe;
    document.write("Le coût est de " + montant + "$ et avec la taxe de 9% du montant ("+ taxe + "$), le montant monte à " + montantFinal + "$ <br>" );
}
