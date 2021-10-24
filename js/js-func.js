$(function(){ 
	
	//PNG fix for IE6
	if($.browser.msie && $.browser.version.substr(0,1) == 6) {
		DD_belatedPNG.fix('.gallery-b, .ui-slider-handle, .dd-t, .dd, .dd-b, .divOScrollerBarCursor-Right, .divOScrollerBarCursor span');
	}
	
	$('.custom-checkbox').prettyCheckboxes({
		checkboxWidth: 14, // The width of your custom checkbox
		checkboxHeight: 14, // The height of your custom checkbox
		display: 'inline' // The style you want it to be display (inline or list)
	});
	
	//Blink Fields
	$('.blink').
	    focus(function() {
	        if(this.title==this.value) {
	            this.value = '';
	        }
	    }).
	    blur(function(){
	        if(this.value=='') {
	            this.value = this.title;
	        }
	    });
	//Gallery Hover Effect
	$('.gallery-content ul li').hover(function(){
		$(this).find('.image-hover').show();
	},
	function(){
		$(this).find('.image-hover').hide();
	});
	
	
	//Category button menu
	$('.category a').eq(0).click(function(){
		$('.category').find('.dd-holder').slideDown();	
	});
	
	$('.dd-holder').mouseleave(function(){
		$(this).slideUp();
	});
	
	$('.dd ul li a').click(function(){
		$('.dd-holder').slideUp();
	});
	
	//Set Width Gallery list
	
	var gallery_li = $('.gallery-content ul li').outerWidth(true);
	var count_gallery_li = $('.gallery-content ul li').length;
	var total_width = ((count_gallery_li*gallery_li)/4);
	$('.gallery-content ul').css("width",total_width);
	
	$('.gallery-content').customScroller();
	
	//Set Scroll Button Width 
	var new_scroll_width = ($('.divOScrollerBarCursor').width() - 30);
	$('.divOScrollerBarCursor span').css("width", new_scroll_width);

});




