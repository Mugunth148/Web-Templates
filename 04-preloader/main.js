$(document).ready(function() {
	setTimeout(function() {
    $(".loader").fadeOut("slow");
	}, 400);
});
$(window).load(function() {
	$(".loader-inner").fadeOut();
});