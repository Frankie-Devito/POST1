// Shell Page Pulsing Image
$(function(){
	$('#post').hide().fadeTo(3000, 1);
	setInterval(function(){
	$('#post').fadeTo(3000, 0.2);
	$('#post').fadeTo(3000, 1);
})
});