//On positionne Flash en relative pour accéder aux déplacements X et Y
//Par défaut un élément est statique
$('#flashID').css("position","relative");

$('#boutonDroite').click(function() {
    $('#flashID').css("left","+=100px");
});

$('#boutonGauche').click(function() {
    $('#flashID').css("left","-=100px");
});

$('#boutonChangerImage').click(function (){
    var src =$('#flashID').attr('src');
    if(src === "img/Flash1.png"){
        $('#flashID').attr('src',"img/Flash2.png");
    }
    else{
        $('#flashID').attr('src',"img/Flash1.png")
    }

});

$('#boutonEnleverImage').click(function() {
    $('#flashID').hide();
});

$('#boutonAjouterImage').click(function() {
   $('#flashID').show();
});

$('#boutonAjouterAttribut').click(function(){
    var title1 =$('#flashID').attr('title');
    if(title1 != "Photo de Flash"){
        $('#flashID').attr('title',"Photo de Flash");
    }
    else{
        $('#flashID').attr('title',"")
}});

$('#boutonAjouterTitre').click(function(){
    var baby = $('#bb').prepend("<h1>Justice League</h1>");
    if (('#bb').prepend() === baby){
        $('#boutonAjouterTitre').attr('class',"disabled");
    }
}); // ?????

$('#boutonDupliquer').click(function(){
    $('#bb').append('<img id=\"flashID\" class=\"flashClass\" src=\"img/Flash1.png\" width=\"200px\"/>');
}); // ?????

$('#boutonRalentir').click(function(){
   // ?????
});

$('#boutonTeleport').click(function(){
    $('body').append('<img id=\"flashID\" class=\"flashClass\" src=\"img/Flash1.png\" width=\"200px\"/>');
});
var timer;
$('#boutonPerso1').click(function(){
     timer = setInterval(attaqueEclair, 20);
});
var compteur = 0;
    function attaqueEclair() {
        if (compteur <=128){
            $('#flashID').css("left", "+=10px");
        }
        compteur += 1;
            if (compteur >= 150) {
            $('#flashID').css("top", "+=5px");
            compteur += 1;
        }
        if (compteur >= 151) {
            $('#flashID').css("-left", "+=5px");
        }



    }