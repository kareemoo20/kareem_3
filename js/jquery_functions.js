// Defaults for image rotator
var i = 1;
var max_hero = 3;
var curr_hero = "#hero_1";
var curr_nav = "#hero_nav_1";
var curr_copy = "#hero_info_1";
var interval = 0;

// on page load complete do some jQuery
$(document).ready(function() {
	
	$('a[rel*=facebox]').facebox();
	
	$('#facebox .icon_close').live('click', function() {
		$(document).trigger('close.facebox');
		return false;
	});
	
	$(document).bind('reveal.facebox', function() {
		$('.field input, .field textarea').focus(function() {
			$(this).parent().addClass("field_focus");
	        if ($(this).val() == this.defaultValue){
	        	$(this).val('');
	    	}
	        if ($(this).val() != this.defaultValue){
		    	$(this).select();
	        }
	    }).blur(function() {
	    	$(this).parent().removeClass("field_focus");
	        if ($(this).val() == ''){
	        	$(this).val(this.defaultValue ? this.defaultValue : '');
	    	}
	    });
	    $('.field').live('click', function() {
	    	$(this).find('input, textarea').focus();
	    });
	});
	
	$('.field input, .field textarea').focus(function() {
		var field = $(this).parents('.field:eq(0)');
		field.addClass("field_focus");
        if ($(this).val() == this.defaultValue){
        	$(this).val('');
    	}
        if ($(this).val() != this.defaultValue){
	    	$(this).select();
        }
    }).blur(function() {
    	var field = $(this).parents('.field:eq(0)');
    	field.removeClass("field_focus");
        if ($(this).val() == ''){
        	$(this).val(this.defaultValue ? this.defaultValue : '');
    	}
    });
    $('.field').live('click', function() {
    	$(this).find('input, textarea').focus();
    });
    
    $('.tabs .nav a').live('click', function() {
    	var this_tab = $($(this).attr('href'));
    	var tabs = $(this).parents('.tabs:eq(0)').find('.tab');
    	$(this).parents('.nav:eq(0)').find('a').not($(this)).removeClass('active');
    	$(this).addClass('active');
    	tabs.not(this_tab).hide();
    	this_tab.show();
    	return false;
    });
    
    $('.song_finder .handler').live('click', function() {
    	$(this).toggleClass('handler_closed');
    	$(this).parents('.song_finder:eq(0)').find('.content').slideToggle();
    });
    
    $('.store_item').hover(function() {
    	$(this).addClass('store_item_hover');
    }, function() {
    	$(this).removeClass('store_item_hover');
    });
    
    $('select.custom-select').sSelect();
    
    $('input[type=checkbox]').prettyCheckboxes();
    
    // Show the login menu when "Member Login" button is clicked
    $(".login").click(function(e) {
        e.preventDefault();
        $("#login_menu").toggle();
    });
    
    $('.free_song').hover(function(e) {
    	$(this).addClass('free_song_hover');
    }, function() {
    	$(this).removeClass('free_song_hover');
    });
    
    $('.free_song .play').hover(function(e) {
    	$(this).parents('.free_song:eq(0)').removeClass('free_song_hover');
    }, function() {
    	$(this).parents('.free_song:eq(0)').addClass('free_song_hover');
    });

    // Prevent mouse click in login menu from closing menu
    $("#login_menu").mouseup(function() {
        return false
    });
    
    // Mouse clicks anywhere on the page will close the login form if it is open
    $(document).mouseup(function(e) {
        if($(e.target).parent("a.login").length==0) {
            $("#login_menu").hide();
        }
    });
    
    // Hero Image Rotator
    $(curr_hero).add(curr_copy).show();
    $(curr_nav).addClass("active");
    interval = setInterval("rotate_hero()", 6000);
    
    $("#hero_nav a").bind('click', function(){
        i = parseInt($(this).attr("id").split("_")[2]) - 1;
        clearInterval(interval);
        rotate_hero();
        interval = setInterval("rotate_hero()", 6000);
        return false;
    });
    
    // Blog Drop Down
    $(".blog_target").bind('click', function(){
        $("#blog_drop, #blog_drop_top").toggle();
        $(this).toggleClass('down');
        $('div.blog_article').toggleClass('rounded');
        $('div#blog_select').toggleClass('dropped');
        return false;
    });
    
    // Song list clicks
    $("div#song_box div#song_nav a").bind('click', function(){
        var that = $(this);
        if (!(that.hasClass("active"))) {
            var target_list = that.attr("class");
            $("div#song_box a.active, div#song_box ul.active").removeClass("active");
            $("div#song_box div#song_nav a." + target_list + ", div#song_box ul." + target_list).addClass("active");
        }
        return false; 
    });
    
    $("#twitter_feed").tweet({
        username: "worshiptogether",
        count: 3,
        loading_text: "loading tweets..."
    });
});
    
function rotate_hero() {
    if (i < max_hero) {
        i++;
    } else {
        i = 1;
    }
    $(curr_hero).add(curr_copy).fadeOut('slow', function(){
        $(curr_nav).removeClass("active");
        curr_nav = $("#hero_nav_" + i);
        curr_hero = $("#hero_" + i);
        curr_copy = $("#hero_info_" + i);
        $(curr_nav).addClass("active");
        $(curr_hero).add(curr_copy).fadeIn('slow');
    });
}
function onPageLoaded() {
	Cufon.now();
	
   	$('#videos-scroll').customScroller();
   	$('#pane').customScroller();
}