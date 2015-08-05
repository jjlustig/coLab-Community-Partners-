
//Dropdown jquery//
$(document).ready(function(){
    $("section").click(function(){
        $("#big").slideToggle('slow','swing');
    });
});

//Javascript for hover//

$(document).ready(function(){ 
    $('button').mouseenter(function () { 
        $(this).fadeTo('fast',0.5); 
    }); 
    $('button').mouseleave(function () { 
        $(this).fadeTo('fast',1); 
    }); 
}); 


//Have Partners FadeOut intially, then class reappear when button clicked// 
$(document).ready(function(){ 
	$('button').click(function (){ 
		$(".partner").fadeOut("fast");
			if(this.id == "sort-all") { 
				$(".partner").fadeIn("slow")
			}
			else if (this.id == "sort-food") { 
				$(".restaurant").fadeIn("slow") 
			}
			else if (this.id == "sort-arts") { 
				$(".arts").fadeIn("slow")
			}
			else if (this.id =="sort-business") { 
				$(".business").fadeIn("slow") 
			}
			else if (this.id == "sort-evanston") { 
				$(".evanston").fadeIn("slow") 
			}
	});
}) 


    