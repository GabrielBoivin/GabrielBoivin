$(document).bind('keypress', function(event) {
    if(event.keyCode==13){ // Code du Enter = 13
        $('#boutonGo').trigger('click'); // Trigger clique du bouton quand on appuie sur la touche enter
    }
});


function printElem(divId) {
    let content = document.getElementById("imprimer").innerHTML;
    let mywindow = window.open('', 'Print', 'height=600,width=800');

    mywindow.document.write('<html><head><title>Print</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write(content);
    mywindow.document.write('</body></html>');

    mywindow.document.close();
    mywindow.focus();
    mywindow.print();
    mywindow.close();
    return true;
}

$('#boutonGo').click(function () {
    let nom = $('#input').val();
    let longueurMot = nom.length;

    if (longueurMot >= 3 && longueurMot <= 12) {
        for (let i = 0; i < nom.length; i++) { // Boucle tant que plus petit que longueur du mot
            let imageDiv = $('#image' + i); //image1, image2, etc. (id de mes colonnes)
            let col;

            switch(longueurMot) {
                case 3:         // si longueur mot = 3, col-4
                    col = "4";
                    break; // stop
                case 4:         // si longueur mot = 4, col-3
                    col = "3";
                    break;
                case 5:
                case 6:         // si longueur mot = 5 ou 6, col-2
                    col = "2";
                    break;
                default:        // sinon... col-1
                    col = "1"
            }

            imageDiv.attr("class", "col-" + col);

            $('#image' + i +' > img').attr("src", "Letters/" + nom[i].toUpperCase() + "/" + nom[i].toUpperCase() + "1.jpg");

            if (nom[i] === "*"){
                $('#image' + i +' > img').attr("src", "Letters/CS/CS1.jpg");
            }

            imageDiv.show(); // montre images jusqu'à la longueur totale du mot entré
        }
        for (let i = nom.length; i <= 12; i++) {
            let imageDiv = $('#image' + i);
            imageDiv.hide(); // cache les images à partir de la longueur du mot
            $('#image' + i +' > img').attr("src", "");
            imageDiv.attr("class", "col");
        }
    } else {
        alert("Veuillez entrer un mot entre 3 et 12 caractères"); // message d'erreur

    }
});

$('#blanc').click(function () {
    $('.bg').css("background-image","url(background/blanc.jpg");
});

$('#bleu').click(function () {
    $('.bg').css("background-image","url(background/bleu.jpg");
});


$('#bleuFonce').click(function () {
    $('.bg').css("background-image","url(background/bleuFonce.jpg");
});


$('#gris').click(function () {
    $('.bg').css("background-image","url(background/gris.jpg");
});


$('#noir').click(function () {
    $('.bg').css("background-image","url(background/noir.jpg");
});


$('#rose').click(function () {
    $('.bg').css("background-image","url(background/rose.jpg");
});


$('#rouge').click(function () {
    $('.bg').css("background-image","url(background/rouge.jpg");
});











