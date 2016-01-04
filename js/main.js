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
$('ul').on('click', '.check', function(){
  //$(this).parent('li')
  //$(this).css('text-decoration','line-through');
   $(this).parent('li').css('text-decoration','line-through');
  
});
$('ul').on('click', '.cross', function(){
   //$(this).hide();
   $(this).parent('li').hide();
});
});
