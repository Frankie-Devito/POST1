// Shell Page Pulsing Image
$(function(){
	$('#post').hide().fadeTo(3000, 1);
	setInterval(function(){
	$('#post').fadeTo(3000, 0.2);
	$('#post').fadeTo(3000, 1);
})
});
// Home Page Pulsing Image
$(function(){
	$('#p1').hide().fadeTo(3000, 1);
	setInterval(function(){
	$('#p1').fadeTo(3000, 0.2);
	$('#p1').fadeTo(3000, 1);
})
});
