var tab = [];

for (var i = 0;i < 10; i ++){
    for (var j = 0; j < 12; j ++){
        var nb = (Math.floor(Math.random() * 2));
        tab.push(nb);
        document.write(tab[j]);
    }
    document.write("<br>");
    tab = [];
}











