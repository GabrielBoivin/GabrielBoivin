var imageId1;
var imageId2;
var imageSrc1;
var imageSrc2;
var click = 1;

$('#boutonTricher').click(function(){
    for(var i = 1; i <= 9; i ++){
        $('#image' + i).attr("src","images/"+ i +".jpg");
    }
});

$('#boutonRecommencer').click(function () {
   var tabRandom =  ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg"];
    for(var i = 0; i < tabRandom.length ; i ++){
        var e = Math.floor(Math.random()* 9);

    }
});

$('.img-fluid').click(function(){
    if (click === 1){
    imageId1 = $(this).attr("id");
    imageSrc1 = $(this).attr("src");
    click = 2;
    }
    else if (click === 2){
        imageId2 = $(this).attr("id");
        imageSrc2 = $(this).attr("src");

        $('#' + imageId1).attr("src", imageSrc2);
        $('#' + imageId2).attr("src", imageSrc1);
        click = 1;
    }
});

