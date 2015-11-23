$(document).ready(function(){

$('.add').click(function(){
	var x = $('.item').val();
	if( $('.item').val().trim().length == 0 ) {
				$('.error').show();
		} else {
	$('ul').append('<li><div class="check"></div>'+x+'<div class="cross"></div></li>');
	$('.item').val("");
	$('.error').hide();
}
})
$('.delete').click(function(){
	$('.item').val("");
})

$('.reset').click(function(){
	$('li').hide();
})
$('ul').on('click', 'li', function(){
  
  $(this).css('text-decoration','line-through');
   $(this).children('.check').css('text-decoration','line-through');
  
});
$('ul').on('click', 'li', function(){
   $(this).hide();
   $(this).children('.cross').hide();
});
});
