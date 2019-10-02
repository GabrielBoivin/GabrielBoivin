var nom = prompt ("Veuillez entrer un nom quelconque (celui-ci sera inversé)");

for (var position =  nom.length; position >= 0; position --){
    var caractere = nom.charAt(position);
    document.writeln(caractere);
}

