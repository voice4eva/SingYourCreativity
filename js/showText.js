$(document).ready(function(){
	// select all divs with show-more
	$('.show-more').each(function(event){
		// start with char max
		var initialMax = 200;
		// check for text longer than textMax and apply html changes
		if($(this).html().length > initialMax){
			/* split text into two parts */
			var textShort = $(this).html().substr(0,initialMax);
			var textLong	= $(this).html().substr(initialMax);

			/* ---------
			// add show-more class
			// hide more-text and show-less classes
			----------*/
			$(this).html(textShort+
						 '<a href="#" class="show-more"><br/>[+]</a>'+
						 '<span class="more-text" style="display:none;">'+textLong+'</span>'+
			 						 '<a href="#" class="show-less" style="display:none;"><br/>[-]</a>');

			// Show all text when show-more is clicked
			$(this).find('a.show-more').click(function(event){
				event.preventDefault();
				$(this).hide();
				$(this).parents('.show-more').find('.more-text').show();
				$(this).parents('.show-more').find('.show-less').show();

			});

			// Hide the extra text when show-less is clicked
			$(this).find('a.show-less').click(function(event){
				event.preventDefault();
				$(this).hide();
				$(this).parents('.show-more').find('.more-text').hide();
				$(this).parents('.show-more').find('.show-more').show();
			});

		}

	});


});
