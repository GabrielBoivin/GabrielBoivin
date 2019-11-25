$(document).ready(function () {
   $('.info').hide();
});

$('.derouler').click(function () {
    $(this).parent().find('.info').toggle();
});