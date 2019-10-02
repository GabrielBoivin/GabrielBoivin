var nombre = prompt("Veuillez entrer un nombre entier (celui-ci sera inversé)");

for (var position =  nombre.length; position >= 0; position --){
    var chiffre = nombre.charAt(position);
    document.writeln(chiffre);
}

// Fonctionne mais demander pour le modulo 