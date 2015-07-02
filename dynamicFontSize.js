// Thank You For Using This Script
// You're allowed to rewrite, share or do whatever you want with it 
// It is pretty straight forward but if you've questions you can mail me:danielresch8@gmail.com



	
	
	// Adjust To YOUR Needs
	var baseWidth = 1000; // replace with the width you like to style it in px with
	var minFontSize = 10; // min font-size in px
	var maxFontSize = 48; // max font-size in px
	
	var excludeSelectors = '#items *';
	
	
	$(document).ready(function(e) {
        DynamicFontSize.init();
    }); 
	

var DynamicFontSize = {

	
	init: function()
	{	

		// if there's a Ajax Loader show loader and hide until done 
		$('#wrapper').hide();
		$('.ajax-loader').show();
		
		// Add the BaseFont Size Param to all px DOM Elements
		$('*').each(function(index, element) {
            
			
			
			if( $(this).is(excludeSelectors) ) {}
			else
			 {
			// Check if px -> otherwise leave as is 
				if( $(this).css('font-size') != null) 
				{
					$(this).attr('base-fontsize',$(this).css('font-size')); 
				}
			 }
			
			
        });
		
		
		// Bind to Event Handler
		$(window).off('resize').resize(function() 
		{
				var size_old;
				var size_new;
				
				DynamicFontSize.resize();
		});
		
		// Do it Once
		DynamicFontSize.resize();

		
		$('.ajax-loader').hide();
		$('#wrapper').show();
		
	},
	resize: function() 
	{
				
			$('[base-fontsize]').each(function(index, element) {
				
				// Calculate New Font Size 
                size_old = $(this).attr('base-fontsize'); 
				size_new = size_old.replace('px','')*$(window).width()/baseWidth;  
				
				// Basic Filter
				if(size_new < minFontSize) size_new = minFontSize; 
				else if(size_new > maxFontSize) size_new = maxFontSize; 
				
				$(this).css('font-size',size_new+'px');  
            });

	}
}
