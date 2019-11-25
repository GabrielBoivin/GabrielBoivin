var nombre = 1;
var nombreEspaces = 1;
var lignes = 5;
var colonnes = 4;

for(var i = 0; i < lignes; i ++){
    for (var j = 0; j < colonnes; j ++){
        if (j === 0){
            for (var k = 0;  k < nombreEspaces; k ++){
                document.write(".");
            }
            nombreEspaces ++;
        }
        document.write(nombre + " ");
        nombre ++;
    }
    document.write("<br>");
    nombre --;
    nombre *= 2;
}
